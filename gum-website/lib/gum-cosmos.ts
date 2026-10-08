import { assertFinite } from './gum-constants.ts';

/**
 * Cosmology (Sec. IX): the relaxation family ρ_DE ∝ H^{2(1−n)}, its Dvali–Turner
 * equivalence, and the neutrino-mass drift of Proposition 27.
 */
export const darkEnergyFractionToday = 0.69;

function validate(n: number, omegaDE: number) {
  assertFinite('relaxation family', n, omegaDE);
  if (n < 0 || n > 1)
    throw new RangeError('The relaxation index lies in [0, 1].');
  if (omegaDE <= 0 || omegaDE >= 1)
    throw new RangeError('0 < Ω_DE,0 < 1 is required.');
}

/** Solve Eq. (D1) for h² = (H/H₀)² at scale factor a by fixed-point iteration. */
export function hubbleSquared(
  a: number,
  n: number,
  omegaDE = darkEnergyFractionToday,
  radiation = 0,
) {
  validate(n, omegaDE);
  assertFinite('scale factor', a, radiation);
  if (a <= 0) throw new RangeError('A positive scale factor is required.');
  const matter = (1 - omegaDE - radiation) * a ** -3 + radiation * a ** -4;
  if (n === 0) return matter / (1 - omegaDE);
  let x = matter + omegaDE;
  for (let i = 0; i < 400; i++) {
    const next = matter + omegaDE * x ** (1 - n);
    if (Math.abs(next - x) < 1e-13 * Math.max(1, next)) return next;
    x = next;
  }
  return x;
}

/** Ω_DE(a) = ρ_DE / 3M²H² = Ω_DE,0 h^{−2n}. */
export function darkEnergyFraction(
  a: number,
  n: number,
  omegaDE = darkEnergyFractionToday,
) {
  return omegaDE * hubbleSquared(a, n, omegaDE) ** -n;
}

/** Eq. (70): w_DE(a) = −n / (1 − (1 − n) Ω_DE(a)). */
export function equationOfState(
  a: number,
  n: number,
  omegaDE = darkEnergyFractionToday,
) {
  validate(n, omegaDE);
  return -n / (1 - (1 - n) * darkEnergyFraction(a, n, omegaDE));
}

/** Eq. (72): w_a ≥ 0 for every member, with equality only at n = 0 and n = 1. */
export function wa(n: number, omegaDE = darkEnergyFractionToday) {
  validate(n, omegaDE);
  const w0 = equationOfState(1, n, omegaDE);
  const d = 1 - (1 - n) * omegaDE;
  return (-3 * n * (1 - n) * w0 * omegaDE * (1 - omegaDE)) / (d * d);
}

/** (w₀, w_a) for a member of the family. */
export function w0wa(n: number, omegaDE = darkEnergyFractionToday) {
  return { w0: equationOfState(1, n, omegaDE), wa: wa(n, omegaDE) };
}

/** The present deceleration parameter q₀ = ½(1 + 3 w₀ Ω_DE,0). */
export function decelerationNow(n: number, omegaDE = darkEnergyFractionToday) {
  return 0.5 * (1 + 3 * equationOfState(1, n, omegaDE) * omegaDE);
}

/** Proposition 23: acceleration today requires n > ½(Ω_DE,0⁻¹ − 1). */
export function minimumIndex(omegaDE = darkEnergyFractionToday) {
  assertFinite('minimum index', omegaDE);
  if (omegaDE <= 0 || omegaDE >= 1)
    throw new RangeError('0 < Ω_DE,0 < 1 is required.');
  return 0.5 * (1 / omegaDE - 1);
}

/** Proposition 26: α_DT = 2(1 − n). */
export function dvaliTurnerExponent(n: number) {
  validate(n, darkEnergyFractionToday);
  return 2 * (1 - n);
}

/** Proposition 25: ρ_DE/ρ_m in the matter era ≈ (Ω_DE/Ω_m) Ω_m^{1−n} a^{3n}. */
export function earlyFraction(
  z: number,
  n: number,
  omegaDE = darkEnergyFractionToday,
) {
  validate(n, omegaDE);
  assertFinite('early fraction', z);
  if (z < 0) throw new RangeError('A non-negative redshift is required.');
  const om = 1 - omegaDE;
  return (omegaDE / om) * om ** (1 - n) * (1 + z) ** (-3 * n);
}

/** Proposition 27: m₃(z)/m₃(0) = [1 + ε_ν h(z)^{1−n}] / (1 + ε_ν). */
export function neutrinoDriftRatio(
  z: number,
  n: number,
  epsilon: number,
  omegaDE = darkEnergyFractionToday,
) {
  validate(n, omegaDE);
  assertFinite('drift', z, epsilon);
  if (z < 0) throw new RangeError('A non-negative redshift is required.');
  if (epsilon <= -1)
    throw new RangeError('The lag cannot reach the equilibrium pitch.');
  const h = Math.sqrt(hubbleSquared(1 / (1 + z), n, omegaDE));
  return (1 + epsilon * h ** (1 - n)) / (1 + epsilon);
}

/** The redshift at which the linear drift formula fails, |ε_ν| h^{1−n} → 1. */
export function driftBreakdownRedshift(
  n: number,
  epsilon: number,
  omegaDE = darkEnergyFractionToday,
) {
  validate(n, omegaDE);
  assertFinite('breakdown', epsilon);
  if (epsilon >= 0 || epsilon <= -1)
    throw new RangeError('A negative lag above −1 is required.');
  for (let z = 0; z < 5000; z += 0.5) {
    const h = Math.sqrt(hubbleSquared(1 / (1 + z), n, omegaDE));
    if (Math.abs(epsilon) * h ** (1 - n) >= 1) return z;
  }
  return Infinity;
}

export const familyMembers = [0, 0.25, 0.5, 0.75, 0.9, 1] as const;

/** Table 5. */
export function relaxationTable(omegaDE = darkEnergyFractionToday) {
  return familyMembers.map((n) => ({
    n,
    alphaDT: dvaliTurnerExponent(n),
    ...w0wa(n, omegaDE),
    q0: decelerationNow(n, omegaDE),
    earlyRatio:
      n === 0 ? omegaDE / (1 - omegaDE) : earlyFraction(1100, n, omegaDE),
  }));
}

/** A w(a) curve sampled from a = a_min to 1. */
export function equationOfStateCurve(
  n: number,
  samples = 60,
  aMin = 0.2,
  omegaDE = darkEnergyFractionToday,
) {
  if (!Number.isInteger(samples) || samples < 4)
    throw new RangeError('More samples are required.');
  return Array.from({ length: samples + 1 }, (_, i) => {
    const a = aMin + ((1 - aMin) * i) / samples;
    return { a, z: 1 / a - 1, w: equationOfState(a, n, omegaDE) };
  });
}

/** The DESI DR2 preference, as the paper states it: w₀ > −1 with w_a < 0. */
export const desiPreference = {
  w0Above: -1,
  waBelow: 0,
  significance: '2.8–4.2σ in CPL',
} as const;
