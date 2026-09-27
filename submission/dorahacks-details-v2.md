# DoraHacks BUIDL 페이지 업그레이드 (수상작 비교 반영) — 2026-09-07

> 근거: 직전 시즌(BUIDL CTC) 수상작 3개 페이지 실측 비교. 2등 HashCredit 페이지가 가장 깊었고 그 구조를 빌렸다.
> - 검증 항목을 **"Check → What it proves" 표**로 (우리는 목록만)
> - **배포 주소를 페이지에 직접** (심사위원이 바로 확인) — 우리는 README에만 있음
> - **Why Creditcoin** 섹션 — 심사 핵심축 "Attestcoin 활용 깊이"에 직접 답함
> - **Testnet vs Mainnet 정직 섹션** — 우리는 README에만 있음
> - 태그: 수상작은 3~4개(DeFi·Infra/API·RWA), 우리는 `Crypto / Web3` 1개
> - 영상: 셋 다 YouTube 링크. 우리는 GitHub Pages mp4 (브라우저 재생은 되지만 썸네일·미리보기 없음)

## 1) 톱니바퀴(⚙) → **Edit Details** → "Switch to old editor" → 아래 전체를 붙여넣기

```
# Kirogi: Purpose-Bound Remittance

**One-liner.** Kirogi is a purpose-bound remittance protocol: funds settle on Creditcoin strictly for their intended use, and nothing else. A parent abroad sends USDC on Ethereum; the Attestcoin Protocol proves the deposit; `KirogiASC` verifies six facts about that receipt and pays the school from pre-funded liquidity. No bridges, no oracles, no one reporting balances. Only the raw cryptographic fact crosses chains.

## Problem

- Remittances are the largest private capital flow into low-income countries, and the receiving side still trusts a counter, a bank, or a person to say "the money arrived".
- Purpose is a promise. Money sent "for tuition" becomes cash on arrival, and nothing enforces it.
- The World Bank puts the global average cost of sending $200 at 6.49%, 8.78% in Sub-Saharan Africa and 9.50% through banks, against a UN target of 3%.
- Existing purpose-bound services (PayAngel and similar) work by trusting the operator. The claim here is narrower and harder: the receiving chain no longer has to trust anyone's word that the sending side paid.

## Solution: how one remittance flows

1. **Send (Ethereum).** The sender logs in with an email (embedded wallet) and calls `RemittanceGateway.remit(beneficiaryId, amount, purpose)`. The gateway is ownerless and immutable; it pulls canonical USDC into a treasury, so the same receipt carries Circle's own `Transfer` log next to our `RemittanceSent` log.
2. **Prove (Attestcoin).** The Attestcoin prover returns an inclusion proof for that transaction against an on-chain attestation of Ethereum.
3. **Verify (Creditcoin).** `KirogiASC` extends the official `ASCBase`. The BlockProver precompile at `0x0FD2` checks inclusion; the contract then runs the six checks below on the decoded receipt.
4. **Settle.** `SettlementPool` pays the registered school only if the sender's stated purpose is one the school has registered. Otherwise the settlement reverts on-chain with `PurposeNotAllowed`.

## Why Creditcoin

Attestcoin gives a contract a fact about another chain without a bridge and without an oracle. Kirogi is that pattern taken to the end: the fact is "canonical USDC moved into this treasury in this transaction", and everything that pays out depends on it. The precompile proves inclusion, not success and not meaning. The product is the six checks that turn an inclusion proof into a payout decision.

Two source chains are wired into a single contract: Sepolia (chainKey 1, action 1) and Ethereum mainnet (chainKey 3, action 2). Adding a chain is a registration call, not a rewrite.

## Six on-chain checks

| # | Check | What it proves |
|---|---|---|
| 1 | Inclusion (`ASCBase` + `0x0FD2`) | The transaction is in an attested Ethereum block; the query id is burned on first use, so a proof cannot be replayed |
| 2 | Receipt status == 1 | The remittance did not revert. A reverted transaction carries a perfectly valid inclusion proof |
| 3 | `Transfer` from Circle's USDC contract | Real USDC moved. A look-alike token named "USDC" fails here |
| 4 | `Transfer` recipient == registered treasury | The money landed where the pool's liquidity is backed |
| 5 | Gateway `RemittanceSent` matches sender and amount | The self-reported metadata describes the same movement as the token log |
| 6 | Purpose is in the school's registered set | The sender's intent is enforced at the point of payout, not just recorded |

Check 3 and 4 together are the load-bearing ones. An admin key can sign a payment that never happened; a canonical USDC log cannot exist unless USDC actually moved.

## It ran on public networks

- 12 remittances: 11 on Sepolia, 1 on Ethereum mainnet (1.000000 USDC, sent from an email-login embedded wallet).
- 8 settled on Creditcoin (the school holds 19.000000 KSU). 5 refused on-chain: 4 because the source transaction reverted (`SourceTransactionFailed`), 1 because a successful deposit was earmarked "exam fee" for a school registered only for tuition, dormitory and books (`PurposeNotAllowed`).
- Every one of the batch outcomes was predicted by `eth_call` through the real precompile before broadcast.
- 26 Foundry tests replay captured real proofs. Because Foundry cannot run the custom precompile, the same proofs are also executed unmocked against the live `0x0FD2` with `eth_call` (`scripts/live_check.ts`).
- Every hash is on the evidence page: https://choiaewoooon.github.io/kirogi/

## What the demo shows

Email sign-in, a real send on Ethereum, the ~8 minute attestation wait compressed, the settlement on Creditcoin, and two refusals: a deposit that reverted at the source, and a valid proof sent for a purpose the school does not accept. There is no narration by design; every step is a transaction you can open.

## Testnet vs mainnet

Verification and settlement run on Creditcoin testnet (CC3). The source leg was run twice: on Sepolia for the batch, and once on Ethereum mainnet with real USDC to show that nothing in the contract depends on testnet conditions. Liquidity is pre-funded test KSU. Refused deposits stay in the treasury and are returned off-chain; production needs escrow with a `refund()` path, and the README says so.

## Deployed contracts

| Contract | Chain | Address |
|---|---|---|
| `KirogiASC` | Creditcoin CC3 (102031) | `0x4Ea7D8d61BC3e0b3fe28496e2eeD7506C3cFcD45` |
| `SettlementPool` v2 (purpose enforcement) | Creditcoin CC3 | `0xC471E417383C01c0053F79660224428Edd37e8e3` |
| `SettlementToken` (KSU) | Creditcoin CC3 | `0xA57eEa3D273d8558F428602fa1ac66cE0b93a441` |
| `RemittanceGateway` | Ethereum mainnet | `0x53B98C348b9B2E8aDf43dFd07025Ed49de907f2E` (verified source, ownerless) |
| `RemittanceGateway` | Sepolia | `0x1C2152e3fAbC8Ba1314F60d25Bb6f306Ef9Ab053` |
| Treasury | Ethereum mainnet / Sepolia | `0x5b0cCA1E5AA5CD83FdD7CCAf37454f00A87F08Bf` / `0x86CF30f751e0138A3272e3A148eF59Fd77C7366F` |

## What this does not claim

Purpose is self-reported (Attestcoin proves the transfer, never that the label is true). Identity is off-chain. Settlement partners are whitelisted by an operator. The off-ramp is a contract, not code.

## Links

- Live app: https://choiaewoooon.github.io/kirogi/app/send/
- Evidence (every hash): https://choiaewoooon.github.io/kirogi/
- Code: https://github.com/choiaewoooon/kirogi
- Deck (PDF): https://choiaewoooon.github.io/kirogi/Kirogi-deck.pdf
- Demo video: https://choiaewoooon.github.io/kirogi/Kirogi-demo.mp4
```

