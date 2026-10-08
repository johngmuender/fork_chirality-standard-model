import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import {
  anomalyChannels,
  chargeTiling,
  familyContent,
  frustrationIntegrals,
  holonomyPhases,
  leptonLadder,
  leptonLogarithms,
  neutralSector,
  tilingContributions,
  tilingSums,
} from '../lib/gum-sectors.ts';
import {
  darkEnergyFractionToday,
  decelerationNow,
  dvaliTurnerExponent,
  equationOfState,
  familyMembers,
  minimumIndex,
  neutrinoDriftRatio,
  relaxationTable,
  w0wa,
  wa,
} from '../lib/gum-cosmos.ts';
import { chapterInfo, readerPaths } from '../lib/reader-paths.ts';

const near = (a: number, b: number, tolerance: number, label: string) =>
  assert(
    Math.abs(a - b) <= tolerance,
    `${label}: ${a} is not within ${tolerance} of ${b}`,
  );

// Proposition 20: the six sums close on one family and fail without any charged multiplet.
assert.equal(anomalyChannels.length, 6);
assert.equal(familyContent.length, 6);
const full = tilingSums(familyContent.map(() => true));
assert(full.passes, 'one family closes all six sums');
assert.deepEqual(full.totals.slice(0, 5), [0, 0, 0, 0, 0]);
assert.equal(full.totals[5] % 2, 0, 'an even number of doublets');
assert.equal(full.doublets, 4);
for (const [i, multiplet] of familyContent.entries()) {
  const included = familyContent.map((_, j) => j !== i);
  const result = tilingSums(included);
  if (multiplet.q === 0 && multiplet.weak === 1)
    assert(result.passes, 'the heliknoton carries no anomaly');
  else
    assert(!result.passes, 'dropping ' + multiplet.label + ' must fail a sum');
}
for (let mask = 0; mask < 64; mask++) {
  const included = familyContent.map((_, i) => Boolean(mask & (1 << i)));
  const result = tilingSums(included);
  assert.deepEqual(
    result.totals,
    [0, 1, 2, 3, 4, 5].map((j) =>
      familyContent.reduce(
        (sum, _, i) => sum + (included[i] ? tilingContributions(i)[j] : 0),
        0,
      ),
    ),
  );
}
near(chargeTiling(), 0, 1e-12, 'the charge tiling closes');
assert.throws(() => tilingSums([true]));
assert.throws(() => tilingContributions(6));

// Proposition 19: the neutral sector is rank one for every mixing modulus.
for (const theta of [0.3, 0.55, 0.8]) {
  const sector = neutralSector(theta);
  near(sector.determinant, 0, 1e-12, 'rank one');
  near(sector.sin2ThetaW, theta ** 2 / (1 + theta ** 2), 1e-12, 'sin²θ_w');
  near(sector.mzOverMw, Math.sqrt(1 + theta ** 2), 1e-12, 'M_Z/M_W');
  assert.equal(sector.rho, 1);
}
near(
  neutralSector(0.55).mzOverMw,
  1.134,
  0.01,
  'the measured ratio lands at ϑ ≈ 0.55',
);
assert.throws(() => neutralSector(0));

// Proposition 21: Kobayashi–Maskawa counting.
assert.deepEqual([2, 3, 4].map(holonomyPhases), [0, 1, 3]);
assert.equal(Math.abs(holonomyPhases(1)), 0);
assert.throws(() => holonomyPhases(0));
assert.throws(() => holonomyPhases(2.5));

// Section VIII A: the frustration ladder lands within its stated uncertainty.
const ladder = leptonLadder();
near(ladder.tauMu, frustrationIntegrals.A / 2, 1e-12, 'ln(m_τ/m_μ) = ½A');
near(
  ladder.muE,
  (frustrationIntegrals.A + frustrationIntegrals.B) / 2,
  1e-12,
  'ln(m_μ/m_e) = ½(A+B)',
);
assert(
  Math.abs(ladder.tauMu - leptonLogarithms.tauMu) < frustrationIntegrals.dA / 2,
  'τ/μ lands',
);
assert(
  Math.abs(ladder.muE - leptonLogarithms.muE) <
    (frustrationIntegrals.dA + frustrationIntegrals.dB) / 2,
  'μ/e lands',
);
assert(
  ladder.nextClassMassEv < 1000 && ladder.nextClassMassEv > 10,
  'the 𝗉 = 3 state near 100 eV',
);

