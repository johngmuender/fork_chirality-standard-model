import type { ChapterId } from './reader-paths.ts';

/** Ledger grades (Sec. I C). */
export const grades = [
  {
    id: 'DF',
    name: 'Derived-form',
    text: 'Follows from the stated postulates with no further input.',
  },
  {
    id: 'DW',
    name: 'Derived-with-window',
    text: 'Derived up to an admitted parameter window.',
  },
  {
    id: 'CAL',
    name: 'Calibrated',
    text: 'Mechanism derived, rate calibrated.',
  },
  {
    id: 'IM',
    name: 'Imported',
    text: 'Taken from outside the material; a constitutive input.',
  },
  { id: 'CJ', name: 'Conjecture', text: 'May not be built upon silently.' },
  {
    id: 'posed',
    name: 'Posed closure',
    text: 'A computation with named deliverables and a signed kill.',
  },
  {
    id: 'N',
    name: 'Numerical',
    text: 'A value from a profile or frustration integral not reproduced in the draft; subject to the audit K-N.',
  },
  {
    id: 'RG',
    name: 'Re-graded',
    text: 'Changed grade in this revision, with the reason printed where it happens.',
  },
] as const;

export const levels = [
  {
    level: 0,
    name: 'The material',
    text: 'The sole primitive: existence, adjacency and succession. Nothing else is asserted at this level, and the paper does not work at it.',
  },
  {
    level: 1,
    name: 'The continuum description',
    text: 'Displacement u and an SU(2)-lifted orientation Q̃ on a parameter space (x, t). Geometry, force and the light cone are constructed from these fields.',
  },
  {
    level: 2,
    name: 'The quantum description',
    text: 'The bookkeeping of localised textures and their agitation, which has the form of quantum mechanics.',
  },
  {
    level: 3,
    name: 'The Standard-Model description',
    text: 'The bookkeeping of the textures’ response modes: gauge fields, fermions and a scalar sector.',
  },
] as const;

export type Stake = {
  id: string;
  stake: string;
  adjudicator: string;
  kill: string;
  status: string;
  chapter: ChapterId;
  regraded?: boolean;
};

