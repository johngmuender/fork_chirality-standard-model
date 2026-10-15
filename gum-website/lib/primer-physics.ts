import {
  assertFinite,
  electronVolt,
  hbar,
  lightSpeed,
  planck,
} from './gum-constants.ts';

/**
 * The arithmetic the primer asks its readers to do by hand, as pure functions
 * with the primer's own numbers as the checks. Everything here is either
 * textbook physics (the primer's ⬛) or a GUM identity the primer derives.
 */

/** 1.2: a swimmer of speed `swim` in a current, over a leg each way. Cross-stream always wins. */
export function riverRace(swim: number, current: number, leg = 100) {
  assertFinite('river race', swim, current, leg);
  if (swim <= 0 || leg <= 0 || current < 0)
    throw new RangeError('Positive speeds and leg required.');
  if (current >= swim)
    throw new RangeError(
      'The swimmer cannot make headway against this current.',
    );
  const cross = (2 * leg) / Math.sqrt(swim * swim - current * current);
  const along = leg / (swim - current) + leg / (swim + current);
  return { cross, along, ratio: along / cross };
}
/** Problem 1.2: the current at which the along-stream trip takes twice as long as crossing. */
export function riverDoublingCurrent(swim: number) {
  assertFinite('river', swim);
  if (swim <= 0) throw new RangeError('A positive swimming speed is required.');
  return (swim * Math.sqrt(3)) / 2;
}

/** 2.1: the sound-in-steel move, v = √(stiffness/density). */
export function soundSpeed(stiffness: number, density: number) {
  assertFinite('sound speed', stiffness, density);
  if (stiffness <= 0 || density <= 0)
    throw new RangeError('Positive stiffness and density required.');
  return Math.sqrt(stiffness / density);
}

/** 2.2: the diatomic necklace, lattice constant one, wavenumber k ∈ [0, π]. */
export function diatomicChain(
  k: number,
  lightMass: number,
  heavyMass: number,
  spring = 1,
) {
  assertFinite('chain', k, lightMass, heavyMass, spring);
  if (lightMass <= 0 || heavyMass <= 0 || spring <= 0)
    throw new RangeError('Positive masses and spring constant required.');
  if (k < 0 || k > Math.PI)
    throw new RangeError('k lies in the first zone [0, π].');
  const sum = 1 / lightMass + 1 / heavyMass;
  const root = Math.sqrt(
    sum * sum - (4 * Math.sin(k / 2) ** 2) / (lightMass * heavyMass),
  );
  return {
    acoustic: Math.sqrt(spring * (sum - root)),
    optical: Math.sqrt(spring * (sum + root)),
  };
}
/** The necklace's bands: the acoustic top, the gap, and the optical edge ω₀. */
export function chainBands(lightMass: number, heavyMass: number, spring = 1) {
  assertFinite('bands', lightMass, heavyMass, spring);
  if (lightMass <= 0 || heavyMass <= 0 || spring <= 0)
    throw new RangeError('Positive masses and spring constant required.');
  const [light, heavy] = [
    Math.min(lightMass, heavyMass),
    Math.max(lightMass, heavyMass),
  ];
  return {
    acousticTop: Math.sqrt((2 * spring) / heavy),
    edge: Math.sqrt((2 * spring) / light),
    opticalTop: Math.sqrt(2 * spring * (1 / light + 1 / heavy)),
  };
}
/** Driven below the edge at ω = κω₀, a chain carries a skin that decays over this length. */
export function skinLength(cPsi: number, omega0: number, kappa: number) {
  assertFinite('skin', cPsi, omega0, kappa);
  if (cPsi <= 0 || omega0 <= 0)
    throw new RangeError('Positive speed and gap required.');
  if (kappa < 0 || kappa >= 1) throw new RangeError('κ lies in [0, 1).');
  return cPsi / (omega0 * Math.sqrt(1 - kappa * kappa));
}
/** The skin's dimensionless amplitude at distance r for a driving ratio κ. */
export function skinProfile(
  r: number,
  cPsi: number,
  omega0: number,
  kappa: number,
) {
  if (!(r >= 0)) throw new RangeError('A non-negative distance is required.');
  return Math.exp(-r / skinLength(cPsi, omega0, kappa));
}