// Propositions 22–27: the relaxation family.
assert.equal(darkEnergyFractionToday, 0.69);
for (const n of familyMembers) {
  const point = w0wa(n);
  assert(point.w0 >= -1 - 1e-12 && point.w0 <= 1e-12, 'w₀ ∈ [−1, 0]');
  assert(point.wa >= -1e-12, 'w_a ≥ 0 for every member');
  near(point.wa, wa(n), 1e-12, 'w_a agrees with the Eq. (72) form');
  near(dvaliTurnerExponent(n), 2 * (1 - n), 1e-12, 'α_DT = 2(1 − n)');
  for (const a of [0.3, 0.6, 1]) {
    const w = equationOfState(a, n);
    assert(w >= -1 - 1e-12 && w <= 1e-12, 'w never crosses −1');
  }
  near(neutrinoDriftRatio(0, n, -0.2), 1, 1e-12, 'no drift today');
}
near(equationOfState(1, 1), -1, 1e-12, 'n = 1 is ΛCDM');
near(w0wa(0.5).w0, -0.5 / (1 - 0.5 * 0.69), 1e-9, 'w₀ at n = ½');
near(minimumIndex(), 0.31 / 1.38, 1e-6, 'acceleration requires n > n_min');
assert(decelerationNow(1) < 0 && decelerationNow(0) > 0);
const table = relaxationTable();
assert.equal(table.length, familyMembers.length);
assert(table.every((row) => row.wa >= 0));
assert(
  neutrinoDriftRatio(2, 0.5, -0.2) < 1,
  'neutrinos lighter in the past for ε_ν < 0',
);
assert.throws(() => equationOfState(0, 0.5));
assert.throws(() => w0wa(1.5));

// Four reading routes, each pointing at sections that exist.
const sources = readdirSync('components')
  .filter((f) => f.endsWith('.tsx'))
  .map((f) => readFileSync('components/' + f, 'utf8'))
  .join('\n');
const ids = new Set([...sources.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
assert.equal(readerPaths.length, 5);
for (const path of readerPaths) {
  assert(['story', 'explore', 'math'].includes(path.depth));
  for (const stop of path.stops)
    assert(
      ids.has(stop.id) || Object.hasOwn(chapterInfo, stop.id),
      'Missing reader-path target: ' + stop.id,
    );
}

// The dark presentation, before hydration and without a light override.
const theme = readFileSync('app/themes.css', 'utf8');
assert(!theme.includes('data-theme'), 'No alternate light palette.');
const layout = readFileSync('app/layout.tsx', 'utf8');
assert(
  layout.includes('data-theme="dark"'),
  'Dark on the server, before hydration.',
);
assert(
  !layout.includes('localStorage') && !layout.includes('prefers-color-scheme'),
  'Saved or OS light preference cannot override the page.',
);
assert(!sources.includes('ThemeToggle'), 'No light-mode toggle remains.');
const luminance = (hex: string) => {
  const channels = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((x) => (x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
};
const contrast = (a: string, b: string) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
for (const [fg, bg] of [
  ['f0f2f3', '080b10'],
  ['b2c2d5', '0b111a'],
  ['aab6c4', '080b10'],
  ['9cacc0', '0f1824'],
  ['8fa9c4', '0f1824'],
  ['ecd199', '182a40'],
  ['d3e4f7', '152538'],
  ['a6d3c0', '10221e'],
  ['e4edf8', '080b10'],
  ['95a7bc', '080b10'],
]) {
  assert(
    contrast('#' + fg, '#' + bg) >= 4.5,
    'Dark body contrast: ' + fg + ' on ' + bg,
  );
}
for (const file of readdirSync('app').filter(
  (f) => f.endsWith('.css') && f !== 'themes.css',
)) {
  for (const match of readFileSync('app/' + file, 'utf8').matchAll(
    /var\(--tone-([a-f0-9]+)\)/g,
  ))
    assert(
      theme.includes('--tone-' + match[1] + ':'),
      'Undefined theme token in ' + file + ': ' + match[1],
    );
}
console.log(
  'PASS: all 64 family subsets across six sums; rank-one neutral sector and ρ = 1; holonomy counting; the frustration ladder lands; the relaxation family keeps w ∈ [−1, 0] and w_a ≥ 0; five reader paths; theme tokens and body-text contrast.',
);
