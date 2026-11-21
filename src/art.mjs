// Every picture on the page is drawn here as plain SVG: flags, small symbols for the story cards, and three wider
// scenes for the lead stories. Nothing is traced from photos and no image model is used.

const UJ = (w, h) => `<rect width="${w}" height="${h}" fill="#012169"/>
  <path d="M0,0L${w},${h}M${w},0L0,${h}" stroke="#fff" stroke-width="${h * 0.2}"/>
  <path d="M0,0L${w},${h}M${w},0L0,${h}" stroke="#c8102e" stroke-width="${h * 0.08}"/>
  <path d="M${w / 2},0V${h}M0,${h / 2}H${w}" stroke="#fff" stroke-width="${h * 0.32}"/>
  <path d="M${w / 2},0V${h}M0,${h / 2}H${w}" stroke="#c8102e" stroke-width="${h * 0.19}"/>`;

const star = (cx, cy, r, fill) => {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const rr = i % 2 ? r * 0.42 : r;
    pts.push(`${(cx + rr * Math.cos(a)).toFixed(2)},${(cy + rr * Math.sin(a)).toFixed(2)}`);
  }
  return `<polygon points="${pts.join(' ')}" fill="${fill}"/>`;
};

const hBands = (cols) => cols.map((c, i) =>
  `<rect y="${(20 / cols.length) * i}" width="30" height="${20 / cols.length + 0.2}" fill="${c}"/>`).join('');
const vBands = (cols) => cols.map((c, i) =>
  `<rect x="${(30 / cols.length) * i}" width="${30 / cols.length + 0.2}" height="20" fill="${c}"/>`).join('');

