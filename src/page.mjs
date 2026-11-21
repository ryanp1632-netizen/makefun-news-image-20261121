// Lays the day out as one 1024 x 1024 front page: masthead with the date, a strip of the day's figures, a region
// tally, three drawn leads, ten illustrated cards, a map with a numbered pin for every story, a numbered list of
// the rest, and a date-check box that says what was left out and why.

import { flag, symbol, scene } from './art.mjs';
import { makeProjection, landPaths, spreadPins } from './worldmap.mjs';

export const CATS = {
  war: { short: 'Conflict', label: 'War & security', color: '#b91c1c' },
  politics: { short: 'Politics', label: 'Politics', color: '#1d4ed8' },
  economy: { short: 'Economy', label: 'Economy & tech', color: '#047857' },
  planet: { short: 'Disaster & climate', label: 'Disaster, climate & science', color: '#0e7490' },
  life: { short: 'Justice', label: 'Justice & society', color: '#6d28d9' },
  sport: { short: 'Sport', label: 'Sport & culture', color: '#b45309' },
};
const REGION_ORDER = ['Europe', 'Middle East', 'Asia', 'Africa', 'Americas', 'Oceania', 'Global'];
const REGION_COLOR = { Europe: '#1e40af', 'Middle East': '#b45309', Asia: '#b91c1c', Africa: '#15803d',
  Americas: '#6d28d9', Oceania: '#0e7490', Global: '#475569' };

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function numberAll(day) {
  let n = 0;
  for (const s of [...day.leads, ...day.cards, ...day.briefs]) s.n = ++n;
  return n;
}

function regionTally(all) {
  const counts = Object.fromEntries(REGION_ORDER.map((r) => [r, 0]));
  for (const s of all) {
    if (!(s.region in counts)) throw new Error(`story ${s.n} has unknown region ${s.region}`);
    counts[s.region]++;
  }
  return REGION_ORDER.filter((r) => counts[r] > 0).map((r) => ({ region: r, count: counts[r] }));
}

