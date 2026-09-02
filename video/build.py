#!/usr/bin/env python3
"""Assemble the demo reel.

Two kinds of source: still cards (held for a beat) and recorded frame sequences (the
attestation timelapse and the app being driven for real). Everything is normalised into
per-scene segments first, then cross-dissolved, because xfade needs uniform inputs.
No zoom on the stills — pushing on 20px monospace shimmers and reads as cheap.
"""
import subprocess, shutil, sys
from pathlib import Path

HERE = Path(__file__).parent
SEG  = HERE / "segments"
FPS  = 30
XF   = 0.4                      # cross-dissolve, seconds
OUT  = HERE / "Kirogi-demo.mp4"

# (kind, name, seconds) — seconds is ignored for clips, which run their natural length
SCENES = [
    ("still", "00-open",     3.5),
    ("still", "01-problem",  4.0),
    ("still", "02-broken",   4.0),
    ("still", "10-source",   5.0),
    ("clip",  "wait",        None),   # the 7m30s wait, replayed
    ("still", "05-verify",   3.5),
    ("still", "11-settle",   5.0),
    ("still", "06-paid",     3.5),
    ("still", "12-school",   4.5),
    ("still", "07-refuse",   3.5),
    ("still", "21-refuse",   7.0),    # the refusal — longest hold in the reel
    ("still", "23-purpose",  7.0),    # the other refusal: valid proof, wrong purpose
    ("still", "22-tests",    4.5),
    ("clip",  "track",       None),   # somebody actually using it
    ("still", "13-evidence", 4.5),
    ("still", "08-close",    4.5),
]

def run(args):
    r = subprocess.run(args, capture_output=True, text=True)
    if r.returncode:
        sys.exit(f"ffmpeg failed:\n{' '.join(args[:12])}…\n{r.stderr[-1500:]}")

def probe(path):
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                        "-of", "csv=p=0", str(path)], capture_output=True, text=True)
    return float(r.stdout.strip())

shutil.rmtree(SEG, ignore_errors=True)
SEG.mkdir()

VF = f"fps={FPS},scale=1920:1080:force_original_aspect_ratio=decrease," \
     f"pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=0x08090c,format=yuv420p"

durations = []
for i, (kind, name, secs) in enumerate(SCENES):
    seg = SEG / f"{i:02d}.mp4"
    if kind == "still":
        src = HERE / "frames" / f"{name}.png"
        if not src.exists():
            sys.exit(f"missing {src}")
        run(["ffmpeg", "-y", "-loglevel", "error", "-loop", "1", "-t", str(secs),
             "-i", str(src), "-vf", VF, "-c:v", "libx264", "-preset", "veryfast",
             "-crf", "18", "-pix_fmt", "yuv420p", "-r", str(FPS), str(seg)])
    else:
        pat = HERE / "clips" / name / "%05d.png"
        if not sorted((HERE / "clips" / name).glob("*.png")):
            sys.exit(f"no frames in clips/{name}")
        run(["ffmpeg", "-y", "-loglevel", "error", "-framerate", str(FPS),
             "-i", str(pat), "-vf", VF, "-c:v", "libx264", "-preset", "veryfast",
             "-crf", "18", "-pix_fmt", "yuv420p", "-r", str(FPS), str(seg)])
    d = probe(seg)
    durations.append(d)
    print(f"  {i:02d} {name:<12} {d:5.1f}s")

# cross-dissolve the segments together: each xfade shortens the timeline by one transition
inputs, filt, prev, acc = [], [], "0:v", durations[0]
for i in range(1, len(durations)):
    label = f"v{i}"
    filt.append(f"[{prev}][{i}:v]xfade=transition=fade:duration={XF}:offset={acc - XF:.3f}[{label}]")
    acc += durations[i] - XF
    prev = label
for i in range(len(durations)):
    inputs += ["-i", str(SEG / f"{i:02d}.mp4")]

run(["ffmpeg", "-y", "-loglevel", "error", *inputs,
     "-f", "lavfi", "-i", "anullsrc=channel_layout=stereo:sample_rate=48000",
     "-filter_complex", ";".join(filt),
     "-map", f"[{prev}]", "-map", f"{len(durations)}:a",
     "-c:v", "libx264", "-preset", "slow", "-crf", "20", "-pix_fmt", "yuv420p",
     "-c:a", "aac", "-b:a", "96k", "-shortest", "-movflags", "+faststart", str(OUT)])

print(f"\nbuilt {OUT.name}  {probe(OUT):.0f}s  {OUT.stat().st_size/1e6:.1f} MB")
