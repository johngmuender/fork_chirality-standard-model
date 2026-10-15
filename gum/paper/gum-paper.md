# What Material Could Possess Quantum Mechanics as Its Coarse-Grained Bookkeeping?

## Geometrische Umdeutung Mechanik: An Inverse *Umdeutung*, Its Theorems, Its Corrections, and the Experiments That Can Retire It

**Authors:** [Authors to be completed]  
**Date:** 2026-09-28  
**Status:** DRAFT for review — revision of the draft of 2026-09-06 — not for circulation

### Abstract

In 1925 Heisenberg founded quantum mechanics on an *Umdeutung* — a reinterpretation of kinematics that expelled the trajectory and installed the observable algebra as the primitive [1]. GUM (*Geometrische Umdeutung Mechanik*) executes the inverse: it asks what **material** could possess the quantum formalism as its coarse-grained bookkeeping. GUM's candidate is a single ontological primitive whose first coarse-grained description is a chiral micropolar (Cosserat) continuum with an $SU(2)$-lifted micro-rotation, an objectivity principle that plays the role of a gauge principle, a Skyrme–Bogomolny topological sector admitting textures of integer degree, and a slow chiral condensate. This revision states GUM's killable core and corrects the previous draft wherever formalization showed it to be wrong. (i) MacCullagh's rotational aether, inconsistent as a Cauchy continuum, is consistent as the orientation sector of the material, and the source-free Maxwell equations follow. (ii) The longitudinal sector obeys a locality dichotomy: completing it by transverse projection is acausal at every finite speed, whereas the local Gauss completion reproduces the retarded Maxwell field exactly for every longitudinal speed $c_L$ — the velocity gauge realized as material dynamics, at the price of an indefinite longitudinal energy or an energy leak of relative size $\tfrac12(c/c_L)^3$. The near-field channel of the previous draft is therefore withdrawn as an electromagnetic prediction; $c_L$ survives as the update speed of the quantum tower, where finite-speed nonlocality is exposed to bipartite sidereal timing and to multipartite tests of the Bancal–Barnea type. (iii) The wave function is bookkeeping for a tower of conditional fields. A dimension-counting theorem bounds any classical material that represents every state, but a reachable-set theorem shows that no circuit experiment can test that bound; the testable content is a representational hypothesis, dense storage, which predicts a gate-independent fidelity cliff near $n_q^\ast\simeq\log_2N_\mathrm{eff}\approx235$–$330$ qubits, measurable with mirror circuits, whose location moves with register volume. (iv) Planck's constant is constrained, not derived, by the closure of an isorotating knot; if the de Broglie clock is a physical rotation it predicts a channeling resonance near $81\ \mathrm{MeV}/c$ in Si$\langle110\rangle$ that scales with row spacing, and any drift of $\alpha$ without drift of $m_p/m_e$. (v) The electron is a two-scale object whose band edge poses a question with a positronium signature at $m_ec^2/2$. (vi) The helical vacuum imprints a far-infrared Gunn–Peterson trough with a fixed blue edge at $21.8$–$24.7\ \mu$m, not a line, and cosmic redshift turns the transparency bound into $\Delta n\lesssim6\times10^{-17}$. (vii) Dark energy is the lag of the pitch-carrying soft mode; the relaxation family is the Dvali–Turner family with $\alpha_\mathrm{DT}=2(1-n)$, predicts $w_a\ge0$, sits on the wrong side of DESI DR2, and implies that neutrinos were lighter in the past. (viii) One handedness bit links weak chirality, $\delta_{CP}$, cosmic birefringence, and a mirror test of short-range forces. A normalization audit of the knot sector is posed, and the knot-sector numbers inherited from the previous draft are held at their grade until it executes. The matter–light cone difference, evaluated at the weak-scale gap of the vacuum triplet, reaches the vacuum-Cherenkov bounds and constrains the rotational inertia of the grains. Thirty stakes and twenty-six posed closures close the paper.

**Keywords:** material ontology, Cosserat continuum, MacCullagh aether, velocity gauge, pilot-wave theory, local beables, representational capacity, mirror circuits, finite-speed nonlocality, isorotating soliton, de Broglie clock, cholesteric Bragg passage, dark energy, cosmic birefringence, falsifiability

---

> **Draft status.** DRAFT for internal review, not for circulation. Drafted with the assistance of Claude Opus 5.5 (Anthropic) on 2026-09-28 as a revision of the draft of 2026-09-06. Values marked [N] derive from profile or frustration integrals that are not reproduced here; they are inherited from the previous draft, quoted with their uncertainties and at their ledger grade, and are subject to the normalization audit K-N of Sec. XI B. Bibliography entries flagged "to be verified" must be checked before circulation. This printing corrects two errors in the first printing of the revision (errata E1–E2, Sec. XI E).

> **What changed, in one paragraph.** Formalizing the previous draft exposed three places where it overstated or misstated its own predictions, and several places where its bookkeeping was inconsistent. (a) The "near-field channel" of two-speed electrodynamics does not survive a locality analysis: the only local completion that recovers Gauss's law is Maxwell theory in the velocity gauge, which carries an energy condition of its own (Proposition 3), so $c_L$ is invisible to electromagnetic probes and reappears only in the timing of quantum correlations (Sec. III C, Sec. V G). (b) The dimension-counting headline bounds representations of *every* state, which no circuit can prepare; the testable claim is a representational hypothesis with a mirror-circuit protocol (Sec. V E–V F). (c) The helical vacuum produces a redshift-swept trough with a fixed blue edge, not a fixed line, and the coherent transparency bound was too strong by fifteen orders of magnitude (Sec. IV C). The kinetic normalization of the micro-rotation, the halo length, and the B3 gap were inconsistent with one another; the corrected expressions are used throughout and their downstream consequences are flagged (Sec. II F). New stakes follow from taking the material literally: a physical de Broglie clock, a band edge at $\sqrt2Mc^2$, a mirror test of short-range forces, a drifting neutrino mass, and a finite-speed test of nonlocality. The full list of corrections is Sec. XI E.

# I. Introduction

## A. The inverse *Umdeutung*

Heisenberg's 1925 paper [1] adds no hypothesis to classical mechanics. It reinterprets its kinematics: the electron's position is replaced by an array of transition amplitudes, and the array, not the orbit, becomes the object the theory is about. Everything that follows — the commutator, the uncertainty relations, the operator algebra as the primitive of quantum theory — descends from that act of *Umdeutung*. The trajectory is not refuted. It is expelled from the vocabulary because it cannot be measured.

GUM executes the inverse act. It readmits the trajectory, demotes the operator algebra to bookkeeping, and asks what must exist so that the bookkeeping comes out *exactly* as quantum mechanics wherever quantum mechanics has been tested, and *differently* only where the material that keeps the books must leave fingerprints. GUM's answer is a material. The question the paper poses is therefore not "is quantum mechanics complete?" but a constructive one: *what material could possess the quantum formalism as its coarse-grained bookkeeping, and what would such a material be unable to hide?*

The question has a long and mostly unhappy history. Mechanical models of the aether failed in the nineteenth century; hidden-variable programs were declared impossible in the twentieth and then shown possible [2]; hydrodynamic and stochastic readings of the Schrödinger equation [3, 4] reproduce its dynamics but leave gaps that have been identified precisely [5, 6]. GUM's working hypothesis is that each of these failures was a failure of the available continuum mechanics rather than a failure of the idea, and that a modern generalized continuum — micropolar, chiral, topological — is rich enough to carry the whole bookkeeping while remaining exposed to experiment at a small number of places. The purpose of this paper is to state those places as theorems, stakes, and posed computations, so that the proposal can be retired cheaply if it is wrong.

## B. What "material" means here

GUM uses the word *material* for its sole ontological primitive, in the old sense of *materia*: that of which things are made. It does not mean a substance with properties in a pre-existing space and time. Geometry, force, space, and time are, in GUM, *response descriptions* of the material — bookkeeping of its behavior at successive levels of coarse-graining — and the material exists prior to every one of them. The earlier draft used the word *substrate* for the same primitive; *material* is preferred here because it carries, from continuum mechanics, exactly the right technical connotations: a *material frame* (the frame in which the material is at rest), *material points* (the labels that persist through deformation), and a *material description* (the Lagrangian bookkeeping in which trajectories are primary). GUM's levels of description are the following.

- **The material** (level 0): the primitive. GUM asserts its existence and its adjacency and succession structure; it asserts nothing else at this level, and this paper does not work at it.
- **The continuum description** (level 1): the material's coarse-grained bookkeeping in terms of a displacement field $\mathbf{u}$ and an $SU(2)$-lifted orientation field $\tilde Q$ on a parameter space $(\mathbf{x},t)$ that records adjacency and succession. Geometry, force, and the light cone are constructed *from* these fields; they are not presupposed. The continuum description has the mathematical form of a chiral micropolar (Cosserat) continuum [7, 8], and it is the level at which this paper works. It is *local*: every field equation at level 1 is a differential equation in $(\mathbf{x},t)$. This locality is not a convenience; it is the property that turns several of the previous draft's claims into theorems and one of them into a retraction (Sec. III C).
- **The quantum description** (level 2): the bookkeeping of localized textures of the continuum fields and of their agitation, which has the form of quantum mechanics.
- **The Standard-Model description** (level 3): the bookkeeping of the textures' response modes, which has the form of gauge fields, fermions, and a scalar sector.

GUM's wager is that a single material, with the continuum description of Sec. II, is the cheapest object whose response descriptions include the quantum kinematic frame, exact electromagnetism, a topological account of charge and statistics, and the skeleton of the electroweak, strong, and flavor sectors — and that every claim GUM makes about it is either a theorem of its postulates or a stake with a signed kill. GUM does not assert that the vacuum *is* this material. GUM asserts that it is arranged to be efficiently wrong about whether it is.

The passage from level 0 to level 1 — the derivation of the continuum description, including the parameter space $(\mathbf{x},t)$ and the emergence of a metric, from the material's adjacency structure — is GUM's deepest posed closure (K-0, Sec. XI B). This paper takes the continuum description as its starting point and prints that it does so.

## C. The ledger and the killable core

Every claim below carries a grade. [DF]: derived-form, following from the stated postulates with no further input. [DW]: derived-with-window. [CAL]: mechanism derived, rate calibrated. [IM]: imported. [CJ]: conjecture, which may not be built upon silently. [posed]: a closure with named deliverables and a kill. [N]: a numerical value from an integral not reproduced here. [RG]: re-graded in this revision, with the reason printed at the point of re-grading.

GUM also applies to itself the audit criterion of Definition 9: a claim is *non-circular* if the postulate behind it was not adopted because the claimed fact is known, or entails distinct testable facts; it is *discriminating* if a competing theory does not entail the same fact. GUM's killable core is the set of discriminating claims. GUM keeps its non-discriminating results for what they are — consistency conditions that any material must satisfy — and labels them so at each occurrence.

GUM's *stakes* are pre-registered observations that would kill a claim; its *inverse kills* are running precision tests that GUM must survive indefinitely; its *posed closures* are computations with named deliverables and signed kills. The intellectual content of the ledger is not that GUM is right but that GUM can be shown to be wrong at a printed cost. A ledger of this kind has a second use, which this revision exercises: it makes it cheap to find and publish the places where the program was wrong about *itself*.

## D. Principal results

GUM's principal results in this revision are the following; items marked "new" or "[RG]" differ from the previous draft.

- **Theorem 2, Theorem 3, Theorem 4** [DF]. MacCullagh's curl-only aether violates linearized objectivity as a Cauchy continuum and is consistent as the orientation sector of the material; the source-free Maxwell equations follow with $c^2=\gamma_\mathrm{eff}/2J$.
- **Theorem 6, Theorem 5, Corollary 1** [DF, new]. The longitudinal sector admits exactly one family of local completions that recover Gauss's law — the velocity gauge with speed $c_L$ — and in it $(\mathbf{E},\mathbf{B})$ coincide with the retarded Maxwell fields for every $c_L$. Any other local completion deviates from Maxwell by the retarded field of a conserved *defect current*; the transverse-projection completion is acausal. The near-field channel is withdrawn as an electromagnetic prediction (Stake S15 becomes a null test).
- **Proposition 10, Theorem 13** [DF/posed, new]. With the tower updated at finite $c_L$ in the material frame, GUM is a finite-speed hidden-influence model; multipartite configurations then force a dichotomy between superluminal signaling and a departure from quantum correlations (Stake S28, closure K-22).
- **Theorem 9, Theorem 10, Theorem 11, Theorem 12** [DF, partly new; S16 RG]. Dimension counting bounds representations of every state; reachable-set counting shows that no polynomial-size circuit can test that bound; the testable content is the *dense-storage* hypothesis, under which mirror circuits must show a gate-independent return-probability cliff at $n_q^\ast\simeq\log_2N_\mathrm{eff}$, and the cliff moves with register volume, cut area, or qubit extent according to the hosting hypothesis (Stakes S16, S29).
- **Lemma 4, Theorem 14, Proposition 12** [DF]. $E_\mathrm{rot}/E=j/2$ is kinematic; the solvability window of the isorotating closure is $j<2a/(a+b)$; $j=\tfrac12$ is unique for $(a,b)=(1,1)$, which GUM adopts as Flag F-B1.
- **Proposition 14, Proposition 15** [DF, new]. A phase-locked physical clock implies $\Delta\ln(m_p/m_e)=0$ under any drift of $\alpha$, and a parametric channeling resonance at $p^\mathrm{res}_{1}c=(Mc^2)^2\ell_\mathrm{row}/hc$ (Stakes S23, S24).
- **Theorem 15, Proposition 17, Proposition 18** [DF; halo length corrected; band edge new]. The electron's topological core sits at the structural scale $\ell_s$; its halo is the in-gap tail of length $(c_\psi/c)\hbar/Mc$; the band edge at $\sqrt2Mc^2$ is either a halo property or a new neutral quantum, and in the second case ortho-positronium decays show a photon line at $m_ec^2/2$ (closure K-19, Stake S25).
- **Proposition 6, Theorem 7, Corollary 2, Proposition 7** [DF, new; S22 RG]. The pitch lies in $21.8$–$24.7\ \mu$m (times an order-unity factor $\zeta_\nu$); the helical vacuum imprints a redshift-swept trough with a fixed blue edge, co-handed circular polarization, and a dipole-modulated edge; the transparency bound is $\Delta n\lesssim6\times10^{-17}$.
- **Propositions 22–25, Proposition 26** [DF; equivalence new]. The relaxation family $\rho_\mathrm{DE}\propto H^{2(1-n)}$ has $w_a\ge0$ and no phantom crossing; it coincides with the Dvali–Turner modified Friedmann family, with $n=\tfrac12$ the DGP background.
- **Proposition 27, Corollary 7** [DW, conditional, new]. If the dark-energy soft coordinate is the pitch wavenumber, neutrino masses drift with the lag and were smaller in the past; the far-infrared trough is then a tomogram of the pitch history (Stake S27).
- **Proposition 28, Proposition 29, Proposition 30, Proposition 31** [DF/DW, partly new]. The handedness chain is a parity check whose birefringence link depends only on endpoint values of the parity-odd order parameter; the uniformity of the bit across the sky is testable; a chiral vacuum breaks the mirror identity $U_{LL}=U_{RR}$ for short-range forces (Stakes S10, S20, S26, S30).

## E. Lineage

GUM names the lineage of each element of its core, because the lineage tells the reader what is borrowed and what is GUM's. The hydrodynamic reading of the Schrödinger equation is Madelung's [3]; the quantum potential from a Fisher-information penalty is Reginatto's [9]; the circulation-quantization gap in every hydrodynamic derivation is Wallstrom's [5], and its discharge through single-valuedness of a texture angle is GUM's. The Born rule as an equilibrium reached by an $H$-theorem is Valentini's [10, 11], with cosmological signatures worked out by Colin and Valentini [12]. Localized textures as particles descend from Skyrme [13] through Derrick's obstruction [14] and its Bogomolny-type escapes [15, 16]; knotted textures were studied by Faddeev and Niemi and by Battye and Sutcliffe [17, 18]. The replacement of the wave function by a primitive ontology in three-dimensional space is that of Allori, Goldstein, Tumulka, and Zanghì [19], and the tower of local fields is Norsen's [20], answering Bell [2].

MacCullagh's aether [21, 22] and Cosserat elasticity [7, 8] are the two nineteenth-century objects whose marriage is GUM's electromagnetic sector. This marriage has precedents that the previous draft did not cite and that any reviewer will raise: Kelvin's gyrostatic model realized MacCullagh's rotational elasticity mechanically [23, 22], and Böhmer, Downes, and Vassiliev obtained Maxwell- and Weyl-type equations from a continuum whose only dynamical variable is the rotation of material points [24]. GUM's contribution in Sec. III A is the objectivity theorem that separates the inconsistent Cauchy reading from the consistent micropolar one, and the coexistence of the rotational sector with full Cauchy rigidity. The velocity gauge, which Sec. III C shows to be the unique local completion of GUM's longitudinal sector, is Jackson's [25]. The finite-speed analysis of quantum nonlocality is due to Salart et al. and Yin et al. experimentally [26, 27] and to Bancal et al. and Barnea et al. theoretically [28, 29]. The reading of a self-sustained vacuum's zero-point ledger as chemical-potential bookkeeping is Volovik's [30]; the defect–geometry dictionary is Kleinert's [31]; the relaxation family's background equation is Dvali and Turner's [32]. The assembly is GUM's, and so is the claim that the assembly is a material.

## F. Conventions

Units have $\hbar=c=1$ except where units are the point. Latin indices run over $1,2,3$; $A_{(ij)}=\tfrac12(A_{ij}+A_{ji})$ and $A_{[ij]}=\tfrac12(A_{ij}-A_{ji})$. "Continuum" refers to the level-1 description and carries no ontological weight. The structural scale of the material is written $\ell_s$ (the previous draft used $a$, which collides with the cosmological scale factor and the Derrick exponents). The number of qubits in a register is $n_q$; the relaxation index of the dark-energy sector is $n$. The lab's velocity relative to the material frame is $\mathbf{v}_M$, and $\gamma_v\equiv(1-v_M^2/c^2)^{-1/2}$. A glossary is Appendix I.

# II. The Material in Its Continuum Description

## A. Kinematic fields and objectivity

A point of the continuum description carries a position and an orientation. The state at $(\mathbf{x},t)$ comprises the displacement $\mathbf{u}\in\mathbb{R}^3$, with deformation gradient $\mathsf{F}=\mathbb{1}+\nabla\mathbf{u}$ and $\det\mathsf{F}>0$ (a tear-free material), and the micro-rotation $\tilde Q\in SU(2)$, the double cover of the grain orientation $Q=\pi(\tilde Q)\in SO(3)$. Polar decomposition $\mathsf{F}=\mathsf{R}[\mathbf{u}]\,\mathsf{U}$ extracts the rotation carried by the deformation itself. GUM's order parameter is the *relative texture*
$$
\tilde P(\mathbf{x})\equiv\tilde R[\mathbf{u}(\mathbf{x})]^\dagger\,\tilde Q(\mathbf{x})\in SU(2),\qquad
\sigma_P\equiv\tfrac12\mathrm{Tr}\,\tilde P,\qquad
\tilde P=\sigma_P\mathbb{1}+i\boldsymbol\pi\cdot\boldsymbol\sigma,\quad \sigma_P^2+\boldsymbol\pi^2=1,
\tag{1}
$$
which records how the grains are turned relative to the lattice they sit in and is invariant under a rigid rotation of the whole (Appendix A). The order parameter lives on $S^3$. GUM's objectivity principle — Flag F10$'$, the material's gauge principle — is that the potential sector depends on orientation only through $\tilde P$ and its derivatives; the kinetic sector may use absolute $\tilde Q$. Absolute orientation is redundant in exactly the way absolute phase is redundant in electromagnetism.

In the linearized theory the micro-rotation is a rotation vector $\boldsymbol\varphi$ (so that $\tilde Q\simeq\exp(i\boldsymbol\varphi\cdot\boldsymbol\sigma/2)$), the lattice rotation is $\tfrac12\nabla\times\mathbf{u}$, and the Cosserat strain measures are
$$
e_{ij}=\partial_iu_j-\epsilon_{ijk}\varphi_k,\qquad \Gamma_{ij}=\partial_i\varphi_j,
\tag{2}
$$
with symmetric part the ordinary strain $\varepsilon_{ij}=\partial_{(i}u_{j)}$ and antisymmetric part encoding the *relative rotation*
$$
\boldsymbol\psi\equiv\boldsymbol\varphi-\tfrac12\nabla\times\mathbf{u},\qquad e_{[ij]}=-\epsilon_{ijk}\psi_k,
\tag{3}
$$
since $\partial_{[i}u_{j]}=\tfrac12\epsilon_{ijk}(\nabla\times\mathbf{u})_k$. To the same order $\tilde P\simeq\exp(i\boldsymbol\psi\cdot\boldsymbol\sigma/2)$ and $1-\sigma_P\simeq|\boldsymbol\psi|^2/8$. Under parity $e$ is a tensor and $\Gamma$ a pseudotensor; this mismatch is the gate through which every handed effect enters.

**Lemma 1 (Objective variables).** Under an infinitesimal rigid rotation of the whole, $\delta\mathbf{u}=\boldsymbol\omega\times\mathbf{x}$, $\delta\boldsymbol\varphi=\boldsymbol\omega$ with constant $\boldsymbol\omega$, the quantities $\varepsilon_{ij}$, $\boldsymbol\psi$, and $\Gamma_{ij}$ are invariant, while $\tfrac12\nabla\times\mathbf{u}$ and $\boldsymbol\varphi$ each shift by $\boldsymbol\omega$.

*Proof.* $\partial_i(\boldsymbol\omega\times\mathbf{x})_j=\epsilon_{jki}\omega_k$ is antisymmetric in $(i,j)$, so $\delta\varepsilon_{ij}=0$; $\nabla\times(\boldsymbol\omega\times\mathbf{x})=2\boldsymbol\omega$, so $\delta(\tfrac12\nabla\times\mathbf{u})=\boldsymbol\omega=\delta\boldsymbol\varphi$ and $\delta\boldsymbol\psi=0$; $\delta\Gamma_{ij}=\partial_i\omega_j=0$. $\square$

## B. The action

GUM's action is $\mathcal{S}=\int dt\,d^3x\,(\mathcal{K}-W)$ with
$$
\mathcal{K}=\tfrac12\rho_0\dot{\mathbf{u}}^2+J\,\mathrm{Tr}\big[(\tilde Q^{-1}\partial_t\tilde Q)^\dagger(\tilde Q^{-1}\partial_t\tilde Q)\big],\qquad W=W_2+W_\chi+W_4+W_{6+0},
\tag{4}
$$
$$
W_2=\tfrac12\lambda\,e_{kk}^2+\mu\,e_{(ij)}e_{(ij)}+\mu_c\,e_{[ij]}e_{[ij]}+\tfrac12\alpha\,\Gamma_{kk}^2+\tfrac12\beta\,\Gamma_{(ij)}\Gamma_{(ij)}+\tfrac12\gamma\,\Gamma_{[ij]}\Gamma_{[ij]},
\tag{5}
$$
$$
W_\chi=\chi_1\,e_{kk}\Gamma_{ll}+\chi_2\,e_{(ij)}\Gamma_{(ij)}+\chi_3\,e_{[ij]}\Gamma_{[ij]}\qquad\text{(Flag F2: chiral transduction)},
\tag{6}
$$
$$
W_4=\tfrac{\kappa_S}{4}\,\mathrm{Tr}\big([L_i,L_j][L_i,L_j]\big),\qquad L_i\equiv\tilde P^{-1}\partial_i\tilde P\qquad\text{(Flag F4: Skyrme quartic)},
\tag{7}
$$
$$
W_{6+0}=\tfrac12\Lambda^2b_P^2+\mathcal{V}(\sigma_P),\qquad b_P=-\frac{1}{24\pi^2}\epsilon_{ijk}\mathrm{Tr}(L_iL_jL_k),\qquad \mathcal{V}=\tilde m_V^2(1-\sigma_P)+c_2(1-\sigma_P)^2,
\tag{8}
$$
with $c_2\in[-\tilde m_V^2/2,\ \tilde m_V^2/6)$. The rotational kinetic term is normalized so that, with $\tilde Q^{-1}\partial_t\tilde Q=\tfrac{i}{2}\boldsymbol\omega\cdot\boldsymbol\sigma$, it equals $\tfrac12J|\boldsymbol\omega|^2$; the previous draft's coefficient $\tfrac12J$ gave $\tfrac14J|\boldsymbol\omega|^2$ and was inconsistent with its own linearized Lagrangian (Sec. II F).

Each sector has a structural job. $W_2$ is Eringen's micropolar elasticity [8]: non-symmetric stress and couple stress; it sets the wave speeds. $W_\chi$ is the handedness reservoir, the only parity-odd sector, and hence the ultimate source of all parity-violating physics and of the light–knot transduction vertex. $W_4$ is the Derrick–Hobart escape without which no static three-dimensional texture is stable [14]. $W_{6+0}$ is the BPS-Skyrme-lineage sector [16]: the topological density squared plus a locking potential, which together produce compactons, near-saturated topological bounds, small binding, and the band gap inside which the knot sector lives. Units: $[\Lambda]=E^{1/2}L^{3/2}$, $[\tilde m_V]=E^{1/2}L^{-3/2}$, $[J]=ET^2L^{-3}$; $[\Lambda\sqrt J]=ET$, and $\Lambda\tilde m_V$ is an energy — the rest-energy unit of the material.

**Postulates consumed below.** **(P1)** Cosserat energetics with micro-inertia $J>0$. **(P2)** The isotropic quadratic sector Eq. (5). **(P3)** Objectivity F10$'$. **(P4)** The locking regime: the relative-rotation gap exceeds every frequency at which the doublet is probed (made exact by Proposition 1). **(P5$'$)** The longitudinal micro-rotation obeys the Gauss-completion constraint, Flag F-G of Sec. III C; this replaces the previous draft's P5, which Proposition 5 shows to be unnecessary in the transverse sector. **(P6)** The topological sector Eqs. (7)–(8) with textures of integer degree $K\in\pi_3(S^3)=\mathbb{Z}$ [13, 33]. **(P7)** The chiral sector Eq. (6) with the near-BPS window $\epsilon\equiv[W_2+W_\chi+W_4]/[W_{6+0}]\ll1$ on knots (Flag F9), admission window $\epsilon\in[1.5\times10^{-6},3\times10^{-3}]$ [N]. Flags F5/F8 assert a periodic-on-average, statistically isotropic lattice at the structural scale $\ell_s$.

**Lemma 2 (The locking energy).** $\mu_ce_{[ij]}e_{[ij]}=2\mu_c|\boldsymbol\psi|^2$. Hence $\mu_c$ penalizes relative rotation only, and $\mu_c\to\infty$ enforces $\boldsymbol\varphi=\tfrac12\nabla\times\mathbf{u}$.

*Proof.* From Eq. (3), $e_{[ij]}e_{[ij]}=\epsilon_{ijk}\epsilon_{ijl}\psi_k\psi_l=2|\boldsymbol\psi|^2$. $\square$

## C. Balance laws and the exact linear spectrum

Variation of Eq. (4) gives
$$
\rho_0\ddot u_i=\partial_j\sigma_{ji},\qquad J\ddot\varphi_i=\partial_jm_{ji}+\epsilon_{ijk}\sigma_{jk}+\tau^{(6+0)}_i,\qquad \sigma_{ji}=\frac{\partial W}{\partial e_{ji}},\quad m_{ji}=\frac{\partial W}{\partial\Gamma_{ji}},
\tag{9}
$$
with non-symmetric stress whose antisymmetric part sources micro-rotation: the material constitutively exchanges orbital and internal angular momentum — an Einstein–de Haas mechanism built into the ontology, as required if micro-rotation is to be identified with spin.

Define the *relative-rotation stiffness* and the *effective curl modulus*
$$
\tilde m^2\equiv4\mu_c+\tfrac14\tilde m_V^2,\qquad \gamma_\mathrm{eff}\equiv\gamma+\beta,
\tag{10}
$$
so that the quadratic part of $W$ in $\boldsymbol\psi$ is $\tfrac12\tilde m^2|\boldsymbol\psi|^2$ (Lemma 2 and $1-\sigma_P\simeq|\boldsymbol\psi|^2/8$), and write $\omega_0\equiv\tilde m/\sqrt J$.

**Proposition 1 (Linear spectrum).** Linearize about the uniform locked state $\tilde P=\mathbb{1}$, with the chiral couplings set to zero at this order, and take $\mathbf{k}=k\hat{\mathbf z}$. The six real fields $(\mathbf{u},\boldsymbol\varphi)$ organize into four branches, the $3+3$ count exact:

- **B1** — longitudinal displacement: $\omega^2=c_L^2k^2$, $c_L^2=(\lambda+2\mu)/\rho_0$.
- **B2$\pm$** — the transverse doublet, and **B3$\pm$** — transverse relative rotation, determined by
$$
\big(\rho_0\omega^2-\mu k^2-\tfrac14\tilde m^2k^2\big)\big(J\omega^2-\tilde m^2-\tfrac12\gamma_\mathrm{eff}k^2\big)-\tfrac14\tilde m^4k^2=0 .
\tag{11}
$$
- **B4** — longitudinal micro-rotation: $\omega^2=\omega_0^2+c_4^2k^2$, $c_4^2=(\alpha+\beta)/J$.

If and only if the *cone condition*
$$
\frac{\mu}{\rho_0}=\frac{\gamma_\mathrm{eff}}{2J}\equiv c^2
\tag{12}
$$
holds, Eq. (11) factorizes exactly: the doublet is $\omega=ck$ for every $k$ with eigenvector $\boldsymbol\psi\equiv0$ (exact locking at all wavelengths), and the relative-rotation branch is
$$
\omega^2=\omega_0^2+c_\psi^2k^2,\qquad c_\psi^2=c^2+\frac{\tilde m^2}{4\rho_0}>c^2 .
\tag{13}
$$

*Proof.* For B1 the curl of $\mathbf{u}$ vanishes and $\mathbf{u}$ decouples from $\boldsymbol\varphi$ at linear order. For B4, $\boldsymbol\varphi\parallel\mathbf{k}$ gives $\Gamma_{[ij]}=0$, $\Gamma_{kk}^2=k^2\varphi^2$, $\Gamma_{(ij)}\Gamma_{(ij)}=k^2\varphi^2$, and $\boldsymbol\psi=\boldsymbol\varphi$ since $\nabla\times\mathbf{u}$ is transverse; the Lagrangian $\tfrac12J\dot\varphi^2-\tfrac12(\alpha+\beta)k^2\varphi^2-\tfrac12\tilde m^2\varphi^2$ gives the stated branch. For the transverse sector take $u_x=u\cos(kz-\omega t)$, $\varphi_y=\varphi\sin(kz-\omega t)$; then $\psi_y=(\varphi+\tfrac12ku)\sin(kz-\omega t)$, the transverse curvature energy is $\tfrac14\gamma_\mathrm{eff}k^2\varphi^2$ by the identity of Proposition 5, and the cycle-averaged Euler–Lagrange equations are $\rho_0\omega^2u=\mu k^2u+\tfrac12\tilde m^2k(\varphi+\tfrac12ku)$ and $J\omega^2\varphi=\tilde m^2(\varphi+\tfrac12ku)+\tfrac12\gamma_\mathrm{eff}k^2\varphi$, whose determinant is Eq. (11). Substituting $\omega^2=c^2k^2+\Delta$ with $c^2=\mu/\rho_0=\gamma_\mathrm{eff}/2J$, the first factor becomes $\rho_0\Delta-\tfrac14\tilde m^2k^2$ and the second $J\Delta-\tilde m^2$, so the determinant is $\Delta\,(\rho_0J\Delta-\rho_0\tilde m^2-\tfrac14J\tilde m^2k^2)$. The root $\Delta=0$ has eigenvector $\varphi=-\tfrac12ku$, i.e. $\psi=0$; the other root is Eq. (13). Conversely, if $\mu/\rho_0\neq\gamma_\mathrm{eff}/2J$, substituting $\omega^2=c'^2k^2$ into Eq. (11) leaves a $k$-dependent remainder at order $k^4$, so no linear branch exists for all $k$. $\square$

The proposition sharpens two items of the previous draft. First, the "cone-locking flow" is not needed to make the doublet dispersionless: a single constitutive relation, Eq. (12), does it exactly, at every wavelength and at finite $\tilde m$. The cone condition is imported [IM] and is the content of posed closure K-16. Second, the relative-rotation cone is *not* the light cone: $c_\psi$ exceeds $c$ by $\tilde m^2/4\rho_0$. Since knots are textures of the relative-rotation sector and inherit its limiting speed (Sec. VI), $(c_\psi-c)/c\simeq\tilde m^2/(8\rho_0c^2)$ is a maximal-attainable-velocity difference between matter and light, bounded by vacuum-Cherenkov and photon-decay constraints at the $10^{-15}$–$10^{-20}$ level [34, 35]. Writing $\tilde m^2=J\omega_0^2$ and $J\equiv\rho_0\ell_g^2$, with $\ell_g$ the radius of gyration of the grains, the ratio is $(\ell_g\omega_0/c)^2/8$. For a gap of order an MeV and $\ell_g=1.5\times10^{-27}$ m, the upper bound of Proposition 11 on $\ell_s$, it is $\approx7\times10^{-30}$. The gap that sets the matter cone, however, is the vacuum's: Sec. VIII C identifies the vacuum relative-rotation triplet with the weak triplet, $\hbar\omega_0\simeq M_Wc^2\approx80$ GeV, for which the ratio is $\approx5\times10^{-20}$ at the same $\ell_g$ — at the edge of the strongest bounds. Requiring $(c_\psi-c)/c\lesssim10^{-20}$ gives $\ell_g=\sqrt{J/\rho_0}\lesssim7\times10^{-28}$ m. This is a constraint on the micro-inertia: either the grains are lighter in rotation than $\rho_0\ell_s^2$, or $\ell_s$ lies about a factor of two below the timing bound of Eq. (45), which would raise the lower end of the cliff range of Table 1 by about three qubits. The first printing of this revision estimated the ratio as $\lesssim10^{-36}$ for an MeV-scale gap and called it harmless; that was an arithmetic slip compounded by the wrong gap (erratum E2, Sec. XI E).

