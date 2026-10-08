import { assertFinite } from './gum-constants.ts';

/**
 * The quantum description of Sec. V: the tower of conditional fields, dimension
 * counting, dense storage and the mirror-circuit cliff.
 */

export type Hosting = 'volume' | 'area' | 'extent';

export const hostingHypotheses = [
  {
    id: 'volume' as Hosting,
    label: 'H_V · bulk hosting',
    formula: 'N_eff = V / ℓ_s³',
    knob: 'register volume V',
    shift: '+10 qubits per 10³ × V',
    text: 'Tower fields are bulk fields of the material: GUM’s default.',
  },
  {
    id: 'area' as Hosting,
    label: 'H_A · cut hosting',
    formula: 'N_eff = A / ℓ_s²',
    knob: 'minimal cut area A',
    shift: '+10 qubits per 10³ × A',
    text: 'Only the structural cells on the minimal cut through the register carry the state.',
  },
  {
    id: 'extent' as Hosting,
    label: 'H_R · extent hosting',
    formula: 'N_eff = n_q (ℓ_q / ℓ_s)³',
    knob: 'carrier size ℓ_q',
    shift: '+10 qubits per 10 × ℓ_q',
    text: 'Each qubit’s spatial carrier hosts its own share: ions and atoms cliff before transmons.',
  },
] as const;

export type HostingParameters = {
  structuralScale: number;
  volume?: number;
  area?: number;
  carrier?: number;
  qubits?: number;
};

/** Definition 6: the effective number of classical degrees of freedom available to a register. */
export function effectiveDegrees(hypothesis: Hosting, p: HostingParameters) {
  assertFinite('hosting', p.structuralScale);
  if (p.structuralScale <= 0)
    throw new RangeError('A positive structural scale is required.');
  const ls = p.structuralScale;
  if (hypothesis === 'volume') {
    if (p.volume === undefined || !(p.volume > 0))
      throw new RangeError('A positive volume is required.');
    return p.volume / ls ** 3;
  }
  if (hypothesis === 'area') {
    if (p.area === undefined || !(p.area > 0))
      throw new RangeError('A positive cut area is required.');
    return p.area / ls ** 2;
  }
  if (
    p.carrier === undefined ||
    !(p.carrier > 0) ||
    p.qubits === undefined ||
    !(p.qubits > 0)
  )
    throw new RangeError(
      'A positive carrier size and qubit count are required.',
    );
  return p.qubits * (p.carrier / ls) ** 3;
}

/** Eq. (42): the cliff sits at log₂N_eff plus 0 ≲ δn ≲ log₂n_q + O(1). */
export function cliffLocation(effective: number, qubits = 300) {
  assertFinite('cliff', effective, qubits);
  if (effective <= 0 || qubits <= 0)
    throw new RangeError('Positive counts required.');
  const base = Math.log2(effective);
  return { base, upper: base + Math.log2(qubits) + 1 };
}

/** Corollary 5: normalised return probability 𝒫 ≲ min{1, N_eff n_q / 2^{n_q}} (log factors dropped). */
export function returnProbability(qubits: number, effective: number) {
  assertFinite('return probability', qubits, effective);
  if (qubits <= 0 || effective <= 0)
    throw new RangeError('Positive counts required.');
  const exponent = Math.min(
    0,
    Math.log2(effective) + Math.log2(qubits) - qubits,
  );
  return 2 ** exponent;
}

/** Under Schmidt hosting the cliff moves to 2 log₂N_eff. */
export function schmidtCliff(effective: number) {
  if (!(effective > 0)) throw new RangeError('A positive count is required.');
  return 2 * Math.log2(effective);
}

/** Two-qubit error budget for F_noise ≥ e⁻⁷ at register size n_q. */
export function gateBudget(
  qubits: number,
  layout: 'all-to-all' | 'nearest-neighbour',
) {
  assertFinite('gate budget', qubits);
  if (qubits < 2) throw new RangeError('At least two qubits are required.');
  const gates =
    layout === 'all-to-all' ? qubits * Math.log2(qubits) : qubits ** 1.5;
  return { gates, error: 7 / gates };
}

/** Shots to measure P_ret to a relative precision at the F_noise floor. */
export function shotsRequired(precision = 0.03, floor = Math.exp(-7)) {
  assertFinite('shots', precision, floor);
  if (precision <= 0 || floor <= 0)
    throw new RangeError('Positive precision and floor required.');
  return 1 / (precision ** 2 * floor);
}

/** Theorem 8: the best rank-χ fidelity is the sum of the χ largest Schmidt weights. */
export function truncatedFidelity(weights: number[], rank: number) {
  if (!Number.isInteger(rank) || rank < 0)
    throw new RangeError('A non-negative integer rank is required.');
  const sorted = [...weights].sort((a, b) => b - a);
  return sorted.slice(0, rank).reduce((sum, w) => sum + w, 0);
}

/** Corollary 3: for a Haar-random state split m|m, F_χ ≤ 4χ/2^m. */
export function haarFidelityBound(rank: number, halfQubits: number) {
  assertFinite('Haar bound', rank, halfQubits);
  return Math.min(1, (4 * rank) / 2 ** halfQubits);
}

/** The capacity floor set by a successful random-circuit experiment, χ_max ≳ F_trunc 2^m / 4. */
export function capacityFloor(halfQubits = 26, truncationFidelity = 0.8) {
  assertFinite('capacity floor', halfQubits, truncationFidelity);
  return (truncationFidelity * 2 ** halfQubits) / 4;
}

/** Lemma 3: a depth-d tower for N knots in three dimensions has Schmidt rank at most C(3(N−1)+d, d). */
export function towerSchmidtRank(depth: number, knots: number) {
  if (
    !Number.isInteger(depth) ||
    depth < 0 ||
    !Number.isInteger(knots) ||
    knots < 1
  )
    throw new RangeError('Integer depth ≥ 0 and knots ≥ 1 are required.');
  const n = 3 * (knots - 1) + depth;
  let result = 1;
  for (let i = 1; i <= depth; i++) result = (result * (n - depth + i)) / i;
  return Math.round(result);
}

/** Theorem 9: the register size a classical material with N_eff degrees of freedom can represent. */
export function representableQubits(effective: number) {
  if (!(effective > 0)) throw new RangeError('A positive count is required.');
  return Math.log2(effective);
}

export const towerDefinition = {
  conditional: 'ψₖ(x, t) = Ψ(X₁, …, x, …, X_N, t)',
  tower: 'F⁽ᵅ⁾ₖ(x, t) = (∂ᵅ_{x_{j≠k}} Ψ)|_{x_j = X_j(t)},  |α| = 0, 1, 2, …',
  note: 'Closes at order zero for product states and at infinite order in general. Hosted by the material’s fields and updated, in the material frame, at the speed c_L.',
} as const;
