import { DEPLOYMENT as D } from "@/lib/deployment";
import { LiveState } from "./LiveState";
import { EthMark, UsdcMark } from "../Logos";

const short = (h: string) => `${h.slice(0, 10)}…${h.slice(-8)}`;

function Tx({ hash, chain }: { hash: string; chain: "source" | "settlement" }) {
  const base = chain === "source" ? D.source.explorer : D.settlement.explorer;
  return (
    <a className="hash mono" href={`${base}/tx/${hash}`} target="_blank" rel="noreferrer">
      {short(hash)}
    </a>
  );
}

function Addr({ addr, chain }: { addr: string; chain: "source" | "settlement" }) {
  const base = chain === "source" ? D.source.explorer : D.settlement.explorer;
  return (
    <a className="hash mono" href={`${base}/address/${addr}`} target="_blank" rel="noreferrer">
      {short(addr)}
    </a>
  );
}

const REJECTIONS = [
  {
    tried: "Prove a remittance that reverted on Ethereum",
    where: "on-chain, Creditcoin",
    result: "SourceTransactionFailed()",
    detail:
      "The proof was valid — the transaction really is in that block. Without the receipt-status check this would have paid out.",
    selector: "0xc60cdba1",
  },
  {
    tried: "Submit the same proof twice",
    where: "test/FullFlow.t.sol",
    result: "Query already processed",
    detail: "The beneficiary is paid exactly once. The query id is burned on first use.",
    selector: "—",
  },
  {
    tried: "Point the source config at a look-alike USDC",
    where: "test/FullFlow.t.sol",
    result: "NoCanonicalTransfer()",
    detail:
      "Sepolia hosts a second contract whose name, symbol and decimals all read USDC. Only the pinned address is accepted.",
    selector: "0xe76066ff",
  },
  {
    tried: "Send the canonical token somewhere other than the treasury",
    where: "test/Kirogi.t.sol",
    result: "NoCanonicalTransfer()",
    detail: "The Transfer recipient must equal the registered treasury.",
    selector: "0xe76066ff",
  },
  {
    tried: "Present a proof the verifier rejects",
    where: "test/Kirogi.t.sol",
    result: "Proof of inclusion verification failed",
    detail: "Tampered bytes never reach the business logic.",
    selector: "—",
  },
  {
    tried: "Redirect a proof to a different settlement partner",
    where: "test/FullFlow.t.sol",
    result: "unrelated partner receives 0",
    detail: "The beneficiary comes from the proven gateway log, not from the submitter.",
    selector: "—",
  },
];

