/**
 * Explanatory diagrams. Inline SVG rather than images: they inherit the theme tokens, the
 * text stays selectable, and nothing goes blurry when a judge zooms in.
 */

const T = {
  label: { fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.08em", fill: "var(--text-faint)" },
  body: { fontFamily: "var(--body)", fontSize: 11, fill: "var(--text-dim)" },
  strong: { fontFamily: "var(--body)", fontSize: 11.5, fill: "var(--text)" },
  mono: { fontFamily: "var(--mono)", fontSize: 10, fill: "var(--text-dim)" },
} as const;

/** What the contract actually reads out of one Ethereum receipt. */
export function ReceiptAnatomy() {
  return (
    <figure className="dia">
      <svg viewBox="0 0 720 300" role="img" aria-labelledby="dia-receipt-t">
        <title id="dia-receipt-t">
          One Ethereum receipt carries a canonical USDC Transfer log and the gateway&rsquo;s own
          event; the contract cross-checks them before paying.
        </title>

        <rect x="8" y="30" width="330" height="244" rx="12" fill="var(--ink-raised)" stroke="var(--line)" />
        <text x="24" y="52" style={T.label}>ONE ETHEREUM RECEIPT</text>

        <rect x="24" y="66" width="298" height="26" rx="6" fill="var(--surface)" stroke="var(--line-bright)" />
        <text x="36" y="83" style={T.mono}>status</text>
        <text x="306" y="83" style={{ ...T.mono, fill: "var(--pass)" }} textAnchor="end">0x1</text>

        <rect x="24" y="102" width="298" height="76" rx="8" fill="var(--surface)"
              stroke="var(--source)" strokeOpacity="0.55" />
        <g transform="translate(36 108) scale(0.007)">
          <path d="M1000 2000c554.17 0 1000-445.83 1000-1000S1554.17 0 1000 0 0 445.83 0 1000s445.83 1000 1000 1000z" fill="#2775ca" />
        </g>
        <text x="54" y="120" style={{ ...T.label, fill: "var(--source)" }}>LOG · CIRCLE USDC</text>
        <text x="36" y="139" style={T.mono}>from → to</text>
        <text x="36" y="157" style={T.mono}>value 12.000000</text>
        <text x="306" y="139" style={{ ...T.body, fill: "var(--text-faint)" }} textAnchor="end">load-bearing</text>

        <rect x="24" y="188" width="298" height="70" rx="8" fill="var(--surface)" stroke="var(--line-bright)" />
        <text x="36" y="206" style={T.label}>LOG · OUR GATEWAY</text>
        <text x="36" y="225" style={T.mono}>beneficiaryId</text>
        <text x="36" y="243" style={T.mono}>purposeCode</text>
        <text x="306" y="225" style={{ ...T.body, fill: "var(--text-faint)" }} textAnchor="end">self-reported</text>

        {[
          ["Transaction did not revert", 66],
          ["Token is the pinned USDC address", 110],
          ["Recipient is the registered treasury", 148],
          ["Amounts and sender agree across both logs", 190],
          ["This proof has not been spent before", 232],
        ].map(([text, y], i) => (
          <g key={i}>
            <path d={`M338 ${(y as number) + 13} H 412`} stroke="var(--line-bright)" strokeWidth="1" />
            <circle cx="412" cy={(y as number) + 13} r="3" fill="var(--settle)" />
            <text x="426" y={(y as number) + 17} style={T.strong}>{text}</text>
          </g>
        ))}

        <text x="426" y="24" style={T.label}>FIVE CHECKS, ONE TRANSACTION</text>
      </svg>
      <figcaption>
        The USDC log cannot exist unless the token actually moved, so that is the log the payout
        depends on. Our own event only names who the money is for.
      </figcaption>
    </figure>
  );
}

/** Where the seven minutes go, and where they do not. */
export function Timeline() {
  const marks: [string, string, number][] = [
    ["Deposit lands", "Ethereum", 24],
    ["Block finalised, attestors publish", "~7 min 30 s", 300],
    ["Proof generated", "seconds", 470],
    ["Verified and settled", "one block, ~15 s", 570],
  ];
  return (
    <figure className="dia">
      <svg viewBox="0 0 720 150" role="img" aria-labelledby="dia-time-t">
        <title id="dia-time-t">
          Almost all of the delay is waiting for Ethereum finality and attestation; verification
          itself takes one Creditcoin block.
        </title>
        <rect x="24" y="58" width="446" height="10" rx="5" fill="var(--surface)" stroke="var(--line-bright)" />
        <rect x="470" y="58" width="226" height="10" rx="5" fill="var(--settle)" fillOpacity="0.22"
              stroke="var(--settle)" strokeOpacity="0.5" />
        <text x="247" y="46" style={T.label} textAnchor="middle">WAITING ON ETHEREUM</text>
        <text x="583" y="46" style={{ ...T.label, fill: "var(--settle)" }} textAnchor="middle">CREDITCOIN</text>

        {marks.map(([title, sub, x], i) => (
          <g key={i}>
            <circle cx={x} cy="63" r="4.5" fill={i === 3 ? "var(--settle)" : "var(--source)"} />
            <text x={x} y="92" style={T.strong} textAnchor={i === 0 ? "start" : i === 3 ? "end" : "middle"}>
              {title}
            </text>
            <text x={x} y="108" style={T.body} textAnchor={i === 0 ? "start" : i === 3 ? "end" : "middle"}>
              {sub}
            </text>
          </g>
        ))}
      </svg>
      <figcaption>
        Nothing can shorten the first stretch — attestors only follow finalised blocks. Everything
        the contract does happens in the last one.
      </figcaption>
    </figure>
  );
}

/** Why the payout can be real without anything crossing a bridge. */
export function PreFunding() {
  return (
    <figure className="dia">
      <svg viewBox="0 0 720 240" role="img" aria-labelledby="dia-fund-t">
        <title id="dia-fund-t">
          The liquidity provider holds inventory on both chains. Only the proof travels between
          them.
        </title>
        <rect x="8" y="26" width="300" height="188" rx="12" fill="var(--ink-raised)"
              stroke="var(--source)" strokeOpacity="0.35" />
        <text x="26" y="50" style={{ ...T.label, fill: "var(--source)" }}>ETHEREUM</text>
        <text x="26" y="80" style={T.strong}>Sender deposits USDC</text>
        <path d="M26 96 H 214" stroke="var(--line-bright)" strokeDasharray="3 3" />
        <text x="26" y="122" style={T.strong}>Provider&rsquo;s treasury receives it</text>
        <text x="26" y="140" style={T.body}>inventory grows on this side</text>

        <rect x="412" y="26" width="300" height="188" rx="12" fill="var(--ink-raised)"
              stroke="var(--settle)" strokeOpacity="0.35" />
        <text x="430" y="50" style={{ ...T.label, fill: "var(--settle)" }}>CREDITCOIN</text>
        <text x="430" y="80" style={T.strong}>Pool pays the school</text>
        <path d="M430 96 H 618" stroke="var(--line-bright)" strokeDasharray="3 3" />
        <text x="430" y="122" style={T.strong}>from money already there</text>
        <text x="430" y="140" style={T.body}>inventory shrinks on this side</text>

        <path d="M308 108 H 412" stroke="url(#dgrad)" strokeWidth="2" />
        <circle cx="308" cy="108" r="3.5" fill="var(--source)" />
        <circle cx="412" cy="108" r="3.5" fill="var(--settle)" />
        <text x="360" y="96" style={T.label} textAnchor="middle">THE PROOF</text>
        <text x="360" y="132" style={{ ...T.body, fill: "var(--text-faint)" }} textAnchor="middle">
          no value here
        </text>
        <defs>
          <linearGradient id="dgrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--source)" />
            <stop offset="100%" stopColor="var(--settle)" />
          </linearGradient>
        </defs>

        <text x="360" y="200" style={T.body} textAnchor="middle">
          The two sides are settled between the provider and its partners, off-chain.
        </text>
      </svg>
      <figcaption>
        This is how remittance corridors already work. The part that was missing is a trustworthy
        answer to whether the sender really paid.
      </figcaption>
    </figure>
  );
}
