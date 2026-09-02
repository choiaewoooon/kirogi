/**
 * Send a batch of remittances on the source chain, some of which are meant to fail.
 *
 *   npx tsx scripts/remit.ts --ok 7 --fail 3 [--amount 1] [--out fixtures/batch.json]
 *
 * The failing ones ask for more USDC than the wallet holds, so `transferFrom` reverts. They are
 * sent with a manual gas limit so the node still includes them: a reverted remittance is a
 * transaction that is *in a block* but did *not succeed* — exactly the case Attestcoin can prove
 * and KirogiASC must refuse. Everything is sent one at a time; the approve/remit race that bit
 * the first run is not worth the minute it would save.
 */
import "dotenv/config";
import { writeFile } from "node:fs/promises";
import { Contract, JsonRpcProvider, Wallet, parseUnits } from "ethers";

const env = (k: string, fb?: string) => {
  const v = process.env[k] ?? fb;
  if (!v) throw new Error(`missing env: ${k}`);
  return v;
};
const argOf = (f: string, fb: string) => {
  const i = process.argv.indexOf(f);
  return i === -1 ? fb : process.argv[i + 1];
};

const OK = Number(argOf("--ok", "7"));
const FAIL = Number(argOf("--fail", "3"));
const AMOUNT = parseUnits(argOf("--amount", "1"), 6);
const OUT = argOf("--out", `fixtures/batch-${Date.now()}.json`);
// 1 tuition · 2 dormitory · 3 books · 4 exam fee — cycled so the ledger is not ten identical rows
const PURPOSES = [1, 2, 3, 4];

const ERC20 = [
  "function approve(address,uint256) returns (bool)",
  "function allowance(address,address) view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
];
const GATEWAY = ["function remit(bytes32 beneficiaryId, uint256 amount, uint16 purposeCode)"];

async function main() {
  const rpc = new JsonRpcProvider(env("SEPOLIA_RPC"));
  const wallet = new Wallet(env("PRIVATE_KEY"), rpc);
  const usdc = new Contract(env("USDC_SEPOLIA"), ERC20, wallet);
  const gateway = new Contract(env("REMITTANCE_GATEWAY"), GATEWAY, wallet);
  const beneficiary = env("DEMO_BENEFICIARY_ID");

  const bal: bigint = await usdc.balanceOf(wallet.address);
  const need = AMOUNT * BigInt(OK);
  console.log(`wallet ${wallet.address}  USDC ${Number(bal) / 1e6}  need ${Number(need) / 1e6} for ${OK} ok`);
  if (bal < need) throw new Error("not enough USDC for the successful ones");

  const allowance: bigint = await usdc.allowance(wallet.address, gateway.target);
  if (allowance < need) {
    const tx = await usdc.approve(gateway.target, need);
    console.log(`approve ${tx.hash}`);
    await tx.wait();                                   // mined before any remit is estimated
  }

  const rows: { kind: "ok" | "fail"; hash: string; block: number; amount: string; purpose: number }[] = [];

  for (let i = 0; i < OK; i++) {
    const purpose = PURPOSES[i % PURPOSES.length];
    const tx = await gateway.remit(beneficiary, AMOUNT, purpose);
    const rc = await tx.wait();
    rows.push({ kind: "ok", hash: tx.hash, block: rc!.blockNumber, amount: AMOUNT.toString(), purpose });
    console.log(`ok   ${i + 1}/${OK}  ${tx.hash}  block ${rc!.blockNumber}  status ${rc!.status}`);
  }

  // more than the wallet holds: transferFrom reverts, the tx is still mined
  const tooMuch = bal + parseUnits("1000", 6);
  for (let i = 0; i < FAIL; i++) {
    const purpose = PURPOSES[i % PURPOSES.length];
    const tx = await gateway.remit(beneficiary, tooMuch, purpose, { gasLimit: 160_000 });
    const rc = await rpc.waitForTransaction(tx.hash);       // .wait() throws on status 0
    rows.push({ kind: "fail", hash: tx.hash, block: rc!.blockNumber, amount: tooMuch.toString(), purpose });
    console.log(`fail ${i + 1}/${FAIL}  ${tx.hash}  block ${rc!.blockNumber}  status ${rc!.status}`);
  }

  await writeFile(OUT, JSON.stringify({ chainKey: Number(env("CHAIN_KEY_SEPOLIA", "1")), beneficiary, rows }, null, 2));
  console.log(`\nwrote ${OUT}`);
}

main().catch((e) => { console.error(e instanceof Error ? e.message : e); process.exit(1); });
