"use client";

import { useState } from "react";
import { parseUnits, formatUnits, type Address, type Hex } from "viem";
import {
  useAccount, useConnect, useDisconnect, useSwitchChain, useReadContract,
  useWriteContract, usePublicClient,
} from "wagmi";
import { usePrivy } from "@privy-io/react-auth";

/** Only mounted when a Privy app id is configured, so the hook always has its provider. */
function PrivyAuth({ signedIn }: { signedIn: boolean }) {
  const { login, logout } = usePrivy();
  return signedIn
    ? <button type="button" className="btn btn--ghost" onClick={() => logout()}>Sign out</button>
    : <button type="button" className="btn btn--primary" onClick={() => login()}>Sign in — email, Google or a wallet</button>;
}
import { DEPLOYMENT as D } from "@/lib/deployment";
import { PRIVY_APP_ID, cc3 } from "@/lib/wagmi";

/**
 * The parent's side. Two transactions on the source chain — approve the gateway for exactly
 * this amount, then remit — signed in the user's own wallet. Nothing here talks to Creditcoin
 * except one read: does the school accept this purpose? The settlement there is triggered by
 * the proof, not by this page.
 */
type ChainKey = "source" | "mainnet";
type Step = { name: string; state: "pending" | "done" | "waiting" | "fail"; detail: string };

const ERC20 = [
  { type: "function", name: "allowance", stateMutability: "view", inputs: [{ type: "address" }, { type: "address" }], outputs: [{ type: "uint256" }] },
  { type: "function", name: "approve", stateMutability: "nonpayable", inputs: [{ type: "address" }, { type: "uint256" }], outputs: [{ type: "bool" }] },
  { type: "function", name: "balanceOf", stateMutability: "view", inputs: [{ type: "address" }], outputs: [{ type: "uint256" }] },
] as const;
const GATEWAY = [
  { type: "function", name: "remit", stateMutability: "nonpayable",
    inputs: [{ name: "beneficiaryId", type: "bytes32" }, { name: "amount", type: "uint256" }, { name: "purposeCode", type: "uint16" }], outputs: [] },
] as const;
const POOL = [
  { type: "function", name: "purposeAllowed", stateMutability: "view", inputs: [{ type: "bytes32" }, { type: "uint16" }], outputs: [{ type: "bool" }] },
] as const;
const PURPOSES = [
  { code: 1, label: "tuition" }, { code: 2, label: "dormitory" }, { code: 3, label: "books" }, { code: 4, label: "exam fee" },
];

function short(a: string) { return `${a.slice(0, 6)}…${a.slice(-4)}`; }

