import {
  assertFinite,
  earthRotationRate,
  lightSpeed,
} from './gum-constants.ts';

/**
 * Electrodynamics as the orientation sector (Sec. III) and the preferred-frame
 * kinematics of Appendix F. The Gauss completion reproduces Maxwell's fields
 * exactly for every longitudinal speed c_L; the transverse completion is acausal.
 */

export type Completion = 'T' | 'G';

export const completions = [
  {
    id: 'T' as Completion,
    name: 'Transverse completion',
    rule: 'J_φ = P⊥ j_q',
    verdict: 'Acausal at every finite c_L',
    text: 'Keeping E_φ divergence-free means the field outside the c_L cone has already changed by minus the Coulomb change the instant the source moves. It permits instantaneous signalling in the material frame.',
  },
  {
    id: 'G' as Completion,
    name: 'Gauss completion',
    rule: 'J_φ = j_q − ε*∂t∇Φ_c',
    verdict: 'Exact Maxwell fields for every c_L',
    text: 'A local functional. The defect current vanishes identically, so (E, B) are the retarded Maxwell fields; the constraint κ_B∇·φ + c_L⁻²∂tΦ_c = 0 is the velocity gauge realised as material dynamics.',
  },
] as const;

/** γ_v = (1 − v²/c²)^−1/2. */
export function lorentzFactor(speed: number, c = lightSpeed) {
  assertFinite('Lorentz factor', speed, c);
  if (Math.abs(speed) >= c) throw new RangeError('The speed must be below c.');
  return 1 / Math.sqrt(1 - (speed / c) ** 2);
}

/**
 * Eq. (23): on Einstein-synchronised lab clocks, an influence propagating at c_L in the
 * material frame over distance r in direction n̂ arrives at t = γ_v r (1/c_L − v_M·n̂/c²).
 */
export function labArrivalTime(
  r: number,
  cL: number,
  vM: number,
  cosAngle: number,
  c = lightSpeed,
) {
  assertFinite('arrival time', r, cL, vM, cosAngle, c);
  if (r < 0 || cL <= 0)
    throw new RangeError('Non-negative distance and positive c_L required.');
  if (Math.abs(cosAngle) > 1)
    throw new RangeError('cos of an angle is bounded by one.');
  return lorentzFactor(vM, c) * r * (1 / cL - (vM * cosAngle) / (c * c));
}

/** Arrival precedes emission on lab clocks when v_M·n̂ > c²/c_L. */
export function precedesEmission(
  cL: number,
  vM: number,
  cosAngle: number,
  c = lightSpeed,
) {
  return vM * cosAngle > (c * c) / cL;
}

/** The lab speed above which a c_L influence can arrive before its cause: c²/c_L. */
export function criticalLabSpeed(cL: number, c = lightSpeed) {
  if (!Number.isFinite(cL) || cL <= 0)
    throw new RangeError('Positive c_L required.');
  return (c * c) / cL;
}

/** Half-amplitude of the sidereal oscillation of t_lab: γ_v r v_M sinθ⊕ n⊥ / c². */
export function siderealHalfSwing(
  r: number,
  vM: number,
  sinThetaEarth: number,
  nPerp: number,
  c = lightSpeed,
) {
  assertFinite('sidereal swing', r, vM, sinThetaEarth, nPerp, c);
  return (lorentzFactor(vM, c) * r * vM * sinThetaEarth * nPerp) / (c * c);
}

/** v_M·n̂(τ) over a sidereal day for a lab-fixed baseline (Eq. F1). */
export function materialProjection(
  vM: number,
  thetaEarth: number,
  nParallel: number,
  nPerp: number,
  siderealPhase: number,
) {
  assertFinite('projection', vM, thetaEarth, nParallel, nPerp, siderealPhase);
  return (
    vM *
    (Math.cos(thetaEarth) * nParallel +
      Math.sin(thetaEarth) * nPerp * Math.cos(siderealPhase))
  );
}