// 30 x 20 flags, simplified so they still read when 18 px wide
const FLAGS = {
  UA: hBands(['#0057b7', '#ffd700']),
  RU: hBands(['#fff', '#0039a6', '#d52b1e']),
  DE: hBands(['#000', '#dd0000', '#ffce00']),
  NL: hBands(['#ae1c28', '#fff', '#21468b']),
  YE: hBands(['#ce1126', '#fff', '#000']),
  IR: hBands(['#239f40', '#fff', '#da0000']),
  FR: vBands(['#0055a4', '#fff', '#ef4135']),
  IT: vBands(['#009246', '#fff', '#ce2b37']),
  PE: vBands(['#d91023', '#fff', '#d91023']),
  NG: vBands(['#008751', '#fff', '#008751']),
  IE: vBands(['#169b62', '#fff', '#ff883e']),
  US: `<rect width="30" height="20" fill="#fff"/>${[0, 2, 4, 6, 8, 10, 12].map((i) =>
    `<rect y="${i * 20 / 13}" width="30" height="${20 / 13}" fill="#b22234"/>`).join('')}
    <rect width="13" height="10.8" fill="#3c3b6e"/>`,
  GB: UJ(30, 20),
  AU: `${UJ(15, 10)}<rect x="15" width="15" height="10" fill="#012169"/><rect y="10" width="30" height="10" fill="#012169"/>
    ${star(7.5, 15, 2.6, '#fff')}${star(23, 6, 1.4, '#fff')}${star(26, 11, 1.4, '#fff')}${star(21, 14, 1.4, '#fff')}${star(23.5, 17, 1.4, '#fff')}`,
  NZ: `${UJ(15, 10)}<rect x="15" width="15" height="10" fill="#012169"/><rect y="10" width="30" height="10" fill="#012169"/>
    ${star(23, 5, 1.6, '#cc142b')}${star(26.5, 10, 1.6, '#cc142b')}${star(20, 10.5, 1.6, '#cc142b')}${star(23, 16, 1.8, '#cc142b')}`,
  SA: `<rect width="30" height="20" fill="#006c35"/><path d="M7,8.5h16M7,13h16" stroke="#fff" stroke-width="1.3"/>
    <path d="M8,15.5h13l2,-1" stroke="#fff" stroke-width="1" fill="none"/>`,
  IN: `${hBands(['#ff9933', '#fff', '#138808'])}<circle cx="15" cy="10" r="2.4" fill="none" stroke="#000080" stroke-width="0.7"/>`,
  CN: `<rect width="30" height="20" fill="#de2910"/>${star(6, 6, 3.4, '#ffde00')}${star(11.5, 2.6, 1.1, '#ffde00')}
    ${star(13, 5.4, 1.1, '#ffde00')}${star(13, 8.8, 1.1, '#ffde00')}${star(11.5, 11.2, 1.1, '#ffde00')}`,
  JP: `<rect width="30" height="20" fill="#fff"/><circle cx="15" cy="10" r="6" fill="#bc002d"/>`,
  KR: `<rect width="30" height="20" fill="#fff"/><circle cx="15" cy="10" r="5" fill="#003478"/>
    <path d="M10,10a5,5 0 0 1 10,0a2.5,2.5 0 0 1 -5,0a2.5,2.5 0 0 0 -5,0z" fill="#c60c30"/>
    <path d="M4,4l3,-2M4,16l3,2M26,4l-3,-2M26,16l-3,2" stroke="#000" stroke-width="1.4"/>`,
  KP: `<rect width="30" height="20" fill="#024fa2"/><rect y="3.4" width="30" height="13.2" fill="#fff"/>
    <rect y="4.3" width="30" height="11.4" fill="#ed1c27"/><circle cx="10.5" cy="10" r="4" fill="#fff"/>${star(10.5, 10, 3.8, '#ed1c27')}`,
  VN: `<rect width="30" height="20" fill="#da251d"/>${star(15, 10.5, 6, '#ffff00')}`,
  PG: `<path d="M0,0H30L0,20Z" fill="#000"/><path d="M30,0V20H0Z" fill="#ce1126"/>
    <circle cx="22" cy="6" r="2.5" fill="#fcd116"/>${star(7, 13, 1.3, '#fff')}${star(4.5, 16, 1, '#fff')}${star(9.5, 16.5, 1, '#fff')}`,
  PH: `<rect width="30" height="10" fill="#0038a8"/><rect y="10" width="30" height="10" fill="#ce1126"/>
    <path d="M0,0L17,10L0,20Z" fill="#fff"/><circle cx="5.5" cy="10" r="2.2" fill="#fcd116"/>`,
  DK: `<rect width="30" height="20" fill="#c8102e"/><path d="M11,0V20M0,10H30" stroke="#fff" stroke-width="3.6"/>`,
  TR: `<rect width="30" height="20" fill="#e30a17"/><circle cx="11.5" cy="10" r="5" fill="#fff"/>
    <circle cx="12.8" cy="10" r="4" fill="#e30a17"/>${star(18, 10, 2.4, '#fff')}`,
  IL: `<rect width="30" height="20" fill="#fff"/><rect y="2" width="30" height="2.4" fill="#0038b8"/>
    <rect y="15.6" width="30" height="2.4" fill="#0038b8"/>
    <path d="M15,6.2l3.3,5.7h-6.6zM15,13.8l3.3,-5.7h-6.6z" fill="none" stroke="#0038b8" stroke-width="0.9"/>`,
  BR: `<rect width="30" height="20" fill="#009c3b"/><path d="M15,2.5L27,10L15,17.5L3,10Z" fill="#ffdf00"/>
    <circle cx="15" cy="10" r="4.2" fill="#002776"/>`,
  ZA: `<rect width="30" height="20" fill="#fff"/><rect width="30" height="6.7" fill="#de3831"/><rect y="13.3" width="30" height="6.7" fill="#002395"/>
    <path d="M0,0L13,10L0,20M13,10H30" stroke="#007a4d" stroke-width="5" fill="none"/><path d="M0,3L9,10L0,17Z" fill="#000"/>`,
  EU: `<rect width="30" height="20" fill="#003399"/>${Array.from({ length: 12 }, (_, i) =>
    star(15 + 6 * Math.cos((i * Math.PI) / 6), 10 + 6 * Math.sin((i * Math.PI) / 6), 1.1, '#ffcc00')).join('')}`,
  UN: `<rect width="30" height="20" fill="#4b92db"/><circle cx="15" cy="10" r="5" fill="none" stroke="#fff" stroke-width="1"/>
    <path d="M15,5V15M10,10H20" stroke="#fff" stroke-width="0.7"/>`,
  BD: `<rect width="30" height="20" fill="#006a4e"/><circle cx="13.5" cy="10" r="5.5" fill="#f42a41"/>`,
  MM: `${hBands(['#fecb00', '#34b233', '#ea2839'])}${star(15, 11, 6.5, '#fff')}`,
  SG: `<rect width="30" height="10" fill="#ef3340"/><rect y="10" width="30" height="10" fill="#fff"/>
    <circle cx="6.5" cy="5" r="3.2" fill="#fff"/><circle cx="7.8" cy="5" r="3" fill="#ef3340"/>`,
  ES: `${hBands(['#aa151b', '#f1bf00', '#f1bf00', '#aa151b'])}`,
  PL: hBands(['#fff', '#dc143c']),
  VA: vBands(['#ffe000', '#fff']),
  CA: `<rect width="30" height="20" fill="#fff"/><rect width="7.5" height="20" fill="#d80621"/><rect x="22.5" width="7.5" height="20" fill="#d80621"/>
    <path d="M15,4l1.2,2.6l1.8,-0.6l-0.6,3.6l2,-1.2l-0.4,2l1.6,0.4l-3,2.4l0.4,1.6h-2.4v2.4h-1.2v-2.4h-2.4l0.4,-1.6l-3,-2.4l1.6,-0.4l-0.4,-2l2,1.2l-0.6,-3.6l1.8,0.6z" fill="#d80621"/>`,
  MX: `${vBands(['#006847', '#fff', '#ce1126'])}<circle cx="15" cy="10" r="2.2" fill="#8c6b2e"/>`,
  KE: `${hBands(['#000', '#fff', '#bb0000', '#bb0000', '#fff', '#006600'])}<ellipse cx="15" cy="10" rx="3" ry="6" fill="#bb0000" stroke="#000" stroke-width="0.6"/>`,
  SD: `${hBands(['#d21034', '#fff', '#000'])}<path d="M0,0L11,10L0,20Z" fill="#007229"/>`,
  NP: `<rect width="30" height="20" fill="#fff"/><path d="M9,1L21,9H12L21,19H9Z" fill="#dc143c" stroke="#003893" stroke-width="1"/>`,
  PS: `${hBands(['#000', '#fff', '#007a3d'])}<path d="M0,0L12,10L0,20Z" fill="#ce1126"/>`,
};

