"use client";

import { useState, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { PrivyProvider } from "@privy-io/react-auth";
import { WagmiProvider as PrivyWagmiProvider } from "@privy-io/wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { wagmiConfig, PRIVY_APP_ID } from "@/lib/wagmi";

/**
 * Wallet infrastructure, not our own. With a Privy app id the parent signs in with an email or
 * a wallet and gets an embedded wallet if they have none — the shape a non-crypto user needs.
 * Without one, plain wagmi with the browser's injected wallets. Either way the send page only
 * ever sees wagmi hooks.
 */
export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  if (!PRIVY_APP_ID) {
    return (
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </WagmiProvider>
    );
  }

  return (
    <PrivyProvider
      appId={PRIVY_APP_ID}
      config={{
        loginMethods: ["email", "google", "wallet"],
        embeddedWallets: { ethereum: { createOnLogin: "users-without-wallets" } },
        defaultChain: mainnet,
        supportedChains: [mainnet, sepolia],
        appearance: { theme: "dark", accentColor: "#f0b36b", logo: "/kirogi/app/kirogi-mark.png" },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <PrivyWagmiProvider config={wagmiConfig}>{children}</PrivyWagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}
