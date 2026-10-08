import { primerAnchors, primerChapterIds } from './primer.ts';

export type Edition = 'paper' | 'primer';
type ChapterEntry = {
  title: string;
  short: string;
  summary: string;
  edition: Edition;
};

export const chapterInfo = {
  question: {
    title: 'The inverse Umdeutung',
    short: 'The inverse Umdeutung',
    summary:
      'Heisenberg expelled the trajectory in 1925. GUM asks what material could keep the books instead, and puts MacCullagh, Kelvin, the Cosserats, de Broglie and Bell on one timeline.',
    edition: 'paper',
  },
  core: {
    title: 'From four levels to the killable core',
    short: 'The killable core',
    summary:
      'Follow the ledger from the material’s four levels of description through its grades and audit to the discriminating claims that can be retired.',
    edition: 'paper',
  },
  material: {
    title: 'The material in its continuum description',
    short: 'The material',
    summary:
      'Displacement and grain orientation, an objectivity principle that acts as a gauge principle, and the exact linear spectrum with its cone condition.',
    edition: 'paper',
  },
  light: {
    title: 'Light as the orientation sector',
    short: 'Light',
    summary:
      'MacCullagh’s aether rescued as a micropolar medium, Maxwell’s equations from the locked doublet, and the locality dichotomy that moves c_L out of electromagnetism.',
    edition: 'paper',
  },
  vacuum: {
    title: 'The structured vacuum',
    short: 'The vacuum',
    summary:
      'A chiral condensate with a 22–25 μm pitch tied to the neutrino mass, and the far-infrared trough it would imprint on cosmological spectra.',
    edition: 'paper',
  },
  quantum: {
    title: 'The quantum description',
    short: 'The quantum',
    summary:
      'Nelson agitation, the Born rule, the tower of conditional fields, dimension counting, dense storage and the mirror-circuit cliff; finite-speed nonlocality and its timing tests.',
    edition: 'paper',
  },
  particle: {
    title: 'The GUM particle',
    short: 'The particle',
    summary:
      'An isorotating knot: mass as forbidden frequency, spin ½ from the (1,1) closure, the de Broglie clock as a physical rotation, and the channeling resonance it predicts.',
    edition: 'paper',
  },
  electron: {
    title: 'The electron: core, halo, band edge',
    short: 'The electron',
    summary:
      'A two-scale object with a core at the structural scale, a Compton-scale halo, and a band edge at √2·mc² with a positronium signature.',
    edition: 'paper',
  },
  sectors: {
    title: 'The Standard-Model sectors',
    short: 'The sectors',
    summary:
      'Three families as frustration classes, the electroweak skeleton with ρ = 1, confinement from a gapped stratum, anomaly sums as tiling and CP by holonomy.',
    edition: 'paper',
  },
  cosmos: {
    title: 'Cosmology and the relaxation family',
    short: 'Cosmology',
    summary:
      'Dark energy as the lag of a soft mode, the Dvali–Turner equivalence, w_a ≥ 0 on the wrong side of DESI, and neutrinos that were lighter in the past.',
    edition: 'paper',
  },
  handedness: {
    title: 'The handedness bit',
    short: 'The handedness bit',
    summary:
      'One sign links weak chirality, δ_CP, cosmic birefringence and a mirror test of short-range forces.',
    edition: 'paper',
  },
  ledger: {
    title: 'Ledger, closures and stakes',
    short: 'The ledger',
    summary:
      'Thirty stakes, twenty-six posed closures, the audit criterion, and the corrections the revision applies to itself.',
    edition: 'paper',
  },
  verify: {
    title: 'Read it, check it, retire it',
    short: 'Verify',
    summary:
      'The draft, its grades and the review prompt; run the printed arithmetic in your browser and keep the glossary within reach.',
    edition: 'paper',
  },
  'primer-intro': {
    title: 'The primer: a letter and the rules',
    short: 'Letter & rules',
    summary:
      'A letter before page one, the nine tags, the death list, the corrections list, the two reading tracks and the map from each chapter to the paper.',
    edition: 'primer',
  },
  'primer-1': {
    title: 'The oldest question, and a new way to ask it',
    short: '1 · The question',
    summary:
      'Where the “made of” ladder stops, why the aether died twice, Heisenberg’s move and GUM’s inversion of it, the word “material”, and the wager in its exact shape.',
    edition: 'primer',
  },
  'primer-2': {
    title: 'Springs, waves and forbidden frequencies',
    short: '2 · Forbidden frequencies',
    summary:
      'Sound in steel, necklaces and band gaps, mass as a forbidden frequency, a second light cone a hair wider, and the evanescent skin around every particle.',
    edition: 'primer',
  },
  'primer-3': {
    title: 'Grains with faces: the continuum description',
    short: '3 · Grains with faces',
    summary:
      'Cosserat grains that can turn, objectivity as the rule with teeth, the four sectors of stored energy, the four voices, the import list and the audit K-N.',
    edition: 'primer',
  },
  'primer-4': {
    title: 'Light from twist',
    short: '4 · Light from twist',
    summary:
      'MacCullagh’s ghost and its loophole, half of Maxwell for free, the other half from spinning grains with inertia, and what the masslessness theorem does not explain.',
    edition: 'primer',
  },
  'primer-5': {
    title: 'The second speed, and the theorem that retracted a prediction',
    short: '5 · The second speed',
    summary:
      'Why a static field cannot be a rate, the two completions, the defect-current theorem, the locality dichotomy, and where the second speed went.',
    edition: 'primer',
  },
  'primer-6': {
    title: 'Charge is a cone; the vacuum is a helix; the sky has a trough',
    short: '6 · Cone, helix, trough',
    summary:
      'A paper cone that is a charge, holonomy, the borrowed α, the helical instability in four lines, the pitch window, Bragg passage and the far-infrared trough.',
    edition: 'primer',
  },
  'primer-7': {
    title: 'The jittery material: quantum mechanics as bookkeeping',
    short: '7 · The jittery material',
    summary:
      'Madelung’s fluid with one strange pressure, the crowd that won’t be squeezed, the Born rule as equilibrium, Bell’s beables, the tower, and Schmidt rank.',
    edition: 'primer',
  },
  'primer-8': {
    title:
      'Counting knobs, mirror circuits, and spooky action at a finite speed',
    short: '8 · Knobs and cliffs',
    summary:
      'Dimension counting and why it is untestable as stated, dense storage, the mirror-circuit cliff and its knob, finite-speed nonlocality, and the grain-size bound.',
    edition: 'primer',
  },
  'primer-9': {
    title: 'Particles are knots',
    short: '9 · Particles are knots',
    summary:
      'Textures you cannot comb away, Derrick’s guillotine and its two escapes, the Bogomolny trick and the mass law, a ticking knot that does not radiate, and the belt trick.',
    edition: 'primer',
  },
  'primer-10': {
    title: 'The spinning knot, Planck’s constant, and a clock you can hit',
    short: '10 · The spinning knot',
    summary:
      'Two closure conditions and one ħ, the quarter that is kinematics, spin ½ by algebra, Flag F-B1, the α–µ discriminant and the washboard test.',
    edition: 'primer',
  },
  'primer-11': {
    title: 'The two-scale electron and its band edge',
    short: '11 · The two-scale electron',
    summary:
      'Three laboratory facts, why a Compton-sized knot fails, core and halo, the obligation K-10, and the positronium line a band edge could emit.',
    edition: 'primer',
  },
  'primer-12': {
    title: 'Why three families, and the lightest particle',
    short: '12 · Three families',
    summary:
      'Frustration classes, the two-integral generator reported as a landing, why the ladder stops at three, the heliknoton neutrino, the bridge, the squeeze and the door.',
    edition: 'primer',
  },
  'primer-13': {
    title: 'The skeleton: weak, strong, and the tile',
    short: '13 · The skeleton',
    summary:
      'A 2×2 diagonalisation that gives ρ = 1, Yukawa universality from multiplicative mass, the weak vertex, quarks in prison, anomalies as tiling, CP by holonomy.',
    edition: 'primer',
  },
  'primer-14': {
    title:
      'Dark energy with a pulse; gravity from defects; one guess in the dark',
    short: '14 · Dark energy',
    summary:
      'The worst prediction in physics and its defusal, the lag and the family, an equation already written, the pre-registration, drifting neutrinos, geometry from defects.',
    edition: 'primer',
  },
  'primer-15': {
    title: 'The one bit',
    short: '15 · The one bit',
    summary:
      'A parity check on the vacuum, the rotation of the sky, the endpoint property, one domain across the universe, a mirror test of short-range forces.',
    edition: 'primer',
  },
  'primer-16': {
    title:
      'How a theory bets its life, corrects itself, and makes you an auditor',
    short: '16 · Adjudication',
    summary:
      'The audit criterion, landings and tests, the death list ranked, fifteen corrections and counting, the kit packed for travel, and a headline read with it.',
    edition: 'primer',
  },
  'primer-end': {
    title: 'Glossary, answer notes and the final project',
    short: 'Glossary & project',
    summary:
      'The primer’s selected glossary, its spot-check answers, and the final project with its grading rubric.',
    edition: 'primer',
  },
} as const satisfies Record<string, ChapterEntry>;
export type ChapterId = keyof typeof chapterInfo;
export const chapterIds = Object.keys(chapterInfo) as ChapterId[];
for (const id of primerChapterIds)
  if (!Object.hasOwn(chapterInfo, id))
    throw new Error('The primer chapter ' + id + ' has no chapter entry.');