export default function Evidence() {
  const { proven, rejected } = D;
  return (
    <main>
      <section className="section shell">
        <p className="eyebrow">Evidence</p>
        <h1 className="display d1" style={{ maxWidth: "16ch" }}>
Check it yourself.
        </h1>
        <p className="lede" style={{ marginTop: "1.5rem" }}>
Twelve remittances were sent, one of them real USDC on Ethereum mainnet from an email
            sign-in. Eight were proven and settled — the school holds 19 KSU. Five
            were refused on-chain: four because the deposit reverted on Ethereum, one because it was
            sent for an exam fee and this school is registered for tuition, dormitory and books. Every
            hash is on a public explorer, along with every address below. The remaining refusals are
            covered by the test suite, and each row says which is which.
        </p>
      </section>

      <section className="section shell">
        <p className="eyebrow">State right now</p>
        <LiveState />
      </section>

      <section className="section shell">
        <p className="eyebrow">The crossing that settled</p>
        <ol className="steps">
          <li>
            <p className="steps__head">Deposit on {D.source.name}</p>
            <dl className="kv">
              <dt>Transaction</dt>
              <dd><Tx hash={proven.sourceTx} chain="source" /></dd>
              <dt>Block</dt>
              <dd>{proven.sourceBlock.toLocaleString()}</dd>
              <dt>Amount</dt>
              <dd>{proven.amountUsdc} USDC</dd>
              <dt>Gateway</dt>
              <dd><Addr addr={D.source.gateway} chain="source" /></dd>
            </dl>
          </li>
          <li>
            <p className="steps__head">Attestation and proof</p>
            <dl className="kv">
              <dt>Waited</dt>
              <dd>
                {Math.floor(proven.attestationWaitSeconds / 60)}m {proven.attestationWaitSeconds % 60}s
              </dd>
              <dt>Transaction index</dt>
              <dd>{proven.txIndex}</dd>
              <dt>Merkle siblings</dt>
              <dd>{proven.merkleSiblings}</dd>
              <dt>Continuity roots</dt>
              <dd>{proven.continuityRoots}</dd>
            </dl>
          </li>
          <li>
            <p className="steps__head">Verified and settled on {D.settlement.name}</p>
            <dl className="kv">
              <dt>Transaction</dt>
              <dd><Tx hash={proven.settlementTx} chain="settlement" /></dd>
              <dt>Block</dt>
              <dd>{proven.settlementBlock.toLocaleString()}</dd>
              <dt>Gas</dt>
              <dd>{proven.settlementGas.toLocaleString()}</dd>
              <dt>Paid to</dt>
              <dd><Addr addr={D.settlement.partner} chain="settlement" /></dd>
            </dl>
          </li>
        </ol>
      </section>

      <section className="section shell">
        <p className="eyebrow">What it refuses</p>
        <h2 className="display d2" style={{ maxWidth: "24ch" }}>
          A contract is only as good as what it turns away.
        </h2>
        <div className="table" role="table">
          <div className="table__row table__row--head" role="row">
            <span role="columnheader">Attempt</span>
            <span role="columnheader">Result</span>
            <span role="columnheader">Selector</span>
          </div>
          {REJECTIONS.map((r) => (
            <div className="table__row" role="row" key={r.tried}>
              <div role="cell">
                <p className="table__tried">{r.tried}</p>
                <p className="table__detail">{r.detail}</p>
              </div>
              <div role="cell">
                <span className="tag fail"><span className="dot" />{r.result}</span>
                <p className="table__where mono">{r.where}</p>
              </div>
              <div role="cell" className="mono" style={{ color: "var(--text-faint)" }}>
                {r.selector}
              </div>
            </div>
          ))}
        </div>
        <p className="lede" style={{ marginTop: "2rem" }}>
          The first row happened on the live network. Its source transaction is{" "}
          <Tx hash={rejected.sourceTx} chain="source" /> &mdash; status{" "}
          <span className="mono">0x0</span> on Ethereum, and Creditcoin returned{" "}
          <span className="mono">{rejected.selector}</span>.
        </p>
      </section>

      <section className="section shell">
        <p className="eyebrow">Deployment</p>
        <div className="two-up">
          <div className="card">
            <p className="rail__chain source-rail">
              <EthMark />
              {D.source.name}
            </p>
            <dl className="kv">
              <dt>Gateway</dt><dd><Addr addr={D.source.gateway} chain="source" /></dd>
              <dt>Treasury</dt><dd><Addr addr={D.source.treasury} chain="source" /></dd>
              <dt><UsdcMark size={13} /> USDC</dt><dd><Addr addr={D.source.usdc} chain="source" /></dd>
              <dt>chainKey</dt><dd>{D.source.chainKey}</dd>
            </dl>
          </div>
          <div className="card">
            <p className="rail__chain settle-rail">{D.settlement.name}</p>
            <dl className="kv">
              <dt>KirogiASC</dt><dd><Addr addr={D.settlement.asc} chain="settlement" /></dd>
              <dt>Pool</dt><dd><Addr addr={D.settlement.pool} chain="settlement" /></dd>
              <dt>KSU</dt><dd><Addr addr={D.settlement.token} chain="settlement" /></dd>
              <dt>BlockProver</dt><dd className="mono">{short(D.precompiles.blockProver)}</dd>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
