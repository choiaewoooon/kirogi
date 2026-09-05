import Link from "next/link";
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
          Paste a transaction hash from Ethereum Sepolia or Ethereum mainnet. This page reads the
          receipt, checks the purpose against the school&rsquo;s registration on Creditcoin, then asks
          the Attestcoin prover whether the block has been attested yet. The wait is real: attestors
          follow finalised blocks and publish about every two minutes.
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
              <dt>Gateway · Sepolia</dt>
              <dd>
                <a className="hash" href={`${D.source.explorer}/address/${D.source.gateway}`} target="_blank" rel="noreferrer">
                  {D.source.gateway}
                </a>
              </dd>
              <dt>Gateway · Ethereum</dt>
              <dd>
                <a className="hash" href={`${D.mainnet.explorer}/address/${D.mainnet.gateway}`} target="_blank" rel="noreferrer">
                  {D.mainnet.gateway}
                </a>
              </dd>
              <dt>USDC</dt>
              <dd>{D.source.usdc} <span className="mono" style={{ color: "var(--text-faint)" }}>(Sepolia)</span></dd>
              <dt>Or simply</dt>
              <dd><Link href="/send" className="hash">use the Send page — sign in, no wallet needed</Link></dd>
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