/** Sample t_lab across one sidereal day. */
export function siderealArrivalSeries(
  r: number,
  cL: number,
  vM: number,
  thetaEarth: number,
  nParallel: number,
  nPerp: number,
  samples = 96,
  c = lightSpeed,
) {
  if (!Number.isInteger(samples) || samples < 4)
    throw new RangeError('At least four samples are required.');
  return Array.from({ length: samples + 1 }, (_, i) => {
    const phase = (2 * Math.PI * i) / samples;
    const projection = materialProjection(
      vM,
      thetaEarth,
      nParallel,
      nPerp,
      phase,
    );
    return {
      hours: (24 * i) / samples,
      arrival: labArrivalTime(r, cL, vM, projection / vM, c),
      precedes: precedesEmission(cL, vM, projection / vM, c),
    };
  });
}

/** Eq. (43): persistence of Bell violation at every sidereal time bounds c_L from below. */
export function bipartiteBound(
  L: number,
  timingMismatch: number,
  vPerp: number,
  integrationTime: number,
  c = lightSpeed,
  rotationRate = earthRotationRate,
) {
  assertFinite('bipartite bound', L, timingMismatch, vPerp, integrationTime, c);
  if (L <= 0 || timingMismatch < 0 || integrationTime < 0)
    throw new RangeError('Positive baseline and non-negative times required.');
  const rotation = (0.5 * rotationRate * vPerp * L * integrationTime) / (c * c);
  return { bound: L / (timingMismatch + rotation), rotationTerm: rotation };
}

/** The window during which two events separated by L are c_L-disconnected: L/c_L. */
export function disconnectionWindow(L: number, cL: number) {
  assertFinite('window', L, cL);
  if (L < 0 || cL <= 0)
    throw new RangeError('Non-negative baseline and positive c_L required.');
  return L / cL;
}

/** Relativity-of-simultaneity offset v_M L / c² between lab and material clocks. */
export function simultaneityOffset(vM: number, L: number, c = lightSpeed) {
  assertFinite('offset', vM, L, c);
  return (vM * L) / (c * c);
}

/** Proposition 3: a positive-energy longitudinal sector leaks ½(c/c_L)³ of the dipole power. */
export function longitudinalLeak(cOverCL: number) {
  assertFinite('leak', cOverCL);
  if (cOverCL < 0 || cOverCL > 1) throw new RangeError('c/c_L lies in [0, 1].');
  return 0.5 * cOverCL ** 3;
}

/**
 * A schematic history of the electric field at distance r from a neutral source whose
 * dipole changes at t = 0, in units of the Coulomb change. The old static field is 0 and
 * the new Maxwell field is 1. Under (T) the field first changes by −1 everywhere outside
 * the c_L cone, returns to 0 once the c_L front passes, and reaches 1 with the light front.
 * Under (G) it is Maxwell's: unchanged until the light front.
 */
export function dipoleFieldHistory(
  t: number,
  r: number,
  completion: Completion,
  cL: number,
  c = lightSpeed,
) {
  assertFinite('field history', t, r, cL, c);
  if (r <= 0 || cL <= 0 || c <= 0)
    throw new RangeError('Positive distance and speeds required.');
  if (cL < c)
    throw new RangeError(
      'The longitudinal speed is not below the light speed here.',
    );
  if (t < 0) return 0;
  if (t >= r / c) return 1;
  if (completion === 'G') return 0;
  return t < r / cL ? -1 : 0;
}

export const nearFieldProtocol = [
  'An abrupt source: a pulsed dipole or a bunch emerging from a conductor.',
  'Battery-powered field sensors at 10–100 m with analog-optical readout, so no metallic path joins source and sensor.',
  'White Rabbit time transfer at the 10 ps level.',
  'A blinded analysis of the window 0 < t < r/c, binned in sidereal time.',
] as const;
