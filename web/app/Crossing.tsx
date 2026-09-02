import { DEPLOYMENT as D } from "@/lib/deployment";
import { EthMark, UsdcMark } from "./Logos";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * The thesis, drawn.
 *
 * Two rails, two balances that never move off their own chain, and one hairline between them
 * carrying the only thing that actually crosses: a proof that the deposit happened. Every
 * number here is from the transaction in lib/deployment.ts.
 */
export function Crossing() {
  const { proven } = D;
  return (
    <figure className="crossing" aria-labelledby="crossing-cap">
      {/* The bird makes the crossing it is named for: it sits between the rails, facing
          the chain that settles. One identity, one diagram — not a wordmark and a picture. */}
      <img className="flier" src={`${BASE}/kirogi-mark.png`} alt="기러기 (gireogi), the wild goose"
           width={880} height={699} />

      <div className="rail rail--source">
        <p className="rail__chain">
          <EthMark />
          {D.source.name}
        </p>
        <p className="rail__amount">
          {proven.amountUsdc}
          <span> USDC</span>
          <UsdcMark size={20} />
        </p>
        <p className="rail__note">received by the liquidity provider&rsquo;s treasury — and stays there</p>
      </div>

      <div className="span">
        <p className="span__crosses">only the fact crosses</p>
        <div className="span__wire" aria-hidden="true">
          <svg viewBox="0 0 240 12" preserveAspectRatio="none" className="span__svg">
            <defs>
              <linearGradient id="crossgrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--source)" />
                <stop offset="100%" stopColor="var(--settle)" />
              </linearGradient>
            </defs>
            <line className="span__path" x1="0" y1="6" x2="240" y2="6" />
            <line className="span__pulse" x1="0" y1="6" x2="240" y2="6" />
          </svg>
          <span className="span__node span__node--a" />
          <span className="span__node span__node--b" />
        </div>
        <p className="span__label mono">
          txIndex&nbsp;{proven.txIndex} · {proven.merkleSiblings}&nbsp;merkle&nbsp;siblings ·{" "}
          {proven.continuityRoots}&nbsp;continuity&nbsp;roots
        </p>
      </div>

      <div className="rail rail--settle">
        <p className="rail__chain">{D.settlement.name}</p>
        <p className="rail__amount">
          {proven.amountUsdc}
          <span> KSU</span>
        </p>
        <p className="rail__note">paid to the registered school from pre-funded liquidity</p>
      </div>

      <figcaption id="crossing-cap" className="crossing__cap">
        <span className="naming">
          {/* The three syllables of 기러기, stretched until they are the bird. Cool at the tail,
              warm at the beak — the same two colours the rails use, so the direction the goose
              faces is the direction the money settles. */}
          <span className="crossing__gloss">
            <b className="ko">기러기</b> <i>gireogi</i> is the Korean word for a wild goose, and
            for a family with a border through it. Hong Kong says <b>astronaut family</b>. The
            research says <b>transnational family</b>. Whichever name, one parent earns on one
            side and the money has to reach the other.
          </span>
        </span>
        No bridge carried this value. Both balances were always on their own chain.
      </figcaption>
    </figure>
  );
}
