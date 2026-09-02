<div align="center">
  <img src="web/public/kirogi-mark.png" alt="Kirogi" height="150">
  <h1>Kirogi</h1>
  <p><b>A remittance proven on Ethereum, settled to a school on Creditcoin.<br>
  No bridge. Nobody trusted to say the money arrived.</b></p>
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
                                   (~7m30s)              five checks
                                                              │
                                                              ▼
                                                    school is paid, in real tokens
```

**Value never crosses.** The liquidity provider keeps inventory on both chains and nets off-chain,
exactly as remittance corridors already work. Only the fact crosses.

## The five checks

`KirogiASC._processAndEmitEvent` refuses to pay unless all of these hold inside one receipt:

| # | Check | Why it exists |
|---|---|---|
| 1 | **Inclusion** | Merkle proof plus a continuity chain back to an on-chain attestation, verified by the BlockProver precompile at `0x0FD2`. Handled by the official `ASCBase`. |
| 2 | **Success** | The precompile proves inclusion, **not success**. A reverted remittance carries a perfectly valid proof, so the contract reads `receiptStatus` itself. |
| 3 | **Canonical token** | Sepolia hosts more than one contract answering to the name USDC. The address is pinned to Circle's. |
| 4 | **Destination** | The `Transfer` recipient must equal the registered treasury, and its sender and amount must match the gateway's own event. |
| 5 | **Single use** | A query id keyed on `chainKey · blockHeight · txIndex` is burned on first use. |

The load-bearing one is #3 and #4 together. **An admin key can sign a payment that never happened;
a canonical USDC log cannot exist unless USDC actually moved.** Our own event only carries
self-reported metadata — who the money is for, and what the sender says it is for.

<a id="it-ran"></a>
## It ran

One remittance, end to end, on public testnets.

| Step | Result |
|---|---|
| Deposit on Sepolia | [`0x0a31dd52…`](https://sepolia.etherscan.io/tx/0x0a31dd52776f8d656cc5be3178a367f8283584e2cd7396038880dfb0b2c02e2b) · block 11,604,757 · **12.000000 USDC** · status `0x1` |
| Attestation wait | **7 min 30 s** (attestors follow finalised blocks, publishing ~every 2 min) |
| Proof | txIndex 139 · 8 merkle siblings · 4 continuity roots |
| Verified and settled | [`0x9c0857ec…`](https://creditcoin-testnet.blockscout.com/tx/0x9c0857ec8a7e37bcc6e8c01221153101d4e753850191fd376b4b8c0ede550307) · block 5,405,280 · gas **441,364** |
| School received | **12.000000 KSU** · pool 1,000,000 → 999,988 |

Verification cost **0.000664 CTC**.

### Deployed

| | Chain | Address |
|---|---|---|
| `RemittanceGateway` | Sepolia | [`0x1C2152e3fAbC8Ba1314F60d25Bb6f306Ef9Ab053`](https://sepolia.etherscan.io/address/0x1C2152e3fAbC8Ba1314F60d25Bb6f306Ef9Ab053) |
| Treasury (provider inventory) | Sepolia | [`0x86CF30f751e0138A3272e3A148eF59Fd77C7366F`](https://sepolia.etherscan.io/address/0x86CF30f751e0138A3272e3A148eF59Fd77C7366F) |
| Circle USDC | Sepolia | [`0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238`](https://sepolia.etherscan.io/address/0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238) |
| **`KirogiASC`** | Creditcoin CC3 | [`0x4Ea7D8d61BC3e0b3fe28496e2eeD7506C3cFcD45`](https://creditcoin-testnet.blockscout.com/address/0x4Ea7D8d61BC3e0b3fe28496e2eeD7506C3cFcD45) |
| `SettlementPool` | Creditcoin CC3 | [`0x3F6d4A4072b3Ba6871e4E11F58415254A82F2A98`](https://creditcoin-testnet.blockscout.com/address/0x3F6d4A4072b3Ba6871e4E11F58415254A82F2A98) |
| `SettlementToken` (KSU) | Creditcoin CC3 | [`0xA57eEa3D273d8558F428602fa1ac66cE0b93a441`](https://creditcoin-testnet.blockscout.com/address/0xA57eEa3D273d8558F428602fa1ac66cE0b93a441) |
| `EvmV1Decoder` (library) | Creditcoin CC3 | `0x5C9758B5eC179b177d3DC312888a051b7Fc037D6` |

<a id="what-it-refuses"></a>
## What it refuses

`forge test` — **20 passing**.

| Attempt | Result | Where |
|---|---|---|
| Prove a remittance that reverted on Ethereum | `SourceTransactionFailed()` `0xc60cdba1` | **on-chain** |
| Submit the same proof twice | `Query already processed`, paid exactly once | `test/FullFlow.t.sol` |
| Point the config at a look-alike USDC | `NoCanonicalTransfer()` | `test/FullFlow.t.sol` |
| Send the canonical token somewhere other than the treasury | `NoCanonicalTransfer()` | `test/Kirogi.t.sol` |
| Present a proof the verifier rejects | `Proof of inclusion verification failed` | `test/Kirogi.t.sol` |
| Redirect a proof to a different settlement partner | unrelated partner receives 0 | `test/FullFlow.t.sol` |

The first row is not a unit test. A real Sepolia remittance was made to revert, a real valid proof
of it was submitted to the live contract, and Creditcoin returned `0xc60cdba1`.

Tests replay **real captured proofs** rather than fixtures we invented — `fixtures/*.json` hold
actual `txBytes`, merkle and continuity proofs pulled from the prover. That keeps the ~7 minute
attestation wait out of the edit/test loop entirely.

## Run it

```bash
npm install
forge build
forge test          # 20 passing, no network needed
```

Tests need no RPC, no faucet and no wallet: they mock the `0x0FD2` precompile with
`vm.mockCall` and replay the captured proofs.

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

### Layout

```
contracts/
  RemittanceGateway.sol   Sepolia. Ownerless, immutable, pulls canonical USDC.
  KirogiASC.sol           Creditcoin. Extends ASCBase, runs the five checks.
  SettlementPool.sol      Creditcoin. Pre-funded liquidity, whitelisted partners.
  SettlementToken.sol     Demo stand-in for the local settlement asset.
  vendor/                 Official ASCBase + VerifierInterface, unmodified.
scripts/
  submit_proof.ts         Attestation wait → proof → execute.
  fetch_fixture.mjs       Capture a real proof without deploying anything.
  deploy_cc3.sh           Re-runnable Creditcoin deploy.
test/                     20 tests, real proof fixtures.
web/                      Next.js. Overview, live evidence page, proof tracker.
deck/                     Slides, and the Chrome-headless build that makes the PDF.
```

## Source chains

Attestcoin reads Ethereum today and nothing else. Queried live from the ChainInfo precompile:

```
chainKey 3   Ethereum          (chainId 1)
chainKey 1   Sepolia ethereum  (chainId 11155111)
```

`KirogiASC` keeps gateway, token and treasury addresses in a `sourceConfigs` mapping keyed by
action, with gateway addresses forced unique across configs. **Adding a chain Attestcoin
supports later is a `configureSource()` call, not a rewrite.** The frontend renders the list by
calling `getSupportedChains()` rather than hardcoding it.

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