/** 2.3: E² = (mc²)² + (pc)², energies and pc in eV. */
export function dispersionEnergy(pcEv: number, massEv: number) {
  assertFinite('dispersion', pcEv, massEv);
  if (massEv < 0) throw new RangeError('A non-negative mass is required.');
  return Math.sqrt(massEv * massEv + pcEv * pcEv);
}
/** Problem 2.4: on ω² = ω₀² + c²k², group times phase velocity is c². */
export function groupPhase(k: number, omega0: number, c = lightSpeed) {
  assertFinite('group phase', k, omega0, c);
  if (k <= 0 || omega0 < 0 || c <= 0)
    throw new RangeError('Positive k and c required.');
  const omega = Math.sqrt(omega0 * omega0 + c * c * k * k);
  const group = (c * c * k) / omega;
  const phase = omega / k;
  return { omega, group, phase, product: group * phase };
}

/** 6.1: a disc with a wedge of `wedgeDegrees` removed cones up to half-angle θ with sin θ = 1 − wedge/360. */
export function coneHalfAngle(wedgeDegrees: number) {
  assertFinite('cone', wedgeDegrees);
  if (wedgeDegrees <= 0 || wedgeDegrees >= 360)
    throw new RangeError('A wedge strictly between 0° and 360° is required.');
  return (Math.asin(1 - wedgeDegrees / 360) * 180) / Math.PI;
}
/** 6.2: a Foucault pendulum turns by 360° sin(latitude) per sidereal day. */
export function foucaultRotation(latitudeDegrees: number) {
  assertFinite('Foucault', latitudeDegrees);
  if (Math.abs(latitudeDegrees) > 90)
    throw new RangeError('Latitude lies in [−90°, 90°].');
  return 360 * Math.sin((latitudeDegrees * Math.PI) / 180);
}

/** 6.4: the free energy of a tilt θ along a helix of wavenumber q (paper Eq. 25). */
export function helixFreeEnergy(
  theta: number,
  q: number,
  chi: number,
  gamma: number,
  delta: number,
) {
  assertFinite('helix', theta, q, chi, gamma, delta);
  if (gamma <= 0)
    throw new RangeError('A positive twist stiffness is required.');
  return (
    Math.sin(theta) ** 2 * (-chi * q + 0.5 * gamma * q * q) +
    0.5 * delta * delta * theta * theta
  );
}
/** Line 1: the optimal wavenumber q⋆ = χ/γ. */
export function helixWavenumber(chi: number, gamma: number) {
  assertFinite('helix', chi, gamma);
  if (gamma <= 0)
    throw new RangeError('A positive twist stiffness is required.');
  return chi / gamma;
}
/** Lines 2–4: the small-angle coefficient ½(Δ² − χ²/γ) and the margin χ²/(γΔ²); the vacuum twists iff the margin exceeds one. */
export function helixCriterion(chi: number, gamma: number, delta: number) {
  assertFinite('helix', chi, gamma, delta);
  if (gamma <= 0 || delta <= 0)
    throw new RangeError('Positive stiffness and gap required.');
  const margin = (chi * chi) / (gamma * delta * delta);
  return {
    margin,
    coefficient: 0.5 * (delta * delta - (chi * chi) / gamma),
    condenses: margin > 1,
    tilt: margin > 1 ? Math.sqrt(1 - 1 / margin) : 0,
  };
}
/** 6.8: the resonant path (Δn/n̄) c/H that redshift allows. */
export function resonantPath(dnOverN: number, cOverH: number) {
  assertFinite('resonant path', dnOverN, cOverH);
  if (dnOverN < 0 || cOverH <= 0)
    throw new RangeError('Non-negative Δn and positive c/H required.');
  return dnOverN * cOverH;
}

/** 7.1: the quantum potential of a Gaussian packet of width σ, in joules for SI inputs. */
export function quantumPotentialGaussian(
  x: number,
  sigma: number,
  mass: number,
  h = hbar,
) {
  assertFinite('quantum potential', x, sigma, mass, h);
  if (sigma <= 0 || mass <= 0)
    throw new RangeError('Positive width and mass required.');
  return (
    ((h * h) / (2 * mass)) *
    (1 / (2 * sigma * sigma) - (x * x) / (4 * sigma ** 4))
  );
}
/** 7.2: the Fisher penalty of that packet, ħ²/(8Mσ²): it rises as the crowd is squeezed. */
export function fisherPenalty(sigma: number, mass: number, h = hbar) {
  assertFinite('Fisher', sigma, mass, h);
  if (sigma <= 0 || mass <= 0)
    throw new RangeError('Positive width and mass required.');
  return (h * h) / (8 * mass * sigma * sigma);
}
/** 7.5: a depth-d tower for two particles in one dimension holds d + 1 product terms. */
export function towerTermsOneDimension(depth: number) {
  if (!Number.isInteger(depth) || depth < 0)
    throw new RangeError('A non-negative integer depth is required.');
  return depth + 1;
}

