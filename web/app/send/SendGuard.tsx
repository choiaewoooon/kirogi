"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { PRIVY_APP_ID } from "@/lib/wagmi";

/**
 * Same shape as a protected page in a Privy app: the rest of the site is public, and the
 * login sheet opens the moment someone reaches the one page that acts on their behalf.
 * Without a Privy app id there is nothing to gate — the page uses the browser's wallet.
 */
function PrivyGate({ children }: { children: ReactNode }) {
  const { ready, authenticated, login } = usePrivy();
  const [asked, setAsked] = useState(false);
  const [slow, setSlow] = useState(false);
  useEffect(() => {
    if (ready && !authenticated && !asked) { setAsked(true); login(); }
  }, [ready, authenticated, asked, login]);
  // if the auth service never answers, say so instead of spinning forever
  useEffect(() => { const t = setTimeout(() => setSlow(true), 8000); return () => clearTimeout(t); }, []);

  if (!ready) {
    return slow
      ? <p className="tracker__label">Sign-in is taking longer than usual. Check your connection, or try again in a moment.</p>
      : <p className="tracker__label">Loading sign-in…</p>;
  }
  if (!authenticated) {
    return (
      <div className="tracker">
        <p className="lede" style={{ marginTop: 0 }}>Sending is the one thing here that needs to know who you are.</p>
        <div className="tracker__row" style={{ marginTop: "1rem" }}>
          <button type="button" className="btn btn--primary" onClick={() => login()}>Sign in — email, Google or a wallet</button>
        </div>
      </div>
    );
  }
  return <>{children}</>;
}

export function SendGuard({ children }: { children: ReactNode }) {
  return PRIVY_APP_ID ? <PrivyGate>{children}</PrivyGate> : <>{children}</>;
}