## D. Objectivity as gauge principle: what it does and does not explain

**Theorem 1 (The doublet is gapless).** Under (P1)–(P4), a uniform co-rotation of lattice and grains costs no energy, and the locked transverse doublet is gapless to all orders in the potential sector.

*Proof.* By Lemma 1 every objective variable vanishes for a uniform co-rotation, so $W$ does; the $k\to0$ limit of the locked transverse mode is a uniform co-rotation; hence $\omega(k)\to0$. Nonlinearly, $\tilde P$ is invariant under $\tilde Q\to\tilde R_0\tilde Q$, $\mathsf{R}[\mathbf{u}]\to\mathsf{R}_0\mathsf{R}[\mathbf{u}]$, so the entire potential sector contributes no mass to B2 at any order. $\square$

GUM is explicit about the status of this theorem. It is a theorem of (P3), and (P3) is adopted — as gauge symmetry historically was — by demanding that an unwanted mass term vanish. Under Definition 9 it therefore does not *explain* photon masslessness, and GUM does not claim that it does. What (P3) does that gauge symmetry alone does not is entail, with the same stroke, three further facts: achirality of the doublet at tree level (locking quenches $\chi_3$ on B2, with regeneration $(k\ell_s)^2$-suppressed); kinematic stability of vacuum photons (by Eq. (13) the line $\omega=ck$ lies strictly below the B3 hyperbola, and a lightlike vector cannot equal a sum of two timelike vectors); and the absence of any gapless charged mode (any branch carrying net disclination winding pays the locked tension). These are standing inverse kills (Stake S7). The previous draft listed a fourth fact — a measurable electromagnetic departure from Maxwell's theory through finite $c_L$. Section III C shows that, in any local completion that recovers Gauss's law, there is none.

## E. Imports

A material proposal is measured by the length of its import list as much as by its theorems. GUM's continuum description has, in the isotropic centrosymmetric sector, six moduli $(\lambda,\mu,\mu_c,\alpha,\beta,\gamma)$ and two inertias $(\rho_0,J)$ [8]; chirality adds $\chi_{1,2,3}$; the topological sector adds $(\kappa_S,\Lambda,\tilde m_V,c_2)$. Of these, GUM fixes $c^2=\gamma_\mathrm{eff}/2J$ to the speed of light and imports the cone condition Eq. (12); imports $c_L$ as a constitutive constant bounded below by Bell timing (Sec. V G); fixes one relation among $(\Lambda,J,\hbar_\mathrm{stat})$ by closure (Sec. VI C); imports the structural scale $\ell_s$ and the relaxation index $n$ (Sec. IX); and imports the fine-structure constant and the electroweak mixing modulus as constitutive ratios (Sec. VIII). Appendix A prints the full list.

## F. Normalization conventions and the audit K-N

Formalization exposed four inconsistencies in the previous draft's bookkeeping. They are corrected here, and their downstream effects are graded rather than silently absorbed.

(1) *Kinetic normalization.* With the coefficient $\tfrac12J$ in front of the trace, the rotational kinetic energy is $\tfrac14J|\boldsymbol\omega|^2$, whereas the electromagnetic sector used $\tfrac12J\dot{\boldsymbol\varphi}^2$ to obtain $c^2=\gamma/2J$. Equation (4) adopts the coefficient $J$, which makes the two consistent; nothing in the electromagnetic sector changes.

(2) *The gap modulus.* The previous draft wrote the B3 gap as $\omega_0=\tilde m/\sqrt J$ with $\tilde m$ the coefficient of the potential and without the locking contribution. With Eqs. (4)–(8) the gap is $\omega_0^2=(4\mu_c+\tfrac14\tilde m_V^2)/J$, Eq. (10). We keep the symbol $\tilde m$ for the total stiffness, so that $\omega_0=\tilde m/\sqrt J$ remains true, and write $\tilde m_V$ for the potential coefficient that enters the Bogomolny constant of Sec. VI.

(3) *The halo length.* The in-gap decay length of B3 at clock frequency $\kappa\omega_0$ is $c_\psi/\big(\omega_0\sqrt{1-\kappa^2}\big)$. With the closure value $\kappa=1/\sqrt2$ and $\hbar\omega_0=\sqrt2Mc^2$ it equals $(c_\psi/c)\,\hbar/Mc$, not $\hbar/(\sqrt2Mc)$ as printed previously (Proposition 17).

(4) *P5.* For a divergence-free micro-rotation, the symmetric wryness energy renormalizes the curl modulus, $\gamma\to\gamma+\beta$ (Proposition 5). The previous P5, which confined $\alpha,\beta$ to the longitudinal sector, is therefore unnecessary for the transverse sector; what the longitudinal sector *does* is now fixed by Flag F-G.

Items (1), (2), and (4) change no number in the core. Item (3) changes how one number is computed. The flavor bridge of Sec. VIII B fixes a logarithm, $X\equiv\ln(1/q\lambda_{\mathrm{halo},\tau})=24.36\pm0.90$, and converting it into the heaviest neutrino mass requires the halo length as a yardstick: $m_3c^2=\zeta_\nu\hbar c\,e^{-X}/\lambda_{\mathrm{halo},\tau}$. With the corrected halo of Eq. (62), $\lambda_{\mathrm{halo},\tau}\simeq\hbar/m_\tau c$ and $m_3c^2=\zeta_\nu m_\tau c^2e^{-X}\simeq0.047\,\zeta_\nu$ eV, the value the previous draft printed. With the previous draft's halo $\hbar/(\sqrt2m_\tau c)$, the same logarithm gives $\sqrt2\times0.047\simeq0.066$ eV. At $\zeta_\nu=1$ the previous draft's printed halo length and its printed $m_3$ are therefore mutually inconsistent, and at fixed integrals the correction either leaves the central value at $0.047$ eV (if $X$ was referenced to $\hbar/m_\tau c$, as the printed conversion implies) or raises it to $0.066$ eV with $1\sigma$ band $[0.027,0.16]$ eV (if $X$ was referenced to the old halo). In the second case Stake S1's floor-truncated window lies $0.16$–$0.31\sigma$ below the center, inside the band. In neither case does the correction push the prediction below the oscillation floor $\sqrt{\Delta m_{31}^2}\simeq0.050$ eV. Whether the integrals themselves change when evaluated on the corrected halo profile is what this paper cannot check. Posed closure **K-N** (normalization audit) has two deliverables: re-evaluation of every [N] quantity under Eqs. (4)–(10), and the corrected bridge inversion. Kill: a corrected $1\sigma$ band lying entirely below $0.050$ eV retires S1 and the neutrino-as-pitch-quantum identification at its present grade.

# III. Electrodynamics as the Orientation Sector

## A. MacCullagh and the Cosserat rescue

In 1839 MacCullagh exhibited the unique classical aether whose dynamics reproduce Fresnel's optics: a continuum storing energy in the curl of the displacement alone [21, 22],
$$
W_\mathrm{MC}=\tfrac12\kappa\,|\nabla\times\mathbf{u}|^2 .
\tag{14}
$$
It reproduces propagation, reflection, refraction, and polarization exactly, and as a Cauchy continuum it is inconsistent: its stress is antisymmetric, angular momentum is unbalanced, and it has no shear rigidity. GUM's diagnosis is a theorem.

**Theorem 2 (Cauchy no-go).** In a non-polar continuum whose stored energy is a function of $\nabla\mathbf{u}$ alone, linearized objectivity implies $W=W(\varepsilon_{ij})$. Hence Eq. (14) is objective only if $\kappa=0$, and no objective Cauchy energy reproduces MacCullagh's aether.

*Proof.* Impose invariance of $W(\partial_iu_j)$ under $\delta\mathbf{u}=\boldsymbol\omega\times\mathbf{x}$ for all constant $\boldsymbol\omega$. By Lemma 1 this fixes $\varepsilon_{ij}$ and shifts $\partial_{[i}u_{j]}$ by the arbitrary antisymmetric tensor $\epsilon_{jki}\omega_k$; invariance forces $\partial W/\partial(\partial_{[i}u_{j]})=0$. Since $|\nabla\times\mathbf{u}|^2=2\,\partial_{[i}u_{j]}\partial_{[i}u_{j]}$, $W_\mathrm{MC}$ is objective only if $\kappa=0$. $\square$

**Theorem 3 (Micropolar rescue).** In the GUM material the energy $\tfrac12\gamma\,\Gamma_{[ij]}\Gamma_{[ij]}=\tfrac14\gamma|\nabla\times\boldsymbol\varphi|^2$ is objective, has MacCullagh's form with $\mathbf{u}\to\boldsymbol\varphi$, and coexists with full Cauchy rigidity $\mu>0$; angular momentum is balanced by the couple stress. In the locked doublet (Proposition 1) the transverse displacement and orientation co-move exactly, so the MacCullagh energy is carried by B2 at every wavelength.

*Proof.* Objectivity of $\Gamma_{ij}$ is Lemma 1; $\Gamma_{[ij]}=\tfrac12\epsilon_{ijk}(\nabla\times\boldsymbol\varphi)_k$ gives the identity; the second of Eqs. (9) balances the antisymmetric stress — the term with no partner in a Cauchy continuum — against $\partial_jm_{ji}$ and micro-inertia; coexistence with $\mu>0$ is manifest in Eq. (5). Exact co-motion ($\boldsymbol\psi\equiv0$ on B2) is Proposition 1 under the cone condition. $\square$

The nineteenth century's aether program did not fail because light-as-material-response is impossible; it failed because the required class of continuum descriptions had not been invented. Kelvin's gyrostatic model [23] realized MacCullagh's rotational elasticity with hidden rotors but not alongside shear rigidity; Böhmer, Downes, and Vassiliev [24] obtained Maxwell-type equations from a purely rotational continuum. What Theorems 2–3 add is the objectivity diagnosis that separates the inconsistent Cauchy reading from the consistent micropolar one, and the coexistence of rotational elasticity with a rigid lattice in one continuum. This result is independent of everything else in GUM.

## B. Maxwell in the locked doublet

**Theorem 4 (Source-free Maxwell equations).** Let the orientation sector obey (P1)–(P4) with Lagrangian density $\mathcal{L}_\perp=\tfrac12J\dot{\boldsymbol\varphi}^2-\tfrac14\gamma_\mathrm{eff}|\nabla\times\boldsymbol\varphi|^2$ on divergence-free $\boldsymbol\varphi$. Define
$$
\mathbf{B}\equiv\kappa_B\nabla\times\boldsymbol\varphi,\qquad \mathbf{E}_\varphi\equiv-\kappa_B\dot{\boldsymbol\varphi},\qquad \mathbf{A}\equiv\kappa_B\boldsymbol\varphi .
\tag{15}
$$
Then $\nabla\cdot\mathbf{B}=0$ and $\nabla\times\mathbf{E}_\varphi=-\partial_t\mathbf{B}$ identically; $\partial_t\mathbf{E}_\varphi=c^2\nabla\times\mathbf{B}$ dynamically with
$$
c^2=\frac{\gamma_\mathrm{eff}}{2J};
\tag{16}
$$
and the energy density $\tfrac12J\dot{\boldsymbol\varphi}^2+\tfrac14\gamma_\mathrm{eff}|\nabla\times\boldsymbol\varphi|^2$ equals $\tfrac12\varepsilon^\ast(\mathbf{E}_\varphi^2+c^2\mathbf{B}^2)$ with $\varepsilon^\ast\equiv J/\kappa_B^2$.

*Proof.* The identities are $\nabla\cdot\nabla\times=0$ and $\nabla\times\partial_t=\partial_t\nabla\times$. The Euler–Lagrange equation is $J\ddot{\boldsymbol\varphi}=-\tfrac12\gamma_\mathrm{eff}\nabla\times\nabla\times\boldsymbol\varphi$ (Appendix B), so $\partial_t\mathbf{E}_\varphi=(\gamma_\mathrm{eff}/2J)\nabla\times\mathbf{B}$. The energy identity follows from $\tfrac12J\dot{\boldsymbol\varphi}^2=\tfrac12(J/\kappa_B^2)\mathbf{E}_\varphi^2$ and $\tfrac14\gamma_\mathrm{eff}|\nabla\times\boldsymbol\varphi|^2=\tfrac12(J/\kappa_B^2)c^2\mathbf{B}^2$. $\square$

The content of this theorem is old: a MacCullagh Lagrangian for a vector field yields the source-free Maxwell equations with the vector potential identified with the field. What is GUM's is the legitimacy of the Lagrangian (Theorem 3), the identification of $\mathbf{A}$ with the physical grain orientation, and the reading of the displacement current as rotational inertia: light exists because spinning grains have inertia. Time-independent re-conventions $\boldsymbol\varphi\to\boldsymbol\varphi+\nabla\chi(\mathbf{x})$ are re-choices of the reference triad and leave $\mathbf{E}_\varphi$, $\mathbf{B}$, and $\mathcal{L}_\perp$ unchanged. Time-dependent re-conventions are *not* free in GUM: they would shift the longitudinal sector, which is physical. How the material fixes them is the subject of the next subsection, and the answer is a theorem.

## C. The longitudinal sector and the locality dichotomy

Two of Maxwell's equations are identities of Eq. (15), one is the dynamics of B2, and Gauss's law is not among them.

**Proposition 2 (The transverse identification carries no static field).** With $\mathbf{E}=\mathbf{E}_\varphi$ alone, a static field $\mathbf{E}_0\neq0$ requires $\boldsymbol\varphi(t)=\boldsymbol\varphi(0)-\mathbf{E}_0t/\kappa_B$, an orientation growing without bound. Electrostatics requires a longitudinal field that is not $-\kappa_B\dot{\boldsymbol\varphi}$.

The longitudinal field is supplied by the B1 sector. Let $\rho_q$ and $\mathbf{j}_q$ be the disclination winding density and current; by degree conservation (Lemma 5) they obey $\partial_t\rho_q+\nabla\cdot\mathbf{j}_q=0$. The *frame-connection scalar* $\Phi_c$ is the longitudinal potential of B1 sourced by winding density,
$$
\Big(\frac{1}{c_L^2}\partial_t^2-\nabla^2\Big)\Phi_c=\frac{\rho_q}{\varepsilon^\ast},
\tag{17}
$$
with retarded conditions, and the total electric field is $\mathbf{E}\equiv\mathbf{E}_\varphi-\nabla\Phi_c$. We write $\Phi_\infty\equiv(-\nabla^2)^{-1}\rho_q/\varepsilon^\ast$ for the instantaneous Coulomb potential, and $(\mathbf{E}^M,\mathbf{B}^M)$ for the retarded Maxwell fields of $(\rho_q,\mathbf{j}_q)$. Two elliptic-type problems coexist in the longitudinal sector and are kept separate by construction: the frame-connection scalar sourced by winding (electrostatics) and the pressure multiplier of the stiff B1 sector sourced by knot cores (the quantum-potential constraint of Sec. V). Distinct fields, distinct sources; conflating them would make charge proportional to mass.

What the previous draft did not specify is how moving winding sources the orientation sector. Write the orientation sector's balance, projected onto the doublet's equation of motion, as
$$
\partial_t\mathbf{E}_\varphi=c^2\nabla\times\mathbf{B}-\frac{\mathbf{J}_\varphi}{\varepsilon^\ast},\qquad \partial_t\mathbf{B}=-\nabla\times\mathbf{E}_\varphi ,
\tag{18}
$$
where $\mathbf{J}_\varphi$ is the torque-current through which winding drives micro-rotation.

**Definition 1 (Completions of the longitudinal sector).** A *completion* is a specification of $\mathbf{J}_\varphi$ as a causal functional of $(\rho_q,\mathbf{j}_q,\Phi_c)$. Two are distinguished:

- the *transverse completion* (T): $\mathbf{J}_\varphi=\mathsf{P}_\perp\mathbf{j}_q$, the transverse projection, so that $\mathbf{E}_\varphi$ stays divergence-free — the reading of the previous draft;
- the *Gauss completion* (G): $\mathbf{J}_\varphi=\mathbf{j}_q-\varepsilon^\ast\partial_t\nabla\Phi_c$, a local functional.

For any completion define the *defect current* $\mathbf{j}_\mathrm{def}\equiv\mathbf{J}_\varphi-\mathbf{j}_q+\varepsilon^\ast\partial_t\nabla\Phi_c$ and the *defect density* $\rho_\mathrm{def}$ by $\partial_t\rho_\mathrm{def}+\nabla\cdot\mathbf{j}_\mathrm{def}=0$, $\rho_\mathrm{def}\to0$ in the past.

**Theorem 5 (Defect representation).** For any completion, $(\mathbf{E},\mathbf{B})$ obey Maxwell's equations with sources $(\rho_q+\rho_\mathrm{def},\ \mathbf{j}_q+\mathbf{j}_\mathrm{def})$. Consequently
$$
\mathbf{E}-\mathbf{E}^M=\mathbf{E}^M[\rho_\mathrm{def},\mathbf{j}_\mathrm{def}],\qquad \mathbf{B}-\mathbf{B}^M=\mathbf{B}^M[\rho_\mathrm{def},\mathbf{j}_\mathrm{def}],
\tag{19}
$$
the deviation from Maxwell's theory is the retarded Maxwell field of the conserved defect current, and the Gauss defect is $\nabla\cdot\mathbf{E}-\rho_q/\varepsilon^\ast=\rho_\mathrm{def}/\varepsilon^\ast$.

*Proof.* Faraday's law and $\nabla\cdot\mathbf{B}=0$ hold because $\nabla\times\nabla\Phi_c=0$. From Eq. (18), $\partial_t\mathbf{E}=c^2\nabla\times\mathbf{B}-(\mathbf{j}_q+\mathbf{j}_\mathrm{def})/\varepsilon^\ast$ by the definition of $\mathbf{j}_\mathrm{def}$. Taking the divergence of Eq. (18) and using Eq. (17) and both continuity equations gives $\partial_t(\nabla\cdot\mathbf{E})=\partial_t(\rho_q+\rho_\mathrm{def})/\varepsilon^\ast$, hence Gauss's law with the total source, given that all fields vanish before the sources switch on. Maxwell's equations with retarded conditions have a unique solution, linear in the sources. $\square$

**Theorem 6 (Locality dichotomy).** (i) In (T), $\mathbf{j}_\mathrm{def}=\varepsilon^\ast\partial_t\nabla(\Phi_c-\Phi_\infty)$ and
$$
\mathbf{E}^{(T)}-\mathbf{E}^M=-\nabla(\Phi_c-\Phi_\infty),\qquad \mathbf{B}^{(T)}=\mathbf{B}^M .
\tag{20}
$$
If a source that is static for $t<0$ changes its dipole moment at $t=0$ inside a ball of radius $R_0$, then at every point with $|\mathbf{x}|>R_0+c_Lt$ the field has already changed by $-\Delta\mathbf{E}_C(\mathbf{x})$, minus the change of the instantaneous Coulomb field. (T) is therefore acausal at every finite speed and permits instantaneous signaling in the material frame; at $c_L=\infty$ it coincides with (G) in the Coulomb gauge and is causal. (ii) In (G), $\mathbf{j}_\mathrm{def}\equiv0$, so $(\mathbf{E},\mathbf{B})=(\mathbf{E}^M,\mathbf{B}^M)$ exactly, for every $c_L\in(0,\infty]$. The two pieces $\mathbf{E}_\varphi=\mathbf{E}^M+\nabla\Phi_c$ and $-\nabla\Phi_c$ are separately $c_L$-causal, and their sum is $c$-causal. The constitutive content of (G) is the local constraint
$$
\kappa_B\nabla\cdot\boldsymbol\varphi+\frac{1}{c_L^2}\partial_t\Phi_c=0,
\tag{21}
$$
which is the velocity-gauge condition $\nabla\cdot\mathbf{A}+c_L^{-2}\partial_t\Phi=0$ of Maxwell theory [25] with $\mathbf{A}=\kappa_B\boldsymbol\varphi$ and $\Phi=\Phi_c$.

*Proof.* (i) The transverse part of the current is $\mathsf{P}_\perp\mathbf{j}_q=\mathbf{j}_q-\mathsf{P}_L\mathbf{j}_q$ and, by continuity and $\rho_q=-\varepsilon^\ast\nabla^2\Phi_\infty$, $\mathsf{P}_L\mathbf{j}_q=\varepsilon^\ast\partial_t\nabla\Phi_\infty$; hence the stated $\mathbf{j}_\mathrm{def}$. A purely longitudinal conserved current generates no magnetic field, and its electric field is the instantaneous gradient $-\nabla(\Phi_c-\Phi_\infty)$, which gives Eq. (20) through Theorem 5. Outside the $c_L$-cone of the source, $\Phi_c$ still equals its old static value while $\Phi_\infty$ has changed, and the Maxwell field outside its light cone is the old static field, so the total field there is the old field minus $\Delta\mathbf{E}_C$. (ii) $\mathbf{j}_\mathrm{def}=0$ by definition, and Theorem 5 gives exact agreement. The divergence of $\mathbf{E}_\varphi$ is $\nabla\cdot\mathbf{E}^M+\nabla^2\Phi_c=c_L^{-2}\partial_t^2\Phi_c$ by Eq. (17); with $\mathbf{E}_\varphi=-\kappa_B\dot{\boldsymbol\varphi}$ and vanishing past data, this integrates to Eq. (21). $\square$

**Corollary 1 ($c_L$ is invisible to electromagnetic probes).** In (G), no measurement that couples to charges only through the Lorentz force, or to radiation only through $(\mathbf{E},\mathbf{B})$, can determine $c_L$. In particular, within (G) the longitudinal radiation of relative power $\eta(c/c_L)^3$ claimed in the previous draft does not load the source: it is an internal exchange between B1 and the longitudinal micro-rotation, whose sum reproduces Maxwell's fields and hence Maxwell's radiation reaction. Proposition 3 states what this requires of the longitudinal energy.

*Proof.* Forces, radiation reaction, and the Poynting balance are functionals of $(\mathbf{E},\mathbf{B})$, which by Theorem 6(ii) are Maxwell's for every $c_L$. $\square$