/** 8.1: knobs in a register of volume V with cells of size ℓ_s, and their log₂. */
export function knobCount(volume: number, structuralScale: number) {
  assertFinite('knobs', volume, structuralScale);
  if (volume <= 0 || structuralScale <= 0)
    throw new RangeError('Positive volume and scale required.');
  const knobs = volume / structuralScale ** 3;
  return { knobs, bits: Math.log2(knobs) };
}
/** 8.1: an n-qubit state needs 2ⁿ complex amplitudes, 2ⁿ⁺¹ real numbers. */
export function amplitudeCount(qubits: number) {
  if (!Number.isInteger(qubits) || qubits < 1)
    throw new RangeError('A positive integer qubit count is required.');
  return { complex: 2 ** qubits, real: 2 ** (qubits + 1) };
}
/** 8.6: the sidereal swing of a lab arrival time over a baseline r, 2 r v_M / c². */
export function siderealSwing(baseline: number, vM: number, c = lightSpeed) {
  assertFinite('swing', baseline, vM, c);
  if (baseline < 0 || vM < 0 || c <= 0)
    throw new RangeError('Non-negative baseline and speed required.');
  return (2 * baseline * vM) / (c * c);
}
/** 8.7: ℓ_s = ħc/(√|ξ| E_QG,2), with the energy in GeV. */
export function structuralScaleBound(quantumGravityScaleGeV: number, xi = 1) {
  assertFinite('structural scale', quantumGravityScaleGeV, xi);
  if (quantumGravityScaleGeV <= 0 || xi <= 0)
    throw new RangeError('Positive scale and ξ required.');
  const hbarcGeVm = (hbar * lightSpeed) / (electronVolt * 1e9);
  return hbarcGeVm / (Math.sqrt(xi) * quantumGravityScaleGeV);
}

/** 9.2: Derrick's scaling, E(λ) = λE₂ + λ³E₀ + E₄/λ + E₆/λ³. */
export function derrickEnergy(
  lambda: number,
  terms: { e2: number; e0: number; e4: number; e6: number },
) {
  assertFinite('Derrick', lambda, terms.e2, terms.e0, terms.e4, terms.e6);
  if (lambda <= 0) throw new RangeError('A positive scale factor is required.');
  return (
    lambda * terms.e2 +
    lambda ** 3 * terms.e0 +
    terms.e4 / lambda +
    terms.e6 / lambda ** 3
  );
}
/** The stable size, if the chosen terms give one: a minimum of E(λ) away from λ → 0. */
export function derrickMinimum(terms: {
  e2: number;
  e0: number;
  e4: number;
  e6: number;
}) {
  const stabilised = terms.e4 > 0 || terms.e6 > 0;
  const expanding = terms.e2 > 0 || terms.e0 > 0;
  if (!stabilised || !expanding) return null;
  let best = 0.05,
    bestEnergy = Infinity;
  for (let i = 0; i <= 2000; i++) {
    const lambda = 0.05 * 10 ** ((i / 2000) * 3);
    const energy = derrickEnergy(lambda, terms);
    if (energy < bestEnergy) {
      bestEnergy = energy;
      best = lambda;
    }
  }
  return { lambda: best, energy: bestEnergy };
}
/** 9.1: the winding of θ(x) = 2π tanh(x/a) from −∞ to +∞. */
export function tanhWinding(amplitudeTurns = 1) {
  assertFinite('winding', amplitudeTurns);
  return 2 * amplitudeTurns;
}
/** 9.1: the combed field v = ẑ × r̂ on the unit sphere, which vanishes at both poles. */
export function hairyBallField(theta: number, phi: number) {
  assertFinite('hairy ball', theta, phi);
  return [
    -Math.sin(theta) * Math.sin(phi),
    Math.sin(theta) * Math.cos(phi),
    0,
  ] as [number, number, number];
}

