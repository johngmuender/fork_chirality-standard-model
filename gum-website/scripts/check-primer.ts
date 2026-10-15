import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { parsePrimer } from './primer-parser.mjs';
import type { PrimerContent } from '../lib/primer-types.ts';
import {
  answersForChapter,
  exhibitsFor,
  primer,
  primerChapterIds,
  primerChapters,
  primerExhibitSlots,
  primerSectionNumbers,
  primerTagNames,
  primerTerms,
} from '../lib/primer.ts';
import {
  chapterInfo,
  foreignChapters,
  nestedChapters,
  omittedChapters,
  resolvePath,
} from '../lib/reader-paths.ts';
import {
  amplitudeCount,
  bridgeBand,
  chainBands,
  chainSkin,
  chainWavenumber,
  coneHalfAngle,
  derrickMinimum,
  driftRatioAtHubble,
  diatomicChain,
  fisherPenalty,
  foucaultRotation,
  groupPhase,
  helixCriterion,
  helixWavenumber,
  kappaFromLocking,
  knobCount,
  landingVerdict,
  lockingStiffnessForKappa,
  massRatioDrift,
  neutrinoBridge,
  neutrinoMassFromBridge,
  ordersOfMagnitude,
  parityChecks,
  quantumPotentialGaussian,
  resonantPath,
  riverDoublingCurrent,
  riverRace,
  shapeModeEnergyMeV,
  siderealSwing,
  skinLength,
  softModeEnergy,
  soundSpeed,
  stringTension,
  structuralScaleBound,
  tanhWinding,
  towerTermsOneDimension,
  twoBodyPhotonEnergy,
  weakStrength,
  zeroPointDensity,
} from '../lib/primer-physics.ts';
import {
  electronMassEv,
  frequencyFromEnergy,
  hubbleToSi,
  lightSpeed,
  tauMassEv,
} from '../lib/gum-constants.ts';
import {
  gyrationBound,
  matterLightConeDifference,
} from '../lib/gum-material.ts';
import { bipartiteBound, longitudinalLeak } from '../lib/gum-light.ts';
import {
  passageParameter,
  pitchFromMass,
  reflectance,
} from '../lib/gum-vacuum.ts';
import {
  capacityFloor,
  shotsRequired,
  towerSchmidtRank,
  truncatedFidelity,
} from '../lib/gum-quantum.ts';
import {
  bogomolnyCoefficient,
  channelingResonance,
  closureNumber,
  kappaFromLine,
  rotationFraction,
  routhianWindow,
  rowSpacing,
} from '../lib/gum-particle.ts';
import {
  deltaRhoTop,
  holonomyPhases,
  leptonLogarithms,
  neutralSector,
  reggeSlope,
} from '../lib/gum-sectors.ts';
import {
  dvaliTurnerExponent,
  minimumIndex,
  neutrinoDriftRatio,
  w0wa,
} from '../lib/gum-cosmos.ts';

const near = (a: number, b: number, tolerance: number, label: string) =>
  assert(
    Math.abs(a - b) <= tolerance,
    `${label}: ${a} is not within ${tolerance} of ${b}`,
  );
const within = (a: number, b: number, fraction: number, label: string) =>
  near(a, b, Math.abs(b) * fraction, label);

// The compiled module is the parsed Markdown, exactly.
const parsed = parsePrimer(
  readFileSync('../gum/primer/gum-primer.md', 'utf8'),
) as unknown as PrimerContent;
assert.deepEqual(
  primer,
  parsed,
  'lib/primer-content.ts is stale: run npm run sync:assets',
);

