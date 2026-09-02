/**
 * Settle every remittance in a batch file on Creditcoin — including the ones meant to fail.
 *
 *   npx tsx scripts/settle_batch.ts fixtures/batch.json [--out fixtures/settled.json]
 *
 * For each source tx: wait for attestation (one wait covers the batch, they landed close
 * together), fetch the proof, dry-run it through the real precompile with eth_call, then
 * broadcast. Reverting ones are broadcast too, with a manual gas limit, so the refusal is on the
 * public explorer and not just in a log line.
 */
import "dotenv/config";
import { readFile, writeFile } from "node:fs/promises";
import { JsonRpcProvider, Wallet } from "ethers";
import { proofProvider } from "@gluwa/usc-sdk";
import { dryRun, encodeExecute, type Proof } from "./live_check.ts";

const env = (k: string, fb?: string) => { const v = process.env[k] ?? fb; if (!v) throw new Error(`missing env: ${k}`); return v; };
const argOf = (f: string, fb: string) => { const i = process.argv.indexOf(f); return i === -1 ? fb : process.argv[i + 1]; };

type Row = { kind: "ok" | "fail"; hash: string; block: number; amount: string; purpose: number };

async function main() {
  const file = process.argv[2];
  if (!file) throw new Error("usage: settle_batch.ts <batch.json>");
  const batch = JSON.parse(await readFile(file, "utf8")) as { chainKey: number; rows: Row[] };
  const out = argOf("--out", file.replace(/\.json$/, "-settled.json"));

  const cc3 = new JsonRpcProvider(env("CC3_RPC"));
  const wallet = new Wallet(env("PRIVATE_KEY"), cc3);
  const asc = env("KIROGI_ASC");
  const builder = new proofProvider.service.ProofBuilder(batch.chainKey, env("PROVER_API"));

  const top = Math.max(...batch.rows.map((r) => r.block));
  console.log(`${batch.rows.length} source txs, highest block ${top}. waiting for attestation…`);
  const t0 = Date.now();
  await builder.waitUntilHeightAttested(batch.chainKey, top);
  console.log(`attested after ${Math.round((Date.now() - t0) / 1000)}s\n`);

  const results: (Row & { proof: { siblings: number; roots: number; txIndex: number };
    dryRun: string; cc3Tx?: string; cc3Block?: number; cc3Status?: number; gas?: string })[] = [];

  for (const row of batch.rows) {
    const { data: proof } = await builder.getProof(row.hash);
    if (!proof) throw new Error(`no proof for ${row.hash}`);
    const p = proof as unknown as Proof & { txIndex: number };
    const dr = await dryRun(cc3, asc, wallet.address, 1, p);
    const line = `${row.kind.padEnd(4)} ${row.hash.slice(0, 12)}…  proof ${p.merkleProof.siblings.length} sib / ${p.continuityProof.roots.length} roots  dry-run: ${dr.reason}`;

    // broadcast either way; a refusal on the explorer is worth the 0.0002 CTC
    const tx = await wallet.sendTransaction({ to: asc, data: encodeExecute(1, p), gasLimit: 900_000 });
    const rc = await cc3.waitForTransaction(tx.hash);
    console.log(`${line}\n     → ${tx.hash}  block ${rc!.blockNumber}  status ${rc!.status}  gas ${rc!.gasUsed}`);
    results.push({ ...row, proof: { siblings: p.merkleProof.siblings.length, roots: p.continuityProof.roots.length, txIndex: p.txIndex },
      dryRun: dr.reason, cc3Tx: tx.hash, cc3Block: rc!.blockNumber, cc3Status: rc!.status ?? undefined, gas: rc!.gasUsed.toString() });
  }

  await writeFile(out, JSON.stringify({ settledAt: new Date().toISOString(), asc, results }, null, 2));
  const okN = results.filter((r) => r.cc3Status === 1).length;
  console.log(`\n${okN} settled, ${results.length - okN} refused on-chain → ${out}`);
}

main().catch((e) => { console.error(e instanceof Error ? e.message : e); process.exit(1); });
