"use client";

import { useState } from "react";
import { DEPLOYMENT as D } from "@/lib/deployment";
import { findReceipt } from "@/lib/rpc";

type Stage = { name: string; state: "pending" | "done" | "waiting" | "fail"; detail: string };

const PROVER = "https://prover.cc3-testnet.creditcoin.network";

export function Tracker() {
  const [hash, setHash] = useState<string>(D.proven.sourceTx);
  const [stages, setStages] = useState<Stage[] | null>(null);
  const [busy, setBusy] = useState(false);

  async function check(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const out: Stage[] = [];
    try {
      const receipt = await findReceipt(hash);
      if (!receipt) {
        setStages([{ name: "On Ethereum", state: "fail", detail: "No transaction with that hash on Sepolia." }]);
        return;
      }
      out.push({
        name: "On Ethereum",
        state: receipt.status === 1 ? "done" : "fail",
        detail:
          receipt.status === 1
            ? `Block ${receipt.blockNumber.toLocaleString()}, status 0x1`
            : `Block ${receipt.blockNumber.toLocaleString()}, status 0x0 — Creditcoin will refuse this`,
      });

      const res = await fetch(`${PROVER}/api/v1/attested-height/${D.source.chainKey}`);
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
        const p = await fetch(`${PROVER}/api/v1/proof-by-tx/${D.source.chainKey}/${hash}`);
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
        <label className="tracker__label" htmlFor="tx">
          Sepolia transaction hash
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

      {stages && (
        <ol className="tracker__stages">
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
      )}
    </div>
  );
}