// Sixteen chapters in eight parts, every device present.
assert.equal(primerChapters.length, 16);
assert.equal(primer.parts.length, 8);
assert.deepEqual(
  primer.parts.flatMap((p) => p.chapters),
  Array.from({ length: 16 }, (_, i) => i + 1),
);
assert.deepEqual(
  primer.parts.map((p) => p.numeral),
  ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'],
);
const kinds: Record<string, number> = {};
for (const chapter of primerChapters) {
  assert(
    chapter.goals.length > 200,
    'chapter ' + chapter.number + ' states its goals',
  );
  assert(
    chapter.sections.length >= 5,
    'chapter ' + chapter.number + ' has its sections',
  );
  chapter.sections.forEach((section, i) => {
    assert.equal(
      section.number,
      chapter.number + '.' + (i + 1),
      'sections are numbered in order',
    );
    assert.equal(section.id, 'primer-' + chapter.number + '-' + (i + 1));
    assert(section.blocks.length > 0, section.id + ' has text');
    for (const block of section.blocks) {
      if (block.type === 'box')
        kinds[block.kind] = (kinds[block.kind] ?? 0) + 1;
      else kinds[block.type] = (kinds[block.type] ?? 0) + 1;
      if (block.type === 'chew')
        assert(block.items.length >= 5, section.id + ' problems');
    }
  });
  const chews = chapter.sections
    .flatMap((s) => s.blocks)
    .filter((b) => b.type === 'chew');
  assert.equal(
    chews.length,
    chapter.number === 16 ? 0 : 1,
    'one problem set per chapter, none in the last',
  );
  const numbers = chapter.sections
    .flatMap((s) => s.blocks)
    .filter((b) => b.type === 'box' && b.kind === 'numbers');
  assert.equal(
    numbers.length,
    chapter.number === 16 ? 0 : 1,
    'one NUMBERS TO HOLD per chapter',
  );
}
assert(
  kinds.try >= 10 && kinds.stepup >= 20 && kinds.changed >= 12,
  'the boxes survived parsing: ' + JSON.stringify(kinds),
);
assert.equal(kinds.slip, 1);
assert.equal(kinds.table, 2);
assert(kinds.formula >= 20 && kinds.quote >= 4 && kinds.list >= 10);
assert.equal(Object.keys(primerTagNames).length, 9);
assert.equal(primerTagNames['🟩'], 'PROVEN [the paper writes DF]');
assert(primer.glossary.length >= 40 && primer.answers.length >= 40);
assert.deepEqual(
  primer.project.items.map((i) => i.id),
  ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
);
assert(primer.project.closing.includes('Standing by for adjudication'));
assert.equal(
  primer.front.map((s) => s.id).join(),
  'primer-letter,primer-rules',
);
assert(
  primer.front[0].blocks.some(
    (b) =>
      b.type === 'p' &&
      b.text.includes(
        'this primer never lets you mistake speculation for fact',
      ),
  ),
);
const wager = primerChapters[0].sections
  .find((s) => s.number === '1.5')!
  .blocks.find((b) => b.type === 'quote');
assert(
  wager && wager.text.includes('efficiently wrong'),
  'the wager is quoted',
);
const hosting = primerChapters[7].sections
  .flatMap((s) => s.blocks)
  .find((b) => b.type === 'table');
assert(
  hosting &&
    hosting.type === 'table' &&
    hosting.rows.length === 3 &&
    hosting.rows[0][0].includes('H_V'),
);
const ranked = primerChapters[15].sections
  .flatMap((s) => s.blocks)
  .find((b) => b.type === 'table');
assert(ranked && ranked.type === 'table' && ranked.rows.length === 9);
assert.equal(answersForChapter(2).length, 3);
assert(
  primerTerms.length >= 40 &&
    new Set(primerTerms.map((t) => t.key)).size === primerTerms.length,
);
assert(
  primerTerms.some((t) => t.key === 'dense storage') &&
    primerTerms.some((t) => t.key === 'landing'),
);
assert(primerSectionNumbers.has('5.6') && !primerSectionNumbers.has('17.1'));

// The fifth path renders every chapter, in order, and every anchor resolves.
const path = resolvePath('primer');
assert.equal(path.edition, 'primer');
assert.deepEqual(path.chapters, primerChapterIds);
assert.deepEqual(omittedChapters('primer'), []);
assert.equal(foreignChapters('primer').length, 13);
for (const id of primerChapterIds)
  assert(
    id in chapterInfo &&
      chapterInfo[id as keyof typeof chapterInfo].edition === 'primer',
  );
for (const chapter of primerChapters)
  for (const section of chapter.sections)
    assert.equal(
      nestedChapters[section.id],
      chapter.slug,
      'anchor ' + section.id,
    );
