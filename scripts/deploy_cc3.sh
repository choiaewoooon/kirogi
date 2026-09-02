#!/usr/bin/env bash
# Deploy the Creditcoin side of Kirogi. Re-runnable: pass an existing DECODER to skip step 1.
# EvmV1Decoder exposes public functions, so it is a real deployed library that must be linked.
set -euo pipefail
cd "$(dirname "$0")/.."
set -a; . ./.env; set +a

DECODER_PATH="node_modules/@gluwa/usc-contracts/contracts/decoding/EvmV1Decoder.sol:EvmV1Decoder"
OWNER="$DEPLOYER_ADDRESS"

deploy() { # <contract> [constructor args...]
  local what="$1"; shift
  forge create "$what" \
    --rpc-url "$CC3_RPC" --private-key "$PRIVATE_KEY" --broadcast \
    --libraries "${DECODER_PATH}:${DECODER}" \
    ${1+--constructor-args "$@"} 2>&1 | awk '/Deployed to:/{print $3}'
}

send() { cast send --rpc-url "$CC3_RPC" --private-key "$PRIVATE_KEY" "$@" >/dev/null; }

: "${DECODER:?set DECODER=0x... (deploy the library first)}"
echo "decoder      $DECODER"

TOKEN=$(deploy contracts/SettlementToken.sol:SettlementToken "$OWNER")
echo "token        $TOKEN"

POOL=$(deploy contracts/SettlementPool.sol:SettlementPool "$TOKEN" "$OWNER")
echo "pool         $POOL"

ASC=$(deploy contracts/KirogiASC.sol:KirogiASC "$OWNER")
echo "asc          $ASC"

send "$POOL" "setAsc(address)" "$ASC"
send "$ASC" "setPool(address)" "$POOL"
send "$TOKEN" "mint(address,uint256)" "$POOL" 1000000000000   # 1,000,000 KSU (6 decimals)
echo "wired; pool liquidity: $(cast call "$TOKEN" "balanceOf(address)(uint256)" "$POOL" --rpc-url "$CC3_RPC")"

cat >> .env <<EOF

# --- CC3 deployment $(date -u +%Y-%m-%dT%H:%M:%SZ) ---
EVM_DECODER=$DECODER
SETTLEMENT_TOKEN=$TOKEN
SETTLEMENT_POOL=$POOL
KIROGI_ASC=$ASC
EOF
echo "addresses appended to .env"