/** Table 4: the thirty stakes. */
export const stakes: Stake[] = [
  {
    id: 'S1',
    stake: 'Σm_ν ∈ [0.058, 0.11] eV, normal ordering (K-10, K-N)',
    adjudicator: 'DESI DR3; Euclid',
    kill: 'robust Σ < 0.058 eV with no drift (S27)',
    status: 'inside ΛCDM exclusion',
    chapter: 'vacuum',
  },
  {
    id: 'S2′',
    stake: 'Higgs couplings in the η-window, family-ordered; fog width',
    adjudicator: 'HL-LHC',
    kill: 'anomaly outside window',
    status: 'live',
    chapter: 'sectors',
  },
  {
    id: 'S3',
    stake: 'E_rot/E = j/2 on a valid bench object',
    adjudicator: 'analog benches',
    kill: 'valid bench off j/2',
    status: 'live (kinematic)',
    chapter: 'particle',
  },
  {
    id: 'S4′',
    stake: 'κ²g_tot = 35/24 vs 7/8 (after K-N)',
    adjudicator: 'analog benches',
    kill: 'outside band',
    status: 'live',
    chapter: 'particle',
  },
  {
    id: 'S5',
    stake: 'Clock phase-locking ∝ cos Δφ',
    adjudicator: 'analog benches',
    kill: 'no locking',
    status: 'live',
    chapter: 'particle',
  },
  {
    id: 'S6',
    stake: '0νββ occurs',
    adjudicator: 'LEGEND-1000; nEXO',
    kill: 'full-funnel exclusion',
    status: 'live',
    chapter: 'sectors',
  },
  {
    id: 'S7',
    stake:
      'Inverse-kill battery: photon mass; EP violation; forbidden birefringence; ρ ≠ 1; tree FCNC; e ≠ g sin θ_w; massless charged mode; Lorentz violation; c_GW ≠ c',
    adjudicator: 'community',
    kill: 'any confirmed detection',
    status: 'standing',
    chapter: 'light',
  },
  {
    id: 'S8',
    stake: 'Michel ρ = 3/4; RH currents below ε_R',
    adjudicator: 'μ and β decay',
    kill: 'RH current above window',
    status: 'live',
    chapter: 'sectors',
  },
  {
    id: 'S9',
    stake: 'Lock-melt GW background weak',
    adjudicator: 'LISA',
    kill: 'loud first-order EW background',
    status: 'live',
    chapter: 'cosmos',
  },
  {
    id: 'S10',
    stake: 'θ₂₃ near-maximal; δ_CP → −π/2 per C-EW1',
    adjudicator: 'DUNE; Hyper-K',
    kill: 'δ_CP ≈ 0, π; wrong sign',
    status: 'live',
    chapter: 'handedness',
  },
  {
    id: 'S11',
    stake: 'd_n, d_e below K-3 windows',
    adjudicator: 'nEDM; eEDM',
    kill: 'EDM above window',
    status: 'proposed',
    chapter: 'sectors',
  },
  {
    id: 'S12',
    stake: 'Junction-stiffness flow anti-screens (K-4)',
    adjudicator: 'computation',
    kill: 'screening sign',
    status: 'proposed',
    chapter: 'sectors',
  },
  {
    id: 'S13',
    stake: 'Valid isorotating bench object; measured j (F-B1)',
    adjudicator: 'chiral metamaterials; LC and magnetic solitons',
    kill: 'no valid object; or j = 1',
    status: 'open',
    chapter: 'particle',
  },
  {
    id: 'S14',
    stake: 'Discriminator on a validated bench',
    adjudicator: 'analog benches',
    kill: 'outside band',
    status: 'open',
    chapter: 'particle',
  },
  {
    id: 'S15',
    stake: 'No EM precursor in 0 < t < r/c (F-G)',
    adjudicator: 'pulsed near-field; bunch fields',
    kill: 'sidereal-modulated pre-light signal',
    status: 'null test',
    chapter: 'light',
    regraded: true,
  },
  {
    id: 'S16',
    stake: 'Mirror-circuit cliff at n_q* ≃ log₂N_eff (H_V: 234–329)',
    adjudicator: '≥ 300-qubit mirror circuits',
    kill: 'flat 𝒫(n_q) through 350',
    status: 'open',
    chapter: 'quantum',
    regraded: true,
  },
  {
    id: 'S17',
    stake: 'Generator form Eq. (64) on the bench',
    adjudicator: 'chiral-nematic solitons',
    kill: 'B = 0; no termination',
    status: 'open',
    chapter: 'sectors',
  },
  {
    id: 'S18',
    stake: 'Printed n, perturbations, distance fit (K-12)',
    adjudicator: 'GUM + BAO/SN/CMB',
    kill: 'no n fits',
    status: 'owed',
    chapter: 'cosmos',
  },
  {
    id: 'S19',
    stake: 'w_a ≥ 0',
    adjudicator: 'DESI final; Euclid DR1',
    kill: 'w_a < 0, w₀ > −1 at ≥ 3σ',
    status: 'disfavored now',
    chapter: 'cosmos',
  },
  {
    id: 'S20',
    stake: 'β_cb = 0 (core) / K-8 sign',
    adjudicator: 'SO; LiteBIRD',
    kill: 'core: β ≠ 0; K-8: sign mismatch',
    status: 'β ≠ 0 at 2.9–3.6σ',
    chapter: 'handedness',
  },
  {
    id: 'S21',
    stake: 'Two-scale electron (Eq. 61)',
    adjudicator: 'LEP/LHC archives; (g−2)_e',
    kill: 'core > 10⁻¹⁹ m; e* below TeV',
    status: 'standing',
    chapter: 'electron',
  },
  {
    id: 'S22',
    stake:
      'Far-IR trough: fixed edge at n̄p ∈ [21.8, 24.7] μm, dipole-shifted, circularly polarised',
    adjudicator: 'JWST MIRI; Spitzer IRS stacks',
    kill: 'no edge at the K-11 depth',
    status: 'number owed',
    chapter: 'vacuum',
    regraded: true,
  },
  {
    id: 'S23',
    stake: 'α-drift without μ_pe-drift, R_μα = 0',
    adjudicator: 'optical clocks; quasar spectra',
    kill: 'joint detection, |R| ≳ 1',
    status: 'null on both so far',
    chapter: 'particle',
  },
  {
    id: 'S24',
    stake: 'Channeling resonance p₁ ∝ ℓ_row: 80.87, 84.26, 53.12 MeV/c',
    adjudicator: 'electron beams on thin crystals',
    kill: 'absent at all three',
    status: 'one unreplicated report',
    chapter: 'particle',
  },
  {
    id: 'S25',
    stake: 'o-Ps → γX line at ¼m_ec²(4 − κ⁻²) (K-19)',
    adjudicator: 'positronium spectroscopy',
    kill: 'level predicted, line absent',
    status: 'conditional',
    chapter: 'electron',
  },
  {
    id: 'S26',
    stake: 'F_LL − F_RR ≠ 0 at 3–25 μm (K-20)',
    adjudicator: 'short-range force; molecular PV',
    kill: 'null below K-20 level',
    status: 'new',
    chapter: 'handedness',
  },
  {
    id: 'S27',
    stake: 'Laboratory ν mass exceeds cosmological inference (K-23)',
    adjudicator: 'β-decay endpoint vs cosmology',
    kill: 'laboratory ≤ cosmological',
    status: 'conditional',
    chapter: 'cosmos',
  },
  {
    id: 'S28',
    stake:
      'Finite c_L: sidereal bipartite bound; Bancal–Barnea deviation (K-22)',
    adjudicator: 'long-baseline, multipartite Bell tests',
    kill: 'bound above the B1 speed (C-L)',
    status: 'bound-raising',
    chapter: 'quantum',
  },
  {
    id: 'S29',
    stake: 'Cliff shifts with V, A or ℓ_q (K-24)',
    adjudicator: 'cross-platform mirror circuits',
    kill: 'cliff without knob dependence',
    status: 'new',
    chapter: 'quantum',
  },
  {
    id: 'S30',
    stake: 'One handedness domain: uniform sign of β(n̂)',
    adjudicator: 'anisotropic birefringence maps',
    kill: 'sign-flipping patches',
    status: 'new',
    chapter: 'handedness',
  },
];

