import {
  assertFinite,
  electronMassEv,
  electronVolt,
  hbar,
  hbarCEvMetre,
  hcEvMetre,
  muonMassEv,
  tauMassEv,
} from './gum-constants.ts';

/**
 * Mass, spin and the closure of ħ (Sec. VI), the two-scale electron (Sec. VII)
 * and the physical de Broglie clock with its channeling resonance.
 */

/** Lemma 4: E_rot/E_tot = j/2 for any rigid rotor satisfying both closure conditions. */
export function rotationFraction(rotorNumber: number) {
  assertFinite('rotor number', rotorNumber);
  if (rotorNumber <= 0)
    throw new RangeError('A positive rotor number is required.');
  return rotorNumber / 2;
}

/** Proposition 12: joint solvability requires 0 < j < 2a/(a + b). */
export function routhianWindow(a: number, b: number) {
  assertFinite('Derrick pair', a, b);
  if (a <= 0 || b <= 0)
    throw new RangeError('Positive Derrick exponents are required.');
  return (2 * a) / (a + b);
}

/** Theorem 14 for the (1,1) Routhian: w j(1 − j) = 1 and V² = 1/(1 − j). */
export function closureSolution(rotorNumber: number) {
  assertFinite('closure', rotorNumber);
  if (rotorNumber <= 0 || rotorNumber >= 1)
    throw new RangeError('The (1,1) closure is solvable only for 0 < j < 1.');
  return {
    w: 1 / (rotorNumber * (1 - rotorNumber)),
    dilation: 1 / Math.sqrt(1 - rotorNumber),
    rotationFraction: rotationFraction(rotorNumber),
  };
}

/** The half-integers admitted by a window (0, j_max). */
export function admittedHalfIntegers(windowTop: number) {
  assertFinite('window', windowTop);
  const result: number[] = [];
  for (let twoJ = 1; twoJ / 2 < windowTop; twoJ++) result.push(twoJ / 2);
  return result;
}

/** Eq. (49): C₆ = (64/15π) Λ m̃_V, from the Haar average of 2 sin(χ/2) over S³. */
export function bogomolnyCoefficient() {
  return 64 / (15 * Math.PI);
}

/** Numerical check of the Haar integral ∫₀^π sin(χ/2) sin²χ dχ = 16/15. */
export function haarIntegral(samples = 4000) {
  if (!Number.isInteger(samples) || samples < 10)
    throw new RangeError('More samples are required.');
  let sum = 0;
  const h = Math.PI / samples;
  for (let i = 0; i <= samples; i++) {
    const chi = i * h;
    const weight = i === 0 || i === samples ? 1 : i % 2 ? 4 : 2;
    sum += weight * Math.sin(chi / 2) * Math.sin(chi) ** 2;
  }
  return (sum * h) / 3;
}

/** Eq. (50): the compacton radius R* = (2Λ/π² m̃_V)^{1/3}. */
export function compactonRadius(lambda: number, potentialCoefficient: number) {
  assertFinite('compacton', lambda, potentialCoefficient);
  if (lambda <= 0 || potentialCoefficient <= 0)
    throw new RangeError('Positive constants required.');
  return Math.cbrt((2 * lambda) / (Math.PI ** 2 * potentialCoefficient));
}

/** The saturating hedgehog profile f₀(r) = 2 arccos(r/R*) inside the compacton, 0 outside. */
export function compactonProfile(r: number, radius: number) {
  assertFinite('profile', r, radius);
  if (r < 0 || radius <= 0)
    throw new RangeError('Non-negative r and positive radius required.');
  return r >= radius ? 0 : 2 * Math.acos(r / radius);
}

/** Eq. (58): the saturated closure number 𝔠 = 64√2/9π ≈ 3.2011 and the rigorous floor 2√2. */
export function closureNumber() {
  return {
    value: (64 * Math.SQRT2) / (9 * Math.PI),
    floor: 2 * Math.SQRT2,
    kappa: 1 / Math.SQRT2,
  };
}

/** Eq. (57): ħ = 𝔠 Λ √J. */
export function planckFromClosure(
  lambda: number,
  microInertia: number,
  c = closureNumber().value,
) {
  assertFinite('closure of ħ', lambda, microInertia, c);
  if (lambda <= 0 || microInertia <= 0)
    throw new RangeError('Positive constants required.');
  return c * lambda * Math.sqrt(microInertia);
}

/** The clock frequency ω_c = Mc²/ħ in rad s⁻¹ for a rest energy in eV. */
export function clockFrequency(restEnergyEv: number) {
  assertFinite('clock', restEnergyEv);
  if (restEnergyEv <= 0)
    throw new RangeError('A positive rest energy is required.');
  return (restEnergyEv * electronVolt) / hbar;
}

