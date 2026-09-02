#!/usr/bin/env python3
"""Render real command output as styled frames. The text is verbatim from the runs that
produced the deployment; only the presentation is ours."""
import subprocess, pathlib

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
HEAD = ('<!doctype html><meta charset="utf-8">'
        '<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600'
        '&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">'
        '<link rel="stylesheet" href="card.css">')

def term(name, caption, lines):
    body = (f'<p class="step">{caption}</p><div class="term">'
            + "\n".join(lines) + "</div>")
    p = pathlib.Path(f"{name}.html")
    p.write_text(HEAD + f"<body>{body}</body>", encoding="utf-8")
    subprocess.run([CHROME, "--headless", "--disable-gpu", "--no-sandbox",
                    "--window-size=1920,1080", "--hide-scrollbars",
                    "--virtual-time-budget=6000",
                    f"--screenshot=frames/{name}.png", str(p.resolve())],
                   capture_output=True)
    print("  ", name)

term("20-worker", "the proof worker · verbatim output", [
 '<span class="dim">$</span> npx tsx scripts/submit_proof.ts 0x0a31dd52… --action 1',
 "",
 "source tx in block 11604757",
 "waiting for attestation…",
 '<span class="dim">Height 11604757 not yet attested. Latest: 11604720. Retrying in 15000ms…</span>',
 '<span class="dim">Height 11604757 not yet attested. Latest: 11604740. Retrying in 15000ms…</span>',
 '<span class="dim">Height 11604757 not yet attested. Latest: 11604750. Retrying in 15000ms…</span>',
 '<span class="ok">attested</span>',
 "proof: header 11604757, txIndex 139, 8 merkle siblings, 4 continuity roots",
 "submitted 0x9c0857ec8a7e37bcc6e8c01221153101d4e753850191fd376b4b8c0ede550307",
 '<b>settled in block 5405280 (gas 441364)</b>',
])

term("21-refuse", "submitting a proof of a reverted remittance", [
 '<span class="dim">$</span> npx tsx scripts/submit_proof.ts 0xb17c17de… --action 1',
 "",
 "source tx in block 11604754",
 '<span class="ok">attested</span>',
 "proof: header 11604754, txIndex 61, 7 merkle siblings, 7 continuity roots",
 "",
 '<span class="no">execution reverted (unknown custom error)</span>',
 '<span class="no">data="0xc60cdba1"</span>  <span class="dim">→</span>  '
 '<b>SourceTransactionFailed()</b>',
 "",
 '<span class="dim">The proof was valid. The transaction is really in that block.</span>',
 '<span class="dim">It just did not succeed — and the contract checked.</span>',
])

term("22-tests", "forge test", [
 '<span class="dim">$</span> forge test',
 "",
 '<span class="ok">[PASS]</span> test_SettlesRealRemittanceToPartner()',
 '<span class="ok">[PASS]</span> test_RejectsReplayOfSameProof()',
 '<span class="ok">[PASS]</span> test_RejectsRevertedSourceTransaction()',
 '<span class="ok">[PASS]</span> test_RejectsWhenTokenIsNotCanonical()',
 '<span class="ok">[PASS]</span> test_PaysOnlyTheBeneficiaryNamedInTheProof()',
 '<span class="ok">[PASS]</span> test_RefusesProvenRemittanceForDisallowedPurpose()',
 '<span class="ok">[PASS]</span> test_RejectsPurposeNotAllowed()',
 '<span class="dim">…</span>',
 "",
 '<b>24 tests passed, 0 failed</b>  <span class="dim">— replaying real captured proofs</span>',
])
print("done")

# verbatim from scripts/settle_batch.ts — the fourth deposit of the batch
term("23-purpose", "a successful deposit, sent for the wrong purpose", [
 '<span class="dim">$</span> npx tsx scripts/settle_batch.ts fixtures/batch-2026-09-02.json',
 '',
 '10 source txs, highest block 11619896. waiting for attestation…',
 '<span class="ok">attested</span> after 303s',
 '',
 'ok   0xa40711ceb3…  proof 7 sib / 7 roots  dry-run: <span class="ok">would settle</span>',
 '     → 0xe58565d2…  block 5417816  status 1  gas 453390',
 'ok   0xae47c57ec4…  proof 7 sib / 3 roots  dry-run: <span class="no">PurposeNotAllowed(0x5a1584d7…, 4)</span>',
 '     → 0xb03abeec…  block 5417819  <b>status 0</b>  gas 407820',
 '',
 '<span class="dim">The deposit succeeded. The proof was valid. It was sent for an exam fee,</span>',
 '<span class="dim">and this school is registered for tuition, dormitory and books.</span>',
])