export type Closure = {
  id: string;
  content: string;
  deliverables: string;
  kill: string;
  chapter: ChapterId;
  isNew?: boolean;
};

/** Table 3: the twenty-six posed closures. */
export const closures: Closure[] = [
  {
    id: 'K-0',
    content: 'Level 0 → level 1',
    deliverables: 'parameter space (x, t); metric; (P1)–(P7) as theorems',
    kill: 'none stated; deepest open closure',
    chapter: 'material',
  },
  {
    id: 'K-N',
    content: 'Normalisation audit',
    deliverables:
      'all [N] values in one convention; ê, 𝔦, 𝔠, κ; bridge inversion',
    kill: 'corrected 1σ band of m₃ below 0.050 eV',
    chapter: 'particle',
    isNew: true,
  },
  {
    id: 'K-3',
    content: 'Strong-CP relaxation by the b_P² penalty [CJ]',
    deliverables: 'θ̄_eff transfer function; EDM windows',
    kill: 'EDM above window (S11)',
    chapter: 'sectors',
  },
  {
    id: 'K-4',
    content: 'Short-distance strong sector [CJ]',
    deliverables: 'sign and coefficient of the junction-stiffness flow',
    kill: 'screening sign (S12)',
    chapter: 'sectors',
  },
  {
    id: 'K-5',
    content: 'Electroweak precision',
    deliverables: 'Δρ_top from the band-edge top; (S, T)',
    kill: 'wrong sign or magnitude',
    chapter: 'sectors',
  },
  {
    id: 'K-8',
    content: 'Condensate-relaxation birefringence [CJ]',
    deliverables: 'Θ; its evolution; β_cb, ε₅, anisotropy, low-z ratio',
    kill: 'sign mismatch; magnitude off band',
    chapter: 'handedness',
  },
  {
    id: 'K-9',
    content: 'Multi-time statistics of the agitated material',
    deliverables: 'sequential-measurement correlations vs QM',
    kill: 'disagreement at accessible precision',
    chapter: 'quantum',
  },
  {
    id: 'K-10',
    content: 'Halo dominance of the frustration integrals',
    deliverables: 'two-scale solution; halo integrals; tunnelling exponent',
    kill: 'core-dominated: S1 suspended',
    chapter: 'electron',
  },
  {
    id: 'K-11',
    content: 'Doublet–fog matrix element',
    deliverables: 'Δn in coherent and incoherent regimes',
    kill: 'Δn above Eq. (30)',
    chapter: 'vacuum',
  },
  {
    id: 'K-12',
    content: 'Relaxation index',
    deliverables: 'n; perturbation sector; distance fit',
    kill: 'no n fits; or S19',
    chapter: 'cosmos',
  },
  {
    id: 'K-13',
    content: 'Prefactors of g₄ and ε_R',
    deliverables: 'both prefactors',
    kill: 'nonperturbative bare coupling required',
    chapter: 'sectors',
  },
  {
    id: 'K-14',
    content: 'Heliknoton–Z coupling',
    deliverables: 'theorem fixing it to the doublet strength',
    kill: 'off by more than 0.3%',
    chapter: 'sectors',
  },
  {
    id: 'K-15',
    content: 'Top decay before hadronisation',
    deliverables: 'absence of top hadrons',
    kill: 'top hadrons predicted',
    chapter: 'sectors',
  },
  {
    id: 'K-16',
    content: 'Cone condition (narrowed)',
    deliverables: 'derive μ/ρ₀ = γ_eff/2J',
    kill: 'none: remains [IM]',
    chapter: 'material',
  },
  {
    id: 'K-17',
    content: 'Undressed-knot dark matter [CJ]',
    deliverables: 'pair-production rate; relic abundance',
    kill: 'overclosure; Lyman-α',
    chapter: 'cosmos',
  },
  {
    id: 'K-18',
    content: 'Gauss completion',
    deliverables:
      'derive Eq. (21) or compute j_def; sign of the longitudinal energy',
    kill: 'j_def ≠ 0 predicted, not seen (S15)',
    chapter: 'light',
    isNew: true,
  },
  {
    id: 'K-19',
    content: 'Band-edge identity',
    deliverables: 'halo spectrum below 2Mc² per class',
    kill: 'level predicted, line absent (S25)',
    chapter: 'electron',
    isNew: true,
  },
  {
    id: 'K-20',
    content: 'Mirror-force amplitude',
    deliverables: '𝒜(r), ℬ(r)',
    kill: 'null below predicted level (S26)',
    chapter: 'handedness',
    isNew: true,
  },
  {
    id: 'K-21',
    content: 'Pair dressing',
    deliverables: 'threshold and cross-section',
    kill: 'm_u < m_e; morphology; relic mismatch',
    chapter: 'cosmos',
    isNew: true,
  },
  {
    id: 'K-22',
    content: 'Tower update rule',
    deliverables: 'signalling or not: horn of Theorem 13',
    kill: 'fixes the sign of S28',
    chapter: 'quantum',
    isNew: true,
  },
  {
    id: 'K-23',
    content: 'Pitch–lag coupling',
    deliverables: 'sign of S; 𝒳; stability',
    kill: 'unstable, or S > 0 (S27 void)',
    chapter: 'cosmos',
    isNew: true,
  },
  {
    id: 'K-24',
    content: 'Hosting mode',
    deliverables: 'N_eff from the tower’s field content',
    kill: 'cliff where no mode allows (S16, S29)',
    chapter: 'quantum',
    isNew: true,
  },
  {
    id: 'K-G',
    content: 'Graviton',
    deliverables:
      'kinetic-term positivity; carrier distinct from the doublet; c_GW',
    kill: 'ghost; c_GW ≠ c',
    chapter: 'cosmos',
  },
  {
    id: 'K-EW-I',
    content: 'Exciton bound state',
    deliverables: 'M_W, G_F, M_h, width',
    kill: 'as printed in Sec. VIII',
    chapter: 'sectors',
  },
  {
    id: 'K-EW-II',
    content: 'Anomaly necessity',
    deliverables: 'the six sums as necessary conditions',
    kill: 'as printed in Sec. VIII',
    chapter: 'sectors',
  },
  {
    id: 'K-EW-III',
    content: 'ϑ attractor',
    deliverables: 'sin²θ_w from the cone-locking flow',
    kill: 'as printed in Sec. VIII',
    chapter: 'sectors',
  },
];

