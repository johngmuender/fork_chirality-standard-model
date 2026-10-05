import assert from 'node:assert/strict';
import { runLocalChecks } from '../lib/gum-checks.ts';
import { electronMassEv, lightSpeed } from '../lib/gum-constants.ts';
import {
  coneSpeed,
  doubletDispersion,
  matterLightConeDifference,
  referenceModuli,
  transverseBranches,
  withConeCondition,
} from '../lib/gum-material.ts';
import {
  bipartiteBound,
  criticalLabSpeed,
  dipoleFieldHistory,
  labArrivalTime,
  longitudinalLeak,
  siderealArrivalSeries,
} from '../lib/gum-light.ts';
import {
  pitchFromMass,
  pitchWindow,
  reflectance,
  transparencyBound,
  troughSpectrum,
  edgeWavelength,
} from '../lib/gum-vacuum.ts';
import {
  cliffLocation,
  effectiveDegrees,
  gateBudget,
  returnProbability,
  schmidtCliff,
  towerSchmidtRank,
} from '../lib/gum-quantum.ts';
import {
  admittedHalfIntegers,
  bandEdge,
  bogomolnyCoefficient,
  channelingResonance,
  closureNumber,
  closureSolution,
  compactonProfile,
  haarIntegral,
  kappaFromLine,
  positroniumLine,
  routhianWindow,
  rowSpacing,
} from '../lib/gum-particle.ts';
import {
  degree,
  hedgehog,
  isorotate,
  knotSamples,
  shellReadout,
} from '../lib/gum-knot.ts';

const near = (a: number, b: number, tolerance: number, label: string) =>
  assert(
    Math.abs(a - b) <= tolerance,
    `${label}: ${a} is not within ${tolerance} of ${b}`,
  );

// The browser checks are the first line: all of them must pass here as well.
const report = runLocalChecks();
assert.equal(report.checks.length, 12);
assert(
  report.passed,
  'Local checks: ' +
    report.checks
      .filter((c) => !c.passed)
      .map((c) => c.label)
      .join('; '),
);

// The exact linear spectrum (Prop. 1): cone condition and its failure.
for (const k of [0.05, 0.5, 2, 7, 25])
  near(
    transverseBranches(k, referenceModuli)[0],
    coneSpeed(referenceModuli) * k,
    1e-9 * k,
    'doublet on the cone',
  );
assert.equal(doubletDispersion(3, referenceModuli), 0);
const detuned = { ...referenceModuli, mu: referenceModuli.mu * 1.3 };
assert(
  Math.abs(doubletDispersion(3, detuned)) > 1e-3,
  'mismatch disperses the doublet',
);
assert.equal(doubletDispersion(3, withConeCondition(detuned)), 0);
assert(
  transverseBranches(1, referenceModuli)[1] >
    transverseBranches(1, referenceModuli)[0],
  'B3 lies above the doublet',
);
assert.throws(() => transverseBranches(-1, referenceModuli));
// Erratum E2: the matter–light cone difference at the weak gap.
const weakGap = (80.4e9 * 1.602176634e-19) / 1.054571817e-34;
near(
  matterLightConeDifference(1.5e-27, weakGap),
  ((1.5e-27 * weakGap) / lightSpeed) ** 2 / 8,
  1e-40,
  'cone difference',
);

// Proposition 4 and Eq. (43): arrival-time kinematics on lab clocks.
const cL = 1e4 * lightSpeed;
near(
  criticalLabSpeed(cL),
  lightSpeed / 1e4,
  1e-6,
  'critical lab speed is c/10⁴',
);
assert(
  labArrivalTime(100, 100 * lightSpeed, 369.8e3, 1) > 0,
  'below c²/c_L the influence follows emission',
);
assert(
  labArrivalTime(100, cL, 369.8e3, 1) < 0,
  'the CMB dipole speed exceeds c²/c_L = 30 km/s at c_L = 10⁴c',
);
assert(
  labArrivalTime(100, cL, 369.8e3, 0) > 0,
  'a baseline perpendicular to v_M never precedes emission',
);
const series = siderealArrivalSeries(
  100,
  cL,
  369.8e3,
  Math.acos(0.14),
  0,
  1,
  48,
);
assert.equal(
  series.length,
  49,
  '48 sidereal intervals, both endpoints included',
);
assert(series.every((s) => Number.isFinite(s.arrival)));
const swing =
  Math.max(...series.map((s) => s.arrival)) -
  Math.min(...series.map((s) => s.arrival));
