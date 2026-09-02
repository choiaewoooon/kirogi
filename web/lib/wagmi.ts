import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { defineChain } from "viem";
import { DEPLOYMENT as D } from "./deployment";

/** Creditcoin CC3 testnet, read-only here: the send page asks it whether a purpose is accepted. */
export const cc3 = defineChain({
  id: D.settlement.chainId,
  name: "Creditcoin CC3 Testnet",
  nativeCurrency: { name: "Creditcoin", symbol: "CTC", decimals: 18 },
  rpcUrls: { default: { http: [D.settlement.rpc] } },
  blockExplorers: { default: { name: "Blockscout", url: D.settlement.explorer } },
  testnet: true,
});

export const chains = [mainnet, sepolia, cc3] as const;

/**
 * Standard wagmi config. Without Privy this is the whole wallet layer: every EIP-6963 wallet
 * the browser has (MetaMask, Rabby, Coinbase, …) shows up through `injected()` and wagmi owns
 * connection state, chain switching and receipt polling. With Privy, this same config is handed
 * to @privy-io/wagmi so the embedded email wallet and external wallets share one code path.
 */
export const wagmiConfig = createConfig({
  chains,
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(D.mainnet.rpc),
    [sepolia.id]: http(D.source.rpc),
    [cc3.id]: http(D.settlement.rpc),
  },
  ssr: false,
});

export const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID ?? "";
