// Pull a real, already-attested Sepolia transaction and cache its proof as a test fixture.
// No faucet, no deployment, no waiting: the prover API is public and the history already exists.
const SEPOLIA = process.env.SEPOLIA_RPC ?? "https://ethereum-sepolia-rpc.publicnode.com";
const PROVER = "https://prover.cc3-testnet.creditcoin.network";
const USDC = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"; // Circle canonical, Sepolia
const TRANSFER = "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
const CHAIN_KEY = 1;

const rpc = async (method, params) => {
  const r = await fetch(SEPOLIA, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
  });
  const j = await r.json();
  if (j.error) throw new Error(`${method}: ${j.error.message}`);
  return j.result;
};

const attested = Number(
  (await (await fetch(`${PROVER}/api/v1/attested-height/${CHAIN_KEY}`)).json()).attestedHeight
);
console.log(`attested height: ${attested}`);

// Stay well behind the attestation frontier so the proof is definitely available.
let logs = [];
let to = attested - 50;
for (let span = 0; span < 6 && logs.length === 0; span++) {
  const from = to - 400;
  logs = await rpc("eth_getLogs", [{
    address: USDC,
    topics: [TRANSFER],
    fromBlock: "0x" + from.toString(16),
    toBlock: "0x" + to.toString(16),
  }]);
  if (logs.length === 0) to = from - 1;
}
if (logs.length === 0) throw new Error("no canonical USDC transfers found in scanned range");

const ZERO = "0x" + "0".repeat(64);
// Prefer a plain wallet-to-wallet transfer: mints/burns have a zero party and make a
// poor decoder fixture because the settlement treasury can never be address(0).
const log =
  logs.filter((l) => l.topics[1] !== ZERO && l.topics[2] !== ZERO).pop() ?? logs[logs.length - 1];
console.log(`picked tx ${log.transactionHash} in block ${parseInt(log.blockNumber, 16)}`);

const res = await fetch(`${PROVER}/api/v1/proof-by-tx/${CHAIN_KEY}/${log.transactionHash}`);
if (!res.ok) throw new Error(`prover ${res.status}: ${await res.text()}`);
const proof = await res.json();

const receipt = await rpc("eth_getTransactionReceipt", [log.transactionHash]);
const out = {
  note: "Real Sepolia USDC transfer + Attestcoin proof. Captured once; replayed offline in tests.",
  capturedAtAttestedHeight: attested,
  chainKey: proof.chainKey,
  headerNumber: proof.headerNumber,
  txIndex: proof.txIndex,
  txHash: proof.txHash,
  txBytes: proof.txBytes,
  merkleProof: proof.merkleProof,
  continuityProof: proof.continuityProof,
  expected: {
    token: USDC,
    from: "0x" + log.topics[1].slice(26),
    to: "0x" + log.topics[2].slice(26),
    value: BigInt(log.data).toString(),
    receiptStatus: parseInt(receipt.status, 16),
  },
};
await (await import("node:fs/promises")).writeFile(
  "fixtures/usdc-transfer.json",
  JSON.stringify(out, null, 2)
);
console.log("wrote fixtures/usdc-transfer.json");
console.log("  from  :", out.expected.from);
console.log("  to    :", out.expected.to);
console.log("  value :", out.expected.value);
console.log("  status:", out.expected.receiptStatus);
console.log("  txBytes length:", out.txBytes.length);
