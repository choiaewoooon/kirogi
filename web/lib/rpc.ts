/**
 * Public testnet RPCs answer inconsistently: `ethereum-sepolia-rpc.publicnode.com` is
 * load balanced and some nodes behind it return `null` for a receipt they simply do not
 * have. `null` is a *successful* JSON-RPC response, so no provider-level retry catches it.
 * Measured 2026-09-02 over five calls for the same known-good receipt:
 *
 *   publicnode  3/5     1rpc  5/5     tenderly  5/5
 *
 * So every read here races several endpoints and takes the first useful answer.
 */
import { JsonRpcProvider, type TransactionReceipt } from "ethers";

export const SOURCE_RPCS = [
  "https://sepolia.gateway.tenderly.co",
  "https://ethereum-sepolia-rpc.publicnode.com",
  "https://1rpc.io/sepolia",            // fine for receipts; refused eth_getBalance on the free tier
] as const;

export const SETTLEMENT_RPCS = ["https://rpc.cc3-testnet.creditcoin.network"] as const;

/** First endpoint that actually has the receipt wins; null only if none of them do. */
export async function findReceipt(
  hash: string,
  urls: readonly string[] = SOURCE_RPCS,
): Promise<TransactionReceipt | null> {
  const races = urls.map(async (url) => {
    const r = await new JsonRpcProvider(url).getTransactionReceipt(hash);
    if (!r) throw new Error(`no receipt at ${url}`);   // reject so Promise.any moves on
    return r;
  });
  try {
    return await Promise.any(races);
  } catch {
    return null;
  }
}

/** Run a read against each endpoint in turn; throw only if they all fail. */
export async function read<T>(
  urls: readonly string[],
  fn: (p: JsonRpcProvider) => Promise<T>,
): Promise<T> {
  let last: unknown;
  for (const url of urls) {
    try {
      return await fn(new JsonRpcProvider(url));
    } catch (e) {
      last = e;
    }
  }
  throw last instanceof Error ? last : new Error("every RPC endpoint failed");
}