near(swing * 1e9, 0.8, 0.1, 'east–west swing at 100 m is about 0.8 ns');
const bound = bipartiteBound(1e4, 1e-10, 3.7e5, 60);
near(
  bound.rotationTerm,
  (0.5 * ((2 * Math.PI) / 86164.0905) * 3.7e5 * 1e4 * 60) / lightSpeed ** 2,
  1e-13,
  'rotation term ½ Ω v⊥ L T_int / c² ≈ 90 ps',
);
near(
  bound.bound / lightSpeed,
  1e4 / (lightSpeed * (1e-10 + bound.rotationTerm)),
  1,
  'Eq. (43): c_L ≥ L / (δt + rotation term)',
);
assert(
  bound.bound / lightSpeed > 1e4,
  'the printed example bounds c_L above 10⁴c',
);
near(longitudinalLeak(1e-4), 0.5e-12, 1e-14, 'Prop. 3 leak ½(c/c_L)³');
assert.equal(
  dipoleFieldHistory(0.2, 1, 'G', 3, 1),
  0,
  'Gauss: nothing before the light front',
);
assert.equal(dipoleFieldHistory(0.5, 1, 'G', 3, 1), 0);
assert.equal(
  dipoleFieldHistory(1.5, 1, 'G', 3, 1),
  1,
  'Gauss: the retarded field after it',
);
assert.equal(
  dipoleFieldHistory(0.2, 1, 'T', 3, 1),
  -1,
  'transverse: minus the Coulomb change before the c_L front',
);
assert.equal(
  dipoleFieldHistory(0.5, 1, 'T', 3, 1),
  0,
  'transverse: zero between the fronts',
);
assert.equal(dipoleFieldHistory(1.5, 1, 'T', 3, 1), 1);
assert.throws(() => dipoleFieldHistory(0.5, 1, 'G', 0.5, 1));

// The pitch window and the transparency bound (Prop. 6, Cor. 2).
const [low, high] = pitchWindow();
near(low * 1e6, 21.75, 0.05, 'pitch floor');
near(high * 1e6, 24.65, 0.05, 'pitch ceiling');
near(pitchFromMass(0.0505) * 1e6, 24.55, 0.05, 'pitch at m₃ = 50.5 meV');
const transparency = transparencyBound(24.6e-6);
assert(transparency > 5e-17 && transparency < 7.5e-17, 'Δn/n̄ ≲ 6.2×10⁻¹⁷');
near(reflectance(0), 0, 1e-12, 'no passage, no reflection');
assert(reflectance(3) > 0.9 && reflectance(3) < 1);
const spectrum = troughSpectrum(0.12, 24.6e-6, 6.2e-17);
assert(spectrum.length > 20);
assert(
  spectrum.every(
    (d) =>
      d.intensity <= 1 &&
      d.intensity > 0.5 &&
      d.polarization >= 0 &&
      d.polarization <= 1,
  ),
);
assert(
  spectrum[0].lambda < 24.6e-6 && spectrum.at(-1)!.lambda > 24.6e-6 * 1.12,
  'the trough spans edge to n̄p(1+z_s)',
);
near(
  edgeWavelength(24.6e-6, 369.8e3, -1) - edgeWavelength(24.6e-6, 369.8e3, 1),
  2 * 24.6e-6 * (369.8e3 / lightSpeed),
  1e-12,
  'the edge is blueshifted toward the dipole by p v_M/c',
);

// Table 1: the cliff under each hosting hypothesis, at the printed inputs.
const ls = 1.5e-27;
const volumeHosting = effectiveDegrees('volume', {
  structuralScale: ls,
  volume: 1e-9,
  area: 1e-8,
  carrier: 1e-6,
  qubits: 300,
});
near(
  cliffLocation(volumeHosting).base,
  Math.log2(volumeHosting),
  1e-9,
  'cliff at log₂N_eff',
);
assert(cliffLocation(volumeHosting).upper > cliffLocation(volumeHosting).base);
near(
  schmidtCliff(volumeHosting),
  2 * Math.log2(volumeHosting),
  1e-9,
  'Schmidt cliff at 2 log₂N_eff',
);
assert(
  returnProbability(10, 2 ** 20) > returnProbability(30, 2 ** 20),
  'the return probability falls past the cliff',
);
near(
  returnProbability(30, 2 ** 20) / returnProbability(31, 2 ** 20),
  (2 * 30) / 31,
  1e-9,
  'half per added qubit past the cliff, up to the n_q prefactor',
);
assert.equal(
  returnProbability(21, 2 ** 20),
  1,
  'the floor clamps at 1 before the cliff',
);
for (const n of [235, 330]) {
  const effective = 2 ** n;
  near(
    cliffLocation(effective).base,
    n,
    1e-6,
    'cliff recovers its own exponent',
  );
}
const budget = gateBudget(300, 'all-to-all');
near(
  budget.gates,
  300 * Math.log2(300),
  1e-9,
  'n_q log₂n_q gates in a log-depth all-to-all scrambler',
);
near(
  budget.error,
  7 / budget.gates,
  1e-15,
  'ε ≲ 7 / gates keeps F_noise ≥ e⁻⁷',
);
near(
  gateBudget(300, 'nearest-neighbour').gates,
  300 ** 1.5,
  1e-9,
  'n_q^{3/2} gates on a nearest-neighbour layout',
);
assert.equal(towerSchmidtRank(0, 3), 1);
assert.equal(towerSchmidtRank(1, 2), 4);
assert.throws(() => cliffLocation(0));

