import {
  assertFinite,
  electronMassEv,
  muonMassEv,
  tauMassEv,
} from './gum-constants.ts';

/**
 * The Standard-Model sectors at their ledger grades (Sec. VIII): three families
 * as frustration classes, the electroweak skeleton, confinement, and the six
 * anomaly sums as winding arithmetic.
 */

/** Eq. (64): ln(m_p / m_{p+1}) = ½(A + B p). */
export function frustrationLog(classIndex: number, A: number, B: number) {
  assertFinite('frustration', classIndex, A, B);
  if (!Number.isInteger(classIndex) || classIndex < 0)
    throw new RangeError('A non-negative integer class is required.');
  return 0.5 * (A + B * classIndex);
}

export const frustrationIntegrals = {
  A: 5.6,
  dA: 0.9,
  B: 5.7,
  dB: 1.2,
} as const;

export const leptonLogarithms = {
  tauMu: Math.log(tauMassEv / muonMassEv),
  muE: Math.log(muonMassEv / electronMassEv),
  get shape() {
    return this.muE / this.tauMu;
  },
} as const;

/** The two-integral landing: ½A against ln(m_τ/m_μ), ½(A+B) against ln(m_μ/m_e), shape (A+B)/A. */
export function leptonLadder(
  A = frustrationIntegrals.A,
  B = frustrationIntegrals.B,
) {
  assertFinite('ladder', A, B);
  if (A <= 0) throw new RangeError('A positive per-belt integral is required.');
  return {
    tauMu: frustrationLog(0, A, B),
    muE: frustrationLog(1, A, B),
    shape: (A + B) / A,
    nextClassMassEv: electronMassEv * Math.exp(-0.5 * (A + 2 * B)),
  };
}

/** Definition 10: a landing if δ_th ≳ 10 δ_exp, a test if δ_th ≲ 3 δ_exp. */
export function landingOrTest(
  theoryHalfWidth: number,
  experimentalUncertainty: number,
) {
  assertFinite('landing', theoryHalfWidth, experimentalUncertainty);
  if (experimentalUncertainty <= 0)
    throw new RangeError('A positive uncertainty is required.');
  const ratio = theoryHalfWidth / experimentalUncertainty;
  return ratio >= 10 ? 'landing' : ratio <= 3 ? 'test' : 'between';
}

/** Proposition 19: the protected neutral mass matrix M_T² [[ϑ², ϑ], [ϑ, 1]]. */
export function neutralSector(theta: number) {
  assertFinite('mixing', theta);
  if (theta <= 0)
    throw new RangeError('A positive mixing modulus is required.');
  const matrix = [
    [theta * theta, theta],
    [theta, 1],
  ];
  return {
    matrix,
    determinant: matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0],
    eigenvalues: [0, 1 + theta * theta],
    sin2ThetaW: (theta * theta) / (1 + theta * theta),
    mzOverMw: Math.sqrt(1 + theta * theta),
    rho: 1,
  };
}

/** g² = 8 M_W² G_F / √2 with G_F in GeV⁻² and M_W in GeV. */
export function weakCoupling(fermiConstant = 1.166e-5, wMass = 80.4) {
  assertFinite('coupling', fermiConstant, wMass);
  return Math.sqrt((8 * wMass * wMass * fermiConstant) / Math.SQRT2);
}

/** Eq. (G1): Δρ_top = 3 G_F m_t² / (8√2 π²). */
export function deltaRhoTop(fermiConstant = 1.166e-5, topMass = 172.5) {
  assertFinite('Δρ', fermiConstant, topMass);
  return (
    (3 * fermiConstant * topMass * topMass) / (8 * Math.SQRT2 * Math.PI ** 2)
  );
}

/** y_t = √2 m_t / v. */
export function topYukawa(topMass = 172.5, vev = 246.22) {
  assertFinite('Yukawa', topMass, vev);
  return (Math.SQRT2 * topMass) / vev;
}

/** The Regge slope α′ = 1/(2πσ) for string tension σ in GeV². */
export function reggeSlope(tension = 0.19) {
  assertFinite('Regge', tension);
  if (tension <= 0) throw new RangeError('A positive tension is required.');
  return 1 / (2 * Math.PI * tension);
}

