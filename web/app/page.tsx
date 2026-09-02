import { Crossing } from "./Crossing";
import { ReceiptAnatomy, Timeline, PreFunding } from "./Diagrams";
import { DEPLOYMENT as D } from "@/lib/deployment";
import Link from "next/link";

const CHECKS = [
  {
    n: "Inclusion",
    what: "The deposit is in a finalised Ethereum block",
    how: "Merkle proof plus a continuity chain back to an on-chain attestation, verified by the BlockProver precompile at 0x0FD2.",
  },
  {
    n: "Success",
    what: "The deposit did not revert",
    how: "The precompile proves inclusion, not success. A reverted remittance carries a perfectly valid proof, so the contract reads receiptStatus itself and refuses anything but 1.",
  },
  {
    n: "Canonical token",
    what: "The tokens were Circle's USDC",
    how: "Sepolia hosts more than one contract answering to the name USDC. The address is pinned; a look-alike fails here.",
  },
  {
    n: "Destination",
    what: "The tokens landed in the treasury",
    how: "The Transfer log's recipient must equal the registered treasury, and its sender and amount must match the gateway's own event.",
  },
  {
    n: "Single use",
    what: "This proof had not been spent",
    how: "A query id keyed on chain, block height and transaction index is burned on first use. Presenting the same proof twice reverts.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="section shell">
        <p className="eyebrow">Ethereum → Creditcoin · settled 12.000000 on testnet</p>
        <Crossing />
        <div className="hero__claim">
          <h1 className="display d1">
            The money never crossed.
            <br />
            The proof did.
          </h1>
          <p className="lede">
            A parent in a transnational family deposits USDC on Ethereum. Seven minutes later a
            school on Creditcoin is paid from local liquidity — because a contract read the deposit itself
            instead of being told about it. No bridge holds the funds, and nobody has to be trusted
            to say the deposit happened.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary" href="/evidence">
              See the transactions
            </Link>
            <Link className="btn btn--ghost" href="/track">
              Track a deposit
            </Link>
          </div>
        </div>
      </section>

      <section className="section shell">
        <p className="eyebrow">What the contract checked</p>
        <h2 className="display d2" style={{ maxWidth: "20ch" }}>
          Five things had to be true before anyone got paid.
        </h2>
        <ReceiptAnatomy />
        <ol className="checks">
          {CHECKS.map((c) => (
            <li key={c.n} className="check">
              <h3 className="display d3">{c.n}</h3>
              <p className="check__what">{c.what}</p>
              <p className="check__how">{c.how}</p>
            </li>
          ))}
        </ol>
        <p className="lede" style={{ marginTop: "2.5rem" }}>
          Two of these were proven the hard way: a remittance that reverted on Ethereum was
          submitted with a valid proof and rejected on-chain, and the same good proof was replayed
          and refused.{" "}
          <Link href="/evidence" className="hash">
            Open the evidence
          </Link>
          .
        </p>
      </section>

      <section className="section shell">
        <p className="eyebrow">Where the time goes</p>
        <h2 className="display d2" style={{ maxWidth: "22ch" }}>
          Seven minutes of waiting, then one block of work.
        </h2>
        <Timeline />
      </section>

      <section className="section shell">
        <p className="eyebrow">Why Creditcoin holds the payout</p>
        <div className="two-up">
          <p className="lede">
            Value does not move between chains here. A liquidity provider keeps inventory on both
            sides and nets off-chain — the way remittance corridors already work. The one thing
            that arrangement has always lacked is a trustworthy answer to <em>did the sender
            really pay?</em>
          </p>
          <p className="lede">
            That answer is what the Attestcoin Protocol supplies, and it is the whole reason the
            payout contract lives on Creditcoin. Ethereum has the stablecoin liquidity. Creditcoin
            has the settlement partners. Neither has both.
          </p>
        </div>
        <PreFunding />
      </section>

      <section className="section shell">
        <p className="eyebrow">What this does not claim</p>
        <h2 className="display d2" style={{ maxWidth: "22ch" }}>
          The proof covers less than the story does.
        </h2>
        <ul className="limits">
          <li>
            <strong>Purpose is self-reported.</strong> The gateway records what the sender says the
            money is for. Attestcoin proves the transfer happened, never that the label is true.
          </li>
          <li>
            <strong>Identity is off-chain.</strong> Nothing on-chain binds a beneficiary id to a
            real person, so a sender and a recipient could be the same someone.
          </li>
          <li>
            <strong>Settlement partners are whitelisted by an operator.</strong> That is a trusted
            role. Restricting payouts to registered addresses limits transfers, not collusion.
          </li>
          <li>
            <strong>Off-ramp is a contract, not code.</strong> How the provider converts inventory
            to local currency sits outside this system.
          </li>
          <li>
            <strong>Only Ethereum is readable today.</strong> Attestcoin attests Ethereum and
            Sepolia and nothing else yet. The source config is a registry, so another chain is a
            call rather than a rewrite.
          </li>
        </ul>
      </section>
    </main>
  );
}
