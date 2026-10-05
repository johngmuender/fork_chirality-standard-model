import { assertFinite, lightSpeed } from './gum-constants.ts';

/**
 * The continuum description of Sec. II: a chiral micropolar (Cosserat) continuum
 * with displacement u and an SU(2)-lifted micro-rotation. The transverse sector
 * is governed by the determinant of Eq. (11); the cone condition of Eq. (12)
 * makes the locked doublet exactly lightlike at every wavelength.
 */
export type Moduli = {
  /** mass density ρ₀ */
  rho0: number;
  /** micro-inertia density J */
  J: number;
  /** shear modulus μ */
  mu: number;
  /** effective curl modulus γ_eff = γ + β */
  gammaEff: number;
  /** total relative-rotation stiffness m̃, with m̃² = 4μ_c + ¼ m̃_V² */
  mTilde: number;
};

function validate(m: Moduli) {
  assertFinite('moduli', m.rho0, m.J, m.mu, m.gammaEff, m.mTilde);
  if (m.rho0 <= 0 || m.J <= 0 || m.mu <= 0 || m.gammaEff <= 0 || m.mTilde <= 0)
    throw new RangeError('All moduli and inertias must be positive.');
}

/** The doublet cone, c² = γ_eff / 2J (Theorem 4). */
export function coneSpeed(m: Moduli) {
  validate(m);
  return Math.sqrt(m.gammaEff / (2 * m.J));
}

/** The displacement shear speed √(μ/ρ₀). */
export function shearSpeed(m: Moduli) {
  validate(m);
  return Math.sqrt(m.mu / m.rho0);
}

/** μ/ρ₀ − γ_eff/2J: zero exactly when the cone condition holds. */
export function coneMismatch(m: Moduli) {
  validate(m);
  return m.mu / m.rho0 - m.gammaEff / (2 * m.J);
}

/** Impose the cone condition by adjusting μ. */
export function withConeCondition(m: Moduli): Moduli {
  validate(m);
  return { ...m, mu: (m.rho0 * m.gammaEff) / (2 * m.J) };
}

/** The relative-rotation gap ω₀ = m̃/√J. */
export function gapFrequency(m: Moduli) {
  validate(m);
  return m.mTilde / Math.sqrt(m.J);
}

/** c_ψ² = c² + m̃²/4ρ₀ (Eq. 13): the matter cone exceeds the light cone. */
export function relativeRotationSpeed(m: Moduli) {
  validate(m);
  return Math.sqrt(coneSpeed(m) ** 2 + m.mTilde ** 2 / (4 * m.rho0));
}

/**
 * The two transverse branches at wavenumber k, from the determinant
 * (ρ₀ω² − μk² − ¼m̃²k²)(Jω² − m̃² − ½γ_eff k²) − ¼m̃⁴k² = 0.
 * Returns [ω_doublet, ω_relative-rotation] in ascending order.
 */
export function transverseBranches(k: number, m: Moduli): [number, number] {
  validate(m);
  assertFinite('wavenumber', k);
  if (k < 0) throw new RangeError('The wavenumber must be non-negative.');
  const m2 = m.mTilde ** 2;
  const p = m.mu * k * k + 0.25 * m2 * k * k;
  const q = m2 + 0.5 * m.gammaEff * k * k;
  const a = m.rho0 * m.J;
  const b = -(m.rho0 * q + m.J * p);
  const c = p * q - 0.25 * m2 * m2 * k * k;
  const discriminant = Math.max(0, b * b - 4 * a * c);
  const low = (-b - Math.sqrt(discriminant)) / (2 * a);
  const high = (-b + Math.sqrt(discriminant)) / (2 * a);
  return [Math.sqrt(Math.max(0, low)), Math.sqrt(Math.max(0, high))];
}

/** The doublet's phase-velocity deviation from the cone, (ω/k − c)/c, at wavenumber k. */
export function doubletDispersion(k: number, m: Moduli) {
  if (k <= 0) throw new RangeError('A positive wavenumber is required.');
  const [doublet] = transverseBranches(k, m);
  const c = coneSpeed(m);
  return (doublet / k - c) / c;
}

/** Longitudinal displacement speed c_L² = (λ + 2μ)/ρ₀ for Lamé constant λ. */
export function longitudinalSpeed(lame: number, m: Moduli) {
  validate(m);
  assertFinite('Lamé constant', lame);
  if (lame + 2 * m.mu <= 0) throw new RangeError('λ + 2μ must be positive.');
  return Math.sqrt((lame + 2 * m.mu) / m.rho0);
}

/** (c_ψ − c)/c ≈ (ℓ_g ω₀/c)²/8 for grains of gyration radius ℓ_g and gap ω₀. */
export function matterLightConeDifference(
  gyrationRadius: number,
  gap: number,
  c = lightSpeed,
) {
  assertFinite('cone difference', gyrationRadius, gap, c);
  if (gyrationRadius < 0 || gap <= 0 || c <= 0)
    throw new RangeError(
      'A non-negative radius and positive gap are required.',
    );
  return ((gyrationRadius * gap) / c) ** 2 / 8;
}