export function Send() {
  const [chainKey, setChainKey] = useState<ChainKey>("source");
  const [amount, setAmount] = useState("1");
  const [purpose, setPurpose] = useState(1);
  const [steps, setSteps] = useState<Step[] | null>(null);
  const [busy, setBusy] = useState(false);

  const cfg = D[chainKey];
  const gateway = cfg.gateway as Address;
  const usdc = cfg.usdc as Address;
  const beneficiary = D.settlement.beneficiaryId as Hex;

  const { address, chainId, isConnected } = useAccount();
  const { connectors, connect, isPending: connecting } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChainAsync } = useSwitchChain();
  const { writeContractAsync } = useWriteContract();
  const publicClient = usePublicClient({ chainId: cfg.chainId });

  const { data: balance } = useReadContract({
    address: usdc, abi: ERC20, functionName: "balanceOf", args: address ? [address] : undefined,
    chainId: cfg.chainId, query: { enabled: Boolean(address && gateway) },
  });
  const { data: allowed } = useReadContract({
    address: D.settlement.pool as Address, abi: POOL, functionName: "purposeAllowed",
    args: [beneficiary, purpose], chainId: cc3.id,
  });

  const wei = (() => { try { return parseUnits(amount || "0", 6); } catch { return 0n; } })();
  const ready = Boolean(gateway) && isConnected && wei > 0n;

  async function go(e: React.FormEvent) {
    e.preventDefault();
    if (!address || !publicClient) return;
    setBusy(true);
    const out: Step[] = [];
    const push = (s: Step) => { out.push(s); setSteps([...out]); };
    const last = (s: Step) => { out[out.length - 1] = s; setSteps([...out]); };
    try {
      if (chainId !== cfg.chainId) {
        push({ name: "Network", state: "waiting", detail: `Switching the wallet to ${cfg.name}` });
        await switchChainAsync({ chainId: cfg.chainId });
        last({ name: "Network", state: "done", detail: cfg.name });
      }
      if (balance !== undefined && balance < wei) throw new Error(`This wallet holds ${formatUnits(balance, 6)} USDC on ${cfg.name}`);

      const allowance = await publicClient.readContract({ address: usdc, abi: ERC20, functionName: "allowance", args: [address, gateway] });
      if (allowance < wei) {
        push({ name: "Approve", state: "waiting", detail: `Allow the gateway to pull exactly ${amount} USDC — nothing more` });
        const hash = await writeContractAsync({ address: usdc, abi: ERC20, functionName: "approve", args: [gateway, wei], chainId: cfg.chainId });
        await publicClient.waitForTransactionReceipt({ hash });
        last({ name: "Approve", state: "done", detail: hash });
      } else {
        push({ name: "Approve", state: "done", detail: "An earlier allowance already covers it" });
      }

      push({ name: "Remit", state: "waiting", detail: `remit(school, ${amount} USDC, ${PURPOSES.find(p => p.code === purpose)?.label})` });
      const hash = await writeContractAsync({ address: gateway, abi: GATEWAY, functionName: "remit", args: [beneficiary, wei, purpose], chainId: cfg.chainId });
      const rc = await publicClient.waitForTransactionReceipt({ hash });
      last({ name: "Remit", state: rc.status === "success" ? "done" : "fail", detail: `${hash} · block ${rc.blockNumber.toLocaleString()} · ${rc.status}` });
      push({
        name: "Next", state: "pending",
        detail: `Attestation takes ~5–8 minutes. Paste the hash on Track, or run the worker: submit_proof.ts ${hash} --action ${cfg.action} --chain-key ${cfg.chainKey}`,
      });
    } catch (err) {
      const msg = (err as { shortMessage?: string; message?: string });
      push({ name: "Stopped", state: "fail", detail: (msg.shortMessage ?? msg.message ?? String(err)).split("\n")[0].slice(0, 220) });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="tracker">
      <form onSubmit={go} className="tracker__form">
        <label className="tracker__label">Wallet</label>
        <div className="tracker__row" style={{ marginBottom: "1rem", flexWrap: "wrap" }}>
          {isConnected && address ? (
            <>
              <span className="btn btn--ghost mono" style={{ cursor: "default" }}>{short(address)}{chainId ? ` · chain ${chainId}` : ""}</span>
              {PRIVY_APP_ID ? <PrivyAuth signedIn /> : <button type="button" className="btn btn--ghost" onClick={() => disconnect()}>Disconnect</button>}
            </>
          ) : PRIVY_APP_ID ? (
            <PrivyAuth signedIn={false} />
          ) : connectors.length ? (
            connectors.map((c) => (
              <button type="button" key={c.uid} className="btn btn--primary" disabled={connecting} onClick={() => connect({ connector: c })}>
                Connect {c.name}
              </button>
            ))
          ) : (
            <span className="tracker__label">No wallet found in this browser. Install MetaMask, Rabby or Coinbase Wallet.</span>
          )}
        </div>

        <label className="tracker__label">Source chain</label>
        <div className="tracker__row" style={{ marginBottom: "1rem" }}>
          {(["source", "mainnet"] as ChainKey[]).map((k) => (
            <button type="button" key={k} className={`btn ${chainKey === k ? "btn--primary" : "btn--ghost"}`}
              onClick={() => { setChainKey(k); setSteps(null); }}>
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
          {allowed === false
            ? <span style={{ color: "var(--fail)" }}>The school does not accept this purpose. Ethereum will take the deposit; Creditcoin will refuse the settlement. </span>
            : allowed === true ? <span style={{ color: "var(--pass)" }}>The school accepts this purpose. </span> : null}
          {balance !== undefined && address ? `Balance ${formatUnits(balance, 6)} USDC · ` : ""}
          Gateway <span className="mono">{gateway ? short(gateway) : "—"}</span> · approve is for the exact amount, never unlimited.
        </p>
      </form>

      {steps && (
        <ol className="tracker__stages">
          {steps.map((s, i) => (
            <li key={`${s.name}-${i}`} className={`stage stage--${s.state}`}>
              <span className="stage__mark" aria-hidden="true" />
              <div><p className="stage__name">{s.name}</p><p className="stage__detail">{s.detail}</p></div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
