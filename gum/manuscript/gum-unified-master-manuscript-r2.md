---
title: "Is There a Substrate Whose Coarse-Grained Bookkeeping Is Quantum Mechanics?"
subtitle: "Geometrische Umdeutung Mechanik: An Inverse Umdeutung, Its Theorems, Closures, Corrections, and Stakes — Revision 2"
author: "[Authors to be completed]"
date: "2026-10-14"
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

## Geometrische Umdeutung Mechanik: An Inverse *Umdeutung*, Its Theorems, Closures, Corrections, and Stakes — Revision 2

**Authors:** [to be completed]  
**Date:** 2026-10-14  
**Status:** DRAFT for review. Revision 2 of the master manuscript of 2026-09-06, reconciled with the revision of 2026-09-28 and with the independent verification of 2026-10-14.

### Abstract

In 1925 Heisenberg founded quantum mechanics on an *Umdeutung* — a reinterpretation of kinematics that expelled the trajectory and installed the observable algebra as the primitive. *Geometrische Umdeutung Mechanik* (GUM) executes the inverse: it asks which **substrate** could possess the quantum formalism as its coarse-grained bookkeeping. GUM uses the word *substrate* for its sole ontological primitive — that which exists prior to medium, material, geometry, force, space, and time, all of which GUM treats as response descriptions of the substrate at successive levels of coarse-graining. At its continuum level the substrate is described by a displacement field and an independent $SU(2)$-lifted micro-rotation field, with a stored energy that depends on orientation only through the rotation of grains relative to their lattice, a handed constitutive law, and higher-gradient stabilizers admitting textures of integer degree. This revision states GUM's killable core after two rounds of correction. Its principal results are: (i) MacCullagh's rotational aether, inconsistent as a Cauchy continuum, is the orientation sector of the substrate, and Maxwell's equations follow in the locking limit; the longitudinal sector obeys a locality dichotomy — completing it by transverse projection is acausal at every finite speed, while the local Gauss completion reproduces the retarded Maxwell field exactly for every longitudinal speed $c_L$ — so the near-field channel of the previous draft is withdrawn as an electromagnetic prediction and the near-field experiment becomes a null test; $c_L$ survives as the update speed of the quantum tower, where it is exposed to bipartite sidereal timing and to the Bancal–Barnea multipartite dichotomy. (ii) The wave function is bookkeeping for a tower of conditional fields on $\mathbb{R}^3$ whose pointer branching reproduces sequential Lüders projection; a dimension-counting theorem bounds any classical substrate that represents every state, a reachable-set theorem shows that circuits cannot test that bound, and the testable content is the dense-storage hypothesis, under which mirror circuits must show a gate-independent return-probability cliff of 90%–10% width at most $4.4$ qubits, with midpoint $7\pm3$ qubits above $\log_2N_\mathrm{eff}$, moving with register geometry. (iii) The structural scale is no longer an open interval: the Sakharov-induced Planck mass of the locked branch, inverted with the measured $G$, fixes $\ell_s=(0.4$–$1.3)\,\ell_\mathrm{P}$, which places the cliff at $n_q^\ast\approx320$–$340$ qubits for laboratory registers and drives every $\ell_s$-suppressed effect to its extreme. (iv) Planck's constant is *constrained*, not derived, by the closure of an isorotating knot — one relation among three imports — and if the de Broglie clock is a physical rotation it predicts a channeling resonance at $80.9$ MeV/$c$ in Si$\langle110\rangle$ that scales with row spacing. (v) The electron is a two-scale object, a topological core at $\ell_s$ and a halo of length $(c_\psi/c)\hbar/Mc$; the halo dominance of the frustration integrals, printed as proven in the previous draft, is re-posed, with the $10^{-18}$ spatial uniformity of atomic transition frequencies as the constraint any execution must meet. (vi) Dark energy is the lag of a slow substrate mode; the relaxation family $\rho_\mathrm{DE}\propto H^{2(1-n)}$ has $w_a\ge0$ and no phantom crossing, sits on the wrong side of DESI DR2 for every $n<1$ (its least-disfavored member is $\Lambda$CDM), and is tied to cosmic birefringence by one soft coordinate: a nonzero rotation requires $n<1$, and its redshift profile is recombination-dominated. The same lag drifts the lepton mass ratios through the flavor bridge, and quasar bounds on $m_p/m_e$ bound the lag to $|\delta q/q^\ast|\lesssim10^{-5}$, which fixes a lower bound on the soft-mode stiffness and retires the "neutrinos lighter in the past" option. (vii) The sterile $\tau$-mass knot proposed as dark matter is re-graded to conjecture: freeze-in is withdrawn, and the Higgs invisible width is the adjudicator — $3$–$6\%$ if undressed knot pairs are created at Yukawa strength, the Standard-Model $0.1\%$ if they are not. Of the closures the previous draft printed as executed, nine stand as printed or corrected, four are re-graded to consistency conditions, two to conjecture, and three are re-posed; six closures are posed for the first time, among them the normalization audit that holds every integral-dependent number at its grade until the integrals are published. Twenty-seven stakes close the paper.

**Keywords:** substrate, Cosserat continuum, MacCullagh aether, pilot-wave theory, local beables, dense storage, mirror circuits, isorotating soliton, Skyrme electron, dark energy, cosmic birefringence, falsifiability

---

> **Draft status.** DRAFT for internal review, not for circulation. Revision 2 of the master manuscript of 2026-09-06. Numerical values marked [N] derive from profile or frustration integrals quoted with their uncertainties and at their ledger grade; they are held under the normalization audit K-N (Sec. 10.5) and the results that depend on them are graded accordingly (Appendix I). Every closed-form number printed here is recomputed by the companion script `check_revision.py`.

> **What changed, in one paragraph.** Two documents preceded this one: the master manuscript of 2026-09-06 and a revision of 2026-09-28 that corrected part of it. An independent verification of the master manuscript on 2026-10-14 recomputed every closed-form number, found six internal inconsistencies and three proofs that do not hold as printed, and listed thirteen items to fix. This revision reconciles the two documents and executes the thirteen items. The near-field channel is withdrawn (locality dichotomy); the finite-speed dichotomy of Bancal et al. is adopted; the far-infrared observable is a redshift-swept trough; the halo length is one formula throughout; the Weinberg-angle landing is recomputed; the near-BPS window is assigned to a species and propagated; the cliff is stated with its exact geometry and re-labeled as a test of dense storage; the structural scale is fixed by the gravity closure; closures K-4, K-5, K-14, K-15, K-EW-I are re-graded; K-10, K-16, K-G are re-posed; the dark-matter execution is withdrawn in favor of a conjecture with a stake; S7, S11, S22 are rephrased; S19 and S20 are merged; the soft-mode stiffness is bounded; and every [N] quantity is registered with the grade of what depends on it. Section 10.5 lists the corrections.

# 1. Introduction

## 1.1 The inverse *Umdeutung*

Heisenberg's 1925 paper [1] adds no hypothesis to classical mechanics. It reinterprets its kinematics: the electron's position is replaced by an array of transition amplitudes, and the array, not the orbit, becomes the object the theory is about. Everything that follows — the commutator, the uncertainty relations, the operator algebra as the primitive of quantum theory — descends from that act of *Umdeutung*. The trajectory is not refuted. It is expelled from the vocabulary because it cannot be measured.

GUM executes the inverse act. It readmits the trajectory, demotes the operator algebra to bookkeeping, and asks what must exist so that the bookkeeping comes out *exactly* as quantum mechanics. GUM's answer is a substrate.

## 1.2 The substrate and the Level-0 to Level-1 passage (Closure K-0)

GUM uses the word *substrate* for its sole ontological primitive. The substrate is not a medium, because a medium is something that fills space; it is not a material, because a material is something with properties in space and time; it is not a geometry, a force, a space, or a time. All of these are, in GUM, *response descriptions* of the substrate — bookkeeping of its behavior at successive levels of coarse-graining — and the substrate exists prior to every one of them.

GUM's levels of description are the following:

- **The substrate** (level 0): the primitive, possessing only adjacency, succession, and internal relative-comparison structure.
- **The continuum description** (level 1): the substrate's coarse-grained bookkeeping in terms of a displacement field $\mathbf{u}$ and an $SU(2)$-lifted orientation field $\tilde Q$ on a parameter space $(\mathbf{x},t)$ that records adjacency and succession. Geometry, force, and the light cone are constructed *from* these fields; they are not presupposed. The continuum description has the mathematical form of a chiral micropolar (Cosserat) continuum [2; 3], and it is the level at which this paper works.
- **The quantum description** (level 2): the bookkeeping of localized textures of the continuum fields and of their agitation, which has the form of quantum mechanics.
- **The Standard-Model description** (level 3): the bookkeeping of the textures' response modes, which has the form of gauge fields, fermions, and a scalar sector.

GUM's wager is that a single substrate, with the continuum description of Sec. 2, is the cheapest object whose response descriptions include the quantum kinematic frame, exact electromagnetism, a topological account of charge and statistics, and the skeleton of the electroweak, strong, and flavor sectors — and that every claim GUM makes about it is either a theorem of its postulates or a stake with a signed kill. GUM does not assert that the vacuum *is* this substrate. GUM asserts that it is arranged to be efficiently wrong about whether it is.