for (const slot of primerExhibitSlots) {
  assert(
    primerSectionNumbers.has(slot.section),
    'slot ' + slot.anchor + ' names a section',
  );
  assert.equal(
    nestedChapters[slot.anchor],
    'primer-' + slot.section.split('.')[0],
    'anchor ' + slot.anchor,
  );
}
assert.deepEqual(exhibitsFor('1.2'), ['primer-river', 'primer-plates-aether']);
const sources = readdirSync('components')
  .filter((f) => f.endsWith('.tsx'))
  .map((f) => readFileSync('components/' + f, 'utf8'))
  .join('\n');
const registry = readFileSync('components/primer-exhibits.tsx', 'utf8');
for (const slot of primerExhibitSlots) {
  assert(
    registry.includes("'" + slot.anchor + "':"),
    'no component registered for ' + slot.anchor,
  );
  assert(
    sources.includes("'" + slot.anchor + "'") ||
      sources.includes('"' + slot.anchor + '"'),
    'no element carries ' + slot.anchor,
  );
}
assert(
  sources.includes("'primer-film'") &&
    sources.includes('id="primer-glossary"') &&
    sources.includes('id="primer-project"'),
);

// The answer-key notes, recomputed from the exhibits' functions.
const river = riverRace(5, 4, 100);
near(river.cross, 66.67, 0.05, '1.2 crossing time');
near(river.along, 111.11, 0.05, '1.2 along time');
near(riverDoublingCurrent(5), 4.33, 0.01, '1.2 doubling current');
assert.throws(() => riverRace(5, 5));
near(soundSpeed(2e11, 7850), 5047, 5, '2.1 steel');
near(soundSpeed(7e10, 2700), 5092, 5, '2.1 aluminium');
const bands = chainBands(1, 3);
near(bands.edge, Math.SQRT2, 1e-12, '2.2 band edge');
near(bands.acousticTop, Math.sqrt(2 / 3), 1e-12, '2.2 acoustic top');
near(
  diatomicChain(Math.PI, 1, 3).acoustic,
  bands.acousticTop,
  1e-9,
  '2.2 zone boundary',
);
assert.equal(chainSkin(bands.acousticTop * 0.9, 1, 3), null);
assert(
  chainSkin((bands.acousticTop + bands.edge) / 2, 1, 3)! > 0.1,
  '2.3 a skin in the gap',
);
near(
  chainSkin(bands.edge - 1e-9, 1, 3)!,
  0,
  1e-3,
  'the skin vanishes at the edge',
);
near(
  diatomicChain(chainWavenumber(0.5, 1, 3)!, 1, 3).acoustic,
  0.5,
  1e-9,
  '2.2 wavenumber inversion',
);
assert.equal(chainWavenumber(1.2, 1, 3), null);
near(groupPhase(0.7, 1, 1).product, 1, 1e-12, '2.4 v_g v_p = c²');
near(
  skinLength(1, 1, 1 / Math.SQRT2),
  Math.SQRT2,
  1e-12,
  '2.5 the correct halo is √2 longer',
);
near(1 / Math.SQRT2 / Math.sqrt(1 - 0.5), 1, 1e-12, '2.5 κ/√(1−κ²) = 1');
const mev = frequencyFromEnergy(1e6);
within(matterLightConeDifference(1.5e-27, mev), 7e-30, 0.1, '2.6 MeV gap');
within(
  matterLightConeDifference(1.5e-27, frequencyFromEnergy(80.4e9)),
  4.6e-20,
  0.1,
  '2.6 weak gap',
);
within(
  gyrationBound(frequencyFromEnergy(80.4e9), 1e-20),
  7e-28,
  0.1,
  '2.6 gyration bound',
);
near(longitudinalLeak(1e-4), 5e-13, 1e-15, '5.4');
near(longitudinalLeak(1e-5), 5e-16, 1e-18, '5.4');
within(siderealSwing(1000, 369.8e3), 8.2e-9, 0.05, '5.5');
near(coneHalfAngle(90), 48.6, 0.05, '6.1');
near(foucaultRotation(41), 236, 1, '6.2');
near(
  helixCriterion(1.2, 1, 1.2).coefficient,
  0,
  1e-12,
  '6.3 zero gain at χ² = γΔ²',
);
assert.equal(helixWavenumber(1.2, 1), 1.2);
near(
  helixCriterion(Math.sqrt(1.9), 1, 1).tilt,
  0.688,
  0.002,
  '6.4 tilt at the printed margin',
);
within(pitchFromMass(0.0503), 24.65e-6, 0.002, '6.4');
within(pitchFromMass(0.057), 21.75e-6, 0.002, '6.4');
within(lightSpeed / pitchFromMass(0.0503), 12.2e12, 0.005, '6.4 THz');
const passage = passageParameter(6.2e-17, 24.6e-6, hubbleToSi(67.4));
near(passage, 0.106, 0.004, '6.5 Π');
near(reflectance(passage), 0.1, 0.004, '6.5 R');
near(24.6 * 1.1, 27.06, 0.01, '6.6');
assert(resonantPath(1e-31, 1.372e26) < 24.6e-6, '6.7 under one pitch');
within(resonantPath(6e-17, 1.372e26), 8.2e9, 0.02, '6.7');
near(
  quantumPotentialGaussian(0, 1, 1, 1),
  0.25,
  1e-12,
  '7.1 centre: (ħ²/2M)(1/2σ²)',
);
near(fisherPenalty(1, 1, 1), 0.125, 1e-12, '7.2');
assert.equal(truncatedFidelity([0.5, 0.5], 1), 0.5);
within(capacityFloor(26, 0.5), 8.4e6, 0.01, '7.4');
within(capacityFloor(26, 0.8), 1.3e7, 0.04, '7.7');
assert.equal(towerTermsOneDimension(2), 3);
assert.equal(towerSchmidtRank(2, 3), 28);
near(knobCount(1e-10, 1.5e-27).bits, 234, 0.5, '8.1');
near(knobCount(1e-6, 1e-35).bits, 329, 0.5, '8.1');
assert.equal(amplitudeCount(50).complex, 2 ** 50);
within(shotsRequired(0.03, 9e-4), 1.2e6, 0.04, '8.4');
const bound = bipartiteBound(1e4, 1e-10, 3.7e5, 60);
within(bound.rotationTerm + 1e-10, 190e-12, 0.03, '8.5 190 ps');
assert(
  bound.bound / lightSpeed > 1.5e5 && bound.bound / lightSpeed < 2.2e5,
  '8.5 ≈ 2×10⁵c',
);
within(structuralScaleBound(1.3e11), 1.5e-27, 0.02, '8.6');
assert.equal(tanhWinding(1), 2);
assert.equal(
  derrickMinimum({ e2: 1, e0: 0.4, e4: 0, e6: 0 }),
  null,
  '9.2 the guillotine',
);
const bps = derrickMinimum({ e2: 0, e0: 0.4, e4: 0, e6: 0.15 });
assert(
  bps && Math.abs(bps.lambda ** 6 - 0.15 / 0.4) < 0.05,
  '9.2 the BPS minimum at λ⁶ = E₆/E₀',
);
assert(derrickMinimum({ e2: 1, e0: 0, e4: 0.5, e6: 0 }), '9.2 Skyrme escape');
near(bogomolnyCoefficient(), 1.358, 0.001, '9.4');
near(rotationFraction(1 / 3), 1 / 6, 1e-12, '10.1');
near(closureNumber().value, 3.2011, 0.0001, '10.3');
assert.equal(routhianWindow(1, 1), 1);
assert.equal(routhianWindow(3, 1), 1.5);
near(lockingStiffnessForKappa(1 / Math.SQRT2), 3 / 16, 1e-12, '10.5');
near(kappaFromLocking(3 / 16), 1 / Math.SQRT2, 1e-12, '10.5');
near(kappaFromLocking(1 / 16), 1, 1e-12, '10.5 κ < 1 needs µ_c > m̃_V²/16');
near(
  channelingResonance(electronMassEv, rowSpacing('Ge', '110')) / 1e6,
  84.26,
  0.03,
  '10.6',
);
near(
  channelingResonance(electronMassEv, rowSpacing('Si', '110'), 2) / 1e6,
  40.44,
  0.03,
  '10.6',
);
assert.equal(massRatioDrift(1e-6, 0), 0);
near(massRatioDrift(1e-6, 35), 3.5e-5, 1e-12, '10.7');
near(shapeModeEnergyMeV(1), 197, 0.5, '11.1');
near(softModeEnergy(1e-6, 722.7e3), 722.7, 0.1, '11.2 keV');
near(softModeEnergy(1e-3, 722.7e3) / 1e3, 22.9, 0.1, '11.2 keV');
near(
  twoBodyPhotonEnergy(2 * electronMassEv, Math.SQRT2 * electronMassEv)! / 1e3,
  255.5,
  0.05,
  '11.6',
);
near(kappaFromLine(300e3), 0.778, 0.001, '11.6');
assert.equal(twoBodyPhotonEnergy(1, 2), null);
near(leptonLogarithms.tauMu, 2.822, 0.001, '12.1');
near(leptonLogarithms.muE, 5.332, 0.001, '12.1');
near(leptonLogarithms.shape, 1.889, 0.001, '12.1');
const bridge = neutrinoBridge(5.644, 3.05, 0.1065);
near(bridge, 24.36, 0.01, '12.3');
const band = bridgeBand(0.047);
near(band[0], 0.019, 0.001, '12.3');
near(band[1], 0.115, 0.001, '12.3');
near(
  neutrinoMassFromBridge(24.36, tauMassEv),
  0.047,
  0.001,
  '12.5 corrected halo',
);
near(
  neutrinoMassFromBridge(24.36, tauMassEv, Math.SQRT2),
  0.066,
  0.001,
  '12.5 old halo',
);
near(
  (Math.log(0.066) - Math.log(0.0503)) / 0.9,
  0.3,
  0.02,
  '12.5 the floor sits 0.3σ below',
);
near(neutralSector(0.55).sin2ThetaW, 0.232, 0.001, '13.1');
near(neutralSector(0.55).mzOverMw, 1.141, 0.001, '13.1');
near(weakStrength().g, 0.65, 0.005, '13.2');
near(1 / weakStrength().alphaW, 30, 1, '13.2 α_w ≈ 1/30');
near(deltaRhoTop(), 0.0093, 0.0005, '13.2 Δρ_top');
near(stringTension(0.19).geVPerFm, 0.96, 0.005, '13.6');
within(stringTension(0.19).newtons, 1.5e5, 0.04, '13.6');
near(stringTension(0.19).tonnesForce, 16, 0.5, '13.5 sixteen tonnes');
near(reggeSlope(0.19), 0.84, 0.005, '13.5');
assert.equal(holonomyPhases(4), 3);
within(zeroPointDensity(1.6e-35, 3.16e-26), 4.8e113, 0.03, '14.1');
near(
  ordersOfMagnitude(zeroPointDensity(1.6e-35, 3.16e-26), 6e-10),
  123,
  0.5,
  '14.1',
);
near(
  ordersOfMagnitude(zeroPointDensity(1.5e-27, 3.16e-26), 6e-10),
  91,
  0.5,
  '14.1',
);
near(minimumIndex(), 0.225, 0.001, '14.3');
near(w0wa(0.5).w0, -0.763, 0.001, '14.2 TRY THIS');
near(w0wa(0.9).w0, -0.967, 0.001, '14.2 TRY THIS');
assert.equal(dvaliTurnerExponent(0.75), 0.5);
near(driftRatioAtHubble(3, 0.8, -0.3), 0.89, 0.005, '14.6 at h = 3.0');
assert(
  neutrinoDriftRatio(2, 0.8, -0.3) > 0.85 &&
    neutrinoDriftRatio(2, 0.8, -0.3) < 0.9,
  '14.6 with the family’s own H(z)',
);
near(driftRatioAtHubble(3, 0.5, -0.2), 0.82, 0.005, '14.5 TRY THIS at h = 3.0');
assert(
  neutrinoDriftRatio(2, 0.5, -0.2) > 0.78 &&
    neutrinoDriftRatio(2, 0.5, -0.2) < 0.84,
  '14.5 with the family’s own H(z)',
);
assert.equal(parityChecks(3), 2);
assert.equal(landingVerdict(16, 1e-4).verdict, 'landing');
assert.equal(landingVerdict(1, 1).verdict, 'test');
assert.throws(() => landingVerdict(1, 0));
assert.throws(() => coneHalfAngle(360));
assert.throws(() => skinLength(1, 1, 1));
console.log(
  `PASS: the primer module matches its Markdown; 16 chapters in 8 parts with ${Object.values(kinds).reduce((a, b) => a + b, 0)} blocks; ${primerExhibitSlots.length} exhibit slots registered and anchored; ${primer.answers.length} answer-key notes recomputed.`,
);