export type AuditRow = {
  claim: string;
  grade: string;
  selectedForFact: string;
  nonCircular: string;
  discriminating: boolean;
  discriminatingNote: string;
  disposition: string;
  chapter: ChapterId;
};

/** Table 2: the ledger under the audit criterion of Definition 9. */
export const auditRows: AuditRow[] = [
  {
    claim: 'Doublet gapless (Thm. 1)',
    grade: 'DF',
    selectedForFact: 'Yes: F10′ adopted to kill the mass term',
    nonCircular: 'Only via F′',
    discriminating: false,
    discriminatingNote: 'No',
    disposition: 'Consistency; inverse kills S7',
    chapter: 'material',
  },
  {
    claim: 'Exact doublet dispersion (Prop. 1)',
    grade: 'DF',
    selectedForFact: 'Yes: cone condition imported for it',
    nonCircular: 'Only via F′ (c_ψ > c)',
    discriminating: false,
    discriminatingNote: 'No',
    disposition: 'Consistency; K-16',
    chapter: 'material',
  },
  {
    claim: 'Maxwell for every c_L (Thm. 6)',
    grade: 'DF',
    selectedForFact: 'Yes: F-G adopted to recover Gauss',
    nonCircular: 'Only via F′ (physical velocity gauge)',
    discriminating: false,
    discriminatingNote: 'No',
    disposition: 'Null test S15; K-18',
    chapter: 'light',
  },
  {
    claim: 'Custodial ρ = 1 (Prop. 19)',
    grade: 'DF',
    selectedForFact: 'No',
    nonCircular: 'Yes',
    discriminating: false,
    discriminatingNote: 'No; SM computes Δρ_top',
    disposition: 'Consistency; K-5 owed',
    chapter: 'sectors',
  },
  {
    claim: 'e = g sin θ_w',
    grade: 'DF',
    selectedForFact: 'No',
    nonCircular: 'Yes',
    discriminating: false,
    discriminatingNote: 'No',
    disposition: 'Bookkeeping',
    chapter: 'sectors',
  },
  {
    claim: 'Anomaly sums (Prop. 20)',
    grade: 'DW',
    selectedForFact: 'Derived thirds',
    nonCircular: 'Yes',
    discriminating: false,
    discriminatingNote: 'No',
    disposition: 'Consistency; K-EW-II',
    chapter: 'sectors',
  },
  {
    claim: 'KM counting; confinement dichotomy',
    grade: 'DF',
    selectedForFact: 'No',
    nonCircular: 'Yes',
    discriminating: false,
    discriminatingNote: 'No',
    disposition: 'Inherited',
    chapter: 'sectors',
  },
  {
    claim: 'Finite c_L in the tower (Prop. 10, Thm. 13)',
    grade: 'DF / posed',
    selectedForFact: 'No',
    nonCircular: 'Yes',
    discriminating: true,
    discriminatingNote: 'Yes',
    disposition: 'Prediction S28; K-22',
    chapter: 'quantum',
  },
  {
    claim: 'Dense-storage cliff (Thms. 11, 12)',
    grade: 'DF',
    selectedForFact: 'No',
    nonCircular: 'Yes',
    discriminating: true,
    discriminatingNote: 'Yes (given dense storage)',
    disposition: 'Prediction S16, S29; K-24',
    chapter: 'quantum',
  },
  {
    claim: 'Far-infrared trough (Thm. 7, Prop. 7)',
    grade: 'DF',
    selectedForFact: 'No',
    nonCircular: 'Yes',
    discriminating: true,
    discriminatingNote: 'Yes',
    disposition: 'Prediction S22; K-11',
    chapter: 'vacuum',
  },
  {
    claim: 'Relaxation family (Props. 22–26)',
    grade: 'DF',
    selectedForFact: 'No',
    nonCircular: 'Yes',
    discriminating: true,
    discriminatingNote: 'Yes (disfavoured)',
    disposition: 'Prediction S18, S19',
    chapter: 'cosmos',
  },
  {
    claim: 'Neutrino-mass drift (Prop. 27)',
    grade: 'DW',
    selectedForFact: 'No',
    nonCircular: 'Yes',
    discriminating: true,
    discriminatingNote: 'Yes (conditional)',
    disposition: 'Prediction S27; K-23',
    chapter: 'cosmos',
  },
  {
    claim: 'Physical clock (Props. 14, 15)',
    grade: 'DF',
    selectedForFact: 'No',
    nonCircular: 'Yes',
    discriminating: true,
    discriminatingNote: 'Yes',
    disposition: 'Prediction S23, S24',
    chapter: 'particle',
  },
  {
    claim: 'Handedness (Props. 28, 30, 31)',
    grade: 'DF / DW',
    selectedForFact: 'No',
    nonCircular: 'Yes',
    discriminating: true,
    discriminatingNote: 'Yes',
    disposition: 'Prediction S10, S20, S26, S30',
    chapter: 'handedness',
  },
  {
    claim: 'Two-scale electron (Thm. 15, Prop. 17)',
    grade: 'DF',
    selectedForFact: 'No',
    nonCircular: 'Yes',
    discriminating: true,
    discriminatingNote: 'Yes (e*, form factor)',
    disposition: 'Consistency S21; K-10',
    chapter: 'electron',
  },
  {
    claim: 'Band edge (Prop. 18)',
    grade: 'DF',
    selectedForFact: 'No',
    nonCircular: 'Yes',
    discriminating: true,
    discriminatingNote: 'Yes, if (b)',
    disposition: 'Conditional S25; K-19',
    chapter: 'electron',
  },
];

