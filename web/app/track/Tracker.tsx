"use client";

import { useState } from "react";
import { DEPLOYMENT as D } from "@/lib/deployment";
import { Contract, Interface, JsonRpcProvider } from "ethers";
import { findReceipt, SOURCE_RPCS, MAINNET_RPCS } from "@/lib/rpc";

const GATEWAY_EVENTS = new Interface([
  "event RemittanceSent(address indexed sender, bytes32 indexed beneficiaryId, uint256 amount, uint16 purposeCode)",
]);
const POOL_VIEW = ["function purposeAllowed(bytes32,uint16) view returns (bool)"];
const PURPOSE_NAMES: Record<number, string> = { 1: "tuition", 2: "dormitory", 3: "books", 4: "exam fee" };

type Stage = { name: string; state: "pending" | "done" | "waiting" | "fail"; detail: string };
/** What the receipt says the remittance *is* — shown large, above the checks. */
type Summary = { amount?: string; purpose?: string; block?: number; sender?: string };

type Verdict = { tone: "pass" | "fail" | "wait"; label: string; note: string };
/** One line for the whole thing: refused if any check fails, provable once every check is done, otherwise waiting. */
function verdict(stages: Stage[]): Verdict {
  if (stages.some((s) => s.state === "fail")) {
    const why = stages.find((s) => s.state === "fail")!;
    return { tone: "fail", label: "Creditcoin will refuse this", note: why.name === "On Ethereum" && why.detail.startsWith("No transaction") ? "Nothing to prove" : why.name === "Purpose" ? "PurposeNotAllowed()" : why.name === "Error" ? "Check failed" : "SourceTransactionFailed()" };
  }
  if (stages.every((s) => s.state === "done")) return { tone: "pass", label: "Provable — ready to settle", note: "Every check passed" };
  return { tone: "wait", label: "Waiting for attestation", note: "Attestors publish about every two minutes" };
}

const PROVER = "https://prover.cc3-testnet.creditcoin.network";

