#!/usr/bin/env python3
"""Render each video card to a 1920x1080 PNG through headless Chrome, so the frames use the
same tokens as the deck and the site instead of a second visual language."""
import subprocess, sys, pathlib, html as H

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
HEAD = ('<!doctype html><meta charset="utf-8">'
        '<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700'
        '&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">'
        '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9'
        '/dist/web/static/pretendard-dynamic-subset.min.css">'
        '<link rel="stylesheet" href="card.css">')

def card(name, body, cls=""):
    p = pathlib.Path(f"{name}.html")
    p.write_text(HEAD + f'<body class="{cls}">{body}</body>', encoding="utf-8")
    subprocess.run([CHROME, "--headless", "--disable-gpu", "--no-sandbox",
                    "--window-size=1920,1080", "--hide-scrollbars",
                    "--virtual-time-budget=6000",
                    f"--screenshot=frames/{name}.png", str(p.resolve())],
                   capture_output=True)
    print("  ", name)

def step(n, title, sub=""):
    return (f'<p class="step">{n}</p><h1>{title}</h1>'
            + (f"<p>{sub}</p>" if sub else ""))

print("rendering cards")
card("00-open",
     '<img class="mark" src="kirogi-mark.png">'
     '<h1>The money never crossed.<br>The proof did.</h1>'
     '<p>A remittance proven on Ethereum, settled to a school on Creditcoin.</p>', "center")

card("01-problem",
     step("The problem",
          "A family with a border running through it.",
          'Korea says <span class="ko">기러기</span>. Hong Kong says astronaut family. '
          "The research says transnational family."))

card("02-broken",
     step("What is still broken",
          "Somebody still has to be believed.",
          "A contract on the receiving chain cannot see a deposit on Ethereum. "
          "It can only be told."))

card("03-deposit", step("Step one", "A deposit on Ethereum.",
                        "12 USDC into an ownerless gateway. Circle&rsquo;s token, real transfer log."))
card("04-wait",    step("Step two", "Seven and a half minutes.",
                        "Attestors follow finalised blocks and publish about every two minutes."))
card("05-verify",  step("Step three", "Verified on Creditcoin.",
                        "One block. Five checks inside a single transaction."))
card("06-paid",    step("Step four", "The school is paid.",
                        "Real tokens, from liquidity that was already on this chain."))
card("07-refuse",  step("The part that matters", "A contract is only as good as what it refuses."))
card("08-close",
     '<img class="mark" src="kirogi-mark.png" style="height:180px">'
     '<h1 class="sm">Only the fact crosses.</h1>'
     '<p style="font-family:var(--mono);font-size:22px;color:var(--text-faint);margin-top:44px">'
     'KIROGI &middot; BUIDL CTC 2026 FALL</p>', "center")
print("done")
