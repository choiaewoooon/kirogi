import { Tracker } from "./Tracker";
import { DEPLOYMENT as D } from "@/lib/deployment";

export const metadata = { title: "Track a remittance — Kirogi" };

export default function Track() {
  return (
    <main>
      <section className="section shell">
        <p className="eyebrow">Track</p>
        <h1 className="display d1" style={{ maxWidth: "18ch" }}>
          Watch a deposit become provable.
        </h1>
        <p className="lede" style={{ marginTop: "1.5rem" }}>
          Paste any Ethereum Sepolia transaction hash. This page asks the Attestcoin prover whether
          the block it landed in has been attested yet, then whether Creditcoin has settled it. The
          wait is real: attestors follow finalised blocks and publish about every two minutes.
        </p>
        <Tracker />
      </section>

      <section className="section shell">
        <p className="eyebrow">To create one</p>
        <div className="two-up">
          <p className="lede">
            Approve USDC to the gateway, then call{" "}
            <span className="mono">remit(beneficiaryId, amount, purposeCode)</span>. The gateway
            pulls canonical USDC, which puts an unforgeable Transfer log in the same receipt as the
            remittance event.
          </p>
          <div className="card">
            <dl className="kv">
              <dt>Gateway</dt>
              <dd>
                <a className="hash" href={`${D.source.explorer}/address/${D.source.gateway}`} target="_blank" rel="noreferrer">
                  {D.source.gateway}
                </a>
              </dd>
              <dt>USDC</dt>
              <dd>{D.source.usdc}</dd>
              <dt>Faucet</dt>
              <dd>
                <a className="hash" href="https://faucet.circle.com" target="_blank" rel="noreferrer">
                  faucet.circle.com
                </a>
              </dd>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