export function editionOf(chapter: ChapterId): Edition {
  return chapterInfo[chapter].edition;
}

export type PathId =
  | 'primer'
  | 'curious'
  | 'physics'
  | 'experiments'
  | 'review';
export type ReaderPath = {
  id: PathId;
  label: string;
  depth: string;
  edition: Edition;
  description: string;
  title: string;
  introduction: string;
  chapters: ChapterId[];
  stops: { id: ChapterId; label: string }[];
  bridges: Partial<Record<ChapterId, string>>;
  depthLabels?: Record<string, string>;
};
/** The primer comes first: it is the introduction, and the paper's four routes follow from it. */
export const readerPaths: ReaderPath[] = [
  {
    id: 'primer',
    label: 'Teach me from the ground up',
    depth: 'explore',
    edition: 'primer',
    description:
      'The GUM Material Primer: sixteen chapters for honors high-school and first-year readers, with its tags, problems, corrections boxes and exhibits. No calculus.',
    title: 'What keeps the books? A first book on the GUM program.',
    introduction:
      'The primer teaches a theory that might be wrong, and means it. Sixteen chapters in eight parts, nearly verbatim, carry its tags, its TRY THIS experiments, its STEP-UP analogies, its WHAT CHANGED boxes and its problems, with an exhibit wherever a calculation can be turned by hand. The paper’s own instruments are one link away whenever the primer points at them.',
    chapters: [
      'primer-intro',
      'primer-1',
      'primer-2',
      'primer-3',
      'primer-4',
      'primer-5',
      'primer-6',
      'primer-7',
      'primer-8',
      'primer-9',
      'primer-10',
      'primer-11',
      'primer-12',
      'primer-13',
      'primer-14',
      'primer-15',
      'primer-16',
      'primer-end',
    ],
    stops: [
      { id: 'primer-1', label: 'The question' },
      { id: 'primer-6', label: 'Light & charge' },
      { id: 'primer-9', label: 'Matter itself' },
      { id: 'primer-16', label: 'Adjudication' },
    ],
    bridges: {},
    depthLabels: {
      story: 'HIGH-SCHOOL TRACK · ★ SECTIONS AND PROBLEMS FOLDED',
      explore: 'UNDERGRADUATE TRACK · ★ SECTIONS OPEN',
      math: 'EVERYTHING OPEN · WITH ANSWER NOTES',
    },
  },
  {
    id: 'curious',
    label: 'I’m curious',
    depth: 'story',
    edition: 'paper',
    description:
      'Begin with a reversal of history. Build the material without assuming the equations.',
    title: 'Begin with a question Heisenberg closed in 1925.',
    introduction:
      'Heisenberg expelled the trajectory because he could not measure it. GUM readmits it on the condition that the material carrying it can be measured instead. Follow the material from its grains to light, to a knot that is a particle, and to the thirty places where it intends to be measured. The equations open when you want them.',
    chapters: [
      'question',
      'core',
      'material',
      'light',
      'particle',
      'quantum',
      'vacuum',
      'cosmos',
      'handedness',
      'ledger',
      'verify',
    ],
    stops: [
      { id: 'question', label: 'The inverse' },
      { id: 'light', label: 'Light from grains' },
      { id: 'particle', label: 'A knot is a particle' },
      { id: 'ledger', label: 'Thirty stakes' },
    ],
    bridges: {
      core: 'Before any physics, see how the paper grades itself. Four levels of description, seven grades, and an audit that leaves a small killable core.',
      material:
        'The core is a short list because almost everything else is a consistency condition any material must satisfy. Here is the material those conditions are about: grains with positions and orientations, and one principle that plays the role of a gauge principle.',
      light:
        'A locked transverse wave of the grains has no mass and no dispersion. Watch it become Maxwell’s equations, and watch the paper withdraw its own earlier prediction about the longitudinal sector.',
      particle:
        'If light is a wave of the orientation field, what is matter? A knotted texture that spins internally. Its spin, its clock and its statistics sign come from one motion.',
      quantum:
        'A knot moves under the material’s agitation. The bookkeeping of that motion is quantum mechanics, and the place where a classical material cannot hide is the capacity of its tower.',
      vacuum:
        'The vacuum itself is structured: a helical condensate whose pitch is the neutrino’s Compton length. It leaves a fingerprint in the far infrared.',
      cosmos:
        'The same soft mode that sets the pitch lags behind cosmic expansion. That lag is GUM’s dark energy, and it sits on the wrong side of the latest data.',
      handedness:
        'One global sign runs through the weak interaction, CP violation and the polarisation of the cosmic microwave background.',
      ledger:
        'Everything above was stated with a grade and a kill. Here is the full ledger: thirty stakes, twenty-six posed closures, and the corrections the paper applies to itself.',
      verify:
        'Read the draft, run the printed arithmetic in your browser, and take the review prompt with you.',
    },
  },
  {
    id: 'physics',
    label: 'I know some physics',
    depth: 'explore',
    edition: 'paper',
    description:
      'Start with the Cosserat action and its spectrum, then follow the material into light, matter and the Standard Model.',
    title: 'From a micropolar action to a killable Standard Model.',
    introduction:
      'Take a chiral Cosserat continuum with an SU(2)-lifted micro-rotation. Impose objectivity, a cone condition and a Skyrme–Bogomolny topological sector. The locked doublet is the photon, knots are fermions, the tower is the wave function, and every sector of the Standard Model is reproduced at a stated grade. The discriminating content is where the material cannot hide.',
    chapters: [
      'material',
      'light',
      'quantum',
      'particle',
      'electron',
      'sectors',
      'vacuum',
      'cosmos',
      'handedness',
      'core',
      'ledger',
      'verify',
    ],
    stops: [
      { id: 'material', label: 'The action' },
      { id: 'quantum', label: 'The tower' },
      { id: 'sectors', label: 'The sectors' },
      { id: 'ledger', label: 'The stakes' },
    ],
    bridges: {
      light:
        'With the spectrum in hand, Theorems 2–6 do the electrodynamics: the Cauchy no-go, the micropolar rescue, the source-free Maxwell equations and the locality dichotomy for the longitudinal sector.',
      quantum:
        'Knots move in an agitated material. Nelson kinematics closes to Schrödinger with the Wallstrom gap discharged, and the tower of conditional fields is a physical object with a capacity.',
      particle:
        'Now the texture itself: Bogomolny structure for the mass, two closure conditions for ħ, and a clock that is a rotation.',
      electron:
        'Compatibility with the electron’s pointlike form factor forces a two-scale object: a core at ℓ_s and a Compton-scale halo with a band edge.',
      sectors:
        'The flavour, electroweak, strong and anomaly sectors reproduce the Standard Model’s postulate layer. The audit labels almost all of it non-discriminating, and says so.',
      vacuum:
        'The chiral condensate, its pitch, and the one astrophysical signature of a helical vacuum that survives cosmic redshift.',
      cosmos:
        'Volovik’s grand potential defuses the zero-point ledger; the lag of the soft mode is the relaxation family, which is the Dvali–Turner family.',
      handedness:
        'The parity-odd sector W_χ is the only source of handedness, so one bit propagates everywhere.',
      core: 'Step back and watch the whole ledger classified under the audit criterion.',
      ledger: 'The full tables: stakes, closures, cross-locks and corrections.',
    },
  },
  {
    id: 'experiments',
    label: 'Show me the experiments',
    depth: 'explore',
    edition: 'paper',
    description:
      'Open the stakes first. Each exhibit is an instrument with a kill condition.',
    title: 'Thirty stakes, and the instruments that read them.',
    introduction:
      'GUM is arranged to be efficiently wrong. Start with the ledger, then open the exhibits that compute each prediction: the mirror-circuit cliff, the sidereal timing bound, the channeling resonance, the far-infrared edge, the mirror force, the relaxation family. The background chapters wait behind the fold.',
    chapters: [
      'core',
      'ledger',
      'quantum',
      'particle',
      'vacuum',
      'handedness',
      'cosmos',
      'electron',
      'material',
      'light',
      'verify',
    ],
    stops: [
      { id: 'ledger', label: 'The stakes' },
      { id: 'quantum', label: 'Cliff & timing' },
      { id: 'particle', label: 'Channeling' },
      { id: 'vacuum', label: 'The far-IR edge' },
    ],
    bridges: {
      ledger:
        'The core is small. Here are all thirty stakes with their adjudicators and kills, and the twenty-six closures that owe a number.',
      quantum:
        'Two of the sharpest stakes live in the quantum description: a gate-independent fidelity cliff near 235–330 qubits, and a bound on the tower’s update speed from sidereal Bell timing.',
      particle:
        'If the de Broglie clock is a physical rotation, electrons channeling through silicon resonate at 80.87 MeV/c, and at momenta scaling with the row spacing.',
      vacuum:
        'A helical vacuum reflects co-handed light once, when cosmic redshift sweeps it through the stop band: a trough with a fixed blue edge near 24 μm.',
      handedness:
        'Chiral test masses in both handednesses, at micrometre separations: a nonzero, sign-consistent F_LL − F_RR would be the first direct detection of vacuum handedness.',
      cosmos:
        'w_a ≥ 0 is unconditional within the family. The data lean the other way, and the paper says so before Euclid DR1.',
      electron:
        'A monoenergetic positronium line at 255.5 keV, if the halo supports a level below the pair threshold.',
      material:
        'The instruments above all refer to one action. Here it is, with its spectrum.',
      light:
        'And here is why the electromagnetic near-field experiment became a null test rather than a prediction.',
      verify: 'Take the draft and the review prompt; run the browser checks.',
    },
  },
  {
    id: 'review',
    label: 'I’m here to check it',
    depth: 'math',
    edition: 'paper',
    description:
      'Open the sources, grades and corrections first. Then challenge each sector at its stated grade.',
    title: 'Start with the ledger. Then challenge each transition.',
    introduction:
      'Download the draft and read its corrections to itself before anything else. Then examine the continuum description, the locality theorem, the capacity theorems, the closure of ħ and the sectors, each at the grade the paper assigns. Every claim stays attached to the postulate behind it and to the stake that could retire it.',
    chapters: [
      'verify',
      'core',
      'ledger',
      'material',
      'light',
      'quantum',
      'particle',
      'electron',
      'sectors',
      'cosmos',
      'handedness',
      'vacuum',
    ],
    stops: [
      { id: 'verify', label: 'Source & checks' },
      { id: 'ledger', label: 'Grades & corrections' },
      { id: 'material', label: 'Postulates' },
      { id: 'quantum', label: 'Theorems 9–13' },
    ],
    bridges: {
      core: 'Apply Definition 9 to the paper’s own table: which claims were selected for the fact they explain, and which discriminate against the Standard Model and ΛCDM.',
      ledger:
        'Check the stakes against their adjudicators and the fifteen corrections against the previous draft.',
      material:
        'Audit the postulates P1–P7 and the imports: six moduli, two inertias, three chiral couplings, four topological constants and the structural scale.',
      light:
        'Check Theorems 2–6: objectivity, the micropolar rescue, Gauss’s law, the acausality of the transverse completion and Proposition 3’s energy bookkeeping.',
      quantum:
        'Check the capacity theorems: the fidelity bound, dimension counting, reachable sets, dense storage and the mirror-circuit bound.',
      particle:
        'Check Lemma 4, Theorem 14 and Proposition 12: the quarter is kinematic, the window depends on the stabilising pair, and the closure of ħ is one relation among three imports.',
      electron:
        'Check Theorem 15’s compatibility inequalities and the two alternatives of Proposition 18.',
      sectors:
        'Check the six anomaly sums, the protected diagonalisation and the holonomy count directly.',
      cosmos:
        'Check Propositions 22–27 against Table 5 and the DESI preference.',
      handedness:
        'Check the parity-check structure of the sign chain and the endpoint property of Θ-birefringence.',
      vacuum:
        'Check the pitch window and the transparency bound against the oscillation floor and H₀.',
    },
  },
];
export const defaultPath: PathId = 'primer';
export function resolvePath(id: string | null): ReaderPath {
  return (
    readerPaths.find((p) => p.id === id) ??
    readerPaths.find((p) => p.id === defaultPath)!
  );
}
export function isPathId(id: unknown): id is PathId {
  return readerPaths.some((p) => p.id === id);
}

