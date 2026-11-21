// Saturday 21 November 2026 in one picture.
// The picture is drawn ahead of time by build.mjs (HTML + hand-written SVG, captured by headless Chrome) and kept
// in the repository as entry.png. The graded program runs offline, so all it does is hand that file over.
// Locally: MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const png = readFileSync(new URL('./entry.png', import.meta.url));

// Refuse to hand over anything the gate would reject: a PNG signature, at most 1 MiB, at most 1024 x 1024.
const SIGNATURE = '89504e470d0a1a0a';
if (png.subarray(0, 8).toString('hex') !== SIGNATURE) throw new Error('entry.png is not a PNG');
if (png.length > 1048576) throw new Error(`entry.png is ${png.length} bytes, over 1 MiB`);
const width = png.readUInt32BE(16), height = png.readUInt32BE(20);
if (width > 1024 || height > 1024) throw new Error(`entry.png is ${width}x${height}, over 1024x1024`);

writeFileSync(join(outDir, 'entry.png'), png);
