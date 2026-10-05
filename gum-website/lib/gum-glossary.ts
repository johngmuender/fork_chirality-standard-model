export type GlossaryEntry = { id: string; term: string; meaning: string };

/** Background terms, kept within reach of every chapter. */
export const glossary: GlossaryEntry[] = [
  {
    id: 'umdeutung',
    term: 'Umdeutung',
    meaning:
      'Heisenberg’s 1925 reinterpretation of kinematics: the electron’s position is replaced by an array of transition amplitudes, and the array becomes what the theory is about. GUM executes the inverse.',
  },
  {
    id: 'material',
    term: 'material',
    meaning:
      'GUM’s sole ontological primitive, in the old sense of materia: that of which things are made. Geometry, force, space and time are response descriptions of it, not containers for it.',
  },
  {
    id: 'continuum',
    term: 'continuum description',
    meaning:
      'Level 1: the material’s coarse-grained bookkeeping as a displacement field u and an SU(2)-lifted orientation field Q̃ on a parameter space (x, t). It has the form of a chiral micropolar continuum and it is local.',
  },
  {
    id: 'cosserat',
    term: 'Cosserat continuum',
    meaning:
      'A continuum (Cosserat 1909, Eringen) whose points carry an orientation as well as a position. Its stress need not be symmetric; couple stresses balance the angular momentum.',
  },
  {
    id: 'micro-rotation',
    term: 'micro-rotation',
    meaning:
      'The orientation Q̃ ∈ SU(2) of the grains at a point, a double cover of the SO(3) orientation. In the linear theory it is a rotation vector φ.',
  },
  {
    id: 'relative-texture',
    term: 'relative texture',
    meaning:
      'P̃ = R̃[u]†Q̃: how the grains are turned relative to the lattice they sit in. It lives on S³ and is invariant under a rigid rotation of the whole.',
  },
  {
    id: 'objectivity',
    term: 'objectivity',
    meaning:
      'Flag F10′, the material’s gauge principle: the potential sector depends on orientation only through P̃ and its derivatives. Absolute orientation is redundant in the way absolute phase is redundant in electromagnetism.',
  },
  {
    id: 'locked-doublet',
    term: 'locked doublet',
    meaning:
      'The transverse branch B2± on which lattice and grains co-move exactly (ψ ≡ 0). Under the cone condition it is dispersionless at every wavelength: GUM’s photon.',
  },
  {
    id: 'cone-condition',
    term: 'cone condition',
    meaning:
      'μ/ρ₀ = γ_eff/2J ≡ c². The single constitutive relation that makes the doublet exactly lightlike. It is imported, and deriving it is closure K-16.',
  },
  {
    id: 'relative-rotation',
    term: 'relative-rotation branch',
    meaning:
      'B3±, the gapped transverse branch ω² = ω₀² + c_ψ²k² with c_ψ > c. Knots are textures of this sector.',
  },
  {
    id: 'maccullagh',
    term: 'MacCullagh aether',
    meaning:
      'The 1839 continuum storing energy in the curl of the displacement alone. It reproduces Fresnel optics and is inconsistent as a Cauchy continuum; GUM shows it is consistent as the orientation sector of a micropolar one.',
  },
  {
    id: 'velocity-gauge',
    term: 'velocity gauge',
    meaning:
      'Jackson’s gauge ∇·A + c_L⁻²∂tΦ = 0, interpolating between Lorenz (c_L = c) and Coulomb (c_L = ∞). GUM’s Gauss completion realises it as material dynamics.',
  },
  {
    id: 'gauss-completion',
    term: 'Gauss completion',
    meaning:
      'Flag F-G: the unique family of local completions of the longitudinal sector that recovers Gauss’s law. In it the fields coincide with the retarded Maxwell fields for every c_L.',
  },
  {
    id: 'defect-current',
    term: 'defect current',
    meaning:
      'j_def ≡ J_φ − j_q + ε*∂t∇Φ_c. Any completion deviates from Maxwell’s theory by the retarded field of this conserved current; under F-G it vanishes.',
  },
  {
    id: 'blue-fog',
    term: 'blue fog',
    meaning:
      'Flag F13: the vacuum’s chiral condensate, an amorphous double-twist network that is locally helical and globally statistically isotropic, named after the blue phases of liquid crystals.',
  },
  {
    id: 'pitch',
    term: 'pitch',
    meaning:
      'The period p = 2π/q of the helical condensate. Identified with the neutrino’s Compton length: p = ζ_ν hc/m₃c², giving 21.8–24.7 μm.',
  },
  {
    id: 'heliknoton',
    term: 'heliknoton',
    meaning:
      'A unit-Hopf excitation of the helix itself, a real object in chiral liquid crystals and magnets. GUM’s neutrino.',
  },
  {
    id: 'nelson',
    term: 'Nelson kinematics',
    meaning:
      'Stochastic mechanics: particles with diffusive trajectories whose osmotic energy is the Fisher-information functional. GUM grounds the noise in the material’s zero-point agitation.',
  },
  {
    id: 'wallstrom',
    term: 'Wallstrom gap',
    meaning:
      'Every hydrodynamic derivation of the Schrödinger equation needs ∮∇S·dl ∈ 2πħℤ around nodal lines and nothing enforces it. In GUM the phase is the isorotation angle of a knot, so quantisation holds by construction.',
  },
  {
    id: 'tower',
    term: 'tower',
    meaning:
      'Norsen’s hierarchy of fields on ℝ³ that replaces the wave function on ℝ³ᴺ: the conditional wave function of each knot and its derivative fields, hosted by the material and updated at c_L.',
  },
  {
    id: 'dense-storage',
    term: 'dense storage',
    meaning:
      'Definition 5: a Markovian, target-blind material hosts the register’s state as a function of its present configuration alone. Under it a mirror-circuit cliff must appear near log₂N_eff qubits.',
  },
  {
    id: 'mirror-circuit',
    term: 'mirror circuit',
    meaning:
      'Apply a scrambling unitary U and then U†, and measure the probability of returning to the initial state. The ideal answer is known without classical simulation.',
  },
  {
    id: 'cl-causal',
    term: 'c_L-causal model',
    meaning:
      'A model in which measurement influences propagate at speed c_L in the material frame. Bancal–Barnea configurations force such a model to signal superluminally or to depart from quantum correlations.',
  },
  {
    id: 'knot',
    term: 'knot',
    meaning:
      'A localised texture of P̃ with integer degree K, isorotating at a clock frequency inside the gap. GUM’s particle.',
  },
  {
    id: 'isorotation',
    term: 'isorotation',
    meaning:
      'The internal rotation P̃(t) = e^{iωtσ₃/2} p̃ e^{−iωtσ₃/2}. One mechanism supplies the de Broglie clock, spin, the gyrovector and the statistics sign: a full turn gives −1, and the identity returns only at 4π.',
  },
  {
    id: 'bogomolny',
    term: 'Bogomolny bound',
    meaning:
      'E₆₊₀ ≥ C₆|K| with C₆ = (64/15π)Λm̃_V at c₂ = 0, saturated by the compacton; masses are nearly additive and knot matter is dust.',
  },
  {
    id: 'compacton',
    term: 'compacton',
    meaning:
      'The saturating hedgehog f₀(r) = 2 arccos(r/R*) with R* = (2Λ/π²m̃_V)^{1/3}: a texture of strictly finite support.',
  },
  {
    id: 'de-broglie-clock',
    term: 'de Broglie clock',
    meaning:
      'The internal frequency Mc²/ħ read as a physical rotation. Taken literally it predicts a channeling resonance and an α-drift without μ-drift.',
  },
  {
    id: 'closure',
    term: 'closure of ħ',
    meaning:
      'Two conditions, L = jħ and E = ħω, close the isorotating knot with the same ħ. The result ħ = 𝔠Λ√J fixes one relation among three imports; the killable number is 𝔠.',
  },
  {
    id: 'halo',
    term: 'halo',
    meaning:
      'The evanescent relative-rotation field driven by the isorotation outside the core, decaying over (c_ψ/c)ħ/Mc. The frustration integrals of the flavour sector are halo integrals.',
  },
  {
    id: 'band-edge',
    term: 'band edge',
    meaning:
      'ħω₀ = Mc²/κ, which is √2Mc² for κ = 1/√2: 722.7 keV for the electron. Whether a discrete level exists there is closure K-19.',
  },
  {
    id: 'frustration-class',
    term: 'frustration class',
    meaning:
      'The relative-twist integer 𝗉 that classifies a knot’s frame-matching against the helical vacuum. Classes 0, 1, 2 are τ, μ, e; class 3 cannot close.',
  },
  {
    id: 'relaxation-family',
    term: 'relaxation family',
    meaning:
      'ρ_DE ∝ H^{2(1−n)}: dark energy as the lag of a soft mode behind cosmic expansion. It coincides with the Dvali–Turner family and has w_a ≥ 0 for every member.',
  },
  {
    id: 'handedness-bit',
    term: 'handedness bit',
    meaning:
      'The sign s = ±1 of the condensed chiral sector. GUM predicts that weak chirality, the sign of δ_CP and, through K-8, the birefringence sign are all fixed by it.',
  },
  {
    id: 'stake',
    term: 'stake',
    meaning:
      'A pre-registered observation that would kill a claim. GUM’s ledger has thirty.',
  },
  {
    id: 'posed-closure',
    term: 'posed closure',
    meaning:
      'A computation with named deliverables and a signed kill. There are twenty-six.',
  },
  {
    id: 'inverse-kill',
    term: 'inverse kill',
    meaning:
      'A running precision test that GUM must survive indefinitely: photon mass, equivalence-principle violation, ρ ≠ 1 and the rest of Stake S7.',
  },
  {
    id: 'cross-lock',
    term: 'cross-lock',
    meaning:
      'A load-bearing weld between sectors that forbids local repairs: one handedness bit, one halo, one censor, one invariance, one soft coordinate, one longitudinal speed, one pitch.',
  },
  {
    id: 'landing',
    term: 'landing versus test',
    meaning:
      'Definition 10: an agreement is a test if the theory half-width is within three experimental uncertainties, a landing if it is ten times larger. Landings are reported as “consistent within ±δ”, never as a pull.',
  },
  {
    id: 'beable',
    term: 'beable',
    meaning:
      'Bell’s word for what a theory says exists, as opposed to what it says is observed. GUM’s local beables are the material’s fields; the tower is Norsen’s answer to Bell.',
  },
];

export function glossaryEntry(id: string) {
  const entry = glossary.find((item) => item.id === id);
  if (!entry) throw new RangeError('Unknown glossary entry: ' + id);
  return entry;
}
