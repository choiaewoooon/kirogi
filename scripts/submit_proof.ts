/**
 * Kirogi proof worker.
 *
 * Takes a remittance transaction on a source chain, waits for Attestcoin to attest the block
 * it landed in, pulls the inclusion proof, and hands it to KirogiASC on Creditcoin.
 *
 *   npx tsx scripts/submit_proof.ts <sourceTxHash> [--action 1] [--chain-key 1] [--fixture name]
 *   (Ethereum mainnet: --action 2 --chain-key 3 — reads MAINNET_RPC)
 *   npx tsx scripts/submit_proof.ts --chains        # list what Attestcoin can read today
 *
 * `--fixture` caches the proof to fixtures/<name>.json. Tests replay those offline, which keeps
 * the ~8-10 minute attestation wait and the 9-queries-per-day faucet budget out of the dev loop.
 */
import "dotenv/config";
import { writeFile } from "node:fs/promises";
import { Contract, JsonRpcProvider, Wallet, toUtf8String } from "ethers";
import { chainInfo, proofProvider } from "@gluwa/usc-sdk";

const env = (k: string, fallback?: string): string => {
  const v = process.env[k] ?? fallback;
  if (!v) throw new Error(`missing env: ${k}`);
  return v;
};

const CC3_RPC = env("CC3_RPC", "https://rpc.cc3-testnet.creditcoin.network");
const SEPOLIA_RPC = env("SEPOLIA_RPC", "https://ethereum-sepolia-rpc.publicnode.com");
const PROVER_API = env("PROVER_API", "https://prover.cc3-testnet.creditcoin.network");

const ASC_ABI = [
  "function execute(uint8 action, uint64 chainKey, uint64 blockHeight, bytes encodedTransaction, bytes32 merkleRoot, (bytes32 hash, bool isLeft)[] siblings, bytes32 lowerEndpointDigest, bytes32[] continuityRoots) returns (bool)",
  "event RemittanceSettled(bytes32 indexed queryId, bytes32 indexed beneficiaryId, address indexed sender, uint256 amount, uint16 purposeCode)",
];

const argOf = (flag: string): string | undefined => {
  const i = process.argv.indexOf(flag);
  return i === -1 ? undefined : process.argv[i + 1];
};

/** The ChainInfo precompile returns names as hex-encoded bytes, not strings. */
function decodeChainName(raw: string): string {
  try {
    return toUtf8String(raw);
  } catch {
    return raw;
  }
}

async function listChains(cc3: JsonRpcProvider) {
  const provider = new chainInfo.PrecompileChainInfoProvider(cc3);
  const chains = await provider.getSupportedChains();
  console.log("Attestcoin source chains currently readable from this Creditcoin network:");
  for (const c of chains) {
    console.log(`  chainKey ${c.chainKey}  ${decodeChainName(c.chainName)}  (evm chainId ${c.chainId})`);
  }
  console.log(
    "\nNothing here is hardcoded in KirogiASC — each entry maps to a registered source config,\n" +
      "so a chain Creditcoin adds later is a configureSource() call, not a rewrite."
  );
  return chains;
}

async function main() {
  const cc3 = new JsonRpcProvider(CC3_RPC);

  if (process.argv.includes("--chains")) {
    await listChains(cc3);
    return;
  }

  const txHash = process.argv[2];
  if (!txHash?.startsWith("0x")) {
    throw new Error("usage: submit_proof.ts <sourceTxHash> [--action N] [--fixture name]");
  }
  const action = Number(argOf("--action") ?? 1);
  const chainKey = Number(argOf("--chain-key") ?? env("CHAIN_KEY_SEPOLIA", "1"));
  const sourceRpc = chainKey === 3 ? env("MAINNET_RPC", "https://ethereum-rpc.publicnode.com") : SEPOLIA_RPC;
  const fixtureName = argOf("--fixture");

  // 1. Confirm the source chain is actually enabled before spending anything.
  const supported = await new chainInfo.PrecompileChainInfoProvider(cc3).getSupportedChains();
  if (!supported.some((c: { chainKey: number }) => Number(c.chainKey) === chainKey)) {
    throw new Error(
      `chainKey ${chainKey} is not attested by this network. Readable: ${supported
        .map((c: { chainKey: number }) => c.chainKey)
        .join(", ")}`
    );
  }

  // 2. Find the block the remittance landed in.
  const source = new JsonRpcProvider(sourceRpc);
  const tx = await source.getTransaction(txHash);
  if (!tx?.blockNumber) throw new Error(`source tx not mined yet: ${txHash}`);
  console.log(`source tx in block ${tx.blockNumber}`);

  // 3. Wait for the attestor set to reach it. This is the slow step (~8-10 min in practice):
  //    attestors follow finalized blocks and publish roughly every two minutes.
  const builder = new proofProvider.service.ProofBuilder(chainKey, PROVER_API);
  console.log("waiting for attestation…");
  await builder.waitUntilHeightAttested(chainKey, tx.blockNumber);
  console.log("attested");

  // 4. Proofs are generated off-chain and verified on-chain.
  const { data: proof } = await builder.getProof(txHash);
  if (!proof) throw new Error(`prover returned no proof for ${txHash}`);
  console.log(
    `proof: header ${proof.headerNumber}, txIndex ${proof.txIndex}, ` +
      `${proof.merkleProof.siblings.length} merkle siblings, ` +
      `${proof.continuityProof.roots.length} continuity roots`
  );
  if (proof.continuityProof.roots.length > 100) {
    console.warn(
      "  ! long continuity chain: this block fell behind the attestation window and the\n" +
        "    verification will cost roughly an order of magnitude more gas."
    );
  }

  if (fixtureName) {
    const path = `fixtures/${fixtureName}.json`;
    // forge's JSON cheatcodes cannot walk `[*]`, so publish flat sibling arrays too.
    const cached = {
      sourceTxHash: txHash,
      ...proof,
      merkleProof: {
        ...proof.merkleProof,
        siblingHashes: proof.merkleProof.siblings.map((s: { hash: string }) => s.hash),
        siblingIsLeft: proof.merkleProof.siblings.map((s: { isLeft: boolean }) => s.isLeft),
      },
    };
    await writeFile(path, JSON.stringify(cached, null, 2));
    console.log(`cached ${path}`);
  }

  const ascAddress = process.env.KIROGI_ASC;
  if (!ascAddress) {
    console.log("\nKIROGI_ASC not set — stopping after proof generation.");
    return;
  }

  // 5. Verify and settle in a single Creditcoin transaction.
  const wallet = new Wallet(env("PRIVATE_KEY"), cc3);
  const asc = new Contract(ascAddress, ASC_ABI, wallet);
  const sent = await asc.execute(
    action,
    proof.chainKey,
    proof.headerNumber,
    proof.txBytes,
    proof.merkleProof.root,
    proof.merkleProof.siblings,
    proof.continuityProof.lowerEndpointDigest,
    proof.continuityProof.roots
  );
  console.log(`submitted ${sent.hash}`);
  const receipt = await sent.wait();
  console.log(`settled in block ${receipt?.blockNumber} (gas ${receipt?.gasUsed})`);
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