// The knot: closure, spin selection, band edge, channeling (Secs. VI–VII).
near(haarIntegral(), 16 / 15, 1e-9, 'Haar integral');
near(bogomolnyCoefficient(), 64 / (15 * Math.PI), 1e-12, 'C₆');
assert.equal(routhianWindow(1, 1), 1);
assert.equal(routhianWindow(3, 1), 1.5);
assert.deepEqual(admittedHalfIntegers(routhianWindow(1, 1)), [0.5]);
assert.deepEqual(admittedHalfIntegers(routhianWindow(3, 1)), [0.5, 1]);
near(closureSolution(0.5).rotationFraction, 0.25, 1e-12, 'E_rot/E = j/2');
near(closureNumber().value, (64 * Math.SQRT2) / (9 * Math.PI), 1e-12, '𝔠');
near(closureNumber().kappa, 1 / Math.SQRT2, 1e-12, 'κ');
assert(
  closureNumber().value > closureNumber().floor,
  '𝔠 exceeds the rigorous floor 2√2',
);
near(compactonProfile(0, 1), Math.PI, 1e-12, 'profile π at the centre');
near(compactonProfile(1, 1), 0, 1e-12, 'profile 0 at the edge');
near(bandEdge(electronMassEv) / 1e3, 722.66, 0.05, 'electron band edge');
near(positroniumLine()! / 1e3, 255.5, 0.05, 'positronium line');
near(
  kappaFromLine(positroniumLine()!),
  1 / Math.SQRT2,
  1e-9,
  'line inverts to κ',
);
assert.equal(positroniumLine(0.45), null, 'no line below κ = ½');
near(
  channelingResonance(electronMassEv, rowSpacing('Si', '110')) / 1e6,
  80.87,
  0.05,
  'Si ⟨110⟩ resonance',
);
assert(
  channelingResonance(electronMassEv, rowSpacing('Ge', '110')) >
    channelingResonance(electronMassEv, rowSpacing('Si', '110')),
);
assert(
  channelingResonance(electronMassEv, rowSpacing('C', '110')) <
    channelingResonance(electronMassEv, rowSpacing('Si', '110')),
);
near(
  channelingResonance(electronMassEv, rowSpacing('Si', '110'), 2) * 2,
  channelingResonance(electronMassEv, rowSpacing('Si', '110')),
  1e-3,
  'sub-harmonics at p₁/n',
);
assert.throws(() =>
  channelingResonance(electronMassEv, rowSpacing('Si', '110'), 0),
);

// The knot's geometry, as the explorer samples it.
near(degree(1), 1, 1e-3, 'degree one');
const centre = hedgehog(0, 0, 0, 1);
near(centre.sigma, -1, 1e-9, 'P̃ = −1 at the centre');
near(Math.hypot(...centre.pi), 0, 1e-9, 'vector part vanishes at the centre');
const edge = hedgehog(1, 0, 0, 1);
near(edge.sigma, 1, 1e-9, 'P̃ = +1 at the edge');
const turned = isorotate([1, 0, 0], Math.PI / 2);
near(turned[0], 0, 1e-12, 'isorotation about the 3-axis');
near(turned[1], 1, 1e-12, 'isorotation about the 3-axis');
const samples = knotSamples(1, 0.8, 8, 72);
assert.equal(samples.length, 576);
assert(samples.every((s) => s.position.every(Number.isFinite)));
assert.equal(shellReadout(0.5, 1, 0.8).region, 'core');
assert.equal(shellReadout(1.5, 1, 0.8).region, 'halo');
assert.throws(() => knotSamples(1, 0.8, 0, 72));

console.log(
  'PASS: 12 local checks; exact spectrum and cone condition; Prop. 4 kinematics and Eq. (43); pitch window and transparency bound; Table 1 cliffs; closure, spin selection, band edge, positronium and channeling; knot geometry.',
);