**Flag F-G (Gauss completion).** GUM adopts (G) as its core completion: Eq. (21) is a constitutive law of the longitudinal micro-rotation (postulate P5$'$). Under Definition 9 this is circular — F-G is adopted because it recovers Gauss's law — and GUM says so. What F-G buys is a precise statement of the material's gauge: gauge freedom is a redundancy of the *bookkeeping*, while the material itself realizes one gauge, the velocity gauge with speed $c_L$, in which the grain orientation *is* the potential. Whether Eq. (21) can be derived from Eq. (4) rather than imposed — for instance as the stiff limit of a constitutive term $\propto(\kappa_B\nabla\cdot\boldsymbol\varphi+c_L^{-2}\partial_t\Phi_c)^2$ — is posed closure **K-18**. Its second deliverable is the defect current of any completion the action actually produces, and its third is the sign structure of the longitudinal energy (Proposition 3).

**Proposition 3 (Energy bookkeeping at finite $c_L$).** Suppose, under F-G, that winding sources feel the Lorentz force of the total fields and that the energy of the longitudinal sector — B1 together with the longitudinal micro-rotation — is positive definite, with B1 normalized as $\tfrac12\varepsilon^\ast(c_L^{-2}\dot\Phi_c^2+\lvert\nabla\Phi_c\rvert^2)$. Then for a neutral source with time-periodic dipole moment $\mathbf{d}(t)$ the assumptions are inconsistent at finite $c_L$. The retarded solution of Eq. (17) has the radiation zone $\Phi_c\simeq\hat{\mathbf n}\cdot\dot{\mathbf d}(t-r/c_L)/(4\pi\varepsilon^\ast c_Lr)$, which carries the time-averaged power
$$
\frac{P_L}{P_M}=\frac12\left(\frac{c}{c_L}\right)^3
\tag{22}
$$
relative to Maxwell's dipole power $P_M$, whereas exact Maxwell fields require the longitudinal sector's net flux to vanish. At least one of the following therefore holds: (a) the longitudinal sector's energy is indefinite, as the scalar and longitudinal photons of the Lorenz gauge are in Gupta–Bleuler quantization; (b) the source feels an additional radiation reaction of relative size Eq. (22), so that (G) holds only up to a defect current of that order; or (c) $c_L=\infty$, where (G) and (T) coincide in the Coulomb gauge and B1 does not radiate.

*Proof.* In a time-periodic state the time-averaged field energy is constant, so the time-averaged power delivered by the sources equals the time-averaged flux to infinity, which is the transverse (Maxwell) flux plus the longitudinal flux. By Theorem 6(ii) the delivered power is Maxwell's, so the longitudinal flux must average to zero; a positive-definite sector with outgoing radiation carries strictly positive flux whenever its radiation field is nonzero. The far-zone expansion of the retarded potential of a neutral source gives the stated $\Phi_c$. Its energy flux $-\varepsilon^\ast\dot\Phi_c\nabla\Phi_c$ integrates to $\ddot{\mathbf d}^2/(12\pi\varepsilon^\ast c_L^3)$, against Maxwell's $\ddot{\mathbf d}^2/(6\pi\varepsilon^\ast c^3)$. $\square$

The proposition locates the previous draft's $(c/c_L)^3$ channel exactly: it is not an electromagnetic signal but the energy that a positive-energy longitudinal sector would leak, and with $c_L\ge10^4c$ it is at most $5\times10^{-13}$ of the dipole power, far below any radiation-reaction measurement. Option (c) has a structural cost. It removes the finite longitudinal speed from the material altogether, so the tower's finite update speed of Sec. V G would have to be a separate modulus, breaking cross-lock C-L. Which option the action realizes is part of K-18.

The theorem changes what the previous draft called its most direct ontological test. Any local completion other than (G), for instance one in which the longitudinal micro-rotation follows its own B4 dynamics (Proposition 1) instead of Eq. (21), has $\mathbf{j}_\mathrm{def}\neq0$, localized inside the fastest cone of the local dynamics. By Eq. (19) its signature is a retarded Maxwell field radiated by the defect current. Near the source this field has the two-cone space-time structure of Stokes's elastodynamic Green's function [36], with near-field terms supported between the arrival of the fast and slow fronts (Appendix B). Its amplitude is the deliverable of K-18. Under F-G it is zero.

## D. The near-field experiment as a null test

Stake S15 is re-graded [RG]: GUM's core now predicts *no* electromagnetic precursor, and the near-field experiment tests F-G. Such experiments are cheap and have been attempted with contested results. Kholmetskii et al. reported anomalous near-zone propagation of bound fields [37]; de Sangro et al. reported Coulomb fields of relativistic bunches that appeared rigidly attached to the bunch [38]. For a uniformly moving charge the Liénard–Wiechert field already points at the present position, so only abrupt changes of motion discriminate. A clean protocol has four elements. The first is an abrupt source: a pulsed dipole or a bunch emerging from a conductor. The second is battery-powered field sensors at baselines of $10$–$100$ m with analog-optical readout, so that no metallic path joins source and sensor. The third is White Rabbit time transfer at the $10$ ps level. The fourth is a blinded analysis of the window $0<t<r/c$ binned in sidereal time. A pre-light signal that survives these controls would retire F-G. It would also identify the material frame, because of the following kinematics.

**Proposition 4 (Lab-frame ordering of material-frame signals).** Let the lab move with velocity $\mathbf{v}_M$ relative to the material frame, and let an influence propagate at speed $c_L$ in the material frame from a source event to a receiver at material-frame distance $r$ in direction $\hat{\mathbf n}$. On Einstein-synchronized lab clocks the arrival time is
$$
t_\mathrm{lab}=\gamma_v\,r\left(\frac{1}{c_L}-\frac{\mathbf{v}_M\cdot\hat{\mathbf n}}{c^2}\right).
\tag{23}
$$
Hence the influence arrives *before* the source event whenever $\mathbf{v}_M\cdot\hat{\mathbf n}>c^2/c_L$. For $c_L\ge10^4c$ this is possible for every $v_M\gtrsim30\ \mathrm{km\,s^{-1}}$. As the Earth rotates, $\hat{\mathbf n}$ sweeps relative to $\mathbf{v}_M$, and $t_\mathrm{lab}$ oscillates with sidereal period with amplitude $\gamma_vrv_M\sin\theta_\oplus\,n_\perp/c^2$, where $\theta_\oplus$ is the angle between $\mathbf{v}_M$ and the Earth's axis and $n_\perp$ is the component of $\hat{\mathbf n}$ perpendicular to that axis. For $v_M=369.8\ \mathrm{km\,s^{-1}}$ (the CMB dipole, $\sin\theta_\oplus\simeq0.99$), an east–west baseline, and $r=100$ m, the full swing is $\simeq0.8$ ns.

*Proof.* Lorentz transformation of the arrival event $(r/c_L,\ r\hat{\mathbf n})$ from the material frame to the lab (Appendix F). $\square$

The proposition is frame-agnostic about which frame is the material's. It turns any positive signal into a measurement of $\mathbf{v}_M$, and it is the same kinematics that governs the tower's influences in Sec. V G, where GUM's core does predict an effect.

## E. Charge, Coulomb, and Aharonov–Bohm

The elementary charge is a wedge-disclination dressing of the knot: the triad convention winds irremovably around a defect line, with Frank class in $\pi_1$ of the convention circle. Charge is triple-locked — disclination winding $w$ at field level, knot degree $K$ (the dressing is bound to the texture), and compact-phase integer at point level — three independent integer locks on indivisibility [DF]. Static defect equilibrium in Eq. (17) with a point winding source gives the Coulomb far field $\mathbf{E}=(q/4\pi\varepsilon^\ast)\hat{\mathbf r}/r^2$. Like-handed disclinations superpose rotation fields coherently and repel; opposite Frank vectors partially annul the intervening distortion and attract. This is the interaction energetics of disclinations, read as electrostatics. A charged texture transported around a region of enclosed flux $\Phi_B$ that no knot enters acquires the holonomy $\Delta\phi=(q/\hbar)\oint\mathbf{A}\cdot d\mathbf{l}=q\Phi_B/\hbar$. The connection is flat and the transport nonzero: this is the Aharonov–Bohm phenomenology, with no input beyond the connection of Theorem 4, contributing dynamical phase only [DF]. Under F-G the holonomy is gauge-invariant, as it must be: the loop integral of the velocity-gauge potential equals that of any other gauge.

The fine-structure constant compares defect self-coupling to torsion-wave stiffness. It is dimensionally secure, structurally plausible (one stiffness hierarchy renders $\alpha<1$, $c$ large, and $G$ small together), and quantitatively *unclaimed* [IM]. GUM's ledger forbids numerology, and the honesty of this import is what makes the electroweak-mixing import of Sec. VIII credible.

## F. P5 revisited: the transverse sector does not need it

The previous draft postulated that the moduli $\alpha,\beta$ act only in the longitudinal sector, so that the transverse Lagrangian is gauge invariant, and printed the cost of that postulate. The cost is smaller than stated.

**Proposition 5 (Symmetric wryness is statically invisible).** For a divergence-free micro-rotation field decaying at infinity on $\mathbb{R}^3$,
$$
\int\Gamma_{(ij)}\Gamma_{(ij)}\,d^3x=\tfrac12\int|\nabla\times\boldsymbol\varphi|^2\,d^3x .
\tag{24}
$$
Hence in the transverse sector the $\beta$ term renormalizes the curl modulus, $\gamma\to\gamma_\mathrm{eff}=\gamma+\beta$, and has no other effect; $\alpha$ does not act at all. A transverse $\beta\neq0$ is invisible to magnetostatics, to radiation, and to the doublet's dispersion.

*Proof.* Decompose $\partial_i\varphi_j$ into symmetric and antisymmetric parts: $|\nabla\boldsymbol\varphi|^2=\Gamma_{(ij)}\Gamma_{(ij)}+\Gamma_{[ij]}\Gamma_{[ij]}$ with $\Gamma_{[ij]}\Gamma_{[ij]}=\tfrac12|\nabla\times\boldsymbol\varphi|^2$. Two integrations by parts give $\int|\nabla\boldsymbol\varphi|^2=\int\big(|\nabla\times\boldsymbol\varphi|^2+(\nabla\cdot\boldsymbol\varphi)^2\big)$. Setting $\nabla\cdot\boldsymbol\varphi=0$ and subtracting yields Eq. (24). $\square$

In multiply connected regions, such as the exterior of a flux tube, the integrations by parts leave boundary terms on the tube's surface, and the exterior region then appears to store energy $\propto\beta\Phi_B^2$ in a field-free zone. For a smooth material the interior contribution cancels it, and the total is the renormalization of $\gamma$. The physical content of the old P5 is therefore entirely longitudinal, where it is now replaced by F-G.

# IV. The Structured Vacuum: Pitch, Passage, and the Far-Infrared Trough

## A. The chiral condensate

GUM's chiral sector condenses. A conical texture of pitch wavenumber $q$ in a sector with twist stiffness $\gamma_s$, chiral gain $\chi_s$, and gap $\Delta_s$ has free-energy density
$$
f(\theta,q)=\sin^2\theta\left(-\chi_sq+\tfrac12\gamma_sq^2\right)+\tfrac12\Delta_s^2\theta^2,
\tag{25}
$$
optimized at $q^\ast=\chi_s/\gamma_s$, with condensation iff $\chi_s^2>\gamma_s\Delta_s^2$ (Dzyaloshinskii's criterion [39]) [DF]. In the gapped relative sector the criterion fails. The condensate lives instead on the $\epsilon$-lifted SDiff manifold of the $(6+0)$ vacuum, where every ingredient of the margin $\mathfrak{m}\equiv\bar\chi^2/(\bar\gamma\bar\Delta^2)$ carries one power of $\epsilon$, so that $\mathfrak{m}$ is a pure number of couplings, $\mathfrak{m}=1.9\pm0.4$ [N]. Double twist gains locally about twice the single helix's chiral energy but cannot tile $\mathbb{R}^3$. In the window $1<\mathfrak{m}\lesssim$ few, the amorphous double-twist network beats the single-axis cholesteric [40]: the vacuum is locally helical and globally statistically isotropic — the blue fog, Flag F13 [DW] — with condensate tilt $\sin\theta_c=\sqrt{1-1/\mathfrak{m}}=0.69\pm0.11$ [N].

## B. The pitch and the neutrino

The pitch is fixed by the flavor sector (Sec. VIII B): the neutrino is the pitch quantum. We write the identification with an explicit order-unity factor,
$$
m_3c^2=\zeta_\nu\,\hbar qc,\qquad p\equiv\frac{2\pi}{q}=\zeta_\nu\frac{hc}{m_3c^2},
\tag{26}
$$
with $\zeta_\nu=1$ the minimal hypothesis used in the previous draft. A periodic-on-average handed structure at pitch $p$ is a photonic structure at frequency $c/(\bar np)$.

**Proposition 6 (The pitch window).** With normal ordering, the oscillation floor $m_3\ge\sqrt{\Delta m^2_{31}}\simeq0.0503$ eV, and the upper edge $m_3\le0.057$ eV of Stake S1,
$$
p/\zeta_\nu\in[21.8,\ 24.7]\ \mu\mathrm{m},\qquad c/(\bar np)\in[12.2,\ 13.8]\ \mathrm{THz}\times(\zeta_\nu\bar n)^{-1}.
\tag{27}
$$
If the $\Lambda$CDM cosmological bound $\Sigma m_\nu<0.064$ eV holds [41, 42], then $m_3\le0.0505$ eV and $p/\zeta_\nu\in[24.5,\ 24.7]\ \mu$m.

*Proof.* $hc=1.23984\ \mathrm{eV}\,\mu\mathrm{m}$. Dividing by $m_3\in[0.0503,0.057]$ eV gives the first interval. For normal ordering $\Sigma m_\nu=m_1+\sqrt{m_1^2+\Delta m^2_{21}}+\sqrt{m_1^2+\Delta m^2_{31}}$; at $\Sigma m_\nu=0.064$ eV this gives $m_1\simeq0.004$ eV and $m_3\simeq0.0505$ eV (Appendix H). $\square$

The previous draft's central value, $p\simeq26\ \mu$m from $m_3=0.047$ eV, lies below the oscillation floor that the same draft used to truncate Stake S1. The window of Eq. (27) is the one consistent with that truncation. It is also subject to the normalization audit K-N, which may move $m_3$.

## C. Cosmological Bragg passage

Any coupling of the doublet to the helix is, at leading order, a modulation $\Delta n$ of the doublet's effective index along the local helix axis. For propagation along the axis, a cholesteric structure reflects the co-handed circular polarization inside the stop band $\lambda\in[n_op,n_ep]$ and transmits the counter-handed one [43]. The previous draft treated the universe as a static slab of such material, which is incorrect. A photon crossing the universe is redshifted *through* the stop band, so the relevant problem is a Bragg resonance swept by cosmic expansion.

**Theorem 7 (Cosmological Bragg passage).** Let a helical medium of constant physical pitch $p$, mean index $\bar n$, and birefringence $\Delta n\ll\bar n$ fill a spatially flat FRW universe with expansion rate $H(z)$, and let a photon be observed at wavelength $\lambda_\mathrm{obs}$ from a source at redshift $z_s$, propagating along the local helix axis. Define the *edge* $\lambda_\mathrm{edge}\equiv\bar np$ and the *passage parameter*
$$
\Pi(z)\equiv\frac{\pi^2}{2}\left(\frac{\Delta n}{\bar n}\right)^2\frac{c}{p\,H(z)} .
\tag{28}
$$
Then: (i) the photon crosses the co-handed stop band exactly once if $\lambda_\mathrm{edge}\le\lambda_\mathrm{obs}\le\lambda_\mathrm{edge}(1+z_s)$, at the resonance redshift $1+z_r=\lambda_\mathrm{obs}/\lambda_\mathrm{edge}$, and never otherwise; (ii) in the adiabatic passage the co-handed reflectance is
$$
R(z_r)=1-\exp[-\Pi(z_r)],
\tag{29}
$$
and the counter-handed polarization is transmitted; (iii) the transmitted spectrum of an unpolarized source therefore carries a trough with intensity $1-R/2$ and circular polarization of degree $R/(2-R)$ between the fixed blue edge $\lambda_\mathrm{edge}$ and the red end $\lambda_\mathrm{edge}(1+z_s)$.

*Proof.* The local wavelength at redshift $z$ is $\lambda_\mathrm{obs}/(1+z)$; it equals $\lambda_\mathrm{edge}$ once, at $z_r$, and lies in the stop band of fractional width $\Delta n/\bar n$ in a neighborhood of $z_r$. Along the ray, the coupled-mode equations for the forward and backward co-handed amplitudes have coupling $g_c=\pi\Delta n/(\bar np)$ and detuning $\delta=2\pi\bar n(1+z)/\lambda_\mathrm{obs}-2\pi/p$. With $dz/d\ell=-(1+z)H/c$, the detuning sweeps at the rate $|d\delta/d\ell|=(2\pi/p)H(z_r)/c$ at resonance. For a linear sweep, the contra-directional coupled-mode problem is of Landau–Zener form [44, 45], and the reflected fraction is $1-\exp(-\pi g_c^2/|d\delta/d\ell|)$, as for chirped Bragg gratings [46]; substitution gives Eq. (28). Appendix E gives the derivation and the adiabaticity condition. The counter-handed mode is off-resonant. Part (iii) follows by averaging over the two circular polarizations of an unpolarized source. $\square$

**Corollary 2 (Corrected transparency bound).** Since $H(z)$ is smallest today, $\Pi$ is largest for $z_r\to0$. Requiring $R\le R_\mathrm{max}$ in the co-handed polarization at every resonance redshift gives
$$
\frac{\Delta n}{\bar n}\le\left[\frac{2\,pH_0}{\pi^2c}\ln\frac{1}{1-R_\mathrm{max}}\right]^{1/2}\simeq6.2\times10^{-17}\left(\frac{p}{24.6\ \mu\mathrm{m}}\right)^{1/2}\qquad(R_\mathrm{max}=0.1),
\tag{30}
$$
with $c/H_0=1.37\times10^{26}$ m. The previous draft's coherent-regime bound $\Delta n\lesssim10^{-31}$ assumed a photon stays in resonance over a gigaparsec. Cosmic redshift forbids that: the resonant path is only $(\Delta n/\bar n)\,c/H$, which for $\Delta n=10^{-31}$ is about $14\ \mu$m, less than one pitch. The corrected bound is fifteen orders of magnitude weaker and comparable to the incoherent-regime estimate $\Delta n\lesssim3\times10^{-16}$ for an amorphous network with orientational correlation length of order $p$ (Appendix E). The two regimes now agree to within an order of magnitude, and the requirement on the doublet–fog matrix element (posed closure K-11) is $\Delta n\lesssim10^{-16}$ in either.

## D. Observational signatures of the trough

**Proposition 7 (Fixed edge, dipole, and handedness).** For an observer moving with velocity $\mathbf{v}_M$ relative to the fog, the blue edge seen in the direction $\hat{\mathbf n}$ of a source is
$$
\lambda_\mathrm{edge}(\hat{\mathbf n})=\bar np\left(1-\frac{\mathbf{v}_M\cdot\hat{\mathbf n}}{c}\right)+O(v_M^2/c^2),
\tag{31}
$$
independent of the source redshift. The red end of the trough scales as $1+z_s$; the depth $R(z_r)$ decreases toward the red end as $H(z_r)$ grows; and the sign of the induced circular polarization is fixed by the vacuum handedness $s$ (Sec. X). For $v_M=369.8\ \mathrm{km\,s^{-1}}$ and $p=24.6\ \mu$m the edge moves by $\pm0.030\ \mu$m between the dipole and anti-dipole directions.

*Proof.* The resonance nearest the observer ($z_r\to0$) occurs in the local fog. A photon arriving from $\hat{\mathbf n}$ propagates along $-\hat{\mathbf n}$; its wavelength in the fog's frame is $\lambda_\mathrm{obs}(1+\mathbf{v}_M\cdot\hat{\mathbf n}/c)$ to first order, and resonance requires this to equal $\bar np$. The other statements restate Theorem 7. $\square$

The proposition turns S22 into a stacking experiment with three internal controls that no instrumental artifact satisfies at once. The edge wavelength must be the same for every source redshift. The trough length must grow as $1+z_s$. The edge must shift dipolarly across the sky. Two archives cover the predicted band. JWST MIRI MRS reaches $28\ \mu$m, which contains the edge window and the trough of sources with $z_s\lesssim0.15$; its resolving power at $25\ \mu$m is enough to resolve the dipole shift after stacking. Spitzer IRS reaches $38\ \mu$m and holds thousands of extragalactic spectra across redshift. At the bound of Eq. (30) the co-handed trough is $\sim10\%$ deep, the unpolarized depth $\sim5\%$, and the circular polarization $\sim5\%$ — a far-infrared analog of the Gunn–Peterson trough, with polarization as a second fingerprint. Stake S22 is re-graded [RG] accordingly: the kill is a stacked non-detection of a fixed edge at the depth implied by the K-11 matrix element, and the discovery signature is the three-control pattern above.

## E. Helix optical activity is dispersive

**Proposition 8 (Any helix-induced optical activity is dispersive).** For $\lambda\gg\bar np$, a cholesteric-like structure rotates linear polarization at the de Vries rate
$$
\frac{d\theta}{d\ell}\simeq-\frac{\pi\,p\,\Delta n^2}{4\bar n^2\lambda^2}\big[1-(\lambda_\mathrm{edge}/\lambda)^2\big]^{-1},
\tag{32}
$$
which scales as $\nu^2$. Any rotation of CMB polarization attributable to the helix is therefore frequency-dependent. The reported cosmic birefringence, $\beta_\mathrm{cb}\approx0.2$–$0.3^\circ$ with no frequency dependence across $23$–$353$ GHz [47, 48, 49], cannot be produced by the helix. Moreover, at the bound Eq. (30) the present-day fog rotates $300$ GHz radiation by about $10^{-5}$ rad per Hubble length and $23$ GHz radiation by about $6\times10^{-8}$ rad. That is a factor of about $240$ across the CMB bands, where the reported rotation is flat at about $5\times10^{-3}$ rad.

Together with achirality (all $O(\chi^2)$ induced doublet operators are parity-even, and helicity-odd effects first appear at $O(\chi^3)(k\ell_s)$), this fixes the prediction of the core: $\beta_\mathrm{cb}=0$ at CMB frequencies. GUM holds to it in Sec. X and registers the extension that could change it as posed closure K-8.

## F. Advected structure

A structure at rest in the material frame is swept past a moving laboratory, so static structure becomes a temporal signal. The size of that signal depends on the detector as much as on the structure.

**Proposition 9 (Detector spectrum of an advected field).** Let $\Theta(\mathbf{x})$ be a statistically homogeneous field frozen in the material frame, with power spectrum $P_\Theta(\mathbf{k})$ and correlation length $\ell_c$, and let a detector with spatial weight $w(\mathbf{x})$ ($\int w=1$) move with velocity $\mathbf{v}_M$, recording $S(t)=\int w(\mathbf{x})\Theta(\mathbf{x}+\mathbf{v}_Mt)\,d^3x$. Then
$$
\langle|\tilde S(\omega)|^2\rangle\propto\int\frac{d^3k}{(2\pi)^3}\,P_\Theta(\mathbf{k})\,|\tilde w(\mathbf{k})|^2\,2\pi\delta(\omega-\mathbf{k}\cdot\mathbf{v}_M).
\tag{33}
$$
For a smooth detector of linear size $L\gg\ell_c$, the signal lies at $|\omega|\lesssim v_M/L$ and its variance is suppressed by $(\ell_c/L)^3$ relative to the local variance of $\Theta$. A detector whose weight has Fourier support at $|\mathbf{k}|=2\pi/p$ — a pitch-matched array — sees a line at $\omega=2\pi v_\parallel/p$. For $v_M=369.8\ \mathrm{km\,s^{-1}}$ and $p=24.6\ \mu$m that line is at $15.0$ GHz, with an annual frequency modulation set by the Earth's orbital velocity.

*Proof.* Fourier transform $S(t)$ and use statistical homogeneity, $\langle\tilde\Theta(\mathbf{k})\tilde\Theta^\ast(\mathbf{k}')\rangle=(2\pi)^3\delta^3(\mathbf{k}-\mathbf{k}')P_\Theta(\mathbf{k})$. For $L\gg\ell_c$, $|\tilde w|^2$ restricts $|\mathbf{k}|\lesssim1/L$, where $P_\Theta\simeq P_\Theta(0)\sim\sigma_\Theta^2\ell_c^3$ and the $k$-volume is $\sim L^{-3}$. $\square$

The proposition is a correction as much as a proposal. A smooth microwave cavity does not see pitch-scale structure at $v_M/p$; it sees only the $(\ell_c/L)^3$-suppressed long-wavelength tail. Only a detector patterned at the pitch scale selects the $15$ GHz component. Whether any coupling of the fog to such a detector survives the transparency requirement is the same matrix-element question as K-11, and no stake is registered here.

# V. The Quantum Description: Tower, Capacity, and Timing

## A. The kinematic frame

The material at finite agitation executes Nelson kinematics with grounded premises: the background noise of stochastic mechanics [4] is supplied by zero-point agitation of the material, with diffusion coefficient $\hbar/2M$ fixed by the closure of Sec. VI C. The osmotic contribution to the energy is the Fisher-information functional, whose variation is the quantum potential [9],
$$
U_Q=\frac{\delta}{\delta\rho}\left[\frac{\hbar^2}{8M}\int\frac{(\nabla\rho)^2}{\rho}\,d^3x\right]=-\frac{\hbar^2}{2M}\frac{\nabla^2\sqrt\rho}{\sqrt\rho},
\tag{34}
$$
and continuity with the Hamilton–Jacobi equation carrying this pressure closes to the Schrödinger equation for $\Psi=\sqrt\rho\,e^{iS/\hbar}$ [3] [DF]. Every hydrodynamic derivation has the same gap, identified by Wallstrom [5]: the equations are equivalent to Schrödinger's only if $\oint\nabla S\cdot d\mathbf{l}\in2\pi\hbar\mathbb{Z}$ around every nodal line, and nothing in the hydrodynamics enforces it; Nelson later conceded that the gap was fatal to his program [6]. In GUM the phase $S/\hbar$ is the isorotation angle of a knot (Sec. VI), a single-valued angle of the texture $\tilde P$ whose multivaluedness is classified by winding, so circulation quantization holds by construction [DF, given the knot identification]. The stiffness that carries the Fisher penalty is the B1 pressure multiplier that keeps the stiff longitudinal sector incompressible around knot cores — the second elliptic problem of Sec. III C, sourced by cores rather than by winding.

## B. The Born rule and its residues

The Born rule $\rho=\lvert\Psi\rvert^2$ is the endpoint of a sub-quantum $H$-theorem [10, 11], whose rates GUM's agitation accelerates relative to the deterministic pilot-wave limit by a factor $17$–$41$ [CAL, N]. Two residues are printed at full size. The multi-time statistics of stochastic mechanics require supplementation [6]; GUM poses closure **K-9** for the sequential-measurement statistics of the agitated material. And quantum non-equilibrium, if any relic of it survives, is the one place GUM's single-particle kinematics differs observably from orthodox quantum theory [12]; GUM's faster relaxation predicts a *smaller* residual than the deterministic pilot-wave limit, a discriminator between the two.

## C. The tower and its capacity

Bell demanded that a theory say what its beables are [2]. Pilot-wave theory answers with positions in $\mathbb{R}^3$ guided by a wave function on $\mathbb{R}^{3N}$, and Norsen showed that the $\mathbb{R}^{3N}$ object can be traded for an infinite hierarchy of fields on $\mathbb{R}^3$ [20]. GUM's material is a physical realization of that hierarchy: the texture is the primitive ontology [19], and the conditional wave functions and their derivative fields are patterns in it. For $N$ knots with wave function $\Psi(\mathbf{x}_1,\ldots,\mathbf{x}_N,t)$ and actual positions $\mathbf{X}_j(t)$, the conditional wave function of knot $k$ and its tower are
$$
\psi_k(\mathbf{x},t)\equiv\Psi(\mathbf{X}_1,\ldots,\mathbf{x},\ldots,\mathbf{X}_N,t),\qquad
F^{(\alpha)}_k(\mathbf{x},t)\equiv\big(\partial^\alpha_{\mathbf{x}_{j\neq k}}\Psi\big)\big\rvert_{\mathbf{x}_j=\mathbf{X}_j(t)},\quad\lvert\alpha\rvert=0,1,2,\ldots,
\tag{35}
$$
which closes at order zero for product states and at infinite order in general. The tower is hosted by the material's fields and updated, in the material frame, at the speed $c_L$ (Sec. V G).

**Definition 2 (Depth-$d$ tower).** A depth-$d$ tower retains the fields of Eq. (35) with $\lvert\alpha\rvert\le d$ and sets higher fields to zero.

**Lemma 3 (Depth is rank).** For two knots and one coordinate direction, the depth-$d$ tower at the actual position $X_2$ encodes the Taylor polynomial of $\Psi(x,x_2)$ in $x_2$ about $X_2$ to order $d$,
$$
\Psi_{[d]}(x,x_2)=\sum_{\alpha=0}^{d}F^{(\alpha)}(x)\,\frac{(x_2-X_2)^\alpha}{\alpha!},
\tag{36}
$$
a separable expansion with at most $d+1$ terms, so the truncated state has Schmidt rank at most $d+1$ across the $1|2$ cut. For $N$ knots in three dimensions the bound is $\binom{3(N-1)+d}{d}$.

*Proof.* Taylor's theorem with $F^{(\alpha)}(x)=\partial^\alpha_{x_2}\Psi(x,X_2)$; each term is a product; the multi-knot count is the number of monomials of degree at most $d$ in $3(N-1)$ variables. $\square$

**Definition 3 (Schmidt capacity).** The material has Schmidt capacity $\chi_\mathrm{max}$ across a spatial bipartition $A|B$ if every state it represents has Schmidt rank at most $\chi_\mathrm{max}$ across $A|B$.

**Theorem 8 (Fidelity bound).** Let $|\Psi\rangle=\sum_i\sqrt{\lambda_i}\,|a_i\rangle|b_i\rangle$ with $\lambda_1\ge\lambda_2\ge\cdots$ and $\sum_i\lambda_i=1$. Then
$$
\max_{\mathrm{rank}(\Phi)\le\chi}\lvert\langle\Phi|\Psi\rangle\rvert^2=\sum_{i=1}^{\chi}\lambda_i\equiv F_\chi,
\tag{37}
$$
attained by the normalized Schmidt truncation, and a material of capacity $\chi_\mathrm{max}$ prepares no state with fidelity to $|\Psi\rangle$ above $F_{\chi_\mathrm{max}}$.

*Proof.* With coefficient matrices $M_\Phi,M_\Psi$ in a product basis, von Neumann's trace inequality and Cauchy–Schwarz give $\lvert\mathrm{Tr}(M_\Phi^\dagger M_\Psi)\rvert^2\le\big(\sum_{i\le\chi}\sigma_i(M_\Phi)\sigma_i(M_\Psi)\big)^2\le\sum_{i\le\chi}\sigma_i(M_\Psi)^2$, with $\sigma_i(M_\Psi)^2=\lambda_i$ and $\sum_i\sigma_i(M_\Phi)^2=1$; equality holds at the truncated singular-value decomposition [50, 51]. $\square$

**Corollary 3 (Flat spectra).** If $\lambda_i\le\Lambda_0/r$ for $i\le r$, then $F_\chi\le\Lambda_0\chi/r$. For a Haar-random state of $2m$ qubits split $m|m$, the Marchenko–Pastur law gives $\lambda_i\le4\cdot2^{-m}$ asymptotically [52, 53], so $F_\chi\le4\chi/2^m$.

Random-circuit sampling prepares states that approach Haar statistics across every cut, with entanglement growing ballistically to the Page value [54, 52]. The 53-qubit experiment of Ref. [55] measured cross-entropy fidelities up to 14 cycles that agree with a multiplicative digital-error model built from independently measured gate errors, and 56- to 70-qubit experiments on superconducting and trapped-ion platforms find the same agreement [56, 57, 58]. If a coherent preparation error outside the error model enters multiplicatively (Appendix C),
$$
\frac{F^\mathrm{obs}_\mathrm{XEB}}{F^\mathrm{model}_\mathrm{noise}}=1\pm0.1\text{–}0.2\ \Rightarrow\ F_\mathrm{trunc}\gtrsim0.8,\qquad \chi_\mathrm{max}\gtrsim\frac{F_\mathrm{trunc}\,2^{26}}{4}\approx1.3\times10^{7}
\tag{38}
$$
for the 53-qubit register, rising by the corresponding powers of two for the larger registers. GUM's material satisfies this: its capacity is set by its degrees of freedom, not by a tower depth of order ten, which would fail Eq. (38) by six orders of magnitude. The role of the bound is to fix the direction of the test: capacity is bounded from below by every successful large entangled computation, and GUM's stakes concern where the bound must stop.

## D. Dimension counting

**Definition 4 (Classical material with bounded gain).** A material is classical with $N_\mathrm{eff}$ degrees of freedom on a register's support if its instantaneous state is a point $\xi$ of a bounded region $X\subset\mathbb{R}^{N_\mathrm{eff}}$ of diameter $D_X$. It represents the register's state through a map $\mathcal{R}:X\to\mathbb{C}P^{2^{n_q}-1}$ (Fubini–Study metric) with *gain* $L_R$ if $d_\mathrm{FS}(\mathcal{R}(\xi),\mathcal{R}(\xi'))\le L_R\lvert\xi-\xi'\rvert$.

**Theorem 9 (Dimension counting).** If a classical material with $N_\mathrm{eff}$ degrees of freedom and gain $L_R$ represents every $n_q$-qubit state to within Fubini–Study distance $\delta$, then
$$
2^{n_q+1}-2\le N_\mathrm{eff}\,\frac{\log(3L_RD_X/\delta)}{\log(c_0/\delta)},
\tag{39}
$$
with $c_0=O(1)$ set by the geometry of $\mathbb{C}P^{2^{n_q}-1}$. Hence, for any gain not exponentially large in $2^{n_q}$, the representable register size is $n_q\lesssim\log_2N_\mathrm{eff}+O\big(\log_2\log(L_RD_X/\delta)\big)$.

*Proof.* $\mathcal{R}(X)$ must be a $\delta$-net of $\mathbb{C}P^{2^{n_q}-1}$, whose $\delta$-covering number is at least $(c_0/\delta)^{2^{n_q+1}-2}$, since it is compact of real dimension $2^{n_q+1}-2$ with volume and injectivity radius of order one in Fubini–Study units. The covering number of $\mathcal{R}(X)$ at scale $\delta$ is at most that of $X$ at scale $\delta/L_R$, which is at most $(3L_RD_X/\delta)^{N_\mathrm{eff}}$. The second must exceed the first [59]. $\square$

The theorem uses no Schmidt structure; it is parameter counting, and it is the precise form of the objection that a field on $\mathbb{R}^3$ "has no room" for a wave function on $\mathbb{R}^{3N}$. A *quantum* material would evade it, but a quantum material is not an inverse *Umdeutung* — it is quantum mechanics relocated, and it is not GUM. With $N_\mathrm{eff}$ the number of structural cells in a register's support, the theorem is the previous draft's headline S16: a register of volume $V$ has $n_q\lesssim\log_2(V/\ell_s^3)$. The theorem is correct, and it is untestable as stated.

## E. Reachable sets and dense storage

No experiment prepares *every* state. It prepares the states that its circuits reach.

**Theorem 10 (Reachable-set counting).** Let a gate set consist of unitaries with $p$ real parameters each and generators of operator norm at most $h$, and let $\mathcal{S}_{N_g}$ be the set of states $G_{N_g}(\theta_{N_g})\cdots G_1(\theta_1)|0\rangle$ reachable with $N_g$ gates. The map $\Theta=(\theta_1,\ldots,\theta_{N_g})\mapsto|\psi(\Theta)\rangle$ is Lipschitz from $([0,2\pi]^{N_gp},\ell_1)$ with constant $h$. Hence $\mathcal{S}_{N_g}$ has Hausdorff dimension at most $N_gp$ and $\epsilon$-covering number at most $(2\pi hN_gp/\epsilon)^{N_gp}$.

*Proof.* $\|\partial|\psi\rangle/\partial\theta_k\|\le\|h_k\|\le h$ for every parameter, since each derivative inserts one generator into a product of unitaries. The mean-value inequality gives the Lipschitz bound in $\ell_1$. Covering the parameter cube by cubes of side $\epsilon/(hN_gp)$ gives the covering number. $\square$

**Corollary 4 (History storage evades dimension counting).** A classical material that stores the parameter history $\Theta$ — $N_gp$ real numbers — represents every reachable state exactly. For circuits of polynomial size it therefore needs only polynomially many degrees of freedom, and no experiment with polynomial-size circuits can violate Eq. (39) without a further hypothesis about *how* the material stores states.

The corollary does not rescue a history-storing material as a model of GUM. The tower must guide knots *locally* and *in real time* (Definition 2). A history store must instead evaluate exponentially large sums on demand to produce the conditional fields at a given point, which is neither local nor fast. The natural hypothesis for a material that keeps quantum books locally is the opposite one.

**Definition 5 (Dense storage).** A material *stores densely* if (M1) it is *Markovian*: the hosted state at time $t$ is a function $\mathcal{R}(x_t)$ of the material configuration $x_t$ alone, with gain $L_R$ as in Definition 4; and (M2) it is *target-blind*: its evolution applies the prescribed unitaries to the hosted state, and wherever the ideal evolved state is not exactly hostable, the hosting error does not depend on the future of the circuit or on the intended output.

**Theorem 11 (Local density).** Under dense storage with $N_\mathrm{eff}$ degrees of freedom: (i) if the hosted set contains an open subset of $\mathbb{C}P^{D-1}$, then $N_\mathrm{eff}\ge2^{n_q+1}-2$; (ii) for a Haar-random state $\psi$, with probability at least $1-\delta_p$ the best hosted fidelity obeys
$$
F_\mathrm{rep}(\psi)\equiv\sup_{x\in X}\lvert\langle\psi|\mathcal{R}(x)\rangle\rvert^2\le4\,\frac{N_\mathrm{eff}\ln(CL_R\sqrt D)+\ln(1/\delta_p)}{D-1}.
\tag{40}
$$

*Proof.* (i) An open subset of a manifold has full Hausdorff dimension $2D-2$, and a Lipschitz image of $X$ has dimension at most $N_\mathrm{eff}$ [59]. (ii) Take an $\epsilon_0$-net of the hosted set of size $M\le(CL_R/\epsilon_0)^{N_\mathrm{eff}}$. For a fixed unit vector $\phi$ and Haar-random $\psi$, $\Pr[|\langle\psi|\phi\rangle|^2\ge f]=(1-f)^{D-1}\le e^{-f(D-1)}$. A union bound over the net gives $\max_i\lvert\langle\psi|\phi_i\rangle\rvert^2\le f$ with probability at least $1-\delta_p$ for $f=[\ln M+\ln(1/\delta_p)]/(D-1)$. Every hosted vector lies within $\epsilon_0$ of a net point, so $F_\mathrm{rep}\le(\sqrt f+\epsilon_0)^2$. Choosing $\epsilon_0=1/\sqrt D\le\sqrt f$ gives Eq. (40). $\square$

Where the dense-storage hypothesis applies, it says how many degrees of freedom are available. That is a physical question about where the material keeps the tower, and GUM states three hypotheses rather than choosing one silently.

**Definition 6 (Hosting hypotheses).** The effective number of degrees of freedom available to an $n_q$-qubit register is one of the following.
**(H$_V$)** Bulk hosting, $N_\mathrm{eff}=V/\ell_s^3$, with $V$ the volume of the region spanned by the register — GUM's default, since tower fields are bulk fields of the material.
**(H$_A$)** Cut hosting, $N_\mathrm{eff}=A/\ell_s^2$, with $A$ the area of the minimal cut through the register.
**(H$_R$)** Extent hosting, $N_\mathrm{eff}=n_q(\ell_q/\ell_s)^3$, with $\ell_q$ the spatial extent of a single qubit's carrier.
In addition, *Schmidt hosting* is the alternative to dense storage in which the region holds only $\chi_\mathrm{max}\simeq N_\mathrm{eff}$ independent tower fields per cut (Definition 3), with no constraint from Eq. (40).

## F. Mirror circuits and the cliff

Random-circuit sampling cannot test Eq. (40) at hundreds of qubits, because its fidelity estimator requires classical simulation of the ideal circuit. Mirror circuits do not [60]: apply a scrambling unitary $U$, then its inverse $U^\dagger$, and measure the probability $P_\mathrm{ret}$ of returning to $|0\rangle^{\otimes n_q}$. The ideal answer is known without simulation.

**Theorem 12 (Mirror-circuit bound).** Let $U$ be drawn from an ensemble whose midpoint states $U|0\rangle$ are Haar-typical, and let the device's noise be modeled as a global depolarizing channel of fidelity $F_\mathrm{noise}$. Under dense storage,
$$
\mathbb{E}\,[P_\mathrm{ret}]\le F_\mathrm{noise}\;\mathbb{E}\,[F_\mathrm{rep}]+2^{-n_q}.
\tag{41}
$$

*Proof.* By (M1) the material holds at the midpoint a hosted state $\phi$ with $|\langle\psi_\mathrm{mid}|\phi\rangle|^2\le F_\mathrm{rep}$. By (M2) the second half applies $U^\dagger$ to $\phi$, giving overlap $|\langle0|U^\dagger|\phi\rangle|^2=|\langle\psi_\mathrm{mid}|\phi\rangle|^2$ with the target. Later hosting errors are independent of the target, so on average they add at most the overlap of a target-independent state with $|0\rangle$, which is $2^{-n_q}$ averaged over the ensemble. The depolarizing channel multiplies the coherent part by $F_\mathrm{noise}$ and adds a uniform part of weight at most $2^{-n_q}$. $\square$

**Corollary 5 (The cliff and its knobs).** Combining Eqs. (40) and (41), the normalized return probability $\mathcal{P}\equiv P_\mathrm{ret}/F_\mathrm{noise}$ satisfies $\mathcal{P}\lesssim\min\{1,\ c\,N_\mathrm{eff}\,n_q/2^{n_q}\}$ up to logarithmic factors in $L_R$. Beyond
$$
n_q^\ast\simeq\log_2N_\mathrm{eff}+\delta n,\qquad0\lesssim\delta n\lesssim\log_2n_q+O(1),
\tag{42}
$$
$\mathcal{P}$ falls by a factor of about two per added qubit. The fall is *gate-independent*: once $U$ scrambles, $\mathcal{P}$ depends on $n_q$ and not on depth or gate count, whereas noise-model errors grow with depth. The cliff moves with the hosting knob — by $+10$ qubits per factor $10^3$ in $V$ (H$_V$) or $A$ (H$_A$), or per factor $10$ in $\ell_q$ (H$_R$). Under Schmidt hosting the cliff sits at $n_q^{\ast\ast}\simeq2\log_2N_\mathrm{eff}$ and moves twice as fast.

| Hosting hypothesis | $N_\mathrm{eff}$ | Parameter range | $\log_2N_\mathrm{eff}$ | Shift per knob step |
|:----------------------|:----------------|:--------------------------|:----------------|:--------------------|
| H$_V$ (dense, bulk) | $V/\ell_s^3$ | $V\in[10^{-10},10^{-6}]\ \mathrm{m^3}$ | $234$–$329$ | $+10.0$ per $10^3\times V$ |
| H$_A$ (dense, cut) | $A/\ell_s^2$ | $A\in[10^{-8},10^{-4}]\ \mathrm{m^2}$ | $152$–$219$ | $+10.0$ per $10^3\times A$ |
| H$_R$ (dense, extent) | $n_q(\ell_q/\ell_s)^3$ | $\ell_q\in[10^{-8},10^{-4}]$ m, $n_q=300$ | $196$–$317$ | $+10.0$ per $10\times\ell_q$ |
| Schmidt (bulk) | $V/\ell_s^3$ | as H$_V$ | $n_q^{\ast\ast}\simeq468$–$658$ | $+19.9$ per $10^3\times V$ |

*Table 1. Cliff locations for $\ell_s\in[10^{-35},\,1.5\times10^{-27}]$ m, the upper end set by Proposition 11. Dense-storage entries give $\log_2N_\mathrm{eff}$; the cliff lies $\delta n\lesssim8$ qubits higher (Eq. (42)). Knob shifts are unaffected by $\delta n$. H$_R$ separates platforms: ions ($\ell_q\sim10^{-8}$ m) cliff about $40$ qubits below transmons ($\ell_q\sim10^{-4}$ m).*

The protocol follows from the corollary, and it is Stake S16 re-graded [RG] together with the new Stake S29. Run mirror circuits with scrambling first halves at fixed depth for $n_q$ from $150$ to $400$. Calibrate $F_\mathrm{noise}$ by cycle benchmarking on subregisters, where every hosting hypothesis predicts $\mathcal{P}=1$. Plot $\mathcal{P}(n_q)$ at two or more depths. A dense-storage material shows a depth-independent cliff; noise shows a depth-dependent drift. Then vary the knob — register volume, cut area, or qubit carrier — and measure the shift of the cliff; the slope identifies the hosting mode. Feasibility requires that the pre-cliff return probability be measurable, $F_\mathrm{noise}\gtrsim e^{-7}$. A log-depth scrambler with all-to-all connectivity uses about $n_q\log_2n_q$ two-qubit gates in total, so the two-qubit error must satisfy $\epsilon\lesssim7/(n_q\log_2n_q)$, i.e. $\epsilon\lesssim2.8\times10^{-3}$ at $n_q=300$. Nearest-neighbor layouts in two dimensions need $\epsilon\lesssim7/n_q^{3/2}\simeq1.3\times10^{-3}$. Both are comparable to the best two-qubit error rates reported to date, though not yet at this register size. The kill is a flat $\mathcal{P}(n_q)$ through $n_q=350$ in any architecture with verified scrambling midpoints. By Table 1 that retires dense storage under all three hosting hypotheses for $\ell_s\ge10^{-35}$ m and $V\le10^{-6}\ \mathrm{m^3}$; only Schmidt hosting, or a structural scale below the Planck length, survives it.

## G. Finite-speed nonlocality

Section III C removed $c_L$ from electromagnetism. It remains in the tower. When a knot is measured, the conditional fields of the other knots change, and in GUM that change is a physical update of material fields, propagating at the fastest speed the material supports. GUM identifies that speed with $c_L$, the one longitudinal speed of the material (cross-lock C-L of Sec. XI B).

**Definition 7 ($c_L$-causal model).** A model of quantum correlations is *$c_L$-causal* if there is a frame (the material frame) in which the influence of a measurement event on outcome statistics elsewhere propagates at speed $c_L$. The model reproduces quantum correlations between events that are $c_L$-connected in that frame and must otherwise account for correlations by locally available information alone.

**Proposition 10 (Bipartite timing bound).** Let two measurement events be separated by the lab baseline $\mathbf{L}$ ($|\mathbf{L}|=L$) with lab-time mismatch $|\Delta t|\le\delta t$, let the lab move with $\mathbf{v}_M$ relative to the material frame, and let each correlation estimate integrate over time $T_\mathrm{int}$. If Bell-inequality violations persist at every sidereal time, then
$$
c_L\ge\frac{L}{\delta t+\tfrac12\Omega_\oplus v_\perp L\,T_\mathrm{int}/c^2},
\tag{43}
$$
with $\Omega_\oplus$ the sidereal rotation rate and $v_\perp$ the component of $\mathbf{v}_M$ perpendicular to the Earth's axis, to leading order in $v_M/c$.

*Proof.* To first order the material-frame time separation is $\Delta t_M=\Delta t-\mathbf{v}_M\cdot\mathbf{L}/c^2$ and the spatial separation is $L$. The events are $c_L$-disconnected when $|\Delta t_M|<L/c_L$. The term $\mathbf{v}_M\cdot\mathbf{L}(\tau)/c^2$ varies with sidereal time at a rate of at most $\Omega_\oplus v_\perp L/c^2$. Over an integration window the smallest attainable $|\Delta t_M|$ is therefore at most $\delta t+\tfrac12\Omega_\oplus v_\perp LT_\mathrm{int}/c^2$. Persistent violation requires connection throughout, which gives Eq. (43) (Appendix F). $\square$

Experiments of this type by Salart et al. and Yin et al. found no loss of correlation and bounded the speed of any such influence at $\gtrsim10^4c$ for every material frame moving slowly relative to the Earth [26, 27]. GUM therefore has $c_L\gtrsim10^4c$. Bipartite tests cannot exclude finite $c_L$ entirely, because any finite timing resolution leaves a residual window. Multipartite tests can, as the following theorem shows.

**Theorem 13 (Finite-speed dichotomy, after Bancal et al.).** For every finite $v>c$ there are configurations of four parties — and, by Barnea et al., already of three — whose measurement events are arranged so that some pairs are $v$-connected and others are not. For these configurations, any $v$-causal model that reproduces the quantum correlations of the $v$-connected pairs either permits superluminal signaling between parties or fails to reproduce the quantum prediction for the multipartite correlations [28, 29].

GUM is a $c_L$-causal model, so the theorem applies to it without modification, and GUM must choose a horn. Superluminal signaling in a preferred frame is not paradoxical for a material with a rest frame, but it would contradict every signaling test to date and would make the material frame operationally detectable in a way nothing has shown. GUM's default horn is therefore the second (Flag F-NS, no signaling). In a Bancal–Barnea configuration timed so that the designated pair is $c_L$-disconnected in the material frame, the multipartite correlations fall from the quantum value to the bound respected by $c_L$-causal no-signaling models. Since the material frame is unknown, the test scans the sidereal day; with $c_L=10^4c$ and a $10$ km baseline the disconnection window is $3$ ns, within reach of present entanglement-distribution timing. This is Stake S28. Its horn is fixed by posed closure K-22, which asks whether the tower's update rule, derived from Eqs. (9), is no-signaling. If K-22 finds that it signals, the stake changes sign: GUM then predicts signaling in exactly these configurations.

## H. The structural scale and the cone-locking bill

The tower requires a foliation, and the material supplies a literal one: its rest frame. Emergent Lorentz invariance must then survive two tests, and GUM prints both. The first is discreteness. Proposition 1 makes the doublet exactly dispersionless in the continuum description, so discreteness at the structural scale enters only through level-0 corrections, which GUM parametrizes as $\omega^2=c^2k^2[1+\xi_\gamma(k\ell_s)^2+O((k\ell_s)^4)]$; a generic cubic lattice has $\xi_\gamma=-\tfrac1{12}$.

**Proposition 11 (Timing bound on the structural scale).** With this parametrization, the group delay between photons of energies $E_1<E_2$ from a source at redshift $z$ is
$$
\Delta t=\frac{3\xi_\gamma\ell_s^2}{2(\hbar c)^2}\frac{E_2^2-E_1^2}{H_0}\int_0^z\frac{(1+z')^2\,dz'}{\sqrt{\Omega_m(1+z')^3+\Omega_\Lambda}},
\tag{44}
$$
the quadratic Lorentz-violation delay of Jacob and Piran with $E_{\mathrm{QG},2}=\hbar c/(\sqrt{\lvert\xi_\gamma\rvert}\,\ell_s)$ [61]. The Fermi-LAT bound $E_{\mathrm{QG},2}\gtrsim1.3\times10^{11}$ GeV [62] gives
$$
\ell_s\lesssim1.5\times10^{-27}\,\lvert\xi_\gamma\rvert^{-1/2}\ \mathrm{m}.
\tag{45}
$$

*Proof.* The group velocity is $v_g=c[1+\tfrac32\xi_\gamma(k\ell_s)^2]$. Integrating the delay over the comoving path with $k\to k(1+z')$ gives Eq. (44); matching to the $n=2$ form of Ref. [61] identifies $E_{\mathrm{QG},2}$, and $\hbar c=1.973\times10^{-16}$ GeV m gives Eq. (45). $\square$

The bound replaces the previous draft's assumed $\ell_s\le10^{-26}$ m and feeds Table 1. A softer argument points the same way: an ordered lattice has Bragg gaps near $\pi\hbar c/\ell_s$, and cosmic rays propagate at $3\times10^{20}$ eV, which suggests $\ell_s\lesssim2\times10^{-27}$ m unless the lattice is amorphous enough to smear its gaps. GUM registers only Eq. (45).

The second test is universality across sectors. Proposition 1 fixes the doublet's own cone exactly, but the matter cone $c_\psi$, the gravitational cone, and the longitudinal speed $c_L$ are distinct moduli. GUM's cone-locking flow,
$$
\frac{d\delta_c}{d\ell}=-\frac{g_c^2}{\bar c^2}\,\delta_c\ \Rightarrow\ \delta_c(E)=\frac{\delta_\mathrm{UV}}{1+(g_c^2/\bar c^2)\ln(\Lambda_\mathrm{UV}/E)},
\tag{46}
$$
is a real mechanism with laboratory analogs in spinor condensates and in the Fermi-velocity running of graphene [CAL, N]. A logarithm from the structural scale to the eV yields at most a factor of $10$–$10^2$, however, whereas cone universality is required at $10^{-15}$–$10^{-20}$ [34, 35]. Generic Lorentz-violating ultraviolet completions push $O(1)$ violations into the infrared through loops unless a symmetry forbids them. This is the heaviest bill in GUM, and it is printed at the top of the kill list. The present revision lightens it in one place and relocates it in another. The doublet no longer needs the flow, because the cone condition makes it exact. The matter–light difference $c_\psi-c\simeq\tilde m^2/(8\rho_0c)$ is not automatically small: at the weak-scale vacuum gap it reaches the vacuum-Cherenkov bounds unless the grains' radius of gyration satisfies $\ell_g\lesssim7\times10^{-28}$ m (Sec. II C). The one deliberate cone mismatch, $c_L\gg c$, has been moved by Theorem 6 out of electromagnetism and into the tower, where Eq. (43) and Theorem 13 are its tests.

# VI. Mass, Spin, and the Closure of $\hbar$

## A. Mass as forbidden frequency

Floquet–Bloch analysis of the relative-rotation branch on the periodic-on-average lattice yields bands with gaps. Near the edge $\omega_0$ of Eq. (13), a free quantum of the branch has $E^2=(\hbar\omega_0)^2+(pc_\psi)^2$: mass is forbidden frequency [DF]. The lattice's own Bragg gaps sit at $\hbar\Omega\sim\pi\hbar c/\ell_s\gtrsim4\times10^{20}$ eV, far above every particle mass, so all particle masses are potential-sector ($\tilde m$) physics. The lattice supplies ultraviolet structure and radiative protection, never species enumeration.

A particle is a knot: a localized texture of $\tilde P$ with integer degree $K$, isorotating at a clock frequency *inside* the gap,
$$
\tilde P(\mathbf{x},t)=e^{i\omega t\sigma_3/2}\,\tilde p(\mathbf{x})\,e^{-i\omega t\sigma_3/2},\qquad\omega=\kappa\,\omega_0,\quad0<\kappa<1 .
\tag{47}
$$
Because $\omega<\omega_0$, the knot cannot radiate into the relative-rotation branch; because the locked doublet is achiral at tree level (Sec. II D), it does not radiate into light at linear order; and because its degree is conserved (Lemma 5), it cannot unwind. A knot is stable for the reason a bound state below threshold is stable: its frequency is forbidden to every channel that could carry its energy away. A moving knot is the boosted isorotating solution. To the extent that the relative-rotation sector is Lorentz covariant with cone $c_\psi\simeq c$, its phase in the lab frame is a de Broglie wave with $\lambda=h/p$, its group velocity is the particle velocity, and its clock slows as special relativity demands. The cross-sector universality this requires is part of the cone-locking bill of Sec. V H.

The Bogomolny structure supplies the masses themselves. For vacuum boundary data,
$$
E_{6+0}=\int\tfrac12\big(\Lambda b_P\mp\sqrt{2\mathcal V}\big)^2\pm\Lambda\int b_P\sqrt{2\mathcal V}\ \ge\ \Lambda\big\langle\sqrt{2\mathcal V}\big\rangle_{S^3}\lvert K\rvert\equiv C_6\lvert K\rvert,
\tag{48}
$$
by target-space localization ($b_P\,d^3x$ pulls back the $S^3$ volume form at degree $K$), with saturation iff $\Lambda b_P=\mathrm{sgn}(K)\sqrt{2\mathcal V}$ pointwise [15, 16] [DF]. At $c_2=0$ the Haar average evaluates in closed form, with $\sqrt{2\mathcal V}=2\tilde m_V\sin(\chi/2)$ and measure $(2/\pi)\sin^2\chi\,d\chi$,
$$
C_6=\Lambda\,\frac{2}{\pi}\int_0^\pi2\tilde m_V\sin\tfrac\chi2\,\sin^2\chi\,d\chi=\frac{64}{15\pi}\,\Lambda\tilde m_V,
\tag{49}
$$
and the saturating hedgehog integrates, in the volume coordinate $r^3/3$, to the compacton $f_0(r)=2\arccos(r/R_\ast)$ with
$$
R_\ast=\left(\frac{2\Lambda}{\pi^2\tilde m_V}\right)^{1/3}
\tag{50}
$$
(Appendix H). Two structural corollaries are used later. SDiff degeneracy makes masses exactly additive at $\epsilon=0$. And the on-shell pressure $P=\tfrac12\Lambda^2b_P^2-\mathcal V$ vanishes pointwise, so knot matter is dust — the equation of state Sec. IX uses. The species mass law is multiplicative,
$$
M_kc^2\propto\hat e_k\,\Lambda\tilde m_{V,k}\ \Rightarrow\ \frac{M_k}{M_j}=\frac{\hat e_k\tilde m_{V,k}}{\hat e_j\tilde m_{V,j}},
\tag{51}
$$
which is the structure the flavor generator and the Higgs factorization theorem of Sec. VIII require.

## B. The two closure conditions and spin

Two conditions close the isorotating knot, with the same $\hbar$:
$$
\text{(C-spin)}\quad L=\mathbb{I}\omega=j\hbar,\qquad\qquad\text{(C-clock)}\quad E_\mathrm{tot}=\hbar\omega,
\tag{52}
$$
where $\mathbb{I}$ is the knot's moment of inertia and $j$ its rotor number. (C-clock) is de Broglie's internal clock read as an identity of one physical angle observed twice: the quantum phase of Sec. V A is a texture angle, and for the isorotating knot that angle is the internal rotation.

**Lemma 4 (The quarter is kinematic).** For any object with $E_\mathrm{rot}=\tfrac12\mathbb{I}\omega^2=\tfrac12L\omega$ satisfying Eq. (52),
$$
\frac{E_\mathrm{rot}}{E_\mathrm{tot}}=\frac j2,
\tag{53}
$$
independent of profile, shape, stabilizing terms, or the value of $\hbar$.

*Proof.* $E_\mathrm{rot}=\tfrac12L\omega=\tfrac12(j\hbar)(E_\mathrm{tot}/\hbar)$. $\square$

GUM's "exactly 25%" is $j=\tfrac12$ substituted into Eq. (53). A bench that reads the fraction therefore does not test a profile integral: a valid bench object satisfying both closure conditions with rigid-rotor energetics *must* read $j/2$. What a bench tests is whether such objects exist in a Cosserat system, and what their $j$ is.

Let the field energy under a dilation $V$ of the profile scale as $\tfrac12\hat e_0(V^{-a}+V^{a})$ — the two-term Derrick structure of a pair of terms scaling oppositely — and the rotational energy at fixed $L$ as $KV^{-b}$, with $K=j^2\mathfrak{c}^2/(2\mathfrak{i}_0g)$ in units of $\Lambda\tilde m_V$.

**Theorem 14 (Spin selection in the (1,1) Routhian).** For $(a,b)=(1,1)$, define $w\equiv\mathfrak{c}^2/(\hat e_0\mathfrak{i}_0g)$. Stationarity in $V$ and (C-clock) give
$$
w\,j(1-j)=1,\qquad V^2=\frac{1}{1-j},\qquad\frac{E_\mathrm{rot}}{E}=\frac j2 ;
\tag{54}
$$
solutions exist only for $0<j<1$, and among half-integers only $j=\tfrac12$, with $V=\sqrt2$ and $w=4$.

*Proof.* Stationarity gives $\tfrac12\hat e_0(1-V^{-2})=KV^{-2}$, i.e. $V^2-1=j^2w$. By Lemma 4, $E_\mathrm{field}=E_\mathrm{rot}(2-j)/j$, i.e. $V^2+1=j(2-j)w$. Subtracting gives $2=2wj(1-j)$; then $V^2=1+j/(1-j)=1/(1-j)$, positive iff $j<1$. $j=1$ is the pole at which the knot tears itself apart, and $j=\tfrac32$ gives $V^2<0$. $\square$

**Proposition 12 (The window depends on the stabilizing pair).** For general $(a,b)$, stationarity and (C-clock) are jointly solvable iff
$$
0<j<\frac{2a}{a+b},\qquad\text{with}\qquad a\tanh(a\ln V)=\frac{bj}{2-j}\quad\text{and}\quad\frac{E_\mathrm{rot}}{E}=\frac j2 .
\tag{55}
$$

*Proof.* Stationarity: $\tfrac a2\hat e_0(V^{a}-V^{-a})=bKV^{-b}$. Clock: $\tfrac12\hat e_0(V^{-a}+V^{a})=\frac{2-j}{j}KV^{-b}$. Dividing gives the displayed relation; since $\lvert\tanh\rvert<1$ and $j>0$, solvability is $bj<a(2-j)$. $\square$

**Flag F-B1.** For $(a,b)=(1,1)$ the window is $(0,1)$ and Theorem 14 holds. For the sextic-plus-potential pair that stabilizes the *static* knot and supplies its mass, the field energy scales as $\lambda^{-3}$ and $\lambda^{3}$; if the same dilation governed the isorotating closure, then $(a,b)=(3,1)$, the window would be $j<\tfrac32$, and $j=1$ would be admissible. GUM commits, as a flagged constitutive choice, to the $(1,1)$ closure for the rotating sector — the centrifugal response governed by the quadratic–quartic pair while the static mass is governed by the sextic–potential pair — and prints the kill. A bench that realizes a stable isorotating knot with $j=1$ in a system of GUM's class retires F-B1, and with it the universality of spin $\tfrac12$, which then becomes a permission rather than a prediction. Under F-B1 three corollaries hold: no elementary massive species of spin 0 or 1 exists, so $W^\pm$, $Z$, and $h$ are collective (Sec. VIII); $j=0$ has no rotor, hence no clock and no de Broglie sector, so no knot-elementary scalar exists; and an elementary spin-$\tfrac32$ particle would falsify the closure.

Fermionic statistics for identical dressed knots rest on the topology of the stratified configuration space. The unstratified core has $\pi_4(S^3)=\mathbb{Z}_2$, and the stratified completion gives
$$
\pi_1(\mathcal{C}_\mathrm{strat})=\mathbb{Z}_2\times A/\langle2a_\mathrm{rot}\rangle,
\tag{56}
$$
so the rotation class survives with order exactly two and fermionic characters exist at all odd winding [DF]. The exchange–rotation correlation is forced, $\chi_\mathrm{exch}=\chi(\sigma)\chi_\mathrm{rot}$, and the fermionic value $-1$ is the closure-selected sector — consistent, not forced, in the same grading as the Finkelstein–Rubinstein construction [63]. One mechanism, isorotation, supplies clock, spin, gyrovector, and statistics sign: one clock period gives $e^{i\pi\sigma_3}=-\mathbb{1}$, and the identity returns only at $4\pi$.

## C. The closure of $\hbar$

Write the knot's energy, moment of inertia, and clock frequency in material units as $E=\hat e\,\Lambda\tilde m_V$, $\mathbb{I}=\mathfrak{i}\,\Lambda J/\tilde m_V$, and $\omega=w_u\tilde m_V/\sqrt J$. (C-clock) gives $\hbar=(\hat e/w_u)\Lambda\sqrt J$, and (C-spin) at $j=\tfrac12$ gives $w_u^2=\hat e/2\mathfrak{i}$. Hence, for any closure,
$$
\hbar=\mathfrak{c}\,\Lambda\sqrt J,\qquad\mathfrak{c}=\sqrt{2\hat e_\mathrm{tot}\,\mathfrak{i}_\mathrm{tot}},\qquad w_u^2=\frac{\hat e_\mathrm{tot}}{2\mathfrak{i}_\mathrm{tot}}\quad[\mathrm{DF}].
\tag{57}
$$

**Proposition 13 (One relation among three imports).** The closure yields $\hbar_\mathrm{dyn}=\mathfrak{c}\Lambda\sqrt J$ with $\mathfrak{c}$ a pure number, and the identity of clocks $\hbar_\mathrm{stat}=\hbar_\mathrm{dyn}$: a Nelson-stationary state of energy $E$ has phase frequency $E/\hbar_\mathrm{stat}$, the isorotating knot has mechanical frequency fixed by (C-spin), and the joint system is solvable at $j=\tfrac12$ iff the two constants coincide. Given the unknown constants $(\Lambda,J)$ and the agitation invariant $\hbar_\mathrm{stat}$, this reduces three unknowns to two. Its falsifiable content is $\mathfrak{c}$, which is dimensionless, profile-determined, and — by Proposition 12 — dependent on Flag F-B1.

The condition is dynamically enforced. Displacing $\mathfrak{c}=\mathfrak{c}^\ast(1+\delta)$ gives clock-mismatch exponents $d\ln\omega_\mathrm{mech}/d\ln\mathfrak{c}=+\tfrac12$ and $d\ln\omega_\mathrm{phase}/d\ln\mathfrak{c}=-\tfrac12$ (the latter exact by the envelope theorem). The beat radiates into the gapless channels with an Adler locking torque $\propto-\sin\Delta\phi$, so each knot is a phase-locked self-oscillator of the material, with relocking time $\tau\sim10^{-12}$ s at the electron clock [CAL, N]. Planck's constant is epoch-constant dynamically, not by decree. The saturated closure gives
$$
\mathfrak{c}=\frac{64\sqrt2}{9\pi}\simeq3.2011,\qquad\kappa=\frac{1}{\sqrt2},\qquad\kappa^2g_\mathrm{tot}=\frac{35}{24}\ \ \text{vs. the halo-free}\ \ \frac78\quad[\mathrm{N}],
\tag{58}
$$
with binding depth $1-\kappa\simeq29.3\%$ and support ratio $3/2$, while the rigorous saturated bound $\mathfrak{c}\ge2\sqrt2$ excludes any deep-BPS endpoint below it. Planck's constant is *constrained*, not derived: the closure fixes one relation among three imports, and the number GUM can be killed on is $\mathfrak{c}$.

The values in Eq. (58) were computed with the previous draft's kinetic coefficient, which enters $\mathfrak{i}$, and with the gap modulus identified with the potential coefficient, $\tilde m=\tilde m_V$. With the corrected gap of Eq. (10), $\kappa=w_u\tilde m_V/\tilde m$ and $\kappa^2=(\hat e/2\mathfrak{i})(\tilde m_V/\tilde m)^2$. Holding the previous draft's integrals fixed, this gives $\kappa^2=2\tilde m_V^2/(16\mu_c+\tilde m_V^2)$. A knot below the gap ($\kappa<1$) then requires $\mu_c>\tilde m_V^2/16$, and $\kappa=1/\sqrt2$ requires $\mu_c=3\tilde m_V^2/16$ — a ratio of locking to potential stiffness that the previous draft fixed without stating. Recomputing $\hat e$, $\mathfrak{i}$, $\mathfrak{c}$, and $\kappa$ in one consistent normalization is item (2) of the audit K-N. It matters, because the band edge $\hbar\omega_0=Mc^2/\kappa$ of Sec. VII C moves with $\kappa$.

## D. The clock is physical: two consequences

If the de Broglie clock is a rotation of the material, it has consequences that a bookkeeping phase cannot have. The previous draft registered the first as a fingerprint of $\mathfrak{c}$-non-equilibrium; this revision states it as a proposition and adds the second.

**Proposition 14 (The $\alpha$–$\mu$ discriminant).** Suppose the global stiffness of the topological sector drifts in time or space, $\Lambda\to\Lambda(1+\delta_\Lambda)$ and $J\to J(1+\delta_J)$, with the frustration integrals, the moduli ratios that fix $\tilde m_{V,i}/\tilde m_{V,j}$, and the defect self-coupling $e^2/\varepsilon^\ast$ held fixed. Then
$$
\Delta\ln\alpha=-\left(\delta_\Lambda+\tfrac12\delta_J\right),\qquad \Delta\ln\mu_{pe}=0,\qquad R_{\mu\alpha}\equiv\frac{\Delta\ln\mu_{pe}}{\Delta\ln\alpha}=0,
\tag{59}
$$
where $\mu_{pe}=m_p/m_e$. The same holds for an epoch of $\mathfrak{c}$-non-equilibrium, since mass ratios are $\hat e$-ratios and are $\mathfrak{c}$-blind.

*Proof.* By Eq. (57), $\hbar\propto\Lambda\sqrt J$ at fixed $\mathfrak{c}$, and $\alpha=e^2/(4\pi\varepsilon^\ast\hbar c)$. By Eq. (51), every rest energy is $\hat e_i\Lambda\tilde m_{V,i}$ with $\hat e_i$ and $\tilde m_{V,i}/\tilde m_{V,j}$ fixed, so the common factor $\Lambda$ cancels in every mass ratio. $\square$

Grand-unified scenarios tie the two drifts together, with $\lvert R_{\mu\alpha}\rvert\approx30$–$40$, because $\Lambda_\mathrm{QCD}$ depends exponentially on the unified coupling [64, 65]. Present bounds are null on both sides. Optical clocks limit $\dot\alpha/\alpha$ at the $10^{-18}\ \mathrm{yr^{-1}}$ level [66]; methanol absorption at $z=0.89$ limits $\Delta\mu_{pe}/\mu_{pe}$ below $10^{-7}$ [67]; and high-resolution quasar spectroscopy is consistent with $\Delta\alpha=0$ at the $10^{-6}$ level [68], in tension with an earlier dipole claim [69]. The discriminant is Stake S23. If a drift of $\alpha$ is ever detected, GUM requires $\lvert\Delta\mu_{pe}/\mu_{pe}\rvert\ll\lvert\Delta\alpha/\alpha\rvert$; a joint detection with $\lvert R_{\mu\alpha}\rvert\gtrsim1$ retires the physical-clock reading at its present grade.

**Proposition 15 (Channeling resonance of a physical clock).** Let a particle of rest energy $Mc^2$ carry a physical internal rotation of rest-frame angular frequency $\omega_c=Mc^2/\hbar$, and let it traverse a crystal along an atomic row of spacing $\ell_\mathrm{row}$ with speed $v$. The row potential acts in the rest frame at the frequencies $2\pi n_h\gamma_vv/\ell_\mathrm{row}$, $n_h=1,2,\ldots$, and resonance with the clock occurs at the momenta
$$
p^\mathrm{res}_{n_h}=\frac{p^\mathrm{res}_1}{n_h},\qquad p^\mathrm{res}_1c=\frac{(Mc^2)^2\,\ell_\mathrm{row}}{hc}.
\tag{60}
$$
For electrons: Si$\langle110\rangle$ ($\ell_\mathrm{row}=3.840$ Å) $80.87$ MeV; Ge$\langle110\rangle$ ($4.001$ Å) $84.26$ MeV; diamond$\langle110\rangle$ ($2.522$ Å) $53.12$ MeV.

*Proof.* In the rest frame the row spacing is $\ell_\mathrm{row}/\gamma_v$ and the rows pass at speed $v$, giving fundamental frequency $2\pi\gamma_vv/\ell_\mathrm{row}$. Setting $n_h$ times this equal to $\omega_c$ gives $\gamma_vv=Mc^2\ell_\mathrm{row}/(n_hh)$, i.e. $p=M\gamma_vv$ as stated. The numbers use $(m_ec^2)^2=0.261120\ \mathrm{MeV^2}$ and $hc=1.239842\times10^{-12}$ MeV m. $\square$

Standard quantum mechanics predicts no resonance tied to $Mc^2/\hbar$: the Compton phase is a global phase and cannot couple to a row potential. A zitterbewegung clock at $2Mc^2/\hbar$ would place the resonance at twice the momentum [70]. Catillon et al. reported a transmission anomaly near the Si$\langle110\rangle$ value [71] (to be verified; not independently replicated), and Lan et al. showed that the Compton frequency can be referenced to a clock through atom interferometry, which does not by itself imply a local oscillation [72]. The proposition sharpens the test into Stake S24. The fundamental must appear in Si and Ge at momenta in the ratio $4.001/3.840$ and in diamond at $53$ MeV/$c$, with sub-harmonics at $p_1/n_h$. The kill is absence at all three momenta at a sensitivity that would have seen the reported Si anomaly. A positive result at $2p_1$ instead would favor a zitterbewegung clock over GUM's.

## E. Bench protocol

**Proposition 16 (Validity conditions).** A bench object tests Eq. (54) and the discriminator of Eq. (58) only if, with pre-registered tolerances: (i) it is a localized texture of a chiral micropolar system with integer degree; (ii) it isorotates with measured $\omega$; (iii) its Adler locking to a drive at $\omega$ is demonstrated, realizing (C-clock); (iv) its damping satisfies $\Gamma_\mathrm{damp}\ll\omega$; and (v) its rotational and total energies are measured independently. Under (i)–(v), $E_\mathrm{rot}/E=j/2$ is an identity and the measured quantity is $j$; $\kappa^2g_\mathrm{tot}$ is then a genuine profile test.

Platforms exist. Three-dimensional chiral mechanical metamaterials are laboratory Cosserat systems with twist–compression coupling [73, 74]; chiral nematics host solitons with internal rotation, heliknotons and knotted fields among them [75, 76]; and chiral magnets host heliknotons and hopfion rings [77, 78]. The Spreeuw wall stands: no Bell content is claimable from any bench. The benches weigh closure mathematics, and a bench falsification kills a derivation as mathematics with no cosmological excuse available. Stakes S3, S4$'$, S5, S13, and S14 are the bench program; none of them bears on whether the vacuum is a material, and every one bears on whether GUM's mathematics is what GUM says it is.

# VII. The Electron: Core, Halo, and the Band Edge

## A. Degree conservation and pair creation

**Lemma 5 (Charge transfer and protection).** Along any continuous history with $\mathbf{u}(t)\to0$ at spatial infinity and $\det\mathsf F(t,\mathbf{x})\ge\delta>0$ on compacts, $\deg\tilde R[\mathbf{u}(t)]$ is constant; if $\mathbf{u}(0)=0$ then $\deg\tilde R\equiv0$ and $\deg\tilde P=\deg\tilde Q\equiv K$ throughout. The disclination winding carried by the triad convention is likewise constant, so its density and current obey $\partial_t\rho_q+\nabla\cdot\mathbf{j}_q=0$ wherever the triad is defined. Contrapositive: a change of total degree or winding along a history requires $\inf\det\mathsf F\to0$ — a tear.

*Proof.* Polar decomposition is continuous on $\det\mathsf F\ge\delta$; the $SU(2)$ lift is unique up to sign and continuous along such histories; the Brouwer degree is locally constant under uniform convergence. The winding current is the identically conserved topological current of the convention angle, whose divergence vanishes wherever the angle is defined. No convexity, contractibility, or connectedness of the admissible set is used. $\square$

Three consequences are consumed throughout. Topological charge is conserved (degree constancy), quantized (degree is an integer; locked fractions are classified separately in Sec. VIII), and creatable only in pairs at coincidence strata where the material's integrity fails, $\det\mathsf F\to0$. In the Standard Model these are three separate inputs — Noether charge, quantization arguments, crossing symmetry. In GUM they are one lemma, and charge conservation is the absence of tears. The lemma also supplies the continuity equation used in Sec. III C.

## B. The two-scale electron

**Theorem 15 (Compatibility).** Let a degree-one texture of the material be the electron, with mass texture of radius $R_\mathrm{tex}$, charge localized within $r_c$, and lowest internal excitation $\Delta E$. Compatibility with data requires
$$
r_c\lesssim10^{-19}\ \mathrm{m},\qquad\Delta E\gtrsim\text{few TeV},\qquad R_\mathrm{tex}\lesssim\frac{\hbar c}{\Delta E}\lesssim10^{-19}\ \mathrm{m}.
\tag{61}
$$
A texture whose radius follows the compacton law Eq. (50) at the Compton scale fails the third inequality by four orders of magnitude, and a near-BPS texture at that scale fails the second by nine. Hence the topological core of the electron sits at the material's structural scale, $R_\mathrm{tex}\sim\ell_s\lesssim1.5\times10^{-27}$ m.

*Proof.* The electron is pointlike to $r_c\lesssim10^{-19}$ m in Bhabha scattering at LEP2 energies [79] and to $10^{-22}$–$10^{-19}$ m from its anomalous magnetic moment, depending on chiral protection [80]; no excited electron exists below several TeV [81]. A compact texture of radius $R$ with internal cone speed $c_\psi\simeq c$ has shape modes at $\hbar\omega_n\approx x_n\hbar c/R$ with $x_n=O(1)$–$O(\pi)$; at the Compton scale, $R\sim10^{-15}$ m gives $\Delta E\sim10^2$ MeV. In the near-BPS regime the SDiff-degenerate shape modes are lifted only at $O(\epsilon)$ [16], giving $\hbar\omega_\mathrm{soft}\sim\sqrt\epsilon\,\hbar\omega_0\approx1$–$40$ keV over the admission window. The inequalities follow, with $\Delta E\lesssim\hbar c/R_\mathrm{tex}$ for any extended texture; the bound on $\ell_s$ is Eq. (45). $\square$

**Proposition 17 (Core and halo).** The electron has two scales. Its *core* is the degree-one texture of radius $R_\mathrm{core}\sim\ell_s$, carrying the topological degree, the disclination charge, the Bogomolny energy Eq. (48), and the isorotation of Sec. VI; the compacton radius $R_\ast=R_\mathrm{core}$ fixes $\Lambda/\tilde m_V=\pi^2\ell_s^3/2$, which with $M=(64/9\pi)\Lambda\tilde m_V$ [N] fixes $(\Lambda,\tilde m_V)$ per species. Its *halo* is the evanescent relative-rotation field driven by the isorotation outside the core, decaying as $e^{-r/\lambda_\mathrm{halo}}/r$ with
$$
\lambda_\mathrm{halo}=\frac{c_\psi}{\omega_0\sqrt{1-\kappa^2}}=\frac{c_\psi}{c}\,\frac{\hbar}{Mc}\,\frac{\kappa}{\sqrt{1-\kappa^2}}\ \xrightarrow{\ \kappa=1/\sqrt2\ }\ \frac{c_\psi}{c}\,\frac{\hbar}{Mc}.
\tag{62}
$$
The halo is not compact; its excitations are relative-rotation quanta, not shape modes. The charge form factor is unity to momentum transfer $\hbar c/\ell_s$; the core's shape modes lie at $\hbar c/\ell_s\gtrsim10^{11}$ GeV and its near-BPS soft modes at $\sqrt\epsilon$ of that. The closure quantities $\mathfrak{c}$, $\kappa$, and $\kappa^2g_\mathrm{tot}$ are dimensionless ratios of profile integrals and are scale-free.

*Proof.* The core assignments are those of Sec. VI. Outside the core the relative rotation obeys the linearized branch equation $(\partial_t^2+\omega_0^2-c_\psi^2\nabla^2)\boldsymbol\psi=0$ of Eq. (13); a source at $\omega=\kappa\omega_0<\omega_0$ gives $\nabla^2\boldsymbol\psi=[(\omega_0^2-\omega^2)/c_\psi^2]\boldsymbol\psi$, whose decaying solution has the stated length, and $\omega_0=Mc^2/(\hbar\kappa)$ gives the second form. The form-factor and excitation statements follow from $R_\mathrm{core}\sim\ell_s$ and Eq. (61). Scale-freedom of the closure ratios is manifest in Eq. (57). $\square$

The previous draft printed $\lambda_\mathrm{halo}=\kappa\hbar/Mc=\hbar/(\sqrt2Mc)$; the in-gap decay length at $\kappa=1/\sqrt2$ is $(c_\psi/c)\hbar/Mc$, larger by $\sqrt2$. The correction is item (3) of the audit K-N, and its consequence for the neutrino stake is printed in Sec. II F.

The two-scale picture is GUM's reading of a familiar fact. The electron is pointlike to every probe of its charge, and yet it has a characteristic length, the reduced Compton wavelength, below which a single-particle description fails. In GUM the first fact is the core and the second is the halo. The boundary layer in which a knot's orientation relaxes against the helical background is the halo, and the frustration integrals of the flavor sector (Sec. VIII) are halo integrals, evaluated across the halo of the base class, $q\lambda_{\mathrm{halo},\tau}\approx2.6\times10^{-11}$ [N]. GUM's posed closure **K-10** (halo dominance) has three deliverables: (i) exhibit, within Eq. (4), a degree-one solution with compact core at scale $\ell_s$ and linear halo at scale Eq. (62); (ii) evaluate the frustration integrals on that solution and show that the halo contribution reproduces the constants of Sec. VIII within their bands; (iii) evaluate the halo-tunneling exponent of the weak vertex. Kill: if the integrals are core-dominated, the lepton logarithms and the neutrino mass of Sec. VIII B are demoted to [posed] and Stake S1 is suspended. The compatibility conditions Eq. (61) are a standing consistency requirement (Stake S21): a core radius above $10^{-19}$ m, or an internal excitation of the electron below the TeV scale, is retired by the LEP and LHC archives without a new measurement.

## C. The band edge

The gap $\hbar\omega_0=Mc^2/\kappa$ is, for $\kappa=1/\sqrt2$, a *band edge* at $\sqrt2Mc^2$: $722.7$ keV for the electron, $149.42$ MeV for the muon, and $2.513$ GeV for the tau. What exists at the band edge is a question the previous draft did not ask. A vacuum branch is common to all species, so three species-specific edges cannot all be edges of the vacuum branch. Section VIII identifies the vacuum relative-rotation triplet with the weak triplet, gapped at the twist scale $M_T\simeq M_W$. The lepton edges must then be properties of each class's frustrated halo, not of the vacuum.

**Proposition 18 (Band-edge alternatives and their kinematics).** Exactly one of the following holds. (a) The halo has no discrete level below the pair threshold. Then there are no free quanta at $Mc^2/\kappa$, the halo's excitations begin at $2Mc^2$, and the band edge is observable only through the closure ratios. (b) The halo supports a discrete neutral level $X$ with $m_X=m/\kappa<2m$. Then electron–positron systems can emit $X$, and ortho-positronium, if $C_X=+1$, has a two-body decay $\mathrm{o\text{-}Ps}\to\gamma X$ with a monoenergetic photon at
$$
E_\gamma=\frac{M_\mathrm{Ps}^2-m_X^2}{2M_\mathrm{Ps}}c^2=\frac{m_ec^2}{4}\left(4-\kappa^{-2}\right)+O(\alpha^2m_ec^2),
\tag{63}
$$
which equals $m_ec^2/2=255.5$ keV at $\kappa=1/\sqrt2$. The line position measures $\kappa$ directly: $\kappa=[4-4E_\gamma/m_ec^2]^{-1/2}$.

*Proof.* The dichotomy is exhaustive for a gapped halo spectrum below threshold. The kinematics are those of two-body decay with $M_\mathrm{Ps}=2m_e-B$, $B=6.8$ eV; $X\to e^+e^-$ is closed because $m_X<2m_e$, so $X$ would decay radiatively or escape. Charge conjugation of the photon is $-1$, so the decay of the $C$-odd ortho state requires $C_X=+1$. $\square$

GUM's core adopts alternative (a), which is the one consistent with identifying the vacuum triplet as the weak triplet. Alternative (b) is registered as Stake S25, conditional on posed closure **K-19**, whose deliverable is the halo spectrum below $2Mc^2$ for each frustration class. The positronium line is an unusually clean conditional stake. It is monoenergetic, its energy is fixed by a single material number, and existing searches for exotic ortho-positronium decays already constrain its branching ratio [81]. If K-19 returns a level, the line's position measures $\kappa$ and hence settles item (2) of the audit K-N.

# VIII. The Standard-Model Sectors at Their Ledger Grades

GUM's flavor, electroweak, strong, and anomaly sectors are stated here at the resolution their grades support, with the audit of Definition 9 attached to each. The pattern the audit reveals is stated once. These sectors reproduce, at various grades, the Standard Model's postulate layer, and they are almost all non-discriminating: they are consistency conditions a material must satisfy, and GUM satisfies them. This revision changes their content in three places — the neutrino stake inherits the normalization audit, the weak triplet now carries the band-edge argument of Sec. VII C, and the frustration index is written $\mathsf p$ to free the letter $p$ for the pitch.

## A. Three families as frustration classes

The blue-fog vacuum carries local pitch wavenumber $q$. A knot's asymptotic frame-matching against the helix is classified by a relative-twist integer $\mathsf p$, with laboratory precedent in the discrete metastable twist classes of knot solitons in chiral hosts [75]. Class-$\mathsf p$ frustration partially defeats locking over the halo:
$$
\tilde m_{\mathsf p}=\tilde m_c\sqrt{\varsigma(\mathsf p)},\qquad\varsigma(\mathsf p)=e^{-\Sigma(\mathsf p)},\qquad\Sigma(\mathsf p)=A\mathsf p+B\,\frac{\mathsf p(\mathsf p-1)}{2},\qquad\ln\frac{m_{\mathsf p}}{m_{\mathsf p+1}}=\tfrac12(A+B\mathsf p),
\tag{64}
$$
with $A$ the per-belt integral and $B$ the pairwise belt-coupling integral — multiplicative by mechanism, as the factorization theorem below requires. The requirements assembled before the generator was proposed are these: only $\tilde m$ varies across species ($\Lambda\sqrt J$ is locked by universality); composition is multiplicative (quadrature composition would give inverse-mass Higgs couplings, which are excluded); discreteness comes from topology; there is no new elementary scalar (F-B1); and the mechanism must have hierarchy capacity. The integrals evaluate to $A=5.6\pm0.9$ and $B=5.7\pm1.2$ [N]. They give $\tfrac12A=2.80\pm0.45$ against $\ln(m_\tau/m_\mu)=2.822$, $\tfrac12(A+B)=5.65\pm0.75$ against $\ln(m_\mu/m_e)=5.332$, and the parameter-free shape ratio $(A+B)/A=2.02\pm0.28$ against $1.889$, with family map $\mathsf p=(0,1,2)=(\tau,\mu,e)$ [DW]. Under GUM's house style (Definition 10) these are landings, not tests: a two-integral mechanism reproduces the order-one coefficients of the lepton mass ratios within $\pm16\%$ with no fitted parameters, and no precision test has been performed.

The $\mathsf p=3$ state, at $m\approx m_ee^{-\frac12(A+2B)}\approx100$ eV, carries near-BPS parameter $\epsilon_3=\epsilon_ee^{(4/3)\cdot8.5}$ and crosses closure failure for essentially the entire admission window. The tower terminates at three charged families because its next rung cannot close [DW-structural]. The *form* of Eq. (64) is a bench experiment (Stake S17): in a chiral nematic under conical or helical boundary conditions, skyrmions in classes $\mathsf p=0,\ldots,3$ must have $\ln(E_{\mathsf p}/E_{\mathsf p+1})$ linear in $\mathsf p$ with $B\neq0$ and a termination class. Kill: $B=0$ within errors, or no termination.

## B. The neutrino as pitch quantum

A light knot is impossible. The closure inflates as $\epsilon\propto\tilde m^{-4/3}$, so a milli-eV knot is $10^{12}$-fold looser than existence allows, and knots cannot be parametrically lighter than the Skyrme scale $\mathfrak{m}_\mathrm{Sk}\approx1.7$ GeV [N]. The helical vacuum supports a texture unavailable to a uniform one: the heliknoton, a unit-Hopf excitation of the helix itself, a real object in chiral liquid crystals and magnets [76, 77]. GUM's neutrino is that texture. Its mass is the pitch quantum, Eq. (26). It is dark to electromagnetism and weakly coupled by channel residence, since a twist texture couples to the twist sector. It is fermionic by Flag F12 ($\pi_1=\mathbb{Z}_2$ makes fermionic quantization consistent, not forced). It is Majorana-generic, since no $U(1)$ lock survives on the Hopf sector, so neutrinoless double-beta decay must occur (Stake S6). And it has a single helicity, slaved to the ambient helix sign.

The bridge to the charged ladder is the logarithmic relaxation of the $\mathsf p$-winding over the pitch outside the halo, $A(q)=A_\mathrm{halo}+\kappa_\mathrm{far}\ln(1/q\lambda_\mathrm{halo})$, with $A_\mathrm{halo}=3.05\pm0.09$ and $\kappa_\mathrm{far}=0.1065\pm0.0032$ [N]. Inverting with the data-side value $A=2\ln(m_\tau/m_\mu)=5.644$ gives
$$
\ln\frac{1}{q\lambda_\mathrm{halo}}=\frac{5.644-3.05}{0.1065}=24.36\pm0.90\ \Rightarrow\ m_3=0.047\ \mathrm{eV},\quad1\sigma\ [0.019,0.115]\ \mathrm{eV},
\tag{65}
$$
which the oscillation floor $\sqrt{\Delta m^2_{31}}=0.0503$ eV truncates to $m_3\in[0.050,0.057]$ eV. That is Stake S1: $\Sigma m_\nu\in[0.058,0.11]$ eV with normal ordering [DW, conditional on K-10 and K-N]. Two riders now attach to it. The first is the audit. The corrected halo length of Eq. (62) is the yardstick that converts the logarithm of Eq. (65) into $m_3$; at fixed integrals it leaves the central value at $0.047$ eV or raises it to $0.066$ eV, and never lowers it below the floor, while the integrals themselves must be recomputed on the corrected profile (Sec. II F). The second is cosmology, and it closes from both sides. DESI DR2 with the CMB gives $\Sigma m_\nu<0.064$ eV at 95% in $\Lambda$CDM [41, 42], leaving only the lowest sliver of the window. Within dark-energy models with $w\ge-1$ — the class to which GUM's own relaxation family belongs — the cosmological bound is *tighter* than in $\Lambda$CDM [82]. S1 therefore survives only through the neutrino-mass drift of Proposition 27, which makes the cosmological and laboratory masses different quantities. GUM prints the trap and the one door out of it.

## C. The electroweak skeleton

Under F-B1 no elementary massive species of spin 0 or 1 exists. $W^\pm$, $Z$, and $h$ are therefore collective modes of the $\tilde P$/locking sector, with superfluid $^3$He-B's $SO(3)$ relative-rotation order parameter as the exact mathematical analog for their classification [83]. The locked ground state is invariant under diagonal co-rotation $SO(3)_\mathrm{cr}$, under which the branches of Proposition 1 organize as B1 (constraint scalar), B2$\pm$ (co-rotation-inert doublet, the photon), and the gapped orientation triplet $\{$B3$\pm$, B4$\}$ transforming as $J=1$. The triplet is the weak triplet (Flag F14). Its charged members are triplet quanta bound to unit disclination winding — charged twist excitons, the $W^\pm$ [CJ binding] — and its neutral member is B4 after B2-mixing, the $Z$. Any branch carrying net disclination winding pays the locked tension, so no gapless charged mode exists in any phase, and the residual pattern "$SU(2)$-like $\times\,U(1)\to U(1)_\mathrm{em}$" is a theorem of winding energetics rather than a choice of potential shape [DF].

**Proposition 19 (Protected diagonalization: $\rho=1$ and $e=g\sin\theta_w$).** In the neutral basis $(a_2,a_T)$ — the co-rotation-inert channel and the bare neutral twist channel — (P3) forbids any mass term in the pure-$a_2$ slot at every order. The only entries are the twist gap $M_T^2$ and the $\chi_2$ cross term, and protection of an exact zero eigenvalue forces rank one:
$$
\mathbb{M}^2=M_T^2\begin{pmatrix}\vartheta^2&\vartheta\\ \vartheta&1\end{pmatrix},\qquad\det\mathbb{M}^2=0,\qquad\text{eigenvalues }\{0,\ M_T^2(1+\vartheta^2)\},
\tag{66}
$$
with $\tan\theta_w\equiv\vartheta$, photon $A=\cos\theta_wa_2-\sin\theta_wa_T$, $Z=\sin\theta_wa_2+\cos\theta_wa_T$, and $M_Z=M_T/\cos\theta_w$. The charged members carry disclination winding and cannot mix with the winding-free $a_2$, so $M_W=M_T$ at this order and
$$
\rho\equiv\frac{M_W^2}{M_Z^2\cos^2\theta_w}=1\quad\text{identically}.
\tag{67}
$$
Matter couples to the twist channel with strength $g$ and to $a_2$ only through the same $\chi_2$ modulus, $g'=g\vartheta$; projecting onto the null eigenvector gives $e=g\sin\theta_w=g'\cos\theta_w$.

*Proof.* $\det\mathbb{M}^2=M_T^4(\vartheta^2-\vartheta^2)=0$ and $\mathrm{tr}\,\mathbb{M}^2=M_T^2(1+\vartheta^2)$; $\mathbb{M}^2(1,-\vartheta)^{\mathsf T}=0$; normalizing with $\tan\theta_w=\vartheta$ gives the eigenvectors; $M_Z^2=M_T^2(1+\vartheta^2)=M_T^2/\cos^2\theta_w$ and Eq. (67) follows. The coupling identity is the projection of the two vertices onto the null eigenvector. $\square$

The co-rotation invariance that keeps the photon massless is the custodial invariance that fixes $\rho=1$ (cross-lock C-EW4): the two stand or fall together, and a confirmed $\rho\neq1$ beyond the radiative window, or a photon mass, kills the pair (Stake S7). The value of $\vartheta$, hence $\sin^2\theta_w\approx0.231$, is a constitutive modulus [IM] in the same class as $\alpha$; whether the cone-locking flow has an attractor for $\vartheta$ is posed closure K-EW-III. GUM's audit: $\rho_\mathrm{tree}=1$ and $e=g\sin\theta_w$ are non-circular within GUM and non-discriminating against the Standard Model, whose doublet entails the same. The experimental statement "$\rho_0=1$ to $10^{-3}$" is defined *after* subtraction of the Standard Model's own loop correction $\Delta\rho_\mathrm{top}=3G_Fm_t^2/(8\sqrt2\pi^2)\approx0.93\%$ [84], which GUM's band-edge composite top must reproduce (posed closure K-5, Appendix G).

**Theorem 16 (Factorization implies coupling universality).** If $m_f=M_0(\text{lock})\,e^{-I_f}$ with $M_0$ the band-edge scale, proportional to the lock amplitude, and $I_f$ lock-independent, then $\partial m_f/\partial(\text{lock})=m_f/(\text{lock})$ exactly, so the coupling of the lock's amplitude mode $h$ to every knot is $g_{hff}=m_f/v_\mathrm{eff}$ with one universal $v_\mathrm{eff}$ and no fundamental Yukawa couplings. Deviations $\eta_f\equiv\kappa_f/\kappa_f^\mathrm{SM}-1=-\partial I_f/\partial\ln(\text{lock})$ are nonzero only through the weak dependence of the frustration integrals on the lock scale via the fog stiffness.

*Proof.* $\partial_\mathrm{lock}m_f=e^{-I_f}\partial_\mathrm{lock}M_0=m_f\,\partial_\mathrm{lock}\ln M_0$, universal because $M_0\propto$ lock. An additive law $m_f^2=M_0^2+\Delta_f^2$ gives $g_{hff}\propto1/m_f$ instead, which the LHC excludes. $\square$

The scalar $h$ is the gapped $J=0$ breathing mode of the lock amplitude — the amplitude ("Higgs") mode of the locked condensate, as in superconductors and $^3$He — with $M_h^2$ the curvature of the effective potential at the attractor (posed closure K-EW-I; no number claimed) [DW]. Requiring the two frustration landings to stay inside their bands bounds $\lvert\eta_f\rvert\le0.05$ with family ordering $\lvert\eta_t\rvert<\lvert\eta_b\rvert<\lvert\eta_\tau\rvert<\lvert\eta_\mu\rvert$, and the invisible width into soft-fog excitations at the few-percent level (Stake S2$'$, two-sided at HL-LHC). Amplitude modes of strongly locked condensates are generically broad; the measured off-shell width $\Gamma_h=3.2\,{}^{+2.4}_{-1.7}$ MeV [85], $\Gamma/M\approx3\times10^{-5}$, constrains the attractor stiffness and belongs to K-EW-I's deliverables.

Integrating out the gapped triplet at momenta far below $M_W$ yields the contact form $G_F/\sqrt2=g_4^2/(8M_W^2)$ times a form factor. The four-knot vertex is the triple overlap of knot zero-mode, B4 profile, and disclination form factor, and it threads the pinned marginal halo of the compacton, $g_4\propto\exp[-\int_\mathrm{halo}d\ell\sqrt{2J\Delta W}/\hbar]\equiv e^{-\mu_hd_\mathrm{halo}}$ (cross-lock C-EW2) [DW-structure]. The knot's fermionic zero-mode doublet, immersed in the handed condensate, splits in the manner of Jackiw and Rebbi [86]: one helicity class remains core-normalizable, the other is expelled to the halo with exponentially small residue, and the B4 vertex couples only to the bound class. Charged currents are therefore maximally parity-violating, with the sign slaved to the vacuum's handedness and a wrong-chirality admixture $\epsilon_R\sim e^{-\mu_hd_\mathrm{halo}}$ [DW]. GUM's audit here is precise. The measured $g\approx0.65$ is not small, so the tunneling factor at the vertex is of order one unless the prefactors of $g_4$ and $\epsilon_R$ differ by orders of magnitude; those prefactors are the deliverable of posed closure K-13, and until it executes, the "shared exponent" is a structural statement without predictive force.

The $Z$ (twist channel) is diagonal in frustration class, because class transitions require winding transfer, which a neutral channel cannot carry: there are no tree-strength flavor-changing neutral currents (a GIM analog) [DW]. The heliknoton couples to the $Z$ through channel residence, and with the tower terminating at three, the invisible width counts $N_\nu=3$ against the LEP determination $2.9963\pm0.0074$ after the luminosity re-analysis [87] — a coincidence at the $0.3\%$ level between a Hopf texture's coupling and a knot's, for which GUM owes a theorem (K-14). $M_W$, $M_Z$, $M_h$, and $m_t$ are all band-edge objects; their clustering within a factor of two is structural, and a constitutive band gap does not run to the lattice scale, so the hierarchy problem is re-classed as an artifact of treating $h$ as elementary [DW]. The last admitted frustration class sits nearest the band edge, forcing $y_t=\sqrt2m_t/v\approx0.99$ into the top of the last spacing (cross-lock C-EW3: one censor prices three families and $y_t\approx1$) [DW].

## D. The strong sector

Against the double-twist network, a knot's frame-matching admits locked fractional winding classes in thirds, set by the three-branch junction structure of the network; the junction-branch label is the color index and the cell arithmetic the $\mathbb{Z}_3$ center. A knot carrying fractional winding cannot be screened smoothly and must terminate a network disclination line of tension $\sigma$, which gives a linear potential $V=\sigma r$ [DF-structural]. Line tensions come in three strata: material-scale lines, gapped-stratum flux tubes with $T\sim M_\mathrm{gap}^2$ (the QCD string), and soft phason strings with $f^2\in[1.6\times10^{-5},4\times10^{-3}]$ GeV$^2$ [DF]. A winding charge is confined iff its mediator stratum is gapped: electric charge is unconfined because the photon is massless, and color is confined because its stratum is gapped — one gap structure, both experimental signs [DF]. Fractional winding also imposes a mass-blind dressing-sector floor $\epsilon_\mathrm{dress}=(f_q/\mathfrak{m}_\mathrm{Sk})^2\approx10^{-2}$, above the entrainment ceiling by a factor of about $3.8$ [N], so no fractionally wound species closes as an asymptotic state at the vacuum's $\hbar$: all six quarks, top included, are censored and confined, and all leptons are free [DF].

The long-wavelength theory of line-neutral composites is the locking-stratum orientation field with stiffness $f_q$ and a stabilizing quartic — the hadronic Skyrme model, GUM's own second-rung effective theory [13, 33]. It gives $\sigma=\pi f_q^2\ln\kappa_q$, $f_q\approx0.14$–$0.20$ GeV by inversion of $\sigma\approx0.19$ GeV$^2$, a Regge slope $\alpha'=1/(2\pi\sigma)\approx0.84$ GeV$^{-2}$ against the observed $0.88$ (a consistency, not a claim), and the Y-junction baryon geometry [DF-structural]. GUM's audit: the dichotomy, the linear potential, and the Regge structure are entailed by QCD and are non-discriminating. The top quark's decay before hadronization ($\Gamma_t\approx1.4$ GeV $>\Lambda_\mathrm{QCD}$) is a fact the universal-confinement theorem must reproduce (K-15).

There are no gluon quanta, no color factors, no running of $\alpha_s$, no partonic scaling, and no deep-inelastic phenomenology in GUM; every short-distance fact is [IM]. Posed closure K-4: the effective junction stiffness is a scale-dependent network stiffness on which the cone-locking flow Eq. (46) acts; the required sign is anti-screening, and if the computed flow screens, the short-distance sector is imported permanently and no second mechanism is admitted (Stake S12). The action's $\tfrac12\Lambda^2b_P^2$ term is a quadratic penalty on the topological density. A uniform background costs bulk energy, the vacuum relaxes $\langle b_P\rangle\to0$, no superselected $\theta$ arises because degree sectors communicate only at $\det\mathsf F\to0$ strata, and the residual feeds through the handedness chain at halo-suppressed order — an axion mechanism with no axion (K-3) [CJ], adjudicated by the neutron and electron EDM programs (Stake S11).

## E. Anomalies as tiling, and CP by holonomy

**Proposition 20 (The six sums as winding arithmetic).** With hypercharge $Y$ decomposed as the network third (from the strong sector) plus the helix-relative co-rotation weight $T_3$ of the core doublet zero-modes, convention $Q=T_3+Y$, the per-family left-handed content $Q_L(3,2,+\tfrac16)$, $u^c(\bar3,1,-\tfrac23)$, $d^c(\bar3,1,+\tfrac13)$, $L_L(1,2,-\tfrac12)$, $e^c(1,1,+1)$, and the heliknoton ($Y=0$) satisfies
$$
\begin{aligned}
&[SU(3)]^2U(1):\ 2\cdot\tfrac16-\tfrac23+\tfrac13=0,\qquad[SU(2)]^2U(1):\ 3\cdot\tfrac16-\tfrac12=0,\qquad\mathrm{grav}^2U(1):\ 1-2+1-1+1=0,\\
&[U(1)]^3:\ 6(\tfrac16)^3+3(-\tfrac23)^3+3(\tfrac13)^3+2(-\tfrac12)^3+1=\tfrac{1-32+4-9+36}{36}=0,\qquad[SU(3)]^3:\ 2-2=0,\qquad\text{Witten: }3+1\text{ doublets},
\end{aligned}
\tag{68}
$$
and the electric-charge tiling $3(\tfrac23)+3(-\tfrac13)+(-1)+0=0$ closes: a unit cell of the double-twist lattice carries no net topological flux.

*Proof.* Arithmetic on the displayed fractions. $\square$

GUM's audit: the sums close on the same thirds that generate confinement and on the same down-type sign that the quark-spacing reconstruction forces, with no per-condition tuning [DW-arithmetic]. That these sums are the *necessary* consistency conditions of the texture theory is posed closure K-EW-II; the sums themselves are those of the Standard Model, hence non-discriminating.

**Proposition 21 (Holonomy phase counting).** Transport holonomies around double-twist network cells, encoded in an $N\times N$ unitary overlap block $V$ between frustration eigenknots and B4-vertex eigenmodes, modulo independent rephasings of the in- and out-basis class labels, leave exactly $(N-1)(N-2)/2$ irreducible phases: zero for $N=2$ and one for $N=3$.

*Proof.* An $N\times N$ unitary has $N^2$ real parameters, $N(N-1)/2$ angles and $N(N+1)/2$ phases; the rephasing group has $2N$ parameters, of which $2N-1$ act effectively; $N(N+1)/2-(2N-1)=(N-1)(N-2)/2$ [88]. $\square$

The counting is Kobayashi–Maskawa's transplanted onto network holonomy. GUM's content is that $N=3$ is an output of the termination argument and that the holonomies are geometric, so that CP violation is a property of the vacuum's web with its sign welded to the handedness chain. Mixing matrices are mismatches, $U_\mathrm{CKM}=V_u^\dagger V_d$ and $U_\mathrm{PMNS}=V_\ell^\dagger V_\nu$, between frustration eigenknots and vertex eigenmodes [CJ realization]. Quark knots are network-tethered, so their bases nearly coincide and CKM is small; lepton knots float free against the fog, and the heliknoton basis is set by the helix, so PMNS is large — the confinement dichotomy speaking again [DW-qualitative]. The network's reflection symmetry on the heliknoton basis gives $\theta_{23}\to45^\circ$ and $\delta_{CP}\to\pm\pi/2$ with the sign fixed by the handedness chain (Stake S10) [DW-leading-order]; the Jarlskog magnitude is not claimed.

# IX. Cosmology: The Relaxation Family, Gravity, and the Dark Sector

## A. Vacuum energy as the lag of a slow mode

A material structured at $\ell_s$ carries a zero-point ledger of order $\hbar c/\ell_s^4\gtrsim6\times10^{81}\ \mathrm{J\,m^{-3}}$ against $\rho_\Lambda\approx6\times10^{-10}\ \mathrm{J\,m^{-3}}$. GUM's defusal is Volovik's [30], instantiated. For a self-sustained material the source of the induced gravitational equations is the grand-potential density $\omega_\mathrm{vac}=\varepsilon_\mathrm{vac}-\sum_i\mu_in_i$, and Gibbs–Duhem gives $\omega_\mathrm{vac}=-P_\mathrm{ext}=0$ in equilibrium. The zero-point ledger is chemical-potential bookkeeping, not gravitating stress, and only departures gravitate. On the Bogomolny locus the $(6+0)$ pressure vanishes pointwise (Sec. VI A), which is the compensation pattern operating natively in the dominant sector, and the same clause quarantines the fog's naive $10^{22}\rho_\Lambda$. The premise that the induced-gravity source is the grand potential has no in-material derivation and is imported [IM]; everything below inherits that conditionality visibly.

The departure is the lag of a slow mode of the material behind cosmic expansion. Let $q$ be the soft coordinate and expand $\rho_\Lambda(q)=\varepsilon(q)-\mu_0q$ about equilibrium: $d\rho_\Lambda/dq\rvert_0=0$ and $d^2\rho_\Lambda/dq^2=\mathcal{X}^{-1}>0$ by stability. Hubble dilution drives a lag $\delta q\propto H/\Gamma_r$, with $\Gamma_r$ the relaxation rate, and
$$
\rho_\mathrm{DE}\simeq\tfrac12\mathcal{X}^{-1}\delta q^2>0,
\tag{69}
$$
the displacement energy from a stable minimum [DF under the $q$-variable convention]. The slow mode lives on the $\epsilon$-lifted SDiff-soft manifold of the $(6+0)$ vacuum — the same manifold that hosts the chiral condensate of Sec. IV A (cross-lock X-$\Lambda\nu$). This revision makes the cross-lock a statement rather than a remark: *the soft coordinate is the pitch wavenumber $q$ of Eq. (26)*. The consequences of taking that literally are Proposition 27 and Corollary 7.

## B. The relaxation family

**Proposition 22 (Equation of state of the relaxation family).** Let $\Gamma_r=\Gamma_0(H/H_0)^n$ with $n\in[0,1]$. Then $\rho_\mathrm{DE}=\rho_{\mathrm{DE},0}(H/H_0)^{2(1-n)}$, and in a universe of matter plus this component
$$
w_\mathrm{DE}(a)=-\frac{n}{1-(1-n)\,\Omega_\mathrm{DE}(a)},\qquad\Omega_\mathrm{DE}\equiv\frac{\rho_\mathrm{DE}}{3M_\mathrm{Pl}^2H^2}.
\tag{70}
$$
In particular $w_\mathrm{DE}\in[-1,0]$ always; $w_\mathrm{DE}\equiv-1$ iff $n=1$; and $w_\mathrm{DE}\equiv0$ iff $n=0$.

*Proof.* $\rho_\mathrm{DE}\propto(H/\Gamma_r)^2\propto H^{2(1-n)}$, so $d\ln\rho_\mathrm{DE}/d\ln a=(1-n)\,d\ln H^2/d\ln a=-3(1-n)(1+\Omega_\mathrm{DE}w_\mathrm{DE})$, while continuity gives $-3(1+w_\mathrm{DE})$; equating yields Eq. (70). Since $\Omega_\mathrm{DE}\le1$ the denominator is at least $n$, so $\lvert w_\mathrm{DE}\rvert\le1$. $\square$

**Corollary 6 (The constant-rate member does not accelerate).** For $n=0$, $\rho_\mathrm{DE}=\alpha_0\,3M_\mathrm{Pl}^2H^2$ with constant $\alpha_0$, and the Friedmann equation is $H^2(1-\alpha_0)=\rho_m/3M_\mathrm{Pl}^2$: matter-dominated expansion with a rescaled Newton constant, deceleration $q_\mathrm{dec}=+\tfrac12$ at all times, and no acceleration — the no-go for Hubble-cutoff holographic dark energy [89, 90]. Inserting the $\Lambda$CDM $\Omega_m(z)$ into this member gives $w=-1+\Omega_m(z)$ formally, but on that background $\rho_\mathrm{DE}/\rho_m\to\Omega_\Lambda/\Omega_m\approx2.2$ at early times, a matter-like component more than twice the matter density at recombination, excluded by the CMB determination of $\omega_m$ [91]. GUM's index therefore satisfies $n>0$, and by Proposition 23, $n>n_\mathrm{min}$.

**Proposition 23 (Acceleration requires $n>n_\mathrm{min}$).** The present deceleration parameter $q_{\mathrm{dec},0}=\tfrac12(1+3w_{\mathrm{DE},0}\Omega_{\mathrm{DE},0})$ is negative iff
$$
n>n_\mathrm{min}=\tfrac12\big(\Omega_{\mathrm{DE},0}^{-1}-1\big)\approx0.22\qquad(\Omega_{\mathrm{DE},0}=0.69).
\tag{71}
$$

*Proof.* $3w\Omega<-1\iff3n\Omega>1-(1-n)\Omega\iff\Omega(1+2n)>1$. $\square$

**Proposition 24 ($w_a\ge0$ and no phantom crossing).** Along the family $d\Omega_\mathrm{DE}/d\ln a=-3w_\mathrm{DE}\Omega_\mathrm{DE}(1-\Omega_\mathrm{DE})$, and
$$
w_a\equiv-\left.\frac{dw_\mathrm{DE}}{da}\right\rvert_{a=1}=-\frac{3n(1-n)\,w_{\mathrm{DE},0}\,\Omega_{\mathrm{DE},0}(1-\Omega_{\mathrm{DE},0})}{[1-(1-n)\Omega_{\mathrm{DE},0}]^2}\ \ge\ 0,
\tag{72}
$$
with equality iff $n\in\{0,1\}$; and $w_\mathrm{DE}\ge-1$ at all times, so the family never crosses the phantom divide.

*Proof.* $d\ln\Omega_\mathrm{DE}/d\ln a=-3(1+w_\mathrm{DE})+3(1+\Omega_\mathrm{DE}w_\mathrm{DE})=-3w_\mathrm{DE}(1-\Omega_\mathrm{DE})$. Differentiating Eq. (70) with $D=1-(1-n)\Omega_\mathrm{DE}$ gives $dw/d\ln a=-(n(1-n)/D^2)\,d\Omega_\mathrm{DE}/d\ln a$; substituting and using $w_a=-dw/d\ln a\rvert_{a=1}$ gives Eq. (72). The sign follows from $w_{\mathrm{DE},0}<0$ for $n>0$; no-crossing is the bound of Proposition 22. $\square$

**Proposition 25 (Early dark energy).** In the matter era $\rho_\mathrm{DE}/\rho_m\simeq(\Omega_{\mathrm{DE},0}/\Omega_{m,0})\,\Omega_{m,0}^{1-n}\,a^{3n}$: at recombination this is $\approx3\times10^{-5}$ for $n=\tfrac12$ and $\approx9\times10^{-3}$ for $n=\tfrac14$, and in the radiation era the fraction scales as $a^{4n}$. For $n\gtrsim0.3$ the family is safe from BBN and early-dark-energy bounds and is constrained only by late-time distances and growth.

*Proof.* Substitute $H^2\simeq H_0^2\Omega_{m,0}a^{-3}$ into $\rho_\mathrm{DE}\propto H^{2(1-n)}$. $\square$

The family traces a curve in the $(w_0,w_a)$ plane from $(0,0)$ at $n=0$ through $(-0.52,+0.27)$, $(-0.76,+0.29)$, $(-0.91,+0.16)$, and $(-0.97,+0.06)$ at $n=0.25$, $0.5$, $0.75$, $0.9$, to $(-1,0)$ at $n=1$ (Table 5). Every member has $w_0\ge-1$ and $w_a\ge0$: dark energy that was *less* negative in the past and never phantom.

## C. The family is the Dvali–Turner family

**Proposition 26 (Equivalence with the Dvali–Turner background).** The relaxation family's Friedmann equation,
$$
H^2-\Omega_{\mathrm{DE},0}H_0^{2n}H^{2(1-n)}=\frac{8\pi G}{3}\rho_m,
\tag{73}
$$
is the modified Friedmann equation $H^2-H^{\alpha_\mathrm{DT}}/r_c^{2-\alpha_\mathrm{DT}}=8\pi G\rho_m/3$ of Dvali and Turner [32] with
$$
\alpha_\mathrm{DT}=2(1-n),\qquad r_c^{\,\alpha_\mathrm{DT}-2}=\Omega_{\mathrm{DE},0}H_0^{2-\alpha_\mathrm{DT}}.
\tag{74}
$$
The member $n=\tfrac12$ ($\alpha_\mathrm{DT}=1$) is the self-accelerating background of the Dvali–Gabadadze–Porrati braneworld [92]; $n=1$ ($\alpha_\mathrm{DT}=0$) is $\Lambda$; and $n=0$ ($\alpha_\mathrm{DT}=2$) is the rescaled-$G$ member of Corollary 6.

*Proof.* Substitute $\rho_\mathrm{DE}=\rho_{\mathrm{DE},0}(H/H_0)^{2(1-n)}$ into $H^2=(8\pi G/3)(\rho_m+\rho_\mathrm{DE})$ and use $\rho_{\mathrm{DE},0}=3H_0^2\Omega_{\mathrm{DE},0}/8\pi G$. $\square$

The equivalence cuts both ways, and GUM prints both. It removes a claim of novelty: GUM's background is not new, and every distance-data fit of the Dvali–Turner family applies to it directly. The DGP background ($n=\tfrac12$) is known to fit combined distance data worse than $\Lambda$CDM [93]. It also sharpens what *is* GUM's. The family arises from the lag of a material mode rather than from leakage into an extra dimension, so its perturbations are not DGP's — there is no brane, no brane-bending mode, and no ghost. The growth of structure therefore discriminates between GUM and the braneworld at fixed background, and the perturbation sector is a deliverable of posed closure K-12, alongside the value of $n$.

## D. GUM's prediction and its exposure

The DESI DR2 combinations prefer $w_0>-1$ with $w_a<0$ — an equation of state more negative in the past, crossing $-1$ — at $2.8$–$4.2\sigma$ in the CPL parametrization [41, 94, 95]. That region is unreachable by the family for any $n$; GUM's closest point is $\Lambda$CDM, which the data disfavor. GUM prints three things. The index $n$ is a structural property of the relaxation of the soft mode and is computable from Eq. (4); its computation is posed closure K-12, with deliverables a printed $n$, the perturbation sector, and a self-consistent fit of Eq. (73) to BAO, supernova, and CMB distances (Stake S18). The sign of $w_a$ is unconditional within the family (Proposition 24; Stake S19). And, stated before the Euclid DR1 and DESI final analyses: **if the combined analysis prefers $w_a<0$ with $w_0>-1$ at $\ge3\sigma$ in a parametrization that does not force the crossing, GUM retires its dark-energy sector and admits no second mechanism without a new flag.**

## E. Neutrinos that were lighter in the past

If the soft coordinate is the pitch wavenumber, the lag that makes dark energy also moves the neutrino mass.

**Proposition 27 (Neutrino-mass drift).** Assume the identification of Sec. IX A, the pitch relation Eq. (26), and the adiabatic lag $\delta q=SH/\Gamma_r$ of the relaxation ODE $\dot{\delta q}=-\Gamma_r\delta q+SH$ with $\Gamma_r\propto H^n$. Then
$$
m_3(a)=m_{3,\mathrm{eq}}\Big[1+\varepsilon_\nu\Big(\frac{H(a)}{H_0}\Big)^{1-n}\Big],\qquad \lvert\varepsilon_\nu\rvert=\frac{\sqrt{2\mathcal{X}\rho_{\mathrm{DE},0}}}{q_\mathrm{eq}},
\tag{75}
$$
where $\varepsilon_\nu\equiv\delta q_0/q_\mathrm{eq}$ has the sign of $S$. If Hubble dilution stretches the helix ($S<0$), neutrinos were lighter in the past, and the ratio of the mass inferred at redshift $z$ to the laboratory mass is $[1+\varepsilon_\nu h(z)^{1-n}]/(1+\varepsilon_\nu)$, with $h\equiv H/H_0$.

*Proof.* In the adiabatic limit $\delta q=(S/\Gamma_0)H_0^nH^{1-n}$, so $\delta q/\delta q_0=h^{1-n}$; $m_3\propto q=q_\mathrm{eq}+\delta q$ by Eq. (26); and Eq. (69) evaluated today gives $\lvert\delta q_0\rvert=\sqrt{2\mathcal{X}\rho_{\mathrm{DE},0}}$. $\square$

The proposition is the "one door" of Sec. VIII B. Cosmological neutrino-mass bounds weight the redshifts at which neutrinos become non-relativistic and at which lensing and growth are measured; laboratory kinematics (the $\beta$-decay endpoint) measures today's mass. In GUM they measure different numbers. The price is printed at once. To lower the mass inferred at $z\simeq1$–$3$ by $10$–$25\%$, the lag must be large: $\varepsilon_\nu\approx-0.2$ for $n=\tfrac12$ and $\varepsilon_\nu\approx-0.3$ to $-0.5$ for $n=0.8$. The lag is then a sizeable fraction of the equilibrium pitch, and the linear formula fails beyond redshifts of order ten to a hundred (where $\varepsilon_\nu h^{1-n}\to-1$), so there the full relaxation dynamics must be used. Mass-varying-neutrino models are known to suffer adiabatic instabilities when the neutrino mass tracks a dark-energy field [96, 97]. GUM's coupling is geometric rather than Yukawa-type, but it must be shown to be stable. Posed closure **K-23** has three deliverables: the sign of $S$, the magnitude of $\mathcal{X}$, and the stability analysis. The testable content is Stake S27: a laboratory $m_\beta$ or $\Sigma m_\nu$ from $\beta$ decay exceeding the cosmological inference by the ratio above, with the redshift dependence fixed by the same $n$ that fixes $(w_0,w_a)$.

**Corollary 7 (The trough as a pitch tomogram).** Under Proposition 27, resonance for a photon observed at $\lambda_\mathrm{obs}$ occurs where $\lambda_\mathrm{obs}/(1+z)=\bar n\,p(z)$ with $p(z)=\zeta_\nu hc/m_3(z)c^2$. The blue edge of Theorem 7 measures today's pitch, and the red end of the trough for a source at $z_s$ sits at $\bar np(z_s)(1+z_s)$ instead of $\bar np(0)(1+z_s)$. Stacked far-infrared spectra binned in $z_s$ therefore measure $p(z)/p(0)=(1+\varepsilon_\nu)/[1+\varepsilon_\nu h(z)^{1-n}]$ directly — the history of the pitch, and hence of the neutrino mass, read from the trough.

## F. Gravity

The Kondo–Bilby–Kröner–Kleinert dictionary makes the kinematics Einstein–Cartan by theorem [31]: dislocation density is torsion, disclination density is curvature, spin density sources torsion as Einstein–Cartan requires, and spin–torsion contact corrections are unobservable by about $36$ orders of magnitude in neutron stars. Knots are defects, defects mutually strain, and test knots ride geodesics of the strain metric. The equivalence principle is structural, since every clock, rod, and particle is an excitation of the same material; compliance with MICROSCOPE at $10^{-15}$ [98] is an inverse kill GUM survives, not a triumph it claims. The *dynamics* is open. Positivity of the graviton kinetic term is not established on GUM's action under any textually permitted reading except one (posed closure K-G, whose adoption would be a new constitutive postulate with priced costs), and GUM builds nothing on it. Weinberg–Witten [99] is evaded in the standard way, by the absence of exact Lorentz invariance at the fundamental level, which transfers the burden to the Lorentz-compliance phenomenology of Sec. V H.

This revision withdraws one sentence of the previous draft and restates a closure. The previous draft said that transverse-traceless strain waves travel at $\sqrt{\mu/\rho_0}$ and are gravitational waves. By Proposition 1, the transverse elastic waves of the displacement are locked to the micro-rotation and *are* the photon. The graviton therefore cannot be a linear transverse mode of $\mathbf{u}$, and K-G must identify the carrier of gravitational waves in the defect geometry, for instance as a collective mode of the defect density or a second-order strain-metric fluctuation. Posed closure K-16 is correspondingly narrowed to the cone condition Eq. (12) itself — derive $\mu/\rho_0=\gamma_\mathrm{eff}/2J$ from level 0 or from the cone-locking flow. The multimessenger bound $\lvert c_\mathrm{GW}/c-1\rvert\lesssim10^{-15}$ [100] becomes a deliverable of K-G.

## G. The dark sector

No dark-matter candidate is derived; GUM prints the deficit so that it cannot be elided. The natural in-material candidate is posed at conjecture grade (K-17). Charge is a disclination *dressing* of a degree-one knot, and nothing in Sec. VII forbids an *undressed* knot: a sterile, degree-stable fermion in each frustration class, with mass at the corresponding lepton scale, created only in pairs at $\det\mathsf F\to0$ strata in early-universe pinch epochs, and coupling to nothing but gravity and the soft fog. Deliverables: the pair-production rate at the lock-melt epoch and the relic abundance. Kills: overclosure, or warm-dark-matter exclusion from the Lyman-$\alpha$ forest if the population is thermal.

If such knots exist, Lemma 5 admits one process that the previous draft did not consider. An undressed pair can acquire opposite disclination dressings at a tearing stratum and emerge as an electron–positron pair.

**Conjecture 1 (Pair dressing and the 511 keV line).** If undressed electron-class knots of mass $m_u\ge m_e$ exist and dress in collisions at a rate $\langle\sigma_dv\rangle$, they inject positrons with kinetic energy of order $(m_u-m_e)c^2$ plus the halo's virial energy, at a rate $\propto\rho_\mathrm{DM}^2\langle\sigma_dv\rangle$.

The conjecture is worth stating because the Galactic $511$ keV line has two properties that standard sources explain with difficulty: a bulge-dominated morphology and positrons injected at low energy. In-flight annihilation limits the injection energy to a few MeV [101, 102]. A dressing process at $m_u\simeq m_e$ satisfies that bound automatically, and its $\rho_\mathrm{DM}^2$ morphology is bulge-peaked. Posed closure **K-21** delivers the dressing threshold and cross-section from the tearing dynamics of Lemma 5. Its kills are $m_u<m_e$ (process closed), a morphology that does not track $\rho_\mathrm{DM}^2$, or a required $\langle\sigma_dv\rangle$ incompatible with the relic abundance of K-17. A second candidate, the featherweight residue of the double-twist web, is a watch item only.

# X. The Handedness Bit

## A. The chain as a parity check

GUM's most distinctive structural claim is that one global sign — the handedness of the condensed chiral sector — simultaneously fixes observable signs that the Standard Model treats as independent (cross-lock C-EW1): the chirality of the charged weak current, the orientation of the family ladder, and the sign of $\delta_{CP}$.

**Definition 8 (Sign chain).** Let $s\in\{+1,-1\}$ be the vacuum handedness. A sign chain is a set of observables $O_i\in\{+1,-1\}$ with theory-computed signs $\varepsilon_i\in\{+1,-1\}$ such that GUM predicts $O_i=\varepsilon_is$ for all $i$. The chain is broken if any product $O_iO_j\neq\varepsilon_i\varepsilon_j$.

**Proposition 28 (Structure and status of C-EW1).** (i) A chain of length $k$ with one free bit has $k-1$ independent parity checks; with links (weak chirality, $\delta_{CP}$, family orientation), of which family orientation is not independently observable, the chain has one testable check. (ii) By Proposition 24, the sign of $w_a$ is $+1$ for all $n\in(0,1)$ independently of $s$; the dark-energy drift is therefore not a link of the chain but an unconditional prediction, and a confirmed $w_a<0$ retires the relaxation family regardless of $s$ and cannot be absorbed by any re-assignment of the $\varepsilon_i$. (iii) With weak chirality as anchor ($O_1=$ left, fixing $s$ by convention), the remaining testable prediction of the chain is a definite sign of $\delta_{CP}$ — $\delta_{CP}\to-\pi/2$ with $\theta_{23}\to45^\circ$ — adjudicated by DUNE and Hyper-Kamiokande (Stake S10).

*Proof.* (i) is counting; (ii) is Proposition 24; (iii) follows. $\square$

## B. Cosmic birefringence and the endpoint property

Cosmic birefringence — a rotation $\beta_\mathrm{cb}$ of the CMB's linear polarization — is a parity-violating observable with a sign. Planck and WMAP give $\beta_\mathrm{cb}=0.342^\circ\,{}^{+0.094}_{-0.091}$, excluding zero at $3.6\sigma$ [48, 47]; an independent analysis of ACT DR6 gives $\beta_\mathrm{cb}=0.215^\circ\pm0.074^\circ$, $2.9\sigma$, with the same sign [49]; neither finds frequency dependence. A chiral vacuum is the natural place to look for the origin of such a rotation, and GUM owes a position.

**GUM's prediction (core).** By achirality (helicity-odd doublet operators first appear at $O(\chi^3)(k\ell_s)$) and by Proposition 8, the core predicts $\beta_\mathrm{cb}=0$ at CMB frequencies. A confirmation of $\beta_\mathrm{cb}\neq0$ by the Simons Observatory or LiteBIRD retires the achirality result of the electromagnetic sector (Stake S20, default arm).

**Posed closure K-8 (condensate-relaxation birefringence) [CJ].** The condensate's order parameter lives on the soft manifold that also hosts the dark-energy lag. If it evolves cosmologically on that manifold, the parity-odd sector $W_\chi$ induces in the doublet an effective term $\propto\Theta\,\mathbf{E}\cdot\mathbf{B}$, with $\Theta$ a function of the order parameter. The following proposition fixes what such a term can and cannot do.

**Proposition 29 (Endpoint property of $\Theta$-birefringence).** Let the doublet carry the coupling $\Delta\mathcal{L}=g_\Theta\,\Theta(\mathbf{x},t)\,\mathbf{E}\cdot\mathbf{B}$ (in units with $\varepsilon^\ast=1$). In the geometric-optics limit, the plane of linear polarization of a ray from emission event $e$ to observation event $o$ rotates by
$$
\beta=\tfrac12g_\Theta\big[\Theta(o)-\Theta(e)\big],
\tag{76}
$$
independently of the path between them and of the photon's frequency [103, 104]. Consequently: (i) fluctuations of $\Theta$ along the path — including fog-scale fluctuations — neither accumulate nor random-walk, and produce no depolarization at leading order; (ii) the CMB measures $\Theta(o)-\Theta(\text{last scattering})$, and its anisotropy $\beta(\hat{\mathbf n})$ maps $\Theta$ on the last-scattering surface; (iii) sources at lower redshift must show $\beta(z_s)/\beta_\mathrm{CMB}=[\Theta(o)-\Theta(z_s)]/[\Theta(o)-\Theta(z_\mathrm{rec})]$.

*Proof.* The modified Maxwell equations acquire the source terms $g_\Theta(\nabla\Theta\times\mathbf{E}-\partial_t\Theta\,\mathbf{B})$ and $g_\Theta\nabla\Theta\cdot\mathbf{B}$. For wavelengths short compared with the scale of $\Theta$, the two circular polarizations acquire opposite phase shifts at a rate $\tfrac12g_\Theta\,d\Theta/d\lambda_\mathrm{aff}$ along the ray, which integrates to Eq. (76). $\square$

The proposition corrects a tempting inference: that a random fog would depolarize the CMB at a level set by its correlation length. It does not. What $\Theta$-birefringence can do is produce a frequency-flat monopole (the reported signal) and a correlated anisotropy that traces $\Theta$ at recombination. Its deliverables in K-8 are $\Theta$ as a function of the condensate order parameter from Eq. (6); the order parameter's cosmological evolution from the relaxation ODE of Appendix D; and the resulting $\beta_\mathrm{cb}$, its sign $\varepsilon_5$, its anisotropy spectrum, and its low-redshift ratio (iii). Promotion: if $\beta_\mathrm{cb}\neq0$ is confirmed and K-8 reproduces its magnitude, birefringence becomes a link with $O_5=\varepsilon_5s$, a second testable parity check against the weak-chirality anchor, and the dark-energy relaxation acquires an electromagnetic signature. Kill: a sign mismatch between $O_5$ and the anchor, a computed $\lvert\beta_\mathrm{cb}\rvert$ outside the observed band, or a low-redshift ratio violating (iii). K-8 is conjecture and is not built upon. It is, however, the only mechanism in GUM that can produce a frequency-flat $\beta_\mathrm{cb}$, so a confirmed $\beta_\mathrm{cb}\neq0$ makes K-8 mandatory rather than optional.

## C. Is the bit the same everywhere?

A bit selected spontaneously need not be selected uniformly.

**Proposition 30 (Domain dichotomy).** Suppose $s$ is selected spontaneously when the chiral sector condenses, at cosmic time $t_\ast$ with horizon $d_H(t_\ast)$, and let $\sigma_w$ be the surface tension of a wall between $s=+1$ and $s=-1$ domains. (i) If $t_\ast$ follows the end of inflation, causality produces domains with correlation length at most $d_H(t_\ast)$ [105]. (ii) A wall network with $\sigma_w^{1/3}\gtrsim1$ MeV either comes to dominate the energy density or imprints CMB anisotropies beyond those observed [106]; heavy walls therefore require that $s$ was selected before or during inflation, or explicitly biased so that walls decay early. (iii) Across a wall, weak chirality, the sign of $\delta_{CP}$, and the sign of $O_5$ flip together, so every observer sees the same internal chain, and distinct domains are distinguishable only by sign flips of $\beta(\hat{\mathbf n})$ across the sky.

*Proof.* (i) is the Kibble argument. (ii) The wall energy density scales as $\sigma_w/d_H$ and falls more slowly than matter or radiation, which gives the Zel'dovich–Kobzarev–Okun bound. (iii) C-EW1 is a chain in $s$ (Definition 8). $\square$

GUM's walls are heavy. By C-EW1 a wall flips weak chirality, which requires reorganizing the core zero-modes of every knot and the locked electroweak vacuum, so $\sigma_w^{1/3}$ is at least of order the weak scale, far above the bound in (ii). GUM therefore predicts a single domain across the observable universe, and hence a uniform sign of $\beta(\hat{\mathbf n})$ wherever K-8 makes it nonzero (Stake S30). Sign-flipping patches in birefringence maps would retire either the heaviness of the walls or C-EW1 itself.

## D. A mirror test of short-range forces

**Proposition 31 (Mirror identity and its breaking).** (i) If both the dynamics and the vacuum are invariant under the parity operation $\mathcal{P}$, then for any two bodies $B_1,B_2$ in any configuration $\mathcal{C}$, the interaction energy obeys $U[\mathcal{P}B_1,\mathcal{P}B_2;\mathcal{P}\mathcal{C}]=U[B_1,B_2;\mathcal{C}]$. For mirror-image test bodies in mirror-image configurations, $U_{LL}=U_{RR}$ and $U_{LR}=U_{RL}$. (ii) If the dynamics is $\mathcal{P}$-invariant apart from a parity-odd sector and the vacuum carries handedness $s$, then
$$
U_{LL}-U_{RR}=s\,\mathcal{A}(r)+O(s^3),\qquad U_{LR}-U_{RL}=s\,\mathcal{B}(r)+O(s^3),
\tag{77}
$$
with $\mathcal{A},\mathcal{B}$ interaction functionals supported on the range of the vacuum's parity-odd correlations. (iii) In the Standard Model alone the differences arise only from weak neutral currents and are negligible at micrometer separations.

*Proof.* (i) $U$ is computed from a Hamiltonian and a ground state that are both $\mathcal{P}$-invariant. (ii) $\mathcal{P}$ maps (dynamics, vacuum $s$) to (dynamics, vacuum $-s$), so $U_s[L,L]=U_{-s}[R,R]$ and the difference is odd in $s$; the same holds for the mixed pair. (iii) Weak-current contributions are suppressed by $G_F$ times the square of an atomic momentum scale and are contact-like in range. $\square$

GUM's vacuum is chiral at the pitch scale, so the natural range of $\mathcal{A}$ is the fog's correlation length, a few to tens of micrometers ($p\simeq22$–$25\ \mu$m). That is the range of precision short-range gravity and Casimir experiments. The test requires microfabricated chiral test masses — helical or gyroid metamaterials — in both handednesses, and four measurements $F_{LL}$, $F_{RR}$, $F_{LR}$, $F_{RL}$ at separations of $3$–$25\ \mu$m. The two differences are both $s$-odd in GUM and both null in a parity-invariant world, so their agreement in sign is an internal control, and exchanging the masses between their mounts controls for fabrication asymmetry. A molecular arm exists as well: vibrational spectroscopy of enantiomers, where the Standard Model's parity-violating energy differences are predicted at relative order $10^{-17}$–$10^{-14}$ and have not yet been observed, and where a vacuum-handedness term would scale differently with nuclear charge. The amplitude $\mathcal{A}(r)$ is the deliverable of posed closure **K-20**, and the stake is S26: a nonzero, sign-consistent $F_{LL}-F_{RR}$ at micrometer range would be the first direct detection of vacuum handedness, and K-20's prediction sets the level at which a null result kills.

## E. Pre-registration

GUM states, before the adjudicating measurements, the following. If DUNE or Hyper-K find $\delta_{CP}$ with sign opposite to $\varepsilon_4s$ at $\ge3\sigma$, C-EW1 is broken. If Euclid or DESI confirm $w_a<0$ with $w_0>-1$ at $\ge3\sigma$, the relaxation family is retired (Sec. IX D). If the Simons Observatory or LiteBIRD confirm $\beta_\mathrm{cb}\neq0$, the core's achirality is retired and K-8 must execute, or the electromagnetic sector's chirality claims are withdrawn. If birefringence maps show sign-flipping patches, the single-domain prediction of Proposition 30 is retired. A chain that cannot be broken by a scheduled measurement is not a chain.

# XI. Ledger, Closures, and Stakes

## A. The audit criterion

**Definition 9 (Non-circular and discriminating).** A postulate $P$ non-circularly explains a fact $F$ if $P$ was not selected because $F$ is known, or if $P$ entails a distinct testable $F'\neq F$ not used in its selection. $P$ discriminates between two theories if some $F'$ it entails is not entailed by the competitor.

| Claim (grade) | Selected for the fact? | Non-circular | Discriminating vs. SM/$\Lambda$CDM | Disposition |
|:----------------------------------|:--------------------|:--------------|:----------------|:----------------|
| Doublet gapless (Thm. 1, [DF]) | Yes: F10$'$ adopted to kill the mass term | Only via $F'$ | No | Consistency; inverse kills S7 |
| Exact doublet dispersion (Prop. 1, [DF]) | Yes: cone condition imported for it | Only via $F'$ ($c_\psi>c$) | No | Consistency; K-16 |
| Maxwell for every $c_L$ (Thm. 6, [DF]) | Yes: F-G adopted to recover Gauss | Only via $F'$ (physical velocity gauge) | No | Null test S15; K-18 |
| Custodial $\rho=1$ (Prop. 19, [DF]) | No | Yes | No; SM computes $\Delta\rho_\mathrm{top}$ | Consistency; K-5 owed |
| $e=g\sin\theta_w$ ([DF]) | No | Yes | No | Bookkeeping |
| Anomaly sums (Prop. 20, [DW]) | Derived thirds | Yes | No | Consistency; K-EW-II |
| KM counting; confinement dichotomy ([DF]) | No | Yes | No | Inherited |
| Finite $c_L$ in the tower (Prop. 10, Thm. 13) | No | Yes | **Yes** | Prediction S28; K-22 |
| Dense-storage cliff (Thms. 11, 12) | No | Yes | **Yes** (given dense storage) | Prediction S16, S29; K-24 |
| Far-infrared trough (Thm. 7, Prop. 7) | No | Yes | **Yes** | Prediction S22; K-11 |
| Relaxation family (Props. 22–26) | No | Yes | **Yes** (disfavored) | Prediction S18, S19 |
| Neutrino-mass drift (Prop. 27) | No | Yes | **Yes** (conditional) | Prediction S27; K-23 |
| Physical clock (Props. 14, 15) | No | Yes | **Yes** | Prediction S23, S24 |
| Handedness (Props. 28, 30, 31) | No | Yes | **Yes** | Prediction S10, S20, S26, S30 |
| Two-scale electron (Thm. 15, Prop. 17) | No | Yes | **Yes** ($e^\ast$, form factor) | Consistency S21; K-10 |
| Band edge (Prop. 18) | No | Yes | **Yes**, if (b) | Conditional S25; K-19 |

*Table 2. GUM's ledger under the audit criterion.*

The pattern is the finding, and GUM states it about itself. Its derived-form results are almost all non-circular within GUM and almost all non-discriminating between programs; three of them (the gapless doublet, its exact dispersion, and exact Maxwell theory for every $c_L$) are circular by construction and are printed as such. The discriminating content lives in the material's unavoidable signatures. This revision moved one signature out of electromagnetism and into the tower, and it added four that come from taking the material literally — the physical clock, the band edge, the drifting pitch, and vacuum handedness at micrometer range.

## B. Posed closures

| Closure | Content | Deliverables | Kill |
|:-------------|:-------------------------|:-------------------------------------|:-------------------------|
| K-0 | Level 0 $\to$ level 1 | parameter space $(\mathbf{x},t)$; metric; (P1)–(P7) as theorems | none stated; deepest open closure |
| K-N (new) | Normalization audit | all [N] values in one convention; $\hat e$, $\mathfrak{i}$, $\mathfrak{c}$, $\kappa$; bridge inversion | corrected $1\sigma$ band of $m_3$ below $0.050$ eV |
| K-3 | Strong-CP relaxation by the $b_P^2$ penalty [CJ] | $\bar\theta_\mathrm{eff}$ transfer function; EDM windows | EDM above window (S11) |
| K-4 | Short-distance strong sector [CJ] | sign and coefficient of the junction-stiffness flow | screening sign (S12) |
| K-5 | Electroweak precision | $\Delta\rho_\mathrm{top}$ from the band-edge top; $(S,T)$ | wrong sign or magnitude |
| K-8 | Condensate-relaxation birefringence [CJ] | $\Theta$; its evolution; $\beta_\mathrm{cb}$, $\varepsilon_5$, anisotropy, low-$z$ ratio | sign mismatch; magnitude off band |
| K-9 | Multi-time statistics of the agitated material | sequential-measurement correlations vs. QM | disagreement at accessible precision |
| K-10 | Halo dominance of the frustration integrals | two-scale solution; halo integrals; tunneling exponent | core-dominated: S1 suspended |
| K-11 | Doublet–fog matrix element | $\Delta n$ in coherent and incoherent regimes | $\Delta n$ above Eq. (30) |
| K-12 | Relaxation index | $n$; perturbation sector; distance fit | no $n$ fits; or S19 |
| K-13 | Prefactors of $g_4$ and $\epsilon_R$ | both prefactors | nonperturbative bare coupling required |
| K-14 | Heliknoton–$Z$ coupling | theorem fixing it to the doublet strength | off by more than $0.3\%$ |
| K-15 | Top decay before hadronization | absence of top hadrons | top hadrons predicted |
| K-16 (narrowed) | Cone condition | derive $\mu/\rho_0=\gamma_\mathrm{eff}/2J$ | none: remains [IM] |
| K-17 | Undressed-knot dark matter [CJ] | pair-production rate; relic abundance | overclosure; Lyman-$\alpha$ |
| K-18 (new) | Gauss completion | derive Eq. (21) or compute $\mathbf{j}_\mathrm{def}$; sign of the longitudinal energy | $\mathbf{j}_\mathrm{def}\neq0$ predicted, not seen (S15) |
| K-19 (new) | Band-edge identity | halo spectrum below $2Mc^2$ per class | level predicted, line absent (S25) |
| K-20 (new) | Mirror-force amplitude | $\mathcal{A}(r)$, $\mathcal{B}(r)$ | null below predicted level (S26) |
| K-21 (new) | Pair dressing | threshold and cross-section | $m_u<m_e$; morphology; relic mismatch |
| K-22 (new) | Tower update rule | signaling or not: horn of Thm. 13 | fixes the sign of S28 |
| K-23 (new) | Pitch–lag coupling | sign of $S$; $\mathcal{X}$; stability | unstable, or $S>0$ (S27 void) |
| K-24 (new) | Hosting mode | $N_\mathrm{eff}$ from the tower's field content | cliff where no mode allows (S16, S29) |
| K-G | Graviton | kinetic-term positivity; carrier distinct from the doublet; $c_\mathrm{GW}$ | ghost; $c_\mathrm{GW}\neq c$ |
| K-EW-I/II/III | Exciton bound state; anomaly necessity; $\vartheta$ attractor | $M_W$, $G_F$, $M_h$, width; the six sums as necessary conditions; $\sin^2\theta_w$ | as printed in Sec. VIII |

*Table 3. Posed closures; with K-EW-I, II, and III counted separately there are twenty-six.*

## C. Stakes

| # | Stake | Adjudicator | Kill | Status |
|:------|:----------------------------------------|:------------------|:----------------------|:--------------|
| S1 | $\Sigma m_\nu\in[0.058,0.11]$ eV, normal ordering (K-10, K-N) | DESI DR3; Euclid | robust $\Sigma<0.058$ eV with no drift (S27) | inside $\Lambda$CDM exclusion |
| S2$'$ | Higgs couplings in the $\eta$-window, family-ordered; fog width | HL-LHC | anomaly outside window | live |
| S3 | $E_\mathrm{rot}/E=j/2$ on a valid bench object | analog benches | valid bench off $j/2$ | live (kinematic) |
| S4$'$ | $\kappa^2g_\mathrm{tot}=35/24$ vs. $7/8$ (after K-N) | analog benches | outside band | live |
| S5 | Clock phase-locking $\propto\cos\Delta\phi$ | analog benches | no locking | live |
| S6 | $0\nu\beta\beta$ occurs | LEGEND-1000; nEXO | full-funnel exclusion | live |
| S7 | Inverse-kill battery: photon mass; EP violation; forbidden birefringence; $\rho\neq1$; tree FCNC; $e\neq g\sin\theta_w$; massless charged mode; Lorentz violation; $c_\mathrm{GW}\neq c$ | community | any confirmed detection | standing |
| S8 | Michel $\rho=3/4$; RH currents below $\epsilon_R$ | $\mu$ and $\beta$ decay | RH current above window | live |
| S9 | Lock-melt GW background weak | LISA | loud first-order EW background | live |
| S10 | $\theta_{23}$ near-maximal; $\delta_{CP}\to-\pi/2$ per C-EW1 | DUNE; Hyper-K | $\delta_{CP}\approx0,\pi$; wrong sign | live |
| S11 | $d_n$, $d_e$ below K-3 windows | nEDM; eEDM | EDM above window | proposed |
| S12 | Junction-stiffness flow anti-screens (K-4) | computation | screening sign | proposed |
| S13 | Valid isorotating bench object; measured $j$ (F-B1) | chiral metamaterials; LC and magnetic solitons | no valid object; or $j=1$ | open |
| S14 | Discriminator on a validated bench | same | outside band | open |
| S15 [RG] | No EM precursor in $0<t<r/c$ (F-G) | pulsed near-field; bunch fields | sidereal-modulated pre-light signal | null test |
| S16 [RG] | Mirror-circuit cliff at $n_q^\ast\simeq\log_2N_\mathrm{eff}$ (H$_V$: $234$–$329$) | $\ge300$-qubit mirror circuits | flat $\mathcal{P}(n_q)$ through $350$ | open |
| S17 | Generator form Eq. (64) on the bench | chiral-nematic solitons | $B=0$; no termination | open |
| S18 | Printed $n$, perturbations, distance fit (K-12) | GUM + BAO/SN/CMB | no $n$ fits | owed |
| S19 | $w_a\ge0$ | DESI final; Euclid DR1 | $w_a<0$, $w_0>-1$ at $\ge3\sigma$ | disfavored now |
| S20 | $\beta_\mathrm{cb}=0$ (core) / K-8 sign | SO; LiteBIRD | core: $\beta\neq0$; K-8: sign mismatch | $\beta\neq0$ at $2.9$–$3.6\sigma$ |
| S21 | Two-scale electron (Eq. (61)) | LEP/LHC archives; $(g-2)_e$ | core $>10^{-19}$ m; $e^\ast$ below TeV | standing |
| S22 [RG] | Far-IR trough: fixed edge at $\bar np\in[21.8,24.7]\ \mu$m, dipole-shifted, circularly polarized | JWST MIRI; Spitzer IRS stacks | no edge at the K-11 depth | number owed |
| S23 | $\alpha$-drift without $\mu_{pe}$-drift, $R_{\mu\alpha}=0$ | optical clocks; quasar spectra | joint detection, $\lvert R\rvert\gtrsim1$ | null on both so far |
| S24 | Channeling resonance $p_1\propto\ell_\mathrm{row}$: $80.87$, $84.26$, $53.12$ MeV/$c$ | electron beams on thin crystals | absent at all three | one unreplicated report |
| S25 | o-Ps $\to\gamma X$ line at $\tfrac14m_ec^2(4-\kappa^{-2})$ (K-19) | positronium spectroscopy | level predicted, line absent | conditional |
| S26 | $F_{LL}-F_{RR}\neq0$ at $3$–$25\ \mu$m (K-20) | short-range force; molecular PV | null below K-20 level | new |
| S27 | Laboratory $\nu$ mass exceeds cosmological inference (K-23) | $\beta$-decay endpoint vs. cosmology | laboratory $\le$ cosmological | conditional |
| S28 | Finite $c_L$: sidereal bipartite bound; Bancal–Barnea deviation (K-22) | long-baseline, multipartite Bell tests | bound above the B1 speed (C-L) | bound-raising |
| S29 | Cliff shifts with $V$, $A$, or $\ell_q$ (K-24) | cross-platform mirror circuits | cliff without knob dependence | new |
| S30 | One handedness domain: uniform sign of $\beta(\hat{\mathbf n})$ | anisotropic birefringence maps | sign-flipping patches | new |

*Table 4. GUM's thirty stakes; [RG] marks re-graded stakes.*

Bench validity clause: quasi-conservative regime $\Gamma_\mathrm{damp}\ll\omega$; no Bell content is claimable from any bench; failure of an exact ratio on a validated bench falsifies the corresponding derivation as mathematics. The cross-locks — the load-bearing welds that forbid local repairs — are the following. **C-EW1** (one handedness bit): family orientation, weak chirality, the sign of $\delta_{CP}$, the K-3 residual, and through K-8 the birefringence sign; with Proposition 30 the bit is also uniform on the sky, and with Proposition 31 it fixes the sign of the mirror force. **C-EW2** (one halo): $\mathfrak{c}$, the $G_F$ suppression, and the $\epsilon_R$ suppression, with K-13's prefactors owed. **C-EW3** (one censor): three families and $y_t\approx1$. **C-EW4** (one invariance): photon masslessness and $\rho=1$. **X-$\Lambda\nu$** (one soft coordinate): the dark-energy lag, the chiral condensate, and K-8, now with content — the soft coordinate is the pitch, so dark energy, the neutrino mass, and the far-infrared edge are one variable. **C-L** (one longitudinal speed, new): the B1 speed $c_L=\sqrt{(\lambda+2\mu)/\rho_0}$ is the tower's update speed, so S28 bounds a modulus of the material. **X-$\nu p$** (one pitch, new): the neutrino mass, the trough's edge, the range of the mirror force, and the advected line of Proposition 9 are fixed by one length.

## D. House style for agreements

**Definition 10 (Landing versus test).** With theory half-width $\delta_\mathrm{th}$ and experimental uncertainty $\delta_\mathrm{exp}$, an agreement is a *test* if $\delta_\mathrm{th}\lesssim3\delta_\mathrm{exp}$ and a *landing* if $\delta_\mathrm{th}\gtrsim10\delta_\mathrm{exp}$. A landing is reported as "consistent within $\pm\delta_\mathrm{th}$," never as a pull in $\sigma$.

GUM's charged-lepton logarithms, quark spacing ratios, and shape checks are landings by factors of $10^3$–$10^4$, and GUM reports them as such.

## E. Corrections to the previous draft

GUM applies its ledger to itself. The following statements of the draft of 2026-09-06 are withdrawn or corrected in this revision.

1. *Kinetic normalization.* The rotational kinetic coefficient is $J$, not $\tfrac12J$, so that the kinetic energy is $\tfrac12J\lvert\boldsymbol\omega\rvert^2$ (Sec. II F).
2. *Gap modulus.* The relative-rotation gap includes the locking modulus, $\tilde m^2=4\mu_c+\tfrac14\tilde m_V^2$; the inherited $\kappa=1/\sqrt2$ implicitly fixes $\mu_c=3\tilde m_V^2/16$ (Sec. VI C); K-N is posed.
3. *Halo length.* $\lambda_\mathrm{halo}=(c_\psi/c)\hbar/Mc$, not $\hbar/(\sqrt2Mc)$ (Proposition 17). The previous draft's printed $m_3=0.047$ eV already corresponds to the corrected length; at fixed integrals the correction leaves it there or raises it to $0.066$ eV (Sec. II F).
4. *Cones.* The doublet is exactly lightlike under the cone condition, with no flow required, and $c_\psi>c$ (Proposition 1).
5. *P5.* Unnecessary in the transverse sector, where $\beta$ renormalizes $\gamma$ (Proposition 5).
6. *Near-field channel.* Withdrawn as an electromagnetic prediction. The transverse completion is acausal, the Gauss completion is exact Maxwell theory for every $c_L$, and any other completion deviates by the field of a defect current (Theorems 5–6). S15 is a null test; $c_L$ moves to the tower (S28).
7. *Longitudinal radiation.* The $\eta(c/c_L)^3$ channel is not an electromagnetic signal. Within (G) it is an internal exchange (Corollary 1); with a positive-energy longitudinal sector it is a leak of relative size $\tfrac12(c/c_L)^3\le5\times10^{-13}$ (Proposition 3).
8. *Qubit ceiling.* Dimension counting is correct but untestable by circuits (Theorem 10). The testable claim is dense storage, with a mirror-circuit protocol replacing the proposed verification by peaked or Clifford circuits (Sec. V F).
9. *Structural scale.* $\ell_s\lesssim1.5\times10^{-27}\lvert\xi_\gamma\rvert^{-1/2}$ m from photon timing (Proposition 11) replaces the assumed $10^{-26}$ m; the cliff range becomes $234$–$329$ under H$_V$.
10. *Pitch.* $p/\zeta_\nu\in[21.8,24.7]\ \mu$m; the previous $26\ \mu$m lay below the oscillation floor (Proposition 6).
11. *Far-infrared feature.* A redshift-swept trough with a fixed blue edge, not a non-redshifting line; the transparency bound is $6\times10^{-17}$, not $10^{-31}$ (Theorem 7, Corollary 2).
12. *Gravitational waves.* Transverse strain waves are the photon; the graviton cannot be a linear transverse elastic mode (Sec. IX F).
13. *Novelty of the dark-energy background.* The relaxation family is the Dvali–Turner family (Proposition 26).
14. *Birefringence.* Endpoint property: no depolarization from fog-scale structure (Proposition 29).
15. *Notation.* $a\to\ell_s$ (structural scale); $n\to n_q$ (qubits); class $p\to\mathsf p$; susceptibility $\chi\to\mathcal{X}$; relaxation rate $\Gamma\to\Gamma_r$; deceleration parameter $q\to q_\mathrm{dec}$; "substrate" $\to$ "material".

**Errata to the first printing of this revision.** Two statements of this revision as first printed on 2026-09-28 are corrected in the present printing. Both were found while the companion primer was being written, by redoing conversions that the ledger prints.

E1. *Direction of the halo correction.* The first printing stated that the corrected halo length, at fixed frustration integrals, lowers the central $m_3$ from $0.047$ eV to $0.033$ eV, below the oscillation floor, leaving S1's window $0.46\sigma$ above the center. The conversion $m_3c^2=\zeta_\nu\hbar c\,e^{-X}/\lambda_{\mathrm{halo},\tau}$ shows the opposite: $0.047$ eV equals $m_\tau c^2e^{-24.36}$, the value at the corrected length, and the old length would give $0.066$ eV. The correction cannot move the prediction below the floor (Sec. II F, Sec. VIII B, Appendix H).

E2. *Matter–light cone.* The first printing estimated $(c_\psi-c)/c\lesssim10^{-36}$ for an MeV-scale gap and called it harmless. The correct estimate at that gap is $(\ell_g\omega_0/c)^2/8\approx7\times10^{-30}$. At the weak-scale vacuum gap it is $\approx5\times10^{-20}$, at the edge of the vacuum-Cherenkov bounds, which therefore constrain the grains' radius of gyration, $\ell_g\lesssim7\times10^{-28}$ m (Sec. II C, Sec. V H).

# XII. Conclusion

GUM asks what material could possess quantum mechanics as its coarse-grained bookkeeping, and it answers with a specific candidate. At its continuum level the candidate is a chiral micropolar continuum whose response modes are the photon, the electron, mass, charge, and Planck's constant. This paper states GUM's killable core and corrects the parts of the previous draft that formalization showed to be wrong.

The core is the following. A theorem pair about the nineteenth century holds whatever the vacuum is made of: MacCullagh's aether is inconsistent as a Cauchy continuum and consistent as the orientation sector of a micropolar one (Theorems 2–3). A rewriting of Maxwell's equations follows, which GUM does not call an explanation (Theorem 4), together with an exact statement of when the photon is exactly lightlike (Proposition 1). A locality theorem shows that the material's longitudinal sector either signals instantaneously or reproduces Maxwell's theory exactly, in the velocity gauge, for every longitudinal speed (Theorems 5–6). The finite speed therefore lives in the quantum tower, where it is exposed to timing and multipartite tests (Proposition 10, Theorem 13). A quantitative version of Norsen's tower gives a capacity with data attached (Theorem 8). A dimension-counting theorem shows why a finite classical material has "no room" for the wave function, and a reachable-set theorem shows why no circuit can catch it in the act (Theorems 9–10). The testable remainder — dense storage and its mirror-circuit cliff — is sharper than the headline it replaces (Theorems 11–12). The closure of $\hbar$ separates into a kinematic identity and a flagged constitutive commitment (Lemma 4, Proposition 12, Flag F-B1). The de Broglie clock, taken as a physical rotation, predicts a channeling resonance and an $\alpha$-drift without $\mu$-drift (Propositions 14–15). The electron has two scales and a band edge that poses a question with a positronium answer (Theorem 15, Propositions 17–18). A helical vacuum imprints a far-infrared trough with a fixed edge (Theorem 7). An exactly solvable cosmology — the Dvali–Turner family, reached from a material lag — predicts $w_a\ge0$ and sits on the wrong side of the data, which GUM says in advance (Propositions 22–26). And a handedness bit links weak chirality, $\delta_{CP}$, birefringence, and a mirror test of short-range forces (Propositions 28–31).

Around the core, the electroweak, strong, flavor, and anomaly sectors reproduce the Standard Model's postulate layer at their ledger grades, and GUM's own audit labels them non-discriminating: consistency conditions that any material must satisfy, and that GUM satisfies. The dynamical precision core of the Standard Model — running couplings, cross sections, absolute masses — is largely unearned and is printed as such, with closures posed and kills signed. One audit is new and urgent. The knot sector's normalizations were inconsistent, and the inherited numbers must be recomputed in one convention before the flavor and neutrino stakes can be taken at face value (K-N).

Is the vacuum a GUM material? The honest present answer is that a material of this kind has signatures it cannot avoid, and that this revision has moved them. It cannot avoid a longitudinal speed, but that speed now shows up in the timing of quantum correlations rather than in electromagnetism. It cannot avoid a finite representational capacity, but the capacity shows up as a mirror-circuit cliff only if the material stores states densely, which is a hypothesis GUM now states rather than assumes. It cannot avoid a structure scale and a pitch, which appear as a far-infrared edge, a neutrino mass that drifts with dark energy, and a micrometer range for vacuum handedness. And if its clock is real, it cannot avoid the crystal rows of a channeling experiment.

Heisenberg expelled the trajectory because he could not measure it. GUM readmits it on the condition that the material carrying it can be measured instead. The thirty stakes above are where GUM intends to be measured.

Standing by for adjudication.

# Appendix A: Cosserat Kinematics, Objectivity, Normalization, and Imports

## 1. Nonlinear objectivity

Under a rigid rotation $\mathsf R_0\in SO(3)$ of the whole, $\mathsf F\to\mathsf R_0\mathsf F$ and $\tilde Q\to\tilde R_0\tilde Q$, with $\tilde R_0$ a lift of $\mathsf R_0$. The polar factor transforms as $\mathsf R[\mathbf u]\to\mathsf R_0\mathsf R[\mathbf u]$, so $\tilde P=\tilde R[\mathbf u]^\dagger\tilde Q$ is invariant. A potential built from $\tilde P$ and its derivatives is objective; one built from $\tilde Q$ alone is not. The Maurer–Cartan currents obey $\partial_iL_j-\partial_jL_i+[L_i,L_j]=0$, and $\int b_P\,d^3x=K$ for textures with $\tilde P\to\mathbb 1$ at infinity; the hedgehog $\tilde P=\exp[if(r)\hat{\mathbf x}\cdot\boldsymbol\sigma]$ with $f(0)=\pi$ and $f(\infty)=0$ has $K=1$.

## 2. Linearization

With $\mathsf F=\mathbb 1+\nabla\mathbf u$, $\mathsf R[\mathbf u]=\mathbb 1+\tfrac12(\nabla\mathbf u-\nabla\mathbf u^{\mathsf T})+O(u^2)$ with axial vector $\tfrac12\nabla\times\mathbf u$; $Q=\mathbb 1+[\boldsymbol\varphi]_\times+O(\varphi^2)$. Hence $\boldsymbol\psi=\boldsymbol\varphi-\tfrac12\nabla\times\mathbf u$, $e_{ij}=\partial_iu_j-\epsilon_{ijk}\varphi_k$, and $\tilde P\simeq\exp(i\boldsymbol\psi\cdot\boldsymbol\sigma/2)$, so that $\sigma_P=\cos(\lvert\boldsymbol\psi\rvert/2)$ and $1-\sigma_P=\lvert\boldsymbol\psi\rvert^2/8+O(\psi^4)$. The chain rule for $\tilde P$ — $\delta W_{6+0}/\delta\mathbf u$ enters through $\tilde R[\mathbf u]$, with $\delta\tilde P=-(\delta\tilde R\,\tilde R^{-1})\tilde P$ — generates a force-stress contribution that is tracked in the B1 and B4 blocks; this bookkeeping makes Theorem 1 an all-orders statement.

## 3. Normalization conventions

For $\tilde Q^{-1}\partial_t\tilde Q=\tfrac i2\boldsymbol\omega\cdot\boldsymbol\sigma$ one has $(\tilde Q^{-1}\partial_t\tilde Q)^\dagger(\tilde Q^{-1}\partial_t\tilde Q)=\tfrac14\lvert\boldsymbol\omega\rvert^2\mathbb 1$ and trace $\tfrac12\lvert\boldsymbol\omega\rvert^2$. The coefficient $J$ in Eq. (4) therefore gives the rigid-rotor energy $\tfrac12J\lvert\boldsymbol\omega\rvert^2$, and in the linear theory $\tfrac12J\dot{\boldsymbol\varphi}^2$. The quadratic part of $W$ in the relative rotation is $2\mu_c\lvert\boldsymbol\psi\rvert^2+\tfrac18\tilde m_V^2\lvert\boldsymbol\psi\rvert^2=\tfrac12\tilde m^2\lvert\boldsymbol\psi\rvert^2$ with $\tilde m^2=4\mu_c+\tfrac14\tilde m_V^2$, whence $\omega_0^2=\tilde m^2/J$. The transverse curvature energy is $\tfrac14(\gamma+\beta)\lvert\nabla\times\boldsymbol\varphi\rvert^2$ by Proposition 5. The B1 energy used in Proposition 3 is $\tfrac12\varepsilon^\ast(c_L^{-2}\dot\Phi_c^2+\lvert\nabla\Phi_c\rvert^2)$, the normalization for which Eq. (17) is its Euler–Lagrange equation with source $\rho_q\Phi_c$. The [N] closure numbers of Sec. VI C were computed in the previous draft's conventions and are subject to K-N.

## 4. Imports

The imports are as follows: six moduli $(\lambda,\mu,\mu_c,\alpha,\beta,\gamma)$ and two inertias $(\rho_0,J)$ [8]; chiral couplings $\chi_{1,2,3}$; topological constants $(\kappa_S,\Lambda,\tilde m_V,c_2)$; and the structural scale $\ell_s$. GUM fixes $c^2=\gamma_\mathrm{eff}/2J$ and imports the cone condition $\mu/\rho_0=\gamma_\mathrm{eff}/2J$ (K-16); imports $c_L$, bounded below by Bell timing; imports the Gauss-completion constraint F-G (K-18); fixes one relation among $(\Lambda,J,\hbar_\mathrm{stat})$ by closure; imports $\ell_s$ (bounded above by photon timing), $n$, $\alpha$, $\vartheta$, and the pitch factor $\zeta_\nu$; and derives the $\epsilon$-window, the margin $\mathfrak m$, and the frustration constants as [N] quantities from the couplings. A material proposal is measured by this list as much as by its theorems.

# Appendix B: Proofs for the Electrodynamic Sector

## 1. Euler–Lagrange equation

With $\mathcal L_\perp=\tfrac12J\dot{\boldsymbol\varphi}^2-\tfrac14\gamma_\mathrm{eff}\lvert\nabla\times\boldsymbol\varphi\rvert^2$ and $\delta\int\lvert\nabla\times\boldsymbol\varphi\rvert^2=2\int(\nabla\times\nabla\times\boldsymbol\varphi)\cdot\delta\boldsymbol\varphi$,
$$
J\ddot{\boldsymbol\varphi}=-\tfrac12\gamma_\mathrm{eff}\nabla\times\nabla\times\boldsymbol\varphi=\tfrac12\gamma_\mathrm{eff}\big(\nabla^2\boldsymbol\varphi-\nabla(\nabla\cdot\boldsymbol\varphi)\big),
\tag{B1}
$$
the wave equation with $c^2=\gamma_\mathrm{eff}/2J$ on the transverse subspace; the factor $\tfrac12$ traces to $\Gamma_{[ij]}\Gamma_{[ij]}=\tfrac12\lvert\nabla\times\boldsymbol\varphi\rvert^2$.

## 2. The locked doublet in the strict locking limit

In the limit $\tilde m\to\infty$ the constraint $\boldsymbol\varphi=\tfrac12\nabla\times\mathbf u$ holds exactly and the transverse Lagrangian becomes $\tfrac12\rho_\mathrm{eff}(k)\lvert\dot{\mathbf u}_\perp\rvert^2-\tfrac12\mathcal K_\mathrm{eff}(k)k^2\lvert\mathbf u_\perp\rvert^2$ with $\rho_\mathrm{eff}=\rho_0+\tfrac14Jk^2$ and $\mathcal K_\mathrm{eff}=\mu+\tfrac18\gamma_\mathrm{eff}k^2$. The phase velocity is $c_T^2(k)=(\mu+\tfrac18\gamma_\mathrm{eff}k^2)/(\rho_0+\tfrac14Jk^2)$, which is independent of $k$ iff $\mu/\rho_0=\gamma_\mathrm{eff}/2J$. Proposition 1 shows that the same condition makes the doublet exact at finite $\tilde m$: the determinant factorizes as $\Delta(\rho_0J\Delta-\rho_0\tilde m^2-\tfrac14J\tilde m^2k^2)$, so the root $\Delta=0$ survives at every locking strength. The previous draft's crossover wavenumbers $\sqrt{\mu/\gamma}$ and $\sqrt{\rho_0/J}$ are therefore irrelevant to the doublet once the cone condition holds.

## 3. Existence and uniqueness of the Gauss completion

Let $(\rho_q,\mathbf j_q)$ be conserved and vanish in the far past, with retarded Maxwell fields $(\mathbf E^M,\mathbf B^M)$. Define $\Phi_c$ by Eq. (17) with retarded conditions, set $\mathbf E_\varphi\equiv\mathbf E^M+\nabla\Phi_c$, and define $\boldsymbol\varphi$ by $\kappa_B\boldsymbol\varphi(t)=-\int_{-\infty}^t\mathbf E_\varphi\,dt'$. Then:

- $\kappa_B\partial_t\nabla\times\boldsymbol\varphi=-\nabla\times\mathbf E^M=\partial_t\mathbf B^M$, so $\kappa_B\nabla\times\boldsymbol\varphi=\mathbf B^M$;
- $\partial_t\mathbf E_\varphi=c^2\nabla\times\mathbf B^M-\mathbf j_q/\varepsilon^\ast+\partial_t\nabla\Phi_c$, which is Eq. (18) with the source of (G);
- $\kappa_B\nabla\cdot\boldsymbol\varphi=-\int(\rho_q/\varepsilon^\ast+\nabla^2\Phi_c)\,dt'=-c_L^{-2}\partial_t\Phi_c$, which is Eq. (21).

Hence (G) has a solution with exactly Maxwell fields. Uniqueness follows from Theorem 5 with $\mathbf j_\mathrm{def}=0$. The construction is Jackson's velocity gauge [25] with the potentials promoted to material fields: $\mathbf A=\kappa_B\boldsymbol\varphi$ and $\Phi=\Phi_c$.

## 4. Two-cone near fields

For completions with $\mathbf j_\mathrm{def}\neq0$, the space-time structure of the deviation near a source is that of Stokes's solution for an isotropic elastic medium with two speeds [36]. For an impulsive point force $X_j\delta(t)\delta^3(\mathbf x)$ in a medium of density $\rho$ with speeds $c_1>c_2$, the displacement contains, besides the far-field fronts at $r/c_1$ and $r/c_2$, the near-field term
$$
u_i^\mathrm{NF}(\mathbf x,t)=\frac{3\gamma_i\gamma_j-\delta_{ij}}{4\pi\rho\,r^3}\,t\,X_j\qquad\text{for }\ \frac{r}{c_1}\le t\le\frac{r}{c_2},
\tag{B2}
$$
with $\gamma_i=x_i/r$, and zero outside that window. A local completion with a fast longitudinal channel and $\mathbf j_\mathrm{def}\neq0$ produces fields of this form between the $c_L$ and $c$ cones. This is the space-time signature that the near-field experiment of Sec. III D searches for, with the amplitude supplied by K-18.

## 5. The previous draft's longitudinal-radiation estimate

The previous draft estimated the power radiated into B1 as $\eta(c/c_L)^3$ times the doublet's and treated it as an electromagnetic channel. In (G) no such channel exists in $(\mathbf E,\mathbf B)$ (Corollary 1). If the longitudinal sector carries positive-definite energy, the same scaling reappears in Proposition 3 with $\eta=\tfrac12$, as a leak of energy that the source must pay for, bounded by $5\times10^{-13}$ of the dipole power for $c_L\ge10^4c$.

# Appendix C: Capacity, Reachable Sets, and the Mirror Protocol

## 1. Page spectra and multiplicativity

For a Haar-random state of $2m$ qubits split $m|m$, the reduced density matrix is Wishart with unit aspect ratio, whose spectrum converges to the Marchenko–Pastur law on $[0,4\cdot2^{-m}]$ [52, 53]; hence $F_\chi\le4\chi/2^m$, loose by a factor of about two for $\chi\ll2^m$. If the prepared state is $\rho=F_\mathrm{noise}|\Phi\rangle\langle\Phi|+(1-F_\mathrm{noise})\rho_\mathrm{dep}$, with $|\Phi\rangle$ a truncated coherent preparation of fidelity $F_\mathrm{trunc}$ to the ideal, and the discarded Schmidt component has Porter–Thomas statistics uncorrelated with the ideal probabilities, then linear cross-entropy benchmarking estimates $F_\mathrm{noise}F_\mathrm{trunc}$. Relaxing $F_\mathrm{trunc}\ge0.8$ to $\ge0.5$ changes Eq. (38) to $8\times10^{6}$. The Page-saturation assumption at 14 cycles on a $9\times6$ grid is conservative, since light-cone counting across a cut of six qubits admits several ebits per cycle.

## 2. History storage in detail

The history-storing material of Corollary 4 holds $\Theta\in[0,2\pi]^{N_gp}$ and nothing else. To supply a conditional field of the tower at a point it must evaluate an amplitude of the form $\langle x\rvert G_{N_g}\cdots G_1\lvert0\rangle$, which for generic circuits is a tensor-network contraction of cost exponential in the entanglement across the relevant cut. Such a material is therefore neither local — the amplitude at a point depends on the whole of $\Theta$ — nor fast. It evades Theorem 9 only by giving up what makes the tower a tower. That is why dense storage (Definition 5) is the natural hypothesis for GUM, and why the hypothesis must still be stated rather than assumed.

## 3. Why Clifford and peaked circuits do not test dense storage

The previous draft proposed verifying the capacity bound with Clifford circuits, peaked circuits, or error-corrected logical states. Stabilizer states form a finite set of size $2^{O(n_q^2)}$ and are specified by an $O(n_q^2)$-bit tableau, so a material can host every Clifford output with polynomially many degrees of freedom; peaked circuits are likewise specified by their compact descriptions. Neither family forces a material to host a Haar-typical state. The mirror protocol uses non-Clifford two-qubit gates — Haar-random $SU(4)$ elements or a dense gate set — so that the midpoint is typical in the sense required by Eq. (40), while the return probability remains verifiable without simulation.

## 4. Resource estimate for the mirror test

With two-qubit error $\epsilon$, the calibrated fidelity of a circuit with $N_{2q}$ two-qubit gates is $F_\mathrm{noise}\simeq e^{-\epsilon N_{2q}}$. A log-depth scrambler with all-to-all connectivity uses about $\tfrac12n_q\log_2n_q$ gates per half, so $N_{2q}\simeq n_q\log_2n_q$ in total. A two-dimensional nearest-neighbor layout needs depth of order $\sqrt{n_q}$ per half [54], so $N_{2q}\simeq n_q^{3/2}$. Requiring $F_\mathrm{noise}\ge e^{-7}\simeq9\times10^{-4}$ gives the thresholds quoted in Sec. V F. At that floor, measuring $P_\mathrm{ret}$ to $3\%$ relative precision takes about $1/(0.03^2\times9\times10^{-4})\simeq1.2\times10^6$ shots per circuit instance. The cliff predicts a fall of $\mathcal P$ by a factor of two per qubit, so a scan in steps of four qubits across $n_q^\ast\pm20$ resolves it with a few dozen instances per point. Depth independence is tested by repeating the scan at two depths above the scrambling depth.

# Appendix D: The Relaxation Family

## 1. Background equation

With $\rho_\mathrm{DE}=\rho_{\mathrm{DE},0}(H/H_0)^{2(1-n)}$,
$$
\left(\frac{H}{H_0}\right)^2=\Omega_{m,0}a^{-3}+\Omega_{r,0}a^{-4}+\Omega_{\mathrm{DE},0}\left(\frac{H}{H_0}\right)^{2(1-n)},
\tag{D1}
$$
an implicit algebraic equation for $H(a)$, solvable by fixed-point iteration for $n>0$; it is linear at $n=0$ (Corollary 6) and $\Lambda$CDM at $n=1$.

| $n$ | $\alpha_\mathrm{DT}$ | $w_0$ | $w_a$ | $q_{\mathrm{dec},0}$ | $\rho_\mathrm{DE}/\rho_m$ at $z=1100$ |
|:---|:---|:---|:---|:---|:---|
| 0 | 2 | 0 | 0 | $+0.50$ | $2.2$ (matter-like) |
| 0.25 | 1.5 | $-0.52$ | $+0.27$ | $-0.04$ | $9\times10^{-3}$ |
| 0.50 | 1 (DGP) | $-0.76$ | $+0.29$ | $-0.29$ | $3\times10^{-5}$ |
| 0.75 | 0.5 | $-0.91$ | $+0.16$ | $-0.44$ | $1\times10^{-7}$ |
| 0.90 | 0.2 | $-0.97$ | $+0.06$ | $-0.50$ | $3\times10^{-9}$ |
| 1 | 0 ($\Lambda$) | $-1$ | 0 | $-0.54$ | 0 |

*Table 5. The relaxation family at $\Omega_{\mathrm{DE},0}=0.69$, with the Dvali–Turner exponent of Proposition 26.*

## 2. CPL and the lag ODE

Because $w_\mathrm{DE}$ depends on $a$ only through $\Omega_\mathrm{DE}(a)$, $w(a)$ is monotone and bounded in $[-1,0]$. The CPL form [94, 95] is accurate near $a=1$ and overshoots at high redshift, where the family saturates at $w\to0$ for $n<1$; any fit of the family to data should use Eq. (70) directly. The structural law $\Gamma_r\propto H^n$ follows from the relaxation ODE $\dot{\delta q}=-\Gamma_r\,\delta q+SH$ in the adiabatic limit $\Gamma_r\gg H$, where $\delta q\to SH/\Gamma_r$. The index $n$ is the scaling of the soft manifold's relaxation rate with the expansion rate, and K-12 is its computation. The adiabatic condition is itself a consistency requirement: for $n<1$ it fails in the far future, where $w\to-1$ is approached only asymptotically, and for $n=1$ it is scale-free. The same ODE, applied to the condensate order parameter on the same manifold, is the evolution equation that K-8 consumes, and applied to the pitch it gives Proposition 27.

## 3. The drift in numbers

With $h(z)=\sqrt{\Omega_{m,0}(1+z)^3+\Omega_{\mathrm{DE},0}\,h^{2(1-n)}}$ solved self-consistently, $h(2)\simeq3.0$ for the members of interest. The mass ratio of Proposition 27 at $z=2$ is $0.82$ for $(n,\varepsilon_\nu)=(0.5,-0.2)$, $0.89$ for $(0.8,-0.3)$, and $0.75$ for $(0.8,-0.5)$. The linear formula requires $\lvert\varepsilon_\nu\rvert h^{1-n}<1$, which fails near $z\simeq12$ for $(0.5,-0.2)$ and near $z\simeq80$ for $(0.8,-0.3)$.

# Appendix E: The Cosmological Bragg Passage

## 1. Coupled-mode equations and the Landau–Zener limit

A cholesteric of pitch $p$ has a dielectric modulation of period $p/2$ and Bragg wavevector $K=4\pi/p$. For propagation along the axis, the forward and backward amplitudes $A,B$ of the co-handed circular polarization obey
$$
\frac{dA}{d\ell}=ig_c\,e^{-2i\int^\ell\delta\,d\ell'}B,\qquad\frac{dB}{d\ell}=-ig_c\,e^{+2i\int^\ell\delta\,d\ell'}A,\qquad g_c=\frac{\pi\Delta n}{\bar np},\quad\delta=\frac{2\pi\bar n}{\lambda_\mathrm{loc}}-\frac{2\pi}{p},
\tag{E1}
$$
with stop band $\lvert\delta\rvert<g_c$, i.e. $\lambda\in[n_op,n_ep]$ [43]. For a linear sweep $\delta=\delta'\ell$, the equations reduce to the Landau–Zener problem with coupling $g_c$ and sweep rate $2\delta'$ [44, 45]. The probability that the photon stays in the forward mode is $e^{-\pi g_c^2/\lvert\delta'\rvert}$, so $R=1-e^{-\pi g_c^2/\lvert\delta'\rvert}$, the chirped-grating result [46]. Along a cosmological ray, $\lambda_\mathrm{loc}=\lambda_\mathrm{obs}/(1+z)$ and $dz/d\ell=-(1+z)H/c$, so at resonance $\lvert\delta'\rvert=(2\pi/p)H/c$. Then $\pi g_c^2/\lvert\delta'\rvert=(\pi^2/2)(\Delta n/\bar n)^2c/(pH)=\Pi$, which is Eq. (28).

## 2. Validity

The sweep is linear across the resonance if the resonant path $\Delta\ell\simeq g_c/\lvert\delta'\rvert=(\Delta n/2\bar n)\,c/H$ is short compared with $c/H$, which holds for $\Delta n\ll1$. The coupled-mode approximation requires $g_c\ll K$. The coherent regime additionally requires the helix axis to be coherent over $\Delta\ell$. At the bound of Eq. (30) that length is about $10^{10}$ m, or $3\times10^{14}$ pitches.

## 3. The amorphous regime

For the blue fog of Flag F13 — a double-twist network statistically isotropic on scales much larger than $p$, with orientational correlation length $\ell_o$ — the coherent condition fails unless $\ell_o$ is very long. A domain inclined at angle $\theta$ to the ray has Bragg wavelength $\bar np\cos\theta\le\bar np$, and its response has fractional width of order $p/\ell_o$. The local fog therefore attenuates every $\lambda_\mathrm{obs}\le\bar np$, and more distant fog attenuates redward up to $\bar np(1+z_s)$. The fixed feature at $\bar np$ survives as the red limit of the local band, with its dipole modulation (Proposition 7) and a circular polarization of the same sign but reduced degree. Its sharpness is of order $p/\ell_o$. The extinction integrated over a Hubble path is $\tau\sim(\Delta n)^2c/(Hp)$, and $\tau\lesssim0.1$ gives $\Delta n\lesssim10^{-16}$, within an order of magnitude of the coherent bound. Which shape applies — trough or step — is determined by $\ell_o$, a deliverable of K-11.

## 4. Laboratory arm

A terahertz polarimeter near $12$–$14$ THz over $\sim10^2$ m of multi-pass vacuum is not competitive with the astrophysical arm at the bound. It is the only arm sensitive to the dispersive rotation Eq. (32) near resonance, where astrophysical spectra are contaminated by dust.

# Appendix F: Preferred-Frame Kinematics

## 1. Arrival times

Let the material frame $M$ and the lab frame $\mathcal L$ be related by a boost with velocity $\mathbf v_M$ (lab relative to material). An influence leaving the source event $(0,\mathbf 0)$ at speed $c_L$ in $M$ reaches the receiver at $(t_M,\mathbf x_M)=(r/c_L,\ r\hat{\mathbf n})$. The lab time is $t_{\mathcal L}=\gamma_v(t_M-\mathbf v_M\cdot\mathbf x_M/c^2)$, which gives Eq. (23). Arrival precedes emission on lab clocks iff $\mathbf v_M\cdot\hat{\mathbf n}>c^2/c_L$. For a lab-fixed baseline $\hat{\mathbf n}$ and $\mathbf v_M$ at angle $\theta_\oplus$ to the Earth's axis,
$$
\mathbf v_M\cdot\hat{\mathbf n}(\tau)=v_M\big[\cos\theta_\oplus\,n_\parallel+\sin\theta_\oplus\,n_\perp\cos(\Omega_\oplus\tau-\phi_0)\big],
\tag{F1}
$$
where $n_\parallel$ and $n_\perp$ are the baseline's components along and perpendicular to the axis, and $\tau$ is sidereal time. The oscillating part of $t_{\mathcal L}$ has amplitude $\gamma_vrv_M\sin\theta_\oplus n_\perp/c^2$.

## 2. The bipartite bound

For two measurement events with lab separation $(\Delta t,\mathbf L)$, first order in $v_M/c$ gives $\Delta t_M=\Delta t-\mathbf v_M\cdot\mathbf L/c^2$ and $\lvert\Delta\mathbf x_M\rvert=L$. By Eq. (F1), $d(\mathbf v_M\cdot\mathbf L)/d\tau$ has magnitude at most $\Omega_\oplus v_\perp L$, with $v_\perp=v_M\sin\theta_\oplus$. Within an integration window $T_\mathrm{int}$ centered on the sidereal time at which $\Delta t_M$ would vanish, $\lvert\Delta t_M\rvert$ stays below $\delta t+\tfrac12\Omega_\oplus v_\perp LT_\mathrm{int}/c^2$. If the events were $c_L$-disconnected throughout that window, the $c_L$-causal model would lose the correlation. Persistence of the violation therefore requires $L/c_L$ to exceed that bound, which is Eq. (43). For $L=10$ km, $\delta t=100$ ps, $T_\mathrm{int}=60$ s, and $v_\perp=370\ \mathrm{km\,s^{-1}}$, the rotation term is $90$ ps and the bound is $c_L\gtrsim5\times10^{13}\ \mathrm{m\,s^{-1}}\approx2\times10^5c$.

# Appendix G: The Electroweak Precision Obligation

GUM's electroweak skeleton derives $\rho=1$ identically from co-rotation invariance, with corrections at $O(\chi^2(k\ell_s)^2)$. In the Standard Model, $\rho_\mathrm{tree}=1$ follows from the doublet structure, and the dominant loop correction, from the top–bottom splitting, is
$$
\Delta\rho_\mathrm{top}=\frac{3G_Fm_t^2}{8\sqrt2\pi^2}\approx0.0093
\tag{G1}
$$
for $m_t=172.5$ GeV [84, 81] — the quantity through which LEP predicted the top mass before its discovery. The experimental statement "$\rho_0=1$ to $10^{-3}$" is defined *after* the Standard Model loops, including Eq. (G1), are subtracted, and it constrains physics beyond the Standard Model. GUM is not the Standard Model plus new physics; it is a replacement. Its composite, band-edge top must reproduce Eq. (G1), or its agreement with $\rho\approx1$ is agreement with the wrong number. This is the deliverable of K-5. It requires no new postulate, and it is a clean discriminator: a composite top that does not shift $\rho$ by a percent is not the top.

# Appendix H: Worked Numbers

## 1. Bogomolny constant and compacton

With $\sqrt{2\mathcal V}=2\tilde m_V\sin(\chi/2)$ and $u=\chi/2$, $\int_0^\pi\sin(\chi/2)\sin^2\chi\,d\chi=8\int_0^{\pi/2}\sin^3u\cos^2u\,du=8(\tfrac13-\tfrac15)=\tfrac{16}{15}$, so $C_6=(2/\pi)(2\tilde m_V)(16/15)\Lambda=(64/15\pi)\Lambda\tilde m_V$. For the hedgehog, $b_P=-(2\pi^2r^2)^{-1}\sin^2f\,f'$, and the Bogomolny equation in the volume coordinate $s=r^3/3$ reads $-(\Lambda/2\pi^2)\sin^2f\,df/ds=2\tilde m_V\sin(f/2)$. Integrating $\int_0^\pi4\sin(f/2)\cos^2(f/2)\,df=\tfrac83$ gives $R_\ast^3/3=(8/3)\Lambda/(4\pi^2\tilde m_V)$, i.e. Eq. (50).

## 2. Electroweak algebra at $\vartheta=0.55$

$\sin^2\theta_w=\vartheta^2/(1+\vartheta^2)=0.232$; $M_Z/M_W=\sqrt{1+\vartheta^2}=1.141$ against the observed $1.134$. From $G_F=1.166\times10^{-5}$ GeV$^{-2}$ and $M_W=80.4$ GeV, $g^2=8M_W^2G_F/\sqrt2$ gives $g\approx0.65$ and $\alpha_w=g^2/4\pi\approx1/30>\alpha$: the weak coupling is electromagnetic-sized, and weakness at low energy is the $1/M_W^2$ of the matching plus whatever suppression the vertex carries — which is why K-13's prefactors are owed.

## 3. Lepton logarithms and the bridge

$\ln(m_\tau/m_\mu)=\ln16.817=2.8224$ and $\ln(m_\mu/m_e)=\ln206.77=5.3316$, with ratio $1.889$, against $\tfrac12A=2.80\pm0.45$, $\tfrac12(A+B)=5.65\pm0.75$, and $(A+B)/A=2.02\pm0.28$ — landings within $\pm16\%$. Bridge: $(5.644-3.05)/0.1065=24.36$; $e^{-24.36}=2.6\times10^{-11}$; the $\pm0.90$ in the logarithm spans $m_3$ by $e^{\pm0.90}$, the factor-$2.5$ band $[0.019,0.115]$ eV. Conversion: $m_3c^2=\zeta_\nu\hbar c\,e^{-X}/\lambda_{\mathrm{halo},\tau}$. With $\lambda_{\mathrm{halo},\tau}=\hbar/m_\tau c$, $m_\tau c^2e^{-24.36}=1776.9\ \mathrm{MeV}\times2.63\times10^{-11}=0.0468$ eV. With the previous draft's $\hbar/(\sqrt2m_\tau c)$, $0.0662$ eV, band $[0.027,0.16]$ eV, and $\ln(0.066/0.050)/0.90=0.31$, so the floor would sit $0.31\sigma$ below the center. The minimal sum for normal ordering is $\sqrt{7.5\times10^{-5}}+\sqrt{2.5\times10^{-3}}\approx0.059$ eV, and for inverted ordering $\approx0.10$ eV.

## 4. Pitch window

$hc=1.23984\ \mathrm{eV}\,\mu\mathrm{m}$; $m_3=0.0503$ eV gives $24.65\ \mu$m and $m_3=0.057$ eV gives $21.75\ \mu$m. For normal ordering with $\Delta m^2_{21}=7.5\times10^{-5}$ eV$^2$ and $\Delta m^2_{31}=2.53\times10^{-3}$ eV$^2$, $\Sigma m_\nu=0.064$ eV requires $m_1\simeq0.0040$ eV, $m_2\simeq0.0095$ eV, and $m_3\simeq0.0505$ eV, i.e. $p/\zeta_\nu\simeq24.55\ \mu$m.

## 5. Bragg passage

$c/H_0=1.372\times10^{26}$ m for $H_0=67.4\ \mathrm{km\,s^{-1}\,Mpc^{-1}}$; with $p=24.6\ \mu$m, $c/(pH_0)=5.58\times10^{30}$ and $\Pi_0=2.75\times10^{31}(\Delta n/\bar n)^2$. $R=0.1$ requires $\Pi_0=0.105$, i.e. $\Delta n/\bar n=6.2\times10^{-17}$. The dipole shift is $\bar np\,v_M/c=24.6\ \mu\mathrm{m}\times1.2335\times10^{-3}=0.030\ \mu$m. The advected pitch line is at $v_M/p=3.698\times10^5/2.46\times10^{-5}=15.0$ GHz. At the bound, the de Vries rate at $\lambda=1$ mm is $\pi p\Delta n^2/(4\lambda^2)\simeq7.4\times10^{-32}$ rad m$^{-1}$, i.e. $1.0\times10^{-5}$ rad per Hubble length, falling as $\lambda^{-2}$.

## 6. Structural scale, cliff, and timing

$\hbar c=1.973\times10^{-16}$ GeV m; $E_{\mathrm{QG},2}=1.3\times10^{11}$ GeV gives $\ell_s=1.52\times10^{-27}$ m for $\lvert\xi_\gamma\rvert=1$ and $5.3\times10^{-27}$ m for $\lvert\xi_\gamma\rvert=\tfrac1{12}$. Zero-point ledger: $\hbar c/\ell_s^4=3.16\times10^{-26}\ \mathrm{J\,m}/(5.1\times10^{-108}\ \mathrm{m^4})\simeq6\times10^{81}\ \mathrm{J\,m^{-3}}$. Cliff entries of Table 1: $\log_2(10^{-10}/(1.5\times10^{-27})^3)=234.1$; $\log_2(10^{-6}/(1.5\times10^{-27})^3)=247.4$; $\log_2(10^{95})=315.6$; $\log_2(10^{99})=328.9$; $\log_2(10^{-8}/(1.5\times10^{-27})^2)=151.6$; $\log_2(10^{66})=219.2$; $\log_2(300)+\log_2[(10^{-8}/1.5\times10^{-27})^3]=195.8$; $\log_2(300)+\log_2(10^{93})=317.2$. Mirror feasibility at $n_q=300$: $n_q\log_2n_q=2469$ and $7/2469=2.8\times10^{-3}$; $n_q^{3/2}=5196$ and $7/5196=1.3\times10^{-3}$. Matter–light cone: $\hbar\omega_0=1$ MeV gives $\omega_0=1.52\times10^{21}\ \mathrm{s^{-1}}$ and $(\ell_g\omega_0/c)^2/8=7.2\times10^{-30}$ at $\ell_g=1.5\times10^{-27}$ m; $\hbar\omega_0=80.4$ GeV gives $4.7\times10^{-20}$; $(c_\psi-c)/c\le10^{-20}$ requires $\ell_g\le6.9\times10^{-28}$ m, and $\ell_s=6.9\times10^{-28}$ m would move the lower end of the H$_V$ cliff range from $234.1$ to $237.5$.

## 7. Clock and band edge

$(m_ec^2)^2=0.261120\ \mathrm{MeV^2}$ and $hc=1.239842\times10^{-12}$ MeV m. Row spacings $a/\sqrt2$: Si $5.431/\sqrt2=3.840$ Å, Ge $5.658/\sqrt2=4.001$ Å, diamond $3.567/\sqrt2=2.522$ Å; hence $p_1c=80.87$, $84.26$, and $53.12$ MeV. Band edges $\sqrt2Mc^2$: $0.72266$ MeV, $149.42$ MeV, $2.5129$ GeV. Positronium: $(4m_e^2-2m_e^2)c^2/(4m_e)=m_ec^2/2=255.50$ keV.

## 8. Regge slope and termination

From a rotating string of tension $\sigma$ with ends at the speed of light, $M=\pi\sigma R$ and $J=\pi\sigma R^2/2$, so $J=M^2/(2\pi\sigma)$ and $\alpha'=1/(2\pi\cdot0.19)=0.84$ GeV$^{-2}$ against the observed $0.88$; $\sigma/(\hbar c)=0.96\ \mathrm{GeV\,fm^{-1}}\approx1.5\times10^5$ N. Termination: $y_t=\sqrt2m_t/v=\sqrt2\cdot172.5/246.22=0.991$; the $\mathsf p=3$ lepton at $m\approx m_ee^{-\frac12(A+2B)}$ carries $\epsilon_3=\epsilon_ee^{(4/3)\cdot8.5}$ and crosses closure failure for all $\epsilon_e\gtrsim8\times10^{-6}$.

# Appendix I: Notation

| Symbol | Meaning | First used |
|:------------------------------------|:--------------------------------------------|:--------------------|
| $\mathbf u$, $\mathsf F$, $\mathsf R[\mathbf u]$ | displacement; deformation gradient; polar rotation | Sec. II A |
| $\tilde Q$, $\boldsymbol\varphi$; $\tilde P$, $\sigma_P$, $\boldsymbol\psi$ | micro-rotation; relative texture, its trace, relative rotation | Eqs. (1)–(3) |
| $e_{ij}$, $\Gamma_{ij}$ | Cosserat strain; wryness | Eq. (2) |
| $\lambda,\mu,\mu_c,\alpha,\beta,\gamma$; $\gamma_\mathrm{eff}$ | moduli; effective curl modulus $\gamma+\beta$ | Eqs. (5), (10) |
| $\chi_{1,2,3}$; $\kappa_S,\Lambda,\tilde m_V,c_2$; $\tilde m$ | chiral couplings; topological constants; total gap modulus | Eqs. (6)–(10) |
| $\rho_0$, $J$; $\ell_s$ | mass density; micro-inertia density; structural scale | Eq. (4); Sec. I F |
| $c$, $c_L$, $c_\psi$, $c_4$; $\omega_0$ | doublet, longitudinal, relative-rotation, B4 speeds; gap | Prop. 1 |
| $\Phi_c$, $\Phi_\infty$; $\mathbf E_\varphi$, $\mathbf B$; $\varepsilon^\ast$, $\kappa_B$ | frame-connection and Coulomb potentials; orientation fields; material permittivity; coupling | Sec. III C |
| $\mathbf J_\varphi$; $\mathbf j_\mathrm{def}$, $\rho_\mathrm{def}$ | orientation-sector source; defect current and density | Def. 1 |
| $\mathbf v_M$, $\gamma_v$ | lab velocity relative to the material frame; its Lorentz factor | Prop. 4 |
| $q$, $p$, $\zeta_\nu$; $\bar n$, $\Delta n$; $\Pi$ | pitch wavenumber, pitch, pitch factor; index, birefringence; passage parameter | Eqs. (26), (28) |
| $\psi_k$, $F^{(\alpha)}_k$; $\chi$, $\chi_\mathrm{max}$, $F_\chi$ | conditional wave function; tower; Schmidt rank, capacity, truncated fidelity | Eqs. (35), (37) |
| $n_q$; $N_\mathrm{eff}$, $L_R$; $n_q^\ast$; $\mathcal P$ | qubits; effective degrees of freedom, gain; cliff; normalized return probability | Sec. V E–V F |
| $j$, $\mathbb I$, $\omega$, $\kappa$; $\hat e$, $\mathfrak i$, $g$, $w$, $\mathfrak c$; $(a,b)$ | rotor number, inertia, clock, $\omega/\omega_0$; closure parameters; Derrick pair | Sec. VI B–VI C |
| $R_\ast$, $\lambda_\mathrm{halo}$; $\epsilon$ | compacton radius; halo length; near-BPS lift | Eqs. (50), (62) |
| $\mathsf p$, $A$, $B$, $\Sigma(\mathsf p)$; $A_\mathrm{halo}$, $\kappa_\mathrm{far}$ | frustration class and integrals; bridge coefficients | Eqs. (64), (65) |
| $\vartheta$, $M_T$; $\eta_f$; $\mu_h$ | mixing modulus, twist gap; coupling deviation; halo tunneling exponent | Prop. 19, Thm. 16 |
| $n$, $\Gamma_r$, $\delta q$, $\mathcal X$; $\alpha_\mathrm{DT}$; $\varepsilon_\nu$ | relaxation index, rate, lag, susceptibility; Dvali–Turner exponent; drift amplitude | Eqs. (69), (74), (75) |
| $s$, $\varepsilon_i$, $O_i$; $\Theta$, $g_\Theta$; $\beta_\mathrm{cb}$ | handedness bit; theory and observed signs; parity-odd order parameter, coupling; birefringence angle | Def. 8; Prop. 29 |

*Table 6. Notation.*

# References

\[1\] W. Heisenberg, *Über quantentheoretische Umdeutung kinematischer und mechanischer Beziehungen*, Zeitschrift für Physik **33**, 879–893 (1925).

\[2\] J. S. Bell, *Speakable and Unspeakable in Quantum Mechanics*, 2nd ed. (Cambridge University Press, 2004).

\[3\] E. Madelung, *Quantentheorie in hydrodynamischer Form*, Zeitschrift für Physik **40**, 322–326 (1927).

\[4\] E. Nelson, *Derivation of the Schrödinger equation from Newtonian mechanics*, Physical Review **150**, 1079–1085 (1966).

\[5\] T. C. Wallstrom, *Inequivalence between the Schrödinger equation and the Madelung hydrodynamic equations*, Physical Review A **49**, 1613–1617 (1994).

\[6\] E. Nelson, *Review of stochastic mechanics*, Journal of Physics: Conference Series **361**, 012011 (2012).

\[7\] E. Cosserat and F. Cosserat, *Théorie des corps déformables* (Hermann, Paris, 1909).

\[8\] A. C. Eringen, *Microcontinuum Field Theories I: Foundations and Solids* (Springer, New York, 1999).

\[9\] M. Reginatto, *Derivation of the equations of nonrelativistic quantum mechanics using the principle of minimum Fisher information*, Physical Review A **58**, 1775–1778 (1998).

\[10\] A. Valentini, *Signal-locality, uncertainty, and the subquantum H-theorem. I and II*, Physics Letters A **156**, 5–11 (1991); **158**, 1–8 (1991).

\[11\] D. Dürr, S. Goldstein, and N. Zanghì, *Quantum equilibrium and the origin of absolute uncertainty*, Journal of Statistical Physics **67**, 843–907 (1992).

\[12\] S. Colin and A. Valentini, *Primordial quantum nonequilibrium and large-scale cosmic microwave background anomalies*, Physical Review D **92**, 043520 (2015). To be verified.

\[13\] T. H. R. Skyrme, *A non-linear field theory*, Proceedings of the Royal Society A **260**, 127–138 (1961).

\[14\] G. H. Derrick, *Comments on nonlinear wave equations as models for elementary particles*, Journal of Mathematical Physics **5**, 1252–1254 (1964).

\[15\] E. B. Bogomolny, *Stability of classical solutions*, Soviet Journal of Nuclear Physics **24**, 449–454 (1976).

\[16\] C. Adam, J. Sánchez-Guillén, and A. Wereszczyński, *A Skyrme-type proposal for baryonic matter*, Physics Letters B **691**, 105–110 (2010).

\[17\] L. Faddeev and A. J. Niemi, *Stable knot-like structures in classical field theory*, Nature **387**, 58–61 (1997).

\[18\] R. A. Battye and P. M. Sutcliffe, *Knots as stable soliton solutions in a three-dimensional classical field theory*, Physical Review Letters **81**, 4798–4801 (1998).

\[19\] V. Allori, S. Goldstein, R. Tumulka, and N. Zanghì, *On the common structure of Bohmian mechanics and the Ghirardi–Rimini–Weber theory*, British Journal for the Philosophy of Science **59**, 353–389 (2008).

\[20\] T. Norsen, *The theory of (exclusively) local beables*, Foundations of Physics **40**, 1858–1884 (2010).

\[21\] J. MacCullagh, *An essay towards a dynamical theory of crystalline reflexion and refraction*, Transactions of the Royal Irish Academy **21**, 17–50 (1848); read 9 December 1839. To be verified.

\[22\] E. T. Whittaker, *A History of the Theories of Aether and Electricity, Vol. 1: The Classical Theories* (Nelson, London, 1951).

\[23\] W. Thomson (Lord Kelvin), *On a gyrostatic adynamic constitution for 'ether'*, Comptes Rendus de l'Académie des Sciences **109**, 453–455 (1889). To be verified.

\[24\] C. G. Böhmer, R. J. Downes, and D. Vassiliev, *Rotational elasticity*, Quarterly Journal of Mechanics and Applied Mathematics **64**, 415–439 (2011). To be verified.

\[25\] J. D. Jackson, *From Lorenz to Coulomb and other explicit gauge transformations*, American Journal of Physics **70**, 917–928 (2002).

\[26\] D. Salart, A. Baas, C. Branciard, N. Gisin, and H. Zbinden, *Testing the speed of 'spooky action at a distance'*, Nature **454**, 861–864 (2008).

\[27\] J. Yin et al., *Lower bound on the speed of nonlocal correlations without locality and measurement choice loopholes*, Physical Review Letters **110**, 260407 (2013).

\[28\] J.-D. Bancal, S. Pironio, A. Acín, Y.-C. Liang, V. Scarani, and N. Gisin, *Quantum non-locality based on finite-speed causal influences leads to superluminal signalling*, Nature Physics **8**, 867–870 (2012).

\[29\] T. J. Barnea, J.-D. Bancal, Y.-C. Liang, and N. Gisin, *Tripartite quantum state violating the hidden-influence constraints*, Physical Review A **88**, 022123 (2013).

\[30\] G. E. Volovik, *The Universe in a Helium Droplet* (Oxford University Press, 2003).

\[31\] H. Kleinert, *Gauge Fields in Condensed Matter* (World Scientific, Singapore, 1989).

\[32\] G. Dvali and M. S. Turner, *Dark energy as a modification of the Friedmann equation*, arXiv:astro-ph/0301510 (2003).

\[33\] N. Manton and P. Sutcliffe, *Topological Solitons* (Cambridge University Press, 2004).

\[34\] J. Collins, A. Perez, D. Sudarsky, L. Urrutia, and H. Vucetich, *Lorentz invariance and quantum gravity: an additional fine-tuning problem?*, Physical Review Letters **93**, 191301 (2004).

\[35\] S. Chadha and H. B. Nielsen, *Lorentz invariance as a low energy phenomenon*, Nuclear Physics B **217**, 125–144 (1983).

\[36\] G. G. Stokes, *On the dynamical theory of diffraction*, Transactions of the Cambridge Philosophical Society **9**, 1–62 (1849).

\[37\] A. L. Kholmetskii, O. V. Missevitch, R. Smirnov-Rueda, R. Ivanov, and A. E. Chubykalo, *Experimental test on the applicability of the standard retardation condition to bound magnetic fields*, Journal of Applied Physics **101**, 023532 (2007). To be verified.

\[38\] R. de Sangro, G. Finocchiaro, P. Patteri, M. Piccolo, and G. Pizzella, *Measuring propagation speed of Coulomb fields*, European Physical Journal C **75**, 137 (2015).

\[39\] I. E. Dzyaloshinskii, *Theory of helicoidal structures in antiferromagnets. I. Nonmetals*, Soviet Physics JETP **19**, 960–971 (1964). To be verified.

\[40\] D. C. Wright and N. D. Mermin, *Crystalline liquids: the blue phases*, Reviews of Modern Physics **61**, 385–432 (1989).

\[41\] DESI Collaboration, *DESI DR2 Results II: Measurements of baryon acoustic oscillations and cosmological constraints*, arXiv:2503.14738 (2025).

\[42\] W. Elbers et al., *Constraints on neutrino physics from DESI DR2 BAO and DR1 full shape*, arXiv:2503.14744 (2025). To be verified.

\[43\] Hl. de Vries, *Rotatory power and other optical properties of certain liquid crystals*, Acta Crystallographica **4**, 219–226 (1951).

\[44\] L. D. Landau, *Zur Theorie der Energieübertragung. II*, Physikalische Zeitschrift der Sowjetunion **2**, 46–51 (1932).

\[45\] C. Zener, *Non-adiabatic crossing of energy levels*, Proceedings of the Royal Society A **137**, 696–702 (1932).

\[46\] T. Erdogan, *Fiber grating spectra*, Journal of Lightwave Technology **15**, 1277–1294 (1997).

\[47\] Y. Minami and E. Komatsu, *New extraction of the cosmic birefringence from the Planck 2018 polarization data*, Physical Review Letters **125**, 221301 (2020).

\[48\] J. R. Eskilt and E. Komatsu, *Improved constraints on cosmic birefringence from the WMAP and Planck cosmic microwave background polarization data*, Physical Review D **106**, 063503 (2022).

\[49\] [Authors to be completed], *Cosmic birefringence from the Atacama Cosmology Telescope Data Release 6*, arXiv:2509.13654 (2025). Author list to be verified.

\[50\] C. Eckart and G. Young, *The approximation of one matrix by another of lower rank*, Psychometrika **1**, 211–218 (1936).

\[51\] L. Mirsky, *Symmetric gauge functions and unitarily invariant norms*, Quarterly Journal of Mathematics **11**, 50–59 (1960).

\[52\] D. N. Page, *Average entropy of a subsystem*, Physical Review Letters **71**, 1291–1294 (1993).

\[53\] V. A. Marchenko and L. A. Pastur, *Distribution of eigenvalues for some sets of random matrices*, Mathematics of the USSR-Sbornik **1**, 457–483 (1967).

\[54\] A. Nahum, J. Ruhman, S. Vijay, and J. Haah, *Quantum entanglement growth under random unitary dynamics*, Physical Review X **7**, 031016 (2017).

\[55\] F. Arute et al., *Quantum supremacy using a programmable superconducting processor*, Nature **574**, 505–510 (2019).

\[56\] Y. Wu et al., *Strong quantum computational advantage using a superconducting quantum processor*, Physical Review Letters **127**, 180501 (2021).

\[57\] M. DeCross et al., *The computational power of random quantum circuits in arbitrary geometries*, arXiv:2406.02501 (2024). To be verified.

\[58\] A. Morvan et al., *Phase transitions in random circuit sampling*, Nature **634**, 328–333 (2024). To be verified.

\[59\] H. Federer, *Geometric Measure Theory* (Springer, Berlin, 1969).

\[60\] T. Proctor, K. Rudinger, K. Young, E. Nielsen, and R. Blume-Kohout, *Measuring the capabilities of quantum computers*, Nature Physics **18**, 75–79 (2022).

\[61\] U. Jacob and T. Piran, *Lorentz-violation-induced arrival delays of cosmological particles*, Journal of Cosmology and Astroparticle Physics **01**, 031 (2008).

\[62\] V. Vasileiou, A. Jacholkowska, F. Piron, J. Bolmont, C. Couturier, J. Granot, F. W. Stecker, J. Cohen-Tanugi, and F. Longo, *Constraints on Lorentz invariance violation from Fermi-Large Area Telescope observations of gamma-ray bursts*, Physical Review D **87**, 122001 (2013).

\[63\] D. Finkelstein and J. Rubinstein, *Connection between spin, statistics, and kinks*, Journal of Mathematical Physics **9**, 1762–1779 (1968).

\[64\] X. Calmet and H. Fritzsch, *Cosmological evolution of the unified coupling constant*, European Physical Journal C **24**, 639–642 (2002).

\[65\] P. Langacker, G. Segrè, and M. J. Strassler, *Implications of gauge unification for time variation of the fine structure constant*, Physics Letters B **528**, 121–128 (2002).

\[66\] R. Lange, N. Huntemann, J. M. Rahm, C. Sanner, H. Shao, B. Lipphardt, Chr. Tamm, S. Weyers, and E. Peik, *Improved limits for violations of local position invariance from atomic clock comparisons*, Physical Review Letters **126**, 011102 (2021).

\[67\] J. Bagdonaite, P. Jansen, C. Henkel, H. L. Bethlem, K. M. Menten, and W. Ubachs, *A stringent limit on a drifting proton-to-electron mass ratio from alcohol in the early universe*, Science **339**, 46–48 (2013).

\[68\] M. T. Murphy et al., *Fundamental physics with ESPRESSO: Precise limit on variations in the fine-structure constant towards the bright quasar HE 0515−4414*, Astronomy & Astrophysics **658**, A123 (2022).

\[69\] J. K. Webb, J. A. King, M. T. Murphy, V. V. Flambaum, R. F. Carswell, and M. B. Bainbridge, *Indications of a spatial variation of the fine structure constant*, Physical Review Letters **107**, 191101 (2011).

\[70\] D. Hestenes, *The zitterbewegung interpretation of quantum mechanics*, Foundations of Physics **20**, 1213–1232 (1990).

\[71\] P. Catillon, N. Cue, M. J. Gaillard, R. Genre, M. Gouanère, R. G. Kirsch, J.-C. Poizat, J. Remillieux, L. Roussel, and M. Spighel, *A search for the de Broglie particle internal clock by means of electron channeling*, Foundations of Physics **38**, 659–664 (2008). To be verified.

\[72\] S.-Y. Lan, P.-C. Kuan, B. Estey, D. English, J. M. Brown, M. A. Hohensee, and H. Müller, *A clock directly linking time to a particle's mass*, Science **339**, 554–557 (2013).

\[73\] T. Frenzel, M. Kadic, and M. Wegener, *Three-dimensional mechanical metamaterials with a twist*, Science **358**, 1072–1074 (2017).

\[74\] R. S. Lakes, *Experimental microelasticity of two porous solids*, International Journal of Solids and Structures **22**, 55–63 (1986).

\[75\] P. J. Ackerman and I. I. Smalyukh, *Diversity of knot solitons in liquid crystals manifested by linking of preimages in torons and hopfions*, Physical Review X **7**, 011006 (2017).

\[76\] J.-S. B. Tai and I. I. Smalyukh, *Three-dimensional crystals of adaptive knots*, Science **365**, 1449–1453 (2019).

\[77\] R. Voinescu, J.-S. B. Tai, and I. I. Smalyukh, *Hopf solitons in helical and conical backgrounds of chiral magnetic solids*, Physical Review Letters **125**, 057201 (2020).

\[78\] F. Zheng et al., *Hopfion rings in a cubic chiral magnet*, Nature **623**, 718–723 (2023). To be verified.

\[79\] D. Bourilkov, *Hint for axial-vector contact interactions in the data on $e^+e^-\to e^+e^-(\gamma)$ at center-of-mass energies 192–208 GeV*, Physical Review D **64**, 071701 (2001). To be verified; used for the electron-size bound.

\[80\] S. J. Brodsky and S. D. Drell, *Anomalous magnetic moment and limits on fermion substructure*, Physical Review D **22**, 2236–2243 (1980).

\[81\] S. Navas et al. (Particle Data Group), *Review of Particle Physics*, Physical Review D **110**, 030001 (2024).

\[82\] S. Vagnozzi, S. Dhawan, M. Gerbino, K. Freese, A. Goobar, and O. Mena, *Constraints on the sum of the neutrino masses in dynamical dark energy models with $w(z)\geq-1$ are tighter than those obtained in $\Lambda$CDM*, Physical Review D **98**, 083501 (2018).

\[83\] D. Vollhardt and P. Wölfle, *The Superfluid Phases of Helium 3* (Taylor & Francis, London, 1990).

\[84\] M. Veltman, *Limit on mass differences in the Weinberg model*, Nuclear Physics B **123**, 89–99 (1977).

\[85\] CMS Collaboration, *Measurement of the Higgs boson width and evidence of its off-shell contributions to ZZ production*, Nature Physics **18**, 1329–1334 (2022). To be verified.

\[86\] R. Jackiw and C. Rebbi, *Solitons with fermion number 1/2*, Physical Review D **13**, 3398–3409 (1976).

\[87\] P. Janot and S. Jadach, *Improved Bhabha cross section at LEP and the number of light neutrino species*, Physics Letters B **803**, 135319 (2020). To be verified.

\[88\] M. Kobayashi and T. Maskawa, *CP-violation in the renormalizable theory of weak interaction*, Progress of Theoretical Physics **49**, 652–657 (1973).

\[89\] S. D. H. Hsu, *Entropy bounds and dark energy*, Physics Letters B **594**, 13–16 (2004).

\[90\] M. Li, *A model of holographic dark energy*, Physics Letters B **603**, 1–5 (2004).

\[91\] Planck Collaboration, *Planck 2018 results. VI. Cosmological parameters*, Astronomy & Astrophysics **641**, A6 (2020).

\[92\] G. Dvali, G. Gabadadze, and M. Porrati, *4D gravity on a brane in 5D Minkowski space*, Physics Letters B **485**, 208–214 (2000).

\[93\] R. Maartens and E. Majerotto, *Observational constraints on self-accelerating cosmology*, Physical Review D **74**, 023004 (2006).

\[94\] M. Chevallier and D. Polarski, *Accelerating universes with scaling dark matter*, International Journal of Modern Physics D **10**, 213–223 (2001).

\[95\] E. V. Linder, *Exploring the expansion history of the universe*, Physical Review Letters **90**, 091301 (2003).

\[96\] R. Fardon, A. E. Nelson, and N. Weiner, *Dark energy from mass varying neutrinos*, Journal of Cosmology and Astroparticle Physics **10**, 005 (2004).

\[97\] N. Afshordi, M. Zaldarriaga, and K. Kohri, *On the stability of dark energy with mass-varying neutrinos*, Physical Review D **72**, 065024 (2005).

\[98\] P. Touboul et al. (MICROSCOPE Collaboration), *MICROSCOPE mission: final results of the test of the equivalence principle*, Physical Review Letters **129**, 121102 (2022).

\[99\] S. Weinberg and E. Witten, *Limits on massless particles*, Physics Letters B **96**, 59–62 (1980).

\[100\] B. P. Abbott et al. (LIGO Scientific Collaboration, Virgo Collaboration, Fermi GBM, and INTEGRAL), *Gravitational waves and gamma-rays from a binary neutron star merger: GW170817 and GRB 170817A*, Astrophysical Journal Letters **848**, L13 (2017).

\[101\] J. F. Beacom and H. Yüksel, *Stringent constraint on galactic positron production*, Physical Review Letters **97**, 071102 (2006).

\[102\] N. Prantzos et al., *The 511 keV emission from positron annihilation in the Galaxy*, Reviews of Modern Physics **83**, 1001–1056 (2011).

\[103\] S. M. Carroll, G. B. Field, and R. Jackiw, *Limits on a Lorentz- and parity-violating modification of electrodynamics*, Physical Review D **41**, 1231–1240 (1990).

\[104\] D. Harari and P. Sikivie, *Effects of a Nambu–Goldstone boson on the polarization of radio galaxies and the cosmic microwave background*, Physics Letters B **289**, 67–72 (1992).

\[105\] T. W. B. Kibble, *Topology of cosmic domains and strings*, Journal of Physics A **9**, 1387–1398 (1976).

\[106\] Ya. B. Zel'dovich, I. Yu. Kobzarev, and L. B. Okun, *Cosmological consequences of a spontaneous breakdown of a discrete symmetry*, Soviet Physics JETP **40**, 1–5 (1975).