/** 10.5: the locking stiffness that puts the clock at a given κ, from κ² = 2m̃_V²/(16µ_c + m̃_V²). */
export function lockingStiffnessForKappa(kappa: number, potentialStrength = 1) {
  assertFinite('locking', kappa, potentialStrength);
  if (kappa <= 0 || kappa > 1) throw new RangeError('κ lies in (0, 1].');
  return (potentialStrength ** 2 * (2 / (kappa * kappa) - 1)) / 16;
}
export function kappaFromLocking(
  lockingStiffness: number,
  potentialStrength = 1,
) {
  assertFinite('locking', lockingStiffness, potentialStrength);
  if (lockingStiffness < 0 || potentialStrength <= 0)
    throw new RangeError('Non-negative µ_c and positive m̃_V required.');
  const v2 = potentialStrength ** 2;
  return Math.sqrt((2 * v2) / (16 * lockingStiffness + v2));
}
/** 10.6: a drift of α moves the proton-to-electron mass ratio by R times as much; GUM says R = 0, unification 30–40. */
export function massRatioDrift(dlnAlpha: number, ratio: number) {
  assertFinite('drift', dlnAlpha, ratio);
  return ratio * dlnAlpha;
}

/** 11.2: a compact texture of radius R (fm) vibrates near ħc/R, in MeV. */
export function shapeModeEnergyMeV(radiusFm: number) {
  assertFinite('shape mode', radiusFm);
  if (radiusFm <= 0) throw new RangeError('A positive radius is required.');
  return 197.327 / radiusFm;
}
/** 11.2: soft reshapings of a nearly-BPS texture sit near √ε × the band edge. */
export function softModeEnergy(epsilon: number, bandEdgeEv: number) {
  assertFinite('soft mode', epsilon, bandEdgeEv);
  if (epsilon < 0 || bandEdgeEv <= 0)
    throw new RangeError('Non-negative ε and positive edge required.');
  return Math.sqrt(epsilon) * bandEdgeEv;
}
/** 11.5: a particle of mass M at rest decays to a photon plus mass m_X: E_γ = (M² − m_X²)/(2M), masses as energies. */
export function twoBodyPhotonEnergy(parentEv: number, daughterEv: number) {
  assertFinite('two-body', parentEv, daughterEv);
  if (parentEv <= 0 || daughterEv < 0)
    throw new RangeError(
      'A positive parent and non-negative daughter mass are required.',
    );
  if (daughterEv >= parentEv) return null;
  return (parentEv * parentEv - daughterEv * daughterEv) / (2 * parentEv);
}

/** 12.6: the logarithmic bridge ln(1/(qλ_halo)) = (A − A_halo)/κ_far. */
export function neutrinoBridge(A: number, aHalo: number, kappaFar: number) {
  assertFinite('bridge', A, aHalo, kappaFar);
  if (kappaFar <= 0)
    throw new RangeError('A positive far-field coefficient is required.');
  return (A - aHalo) / kappaFar;
}
/** 12.7: the mass the bridge yields with a given yardstick: m₃c² = m_τc² e^{−L} × (yardstick factor). */
export function neutrinoMassFromBridge(
  logValue: number,
  tauMassEv: number,
  yardstickFactor = 1,
) {
  assertFinite('bridge mass', logValue, tauMassEv, yardstickFactor);
  if (tauMassEv <= 0 || yardstickFactor <= 0)
    throw new RangeError('Positive mass and factor required.');
  return tauMassEv * Math.exp(-logValue) * yardstickFactor;
}
/** The one-sigma band from a ±δ spread in the logarithm. */
export function bridgeBand(massEv: number, logSpread = 0.9) {
  assertFinite('band', massEv, logSpread);
  if (massEv <= 0 || logSpread < 0)
    throw new RangeError('Positive mass and spread required.');
  return [massEv * Math.exp(-logSpread), massEv * Math.exp(logSpread)] as [
    number,
    number,
  ];
}

/** 13.5: a string of tension σ (GeV²) in GeV per fm, newtons and tonnes-force. */
export function stringTension(sigmaGeV2: number) {
  assertFinite('tension', sigmaGeV2);
  if (sigmaGeV2 <= 0) throw new RangeError('A positive tension is required.');
  const geVPerFm = sigmaGeV2 / 0.197327;
  const newtons = (geVPerFm * 1e9 * electronVolt) / 1e-15;
  return { geVPerFm, newtons, tonnesForce: newtons / 9806.65 };
}
/** 13.4: the weak coupling from G_F and M_W, and α_w = g²/4π. */
export function weakStrength(fermiConstant = 1.166e-5, wMass = 80.4) {
  assertFinite('weak strength', fermiConstant, wMass);
  if (fermiConstant <= 0 || wMass <= 0)
    throw new RangeError('Positive constants required.');
  const g = Math.sqrt((8 * wMass * wMass * fermiConstant) / Math.SQRT2);
  return { g, alphaW: (g * g) / (4 * Math.PI) };
}

