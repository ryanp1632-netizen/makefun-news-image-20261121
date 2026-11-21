// Saturday 21 November 2026 in one picture.
// The picture is drawn ahead of time by build.mjs (HTML + hand-written SVG, captured by headless Chrome) and kept
// in the repository as entry.png. The graded program runs offline, so all it does is hand that file over.
// Locally: MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
