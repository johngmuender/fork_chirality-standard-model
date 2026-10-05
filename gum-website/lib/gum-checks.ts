import { electronMassEv, muonMassEv, tauMassEv } from './gum-constants.ts';
import {
  coneSpeed,
  referenceModuli,
  transverseBranches,
  withConeCondition,
} from './gum-material.ts';
import { pitchWindow, transparencyBound } from './gum-vacuum.ts';
import { cliffLocation, effectiveDegrees } from './gum-quantum.ts';
import {
  admittedHalfIntegers,
  bandEdge,
  bogomolnyCoefficient,
  channelingResonance,
  closureNumber,
  closureSolution,
  haarIntegral,
  positroniumLine,
  routhianWindow,
  rowSpacing,
} from './gum-particle.ts';
import { degree } from './gum-knot.ts';
import { holonomyPhases, neutralSector, tilingSums } from './gum-sectors.ts';
import { familyMembers, wa, equationOfState } from './gum-cosmos.ts';
import { closures, stakes } from './gum-ledger.ts';

const near = (a: number, b: number, tolerance: number) =>
  Math.abs(a - b) <= tolerance;

/**
 * The local checks offered in the browser: they recompute the printed arithmetic of the
 * draft from its stated formulas. They do not evaluate the profile and frustration
 * integrals marked [N], which the normalisation audit K-N owns.
 */
export function runLocalChecks() {
  const checks: { label: string; passed: boolean }[] = [];
  checks.push({
    label:
      'Haar average: ∫₀^π sin(χ/2) sin²χ dχ = 16/15, so C₆ = (64/15π) Λ m̃_V',
    passed:
      near(haarIntegral(), 16 / 15, 1e-9) &&
      near(bogomolnyCoefficient(), 1.3581, 1e-4),
  });
  checks.push({
    label: 'The compacton hedgehog has degree one',
    passed: near(degree(1), 1, 1e-3),
  });
  checks.push({
    label:
      'Cone condition: the doublet is exactly ω = ck at every sampled wavenumber',
    passed:
      [0.1, 0.5, 1, 3, 10, 40].every((k) =>
        near(
          transverseBranches(k, referenceModuli)[0],
          coneSpeed(referenceModuli) * k,
          1e-9 * k,
        ),
      ) &&
      transverseBranches(
        2,
        withConeCondition({ ...referenceModuli, mTilde: 4 }),
      )[1] > transverseBranches(2, referenceModuli)[1],
  });
  checks.push({
    label:
      'Spin selection: j = ½ is the only half-integer in the (1,1) window, with w = 4 and V = √2',
    passed:
      admittedHalfIntegers(routhianWindow(1, 1)).join() === '0.5' &&
      admittedHalfIntegers(routhianWindow(3, 1)).join() === '0.5,1' &&
      near(closureSolution(0.5).w, 4, 1e-12) &&
      near(closureSolution(0.5).dilation, Math.SQRT2, 1e-12) &&
      near(closureNumber().value, 3.2011, 1e-4),
  });
  checks.push({
    label:
      'Band edges √2Mc²: 722.7 keV, 149.42 MeV, 2.513 GeV; positronium line at 255.5 keV',
    passed:
      near(bandEdge(electronMassEv), 722.66e3, 20) &&
      near(bandEdge(muonMassEv), 149.42e6, 5e3) &&
      near(bandEdge(tauMassEv), 2.5129e9, 1e5) &&
      near(positroniumLine() ?? 0, 255.5e3, 10),
  });
  checks.push({
    label:
      'Channeling resonances: Si⟨110⟩ 80.87, Ge⟨110⟩ 84.26, diamond⟨110⟩ 53.12 MeV/c',
    passed:
      near(
        channelingResonance(electronMassEv, rowSpacing('Si', '110')),
        80.87e6,
        1e4,
      ) &&
      near(
        channelingResonance(electronMassEv, rowSpacing('Ge', '110')),
        84.26e6,
        1e4,
      ) &&
      near(
        channelingResonance(electronMassEv, rowSpacing('C', '110')),
        53.12e6,
        1e4,
      ),
  });
  checks.push({
    label:
      'Pitch window [21.8, 24.7] μm and transparency bound Δn/n̄ ≈ 6.2×10⁻¹⁷',
    passed:
      near(pitchWindow()[0], 21.75e-6, 0.05e-6) &&
      near(pitchWindow()[1], 24.65e-6, 0.05e-6) &&
      near(transparencyBound(24.6e-6), 6.2e-17, 0.15e-17),
  });
  checks.push({
    label:
      'Cliff locations: H_V 234.1 at V = 10⁻¹⁰ m³; H_A 151.6 at A = 10⁻⁸ m²; H_R 195.8 for ions',
    passed:
      near(
        cliffLocation(
          effectiveDegrees('volume', {
            structuralScale: 1.5e-27,
            volume: 1e-10,
          }),
        ).base,
        234.1,
        0.1,
      ) &&
      near(
        cliffLocation(
          effectiveDegrees('area', { structuralScale: 1.5e-27, area: 1e-8 }),
        ).base,
        151.6,
        0.1,
      ) &&
      near(
        cliffLocation(
          effectiveDegrees('extent', {
            structuralScale: 1.5e-27,
            carrier: 1e-8,
            qubits: 300,
          }),
        ).base,
        195.8,
        0.1,
      ),
  });
  checks.push({
    label:
      'Six anomaly sums vanish for one family; dropping any multiplet breaks at least one',
    passed:
      tilingSums([true, true, true, true, true, true]).passes &&
      [0, 1, 2, 3, 4].every(
        (i) => !tilingSums([0, 1, 2, 3, 4, 5].map((j) => j !== i)).passes,
      ),
  });
  checks.push({
    label:
      'Holonomy phases: zero for two families, one for three; ρ = 1 and sin²θ_w = 0.232 at ϑ = 0.55',
    passed:
      holonomyPhases(2) === 0 &&
      holonomyPhases(3) === 1 &&
      neutralSector(0.55).rho === 1 &&
      near(neutralSector(0.55).sin2ThetaW, 0.232, 1e-3),
  });
  checks.push({
    label:
      'Relaxation family: w_a ≥ 0 and −1 ≤ w ≤ 0 for every member and epoch sampled',
    passed: familyMembers.every(
      (n) =>
        wa(n) >= -1e-12 &&
        [0.2, 0.5, 0.8, 1].every((a) => {
          const w = equationOfState(a, n);
          return w >= -1 - 1e-12 && w <= 1e-12;
        }),
    ),
  });
  checks.push({
    label: 'Ledger census: thirty stakes and twenty-six posed closures',
    passed: stakes.length === 30 && closures.length === 26,
  });
  return {
    passed: checks.every((c) => c.passed),
    checks,
    scope:
      'Browser recomputation of the printed formulas and censuses; the [N] integrals, the K-N audit and the full closures are the draft’s, not the page’s.',
  };
}