/** What each part of the primer sets out to do, shown where the part opens. */
export const primerPartIntroductions: Record<number, string> = {
  1: 'Where the “made of” ladder stops, why the aether died twice, and the inversion GUM proposes.',
  2: 'Springs and necklaces first; then grains that can turn, and the one relation that makes light exactly lightlike.',
  3: 'Maxwell from twist, the theorem that withdrew a prediction, and a paper cone that is a charge.',
  4: 'A fluid with one strange pressure, a tower of fields, a count of knobs, and a cliff.',
  5: 'Knots that cannot be combed away, a spinning closure that fixes ħ, and an electron with two scales.',
  6: 'Frustration classes, the lightest particle, and the Standard Model’s skeleton at its grades.',
  7: 'A lag that looks like dark energy, geometry from defects, and one sign for the whole vacuum.',
  8: 'The audit criterion, landings and tests, the death list ranked, and the kit packed for travel.',
};
export const primerBackMatterIntroduction =
  'A selected glossary, spot-check answers, and the final project: choose one claim, audit it with the full kit, write three pages.';

/**
 * Where the paper's edition picks up each primer chapter, following the
 * primer's own map to the paper; read backwards, where the primer teaches
 * the background of each of the paper's chapters.
 */
const paperChaptersOfPrimer: Partial<Record<ChapterId, ChapterId[]>> = {
  'primer-1': ['question', 'core'],
  'primer-2': ['material'],
  'primer-3': ['material'],
  'primer-4': ['light'],
  'primer-5': ['light'],
  'primer-6': ['vacuum', 'light'],
  'primer-7': ['quantum'],
  'primer-8': ['quantum'],
  'primer-9': ['particle'],
  'primer-10': ['particle'],
  'primer-11': ['electron'],
  'primer-12': ['sectors'],
  'primer-13': ['sectors'],
  'primer-14': ['cosmos'],
  'primer-15': ['handedness'],
  'primer-16': ['ledger', 'core'],
  'primer-end': ['verify'],
};
/** The other edition's chapters that teach the same material as this one. */
export function companionChapters(chapter: ChapterId): ChapterId[] {
  if (editionOf(chapter) === 'primer')
    return paperChaptersOfPrimer[chapter] ?? [];
  return primerChapterIds.filter((id) =>
    paperChaptersOfPrimer[id as ChapterId]?.includes(chapter),
  ) as ChapterId[];
}
/** Chapters of the path’s own edition that it leaves out: the background folds. */
export function omittedChapters(id: PathId): ChapterId[] {
  const path = resolvePath(id);
  return chapterIds.filter(
    (chapter) =>
      editionOf(chapter) === path.edition && !path.chapters.includes(chapter),
  );
}
/** The other edition’s chapters, available to deep links from this path. */
export function foreignChapters(id: PathId): ChapterId[] {
  const path = resolvePath(id);
  return chapterIds.filter((chapter) => editionOf(chapter) !== path.edition);
}
const paperAnchors: Record<string, ChapterId> = {
  plates: 'question',
  timeline: 'question',
  'audit-step-0': 'core',
  'audit-step-1': 'core',
  'audit-step-2': 'core',
  'audit-step-3': 'core',
  action: 'material',
  spectrum: 'material',
  'gum-film': 'material',
  maxwell: 'light',
  dichotomy: 'light',
  'near-field': 'light',
  pitch: 'vacuum',
  trough: 'vacuum',
  tower: 'quantum',
  cliff: 'quantum',
  timing: 'quantum',
  'knot-explorer': 'particle',
  closure: 'particle',
  channeling: 'particle',
  'band-edge': 'electron',
  positronium: 'electron',
  families: 'sectors',
  electroweak: 'sectors',
  'anomaly-sums': 'sectors',
  relaxation: 'cosmos',
  'neutrino-drift': 'cosmos',
  'sign-chain': 'handedness',
  'mirror-force': 'handedness',
  stakes: 'ledger',
  closures: 'ledger',
  audit: 'ledger',
  corrections: 'ledger',
  'local-checks': 'verify',
  glossary: 'verify',
};
export const nestedChapters: Record<string, ChapterId> = { ...paperAnchors };
for (const [anchor, chapter] of Object.entries(primerAnchors())) {
  if (!Object.hasOwn(chapterInfo, chapter))
    throw new Error(
      'Primer anchor ' + anchor + ' points at an unknown chapter.',
    );
  if (Object.hasOwn(paperAnchors, anchor) || Object.hasOwn(chapterInfo, anchor))
    throw new Error(
      'Primer anchor ' + anchor + ' collides with the paper’s anchors.',
    );
  nestedChapters[anchor] = chapter as ChapterId;
}
export function chapterForAnchor(id: string): ChapterId | undefined {
  return Object.hasOwn(chapterInfo, id)
    ? (id as ChapterId)
    : Object.hasOwn(nestedChapters, id)
      ? nestedChapters[id]
      : undefined;
}
export function decodeAnchor(hash: string): string {
  try {
    return decodeURIComponent(hash.replace(/^#/, ''));
  } catch {
    return '';
  }
}
