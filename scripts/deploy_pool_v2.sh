#!/usr/bin/env bash
# Swap in SettlementPool v2 (purpose enforcement + settlement count) behind the existing ASC.
# KirogiASC keeps its address: setPool() is the one mutable pointer it has, and every earlier
# settlement stays on the explorer under the same contract.
set -euo pipefail
cd "$(dirname "$0")/.."
set -a; . ./.env; set +a
DECODER_PATH="node_modules/@gluwa/usc-contracts/contracts/decoding/EvmV1Decoder.sol:EvmV1Decoder"
send() { cast send --rpc-url "$CC3_RPC" --private-key "$PRIVATE_KEY" "$@" 2>/dev/null | awk '/transactionHash/{print $2}'; }
call() { cast call --rpc-url "$CC3_RPC" "$@" 2>/dev/null; }

# bit n = purpose n: 1 tuition · 2 dormitory · 3 books  → 0b1110 = 14. Exam fee (4) is not in.
SCHOOL_PURPOSES=14
OLD_POOL="$SETTLEMENT_POOL"

POOL=$(forge create contracts/SettlementPool.sol:SettlementPool \
  --rpc-url "$CC3_RPC" --private-key "$PRIVATE_KEY" --broadcast \
  --libraries "${DECODER_PATH}:${EVM_DECODER}" \
  --constructor-args "$SETTLEMENT_TOKEN" "$DEPLOYER_ADDRESS" 2>&1 | awk '/Deployed to:/{print $3}')
[ -n "$POOL" ] || { echo "deploy failed"; exit 1; }
echo "pool v2        $POOL"
echo "setAsc         $(send "$POOL" "setAsc(address)" "$KIROGI_ASC")"
echo "register       $(send "$POOL" "registerSettlementPartner(bytes32,address,uint32)" "$DEMO_BENEFICIARY_ID" "$DEMO_SCHOOL" $SCHOOL_PURPOSES)"
echo "asc.setPool    $(send "$KIROGI_ASC" "setPool(address)" "$POOL")"
echo "mint 1,000,000 $(send "$SETTLEMENT_TOKEN" "mint(address,uint256)" "$POOL" 1000000000000)"
OLD_BAL=$(call "$SETTLEMENT_TOKEN" "balanceOf(address)(uint256)" "$OLD_POOL" | awk '{print $1}')
echo "drain old pool $(send "$OLD_POOL" "withdraw(address,uint256)" "$DEPLOYER_ADDRESS" "$OLD_BAL")  ($OLD_BAL)"

echo "--- verify"
echo "asc.pool()      $(call "$KIROGI_ASC" "pool()(address)")"
echo "partner         $(call "$POOL" "settlementAddressOf(bytes32)(address)" "$DEMO_BENEFICIARY_ID")"
echo "allowed mask    $(call "$POOL" "allowedPurposesOf(bytes32)(uint32)" "$DEMO_BENEFICIARY_ID")"
for c in 1 2 3 4; do printf "purpose %s → %s   " "$c" "$(call "$POOL" "purposeAllowed(bytes32,uint16)(bool)" "$DEMO_BENEFICIARY_ID" $c)"; done; echo
echo "liquidity       $(call "$SETTLEMENT_TOKEN" "balanceOf(address)(uint256)" "$POOL")"

# point everything at v2
sed -i '' "s|^SETTLEMENT_POOL=.*|SETTLEMENT_POOL=$POOL|" .env
echo "SETTLEMENT_POOL_V1=$OLD_POOL" >> .env
sed -i '' "s|pool: \"$OLD_POOL\"|pool: \"$POOL\"|" web/lib/deployment.ts
grep -n "pool:" web/lib/deployment.ts
