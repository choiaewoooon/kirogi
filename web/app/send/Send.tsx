"use client";

import { useState } from "react";
import { BrowserProvider, Contract, Interface, parseUnits } from "ethers";
import { DEPLOYMENT as D } from "@/lib/deployment";

/**
 * The parent's side, from their own wallet. Two transactions on the source chain — approve
 * the gateway for the amount, then remit — and nothing else: the settlement on Creditcoin is
 * triggered by the proof, not by anything this page does afterwards.
 */
type ChainKey = "source" | "mainnet";
type Step = { name: string; state: "pending" | "done" | "waiting" | "fail"; detail: string };

const ERC20 = [
  "function allowance(address,address) view returns (uint256)",
  "function approve(address,uint256) returns (bool)",
  "function balanceOf(address) view returns (uint256)",
];
const GATEWAY = ["function remit(bytes32 beneficiaryId, uint256 amount, uint16 purposeCode)"];
const PURPOSES: { code: number; label: string }[] = [
  { code: 1, label: "tuition" }, { code: 2, label: "dormitory" }, { code: 3, label: "books" }, { code: 4, label: "exam fee" },
];

declare global { interface Window { ethereum?: { request(a: { method: string; params?: unknown[] }): Promise<unknown> } } }

export function Send() {
  const [chain, setChain] = useState<ChainKey>("source");
  const [amount, setAmount] = useState("1");
  const [purpose, setPurpose] = useState(1);
  const [steps, setSteps] = useState<Step[] | null>(null);
  const [busy, setBusy] = useState(false);
  const cfg = D[chain];
  const ready = Boolean(cfg.gateway);

  async function go(e: React.FormEvent) {
    e.preventDefault();
    if (!window.ethereum) { setSteps([{ name: "Wallet", state: "fail", detail: "No injected wallet found. Install MetaMask or similar." }]); return; }
    setBusy(true);
    const out: Step[] = [];
    const push = (s: Step) => { out.push(s); setSteps([...out]); };
    try {
      const wanted = "0x" + cfg.chainId.toString(16);
      try {
        await window.ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: wanted }] });
      } catch { /* user may already be there, or refuse; the provider check below catches it */ }
      const provider = new BrowserProvider(window.ethereum as never);
      const net = await provider.getNetwork();
      if (Number(net.chainId) !== cfg.chainId) throw new Error(`Wallet is on chain ${net.chainId}; switch to ${cfg.name} (${cfg.chainId})`);
      const signer = await provider.getSigner();
      const me = await signer.getAddress();
      push({ name: "Wallet", state: "done", detail: `${me} on ${cfg.name}` });

      const usdc = new Contract(cfg.usdc, ERC20, signer);
      const gateway = new Contract(cfg.gateway, GATEWAY, signer);
      const wei = parseUnits(amount || "0", 6);
      const bal: bigint = await usdc.balanceOf(me);
      if (bal < wei) throw new Error(`Wallet holds ${Number(bal) / 1e6} USDC, sending ${amount}`);

      const allowance: bigint = await usdc.allowance(me, cfg.gateway);
      if (allowance < wei) {
        push({ name: "Approve", state: "waiting", detail: `Allow the gateway to pull ${amount} USDC` });
        const tx = await usdc.approve(cfg.gateway, wei);
        await tx.wait();
        out[out.length - 1] = { name: "Approve", state: "done", detail: tx.hash };
        setSteps([...out]);
      } else {
        push({ name: "Approve", state: "done", detail: "Existing allowance covers it" });
      }

      push({ name: "Remit", state: "waiting", detail: `remit(school, ${amount} USDC, ${PURPOSES.find(p => p.code === purpose)?.label})` });
      const tx = await gateway.remit(D.settlement.beneficiaryId, wei, purpose);
      const rc = await tx.wait();
      out[out.length - 1] = { name: "Remit", state: "done", detail: `${tx.hash} · block ${rc.blockNumber.toLocaleString()}` };
      setSteps([...out]);
      push({ name: "Next", state: "pending", detail: "Attestation takes ~5–8 minutes. Paste the hash on the Track page, or run the worker with --action " + cfg.action + " --chain-key " + cfg.chainKey });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      push({ name: "Stopped", state: "fail", detail: msg.split("\n")[0].slice(0, 200) });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="tracker">
      <form onSubmit={go} className="tracker__form">
        <label className="tracker__label">Source chain</label>
        <div className="tracker__row" style={{ marginBottom: "1rem" }}>
          {(["source", "mainnet"] as ChainKey[]).map((k) => (
            <button type="button" key={k} className={`btn ${chain === k ? "btn--primary" : "btn--ghost"}`}
              onClick={() => { setChain(k); setSteps(null); }}>
              {D[k].name}{!D[k].gateway ? " · not deployed yet" : ""}
            </button>
          ))}
        </div>
        <label className="tracker__label" htmlFor="amt">Amount (USDC) and what it is for</label>
        <div className="tracker__row">
          <input id="amt" className="tracker__input mono" value={amount} onChange={(e) => setAmount(e.target.value)} inputMode="decimal" style={{ maxWidth: "10rem" }} />
          <select className="tracker__input mono" value={purpose} onChange={(e) => setPurpose(Number(e.target.value))} style={{ maxWidth: "12rem" }}>
            {PURPOSES.map((p) => <option key={p.code} value={p.code}>{p.code} · {p.label}</option>)}
          </select>
          <button className="tracker__go" disabled={busy || !ready}>{busy ? "Signing…" : "Send from my wallet"}</button>
        </div>
        <p className="tracker__label" style={{ marginTop: "0.8rem" }}>
          Gateway <span className="mono">{cfg.gateway || "—"}</span> · treasury <span className="mono">{cfg.treasury || "—"}</span> · the school takes tuition, dormitory and books. An exam fee will be refused on Creditcoin.
        </p>
      </form>
      {steps && (
        <ol className="tracker__stages">
          {steps.map((s) => (
            <li key={s.name} className={`stage stage--${s.state}`}>
              <span className="stage__mark" aria-hidden="true" />
              <div><p className="stage__name">{s.name}</p><p className="stage__detail">{s.detail}</p></div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
