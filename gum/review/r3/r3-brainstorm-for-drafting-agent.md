# Beyond the stakes: new questions and experiments for GUM after r3, for the r3 drafting agent

**Audience and license.** This file is for the agent that drafted GUM r3 and the r3 primer. It is a brainstorm, not a review: it deliberately relaxes the habit of thinking only inside mainstream physics, takes GUM's substrate seriously as a thing with a rest frame, a pitch, a locking length, a band edge and a lag, and asks what *else* such a thing would do that nobody has looked for. Each entry states the question, derives GUM's answer from r3's equations where that can be done in closed form (numbers from r3's Table 10; the companion script `gum/review/r3/verify_r3.py` reproduces the ones it shares with the paper), names the experiment or archive that adjudicates, and says what a positive and a null would mean. Entries are graded by how far they sit from r3: **(a)** a consequence r3 already contains but has not turned into an experiment; **(b)** a new observable that follows from r3's structure; **(c)** a question that would change r3 if answered.

**Not repeated here.** The thirteen questions of the earlier assessment (`gum/review/manuscript-assessment.md`, Sec. 4: the kicked charge, three-party timing, the cliff's knobs, recombination-era birefringence, the fit with Σm_ν free, the Higgs invisible width, lepton-mass drift, the pitch-uniformity scan, cell-blind integrals, Derrick exponents, m₁ and m₂, the longitudinal channel). Three of them are revisited only where r3 or this audit changed their premises (items 1, 6 and 13 below).

---

## 1. The fog sweeps past the laboratory at 370 km s⁻¹: look in frequency, not in space (b)

*Premise from r3.* Propositions 10 and 12 fix the fog in the material frame. Every laboratory probe moves through it at v_M ≈ 369.8 km s⁻¹ (annually modulated by ±30 km s⁻¹, sidereally in direction). A pitch-periodic quantity is therefore a *clock* at f_p = v_∥/p = 15.0 GHz × (v_∥/v_M), not a map.

*Question.* Which laboratory observable has both a dependence on the electron mass and a bandwidth that reaches 15 GHz?

*Answer, derived.* (i) The electron's cyclotron frequency in a Penning trap, ν_c = eB/2πm_e ≈ 150 GHz at 5.4 T: a modulation δm_e/m_e at 15.0 GHz puts sidebands at ν_c ± 15.0 GHz with relative amplitude ½ δm_e/m_e × (ν_c/15 GHz) ≈ 5 δm_e/m_e. The sideband offset is fixed by v_∥/p alone and drifts by ±8% over the year with the Earth's orbital velocity — a signature no instrumental sideband has. (ii) Optical clock transitions: modulation index δν/f_p = (ν_opt/f_p) δm_e/m_e ≈ 3×10⁴ δm_e/m_e; sideband power 10⁹ (δm_e/m_e)² — at δm_e/m_e = 10⁻¹⁸ this is 10⁻²⁷, hopeless; at 10⁻¹² it is 10⁻¹⁵, within reach of a dedicated cavity-stabilized comb search. (iii) Trapped-ion secular frequencies (MHz) cannot follow 15 GHz; they average it.

*Experiment.* A Penning-trap electron (the g−2 apparatus) with its cyclotron drive scanned for sidebands at ±15.0 GHz, repeated at two seasons; the expected amplitude is set by the pitch-phase dependence of the frustration integral A, which is [N] — so the experiment bounds the pitch-phase dependence of A directly, which is the quantity the uniformity stake S14 was meant to reach and cannot (A-04 in the notes).

*Null.* Cell-blindness of A at the measured level; the posed closure K-9 gains a laboratory number. *Positive.* The first direct detection of the pitch *and* of v_M, with the annual modulation as the control.

## 2. The trough forest: if the fog has a lattice, there is more than one edge (c)

*Premise from r3.* Flag F7 makes the ground state a double-twist network, not a single helix. Blue phases I and II of chiral liquid crystals are cubic lattices of double-twist cylinders with lattice constant ≈ p and several Bragg reflections, at λ_hkl = 2n̄a/√(h²+k²+l²).

*Question.* Does the vacuum's double-twist network have the first-order helix edge only, or a series?

*Answer, derived.* If the network has even short-range cubic order of cell size a ≈ p, the doublet sees reflections at p/√2, p/√3, p/2 … as well as at p: for p = 24.7 µm, edges near 17.5, 14.3 and 12.4 µm, all inside the Spitzer IRS band that the archival analysis of ref. [9] fitted with a single edge at 22.5–24.7 µm. Proposition 9's locking suppression is (kℓ_lock)⁴, so a reflection at twice the wavenumber is sixteen times *less* suppressed: in the locking-limited regime the highest-order edge that the structure factor still supports is the deepest, the opposite of a crystal's usual ordering. The depth ratio between orders measures the structure factor of the fog's network, which is the orientational correlation length ℓ_o of Closure K-5 in another guise.

*Experiment.* Refit the same Spitzer stacks (and JWST MIRI MRS, 5–28 µm) with a template of two or three fixed edges at p/√(h²+k²+l²) with p free, demanding that all edges be dipole-shifted by the same v_M·n̂/c (Prop. 10). The amorphous step of Appendix E.4 becomes a staircase.

*Null.* Nothing lost: the single-edge bound stands. *Positive.* A lattice in the vacuum, read off a Miller-index ladder.

## 3. An electron-class neutral quantum at 722.7 keV: three places besides positronium (a→b)

*Premise from r3.* Proposition 25(b): a discrete halo level X with m_X = m_e/κ = 722.7 keV, C_X = +1, decaying radiatively or escaping; Stake S16 looks for o-Ps → γX at 255.5 keV.

*Questions and answers.* (i) *Inelastic Compton edge.* e⁻γ → e⁻X opens at a centre-of-mass energy m_e + m_X = 1.234 MeV, i.e. at a laboratory photon energy on an electron at rest of (s − m_e²)/2m_e = 1.36 MeV. Above it the Compton continuum acquires a second edge. Every ⁶⁰Co (1.33 MeV) and ²⁴Na (2.75 MeV) calibration spectrum ever taken with a germanium detector contains this region; a dedicated look at the Compton-edge shape of a 1.5–3 MeV line for a threshold step at the X-channel would cost nothing new. (ii) *Missing energy.* NA64-type electron beam dumps search for e⁻Z → e⁻Z + invisible; an X of 0.72 MeV coupling only to the electron class is exactly their target, with a cross-section set by the halo overlap rather than by a dark-photon mixing — r3 should state the coupling's form so the existing limits can be read against it. (iii) *The muon and tau edges.* If X exists for the electron class, the muon class has X_μ at 149.42 MeV and the tau class X_τ at 2.513 GeV. True muonium is not yet made; but μ⁺ stopped in matter forms muonium, whose Zeeman-mixed states could emit X_μ only above threshold — closed. The clean muon-class test is the decay μ⁺μ⁻ → γX_μ in a future true-muonium source (E_γ = m_μ/2 = 52.8 MeV), and for the tau class e⁺e⁻ → τ⁺τ⁻ events at Belle II with a monochromatic 0.89 GeV photon from τ-pair "ditauonium" are hopeless; state so.

*Branch content.* In Branch B (κ = ½) all three X sit at the pair threshold and (i)–(iii) close; so (i) and (ii) adjudicate the normalization audit's branch independently of positronium.

## 4. The mirror cliff measures the Sakharov cutoff (b)

*Premise from r3.* n₅₀ = log₂(ν_c V/ℓ_s³) + 7.17 under bulk hosting; Corollary 10 fixes ℓ_s = √(N_eff/12π) ℓ_P for a cutoff 1/ℓ_s and π times that for π/ℓ_s; Table 1's caption notes the 5-qubit shift.

*Question.* If a cliff is found, what does its absolute position measure?

*Answer, derived.* Each qubit of cliff position is a factor 2^{1/3} = 1.26 in ℓ_s. A cliff located to ±1 qubit at known V fixes ℓ_s to ±26%, hence N_eff × (cutoff factor)⁻² to ±50%: it distinguishes N_eff = 6 from 12 from 60 at fixed regularization, and the 1/ℓ_s from the π/ℓ_s cutoff at fixed N_eff. Read the other way, with ν_c = 12 and the hosting mode identified by the knob (Stake S5), a cliff at 324 ± 1 qubits in a 10⁻¹⁰ m³ zone says ℓ_s = (1.0 ± 0.2) ℓ_P and N_eff/(regularization)² ≈ 38 ± 15 — the number of gapped field components below the induced-gravity cutoff, counted by a quantum computer.

*Experiment.* The same mirror protocol, with the register volume measured, not assumed: the trap's electrode geometry fixes V to better than a factor of two, i.e. ±1 qubit.

## 5. The trough's red half in the Herschel archive (a)

*Premise from r3.* Theorem 7(iii): a source at z_s has a trough from λ_edge to λ_edge(1+z_s), with depth R(z_r) falling as 1/H(z_r). The Spitzer tests covered edges at 22.5–24.7 µm, i.e. z_r ≈ 0.

*Question.* Where is the resonance at z_r = 1–3 observable?

*Answer, derived.* At λ_obs = λ_edge(1+z_r) = 49–99 µm, with Π reduced by h(z_r) = 1.96 (z = 1) to 4.5 (z = 3): at the transparency bound the co-handed depth there is 5% to 2%. That is the Herschel PACS range (55–210 µm). PACS spectroscopy of z_s ≥ 2 galaxies (hundreds exist: lensed submillimetre galaxies, quasars) contains the trough's red half, where no edge is expected but the *depth profile* 1/H(z_r) is — a second fingerprint independent of the edge, and one that measures H(z) in a new way if the trough is real.

*Experiment.* Stack PACS range-scan spectra of z_s > 2 sources in the rest-frame 25–50 µm window; fit the 1/H(z_r) depth law with the edge fixed by the Spitzer analysis. *Null.* Tightens Eq. (31) at z_r > 0, where the bound has not been tested. *Positive with the Spitzer null.* A trough that exists at z_r = 1–3 but not at z_r = 0 would say ℓ_lock, or the fog itself, evolves — an outcome r3 does not contemplate.

## 6. Circular polarization is the trough's second fingerprint, and no far-infrared instrument can read it (c)

*Premise from r3.* Theorem 7(iii): degree R/(2−R) ≈ 5% at the bound, sign fixed by s; Appendix E.4: the amorphous step has the same sign at reduced degree.

*Question.* Is there any far-infrared circular polarimeter?

*Answer.* No facility instrument between 10 and 100 µm measures Stokes V at the percent level; JWST MIRI has no polarimetry, SOFIA is retired, and ground-based 10–25 µm polarimeters (CanariCam, MIMIR-class) are linear. A quarter-wave-plate stage in front of a linear far-infrared polarimeter on a balloon or on a future probe would turn the trough from a stacking exercise into a one-source measurement: a 5% circular polarization *whose sign is the same for every source on the sky* and whose band is 24.7–24.7(1+z_s) µm. Instrument proposals, not data, are the deliverable; the handedness bit's cleanest optical readout is sitting in an instrument nobody has built.

## 7. Strong-field QED as a bench for the physical clock (c)

*Premise from r3.* Section 6.4: a knot whose clock is displaced from its closure value relocks by radiating the beat into the gapless channels, with an Adler torque and τ_relock ~ 10⁻¹² s. Proposition 22: the clock is physical and can be hit.

*Question.* An electron in an intense laser acquires an effective mass m* = m_e√(1 + a₀²/2) (the ponderomotive dressing of the Volkov state). In GUM, is the dressed clock at m*c²/ħ, and if so does the relocking torque radiate at the beat (m* − m_e)c²/ħ?

*Answer, posed.* For a₀ = 1 the beat is 0.22 m_ec²/ħ, a 113 keV line in the electron's average rest frame, Doppler-shifted into the tens of MeV in a counter-propagating GeV beam. Standard strong-field QED predicts the nonlinear Compton spectrum with its mass-shifted edges but no line at the beat; GUM's relocking picture predicts a narrow feature at the beat with width ħ/τ_relock ~ 1 meV × (boost), i.e. still narrow. LUXE and ELI-NP-class collisions (a₀ ≈ 1–10) are the place to look, and the a₀-dependence of the line position (∝ √(1 + a₀²/2) − 1) is the control. This is the most "beyond mainstream" entry here, and its honest status is that r3 does not yet say whether the dressed clock is the mechanical clock; the question should be put to the closure of Sec. 6.4 before an experiment is proposed.

## 8. Neutrinoless double-beta decay at the ΛCDM edge: GUM's Majorana neutrino may be invisible to every planned experiment (c)

*Premise from r3.* Stake S18 at its edge: m₃ ∈ [0.0501, 0.0503] eV, m₁ ≤ 4.1 meV, m₂ ≈ 9.6 meV, normal ordering; Stake S19: 0νββ occurs, adjudicated by LEGEND-1000 and nEXO.

*Answer, derived.* With sin²θ₁₂ ≈ 0.31 and sin²θ₁₃ ≈ 0.022 the effective mass is |0.67 m₁ + 0.30 m₂ e^{iα} + 0.022 m₃ e^{iβ}| ≲ 7 meV, and it can vanish for m₁ ≈ 2–4 meV. The named experiments reach 10–20 meV. So the two stakes together predict a Majorana neutrino whose 0νββ rate may be below any planned sensitivity.

*Questions.* Is there any other handle on the Majorana nature of a heliknoton? Its single helicity is slaved to the helix sign (Sec. 8.2): a Hopf texture has no U(1) lock, so the "antineutrino" is the same texture with reversed helicity, which is what Majorana means — but it also means that the *helicity-flip* amplitude in a strong field (a neutrino traversing a region of reversed fog handedness, or a magnetic field through the heliknoton's transition moment) is a GUM number. The computable deliverable is the heliknoton's transition magnetic moment; the experiment is the existing reactor and solar bounds on μ_ν (~10⁻¹² μ_B). r3 should either print μ_ν for the heliknoton or say why it is zero. Meanwhile S19's adjudicator should be re-assigned (notes, A-17).

## 9. Matter is faster than light, by a definite sign (b)

*Premise from r3.* Proposition 2: c_ψ² = c² + m̃²/4ρ₀ > c². The matter cone exceeds the light cone; (c_ψ − c)/c = (ℓ_g ω₀/c)²/8 with ω₀ the vacuum gap (≈ M_W) gives 5×10⁻²⁰ at ℓ_g = 1.5×10⁻²⁷ m and ℓ_g ≲ 7×10⁻²⁸ m from the bounds.

*Question.* Every Lorentz-violation search in the matter sector reports a two-sided bound. GUM predicts the sign: if a maximal-attainable-velocity difference between electrons and photons is ever found, it must be *superluminal* for the electron (vacuum Cherenkov allowed above threshold; synchrotron limits weakened). What is the threshold at GUM's own scale?

*Answer, derived.* For ℓ_g = ℓ_s = ℓ_P the excess is 5×10⁻²⁰ × (ℓ_P/1.5×10⁻²⁷ m)² ≈ 6×10⁻³⁶, and the vacuum-Cherenkov threshold E = m_ec²/√(2δ) ≈ 1.5×10²³ eV is unreachable: GUM predicts a null at every accessible energy unless ℓ_g ≫ ℓ_s. The experiment is therefore the sign test on any future positive: PeV electrons inferred from LHAASO's Crab photons (inverse Compton) and the synchrotron burn-off limit already bound the *subluminal* side strongly and the superluminal side through the Cherenkov threshold; a published two-sided analysis read with GUM's sign is a one-line stake to add to S1 ("any matter–light cone difference is positive").

## 10. The lock melts: is the electroweak transition first order in GUM? (a)

*Premise from r3.* W, Z and h are collective modes of the locked condensate (Flag F11); Stake S26 ("lock-melt gravitational-wave background weak", LISA) is inherited "with no derivation in either text".

*Question.* The order of the lock's melting is set by the potential 𝒱(σ_P) = m̃_V²(1 − σ_P) + c₂(1 − σ_P)² of Eq. (8), with c₂ ∈ [−m̃_V²/2, m̃_V²/6). Which sign of c₂ gives a first-order melt?

*Answer, posed with its shape.* A negative c₂ makes 𝒱 concave in (1 − σ_P) near the locked state and favours a barrier between the locked and melted phases at finite temperature; a positive c₂ does not. The deliverable is the finite-temperature effective potential of the lock amplitude with the known curvature M_h² = 125.2² GeV² at the attractor, which fixes one combination of (m̃_V, c₂, Λ) and leaves the order as a function of c₂ alone. S26 then acquires a derivation and a sign: a first-order melt at T ~ 100 GeV radiates in LISA's band with strength set by the barrier, and "weak" becomes a statement about c₂. The same c₂ enters the near-BPS window through 𝒱's shape, so this is a cross-lock in waiting.

## 11. What polarizations does a defect-geometry gravitational wave carry? (c)

*Premise from r3.* Closure K-22 re-posed: the carrier of gravitational waves is a collective mode of the defect density or a second-order strain-metric fluctuation, not a transverse strain wave (those are the photon).

*Question.* A collective mode of a disclination–dislocation density need not be transverse-traceless. Does GUM's carrier admit scalar or vector polarizations?

*Answer.* Not derivable until K-22 is executed, but the kill is already available: the LIGO–Virgo–KAGRA network bounds non-tensor polarization content of detected signals, and a five-detector network (with LIGO-India) will do so decisively for loud events. K-22's deliverable list should include the polarization content of the carrier, with "non-tensor modes above the network's limits" as a stated kill, and the Einstein–Cartan dictionary of Sec. 9.6 suggests the answer: torsion waves (dislocation density) carry extra modes in Einstein–Cartan theory only when spin density sources them, which in vacuum it does not. If that argument goes through, GUM predicts pure TT radiation and inherits the bound as an inverse kill.

## 12. The 511 keV line as a dark-matter *dressing* signal, with COSI (a)

*Premise from r3.* Conjecture 2: undressed electron-class knots dressing into e⁺e⁻ at a rate ∝ ρ_DM², injecting positrons at (m_u − m_e)c² plus virial energy; kills: m_u < m_e, non-ρ² morphology, relic mismatch.

*Questions and answers.* (i) If m_u = m_e to the accuracy Conjecture 1 implies (M_N ≃ m_ℓ), the injection energy is the halo's virial energy, ~keV: GUM then predicts the *narrowest possible* 511 keV line (positrons thermalize before annihilating) and the highest ortho-positronium fraction compatible with the medium — both are line-shape observables that COSI (2027) will measure across the bulge. (ii) A ρ_DM² source with a thermal-relic-scale rate is excluded for MeV dark matter by the CMB energy-injection bound unless the dressing is p-wave; p-wave injection in the bulge then scales with the velocity dispersion squared, so the bulge-to-disc ratio is set by σ_v(bulge)²/σ_v(disc)² times the density-squared ratio — a number r3 can print. (iii) Dwarf spheroidals (Reticulum II) are the discriminator between a stellar-population source and a ρ² source; COSI's dwarf observations are the experiment, and a detection with the bulge's line width would be the first non-gravitational evidence for a dark sector that dresses into leptons.

## 13. The relaxation family at n ≈ 0.95 is ΛCDM plus a two-percent offset: what single measurement still sees it? (a, revisits the earlier question 4.5)

*Premise from r3.* Table 6: n > 0.949 from BAO and the CMB prior, so w₀ ≳ −0.984, w_a ≲ +0.05, no phantom crossing; the perturbation sector of K-21 is owed; the family has no brane-bending mode.

*Answer.* At fixed H(z) and with GR-like growth (no extra scalar), the only lever left is the sign of w_a. Euclid DR1 plus DESI's final BAO are forecast to reach σ(w_a) ≈ 0.1–0.2 in CPL, i.e. a 0.3–0.5σ "test" of w_a = +0.05. The honest statement is that GUM's dark energy is now observationally indistinguishable from Λ by background data alone for the next decade, and that its content is the one-bit prediction sgn w_a = +1 against DESI's current −1. One place where a 2% offset in w₀ does show up as a *qualitative* feature: the integrated Sachs–Wolfe cross-correlation with galaxies is sensitive to d(Ω_DE)/dz at low z, and the family's w(a) → 0 at high z (Appendix D.1) means Ω_DE(z) falls more slowly than in ΛCDM at z ~ 1–2 by a computable factor; r3 should print Ω_DE(z = 1, 2) for n = 0.95 against ΛCDM and let the CMB-lensing–ISW community look. A null at the few-percent level is expected; a detection of excess late-time ISW at fixed H(z) would be the family's first positive.

## 14. Molecular parity violation with a Z-scan separates vacuum handedness from the weak interaction (b)

*Premise from r3.* Proposition 49: a vacuum of handedness s breaks the mirror identity U_LL = U_RR of short-range forces; Closure K-27 owes the amplitude; the molecular arm is mentioned in one sentence.

*Question.* Standard-Model parity-violating energy differences between enantiomers scale roughly as Z⁵ (from the Z-boson exchange and relativistic enhancement at the heaviest nucleus), and current vibrational-spectroscopy experiments on chiral molecules are approaching the 10⁻¹⁵–10⁻¹⁷ relative level where the Standard Model prediction lies. What does a vacuum-handedness term scale with?

*Answer, derived in form.* The fog-mediated term couples to the molecule's *geometric* chirality at the pitch scale (micrometres ≫ molecular size), so it sees the molecule as a point chiral object: its magnitude is Z-independent and depends on the molecule only through a chirality pseudoscalar of its electron density (a Z-independent form factor), and its sign is the same for all molecules of the same geometric handedness. A measurement programme across molecules of different heaviest-Z atoms but similar geometric chirality separates a Z⁵ law from a Z⁰ offset. Locking suppression (Prop. 9) makes GUM's core value negligible, as for the mirror force; the molecular arm is therefore a second discovery channel for ℓ_lock, with a scaling law as its fingerprint.

## 15. Calibrating the heaviest bill: the cone-locking flow on a bench (c)

*Premise from r3.* Equation (53), the cone-locking flow, is [CAL, N] and "yields at most a factor 10–10²", against a required universality of 10⁻¹⁵–10⁻²⁰; r3 calls this the heaviest bill and names spinor condensates and graphene as analogs.

*Question.* Can the coefficient g_c²/c̄² be measured in a system that has the same structure — two linear modes with different bare speeds, coupled by a cubic nonlinearity, in a chiral micropolar medium?

*Answer.* Three-dimensional chiral mechanical metamaterials (Sec. 6.4's bench platforms) have an acoustic (displacement) and a rotational (micro-rotation) branch with independently tunable stiffnesses; driving them at finite amplitude and measuring whether the two phase velocities flow toward each other with the logarithm of the drive scale would calibrate the flow's coefficient and its sign in a Cosserat system. A measured coefficient of order one would leave the bill unpaid, as r3 expects; a coefficient that is parametrically large in the locking stiffness — the flow accelerating as μ_c grows — would be the first hint that locking, not running, does the work, which is the direction Proposition 2 already points.

## 16. One rest frame: a cross-lock r3 has not named (b)

*Premise from r3.* v_M enters Proposition 5 (sidereal swing of a pre-light signal), Proposition 10 (dipole shift of the edge), Proposition 12 (the 15 GHz line), Proposition 15 (the bipartite timing bound) and item 1 above (the Penning-trap sideband). Throughout, r3 takes v_M to be the CMB dipole velocity.

*Question.* Why should the substrate's rest frame be the CMB frame?

*Answer.* Nothing in Eqs. (4)–(8) says so; it is the natural assumption for a substrate that is the arena of cosmic expansion, and it is testable, because every one of the five readouts returns a *vector*. GUM should state it as cross-lock **X9 (one rest frame)**: any positive in any v_M-dependent channel must return the same direction and speed as every other, and that vector must be the CMB dipole (369.8 km s⁻¹ toward (l, b) = (264°, 48°)) within the channel's precision; a positive that returns another direction retires the identification of the material frame with the CMB frame, not GUM. Stating X9 costs nothing now and converts a background assumption into a kill.

## 17. Where would quantum non-equilibrium survive, if GUM's relaxation is driven by the knot's clock? (c)

*Premise from r3.* Section 5.3: the sub-quantum H-theorem relaxes at a rate GUM's agitation accelerates by 17–41 relative to the deterministic pilot-wave limit; GUM predicts a *smaller* relic non-equilibrium than Valentini's.

*Question.* Is the relaxation rate species-independent? If the agitation that drives it is the knot's own isorotation (the clock), then Γ_H scales with the clock frequency Mc²/ħ, and the slowest-relaxing objects in the universe are the lightest knots and textures: relic neutrinos (0.05 eV, clock 1.2×10¹³ Hz, seven orders below the electron's) and, if gravitons are textures of the strain metric, primordial gravitational waves.

*Answer, posed.* GUM would then predict an ordering of relic non-equilibrium by clock frequency: none in baryons and photons, a possible residue in the cosmic neutrino background, the largest in the primordial tensor spectrum. The observables are the ones already proposed for non-equilibrium cosmology — a power deficit at the largest angular scales — restricted to the tensor sector (a primordial B-mode spectrum with suppressed low multipoles) and to direct CνB detection (a capture-rate or line-shape anomaly at PTOLEMY-class experiments). This is speculative at every step and is listed because it is the one place where r3's own mechanism makes a prediction that orthodox quantum theory cannot, and because the clock-frequency ordering is a specific, checkable claim about the H-theorem that the closure of Sec. 5.3 could settle on paper.

---

## Shortlist by cost

| cost | items | what they need |
|---|---|---|
| archival refit, no new data | 2 (trough forest), 5 (Herschel red half), 12(ii)–(iii) (COSI planning numbers) | the Spitzer/JWST and PACS archives; the fit code of ref. [9] once committed |
| existing apparatus, new analysis | 1 (Penning-trap sideband), 3(i) (inelastic Compton edge), 3(ii) (NA64 reading), 9 (sign on any matter-sector LIV), 14 (molecular Z-scan) | a coupling form from r3 for 3(ii) and 14; otherwise nothing |
| instrument concept | 6 (far-infrared circular polarimeter), 4 (mirror cliff with measured V) | a proposal; the mirror protocol's V measurement is a design requirement, not new hardware |
| theory first, then experiment | 7 (strong-field clock beat), 8 (heliknoton moment), 10 (order of the lock melt), 11 (GW polarizations), 13 (ISW numbers), 15 (flow bench), 16 (X9), 17 (relaxation ordering) | closures that r3 already owes, each with one added deliverable named above |

*Provenance.* Written on branch `gum_v51_r3_review_1`, 2026-10-17, by the reviewing agent that produced `gum/review/` and r2, after the audit recorded in `r3-notes-for-drafting-agent.md`. Numbers that overlap the paper are reproduced by `verify_r3.py`; the rest are stated with their derivations in the text and should be checked before any of them enters a revision.
