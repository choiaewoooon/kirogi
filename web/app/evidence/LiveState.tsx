"use client";

import { useEffect, useState } from "react";
import { Contract, formatUnits } from "ethers";
import { DEPLOYMENT as D } from "@/lib/deployment";
import { read, SOURCE_RPCS, SETTLEMENT_RPCS } from "@/lib/rpc";

const ERC20 = ["function balanceOf(address) view returns (uint256)"];
const POOL = [
  "function settledTotalOf(bytes32) view returns (uint256)",
  "function settlementCountOf(bytes32) view returns (uint32)",
  "function allowedPurposesOf(bytes32) view returns (uint32)",
];
// purpose codes the gateway carries; bit n of the pool's mask = code n
const PURPOSE_NAMES: Record<number, string> = { 1: "tuition", 2: "dormitory", 3: "books", 4: "exam fee" };
function purposesOf(mask: number) {
  return Object.entries(PURPOSE_NAMES).filter(([c]) => mask & (1 << Number(c))).map(([, n]) => n).join(" · ") || "none";
}

type Row = { label: string; value: string };

/** Reads the deployment as it stands right now. Nothing here is baked into the build. */
export function LiveState() {
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [school, liquidity, settled, treasury, count, mask] = await Promise.all([
          read(SETTLEMENT_RPCS, (p) =>
            new Contract(D.settlement.token, ERC20, p).balanceOf(D.settlement.partner)),
          read(SETTLEMENT_RPCS, (p) =>
            new Contract(D.settlement.token, ERC20, p).balanceOf(D.settlement.pool)),
          read(SETTLEMENT_RPCS, (p) =>
            new Contract(D.settlement.pool, POOL, p).settledTotalOf(D.settlement.beneficiaryId)),
          read(SOURCE_RPCS, (p) =>
            new Contract(D.source.usdc, ERC20, p).balanceOf(D.source.treasury)),
          read(SETTLEMENT_RPCS, (p) =>
            new Contract(D.settlement.pool, POOL, p).settlementCountOf(D.settlement.beneficiaryId)),
          read(SETTLEMENT_RPCS, (p) =>
            new Contract(D.settlement.pool, POOL, p).allowedPurposesOf(D.settlement.beneficiaryId)),
        ]);

        if (cancelled) return;
        setRows([
          { label: "Treasury holds (Sepolia)", value: `${formatUnits(treasury, 6)} USDC` },
          { label: "School holds (Creditcoin)", value: `${formatUnits(school, 6)} KSU` },
          { label: "Settled for this beneficiary", value: `${formatUnits(settled, 6)} KSU` },
          { label: "Liquidity remaining", value: `${formatUnits(liquidity, 6)} KSU` },
          { label: "Settlements for this beneficiary", value: `${Number(count)} proven` },
          { label: "This school accepts", value: purposesOf(Number(mask)) },
        ]);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "RPC unreachable");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <p className="mono" style={{ color: "var(--fail)" }}>
        Could not reach the testnet RPCs: {error}. The addresses below are still live — open them
        in an explorer.
      </p>
    );
  }

  return (
    <div className="live">
      {(rows ?? Array.from({ length: 6 }, () => null)).map((r, i) => (
        <div className="live__cell" key={r?.label ?? i}>
          <p className="live__label">{r?.label ?? " "}</p>
          <p className="live__value">{r ? r.value : "reading…"}</p>
        </div>
      ))}
    </div>
  );
}