/** Eq. (62): the halo length (c_ψ/c)(ħ/Mc) κ/√(1 − κ²), in metres for a mass in eV. */
export function haloLength(
  restEnergyEv: number,
  kappa = 1 / Math.SQRT2,
  coneRatio = 1,
) {
  assertFinite('halo', restEnergyEv, kappa, coneRatio);
  if (restEnergyEv <= 0 || kappa <= 0 || kappa >= 1 || coneRatio < 1)
    throw new RangeError('Positive mass, 0 < κ < 1 and c_ψ ≥ c required.');
  return (
    (coneRatio * hbarCEvMetre * kappa) /
    (restEnergyEv * Math.sqrt(1 - kappa * kappa))
  );
}

/** The band edge ħω₀ = Mc²/κ. */
export function bandEdge(restEnergyEv: number, kappa = 1 / Math.SQRT2) {
  assertFinite('band edge', restEnergyEv, kappa);
  if (restEnergyEv <= 0 || kappa <= 0 || kappa >= 1)
    throw new RangeError('Positive mass and 0 < κ < 1 required.');
  return restEnergyEv / kappa;
}

/** Eq. (63): o-Ps → γX gives E_γ = (m_e/4)(4 − κ⁻²) at leading order. */
export function positroniumLine(
  kappa = 1 / Math.SQRT2,
  electronMass = electronMassEv,
) {
  assertFinite('positronium', kappa, electronMass);
  if (kappa <= 0 || kappa >= 1) throw new RangeError('0 < κ < 1 required.');
  if (bandEdge(electronMass, kappa) >= 2 * electronMass) return null;
  return (electronMass / 4) * (4 - 1 / (kappa * kappa));
}

/** Invert the line position: κ = [4 − 4E_γ/m_e]^{−1/2}. */
export function kappaFromLine(energyEv: number, electronMass = electronMassEv) {
  assertFinite('κ', energyEv, electronMass);
  const denominator = 4 - (4 * energyEv) / electronMass;
  if (denominator <= 1)
    throw new RangeError('The line must lie below the electron mass.');
  return 1 / Math.sqrt(denominator);
}

export const crystals = [
  { id: 'Si', name: 'Silicon', lattice: 5.431e-10 },
  { id: 'Ge', name: 'Germanium', lattice: 5.658e-10 },
  { id: 'C', name: 'Diamond', lattice: 3.567e-10 },
] as const;

export const axes = [
  {
    id: '110',
    name: '⟨110⟩',
    factor: 1 / Math.SQRT2,
    note: 'closest-packed rows, spacing a/√2',
  },
  { id: '100', name: '⟨100⟩', factor: 1, note: 'spacing a' },
  {
    id: '111',
    name: '⟨111⟩',
    factor: Math.sqrt(3),
    note: 'period a√3 with an alternating a√3/4 · 3a√3/4 basis',
  },
] as const;

export function rowSpacing(
  crystal: (typeof crystals)[number]['id'],
  axis: (typeof axes)[number]['id'],
) {
  const c = crystals.find((item) => item.id === crystal);
  const a = axes.find((item) => item.id === axis);
  if (!c || !a) throw new RangeError('Unknown crystal or axis.');
  return c.lattice * a.factor;
}

/** Eq. (60): p_res c = (Mc²)² ℓ_row / (hc) / n_h, in eV for a rest energy in eV and spacing in metres. */
export function channelingResonance(
  restEnergyEv: number,
  rowSpacingMetres: number,
  harmonic = 1,
) {
  assertFinite('channeling', restEnergyEv, rowSpacingMetres, harmonic);
  if (
    restEnergyEv <= 0 ||
    rowSpacingMetres <= 0 ||
    !Number.isInteger(harmonic) ||
    harmonic < 1
  )
    throw new RangeError(
      'Positive mass and spacing and an integer harmonic ≥ 1 are required.',
    );
  return (restEnergyEv ** 2 * rowSpacingMetres) / hcEvMetre / harmonic;
}

/** A clock locked over N rows has a fractional width Δp/p ≈ 1/N. */
export function resonanceWidth(thickness: number, rowSpacingMetres: number) {
  assertFinite('width', thickness, rowSpacingMetres);
  if (thickness <= 0 || rowSpacingMetres <= 0)
    throw new RangeError('Positive lengths required.');
  return rowSpacingMetres / thickness;
}

export const clockParticles = [
  { id: 'electron', name: 'electron or positron', mass: electronMassEv },
  { id: 'muon', name: 'muon', mass: muonMassEv },
  { id: 'tau', name: 'tau', mass: tauMassEv },
] as const;

/** Proposition 14: under a drift of the global stiffness, Δln α = −(δ_Λ + ½δ_J) while Δln μ_pe = 0. */
export function alphaMuDiscriminant(deltaLambda: number, deltaJ: number) {
  assertFinite('discriminant', deltaLambda, deltaJ);
  return { alpha: -(deltaLambda + 0.5 * deltaJ), massRatio: 0, ratio: 0 };
}