## 2) 톱니바퀴(⚙) → **Edit BUIDL Profile** → 태그 추가 (수상작 평균 3~4개)

- Sector/tech: `RWA`, `Payments`(있으면), `DeFi`(없으면 생략)
- Infrastructure/기타: `Ethereum`, `Creditcoin`, `Attestcoin Protocol`, `Stablecoin`

## 3) 제출 답변 #1 "Project Name"이 `RWA`로 들어가 있음 (버그, 내가 채우다 밀림)

- 페이지에 보이는 이름은 `Kirogi`라 방문자·심사위원 화면에는 영향 없음. 주최측이 답변을 CSV로 뽑을 때만 "Project Name: RWA"로 보임.
- Manage Submission 창에는 Track만 있고 답변 수정 UI가 없음. 플랫폼 API로 고칠 수는 있는데(같은 엔드포인트) 제출물 변경이라 내 권한으로는 막힘.
- 권장: 해커톤 페이지 **Message(주최측 DM)**로 한 줄 요청 — "Submission #54276 (Kirogi): answer to 'Project Name' should read 'Kirogi' (typed 'RWA' by mistake). Could you correct it or let me re-edit?"

## 4) 선택: 영상 YouTube 업로드

수상작 3팀 모두 YouTube. `docs/Kirogi-demo.mp4`(2.7MB)를 **Unlisted**로 올리고 링크를 Edit BUIDL Profile의 Demo video와 위 Links에 바꿔 넣으면 썸네일·인라인 재생이 생김. 계정 조작이라 사용자가 직접.
