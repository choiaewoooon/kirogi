// Record a local animated page to a constant-fps frame sequence.
//   node recanim.mjs <page.html> <outDirName> <seconds>
import { spawn } from 'node:child_process';
import { writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { setTimeout as sleep } from 'node:timers/promises';
import { resolve } from 'node:path';

const [page, outName, secs] = process.argv.slice(2);
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9333;
const HERE = fileURLToPath(new URL('./', import.meta.url));
const OUT = `${HERE}clips/${outName}/`;
const FPS = 30;

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const chrome = spawn(CHROME, [
  '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
  '--window-size=1920,1080', '--force-device-scale-factor=1',
  `--remote-debugging-port=${PORT}`,
  '--user-data-dir=/tmp/cdp-anim-profile', 'about:blank',
], { stdio: 'ignore' });

async function target() {
  for (let i = 0; i < 40; i++) {
    try {
      const j = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      const p = j.find(t => t.type === 'page');
      if (p) return p;
    } catch {}
    await sleep(250);
  }
  throw new Error('CDP never came up');
}

const t = await target();
const ws = new WebSocket(t.webSocketDebuggerUrl);
await new Promise(r => ws.addEventListener('open', r, { once: true }));

let id = 0; const pending = new Map(); const frames = [];
let recording = false, t0 = 0;
ws.addEventListener('message', ev => {
  const m = JSON.parse(ev.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); return; }
  if (m.method === 'Page.screencastFrame') {
    if (recording) frames.push({ t: Date.now() - t0, buf: Buffer.from(m.params.data, 'base64') });
    send('Page.screencastFrameAck', { sessionId: m.params.sessionId }).catch(() => {});
  }
});
function send(method, params = {}) {
  const my = ++id;
  ws.send(JSON.stringify({ id: my, method, params }));
  return new Promise((res, rej) => {
    pending.set(my, m => m.error ? rej(new Error(method + ': ' + m.error.message)) : res(m.result));
    setTimeout(() => { if (pending.has(my)) { pending.delete(my); rej(new Error(method + ' timed out')); } }, 45000);
  });
}

await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 1920, height: 1080, deviceScaleFactor: 1, mobile: false });

// load with the animation paused, so recording starts on frame one
await send('Page.addScriptToEvaluateOnNewDocument', {
  source: 'window.__hold = true;',
});
await send('Page.navigate', { url: pathToFileURL(resolve(page)).href });
await sleep(2500);

t0 = Date.now(); recording = true;
await send('Page.startScreencast', { format: 'png', quality: 92, everyNthFrame: 1 });
await sleep(Number(secs) * 1000);
const endMs = Date.now() - t0;
recording = false;
await send('Page.stopScreencast');

const total = Math.max(endMs, frames.length ? frames[frames.length - 1].t : 0);
let cursor = 0, n = 0;
for (let ms = 0; ms <= total; ms += 1000 / FPS) {
  while (cursor + 1 < frames.length && frames[cursor + 1].t <= ms) cursor++;
  writeFileSync(OUT + String(n++).padStart(5, '0') + '.png', frames[cursor].buf);
}
console.log(`${outName}: ${frames.length} raw -> ${n} frames (${(n / FPS).toFixed(1)}s)`);
ws.close(); chrome.kill(); process.exit(0);
