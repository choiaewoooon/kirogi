// Record real interaction with the app through CDP screencast.
// Screencast emits a frame only when the page changes, so each frame is stamped and the
// timeline is resampled to a constant fps afterwards — otherwise idle stretches collapse.
import { spawn } from 'node:child_process';
import { writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { setTimeout as sleep } from 'node:timers/promises';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9332;
const HERE = fileURLToPath(new URL('./', import.meta.url));
const OUT = HERE + 'clips/track/';
const FPS = 30;

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const chrome = spawn(CHROME, [
  '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
  '--window-size=1920,1080', '--force-device-scale-factor=1',
  `--remote-debugging-port=${PORT}`,
  '--user-data-dir=/tmp/cdp-record-profile', 'about:blank',
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

let id = 0;
const pending = new Map();
const frames = [];          // { t: ms since record start, buf }
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
await send('Runtime.enable');
await send('DOM.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 1920, height: 1080, deviceScaleFactor: 1, mobile: false });

async function js(expr) {
  const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
  return r.result?.value;
}

console.log('loading /track');
await send('Page.navigate', { url: 'http://localhost:3100/track' });
await sleep(4000);                                   // let the dev server compile + hydrate

// the input arrives pre-filled; clear it so the typing is visible
await js(`(() => {
  const el = document.querySelector('#tx');
  const set = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set;
  set.call(el, ''); el.dispatchEvent(new Event('input',{bubbles:true})); el.focus();
  return true;
})()`);
await sleep(300);

t0 = Date.now(); recording = true;
await send('Page.startScreencast', { format: 'png', quality: 90, everyNthFrame: 1 });
await sleep(700);

const HASH = '0x0a31dd52776f8d656cc5be3178a367f8283584e2cd7396038880dfb0b2c02e2b';
console.log('typing the hash');
for (const ch of HASH) {
  await send('Input.dispatchKeyEvent', { type: 'keyDown', text: ch });
  await send('Input.dispatchKeyEvent', { type: 'keyUp' });
  await sleep(18);
}
await sleep(900);

console.log('submitting');
const box = await js(`(() => {
  const b = [...document.querySelectorAll('button')].find(x => /check/i.test(x.textContent));
  const r = b.getBoundingClientRect();
  return JSON.stringify({x: r.x + r.width/2, y: r.y + r.height/2});
})()`);
const { x, y } = JSON.parse(box);
for (const type of ['mouseMoved', 'mousePressed', 'mouseReleased']) {
  await send('Input.dispatchMouseEvent', { type, x, y, button: 'left', clickCount: 1 });
  await sleep(60);
}

// live RPC + prover round trip; hold so the resolved stages are readable
await sleep(9000);
const endMs = Date.now() - t0;
recording = false;
await send('Page.stopScreencast');

console.log(`captured ${frames.length} raw frames; timeline ${endMs}ms`);

// resample to constant fps: at each tick write whichever frame was on screen then
const total = Math.max(endMs, frames[frames.length - 1].t);
let cursor = 0, n = 0;
for (let ms = 0; ms <= total; ms += 1000 / FPS) {
  while (cursor + 1 < frames.length && frames[cursor + 1].t <= ms) cursor++;
  writeFileSync(OUT + String(n++).padStart(5, '0') + '.png', frames[cursor].buf);
}
console.log(`wrote ${n} frames at ${FPS}fps -> ${(n / FPS).toFixed(1)}s`);

ws.close(); chrome.kill(); process.exit(0);