export function flag(code, x, y, w = 24) {
  const body = FLAGS[code];
  if (!body) throw new Error(`no flag drawn for ${code}`);
  const h = (w * 2) / 3;
  return `<svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="0 0 30 20" preserveAspectRatio="none">${body}
    <rect width="30" height="20" fill="none" stroke="rgba(0,0,0,.35)" stroke-width="0.8"/></svg>`;
}

// ---- symbols, drawn in a 100 x 100 box -------------------------------------------------------------
const SYMBOLS = {
  missile: `<path d="M18,82L64,36" stroke="#e8e8e8" stroke-width="3" stroke-dasharray="5 4"/>
    <path d="M60,40L78,22L86,14L84,24L66,42Z" fill="#d1d5db" stroke="#374151" stroke-width="2"/>
    <circle cx="80" cy="20" r="13" fill="#fbbf24" opacity=".9"/><circle cx="80" cy="20" r="7" fill="#fff7d6"/>`,
  shield: `<path d="M50,10L84,22V48C84,70 68,84 50,92C32,84 16,70 16,48V22Z" fill="#1e40af" stroke="#fff" stroke-width="4"/>
    <path d="M34,50L46,62L68,36" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round"/>`,
  quake: `<path d="M4,56H24L30,40L36,74L44,18L52,86L58,32L64,64L70,50H96" stroke="#b91c1c" stroke-width="5" fill="none" stroke-linejoin="round"/>`,
  globe: `<circle cx="50" cy="50" r="38" fill="#3b82f6" stroke="#1e3a8a" stroke-width="3"/>
    <path d="M30,28c10,4 6,14 16,16s6,14 -4,18s-4,12 -12,8M62,20c-4,8 6,10 10,16s10,6 8,16s-10,8 -8,16" fill="#22c55e" stroke="#15803d" stroke-width="2"/>`,
  thermo: `<rect x="40" y="8" width="20" height="62" rx="10" fill="#fff" stroke="#374151" stroke-width="3"/>
    <rect x="45" y="30" width="10" height="44" fill="#dc2626"/><circle cx="50" cy="78" r="15" fill="#dc2626" stroke="#374151" stroke-width="3"/>`,
  clock: `<circle cx="50" cy="50" r="38" fill="#fff" stroke="#111827" stroke-width="6"/>
    <path d="M50,50V22M50,50L70,60" stroke="#111827" stroke-width="6" stroke-linecap="round"/>`,
  ballot: `<rect x="18" y="44" width="64" height="46" rx="4" fill="#1e3a8a"/><rect x="34" y="44" width="32" height="5" fill="#0f172a"/>
    <path d="M36,10H66V48H36Z" fill="#fff" stroke="#374151" stroke-width="3"/><path d="M41,28L48,36L61,18" stroke="#16a34a" stroke-width="5" fill="none"/>`,
  chip: `<rect x="24" y="24" width="52" height="52" rx="6" fill="#111827" stroke="#9ca3af" stroke-width="3"/>
    <path d="M34,14V24M50,14V24M66,14V24M34,76V86M50,76V86M66,76V86M14,34H24M14,50H24M14,66H24M76,34H86M76,50H86M76,66H86" stroke="#9ca3af" stroke-width="4"/>
    <text x="50" y="58" text-anchor="middle" font-family="Arial" font-weight="700" font-size="22" fill="#76b900">AI</text>`,
  car: `<path d="M8,64L22,52H44L52,44H70L74,52H92V64Z" fill="#c8102e" stroke="#111" stroke-width="2"/>
    <rect x="4" y="46" width="12" height="18" fill="#111"/><rect x="86" y="44" width="10" height="20" fill="#111"/>
    <circle cx="26" cy="68" r="10" fill="#111"/><circle cx="78" cy="68" r="10" fill="#111"/>
    <circle cx="26" cy="68" r="4" fill="#9ca3af"/><circle cx="78" cy="68" r="4" fill="#9ca3af"/>`,
  plane: `<path d="M10,58L84,30C92,27 96,33 90,37L30,66Z" fill="#f8fafc" stroke="#334155" stroke-width="3"/>
    <path d="M44,48L34,22L44,20L62,42ZM40,58L50,82L58,80L56,54Z" fill="#cbd5e1" stroke="#334155" stroke-width="3"/>
    <path d="M12,58L4,44L12,42L22,54Z" fill="#c8102e"/>`,
  cricket: `<path d="M24,86L62,26L72,32L34,92Z" fill="#d6a461" stroke="#7c4a12" stroke-width="3"/>
    <path d="M62,26L72,10L80,15L72,32" fill="#7c4a12"/><circle cx="76" cy="70" r="11" fill="#b91c1c" stroke="#fff" stroke-width="2"/>`,
  coin: `<circle cx="50" cy="50" r="38" fill="#f7931a" stroke="#b45309" stroke-width="4"/>
    <text x="50" y="66" text-anchor="middle" font-family="Arial" font-weight="900" font-size="46" fill="#fff">₿</text>`,
  chartDown: `<path d="M8,20L30,40L46,32L66,62L92,78" stroke="#dc2626" stroke-width="8" fill="none" stroke-linejoin="round"/>
    <path d="M78,82L94,80L92,64" stroke="#dc2626" stroke-width="8" fill="none" stroke-linejoin="round"/>`,
  gavel: `<rect x="30" y="18" width="40" height="20" rx="4" transform="rotate(-35 50 28)" fill="#92400e" stroke="#451a03" stroke-width="3"/>
    <path d="M54,40L82,80" stroke="#78350f" stroke-width="9" stroke-linecap="round"/><rect x="12" y="78" width="46" height="10" rx="3" fill="#451a03"/>`,
  fire: `<path d="M50,92C26,92 16,74 22,56C26,46 34,42 34,30C46,38 48,48 48,48C52,36 60,22 58,8C76,22 86,46 80,66C76,82 66,92 50,92Z" fill="#f97316"/>
    <path d="M50,92C38,92 34,80 38,70C42,62 48,60 48,52C58,60 64,70 62,80C60,88 56,92 50,92Z" fill="#fde047"/>`,
  robot: `<rect x="24" y="30" width="52" height="40" rx="8" fill="#9ca3af" stroke="#374151" stroke-width="3"/>
    <circle cx="40" cy="48" r="6" fill="#dc2626"/><circle cx="60" cy="48" r="6" fill="#dc2626"/><path d="M50,30V16" stroke="#374151" stroke-width="4"/>
    <circle cx="50" cy="13" r="5" fill="#dc2626"/><rect x="36" y="74" width="28" height="18" fill="#6b7280"/>`,
  factory: `<path d="M8,88V48L30,60V48L52,60V48L74,60V20H88V88Z" fill="#475569" stroke="#1e293b" stroke-width="3"/>
    <rect x="20" y="70" width="10" height="10" fill="#fde68a"/><rect x="42" y="70" width="10" height="10" fill="#fde68a"/><rect x="64" y="70" width="10" height="10" fill="#fde68a"/>`,
  ship: `<path d="M8,62H92L80,82H20Z" fill="#1f2937"/><rect x="26" y="40" width="44" height="22" fill="#e5e7eb" stroke="#374151" stroke-width="2"/>
    <path d="M4,90C16,84 26,96 38,90S60,84 72,90S90,96 98,90" stroke="#38bdf8" stroke-width="4" fill="none"/>`,
  handshake: `<path d="M6,46L30,30L50,38L70,30L94,46L74,70L50,78L26,70Z" fill="#fcd34d" stroke="#92400e" stroke-width="3"/>
    <path d="M30,52L50,64L70,52" stroke="#92400e" stroke-width="3" fill="none"/>`,
  gamepad: `<path d="M18,40H82C92,40 96,62 92,74C88,84 78,82 72,72L66,64H34L28,72C22,82 12,84 8,74C4,62 8,40 18,40Z" fill="#1f2937"/>
    <path d="M26,50V62M20,56H32" stroke="#fff" stroke-width="4"/><circle cx="70" cy="52" r="4" fill="#ec4899"/><circle cx="78" cy="60" r="4" fill="#22d3ee"/>`,
  hospital: `<rect x="16" y="16" width="68" height="68" rx="10" fill="#fff" stroke="#b91c1c" stroke-width="4"/>
    <path d="M50,28V72M28,50H72" stroke="#b91c1c" stroke-width="14"/>`,
  scales: `<path d="M50,14V86M30,86H70M18,30H82" stroke="#374151" stroke-width="5"/>
    <path d="M18,30L8,56H28ZM82,30L72,56H92Z" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>`,
  rain: `<path d="M24,52C10,52 10,32 24,32C26,18 46,14 54,26C66,18 84,26 80,42C92,44 90,60 78,60H24Z" fill="#94a3b8"/>
    <path d="M30,68L26,80M46,68L42,80M62,68L58,80M78,68L74,80" stroke="#2563eb" stroke-width="5" stroke-linecap="round"/>`,
  tennis: `<circle cx="50" cy="50" r="34" fill="#d9f99d" stroke="#65a30d" stroke-width="3"/>
    <path d="M22,30C40,40 40,60 22,70M78,30C60,40 60,60 78,70" stroke="#fff" stroke-width="4" fill="none"/>`,
  football: `<circle cx="50" cy="50" r="36" fill="#fff" stroke="#111" stroke-width="3"/>
    <polygon points="50,36 63,45 58,61 42,61 37,45" fill="#111"/>`,
  dove: `<path d="M14,60C30,40 50,36 66,44L86,30L80,48C80,64 62,76 40,72L24,82L28,68Z" fill="#fff" stroke="#334155" stroke-width="3"/>`,
  pill: `<rect x="14" y="36" width="72" height="28" rx="14" transform="rotate(-30 50 50)" fill="#fff" stroke="#0e7490" stroke-width="4"/>
    <path d="M50,26L50,74" transform="rotate(-30 50 50)" stroke="#0e7490" stroke-width="4"/>`,
  bridge: `<path d="M4,64H96" stroke="#374151" stroke-width="6"/><path d="M16,64Q50,18 84,64" stroke="#6b7280" stroke-width="5" fill="none"/>
    <path d="M30,64V44M50,64V36M70,64V44" stroke="#6b7280" stroke-width="3"/><path d="M4,82C20,76 30,88 50,82S80,76 96,82" stroke="#38bdf8" stroke-width="4" fill="none"/>`,
  satellite: `<rect x="40" y="40" width="20" height="20" fill="#d1d5db" stroke="#374151" stroke-width="3" transform="rotate(45 50 50)"/>
    <rect x="6" y="40" width="26" height="20" fill="#2563eb" stroke="#1e3a8a" stroke-width="2"/><rect x="68" y="40" width="26" height="20" fill="#2563eb" stroke="#1e3a8a" stroke-width="2"/>`,
  crown: `<path d="M14,74L8,30L32,50L50,20L68,50L92,30L86,74Z" fill="#facc15" stroke="#92400e" stroke-width="3"/>`,
  people: `<circle cx="32" cy="34" r="12" fill="#334155"/><circle cx="68" cy="34" r="12" fill="#334155"/><circle cx="50" cy="28" r="13" fill="#0f172a"/>
    <path d="M12,86C12,62 52,62 52,86ZM48,86C48,62 88,62 88,86Z" fill="#334155"/><path d="M28,90C28,58 72,58 72,90Z" fill="#0f172a"/>`,
  mic: `<rect x="38" y="12" width="24" height="44" rx="12" fill="#374151"/><path d="M26,46C26,74 74,74 74,46M50,70V88M36,88H64" stroke="#374151" stroke-width="5" fill="none"/>`,
  tank: `<rect x="14" y="56" width="72" height="20" rx="10" fill="#4b5563"/><rect x="26" y="40" width="40" height="18" rx="4" fill="#6b7280"/>
    <path d="M62,46H94" stroke="#4b5563" stroke-width="6"/>`,
};

