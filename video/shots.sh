#!/usr/bin/env bash
C="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
cd "$(dirname "$0")"
snap(){ "$C" --headless --disable-gpu --no-sandbox --window-size=1920,1080 --hide-scrollbars \
   --virtual-time-budget=20000 --screenshot="frames/$1.png" "$2" >/dev/null 2>&1; echo "$1 $?"; }
snap 10-source   "https://eth-sepolia.blockscout.com/tx/0x0a31dd52776f8d656cc5be3178a367f8283584e2cd7396038880dfb0b2c02e2b"
snap 11-settle   "https://creditcoin-testnet.blockscout.com/tx/0x9c0857ec8a7e37bcc6e8c01221153101d4e753850191fd376b4b8c0ede550307"
snap 12-school   "https://creditcoin-testnet.blockscout.com/address/0x92E8B717f444c1AB0e8fa9439c5AFbB556Dfa51b?tab=tokens"
snap 13-evidence "http://localhost:3100/evidence"
touch /tmp/shots-done
