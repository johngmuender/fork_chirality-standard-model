import {
  assertFinite,
  hcEvMetre,
  hubbleConstant,
  hubbleToSi,
  lightSpeed,
  matterFraction,
} from './gum-constants.ts';

/**
 * The structured vacuum of Sec. IV: a helical condensate whose pitch is the
 * neutrino's Compton length, and the cosmological Bragg passage of Theorem 7.
 */

/** Eq. (26): p = ζ_ν hc / (m₃c²), in metres for a mass in eV. */
export function pitchFromMass(massEv: number, zeta = 1) {
  assertFinite('pitch', massEv, zeta);
  if (massEv <= 0 || zeta <= 0)
    throw new RangeError('Positive mass and factor required.');
  return (zeta * hcEvMetre) / massEv;
}

export function massFromPitch(pitch: number, zeta = 1) {
  assertFinite('mass', pitch, zeta);
  if (pitch <= 0 || zeta <= 0)
    throw new RangeError('Positive pitch and factor required.');
  return (zeta * hcEvMetre) / pitch;
}

/** The oscillation floor √Δm²₃₁ ≈ 0.0503 eV and the S1 upper edge 0.057 eV. */
export const neutrinoWindow = { floor: 0.0503, ceiling: 0.057 } as const;

/** Proposition 6: the pitch window [21.8, 24.7] μm for ζ_ν = 1. */
export function pitchWindow(
  floor = neutrinoWindow.floor,
  ceiling = neutrinoWindow.ceiling,
) {
  if (floor <= 0 || ceiling <= floor)
    throw new RangeError('An ordered positive window is required.');
  return [pitchFromMass(ceiling), pitchFromMass(floor)] as const;
}

/** Normal ordering: Σm_ν from the lightest mass and the two splittings. */
export function massSum(m1: number, dm21 = 7.5e-5, dm31 = 2.53e-3) {
  assertFinite('mass sum', m1, dm21, dm31);
  if (m1 < 0) throw new RangeError('A non-negative lightest mass is required.');
  const m2 = Math.sqrt(m1 * m1 + dm21);
  const m3 = Math.sqrt(m1 * m1 + dm31);
  return { m1, m2, m3, sum: m1 + m2 + m3 };
}

/** ΛCDM H(z) in s⁻¹. */
export function hubbleRate(
  z: number,
  h0 = hubbleConstant,
  om = matterFraction,
) {
  assertFinite('Hubble rate', z, om);
  if (z < 0 || om <= 0 || om > 1)
    throw new RangeError('Non-negative redshift and 0 < Ω_m ≤ 1 required.');
  return hubbleToSi(h0) * Math.sqrt(om * (1 + z) ** 3 + 1 - om);
}

/** Eq. (28): Π = (π²/2)(Δn/n̄)² c/(pH). */
export function passageParameter(
  dnOverN: number,
  pitch: number,
  hubble: number,
) {
  assertFinite('passage', dnOverN, pitch, hubble);
  if (pitch <= 0 || hubble <= 0)
    throw new RangeError('Positive pitch and Hubble rate required.');
  return ((Math.PI ** 2 / 2) * dnOverN ** 2 * lightSpeed) / (pitch * hubble);
}

/** Eq. (29): co-handed reflectance in the adiabatic passage. */
export function reflectance(passage: number) {
  assertFinite('reflectance', passage);
  if (passage < 0)
    throw new RangeError('A non-negative passage parameter is required.');
  return 1 - Math.exp(-passage);
}

/** Corollary 2 / Eq. (30): the transparency bound on Δn/n̄ for a maximum reflectance today. */
export function transparencyBound(
  pitch: number,
  rMax = 0.1,
  h0 = hubbleConstant,
) {
  assertFinite('transparency', pitch, rMax);
  if (pitch <= 0 || rMax <= 0 || rMax >= 1)
    throw new RangeError('Positive pitch and 0 < R < 1 required.');
  return Math.sqrt(
    ((2 * pitch * hubbleToSi(h0)) / (Math.PI ** 2 * lightSpeed)) *
      Math.log(1 / (1 - rMax)),
  );
}

