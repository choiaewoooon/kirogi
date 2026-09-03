import { Send } from "./Send";
import { SendGuard } from "./SendGuard";

export const metadata = { title: "Send a remittance — Kirogi" };

export default function SendPage() {
  return (
    <main>
      <section className="section shell">
        <p className="eyebrow">Send</p>
        <h1 className="display d1" style={{ maxWidth: "18ch" }}>
          Pay for one thing, from wherever you are.
        </h1>
        <p className="lede" style={{ marginTop: "1.5rem" }}>
          This is the parent&rsquo;s side. Your own wallet approves the gateway and calls{" "}
          <span className="mono">remit</span> on Ethereum. Nothing here talks to Creditcoin: the school
          is paid there only once the Attestcoin proof of this deposit is verified, and only if the
          purpose you chose is one the school accepts.
        </p>
        <SendGuard><Send /></SendGuard>
      </section>
    </main>
  );
}