/** Sec. XI E: statements of the 2026-09-06 draft withdrawn or corrected in the revision. */
export const corrections = [
  {
    title: 'Kinetic normalisation',
    text: 'The rotational kinetic coefficient is J, not ½J, so the kinetic energy is ½J|ω|².',
  },
  {
    title: 'Gap modulus',
    text: 'The relative-rotation gap includes the locking modulus, m̃² = 4μ_c + ¼m̃_V²; the inherited κ = 1/√2 implicitly fixes μ_c = 3m̃_V²/16. K-N is posed.',
  },
  {
    title: 'Halo length',
    text: 'λ_halo = (c_ψ/c)ħ/Mc, not ħ/(√2Mc). At fixed integrals the correction leaves m₃ at 0.047 eV or raises it to 0.066 eV.',
  },
  {
    title: 'Cones',
    text: 'The doublet is exactly lightlike under the cone condition, with no flow required, and c_ψ > c.',
  },
  {
    title: 'P5',
    text: 'Unnecessary in the transverse sector, where β renormalises γ.',
  },
  {
    title: 'Near-field channel',
    text: 'Withdrawn as an electromagnetic prediction. The transverse completion is acausal, the Gauss completion is exact Maxwell theory, and any other completion deviates by the field of a defect current. S15 is a null test; c_L moves to the tower (S28).',
  },
  {
    title: 'Longitudinal radiation',
    text: 'The η(c/c_L)³ channel is not an electromagnetic signal; with a positive-energy longitudinal sector it is a leak of relative size ½(c/c_L)³ ≤ 5×10⁻¹³.',
  },
  {
    title: 'Qubit ceiling',
    text: 'Dimension counting is correct but untestable by circuits. The testable claim is dense storage, with a mirror-circuit protocol.',
  },
  {
    title: 'Structural scale',
    text: 'ℓ_s ≲ 1.5×10⁻²⁷|ξ_γ|⁻¹ᐟ² m from photon timing replaces the assumed 10⁻²⁶ m; the cliff range becomes 234–329 under H_V.',
  },
  {
    title: 'Pitch',
    text: 'p/ζ_ν ∈ [21.8, 24.7] μm; the previous 26 μm lay below the oscillation floor.',
  },
  {
    title: 'Far-infrared feature',
    text: 'A redshift-swept trough with a fixed blue edge, not a non-redshifting line; the transparency bound is 6×10⁻¹⁷, not 10⁻³¹.',
  },
  {
    title: 'Gravitational waves',
    text: 'Transverse strain waves are the photon; the graviton cannot be a linear transverse elastic mode.',
  },
  {
    title: 'Novelty of the dark-energy background',
    text: 'The relaxation family is the Dvali–Turner family.',
  },
  {
    title: 'Birefringence',
    text: 'Endpoint property: no depolarisation from fog-scale structure.',
  },
  {
    title: 'Notation',
    text: 'a → ℓ_s; n → n_q; class p → 𝗉; χ → 𝒳; Γ → Γ_r; q → q_dec; “substrate” → “material”.',
  },
] as const;