/** Proposition 21: (N − 1)(N − 2)/2 irreducible holonomy phases. */
export function holonomyPhases(families: number) {
  if (!Number.isInteger(families) || families < 1)
    throw new RangeError('A positive integer is required.');
  return ((families - 1) * (families - 2)) / 2;
}

/**
 * One family in the all-left-handed convention with q = 6Y, as in Proposition 20.
 * The heliknoton is the sixth entry with Y = 0 and no gauge charge.
 */
export const familyContent = [
  {
    id: 'Q',
    label: 'Q_L',
    rep: '(3, 2, +⅙)',
    colour: 3,
    weak: 2,
    q: 1,
    conjugate: false,
    role: 'quark doublet',
  },
  {
    id: 'uc',
    label: 'uᶜ',
    rep: '(3̄, 1, −⅔)',
    colour: 3,
    weak: 1,
    q: -4,
    conjugate: true,
    role: 'up antiquark',
  },
  {
    id: 'dc',
    label: 'dᶜ',
    rep: '(3̄, 1, +⅓)',
    colour: 3,
    weak: 1,
    q: 2,
    conjugate: true,
    role: 'down antiquark',
  },
  {
    id: 'L',
    label: 'L_L',
    rep: '(1, 2, −½)',
    colour: 1,
    weak: 2,
    q: -3,
    conjugate: false,
    role: 'lepton doublet',
  },
  {
    id: 'ec',
    label: 'eᶜ',
    rep: '(1, 1, +1)',
    colour: 1,
    weak: 1,
    q: 6,
    conjugate: false,
    role: 'charged antilepton',
  },
  {
    id: 'nu',
    label: 'ν (heliknoton)',
    rep: '(1, 1, 0)',
    colour: 1,
    weak: 1,
    q: 0,
    conjugate: false,
    role: 'pitch quantum',
  },
] as const;

export const anomalyChannels = [
  '[SU(3)]²U(1)',
  '[SU(2)]²U(1)',
  'grav²U(1)',
  '[U(1)]³',
  '[SU(3)]³',
  'Witten',
] as const;

/** Integer-rescaled contributions of one multiplet to the six channels (q = 6Y). */
export function tilingContributions(index: number) {
  const p = familyContent[index];
  if (!p) throw new RangeError('Unknown multiplet.');
  return [
    p.colour === 3 ? p.weak * p.q : 0,
    p.weak === 2 ? p.colour * p.q : 0,
    p.colour * p.weak * p.q,
    p.colour * p.weak * p.q ** 3,
    p.colour === 3 ? (p.conjugate ? -1 : 1) * p.weak : 0,
    p.weak === 2 ? p.colour : 0,
  ];
}

/** Totals over the included multiplets; the Witten channel passes when the doublet count is even. */
export function tilingSums(included: boolean[]) {
  if (
    included.length !== familyContent.length ||
    included.some((x) => typeof x !== 'boolean')
  )
    throw new TypeError('Choose all six multiplet switches.');
  const totals = anomalyChannels.map((_, j) =>
    included.reduce(
      (sum, keep, i) => sum + (keep ? tilingContributions(i)[j] : 0),
      0,
    ),
  );
  return {
    totals,
    passes: totals.slice(0, 5).every((x) => x === 0) && totals[5] % 2 === 0,
    doublets: totals[5],
  };
}

/** The electric-charge tiling 3(⅔) + 3(−⅓) + (−1) + 0 = 0 of a unit cell. */
export function chargeTiling() {
  return 3 * (2 / 3) + 3 * (-1 / 3) + -1 + 0;
}

export const confinementStrata = [
  { name: 'Material-scale lines', tension: 'ℓ_s⁻²', fate: 'never excited' },
  {
    name: 'Gapped-stratum flux tubes',
    tension: 'T ~ M_gap² — the QCD string',
    fate: 'colour confined',
  },
  {
    name: 'Soft phason strings',
    tension: 'f² ∈ [1.6×10⁻⁵, 4×10⁻³] GeV²',
    fate: 'long-wavelength',
  },
] as const;
