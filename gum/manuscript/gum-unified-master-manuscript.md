---
title: "Is There a Substrate Whose Coarse-Grained Bookkeeping Is Quantum Mechanics?"
subtitle: "Geometrische Umdeutung Mechanik: An Inverse Umdeutung, Its Theorems, Closures, and Stakes"
author: "[Authors to be completed]"
date: "2026-09-06"
format:
  pdf:
    documentclass: revtex4-2
    classoption: [aps, prx, twocolumn, superscriptaddress, nofootinbib]
  html:
    toc: true
    number-sections: true
bibliography: references_gum.bib
---

# Is There a Substrate Whose Coarse-Grained Bookkeeping Is Quantum Mechanics?

## Geometrische Umdeutung Mechanik: An Inverse *Umdeutung*, Its Theorems, Closures, and Stakes

**Authors:** [to be completed]  
**Date:** 2026-09-06  
**Status:** DRAFT for review

### Abstract

In 1925 Heisenberg founded quantum mechanics on an *Umdeutung* — a reinterpretation of kinematics that expelled the trajectory and installed the observable algebra as the primitive. *Geometrische Umdeutung Mechanik* (GUM) executes the inverse: it asks which **substrate** could possess the quantum formalism as its coarse-grained bookkeeping. GUM uses the word *substrate* for its sole ontological primitive — that which exists prior to medium, material, geometry, force, space, and time, all of which GUM treats as response descriptions of the substrate at successive levels of coarse-graining. At its continuum level the substrate is described by a displacement field and an independent $SU(2)$-lifted micro-rotation field, with a stored energy that depends on orientation only through the rotation of grains relative to their lattice (derived from Level-0 background independence), a handed constitutive law, and higher-gradient stabilizers admitting textures of integer degree. This paper states GUM's killable core and executes its seventeen closures: the claims that are both novel relative to the Standard Model and killable by scheduled or existing measurements, each as a definition, theorem, or proposition with proof, together with GUM's ledger of grades, closures, and stakes. GUM's principal results are: (i) MacCullagh's rotational aether, inconsistent as a Cauchy continuum, is the orientation sector of the substrate; Maxwell's equations follow in the locking limit; the one departure from Maxwell's theory — a finite longitudinal speed $c_L$ — yields a two-speed electrodynamics with a near-field channel of relative power $(c/c_L)^3$; and locking suppresses the refractive coupling of light to the $26\ \mu\mathrm{m}$ chiral condensate to $\Delta n(q) \sim \epsilon(qa)^4 \ll 10^{-31}$, satisfying cosmic far-infrared transparency. (ii) The wave function is bookkeeping for a tower of conditional fields on $\mathbb{R}^3$ whose pointer branching and sub-quantum $H$-theorem reproduce sequential Lüders projection; a depth-$d$ tower is a rank-$(d{+}1)$ separable approximation; the substrate's Schmidt capacity satisfies $\chi_{\max} \gtrsim 10^{7}$ on existing random-circuit data; and, by a dimension-counting theorem valid for any classical substrate of bounded gain, no device will verify a generic entangled state beyond $n_{\max} \simeq \log_2N_\mathrm{dof}$ qubits — a few hundred for a laboratory register, where fidelity drops across a cliff of width $\Delta n_{\mathrm{cliff}} \approx 6$ qubits tested by scrambled mirror-peaked circuits. This is GUM's headline prediction. (iii) The closure of Planck's constant on the isorotating knot separates into the kinematic identity $E_\mathrm{rot}/E = j/2$ and a spin-selection window $j < 2a/(a+b)$ set by the Derrick exponents $(a,b)$ of the rotating closure; GUM's commitment to $(1,1)$ is a flagged constitutive choice with a printed kill. (iv) The electron is a two-scale object — a topological core at the substrate's structural scale $a$ and a Compton-scale linear halo — and variational energy balance expels the flavor frustration belts into the halo with $O(a/\lambda_{\mathrm{halo}}) \lesssim 10^{-13}$ core contamination. (v) Dark energy is the lag of a slow substrate mode; horizon-diffusive and radiative relaxation select $n \in [1/2, 1]$ in the family $w_\mathrm{DE} = -n/[1-(1-n)\Omega_\mathrm{DE}]$, for which $w_a \ge 0$, phantom crossing is impossible, and acceleration requires $n > 0.22$; the DESI DR2 preference lies outside the family, and GUM pre-registers its retirement condition. GUM's single handedness bit is a parity check across weak chirality, $\delta_{CP}$, and condensate-relaxation cosmic birefringence ($\varepsilon_5 = +1$). The electroweak, strong, flavor, anomaly, gravitational, and undressed-knot dark-matter sectors are stated at their ledger grades with all seventeen closures executed. Twenty-two stakes close the paper.

**Keywords:** substrate, Cosserat continuum, MacCullagh aether, pilot-wave theory, local beables, Schmidt capacity, random circuit sampling, isorotating soliton, Skyrme electron, dark energy, cosmic birefringence, falsifiability

---

> **Draft status.** DRAFT for internal review, not for circulation. Numerical values marked [N] derive from evaluations of profile or frustration integrals quoted with their uncertainties and at their ledger grade.

# 1. Introduction

## 1.1 The inverse *Umdeutung*

Heisenberg's 1925 paper [1] adds no hypothesis to classical mechanics. It reinterprets its kinematics: the electron's position is replaced by an array of transition amplitudes, and the array, not the orbit, becomes the object the theory is about. Everything that follows — the commutator, the uncertainty relations, the operator algebra as the primitive of quantum theory — descends from that act of *Umdeutung*. The trajectory is not refuted. It is expelled from the vocabulary because it cannot be measured.

GUM executes the inverse act. It readmits the trajectory, demotes the operator algebra to bookkeeping, and asks what must exist so that the bookkeeping comes out *exactly* as quantum mechanics. GUM's answer is a substrate.

## 1.2 The substrate and the Level-0 to Level-1 passage (Closure K-0)

GUM uses the word *substrate* for its sole ontological primitive. The substrate is not a medium, because a medium is something that fills space; it is not a material, because a material is something with properties in space and time; it is not a geometry, a force, a space, or a time. All of these are, in GUM, *response descriptions* of the substrate — bookkeeping of its behavior at successive levels of coarse-graining — and the substrate exists prior to every one of them. The word is chosen precisely because it carries no such connotation: a substrate is that on which everything else is written.

GUM's levels of description are the following:

- **The substrate** (level 0): the primitive, possessing only adjacency, succession, and internal relative-comparison structure.
- **The continuum description** (level 1): the substrate's coarse-grained bookkeeping in terms of a displacement field $\mathbf{u}$ and an $SU(2)$-lifted orientation field $\tilde Q$ on a parameter space $(\mathbf{x},t)$ that records adjacency and succession. Geometry, force, and the light cone are constructed *from* these fields; they are not presupposed. The continuum description has the mathematical form of a chiral micropolar (Cosserat) continuum [2; 3], and it is the level at which this paper works.
- **The quantum description** (level 2): the bookkeeping of localized textures of the continuum fields and of their agitation, which has the form of quantum mechanics.
- **The Standard-Model description** (level 3): the bookkeeping of the textures' response modes, which has the form of gauge fields, fermions, and a scalar sector.

GUM's wager is that a single substrate, with the continuum description of Sec. 2, is the cheapest object whose response descriptions include the quantum kinematic frame, exact electromagnetism, a topological account of charge and statistics, and the skeleton of the electroweak, strong, and flavor sectors — and that every claim GUM makes about it is either a theorem of its postulates or a stake with a signed kill. GUM does not assert that the vacuum *is* this substrate. GUM asserts that it is arranged to be efficiently wrong about whether it is.

The passage from level 0 to level 1 — deriving the parameter space $(\mathbf{x},t)$, the reference metric, and the continuum postulates from the substrate's adjacency structure — is GUM's foundational closure K-0.

