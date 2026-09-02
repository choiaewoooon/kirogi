#!/usr/bin/env python3
"""Seat the light-themed browser captures on the reel's dark canvas.

Full-bleed screenshots flash white between the title cards. Rendering them through the same
HTML/Chrome path the cards use keeps one typographic voice across the reel and stops the
strobing, while the screenshot itself stays untouched evidence.
"""
import subprocess, pathlib, shutil

CSS_HREF = pathlib.Path('card.css').resolve().as_uri()

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
HEAD = ('<!doctype html><meta charset="utf-8">'
        '<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700'
        '&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">'
        f'<link rel="stylesheet" href="{CSS_HREF}">')

CSS = """
<style>
body.shot{height:1080px;box-sizing:border-box;overflow:hidden;padding:88px 120px 80px;justify-content:flex-start;gap:0}
.shot h2{font-family:var(--display);font-weight:600;font-size:40px;letter-spacing:-.02em;
  color:var(--text);margin:0}
.shot .where{font-family:var(--mono);font-size:22px;color:var(--text-faint);margin:14px 0 0;max-width:none}
.shot hr{border:0;border-top:1px solid var(--line);margin:34px 0 0}
.shot figure{margin:40px 0 0;height:700px;display:flex;align-items:flex-start;justify-content:center}
.shot img{max-width:100%;max-height:700px;width:auto;object-fit:contain;border-radius:12px;
  border:1px solid var(--line);box-shadow:0 24px 60px rgba(0,0,0,.66)}
</style>"""

SHOTS = [
    ("10-source",   "Ethereum Sepolia",     "eth-sepolia.blockscout.com &middot; the deposit"),
    ("11-settle",   "Creditcoin CC3",       "creditcoin-testnet.blockscout.com &middot; the settlement"),
    ("12-school",   "The school&rsquo;s wallet", "12 KSU received &middot; not the parent&rsquo;s, not ours"),
    ("13-evidence", "Live contract state",  "read straight from both chains"),
]

pathlib.Path("frames/raw").mkdir(parents=True, exist_ok=True)
for name, title, where in SHOTS:
    raw = pathlib.Path(f"frames/raw/{name}.png")
    if not raw.exists():
        shutil.copy(f"frames/{name}.png", raw)
    body = (f'<h2>{title}</h2><p class="where">{where}</p><hr>'
            f'<figure><img src="raw/{name}.png"></figure>')
    p = pathlib.Path(f"frames/_{name}.html")
    p.write_text(HEAD + CSS + f'<body class="shot">{body}</body>', encoding="utf-8")
    subprocess.run([CHROME, "--headless", "--disable-gpu", "--no-sandbox",
                    "--window-size=1920,1080", "--hide-scrollbars",
                    "--virtual-time-budget=6000",
                    f"--screenshot=frames/{name}.png", str(p.resolve())],
                   capture_output=True)
    print("  framed", name)