export const errata = [
  {
    id: 'E1',
    title: 'Direction of the halo correction',
    text: 'The corrected halo length leaves the central m₃ at 0.047 eV, the value at the corrected length; the old length would give 0.066 eV. The correction cannot move the prediction below the oscillation floor.',
  },
  {
    id: 'E2',
    title: 'Matter–light cone',
    text: '(c_ψ − c)/c ≈ (ℓ_gω₀/c)²/8 ≈ 7×10⁻³⁰ at an MeV gap and ≈ 5×10⁻²⁰ at the weak-scale vacuum gap, at the edge of the vacuum-Cherenkov bounds, which constrain ℓ_g ≲ 7×10⁻²⁸ m.',
  },
] as const;

export const crossLocks = [
  {
    id: 'C-EW1',
    name: 'One handedness bit',
    text: 'Family orientation, weak chirality, the sign of δ_CP, the K-3 residual and, through K-8, the birefringence sign; uniform on the sky; fixes the sign of the mirror force.',
  },
  {
    id: 'C-EW2',
    name: 'One halo',
    text: '𝔠, the G_F suppression and the ε_R suppression, with K-13’s prefactors owed.',
  },
  { id: 'C-EW3', name: 'One censor', text: 'Three families and y_t ≈ 1.' },
  {
    id: 'C-EW4',
    name: 'One invariance',
    text: 'Photon masslessness and ρ = 1.',
  },
  {
    id: 'X-Λν',
    name: 'One soft coordinate',
    text: 'The dark-energy lag, the chiral condensate and K-8: the soft coordinate is the pitch, so dark energy, the neutrino mass and the far-infrared edge are one variable.',
  },
  {
    id: 'C-L',
    name: 'One longitudinal speed',
    text: 'The B1 speed c_L = √((λ + 2μ)/ρ₀) is the tower’s update speed, so S28 bounds a modulus of the material.',
  },
  {
    id: 'X-νp',
    name: 'One pitch',
    text: 'The neutrino mass, the trough’s edge, the range of the mirror force and the advected line are fixed by one length.',
  },
] as const;

export const auditDefinition = {
  nonCircular:
    'A postulate P non-circularly explains a fact F if P was not selected because F is known, or if P entails a distinct testable F′ ≠ F not used in its selection.',
  discriminating:
    'P discriminates between two theories if some F′ it entails is not entailed by the competitor.',
} as const;

export function stakesByStatus() {
  const counts = new Map<string, number>();
  for (const s of stakes) counts.set(s.status, (counts.get(s.status) ?? 0) + 1);
  return counts;
}

export function stakesForChapter(chapter: ChapterId) {
  return stakes.filter((s) => s.chapter === chapter);
}
