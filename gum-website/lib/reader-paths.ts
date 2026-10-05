export const chapterInfo = {
  question: {
    title: 'The inverse Umdeutung',
    summary:
      'Heisenberg expelled the trajectory in 1925. GUM asks what material could keep the books instead, and puts MacCullagh, Kelvin, the Cosserats, de Broglie and Bell on one timeline.',
  },
  core: {
    title: 'From four levels to the killable core',
    summary:
      'Follow the ledger from the material’s four levels of description through its grades and audit to the discriminating claims that can be retired.',
  },
  material: {
    title: 'The material in its continuum description',
    summary:
      'Displacement and grain orientation, an objectivity principle that acts as a gauge principle, and the exact linear spectrum with its cone condition.',
  },
  light: {
    title: 'Light as the orientation sector',
    summary:
      'MacCullagh’s aether rescued as a micropolar medium, Maxwell’s equations from the locked doublet, and the locality dichotomy that moves c_L out of electromagnetism.',
  },
  vacuum: {
    title: 'The structured vacuum',
    summary:
      'A chiral condensate with a 22–25 μm pitch tied to the neutrino mass, and the far-infrared trough it would imprint on cosmological spectra.',
  },
  quantum: {
    title: 'The quantum description',
    summary:
      'Nelson agitation, the Born rule, the tower of conditional fields, dimension counting, dense storage and the mirror-circuit cliff; finite-speed nonlocality and its timing tests.',
  },
  particle: {
    title: 'The GUM particle',
    summary:
      'An isorotating knot: mass as forbidden frequency, spin ½ from the (1,1) closure, the de Broglie clock as a physical rotation, and the channeling resonance it predicts.',
  },
  electron: {
    title: 'The electron: core, halo, band edge',
    summary:
      'A two-scale object with a core at the structural scale, a Compton-scale halo, and a band edge at √2·mc² with a positronium signature.',
  },
  sectors: {
    title: 'The Standard-Model sectors',
    summary:
      'Three families as frustration classes, the electroweak skeleton with ρ = 1, confinement from a gapped stratum, anomaly sums as tiling and CP by holonomy.',
  },
  cosmos: {
    title: 'Cosmology and the relaxation family',
    summary:
      'Dark energy as the lag of a soft mode, the Dvali–Turner equivalence, w_a ≥ 0 on the wrong side of DESI, and neutrinos that were lighter in the past.',
  },
  handedness: {
    title: 'The handedness bit',
    summary:
      'One sign links weak chirality, δ_CP, cosmic birefringence and a mirror test of short-range forces.',
  },
  ledger: {
    title: 'Ledger, closures and stakes',
    summary:
      'Thirty stakes, twenty-six posed closures, the audit criterion, and the corrections the revision applies to itself.',
  },
  verify: {
    title: 'Read it, check it, retire it',
    summary:
      'The draft, its grades and the review prompt; run the printed arithmetic in your browser and keep the glossary within reach.',
  },
} as const;
export type ChapterId = keyof typeof chapterInfo;
export type PathId = 'curious' | 'physics' | 'experiments' | 'review';
export type ReaderPath = {
  id: PathId;
  label: string;
  depth: string;
  description: string;
  title: string;
  introduction: string;
  chapters: ChapterId[];
  stops: { id: ChapterId; label: string }[];
  bridges: Partial<Record<ChapterId, string>>;
};
export const readerPaths: ReaderPath[] = [
  {
    id: 'curious',
    label: 'I’m curious',
    depth: 'story',
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
export function resolvePath(id: string | null): ReaderPath {
  return readerPaths.find((p) => p.id === id) ?? readerPaths[0];
}
export function omittedChapters(id: PathId): ChapterId[] {
  const included = resolvePath(id).chapters;
  return (Object.keys(chapterInfo) as ChapterId[]).filter(
    (chapter) => !included.includes(chapter),
  );
}
export const nestedChapters: Record<string, ChapterId> = {
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
