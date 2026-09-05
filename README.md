<div align="center">
  <img src="web/public/kirogi-mark.png" alt="Kirogi" height="150">
  <h1>Kirogi</h1>
  <p><b>A remittance proven on Ethereum, settled to a school on Creditcoin.<br>
  No bridge. Nobody trusted to say the money arrived.</b></p>
  <p>
    <a href="https://choiaewoooon.github.io/kirogi/Kirogi-demo.mp4"><b>Demo video</b></a> ·
    <a href="https://choiaewoooon.github.io/kirogi/Kirogi-deck.pdf"><b>Deck (PDF)</b></a> ·
    <a href="https://choiaewoooon.github.io/kirogi/">Project page</a>
  </p>
  <p>
    <a href="#it-ran">Live transactions</a> ·
    <a href="#what-it-refuses">What it refuses</a> ·
    <a href="#what-this-does-not-claim">What this does not claim</a>
  </p>
</div>

---

## The problem already has a name in every language

Korea says **기러기** *(gireogi,* the wild goose*)*. Hong Kong says **astronaut family**.
The research says **transnational family**. One parent earns on one side of a border and the
money has to reach the other. Roughly **$900B** crosses that way each year.

The industry spent a decade making the crossing faster and cheaper. It did not remove the part
where **somebody has to be believed**: a payout on the receiving side happens before the sending
side settles, and whoever fronts that money does it because an operator said the deposit was real.

A contract on the receiving chain cannot see a deposit on Ethereum. It can only be told — by a
bridge, an oracle, or a company.

## What Kirogi does

The Attestcoin Protocol lets a Creditcoin contract read the Ethereum transaction itself.

```
[ Ethereum Sepolia ]                              [ Creditcoin CC3 ]

  sender ──USDC──▶ RemittanceGateway                SettlementPool
                   (ownerless, immutable)           (liquidity already here)
                          │                                 │
                          │   the receipt carries two logs  │
                          │    ① canonical USDC Transfer    │
                          │    ② our RemittanceSent         │
                          │                                 │
                          └── Attestcoin readability ──▶ KirogiASC
                                   (~7m30s)              six checks
                                                              │
                                                              ▼
                                                    school is paid, in real tokens
```

**Value never crosses.** The liquidity provider keeps inventory on both chains and nets off-chain,
exactly as remittance corridors already work. Only the fact crosses.

**And nothing else is needed.** No lockout hardware on the receiving end, no merchant integration,
no solver network: a school registers one wallet and the purposes it accepts, and it is live.
That is the thinnest real-world deployment this protocol allows, and it is deliberate.

## The six checks

`KirogiASC._processAndEmitEvent` refuses to pay unless all of these hold inside one receipt:

| # | Check | Why it exists |
|---|---|---|
| 1 | **Inclusion** | Merkle proof plus a continuity chain back to an on-chain attestation, verified by the BlockProver precompile at `0x0FD2`. Handled by the official `ASCBase`. |
| 2 | **Success** | The precompile proves inclusion, **not success**. A reverted remittance carries a perfectly valid proof, so the contract reads `receiptStatus` itself. |
| 3 | **Canonical token** | Sepolia hosts more than one contract answering to the name USDC. The address is pinned to Circle's. |
| 4 | **Destination** | The `Transfer` recipient must equal the registered treasury, and its sender and amount must match the gateway's own event. |
| 5 | **Single use** | A query id keyed on `chainKey · blockHeight · txIndex` is burned on first use. |
| 6 | **Purpose** | The gateway log says what the money was sent *for*. The pool holds, per beneficiary, the purposes the receiver accepts. A school registered for tuition, dormitory and books is not paid for anything else — however valid the proof. |

The load-bearing one is #3 and #4 together. **An admin key can sign a payment that never happened;
a canonical USDC log cannot exist unless USDC actually moved.** Our own event only carries
self-reported metadata — who the money is for, and what the sender says it is for. Check #6 is
where that metadata stops being a label: the receiver's registration decides whether the stated
purpose is one they take, and the settlement fails if it is not. **The sender's intent is enforced
at the point the money is paid out**, which is the whole reason a parent working abroad would use
this instead of a wire.

