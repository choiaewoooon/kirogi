#!/usr/bin/env bash
# The Ethereum MAINNET leg. Real money, in cents: one ownerless gateway contract, then the
# existing KirogiASC on Creditcoin learns about it as action 2 / chainKey 3.
# Needs MAINNET_DEPLOYER_ADDRESS funded with a little ETH for gas. Nothing here moves USDC —
# the remittance itself is sent by a person from their own wallet (web /send).
set -euo pipefail
cd "$(dirname "$0")/.."
set -a; . ./.env; set +a
: "${MAINNET_DEPLOYER_KEY:?}" "${MAINNET_TREASURY_ADDRESS:?}" "${USDC_MAINNET:?}" "${KIROGI_ASC:?}"

BAL=$(cast balance "$MAINNET_DEPLOYER_ADDRESS" --rpc-url "$MAINNET_RPC" --ether)
echo "deployer $MAINNET_DEPLOYER_ADDRESS  balance $BAL ETH  gas $(cast gas-price --rpc-url "$MAINNET_RPC" | awk '{printf "%.2f gwei",$1/1e9}')"

if [ -z "${MAINNET_GATEWAY:-}" ]; then
  MAINNET_GATEWAY=$(forge create contracts/RemittanceGateway.sol:RemittanceGateway \
    --rpc-url "$MAINNET_RPC" --private-key "$MAINNET_DEPLOYER_KEY" --broadcast \
    --constructor-args "$USDC_MAINNET" "$MAINNET_TREASURY_ADDRESS" 2>&1 | awk '/Deployed to:/{print $3}')
  [ -n "$MAINNET_GATEWAY" ] || { echo "deploy failed"; exit 1; }
  echo "gateway  $MAINNET_GATEWAY"
  echo "MAINNET_GATEWAY=$MAINNET_GATEWAY" >> .env
else
  echo "gateway  $MAINNET_GATEWAY (already deployed)"
fi

# source verification on Blockscout needs no API key
forge verify-contract "$MAINNET_GATEWAY" contracts/RemittanceGateway.sol:RemittanceGateway \
  --verifier blockscout --verifier-url https://eth.blockscout.com/api \
  --constructor-args "$(cast abi-encode 'constructor(address,address)' "$USDC_MAINNET" "$MAINNET_TREASURY_ADDRESS")" \
  --watch 2>&1 | tail -2 || echo "(verification skipped)"

# Creditcoin side: same ASC, new source. Burner key pays CTC only.
cast send --rpc-url "$CC3_RPC" --private-key "$PRIVATE_KEY" "$KIROGI_ASC" \
  "configureSource(uint8,uint64,address,address,address)" 2 3 "$MAINNET_GATEWAY" "$USDC_MAINNET" "$MAINNET_TREASURY_ADDRESS" 2>/dev/null \
  | awk '/transactionHash/{print "configureSource(2, 3, …)  " $2}'

# point the site at it
python3 - "$MAINNET_GATEWAY" "$MAINNET_TREASURY_ADDRESS" <<'PY'
import io,sys
g,t=sys.argv[1],sys.argv[2]
p="web/lib/deployment.ts"; s=io.open(p,encoding="utf-8").read()
s=s.replace('    gateway: "",                                   // set after deployment', f'    gateway: "{g}",')
s=s.replace('    treasury: "",                                  // set after deployment', f'    treasury: "{t}",')
io.open(p,"w",encoding="utf-8").write(s); print("deployment.ts: mainnet gateway/treasury set")
PY
echo "done. next: a person sends USDC via /send (Ethereum), then:"
echo "  npx tsx scripts/submit_proof.ts <txHash> --action 2 --chain-key 3 --fixture mainnet-flow"