/** The gyration radius allowed by a vacuum-Cherenkov bound δ: ℓ_g ≤ c√(8δ)/ω₀. */
export function gyrationBound(gap: number, delta: number, c = lightSpeed) {
  assertFinite('gyration bound', gap, delta, c);
  if (gap <= 0 || delta <= 0)
    throw new RangeError('Positive gap and bound required.');
  return (c * Math.sqrt(8 * delta)) / gap;
}

/** Normalised reference moduli for the exhibits: c = 1, ω₀ = 1.5, cone condition imposed. */
export const referenceModuli: Moduli = withConeCondition({
  rho0: 1,
  J: 1,
  mu: 1,
  gammaEff: 2,
  mTilde: 1.5,
});

export const actionSectors = [
  {
    id: 'W2',
    symbol: 'W₂',
    name: 'Micropolar elasticity',
    flag: 'Eringen’s six moduli',
    role: 'Non-symmetric stress and couple stress. Sets the wave speeds and the relative-rotation stiffness.',
    terms:
      '½λe²ₖₖ + μe₍ᵢⱼ₎e₍ᵢⱼ₎ + μ_c e₍ᵢⱼ₎e₍ᵢⱼ₎ + ½αΓ²ₖₖ + ½βΓ₍ᵢⱼ₎Γ₍ᵢⱼ₎ + ½γΓ₍ᵢⱼ₎Γ₍ᵢⱼ₎',
  },
  {
    id: 'Wchi',
    symbol: 'W_χ',
    name: 'Chiral transduction',
    flag: 'Flag F2',
    role: 'The handedness reservoir: the only parity-odd sector, hence the source of every parity-violating effect and of the light–knot vertex.',
    terms: 'χ₁eₖₖΓₗₗ + χ₂e₍ᵢⱼ₎Γ₍ᵢⱼ₎ + χ₃e₍ᵢⱼ₎Γ₍ᵢⱼ₎',
  },
  {
    id: 'W4',
    symbol: 'W₄',
    name: 'Skyrme quartic',
    flag: 'Flag F4',
    role: 'The Derrick–Hobart escape without which no static three-dimensional texture is stable.',
    terms: '¼κ_S Tr([Lᵢ,Lⱼ][Lᵢ,Lⱼ]),  Lᵢ = P̃⁻¹∂ᵢP̃',
  },
  {
    id: 'W60',
    symbol: 'W₆₊₀',
    name: 'BPS-Skyrme sector',
    flag: 'Flag F9 (near-BPS window)',
    role: 'Topological density squared plus a locking potential: compactons, near-saturated bounds, small binding and the band gap inside which knots live.',
    terms: '½Λ²b_P² + 𝒱(σ_P),  𝒱 = m̃_V²(1 − σ_P) + c₂(1 − σ_P)²',
  },
] as const;

export const branches = [
  {
    id: 'B1',
    name: 'Longitudinal displacement',
    dispersion: 'ω² = c_L²k²,  c_L² = (λ + 2μ)/ρ₀',
    role: 'Carries the frame-connection scalar Φ_c and, in the Gauss completion, the velocity gauge with speed c_L.',
  },
  {
    id: 'B2±',
    name: 'The locked transverse doublet',
    dispersion: 'ω = ck exactly, with ψ ≡ 0, when μ/ρ₀ = γ_eff/2J',
    role: 'The photon: lattice and grains co-move; the MacCullagh energy is carried at every wavelength.',
  },
  {
    id: 'B3±',
    name: 'Transverse relative rotation',
    dispersion: 'ω² = ω₀² + c_ψ²k²,  c_ψ² = c² + m̃²/4ρ₀',
    role: 'Gapped. Knots are textures of this sector and inherit its limiting speed c_ψ > c.',
  },
  {
    id: 'B4',
    name: 'Longitudinal micro-rotation',
    dispersion: 'ω² = ω₀² + c₄²k²,  c₄² = (α + β)/J',
    role: 'Gapped. After mixing with the doublet it is the neutral member of the weak triplet.',
  },
] as const;

export const postulates = [
  ['P1', 'Cosserat energetics with micro-inertia J > 0.'],
  ['P2', 'The isotropic quadratic sector, Eq. (5).'],
  [
    'P3',
    'Objectivity F10′: the potential sector depends on orientation only through the relative texture P̃.',
  ],
  [
    'P4',
    'The locking regime: the relative-rotation gap exceeds every frequency at which the doublet is probed.',
  ],
  [
    'P5′',
    'The longitudinal micro-rotation obeys the Gauss-completion constraint, Flag F-G.',
  ],
  [
    'P6',
    'The topological sector with textures of integer degree K ∈ π₃(S³) = ℤ.',
  ],
  ['P7', 'The chiral sector with the near-BPS window ε ≪ 1 on knots.'],
] as const;
