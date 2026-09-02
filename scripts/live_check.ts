/**
 * Run a proof through the *real* BlockProver precompile without spending gas.
 *
 *   npx tsx scripts/live_check.ts fixtures/full-flow-failed.json [more.json…]
 *
 * forge cannot do this: its EVM has only the standard precompiles, so 0x0FD2 is an empty
 * account there and the unit tests have to mock it. `eth_call` on a Creditcoin node executes
 * the genuine verifier and KirogiASC's checks after it, and returns the exact revert the chain
 * would produce. Nothing is mocked; nothing is written.
 */
import "dotenv/config";
import { readFile } from "node:fs/promises";
import { Interface, JsonRpcProvider } from "ethers";
import { proofProvider } from "@gluwa/usc-sdk";

const ASC = new Interface([
  "function execute(uint8 action, uint64 chainKey, uint64 blockHeight, bytes encodedTransaction, bytes32 merkleRoot, (bytes32 hash, bool isLeft)[] siblings, bytes32 lowerEndpointDigest, bytes32[] continuityRoots) returns (bool)",
  "error UnknownSource(uint8 action)",
  "error UnsupportedTxType(uint8 txType)",
  "error SourceTransactionFailed()",
  "error NoCanonicalTransfer()",
  "error NoRemittanceEvent()",
  "error AmountMismatch(uint256 tokenAmount, uint256 claimedAmount)",
  "error SenderMismatch(address tokenFrom, address claimedSender)",
  "error PoolNotSet()",
  "error NoSettlementPartner(bytes32 beneficiaryId)",
  "error InsufficientLiquidity(uint256 requested, uint256 available)",
  "error PurposeNotAllowed(bytes32 beneficiaryId, uint16 purposeCode)",
  "error Error(string)",
]);

export type Proof = {
  chainKey: number; headerNumber: number; txBytes: string;
  merkleProof: { root: string; siblings: { hash: string; isLeft: boolean }[] };
  continuityProof: { lowerEndpointDigest: string; roots: string[] };
};

export function encodeExecute(action: number, p: Proof) {
  return ASC.encodeFunctionData("execute", [
    action, p.chainKey, p.headerNumber, p.txBytes, p.merkleProof.root,
    p.merkleProof.siblings, p.continuityProof.lowerEndpointDigest, p.continuityProof.roots,
  ]);
}

/** Describe what the chain said: "ok" or the decoded revert. */
export function explain(err: unknown): { ok: false; reason: string; selector?: string } {
  const data: string | undefined = (err as { data?: string })?.data ?? (err as { info?: { error?: { data?: string } } })?.info?.error?.data;
  if (typeof data === "string" && data.startsWith("0x") && data.length >= 10) {
    try {
      const d = ASC.parseError(data);
      if (d) return { ok: false, reason: `${d.name}(${d.args.map(String).join(", ")})`, selector: data.slice(0, 10) };
    } catch { /* not one of ours */ }
    return { ok: false, reason: `unknown revert ${data.slice(0, 10)}`, selector: data.slice(0, 10) };
  }
  return { ok: false, reason: (err as Error)?.message?.split("\n")[0] ?? String(err) };
}

/** eth_call execute() against the live ASC. Returns ok:true or the decoded revert. */
export async function dryRun(rpc: JsonRpcProvider, asc: string, from: string, action: number, p: Proof) {
  try {
    await rpc.call({ to: asc, from, data: encodeExecute(action, p) });
    return { ok: true as const, reason: "would settle" };
  } catch (e) {
    return explain(e);
  }
}

async function main() {
  const files = process.argv.slice(2).filter((a) => a.endsWith(".json"));
  if (!files.length) throw new Error("usage: live_check.ts <fixture.json>…");
  const rpc = new JsonRpcProvider(process.env.CC3_RPC ?? "https://rpc.cc3-testnet.creditcoin.network");
  const asc = process.env.KIROGI_ASC!; const from = process.env.DEPLOYER_ADDRESS!;
  console.log(`eth_call → KirogiASC ${asc} on Creditcoin CC3 (real BlockProver at 0x0FD2)\n`);
  const prover = process.env.PROVER_API ?? "https://prover.cc3-testnet.creditcoin.network";
  for (const f of files) {
    const cached = JSON.parse(await readFile(f, "utf8")) as Proof & { sourceTxHash?: string };
    // A cached proof stops matching once the attestation frontier crosses a checkpoint, so the
    // continuity chain must be rebuilt at check time. Same reason the worker never reuses one.
    let p: Proof = cached, note = "cached bytes";
    if (cached.sourceTxHash) {
      const { data } = await new proofProvider.service.ProofBuilder(cached.chainKey, prover).getProof(cached.sourceTxHash);
      if (data) { p = data as unknown as Proof; note = `fresh proof, ${p.continuityProof.roots.length} roots`; }
    }
    const t0 = Date.now();
    const r = await dryRun(rpc, asc, from, 1, p);
    console.log(`${f.padEnd(34)} ${(r.ok ? "OK    " : "REJECT")} ${r.reason}${r.selector ? `  [${r.selector}]` : ""}  (${note}, ${Date.now() - t0}ms)`);
  }
}

if (process.argv[1]?.endsWith("live_check.ts")) {
  main().catch((e) => { console.error(e instanceof Error ? e.message : e); process.exit(1); });
}
