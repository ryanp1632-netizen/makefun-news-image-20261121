// Builds entry.png: renders the page to HTML, asks headless Chrome whether anything spills out of its box,
// takes a 1024 x 1024 screenshot, then packs it into a smaller palette PNG (tools/shrink.py).
//   node build.mjs            (needs Chrome and Python with Pillow; only run when making the picture)

import { writeFileSync, mkdirSync, statSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { renderPage } from './src/page.mjs';
import { day } from './src/stories.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'build');
mkdirSync(out, { recursive: true });

const CHROME = process.env.CHROME ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const chromeArgs = ['--headless=new', '--hide-scrollbars', '--force-device-scale-factor=1', '--disable-gpu',
  '--window-size=1024,1024', '--default-background-color=00000000'];

// The probe runs inside the page: every text box must fit its own box and the page must end above 1024 px.
const probe = `<script>addEventListener('load',()=>{const bad=[];
for(const el of document.querySelectorAll('h1,h2,h3,p,.list div,.cap,.fig span,.check,.foot span,.kick,.tally div')){
  if(el.scrollWidth>el.clientWidth+1||el.scrollHeight>el.clientHeight+1)bad.push((el.className||el.tagName)+': '+el.textContent.slice(0,50));}
const last=document.querySelector('.foot').getBoundingClientRect().bottom;if(last>1022)bad.push('page runs to '+Math.round(last)+'px');
for(const h of document.querySelectorAll('.lead h2,.card h3')){const lines=Math.round(h.getBoundingClientRect().height/parseFloat(getComputedStyle(h).lineHeight));
  if(lines>2)bad.push('headline runs to '+lines+' lines: '+h.textContent.slice(0,40));}
for(const p of document.querySelectorAll('.lead p,.card p')){const box=p.closest('article').getBoundingClientRect();
  if(p.getBoundingClientRect().bottom>box.bottom+1)bad.push('summary leaves its card: '+p.textContent.slice(0,40));}
const leads=[...document.querySelectorAll('.lead')].map(a=>a.getBoundingClientRect().bottom);
document.body.setAttribute('data-probe',JSON.stringify({bad,last:Math.round(last)}));});</script>`;

const html = renderPage(day);
const pagePath = join(out, 'page.html');
writeFileSync(pagePath, html.replace('</body>', `${probe}</body>`));
const url = 'file:///' + pagePath.replace(/\\/g, '/');

const dom = execFileSync(CHROME, [...chromeArgs, '--virtual-time-budget=3000', '--dump-dom', url], { encoding: 'utf8' });
const m = dom.match(/data-probe="([^"]*)"/);
if (!m) throw new Error('probe did not run');
const report = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&'));
console.log(`page ends at ${report.last}px`);
for (const b of report.bad) console.log('  OVERFLOW ' + b);

const raw = join(out, 'raw.png');
execFileSync(CHROME, [...chromeArgs, `--screenshot=${raw}`, url], { stdio: 'ignore' });
execFileSync('python', ['-I', join(root, 'tools', 'shrink.py'), raw, join(root, 'entry.png')], { stdio: 'inherit' });

const bytes = statSync(join(root, 'entry.png')).size;
const head = readFileSync(join(root, 'entry.png')).subarray(16, 24);
console.log(`entry.png ${head.readUInt32BE(0)}x${head.readUInt32BE(4)}, ${bytes} bytes (limit 1048576)`);
if (report.bad.length) process.exitCode = 2;