export type TroughPoint = {
  lambda: number;
  resonanceRedshift: number | null;
  reflectance: number;
  intensity: number;
  polarization: number;
};

/**
 * Theorem 7(iii): the transmitted spectrum of an unpolarised source at z_s. A photon observed
 * at λ_obs crosses the co-handed stop band once if n̄p ≤ λ_obs ≤ n̄p(1 + z_s).
 */
export function troughPoint(
  lambdaObs: number,
  sourceRedshift: number,
  pitch: number,
  dnOverN: number,
  nBar = 1,
  h0 = hubbleConstant,
  om = matterFraction,
): TroughPoint {
  assertFinite('trough', lambdaObs, sourceRedshift, pitch, dnOverN, nBar);
  if (lambdaObs <= 0 || sourceRedshift < 0 || pitch <= 0 || nBar <= 0)
    throw new RangeError(
      'Positive wavelength, pitch and index, and non-negative redshift required.',
    );
  const edge = nBar * pitch;
  if (lambdaObs < edge || lambdaObs > edge * (1 + sourceRedshift))
    return {
      lambda: lambdaObs,
      resonanceRedshift: null,
      reflectance: 0,
      intensity: 1,
      polarization: 0,
    };
  const zr = lambdaObs / edge - 1;
  const r = reflectance(
    passageParameter(dnOverN, pitch, hubbleRate(zr, h0, om)),
  );
  return {
    lambda: lambdaObs,
    resonanceRedshift: zr,
    reflectance: r,
    intensity: 1 - r / 2,
    polarization: r / (2 - r),
  };
}

export function troughSpectrum(
  sourceRedshift: number,
  pitch: number,
  dnOverN: number,
  samples = 160,
  nBar = 1,
  span = 0.35,
) {
  if (!Number.isInteger(samples) || samples < 8)
    throw new RangeError('Sample count too small.');
  const edge = nBar * pitch;
  return Array.from({ length: samples + 1 }, (_, i) =>
    troughPoint(
      edge * (0.92 + (1 + sourceRedshift + span - 0.92) * (i / samples)),
      sourceRedshift,
      pitch,
      dnOverN,
      nBar,
    ),
  );
}

/** Proposition 7 / Eq. (31): the blue edge seen in direction n̂, to first order in v_M/c. */
export function edgeWavelength(
  pitch: number,
  vM: number,
  cosAngle: number,
  nBar = 1,
  c = lightSpeed,
) {
  assertFinite('edge', pitch, vM, cosAngle, nBar);
  if (Math.abs(cosAngle) > 1)
    throw new RangeError('cos of an angle is bounded by one.');
  return nBar * pitch * (1 - (vM * cosAngle) / c);
}

/** Proposition 8 / Eq. (32): the de Vries rotation rate for λ ≫ n̄p (rad m⁻¹). */
export function deVriesRotation(
  lambda: number,
  pitch: number,
  dn: number,
  nBar = 1,
) {
  assertFinite('de Vries', lambda, pitch, dn, nBar);
  const edge = nBar * pitch;
  if (lambda <= edge)
    throw new RangeError('The de Vries formula applies above the edge.');
  return (
    -((Math.PI * pitch * dn * dn) / (4 * nBar * nBar * lambda * lambda)) /
    (1 - (edge / lambda) ** 2)
  );
}

/** Proposition 9: a pitch-matched detector moving at v_∥ sees a line at v_∥/p. */
export function advectedLineFrequency(vParallel: number, pitch: number) {
  assertFinite('advected line', vParallel, pitch);
  if (pitch <= 0) throw new RangeError('A positive pitch is required.');
  return Math.abs(vParallel) / pitch;
}

/** Dzyaloshinskii's criterion: a conical texture condenses iff χ² > γΔ². */
export function condenses(chi: number, stiffness: number, gap: number) {
  assertFinite('condensation', chi, stiffness, gap);
  return chi * chi > stiffness * gap * gap;
}

/** The condensate tilt sin θ_c = √(1 − 1/𝔪) for margin 𝔪 > 1. */
export function condensateTilt(margin: number) {
  assertFinite('tilt', margin);
  if (margin <= 1)
    throw new RangeError('Condensation needs a margin above one.');
  return Math.sqrt(1 - 1 / margin);
}