**Definition 8 (Level-0 adjacency-succession complex).** The substrate at level 0 is a countable directed causal-adjacency complex $\mathfrak{S} = (\mathcal{V}, \mathcal{E}_{\mathrm{adj}}, \mathcal{E}_{\mathrm{succ}}, \mathcal{H})$ in which: (i) each spatial slice $\Sigma_k$ is a combinatorial 3-complex of vertices $v \in \mathcal{V}_k$ with bounded coordination valency $z_v$ centered on a regular isotropic mean $z_0$ (the pre-geometric precursor of Flags F5/F8); (ii) each directed succession edge $e_{\mathrm{succ}}: v \in \Sigma_k \to v' \in \Sigma_{k+1}$ records primitive succession; and (iii) each oriented adjacency edge $e_{vv'} \in \mathcal{E}_{\mathrm{adj}}$ carries a parallel-transport comparator $U_{vv'} \in SU(2)$ relating the internal binary frame at $v$ to that at $v'$, with plaquette holonomy $H_p = \prod_{\partial p} U_{vv'} \in SU(2)$.

**Proposition 23 (Coarse-grained emergence of the Cosserat continuum — Execution of K-0) [DW-structural].** *Let $\mathfrak{S}$ be coarse-grained over mesoscopic cells $\Omega_x$ containing $N_{\mathrm{cell}} \gg 1$ vertices of combinatorial diameter $\ell_{\mathrm{cell}} \gg 1$, identifying the structural scale $\ell_s$ with the unit graph step. Then: (1) The combinatorial graph-Laplacian heat kernel $K_\tau(v, v') = (e^{-\tau\Delta_{\mathrm{graph}}})_{vv'}$ embeds $\Sigma_k$ at scales $\tau \gg 1$ into a smooth 3-manifold $M^3 \simeq \mathbb{R}^3$ equipped with a flat reference metric $\delta_{ij}$ determined by the isotropic second moment of $\mathcal{E}_{\mathrm{adj}}$ (Flags F5/F8), and embeds the succession index $k$ into a continuous parameter $t \in \mathbb{R}$. (2) Departures of vertex positions from their reference graph embedding define the continuum displacement field $\mathbf{u}(\mathbf{x}, t) \in \mathbb{R}^3$ with deformation gradient $\mathsf{F} = \mathbb{1} + \nabla\mathbf{u}$, while non-intersecting succession histories enforce $\det\mathsf{F} > 0$. (3) Choosing a local reference trivialization on $\Omega_x$, the vertex frame orientation defines $\tilde{Q}(\mathbf{x}, t) \in SU(2)$, while the edge comparators $U_{vv'}$ evaluated relative to the deformed-graph rotation $\tilde{R}[\mathbf{u}]$ define the objective relative texture $\tilde{P}(\mathbf{x}, t) = \tilde{R}[\mathbf{u}]^\dagger\tilde{Q} \in SU(2)$ (Eq. 1, Postulate P3). (4) By Wilsonian gradient expansion of any $SU(2)$-objective graph Hamiltonian $\mathcal{H}[U_{vv'}, z_v]$ symmetric under global frame rotations and possessing a fixed-sign chiral triple-edge term $\mathrm{Tr}(U_{12}U_{23}U_{31} - U_{13}U_{32}U_{21})$, the leading continuum energy functional up to sixth order in gradients is uniquely of the form $W = W_2 + W_\chi + W_4 + W_{6+0}$ (Eqs. 4–8, Postulates P1–P7).*

*Proof.* (1) For any statistically homogeneous, isotropic complex of spectral dimension $d_s = 3$, Varadhan's heat-kernel asymptotics $-\lim_{\tau\to 0} 4\tau\ln K_\tau(v, v') = d^2_{\mathrm{eff}}(v, v')$ defines a Riemannian distance that is Euclidean ($\delta_{ij}$) on the defect-free reference complex $\mathfrak{S}_0$. (2) A bijective combinatorial homeomorphism $\mathfrak{S}_k \to \mathfrak{S}_0$ induces a diffeomorphism of the coarse-grained manifold with $\det\mathsf{F} > 0$; topological changes in vertex connectivity correspond to coincidence strata where $\det\mathsf{F} \to 0$ (Lemma 5). (3) Because the level-0 Hamiltonian $\mathcal{H}$ depends only on intrinsic edge comparators $U_{vv'}$ and combinatorial valencies $z_v$ (neither of which references an external ambient space), its continuum limit is automatically invariant under rigid simultaneous rotations $\mathsf{F} \to \mathsf{R}_0\mathsf{F}$, $\tilde{Q} \to \tilde{R}_0\tilde{Q}$, establishing Objectivity (Postulate P3, Flag F10$'$) as a theorem of level-0 background independence rather than an ad hoc continuum postulate. (4) Expanding the objective invariants of $(\mathsf{F}, \tilde{P})$ in powers of $\ell_s\nabla$ yields at $O(\nabla^2)$ the six isotropic Cosserat invariants of $W_2$ (Eq. 5) plus the three parity-odd invariants of $W_\chi$ (Eq. 6), at $O(\nabla^4)$ the Skyrme commutator $W_4$ (Eq. 7), and at $O(\nabla^6)$ the topological density squared $\frac{1}{2}\Lambda^2 b_P^2$ together with the potential $\mathcal{V}(\sigma_P)$ (Eq. 8). $\square$

GUM states the status of this proposition precisely, because the previous draft did not. Items (1), (2) and (4) are an *embedding* theorem: the hypotheses — statistical isotropy, spectral dimension three, an $SU(2)$ comparator on every edge, a fixed-sign chiral triple term — are the continuum postulates in combinatorial dress, and the proposition shows that a level-0 object carrying them inherits (P1)–(P7) under coarse-graining. It does not show that a generic causal-adjacency complex acquires them. Item (3) is the genuine output: Objectivity F10$'$ is a consequence of background independence, not a further postulate. The grade [DW-structural] is to be read as "consistent with, and reducing (P3) to, level-0 background independence", not as "derived from level 0".

## 1.3 The ledger and the killable core

Every claim below carries a grade. [DF]: derived-form, following from the stated postulates with no further input. [DW]: derived-with-window. [CAL]: mechanism derived, rate calibrated. [IM]: imported. [CJ]: conjecture, which may not be built upon silently. [posed]: a closure with named deliverables and a kill. [N]: a numerical value from an integral not reproduced here, registered in Appendix I. [RG]: a stake re-graded in this revision. GUM also applies to itself the audit criterion of Definition 6: a claim is *non-circular* if the postulate behind it was not adopted because the claimed fact is known, or entails distinct testable facts; it is *discriminating* if a competing theory does not entail the same fact. GUM's killable core is the set of discriminating claims. GUM keeps its non-discriminating results for what they are — consistency conditions that any substrate must satisfy — and labels them so at each occurrence. This revision applies the criterion more strictly than the previous draft did: a result whose content is the reproduction of a Standard-Model number by assuming the Standard-Model integrand is graded [IM] or [DW], never [DF].

## 1.4 Results

GUM's principal results, with the changes of this revision marked, are the following:

- **Definition 8, Proposition 23** [DW-structural]. Level-0 emergence of the Level-1 Cosserat continuum as an embedding theorem, rendering Objectivity F10$'$ a consequence of background independence (Closure K-0).
- **Theorem 2, Theorem 3, Theorem 4** [DF]. MacCullagh's curl-only aether violates linearized objectivity as a Cauchy continuum and is consistent as the orientation sector of the substrate; Maxwell's source-free equations follow in the locking limit with $c^2 = \gamma/2J$.
- **Definition 1, Theorems 5, 11, 12, Corollary 4, Proposition 32** [DF, corrected]. The longitudinal sector's completions; the Gauss completion reproduces the retarded Maxwell field exactly for every $c_L$; the transverse completion is acausal; $c_L$ is invisible to electromagnetic probes; the near-field channel is withdrawn and the near-field experiment is a null test (Stake S15 [RG]).
- **Propositions 2, 3, 17, 34, 35, Theorem 14, Corollary 5** [DF/DW, corrected]. The pitch window $21.8$–$24.7\ \mu$m; the cosmological Bragg passage and a far-infrared trough with a fixed blue edge; the transparency bound $\Delta n\lesssim6\times10^{-17}$; locking suppression $\Delta n\simeq\epsilon\sin^2\theta_c(q\ell_\mathrm{lock})^4$, so that the trough bounds the locking length (Closure K-11 conditional, Stake S22 [RG]).
- **Lemma 3, Theorem 6, Corollary 1, Proposition 26** [DF]. A depth-$d$ tower is a rank-$(d{+}1)$ separable approximation; pointer branching reproduces multi-time Lüders projection up to finite-$c_L$ terms (Closure K-9); random-circuit data give $\chi_{\max} \gtrsim 10^{7}$.
- **Theorem 7, Corollary 2, Theorem 15, Corollary 6, Definition 10, Theorems 16, 17, Proposition 38, Corollary 7** [DF, corrected]. Dimension counting; reachable sets; dense storage; the exact cliff with 90%–10% width $4.4$ qubits and midpoint $\log_2N_\mathrm{eff}+\log_2(2\ln 3GD/\ln2)-1$; its dependence on register geometry (Stakes S16 [RG], S29).
- **Theorem 13, Proposition 39, Flag F-NS** [DF, new]. Finite-speed nonlocality: the bipartite sidereal bound and the Bancal–Barnea dichotomy; GUM takes the no-signaling horn and predicts a multipartite deviation (Stake S28).
- **Proposition 29, Corollary 8** [DW, inverted]. The Sakharov-induced Planck mass fixes $\ell_s=\sqrt{N_\mathrm{eff}/12\pi}\,\ell_\mathrm{P}$; every $\ell_s$-dependent number is restated there.
- **Lemma 4, Theorem 8, Propositions 4, 5, 6, 36, 37** [DF, re-graded]. $E_\mathrm{rot}/E = j/2$ is kinematic; the solvability window $j < 2a/(a+b)$; $\hbar=\mathfrak c\Lambda\sqrt J$ is one relation among three imports; the physical clock implies the $\alpha$–$\mu$ discriminant and a channeling resonance (Stakes S13, S23, S24).
- **Theorem 9, Proposition 7, Proposition 18 (posed)** [DF / posed]. The two-scale electron; the halo $(c_\psi/c)\hbar/Mc$; halo dominance of the frustration integrals re-posed with its uniformity constraint (Closure K-10, Stakes S21, S32).
- **Propositions 8–10, 21, 22, 24, 25, 27, 28, 31** [DF/DW/IM/CJ, re-graded]. The electroweak, strong, flavor and anomaly sectors at their honest grades; the per-species near-BPS window; the corrected Weinberg-angle landing $0.227\pm0.009$; the strong sector posed (K-Q).
- **Propositions 11–15, 19, 20, 40, Corollary 3** [DF/DW, confronted]. The relaxation family and its status against DESI DR2; the merged lag–birefringence stake with its redshift profile; the pitch-drift bound on the soft-mode stiffness (Closures K-12, K-8, K-23; Stake S19/20).
- **Conjecture K-17, Proposition 41** [CJ, new stake]. The sterile $\tau$-mass knot without freeze-in; the Higgs invisible width as adjudicator (Stake S31).

## 1.5 Lineage and conventions

The hydrodynamic reading of the Schrödinger equation is Madelung's [4]; the quantum potential from a Fisher-information penalty is Reginatto's [5]; the circulation-quantization gap is Wallstrom's [6], discharged in GUM through single-valuedness of a texture angle. The Born rule as an equilibrium reached by an $H$-theorem is Valentini's and Dürr–Goldstein–Zanghì's [7; 8; 9]. Localized textures as particles descend from Skyrme [10] through Derrick's obstruction [11] and its Bogomolny-type escapes [12; 13]; knotted textures were studied by Faddeev and Niemi and by Battye and Sutcliffe [14; 15]. The replacement of the wave function by a primitive ontology in three-dimensional space is that of Allori, Goldstein, Tumulka, and Zanghì [16], and the tower of local fields is Norsen's [17], answering Bell [18]. MacCullagh's aether [19; 20] and Cosserat elasticity [2; 3] are the two nineteenth-century objects whose marriage is GUM's electromagnetic sector; Kelvin's gyrostatic model realized MacCullagh's rotational elasticity mechanically [20]. The finite-speed dichotomy is Bancal, Pironio, Acín, Liang, Scarani and Gisin's [65], sharpened to three parties by Barnea et al. [66]. The chemical-potential defusal of the zero-point ledger is Volovik's [21]; the defect–geometry dictionary is Kleinert's [22]; the induced-gravity estimate is Sakharov's [67].

Units $\hbar = c = 1$ except where units are the point. Latin indices run over $1,2,3$; $A_{(ij)} = \tfrac12(A_{ij}+A_{ji})$, $A_{[ij]} = \tfrac12(A_{ij}-A_{ji})$. The structural scale is written $\ell_s$ (the previous draft's $a$), the locking length $\ell_\mathrm{lock}\equiv\sqrt{\gamma/4\mu_c}$ (which the previous draft also called $a$), and the Planck length $\ell_\mathrm{P}$. "Continuum" refers to the level-1 description and carries no ontological weight.

# 2. The Substrate in Its Continuum Description

## 2.1 Kinematic fields and objectivity

A point of the continuum description carries a position and an orientation. The state at $(\mathbf{x},t)$ comprises the displacement $\mathbf{u} \in \mathbb{R}^3$, with deformation gradient $\mathsf{F} = \mathbb{1} + \nabla\mathbf{u}$ and $\det\mathsf{F} > 0$ (tear-free substrate), and the micro-rotation $\tilde Q \in SU(2)$, the double cover of the grain orientation $Q = \pi(\tilde Q) \in SO(3)$. Polar decomposition $\mathsf{F} = \mathsf{R}[\mathbf{u}]\mathsf{U}$ extracts the rotation carried by the deformation itself. GUM's order parameter is the *relative texture*
$$
\tilde P(\mathbf{x}) \equiv \tilde R[\mathbf{u}(\mathbf{x})]^\dagger\,\tilde Q(\mathbf{x}) \in SU(2), \qquad \sigma_P \equiv \tfrac12\mathrm{Tr}\,\tilde P, \qquad \tilde P = \sigma_P\mathbb{1} + i\boldsymbol\pi\cdot\boldsymbol\sigma,\ \ \sigma_P^2 + \boldsymbol\pi^2 = 1, \tag{1}
$$
which records how the grains are turned relative to the lattice they sit in and is invariant under a rigid rotation of the whole (Appendix A). The order parameter lives on $S^3$. GUM's objectivity principle — Flag F10$'$, reduced to level-0 background independence in Proposition 23 — is that the potential sector depends on orientation only through $\tilde P$ and its derivatives; the kinetic sector may use absolute $\tilde Q$.

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
\mathcal{K} = \tfrac12\rho_0\dot{\mathbf{u}}^2 + J\,\mathrm{Tr}\big[(\tilde Q^{-1}\partial_t\tilde Q)^\dagger(\tilde Q^{-1}\partial_t\tilde Q)\big], \qquad W = W_2 + W_\chi + W_4 + W_{6+0}, \tag{4}
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
W_{6+0} = \tfrac12\Lambda^2b_P^2 + \mathcal{V}(\sigma_P), \qquad b_P = -\frac{1}{24\pi^2}\epsilon_{ijk}\mathrm{Tr}(L_iL_jL_k), \qquad \mathcal{V} = \tilde m_V^2(1-\sigma_P) + c_2(1-\sigma_P)^2, \tag{8}
$$
with $c_2 \in [-\tilde m_V^2/2,\ \tilde m_V^2/6)$. The kinetic coefficient in Eq. (4) is $J$, so that the rotational kinetic energy is $\tfrac12J|\boldsymbol\omega|^2$ and the electromagnetic sector's $c^2=\gamma/2J$ holds with the same $J$ (the previous draft printed $\tfrac12J$; correction 1 of Sec. 10.5). $W_2$ sets the wave speeds; $W_\chi$ is the handedness reservoir; $W_4$ is the Derrick–Hobart escape [11]; $W_{6+0}$ is the BPS-Skyrme-lineage sector [13] producing compactons, near-saturated topological bounds, and the band gap. The gap of the relative-rotation sector collects the locking and potential stiffnesses,
$$
\tilde m^2\equiv4\mu_c+\tfrac14\tilde m_V^2,\qquad\omega_0\equiv\tilde m/\sqrt J,\qquad\gamma_\mathrm{eff}\equiv\gamma+\beta, \tag{8a}
$$
with $\tilde m_V$ the potential coefficient that enters the Bogomolny constant of Sec. 5 (correction 2 of Sec. 10.5). Units: $[\Lambda] = E^{1/2}L^{3/2}$, $[\tilde m] = E^{1/2}L^{-3/2}$, $[J] = ET^2L^{-3}$; $[\Lambda\sqrt J] = ET$ and $\Lambda\tilde m_V$ is the rest-energy unit of the substrate.

**Postulates consumed below.** **(P1)** Cosserat energetics with micro-inertia $J > 0$. **(P2)** The isotropic quadratic sector Eq. (5). **(P3)** Objectivity F10$'$ (Proposition 23). **(P4)** The locking regime: $\mu_c$ large, so low-frequency transverse motion has $\boldsymbol\psi \to 0$. **(P5$'$)** The Gauss completion of the longitudinal sector, Flag F-G of Sec. 3.3 (replacing the previous P5, which Proposition 5 of the 2026-09-28 revision showed to be unnecessary in the transverse sector, where $\beta$ only renormalizes $\gamma\to\gamma_\mathrm{eff}$). **(P6)** The topological sector Eq. (7)–Eq. (8) with textures of integer degree $K \in \pi_3(S^3) = \mathbb{Z}$ [10; 23]. **(P7)** The chiral sector Eq. (6) with the near-BPS window $\epsilon \equiv [W_2 + W_\chi + W_4]/[W_{6+0}] \ll 1$ on knots (Flag F9). The window is a property of a species, not of the substrate: it is stated for the electron, $\epsilon_e\in[8\times10^{-6},\ 3\times10^{-3}]$ [N], and propagated to the other knots by the scaling of Sec. 7.1 (correction 7 of Sec. 10.5). Flags F5/F8 assert a periodic-on-average, statistically isotropic lattice at the structural scale $\ell_s$.

**Lemma 2 (The locking energy).** *$\mu_ce_{[ij]}e_{[ij]} = 2\mu_c|\boldsymbol\psi|^2$. Hence $\mu_c$ penalizes relative rotation only, and $\mu_c \to \infty$ enforces $\boldsymbol\varphi = \tfrac12\nabla\times\mathbf{u}$.*

*Proof.* From Eq. (3), $e_{[ij]}e_{[ij]} = \epsilon_{ijk}\epsilon_{ijl}\psi_k\psi_l = 2|\boldsymbol\psi|^2$. $\square$

## 2.3 Balance laws and the four branches

Variation of Eq. (4) gives
$$
\rho_0\ddot u_i = \partial_j\sigma_{ji}, \qquad J\ddot\varphi_i = \partial_jm_{ji} + \epsilon_{ijk}\sigma_{jk} + \tau^{(6+0)}_i, \qquad \sigma_{ji} = \frac{\partial W}{\partial e_{ji}},\quad m_{ji} = \frac{\partial W}{\partial\Gamma_{ji}}, \tag{9}
$$
with non-symmetric stress whose antisymmetric part sources micro-rotation (an intrinsic Einstein–de Haas mechanism). Linearizing about the uniform locked state with $\mathbf{k} = k\hat{\mathbf z}$ yields four branches, the $3+3$ count exact:
- **B1** — longitudinal acoustic, $c_L^2 = (\lambda+2\mu)/\rho_0$, finite. The frame-connection scalar and the tower's update live here (Sec. 3, Sec. 4).
- **B2$\pm$** — the locked transverse doublet, $\omega = ck$, two polarizations, gapless: the photon.
- **B3** — the relative-rotation branch, $\omega^2 = \omega_0^2 + c_\psi^2k^2$: Klein–Gordon with gap $\omega_0 = \tilde m/\sqrt J$ and cone $c_\psi$: the knot branch.
- **B4** — longitudinal twist: the light$\leftrightarrow$knot pump and the neutral member of the weak triplet (Sec. 7).

The transverse sector factorizes exactly if and only if the *cone condition*
$$
\frac{\mu}{\rho_0}=\frac{\gamma_\mathrm{eff}}{2J}\equiv c^2 \tag{9a}
$$
holds (Proposition 1 of the 2026-09-28 revision): the doublet is then $\omega=ck$ for every $k$ with eigenvector $\boldsymbol\psi\equiv0$, at finite $\tilde m$ and without any cone-locking flow, and the relative-rotation branch has
$$
c_\psi^2=c^2+\frac{\tilde m^2}{4\rho_0}>c^2. \tag{9b}
$$
Two consequences, both absent from the previous draft, are recorded here (correction 4 of Sec. 10.5). First, the doublet's own dispersion is exactly lightlike in the continuum description, so discreteness enters only through level-0 corrections $\omega^2=c^2k^2[1+\xi_\gamma(k\ell_s)^2+\dots]$, bounded in Sec. 4.6. Second, the matter cone is *not* the light cone: knots are textures of the relative-rotation sector and inherit its limiting speed, so $(c_\psi-c)/c\simeq\tilde m^2/(8\rho_0c^2)=(\ell_g\omega_0/c)^2/8$, with $J\equiv\rho_0\ell_g^2$ and $\ell_g$ the radius of gyration of the grains, is a maximal-attainable-velocity difference between matter and light. At the vacuum gap that sets the matter cone — the weak triplet of Sec. 7.3, $\hbar\omega_0\simeq M_Wc^2$ — it is $4.7\times10^{-20}$ for $\ell_g=1.5\times10^{-27}$ m, at the edge of the vacuum-Cherenkov and photon-decay bounds [42; 43]; requiring $\lesssim10^{-20}$ gives $\ell_g\lesssim7\times10^{-28}$ m (erratum E2 of the 2026-09-28 revision, adopted). This is a constraint on the micro-inertia, and it is an inverse kill in Stake S7.

## 2.4 Objectivity as gauge principle

**Theorem 1 (The doublet is gapless).** *Under (P1)–(P4), a uniform co-rotation of lattice and grains costs no energy, and the locked transverse doublet is gapless to all orders in the potential sector.*

*Proof.* By Lemma 1 every objective variable vanishes for a uniform co-rotation, so $W$ does; the $k \to 0$ limit of the locked transverse mode is a uniform co-rotation; hence $\omega(k) \to 0$. Nonlinearly, $\tilde P$ is invariant under $\tilde Q \to \tilde R_0\tilde Q$, $\mathsf{R}[\mathbf{u}] \to \mathsf{R}_0\mathsf{R}[\mathbf{u}]$, so the entire potential sector contributes no mass to B2 at any order. $\square$

The theorem is a theorem of (P3), and (P3) is adopted — as gauge symmetry historically was — by demanding that an unwanted mass term vanish. Under Definition 6 it therefore does not *explain* photon masslessness, and GUM does not claim that it does. What (P3) entails beyond masslessness are three further facts: achirality of the doublet at tree level (locking quenches $\chi_3$ on B2, with regeneration $(k\ell_s)^2$-suppressed); kinematic stability of vacuum photons (by Eq. (9b) the line $\omega = ck$ lies strictly below the B3 hyperbola); and the absence of any gapless charged mode (any branch carrying net disclination winding pays the locked tension). These are standing inverse kills (Stake S7). The previous draft listed a fourth fact, a measurable electromagnetic departure from Maxwell's theory through finite $c_L$. Section 3.3 shows that, in any local completion that recovers Gauss's law, there is none.

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

**Theorem 4 (Source-free Maxwell equations).** *Let the transverse orientation sector obey (P1), (P2), with Lagrangian density $\mathcal{L}_\perp = \tfrac12J\dot{\boldsymbol\varphi}^2 - \tfrac14\gamma_\mathrm{eff}|\nabla\times\boldsymbol\varphi|^2$ on $\nabla\cdot\boldsymbol\varphi = 0$. Define*
$$
\mathbf{B} \equiv \kappa_B\nabla\times\boldsymbol\varphi, \qquad \mathbf{E}_\varphi \equiv -\kappa_B\dot{\boldsymbol\varphi}, \qquad \mathbf{A} \equiv \kappa_B\boldsymbol\varphi. \tag{11}
$$
*Then $\nabla\cdot\mathbf{B} = 0$ and $\nabla\times\mathbf{E}_\varphi = -\partial_t\mathbf{B}$ identically; $\partial_t\mathbf{E}_\varphi = c^2\nabla\times\mathbf{B}$ dynamically with*
$$
c^2 = \frac{\gamma_\mathrm{eff}}{2J}; \tag{12}
$$
*and the re-convention $\boldsymbol\varphi \to \boldsymbol\varphi + \nabla\chi$ is the gauge transformation $\mathbf{A} \to \mathbf{A} + \kappa_B\nabla\chi$, leaving $\mathbf{B}$, $\mathbf{E}_\varphi$, and $\mathcal{L}_\perp$ invariant.*

*Proof.* The identities are $\nabla\cdot\nabla\times = 0$ and $\nabla\times\partial_t = \partial_t\nabla\times$. The Euler–Lagrange equation of $\mathcal{L}_\perp$ is $J\ddot{\boldsymbol\varphi} = -\tfrac12\gamma_\mathrm{eff}\nabla\times\nabla\times\boldsymbol\varphi$ (Appendix B), so $\partial_t\mathbf{E}_\varphi = (\gamma_\mathrm{eff}/2J)\nabla\times\mathbf{B}$. Gauge invariance follows from $\nabla\times\nabla\chi = 0$; the symmetric wryness term $\beta$ renormalizes $\gamma$ to $\gamma_\mathrm{eff}$ and has no other transverse effect (Appendix B). $\square$

## 3.3 The longitudinal sector and the locality dichotomy

Two of Maxwell's equations are identities of Eq. (11), one is the dynamics of B2, and Gauss's law is not among them.

**Proposition 1 (The transverse identification carries no static field).** *With $\mathbf{E} = \mathbf{E}_\varphi$ alone, a static field $\mathbf{E}_0 \ne 0$ requires $\boldsymbol\varphi(t) = \boldsymbol\varphi(0) - \mathbf{E}_0t/\kappa_B$, an orientation growing without bound. Electrostatics requires a longitudinal piece of $\mathbf{E}$ that is not $-\kappa_B\dot{\boldsymbol\varphi}$.*

The longitudinal field is supplied by the B1 sector. Let $\rho_q$ and $\mathbf{j}_q$ be the disclination winding density and current; by degree conservation (Lemma 5) they obey $\partial_t\rho_q + \nabla\cdot\mathbf{j}_q = 0$. The *frame-connection scalar* $\Phi_c$ is the longitudinal potential of B1 sourced by winding density,
$$
\left(\frac{1}{c_L^2}\partial_t^2 - \nabla^2\right)\Phi_c = \frac{\rho_q}{\varepsilon^*}, \tag{13}
$$
with retarded conditions, and the total electric field is $\mathbf{E} \equiv \mathbf{E}_\varphi - \nabla\Phi_c$. Write $\Phi_\infty \equiv (-\nabla^2)^{-1}\rho_q/\varepsilon^*$ for the instantaneous Coulomb potential and $(\mathbf{E}^M,\mathbf{B}^M)$ for the retarded Maxwell fields of $(\rho_q,\mathbf{j}_q)$. Moving winding sources the orientation sector through a torque-current $\mathbf{J}_\varphi$:
$$
\partial_t\mathbf{E}_\varphi = c^2\nabla\times\mathbf{B} - \frac{\mathbf{J}_\varphi}{\varepsilon^*}, \qquad \partial_t\mathbf{B} = -\nabla\times\mathbf{E}_\varphi. \tag{79}
$$
The previous draft did not specify $\mathbf{J}_\varphi$. Everything that it called "two-speed electrodynamics" depends on that choice.

**Definition 1 (Completions of the longitudinal sector).** A *completion* is a specification of $\mathbf{J}_\varphi$ as a causal functional of $(\rho_q,\mathbf{j}_q,\Phi_c)$. Two are distinguished: the *transverse completion* (T), $\mathbf{J}_\varphi = \mathsf{P}_\perp\mathbf{j}_q$, so that $\mathbf{E}_\varphi$ stays divergence-free — the reading implicit in the previous draft; and the *Gauss completion* (G), $\mathbf{J}_\varphi = \mathbf{j}_q - \varepsilon^*\partial_t\nabla\Phi_c$, a local functional. For any completion the *defect current* is $\mathbf{j}_\mathrm{def} \equiv \mathbf{J}_\varphi - \mathbf{j}_q + \varepsilon^*\partial_t\nabla\Phi_c$, with defect density $\rho_\mathrm{def}$ defined by $\partial_t\rho_\mathrm{def} + \nabla\cdot\mathbf{j}_\mathrm{def} = 0$, $\rho_\mathrm{def}\to0$ in the past.

**Theorem 5 (Defect representation).** *For any completion, $(\mathbf{E},\mathbf{B})$ obey Maxwell's equations with sources $(\rho_q+\rho_\mathrm{def},\ \mathbf{j}_q+\mathbf{j}_\mathrm{def})$. Consequently*
$$
\mathbf{E} - \mathbf{E}^M = \mathbf{E}^M[\rho_\mathrm{def},\mathbf{j}_\mathrm{def}], \qquad \mathbf{B} - \mathbf{B}^M = \mathbf{B}^M[\rho_\mathrm{def},\mathbf{j}_\mathrm{def}], \tag{80}
$$
*the deviation from Maxwell's theory is the retarded Maxwell field of the conserved defect current, and the Gauss defect is $\nabla\cdot\mathbf{E} - \rho_q/\varepsilon^* = \rho_\mathrm{def}/\varepsilon^*$.*

*Proof.* Faraday's law and $\nabla\cdot\mathbf{B} = 0$ hold because $\nabla\times\nabla\Phi_c = 0$. From Eq. (79), $\partial_t\mathbf{E} = c^2\nabla\times\mathbf{B} - (\mathbf{j}_q+\mathbf{j}_\mathrm{def})/\varepsilon^*$ by the definition of $\mathbf{j}_\mathrm{def}$. Taking the divergence of Eq. (79) and using Eq. (13) and both continuity equations gives $\partial_t(\nabla\cdot\mathbf{E}) = \partial_t(\rho_q+\rho_\mathrm{def})/\varepsilon^*$, hence Gauss's law with the total source, given that all fields vanish before the sources switch on. Maxwell's equations with retarded conditions have a unique solution, linear in the sources. $\square$

**Theorem 11 (Locality dichotomy).** *(i) In (T), $\mathbf{j}_\mathrm{def} = \varepsilon^*\partial_t\nabla(\Phi_c - \Phi_\infty)$ and*
$$
\mathbf{E}^{(T)} - \mathbf{E}^M = -\nabla(\Phi_c - \Phi_\infty), \qquad \mathbf{B}^{(T)} = \mathbf{B}^M. \tag{81}
$$
*If a source that is static for $t<0$ changes its dipole moment at $t=0$ inside a ball of radius $R_0$, then at every point with $|\mathbf{x}| > R_0 + c_Lt$ the field has already changed by $-\Delta\mathbf{E}_C(\mathbf{x})$, minus the change of the instantaneous Coulomb field. (T) is therefore acausal at every finite speed and permits instantaneous signaling in the substrate frame; at $c_L = \infty$ it coincides with (G) in the Coulomb gauge and is causal. (ii) In (G), $\mathbf{j}_\mathrm{def} \equiv 0$, so $(\mathbf{E},\mathbf{B}) = (\mathbf{E}^M,\mathbf{B}^M)$ exactly, for every $c_L \in (0,\infty]$. The two pieces $\mathbf{E}_\varphi = \mathbf{E}^M + \nabla\Phi_c$ and $-\nabla\Phi_c$ are separately $c_L$-causal and their sum is $c$-causal. The constitutive content of (G) is the local constraint*
$$
\kappa_B\nabla\cdot\boldsymbol\varphi + \frac{1}{c_L^2}\partial_t\Phi_c = 0, \tag{82}
$$
*the velocity-gauge condition $\nabla\cdot\mathbf{A} + c_L^{-2}\partial_t\Phi = 0$ of Maxwell theory [24] with $\mathbf{A} = \kappa_B\boldsymbol\varphi$ and $\Phi = \Phi_c$.*

*Proof.* (i) $\mathsf{P}_\perp\mathbf{j}_q = \mathbf{j}_q - \mathsf{P}_L\mathbf{j}_q$ and, by continuity and $\rho_q = -\varepsilon^*\nabla^2\Phi_\infty$, $\mathsf{P}_L\mathbf{j}_q = \varepsilon^*\partial_t\nabla\Phi_\infty$; hence the stated $\mathbf{j}_\mathrm{def}$. A purely longitudinal conserved current generates no magnetic field, and its electric field is the instantaneous gradient $-\nabla(\Phi_c - \Phi_\infty)$, which gives Eq. (81) through Theorem 5. Outside the $c_L$-cone of the source, $\Phi_c$ still equals its old static value while $\Phi_\infty$ has changed, and the Maxwell field outside its light cone is the old static field, so the total field there is the old field minus $\Delta\mathbf{E}_C$. (ii) $\mathbf{j}_\mathrm{def} = 0$ by definition, and Theorem 5 gives exact agreement. The divergence of $\mathbf{E}_\varphi$ is $\nabla\cdot\mathbf{E}^M + \nabla^2\Phi_c = c_L^{-2}\partial_t^2\Phi_c$ by Eq. (13); with $\mathbf{E}_\varphi = -\kappa_B\dot{\boldsymbol\varphi}$ and vanishing past data, this integrates to Eq. (82). $\square$

**Corollary 4 ($c_L$ is invisible to electromagnetic probes).** *In (G), no measurement that couples to charges only through the Lorentz force, or to radiation only through $(\mathbf{E},\mathbf{B})$, can determine $c_L$. In particular the longitudinal radiation of relative power $\eta(c/c_L)^3$ claimed by the previous draft does not load the source: it is an internal exchange between B1 and the longitudinal micro-rotation whose sum reproduces Maxwell's fields and hence Maxwell's radiation reaction.*

*Proof.* Forces, radiation reaction, and the Poynting balance are functionals of $(\mathbf{E},\mathbf{B})$, which by Theorem 11(ii) are Maxwell's for every $c_L$. $\square$

**Flag F-G (Gauss completion).** GUM adopts (G) as its core completion: Eq. (82) is a constitutive law of the longitudinal micro-rotation (postulate P5$'$). Under Definition 6 this is circular — F-G is adopted because it recovers Gauss's law — and GUM says so. What F-G buys is a precise statement of the substrate's gauge: gauge freedom is a redundancy of the *bookkeeping*, while the substrate itself realizes one gauge, the velocity gauge with speed $c_L$, in which the grain orientation *is* the potential. Whether Eq. (82) can be derived from Eq. (4) rather than imposed is posed closure **K-18**, with three deliverables: the derivation (for instance as the stiff limit of a term $\propto(\kappa_B\nabla\cdot\boldsymbol\varphi + c_L^{-2}\partial_t\Phi_c)^2$), the defect current of any completion the action actually produces, and the sign structure of the longitudinal energy.

**Proposition 32 (Energy bookkeeping at finite $c_L$).** *Suppose, under F-G, that winding sources feel the Lorentz force of the total fields and that the energy of the longitudinal sector is positive definite, with B1 normalized as $\tfrac12\varepsilon^*(c_L^{-2}\dot\Phi_c^2 + |\nabla\Phi_c|^2)$. Then for a neutral source with time-periodic dipole moment $\mathbf{d}(t)$ the assumptions are inconsistent at finite $c_L$: the retarded solution of Eq. (13) has a radiation zone carrying the time-averaged power*
$$
\frac{P_L}{P_M} = \frac12\left(\frac{c}{c_L}\right)^3 \tag{83}
$$
*relative to Maxwell's dipole power $P_M$, whereas exact Maxwell fields require the longitudinal sector's net flux to vanish. At least one of the following holds: (a) the longitudinal sector's energy is indefinite, as for the scalar and longitudinal photons of the Lorenz gauge in Gupta–Bleuler quantization; (b) the source feels an additional radiation reaction of relative size Eq. (83), so that (G) holds only up to a defect current of that order; or (c) $c_L = \infty$.*

*Proof.* In a time-periodic state the time-averaged power delivered by the sources equals the time-averaged flux to infinity, the transverse flux plus the longitudinal flux. By Theorem 11(ii) the delivered power is Maxwell's, so the longitudinal flux must average to zero; a positive-definite sector with outgoing radiation carries strictly positive flux whenever its radiation field is nonzero. The far-zone expansion of the retarded potential of a neutral source gives $\Phi_c\simeq\hat{\mathbf n}\cdot\dot{\mathbf d}(t-r/c_L)/(4\pi\varepsilon^*c_Lr)$, whose flux $-\varepsilon^*\dot\Phi_c\nabla\Phi_c$ integrates to $\ddot{\mathbf d}^2/(12\pi\varepsilon^*c_L^3)$, against Maxwell's $\ddot{\mathbf d}^2/(6\pi\varepsilon^*c^3)$. $\square$

The proposition locates the previous draft's $(c/c_L)^3$ channel exactly: it is not an electromagnetic signal but the energy a positive-energy longitudinal sector would leak, and with $c_L\ge10^4c$ it is at most $5\times10^{-13}$ of the dipole power. Option (c) has a structural cost: it removes the finite longitudinal speed altogether, so the tower's finite update speed of Sec. 4.5 would be a separate modulus, breaking cross-lock C-L. Which option the action realizes is part of K-18. Any local completion other than (G) — for instance one in which the longitudinal micro-rotation follows its own B4 dynamics instead of Eq. (82) — has $\mathbf{j}_\mathrm{def}\ne0$, localized inside the fastest cone of the local dynamics, and by Eq. (80) its signature is a retarded Maxwell field radiated by the defect current, with the two-cone near-field structure of Stokes's elastodynamic Green's function (Appendix B). Its amplitude is a deliverable of K-18; under F-G it is zero.

## 3.4 The near-field experiment as a null test

Stake S15 is re-graded [RG]: GUM's core predicts *no* electromagnetic precursor, and the near-field experiment tests F-G. What a violation would look like is worth printing, because the previous draft's Theorem 5(ii) predicted it and the experiment is cheap. Under (T), a $1$ nC relativistic bunch deflected by $1$ mm in $1$ ns would update the Coulomb field at $10$ m by $\Delta E_C\simeq9\times10^{-6}$ V/m within $r/c_L\le3$ ps, against the radiation pulse of $3\times10^{-3}$ V/m arriving at $r/c = 33$ ns. The two are separated by $33$ ns, so the measurement is a timing measurement with $10^6$-shot averaging, not an amplitude measurement. A clean protocol has four elements: an abrupt source (a pulsed dipole or a kicked bunch); battery-powered field sensors at $10$–$100$ m with analog-optical readout, so that no metallic path joins source and sensor; White Rabbit time transfer at the $10$ ps level; and a blinded analysis of the window $0<t<r/c$ binned in sidereal time, because of the following kinematics.

**Proposition 33 (Lab-frame ordering of substrate-frame signals).** *Let the lab move with velocity $\mathbf{v}_M$ relative to the substrate frame, and let an influence propagate at speed $c_L$ in the substrate frame from a source event to a receiver at substrate-frame distance $r$ in direction $\hat{\mathbf n}$. On Einstein-synchronized lab clocks the arrival time is*
$$
t_\mathrm{lab} = \gamma_v\,r\left(\frac{1}{c_L} - \frac{\mathbf{v}_M\cdot\hat{\mathbf n}}{c^2}\right). \tag{84}
$$
*The influence arrives before the source event whenever $\mathbf{v}_M\cdot\hat{\mathbf n} > c^2/c_L$, possible for every $v_M\gtrsim30\ \mathrm{km\,s^{-1}}$ when $c_L\ge10^4c$. As the Earth rotates, $t_\mathrm{lab}$ oscillates with sidereal period; for $v_M = 369.8\ \mathrm{km\,s^{-1}}$ (the CMB dipole), an east–west baseline and $r = 100$ m the full swing is $\simeq0.8$ ns.*

*Proof.* Lorentz transformation of the arrival event $(r/c_L, r\hat{\mathbf n})$ from the substrate frame to the lab (Appendix F). $\square$

The proposition is frame-agnostic about which frame is the substrate's: it turns any positive signal into a measurement of $\mathbf{v}_M$, and it is the same kinematics that governs the tower's influences in Sec. 4.5, where GUM's core *does* predict an effect.

## 3.5 Charge, Coulomb, and Aharonov–Bohm

The elementary charge is a wedge-disclination dressing of the knot: the triad convention winds irremovably around a defect line. For a dressed knot, charge is triple-locked — disclination winding $w$ at field level, knot degree $K$ (the dressing is bound to the texture), and compact-phase integer at point level — three independent integer locks on indivisibility [DF]. Whether an *undressed* degree-one knot is a solution of Eqs. (4)–(8) is not decided by the lock; it is the first deliverable of K-17 (Sec. 8.4). Static defect equilibrium in Eq. (13) gives the Coulomb far field $\mathbf{E} = (q/4\pi\varepsilon^*)\hat{\mathbf r}/r^2$. A charged texture transported around enclosed flux $\Phi_B$ acquires the holonomy $\Delta\phi = (q/\hbar)\oint\mathbf{A}\cdot d\mathbf{l} = q\Phi_B/\hbar$ [DF]; under F-G the holonomy is gauge-invariant, as it must be. The fine-structure constant $\alpha$ is imported as a constitutive stiffness ratio [IM].

## 3.6 The structured vacuum: pitch, passage, trough, and the locking length

A conical texture of pitch wavenumber $q$ in a sector with twist stiffness $\gamma_s$, chiral gain $\chi_s$, and gap $\Delta_s$ has free-energy density
$$
f(\theta,q) = \sin^2\theta\left(-\chi_sq + \tfrac12\gamma_sq^2\right) + \tfrac12\Delta_s^2\theta^2, \tag{15}
$$
optimized at $q^* = \chi_s/\gamma_s$ with condensation iff $\chi_s^2 > \gamma_s\Delta_s^2$ (Dzyaloshinskii's criterion [26]) [DF]. On the $\epsilon$-lifted SDiff manifold of the $(6+0)$ vacuum the margin $\mathfrak{m} \equiv \bar\chi^2/(\bar\gamma\bar\Delta^2) = 1.9 \pm 0.4$ [N] places the ground state in the amorphous double-twist network (blue fog, Flag F13 [DW]) [27] with condensate tilt $\sin\theta_c = \sqrt{1-1/\mathfrak{m}} = 0.69 \pm 0.11$ [N]. The pitch is fixed by the flavor sector (Sec. 7.2): the neutrino is the pitch quantum, $m_3c^2 = \hbar qc$, $p = 2\pi/q = hc/m_3c^2$.

**Proposition 34 (The pitch window).** *With normal ordering, the oscillation floor $m_3\ge\sqrt{\Delta m^2_{31}} = 0.0503$ eV, and the upper edge $m_3\le0.057$ eV of Stake S1,*
$$
p\in[21.8,\ 24.7]\ \mu\mathrm{m}, \qquad c/(\bar np)\in[12.1,\ 13.8]\ \mathrm{THz}\times\bar n^{-1}. \tag{85}
$$
*If the $\Lambda$CDM bound $\Sigma m_\nu<0.064$ eV holds [52; 53], then $m_3\le0.0503$ eV and $p\simeq24.6\ \mu$m.*

*Proof.* $hc = 1.23984$ eV μm divided by $m_3$. For normal ordering $\Sigma m_\nu = m_1 + \sqrt{m_1^2+\Delta m^2_{21}} + \sqrt{m_1^2+\Delta m^2_{31}}$; at $\Sigma m_\nu = 0.064$ eV, $m_3 = 0.0503$ eV (Appendix H). $\square$

The previous draft's central value $p\simeq26\ \mu$m, from $m_3 = 0.047$ eV, lies below the oscillation floor that the same draft used to truncate Stake S1; the window of Eq. (85) is the one consistent with the truncation (correction 10 of Sec. 10.5). It is subject to K-N.

**Theorem 14 (Cosmological Bragg passage).** *Let a helical medium of constant physical pitch $p$, mean index $\bar n$, and birefringence $\Delta n\ll\bar n$ fill a flat FRW universe with expansion rate $H(z)$, and let a photon be observed at wavelength $\lambda_\mathrm{obs}$ from a source at redshift $z_s$, propagating along the local helix axis. Define the edge $\lambda_\mathrm{edge}\equiv\bar np$ and the passage parameter*
$$
\Pi(z)\equiv\frac{\pi^2}{2}\left(\frac{\Delta n}{\bar n}\right)^2\frac{c}{p\,H(z)}. \tag{86}
$$
*Then: (i) the photon crosses the co-handed stop band exactly once if $\lambda_\mathrm{edge}\le\lambda_\mathrm{obs}\le\lambda_\mathrm{edge}(1+z_s)$, at $1+z_r = \lambda_\mathrm{obs}/\lambda_\mathrm{edge}$, and never otherwise; (ii) in the adiabatic passage the co-handed reflectance is*
$$
R(z_r) = 1-\exp[-\Pi(z_r)], \tag{87}
$$
*and the counter-handed polarization is transmitted; (iii) the transmitted spectrum of an unpolarized source carries a trough of intensity $1-R/2$ and circular polarization $R/(2-R)$ between the fixed blue edge $\lambda_\mathrm{edge}$ and the red end $\lambda_\mathrm{edge}(1+z_s)$.*

*Proof.* The local wavelength at redshift $z$ is $\lambda_\mathrm{obs}/(1+z)$; it equals $\lambda_\mathrm{edge}$ once, at $z_r$, and lies in the stop band of fractional width $\Delta n/\bar n$ in a neighborhood of $z_r$. Along the ray the coupled-mode equations for the co-handed amplitudes have coupling $g_c = \pi\Delta n/(\bar np)$ and a detuning that sweeps at rate $(2\pi/p)H(z_r)/c$ at resonance. For a linear sweep the contra-directional problem is of Landau–Zener form, and the reflected fraction is $1-\exp(-\pi g_c^2/|d\delta/d\ell|)$, as for chirped Bragg gratings [28]; substitution gives Eq. (86) (Appendix F). The counter-handed mode is off-resonant. (iii) follows by averaging over the two circular polarizations. $\square$

**Corollary 5 (Corrected transparency bound).** *Since $H(z)$ is smallest today, $\Pi$ is largest for $z_r\to0$. Requiring $R\le R_\mathrm{max}$ at every resonance redshift gives*
$$
\frac{\Delta n}{\bar n}\le\left[\frac{2\,pH_0}{\pi^2c}\ln\frac{1}{1-R_\mathrm{max}}\right]^{1/2} = 6.2\times10^{-17}\left(\frac{p}{24.6\ \mu\mathrm{m}}\right)^{1/2}\qquad(R_\mathrm{max} = 0.1). \tag{88}
$$

The previous draft's bound $\Delta n\lesssim10^{-31}$ assumed a photon stays in resonance over a gigaparsec; cosmic redshift forbids that, since the resonant path is only $(\Delta n/\bar n)\,c/H$, which for $\Delta n = 10^{-31}$ is about $14\ \mu$m, less than one pitch (correction 11 of Sec. 10.5). The corrected bound is fifteen orders weaker and agrees with the incoherent-regime estimate $3\times10^{-16}$ to within an order of magnitude.

**Proposition 35 (Fixed edge, dipole, and handedness).** *For an observer moving with velocity $\mathbf{v}_M$ relative to the fog, the blue edge seen in the direction $\hat{\mathbf n}$ of a source is*
$$
\lambda_\mathrm{edge}(\hat{\mathbf n}) = \bar np\left(1-\frac{\mathbf{v}_M\cdot\hat{\mathbf n}}{c}\right)+O(v_M^2/c^2), \tag{89}
$$
*independent of source redshift; the red end scales as $1+z_s$; the depth decreases toward the red end as $H(z_r)$ grows; and the sign of the induced circular polarization is fixed by the vacuum handedness $s$ (Sec. 9). For $v_M = 369.8\ \mathrm{km\,s^{-1}}$ and $p = 24.6\ \mu$m the edge moves by $\pm0.030\ \mu$m between the dipole and anti-dipole directions.*

*Proof.* The resonance nearest the observer occurs in the local fog; a photon arriving from $\hat{\mathbf n}$ has wavelength $\lambda_\mathrm{obs}(1+\mathbf{v}_M\cdot\hat{\mathbf n}/c)$ in the fog's frame to first order. The rest restates Theorem 14. $\square$

**Proposition 17 (Locking suppression of the doublet–fog coupling — Closure K-11, conditional) [DF].** *Under (P1)–(P7), let $\tilde P_\mathrm{fog}$ be a static background texture of the soft condensate with wavenumber $q$ and tilt $\sin\theta_c$. For a transverse doublet wave of wavenumber $k$ on $\tilde P_\mathrm{fog}$, the induced index modulation vanishes identically in the strict locking limit $\mu_c\to\infty$ and, at finite locking stiffness, satisfies*
$$
\Delta n(k) = C_\chi\,\epsilon_\mathrm{vac}\,\sin^2\theta_c\,(k\ell_\mathrm{lock})^4, \qquad \ell_\mathrm{lock}\equiv\sqrt{\frac{\gamma}{4\mu_c}}, \qquad C_\chi = O(1), \tag{54}
$$
*where $\epsilon_\mathrm{vac}$ is the near-BPS lift of the vacuum manifold, bounded above by the window of (P7).*

*Proof.* By Lemma 1 and Theorem 1, $W_4$ and $W_{6+0}$ depend exclusively on $\tilde P$. A pure locked doublet has $\boldsymbol\psi_\perp = 0$, leaving $\tilde P_\mathrm{fog}$ unperturbed at $\mu_c\to\infty$. At finite $\mu_c$ the torque balance Eq. (9) on B2$\pm$ yields $\boldsymbol\psi_\perp = -(\gamma/4\mu_c)\nabla^2\boldsymbol\varphi_\perp\simeq(k\ell_\mathrm{lock})^2\boldsymbol\varphi_\perp$, and expanding $W$ to quadratic order in $\boldsymbol\psi_\perp$ on the lifted manifold gives $\Delta\gamma/\gamma\sim\epsilon_\mathrm{vac}\sin^2\theta_c|\boldsymbol\psi_\perp/\boldsymbol\varphi_\perp|^2$. $\square$

The previous draft identified $\ell_\mathrm{lock}$ with the structural scale and declared K-11 closed with fifty-five decades of margin. The identification is a hypothesis: $\ell_\mathrm{lock}$ is a ratio of moduli, $\ell_s$ is the graph step, and nothing in Eqs. (4)–(8) equates them. K-11 is therefore closed *conditionally* on $\ell_\mathrm{lock}\simeq\ell_s$, and the far-infrared trough measures or bounds $\ell_\mathrm{lock}$ directly:

**Corollary 8 (The trough bounds the locking length).** *With $\epsilon_\mathrm{vac}\le3\times10^{-3}$, $\sin^2\theta_c = 0.48$ and $q = 2\pi/(24.6\ \mu\mathrm{m})$, the transparency bound Eq. (88) applied to Eq. (54) gives*
$$
\ell_\mathrm{lock}\lesssim1.8\ \mathrm{nm}, \tag{90}
$$
*while $\ell_\mathrm{lock} = \ell_\mathrm{P}$ gives $\Delta n\simeq4\times10^{-121}$ and a trough of depth zero.*

Stake S22 is re-graded [RG] accordingly. Its positive signature is the trough with three internal controls that no instrumental artifact satisfies at once — the same edge wavelength for every source redshift, a trough length growing as $1+z_s$, and a dipolar shift of the edge across the sky — in JWST MIRI MRS (to $28\ \mu$m) and Spitzer IRS (to $38\ \mu$m) stacks. At the bound of Eq. (88) the co-handed trough is $\sim10\%$ deep. GUM's core, with $\ell_\mathrm{lock}\simeq\ell_s$, predicts *no* trough; a detected trough would retire that identification and measure $\ell_\mathrm{lock}$ through Eq. (54); a null at the Eq. (88) depth tightens Eq. (90). The previous draft's "non-redshifting $26\ \mu$m feature" is withdrawn: a static line is not what a helical vacuum imprints (correction 11), and the depth GUM predicts for any feature is zero (correction 12 of Sec. 10.5).

**Proposition 3 (Any helix-induced optical activity is dispersive).** *For $\lambda\gg\bar np$, a cholesteric-like structure rotates linear polarization at the de Vries rate [28]*
$$
\frac{d\theta}{d\ell}\simeq-\frac{\pi\,p\,\Delta n^2}{4\bar n^2\lambda^2}\big[1-(\lambda_\mathrm{edge}/\lambda)^2\big]^{-1}\propto\nu^2. \tag{18}
$$
*Hence the reported frequency-independent cosmic birefringence across 23–353 GHz [29; 30; 31] cannot be produced by static Bragg dispersion of the helix.* At the bound of Eq. (88) the fog rotates $300$ GHz radiation by $\sim10^{-5}$ rad per Hubble length and $23$ GHz radiation by $\sim6\times10^{-8}$ rad, a factor $240$ across the CMB bands where the reported rotation is flat at $5\times10^{-3}$ rad.

# 4. Quantum Mechanics as the Bookkeeping of Local Beables

## 4.1 From agitation to the Schrödinger equation and Closure K-9

The substrate at finite agitation executes Nelson kinematics [32] with diffusion coefficient $\hbar/2m$ fixed by the closure of Sec. 5. The osmotic contribution to the energy is the Fisher-information functional [5],
$$
U_Q = \frac{\delta}{\delta\rho}\left[\frac{\hbar^2}{8m}\int\frac{(\nabla\rho)^2}{\rho}\,d^3x\right] = -\frac{\hbar^2}{2m}\frac{\nabla^2\sqrt\rho}{\sqrt\rho}; \tag{19}
$$
continuity and the Hamilton–Jacobi equation with pressure Eq. (19) close to the Schrödinger equation for $\psi = \sqrt\rho\,e^{iS/\hbar}$ [4] [DF]; circulation quantization $\oint\nabla S\cdot d\mathbf{l} = 2\pi n\hbar$ [6] follows from single-valuedness of the texture angle $\tilde P$ [DF]; and the Born rule $\rho = |\psi|^2$ is the endpoint of a sub-quantum $H$-theorem [7; 8; 9] whose rates GUM's agitation accelerates relative to the deterministic pilot-wave limit by a factor 17–41 [CAL, N].

**Proposition 26 (Sequential-measurement consistency via tower pointer branching — Closure of K-9) [DF].** *Let a knot system $S$ interact sequentially at times $t_1 < t_2$ with macroscopic registers $M_1, M_2$ whose pointer coordinates $\mathbf{Y}_1, \mathbf{Y}_2$ are hosted with the knot positions $\mathbf{X}(t)$ in the conditional-field tower Eq. (20)–Eq. (21) on the B1 constraint sector [33]. If each measurement separates the pointer packets by more than the B3 halo correlation length ($\Delta Y > \lambda_\mathrm{halo}$) and $\Delta t = t_2 - t_1 \gg r_{SM}/c_L + \tau_\mathrm{relock}$, then the joint sequential distribution equals the Lüders rule:*
$$
P(m_1, t_1;\, m_2, t_2) = \mathrm{Tr}\big(\Pi_{m_2} U(t_2, t_1)\Pi_{m_1}\rho(t_1)\Pi_{m_1}U^\dagger(t_2, t_1)\big)\left[1 + O\!\left(e^{-\Gamma_H\Delta t},\ \frac{r_{SM}}{c_L\Delta t}\right)\right]. \tag{70}
$$

*Proof.* The guiding field at $t > t_1$ is the conditional wave function Eq. (20) evaluated on the actual pointer trajectory. Once the pointer branches $\Psi = \sum_m c_m\phi_m(\mathbf{x})\chi_m(\mathbf{Y}_1)$ have disjoint supports separated by $\Delta Y\gg\lambda_\mathrm{halo}$, the actual pointer position zeroes out all empty branches in Eq. (20) and in every tower derivative across the B1 constraint channel within the update delay $r_{SM}/c_L$. Simultaneously the sub-quantum $H$-theorem relaxes the conditional density on the occupied branch to $|\phi_{m_1}|^2/\|\phi_{m_1}\|^2$ on the timescale $\Gamma_H^{-1}$, erasing pre-$t_1$ osmotic correlations. $\square$

The second error term is not decoration. For sequential measurements faster than $r_{SM}/c_L$ the Lüders rule fails by that amount in GUM, which is the bipartite face of the finite-speed nonlocality of Sec. 4.5 (Stake S28).

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

*Proof.* By von Neumann's trace inequality and Cauchy–Schwarz, $|\mathrm{Tr}(M_\Phi^\dagger M_\Psi)|^2 \le (\sum_{i\le\chi}\sigma_i(M_\Phi)\sigma_i(M_\Psi))^2 \le \sum_{i\le\chi}\lambda_i$, with equality at the truncated SVD. $\square$

**Corollary 1 (Flat spectra).** *If $\lambda_i \le \Lambda/r$ for $i \le r$, then $F_\chi \le \Lambda\chi/r$. For a Haar-random state of $2m$ qubits split $m|m$, the Marchenko–Pastur law gives $\lambda_i \le 4\cdot2^{-m}$ asymptotically [36; 37], so $F_\chi \le 4\chi/2^m$.*

Random-circuit sampling prepares states with ballistic entanglement growth to the Page value [38; 36]. Existing 53–60-qubit experiments [39; 40; 41] agree with multiplicative digital-error models to within 10–20%, requiring
$$
\frac{F^\mathrm{obs}_{\mathrm{XEB}}}{F^\mathrm{model}_{\mathrm{noise}}} = 1 \pm 0.1\text{–}0.2 \ \Rightarrow\ F_{\mathrm{trunc}} \gtrsim 0.8, \qquad \chi_{\max} \gtrsim \frac{F_{\mathrm{trunc}}\,2^{26}}{4} \approx 1.3\times10^{7}. \tag{24}
$$

## 4.4 Dimension counting, reachable sets, dense storage, and the exact cliff

**Definition 4 (Classical substrate with bounded gain).** A substrate is classical with $N_\mathrm{dof}$ degrees of freedom on a register's support if its instantaneous state is a point $\xi$ of a bounded region $\Xi \subset \mathbb{R}^{N_\mathrm{dof}}$ of diameter $D$; it represents the register's state through $\Phi: \Xi \to \mathcal{S}_n = \mathbb{CP}^{2^n-1}$ (Fubini–Study metric) with gain $G$ if $d_\mathrm{FS}(\Phi(\xi),\Phi(\xi')) \le G|\xi-\xi'|$.

**Theorem 7 (Dimension counting).** *If a classical substrate with $N_\mathrm{dof}$ degrees of freedom and gain $G$ represents every $n$-qubit state to within Fubini–Study distance $\delta$, then*
$$
(2^{n+1}-2)\,\ln\frac{1}{\sin\delta} \le N_\mathrm{dof}\,\ln\frac{3GD}{\delta}, \tag{25}
$$
*hence, for any gain not exponentially large in $2^n$, $n_{\max} \simeq \log_2N_\mathrm{dof} + O\big(\log_2\ln(GD)\big)$.*

*Proof.* $\Phi(\Xi)$ must be a $\delta$-net of $\mathcal{S}_n$. A geodesic ball of radius $\delta$ in $\mathbb{CP}^{N}$ ($N = 2^n-1$) has volume $(\pi^N/N!)\sin^{2N}\delta$, equal to the total volume at $\delta = \pi/2$, so the $\delta$-covering number of $\mathcal{S}_n$ is at least $\sin^{-2N}\delta$. The $\delta$-covering number of $\Phi(\Xi)$ is at most that of $\Xi$ at scale $\delta/G$, at most $(3GD/\delta)^{N_\mathrm{dof}}$. Comparing gives Eq. (25). $\square$

The previous draft wrote the left side as $(2^{n+1}-2)\ln(c_0/\delta)$ with an unstated constant $c_0 = O(1)$. The exact ball volume removes the constant; since $\sin^2\delta = 1-F$ for Fubini–Study distance $\delta$ and fidelity $F$, Eq. (25) reads directly in fidelity (correction 8 of Sec. 10.5).

**Proposition 38 (The exact cliff of dimension counting).** *Define $\alpha(n)\equiv(2^{n+1}-2)/N_\mathrm{dof}$ and $M\equiv\ln(3GD)$. The largest fidelity to a worst-case state that Eq. (25) allows is*
$$
F_{\max}(n) = 1-\exp\!\left[-\frac{2M}{\alpha(n)}\right]\big[1+O(\ln\delta/M)\big], \tag{94}
$$
*so that the descent from $F_{\max} = 0.9$ to $F_{\max} = 0.1$ spans*
$$
\Delta n_{90\to10} = \log_2\frac{\ln 0.1}{\ln 0.9} = 4.45\ \text{qubits}, \tag{95}
$$
*independent of $N_\mathrm{dof}$ and of $M$, with midpoint $F_{\max} = \tfrac12$ at $n_{50} = \log_2N_\mathrm{dof} + \log_2(2M/\ln2) - 1$: $3.9$, $7.2$ and $10.5$ qubits above $\log_2N_\mathrm{dof}$ for $M = 10$, $100$, $1000$.*

*Proof.* With $\sin^2\delta = 1-F$, Eq. (25) reads $-\tfrac12\alpha\ln(1-F)\le M+\ln(1/\delta)$; the logarithmic term is $O(1)$ for $\delta$ between $0.3$ and $\pi/2$ and is absorbed into the stated correction. Solving for $F$ gives Eq. (94); setting $F = 0.9$ and $0.1$ and using $\alpha(n) \simeq 2^{n+1}/N_\mathrm{dof}$ gives Eq. (95); $F = \tfrac12$ gives $\alpha = 2M/\ln2$. $\square$

The previous draft printed a width "$\approx6$ qubits", obtained as the span from the first qubit above $\log_2N_\mathrm{dof}$ to the 10% point; the 90%–10% width is Eq. (95). Dimension counting is nevertheless not what a circuit tests:

**Theorem 15 (Reachable-set counting).** *Let a gate set consist of unitaries with $p$ real parameters each and generators of operator norm at most $h$, and let $\mathcal{S}_{N_g}$ be the set of states reachable with $N_g$ gates. The map from parameters to states is Lipschitz with constant $h$ from $([0,2\pi]^{N_gp},\ell_1)$, so $\mathcal{S}_{N_g}$ has Hausdorff dimension at most $N_gp$ and $\epsilon$-covering number at most $(2\pi hN_gp/\epsilon)^{N_gp}$.*

*Proof.* Each parameter derivative inserts one generator into a product of unitaries, so $\|\partial|\psi\rangle/\partial\theta_k\|\le h$; the mean-value inequality gives the Lipschitz bound; covering the parameter cube by cubes of side $\epsilon/(hN_gp)$ gives the covering number. $\square$

**Corollary 6 (History storage evades dimension counting).** *A classical substrate that stores the parameter history — $N_gp$ real numbers — represents every reachable state exactly. For circuits of polynomial size it needs only polynomially many degrees of freedom, and no experiment with polynomial-size circuits can violate Eq. (25) without a further hypothesis about how the substrate stores states.*

The corollary does not rescue a history-storing substrate as a model of GUM: the tower must guide knots *locally* and *in real time* (Definition 2), whereas a history store must evaluate exponentially large sums on demand, which is neither local nor fast. The natural hypothesis for a substrate that keeps quantum books locally is the opposite one.

**Definition 10 (Dense storage).** A substrate *stores densely* if (M1) it is *Markovian*: the hosted state at time $t$ is a function $\mathcal{R}(x_t)$ of the substrate configuration $x_t$ alone, with gain $L_R$ as in Definition 4; and (M2) it is *target-blind*: its evolution applies the prescribed unitaries to the hosted state, and wherever the ideal evolved state is not exactly hostable, the hosting error does not depend on the future of the circuit or on the intended output.

**Definition 11 (Hosting hypotheses).** The effective number of degrees of freedom available to an $n_q$-qubit register is one of: **(H$_V$)** bulk hosting, $N_\mathrm{eff} = \nu_c V/\ell_s^3$, with $V$ the volume spanned by the register and $\nu_c = 12$ the real phase-space numbers per cell ($\mathbf{u}$, $\tilde Q$ and their rates) — GUM's default, since tower fields are bulk fields; **(H$_A$)** cut hosting, $N_\mathrm{eff} = \nu_cA/\ell_s^2$, with $A$ the area of the minimal cut; **(H$_R$)** extent hosting, $N_\mathrm{eff} = \nu_cn_q(\ell_q/\ell_s)^3$, with $\ell_q$ the spatial extent of one qubit's carrier. *Schmidt hosting* is the alternative in which the region holds only $\chi_{\max}\simeq N_\mathrm{eff}$ independent tower fields per cut (Definition 3).

**Theorem 16 (Local density).** *Under dense storage with $N_\mathrm{eff}$ degrees of freedom: (i) if the hosted set contains an open subset of $\mathbb{CP}^{D-1}$ then $N_\mathrm{eff}\ge2^{n_q+1}-2$; (ii) for a Haar-random state $\psi$, with probability at least $1-\delta_p$ the best hosted fidelity obeys*
$$
F_\mathrm{rep}(\psi)\equiv\sup_{x}|\langle\psi|\mathcal{R}(x)\rangle|^2\le4\,\frac{N_\mathrm{eff}\ln(CL_R\sqrt D)+\ln(1/\delta_p)}{D-1}. \tag{92}
$$

*Proof.* (i) An open subset has full Hausdorff dimension $2D-2$, and a Lipschitz image of $\mathbb{R}^{N_\mathrm{eff}}$ has dimension at most $N_\mathrm{eff}$. (ii) Take an $\epsilon_0$-net of the hosted set of size $\le(CL_R/\epsilon_0)^{N_\mathrm{eff}}$; for fixed $\phi$ and Haar-random $\psi$, $\Pr[|\langle\psi|\phi\rangle|^2\ge f] = (1-f)^{D-1}\le e^{-f(D-1)}$; a union bound over the net and the choice $\epsilon_0 = 1/\sqrt D$ give Eq. (92). $\square$

**Theorem 17 (Mirror-circuit bound).** *Let $U$ be drawn from an ensemble whose midpoint states $U|0\rangle$ are Haar-typical, and model the device's noise as a global depolarizing channel of fidelity $F_\mathrm{noise}$. Under dense storage the probability of returning to $|0\rangle^{\otimes n_q}$ after $U$ then $U^\dagger$ obeys*
$$
\mathbb{E}[P_\mathrm{ret}]\le F_\mathrm{noise}\,\mathbb{E}[F_\mathrm{rep}] + 2^{-n_q}. \tag{93}
$$

*Proof.* By (M1) the substrate holds at the midpoint a hosted state with overlap at most $F_\mathrm{rep}$ with $U|0\rangle$; by (M2) the second half applies $U^\dagger$ to it, and later hosting errors, being target-independent, add on average at most the overlap of a target-independent state with $|0\rangle$, which is $2^{-n_q}$; the depolarizing channel multiplies the coherent part by $F_\mathrm{noise}$. $\square$

**Corollary 7 (The cliff and its knobs).** *The normalized return probability $\mathcal{P}\equiv P_\mathrm{ret}/F_\mathrm{noise}$ satisfies $\mathcal{P}\lesssim\min\{1,\ c\,N_\mathrm{eff}n_q/2^{n_q}\}$ up to logarithms of $L_R$, so beyond $n_q^\ast\simeq\log_2N_\mathrm{eff}+\delta n$, with $0\lesssim\delta n\lesssim\log_2n_q+O(1)$, the bound falls by a factor of two per added qubit: a 90%–10% descent of the bound spans $\log_29\approx3.2$ qubits, and the every-state bound of Proposition 38 spans $4.4$. The fall is gate-independent: once $U$ scrambles, $\mathcal{P}$ depends on $n_q$ and not on depth, whereas noise-model errors grow with depth. The cliff moves with the hosting knob — by $+10$ qubits per factor $10^3$ in $V$ or $A$, or per factor $10$ in $\ell_q$ — and under Schmidt hosting sits at $n_q^{\ast\ast}\simeq2\log_2N_\mathrm{eff}$ and moves twice as fast.*

**Corollary 2 (GUM's numbers, restated at the gravity-fixed scale).** *With $\ell_s = \ell_\mathrm{P}$ (Corollary 9, Sec. 8.3), $\nu_c = 12$ and $M = 100$, the dense-storage midpoint sits at $n_{50}\approx324$ qubits for a trapped-ion or neutral-atom zone ($V = 10^{-10}\ \mathrm{m^3}$) and $338$ for a superconducting die ($10^{-6}\ \mathrm{m^3}$); at the photon-timing ceiling $\ell_s = 1.5\times10^{-27}$ m (Proposition 42) the same registers cliff at $245$ and $258$. With $V$ the Hubble volume, $\log_2(V/\ell_\mathrm{P}^3)\approx609$.*

| Register | $V$ (m³) | $\log_2(\nu_cV/\ell_s^3)$ at $\ell_\mathrm{P}$ | $n_{50}$ at $\ell_\mathrm{P}$ | $n_{50}$ at $1.5\times10^{-27}$ m |
|---|---|---|---|---|
| Trapped-ion / neutral-atom zone | $10^{-10}$ | $317$ | $324$ | $245$ |
| Superconducting 2D die | $10^{-6}$ | $330$ | $338$ | $258$ |

*Table 6. Dense-storage cliff midpoints under H$_V$ ($M = 100$; the midpoint moves by $\pm3$ qubits for $M\in[10,1000]$). Exact 90%–10% width $\le4.4$ qubits.*

**Scrambled mirror protocol (Stakes S16 [RG], S29).** Run mirror circuits with scrambling first halves at fixed depth for $n_q$ from $150$ to $400$. Calibrate $F_\mathrm{noise}$ by cycle benchmarking on sub-registers, where every hosting hypothesis predicts $\mathcal{P} = 1$. Plot $\mathcal{P}(n_q)$ at two or more depths: a dense-storage substrate shows a depth-independent cliff, noise a depth-dependent drift. Then vary the knob — register volume, cut area, or qubit carrier — and measure the shift; the slope identifies the hosting mode. Feasibility requires $F_\mathrm{noise}\gtrsim e^{-7}$: a log-depth all-to-all scrambler uses about $n_q\log_2n_q$ two-qubit gates, so $\epsilon_2\lesssim2.8\times10^{-3}$ at $n_q = 300$; nearest-neighbor 2D layouts need $\epsilon_2\lesssim1.3\times10^{-3}$. Both are at the best reported two-qubit error rates, though not yet at this register size, and logical qubits sidestep the budget because a scrambled logical state is also a volume-law physical state. The kill is a flat $\mathcal{P}(n_q)$ through $n_q = 350$ in any architecture with verified scrambling midpoints; by Table 6 that retires dense storage under all three hosting hypotheses for $\ell_s\ge\ell_\mathrm{P}$ and $V\le10^{-6}\ \mathrm{m^3}$, leaving only Schmidt hosting or a sub-Planckian structural scale. The previous draft's "verification by peaked circuits" and its "headline prediction $n_{\max}\approx230$–$330$" are replaced by this protocol and Table 6 (correction 8).

## 4.5 Finite-speed nonlocality

Section 3.3 removed $c_L$ from electromagnetism. It remains in the tower: when a knot is measured, the conditional fields of the other knots change, in GUM a physical update of substrate fields propagating at the fastest speed the substrate supports, which GUM identifies with $c_L$ (cross-lock C-L).

**Definition 12 ($c_L$-causal model).** A model of quantum correlations is *$c_L$-causal* if there is a frame (the substrate frame) in which the influence of a measurement event on outcome statistics elsewhere propagates at speed $c_L$; it reproduces quantum correlations between events that are $c_L$-connected in that frame and must otherwise account for correlations by locally available information alone.

**Proposition 39 (Bipartite timing bound).** *Let two measurement events be separated by the lab baseline $\mathbf{L}$ with lab-time mismatch $|\Delta t|\le\delta t$, let the lab move with $\mathbf{v}_M$ relative to the substrate frame, and let each correlation estimate integrate over $T_\mathrm{int}$. If Bell-inequality violations persist at every sidereal time, then*
$$
c_L\ge\frac{L}{\delta t+\tfrac12\Omega_\oplus v_\perp L\,T_\mathrm{int}/c^2}, \tag{96}
$$
*with $\Omega_\oplus$ the sidereal rotation rate and $v_\perp$ the component of $\mathbf{v}_M$ perpendicular to the Earth's axis, to leading order in $v_M/c$.*

*Proof.* The substrate-frame time separation is $\Delta t - \mathbf{v}_M\cdot\mathbf{L}/c^2$ to first order; the events are $c_L$-disconnected when it is smaller than $L/c_L$; over an integration window the sidereal sweep of $\mathbf{v}_M\cdot\mathbf{L}$ bounds the smallest attainable separation as stated (Appendix F). $\square$

Experiments of this type by Salart et al. and Yin et al. bound the speed of any such influence at $\gtrsim10^4c$ for every substrate frame moving slowly relative to the Earth [25; 68]. GUM therefore has $c_L\gtrsim10^4c$. Bipartite tests cannot exclude finite $c_L$ entirely, because a finite timing resolution leaves a residual window. Multipartite tests can.

**Theorem 13 (Finite-speed dichotomy, after Bancal et al.).** *For every finite $v > c$ there are configurations of four parties — and, by Barnea et al., already of three — whose measurement events are arranged so that some pairs are $v$-connected and others are not. For these configurations, any $v$-causal model that reproduces the quantum correlations of the $v$-connected pairs either permits superluminal signaling between parties or fails to reproduce the quantum prediction for the multipartite correlations [65; 66].*

GUM is a $c_L$-causal model, so the theorem applies to it without modification, and GUM must choose a horn. Superluminal signaling in a preferred frame is not paradoxical for a substrate with a rest frame, but it would contradict every signaling test to date and would make the substrate frame operationally detectable in a way nothing has shown. GUM's default horn is therefore the second (**Flag F-NS**, no signaling): in a Bancal–Barnea configuration timed so that the designated pair is $c_L$-disconnected in the substrate frame, the multipartite correlations fall from the quantum value to the bound respected by $c_L$-causal no-signaling models. Since the substrate frame is unknown the test scans the sidereal day; with $c_L = 10^4c$ and a $10$ km baseline the disconnection window is $3$ ns, within present entanglement-distribution timing. This is Stake S28. Its horn is fixed by posed closure **K-22**, which asks whether the tower's update rule, derived from Eqs. (9), is no-signaling; if K-22 finds that it signals, the stake changes sign and GUM predicts signaling in exactly these configurations. The previous draft confronted $c_L$ with bipartite timing only (correction 6 of Sec. 10.5).

## 4.6 The structural scale and the cone-locking bill

The tower requires a foliation, and the substrate supplies a literal one: its rest frame. Emergent Lorentz invariance must then survive two tests, and GUM prints both.

The first is discreteness. Eq. (9a) makes the doublet exactly dispersionless in the continuum description, so discreteness at the structural scale enters only through level-0 corrections, parametrized as $\omega^2 = c^2k^2[1+\xi_\gamma(k\ell_s)^2+O((k\ell_s)^4)]$; a generic cubic lattice has $\xi_\gamma = -\tfrac1{12}$.

**Proposition 42 (Photon-timing bound on the structural scale).** *With this parametrization the group delay between photons of energies $E_1 < E_2$ from a source at redshift $z$ is the quadratic Lorentz-violation delay of Jacob and Piran with $E_{\mathrm{QG},2} = \hbar c/(\sqrt{|\xi_\gamma|}\,\ell_s)$ [69]. The Fermi-LAT bound $E_{\mathrm{QG},2}\gtrsim1.3\times10^{11}$ GeV [70] gives*
$$
\ell_s\lesssim1.5\times10^{-27}\,|\xi_\gamma|^{-1/2}\ \mathrm{m}. \tag{98}
$$

*Proof.* The group velocity is $c[1+\tfrac32\xi_\gamma(k\ell_s)^2]$; integrating the delay over the comoving path and matching to the $n = 2$ form of Ref. [69] identifies $E_{\mathrm{QG},2}$, and $\hbar c = 1.973\times10^{-16}$ GeV m gives Eq. (98). $\square$

The bound replaces the previous draft's assumed range $\ell_s\in[10^{-35},10^{-26}]$ m, whose top decade it excludes outright (correction 9 of Sec. 10.5). Corollary 9 of Sec. 8.3 then fixes $\ell_s$ from the gravity closure at $(0.4$–$1.3)\,\ell_\mathrm{P}$, where the quadratic term is $(k\ell_s)^2\simeq7\times10^{-33}$ at $1$ TeV and Eq. (98) is satisfied by twenty-six orders of magnitude. GUM registers Eq. (98) as an inverse kill in S7 and states its numbers at $\ell_s = \ell_\mathrm{P}$ throughout.

The second test is universality across sectors. Eq. (9a) fixes the doublet's cone exactly, but the matter cone $c_\psi$, the gravitational cone, and the longitudinal speed $c_L$ are distinct moduli. GUM's cone-locking flow,
$$
\frac{d\delta_c}{d\ell} = -\frac{g_c^2}{\bar c^2}\,\delta_c \ \Rightarrow\ \delta_c(E) = \frac{\delta_\mathrm{UV}}{1+(g_c^2/\bar c^2)\ln(\Lambda_\mathrm{UV}/E)}, \tag{27}
$$
is a real mechanism with laboratory analogs [42; 43] [CAL, N], but a logarithm from the structural scale to the eV yields at most a factor $10$–$10^2$, whereas cone universality is required at $10^{-15}$–$10^{-20}$. This is the heaviest bill in GUM and it stays at the top of the kill list. The present revision lightens it in one place and relocates it in another: the doublet no longer needs the flow; the matter–light difference $c_\psi - c$ is a constraint on $\ell_g$ (Sec. 2.3); and the one deliberate cone mismatch, $c_L\gg c$, has been moved by Theorem 11 out of electromagnetism and into the tower, where Eq. (96) and Theorem 13 are its tests. The previous draft's claim that Proposition 29(2) discharges $c_\mathrm{GW} = c$ is withdrawn in Sec. 8.3.

# 5. The Isorotating Knot and the Closure of $\hbar$

## 5.1 Mass as forbidden frequency

Near the B3 band edge $\omega_0$,
$$
\omega^2 = \omega_0^2 + c_\psi^2k^2 + O(k^4\ell_s^2): \qquad E^2 = (mc_\psi^2)^2 + (pc_\psi)^2, \quad m \equiv \hbar\omega_0/c_\psi^2, \tag{28}
$$
with $c_\psi$ the matter cone of Eq. (9b), equal to $c$ to the $10^{-20}$ of Sec. 2.3. Mass is forbidden frequency [DF]. For vacuum boundary data, the Bogomolny completion of the square gives [12; 13]
$$
E_{6+0} = \int\tfrac12\big(\Lambda b_P \mp \sqrt{2\mathcal{V}}\big)^2 \pm \Lambda\int b_P\sqrt{2\mathcal{V}} \ \ge\ \Lambda\langle\sqrt{2\mathcal{V}}\rangle_{S^3}|K| \equiv C_6|K|, \tag{29}
$$
with saturation iff $\Lambda b_P = \mathrm{sgn}(K)\sqrt{2\mathcal{V}}$ pointwise [DF]. At $c_2 = 0$ the Haar average evaluates in closed form,
$$
C_6 = \Lambda\,\frac{2}{\pi}\int_0^\pi2\tilde m_V\sin\tfrac\chi2\cdot\sin^2\chi\,d\chi = \frac{64}{15\pi}\Lambda\tilde m_V, \tag{30}
$$
and the saturating hedgehog integrates to the compacton $f_0(r) = 2\arccos(r/R^*)$, $R^* = (2\Lambda/\pi^2\tilde m_V)^{1/3}$, whose energy is exactly $C_6$. The on-shell pressure $P = \tfrac12\Lambda^2b^2 - \mathcal{V} = 0$ vanishes pointwise (knot matter is dust), and the species mass law is multiplicative:
$$
M_kc^2 \propto \hat e_k\,\Lambda\tilde m_{V,k} \ \Rightarrow\ \frac{M_k}{M_j} = \frac{\hat e_k\tilde m_{V,k}}{\hat e_j\tilde m_{V,j}}. \tag{31}
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

The lemma is kinematics and is counted as such: Stake S3 tests the validity of a bench object, not GUM.

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

**Flag F-B1.** GUM commits, as a flagged constitutive choice, to the $(1,1)$ closure for the rotating sector, under which $j = \tfrac12$ is unique and $W^\pm, Z, h$ are necessarily collective (Sec. 7). The physical content of the flag, which the previous draft left implicit, is this: $b$ is the dilation exponent of the moment of inertia, $\mathbb{I}\propto V^b$. A texture whose inertia is carried by the quadratic gradient term has $b = 3$, which gives $j < \tfrac12$ and *excludes* the electron's spin; $(1,1)$ is the statement that the knot's spin inertia is carried by the quartic term. F-B1 therefore asserts something about which term of Eq. (4) the electron rotates with, and the bench can measure it: at $j = \tfrac12$ the dilation is $V = \sqrt2$ for $(1,1)$, $V = 1.24$ for $(1,2)$, and no solution exists for $(1,3)$. A bench (Stake S13) that realizes a stable isorotating knot with $j = 1$, or that reads a dilation law $V(j)$ inconsistent with $(1,1)$, retires F-B1.

## 5.4 Exchange statistics, $\hbar = \mathfrak{c}\Lambda\sqrt J$, and bench protocol

The stratified configuration space satisfies
$$
\pi_1(\mathcal{C}_\mathrm{strat}) = \mathbb{Z}_2\times A/\langle2a_\mathrm{rot}\rangle, \tag{36}
$$
so the rotation class survives with order two and fermionic characters exist at all odd winding [44] [DF].

**Proposition 5 (One relation among three imports).** *The closure yields $\hbar_\mathrm{dyn} = \mathfrak{c}\Lambda\sqrt J$ with $\mathfrak{c} = \sqrt{2\hat e_\mathrm{tot}\mathfrak{i}_\mathrm{tot}}$ a pure number, and $\hbar_\mathrm{stat} = \hbar_\mathrm{dyn}$: a Nelson-stationary state of energy $E$ has phase frequency $E/\hbar_\mathrm{stat}$, the isorotating knot has mechanical frequency fixed by (C-spin), and the joint system is solvable at $j = \tfrac12$ iff the two constants coincide. Given the unknowns $(\Lambda, J)$ and the agitation invariant $\hbar_\mathrm{stat}$, this reduces three unknowns to two. In the saturated closure $\mathfrak{c} = 64\sqrt2/(9\pi) \approx 3.2011$ ($\ge 2\sqrt2$), $\kappa \equiv \omega/\omega_0 = 1/\sqrt2$, and the bench discriminator is $\kappa^2g_\mathrm{tot} = 35/24$ against halo-free $7/8$ [N], with Adler relocking time $\tau \sim 10^{-12}\ \mathrm{s}$ [CAL, N].*

Planck's constant is *constrained*, not derived: the closure fixes one relation among three imports, and the number GUM can be killed on is $\mathfrak{c}$ (correction 3 of Sec. 10.5 adopts the re-grading of the 2026-09-28 revision). Two bookkeeping remarks the previous draft omitted. First, the mass printed in Proposition 7, $M = (64/9\pi)\Lambda\tilde m_V$, is $5/3$ times the compacton energy $C_6 = (64/15\pi)\Lambda\tilde m_V$; the factor is the halo's share of the closure, the same $5/3$ that appears as $(35/24)/(7/8)$ in the bench discriminator, and $\hat e_\mathrm{tot}$ in $\mathfrak{c}$ is the total, core plus halo. Second, the values $\mathfrak{c}$, $\kappa$ were computed with the previous kinetic coefficient and with $\tilde m = \tilde m_V$; with Eq. (8a), $\kappa^2 = (\hat e/2\mathfrak{i})(\tilde m_V/\tilde m)^2$, and holding the integrals fixed, $\kappa = 1/\sqrt2$ requires $\mu_c = 3\tilde m_V^2/16$, a ratio of locking to potential stiffness the previous draft fixed without stating. Recomputing $\hat e$, $\mathfrak{i}$, $\mathfrak{c}$ and $\kappa$ in one normalization is item (2) of the audit K-N; it matters because the band edge $\hbar\omega_0 = Mc^2/\kappa$ moves with $\kappa$.

**Proposition 6 (Validity conditions).** *A bench object in a chiral mechanical metamaterial [45; 46] or chiral nematic [47; 48] tests Eq. (34) and $\kappa^2g_\mathrm{tot}$ iff: (i) it has integer degree; (ii) it isorotates at $\omega$; (iii) it exhibits Adler locking at $\omega$; (iv) $\Gamma_\mathrm{damp} \ll \omega$; (v) $E_\mathrm{rot}$ and $E_\mathrm{tot}$ are measured independently (Stakes S3, S4$'$, S5, S13, S14). Under (i)–(v) the measured quantities are $j$ and the dilation law $V(j)$, which identifies $(a,b)$.*

## 5.5 The clock is physical: two consequences

If the de Broglie clock is a rotation of the substrate, it has consequences a bookkeeping phase cannot have. This revision adopts both consequences stated by the 2026-09-28 revision and adds a second drift channel to the first.

**Proposition 36 (The $\alpha$–$\mu$ discriminant and its two channels).** *(i) Suppose the global stiffness of the topological sector drifts, $\Lambda\to\Lambda(1+\delta_\Lambda)$, $J\to J(1+\delta_J)$, with the frustration integrals, the moduli ratios $\tilde m_{V,i}/\tilde m_{V,j}$ and the defect self-coupling $e^2/\varepsilon^*$ held fixed. Then $\Delta\ln\alpha = -(\delta_\Lambda+\tfrac12\delta_J)$ and $\Delta\ln\mu_{pe} = 0$, $\mu_{pe}\equiv m_p/m_e$. (ii) Suppose instead the pitch drifts, $q\to q(1+\delta_q)$, with the stiffnesses fixed. Then $\Delta\ln\alpha = 0$ and, through the far-field logarithm of the flavor bridge (Sec. 7.2), $\Delta\ln m_e = \kappa_\mathrm{far}\delta_q$, $\Delta\ln m_\mu = \tfrac12\kappa_\mathrm{far}\delta_q$, $\Delta\ln m_\tau = 0$, so $\Delta\ln\mu_{pe} = -\kappa_\mathrm{far}\delta_q$ up to the quark sector's own response.*

*Proof.* (i) By Proposition 5, $\hbar\propto\Lambda\sqrt J$ at fixed $\mathfrak{c}$, and $\alpha = e^2/(4\pi\varepsilon^*\hbar c)$; by Eq. (31) every rest energy is $\hat e_i\Lambda\tilde m_{V,i}$, so $\Lambda$ cancels in every mass ratio. (ii) $\hbar$ does not involve $q$; Eq. (39) with $A(q) = A_\mathrm{halo}+\kappa_\mathrm{far}\ln(1/q\lambda_{\mathrm{halo},\tau})$ gives $\Sigma(2) = 2A+B$ and $\Sigma(1) = A$, hence the stated logarithmic derivatives. $\square$

Grand-unified scenarios tie the two drifts together with $|\Delta\ln\mu_{pe}/\Delta\ln\alpha|\approx30$–$40$ [71]. In GUM the ratio is not fixed: a stiffness drift moves $\alpha$ and not $\mu_{pe}$, a pitch drift moves $\mu_{pe}$ and not $\alpha$. Present bounds are null on both: optical clocks limit $\dot\alpha/\alpha$ at $10^{-18}\ \mathrm{yr^{-1}}$ [72], and quasar molecular spectroscopy limits $\Delta\mu_{pe}/\mu_{pe}$ below $10^{-6}$ at $z\simeq2$–$4$ [73]. The second channel is not free in GUM, because the pitch *does* drift: it is the dark-energy lag of Sec. 8. Proposition 40 turns the quasar bound into a bound on that lag. The discriminant is Stake S23: a detected drift of $\alpha$ with $|\Delta\mu_{pe}/\mu_{pe}|\ll|\Delta\alpha/\alpha|$ is channel (i); a detected drift of $\mu_{pe}$ with no drift of $\alpha$ is channel (ii) and must match Proposition 40's redshift profile; a joint detection with ratio of order $30$ retires the physical-clock reading at its present grade.

**Proposition 37 (Channeling resonance of a physical clock).** *Let a particle of rest energy $Mc^2$ carry a physical internal rotation of rest-frame angular frequency $\omega_c = Mc^2/\hbar$, and let it traverse a crystal along an atomic row of spacing $\ell_\mathrm{row}$ with speed $v$. Resonance with the clock occurs at the momenta*
$$
p^\mathrm{res}_{n_h} = \frac{p^\mathrm{res}_1}{n_h}, \qquad p^\mathrm{res}_1c = \frac{(Mc^2)^2\,\ell_\mathrm{row}}{hc}, \qquad n_h = 1,2,\dots \tag{99}
$$
*For electrons: Si$\langle110\rangle$ ($3.840$ Å) $80.87$ MeV/$c$; Ge$\langle110\rangle$ ($4.001$ Å) $84.26$ MeV/$c$; diamond$\langle110\rangle$ ($2.522$ Å) $53.12$ MeV/$c$.*

*Proof.* In the rest frame the rows pass at speed $v$ with spacing $\ell_\mathrm{row}/\gamma_v$, giving fundamental frequency $2\pi\gamma_vv/\ell_\mathrm{row}$; setting $n_h$ times this equal to $\omega_c$ gives $p = M\gamma_vv$ as stated, with $(m_ec^2)^2 = 0.261120\ \mathrm{MeV^2}$ and $hc = 1.239842\times10^{-12}$ MeV m. $\square$

Standard quantum mechanics predicts no resonance tied to $Mc^2/\hbar$: the Compton phase is a global phase. A zitterbewegung clock at $2Mc^2/\hbar$ would place the resonance at twice the momentum. Catillon et al. reported a transmission anomaly near the Si$\langle110\rangle$ value [74] (unreplicated). The proposition is Stake S24: the fundamental must appear in Si and Ge at momenta in the ratio $4.001/3.840$ and in diamond at $53$ MeV/$c$, with sub-harmonics at $p_1/n_h$; the kill is absence at all three at a sensitivity that would have seen the Si report.

# 6. The Electron: Core, Halo, and Closure K-10

## 6.1 Degree conservation and pair creation

**Lemma 5 (Charge transfer and protection).** *Along any continuous history $\mathbf{u}(t) \to 0$ at spatial infinity with $\det\mathsf{F}(t,\mathbf{x}) \ge \delta > 0$ on compacts, $\deg\tilde R[\mathbf{u}(t)]$ is constant; if $\mathbf{u}(0) = 0$ then $\deg\tilde R \equiv 0$ and $\deg\tilde P = \deg\tilde Q \equiv K$ throughout. Contrapositive: a change of total degree along a history requires $\inf\det\mathsf{F} \to 0$.*

*Proof.* Polar decomposition is continuous on $\det\mathsf{F} \ge \delta$, its $SU(2)$ lift is continuous, and the Brouwer degree is locally constant under uniform convergence. $\square$

The lemma constrains the *total* degree. Creation of a pair of opposite degree conserves it and needs no pinch; this is the point at which the previous draft's dark-matter execution failed (Sec. 8.5).

## 6.2 The two-scale electron and Closure K-10

**Theorem 9 (Compatibility).** *Let a degree-one texture of the substrate be the electron, with mass texture of radius $R_\mathrm{tex}$, charge localized within $r_c$, and lowest internal excitation $\Delta E$. Compatibility with data [49; 50; 51] requires*
$$
r_c \lesssim 10^{-19}\ \text{m}, \qquad \Delta E \gtrsim \text{few TeV}, \qquad R_\mathrm{tex} \lesssim \frac{\hbar c}{\Delta E} \lesssim 10^{-19}\ \text{m}. \tag{37}
$$
*A texture whose radius follows the compacton law at the classical-electron scale $R\sim10^{-15}$ m fails the third inequality by four orders of magnitude and the second by nine. Hence the topological core of the electron sits at the substrate's structural scale, $R_\mathrm{tex}\sim\ell_s$ (Stake S21).*

*Proof.* Bhabha scattering at LEP2 bounds $r_c \lesssim 10^{-19}\ \mathrm{m}$ [49] and $(g-2)_e$ bounds substructure to $10^{-22}$–$10^{-19}\ \mathrm{m}$ [50], while LHC searches exclude $e^*$ below several TeV [51]. A compact texture of radius $10^{-15}$ m has shape modes at $\hbar c/R\sim200$ MeV and near-BPS SDiff modes at $\sqrt{\epsilon_e}\,\hbar\omega_0\approx2$–$40$ keV for $\epsilon_e\in[8\times10^{-6},3\times10^{-3}]$, forcing $R_\mathrm{core}\sim\ell_s$. $\square$

**Proposition 7 (Core and halo).** *The electron's core is the degree-one texture of radius $R_\mathrm{core}\sim\ell_s$, fixing $\Lambda/\tilde m_V = \pi^2\ell_s^3/2$ and $M = (64/9\pi)\Lambda\tilde m_V$ (core plus halo). Its halo is the linear evanescent field of B3 outside the core at the clock frequency $\omega = \kappa\omega_0$, of extent*
$$
\lambda_\mathrm{halo} = \frac{c_\psi}{\omega_0\sqrt{1-\kappa^2}} = \frac{c_\psi}{c}\,\frac{\hbar}{Mc}\,\frac{\kappa}{\sqrt{1-\kappa^2}} = \frac{c_\psi}{c}\,\frac{\hbar}{Mc}\quad(\kappa = 1/\sqrt2), \tag{38}
$$
*having no discrete shape spectrum below the pair-creation threshold $2M$. Numerically $\lambda_{\mathrm{halo},e} = 3.86\times10^{-13}$ m, $\lambda_{\mathrm{halo},\mu} = 1.87\times10^{-15}$ m, $\lambda_{\mathrm{halo},\tau} = 1.11\times10^{-16}$ m.*

Equation (38) is the one halo formula of this revision and is used in Eqs. (40), (59), (66) and the bridge. The previous draft printed $\lambda_\mathrm{halo} = \hbar/(\sqrt2Mc)$ in its Eq. (38), the evanescent form in its Eq. (59), and converted its bridge with a third yardstick; the three differed by a factor two (correction 5 of Sec. 10.5). The evanescent decay length of an in-gap mode at $\omega = \kappa\omega_0$ is the physical definition, and with $\hbar\omega_0 = Mc^2/\kappa$ it equals $(c_\psi/c)\hbar/Mc$ at the closure value.

**Proposition 18 (Halo dominance of the frustration integrals — Closure K-10) [posed].** *Claim: for a degree-one texture with core radius $R_\mathrm{core}\sim\ell_s$ and halo length $\lambda_\mathrm{halo}\gg\ell_s$ carrying frustration class $\mathsf p\in\{0,1,2\}$ against the ambient helix of wavenumber $q\ll\lambda_\mathrm{halo}^{-1}$, the belt integrals $A$ and $B$ of Eq. (39) are dominated by the halo, with core contributions suppressed by a positive power of $\ell_s/\lambda_\mathrm{halo}\lesssim10^{-22}$.*

The previous draft printed this as "variationally proven" through a balance of a gradient energy $4\pi^3a_\psi\mathsf p^2/r_b$ against a potential energy $\propto r_b^3$. That proof is withdrawn: its gradient energy has the units of energy per length squared, the gradient it integrates, $(\pi\mathsf p/r^2)$, is not the $\pi\mathsf p/r_b$ it describes, and under the natural scaling both energies increase with $r_b$, so the printed balance has no interior minimum (correction 13 of Sec. 10.5). The physical content of the claim is different from what the proof attempted, and K-10 is re-posed with three deliverables. (i) *Core rigidity.* The saturated compacton has no zero modes other than the SDiff family; a belt of class $\mathsf p$ confined to the core must deform the BPS profile at cost of order $\Lambda\tilde m_V$ per unit angle, so the core's share of $A$ and $B$ is $O(\epsilon)$, not $O(1)$. (ii) *Halo response.* A belt of class $\mathsf p$ in the halo is a solution of the gapped linear B3 equation with winding boundary conditions, whose energy is a computable function of $q\lambda_\mathrm{halo}$ alone; this computation yields $A_\mathrm{halo}$ and $\kappa_\mathrm{far}$ in closed form and converts two [N] numbers into [DF] ones. (iii) *The ratio* of (i) to (ii). Kill: a core share of $A$ or $B$ above $10\%$ at the audited normalization.

The strongest existing evidence for the claim is not variational. If any part of $A$ or $B$ depended on the local environment of the amorphous double-twist network — the orientation of the nearest helix axis, the distance to the nearest network disclination — the electron mass would vary on the pitch scale. Optical lattice clocks compare atoms at sites micrometres apart at $10^{-18}$, and electron interferometers with $100\ \mu$m path separations hold $10^{-2}$ rad over nanosecond flights, which bounds cell-to-cell variations of $m_e$ at $1.3\times10^{-14}$. Since $\delta\ln m_e = -\delta A-\tfrac12\delta B$ for the $\mathsf p = 2$ class, the frustration integrals are environment-blind to eighteen decades. Any execution of K-10 must reproduce this; GUM registers it as Stake S32 (a dedicated lattice-clock scan over a $100\ \mu$m range in micrometre steps, looking for pitch-periodic or cell-structured modulation at $10^{-18}$), whose null GUM predicts and whose positive would be beyond anything in this manuscript.

# 7. The Standard-Model Sectors at Their Ledger Grades

## 7.1 Three families as frustration classes

Against the blue-fog helix of pitch $q$, a knot's asymptotic frame-matching is classified by a relative-twist integer $\mathsf p$ [47]. Class-$\mathsf p$ frustration partially defeats locking over the halo:
$$
\tilde m_{\mathsf p} = \tilde m_c\sqrt{s(\mathsf p)}, \qquad s(\mathsf p) = e^{-\Sigma(\mathsf p)}, \qquad \Sigma(\mathsf p) = A\mathsf p + B\,\frac{\mathsf p(\mathsf p-1)}{2}, \qquad \ln\frac{m_{\mathsf p}}{m_{\mathsf p+1}} = \tfrac12(A+B\mathsf p), \tag{39}
$$
with $A = 5.6 \pm 0.9$, $B = 5.7 \pm 1.2$ [N], giving $\tfrac12A = 2.80 \pm 0.45$ against $\ln(m_\tau/m_\mu) = 2.822$ and $\tfrac12(A+B) = 5.65 \pm 0.75$ against $\ln(m_\mu/m_e) = 5.332$, with family map $\mathsf p = (0,1,2) = (\tau,\mu,e)$ [DW]. These are two numbers against two mass ratios (the previous draft's third comparison, $(A+B)/A$, is their quotient and is not independent), and they are landings under Definition 7, by factors of $10^3$. Whether they are predictions or a fit depends entirely on whether $A$ and $B$ are computed from Eq. (4) without reference to the lepton masses; that is what Appendix I registers and K-N must settle.

Because $\epsilon\propto\tilde m^{-4/3}$ at fixed $\Lambda$, the near-BPS lift differs by species. The window of (P7) is the electron's, $\epsilon_e\in[8\times10^{-6},3\times10^{-3}]$, its lower end fixed by the termination below and its upper end by the admission of the SDiff manifold; the scaling then gives $\epsilon_\mu\in[6.5\times10^{-9},2.5\times10^{-6}]$, $\epsilon_\tau\in[1.5\times10^{-10},5.7\times10^{-8}]$, and for the quarks at their current masses $\epsilon_d\in[4\times10^{-7},1.6\times10^{-4}]$, $\epsilon_u\in[1.2\times10^{-6},4.4\times10^{-4}]$, $\epsilon_t\in[3\times10^{-13},1.3\times10^{-10}]$ (correction 7). The previous draft used one window for every knot; where a non-electron $\epsilon$ enters below (Propositions 17, 24, 27), the species value is used. The unfrustrated base species is the $\tau$-class knot at $\mathfrak{m}_\mathrm{Sk}\approx1.7$ GeV [N]; $\epsilon\propto\tilde m^{-4/3}$ forbids unfrustrated knots parametrically lighter than it, and the electron is the lightest admissible *frustrated* knot. At $\mathsf p = 3$ the candidate would sit at $m_e e^{-(A+2B)/2}\approx104$ eV with lift $\epsilon_3 = \epsilon_e e^{(4/3)\cdot8.5}\ge0.67$ for $\epsilon_e\ge8\times10^{-6}$: it fails closure, and the tower terminates at three charged families [DW-structural] (bench test: Stake S17). The generator does *not* order the neutrinos: applied to them it would give $m_2 = m_3e^{-A/2}\approx3$ meV, below the solar floor of $8.7$ meV, so GUM has no mechanism for $m_1$ and $m_2$ and says so (Sec. 7.2).

## 7.2 The neutrino as pitch quantum

GUM's neutrino is the heliknoton — a unit-Hopf excitation of the helix itself [48] — with mass $m_\nu\sim\hbar qc$, Majorana-generic ($0\nu\beta\beta$ occurs, Stake S6). Logarithmic relaxation of the $\mathsf p$-winding over the pitch outside the halo, $A(q) = A_\mathrm{halo} + \kappa_\mathrm{far}\ln(1/q\lambda_{\mathrm{halo},\tau})$ with $A_\mathrm{halo} = 3.05 \pm 0.09$ and $\kappa_\mathrm{far} = 0.1065 \pm 0.0032$ [N], fixes the logarithm
$$
X\equiv\ln\frac{1}{q\lambda_{\mathrm{halo},\tau}} = \frac{5.644-3.05}{0.1065} = 24.36 \pm 0.90, \tag{40}
$$
and with the yardstick of Eq. (38), $\lambda_{\mathrm{halo},\tau} = \hbar/m_\tau c$, the conversion $m_3c^2 = \hbar c\,e^{-X}/\lambda_{\mathrm{halo},\tau} = m_\tau c^2e^{-X}$ gives $m_3 = 0.047$ eV, $1\sigma$ $[0.019,0.115]$ eV. The previous draft's halo formula would have given $0.066$ eV from the same logarithm; the single formula of Eq. (38) removes the ambiguity, and whether the integrals themselves change when evaluated on the corrected halo profile is item (3) of K-N. The oscillation floor truncates to $m_3\in[0.050,0.057]$ eV, yielding Stake S1: $\Sigma m_\nu\in[0.059,0.113]$ eV, normal ordering [DW], confronted by the DESI DR2 + CMB bound $\Sigma m_\nu<0.064$ eV in $\Lambda$CDM [52; 53], which leaves $m_3\le0.0503$ eV, the floor itself. S1 is therefore alive at its edge. Its kill is a robust $\Sigma<0.059$ eV; a corrected $1\sigma$ band from K-N lying entirely below $0.050$ eV also retires the neutrino-as-pitch-quantum identification at its present grade. The pitch drift that could have reconciled a laboratory mass with a lower cosmological inference is bounded in Proposition 40 and does not help.

## 7.3 The electroweak skeleton and Closures K-5, K-13, K-14, K-EW-I, K-EW-III

Under F-B1, $W^\pm, Z, h$ are collective modes of the $\tilde P$/locking sector, classified in analogy with superfluid $^3\mathrm{He}$-B [54]. Any branch carrying net disclination winding pays the locked tension, forcing the residual pattern "$SU(2)$-like$\times U(1) \to U(1)_\mathrm{em}$" [DF].

**Proposition 8 (Protected diagonalization: $\rho = 1$ and $e = g\sin\theta_w$) [DF, consistency].** *In the neutral basis $(a_2,a_T)$, (P3) forbids any mass term in the pure-$a_2$ slot at every order, forcing rank one:*
$$
\mathbb{M}^2 = M_T^2\begin{pmatrix}\vartheta^2 & \vartheta\\ \vartheta & 1\end{pmatrix}, \qquad \det\mathbb{M}^2 = 0, \tag{41}
$$
*with $\tan\theta_w \equiv \vartheta$, $M_Z = M_T/\cos\theta_w$, $M_W = M_T$, and*
$$
\rho \equiv \frac{M_W^2}{M_Z^2\cos^2\theta_w} = 1 \ \text{identically}, \qquad e = g\sin\theta_w = g'\cos\theta_w. \tag{42}
$$

*Proof.* Immediate from $\det\mathbb{M}^2 = 0$, the null vector $(1,-\vartheta)^{\mathsf T}$, and $g' = g\vartheta$. $\square$

Because the mixing angle is defined by the mass matrix, GUM's $\sin^2\theta_w$ is the *on-shell* one, $1-M_W^2/M_Z^2 = 0.2232$, and that is the number Proposition 31(3) must land on.

**Proposition 21 (Custodial polarization from the band-edge top–bottom doublet — Closure K-5) [IM, consistency].** *Let the $\mathsf p = 0$ quark class comprise the band-edge up-type knot $t$ of mass $m_t$ and halo $\lambda_{\mathrm{halo},t} = \hbar/m_tc = 1.14\times10^{-18}$ m and the down-type knot $b$, coupled to the weak triplet with left-handed coupling $g$ and $N_c = 3$. If the knot–triplet vertex below the core cutoff $\hbar c/\ell_s$ is that of a chiral doublet, the one-loop custodial polarization is Veltman's [55],*
$$
\Delta\rho_{\mathrm{top}} = \frac{3G_F m_t^2}{8\sqrt{2}\pi^2}\left[1 + O\!\left(\frac{m_t\ell_sc}{\hbar}\right)^{\!2}\right] = 0.0093, \tag{64}
$$
*with the GUM-specific correction $2\times10^{-34}$ at $\ell_s = \ell_\mathrm{P}$.*

The previous draft graded this [DF] and called K-5 closed. The number is the Standard Model's because the integrand is assumed to be the Standard Model's; what GUM adds is the statement that the core is pointlike to $(m_t\ell_sc/\hbar)^2$, which it is at any $\ell_s$ in play. The honest grade is [IM] with a GUM correction too small to test (correction 14 of Sec. 10.5). The same applies to Proposition 28 below.

**Theorem 10 (Factorization implies coupling universality).** *If $m_f = M_0(\text{lock})\,e^{-I_f}$ with $M_0 \propto \text{lock}$ and $I_f$ lock-independent, then $g_{hff} = m_f/v_\mathrm{eff}$, with family-ordered deviations $|\eta_f| = |-\partial I_f/\partial\ln(\text{lock})| \le 0.05$ (Stake S2$'$).* The content is in whether $I_f$ is lock-independent, which is [N].

**Proposition 22 (Orthogonality suppression of $\epsilon_R$ — Closure K-13) [DF].** *Let $\psi_L$, $\psi_R$ be the normalized Jackiw–Rebbi helicity zero-modes [57] of a knot in the handed condensate of tilt $\theta_c$, and $\Phi_\mathrm{B4}$ the B4 twist profile. Then $\psi_L$ is bound to the core–halo interface with $g_4 = g_0\exp(-I_\mathrm{pin})$, $I_\mathrm{pin} = O(1)$, giving $g\approx0.65$ from perturbative $g_0 = O(1)$; and $\psi_R$ is repelled from the core by the centrifugal-chiral barrier, suppressing its vertex overlap by*
$$
\epsilon_R = C_R\left(\frac{\ell_s}{\lambda_\mathrm{halo}}\right)^{\gamma_\mathrm{JR}}\exp(-2\mu d_\mathrm{halo}), \qquad \gamma_\mathrm{JR} = \sqrt{1+\mathfrak{m}\sin^2\theta_c} = 1.38, \tag{66}
$$
*which is $1.3\times10^{-31}$ at $\ell_s = \ell_\mathrm{P}$ and $1.3\times10^{-20}$ at the photon-timing ceiling, satisfying precision $\mu$- and $\beta$-decay bounds on right-handed currents (Stake S8) at any admissible $\ell_s$.*

**Proposition 27 (Topological quantization of the B4 twist charge — Closure K-14) [DW, consistency].** *In the B4 twist channel the coupling of any localized texture at momentum transfer $M_Z\ll\hbar c/\ell_s$ is proportional to its integer fiber-linking degree under the Hopf fibration: $K = 1$ for the knot zero-mode and $Q_\mathrm{Hopf} = 1$ for the heliknoton. Hence $g^\mathrm{GUM}_{Z\nu\nu}/g^\mathrm{SM}_{Z\nu\nu} = 1+O(\epsilon_\nu)$ and $N^\mathrm{eff}_\nu = 3[1+O(\epsilon_\nu)]$, where $\epsilon_\nu$ is the heliknoton's own lift [N]; with $\epsilon_\nu\le3\times10^{-3}$, $N_\nu\in[2.991,3.000]$ against LEP's $2.9963\pm0.0074$ [58], a landing.*

**Proposition 31 (Electroweak collective modes, anomaly necessity, and mixing attractor — Closures K-EW-I, K-EW-II, K-EW-III).** *(1) (K-EW-I) [IM, consistency] For the $J = 0$ lock-amplitude breathing mode $h$, two-boson decays into $\{W^\pm,Z\}$ are kinematically closed on shell because $2M_W = 160.7$ GeV $> M_h = 125.2$ GeV, so on-shell decay proceeds through the Yukawa-universal fermion channels of Theorem 10 and the off-shell $WW^*$, $ZZ^*$ channels; the loop-induced $gg$ and $\gamma\gamma$ channels, which the Standard Model needs to reach $\Gamma_h = 4.1$ MeV (CMS: $3.2^{+2.4}_{-1.7}$ MeV [56]), are not derived here and are imported. (2) (K-EW-II) [DW] By the family index theorem on the periodic-on-average double-twist cell, non-tearing adiabatic transport ($\det\mathsf F>0$, Lemma 5) requires the vanishing of the six anomaly polynomials of Eq. (43). (3) (K-EW-III) [DW] Isotropic projection of the $S^3$ orientation metric across the three spatial axes of the cubic double-twist cell ($\vartheta_*^2 = 1/3$ bare) dressed by the condensate tilt yields*
$$
\sin^2\theta_w = \frac{\vartheta^2}{1+\vartheta^2} = \frac14\left(1-\frac{\varepsilon_\mathrm{tilt}}{3}\right), \qquad \varepsilon_\mathrm{tilt} = 1-\cos\theta_c = 0.28^{+0.12}_{-0.09}, \qquad \sin^2\theta_w = 0.227\pm0.009, \tag{78}
$$
*in the on-shell scheme at the tree level of Eq. (41). The band contains the on-shell value $0.2232$ (and the $\overline{\mathrm{MS}}$ value $0.2312$); it is a landing under Definition 7, consistent within $\pm0.009$. The implied modulus is $\vartheta = 0.542$ and $M_Z/M_W = \sqrt{1+\vartheta^2} = 1.137$ against $1.1346$.*

The previous draft printed $\varepsilon_\mathrm{tilt}\approx0.22$ and $\sin^2\theta_w = 0.232$; with $\sin\theta_c = 0.69$ the tilt is $0.276$ and the central value $0.227$ (correction 15 of Sec. 10.5). The form $\tfrac14(1-\varepsilon_\mathrm{tilt}/3)$ — the sign of the correction and its $1/3$ — is asserted by equal partitioning across the $1+3$ tangent directions and is not derived; until it is, K-EW-III is [DW] and the landing is a landing.

## 7.4 The strong sector: Closures K-Q, K-3, K-4, K-15

Against the double-twist network, knots admit fractional winding in thirds, terminating network disclination lines of tension $\sigma = \pi f_q^2\ln\kappa_q \approx 0.19\ \mathrm{GeV}^2$ ($f_q \approx 0.14$–$0.20\ \mathrm{GeV}$ [N], Regge slope $\alpha' = 1/(2\pi\sigma) = 0.84\ \mathrm{GeV}^{-2}$ against $0.88$, $\sigma/\hbar c = 0.96$ GeV/fm). The previous draft cited Theorems Q-1 (linear confinement $V = \sigma r$), Q-3 (a winding charge is confined iff its mediator stratum is gapped) and Q-6$'$ (a mass-blind dressing floor $\epsilon_\mathrm{dress} = (f_q/\mathfrak{m}_\mathrm{Sk})^2\approx10^{-2}$ censors all six quarks as asymptotic states while leaving the leptons free) without stating them. They are not in this manuscript either, and GUM does not build on theorems it has not printed: the three statements are the deliverables of posed closure **K-Q**, at grade [posed], with the Regge slope and the $\sigma/\hbar c$ landings as its regression tests (correction 16 of Sec. 10.5).

**Proposition 24 (Quadratic relaxation of $\langle b_P\rangle$ and the residual EDM window — Closure K-3) [DW].** *(1) Because $b_P$ enters $W_{6+0}$ quadratically with $\Lambda^2>0$, any linear source $\theta_0\Lambda\tilde m_Vb_P$ relaxes to zero net Pontryagin stress under the Volovik Gibbs–Duhem identity (Sec. 8.1). (2) Mixing with $W_\chi$ requires the pitch, the wrong-chirality overlap $\epsilon_R$, the near-BPS lift of the down-type knot, and the holonomy phase, generating a composite strong-CP angle*
$$
\bar\theta_\mathrm{eff} = s\,C_\theta\,\epsilon_d\,\epsilon_R\,(q\lambda_{\mathrm{halo},d})\,\sin\delta_{CP}\lesssim2\times10^{-43}\quad(\ell_s = \ell_\mathrm{P}), \tag{67}
$$
*hence $|d_n|\lesssim10^{-58}$ e·cm from this source.*

The number is not adjudicable and the previous draft's Stake S11 ("$|d_n|\lesssim10^{-39}$ e·cm") was unusable as printed: the Standard Model's own CKM contribution is $\sim10^{-32}$ e·cm, and GUM reproduces the Standard Model at level 3, so GUM's prediction is that *no $\bar\theta$-type EDM exists above the CKM background*. S11 is rephrased accordingly (correction 17): it is an inverse kill shared with the Standard Model, not a discriminating stake, and K-3's content is the mechanism — the quadratic penalty — not the number.

**Proposition 25 (Anti-screening of the $\mathbb{Z}_3$ junction stiffness — K-4) [CJ].** *For the junction coupling $g_J^2(\mu)$ in the window $f_q\ll\mu\ll\mathfrak{m}_\mathrm{Sk}$, one-loop fluctuations of the Maurer–Cartan currents around a three-branch junction are claimed to give $\mu\,dg_J^2/d\mu = -(C_2(SU(2))/8\pi^2)\,g_J^4\,(1-N_f\epsilon_\mathrm{dress}/6)<0$, anti-screening.*

The previous draft graded this [DF-sign] and declared Stake S12 passed by its own computation. The $S^3$ sigma model in $3+1$ dimensions is not perturbatively renormalizable, the quoted coefficient is not the Yang–Mills one, and a one-loop flow of its coupling is not a controlled calculation; the sign is a conjecture until the junction's effective theory is defined, and K-4 is graded [CJ] (correction 14). S12's adjudicator remains a computation, now an honest one.

**Proposition 28 (Timescale separation between B4 core unwinding and flux-tube nucleation — K-15) [IM, consistency].** *$\Gamma_t = 1.42$ GeV (NLO; the LO formula printed by the previous draft gives $1.48$), $\tau_\mathrm{decay} = 4.6\times10^{-25}$ s $= 0.14$ fm/$c$, and $\tau_\mathrm{had}\simeq\hbar/\sqrt\sigma = 1.5\times10^{-24}$ s $= 0.45$ fm/$c$, so the $t$ core converts into a $b$ core before the flux tube forms: no top hadrons exist and no free fractional $t$ escapes.* This is Standard-Model top physics restated in GUM's vocabulary and is graded as such.

## 7.5 Anomalies as tiling, and CP by holonomy

**Proposition 9 (The six sums as winding arithmetic).** *With hypercharge decomposed as the network third plus the helix-relative co-rotation weight, $Q = T_3+Y$, the per-family content $Q_L(3,2,+\tfrac16)$, $u^c(\bar3,1,-\tfrac23)$, $d^c(\bar3,1,+\tfrac13)$, $L_L(1,2,-\tfrac12)$, $e^c(1,1,+1)$, $\nu$ heliknoton ($Y = 0$) satisfies all six anomaly sums of Eq. (43) and $3(\tfrac23)+3(-\tfrac13)+(-1)+0 = 0$: a unit cell of the double-twist lattice carries no net topological flux (necessity: Proposition 31(2)).*

**Proposition 10 (Holonomy phase counting).** *Transport holonomies around double-twist cells encoded in an $N\times N$ unitary overlap block leave $(N-1)(N-2)/2$ irreducible phases [59]: one for $N = 3$, with network reflection symmetry giving $\theta_{23}\to45^\circ$ and $\delta_{CP}\to-\pi/2$ per the handedness chain (Stake S10).*

# 8. Cosmology: The Relaxation Family, Gravity, the Pitch Lag, and the Dark Sector

## 8.1 Vacuum energy as the lag of a slow substrate mode

By Volovik's thermodynamic identity [21], the self-sustained substrate's grand-potential density vanishes in equilibrium [IM]; only departures gravitate. Expanding about equilibrium on the soft manifold, Hubble dilution drives a lag $\delta q\propto H/\Gamma_r$ of the pitch wavenumber with residual energy density
$$
\rho_\mathrm{DE}\simeq\tfrac12\mathcal{X}^{-1}\delta q^2>0, \tag{44}
$$
with $\mathcal{X}^{-1}$ the stiffness of the soft mode, a quantity the previous draft never stated and Sec. 8.4 bounds.

## 8.2 The relaxation family, its status, and Closure K-12

**Proposition 11 (Equation of state of the relaxation family).** *Let $\Gamma_r = \Gamma_0(H/H_0)^n$, $n\in[0,1]$. Then $\rho_\mathrm{DE} = \rho_{\mathrm{DE},0}(H/H_0)^{2(1-n)}$ and, in a universe of matter plus this component,*
$$
w_\mathrm{DE}(a) = -\frac{n}{1-(1-n)\,\Omega_\mathrm{DE}(a)}, \qquad w_\mathrm{DE}\in[-1,0]. \tag{45}
$$

*Proof.* Equating $d\ln\rho_\mathrm{DE}/d\ln a = (1-n)d\ln H^2/d\ln a = -3(1-n)(1+\Omega_\mathrm{DE}w_\mathrm{DE})$ to $-3(1+w_\mathrm{DE})$ gives Eq. (45). $\square$

**Corollary 3 (The constant-rate member does not accelerate).** *For $n = 0$, $\rho_\mathrm{DE}\propto H^2$ yields matter-like expansion with $q_\mathrm{dec} = +\tfrac12$ [60; 61], excluded by Planck [62].*

**Proposition 12 (Acceleration requires $n > n_{\min}$).** *$q_{\mathrm{dec},0}<0$ iff $n > n_{\min} = \tfrac12(\Omega_{\mathrm{DE},0}^{-1}-1) = 0.22$.*

**Proposition 13 ($w_a\ge0$ and no phantom crossing).** *Along the family $d\Omega_\mathrm{DE}/d\ln a = -3w_\mathrm{DE}\Omega_\mathrm{DE}(1-\Omega_\mathrm{DE})$ and*
$$
w_a\equiv-\left.\frac{dw_\mathrm{DE}}{da}\right|_{a=1} = -\frac{3n(1-n)\,w_{\mathrm{DE},0}\,\Omega_{\mathrm{DE},0}(1-\Omega_{\mathrm{DE},0})}{[1-(1-n)\Omega_{\mathrm{DE},0}]^2}\ \ge\ 0, \tag{47}
$$
*with equality iff $n\in\{0,1\}$; and $w_\mathrm{DE}\ge-1$ at all times.*

**Proposition 14 (Early dark energy).** *In the matter era $\rho_\mathrm{DE}/\rho_m\simeq(\Omega_{\mathrm{DE},0}/\Omega_{m,0})\,\Omega_{m,0}^{1-n}a^{3n}$, about $4\times10^{-5}$ at recombination for $n = 1/2$ with radiation included, safe from early-dark-energy bounds for $n\gtrsim0.3$.*

**Proposition 19 (Dissipation-channel selection of $n$ — Closure K-12) [DW].** *On the $\epsilon$-lifted SDiff manifold the exponent $n$ is fixed by the active damping channel of the lag: local gap-damping gives $n = 0$ (excluded); diffusive rearrangement across the correlation length $\xi_c = (pc/H)^{1/2}$ gives $\Gamma_r\propto H$, $n = \tfrac12$, and $(w_0,w_a,q_{\mathrm{dec},0}) = (-0.763,+0.285,-0.290)$ at $\Omega_{\mathrm{DE},0} = 0.69$; horizon-cutoff radiative damping gives $n\in[\tfrac12,1]$, interpolating to $(-1,0,-0.535)$.* The family coincides with the Dvali–Turner modified-Friedmann family with $\alpha_\mathrm{DT} = 2(1-n)$, $n = \tfrac12$ being the DGP background (correction 18 of Sec. 10.5, adopted from the 2026-09-28 revision).

The family's status against data is printed, not deferred. Table 7 compares each member with the DESI DR2 BAO + CMB + supernova posteriors in the CPL plane [52; 63; 64], using the family's least-squares CPL parameters over $0<z<2$ and a Gaussian proxy for the posteriors with correlation $\rho(w_0,w_a) = -0.9$ — a proxy that reproduces DESI's own quoted $2.8\sigma$ (Pantheon+) and $4.2\sigma$ (DESY5) for $\Lambda$CDM to within $0.3\sigma$.

| $n$ | $(w_0,w_a)_\mathrm{fit}$ | Pantheon+ | Union3 | DESY5 | $\beta(z{=}7.7)/\beta_\mathrm{rec}$ |
|---|---|---|---|---|---|
| $0.50$ | $(-0.764,+0.313)$ | $\Delta\chi^2 = 176$ ($13\sigma$) | $79$ ($8.6\sigma$) | $146$ ($12\sigma$) | $6\times10^{-4}$ |
| $0.75$ | $(-0.910,+0.206)$ | $45$ ($6.4\sigma$) | $28$ ($5.0\sigma$) | $40$ ($6.0\sigma$) | $1.8\times10^{-2}$ |
| $0.90$ | $(-0.969,+0.092)$ | $15$ ($3.5\sigma$) | $17$ ($3.7\sigma$) | $20$ ($4.1\sigma$) | $0.11$ |
| $0.95$ | $(-0.985,+0.048)$ | $11$ ($2.9\sigma$) | $15$ ($3.5\sigma$) | $18$ ($3.9\sigma$) | $0.18$ |
| $1$ ($\Lambda$CDM) | $(-1,0)$ | $9$ ($2.6\sigma$) | $15$ ($3.5\sigma$) | $19$ ($4.0\sigma$) | — |

*Table 7. The relaxation family against DESI DR2 (Gaussian CPL proxy; Appendix D gives the derivative $(w_0,w_a)$ as well). The last column is the birefringence profile of Proposition 20.*

The data prefer $w$ below $-1$ in the past and above $-1$ today; in the family $w$ rises toward zero in the past ($w(z{=}1) = -0.61$ at $n = \tfrac12$). Every $n<1$ member is therefore further from the data than $\Lambda$CDM, and the family's least-disfavored member is its empty one. The mechanistically selected $n = \tfrac12$ is excluded at the $10\sigma$-equivalent level under the proxy; only $n\gtrsim0.9$ remains as (dis)favored as $\Lambda$CDM. Stake S18 is the full fit this table approximates: Eq. (49) fitted to the DESI DR2 BAO distance vector, the Planck distance priors and each supernova compilation, with $n$ and $\Sigma m_\nu\ge0.059$ eV free, reporting the posterior on $n$ and the evidence against $\Lambda$CDM (correction 19: the previous draft marked S18 "executed" without showing a fit). The pre-registered retirement condition stands: **if the combined Euclid DR1 and DESI final analysis prefers $w_a<0$ with $w_0>-1$ at $\ge3\sigma$ in a parametrization that does not force the crossing, GUM retires its dark-energy sector and admits no second mechanism without a new flag.** What the sector's retirement would take with it is stated in Sec. 9.2: the birefringence execution requires $n<1$.

## 8.3 Gravity, the structural scale, and Closures K-G, K-16

By the Kondo–Bilby–Kröner–Kleinert dictionary [22], dislocation density is torsion, disclination density is curvature, and test knots ride geodesics of the strain metric (universality of free fall at $10^{-15}$ is a survived inverse kill in Stake S7).

**Proposition 29 (Sakharov induction on the locked branch — K-G) [DW, conditional].** *On the locked branch $\boldsymbol\psi\to0$, the one-loop Sakharov induced gravitational action generated by integrating out the gapped B3/B4 fluctuations below $\pi/\ell_s$ has an Einstein–Hilbert term with*
$$
M_\mathrm{Pl}^2 = \frac{N_\mathrm{eff}\,\hbar c}{12\pi\,\ell_s^2}, \tag{75}
$$
*positive for $\mu,\rho_0,J,\gamma>0$, with $N_\mathrm{eff}$ the number of gapped field components below the cutoff [67].*

**Corollary 9 (The structural scale is fixed by $G$).** *Inverting Eq. (75) with the measured Planck mass gives*
$$
\ell_s = \sqrt{\frac{N_\mathrm{eff}}{12\pi}}\,\ell_\mathrm{P} = 0.40\,\ell_\mathrm{P}\ (N_\mathrm{eff} = 6),\quad0.56\,\ell_\mathrm{P}\ (12),\quad1.26\,\ell_\mathrm{P}\ (60), \tag{100}
$$
*i.e. $\ell_s = (0.6$–$2)\times10^{-35}$ m for any plausible field count.*

The previous draft left $\ell_s$ in the interval $[10^{-35},10^{-26}]$ m and printed every $\ell_s$-dependent number as a range. Its own gravity closure closes the interval at the Planck end, and Proposition 42 excludes the other end independently (correction 9). Every $\ell_s$-dependent number is restated at Eq. (100): the cliff midpoints of Table 6 ($324$ and $338$ qubits); $\epsilon_R = 1.3\times10^{-31}$ (Eq. 66); $\bar\theta_\mathrm{eff}\lesssim2\times10^{-43}$ (Eq. 67); $\Delta n = 4\times10^{-121}$ if $\ell_\mathrm{lock} = \ell_s$ (Eq. 54); the Hubble-volume ceiling $609$ qubits; the core correction to $\Delta\rho_\mathrm{top}$, $2\times10^{-34}$; the discreteness term $(k\ell_s)^2 = 7\times10^{-33}$ at $1$ TeV.

Two closures the previous draft printed as closed are re-posed. The previous draft's Proposition 29(2) derived $c_\mathrm{GW} = c$ by identifying gravitational waves with transverse-traceless strain waves of speed $\sqrt{\mu/\rho_0}$ and imposing a single-carrier bond geometry. By Eq. (9a) the transverse elastic waves of the displacement are locked to the micro-rotation and *are* the photon; the graviton therefore cannot be a linear transverse mode of $\mathbf{u}$, the derivation is withdrawn, and **K-G** is re-posed with the carrier of gravitational waves in the defect geometry (a collective mode of the defect density, or a second-order strain-metric fluctuation) as its first deliverable, positivity of that carrier's kinetic term as its second, and the multimessenger bound $|c_\mathrm{GW}/c-1|\lesssim10^{-15}$ as its third. **K-16** is correspondingly narrowed to the cone condition Eq. (9a) itself — derive $\mu/\rho_0 = \gamma_\mathrm{eff}/2J$ from level 0 or from the cone-locking flow — which is imported [IM] until then (correction 20 of Sec. 10.5).

## 8.4 The pitch lag, the lepton masses, and Closure K-23

If the soft coordinate is the pitch wavenumber, the lag that makes dark energy also moves everything that depends on the pitch: the neutrino mass directly, and the charged-lepton masses through the far-field logarithm of Eq. (40).

**Proposition 40 (Pitch-lag bound from the constancy of $m_p/m_e$) [DF].** *Assume the adiabatic lag $\delta q = SH/\Gamma_r$ with $\Gamma_r\propto H^n$, so that $\delta q(z)/\delta q_0 = h(z)^{1-n}$ with $h\equiv H/H_0$, and write $\varepsilon_\nu\equiv\delta q_0/q_\mathrm{eq}$. Then $m_3(z)/m_3(0) = [1+\varepsilon_\nu h^{1-n}]/(1+\varepsilon_\nu)$, and by Proposition 36(ii)*
$$
\frac{\Delta\mu_{pe}}{\mu_{pe}}(z) = -\kappa_\mathrm{far}\,\varepsilon_\nu\left[h(z)^{1-n}-1\right]. \tag{101}
$$
*The quasar bound $|\Delta\mu_{pe}/\mu_{pe}|<10^{-6}$ at $z\simeq3$ [73] then gives*
$$
|\varepsilon_\nu|<\frac{10^{-6}}{\kappa_\mathrm{far}[h(3)^{1-n}-1]} = 7.9\times10^{-6}\ (n = \tfrac12),\quad2.0\times10^{-5}\ (0.75),\quad5.7\times10^{-5}\ (0.9),\quad1.2\times10^{-4}\ (0.95), \tag{102}
$$
*and through Eq. (44), $|\varepsilon_\nu| = \sqrt{2\mathcal{X}\rho_{\mathrm{DE},0}}/q_\mathrm{eq}$, a lower bound on the soft-mode stiffness,*
$$
\mathcal{X}^{-1}>\frac{2\rho_{\mathrm{DE},0}}{(\varepsilon_\nu q_\mathrm{eq})^2} = 3.6\times10^2\ \mathrm{eV^2}\ (n = \tfrac12),\quad55\ (0.75),\quad6.8\ (0.9),\quad1.6\ \mathrm{eV^2}\ (0.95). \tag{103}
$$

*Proof.* Eq. (101) is Proposition 36(ii) with $\delta_q = \varepsilon_\nu[h^{1-n}-1]$; Eq. (102) inserts $\kappa_\mathrm{far} = 0.1065$ and $h(3) = 4.52$; Eq. (103) inverts Eq. (44) at $q_\mathrm{eq} = 0.0503$ eV and $\rho_{\mathrm{DE},0} = (2.3\ \mathrm{meV})^4$. $\square$

Three consequences. First, the stiffness is stated: a pitch-scale stiffness $\mathcal{X}^{-1}\sim q_\mathrm{eq}^2 = 2.5\times10^{-3}\ \mathrm{eV^2}$ would give $\Delta\mu_{pe}/\mu_{pe}\approx4\times10^{-4}$ at $z = 3$ and is excluded four-hundred-fold; the soft mode must be stiffer than $(20\ \mathrm{eV})^2$ for $n = \tfrac12$, which is a deliverable of K-N and a constraint on the condensate's energetics (correction 21 of Sec. 10.5). Second, the option that neutrinos were lighter in the past by $10$–$25\%$ at $z\simeq1$–$3$, which would require $|\varepsilon_\nu|\approx0.2$–$0.5$, is excluded by four orders of magnitude for every $n\le0.95$: in GUM the laboratory and cosmological neutrino masses agree to better than $10^{-5}$, and S1 cannot be rescued by drift. Closure **K-23** (the sign of $S$, the magnitude of $\mathcal{X}$, the stability of the coupled lag) is thereby executed negatively on its testable face. Third, the prediction that survives is the *correlation* of Stake S23: a drift of $\mu_{pe}$ without a drift of $\alpha$, with the redshift profile $h(z)^{1-n}-1$ of Eq. (101), at an amplitude below $10^{-6}$ that ESPRESSO- and ELT-class spectroscopy at $10^{-7}$ can reach for the stiffest allowed $\mathcal{X}$.

## 8.5 The dark sector: Conjecture K-17 and the Higgs invisible width

No dark-matter candidate is derived, and GUM prints the deficit. The previous draft executed K-17 with an undressed $\tau$-class knot $N_0$ frozen in through a pinch form factor $\mathcal{F}_\mathrm{pinch} = 2\times10^{-8}$ and declared $\Omega_\mathrm{DM}h^2 = 0.12$. That execution is withdrawn for two reasons that its own statements supply (correction 22 of Sec. 10.5). The abundance was a fit: $\mathcal{F}_\mathrm{pinch}$ was chosen to reproduce $0.12$. And the mechanism was inconsistent: item (1) of its Proposition 30 coupled $N_0$ to $h$ at tree level with $g = M_{N_0}/v_\mathrm{eff} = m_\tau/v = 7.2\times10^{-3}$, item (2) asked the same particle to freeze in through a vertex suppressed by $2\times10^{-8}$. A fermion with a Yukawa coupling of $7\times10^{-3}$ is in thermal equilibrium at $T\sim100$ GeV; pair creation of opposite degree conserves total degree and needs no pinch (Lemma 5); and the pinch suppression, if it applied to undressed pairs, would have to be explained away for $h\to\tau^+\tau^-$ and $e^+e^-$ pair creation, which proceed at the Standard-Model rate. K-17 returns to conjecture grade with the following content.

**Conjecture K-17 (Undressed knots) [CJ].** *Charge is a disclination dressing of a degree-one knot. If Eqs. (4)–(8) admit an undressed solution — a sterile, degree-stable fermion $N_{\mathsf p}$ in each frustration class with $M_{N_{\mathsf p}}\simeq m_{\ell,\mathsf p}$, coupling at tree level only to gravity, to the soft fog, and to the lock-amplitude mode $h$ with $g_{hNN} = M_N/v_\mathrm{eff}$ (Theorem 10) — then it is produced in pairs at Yukawa strength and is a thermal relic.* Deliverables: (i) existence and stability of the undressed solution; (ii) the dressing cross-section $\langle\sigma_dv\rangle$ for $N\bar N\to\ell^+\ell^-$ at a tearing stratum, which is the only annihilation channel of strength above the Higgs portal's $\langle\sigma v\rangle\approx3\times10^{-36}\ \mathrm{cm^3\,s^{-1}}$; (iii) the relic density, which requires $\langle\sigma_dv\rangle\approx2\times10^{-26}\ \mathrm{cm^3\,s^{-1}}$ to land on $\Omega h^2 = 0.12$ and otherwise overcloses by up to $10^{10}$; (iv) the CMB energy-injection check, which excludes an $s$-wave leptonic channel at that cross-section for a $1.78$ GeV particle by a factor $\sim20$ (Planck $p_\mathrm{ann}$) and admits a $p$-wave one. Kills: no undressed solution; overclosure; CMB injection. Direct detection cannot adjudicate: $\sigma_\mathrm{SI}\approx10^{-47}\ \mathrm{cm^2}$ at $1.78$ GeV lies under the solar-neutrino fog.

**Proposition 41 (The Higgs invisible width as the adjudicator) [DF given K-17].** *If undressed $\tau$-class knots exist and couple as in K-17, then since $2M_{N_0}<M_h$,*
$$
\Gamma(h\to N_0\bar N_0) = \Gamma(h\to\tau^+\tau^-) = 0.26\ \mathrm{MeV}\ (\text{Dirac}),\quad0.13\ \mathrm{MeV}\ (\text{Majorana}), \tag{104}
$$
*so $\mathrm{BR}(h\to\mathrm{invisible}) = 5.9\%$ or $3.1\%$, against the Standard Model's $0.11\%$ ($h\to ZZ^*\to4\nu$), the ATLAS 95% limit of $10.7\%$ [75], and the HL-LHC reach of $\approx2.5\%$ [76]. If no undressed solution exists, GUM predicts the Standard-Model value.*

*Proof.* The vertex is $m_\tau/v$ for both channels, the phase-space factors coincide at equal mass, and a Majorana fermion has half the Dirac width. $\square$

This is Stake S31. A measured invisible branching ratio of $3$–$6\%$ with no other new physics would confirm a $\tau$-mass sterile knot and simultaneously kill it as the dark matter (it would be a thermal relic, overabundant unless (ii)–(iv) deliver); a limit below $2.5\%$ forces either the non-existence of undressed knots or a selection rule GUM has not stated. The previous draft listed "invisible width in window" under S2$'$ without a number; the number is Eq. (104), and GUM is exposed to it either way.

# 9. The Handedness Bit and Closure K-8

## 9.1 The chain as a parity check

**Definition 5 (Sign chain).** Let $s\in\{+1,-1\}$ be the vacuum handedness. A sign chain is a set of observables $O_i\in\{+1,-1\}$ with theory-computed signs $\varepsilon_i\in\{+1,-1\}$ such that GUM predicts $O_i = \varepsilon_is$ for all $i$. The chain is broken if any product $O_iO_j\ne\varepsilon_i\varepsilon_j$.

**Proposition 15 (Structure and status of C-EW1).** *(i) A chain of length $k$ with one free bit has $k-1$ independent parity checks. (ii) By Proposition 13 the sign of $w_a$ is $+1$ for all $n\in(0,1)$ independently of $s$; hence $w_a\ge0$ is an unconditional prediction, not a link of the chain. (iii) With weak chirality as anchor ($O_1 = $ left, fixing $s$), the chain predicts $\delta_{CP}\to-\pi/2$ with $\theta_{23}\to45^\circ$ (Stake S10).*

The anchor's two neutrino stakes are already in mild mutual tension, and GUM prints it: S10 wants $\delta_{CP}\approx-\pi/2$ and S1 wants normal ordering, while the joint long-baseline analyses leave $\delta_{CP}\approx-\pi/2$ most comfortable in the inverted ordering. JUNO's ordering determination adjudicates S1's ordering clause before DUNE and Hyper-K adjudicate S10.

## 9.2 Cosmic birefringence, its redshift profile, and the merged stake

Planck/WMAP give $\beta = 0.342^{\circ}\,{}^{+0.094}_{-0.091}$ ($3.6\sigma$) [30] and ACT DR6 gives $\beta = 0.215^\circ\pm0.074^\circ$ ($2.9\sigma$) [31], frequency-flat across 23–353 GHz. At static tilt the core predicts $\beta = 0$ (Proposition 3). When $\theta_c(t)$ relaxes cosmologically alongside the pitch lag, K-8 executes as follows.

**Proposition 20 (Induced Chern–Simons coupling, frequency-flat birefringence, and its redshift profile — Closure K-8) [DW-conditional].** *Let the condensate tilt $\theta_c(t)$ evolve on the soft manifold alongside $\delta q(t)$ according to Eq. (15) and the lag ODE of Appendix D. Then: (1) integrating out the gapped B3 branch at one loop in the presence of $W_\chi$ and a time-dependent tilt induces in the doublet's effective action the parity-odd operator*
$$
\mathcal{L}_\Theta = -\frac{\alpha_\mathrm{em}}{2\pi}\,\Theta(\theta_c(t))\,\mathbf{E}\cdot\mathbf{B}, \qquad \Theta(\theta_c) = s\,\kappa_\chi\left(\frac{\chi_3}{\tilde m\sqrt{\gamma}}\right)\sin^2\theta_c, \qquad\kappa_\chi = O(1)>0; \tag{61}
$$
*(2) a photon emitted at cosmic time $t_e$ experiences a frequency-independent rotation*
$$
\beta(t_e) = \frac{\alpha_\mathrm{em}}{4\pi}\big[\Theta(\theta_c(t_0))-\Theta(\theta_c(t_e))\big], \qquad \sin^2\theta_c(t) = \sin^2\theta_{c,0}\left[1-\frac{2\,\rho_\mathrm{DE}(t)}{(\mathfrak{m}-1)\,\bar\gamma q^{*2}\sin^2\theta_{c,0}}\right]; \tag{62}
$$
*(3) because $\rho_\mathrm{DE}(t)$ decreases monotonically for every $n\in(0,1)$ (Proposition 11), $\varepsilon_5 = \mathrm{sgn}[\Theta(t_0)-\Theta(t_e)] = +1$, locking $\mathrm{sgn}(\beta) = s$ to the weak-chirality anchor; $\beta\ne0$ requires $n<1$; and the rotation accrued by a source at redshift $z$, relative to that of the CMB, is*
$$
\frac{\beta(z)}{\beta_\mathrm{rec}} = \frac{h(z)^{2(1-n)}-1}{h(z_\mathrm{rec})^{2(1-n)}-1}, \qquad h\equiv H/H_0, \tag{105}
$$
*which is $6\times10^{-4}$ at the reionization epoch $z\simeq7.7$ for $n = \tfrac12$, $1.8\times10^{-2}$ for $n = 0.75$, $0.11$ for $n = 0.9$ and $0.18$ for $n = 0.95$; for sources at $z\le3$ it is below $0.1$ for every $n\le0.95$.*

*Proof.* $\mathbf{E}\cdot\mathbf{B}$ is a total divergence, so a static $\Theta$ rotates nothing; a time-dependent $\Theta$ shifts the derivative onto $\dot\Theta\mathbf{B}$ in the Ampère–Maxwell equation, splitting the circular-polarization phase velocities by $\Delta k = (\alpha_\mathrm{em}/2\pi)\dot\Theta$ independently of frequency, which integrates to Eq. (62). Minimizing Eq. (15) at $q = q^*+\delta q$ with Eq. (44) gives the tilt law; Eq. (105) follows from $\rho_\mathrm{DE}\propto H^{2(1-n)}$. $\square$

The profile is new in this revision and is the discriminator that the previous draft lacked. Axion-like explanations with $m_a\gg H(z_\mathrm{reion})$ rotate the reionization and recombination signals equally; GUM's rotation is recombination-dominated, so the low-multipole $EB$ bump that LiteBIRD is designed to measure should carry at most a tenth of the high-multipole rotation, and polarized radio galaxies and quasars at $z\lesssim3$ should show essentially none ($\lesssim0.02^\circ$ even at $n = 0.9$). The ratio is a monotone function of $n$ and measures it independently of the distance ladder. The condition that $\sin^2\theta_c$ stay positive back to recombination requires $\bar\gamma q^{*2}\gtrsim4\times10^4\rho_{\mathrm{DE},0}$, which the condensate scale $(0.05\ \mathrm{eV})^4$ satisfies by three orders.

**Stake S19/20 (The lag–birefringence pair).** The previous draft carried the dark-energy family (S19) and the birefringence sign (S20) as independent stakes. They are one stake with two readouts, because Proposition 20 makes $\beta\ne0$ require $n<1$ while Table 7 pushes $n\to1$. *Readout A (expansion):* $w_a\ge0$ and $w\ge-1$ at all redshifts, with the posterior on $n$ from S18. *Readout B (polarization):* $\mathrm{sgn}(\beta) = +s$ with the profile of Eq. (105), read as the low-$\ell$/high-$\ell$ $EB$ ratio and as the absence of rotation in $z\lesssim3$ sources; the sign of $\beta$ is uniform across the sky (Proposition 30 of the 2026-09-28 revision, adopted by reference). *Kills:* $w_a<0$ with $w_0>-1$ at $\ge3\sigma$ in a non-forcing parametrization (retires the family); $\beta\ne0$ at $\ge5\sigma$ with the expansion data forcing $n>0.98$ (retires K-8 with the family, since a static condensate rotates nothing); a low-$\ell$/high-$\ell$ ratio above $0.3$ at any $n$ the expansion data allow; a sign mismatch with the anchor; sign-flipping patches. *Status:* $\beta\ne0$ at $2.9$–$3.6\sigma$; the family disfavored at $\ge2.6\sigma$ for every $n$ (Table 7). GUM notes that this stake can kill its electromagnetic chirality sector and its dark-energy sector in a single stroke, and that this is what a cross-lock is for (correction 24 of Sec. 10.5).

## 9.3 Pre-registration

GUM states, before the adjudicating measurements: if DUNE or Hyper-K find $\delta_{CP}$ with sign opposite to $\varepsilon_4s$ at $\ge3\sigma$, C-EW1 is broken; if JUNO establishes the inverted ordering, S1 is retired and the heliknoton identification returns to [posed]; if Euclid and DESI confirm $w_a<0$ with $w_0>-1$ at $\ge3\sigma$ in a non-forcing parametrization, the relaxation family is retired; if LiteBIRD measures a low-$\ell$ rotation equal to the high-$\ell$ one, or a rotation with $n>0.98$, K-8 is retired and the electromagnetic sector's chirality claims are withdrawn; if HL-LHC measures an invisible Higgs width outside $\{0.1\%\}\cup[3\%,6\%]$, Conjecture K-17 is retired; if a $300$-qubit mirror circuit shows a flat return probability through $350$ qubits, dense storage is retired. A chain that cannot be broken by a scheduled measurement is not a chain.

# 10. Ledger, Closures, and Stakes

## 10.1 The audit criterion

**Definition 6 (Non-circular and discriminating).** A postulate $P$ non-circularly explains a fact $F$ if $P$ was not selected because $F$ is known, or entails a distinct testable $F'\ne F$ not used in its selection. $P$ discriminates between two theories if some $F'$ it entails is not entailed by the competitor.

| Claim (grade) | Selected for the fact? | Non-circular | Discriminating vs. SM/$\Lambda$CDM | Disposition |
|---|---|---|---|---|
| Objectivity F10$'$ and doublet gapless (Theorem 1, Prop. 23) | Reduced to level-0 background independence | Yes (via $F'$) | No | Consistency; inverse kills S7 |
| Locality dichotomy; no EM precursor (Theorems 5, 11, F-G) | F-G adopted to recover Gauss's law | No (circular, stated) | No (Maxwell exactly) | Null test S15; K-18 |
| Custodial $\rho = 1$; $\Delta\rho_\mathrm{top}$ (Props. 8, 21) | No | Yes | No | Consistency [IM]; S7 |
| $e = g\sin\theta_w$; $\sin^2\theta_w = 0.227\pm0.009$ (Props. 8, 31) | No | Yes | Weakly (a band) | Landing; K-EW-III [DW] |
| Anomaly sums as tear-free necessity (Props. 9, 31) | Derived thirds and $\det\mathsf F>0$ | Yes | No | Consistency; K-EW-II |
| KM counting (Prop. 10); junction sign (Prop. 25) | No | Yes | No | Inherited; K-4 [CJ] |
| Finite $c_L$ in the tower; Bancal–Barnea deviation (Theorem 13, F-NS) | No | Yes | **Yes** | Prediction, S28 |
| Dense-storage cliff at $n_{50}\approx324$–$338$, width $\le4.4$, knob-dependent (Props. 38, Thms. 16–17) | No | Yes | **Yes** (given dense storage) | Prediction, S16, S29 |
| Far-infrared trough; $\ell_\mathrm{lock}$ bound (Thm. 14, Cor. 8) | No | Yes | **Yes** (if $\ell_\mathrm{lock}\ne\ell_s$) | Bound/discovery, S22 |
| Relaxation family, $w_a\ge0$, $n\in[\tfrac12,1]$ (Props. 11–14, 19) | No | Yes | **Yes** (disfavored by DESI) | Prediction, S18, S19/20 |
| Birefringence sign and profile (Props. 15, 20) | No | Yes | **Yes** | Prediction, S19/20 |
| Pitch-lag bound; $\mu_{pe}$ drift without $\alpha$ drift (Props. 36, 40) | No | Yes | **Yes** (correlation) | Prediction/bound, S23 |
| Channeling resonance $\propto\ell_\mathrm{row}$ (Prop. 37) | No | Yes | **Yes** | Prediction, S24 |
| Two-scale electron; halo dominance (Thm. 9, Prop. 7, K-10) | No | Yes | **Yes** ($e^\ast$, form factor, uniformity) | Consistency + S21, S32 |
| Undressed $\tau$-knot; Higgs invisible width (K-17, Prop. 41) | No | Yes | **Yes** | Conjecture with stake, S31 |

*Table 1. GUM's ledger under the audit criterion.*

## 10.2 Closures

| Closure | Content | Status in this revision | Result / deliverables / kill |
|---|---|---|---|
| K-0 | Level 0 $\to$ Level 1 | Executed (Def. 8, Prop. 23) [DW-structural] | Embedding theorem; F10$'$ reduced to background independence. |
| K-3 | Strong-CP relaxation by the $b_P^2$ penalty | Executed (Prop. 24) [DW] | Mechanism; $\bar\theta_\mathrm{eff}\lesssim10^{-43}$; S11 rephrased as a shared inverse kill. |
| K-4 | Junction-stiffness flow | **Re-graded [CJ]** (Prop. 25) | Sign conjectured; effective theory of the junction owed. |
| K-5 | Electroweak precision $\Delta\rho_\mathrm{top}$ | **Consistency [IM]** (Prop. 21) | Veltman's number with a GUM correction $2\times10^{-34}$. |
| K-8 | Condensate-relaxation birefringence | Executed (Prop. 20) [DW-conditional] | $\varepsilon_5 = +1$; profile Eq. (105); requires $n<1$; S19/20. |
| K-9 | Multi-time statistics | Closed (Prop. 26) [DF] | Lüders up to $O(e^{-\Gamma_H\Delta t}, r/c_L\Delta t)$; second term is S28's bipartite face. |
| K-10 | Halo dominance of $A$, $B$ | **Re-posed** (Prop. 18) | Core rigidity; halo response in closed form; ratio; uniformity at $10^{-18}$ (S32). Kill: core share $>10\%$. |
| K-11 | Doublet–fog matrix element | Closed conditionally (Prop. 17, Cor. 8) [DF] | $\Delta n = \epsilon_\mathrm{vac}\sin^2\theta_c(q\ell_\mathrm{lock})^4$; zero at $\ell_\mathrm{lock} = \ell_s$; S22 bounds $\ell_\mathrm{lock}\lesssim2$ nm. |
| K-12 | Relaxation index $n$ | Executed (Prop. 19) [DW]; disfavored | $n\in[\tfrac12,1]$; Table 7; full fit S18 owed. |
| K-13 | Prefactors of $g_4$, $\epsilon_R$ | Closed (Prop. 22) [DF] | $\epsilon_R = 1.3\times10^{-31}$ at $\ell_\mathrm{P}$. |
| K-14 | Heliknoton–$Z$ universality | **Consistency [DW]** (Prop. 27) | $N_\nu = 3[1+O(\epsilon_\nu)]$, a landing. |
| K-15 | Top decay before hadronization | **Consistency [IM]** (Prop. 28) | Standard-Model top physics restated. |
| K-16 | Cone condition | **Re-posed** | Derive $\mu/\rho_0 = \gamma_\mathrm{eff}/2J$ from level 0; imported until then. |
| K-17 | Dark sector | **Re-graded [CJ]**; freeze-in withdrawn | Undressed solution; dressing cross-section; relic density; CMB injection; S31. |
| K-G | Gravity | **Re-posed** (Prop. 29 kept as conditional induction) | Carrier of gravitational waves; positivity of its kinetic term; $c_\mathrm{GW} = c$ at $10^{-15}$. Corollary 9 fixes $\ell_s$. |
| K-EW-I | Collective modes and $\Gamma_h$ | **Consistency [IM]** (Prop. 31(1)) | Kinematics; loop channels imported. |
| K-EW-II | Anomaly necessity | Executed (Prop. 31(2)) [DW] | $\det\mathsf F>0$ forces Eq. (43). |
| K-EW-III | Mixing attractor | Executed (Prop. 31(3)) [DW] | $\sin^2\theta_w = 0.227\pm0.009$ on-shell; form of the tilt correction owed. |
| K-18 (new) | Gauss completion | Posed (Flag F-G) | Derive Eq. (82); defect current; longitudinal energy sign. |
| K-22 (new) | No-signaling horn | Posed (Flag F-NS) | Is the tower's update rule no-signaling? Fixes the sign of S28. |
| K-23 (new) | Pitch lag | Executed negatively (Prop. 40) | $|\varepsilon_\nu|<10^{-5}$–$10^{-4}$; $\mathcal{X}^{-1}>1.6$–$360\ \mathrm{eV^2}$; no neutrino-mass drift. |
| K-24 (new) | Hosting mode | Posed (Def. 11) | $N_\mathrm{eff}$ from the tower's field content; S29. |
| K-N (new) | Normalization audit | Posed | Re-evaluate every Appendix I quantity under Eqs. (4)–(8a); corrected bridge inversion; $\kappa$ in one normalization. |
| K-Q (new) | Strong sector | Posed | Linear confinement; gapped-mediator criterion; quark censorship; Regge regression tests. |

*Table 2. Ledger of closures. Of the previous draft's executed closures, nine stand (K-0, K-3, K-8, K-9, K-11, K-12, K-13, K-EW-II, K-EW-III), four are consistency conditions (K-5, K-14, K-15, K-EW-I), two are conjectures (K-4, K-17), three are re-posed (K-10, K-16, K-G); six are new.*

## 10.3 Stakes

| # | Stake | Adjudicator | Kill | Status |
|---|---|---|---|---|
| S1 | $\Sigma m_\nu\in[0.059,0.113]$ eV, normal ordering (K-10 posed, K-N) | DESI DR3; Euclid; JUNO | robust $\Sigma<0.059$ eV; inverted ordering; corrected band below $0.050$ eV | at the $\Lambda$CDM edge ($m_3\le0.0503$) |
| S2$'$ | Higgs couplings in the $\eta$-window, family-ordered | HL-LHC | anomaly outside window | live |
| S3 | $E_\mathrm{rot}/E = j/2$ on a valid bench object | analog benches | valid bench off $j/2$ | live (kinematic) |
| S4$'$ | $\kappa^2g_\mathrm{tot} = 35/24$ vs. $7/8$ (after K-N) | analog benches | outside band | live |
| S5 | Clock phase-locking $\propto\cos\Delta\phi$ | analog benches | no locking | live |
| S6 | $0\nu\beta\beta$ occurs | LEGEND-1000; nEXO | full-funnel exclusion | live |
| S7 | Inverse-kill battery: photon mass; EP violation; *field-free, frequency-flat Bragg-type* vacuum birefringence (Euler–Heisenberg birefringence is inherited); $\rho\ne1$; tree FCNC; $e\ne g\sin\theta_w$; massless charged mode; photon dispersion above Eq. (98); matter–light cone above $10^{-20}$; $c_\mathrm{GW}\ne c$ | community | any confirmed detection | standing |
| S8 | Michel $\rho = 3/4$; RH currents below $\epsilon_R$ (Prop. 22) | $\mu$ and $\beta$ decay | RH current above window | live |
| S9 | Lock-melt GW background weak | LISA | loud first-order EW background | live |
| S10 | $\theta_{23}$ near-maximal; $\delta_{CP}\to-\pi/2$ per C-EW1, with normal ordering | DUNE; Hyper-K; JUNO | $\delta_{CP}\approx0,\pi$; wrong sign; NO excluded | live, in tension |
| S11 | No $\bar\theta$-type EDM above the CKM background (K-3) | nEDM; eEDM | a $\bar\theta$-attributable EDM above $\sim10^{-31}$ e·cm | shared inverse kill |
| S12 | Junction-stiffness sign (K-4) | computation (controlled) | screening sign | conjecture |
| S13 | Valid isorotating bench object; measured $j$ and dilation law $V(j)$ (F-B1) | chiral metamaterials; LC and magnetic solitons | no valid object; $j = 1$; $V(j)$ inconsistent with $(1,1)$ | open |
| S14 | Discriminator on a validated bench | same | outside band | open |
| S15 [RG] | No EM precursor in $0<t<r/c$ (F-G) | pulsed near-field; kicked bunches | sidereal-modulated pre-light signal at the $\mu$V/m level | null test |
| S16 [RG] | Dense-storage cliff at $n_{50}\approx324$ (ion zone) / $338$ (SC die) at $\ell_s = \ell_\mathrm{P}$; width $\le4.4$ qubits; depth-independent | $\ge300$-qubit mirror circuits | flat $\mathcal{P}(n_q)$ through $350$ | open |
| S17 | Generator form Eq. (39) on the bench | chiral-nematic solitons | $B = 0$; no termination | open |
| S18 | Printed $n$, perturbations, full distance fit with $\Sigma m_\nu$ (K-12) | GUM + BAO/SN/CMB | no $n$ fits | proxy in Table 7; full fit owed |
| S19/20 | The lag–birefringence pair: $w_a\ge0$ and $n$ posterior; $\mathrm{sgn}\,\beta = +s$ with profile Eq. (105) | DESI final; Euclid DR1; SO; LiteBIRD | see Sec. 9.2 | family disfavored at $\ge2.6\sigma$; $\beta\ne0$ at $2.9$–$3.6\sigma$ |
| S21 | Two-scale electron (Eq. 37) | LEP/LHC archives; $(g-2)_e$ | core $>10^{-19}$ m; $e^\ast$ below TeV | standing |
| S22 [RG] | Far-IR trough with fixed edge at $\bar np\in[21.8,24.7]\ \mu$m, dipole-shifted, circularly polarized; core predicts none; depth bounds $\ell_\mathrm{lock}$ (Cor. 8) | JWST MIRI; Spitzer IRS stacks | a trough retires $\ell_\mathrm{lock} = \ell_s$; a null tightens Eq. (90) | $\ell_\mathrm{lock}\lesssim2$ nm |
| S23 | $\alpha$–$\mu$ discriminant: stiffness channel ($\alpha$ drifts, $\mu_{pe}$ not) or pitch channel ($\mu_{pe}$ drifts with profile Eq. (101), $\alpha$ not) | optical clocks; quasar spectra | joint detection with $|R_{\mu\alpha}|\gtrsim1$; $\mu_{pe}$ drift above Eq. (102) | null on both |
| S24 | Channeling resonance $p_1\propto\ell_\mathrm{row}$: $80.87$, $84.26$, $53.12$ MeV/$c$ | electron beams on thin crystals | absent at all three | one unreplicated report |
| S28 | Finite $c_L$: sidereal bipartite bound Eq. (96); Bancal–Barnea deviation under F-NS (K-22) | long-baseline and tripartite Bell tests | bound above the B1 speed (C-L); no deviation where predicted | bound-raising |
| S29 | Cliff shifts with $V$, $A$, or $\ell_q$ (K-24) | cross-platform mirror circuits | cliff without knob dependence | new |
| S31 | Higgs invisible width: $3$–$6\%$ if undressed $\tau$-knots exist (K-17), else $0.11\%$ | HL-LHC $h\to$ invisible | a value outside $\{0.1\%\}\cup[3\%,6\%]$ | ATLAS $<10.7\%$ |
| S32 | Spatial uniformity of $m_e$ across pitch cells at $10^{-18}$ (K-10) | lattice-clock scan over $100\ \mu$m | pitch-periodic or cell-structured modulation | null expected |

*Table 3. GUM's twenty-seven stakes; [RG] marks stakes re-graded in this revision.*

Bench validity clause: quasi-conservative regime $\Gamma_\mathrm{damp}\ll\omega$; no Bell content is claimable from any bench; failure of an exact ratio on a validated bench falsifies the corresponding derivation as mathematics. The cross-locks are: **C-EW1** (one handedness bit): family orientation, weak chirality, the sign of $\delta_{CP}$, the K-3 residual, and through K-8 the birefringence sign and profile. **C-EW2** (one halo): $\mathfrak{c}$, the $G_F$ suppression, $\epsilon_R$, and the frustration integrals, with K-10 and K-N owed. **C-EW3** (one censor): three families and $y_t\approx1$. **C-EW4** (one invariance): photon masslessness and $\rho = 1$. **X-$\Lambda\nu$** (one soft coordinate): the dark-energy lag, the pitch, the neutrino mass, the far-infrared edge, the birefringence profile, and now the lepton mass ratios through Proposition 40 — one variable, bounded by one quasar measurement. **C-L** (one longitudinal speed): the B1 speed is the tower's update speed, so S28 bounds a modulus of the substrate. **C-$\ell_s$** (one structural scale, new): Corollary 9 fixes $\ell_s$ from $G$, so the cliff, $\epsilon_R$, the discreteness term and the core corrections are one number.

## 10.4 House style for agreements

**Definition 7 (Landing versus test).** With theory half-width $\delta_\mathrm{th}$ and experimental uncertainty $\delta_\mathrm{exp}$, agreement is a *test* if $\delta_\mathrm{th}\lesssim3\delta_\mathrm{exp}$ and a *landing* if $\delta_\mathrm{th}\gtrsim10\delta_\mathrm{exp}$. A landing is reported as "consistent within $\pm\delta_\mathrm{th}$," never as a pull in $\sigma$. GUM's charged-lepton logarithms, Weinberg-angle band, $N_\nu$ and Regge slope are landings by factors of $10^2$–$10^4$ and are reported as such.

## 10.5 Corrections to the previous drafts

GUM applies its ledger to itself. The following statements of the master manuscript of 2026-09-06 are withdrawn or corrected in this revision; items 1–6, 9–11, 18 and 20 adopt corrections first made in the revision of 2026-09-28, the rest respond to the verification of 2026-10-14.

1. *Kinetic normalization.* The rotational kinetic coefficient is $J$, so that the kinetic energy is $\tfrac12J|\boldsymbol\omega|^2$ (Eq. 4).
2. *Gap modulus.* $\tilde m^2 = 4\mu_c+\tfrac14\tilde m_V^2$ (Eq. 8a); the inherited $\kappa = 1/\sqrt2$ implicitly fixes $\mu_c = 3\tilde m_V^2/16$; K-N is posed.
3. *Planck's constant.* Constrained, not derived: one relation among three imports (Prop. 5).
4. *Cones.* The doublet is exactly lightlike under the cone condition Eq. (9a) with no flow; $c_\psi>c$ by Eq. (9b), and the matter–light difference at the weak gap bounds $\ell_g\lesssim7\times10^{-28}$ m (erratum E2 of the 2026-09-28 revision, adopted).
5. *Halo length.* One formula, Eq. (38): $\lambda_\mathrm{halo} = (c_\psi/c)(\hbar/Mc)\kappa/\sqrt{1-\kappa^2} = (c_\psi/c)\hbar/Mc$ at the closure value. The previous draft's Eq. (38), Eq. (59) and bridge conversion differed by a factor two; the bridge of Eq. (40) is referenced to $\hbar/m_\tau c$ and $m_3 = 0.047$ eV stands (erratum E1 of the 2026-09-28 revision, adopted); whether the integrals move on the corrected profile is item (3) of K-N.
6. *Finite $c_L$.* Confronted with the Bancal–Barnea dichotomy (Theorem 13); GUM takes the no-signaling horn (F-NS) and predicts a multipartite deviation (S28, K-22).
7. *Near-BPS window.* It is the electron's, $\epsilon_e\in[8\times10^{-6},3\times10^{-3}]$; other species follow from $\epsilon\propto\tilde m^{-4/3}$ (Sec. 7.1). The previous draft's single window could not hold for three charged leptons.
8. *The cliff.* Dimension counting is stated with the exact $\mathbb{CP}^N$ ball volume (Theorem 7, Prop. 38): 90%–10% width $4.4$ qubits, not "$\approx6$"; midpoint $\log_2(2M/\ln2)-1$ above $\log_2N_\mathrm{eff}$. Dimension counting is untestable by circuits (Theorem 15); the testable claim is dense storage (Def. 10), with a mirror-circuit protocol (Thms. 16–17) replacing peaked-circuit verification; S16 re-labeled.
9. *Structural scale.* $\ell_s\lesssim1.5\times10^{-27}|\xi_\gamma|^{-1/2}$ m from photon timing (Prop. 42) excludes the top decade of the previous range; the gravity closure fixes $\ell_s = \sqrt{N_\mathrm{eff}/12\pi}\,\ell_\mathrm{P} = (0.4$–$1.3)\ell_\mathrm{P}$ (Cor. 9); every $\ell_s$-dependent number is restated there (Sec. 8.3).
10. *Pitch.* $p\in[21.8,24.7]\ \mu$m (Prop. 34); the previous $26\ \mu$m lay below the oscillation floor the same draft used.
11. *Far-infrared observable.* A redshift-swept trough with a fixed blue edge (Theorem 14), not a non-redshifting line; the transparency bound is $6\times10^{-17}$ (Cor. 5), not $10^{-31}$.
12. *Feature depth.* With $\ell_\mathrm{lock} = \ell_s$ the core predicts no feature at all; S22 is rephrased as the absence of a trough, with the trough as the discovery channel that measures $\ell_\mathrm{lock}$ (Cor. 8). The identification $\ell_\mathrm{lock} = \ell_s$ is a hypothesis and K-11 is closed conditionally on it.
13. *Closure K-10.* "Variationally proven" withdrawn: the previous Eq. (57) was dimensionally inconsistent and its corrected form has no interior minimum. K-10 is re-posed with three deliverables and the uniformity constraint of S32 (Prop. 18).
14. *Grades.* K-4 to [CJ] (the junction flow is not a controlled calculation); K-5, K-15, K-EW-I to [IM] and K-14 to [DW] as consistency conditions that reproduce Standard-Model numbers by assuming Standard-Model integrands.
15. *Weinberg angle.* $\varepsilon_\mathrm{tilt} = 1-\cos\theta_c = 0.28$ at $\sin\theta_c = 0.69$, not $0.22$; $\sin^2\theta_w = 0.227\pm0.009$ in the on-shell scheme, a landing containing $0.2232$ (Prop. 31(3)); $\vartheta = 0.542$ in Appendix H.
16. *Strong sector.* Theorems Q-1, Q-3, Q-6$'$, cited but never printed, are the deliverables of posed closure K-Q; nothing is built on them.
17. *Stake S11.* "$|d_n|\lesssim10^{-39}$ e·cm" was not adjudicable against the Standard Model's CKM background of $\sim10^{-32}$ e·cm; rephrased as "no $\bar\theta$-type EDM above the CKM background", a shared inverse kill.
18. *Novelty of the dark-energy background.* The relaxation family is the Dvali–Turner family (Sec. 8.2).
19. *Stake S18.* The previous draft marked it executed without a fit. Table 7 shows the proxy; the full fit is owed. Under the proxy every $n<1$ member is further from DESI DR2 than $\Lambda$CDM.
20. *Gravity.* Transverse strain waves are the photon, so the previous Prop. 29(2) ($c_\mathrm{GW} = c$ from single-carrier bond geometry) is withdrawn; K-G is re-posed on the carrier, K-16 on the cone condition.
21. *Soft-mode stiffness.* Stated and bounded: $\mathcal{X}^{-1}>1.6$–$360\ \mathrm{eV^2}$ depending on $n$ (Prop. 40); the option of neutrinos lighter in the past is excluded by four orders of magnitude; K-23 executed negatively.
22. *Dark matter.* The freeze-in execution of K-17 is withdrawn (fitted abundance; a Yukawa-strength vertex cannot freeze in; pair creation needs no pinch). K-17 returns to conjecture with four deliverables, and the Higgs invisible width is its stake (Prop. 41, S31).
23. *Near-field channel.* Withdrawn as an electromagnetic prediction (Theorems 5, 11, Cor. 4, Prop. 32); S15 is a null test; the $(c/c_L)^3$ "channel" is a leak of at most $5\times10^{-13}$ or an internal exchange.
24. *Stakes S19 and S20.* Merged into S19/20: one soft coordinate, two readouts, with the profile Eq. (105).
25. *Stake S7.* "Forbidden vacuum birefringence" now reads "field-free, frequency-flat Bragg-type birefringence"; Euler–Heisenberg birefringence in strong fields is Standard-Model physics GUM inherits at level 3.
26. *Closure K-0.* Graded as an embedding theorem; its genuine output is the reduction of F10$'$ to background independence (Sec. 1.2).
27. *Notation.* $a\to\ell_s$ for the structural scale and $\ell_\mathrm{lock}$ for $\sqrt{\gamma/4\mu_c}$, which the previous draft conflated; $n\to n_q$ for qubit counts where ambiguous; $\chi\to\mathcal{X}$ for the soft-mode susceptibility; $\Gamma\to\Gamma_r$ for the relaxation rate; $q\to q_\mathrm{dec}$ for the deceleration parameter; $p\to\mathsf p$ for frustration class.
28. *Integrals.* Every [N] quantity is registered in Appendix I with the grade of what depends on it; a result that rests on an unpublished integral may not be built upon until K-N publishes it.

# 11. Conclusion

GUM asks which substrate could have quantum mechanics as its coarse-grained bookkeeping, and answers with a specific one, described at its continuum level as a chiral micropolar continuum whose response modes are the photon, the electron, mass, charge, and Planck's constant — the last constrained rather than derived.

The core after two rounds of correction comprises: the Cauchy no-go and micropolar rescue theorems (Theorems 2–4); the locality dichotomy that removes $c_L$ from electromagnetism and locates it in the tower (Theorems 5, 11, 13); a conditional-field tower reproducing sequential Lüders projection (Proposition 26) and satisfying $\chi_{\max}\gtrsim10^7$ on existing data (Theorem 6); the dense-storage hypothesis with its gate-independent, geometry-dependent cliff of width at most $4.4$ qubits near $320$–$340$ qubits at the gravity-fixed structural scale (Theorems 16–17, Proposition 38, Corollary 9); the separation of the closure of $\hbar$ into the kinematic identity and Flag F-B1 (Lemma 4, Theorem 8, Proposition 4) and the two consequences of a physical clock (Propositions 36, 37); a two-scale electron whose halo dominance is posed, not proven, and constrained at $10^{-18}$ by clocks (Theorem 9, Propositions 7, 18); the electroweak, flavor and anomaly sectors at their honest grades (Propositions 8, 9, 10, 21, 22, 27, 31); the relaxation family, disfavored for every $n<1$, tied by one soft coordinate to the birefringence profile and to the lepton mass ratios (Propositions 11–14, 19, 20, 40); and the sterile knot as a conjecture whose stake is the Higgs invisible width (Proposition 41).

Heisenberg expelled the trajectory because he could not measure it. GUM readmits it on the condition that the substrate carrying it can be measured instead. The stakes above are where GUM intends to be measured, and this revision has made several of them cheaper.

Standing by for adjudication.

# Appendix A: Cosserat Kinematics, Objectivity, and Imports

**Nonlinear objectivity.** Under a rigid rotation $\mathsf{R}_0\in SO(3)$ of the whole, $\mathsf{F}\to\mathsf{R}_0\mathsf{F}$ and $\tilde Q\to\tilde R_0\tilde Q$; the polar factor transforms as $\mathsf{R}[\mathbf{u}]\to\mathsf{R}_0\mathsf{R}[\mathbf{u}]$, so $\tilde P = \tilde R[\mathbf{u}]^\dagger\tilde Q$ is invariant. Writing $\tilde P = \exp(i\boldsymbol\psi\cdot\boldsymbol\sigma/2)$ to first order recovers Eq. (3); the Maurer–Cartan currents obey $\partial_iL_j-\partial_jL_i+[L_i,L_j] = 0$; $\int b_P\,d^3x = K$ for textures with $\tilde P\to\mathbb{1}$ at infinity, the hedgehog $\tilde P = \exp[if(r)\hat{\mathbf x}\cdot\boldsymbol\sigma]$ with $f(0) = \pi$, $f(\infty) = 0$ giving $K = 1$.

**Linearization.** With $\mathsf{F} = \mathbb{1}+\nabla\mathbf{u}$, $\mathsf{R}[\mathbf{u}] = \mathbb{1}+\tfrac12(\nabla\mathbf{u}-\nabla\mathbf{u}^{\mathsf T})+O(u^2)$, axial vector $\tfrac12\nabla\times\mathbf{u}$; $Q = \mathbb{1}+[\boldsymbol\varphi]_\times+O(\varphi^2)$; hence $\boldsymbol\psi = \boldsymbol\varphi-\tfrac12\nabla\times\mathbf{u}$ and $e_{ij} = \partial_iu_j-\epsilon_{ijk}\varphi_k$. The quadratic part of $W$ in $\boldsymbol\psi$ is $\tfrac12\tilde m^2|\boldsymbol\psi|^2$ with Eq. (8a), using Lemma 2 and $1-\sigma_P\simeq|\boldsymbol\psi|^2/8$.

**Imports.** Six moduli $(\lambda,\mu,\mu_c,\alpha,\beta,\gamma)$ and two inertias $(\rho_0,J)$ [3]; chiral couplings $\chi_{1,2,3}$; topological constants $(\kappa_S,\Lambda,\tilde m_V,c_2)$; the structural scale $\ell_s$, now fixed by Corollary 9; the locking length $\ell_\mathrm{lock}$. GUM fixes $c^2 = \gamma_\mathrm{eff}/2J$ and imports the cone condition Eq. (9a) (K-16); imports $c_L$, bounded below by Bell timing; fixes one relation among $(\Lambda,J,\hbar_\mathrm{stat})$ by closure; imports $\alpha$; bounds $n\in[\tfrac12,1]$ (Proposition 19) and lands $\sin^2\theta_w$ (Proposition 31); bounds the soft-mode stiffness $\mathcal{X}^{-1}$ (Proposition 40); and derives the $\epsilon$-window, margin $\mathfrak{m}$, and frustration constants as [N] quantities from the couplings, registered in Appendix I.

# Appendix B: Proofs for the Electrodynamic Sector

**Euler–Lagrange equation.** With $\mathcal{L}_\perp = \tfrac12J\dot{\boldsymbol\varphi}^2-\tfrac14\gamma_\mathrm{eff}|\nabla\times\boldsymbol\varphi|^2$ and $\delta\int|\nabla\times\boldsymbol\varphi|^2 = 2\int(\nabla\times\nabla\times\boldsymbol\varphi)\cdot\delta\boldsymbol\varphi$,
$$
J\ddot{\boldsymbol\varphi} = -\tfrac12\gamma_\mathrm{eff}\,\nabla\times\nabla\times\boldsymbol\varphi = \tfrac12\gamma_\mathrm{eff}\big(\nabla^2\boldsymbol\varphi-\nabla(\nabla\cdot\boldsymbol\varphi)\big), \tag{48}
$$
the wave equation with $c^2 = \gamma_\mathrm{eff}/2J$ on the transverse subspace.

**Symmetric wryness.** For a divergence-free micro-rotation decaying at infinity, $\int\Gamma_{(ij)}\Gamma_{(ij)} = \tfrac12\int|\nabla\times\boldsymbol\varphi|^2$ (two integrations by parts), so $\beta$ renormalizes $\gamma\to\gamma_\mathrm{eff}$ in the transverse sector and $\alpha$ does not act; the old P5 is unnecessary there, and its longitudinal content is replaced by F-G.

**Locked doublet.** In the locking regime the effective transverse Lagrangian has $\rho_\mathrm{eff} = \rho_0+\tfrac14Jk^2$ and $\mathcal{K}_\mathrm{eff} = \mu+\tfrac18\gamma_\mathrm{eff}k^2$; under the cone condition the ratio is $c^2$ for every $k$.

**Defect-current near field.** For a completion with $\mathbf{j}_\mathrm{def}\ne0$ supported inside the fastest cone of the local dynamics, the retarded Maxwell field of $\mathbf{j}_\mathrm{def}$ is the signature; near the source it has the two-cone structure of the elastodynamic Green's function of Stokes, with near-field terms supported between the arrival of the fast and slow fronts. Its amplitude is a deliverable of K-18 and vanishes under F-G.

**Longitudinal flux.** The far-zone retarded potential of a neutral oscillating source, $\Phi_c\simeq\hat{\mathbf n}\cdot\dot{\mathbf d}(t-r/c_L)/(4\pi\varepsilon^*c_Lr)$, carries flux $-\varepsilon^*\dot\Phi_c\nabla\Phi_c$ integrating to $\ddot{\mathbf d}^2/(12\pi\varepsilon^*c_L^3)$, against Maxwell's $\ddot{\mathbf d}^2/(6\pi\varepsilon^*c^3)$: Eq. (83).

# Appendix C: Schmidt Truncation, XEB, and the Mirror Protocol

**Optimality and Page spectra.** Von Neumann's trace inequality and Cauchy–Schwarz establish Eq. (23) [34; 35]; for a Haar-random state of $2m$ qubits split $m|m$, the Marchenko–Pastur law on $[0,4\cdot2^{-m}]$ [36; 37] gives $F_\chi\le4\chi/2^m$. If the prepared state is $\rho = F_\mathrm{noise}|\Phi\rangle\langle\Phi|+(1-F_\mathrm{noise})\rho_\mathrm{dep}$, linear XEB estimates $F_\mathrm{noise}F_\mathrm{trunc}$, yielding Eq. (24).

**Covering numbers.** The geodesic ball of radius $\delta$ in $\mathbb{CP}^N$ with the Fubini–Study metric has volume $(\pi^N/N!)\sin^{2N}\delta$; at $\delta = \pi/2$ this is the total volume, so the $\delta$-covering number is at least $\sin^{-2N}\delta$, which is Eq. (25) with no free constant. For two pure states at Fubini–Study distance $\delta$, $|\langle\phi|\psi\rangle|^2 = \cos^2\delta$, so $\sin^2\delta = 1-F$.

**The protocol.** Scrambling first halves at fixed depth; cycle benchmarking of $F_\mathrm{noise}$ on sub-registers; $\mathcal{P}(n_q)$ at two depths; the knob scan of Corollary 7. At $n_q = 300$ the gate budgets are $\epsilon_2\lesssim2.8\times10^{-3}$ (all-to-all, log depth) and $1.3\times10^{-3}$ (2D nearest-neighbor) for $F_\mathrm{noise}\ge e^{-7}$.

# Appendix D: The Relaxation Family

**Background equation.** With $\rho_\mathrm{DE} = \rho_{\mathrm{DE},0}(H/H_0)^{2(1-n)}$,
$$
\left(\frac{H}{H_0}\right)^2 = \Omega_{m,0}a^{-3}+\Omega_{r,0}a^{-4}+\Omega_{\mathrm{DE},0}\left(\frac{H}{H_0}\right)^{2(1-n)}, \tag{49}
$$
solved by fixed-point iteration at each $a$.

| $n$ | $w_0$ | $w_a$ (derivative) | $q_{\mathrm{dec},0}$ | $\rho_\mathrm{DE}/\rho_m$ at $z = 1100$ |
|---|---|---|---|---|
| 0 | 0 | 0 | $+0.50$ | $2.9$ (matter-like, with radiation) |
| 0.25 | $-0.52$ | $+0.27$ | $-0.04$ | $6\times10^{-3}$ |
| 0.50 | $-0.76$ | $+0.29$ | $-0.29$ | $4\times10^{-5}$ |
| 0.75 | $-0.91$ | $+0.16$ | $-0.44$ | $3\times10^{-7}$ |
| 0.90 | $-0.97$ | $+0.06$ | $-0.50$ | $1\times10^{-8}$ |
| 1 | $-1$ | 0 | $-0.54$ | $2\times10^{-9}$ |

*Table 4. The family at $\Omega_{\mathrm{DE},0} = 0.69$, $\Omega_{r,0} = 9.1\times10^{-5}$. The last column uses the self-consistent $H$ of Eq. (49); the previous draft's matter-era estimates differed by factors $2$–$4$.*

**The CPL proxy of Table 7.** For each $n$ the family's $w(a)$ is fitted by least squares to $w_0+w_a(1-a)$ over $0<z<2$, uniformly in $a$; the DESI DR2 + CMB + supernova posteriors are approximated as Gaussians in $(w_0,w_a)$ with the published marginal widths and correlation $-0.9$ [52]: Pantheon+ $(-0.838\pm0.055,\ -0.62\pm0.21)$, Union3 $(-0.667\pm0.088,\ -1.09\pm0.29)$, DESY5 $(-0.752\pm0.057,\ -0.86\pm0.22)$. $\Delta\chi^2$ is converted to a Gaussian-equivalent significance for two parameters. The proxy reproduces DESI's quoted $2.8\sigma$ and $4.2\sigma$ for $\Lambda$CDM to within $0.3\sigma$.

**The lag ODE.** $\Gamma_r\propto H^n$ follows from $\dot{\delta q} = -\Gamma_r\delta q+SH$ in the adiabatic limit $\Gamma_r\gg H$, where $\delta q\to SH/\Gamma_r$ (Proposition 19); the coupled evolution of the tilt yields Eq. (62) and the profile Eq. (105); the lag's amplitude is bounded by Eq. (102).

# Appendix E: Notation

| Symbol | Meaning | First used |
|---|---|---|
| $\mathfrak{S}, U_{vv'}$ | Level-0 causal-adjacency complex; $SU(2)$ edge comparator | Def. 8, Prop. 23 |
| $\mathbf{u}$, $\mathsf{F}$, $\mathsf{R}[\mathbf{u}]$ | displacement, deformation gradient, polar rotation | Sec. 2 |
| $\tilde Q$, $\boldsymbol\varphi$; $\tilde P$, $\sigma_P$, $\boldsymbol\psi$ | micro-rotation; relative texture, trace, relative rotation | Eq. (1), Eq. (3) |
| $e_{ij}$, $\Gamma_{ij}$ | Cosserat strain; wryness | Eq. (2) |
| $\lambda,\mu,\mu_c,\alpha,\beta,\gamma,\gamma_\mathrm{eff}$; $\chi_{1,2,3}$; $\kappa_S,\Lambda,\tilde m_V,c_2$; $\tilde m$ | moduli; chiral couplings; topological constants; total gap stiffness | Eqs. (5)–(8a) |
| $\rho_0$, $J$, $\ell_g$; $\ell_s$; $\ell_\mathrm{lock}$; $\ell_\mathrm{P}$ | mass density; micro-inertia; grain gyration radius; structural scale; locking length; Planck length | Secs. 2, 8.3 |
| $c_L$, $c$, $c_\psi$, $c_\mathrm{GW}$ | longitudinal, doublet, matter, and gravitational-wave speeds | Secs. 2.3, 8.3 |
| $\Phi_c$, $\Phi_\infty$, $\mathbf{J}_\varphi$, $\mathbf{j}_\mathrm{def}$ | frame-connection scalar; Coulomb potential; torque current; defect current | Sec. 3.3 |
| $q$, $p$; $\mathfrak{m}$, $\theta_c$, $\Theta$; $\lambda_\mathrm{edge}$, $\Pi$ | pitch wavenumber and pitch; margin; tilt; induced CS angle; trough edge and passage parameter | Secs. 3.6, 9.2 |
| $\psi_k$, $F^{(\alpha)}_k$ | conditional wave function; tower fields | Eqs. (20), (21) |
| $\chi$, $\chi_{\max}$, $F_\chi$ | Schmidt rank; capacity; truncated fidelity | Def. 3, Eq. (23) |
| $N_\mathrm{dof}$, $N_\mathrm{eff}$, $\nu_c$, $G$, $L_R$, $\alpha(n)$, $M$ | degrees of freedom; effective count; numbers per cell; gains; saturation ratio; $\ln(3GD)$ | Defs. 4, 10, 11; Prop. 38 |
| $j$, $\mathbb{I}$, $\omega$, $\kappa$; $(a,b)$ | rotor number; inertia; isorotation frequency; $\omega/\omega_0$; Derrick exponents | Eq. (32), Prop. 4 |
| $R^*$, $R_\mathrm{core}$, $\lambda_\mathrm{halo}$; $\epsilon_i$ | compacton radius; core radius; halo length; species lift | Eqs. (30), (38); Sec. 7.1 |
| $A$, $B$, $\Sigma(\mathsf p)$; $A_\mathrm{halo}$, $\kappa_\mathrm{far}$, $X$ | frustration integrals; bridge coefficients and logarithm | Eqs. (39), (40) |
| $\vartheta$, $M_T$; $\eta_f$; $\epsilon_R$ | mixing modulus; twist gap; coupling deviation; RH admixture | Prop. 8, Thm. 10, Eq. (66) |
| $n$, $\Gamma_r$, $\delta q$, $\varepsilon_\nu$, $\mathcal{X}$ | relaxation index; rate; lag; lag fraction; soft-mode susceptibility | Eq. (44), Prop. 40 |
| $N_{\mathsf p}$ | undressed sterile knot in class $\mathsf p$ | Conj. K-17 |
| $s$, $\varepsilon_i$, $O_i$ | handedness bit; theory signs; observed signs | Def. 5 |

*Table 5. Notation.*

# Appendix F: The Bragg Passage and the Lab-Frame Transformation

**Passage.** Along a ray in a helical medium the co-handed forward and backward amplitudes obey coupled-mode equations with coupling $g_c = \pi\Delta n/(\bar np)$ and detuning $\delta(\ell) = 2\pi\bar n(1+z(\ell))/\lambda_\mathrm{obs}-2\pi/p$. With $dz/d\ell = -(1+z)H/c$, the detuning sweeps linearly through zero at $z_r$ with $|d\delta/d\ell| = (2\pi/p)H(z_r)/c$, and the contra-directional Landau–Zener problem gives the reflected fraction $1-\exp(-\pi g_c^2/|d\delta/d\ell|)$; substitution gives $\Pi = (\pi^2/2)(\Delta n/\bar n)^2c/(pH)$, Eq. (86). Adiabaticity requires the sweep to be slow on the scale of $g_c$, which holds for $\Delta n\gg(pH/c)$, i.e. for every $\Delta n$ above $10^{-20}$; below that the passage is sudden and $R\simeq\Pi$, the same bound. The resonant path length is $(\Delta n/\bar n)c/H$: $14\ \mu$m for $\Delta n = 10^{-31}$, which is why the previous static-slab bound of $10^{-31}$ does not apply.

**Lab-frame ordering.** The arrival event in the substrate frame is $(t',\mathbf{x}') = (r/c_L,\ r\hat{\mathbf n})$; with the lab moving at $\mathbf{v}_M$, the lab time is $t = \gamma_v(t'-\mathbf{v}_M\cdot\mathbf{x}'/c^2)$, which is Eq. (84). For the bipartite bound, the substrate-frame time separation of two lab events at lab separation $\mathbf{L}$ and lab-time mismatch $\Delta t$ is $\Delta t-\mathbf{v}_M\cdot\mathbf{L}/c^2$ to first order; sweeping $\mathbf{L}(\tau)$ sidereally bounds its minimum over an integration window, giving Eq. (96).

# Appendix G: The Electroweak Precision Obligation

In the Standard Model the dominant loop correction to $\rho = 1$ from the top–bottom splitting is $\Delta\rho_\mathrm{top} = 3G_Fm_t^2/(8\sqrt2\pi^2) = 0.0093$ for $m_t = 172.5$ GeV [55; 51]. Proposition 21 reproduces it by assuming the chiral-doublet vertex and a core pointlike to $(m_t\ell_sc/\hbar)^2 = 2\times10^{-34}$; the obligation is met, and the grade is [IM].

# Appendix H: Worked Electroweak and Flavor Algebra

**Diagonalization at the corrected center.** $\sin^2\theta_w = 0.227$ gives $\vartheta = \sqrt{0.227/0.773} = 0.542$ and $M_Z/M_W = \sqrt{1+\vartheta^2} = 1.137$ against $1.1346$. From $G_F = 1.1664\times10^{-5}\ \mathrm{GeV^{-2}}$ and $M_W = 80.37$ GeV, $g^2 = 8M_W^2G_F/\sqrt2$ gives $g = 0.653$ and $\alpha_w = g^2/4\pi = 1/29.5$.

**Lepton logarithms and bridge.** $\ln(m_\tau/m_\mu) = 2.8224$ vs. $\tfrac12A = 2.80\pm0.45$; $\ln(m_\mu/m_e) = 5.3316$ vs. $\tfrac12(A+B) = 5.65\pm0.75$. Bridge: $X = (5.644-3.05)/0.1065 = 24.36$, $e^{-X} = 2.6\times10^{-11}$, $m_3 = m_\tau c^2e^{-X} = 0.047$ eV, $1\sigma$ $[0.019,0.115]$ eV; floor-truncated $\Sigma m_\nu\in[0.059,0.113]$ eV; at $\Sigma = 0.064$ eV, $m_1 = 0.004$ eV and $m_3 = 0.0503$ eV. The generator applied to neutrinos: $m_3e^{-A/2} = 3$ meV, excluded.

**Regge slope and termination.** $\alpha' = 1/(2\pi\cdot0.19) = 0.84\ \mathrm{GeV^{-2}}$ vs. $0.88$; $\sigma/\hbar c = 0.96$ GeV/fm $= 1.5\times10^5$ N. Top Yukawa $y_t = \sqrt2m_t/v = 0.991$; the $\mathsf p = 3$ lepton at $104$ eV carries $\epsilon_3 = \epsilon_ee^{(4/3)\cdot8.5}\ge0.67$.

**Species lifts.** From $\epsilon_e\in[8\times10^{-6},3\times10^{-3}]$: $\epsilon_\mu\in[6.5\times10^{-9},2.5\times10^{-6}]$, $\epsilon_\tau\in[1.5\times10^{-10},5.7\times10^{-8}]$, $\epsilon_d\in[4.2\times10^{-7},1.6\times10^{-4}]$, $\epsilon_u\in[1.2\times10^{-6},4.4\times10^{-4}]$, $\epsilon_s\in[7.7\times10^{-9},2.9\times10^{-6}]$, $\epsilon_c\in[2.4\times10^{-10},8.9\times10^{-8}]$, $\epsilon_b\in[4.8\times10^{-11},1.8\times10^{-8}]$, $\epsilon_t\in[3.4\times10^{-13},1.3\times10^{-10}]$.

# Appendix I: The [N] Register

Every quantity below is an integral or a calibrated number that this manuscript does not reproduce. Each is listed with its origin as far as the text defines it, its value, where it is used, and the grade at which the dependent results are held until the normalization audit K-N publishes the integral. The rule is the [CJ] rule: a result that rests on an unpublished integral may not be built upon silently.

| Quantity | Definition / origin | Value | Used in | Dependents held at |
|---|---|---|---|---|
| $\epsilon_e$ window | near-BPS lift $[W_2+W_\chi+W_4]/W_{6+0}$ on the electron's SDiff manifold | $[8\times10^{-6},3\times10^{-3}]$ | Thm. 9, Props. 17, 22, 24, 27; Sec. 7.1 | [DW-held] |
| $\mathfrak{m}$ | margin $\bar\chi^2/(\bar\gamma\bar\Delta^2)$ on the lifted manifold | $1.9\pm0.4$ | Sec. 3.6, Eq. (66), Eq. (62) | [DW-held] |
| $\sin\theta_c$ | condensate tilt $\sqrt{1-1/\mathfrak{m}}$ | $0.69\pm0.11$ | Eqs. (54), (66), (78), (61) | [DW-held] |
| $A$, $B$ | frustration integrals of the belt classes | $5.6\pm0.9$, $5.7\pm1.2$ | Eq. (39), Sec. 7.1 | [DW-held]; lepton landings are landings |
| $A_\mathrm{halo}$, $\kappa_\mathrm{far}$ | halo and far-field coefficients of $A(q)$ | $3.05\pm0.09$, $0.1065\pm0.0032$ | Eq. (40), Props. 36, 40 | [DW-held]; S1 and Eq. (102) inherit |
| $X$ | bridge logarithm | $24.36\pm0.90$ | Eq. (40) | [DW-held] |
| $\hat e_\mathrm{tot}$, $\mathfrak{i}_\mathrm{tot}$, $\mathfrak{c}$, $\kappa$, $\kappa^2g_\mathrm{tot}$ | closure integrals of the isorotating knot | $\mathfrak{c} = 3.2011$, $\kappa = 1/\sqrt2$, $35/24$ vs. $7/8$ | Prop. 5, S4$'$, band edge | [DW-held]; K-N item (2) |
| $\tau_\mathrm{relock}$ | Adler relocking time | $10^{-12}$ s | Prop. 5 | [CAL] |
| $H$-theorem factor | agitation acceleration of relaxation | $17$–$41$ | Sec. 4.1 | [CAL] |
| $f_q$, $\sigma$, $\epsilon_\mathrm{dress}$, $\mathfrak{m}_\mathrm{Sk}$ | network tension and dressing floor | $0.14$–$0.20$ GeV, $0.19\ \mathrm{GeV^2}$, $10^{-2}$, $1.7$ GeV | Sec. 7.4, K-Q | [posed] |
| $\epsilon_\nu$ (heliknoton lift) | near-BPS lift of the unit-Hopf excitation | $\le3\times10^{-3}$ assumed | Prop. 27 | [DW-held] |
| $N_\mathrm{eff}$ (Eq. 75) | gapped field components below $\pi/\ell_s$ | $6$–$60$ | Cor. 9 | [DW]; moves $\ell_s$ by a factor $3$ |
| $C_\chi$, $C_R$, $C_\theta$, $\kappa_\chi$ | order-unity prefactors | $O(1)$ | Eqs. (54), (66), (67), (61) | [DW-held] |
| $\mathcal{X}^{-1}$ | soft-mode stiffness | $>1.6$–$360\ \mathrm{eV^2}$ (bound) | Eq. (44), Prop. 40 | bounded, not computed |
| $\mathcal{F}_\mathrm{pinch}$ | previous draft's pinch form factor | withdrawn | — | — |

*Table 8. The [N] register. K-N's deliverables: each integral as a functional of Eqs. (4)–(8a) with the profile it is evaluated on, in one normalization; the regression tests are the two lepton logarithms, the bridge, the Weinberg-angle band, $N_\nu$, the Regge slope and the bench discriminator.*

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
31. Diego-Palazuelos, P., Komatsu, E., *et al.*, *Cosmic Birefringence from the Atacama Cosmology Telescope Data Release 6*. arXiv:2509.13654 (2025) [to be verified].
32. Nelson, E., *Derivation of the Schrödinger Equation from Newtonian Mechanics*. Physical Review **150**, 1079–1085 (1966).
33. Nelson, E., *Review of stochastic mechanics*. Journal of Physics: Conference Series **361**, 012011 (2012).
34. Eckart, C. and Young, G., *The approximation of one matrix by another of lower rank*. Psychometrika **1**, 211–218 (1936).
35. Mirsky, L., *Symmetric gauge functions and unitarily invariant norms*. The Quarterly Journal of Mathematics **11**, 50–59 (1960).
36. Page, D. N., *Average entropy of a subsystem*. Physical Review Letters **71**, 1291–1294 (1993).
37. Marchenko, V. A. and Pastur, L. A., *Distribution of eigenvalues for some sets of random matrices*. Mathematics of the USSR-Sbornik **1**, 457–483 (1967).
38. Nahum, A., Ruhman, J., Vijay, S., and Haah, J., *Quantum Entanglement Growth under Random Unitary Dynamics*. Physical Review X **7**, 031016 (2017).
39. Arute, F. *et al.*, *Quantum supremacy using a programmable superconducting processor*. Nature **574**, 505–510 (2019).
40. Wu, Y. *et al.*, *Strong Quantum Computational Advantage Using a Superconducting Quantum Processor*. Physical Review Letters **127**, 180501 (2021).
41. DeCross, M. *et al.*, *The computational power of random quantum circuits in arbitrary geometries*. Physical Review X **15**, 021052 (2025).
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
65. Bancal, J.-D., Pironio, S., Acín, A., Liang, Y.-C., Scarani, V., and Gisin, N., *Quantum non-locality based on finite-speed causal influences leads to superluminal signalling*. Nature Physics **8**, 867–870 (2012).
66. Barnea, T. J., Bancal, J.-D., Liang, Y.-C., and Gisin, N., *Tripartite quantum state violating the hidden-influence constraints*. Physical Review A **88**, 022123 (2013).
67. Sakharov, A. D., *Vacuum quantum fluctuations in curved space and the theory of gravitation*. Doklady Akademii Nauk SSSR **177**, 70–71 (1967) [Soviet Physics Doklady **12**, 1040 (1968)].
68. Yin, J. *et al.*, *Lower Bound on the Speed of Nonlocal Correlations without Locality and Measurement Choice Loopholes*. Physical Review Letters **110**, 260407 (2013).
69. Jacob, U. and Piran, T., *Lorentz-violation-induced arrival delays of cosmological particles*. Journal of Cosmology and Astroparticle Physics **01**, 031 (2008).
70. Vasileiou, V. *et al.*, *Constraints on Lorentz invariance violation from Fermi-Large Area Telescope observations of gamma-ray bursts*. Physical Review D **87**, 122001 (2013).
71. Langacker, P., Segrè, G., and Strassler, M. J., *Implications of gauge unification for time variation of the fine structure constant*. Physics Letters B **528**, 121–128 (2002).
72. Lange, R. *et al.*, *Improved Limits for Violations of Local Position Invariance from Atomic Clock Comparisons*. Physical Review Letters **126**, 011102 (2021).
73. Ubachs, W., Bagdonaite, J., Salumbides, E. J., Murphy, M. T., and Kaper, L., *Search for a drifting proton–electron mass ratio from H$_2$*. Reviews of Modern Physics **88**, 021003 (2016).
74. Catillon, P. *et al.*, *A Search for the de Broglie Particle Internal Clock by Means of Electron Channeling*. Foundations of Physics **38**, 659–664 (2008).
75. ATLAS Collaboration, *Combination of searches for invisible decays of the Higgs boson using 139 fb$^{-1}$ of proton–proton collision data at $\sqrt s = 13$ TeV collected with the ATLAS experiment*. Physics Letters B **842**, 137963 (2023).
76. Cepeda, M. *et al.*, *Report from Working Group 2: Higgs Physics at the HL-LHC and HE-LHC*. CERN Yellow Reports: Monographs **7**, 221–584 (2019).
77. Dvali, G. and Turner, M. S., *Dark energy as a modification of the Friedmann equation*. arXiv:astro-ph/0301510 (2003).