export function Tracker() {
  const [hash, setHash] = useState<string>(D.proven.sourceTx);
  const [chain, setChain] = useState<"source" | "mainnet">("source");
  const src = D[chain];
  const [stages, setStages] = useState<Stage[] | null>(null);
  const [summary, setSummary] = useState<Summary>({});
  const [busy, setBusy] = useState(false);

  async function check(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const out: Stage[] = [];
    const sum: Summary = {};
    setSummary(sum);
    try {
      const receipt = await findReceipt(hash, chain === "mainnet" ? MAINNET_RPCS : SOURCE_RPCS);
      if (!receipt) {
        setStages([{ name: "On Ethereum", state: "fail", detail: `No transaction with that hash on ${src.name}.` }]);
        return;
      }
      sum.block = receipt.blockNumber;
      sum.sender = receipt.from;
      out.push({
        name: "On Ethereum",
        state: receipt.status === 1 ? "done" : "fail",
        detail:
          receipt.status === 1
            ? `Block ${receipt.blockNumber.toLocaleString()}, status 0x1`
            : `Block ${receipt.blockNumber.toLocaleString()}, status 0x0 — Creditcoin will refuse this`,
      });

      // What was it sent *for*? The gateway log says; the pool on Creditcoin says whether the
      // receiver takes that. A valid proof for the wrong purpose is refused there.
      if (receipt.status !== 1) {
        // a reverted remittance emits nothing; the stage above already says Creditcoin refuses it
        setStages(out);
        return;
      }
      const sent = receipt.logs
        .filter((l) => src.gateway && l.address.toLowerCase() === src.gateway.toLowerCase())
        .map((l) => { try { return GATEWAY_EVENTS.parseLog({ topics: [...l.topics], data: l.data }); } catch { return null; } })
        .find((e) => e?.name === "RemittanceSent");
      if (sent) {
        const code = Number(sent.args.purposeCode);
        const beneficiary = sent.args.beneficiaryId as string;
        sum.amount = (Number(sent.args.amount) / 1e6).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 });
        sum.purpose = PURPOSE_NAMES[code] ?? `code ${code}`;
        setSummary({ ...sum });
        const allowed: boolean = await new Contract(D.settlement.pool, POOL_VIEW, new JsonRpcProvider(D.settlement.rpc))
          .purposeAllowed(beneficiary, code);
        out.push({
          name: "Purpose",
          state: allowed ? "done" : "fail",
          detail: allowed
            ? `Sent for ${PURPOSE_NAMES[code] ?? `code ${code}`} — the receiver accepts that`
            : `Sent for ${PURPOSE_NAMES[code] ?? `code ${code}`} — this receiver does not accept it. Creditcoin will refuse the settlement even though the proof is valid`,
        });
      } else {
        out.push({ name: "Purpose", state: "fail", detail: "No RemittanceSent log from the Kirogi gateway in this transaction" });
      }

      const res = await fetch(`${PROVER}/api/v1/attested-height/${src.chainKey}`);
      const attested = Number((await res.json()).attestedHeight);
      const behind = receipt.blockNumber - attested;
      out.push({
        name: "Attested",
        state: behind <= 0 ? "done" : "waiting",
        detail:
          behind <= 0
            ? `Attestation frontier is at ${attested.toLocaleString()}`
            : `${behind} block${behind === 1 ? "" : "s"} to go — frontier at ${attested.toLocaleString()}`,
      });

      if (behind <= 0) {
        const p = await fetch(`${PROVER}/api/v1/proof-by-tx/${src.chainKey}/${hash}`);
        if (p.ok) {
          const proof = await p.json();
          out.push({
            name: "Provable",
            state: "done",
            detail: `txIndex ${proof.txIndex}, ${proof.merkleProof.siblings.length} merkle siblings, ${proof.continuityProof.roots.length} continuity roots`,
          });
        } else {
          out.push({ name: "Provable", state: "waiting", detail: `Prover returned ${p.status}` });
        }
      } else {
        out.push({ name: "Provable", state: "pending", detail: "Waiting on attestation" });
      }
      setStages(out);
    } catch (err) {
      setStages([...out, { name: "Error", state: "fail", detail: err instanceof Error ? err.message : "failed" }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="tracker">
      <form onSubmit={check} className="tracker__form">
        <div className="tracker__row" style={{ marginBottom: "0.9rem" }}>
          {(["source", "mainnet"] as const).map((k) => (
            <button type="button" key={k} className={`btn ${chain === k ? "btn--primary" : "btn--ghost"}`}
              onClick={() => { setChain(k); setStages(null); }}>
              {D[k].name} · chainKey {D[k].chainKey}
            </button>
          ))}
        </div>
        <label className="tracker__label" htmlFor="tx">
          {src.name} transaction hash
        </label>
        <div className="tracker__row">
          <input
            id="tx"
            className="tracker__input mono"
            value={hash}
            onChange={(e) => setHash(e.target.value.trim())}
            spellCheck={false}
          />
          <button className="tracker__go" disabled={busy}>
            {busy ? "Checking…" : "Check"}
          </button>
        </div>
      </form>

      {stages && (() => {
        const v = verdict(stages);
        const chainTx = `${src.explorer}/tx/${hash}`;
        return (
          <article className={`verdict verdict--${v.tone}`} aria-live="polite">
            <header className="verdict__head">
              <span className={`verdict__chain ${chain === "mainnet" ? "settle-rail" : "source-rail"}`}>{src.name}</span>
              <a className="hash mono" href={chainTx} target="_blank" rel="noreferrer">
                {hash.slice(0, 10)}…{hash.slice(-6)}
              </a>
            </header>

            <div className="verdict__amount">
              {summary.amount ? (
                <>
                  <p className="verdict__figure">{summary.amount}<span>USDC</span></p>
                  <p className="verdict__for">for <b>{summary.purpose}</b>{summary.block ? ` · block ${summary.block.toLocaleString()}` : ""}</p>
                </>
              ) : (
                <>
                  <p className="verdict__figure verdict__figure--none">—</p>
                  <p className="verdict__for">{summary.block ? `Block ${summary.block.toLocaleString()} · no Kirogi remittance in this receipt` : "Not found on this chain"}</p>
                </>
              )}
            </div>

            <p className="verdict__pill">
              <span className="verdict__pill-dot" aria-hidden="true" />
              <span className="verdict__pill-label">{v.label}</span>
              <span className="verdict__pill-note mono">{v.note}</span>
            </p>

            <ol className="tracker__stages tracker__stages--in-card">
              {stages.map((s) => (
                <li key={s.name} className={`stage stage--${s.state}`}>
                  <span className="stage__mark" aria-hidden="true" />
                  <div>
                    <p className="stage__name">{s.name}</p>
                    <p className="stage__detail">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        );
      })()}
    </div>
  );
}