function mapPanel(all, width, height) {
  const project = makeProjection({ width, height });
  const r = 6.6;
  const pins = spreadPins(all.filter((s) => s.at).map((s) => {
    const [ax, ay] = project(s.at);
    return { n: s.n, cat: s.cat, ax, ay };
  }), { width, height, radius: r });
  const leaders = pins.filter((p) => Math.hypot(p.x - p.ax, p.y - p.ay) > r * 0.8)
    .map((p) => `<path d="M${p.ax.toFixed(1)},${p.ay.toFixed(1)}L${p.x.toFixed(1)},${p.y.toFixed(1)}" stroke="#334155" stroke-width="0.8"/>
      <circle cx="${p.ax.toFixed(1)}" cy="${p.ay.toFixed(1)}" r="1.6" fill="#334155"/>`).join('');
  const dots = pins.map((p) => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${r}" fill="${CATS[p.cat].color}" stroke="#fff" stroke-width="1.1"/>
      <text x="${p.x.toFixed(1)}" y="${(p.y + 3).toFixed(1)}" text-anchor="middle" class="pinnum">${p.n}</text>`).join('');
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" fill="#cfe3f3"/>
    <path d="${landPaths(project)}" fill="#efe3c6" stroke="#b9a57a" stroke-width="0.6"/>
    ${leaders}${dots}</svg>`;
}

function leadCard(s) {
  const c = CATS[s.cat];
  return `<article class="lead">
    <div class="scene">${scene(s.scene)}
      <div class="stamp" style="background:${c.color}">${esc(s.stamp)}</div>
      ${s.sub ? `<div class="sub">${esc(s.sub)}</div>` : ''}
      <div class="credit">${esc(s.credit)}</div></div>
    <div class="kick"><span class="num" style="background:${c.color}">${s.n}</span>
      <span style="color:${c.color}">${esc(s.place)}</span> · ${esc(c.short)}</div>
    <h2>${esc(s.head)}</h2>
    <p>${esc(s.sum)} <span class="src">(${esc(s.src)})</span></p>
  </article>`;
}

function smallCard(s) {
  const c = CATS[s.cat];
  const flags = (s.flags || []).map((f, i) => flag(f, 7 + i * 46, 6, 40)).join('');
  return `<article class="card">
    <div class="banner" style="background:${s.bg || '#e5edf5'}">
      <svg width="100%" height="62" viewBox="0 0 236 62" preserveAspectRatio="xMinYMid meet">${flags}${symbol(s.sym, 176, 1, 48)}</svg>
      <div class="cap">${esc(s.caption)}</div></div>
    <div class="kick small"><span class="num" style="background:${c.color}">${s.n}</span><span style="color:${c.color}">${esc(s.place)}</span></div>
    <h3>${esc(s.head)}</h3>
    <p>${esc(s.sum)} <span class="src">(${esc(s.src)})</span></p>
  </article>`;
}

export function renderPage(day) {
  const total = numberAll(day);
  const all = [...day.leads, ...day.cards, ...day.briefs];
  const tally = regionTally(all);
  const half = Math.ceil(day.briefs.length / 2);
  const cols = [day.briefs.slice(0, half), day.briefs.slice(half)];
  const usedCats = Object.keys(CATS).filter((k) => all.some((s) => s.cat === k));

  return `<!doctype html><html><head><meta charset="utf-8"><style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{width:1024px;height:1024px;overflow:hidden;background:#f6f1e7;color:#111827;font-family:Arial,Helvetica,sans-serif}
  .page{position:absolute;inset:0;padding:10px 16px 0}
  .top{display:flex;justify-content:space-between;font-size:11.5px;font-weight:700;letter-spacing:.06em;border-bottom:3px solid #111827;padding-bottom:4px}
  .top .k{color:#b91c1c}
  h1{font-family:Georgia,'Times New Roman',serif;font-size:59px;line-height:66px;white-space:nowrap;margin-top:-2px;margin-bottom:-4px;text-align:center;letter-spacing:-.5px;margin-top:1px}
  .deck{text-align:center;font-family:Georgia,serif;font-style:italic;font-size:15.5px;color:#1f2937;border-bottom:1px solid #111827;padding-bottom:5px}
  .figs{display:grid;grid-template-columns:repeat(6,1fr);gap:8px;margin-top:6px}
  .fig{border-left:4px solid #b91c1c;padding-left:6px;height:41px}
  .fig b{display:block;font-family:Georgia,serif;font-size:21px;line-height:21px}
  .fig span{display:block;font-size:10.5px;line-height:11.5px;color:#374151}
  .tally{display:flex;gap:2px;margin-top:5px;height:15px}
  .tally div{color:#fff;font-size:10px;font-weight:700;text-align:center;line-height:15px}
  .leads{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:8px}
  .scene{position:relative;height:100px;overflow:hidden;border:1px solid #9ca3af}
  .stamp{position:absolute;left:7px;top:7px;color:#fff;font-weight:900;font-size:21px;padding:2px 8px;letter-spacing:.01em;border:2px solid #fff}
  .sub{position:absolute;left:7px;top:43px;background:#fff;color:#111;font-weight:700;font-size:13px;padding:2px 6px}
  .credit{position:absolute;left:0;bottom:0;background:rgba(17,24,39,.85);color:#fff;font-size:9.5px;padding:2px 5px}
  .kick{font-size:10.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;margin-top:5px;display:flex;align-items:center;gap:5px;color:#374151}
  .num{display:inline-block;min-width:16px;height:16px;border-radius:8px;color:#fff;font-size:10px;line-height:16px;text-align:center;font-weight:700;padding:0 3px}
  .lead h2{font-family:Georgia,serif;font-size:22px;line-height:24px;margin-top:3px}
  .lead p{font-size:12.2px;line-height:14.4px;margin-top:3px;color:#1f2937}
  .src{color:#6b7280}
  .rule{border-top:3px solid #111827;margin-top:7px}
  .cards{display:grid;grid-template-columns:repeat(4,1fr);gap:7px 14px;margin-top:6px}
  .banner{position:relative;height:62px;overflow:hidden;border:1px solid #cbd5e1}
  .cap{position:absolute;left:0;right:0;bottom:0;background:#111827;color:#fff;font-size:11px;font-weight:700;padding:2px 5px;letter-spacing:.03em;white-space:nowrap;overflow:hidden}
  .kick.small{margin-top:4px;font-size:9.5px}
  .card h3{font-family:Georgia,serif;font-size:18px;line-height:19.5px;margin-top:2px}
  .card p{font-size:12px;line-height:14px;margin-top:2px;color:#1f2937}
  .bottom{display:grid;grid-template-columns:318px 1fr;gap:14px;margin-top:6px}
  .bottom h4{font-size:11px;font-weight:700;letter-spacing:.06em;color:#111827;margin-bottom:3px}
  .pinnum{font-size:8.5px;font-weight:700;fill:#fff;font-family:Arial}
  .legend{display:flex;flex-wrap:wrap;gap:2px 8px;font-size:9px;color:#374151;margin-top:3px}
  .legend i{display:inline-block;width:8px;height:8px;border-radius:4px;margin-right:3px;vertical-align:-1px}
  .list{display:grid;grid-template-columns:1fr 1fr;gap:0 14px}
  .list div{font-size:11.6px;line-height:14.4px;white-space:nowrap;overflow:hidden;text-overflow:clip}
  .list b.n{display:inline-block;width:17px;text-align:right;margin-right:4px}
  .check{border:2px solid #b91c1c;padding:4px 8px;margin-top:6px;font-size:10.8px;line-height:13.2px;color:#1f2937;background:#fff}
  .check b{color:#b91c1c;letter-spacing:.05em}
  .foot{display:flex;justify-content:space-between;font-size:9.5px;color:#4b5563;margin-top:4px}
  </style></head><body><div class="page">
  <div class="top"><span class="k">THE WORLD IN ONE DAY</span><span>${total} STORIES · ${tally.length} REGIONS · EVERY ONE DATED ${esc(day.dateUpper)}</span></div>
  <h1>${esc(day.date)}</h1>
  <div class="deck">${esc(day.deck)}</div>
  <div class="figs">${day.figures.map((f) => `<div class="fig"><b>${esc(f.big)}</b><span>${esc(f.small)}</span></div>`).join('')}</div>
  <div class="tally">${tally.map((t) => `<div style="flex:${t.count};background:${REGION_COLOR[t.region]}">${esc(t.region)} ${t.count}</div>`).join('')}</div>
  <section class="leads">${day.leads.map(leadCard).join('')}</section>
  <div class="rule"></div>
  <section class="cards">${day.cards.map(smallCard).join('')}</section>
  <div class="rule"></div>
  <section class="bottom">
    <div><h4>WHERE IT HAPPENED · EVERY NUMBER IS A STORY</h4>${mapPanel(all, 318, 158)}
      <div class="legend">${usedCats.map((k) => `<span><i style="background:${CATS[k].color}"></i>${esc(CATS[k].short)}</span>`).join('')}</div></div>
    <div><h4>ALSO ON ${esc(day.dateUpper)} — ${day.briefs.length} MORE STORIES</h4>
      <div class="list">${cols.map((col) => `<div class="col">${col.map((s) =>
        `<div><b class="n" style="color:${CATS[s.cat].color}">${s.n}</b><b>${esc(s.place)}</b> ${esc(s.text)} <span class="src">(${esc(s.src)})</span></div>`).join('')}</div>`).join('')}</div></div>
  </section>
  <div class="check"><b>DATE CHECK</b> ${esc(day.dateCheck)}</div>
  <div class="foot"><span>${esc(day.footLeft)}</span><span>${esc(day.footRight)}</span></div>
  </div></body></html>`;
}