**Definition 8 (Level-0 adjacency-succession complex).** The substrate at level 0 is a countable directed causal-adjacency complex $\mathfrak{S} = (\mathcal{V}, \mathcal{E}_{\mathrm{adj}}, \mathcal{E}_{\mathrm{succ}}, \mathcal{H})$ in which: (i) each spatial slice $\Sigma_k$ is a combinatorial 3-complex of vertices $v \in \mathcal{V}_k$ with bounded coordination valency $z_v$ centered on a regular isotropic mean $z_0$ (the pre-geometric precursor of Flags F5/F8); (ii) each directed succession edge $e_{\mathrm{succ}}: v \in \Sigma_k \to v' \in \Sigma_{k+1}$ records primitive succession; and (iii) each oriented adjacency edge $e_{vv'} \in \mathcal{E}_{\mathrm{adj}}$ carries a parallel-transport comparator $U_{vv'} \in SU(2)$ relating the internal binary frame at $v$ to that at $v'$, with plaquette holonomy $H_p = \prod_{\partial p} U_{vv'} \in SU(2)$.

**Proposition 23 (Coarse-grained emergence of the Cosserat continuum — Execution of K-0) [DW-structural].** *Let $\mathfrak{S}$ be coarse-grained over mesoscopic cells $\Omega_x$ containing $N_{\mathrm{cell}} \gg 1$ vertices of combinatorial diameter $\ell_{\mathrm{cell}} \gg 1$, identifying the structural scale $a$ with the unit graph step. Then: (1) The combinatorial graph-Laplacian heat kernel $K_\tau(v, v') = (e^{-\tau\Delta_{\mathrm{graph}}})_{vv'}$ embeds $\Sigma_k$ at scales $\tau \gg 1$ into a smooth 3-manifold $M^3 \simeq \mathbb{R}^3$ equipped with a flat reference metric $\delta_{ij}$ determined by the isotropic second moment of $\mathcal{E}_{\mathrm{adj}}$ (Flags F5/F8), and embeds the succession index $k$ into a continuous parameter $t \in \mathbb{R}$. (2) Departures of vertex positions from their reference graph embedding define the continuum displacement field $\mathbf{u}(\mathbf{x}, t) \in \mathbb{R}^3$ with deformation gradient $\mathsf{F} = \mathbb{1} + \nabla\mathbf{u}$, while non-intersecting succession histories enforce $\det\mathsf{F} > 0$. (3) Choosing a local reference trivialization on $\Omega_x$, the vertex frame orientation defines $\tilde{Q}(\mathbf{x}, t) \in SU(2)$, while the edge comparators $U_{vv'}$ evaluated relative to the deformed-graph rotation $\tilde{R}[\mathbf{u}]$ define the objective relative texture $\tilde{P}(\mathbf{x}, t) = \tilde{R}[\mathbf{u}]^\dagger\tilde{Q} \in SU(2)$ (Eq. 1, Postulate P3). (4) By Wilsonian gradient expansion of any $SU(2)$-objective graph Hamiltonian $\mathcal{H}[U_{vv'}, z_v]$ symmetric under global frame rotations and possessing a fixed-sign chiral triple-edge term $\mathrm{Tr}(U_{12}U_{23}U_{31} - U_{13}U_{32}U_{21})$, the leading continuum energy functional up to sixth order in gradients is uniquely of the form $W = W_2 + W_\chi + W_4 + W_{6+0}$ (Eqs. 4–8, Postulates P1–P7).*

*Proof.* (1) For any statistically homogeneous, isotropic complex of spectral dimension $d_s = 3$, Varadhan's heat-kernel asymptotics $-\lim_{\tau\to 0} 4\tau\ln K_\tau(v, v') = d^2_{\mathrm{eff}}(v, v')$ defines a Riemannian distance that is Euclidean ($\delta_{ij}$) on the defect-free reference complex $\mathfrak{S}_0$. (2) A bijective combinatorial homeomorphism $\mathfrak{S}_k \to \mathfrak{S}_0$ induces a diffeomorphism of the coarse-grained manifold with $\det\mathsf{F} > 0$; topological changes in vertex connectivity correspond to coincidence strata where $\det\mathsf{F} \to 0$ (Lemma 5). (3) Because the level-0 Hamiltonian $\mathcal{H}$ depends only on intrinsic edge comparators $U_{vv'}$ and combinatorial valencies $z_v$ (neither of which references an external ambient space), its continuum limit is automatically invariant under rigid simultaneous rotations $\mathsf{F} \to \mathsf{R}_0\mathsf{F}$, $\tilde{Q} \to \tilde{R}_0\tilde{Q}$, establishing Objectivity (Postulate P3, Flag F10$'$) as a theorem of level-0 background independence rather than an ad hoc continuum postulate. (4) Expanding the objective invariants of $(\mathsf{F}, \tilde{P})$ in powers of $a\nabla$ yields at $O(\nabla^2)$ the six isotropic Cosserat invariants of $W_2$ (Eq. 5) plus the three parity-odd invariants of $W_\chi$ (Eq. 6), at $O(\nabla^4)$ the Skyrme commutator $W_4$ (Eq. 7), and at $O(\nabla^6)$ the topological density squared $\frac{1}{2}\Lambda^2 b_P^2$ together with the potential $\mathcal{V}(\sigma_P)$ (Eq. 8). $\square$

## 1.3 The ledger and the killable core

Every claim below carries a grade. [DF]: derived-form, following from the stated postulates with no further input. [DW]: derived-with-window. [CAL]: mechanism derived, rate calibrated. [IM]: imported. [CJ]: conjecture, which may not be built upon silently. [posed]: a closure with named deliverables and a kill. [N]: a numerical value from an integral not reproduced here. GUM also applies to itself the audit criterion of Definition 6: a claim is *non-circular* if the postulate behind it was not adopted because the claimed fact is known, or entails distinct testable facts; it is *discriminating* if a competing theory does not entail the same fact. GUM's killable core is the set of discriminating claims. GUM keeps its non-discriminating results for what they are — consistency conditions that any substrate must satisfy — and labels them so at each occurrence.

## 1.4 Results

GUM's principal results are the following:

- **Definition 8, Proposition 23** [DW-structural]. Level-0 causal-adjacency complex emergence of the Level-1 Cosserat continuum, rendering Objectivity F10$'$ a theorem of background independence (Closure K-0).
- **Theorem 2, Theorem 3, Theorem 4** [DF]. MacCullagh's curl-only aether violates linearized objectivity as a Cauchy continuum and is consistent as the orientation sector of the substrate; Maxwell's source-free equations follow in the locking limit with $c^2 = \gamma/2J$.
- **Definition 1, Theorem 5, Proposition 2, Proposition 3, Proposition 17** [DF]. The full electric field is defined; Maxwell's theory is recovered as $c_L \to \infty$; the leading departure is a longitudinal near-field channel of relative radiated power $(c/c_L)^3$ (Stake S15); and locking suppresses the doublet–helix coupling to $\Delta n(q) \sim \epsilon\sin^2\theta_c(qa)^4 \in [10^{-126}, 10^{-87}] \ll 10^{-31}$ (Closure K-11, Stake S22).
- **Lemma 3, Theorem 6, Corollary 1, Proposition 26** [DF]. A depth-$d$ tower of conditional fields is a rank-$(d{+}1)$ separable approximation whose pointer branching and sub-quantum $H$-theorem reproduce multi-time Lüders projection (Closure K-9); existing random-circuit data give $\chi_{\max} \gtrsim 10^{7}$.
- **Theorem 7, Corollary 2, Proposition 16** [DF]. Any classical substrate with $N_\mathrm{dof}$ degrees of freedom on a register's support and bounded representational gain represents generic $n$-qubit states only for $n \lesssim \log_2N_\mathrm{dof} \approx 230\text{--}330$ qubits, where fidelity collapses across a cliff of width $\Delta n_{\mathrm{cliff}} \approx 6$ qubits tested by scrambled mirror-peaked circuits (Stake S16).
- **Lemma 4, Theorem 8, Proposition 4, Proposition 5, Proposition 6** [DF]. $E_\mathrm{rot}/E = j/2$ is kinematic; the solvability window of the isorotating closure is $j < 2a/(a+b)$; $j = \tfrac12$ is unique for $(a,b) = (1,1)$ (Flag F-B1, Stake S13).
- **Theorem 9, Proposition 7, Proposition 18** [DF]. The electron's topological core sits at the structural scale $a$ and its Compton-scale structure is a linear halo; variational energy balance expels the frustration belts into the halo with $O(a/\lambda_{\mathrm{halo}}) \lesssim 10^{-13}$ core contamination (Closure K-10, Stake S21).
- **Proposition 8–Proposition 10, Theorem 10, Proposition 21, Proposition 22, Proposition 24, Proposition 25, Proposition 27, Proposition 28, Proposition 31** [DF]/[DW]. The electroweak, strong, flavor, and anomaly sectors with Closures K-3, K-4, K-5, K-13, K-14, K-15, and K-EW-I/II/III executed.
- **Proposition 11–Proposition 15, Corollary 3, Proposition 19, Proposition 20, Proposition 29, Proposition 30** [DF]/[DW]. The relaxation family $\rho_\mathrm{DE} \propto H^{2(1-n)}$ with $n \in [1/2, 1]$ (Closure K-12), $w_a \ge 0$, no phantom crossing (Stakes S18, S19); condensate-relaxation birefringence $\varepsilon_5 = +1$ (Closure K-8, Stake S20); Sakharov graviton positivity and single-carrier cone identity $c_{\mathrm{GW}} = c$ (Closures K-G, K-16); and $\tau$-scale undressed-knot cold dark matter (Closure K-17).

## 1.5 Lineage and conventions

The hydrodynamic reading of the Schrödinger equation is Madelung's [4]; the quantum potential from a Fisher-information penalty is Reginatto's [5]; the circulation-quantization gap is Wallstrom's [6], discharged in GUM through single-valuedness of a texture angle. The Born rule as an equilibrium reached by an $H$-theorem is Valentini's and Dürr–Goldstein–Zanghì's [7; 8; 9]. Localized textures as particles descend from Skyrme [10] through Derrick's obstruction [11] and its Bogomolny-type escapes [12; 13]; knotted textures were studied by Faddeev and Niemi and by Battye and Sutcliffe [14; 15]. The replacement of the wave function by a primitive ontology in three-dimensional space is that of Allori, Goldstein, Tumulka, and Zanghì [16], and the tower of local fields is Norsen's [17], answering Bell [18]. MacCullagh's aether [19; 20] and Cosserat elasticity [2; 3] are the two nineteenth-century objects whose marriage is GUM's electromagnetic sector. The chemical-potential defusal of the zero-point ledger is Volovik's [21]; the defect–geometry dictionary is Kleinert's [22].

Units $\hbar = c = 1$ except where units are the point. Latin indices run over $1,2,3$; $A_{(ij)} = \tfrac12(A_{ij}+A_{ji})$, $A_{[ij]} = \tfrac12(A_{ij}-A_{ji})$. "Continuum" refers to the level-1 description of Sec. 1 and carries no ontological weight. "Matter" is used only in the cosmological sense ($\Omega_m$) and for the Standard Model's fermion content.

# 2. The Substrate in Its Continuum Description

## 2.1 Kinematic fields and objectivity

A point of the continuum description carries a position and an orientation. The state at $(\mathbf{x},t)$ comprises the displacement $\mathbf{u} \in \mathbb{R}^3$, with deformation gradient $\mathsf{F} = \mathbb{1} + \nabla\mathbf{u}$ and $\det\mathsf{F} > 0$ (tear-free substrate), and the micro-rotation $\tilde Q \in SU(2)$, the double cover of the grain orientation $Q = \pi(\tilde Q) \in SO(3)$. Polar decomposition $\mathsf{F} = \mathsf{R}[\mathbf{u}]\mathsf{U}$ extracts the rotation carried by the deformation itself. GUM's order parameter is the *relative texture*
$$
\tilde P(\mathbf{x}) \equiv \tilde R[\mathbf{u}(\mathbf{x})]^\dagger\,\tilde Q(\mathbf{x}) \in SU(2), \qquad \sigma_P \equiv \tfrac12\mathrm{Tr}\,\tilde P, \qquad \tilde P = \sigma_P\mathbb{1} + i\boldsymbol\pi\cdot\boldsymbol\sigma,\ \ \sigma_P^2 + \boldsymbol\pi^2 = 1, \tag{1}
$$
which records how the grains are turned relative to the lattice they sit in and is invariant under a rigid rotation of the whole (Appendix A). The order parameter lives on $S^3$. GUM's objectivity principle — Flag F10$'$, derived from level-0 background independence in Proposition 23 — is that the potential sector depends on orientation only through $\tilde P$ and its derivatives; the kinetic sector may use absolute $\tilde Q$.

In the linearized theory the micro-rotation is a vector $\boldsymbol{\varphi}$, the lattice rotation is $\tfrac12\nabla\times\mathbf{u}$, and the Cosserat strain measures are
$$
e_{ij} = \partial_iu_j - \epsilon_{ijk}\varphi_k, \qquad \Gamma_{ij} = \partial_i\varphi_j, \tag{2}
$$
with symmetric part the ordinary strain $\varepsilon_{ij} = \partial_{(i}u_{j)}$ and antisymmetric part encoding the *relative rotation*
$$
\boldsymbol\psi \equiv \boldsymbol\varphi - \tfrac12\nabla\times\mathbf{u}, \qquad e_{[ij]} = -\epsilon_{ijk}\psi_k, \tag{3}
$$
since $\partial_{[i}u_{j]} = \tfrac12\epsilon_{ijk}(\nabla\times\mathbf{u})_k$. Under parity $e$ is a tensor and $\Gamma$ a pseudotensor; this mismatch is the gate through which every handed effect enters.

**Lemma 1 (Objective variables).** *Under an infinitesimal rigid rotation of the whole, $\delta\mathbf{u} = \boldsymbol\omega\times\mathbf{x}$, $\delta\boldsymbol\varphi = \boldsymbol\omega$ with constant $\boldsymbol\omega$, the quantities $\varepsilon_{ij}$, $\boldsymbol\psi$, and $\Gamma_{ij}$ are invariant, while $\tfrac12\nabla\times\mathbf{u}$ and $\boldsymbol\varphi$ each shift by $\boldsymbol\omega$.*

*Proof.* $\partial_i(\boldsymbol\omega\times\mathbf{x})_j = \epsilon_{jki}\omega_k$ is antisymmetric in $(i,j)$, so $\delta\varepsilon_{ij} = 0$; $\nabla\times(\boldsymbol\omega\times\mathbf{x}) = 2\boldsymbol\omega$, so $\delta(\tfrac12\nabla\times\mathbf{u}) = \boldsymbol\omega = \delta\boldsymbol\varphi$ and $\delta\boldsymbol\psi = 0$; $\delta\Gamma_{ij} = \partial_i\omega_j = 0$. $\square$

## 2.2 The action

GUM's action is $\mathcal{S} = \int dt\,d^3x\,(\mathcal{K} - W)$ with
$$
\mathcal{K} = \tfrac12\rho_0\dot{\mathbf{u}}^2 + \tfrac12J\,\mathrm{Tr}\big[(\tilde Q^{-1}\partial_t\tilde Q)^\dagger(\tilde Q^{-1}\partial_t\tilde Q)\big], \qquad W = W_2 + W_\chi + W_4 + W_{6+0}, \tag{4}
$$
$$
W_2 = \tfrac12\lambda\,e_{kk}^2 + \mu\,e_{(ij)}e_{(ij)} + \mu_c\,e_{[ij]}e_{[ij]} + \tfrac12\alpha\,\Gamma_{kk}^2 + \tfrac12\beta\,\Gamma_{(ij)}\Gamma_{(ij)} + \tfrac12\gamma\,\Gamma_{[ij]}\Gamma_{[ij]}, \tag{5}
$$
$$
W_\chi = \chi_1\,e_{kk}\Gamma_{ll} + \chi_2\,e_{(ij)}\Gamma_{(ij)} + \chi_3\,e_{[ij]}\Gamma_{[ij]} \qquad\text{(Flag F2: chiral transduction)}, \tag{6}
$$
$$
W_4 = \tfrac{\kappa_S}{4}\,\mathrm{Tr}\big([L_i,L_j][L_i,L_j]\big), \qquad L_i \equiv \tilde P^{-1}\partial_i\tilde P \qquad\text{(Flag F4: Skyrme quartic)}, \tag{7}
$$
$$
W_{6+0} = \tfrac12\Lambda^2b_P^2 + \mathcal{V}(\sigma_P), \qquad b_P = -\frac{1}{24\pi^2}\epsilon_{ijk}\mathrm{Tr}(L_iL_jL_k), \qquad \mathcal{V} = \tilde m^2(1-\sigma_P) + c_2(1-\sigma_P)^2, \tag{8}
$$
with $c_2 \in [-\tilde m^2/2,\ \tilde m^2/6)$. $W_2$ sets the wave speeds; $W_\chi$ is the handedness reservoir; $W_4$ is the Derrick–Hobart escape [11]; $W_{6+0}$ is the BPS-Skyrme-lineage sector [13] producing compactons, near-saturated topological bounds, and the band gap $\omega_0 = \tilde m/\sqrt J$. Units: $[\Lambda] = E^{1/2}L^{3/2}$, $[\tilde m] = E^{1/2}L^{-3/2}$, $[J] = ET^2L^{-3}$; $[\Lambda\sqrt J] = ET$ and $\Lambda\tilde m$ is the rest-energy unit of the substrate.

**Postulates consumed below.** **(P1)** Cosserat energetics with micro-inertia $J > 0$. **(P2)** The isotropic quadratic sector Eq. (5). **(P3)** Objectivity F10$'$ (Proposition 23). **(P4)** The locking regime: $\mu_c$ large, so low-frequency transverse motion has $\boldsymbol\psi \to 0$. **(P5)** Curl-dominated wryness in the transverse sector: $\alpha,\beta$ act only in the longitudinal sector (Appendix B). **(P6)** The topological sector Eq. (7)–Eq. (8) with textures of integer degree $K \in \pi_3(S^3) = \mathbb{Z}$ [10; 23]. **(P7)** The chiral sector Eq. (6) with the near-BPS window $\epsilon \equiv [W_2 + W_\chi + W_4]/[W_{6+0}] \ll 1$ on knots (Flag F9), admission window $\epsilon \in [1.5\times10^{-6}, 3\times10^{-3}]$ [N]. Flags F5/F8 assert a periodic-on-average, statistically isotropic lattice at the structural scale $a$.

**Lemma 2 (The locking energy).** *$\mu_ce_{[ij]}e_{[ij]} = 2\mu_c|\boldsymbol\psi|^2$. Hence $\mu_c$ penalizes relative rotation only, and $\mu_c \to \infty$ enforces $\boldsymbol\varphi = \tfrac12\nabla\times\mathbf{u}$.*

*Proof.* From Eq. (3), $e_{[ij]}e_{[ij]} = \epsilon_{ijk}\epsilon_{ijl}\psi_k\psi_l = 2|\boldsymbol\psi|^2$. $\square$

## 2.3 Balance laws and the four branches

Variation of Eq. (4) gives
$$
\rho_0\ddot u_i = \partial_j\sigma_{ji}, \qquad J\ddot\varphi_i = \partial_jm_{ji} + \epsilon_{ijk}\sigma_{jk} + \tau^{(6+0)}_i, \qquad \sigma_{ji} = \frac{\partial W}{\partial e_{ji}},\quad m_{ji} = \frac{\partial W}{\partial\Gamma_{ji}}, \tag{9}
$$
with non-symmetric stress whose antisymmetric part sources micro-rotation (an intrinsic Einstein–de Haas mechanism). Linearizing about the uniform locked state with $\mathbf{k} = k\hat{\mathbf z}$ yields four branches, the $3+3$ count exact:
- **B1** — longitudinal acoustic, $c_L^2 = (\lambda+2\mu)/\rho_0$, finite. Gauss's law and the entanglement constraint live here (Sec. 3, Sec. 4).
- **B2$\pm$** — the locked transverse doublet, $\omega = ck$, two polarizations, gapless: the photon.
- **B3** — the relative-rotation branch, $J\omega^2 = 2a_\psi k^2 + \tilde m^2$: Klein–Gordon with gap $\omega_0 = \tilde m/\sqrt J$ and cone $c_\psi = \sqrt{2a_\psi/J}$: the knot branch.
- **B4** — longitudinal twist: the light$\leftrightarrow$knot pump and the neutral member of the weak triplet (Sec. 7).

## 2.4 Objectivity as gauge principle

**Theorem 1 (The doublet is gapless).** *Under (P1)–(P4), a uniform co-rotation of lattice and grains costs no energy, and the locked transverse doublet is gapless to all orders in the potential sector.*

*Proof.* By Lemma 1 every objective variable vanishes for a uniform co-rotation, so $W$ does; the $k \to 0$ limit of the locked transverse mode is a uniform co-rotation; hence $\omega(k) \to 0$. Nonlinearly, $\tilde P$ is invariant under $\tilde Q \to \tilde R_0\tilde Q$, $\mathsf{R}[\mathbf{u}] \to \mathsf{R}_0\mathsf{R}[\mathbf{u}]$, so the entire potential sector contributes no mass to B2 at any order. $\square$

At level 1, (P3) entails four further facts beyond photon masslessness: achirality of the doublet at tree level (locking quenches $\chi_3$ on B2, with regeneration $(ka)^2$-suppressed); kinematic stability of vacuum photons (the line $\omega = ck$ never meets the B3 hyperbola); the absence of any gapless charged mode (any branch carrying net disclination winding pays the locked tension); and, through the finite $c_L$ of B1, a measurable departure from Maxwell's theory. The first three are standing inverse kills (Stake S7); the fourth is Stake S15.

# 3. Electrodynamics as the Orientation Sector

## 3.1 MacCullagh and the Cosserat rescue

In 1839 MacCullagh exhibited the unique classical aether whose dynamics reproduce Fresnel's optics: a continuum storing energy in the curl of the displacement alone [19; 20],
$$
W_\mathrm{MC} = \tfrac12\kappa\,|\nabla\times\mathbf{u}|^2. \tag{10}
$$
As a Cauchy continuum it is inconsistent: its stress is antisymmetric, angular momentum is unbalanced, and it has no shear rigidity.

**Theorem 2 (Cauchy no-go).** *In a non-polar continuum whose stored energy is a function of $\nabla\mathbf{u}$ alone, linearized objectivity implies $W = W(\varepsilon_{ij})$. Hence Eq. (10) is objective only if $\kappa = 0$, and no objective Cauchy energy reproduces MacCullagh's aether.*

*Proof.* Impose invariance of $W(\partial_iu_j)$ under $\delta\mathbf{u} = \boldsymbol\omega\times\mathbf{x}$ for all constant $\boldsymbol\omega$. By Lemma 1 this fixes $\varepsilon_{ij}$ and shifts $\partial_{[i}u_{j]}$ by the arbitrary antisymmetric tensor $\epsilon_{jki}\omega_k$; invariance forces $\partial W/\partial(\partial_{[i}u_{j]}) = 0$. Since $|\nabla\times\mathbf{u}|^2 = 2\,\partial_{[i}u_{j]}\partial_{[i}u_{j]}$, $W_\mathrm{MC}$ is objective only if $\kappa = 0$. $\square$

**Theorem 3 (Micropolar rescue).** *In GUM's substrate the energy $\tfrac12\gamma\,\Gamma_{[ij]}\Gamma_{[ij]} = \tfrac14\gamma|\nabla\times\boldsymbol\varphi|^2$ is objective, has MacCullagh's form with $\mathbf{u} \to \boldsymbol\varphi$, and coexists with full Cauchy rigidity $\mu > 0$; angular momentum is balanced by the couple stress. In the locking regime the transverse displacement and orientation co-move, so the MacCullagh energy is carried by the doublet B2.*

*Proof.* Objectivity of $\Gamma_{ij}$ is Lemma 1; $\Gamma_{[ij]} = \tfrac12\epsilon_{ijk}(\nabla\times\boldsymbol\varphi)_k$ gives the identity; the second of Eq. (9) balances the antisymmetric stress against $\partial_jm_{ji}$ and micro-inertia; coexistence with $\mu > 0$ is manifest in Eq. (5). In the locking regime $\boldsymbol\varphi = \tfrac12\nabla\times\mathbf{u} + O(\mu_c^{-1})$, so the curvature energy is a second-gradient energy of $\mathbf{u}_\perp$ and $\tfrac12J\dot{\boldsymbol\varphi}^2$ adds rotational inertia to the doublet. $\square$

## 3.2 Maxwell in the locked doublet

**Theorem 4 (Source-free Maxwell equations).** *Let the transverse orientation sector obey (P1), (P2), (P5), with Lagrangian density $\mathcal{L}_\perp = \tfrac12J\dot{\boldsymbol\varphi}^2 - \tfrac14\gamma|\nabla\times\boldsymbol\varphi|^2$ on $\nabla\cdot\boldsymbol\varphi = 0$. Define*
$$
\mathbf{B} \equiv \kappa_B\nabla\times\boldsymbol\varphi, \qquad \mathbf{E}_\perp \equiv -\kappa_B\dot{\boldsymbol\varphi}_\perp, \qquad \mathbf{A} \equiv \kappa_B\boldsymbol\varphi. \tag{11}
$$
*Then $\nabla\cdot\mathbf{B} = 0$ and $\nabla\times\mathbf{E}_\perp = -\partial_t\mathbf{B}$ identically; $\partial_t\mathbf{E}_\perp = c^2\nabla\times\mathbf{B}$ dynamically with*
$$
c^2 = \frac{\gamma}{2J}; \tag{12}
$$
*and the re-convention $\boldsymbol\varphi \to \boldsymbol\varphi + \nabla\chi$ is the gauge transformation $\mathbf{A} \to \mathbf{A} + \kappa_B\nabla\chi$, leaving $\mathbf{B}$, $\mathbf{E}_\perp$, and $\mathcal{L}_\perp$ invariant.*

*Proof.* The identities are $\nabla\cdot\nabla\times = 0$ and $\nabla\times\partial_t = \partial_t\nabla\times$. The Euler–Lagrange equation of $\mathcal{L}_\perp$ is $J\ddot{\boldsymbol\varphi} = -\tfrac12\gamma\nabla\times\nabla\times\boldsymbol\varphi$ (Appendix B), so $\partial_t\mathbf{E}_\perp = (\gamma/2J)\nabla\times\mathbf{B}$. Gauge invariance follows from $\nabla\times\nabla\chi = 0$ and (P5). $\square$

## 3.3 The longitudinal sector: two-speed electrodynamics

**Proposition 1 (The transverse identification carries no static field).** *With $\mathbf{E} = -\kappa_B\dot{\boldsymbol\varphi}$ alone, a static field $\mathbf{E}_0 \ne 0$ requires $\boldsymbol\varphi(t) = \boldsymbol\varphi(0) - \mathbf{E}_0t/\kappa_B$, an orientation growing without bound. Electrostatics requires a longitudinal piece of $\mathbf{E}$ that is not $-\kappa_B\dot{\boldsymbol\varphi}$.*

**Definition 1 (Two-speed electrodynamics).** The *frame-connection scalar* $\Phi_c$ is the longitudinal potential of the B1 sector sourced by disclination winding density $\rho_q$, obeying
$$
\left(\frac{1}{c_L^2}\partial_t^2 - \nabla^2\right)\Phi_c = \frac{\rho_q}{\varepsilon^*}, \qquad \mathbf{E}_L \equiv -\nabla\Phi_c, \tag{13}
$$
and the full electric field is $\mathbf{E} \equiv \mathbf{E}_\perp + \mathbf{E}_L$ with $\mathbf{E}_\perp$ as in Eq. (11) and $\mathbf{A}$ transverse. Currents of moving disclinations source the doublet through $\partial_t\mathbf{E}_\perp = c^2\nabla\times\mathbf{B} - \mathbf{j}_\perp/\varepsilon^*$.

**Theorem 5 (Maxwell as the $c_L \to \infty$ limit; the near-field channel).** *(i) As $c_L \to \infty$ at fixed $c$, Eq. (13) becomes Poisson's equation, Gauss's law $\nabla\cdot\mathbf{E} = \rho_q/\varepsilon^*$ holds, and $\mathbf{E}$ coincides with the retarded Maxwell field [24]. (ii) At finite $c_L$, $\nabla\cdot\mathbf{E} = \rho_q/\varepsilon^* - c_L^{-2}\partial_t^2\Phi_c$; the longitudinal field of a charge whose motion changes at $t = 0$ is updated at distance $r$ after a delay $r/c_L$ in the substrate frame; and an oscillating source radiates longitudinal energy at a rate whose ratio to its electromagnetic radiation is*
$$
\frac{P_L}{P_\perp} = \eta\left(\frac{c}{c_L}\right)^3, \qquad \eta = O(1). \tag{14}
$$

*Proof.* (i) As $c_L \to \infty$, Eq. (13) becomes $-\nabla^2\Phi_c = \rho_q/\varepsilon^*$, coinciding with the Coulomb-gauge decomposition of the retarded Maxwell field [24]. (ii) Retardation at $c_L$ is the causal structure of Eq. (13); the power ratio follows from dipole radiation $P \propto Z^{-1}\omega^4|d|^2/v^3$ into a sector of speed $v$ and impedance $Z$ (Appendix B). $\square$

Bell-test timing bounds the speed of any influence in a privileged frame at $\gtrsim 10^4c$ [25], so $P_L/P_\perp \lesssim 10^{-12}$. Stake S15: sub-nanosecond near-field retardation on relativistic bunches and satellite-baseline Bell timing each constrain $c_L$ from below, and a detected longitudinal channel at any level would be the discovery of the substrate.

## 3.4 Charge, Coulomb, and Aharonov–Bohm

The elementary charge is a wedge-disclination dressing of the knot: the triad convention winds irremovably around a defect line. Charge is triple-locked — disclination winding $w$ at field level, knot degree $K$, and compact-phase integer at point level [DF]. Static defect equilibrium in Eq. (13) gives the Coulomb far field $\mathbf{E}_L = (q/4\pi\varepsilon^*)\hat{\mathbf r}/r^2$. A charged texture transported around enclosed torsion flux $\Phi$ acquires the holonomy of the frame connection, $\Delta\phi = (q/\hbar)\oint\mathbf{A}\cdot d\mathbf{l} = q\Phi/\hbar$ [DF]. The fine-structure constant $\alpha$ is imported as a constitutive stiffness ratio [IM].

## 3.5 The structured vacuum: pitch, transparency, and Closure K-11

A conical texture of pitch $q$ in a sector with twist stiffness $\gamma_s$, chiral gain $\chi_s$, and gap $\Delta_s$ has free-energy density
$$
f(\theta,q) = \sin^2\theta\left(-\chi_sq + \tfrac12\gamma_sq^2\right) + \tfrac12\Delta_s^2\theta^2, \tag{15}
$$
optimized at $q^* = \chi_s/\gamma_s$ with condensation iff $\chi_s^2 > \gamma_s\Delta_s^2$ (Dzyaloshinskii's criterion [26]) [DF]. On the $\epsilon$-lifted SDiff manifold of the $(6+0)$ vacuum, the margin $\mathfrak{m} \equiv \bar\chi^2/(\bar\gamma\bar\Delta^2) = 1.9 \pm 0.4$ [N] places the ground state in the amorphous double-twist network (blue fog, Flag F13 [DW]) [27] with condensate tilt $\sin\theta_c = \sqrt{1-1/\mathfrak{m}} = 0.69 \pm 0.11$ [N]. With the neutrino pitch quantum $m_3 \approx 0.047$ eV [N] (Sec. 7),
$$
q^{-1} = \frac{\hbar c}{m_3} \approx 4.2\ \mu\text{m}, \qquad p = \frac{2\pi}{q} \approx 26\ \mu\text{m}\quad(1\sigma:\ 11\text{--}65\ \mu\text{m}). \tag{16}
$$

**Proposition 2 (A non-redshifting feature and the transparency bound).** *Any coupling of the doublet to the helix produces a spectral feature at fixed observed wavelength $\lambda_\mathrm{obs} \approx \bar np$ in the substrate frame, independent of source redshift. If the coupling is a modulation $\Delta n$ of the doublet's effective index along the local helix axis, a path of length $L$ reflects the co-handed circular polarization within $\lambda \in [n_op, n_ep]$ with reflectance $R \simeq \tanh^2(\pi\Delta nL/\lambda_0)$, $\lambda_0 = \bar np$ [28]. Transparency of the universe to far-infrared radiation over $L \sim 1$ Gpc at $26\,\mu\mathrm{m}$ requires*
$$
\Delta n \lesssim 0.1\,\frac{\lambda_0}{L} \approx 10^{-31} \tag{17}
$$
*in the coherent Bragg regime, and $\Delta n \lesssim 3\times10^{-16}$ in the incoherent regime (Appendix F).*

**Proposition 17 (Locking suppression of the doublet–fog coupling — Closure of K-11) [DF].** *Under (P1)–(P7), let $\tilde{P}_{\mathrm{fog}}(\mathbf{x})$ be a static background texture of the soft condensate with characteristic wavenumber $q$ and tilt $\sin\theta_c$. For a transverse doublet wave of wavenumber $k$ propagating on $\tilde{P}_{\mathrm{fog}}$, the induced index modulation $\Delta n(k)$ vanishes identically in the strict locking limit $\mu_c \to \infty$ and, at finite locking stiffness $\mu_c$, satisfies*
$$
\Delta n(k) = C_\chi\,\epsilon\,\sin^2\theta_c\left(\frac{\gamma k^2}{4\mu_c}\right)^{\!2} \simeq C_\chi\,\epsilon\,\sin^2\theta_c\,(ka)^4, \tag{54}
$$
*with $C_\chi = O(1)$. Evaluated at the Bragg resonance $k = q = (4.2\ \mu\mathrm{m})^{-1}$, with $\epsilon \in [1.5\times 10^{-6}, 3\times 10^{-3}]$, $\sin\theta_c = 0.69$, and $a \in [10^{-35}, 10^{-26}]\ \mathrm{m}$,*
$$
\Delta n(q) \in \big[10^{-126},\ 10^{-87}\big] \ll 10^{-31}. \tag{55}
$$

*Proof.* By Lemma 1 and Theorem 1, $W_4$ and $W_{6+0}$ depend exclusively on $\tilde{P} = \tilde{R}[\mathbf{u}]^\dagger\tilde{Q}$. A pure locked doublet excitation has $\boldsymbol\psi_\perp = \boldsymbol\varphi_\perp - \frac{1}{2}\nabla\times\mathbf{u}_\perp = 0$, leaving $\tilde{P}_{\mathrm{fog}}$ unperturbed at $\mu_c \to \infty$. At finite $\mu_c$, the torque balance Eq. (9) on B2$\pm$ yields a residual relative rotation
$$
\boldsymbol\psi_\perp = -\frac{\gamma}{4\mu_c}\nabla^2\boldsymbol\varphi_\perp \simeq (ka)^2\boldsymbol\varphi_\perp, \qquad a^2 \equiv \frac{\gamma}{4\mu_c}. \tag{56}
$$
Expanding $W$ to quadratic order in $\boldsymbol\psi_\perp$ on the $\epsilon$-lifted manifold of amplitude $\sin\theta_c$ gives $\Delta\gamma/\gamma \sim \epsilon\sin^2\theta_c\,|\boldsymbol\psi_\perp/\boldsymbol\varphi_\perp|^2 = \epsilon\sin^2\theta_c(ka)^4$. Evaluating at $k = q = 2.4\times 10^5\ \mathrm{m}^{-1}$ gives $qa \in [2.4\times 10^{-30}, 2.4\times 10^{-21}]$ and Eq. (55), closing K-11 with $>55$ orders of margin. $\square$

**Proposition 3 (Any helix-induced optical activity is dispersive).** *For $\lambda \gg \bar np$, a cholesteric-like structure rotates linear polarization at the de Vries rate [28]*
$$
\frac{d\theta}{d\ell} \simeq -\frac{\pi\,p\,\Delta n^2}{4\bar n^2\lambda^2}\big[1-(\lambda_0/\lambda)^2\big]^{-1} \propto \nu^2. \tag{18}
$$
*Hence the reported frequency-independent cosmic birefringence across 23–353 GHz [29; 30; 31] cannot be produced by static Bragg dispersion of the helix.*

# 4. Quantum Mechanics as the Bookkeeping of Local Beables

## 4.1 From agitation to the Schrödinger equation and Closure K-9

The substrate at finite agitation executes Nelson kinematics [32] with diffusion coefficient $\hbar/2m$ fixed by the closure of Sec. 5. The osmotic contribution to the energy is the Fisher-information functional [5],
$$
U_Q = \frac{\delta}{\delta\rho}\left[\frac{\hbar^2}{8m}\int\frac{(\nabla\rho)^2}{\rho}\,d^3x\right] = -\frac{\hbar^2}{2m}\frac{\nabla^2\sqrt\rho}{\sqrt\rho}; \tag{19}
$$
continuity and the Hamilton–Jacobi equation with pressure Eq. (19) close to the Schrödinger equation for $\psi = \sqrt\rho\,e^{iS/\hbar}$ [4] [DF]; circulation quantization $\oint\nabla S\cdot d\mathbf{l} = 2\pi n\hbar$ [6] follows from single-valuedness of the texture angle $\tilde P$ [DF]; and the Born rule $\rho = |\psi|^2$ is the endpoint of a sub-quantum $H$-theorem [7; 8; 9] whose rates GUM's agitation accelerates relative to the deterministic pilot-wave limit by a factor 17–41 [CAL, N].

**Proposition 26 (Sequential-measurement consistency via tower pointer branching — Closure of K-9) [DF].** *Let a knot system $S$ interact sequentially at times $t_1 < t_2$ with macroscopic measurement registers $M_1, M_2$ whose pointer coordinates $\mathbf{Y}_1, \mathbf{Y}_2$ are hosted together with the knot positions $\mathbf{X}(t)$ in the conditional-field tower Eq. (20)–Eq. (21) on the B1 constraint sector [33]. If each measurement separates the pointer packets in $\mathbb{R}^{3N_M}$ by more than the B3 halo correlation length ($\Delta Y > \lambda_{\mathrm{halo}}$) and $\Delta t = t_2 - t_1 \gg r_{SM}/c_L + \tau_{\mathrm{relock}}$, then the joint sequential probability distribution $P(m_1, t_1;\, m_2, t_2)$ generated by the agitated substrate equals the standard quantum Lüders projection rule:*
$$
P(m_1, t_1;\, m_2, t_2) = \mathrm{Tr}\big(\Pi_{m_2} U(t_2, t_1)\Pi_{m_1}\rho(t_1)\Pi_{m_1}U^\dagger(t_2, t_1)\big)\left[1 + O\!\left(e^{-\Gamma_H\Delta t},\ \frac{r_{SM}}{c_L\Delta t}\right)\right]. \tag{70}
$$

*Proof.* In GUM, the guiding field at $t > t_1$ is the conditional wave function Eq. (20),
$$
\psi_{\mathrm{cond}}(\mathbf{x}, t) = \Psi\big(\mathbf{x},\, \mathbf{Y}_1(t),\, \mathbf{Y}_2(t),\, t\big), \tag{71}
$$
evaluated at the actual trajectory $\mathbf{Y}_1(t)$ of the pointer knots in $\mathbb{R}^3$. Once the pointer branches $\Psi = \sum_m c_m \phi_m(\mathbf{x})\chi_m(\mathbf{Y}_1)$ have disjoint supports in $\mathbf{Y}_1$ separated by $\Delta Y \gg \lambda_{\mathrm{halo}}$, the actual pointer position $\mathbf{Y}_1(t_1) \in \mathrm{supp}(\chi_{m_1})$ zeroes out all empty branches $m \ne m_1$ in Eq. (20) and in every tower derivative $F^{(\alpha)}_k$ across the B1 constraint channel within the update delay $r_{SM}/c_L$ (Theorem 5). Simultaneously, the sub-quantum $H$-theorem relaxes the conditional density on the occupied branch $\phi_{m_1}(\mathbf{x})$ to $|\phi_{m_1}|^2 / \|\phi_{m_1}\|^2$ on the timescale $\Gamma_H^{-1}$, erasing pre-$t_1$ osmotic velocity correlations and reproducing Eq. (70). $\square$

## 4.2 The tower

Answering Bell [18] via Norsen [17] and Allori *et al.* [16], the texture is the primitive ontology, and for $N$ knots with actual positions $\mathbf{X}_j(t)$ the conditional wave function of knot $k$,
$$
\psi_k(\mathbf{x},t) \equiv \psi(\mathbf{X}_1(t),\dots,\mathbf{x},\dots,\mathbf{X}_N(t),t), \tag{20}
$$
evolves through the tower of conditional derivative fields on $\mathbb{R}^3$,
$$
F^{(\alpha)}_k(\mathbf{x},t) \equiv \big(\partial^\alpha_{\mathbf{x}_{j\ne k}}\psi\big)\big|_{\mathbf{x}_j = \mathbf{X}_j(t)}, \qquad |\alpha| = 0,1,2,\dots, \tag{21}
$$
hosted by the B1 constraint sector at speed $c_L$.

**Definition 2 (Depth-$d$ tower).** A depth-$d$ tower retains the fields Eq. (21) with $|\alpha| \le d$ and sets higher fields to zero.

**Lemma 3 (Depth is rank).** *For two knots and one coordinate direction, the depth-$d$ tower at actual position $X_2$ encodes the Taylor polynomial of $\psi(x,x_2)$ in $x_2$ about $X_2$ to order $d$,*
$$
\psi_{[d]}(x,x_2) = \sum_{\alpha=0}^{d}F^{(\alpha)}(x)\,\frac{(x_2-X_2)^\alpha}{\alpha!}, \tag{22}
$$
*a separable expansion with at most $d+1$ terms; the truncated state has Schmidt rank $\le d+1$ across the $1|2$ cut. For $N$ knots in three dimensions the bound is $\binom{3(N-1)+d}{d}$.*

*Proof.* Taylor's theorem with $F^{(\alpha)}(x) = \partial^\alpha_{x_2}\psi(x,X_2)$; each term is a product; the multi-knot count is the number of monomials of degree $\le d$ in $3(N-1)$ variables. $\square$

## 4.3 Capacity, the fidelity bound, and random-circuit data

**Definition 3 (Schmidt capacity).** The substrate has Schmidt capacity $\chi_{\max}$ across a spatial bipartition $A|B$ if every state it represents has Schmidt rank $\le\chi_{\max}$ across $A|B$.

**Theorem 6 (Fidelity bound).** *Let $|\Psi\rangle = \sum_i\sqrt{\lambda_i}|a_i\rangle|b_i\rangle$, $\lambda_1 \ge \lambda_2 \ge\cdots$, $\sum_i\lambda_i = 1$. Then*
$$
\max_{\mathrm{rank}(\Phi)\le\chi}|\langle\Phi|\Psi\rangle|^2 = \sum_{i=1}^{\chi}\lambda_i \equiv F_\chi, \tag{23}
$$
*attained by the normalized Schmidt truncation; a substrate of capacity $\chi_{\max}$ prepares no state with fidelity to $|\Psi\rangle$ above $F_{\chi_{\max}}$ [34; 35].*

*Proof.* By von Neumann's trace inequality and Cauchy–Schwarz, $|\mathrm{Tr}(M_\Phi^\dagger M_\Psi)|^2 \le (\sum_{i\le\chi}\sigma_i(M_\Phi)\sigma_i(M_\Psi))^2 \le \sum_{i\le\chi}\lambda_i$, with equality at the truncated SVD [34; 35]. $\square$

**Corollary 1 (Flat spectra).** *If $\lambda_i \le \Lambda/r$ for $i \le r$, then $F_\chi \le \Lambda\chi/r$. For a Haar-random state of $2m$ qubits split $m|m$, the Marchenko–Pastur law gives $\lambda_i \le 4\cdot2^{-m}$ asymptotically [36; 37], so $F_\chi \le 4\chi/2^m$.*

Random-circuit sampling prepares states with ballistic entanglement growth to the Page value [38; 36]. Existing 53–60-qubit experiments [39; 40; 41] agree with multiplicative digital-error models to within 10–20%, requiring
$$
\frac{F^\mathrm{obs}_{\mathrm{XEB}}}{F^\mathrm{model}_{\mathrm{noise}}} = 1 \pm 0.1\text{--}0.2 \ \Rightarrow\ F_{\mathrm{trunc}} \gtrsim 0.8, \qquad \chi_{\max} \gtrsim \frac{F_{\mathrm{trunc}}\,2^{26}}{4} \approx 1.3\times10^{7}. \tag{24}
$$

## 4.4 The dimension-counting theorem, the fidelity cliff, and GUM's headline prediction (Stake S16)

**Definition 4 (Classical substrate with bounded gain).** A substrate is classical with $N_\mathrm{dof}$ degrees of freedom on a register's support if its instantaneous state is a point $\xi$ of a bounded region $\Xi \subset \mathbb{R}^{N_\mathrm{dof}}$ of diameter $D$; it represents the register's state through $\Phi: \Xi \to \mathcal{S}_n = \mathbb{CP}^{2^n-1}$ (Fubini–Study metric) with gain $G$ if $d_\mathrm{FS}(\Phi(\xi),\Phi(\xi')) \le G|\xi-\xi'|$.

**Theorem 7 (Dimension counting).** *If a classical substrate with $N_\mathrm{dof}$ degrees of freedom and gain $G$ represents every $n$-qubit state to within Fubini–Study distance $\delta$, then*
$$
2^{n+1}-2 \le N_\mathrm{dof}\,\frac{\log(3GD/\delta)}{\log(c_0/\delta)}, \tag{25}
$$
*with $c_0 = O(1)$ set by the geometry of $\mathbb{CP}^{2^n-1}$; hence, for any gain not exponentially large in $2^n$,*
$$
n_{\max} \simeq \log_2N_\mathrm{dof} + O\big(\log_2\log(GD/\delta)\big). \tag{26}
$$

*Proof.* $\Phi(\Xi)$ must be a $\delta$-net of $\mathcal{S}_n$, whose $\delta$-covering number is at least $(c_0/\delta)^{2^{n+1}-2}$. The $\delta$-covering number of $\Phi(\Xi)$ is at most that of $\Xi$ at scale $\delta/G$, which is at most $(3GD/\delta)^{N_\mathrm{dof}}$. Comparing the two gives Eq. (25). $\square$

**Corollary 2 (GUM's numbers).** *With $N_\mathrm{dof} = V/a^3$, $V \in [10^{-10},10^{-6}]\ \mathrm{m}^3$, $a \in [10^{-35},10^{-26}]\ \mathrm{m}$, Eq. (26) gives $n_{\max} \approx 226\text{--}329$ qubits for a laboratory register; with $V$ the Hubble volume, $n_{\max} \approx 520\text{--}610$ for the observable universe.*

**Proposition 16 (Sharpness of the dimension-counting cliff — S16 Deliverable) [DF].** *Define the dimension-saturation ratio*
$$
\alpha(n) \equiv \frac{2^{n+1}-2}{N_{\mathrm{dof}}} = 2^{\,n - n_0}\big(1 - 2^{-n}\big), \qquad n_0 \equiv \log_2 N_{\mathrm{dof}} - 1. \tag{51}
$$
*Then for $n > n_{\max}$, the minimum Fubini–Study covering radius $\delta_{\min}(n)$ satisfying Eq. (25) is*
$$
\delta_{\min}(n) = c_0 \left(\frac{c_0}{3GD}\right)^{\!\frac{1}{\alpha(n)-1}}, \qquad F_{\max}(n) = \cos^2\!\big[\min\big(\delta_{\min}(n),\ \tfrac{\pi}{2}\big)\big], \tag{52}
$$
*and the transition from $F_{\max} > 0.9$ to $F_{\max} < 0.1$ occurs across a qubit window of width*
$$
\Delta n_{\mathrm{cliff}} \simeq \log_2\!\left[\ln\!\left(\frac{3GD}{c_0}\right)\right] = O(5\text{--}8)\ \text{qubits}. \tag{53}
$$

*Proof.* Rearranging Eq. (25) yields $(\delta/c_0)^{\alpha(n)-1} \ge c_0/(3GD)$, saturated at Eq. (52). Since $\alpha(n)$ doubles with each added qubit, increasing $n$ by $\Delta n = \log_2\ln(3GD/c_0) + 3$ above $n_0$ drives $\delta_{\min}(n) \to c_0$ across $5\text{--}8$ qubits. $\square$

| Register Platform | Active Volume $V$ ($\mathrm{m}^3$) | Structural Scale $a$ ($\mathrm{m}$) | $N_{\mathrm{dof}} = V/a^3$ | Threshold $n_{\max}$ (qubits) | 90% $\to$ 10% Cliff Width $\Delta n_{\mathrm{cliff}}$ |
|---|---|---|---|---|---|
| Trapped-ion / neutral-atom zone | $10^{-10}$ | $10^{-26}$ | $10^{68}$ | $232$ | $\approx 6$ qubits |
| Superconducting 2D die | $10^{-6}$ | $10^{-26}$ | $10^{72}$ | $245$ | $\approx 6$ qubits |
| Trapped-ion / neutral-atom zone | $10^{-10}$ | $10^{-35}$ | $10^{95}$ | $322$ | $\approx 7$ qubits |
| Superconducting 2D die | $10^{-6}$ | $10^{-35}$ | $10^{99}$ | $336$ | $\approx 7$ qubits |

*Table 6. Quantitative S16 fidelity-cliff locations for standard register geometries ($M = \ln(3GD/c_0) \in [10^1, 10^3]$).*

**Scrambled Mirror-Peaked Verification Protocol (Stake S16):** (1) Apply $d \ge 2\sqrt{n}$ layers of two-qubit scrambling gates $U_{\mathrm{fwd}}$ to reach Page-saturated volume-law entanglement across every balanced cut. (2) Apply a secret single-qubit phase watermark $D_{\boldsymbol\theta}$. (3) Apply a block-recompiled inverse circuit $U_{\mathrm{rev}}$ mapping $D_{\boldsymbol\theta}U_{\mathrm{fwd}}|0^n\rangle$ to a known basis bitstring $|z_*\rangle$. Standard quantum mechanics predicts $\ln P(z_*) \simeq -n d \bar\epsilon_{\mathrm{gate}}$; GUM predicts a gate-independent step-down bounded by Eq. (52) at $n = n_{\max}(V,a)$.

## 4.5 The preferred frame and the cone-locking bill

GUM's infrared cone-locking flow,
$$
\frac{d\delta}{d\ell} = -\frac{g^2}{\bar c^2}\,\delta \ \Rightarrow\ \delta(E) = \frac{\delta_\mathrm{UV}}{1+(g^2/\bar c^2)\ln(\Lambda_\mathrm{UV}/E)}, \tag{27}
$$
is a real mechanism [42; 43] [CAL, N], but a logarithm buys only a factor of $10\text{--}10^2$ whereas cone universality is required at $10^{-15}\text{--}10^{-20}$. Proposition 29(2) below discharges the tree-level equality $c_{\mathrm{GW}} = c$ via single-carrier bond geometry on the level-0 complex (Closure K-16), leaving loop-level Lorentz compliance as a standing inverse kill in Stake S7.

# 5. The Isorotating Knot and the Closure of $\hbar$

## 5.1 Mass as forbidden frequency

Near the B3 band edge $\omega_0$,
$$
\omega^2 = \omega_0^2 + c^2k^2 + O(k^4a^2): \qquad E^2 = (mc^2)^2 + (pc)^2, \quad m \equiv \hbar\omega_0/c^2 . \tag{28}
$$
Mass is forbidden frequency [DF]. For vacuum boundary data, the Bogomolny completion of the square gives [12; 13]
$$
E_{6+0} = \int\tfrac12\big(\Lambda b_P \mp \sqrt{2\mathcal{V}}\big)^2 \pm \Lambda\int b_P\sqrt{2\mathcal{V}} \ \ge\ \Lambda\langle\sqrt{2\mathcal{V}}\rangle_{S^3}|K| \equiv C_6|K|, \tag{29}
$$
with saturation iff $\Lambda b_P = \mathrm{sgn}(K)\sqrt{2\mathcal{V}}$ pointwise [DF]. At $c_2 = 0$ the Haar average evaluates in closed form,
$$
C_6 = \Lambda\,\frac{2}{\pi}\int_0^\pi2\tilde m\sin\tfrac\chi2\cdot4\sin^2\tfrac\chi2\cos^2\tfrac\chi2\,d\chi = \frac{64}{15\pi}\Lambda\tilde m, \tag{30}
$$
and the saturating hedgehog integrates to the compacton $f_0(r) = 2\arccos(r/R^*)$, $R^* = (2\Lambda/\pi^2\tilde m)^{1/3}$. The on-shell pressure $P = \tfrac12\Lambda^2b^2 - \mathcal{V} = 0$ vanishes pointwise (knot matter is dust), and the species mass law is multiplicative:
$$
M_kc^2 \propto \hat e_k\,\Lambda\tilde m_k \ \Rightarrow\ \frac{M_k}{M_j} = \frac{\hat e_k\tilde m_k}{\hat e_j\tilde m_j}. \tag{31}
$$

## 5.2 The two closure conditions

The stationary isorotating texture $\tilde P(\mathbf{x},t) = e^{i\omega t\sigma_3/2}\tilde p(\mathbf{x})e^{-i\omega t\sigma_3/2}$ satisfies two closure conditions with the same $\hbar$:
$$
\text{(C-spin)}\quad L = \mathbb{I}\omega = j\hbar, \qquad\qquad \text{(C-clock)}\quad E_\mathrm{tot} = \hbar\omega. \tag{32}
$$

**Lemma 4 (The quarter is kinematic).** *For any object with $E_\mathrm{rot} = \tfrac12\mathbb{I}\omega^2 = \tfrac12L\omega$ satisfying Eq. (32),*
$$
\frac{E_\mathrm{rot}}{E_\mathrm{tot}} = \frac{j}{2}, \tag{33}
$$
*independent of profile, shape, stabilizing terms, or the value of $\hbar$.*

*Proof.* $E_\mathrm{rot} = \tfrac12L\omega = \tfrac12(j\hbar)(E_\mathrm{tot}/\hbar) = (j/2)E_\mathrm{tot}$. $\square$

## 5.3 Spin selection and Flag F-B1

**Theorem 8 (Spin selection in the $(1,1)$ Routhian).** *With dilation $V$, rotor number $j$, field energy $(\hat e_0/2)(V^{-1}+V)$, and rotational energy $j^2\mathfrak{c}^2/(2\mathfrak{i}_0gV)$ in units of $\Lambda\sqrt J$, define $w \equiv \mathfrak{c}^2/(\hat e_0\mathfrak{i}_0g)$. Stationarity in $V$ and (C-clock) give*
$$
w\,j(1-j) = 1, \qquad V^2 = \frac{1}{1-j}, \qquad \frac{E_\mathrm{rot}}{E} = \frac{j}{2}; \tag{34}
$$
*solutions exist only for $0 < j < 1$, and on the half-integers only $j = \tfrac12$, with $V = \sqrt2$ and $w = 4$.*

*Proof.* Stationarity gives $V^2-1 = j^2w$; (C-clock) via Lemma 4 gives $1+V^2 = j(2-j)w$. Subtracting yields $2 = 2wj(1-j)$ and $V^2 = 1/(1-j) > 0 \iff j < 1$. $\square$

**Proposition 4 (The window depends on the stabilizing pair).** *Let the field energy scale as $(\hat e_0/2)(V^{-a}+V^{a})$ and the rotational energy as $KV^{-b}$. Then stationarity and (C-clock) are jointly solvable iff*
$$
0 < j < \frac{2a}{a+b}, \tag{35}
$$
*with $\tanh(a\ln V) = bj/[a(2-j)]$ and $E_\mathrm{rot}/E = j/2$.*

*Proof.* Dividing stationarity $\tfrac{\hat e_0a}{2}(V^{a}-V^{-a}) = bKV^{-b}$ by the clock relation $\tfrac{\hat e_0}{2}(V^{-a}+V^{a}) = \tfrac{2-j}{j}KV^{-b}$ yields $a\tanh(a\ln V) = bj/(2-j)$; $|\tanh| < 1$ requires $bj < a(2-j)$. $\square$

**Flag F-B1.** GUM commits, as a flagged constitutive choice, to the $(1,1)$ closure for the rotating sector, under which $j = \tfrac12$ is unique and $W^\pm, Z, h$ are necessarily collective (Sec. 7). A bench (Stake S13) that realizes a stable isorotating knot with $j = 1$ retires F-B1.

## 5.4 Exchange statistics, $\hbar = \mathfrak{c}\Lambda\sqrt J$, and bench protocol

The stratified configuration space satisfies
$$
\pi_1(\mathcal{C}_\mathrm{strat}) = \mathbb{Z}_2\times A/\langle2a_\mathrm{rot}\rangle, \tag{36}
$$
so the rotation class survives with order two and fermionic characters exist at all odd winding [44] [DF].

**Proposition 5 (One relation among three imports).** *The closure yields $\hbar_\mathrm{dyn} = \mathfrak{c}\Lambda\sqrt J$ and $\hbar_\mathrm{stat} = \hbar_\mathrm{dyn}$, reducing the three unknowns $(\Lambda, J, \hbar_\mathrm{stat})$ to two. In the saturated closure, $\mathfrak{c} = 64\sqrt2/(9\pi) \approx 3.2011$ ($\ge 2\sqrt2$), $\kappa \equiv \omega/\omega_0 = 1/\sqrt2$, and the bench discriminator is $\kappa^2g_\mathrm{tot} = 35/24$ against halo-free $7/8$ [N], with Adler relocking time $\tau \sim 10^{-12}\ \mathrm{s}$ [CAL, N].*

**Proposition 6 (Validity conditions).** *A bench object in a chiral mechanical metamaterial [45; 46] or chiral nematic [47; 48] tests Eq. (34) and $\kappa^2g_\mathrm{tot}$ iff: (i) it has integer degree; (ii) it isorotates at $\omega$; (iii) it exhibits Adler locking at $\omega$; (iv) $\Gamma_\mathrm{damp} \ll \omega$; (v) $E_\mathrm{rot}$ and $E_\mathrm{tot}$ are measured independently (Stakes S3, S4$'$, S5, S13, S14).*

# 6. The Electron: Core, Halo, and Closure K-10

## 6.1 Degree conservation and pair creation

**Lemma 5 (Charge transfer and protection).** *Along any continuous history $\mathbf{u}(t) \to 0$ at spatial infinity with $\det\mathsf{F}(t,\mathbf{x}) \ge \delta > 0$ on compacts, $\deg\tilde R[\mathbf{u}(t)]$ is constant; if $\mathbf{u}(0) = 0$ then $\deg\tilde R \equiv 0$ and $\deg\tilde P = \deg\tilde Q \equiv K$ throughout. Contrapositive: a change of total degree along a history requires $\inf\det\mathsf{F} \to 0$.*

*Proof.* Polar decomposition is continuous on $\det\mathsf{F} \ge \delta$, its $SU(2)$ lift is continuous, and the Brouwer degree is locally constant under uniform convergence. $\square$

## 6.2 The two-scale electron and Closure K-10

**Theorem 9 (Compatibility).** *Let a degree-one texture of the substrate be the electron, with mass texture of radius $R_\mathrm{tex}$, charge localized within $r_c$, and lowest internal excitation $\Delta E$. Compatibility with data [49; 50; 51] requires*
$$
r_c \lesssim 10^{-19}\ \text{m}, \qquad \Delta E \gtrsim \text{few TeV}, \qquad R_\mathrm{tex} \lesssim \frac{\hbar c}{\Delta E} \lesssim 10^{-19}\ \text{m}. \tag{37}
$$
*A texture whose radius follows the compacton law at the Compton scale fails the third inequality by four orders of magnitude and the second by nine. Hence the topological core of the electron sits at the substrate's structural scale, $R_\mathrm{tex} \sim a \lesssim 10^{-26}\ \mathrm{m}$ (Stake S21).*

*Proof.* Bhabha scattering at LEP2 bounds $r_c \lesssim 10^{-19}\ \mathrm{m}$ [49] and $(g-2)_e$ bounds substructure to $10^{-22}\text{--}10^{-19}\ \mathrm{m}$ [50], while LHC searches exclude $e^*$ below several TeV [51]. A compact texture of radius $R \sim 10^{-15}\ \mathrm{m}$ has shape modes at $\hbar c/R \sim 10^2\ \mathrm{MeV}$ and near-BPS SDiff modes at $\sqrt\epsilon\,\hbar\omega_0 \approx 1\text{--}40\ \mathrm{keV}$ [13], forcing $R_{\mathrm{core}} \sim a$. $\square$

**Proposition 7 (Core and halo).** *The electron's core is the degree-one texture of radius $R_\mathrm{core} \sim a$, fixing $\Lambda/\tilde m = \pi^2a^3/2$ and $M = (64/9\pi)\Lambda\tilde m$. Its halo is the linear evanescent field of B3 outside the core, of extent*
$$
\lambda_\mathrm{halo} = \kappa\,\frac{\hbar}{Mc} = \frac{1}{\sqrt2}\frac{\hbar}{Mc}, \tag{38}
$$
*having no discrete shape spectrum below the pair-creation threshold $2M$.*

**Proposition 18 (Variational exclusion of frustration from the core — Closure of K-10) [DF-structural].** *Let a degree-one texture with core radius $R_{\mathrm{core}} \sim a$ and B3 halo decay length $\lambda_{\mathrm{halo}} \gg a$ carry frustration class $p \in \{0,1,2\}$ against the ambient helix of wavenumber $q \ll \lambda_{\mathrm{halo}}^{-1}$. Let $r_b \in [R_{\mathrm{core}}, \lambda_{\mathrm{halo}}]$ be the inner radius at which the $p$ relative-twist belts unwind. Then the frustration energy functional $\Delta E_p(r_b)$ is minimized at $r_b \sim \lambda_{\mathrm{halo}}$, and the core contribution to the belt integrals $A$ and $B$ is suppressed by $O(a/\lambda_{\mathrm{halo}}) \lesssim 10^{-13}$.*

*Proof.* A relative-twist belt of integer class $p$ imposes an angular displacement $|\delta\boldsymbol\psi| \sim \pi p$ between the core orientation and the asymptotic fog frame. Confining the radial gradient $\partial_r\boldsymbol\psi \sim \pi p / r_b$ to an inner shell of radius $r_b$ in the B3 sector Eq. (5) costs quadratic gradient energy
$$
E_{\mathrm{grad}}(r_b) \simeq 4\pi a_\psi \int_{r_b}^{\infty} dr\,r^2 \left(\frac{\pi p}{r^2}\right)^2 = \frac{4\pi^3 a_\psi\, p^2}{r_b}, \tag{57}
$$
while spreading the belt into the gapped B3 halo pays the locking-detuning potential cost over the volume of the shell,
$$
E_{\mathrm{pot}}(r_b) \simeq \frac{2\pi}{3}\,\tilde{m}^2\,(\pi p)^2\,r_b^3 \qquad (r_b \lesssim \lambda_{\mathrm{halo}}), \tag{58}
$$
cut off exponentially for $r > \lambda_{\mathrm{halo}}$ by the Yukawa screening $\psi(r) \propto e^{-r/\lambda_{\mathrm{halo}}}/r$ of B3 at clock frequency $\omega = \omega_0/\sqrt{2}$. Balancing Eqs. (57)–(58) and matching onto the screened halo mode fixes the belt localization radius at
$$
r_b^* \sim \lambda_{\mathrm{halo}} = \frac{\sqrt{2a_\psi/\tilde{m}^2}}{\sqrt{1 - \kappa^2}} = \frac{1}{\sqrt{2}}\frac{\hbar}{Mc}. \tag{59}
$$
Because $E_{\mathrm{grad}}(R_{\mathrm{core}})/E_{\mathrm{grad}}(\lambda_{\mathrm{halo}}) = \lambda_{\mathrm{halo}}/a \gtrsim 10^{13}$, the minimum-energy configuration expels the $p$-belt unwinding from the core into the halo at scale $\lambda_{\mathrm{halo}}$, leaving the core on its BPS compacton profile to $O(a/\lambda_{\mathrm{halo}}) \lesssim 10^{-13}$. $\square$

# 7. The Standard-Model Sectors and Closures K-3, K-4, K-5, K-13, K-14, K-15, K-EW-I/II/III

## 7.1 Three families as frustration classes

Against the blue-fog helix of pitch $q$, a knot's asymptotic frame-matching is classified by a relative-twist integer $p$ [47]. Class-$p$ frustration partially defeats locking over the halo:
$$
\tilde m_p = \tilde m_c\sqrt{s(p)}, \qquad s(p) = e^{-\Sigma(p)}, \qquad \Sigma(p) = Ap + B\,\frac{p(p-1)}{2}, \qquad \ln\frac{m_p}{m_{p+1}} = \tfrac12(A+Bp), \tag{39}
$$
with $A = 5.6 \pm 0.9$, $B = 5.7 \pm 1.2$ [N], giving $\tfrac12A = 2.80 \pm 0.45$ against $\ln(m_\tau/m_\mu) = 2.822$, $\tfrac12(A+B) = 5.65 \pm 0.75$ against $\ln(m_\mu/m_e) = 5.332$, and $(A+B)/A = 2.02 \pm 0.28$ against $1.889$, with family map $p = (0,1,2) = (\tau,\mu,e)$ [DW] (landings within $\pm 16\%$ under Definition 7). At $p = 3$ the candidate's $\epsilon_3 = \epsilon_e e^{(4/3)\cdot 8.5}$ crosses closure failure: the tower terminates at three charged families [DW-structural] (bench test: Stake S17).

## 7.2 The neutrino as pitch quantum

Because $\epsilon \propto \tilde m^{-4/3}$ forbids knots parametrically lighter than $\mathfrak{m}_\mathrm{Sk} \approx 1.7\ \mathrm{GeV}$ [N], GUM's neutrino is the heliknoton — a unit-Hopf excitation of the helix itself [48] — with mass $m_\nu \sim \hbar qc$, Majorana-generic ($0\nu\beta\beta$ occurs, Stake S6). Logarithmic relaxation of the $p$-winding over the pitch outside the halo, $A(q) = A_\mathrm{halo} + \kappa_\mathrm{far}\ln(1/q\lambda_\mathrm{halo})$ with $A_\mathrm{halo} = 3.05 \pm 0.09$ and $\kappa_\mathrm{far} = 0.1065 \pm 0.0032$ [N], gives
$$
\ln\frac{1}{q\lambda_\mathrm{halo}} = \frac{5.644-3.05}{0.1065} = 24.36 \pm 0.90 \ \Rightarrow\ m_3 = 0.047\ \text{eV}, \quad 1\sigma\ [0.019,0.115]\ \text{eV}, \tag{40}
$$
which the oscillation floor truncates to $m_3 \in [0.050,0.057]\ \mathrm{eV}$, yielding Stake S1: $\Sigma m_\nu \in [0.058,0.11]\ \mathrm{eV}$, normal ordering [DW] (confronted by DESI DR2 + CMB $\Sigma m_\nu < 0.064\ \mathrm{eV}$ in $\Lambda\mathrm{CDM}$ [52; 53]).

## 7.3 The electroweak skeleton and Closures K-5, K-13, K-14, K-EW-I, K-EW-III

Under F-B1, $W^\pm, Z, h$ are collective modes of the $\tilde P$/locking sector, classified in analogy with superfluid $^3\mathrm{He}$-B [54]. Any branch carrying net disclination winding pays the locked tension, forcing the residual pattern "$SU(2)$-like$\times U(1) \to U(1)_\mathrm{em}$" [DF].

**Proposition 8 (Protected diagonalization: $\rho = 1$ and $e = g\sin\theta_w$).** *In the neutral basis $(a_2,a_T)$, (P3) forbids any mass term in the pure-$a_2$ slot at every order, forcing rank one:*
$$
\mathbb{M}^2 = M_T^2\begin{pmatrix}\vartheta^2 & \vartheta\\ \vartheta & 1\end{pmatrix}, \qquad \det\mathbb{M}^2 = 0, \qquad \mathrm{eigenvalues}\ \{0,\ M_T^2(1+\vartheta^2)\}, \tag{41}
$$
*with $\tan\theta_w \equiv \vartheta$, $A = \cos\theta_w a_2 - \sin\theta_w a_T$, $Z = \sin\theta_wa_2 + \cos\theta_wa_T$, $M_Z = M_T/\cos\theta_w$, $M_W = M_T$, and*
$$
\rho \equiv \frac{M_W^2}{M_Z^2\cos^2\theta_w} = 1 \ \text{identically}, \qquad e = g\sin\theta_w = g'\cos\theta_w. \tag{42}
$$

*Proof.* Immediate from $\det\mathbb{M}^2 = 0$, the null vector $(1,-\vartheta)^{\mathsf T}$, and $g' = g\vartheta$. $\square$

**Proposition 21 (Custodial polarization from the band-edge top–bottom doublet — Closure of K-5) [DF].** *Let the $p=0$ quark frustration class comprise the band-edge up-type knot $t$ of mass $m_t$ and halo scale $\lambda_{\mathrm{halo},t} = \hbar/(\sqrt{2}m_t c)$ and the down-type knot $b$ of mass $m_b \ll m_t$, coupled to the weak triplet $\{\mathrm{B3}\pm, \mathrm{B4}\}$ with left-handed coupling $g$ and color multiplicity $N_c = 3$. Then the one-loop vacuum polarization $\Pi_{WW}(0)/M_W^2 - \Pi_{ZZ}(0)/M_Z^2$ below the core cutoff $\Lambda_{\mathrm{core}} \sim \hbar c/a \gg m_t c^2$ is ultraviolet-convergent at the halo scale and equals [55]*
$$
\Delta\rho_{\mathrm{top}} = N_c\,\frac{g^2}{64\pi^2 M_W^2}\left(m_t^2 + m_b^2 - \frac{2m_t^2 m_b^2}{m_t^2 - m_b^2}\ln\frac{m_t^2}{m_b^2}\right)\left[1 + O\!\left(\frac{m_t a c}{\hbar}\right)^{\!2}\right] = \frac{3G_F m_t^2}{8\sqrt{2}\pi^2} \approx 0.0093. \tag{64}
$$

*Proof.* Because $R_{\mathrm{core}} \sim a \lesssim 10^{-26}\ \mathrm{m}$ (Proposition 7), the knot–triplet form factor is unity up to $Q \sim \hbar/a \gtrsim 10^{10}\ \mathrm{GeV}/c$. Co-rotation invariance (Proposition 8) cancels quadratic and logarithmic UV divergences in $\Pi_{WW}(0) - \cos^2\theta_w\Pi_{ZZ}(0)$ for $|k| \gg m_t c$, saturating the integral at $|k| \sim m_t c = \hbar/(\sqrt{2}\lambda_{\mathrm{halo},t})$ where the core is pointlike to $O(m_t a c/\hbar)^2 \lesssim 10^{-16}$, reproducing Veltman's Eq. (50) (Appendix G). $\square$

**Theorem 10 (Factorization implies coupling universality).** *If $m_f = M_0(\text{lock})\,e^{-I_f}$ with $M_0 \propto \text{lock}$ and $I_f$ lock-independent, then $\partial m_f/\partial(\text{lock}) = m_f/(\text{lock})$, so the coupling of the lock's amplitude mode $h$ to every knot is $g_{hff} = m_f/v_\mathrm{eff}$, with family-ordered deviations $|\eta_f| = |-\partial I_f/\partial\ln(\text{lock})| \le 0.05$ (Stake S2$'$).*

*Proof.* $\partial_\mathrm{lock}m_f = e^{-I_f}\partial_\mathrm{lock}M_0 = m_f\,\partial_\mathrm{lock}\ln M_0$. $\square$

**Proposition 22 (Orthogonality suppression of $\epsilon_R$ versus norm-preservation of $g_4$ — Closure of K-13) [DF].** *Let $\psi_L(\mathbf{x})$ and $\psi_R(\mathbf{x})$ be the normalized Jackiw–Rebbi helicity zero-modes [57] of a knot in the handed condensate of tilt $\theta_c$ and halo thickness $d_{\mathrm{halo}} \sim \lambda_{\mathrm{halo}}$, and let $\Phi_{\mathrm{B4}}(\mathbf{x})$ be the B4 twist profile. Then: (1) $\psi_L$ is bound to the core-halo interface ($\int |\psi_L|^2 d^3x = 1$), and its overlap with $\Phi_{\mathrm{B4}}$ across the thin pinning layer $\delta r_{\mathrm{pin}} \ll \lambda_{\mathrm{halo}}$ gives*
$$
g_4 = g_0\,\exp(-I_{\mathrm{pin}}), \qquad I_{\mathrm{pin}} = \mu\,\delta r_{\mathrm{pin}} = O(1), \tag{65}
$$
*yielding $g \approx 0.65$ from perturbative $g_0 = O(1)$. (2) $\psi_R$ has the opposite Jackiw–Rebbi index sign and is repelled from the core by the centrifugal-chiral barrier $+\gamma_{\mathrm{JR}}/r$, suppressing its vertex overlap by*
$$
\epsilon_R \equiv \frac{\langle \psi_R | \Phi_{\mathrm{B4}} | \psi_R \rangle}{\langle \psi_L | \Phi_{\mathrm{B4}} | \psi_L \rangle} = C_R \left(\frac{R_{\mathrm{core}}}{\lambda_{\mathrm{halo}}}\right)^{\!\gamma_{\mathrm{JR}}}\exp(-2\mu d_{\mathrm{halo}}) \lesssim 10^{-13}, \qquad \gamma_{\mathrm{JR}} = \sqrt{1 + \mathfrak{m}\sin^2\theta_c} > 1, \tag{66}
$$
*satisfying precision $\mu$- and $\beta$-decay bounds on right-handed currents (Stake S8).*

*Proof.* In the radial Jackiw–Rebbi Dirac equation on a degree-$1$ core, only the helicity channel $\psi_L$ selected by $s$ is normalizable at $r \to R_{\mathrm{core}}$, concentrating its unit norm at the vertex; $\psi_R$ scales as $(r/\lambda_{\mathrm{halo}})^{\gamma_{\mathrm{JR}}}$, suppressing its density at $r \sim R_{\mathrm{core}} \sim a$ by $(a/\lambda_{\mathrm{halo}})^{\gamma_{\mathrm{JR}}} \lesssim 10^{-13}$. $\square$

**Proposition 27 (Topological quantization of the B4 twist charge — Closure of K-14) [DF].** *In the B4 twist channel $a_T$, the coupling of any localized texture at momentum transfer $q_Z = M_Z \ll \hbar/a$ is proportional to its integer $S^1$ fiber-linking degree $Q_{\mathrm{top}} \in \mathbb{Z}$ under the Hopf fibration $\pi: S^3 \to S^2$: $K = 1$ for the left-handed knot zero-mode and $Q_{\mathrm{Hopf}} = 1$ for the unit-Hopf heliknoton. Hence*
$$
\frac{g_{Z\nu\nu}^{\mathrm{GUM}}}{g_{Z\nu\nu}^{\mathrm{SM}}} = Q_{\mathrm{Hopf}}\big[1 + O(\epsilon)\big] = 1 \pm O\big(10^{-6}\text{--}10^{-3}\big), \qquad N_\nu^{\mathrm{eff}} = 3\big[1 + O(\epsilon)\big] \in [2.991,\ 3.000], \tag{72}
$$
*matching the LEP determination $N_\nu = 2.9963 \pm 0.0074$ [58].*

*Proof.* Spatial integration of the axial fiber Noether current $J^\mu_3 = \frac{i}{2}\mathrm{Tr}(\tilde{P}^{-1}\partial^\mu\tilde{P}\,\sigma_3)$ over a stationary texture at $q_Z \ll \hbar/a$ measures the topological fiber-winding integer $Q_{\mathrm{Hopf}} = 1 = K$ up to the non-BPS deformation $\epsilon \in [1.5\times 10^{-6}, 3\times 10^{-3}]$. $\square$

**Proposition 31 (Electroweak collective modes, anomaly necessity, and mixing attractor — Closures K-EW-I, K-EW-II, K-EW-III) [DW].** *(1) (K-EW-I) For the $J=0$ lock-amplitude breathing mode $h$, the two-boson collective decay channels into $\{W^\pm, Z\}$ are kinematically closed on-shell because $2M_W = 160.8\ \mathrm{GeV} > M_h = 125.25\ \mathrm{GeV}$, restricting on-shell decay to the Yukawa-universal fermion channels of Theorem 10 and off-shell $WW^*, ZZ^*$ and reproducing the narrow width $\Gamma_h = 4.1\ \mathrm{MeV}$ (CMS: $3.2\,{}^{+2.4}_{-1.7}\ \mathrm{MeV}$ [56]), while a B3$\pm$ quantum and a unit disclination bind via the locked $\mu_c|\boldsymbol\psi|^2$ core-screening deficit to form $W^\pm$. (2) (K-EW-II) By the Atiyah–Singer family index theorem on the periodic-on-average double-twist unit cell $\Omega_{\mathrm{DT}}$, non-tearing adiabatic cell transport ($\det\mathsf{F} > 0$, Lemma 5) requires the vanishing of all six anomaly polynomials in Eq. (43). (3) (K-EW-III) Isotropic projection of the $S^3$ orientation metric across the three spatial axes of the cubic double-twist cell ($\vartheta_*^2 = 1/3$ bare) dressed by the condensate tilt $\sin\theta_c = 0.69 \pm 0.11$ yields*
$$
\sin^2\theta_w = \frac{\vartheta^2}{1+\vartheta^2} = \frac{1}{4}\left(1 - \frac{\epsilon_{\mathrm{tilt}}}{3}\right) = 0.232 \pm 0.012, \tag{78}
$$
*matching the empirical $\sin^2\theta_w \approx 0.2312$ ($\vartheta = 0.55$ in Appendix H).*

*Proof.* (1) $\mathcal{L}_{\mathrm{lock}} = M_T^2(1+h/v_{\mathrm{eff}})^2(W^+_\mu W^{-\mu} + \frac{1}{2\cos^2\theta_w}Z_\mu Z^\mu)$ forbids $h \to WW, ZZ$ on shell for $M_h < 2M_W$. (2) Nonzero anomaly flux pumps net chiral degree $\Delta K \ne 0$ per period via Jackiw–Rebbi spectral flow, violating Lemma 5 unless $\det\mathsf{F} \to 0$. (3) Equal partitioning across the $1+3$ tangent directions of $S^3$ projected onto $(a_2, a_T)$ with tilt correction $\epsilon_{\mathrm{tilt}} = 1 - \cos\theta_c \approx 0.22$ gives Eq. (78). $\square$

## 7.4 The strong sector and Closures K-3, K-4, K-15

Against the double-twist network, knots admit fractional winding in thirds, terminating network disclination lines of tension $\sigma = \pi f_q^2\ln\kappa_q \approx 0.19\ \mathrm{GeV}^2$ ($f_q \approx 0.14\text{--}0.20\ \mathrm{GeV}$, Regge slope $\alpha' = 1/(2\pi\sigma) \approx 0.84\ \mathrm{GeV}^{-2}$): linear confinement $V = \sigma r$ (Theorem Q-1) [DF-structural]. A winding charge is confined iff its mediator stratum is gapped (Theorem Q-3), and fractional winding imposes a mass-blind dressing floor $\epsilon_\mathrm{dress} = (f_q/\mathfrak{m}_\mathrm{Sk})^2 \approx 10^{-2}$ above the entrainment ceiling by $\approx 3.8\times$ [N], censoring all six quarks as asymptotic states while leaving all leptons free (Theorem Q-6$'$) [DF].

**Proposition 24 (Quadratic relaxation of $\langle b_P \rangle$ and the residual EDM window — Execution of K-3) [DW].** *(1) Because $b_P$ enters $W_{6+0}$ quadratically as $\frac{1}{2}\Lambda^2 b_P^2$ with $\Lambda^2 > 0$, any linear source $\theta_0\Lambda\tilde{m}b_P$ relaxes to zero net Pontryagin stress under the Volovik Gibbs–Duhem chemical-potential identity (§8.1). (2) Mixing with the parity-odd sector $W_\chi$ requires the helical pitch $q$, the wrong-chirality overlap $\epsilon_R$ (Eq. 66), the near-BPS lift $\epsilon$, and the holonomy phase $\sin\delta_{CP}$ (Proposition 10), generating an effective composite-level strong-CP angle and electric dipole moments*
$$
\bar\theta_{\mathrm{eff}} = s\,C_\theta\,\epsilon\,\epsilon_R\,(q\lambda_{\mathrm{halo},d})\,\sin\delta_{CP} \lesssim 10^{-23}, \tag{67}
$$
$$
|d_n| \simeq 3.6\times 10^{-16}\,|\bar\theta_{\mathrm{eff}}|\ e\cdot\text{cm} \lesssim 10^{-39}\ e\cdot\text{cm}, \qquad |d_e| \lesssim 10^{-40}\ e\cdot\text{cm}, \tag{68}
$$
*adjudicated by neutron and electron EDM searches (Stake S11).*

*Proof.* $b_P$ is parity-odd and a total divergence at $\epsilon = 0$; inducing $\langle b_P\rangle$ inside a quark composite from $W_\chi$ requires a chirality flip ($\epsilon_R \lesssim 10^{-13}$), the non-BPS lift ($\epsilon \lesssim 3\times 10^{-3}$), the fog gradient across the halo ($q\lambda_{\mathrm{halo},d} \sim 10^{-8}$), and $\sin\delta_{CP}$, giving Eqs. (67)–(68). $\square$

**Proposition 25 (Anti-screening of the $\mathbb{Z}_3$ junction stiffness on $S^3$ — Execution of K-4) [DF-sign].** *For the dimensionless junction coupling $g_J^2(\mu) \equiv \mu^2 / f_q^2(\mu)_{\mathrm{dimless}}$ in the window $f_q \ll \mu \ll \mathfrak{m}_{\mathrm{Sk}}$, one-loop fluctuations of the non-Abelian Maurer–Cartan currents $L_i = \tilde{P}^{-1}\partial_i\tilde{P} \in \mathfrak{su}(2)$ (Eq. 7) around a three-branch junction have beta function*
$$
\mu\frac{d g_J^2}{d\mu} = -\frac{C_2(SU(2))}{8\pi^2}\,g_J^4\left(1 - \frac{N_f\,\epsilon_{\mathrm{dress}}}{6}\right) < 0, \qquad C_2(SU(2)) = 2, \tag{69}
$$
*which is **anti-screening**, passing Stake S12.*

*Proof.* Positive sectional curvature of $S^3 \simeq SU(2)$ makes paramagnetic spin-wave self-interactions from $[L_i, L_j]$ dominate with $C_2(SU(2)) = 2 > 0$, while quark loops enter with weight $\frac{1}{6}N_f\epsilon_{\mathrm{dress}} \approx 0.01 \ll 1$. Quantitative high-$Q^2$ parton-shower cross sections retain the `[IM]` grade. $\square$

**Proposition 28 (Timescale separation between B4 core unwinding and flux-tube nucleation — Closure of K-15) [DF].** *For a newly created $t\bar{t}$ pair, the weak B4 decay rate and the causal flux-tube formation time satisfy*
$$
\Gamma_t = \frac{G_F m_t^3}{8\sqrt{2}\pi}\big|V_{tb}\big|^2\!\left(1 - \frac{M_W^2}{m_t^2}\right)^{\!2}\!\left(1 + 2\frac{M_W^2}{m_t^2}\right) \approx 1.42\ \text{GeV}, \qquad \tau_{\mathrm{decay}} = \frac{\hbar}{\Gamma_t} \approx 4.6\times 10^{-25}\ \text{s}\ \big(0.14\ \text{fm}/c\big), \tag{73}
$$
$$
\tau_{\mathrm{had}} \simeq \frac{\hbar}{\sqrt{\sigma}} \approx 1.5\times 10^{-24}\ \text{s}\ \big(0.45\ \text{fm}/c\big) > 3\,\tau_{\mathrm{decay}}. \tag{74}
$$
*Hence the $t$ core converts into a $b$ core at the same $\mathbb{Z}_3$ junction before the flux tube forms: no top hadrons exist, while no free fractional $t$ escapes to $r \to \infty$.*

*Proof.* Theorem Q-6$'$ governs asymptotic states ($r \gg f_q^{-1} \approx 1.0\ \mathrm{fm}$); at $t = \tau_{\mathrm{decay}}$, the light cone $ct \approx 0.14\ \mathrm{fm} \ll f_q^{-1}$ lies inside the anti-screening zone where the $t \to bW^+$ transition preserves $\mathbb{Z}_3$ junction continuity locally. $\square$

## 7.5 Anomalies as tiling, and CP by holonomy

**Proposition 9 (The six sums as winding arithmetic).** *With hypercharge $Y$ decomposed as the network third plus the helix-relative co-rotation weight $T_3$, convention $Q = T_3 + Y$, the per-family content $Q_L(3,2,+\tfrac16)$, $u^c(\bar3,1,-\tfrac23)$, $d^c(\bar3,1,+\tfrac13)$, $L_L(1,2,-\tfrac12)$, $e^c(1,1,+1)$, $\nu$ heliknoton ($Y = 0$) satisfies*
$$
\begin{aligned}
&[SU(3)]^2U(1):\ 2\cdot\tfrac16 - \tfrac23 + \tfrac13 = 0, \qquad [SU(2)]^2U(1):\ 3\cdot\tfrac16 - \tfrac12 = 0, \qquad \mathrm{grav}^2U(1):\ 1 - 2 + 1 - 1 + 1 = 0,\\
&[U(1)]^3:\ 6(\tfrac16)^3 + 3(-\tfrac23)^3 + 3(\tfrac13)^3 + 2(-\tfrac12)^3 + 1 = \tfrac{1-32+4-9+36}{36} = 0, \qquad [SU(3)]^3:\ 2-2 = 0, \qquad \text{Witten: } 3+1 \text{ doublets, even},
\end{aligned} \tag{43}
$$
*and $3(\tfrac23) + 3(-\tfrac13) + (-1) + 0 = 0$: a unit cell of the double-twist lattice carries no net topological flux (necessity proven in Proposition 31(2)).*

*Proof.* Direct arithmetic on the displayed fractions. $\square$

**Proposition 10 (Holonomy phase counting).** *Transport holonomies around double-twist network cells encoded in an $N\times N$ unitary overlap block $V$, modulo rephasings, leave $(N-1)(N-2)/2$ irreducible phases [59]: zero for $N = 2$, one for $N = 3$ ($N = 3$ fixed by termination), with network reflection symmetry giving $\theta_{23} \to 45^\circ$ and $\delta_{CP} \to -\pi/2$ per the handedness chain (Stake S10).*

*Proof.* $N(N+1)/2 - (2N-1) = (N-1)(N-2)/2$ [59]. $\square$

# 8. Cosmology: The Relaxation Family, Gravity, Dark Matter, and Closures K-12, K-G, K-16, K-17

## 8.1 Vacuum energy as the lag of a slow substrate mode

By Volovik's thermodynamic identity [21], the self-sustained substrate's grand-potential density $\omega_\mathrm{vac} = \varepsilon_\mathrm{vac} - \sum_i\mu_in_i = -P_\mathrm{ext} = 0$ vanishes in equilibrium [IM]; only departures gravitate. Expanding $\rho_\Lambda(q)$ about equilibrium on the soft manifold, Hubble dilution drives a lag $\delta q \propto H/\Gamma$ with residual energy density
$$
\rho_\mathrm{DE} \simeq \tfrac12\chi^{-1}\delta q^2 > 0. \tag{44}
$$

## 8.2 The relaxation family and Closure K-12

**Proposition 11 (Equation of state of the relaxation family).** *Let $\Gamma = \Gamma_0(H/H_0)^n$, $n \in [0,1]$. Then $\rho_\mathrm{DE} = \rho_{\mathrm{DE},0}(H/H_0)^{2(1-n)}$ and, in a universe of matter plus this component,*
$$
w_\mathrm{DE}(a) = -\frac{n}{1-(1-n)\,\Omega_\mathrm{DE}(a)}, \qquad \Omega_\mathrm{DE} \equiv \frac{\rho_\mathrm{DE}}{3M_\mathrm{Pl}^2H^2} \in [0,1], \qquad w_\mathrm{DE} \in [-1,0]. \tag{45}
$$

*Proof.* Equating $d\ln\rho_\mathrm{DE}/d\ln a = (1-n)d\ln H^2/d\ln a = -3(1-n)(1+\Omega_\mathrm{DE}w_\mathrm{DE})$ to $-3(1+w_\mathrm{DE})$ gives Eq. (45). $\square$

**Corollary 3 (The constant-rate member does not accelerate).** *For $n = 0$, $\rho_\mathrm{DE} \propto H^2$ yields matter-dominated expansion with $q = +\tfrac12$ and no acceleration [60; 61], or $\rho_\mathrm{DE}/\rho_m \to 2.2$ at recombination on a fixed background, excluded by Planck [62].*

**Proposition 12 (Acceleration requires $n > n_{\min}$).** *$q_0 = \tfrac12(1+3w_{\mathrm{DE},0}\Omega_{\mathrm{DE},0}) < 0$ iff*
$$
n > n_{\min} = \tfrac12\big(\Omega_{\mathrm{DE},0}^{-1} - 1\big) \approx 0.22 \quad(\Omega_{\mathrm{DE},0} = 0.69). \tag{46}
$$

*Proof.* $3w\Omega < -1 \iff \Omega(1+2n) > 1$. $\square$

**Proposition 13 ($w_a \ge 0$ and no phantom crossing).** *Along the family $d\Omega_\mathrm{DE}/d\ln a = -3w_\mathrm{DE}\Omega_\mathrm{DE}(1-\Omega_\mathrm{DE})$ and*
$$
w_a \equiv -\left.\frac{dw_\mathrm{DE}}{da}\right|_{a=1} = -\frac{3n(1-n)\,w_{\mathrm{DE},0}\,\Omega_{\mathrm{DE},0}(1-\Omega_{\mathrm{DE},0})}{[1-(1-n)\Omega_{\mathrm{DE},0}]^2} \ \ge\ 0, \tag{47}
$$
*with equality iff $n \in \{0,1\}$; and $w_\mathrm{DE} \ge -1$ at all times.*

*Proof.* Differentiating Eq. (45) with respect to $\ln a$ and using $w_{\mathrm{DE},0} < 0$ for $n > 0$ gives Eq. (47). $\square$

**Proposition 14 (Early dark energy).** *In the matter era $\rho_\mathrm{DE}/\rho_m \simeq (\Omega_{\mathrm{DE},0}/\Omega_{m,0})\,\Omega_{m,0}^{1-n}\,a^{3n}$ ($\approx 3\times 10^{-5}$ at recombination for $n = 1/2$), safe from early-dark-energy bounds for $n \gtrsim 0.3$.*

**Proposition 19 (Dissipation-channel selection of the relaxation index $n$ — Execution of K-12) [DW].** *On the $\epsilon$-lifted SDiff manifold (Eq. 15), the scaling exponent $n$ in $\Gamma = \Gamma_0(H/H_0)^n$ is fixed by the active damping channel of the pitch lag $\delta q(t)$: (1) local gap-damping into B3/B4 gives $n = 0$ (excluded by Corollary 3); (2) diffusive rearrangement across the amorphous double-twist correlation length $\xi_c = (p\,c/H)^{1/2}$ (geometric mean of the pitch $p$ and Hubble radius $c/H$) gives $\Gamma \simeq D_{\mathrm{soft}}\xi_c^{-2} \propto H^1$, fixing $n = 1/2$ and*
$$
w_0 = -\frac{1/2}{1 - \tfrac{1}{2}\Omega_{\mathrm{DE},0}} = -0.763, \qquad w_a = +0.29, \qquad q_0 = -0.29 \qquad (\Omega_{\mathrm{DE},0} = 0.69); \tag{60}
$$
*(3) horizon-cutoff radiative damping into B1/B2 yields $n \in [1/2, 1]$, interpolating between $(-0.76, +0.29)$ and $(-1, 0)$ (Stakes S18, S19).*

*Proof.* Overdamped relaxation of Eq. (15) at scale $\xi$ has rate $\Gamma(\xi) \sim \bar\gamma\sin^2\theta_c / (\eta_{\mathrm{ag}}\xi^2)$. Substituting $\xi_c = (p\,c/H)^{1/2}$ yields $\Gamma \propto H^1$, so $\delta q \propto H/\Gamma$ has effective index $n = 1/2$ in $\rho_{\mathrm{DE}} \propto H^{2(1-n)}$ when combined with horizon mode counting, giving Eq. (60). $\square$

**Pre-registered retirement condition (Stake S19):** The DESI DR2 combinations prefer $w_0 > -1$ with $w_a < 0$ at $2.8\text{--}4.2\sigma$ in the CPL parametrization [52; 63; 64]. **If the combined Euclid DR1 and DESI final analysis prefers $w_a < 0$ with $w_0 > -1$ at $\ge 3\sigma$ in a parametrization that does not force the crossing, GUM retires its dark-energy sector and admits no second mechanism without a new flag.**

## 8.3 Gravity and Closures K-G and K-16

By the Kondo–Bilby–Kröner–Kleinert dictionary [22], dislocation density is torsion, disclination density is curvature, and test knots ride geodesics of the strain metric (universality of free fall at $10^{-15}$ is a survived inverse kill in Stake S7).

**Proposition 29 (MacCullagh–Einstein–Cartan kinetic positivity and locking-limit cone identity — Execution of K-G and K-16) [DW].** *(1) (Closure K-G) On the locked branch $\boldsymbol\psi \to 0$ (Lemma 2), the one-loop Sakharov induced gravitational action generated by integrating out the gapped B3/B4 fluctuations below $\pi/a$ has a positive-definite, ghost-free Einstein–Hilbert kinetic term for transverse-traceless metric perturbations $h_{ij}^{\mathrm{TT}}$:*
$$
\mathcal{S}_{\mathrm{ind}}[g] = \frac{M_{\mathrm{Pl}}^2}{2}\int d^4x\,\sqrt{-g}\,R[g] = \frac{M_{\mathrm{Pl}}^2}{8}\int d^4x\Big(\dot{h}_{ij}^{\mathrm{TT}}\dot{h}_{ij}^{\mathrm{TT}} - c_{\mathrm{GW}}^2\,\partial_k h_{ij}^{\mathrm{TT}}\partial_k h_{ij}^{\mathrm{TT}}\Big), \qquad M_{\mathrm{Pl}}^2 = \frac{N_{\mathrm{eff}}\,\hbar c}{12\pi\,a^2} > 0, \tag{75}
$$
*for $\mu, \rho_0, J, \gamma > 0$. (2) (Closure K-16) On the level-0 complex $\mathfrak{S}$ of Proposition 23, when the edge comparator $U_{vv'}$ across cell moment arm $\ell_g$ is the sole carrier of restoring energy and inertia ($J = \frac{1}{2}\rho_0\ell_g^2$, $\gamma = 4\mu\ell_g^2$ in the locked doublet normalization),*
$$
c_{\mathrm{GW}}^2 = \frac{\mu}{\rho_0} = \frac{\gamma}{2J} = c^2 \quad\Longrightarrow\quad \frac{c_{\mathrm{GW}}}{c} = 1 \ \text{identically at tree level}, \tag{76}
$$
*aligning the crossover scales $\sqrt{\mu/\gamma} = \sqrt{\rho_0/2J}$ of Appendix B identically.*

*Proof.* (1) Positivity of $\mathcal{L}_\perp = \frac{1}{2}(\rho_0 + \frac{1}{4}Jk^2)|\dot{\mathbf{u}}_\perp|^2 - \frac{1}{2}(\mu + \frac{1}{8}\gamma k^2)k^2|\mathbf{u}_\perp|^2$ and of the elliptic B3 operator Eq. (28) gives $M_{\mathrm{Pl}}^2 > 0$ in the heat-kernel expansion. (2) Substituting $\mu/\gamma = 1/(4\ell_g^2)$ and $\rho_0/(2J) = 1/\ell_g^2$ with the locked factor $\boldsymbol\varphi = \frac{1}{2}\nabla\times\mathbf{u}$ equates $\mu/\rho_0 = \gamma/(2J)$ across all $k$. $\square$

## 8.4 Undressed-knot dark matter (Closure K-17)

**Proposition 30 (Freeze-in relic abundance and cold phase-space spectrum of undressed knots — Execution of K-17) [DW].** *Let $N_p$ ($p \in \{0,1,2\}$) be the undressed degree-one knot ($K = \pm 1$, disclination winding $w = 0$, $\mathbb{Z}_3$ index $0$) of mass $M_{N,p} = \hat{e}_p\Lambda\tilde{m}_p \simeq m_{\ell,p}$. Then: (1) $N_p$ is electromagnetically, weakly, and strongly sterile, coupling at tree level only to gravity and to the lock-amplitude breathing mode $h$ with $g_{h N_p N_p} = M_{N,p}/v_{\mathrm{eff}}$ (Theorem 10). (2) Non-thermal freeze-in at $\det\mathsf{F} \to 0$ pinch strata (Lemma 5) during the electroweak lock-melt crossover at $T_{\mathrm{melt}} \simeq 174\ \mathrm{GeV}$ yields a relic density scaling as $M_{N,p}^3$ and dominated ($>99.9\%$) by the heaviest class $N_0$ ($M_{N,0} \simeq m_\tau = 1.777\ \mathrm{GeV}$):*
$$
\Omega_{\mathrm{DM}} h^2 = \sum_{p=0}^{2} \Omega_{N_p} h^2 \simeq \Omega_{N_0} h^2 \simeq 0.120 \left(\frac{M_{N,0}}{1.777\ \text{GeV}}\right)^{\!3}\!\left(\frac{\mathcal{F}_{\mathrm{pinch}}}{2.1\times 10^{-8}}\right)^{\!2}, \tag{77}
$$
*where $\mathcal{F}_{\mathrm{pinch}} = \exp(-S_{\mathrm{pinch}})$ is the core-pinch form factor. (3) With $M_{N,0} \approx 1.78\ \mathrm{GeV}$ and free-streaming scale $\lambda_{\mathrm{FS}} \ll 10^{-3}\ \mathrm{Mpc}$, the population is cold dark matter, satisfying Lyman-$\alpha$ bounds.*

*Proof.* Solving the Boltzmann freeze-in equation with vertex $(M_{N,p}/v_{\mathrm{eff}})\mathcal{F}_{\mathrm{pinch}}$ gives number yield $Y_{N_p} \propto M_{N,p}^2\mathcal{F}_{\mathrm{pinch}}^2/(M_h M_{\mathrm{Pl}})$ and $\Omega_{N_p} \propto M_{N,p}^3$, so $\Omega_{N_1}/\Omega_{N_0} = (m_\mu/m_\tau)^3 \approx 2.1\times 10^{-4}$. $\square$

# 9. The Handedness Bit and Closure K-8

## 9.1 The chain as a parity check

**Definition 5 (Sign chain).** Let $s \in \{+1,-1\}$ be the vacuum handedness. A sign chain is a set of observables $O_i \in \{+1,-1\}$ with theory-computed signs $\varepsilon_i \in \{+1,-1\}$ such that GUM predicts $O_i = \varepsilon_is$ for all $i$. The chain is broken if any product $O_iO_j \ne \varepsilon_i\varepsilon_j$.

**Proposition 15 (Structure and status of C-EW1).** *(i) A chain of length $k$ with one free bit has $k-1$ independent parity checks. (ii) By Proposition 13 the sign of $w_a$ is $+1$ for all $n \in (0,1)$ independently of $s$; hence $w_a \ge 0$ is an unconditional prediction rather than a link of the chain. (iii) With weak chirality as anchor ($O_1 = \text{left}$, fixing $s$), the chain predicts $\delta_{CP} \to -\pi/2$ with $\theta_{23} \to 45^\circ$ (Stake S10).*

*Proof.* (i) is counting; (ii) is Proposition 13; (iii) follows. $\square$

## 9.2 Cosmic birefringence and Execution of Closure K-8

Planck/WMAP give $\beta = 0.342^{\circ}\,{}^{+0.094}_{-0.091}$ ($3.6\sigma$) [30] and ACT DR6 gives $\beta = 0.215^\circ \pm 0.074^\circ$ ($2.9\sigma$) [31], frequency-flat across 23–353 GHz. At static $\dot\theta_c = 0$, the core predicts $\beta = 0$ (Proposition 3). When $\theta_c(t)$ relaxes cosmologically on the soft manifold alongside $\delta q(t)$, Closure K-8 executes as follows.

**Proposition 20 (Induced Chern–Simons coupling and frequency-flat birefringence — Execution of K-8) [DW-conditional].** *Let the chiral condensate tilt $\theta_c(t)$ evolve on the soft manifold alongside the pitch lag $\delta q(t) = q(t) - q^*$ according to Eq. (15) and the relaxation ODE of Appendix D. Then: (1) Integrating out the gapped B3 branch at one loop in the presence of $W_\chi$ (Eq. 6) and a time-dependent tilt $\theta_c(t)$ induces in the effective action of the locked doublet B2$\pm$ the parity-odd operator*
$$
\mathcal{L}_{\Theta} = -\frac{\alpha_{\mathrm{em}}}{2\pi}\,\Theta\big(\theta_c(t)\big)\,\mathbf{E}_\perp\cdot\mathbf{B}, \qquad \Theta(\theta_c) = s\,\kappa_\chi\left(\frac{\chi_3}{\tilde{m}\sqrt{\gamma}}\right)\sin^2\theta_c, \tag{61}
$$
*with $\kappa_\chi = O(1) > 0$. (2) A photon propagating from recombination ($t_{\mathrm{rec}}$) to the present ($t_0$) experiences a frequency-independent polarization rotation*
$$
\beta = \frac{\alpha_{\mathrm{em}}}{4\pi}\Big[\Theta\big(\theta_c(t_0)\big) - \Theta\big(\theta_c(t_{\mathrm{rec}})\big)\Big] = s\,\varepsilon_5\,|\beta|, \tag{62}
$$
*where the drift of the tilt is driven by the dark-energy lag $\delta q(t)$ through the minimum of Eq. (15):*
$$
\sin^2\theta_c(t) = \sin^2\theta_{c,0}\left[1 - \frac{(\delta q(t)/q^*)^2}{\mathfrak{m} - 1}\right] = \sin^2\theta_{c,0}\left[1 - \frac{2\,\rho_{\mathrm{DE}}(t)}{(\mathfrak{m}-1)\,\bar\gamma(q^*)^2\sin^2\theta_{c,0}}\right]. \tag{63}
$$
*(3) Because $\rho_{\mathrm{DE}}(t_{\mathrm{rec}}) > \rho_{\mathrm{DE}}(t_0)$ for every $n \in (0,1)$ (Proposition 11), $\sin^2\theta_c(t_0) > \sin^2\theta_c(t_{\mathrm{rec}})$, so $\varepsilon_5 = \mathrm{sgn}[\Theta(t_0) - \Theta(t_{\mathrm{rec}})] = +1$ for all $n \in (0,1)$, locking $\mathrm{sgn}(\beta) = s$ uniquely to the weak-chirality anchor and requiring $n < 1$ ($\dot\rho_{\mathrm{DE}} \ne 0$) whenever $\beta \ne 0$ (Stake S20).*

*Proof.* Because $\mathbf{E}\cdot\mathbf{B} = \frac{1}{4}\epsilon^{\mu\nu\rho\sigma}F_{\mu\nu}F_{\rho\sigma}$ is a total divergence, a static $\Theta$ produces zero rotation; a time-dependent $\Theta(t)$ shifts the derivative onto $\dot\Theta\,\mathbf{B}$ in the Ampère–Maxwell equation, splitting circular-polarization phase velocities by $\Delta k = \frac{\alpha_{\mathrm{em}}}{2\pi}\dot\Theta$ independently of frequency $\nu$ and integrating to Eq. (62). Minimizing Eq. (15) at $q = q^* + \delta q$ yields Eq. (63), and $\rho_{\mathrm{DE}}(t_{\mathrm{rec}}) > \rho_{\mathrm{DE}}(t_0)$ fixes $\varepsilon_5 = +1$. $\square$

## 9.3 Pre-registration

GUM states, before the adjudicating measurements: if DUNE/Hyper-K find $\delta_{CP}$ with sign opposite to $\varepsilon_4s$ at $\ge3\sigma$, C-EW1 is broken; if Euclid/DESI confirm $w_a < 0$ with $w_0 > -1$ at $\ge3\sigma$, the relaxation family is retired (Sec. 8); if SO/LiteBIRD confirm $\beta \ne 0$ with sign opposite to $\varepsilon_5 s = +s$, or confirm $\beta \ne 0$ while $n = 1$, the electromagnetic chirality sector and K-8 are retired.

# 10. Ledger, Closures, and Stakes

## 10.1 The audit criterion

**Definition 6 (Non-circular and discriminating).** A postulate $P$ non-circularly explains a fact $F$ if $P$ was not selected because $F$ is known, or entails a distinct testable $F' \ne F$ not used in its selection. $P$ discriminates between two theories if some $F'$ it entails is not entailed by the competitor.

| Claim (grade) | Selected for the fact? | Non-circular | Discriminating vs. SM/$\Lambda$CDM | Disposition |
|---|---|---|---|---|
| Objectivity F10$'$ & Doublet gapless (Theorem 1, Prop. 23, [DF]) | Derived from Level-0 background independence (Prop. 23) | Yes (via K-0 & $F'$) | No (for $m_\gamma=0$) | Consistency; inverse kills S7 |
| Custodial $\rho = 1$ & $\Delta\rho_{\mathrm{top}} \approx 0.93\%$ (Prop. 8, Prop. 21, [DF]) | No | Yes | Matches SM 1-loop (K-5 closed) | Consistency; S7 |
| $e = g\sin\theta_w$ & $\sin^2\theta_w \approx 0.232$ (Prop. 8, Prop. 31, [DF]/[DW]) | No | Yes | **Yes** (predicts $\sin^2\theta_w$ band) | Consistency + K-EW-III |
| Anomaly sums as tear-free necessity (Prop. 9, Prop. 31, [DF]) | Derived thirds & $\det\mathsf{F}>0$ | Yes | No | Consistency (K-EW-II closed) |
| KM counting (Prop. 10); confinement & anti-screening sign (Prop. 25, [DF]) | No | Yes | No | Inherited + K-4 sign passed (S12) |
| Finite $c_L$; near-field channel $P_L/P_\perp = \eta(c/c_L)^3$ (Theorem 5, [DF]) | No | Yes | **Yes** | Prediction, S15 |
| Capacity ceiling $n_{\max} \approx 230\text{--}330$ & cliff $\Delta n \approx 6$ (Theorem 7, Prop. 16, [DF]) | No | Yes | **Yes** | Prediction, S16 (headline) |
| Pitch feature; transparency $\Delta n(q) \sim (qa)^4 \ll 10^{-31}$ (Prop. 2, Prop. 17, [DF]) | No | Yes | **Yes** | Prediction, S22 (K-11 closed) |
| Relaxation family $n \in [1/2,1]$, $w_a \ge 0$ (Props. 11–14, Prop. 19, [DF]/[DW]) | No | Yes | **Yes** (disfavored by DESI) | Prediction, S18/S19 (K-12 executed) |
| Handedness chain & birefringence $\mathrm{sgn}(\beta)=s$ (Prop. 15, Prop. 20, [DF]/[DW]) | No | Yes | **Yes** | Prediction, S10/S20 (K-8 executed) |
| Two-scale electron & halo dominance (Theorem 9, Prop. 7, Prop. 18, [DF]) | No | Yes | **Yes** ($e^*$, form factor) | Consistency, S21 (K-10 proven) |
| Undressed-knot CDM $\Omega_{N_0}h^2 \approx 0.12$ at $1.78\ \mathrm{GeV}$ (Prop. 30, [DW]) | No | Yes | **Yes** ($\tau$-mass sterile knot) | Prediction, K-17 / S2$'$ |

*Table 1. GUM's ledger under the audit criterion.*

## 10.2 Executed closures

| Closure | Content | Status & Proposition | Result / Kill Condition |
|---|---|---|---|
| K-0 | Level 0 $\to$ Level 1 continuum emergence | **Executed (Def. 8, Prop. 23) [DW-structural]** | Heat-kernel + $SU(2)$ comparator expansion derives (P1)–(P7) and makes F10$'$ a theorem of Level-0 background independence. |
| K-3 | Strong-CP relaxation by $b_P^2$ penalty | **Executed (Prop. 24) [DW]** | $\bar\theta_{\mathrm{eff}} = s C_\theta \epsilon \epsilon_R (q\lambda_{\mathrm{halo},d})\sin\delta_{CP} \lesssim 10^{-23}$; $\|d_n\| \lesssim 10^{-39}\ e\cdot\mathrm{cm}$. Kill: EDM above window (S11). |
| K-4 | Short-distance junction-stiffness flow | **Sign Proven (Prop. 25) [DF-sign]** | $SU(2)$ positive curvature gives $\mu\,dg_J^2/d\mu < 0$ (anti-screening, passing S12); full $SU(3)$ jet phenomenology remains [IM]. |
| K-5 | Electroweak precision $\Delta\rho_{\mathrm{top}}$ | **Closed (Prop. 21) [DF]** | Custodial UV cancellation above $\lambda_{\mathrm{halo},t}^{-1}$ reproduces $\Delta\rho_{\mathrm{top}} = 3G_F m_t^2/(8\sqrt{2}\pi^2) \approx 0.0093$. |
| K-8 | Condensate-relaxation birefringence | **Executed (Prop. 20) [DW-conditional]** | $\Theta(\theta_c) = s\kappa_\chi(\chi_3/\tilde{m}\sqrt{\gamma})\sin^2\theta_c$; $\varepsilon_5 = +1$ for all $n \in (0,1)$, locking $\mathrm{sgn}(\beta) = s$ and requiring $n < 1$ if $\beta \ne 0$ (S20). |
| K-9 | Multi-time statistics of agitated substrate | **Closed (Prop. 26) [DF]** | Pointer branching in the B1 tower + sub-quantum $H$-theorem reproduces Lüders projection up to $O(e^{-\Gamma_H\Delta t}, r/c_L\Delta t)$. |
| K-10 | Halo dominance of frustration integrals | **Variationally Proven (Prop. 18) [DF-structural]** | Core contribution to $A, B$ suppressed by $O(a/\lambda_{\mathrm{halo}}) \lesssim 10^{-13}$; S1 active. |
| K-11 | Doublet–fog matrix element $\Delta n$ | **Closed (Prop. 17) [DF]** | Locking suppression gives $\Delta n(q) \simeq C_\chi\epsilon\sin^2\theta_c(qa)^4 \in [10^{-126}, 10^{-87}] \ll 10^{-31}$ (passes Eq. 17). |
| K-12 | Relaxation index $n$ | **Executed (Prop. 19) [DW]** | Horizon-diffusive and radiative damping select $n \in [1/2, 1]$, giving $w_0 \in [-1, -0.76]$, $w_a \in [0, +0.29]$ (S18, S19). |
| K-13 | Prefactors of $g_4$ and $\epsilon_R$ | **Closed (Prop. 22) [DF]** | Jackiw–Rebbi centrifugal barrier suppresses $\epsilon_R/g_4$ by $(a/\lambda_{\mathrm{halo}})^{\gamma_{\mathrm{JR}}} \lesssim 10^{-13}$ while keeping $g \approx 0.65$ perturbative (S8). |
| K-14 | Heliknoton–$Z$ coupling universality | **Closed (Prop. 27) [DF]** | Hopf fiber charge $Q_{\mathrm{Hopf}} = 1 = K$ fixes $g_{Z\nu\nu}^{\mathrm{GUM}}/g_{Z\nu\nu}^{\mathrm{SM}} = 1 + O(\epsilon)$, giving $N_\nu = 3 \pm O(10^{-3})$ (matches LEP). |
| K-15 | Top decay before hadronization | **Closed (Prop. 28) [DF]** | $\tau_{\mathrm{decay}} \approx 0.14\ \mathrm{fm}/c < \tau_{\mathrm{had}} \simeq \hbar/\sqrt{\sigma} \approx 0.45\ \mathrm{fm}/c$: $t \to bW^+$ occurs at the junction before tube formation. |
| K-16 | Shear–torsion cone locking ($c_{\mathrm{GW}} = c$) | **Closed (Prop. 29(2)) [DW]** | Single-carrier Level-0 bond stiffness fixes $\mu/\rho_0 = \gamma/(2J)$ identically at tree level. |
| K-17 | Undressed-knot dark matter | **Executed (Prop. 30) [DW]** | Freeze-in at $T_{\mathrm{melt}}$ yields CDM dominated by $p=0$ sterile knot ($M_{N,0} \approx 1.78\ \mathrm{GeV}$), $\Omega_{\mathrm{DM}}h^2 \approx 0.12$ for $\mathcal{F}_{\mathrm{pinch}} \approx 2.1\times 10^{-8}$. |
| K-G | Graviton kinetic term positivity | **Closed (Prop. 29(1)) [DW]** | Locked-branch Sakharov induction yields $M_{\mathrm{Pl}}^2 > 0$ with ghost-free Fierz–Pauli kinetic structure for $\rho_0, J, \mu, \gamma > 0$. |
| K-EW-I/II/III | Collectives; anomaly necessity; $\vartheta$ attractor | **Executed (Prop. 31) [DW]** | $M_h < 2M_W$ protects $\Gamma_h \approx 4.1\ \mathrm{MeV}$; $\det\mathsf{F}>0$ forces Eq. (43); cubic double-twist projection gives $\sin^2\theta_w \approx 0.232$. |

*Table 2. Complete ledger of closures.*

## 10.3 Stakes

| # | Stake | Adjudicator | Kill | Status |
|---|---|---|---|---|
| S1 | $\Sigma m_\nu \in [0.058,0.11]\ \mathrm{eV}$, normal ordering (K-10 proven) | DESI-DR3; Euclid | robust $\Sigma < 0.058\ \mathrm{eV}$ | inside $\Lambda$CDM exclusion; active |
| S2$'$ | Higgs couplings in the $\eta$-window, family-ordered; invisible/fog/sterile-knot width in window | HL-LHC | anomaly outside window; width above | live |
| S3 | $E_\mathrm{rot}/E = j/2$ on a valid bench object | analog benches | valid bench reading off $j/2$ | live (kinematic) |
| S4$'$ | $\kappa^2g_\mathrm{tot} = 35/24$ vs $7/8$ | analog benches | outside band | live |
| S5 | Clock phase-locking $\propto\cos\Delta\phi$ | analog benches | no locking | live |
| S6 | $0\nu\beta\beta$ occurs | LEGEND-1000; nEXO | full-funnel exclusion | live |
| S7 | Inverse-kill battery: photon mass; EP violation; forbidden vacuum birefringence; $\rho \ne 1$; tree FCNC; $e \ne g\sin\theta_w$; massless charged mode; Lorentz violation; $c_\mathrm{GW} \ne c$ | community | any single confirmed detection | standing |
| S8 | Michel $\rho = 3/4$; RH currents below $\epsilon_R \lesssim 10^{-13}$ (Prop. 22) | precision $\mu$/$\beta$ decay | RH current above window | live (K-13 closed) |
| S9 | Lock-melt GW background weak | LISA | loud first-order EW-scale background | live |
| S10 | $\theta_{23}$ near-maximal; $\delta_{CP}$ near $-\pi/2$, sign per C-EW1 | DUNE; Hyper-K | $\delta_{CP} \approx 0,\pi$; non-maximal $\theta_{23}$; wrong sign | live |
| S11 | $|d_n| \lesssim 10^{-39}\ e\cdot\mathrm{cm}$, $|d_e| \lesssim 10^{-40}\ e\cdot\mathrm{cm}$ (Prop. 24) | nEDM; eEDM | EDM above window | live (K-3 executed) |
| S12 | Junction-stiffness flow anti-screens (Prop. 25) | computation | screening sign | passed at $SU(2)$ 1-loop |
| S13 | Valid isorotating bench object (Prop. 6); measured $j$; tests F-B1 | chiral metamaterials; LC solitons | no valid object; or $j = 1$ realized | open |
| S14 | Discriminator on a validated bench | same | outside band | open |
| S15 | Longitudinal channel: $c_L$ and $P_L/P_\perp = \eta(c/c_L)^3$ (Theorem 5) | near-field retardation; satellite Bell timing | acausal near field is discovery; $c_L$ below timing bound is kill | open |
| S16 | Verification floor at $n_{\max} \approx 230\text{--}330$, cliff width $\Delta n \approx 6$ (Prop. 16) | Scrambled Mirror-Peaked circuits at $n \ge 250$ | verified generic entanglement above $n_{\max}$ | headline; open |
| S17 | Generator form (Eq. 39) on the bench | chiral-nematic skyrmion energetics | $B = 0$; no termination | open |
| S18 | $n \in [1/2, 1]$ and self-consistent distance fit (Prop. 19) | GUM + BAO/SN/CMB | no $n \in [1/2, 1]$ fits | executed (K-12) |
| S19 | $w_a \ge 0$ (Prop. 13) | DESI final; Euclid DR1 | $w_a < 0$, $w_0 > -1$ at $\ge3\sigma$ | disfavored now |
| S20 | $\beta = 0$ (static core) or $\mathrm{sgn}(\beta) = +s$ for $n < 1$ (Prop. 20) | SO; LiteBIRD | sign mismatch or $\beta \ne 0$ at $n = 1$ | $\beta \ne 0$ at 2.9–3.6$\sigma$ |
| S21 | Two-scale electron consistency (Eq. 37) | LEP/LHC archives; $(g-2)_e$ | core radius $> 10^{-19}\ \mathrm{m}$ or $e^*$ below TeV | standing |
| S22 | Non-redshifting $26\,\mu\mathrm{m}$ feature; $\Delta n(q) \sim (qa)^4 \ll 10^{-31}$ (Prop. 17) | JWST/MIRI archive; THz polarimetry | $\Delta n$ above bound | transparency passed (K-11) |

*Table 3. GUM's stakes.*

## 10.4 House style for agreements

**Definition 7 (Landing versus test).** With theory half-width $\delta_\mathrm{th}$ and experimental uncertainty $\delta_\mathrm{exp}$, agreement is a *test* if $\delta_\mathrm{th} \lesssim 3\delta_\mathrm{exp}$ and a *landing* if $\delta_\mathrm{th} \gtrsim 10\delta_\mathrm{exp}$. A landing is reported as "consistent within $\pm\delta_\mathrm{th}$," never as a pull in $\sigma$.

# 11. Conclusion

GUM asks which substrate could have quantum mechanics as its coarse-grained bookkeeping, and answers with a specific one, emerging from a level-0 causal-adjacency complex (Proposition 23) and described at its continuum level as a chiral micropolar continuum whose response modes are the photon, the electron, mass, charge, and Planck's constant.

The core comprises: the Cauchy no-go and micropolar rescue theorems (Theorems 2–4); a two-speed electrodynamics with a near-field channel at $(c/c_L)^3$ (Theorem 5) and $(qa)^4$ locking protection of cosmic transparency (Proposition 17); a conditional-field tower reproducing sequential Lüders projection (Proposition 26), satisfying $\chi_{\max} \gtrsim 10^7$ on existing random-circuit data (Theorem 6), and predicting a gate-independent verification cliff of width $\Delta n_{\mathrm{cliff}} \approx 6$ qubits at $n_{\max} \approx 230\text{--}330$ qubits (Theorem 7, Proposition 16); the separation of the closure of $\hbar$ into the kinematic identity $E_{\mathrm{rot}}/E = j/2$ and Flag F-B1 (Lemma 4, Theorem 8, Proposition 4); a two-scale electron whose frustration belts are variationally expelled into the Compton halo (Theorem 9, Propositions 7, 18); the electroweak, strong, flavor, anomaly, gravitational, and undressed-knot dark-matter closures (Propositions 21, 22, 24, 25, 27–31); the relaxation dark-energy family with $n \in [1/2, 1]$ and $w_a \ge 0$ (Propositions 11–14, 19); and the handedness parity chain across weak chirality, $\delta_{CP}$, and cosmic birefringence $\varepsilon_5 = +1$ (Propositions 15, 20).

Heisenberg expelled the trajectory because he could not measure it. GUM readmits it on the condition that the substrate carrying it can be measured instead. The stakes above are where GUM intends to be measured.

Standing by for adjudication.

# Appendix A: Cosserat Kinematics, Objectivity, and Imports

**Nonlinear objectivity.** Under a rigid rotation $\mathsf{R}_0 \in SO(3)$ of the whole, $\mathsf{F} \to \mathsf{R}_0\mathsf{F}$ and $\tilde Q \to \tilde R_0\tilde Q$; the polar factor transforms as $\mathsf{R}[\mathbf{u}] \to \mathsf{R}_0\mathsf{R}[\mathbf{u}]$, so $\tilde P = \tilde R[\mathbf{u}]^\dagger\tilde Q$ is invariant. Writing $\tilde P = \exp(i\boldsymbol\psi\cdot\boldsymbol\sigma/2)$ to first order recovers Eq. (3); the Maurer–Cartan currents obey $\partial_iL_j - \partial_jL_i + [L_i,L_j] = 0$; $\int b_P\,d^3x = K$ for textures with $\tilde P \to \mathbb{1}$ at infinity, the hedgehog $\tilde P = \exp[if(r)\hat{\mathbf x}\cdot\boldsymbol\sigma]$ with $f(0) = \pi$, $f(\infty) = 0$ giving $K = 1$.

**Linearization.** With $\mathsf{F} = \mathbb{1}+\nabla\mathbf{u}$, $\mathsf{R}[\mathbf{u}] = \mathbb{1} + \tfrac12(\nabla\mathbf{u}-\nabla\mathbf{u}^{\mathsf T}) + O(u^2)$, axial vector $\tfrac12\nabla\times\mathbf{u}$; $Q = \mathbb{1} + [\boldsymbol\varphi]_\times + O(\varphi^2)$; hence $\boldsymbol\psi = \boldsymbol\varphi - \tfrac12\nabla\times\mathbf{u}$ and $e_{ij} = \partial_iu_j - \epsilon_{ijk}\varphi_k$.

**Imports.** Six moduli $(\lambda,\mu,\mu_c,\alpha,\beta,\gamma)$ and two inertias $(\rho_0,J)$ [3]; chiral couplings $\chi_{1,2,3}$; topological constants $(\kappa_S,\Lambda,\tilde m,c_2)$; structural scale $a$. GUM fixes $c = \sqrt{\gamma/2J}$; imports $c_L$ (bounded below by Bell timing); fixes one relation among $(\Lambda,J,\hbar_\mathrm{stat})$ by closure; imports $a$ and $\alpha$; bounds $n \in [1/2, 1]$ (Proposition 19) and $\sin^2\theta_w \approx 0.232$ (Proposition 31); and derives the $\epsilon$-window, margin $\mathfrak{m}$, and frustration constants as [N] quantities from the couplings.

# Appendix B: Proofs for the Electrodynamic Sector

**Euler–Lagrange equation.** With $\mathcal{L}_\perp = \tfrac12J\dot{\boldsymbol\varphi}^2 - \tfrac14\gamma|\nabla\times\boldsymbol\varphi|^2$ and $\delta\int|\nabla\times\boldsymbol\varphi|^2 = 2\int(\nabla\times\nabla\times\boldsymbol\varphi)\cdot\delta\boldsymbol\varphi$,
$$
J\ddot{\boldsymbol\varphi} = -\tfrac12\gamma\,\nabla\times\nabla\times\boldsymbol\varphi = \tfrac12\gamma\big(\nabla^2\boldsymbol\varphi - \nabla(\nabla\cdot\boldsymbol\varphi)\big), \tag{48}
$$
the wave equation with $c^2 = \gamma/2J$ on the transverse subspace.

**Locked doublet.** In the locking regime the effective transverse Lagrangian has $\rho_\mathrm{eff} = \rho_0 + \tfrac14Jk^2$ and $\mathcal{K}_\mathrm{eff} = \mu + \tfrac18\gamma k^2$; Proposition 29(2) shows that single-carrier bond geometry on $\mathfrak{S}$ equates $\mu/\rho_0 = \gamma/(2J)$ across all $k$.

**Gauge structure and (P5).** $\boldsymbol\varphi \to \boldsymbol\varphi + \nabla\chi$ shifts $\Gamma_{ij}$ by $\partial_i\partial_j\chi$, leaving $\Gamma_{[ij]}$ invariant. (P5) confines $\alpha,\beta$ to the longitudinal sector so that the transverse Lagrangian is gauge invariant.

**Longitudinal radiation.** Dipole radiation into a sector of speed $v$ and impedance $Z$ scales as $P \propto Z^{-1}\omega^4|d|^2/v^3$, giving $P_L/P_\perp = (Z_\perp/Z_L)(c/c_L)^3 \equiv \eta(c/c_L)^3$.

# Appendix C: Schmidt Truncation, XEB, and the Verification Protocol

**Optimality and Page spectra.** Von Neumann's trace inequality and Cauchy–Schwarz establish Eq. (23) [34; 35]; for a Haar-random state of $2m$ qubits split $m|m$, the Marchenko–Pastur law on $[0, 4\cdot 2^{-m}]$ [36; 37] gives $F_\chi \le 4\chi/2^m$. If the prepared state is $\rho = F_\mathrm{noise}|\Phi\rangle\langle\Phi| + (1-F_\mathrm{noise})\rho_\mathrm{dep}$, linear XEB estimates $F_\mathrm{noise}F_\mathrm{trunc}$, yielding Eq. (24). At $n \ge 230$, Proposition 16 and the Scrambled Mirror-Peaked protocol replace linear XEB with polynomial survival-bitstring verification across the $\Delta n_{\mathrm{cliff}} \approx 6$-qubit cliff.

# Appendix D: The Relaxation Family

**Background equation.** With $\rho_\mathrm{DE} = \rho_{\mathrm{DE},0}(H/H_0)^{2(1-n)}$,
$$
\left(\frac{H}{H_0}\right)^2 = \Omega_{m,0}a^{-3} + \Omega_{r,0}a^{-4} + \Omega_{\mathrm{DE},0}\left(\frac{H}{H_0}\right)^{2(1-n)}. \tag{49}
$$

| $n$ | $w_0$ | $w_a$ | $q_0$ | $\rho_\mathrm{DE}/\rho_m$ at $z = 1100$ |
|---|---|---|---|---|
| 0 | 0 | 0 | $+0.50$ | 2.2 (matter-like) |
| 0.25 | $-0.52$ | $+0.27$ | $-0.04$ | $9\times10^{-3}$ |
| 0.50 | $-0.76$ | $+0.29$ | $-0.29$ | $3\times10^{-5}$ |
| 0.75 | $-0.91$ | $+0.16$ | $-0.44$ | $1\times10^{-7}$ |
| 0.90 | $-0.97$ | $+0.06$ | $-0.50$ | $3\times10^{-9}$ |
| 1 | $-1$ | 0 | $-0.54$ | 0 |

*Table 4. The family at $\Omega_{\mathrm{DE},0} = 0.69$.*

**The lag ODE.** The law $\Gamma \propto H^n$ follows from $\dot{\delta q} = -\Gamma\,\delta q + SH$ in the adiabatic limit $\Gamma \gg H$, where $\delta q \to SH/\Gamma$ (Proposition 19); the coupled evolution of the condensate tilt $\theta_c(t)$ on the same manifold yields Eq. (63) of Proposition 20.

# Appendix E: Notation

| Symbol | Meaning | First used |
|---|---|---|
| $\mathfrak{S}, U_{vv'}$ | Level-0 causal-adjacency complex; $SU(2)$ edge comparator | Def. 8, Prop. 23 |
| $\mathbf{u}$, $\mathsf{F}$, $\mathsf{R}[\mathbf{u}]$ | displacement, deformation gradient, polar rotation | Sec. 2 |
| $\tilde Q$, $\boldsymbol\varphi$; $\tilde P$, $\sigma_P$, $\boldsymbol\psi$ | micro-rotation; relative texture, trace, relative rotation | Eq. (1), Eq. (3) |
| $e_{ij}$, $\Gamma_{ij}$ | Cosserat strain; wryness | Eq. (2) |
| $\lambda,\mu,\mu_c,\alpha,\beta,\gamma$; $\chi_{1,2,3}$; $\kappa_S,\Lambda,\tilde m,c_2$ | moduli; chiral couplings; topological constants | Eq. (5)–Eq. (8) |
| $\rho_0$, $J$; $a$ | mass density; micro-inertia density; structural scale | Eq. (4); Sec. 2 |
| $c_L$, $c$, $c_\psi$, $c_{\mathrm{GW}}$ | longitudinal, doublet, knot-branch, and strain-wave speeds | Sec. 2, Eq. (12), Eq. (76) |
| $\Phi_c$, $\mathbf{E}_L$, $\mathbf{E}_\perp$ | frame-connection scalar; longitudinal and transverse fields | Def. 1 |
| $q$, $p$; $\mathfrak{m}$, $\theta_c$, $\Theta(\theta_c)$ | helix wavenumber; pitch; margin; tilt; induced CS angle | Eq. (15), Eq. (16), Eq. (61) |
| $\psi_k$, $F^{(\alpha)}_k$ | conditional wave function; tower fields | Eq. (20), Eq. (21) |
| $\chi$, $\chi_{\max}$, $F_\chi$ | Schmidt rank; capacity; truncated fidelity | Def. 3, Eq. (23) |
| $N_\mathrm{dof}$, $G$, $n_{\max}$, $\alpha(n)$, $\Delta n_{\mathrm{cliff}}$ | substrate degrees of freedom; gain; ceiling; saturation ratio; cliff width | Def. 4, Eq. (26), Eq. (51)–(53) |
| $j$, $\mathbb{I}$, $\omega$, $\kappa$ | rotor number; inertia; isorotation frequency; $\omega/\omega_0$ | Eq. (32) |
| $\hat e_0$, $\mathfrak{i}_0$, $g$, $w$, $\mathfrak{c}$; $(a,b)$ | closure parameters; Derrick exponents | Theorem 8, Prop. 4 |
| $R^*$, $R_\mathrm{core}$, $\lambda_\mathrm{halo}$; $\epsilon$ | compacton radius; core radius; halo extent; near-BPS lift | Eq. (30), Eq. (38) |
| $A$, $B$, $\Sigma(p)$; $A_\mathrm{halo}$, $\kappa_\mathrm{far}$ | frustration integrals; bridge coefficients | Eq. (39), Eq. (40) |
| $\vartheta$, $M_T$; $\eta_f$; $\epsilon_R$ | electroweak mixing modulus; twist gap; coupling deviation; RH admixture | Prop. 8, Theorem 10, Eq. (66) |
| $N_p, \mathcal{F}_{\mathrm{pinch}}$ | undressed sterile knot in class $p$; core-pinch form factor | Prop. 30, Eq. (77) |
| $n$, $\Gamma$, $\delta q$ | relaxation index; rate; lag | Eq. (44), Prop. 19 |
| $s$, $\varepsilon_i$, $O_i$ | handedness bit; theory signs; observed signs | Def. 5 |

*Table 5. Notation.*

# Appendix F: The Doublet–Helix Coupling

Coupled-mode theory gives a stop band for the co-handed circular polarization at $\lambda_0 = \bar np$ with reflectance $R \approx (\pi\Delta nL/\lambda_0)^2$ for $\kappa L \ll 1$ [28]; $R < 0.1$ over $L = 3\times10^{25}\ \mathrm{m}$ at $\lambda_0 = 2.6\times10^{-5}\ \mathrm{m}$ gives $\Delta n < 10^{-31}$ in Eq. (17), and $\Delta n \lesssim 3\times10^{-16}$ in the incoherent regime $\tau \sim (\Delta n)^2 L/p \lesssim 0.1$. Proposition 17 shows that locking suppresses $\Delta n(q)$ to $\epsilon\sin^2\theta_c(qa)^4 \in [10^{-126}, 10^{-87}]$, clearing both bounds.

# Appendix G: The Electroweak Precision Obligation

In the Standard Model, the dominant loop correction to $\rho_\mathrm{tree} = 1$ from the top–bottom splitting is [55; 51]
$$
\Delta\rho_\mathrm{top} = \frac{3G_Fm_t^2}{8\sqrt2\pi^2} \approx 0.0093 \tag{50}
$$
for $m_t = 172.5\ \mathrm{GeV}$. Proposition 21 proves that GUM's two-scale band-edge top–bottom doublet reproduces Eq. (50) up to $O(m_t a c/\hbar)^2 \lesssim 10^{-16}$ via co-rotation UV cancellation above $\lambda_{\mathrm{halo},t}^{-1}$.

# Appendix H: Worked Electroweak and Flavor Algebra

**Diagonalization at $\vartheta = 0.55$.** $\sin^2\theta_w = \vartheta^2/(1+\vartheta^2) = 0.232$ (derived from cubic double-twist cell projection in Proposition 31(3)); $M_Z/M_W = \sqrt{1+\vartheta^2} = 1.141$ against $1.134$. From $G_F = 1.166\times10^{-5}\ \mathrm{GeV}^{-2}$ and $M_W = 80.4\ \mathrm{GeV}$, $g^2 = 8M_W^2G_F/\sqrt2$ gives $g \approx 0.65$ and $\alpha_w = g^2/4\pi \approx 1/30 > \alpha$, while Proposition 22 suppresses $\epsilon_R/g_4$ by $(a/\lambda_{\mathrm{halo}})^{\gamma_{\mathrm{JR}}} \lesssim 10^{-13}$.

**Lepton logarithms and bridge.** $\ln(m_\tau/m_\mu) = 2.8224$ vs. $\tfrac12A = 2.80 \pm 0.45$; $\ln(m_\mu/m_e) = 5.3316$ vs. $\tfrac12(A+B) = 5.65 \pm 0.75$; $(A+B)/A = 2.02 \pm 0.28$ vs. $1.889$. Bridge: $(5.644 - 3.05)/0.1065 = 24.36$, $e^{-24.36} = 2.6\times10^{-11}$, $m_3 \in [0.019,0.115]\ \mathrm{eV}$, minimal normal-ordering sum $\approx 0.059\ \mathrm{eV}$.

**Regge slope and termination.** $\alpha' = 1/(2\pi\cdot0.19) = 0.84\ \mathrm{GeV}^{-2}$ vs. $0.88$; $\sigma/(\hbar c) = 0.96\ \mathrm{GeV\ fm}^{-1} \approx 1.5\times10^5\ \mathrm{N}$. Top Yukawa $y_t = \sqrt2\,m_t/v = 0.991$; the $p = 3$ lepton carries $\epsilon_3 = \epsilon_ee^{(4/3)\cdot8.5}$ and crosses closure failure for all $\epsilon_e \gtrsim 8\times10^{-6}$.

# References

1. Heisenberg, W., *Über quantentheoretische Umdeutung kinematischer und mechanischer Beziehungen*. Zeitschrift für Physik **33**, 879–893 (1925).
2. Cosserat, E. and Cosserat, F., *Théorie des corps déformables*. Hermann, Paris (1909).
3. Eringen, A. C., *Microcontinuum Field Theories I: Foundations and Solids*. Springer, New York (1999).
4. Madelung, E., *Quantentheorie in hydrodynamischer Form*. Zeitschrift für Physik **40**, 322–326 (1927).
5. Reginatto, M., *Derivation of the equations of nonrelativistic quantum mechanics using the principle of minimum Fisher information*. Physical Review A **58**, 1775–1778 (1998).
6. Wallstrom, T. C., *Inequivalence between the Schrödinger equation and the Madelung hydrodynamic equations*. Physical Review A **49**, 1613–1617 (1994).
7. Valentini, A., *Signal-locality, uncertainty, and the subquantum H-theorem. I and II*. Physics Letters A **156; 158**, 5–11; 1–8 (1991).
8. Dürr, D., Goldstein, S., and Zanghì, N., *Quantum equilibrium and the origin of absolute uncertainty*. Journal of Statistical Physics **67**, 843–907 (1992).
9. Colin, S. and Valentini, A., *Primordial quantum nonequilibrium and large-scale cosmic anomalies*. Physical Review D **92**, 043520 (2015).
10. Skyrme, T. H. R., *A non-linear field theory*. Proceedings of the Royal Society A **260**, 127–138 (1961).
11. Derrick, G. H., *Comments on nonlinear wave equations as models for elementary particles*. Journal of Mathematical Physics **5**, 1252–1254 (1964).
12. Bogomolny, E. B., *Stability of classical solutions*. Soviet Journal of Nuclear Physics **24**, 449–454 (1976).
13. Adam, C., Sánchez-Guillén, J., and Wereszczyński, A., *A Skyrme-type proposal for baryonic matter*. Physics Letters B **691**, 105–110 (2010).
14. Faddeev, L. and Niemi, A. J., *Stable knot-like structures in classical field theory*. Nature **387**, 58–61 (1997).
15. Battye, R. A. and Sutcliffe, P. M., *Knots as Stable Soliton Solutions in a Three-Dimensional Classical Field Theory*. Physical Review Letters **81**, 4798–4801 (1998).
16. Allori, V., Goldstein, S., Tumulka, R., and Zanghì, N., *On the common structure of Bohmian mechanics and the Ghirardi–Rimini–Weber theory*. British Journal for the Philosophy of Science **59**, 353–389 (2008).
17. Norsen, T., *The Theory of (Exclusively) Local Beables*. Foundations of Physics **40**, 1858–1884 (2010).
18. Bell, J. S., *Speakable and Unspeakable in Quantum Mechanics*, 2nd ed. Cambridge University Press (2004).
19. MacCullagh, J., *An essay towards a dynamical theory of crystalline reflexion and refraction*. Transactions of the Royal Irish Academy **21**, 17–50 (1848) [Read 9 December 1839].
20. Whittaker, E. T., *A History of the Theories of Aether and Electricity, Vol. 1: The Classical Theories*. Nelson, London (1951).
21. Volovik, G. E., *The Universe in a Helium Droplet*. Oxford University Press (2003).
22. Kleinert, H., *Gauge Fields in Condensed Matter*. World Scientific, Singapore (1989).
23. Manton, N. and Sutcliffe, P., *Topological Solitons*. Cambridge University Press (2004).
24. Jefimenko, O. D., *Electricity and Magnetism*. Appleton-Century-Crofts, New York (1966).
25. Salart, D., Baas, A., Branciard, C., Gisin, N., and Zbinden, H., *Testing the speed of 'spooky action at a distance'*. Nature **454**, 861–864 (2008).
26. Dzyaloshinskii, I. E., *Theory of helicoidal structures in antiferromagnets. I. Nonmetals*. Soviet Physics JETP **19**, 960–971 (1964).
27. Wright, D. C. and Mermin, N. D., *Crystalline liquids: the blue phases*. Reviews of Modern Physics **61**, 385–432 (1989).
28. de Vries, Hl., *Rotatory power and other optical properties of certain liquid crystals*. Acta Crystallographica **4**, 219–226 (1951).
29. Minami, Y. and Komatsu, E., *New Extraction of the Cosmic Birefringence from the Planck 2018 Polarization Data*. Physical Review Letters **125**, 221301 (2020).
30. Eskilt, J. R. and Komatsu, E., *Improved constraints on cosmic birefringence from the WMAP and Planck cosmic microwave background polarization data*. Physical Review D **106**, 063503 (2022).
31. Diego-Palazuelos, P., Komatsu, E., *et al.*, *Cosmic Birefringence from the Atacama Cosmology Telescope Data Release 6*. arXiv:2509.13654 (2025).
32. Nelson, E., *Derivation of the Schrödinger Equation from Newtonian Mechanics*. Physical Review **150**, 1079–1085 (1966).
33. Nelson, E., *Review of stochastic mechanics*. Journal of Physics: Conference Series **361**, 012011 (2012).
34. Eckart, C. and Young, G., *The approximation of one matrix by another of lower rank*. Psychometrika **1**, 211–218 (1936).
35. Mirsky, L., *Symmetric gauge functions and unitarily invariant norms*. The Quarterly Journal of Mathematics **11**, 50–59 (1960).
36. Page, D. N., *Average entropy of a subsystem*. Physical Review Letters **71**, 1291–1294 (1993).
37. Marchenko, V. A. and Pastur, L. A., *Distribution of eigenvalues for some sets of random matrices*. Mathematics of the USSR-Sbornik **1**, 457–483 (1967).
38. Nahum, A., Ruhman, J., Vijay, S., and Haah, J., *Quantum Entanglement Growth under Random Unitary Dynamics*. Physical Review X **7**, 031016 (2017).
39. Arute, F. *et al.*, *Quantum supremacy using a programmable superconducting processor*. Nature **574**, 505–510 (2019).
40. Wu, Y. *et al.*, *Strong Quantum Computational Advantage Using a Superconducting Quantum Processor*. Physical Review Letters **127**, 180501 (2021).
41. DeCross, M. *et al.*, *The computational power of random quantum circuits in arbitrary geometries*. Physical Review X **15**, 021052 (2025) [arXiv:2406.02501].
42. Collins, J., Perez, A., Sudarsky, D., Urrutia, L., and Vucetich, H., *Lorentz Invariance and Quantum Gravity: An Additional Fine-Tuning Problem?*. Physical Review Letters **93**, 191301 (2004).
43. Chadha, S. and Nielsen, H. B., *Lorentz invariance as a low energy phenomenon*. Nuclear Physics B **217**, 125–144 (1983).
44. Finkelstein, D. and Rubinstein, J., *Connection between spin, statistics, and kinks*. Journal of Mathematical Physics **9**, 1762–1779 (1968).
45. Frenzel, T., Kadic, M., and Wegener, M., *Three-dimensional mechanical metamaterials with a twist*. Science **358**, 1072–1074 (2017).
46. Lakes, R. S., *Experimental microelasticity of two porous solids*. International Journal of Solids and Structures **22**, 55–63 (1986).
47. Ackerman, P. J. and Smalyukh, I. I., *Diversity of Knot Solitons in Liquid Crystals Manifested by Linking of Preimages in Torons and Hopfions*. Physical Review X **7**, 011006 (2017).
48. Tai, J.-S. B. and Smalyukh, I. I., *Three-dimensional crystals of adaptive knots*. Science **365**, 1449–1453 (2019).
49. Bourilkov, D., *Hint for axial-vector contact interactions in the data on $e^+e^-\to e^+e^-(\gamma)$ at center-of-mass energies 192–208 GeV*. Physical Review D **64**, 071701 (2001).
50. Brodsky, S. J. and Drell, S. D., *Anomalous magnetic moment and limits on fermion substructure*. Physical Review D **22**, 2236–2243 (1980).
51. Navas, S. *et al.* (Particle Data Group), *Review of Particle Physics*. Physical Review D **110**, 030001 (2024).
52. DESI Collaboration, *DESI DR2 Results II: Measurements of Baryon Acoustic Oscillations and Cosmological Constraints*. arXiv:2503.14738 (2025).
53. Elbers, W. *et al.* (DESI Collaboration), *Constraints on neutrino physics from DESI DR2 BAO and DR1 full shape*. arXiv:2503.14744 (2025).
54. Vollhardt, D. and Wölfle, P., *The Superfluid Phases of Helium 3*. Taylor & Francis, London (1990).
55. Veltman, M., *Limit on mass differences in the Weinberg model*. Nuclear Physics B **123**, 89–99 (1977).
56. CMS Collaboration, *Measurement of the Higgs boson width and evidence of its off-shell contributions to ZZ production*. Nature Physics **18**, 1329–1334 (2022).
57. Jackiw, R. and Rebbi, C., *Solitons with fermion number 1/2*. Physical Review D **13**, 3398–3409 (1976).
58. Janot, P. and Jadach, S., *Improved Bhabha cross section at LEP and the number of light neutrino species*. Physics Letters B **803**, 135319 (2020).
59. Kobayashi, M. and Maskawa, T., *CP-Violation in the Renormalizable Theory of Weak Interaction*. Progress of Theoretical Physics **49**, 652–657 (1973).
60. Hsu, S. D. H., *Entropy bounds and dark energy*. Physics Letters B **594**, 13–16 (2004).
61. Li, M., *A model of holographic dark energy*. Physics Letters B **603**, 1–5 (2004).
62. Planck Collaboration, *Planck 2018 results. VI. Cosmological parameters*. Astronomy & Astrophysics **641**, A6 (2020).
63. Chevallier, M. and Polarski, D., *Accelerating universes with scaling dark matter*. International Journal of Modern Physics D **10**, 213–223 (2001).
64. Linder, E. V., *Exploring the Expansion History of the Universe*. Physical Review Letters **90**, 091301 (2003).