<a id="it-ran"></a>
## It ran

Twelve remittances: one first, end to end, on testnets; a batch of ten built so that some of
them **had** to be refused; and one on **Ethereum mainnet** — real Circle USDC, sent by a person
who signed in with an email, from the wallet that sign-in created.

| | |
|---|---|
| Deposits on Sepolia | **11** — 8 succeeded, 3 made to revert |
| Deposits on Ethereum mainnet | **1** — 1.000000 USDC, from a Privy embedded wallet |
| Settled on Creditcoin | **8** — the school holds **19.000000 KSU** |
| Refused on Creditcoin, on the explorer | **5** — 4× `SourceTransactionFailed`, 1× `PurposeNotAllowed` |
| Attestation wait | 7 min 30 s on the first run · 5 min 03 s for the batch |
| Gas per settlement | 441k–455k · ≈0.00023 CTC at the 0.5 Gcredo the network charged |
| Dry-run vs. chain | every one of the 10 outcomes was predicted by `eth_call` through the real precompile **before** broadcast |

### The first one

| Step | Result |
|---|---|
| Deposit on Sepolia | [`0x0a31dd52…`](https://sepolia.etherscan.io/tx/0x0a31dd52776f8d656cc5be3178a367f8283584e2cd7396038880dfb0b2c02e2b) · block 11,604,757 · **12.000000 USDC** · status `0x1` |
| Attestation wait | **7 min 30 s** (attestors follow finalised blocks, publishing ~every 2 min) |
| Proof | txIndex 139 · 8 merkle siblings · 4 continuity roots |
| Verified and settled | [`0x9c0857ec…`](https://creditcoin-testnet.blockscout.com/tx/0x9c0857ec8a7e37bcc6e8c01221153101d4e753850191fd376b4b8c0ede550307) · block 5,405,280 · gas **441,364** |
| School received | **12.000000 KSU** |

### The batch — `scripts/remit.ts` then `scripts/settle_batch.ts`

Seven deposits of 1 USDC with the purpose code cycling tuition → dormitory → books → exam fee,
and three that ask for more USDC than the wallet holds so `transferFrom` reverts. The school is
registered for tuition, dormitory and books. Row 4 is the one to look at: a **successful** deposit
with a **valid** proof, refused because an exam fee is not something this school takes.

| Sepolia deposit | sent for | source | `eth_call` said | Creditcoin | gas |
|---|---|---|---|---|---|
| [`0xa40711ce…`](https://eth-sepolia.blockscout.com/tx/0xa40711ceb30249e82e0aec05bc0a378dcd35001c2d828255a38616e15e4a4256) | tuition | ok | would settle | [`0xe58565d2…`](https://creditcoin-testnet.blockscout.com/tx/0xe58565d23fc3a0a4842b11ad868ec8387458c9ad941768fccbd01de5c3b84488) · **settled** · 1.000000 KSU | 453,390 |
| [`0xdf214d21…`](https://eth-sepolia.blockscout.com/tx/0xdf214d21dc69c0aaa4079e4416b4a3979656cad4fdf95c5c2691d463610afbe7) | dormitory | ok | would settle | [`0xf3837bd6…`](https://creditcoin-testnet.blockscout.com/tx/0xf3837bd622c569b6c9eb75676a198deadd3966689b73d679581557ee3b080b21) · **settled** · 1.000000 KSU | 453,838 |
| [`0xc0959f86…`](https://eth-sepolia.blockscout.com/tx/0xc0959f865178aa5e7bdaab101bb60e2b55795181d2ca0e6e60c328ff70e1d8fa) | books | ok | would settle | [`0xdcd29a05…`](https://creditcoin-testnet.blockscout.com/tx/0xdcd29a057d1f30c7eb821dcd710aef2e2a7971314ecbaae3df01cfb643470e05) · **settled** · 1.000000 KSU | 453,390 |
| [`0xae47c57e…`](https://eth-sepolia.blockscout.com/tx/0xae47c57ec4f0ce4c9c4e327eda807d9f6b52890aae2ccedd749f96b1a59365ff) | exam fee | ok | PurposeNotAllowed(0x5a1584d7faba43a9baca8c071d9ba2a56db2b16d07eacdf97f5577f764cb25d5, 4) | [`0xb03abeec…`](https://creditcoin-testnet.blockscout.com/tx/0xb03abeec480b820bf65f3d64b879d6089b94c0457b21e93ab575a1d42c9714e9) · **refused** `PurposeNotAllowed` — school takes tuition · dormitory · books | 407,820 |
| [`0xac318ba7…`](https://eth-sepolia.blockscout.com/tx/0xac318ba718651bec4fc128ebcdda02e54cb35c085e7923fc047635748a966631) | tuition | ok | would settle | [`0x244d82d2…`](https://creditcoin-testnet.blockscout.com/tx/0x244d82d2b35b2b7f944d014623555b8cedf60a18c5a7470571888b8a228de28f) · **settled** · 1.000000 KSU | 451,150 |
| [`0x370a82a1…`](https://eth-sepolia.blockscout.com/tx/0x370a82a12655ae5ebd78a4c0e624a46a268fabcca872e80eae165454847a6730) | dormitory | ok | would settle | [`0xa30d3d99…`](https://creditcoin-testnet.blockscout.com/tx/0xa30d3d9986df9a967096f287de30f0609dddf9b863f375ce48e93236f36a260b) · **settled** · 1.000000 KSU | 454,734 |
| [`0xe2f6838d…`](https://eth-sepolia.blockscout.com/tx/0xe2f6838d386158bb76ebf3b66b8c5f43fafacb352da55aca956d4b2ebd4518ff) | books | ok | would settle | [`0xed04e56a…`](https://creditcoin-testnet.blockscout.com/tx/0xed04e56ae69205fcca4e3f61a9f8411559df995bbbc2615d57ca086ac881f2ac) · **settled** · 1.000000 KSU | 454,734 |
| [`0xf1b9e4f8…`](https://eth-sepolia.blockscout.com/tx/0xf1b9e4f8b09a33411ddd5c2c690bb59988706699ec2410a33edd069f727d0e5a) | tuition | reverted | SourceTransactionFailed() | [`0xc4fbe0e6…`](https://creditcoin-testnet.blockscout.com/tx/0xc4fbe0e621d1bc692922b8aa6e28f23af284d1b6e31d04b85a1cd0e5ee0dbb4d) · **refused** `SourceTransactionFailed` | 352,730 |
| [`0x2e675a90…`](https://eth-sepolia.blockscout.com/tx/0x2e675a908dc6b1f8e48c7b402579c3846445578424ff783cfd3bde14b282e449) | dormitory | reverted | SourceTransactionFailed() | [`0xf8531eb4…`](https://creditcoin-testnet.blockscout.com/tx/0xf8531eb4a2f16ec86864df6f0c24f410fc63eec63984fdd1e3f48dd79120a550) · **refused** `SourceTransactionFailed` | 352,282 |
| [`0x37ec2d3c…`](https://eth-sepolia.blockscout.com/tx/0x37ec2d3cf4293f8b0bb1dc26921e4d5f79f18c48a58fdd29c031e20894890ab8) | books | reverted | SourceTransactionFailed() | [`0x9c891aee…`](https://creditcoin-testnet.blockscout.com/tx/0x9c891aeee386bfb6cbf1e4fadd9fcdbd051d27ccad3e2b865747ae9d3d88991d) · **refused** `SourceTransactionFailed` | 351,834 |

### Ethereum mainnet — the one that is real money

No faucet, no test token. A person signed in to the [send page](https://choiaewoooon.github.io/kirogi/app/send/)
with an email address, got an embedded wallet, funded it with 2 USDC, and sent 1 USDC for tuition.
The same `KirogiASC` read it as action 2 / chainKey 3 and paid the school.

| Step | Result |
|---|---|
| Deposit on Ethereum | [`0x2d7142ba…`](https://eth.blockscout.com/tx/0x2d7142baee3a4111f426efa434c33192e112ed9f77c32069efa369d50837da04) · block 25,910,076 · **1.000000 USDC** · status `0x1` · fee 0.000004 ETH |
| Gateway | [`0x53B98C34…`](https://eth.blockscout.com/address/0x53B98C348b9B2E8aDf43dFd07025Ed49de907f2E) — source-verified, ownerless |
| Attestation wait | ~6 min (frontier followed at 26 blocks behind head) |
| Proof | txIndex 203 · 8 merkle siblings · 5 continuity roots |
| Verified and settled | [`0x9ed88459…`](https://creditcoin-testnet.blockscout.com/tx/0x9ed884596e1c04c8af1e7413f4449a313272f2b7b4e7413153ee292689276a47) · block 5,433,955 · gas **453,390** |
| School received | **1.000000 KSU** → 19.000000 total, 7 settlements on the v2 pool |

That proof is `fixtures/mainnet-flow.json`, and `test_SettlesRealMainnetRemittance` replays it.

The refusals cost gas because they were broadcast on purpose — a refusal that only exists in a
log line is not evidence. Source: `fixtures/batch-2026-09-02-settled.json`.

### Deployed

| | Chain | Address |
|---|---|---|
| `RemittanceGateway` | Sepolia | [`0x1C2152e3fAbC8Ba1314F60d25Bb6f306Ef9Ab053`](https://sepolia.etherscan.io/address/0x1C2152e3fAbC8Ba1314F60d25Bb6f306Ef9Ab053) |
| Treasury (provider inventory) | Sepolia | [`0x86CF30f751e0138A3272e3A148eF59Fd77C7366F`](https://sepolia.etherscan.io/address/0x86CF30f751e0138A3272e3A148eF59Fd77C7366F) |
| Circle USDC | Sepolia | [`0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238`](https://sepolia.etherscan.io/address/0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238) |
| `RemittanceGateway` (mainnet) | **Ethereum** | [`0x53B98C348b9B2E8aDf43dFd07025Ed49de907f2E`](https://eth.blockscout.com/address/0x53B98C348b9B2E8aDf43dFd07025Ed49de907f2E) — verified source, action 2 / chainKey 3 |
| Treasury (mainnet) | Ethereum | [`0x5b0cCA1E5AA5CD83FdD7CCAf37454f00A87F08Bf`](https://eth.blockscout.com/address/0x5b0cCA1E5AA5CD83FdD7CCAf37454f00A87F08Bf) |
| Circle USDC (mainnet) | Ethereum | [`0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`](https://eth.blockscout.com/address/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48) |
| **`KirogiASC`** | Creditcoin CC3 | [`0x4Ea7D8d61BC3e0b3fe28496e2eeD7506C3cFcD45`](https://creditcoin-testnet.blockscout.com/address/0x4Ea7D8d61BC3e0b3fe28496e2eeD7506C3cFcD45) |
| `SettlementPool` v2 (purpose enforcement) | Creditcoin CC3 | [`0xC471E417383C01c0053F79660224428Edd37e8e3`](https://creditcoin-testnet.blockscout.com/address/0xC471E417383C01c0053F79660224428Edd37e8e3) |
| `SettlementPool` v1 (first settlement, drained) | Creditcoin CC3 | [`0x3F6d4A4072b3Ba6871e4E11F58415254A82F2A98`](https://creditcoin-testnet.blockscout.com/address/0x3F6d4A4072b3Ba6871e4E11F58415254A82F2A98) |
| `SettlementToken` (KSU) | Creditcoin CC3 | [`0xA57eEa3D273d8558F428602fa1ac66cE0b93a441`](https://creditcoin-testnet.blockscout.com/address/0xA57eEa3D273d8558F428602fa1ac66cE0b93a441) |
| `EvmV1Decoder` (library) | Creditcoin CC3 | `0x5C9758B5eC179b177d3DC312888a051b7Fc037D6` |

<a id="what-it-refuses"></a>
## What it refuses

`forge test` — **26 passing**. Then the same proofs, unmocked, against the real precompile.

| Attempt | Result | Where |
|---|---|---|
| Prove a remittance that reverted on Ethereum | `SourceTransactionFailed()` `0xc60cdba1` | **on-chain** |
| Submit the same proof twice | `Query already processed`, paid exactly once | `test/FullFlow.t.sol` |
| Point the config at a look-alike USDC | `NoCanonicalTransfer()` | `test/FullFlow.t.sol` |
| Send the canonical token somewhere other than the treasury | `NoCanonicalTransfer()` | `test/Kirogi.t.sol` |
| Present a proof the verifier rejects | `Proof of inclusion verification failed` | `test/Kirogi.t.sol` |
| Redirect a proof to a different settlement partner | unrelated partner receives 0 | `test/FullFlow.t.sol` |
| Prove a *successful* remittance sent for a purpose the school does not accept | `PurposeNotAllowed(beneficiary, 4)` | **on-chain** — [`0xb03abeec…`](https://creditcoin-testnet.blockscout.com/tx/0xb03abeec480b820bf65f3d64b879d6089b94c0457b21e93ab575a1d42c9714e9), and `test/FullFlow.t.sol` with the real proof |

The first and last rows are not unit tests. A real Sepolia remittance was made to revert, a real
valid proof of it was submitted to the live contract, and Creditcoin returned `0xc60cdba1` — four
times now. And a real, successful remittance sent for an exam fee was refused by a school
registered for tuition, dormitory and books. Both refusals are on the explorer.

Tests replay **real captured proofs** rather than fixtures we invented — `fixtures/*.json` hold
actual `txBytes`, merkle and continuity proofs pulled from the prover. That keeps the ~7 minute
attestation wait out of the edit/test loop entirely.

### Nothing mocked: the real precompile, for free

`forge` cannot execute Creditcoin's BlockProver — its EVM only ships the standard precompiles, so
`0x0FD2` is an empty account there, and the unit tests have to mock it. That is a limit of the
tool, not of the verification. `eth_call` on a Creditcoin node runs the genuine verifier and
every check after it, and returns the exact revert the chain would produce, without spending gas:

```
$ npx tsx scripts/live_check.ts fixtures/full-flow-success.json fixtures/full-flow-failed.json
eth_call → KirogiASC 0x4Ea7D8d6…cFcD45 on Creditcoin CC3 (real BlockProver at 0x0FD2)

fixtures/full-flow-success.json    REJECT Error(Query already processed)     (fresh proof, 44 roots)
fixtures/full-flow-failed.json     REJECT SourceTransactionFailed()  [0xc60cdba1]  (fresh proof, 47 roots)
```

The first line is the replay guard, live: that proof already paid once. The second is the status
check, live. Both went through the real precompile. Note *fresh proof* — a cached proof stops
matching once the attestation frontier crosses a checkpoint (`Continuity proof does not match
attestation or checkpoint`), so the worker never reuses one; it rebuilds at settlement time.

## Run it

```bash
npm install
forge build
forge test          # 26 passing, no network needed
```

Tests need no RPC, no faucet and no wallet: they mock the `0x0FD2` precompile with
`vm.mockCall` and replay the captured proofs. To run the same proofs through the real precompile:

```bash
npx tsx scripts/live_check.ts fixtures/*.json     # eth_call on CC3, gas-free, nothing mocked
```

### Reproduce the live path

```bash
cp .env.example .env        # fill in PRIVATE_KEY
npx tsx scripts/submit_proof.ts --chains          # what Attestcoin can read today
```

```bash
DECODER=0x… ./scripts/deploy_cc3.sh               # Creditcoin side
```

```bash
npx tsx scripts/submit_proof.ts <sepoliaTxHash> --action 1 --fixture my-proof
```

The worker waits for attestation, pulls the proof, and submits it to `KirogiASC`. `--fixture`
caches the proof so later runs are instant.

```bash
npx tsx scripts/remit.ts --ok 7 --fail 3            # a batch on Sepolia, some meant to revert
npx tsx scripts/settle_batch.ts fixtures/batch.json # wait once, dry-run each, broadcast each
./scripts/deploy_pool_v2.sh                         # swap the pool behind the same ASC
```

### Layout

```
contracts/
  RemittanceGateway.sol   Sepolia. Ownerless, immutable, pulls canonical USDC.
  KirogiASC.sol           Creditcoin. Extends ASCBase, runs checks 1-5.
  SettlementPool.sol      Creditcoin. Pre-funded liquidity, whitelisted partners, check 6 (purpose).
  SettlementToken.sol     Demo stand-in for the local settlement asset.
  vendor/                 Official ASCBase + VerifierInterface, unmodified.
scripts/
  submit_proof.ts         Attestation wait → proof → execute.
  fetch_fixture.mjs       Capture a real proof without deploying anything.
  deploy_cc3.sh           Re-runnable Creditcoin deploy.
  deploy_pool_v2.sh       Pool swap behind the existing ASC.
  live_check.ts           eth_call the real precompile. Nothing mocked, nothing spent.
  remit.ts                Batch remittances on Sepolia, including ones meant to fail.
  settle_batch.ts         Attest once, dry-run each, broadcast each — refusals included.
test/                     26 tests, real proof fixtures (Sepolia and mainnet).
web/                      Next.js. Overview, live evidence, proof tracker (purpose check), send page (own wallet).
deck/                     Slides, and the Chrome-headless build that makes the PDF.
docs/                     GitHub Pages: demo video, deck, the exported site under /app.
```

## Source chains

Attestcoin reads Ethereum today and nothing else. Queried live from the ChainInfo precompile:

```
chainKey 3   Ethereum          (chainId 1)
chainKey 1   Sepolia ethereum  (chainId 11155111)
```

Both are configured on the live `KirogiASC`, as two actions of one contract:

| action | chainKey | gateway | token |
|---|---|---|---|
| 1 | 1 (Sepolia) | `0x1C2152e3…9Ab053` | Circle USDC (Sepolia) |
| 2 | 3 (Ethereum mainnet) | [`0x53B98C34…907f2E`](https://eth.blockscout.com/address/0x53B98C348b9B2E8aDf43dFd07025Ed49de907f2E) | Circle USDC (mainnet) |

`KirogiASC` keeps gateway, token and treasury addresses in a `sourceConfigs` mapping keyed by
action, with gateway addresses forced unique across configs. **Adding a chain Attestcoin
supports later is a `configureSource()` call, not a rewrite** — the mainnet leg above was exactly
that: one gateway deployment, one call, no change to the verifier or the pool. The frontend
renders the list by calling `getSupportedChains()` rather than hardcoding it.

<a id="what-this-does-not-claim"></a>
## What this does not claim

The proof covers less than the story does, and the submission says so on its own front page.

- **Purpose is self-reported.** The gateway records what the sender says the money is for.
  Attestcoin proves the transfer happened, never that the label is true.
- **Identity is off-chain.** Nothing binds a `beneficiaryId` to a person, so a sender and a
  recipient could be the same someone.
- **Settlement partners are whitelisted by an operator.** That is a trusted role. Restricting
  payouts to registered addresses limits transfers, not collusion.
- **The off-ramp is a contract, not code.** How the provider turns inventory into local currency
  sits outside this system.
- **One source chain.** See above.

Prior art exists: PayAngel has moved **$450M** paying schools and clinics directly, with no
blockchain at all. The claim here is not the idea. It is that the receiving side no longer has to
trust anyone's word that the sending side paid.

## Notes for anyone building on Attestcoin

Things that cost us time and are not obvious from the docs:

- The examples repo was **renamed on 2026-08-25** (`USC → ASC`). `USCMinter.sol` is now
  `ASCMinter.sol`, and most material on the web still uses the old names.
- `EvmV1Decoder` is **not** in the examples repo. It ships in `@gluwa/usc-contracts` and is a
  deployed library, so contracts using it need `--libraries` at deploy time.
- `ASCBase.execute()` verifies the proof and blocks replays. It does **not** check
  `receiptStatus`. That is yours to do.
- Foundry spams `missing field 'mixHash'` against CC3. Transactions still land; it is noise.
- Old blocks stay provable. We pulled a valid proof for a transaction **7 days** back, so a long
  history is readable — it just costs more gas once attestations roll into checkpoints.

## Licence

MIT.
