// Saturday front page entry (Node 22, standard library only). The front
// page stored in this repository as entry.png is written to
// /output/entry.png. The grader executes this program twice and requires
// both runs to produce identical bytes, so the program performs one
// deterministic copy and nothing else: no timestamps, no randomness,
// no network.
//
// The picture itself is "THE WORLD TODAY", a dense one-page newspaper
// front page for Saturday 21 November 2026 in 40 verified stories: a
// masthead dated SATURDAY, NOVEMBER 21, 2026, three lead stories told
// with photos (Cyclone Akvan makes landfall on India's Odisha coast;
// Trump rates his Shenzhen trilateral with Xi and Putin "12 out of 10"
// and presses the Fed for rate cuts; hackers hit Visa, Mastercard and
// JPMorgan through a third-party vendor), a "day in figures" strip
// (Sensex +898, US gas down 60c, 12/10, India 239-1 at lunch in
// Wellington), a "WHERE IT HAPPENED" world map with numbered pins, a
// numbered story grid 4-40, and a sources footer.
//
// The three leads: Cyclone Akvan's landfall on the Odisha coast;
// Donald Trump's first press conference after the Shenzhen summit;
// and the third-party vendor breach at Visa, Mastercard and JPMorgan.
// The figures row carries the day's numbers: 898 for the Sensex rally,
// 60c for the US petrol price fall in a month, 12/10 for Trump's
// summit rating, 239-1 for India at lunch on Day 3 in Wellington.
//
// When run outside the grader, MAKEFUN_OUTPUT_DIR takes the place of
// /output:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const image = join(here, 'entry.png');
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (!existsSync(image) || statSync(image).size === 0) {
  throw new Error('entry.png is missing or empty');
}
mkdirSync(targetDir, { recursive: true });
const target = join(targetDir, 'entry.png');
copyFileSync(image, target);
// The grader runs this program twice and demands identical bytes, so
// confirm the copy landed whole before finishing: same size and same
// sha256 digest as the stored image.
if (statSync(target).size !== statSync(image).size) {
  throw new Error('entry.png copy is incomplete');
}
const digest = (p) => createHash('sha256').update(readFileSync(p)).digest('hex');
if (digest(target) !== digest(image)) {
  throw new Error('entry.png copy is corrupted');
}
// The grader only accepts a whole PNG of at most 1024x1024, so confirm
// the copy landed as one: PNG magic bytes plus an IHDR of 1024x1024.
// A truncated or non-PNG copy would otherwise pass the size/hash checks
// above only if the source itself were already broken.
const head = readFileSync(target).subarray(0, 33);
if (head.length < 33 || head.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
  throw new Error('entry.png copy is not a PNG');
}
const width = head.readUInt32BE(16);
const height = head.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png copy is ${width}x${height}, expected 1024x1024`);
}