export function symbol(name, x, y, size) {
  const body = SYMBOLS[name];
  if (!body) throw new Error(`no symbol drawn for ${name}`);
  return `<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="0 0 100 100">${body}</svg>`;
}

// ---- the three lead scenes, 320 x 124 ---------------------------------------------------------------
const W = 320, H = 124;

function skyline(color, lit) {
  const blocks = [[0, 70, 34], [32, 54, 26], [56, 78, 30], [84, 40, 22], [104, 64, 36], [138, 24, 16],
    [152, 58, 30], [180, 72, 26], [204, 48, 32], [234, 66, 28], [260, 38, 24], [282, 60, 38]];
  let s = '';
  for (const [x, top, w] of blocks) {
    s += `<rect x="${x}" y="${top}" width="${w}" height="${H - top}" fill="${color}"/>`;
    for (let wy = top + 6; wy < H - 6; wy += 9) {
      for (let wx = x + 4; wx < x + w - 4; wx += 7) {
        if ((wx * 7 + wy * 3) % 5 < 2) s += `<rect x="${wx}" y="${wy}" width="3" height="4" fill="${lit}"/>`;
      }
    }
  }
  return s;
}

const SCENES = {
  // Saudi air defences stop three Houthi missiles over Riyadh before dawn
  riyadh: () => `<rect width="${W}" height="${H}" fill="#0b1633"/>
    ${Array.from({ length: 22 }, (_, i) => `<circle cx="${(i * 47) % W}" cy="${(i * 29) % 60}" r="0.9" fill="#cbd5e1"/>`).join('')}
    ${skyline('#1a2647', '#f6d365')}
    <path d="M138,24L146,4L154,24Z" fill="#1a2647"/><path d="M141,16h10" stroke="#0b1633" stroke-width="4"/>
    ${[[30, 50, 98, 12], [120, 80, 196, 20], [250, 64, 268, 10]].map(([x1, y1, x2, y2]) =>
      `<path d="M${x1 - 30},${H} Q${x1},${y1 + 10} ${x2},${y2}" stroke="#ffb86b" stroke-width="2" stroke-dasharray="4 3" fill="none"/>
       <circle cx="${x2}" cy="${y2}" r="11" fill="#ffcc4d" opacity=".55"/><circle cx="${x2}" cy="${y2}" r="5.5" fill="#fff4cf"/>
       ${[0, 1, 2, 3, 4, 5, 6, 7].map((k) => `<path d="M${x2},${y2}l${(14 * Math.cos(k * 0.785)).toFixed(1)},${(14 * Math.sin(k * 0.785)).toFixed(1)}" stroke="#ffcc4d" stroke-width="1.6"/>`).join('')}`).join('')}
    ${[[70, H], [160, H], [230, H]].map(([x, y]) => `<path d="M${x},${y} L${x + 24},${y - 60}" stroke="#93c5fd" stroke-width="1.4" opacity=".8"/>`).join('')}`,

  // Peru: the Andes, a seismograph trace and a cracked house
  peru: () => `<rect width="${W}" height="${H}" fill="#fde7c7"/>
    <path d="M0,82L40,40L70,66L110,22L150,62L190,30L230,70L270,36L320,74V${H}H0Z" fill="#a16207" opacity=".55"/>
    <path d="M96,36L110,22L124,36L116,34L110,40L104,34Z" fill="#fff"/><path d="M178,40L190,30L202,42L194,39L190,44L186,39Z" fill="#fff"/>
    <rect y="88" width="${W}" height="${H - 88}" fill="#8b5e34"/>
    <path d="M0,104H70L78,90L86,118L96,80L106,122L116,86L124,112L132,98L140,104H${W}" stroke="#b91c1c" stroke-width="3" fill="none"/>
    <g transform="translate(220,54)"><path d="M0,34V14L22,0L44,14V34Z" fill="#fff" stroke="#7c2d12" stroke-width="2.5"/>
      <path d="M0,14L22,0L44,14" stroke="#b91c1c" stroke-width="5" fill="none"/><path d="M24,14L18,22L26,26L20,34" stroke="#111" stroke-width="2" fill="none"/>
      <rect x="8" y="20" width="8" height="8" fill="#93c5fd"/></g>
    ${[16, 28, 40].map((r) => `<circle cx="40" cy="104" r="${r}" fill="none" stroke="#b91c1c" stroke-width="1.5" opacity="${1 - r / 50}"/>`).join('')}`,

  // COP31 runs past its deadline: globe, thermometer and a clock past the hour
  cop: () => `<rect width="${W}" height="${H}" fill="#dff3ea"/>
    <rect y="96" width="${W}" height="${H - 96}" fill="#bfe3d0"/>
    ${symbol('globe', 150, 16, 96)}${symbol('thermo', 230, 18, 84)}${symbol('clock', 70, 26, 74)}
    <path d="M107,40A30,30 0 0 1 132,52" stroke="#dc2626" stroke-width="4" fill="none"/>
    <text x="118" y="38" font-family="Arial" font-weight="700" font-size="12" fill="#dc2626">+1 day</text>`,

  // Victoria votes: a ballot box between the two party colours
  vote: () => `<rect width="${W / 2}" height="${H}" fill="#e8f0ff"/><rect x="${W / 2}" width="${W / 2}" height="${H}" fill="#ffe8e8"/>
    ${symbol('ballot', 112, 8, 108)}${flag('AU', 24, 20, 60)}
    ${[0, 1, 2, 3, 4].map((i) => `<rect x="${236 + i * 14}" y="${96 - i * 12}" width="10" height="${i * 12 + 10}" fill="${i < 3 ? '#1d4ed8' : '#dc2626'}"/>`).join('')}`,
};

export function scene(name) {
  const draw = SCENES[name];
  if (!draw) throw new Error(`no scene drawn for ${name}`);
  return `<svg width="100%" height="100%" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">${draw()}</svg>`;
}
