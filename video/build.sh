#!/usr/bin/env bash
# Assemble the demo reel. Each frame is a still; ffmpeg holds it for the listed number of
# seconds and cross-fades between scenes so the cut does not feel like a slideshow.
set -euo pipefail
cd "$(dirname "$0")"
FPS=30

# scene:seconds — the two moments that matter (the refusal, the payout) get the longest holds
SCENES=(
  "00-open:4"
  "01-problem:5"
  "02-broken:5"
  "03-deposit:4"
  "10-source:6"
  "04-wait:4"
  "20-worker:7"
  "05-verify:4"
  "11-settle:6"
  "06-paid:4"
  "12-school:5"
  "07-refuse:4"
  "21-refuse:8"
  "22-tests:5"
  "13-evidence:6"
  "08-close:5"
)

rm -f list.txt
for s in "${SCENES[@]}"; do
  name="${s%%:*}"; secs="${s##*:}"
  [ -f "frames/$name.png" ] || { echo "missing frames/$name.png" >&2; exit 1; }
  echo "file 'frames/$name.png'"   >> list.txt
  echo "duration $secs"            >> list.txt
done
# concat demuxer needs the final image repeated for its duration to register
last="${SCENES[$((${#SCENES[@]}-1))]%%:*}"   # bash 3.2 has no negative index
echo "file 'frames/$last.png'" >> list.txt

# a silent AAC track: the reel needs no sound, but some uploaders reject audio-less files
ffmpeg -y -loglevel error -f concat -safe 0 -i list.txt \
  -f lavfi -i anullsrc=channel_layout=stereo:sample_rate=48000 \
  -vf "fps=$FPS,scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=0x08090c,format=yuv420p" \
  -c:v libx264 -preset slow -crf 20 -c:a aac -b:a 96k -shortest \
  -movflags +faststart \
  Kirogi-demo.mp4

dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 Kirogi-demo.mp4)
size=$(du -h Kirogi-demo.mp4 | cut -f1)
printf "built Kirogi-demo.mp4  %.0fs  %s\n" "$dur" "$size"
