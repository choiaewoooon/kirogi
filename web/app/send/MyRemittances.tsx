"use client";

import { useEffect, useState } from "react";
import { formatUnits, parseAbiItem, type Address } from "viem";
import { usePublicClient } from "wagmi";
import { DEPLOYMENT as D } from "@/lib/deployment";

/**
 * "My remittances" without a database: the gateways' RemittanceSent logs, filtered by the
 * signed-in wallet, are the record. Both source chains, newest first.
 */
const EVENT = parseAbiItem("event RemittanceSent(address indexed sender, bytes32 indexed beneficiaryId, uint256 amount, uint16 purposeCode)");
const PURPOSE: Record<number, string> = { 1: "tuition", 2: "dormitory", 3: "books", 4: "exam fee" };
type Row = { chain: string; explorer: string; hash: string; block: bigint; amount: bigint; purpose: number };

export function MyRemittances({ address }: { address: Address }) {
  const sepolia = usePublicClient({ chainId: D.source.chainId });
  const mainnet = usePublicClient({ chainId: D.mainnet.chainId });
  const [rows, setRows] = useState<Row[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const out: Row[] = [];
      for (const [client, cfg] of [[sepolia, D.source], [mainnet, D.mainnet]] as const) {
        if (!client || !cfg.gateway) continue;
        try {
          const head = await client.getBlockNumber();
          // public RPCs cap getLogs ranges; walk in 5k-block windows from the gateway's birth
          for (let from = BigInt(cfg.deployBlock); from <= head; from += 5000n) {
            const to = from + 4999n > head ? head : from + 4999n;
            const logs = await client.getLogs({ address: cfg.gateway as Address, event: EVENT, args: { sender: address }, fromBlock: from, toBlock: to });
            for (const l of logs) out.push({ chain: cfg.name, explorer: cfg.explorer, hash: l.transactionHash, block: l.blockNumber, amount: l.args.amount!, purpose: Number(l.args.purposeCode) });
          }
        } catch { /* one chain failing should not hide the other */ }
      }
      if (!cancelled) setRows(out.sort((a, b) => Number(b.block - a.block)));
    })();
    return () => { cancelled = true; };
  }, [address, sepolia, mainnet]);

  if (rows === null) return <p className="tracker__label" style={{ marginTop: "2rem" }}>Reading your remittances from both chains…</p>;
  if (!rows.length) return <p className="tracker__label" style={{ marginTop: "2rem" }}>No remittances from this wallet yet.</p>;
  return (
    <ol className="tracker__stages">
      {rows.map((r) => (
        <li key={r.hash} className="stage stage--done">
          <span className="stage__mark" aria-hidden="true" />
          <div>
            <p className="stage__name">{formatUnits(r.amount, 6)} USDC · {PURPOSE[r.purpose] ?? `code ${r.purpose}`} · {r.chain}</p>
            <p className="stage__detail"><a href={`${r.explorer}/tx/${r.hash}`} target="_blank" rel="noreferrer">{r.hash}</a> · block {r.block.toLocaleString()}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
