// CDP screenshot driver — works on pages that never go idle (websockets).
import { spawn } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9331;
const OUT = fileURLToPath(new URL('./frames/', import.meta.url));
mkdirSync(OUT, { recursive: true });

const SHOTS = [
  ['10-source',   'https://eth-sepolia.blockscout.com/tx/0x0a31dd52776f8d656cc5be3178a367f8283584e2cd7396038880dfb0b2c02e2b', 6000],
  ['11-settle',   'https://creditcoin-testnet.blockscout.com/tx/0x9c0857ec8a7e37bcc6e8c01221153101d4e753850191fd376b4b8c0ede550307', 6000],
  ['12-school',   'https://creditcoin-testnet.blockscout.com/address/0x92E8B717f444c1AB0e8fa9439c5AFbB556Dfa51b?tab=tokens', 7000],
  ['13-evidence', 'http://127.0.0.1:8788/kirogi/app/evidence/', 7000],   // docs/ served as Pages would
];

const chrome = spawn(CHROME, [
  '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
  '--window-size=1920,1080', '--force-device-scale-factor=1',
  `--remote-debugging-port=${PORT}`,
  '--user-data-dir=/tmp/cdp-shoot-profile',
  'about:blank',
], { stdio: 'ignore' });

async function cdpTargets() {
  for (let i = 0; i < 40; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      const j = await r.json();
      const page = j.find(t => t.type === 'page');
      if (page) return page;
    } catch {}
    await sleep(250);
  }
  throw new Error('CDP never came up');
}

const target = await cdpTargets();
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise(res => ws.addEventListener('open', res, { once: true }));

let id = 0;
const pending = new Map();
ws.addEventListener('message', ev => {
  const m = JSON.parse(ev.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
});
function send(method, params = {}) {
  const myId = ++id;
  ws.send(JSON.stringify({ id: myId, method, params }));
  return new Promise((res, rej) => {
    pending.set(myId, m => m.error ? rej(new Error(method + ': ' + m.error.message)) : res(m.result));
    setTimeout(() => { if (pending.has(myId)) { pending.delete(myId); rej(new Error(method + ' timed out')); } }, 45000);
  });
}

await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride', {
  width: 1920, height: 1080, deviceScaleFactor: 1, mobile: false,
});

for (const [name, url, settle] of SHOTS) {
  process.stdout.write(`→ ${name} ... `);
  try {
    await send('Page.navigate', { url });
    await sleep(settle);                       // fixed settle, no idle dependency
    const { data } = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
    const buf = Buffer.from(data, 'base64');
    writeFileSync(OUT + name + '.png', buf);
    console.log(`ok (${(buf.length / 1024).toFixed(0)} KB)`);
  } catch (e) {
    console.log('FAIL ' + e.message);
  }
}

ws.close();
chrome.kill();
process.exit(0);