/** 14.1: the zero-point ledger ħc/L⁴ in J/m³, and its distance from the observed 6×10⁻¹⁰. */
export function zeroPointDensity(
  cutoffLength: number,
  hbarc = hbar * lightSpeed,
) {
  assertFinite('zero point', cutoffLength, hbarc);
  if (cutoffLength <= 0)
    throw new RangeError('A positive cutoff length is required.');
  return hbarc / cutoffLength ** 4;
}
export function ordersOfMagnitude(a: number, b: number) {
  assertFinite('orders', a, b);
  if (a <= 0 || b <= 0) throw new RangeError('Positive quantities required.');
  return Math.log10(a / b);
}

/** 16.2: Definition 10. A test if δ_th ≲ 3δ_exp, a landing if δ_th ≳ 10δ_exp. */
export function landingVerdict(
  theoryHalfWidth: number,
  experimentalUncertainty: number,
) {
  assertFinite('landing', theoryHalfWidth, experimentalUncertainty);
  if (theoryHalfWidth < 0 || experimentalUncertainty <= 0)
    throw new RangeError(
      'Non-negative theory width and positive experimental uncertainty required.',
    );
  const ratio = theoryHalfWidth / experimentalUncertainty;
  return {
    ratio,
    verdict: ratio <= 3 ? 'test' : ratio >= 10 ? 'landing' : 'in between',
  } as const;
}
/** 15.1: a sign chain of k links with one free bit has k − 1 parity checks. */
export function parityChecks(links: number) {
  if (!Number.isInteger(links) || links < 1)
    throw new RangeError('At least one link is required.');
  return links - 1;
}
/** 10.7: the washboard: rows spaced ℓ pass the clock at γv/ℓ; resonance when that equals mc²/h. */
export function washboardRate(gammaV: number, rowSpacing: number) {
  assertFinite('washboard', gammaV, rowSpacing);
  if (rowSpacing <= 0 || gammaV < 0)
    throw new RangeError('Positive spacing and non-negative speed required.');
  return gammaV / rowSpacing;
}
/** The de Broglie clock frequency mc²/h in hertz for a rest energy in eV. */
export function clockHertz(restEnergyEv: number) {
  assertFinite('clock', restEnergyEv);
  if (restEnergyEv <= 0)
    throw new RangeError('A positive rest energy is required.');
  return (restEnergyEv * electronVolt) / planck;
}

/** The necklace driven in its gap: the decay rate per unit cell of the skin, or null in a band. */
export function chainSkin(
  omega: number,
  lightMass: number,
  heavyMass: number,
  spring = 1,
) {
  assertFinite('chain skin', omega, lightMass, heavyMass, spring);
  if (omega < 0) throw new RangeError('A non-negative frequency is required.');
  const bands = chainBands(lightMass, heavyMass, spring);
  if (omega <= bands.acousticTop || omega >= bands.edge) return null;
  const [light, heavy] = [
    Math.min(lightMass, heavyMass),
    Math.max(lightMass, heavyMass),
  ];
  const sum = 1 / light + 1 / heavy;
  const u = (omega * omega) / spring - sum;
  const cosh2 = (light * heavy * (sum * sum - u * u)) / 4;
  return 2 * Math.acosh(Math.sqrt(Math.max(1, cosh2)));
}
/** The wavenumber at which the necklace carries a given band frequency, by bisection on the right branch. */
export function chainWavenumber(
  omega: number,
  lightMass: number,
  heavyMass: number,
  spring = 1,
) {
  assertFinite('chain wavenumber', omega, lightMass, heavyMass, spring);
  const bands = chainBands(lightMass, heavyMass, spring);
  const optical = omega >= bands.edge;
  if (
    omega < 0 ||
    omega > bands.opticalTop ||
    (!optical && omega > bands.acousticTop)
  )
    return null;
  const branch = (k: number) => {
    const d = diatomicChain(k, lightMass, heavyMass, spring);
    return optical ? d.optical : d.acoustic;
  };
  let lo = 0,
    hi = Math.PI;
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2;
    const rising = !optical;
    if (branch(mid) < omega === rising) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

/** 14.5: the primer's calculator form of the drift, [1 + ε_ν h^{1−n}]/(1 + ε_ν) at a given H/H₀. */
export function driftRatioAtHubble(h: number, n: number, epsilon: number) {
  assertFinite('drift ratio', h, n, epsilon);
  if (h <= 0 || n < 0 || n > 1 || epsilon <= -1)
    throw new RangeError('Positive h, n in [0, 1] and ε_ν > −1 required.');
  return (1 + epsilon * h ** (1 - n)) / (1 + epsilon);
}
