---
title: "Is There a Substrate Whose Coarse-Grained Bookkeeping Is Quantum Mechanics?"
subtitle: "Geometrische Umdeutung Mechanik: An Inverse Umdeutung, Its Theorems, Closures, Corrections, and Stakes — Revision 3"
author: "[Authors to be completed]"
date: "2026-10-17"
format:
  pdf:
    documentclass: revtex4-2
    classoption: [aps, prx, twocolumn, superscriptaddress, nofootinbib]
  html:
    toc: true
    number-sections: false
---

# Is There a Substrate Whose Coarse-Grained Bookkeeping Is Quantum Mechanics?

## Geometrische Umdeutung Mechanik: An Inverse *Umdeutung*, Its Theorems, Closures, Corrections, and Stakes — Revision 3

**Authors:** [to be completed]  
**Date:** 2026-10-17  
**Status:** DRAFT for review, not for circulation. Revision 3 of the master manuscript of 2026-09-06: a merge of its revision of 2026-09-28 (r1) and its revision 2 of 2026-10-14 (r2), corrected by the audit of 2026-10-17.

### Abstract

In 1925 Heisenberg founded quantum mechanics on an *Umdeutung* — a reinterpretation of kinematics that expelled the trajectory and installed the observable algebra as the primitive [1]. *Geometrische Umdeutung Mechanik* (GUM) executes the inverse: it asks which **substrate** could possess the quantum formalism as its coarse-grained bookkeeping. GUM uses the word *substrate* for its sole ontological primitive — that which exists prior to medium, material, geometry, force, space, and time, all of which GUM treats as response descriptions of the substrate at successive levels of coarse-graining. At its continuum level the substrate is described by a displacement field and an independent $SU(2)$-lifted micro-rotation field, with a stored energy that depends on orientation only through the rotation of grains relative to their lattice, a handed constitutive law, and higher-gradient stabilizers admitting textures of integer degree. This revision merges two independent corrections of GUM's master manuscript, corrects both where an audit found them wrong, and states the killable core that survives. (i) The continuum description is the coarse-graining of a level-0 adjacency complex under a stated diffusive hypothesis, and objectivity follows from background independence. (ii) MacCullagh's rotational aether, inconsistent as a Cauchy continuum, is the orientation sector of the substrate, and the source-free Maxwell equations follow. The longitudinal sector obeys a locality dichotomy: completing it by transverse projection is acausal at every finite speed, while the local Gauss completion — the velocity gauge realized as substrate dynamics — reproduces the retarded Maxwell field exactly for every longitudinal speed $c_L$. The near-field channel of the master is therefore withdrawn as an electromagnetic prediction; $c_L$ survives as the update speed of the quantum tower, exposed to bipartite sidereal timing and to the Bancal–Barnea multipartite dichotomy. (iii) The wave function is bookkeeping for a tower of conditional fields whose pointer branching reproduces sequential Lüders projection. A dimension-counting theorem bounds any classical substrate that represents every state, and a reachable-set theorem shows that circuits cannot test that bound; the testable content is dense storage, under which mirror circuits must show a gate-independent return-probability cliff at most $4.45$ qubits wide. Sakharov induction fixes the structural scale near the Planck length, to within a regularization factor, which places the cliff near $324$–$338$ qubits for laboratory registers. (iv) Planck's constant is constrained, not derived, by the closure of an isorotating knot — one relation among three imports. The normalization audit of that closure, partly executed here, changes the closure's locking requirement and its bench values and leaves their ratio, $5/3$, fixed. If the de Broglie clock is a physical rotation, it predicts a channeling resonance at $80.9$ MeV/$c$ in Si$\langle110\rangle$ that scales with row spacing, and a drift of $\alpha$ without a drift of $m_p/m_e$, or the reverse. (v) The electron is a two-scale object, a topological core at the structural scale and a halo of length $(c_\psi/c)\hbar/Mc$; its band edge at $\sqrt2Mc^2$ poses a question with a positronium answer at $255.5$ keV. (vi) The helical vacuum imprints a far-infrared trough with a fixed blue edge at $\zeta_\nu\times(8.7$–$24.7)\ \mu$m — $24.66$–$24.75\ \mu$m where cosmology allows — and the trough's depth bounds the locking length of the doublet–fog coupling: two archival Spitzer tests give $\Delta n/\bar n<4.2\times10^{-17}$ and $\ell_\mathrm{lock}<1.5$ nm. (vii) The corrected condensate tilt, $\sin\theta_c = 0.79^{+0.06}_{-0.11}$, moves the Weinberg-angle landing to $\sin^2\theta_w = 0.217^{+0.010}_{-0.007}$, which contains the on-shell value and not the $\overline{\mathrm{MS}}$ one; the neutrino window is $\Sigma m_\nu\in[0.059,\ 0.41]$ eV with normal ordering, a previously asserted cap withdrawn. (viii) Dark energy is the lag of a slow substrate mode. The relaxation family $\rho_\mathrm{DE}\propto H^{2(1-n)}$ is the Dvali–Turner family, has $w_a\ge0$ and no phantom crossing, and in a full distance fit requires $n>0.949$ from BAO and the CMB, ties $\Lambda$CDM at best, and trails evolving dark energy by $\Delta\chi^2 = 7.6$–$16.6$. Quasar bounds on $m_p/m_e$ bound the lag to $10^{-5}$–$10^{-4}$ of the pitch wavenumber and retire the option of neutrinos lighter in the past. (ix) One handedness bit links weak chirality, $\delta_{CP}$, a frequency-flat cosmic birefringence induced by the relaxing tilt, with fixed sign and redshift profile, and a mirror test of short-range forces. (x) Undressed knots are a dark-matter conjecture whose adjudicator is the Higgs invisible width: $3$–$6\%$ if they exist, the Standard-Model $0.1\%$ if not. Of the merged ledger's twenty-seven closures, ten are executed or closed, four are consistency conditions, three are conjectures, one is partially executed, and nine are posed. Twenty-nine stakes close the paper, and sixty-seven corrections, thirty-one of them new, are listed with their sources.

**Keywords:** substrate, Cosserat continuum, MacCullagh aether, velocity gauge, pilot-wave theory, local beables, dense storage, mirror circuits, finite-speed nonlocality, isorotating soliton, de Broglie clock, cholesteric Bragg passage, dark energy, cosmic birefringence, falsifiability

---

> **Draft status.** DRAFT for internal review, not for circulation. Revision 3 of the master manuscript of 2026-09-06, merging r1 (2026-09-28) and r2 (2026-10-14); drafted with the assistance of Claude Opus 5.5 (Anthropic) on 2026-10-17. Numerical values marked [N] derive from profile or frustration integrals that are not reproduced here; they are quoted with their uncertainties and at their ledger grade, held under the normalization audit (Closure K-3), and registered with the grade of what depends on them (Appendix I). Every closed-form number printed here is recomputed by the companion script `check_r3.py`, and every label, cross-reference and citation is resolved by `build_r3.py`. Bibliography entries flagged "to be verified" must be checked before circulation.

> **What changed, in one paragraph.** Three documents preceded this one: the master manuscript of 2026-09-06 and two independent revisions of it, r1 and r2, which agreed on most corrections, disagreed on some, and each kept results the other dropped. An audit of both on 2026-10-17 recomputed every printed number and re-derived the proofs, and found errors in each, some of them shared. This revision keeps everything consistent in either parent. It corrects the condensate tilt and everything downstream of it — the Weinberg-angle landing, the mixing angle $\vartheta$, $M_Z/M_W$, the right-handed admixture, the strong-CP residual, the locking bound, and the birefringence positivity margins. It withdraws an asserted neutrino-mass cap, which widens the pitch window to $8.7$–$24.7\ \mu$m and the neutrino window to $0.059$–$0.41$ eV. It corrects the normalization of the knot closure, the spin flag's dilation, the gauge statement, the passage's adiabaticity, a data claim, the lag-bound proof, the birefringence sign convention, the regularization of induced gravity, the rate law behind the selected relaxation index, and the direction in which the adiabatic lag can fail. It restores what r2 dropped without a reason: the band edge and its positronium stake, the mirror test of short-range forces, advected structure, the amorphous regime of the trough, the pitch tomogram, pair dressing, the pitch cross-lock, and the pitch factor $\zeta_\nu$. It executes the distance fit, records two archival infrared tests, and renumbers every label in order of appearance, with a concordance to both parents (Appendix K). Section 11.6 lists all sixty-seven corrections.

---

# 1. Introduction

## 1.1 The inverse *Umdeutung*

Heisenberg's 1925 paper [1] adds no hypothesis to classical mechanics. It reinterprets its kinematics: the electron's position is replaced by an array of transition amplitudes, and the array, not the orbit, becomes the object the theory is about. Everything that follows — the commutator, the uncertainty relations, the operator algebra as the primitive of quantum theory — descends from that act of *Umdeutung*. The trajectory is not refuted. It is expelled from the vocabulary because it cannot be measured.

GUM executes the inverse act. It readmits the trajectory, demotes the operator algebra to bookkeeping, and asks what must exist so that the bookkeeping comes out *exactly* as quantum mechanics wherever quantum mechanics has been tested, and *differently* only where the thing that keeps the books must leave fingerprints. GUM's answer is a substrate. The question the paper poses is therefore not "is quantum mechanics complete?" but a constructive one: *what substrate could possess the quantum formalism as its coarse-grained bookkeeping, and what would such a substrate be unable to hide?*

The question has a long and mostly unhappy history. Mechanical models of the aether failed in the nineteenth century; hidden-variable programs were declared impossible in the twentieth and then shown possible [2]; hydrodynamic and stochastic readings of the Schrödinger equation [3; 4] reproduce its dynamics but leave gaps that have been identified precisely [5; 6]. GUM's working hypothesis is that each of these failures was a failure of the available continuum mechanics rather than a failure of the idea, and that a modern generalized continuum — micropolar, chiral, topological — is rich enough to carry the whole bookkeeping while remaining exposed to experiment at a small number of places. The purpose of this paper is to state those places as theorems, stakes, and posed computations, so that the proposal can be retired cheaply if it is wrong.

## 1.2 The substrate and the Level-0 to Level-1 passage

GUM uses the word *substrate* for its sole ontological primitive. The substrate is not a medium, because a medium is something that fills space; it is not a material, because a material is something with properties in space and time; it is not a geometry, a force, a space, or a time. All of these are, in GUM, *response descriptions* of the substrate — bookkeeping of its behavior at successive levels of coarse-graining — and the substrate exists prior to every one of them.

Two of GUM's documents used different words for the primitive. r1 preferred *material*, in the old sense of *materia*, because continuum mechanics attaches exactly the right technical connotations to it; r2 returned to *substrate*, because "material" suggests properties in a pre-existing space. This revision keeps *substrate* for the primitive and keeps the continuum-mechanical terms where they are technical terms of the level-1 description: the *material frame* is the frame in which the continuum description of the substrate is at rest, *material points* are the labels that persist through deformation, and a *material description* is the Lagrangian bookkeeping in which trajectories are primary. None of these terms is a claim about level 0.

GUM's levels of description are the following:

- **The substrate** (level 0): the primitive, possessing only adjacency, succession, and internal relative-comparison structure.
- **The continuum description** (level 1): the substrate's coarse-grained bookkeeping in terms of a displacement field $\mathbf{u}$ and an $SU(2)$-lifted orientation field $\tilde Q$ on a parameter space $(\mathbf{x},t)$ that records adjacency and succession. Geometry, force, and the light cone are constructed *from* these fields; they are not presupposed. The continuum description has the mathematical form of a chiral micropolar (Cosserat) continuum [7; 8], and it is the level at which this paper works. It is *local*: every field equation at level 1 is a differential equation in $(\mathbf{x},t)$. This locality is not a convenience; it is the property that turns several of the master's claims into theorems and one of them into a retraction (Sec. 3.3).
- **The quantum description** (level 2): the bookkeeping of localized textures of the continuum fields and of their agitation, which has the form of quantum mechanics.
- **The Standard-Model description** (level 3): the bookkeeping of the textures' response modes, which has the form of gauge fields, fermions, and a scalar sector.

GUM's wager is that a single substrate, with the continuum description of Sec. 2, is the cheapest object whose response descriptions include the quantum kinematic frame, exact electromagnetism, a topological account of charge and statistics, and the skeleton of the electroweak, strong, and flavor sectors — and that every claim GUM makes about it is either a theorem of its postulates or a stake with a signed kill. GUM does not assert that the vacuum *is* this substrate. GUM asserts that it is arranged to be efficiently wrong about whether it is.

The passage from level 0 to level 1 — the derivation of the parameter space $(\mathbf{x},t)$, of a metric, and of the continuum fields from the substrate's adjacency structure — was r1's deepest posed closure. r2 executed it as an embedding theorem. This revision keeps that execution, states its coarse-graining hypothesis explicitly, and grades it accordingly.

**Definition 1 (Level-0 adjacency–succession complex).** The substrate at level 0 is a countable directed causal-adjacency complex $\mathfrak{S} = (\mathcal{V}, \mathcal{E}_{\mathrm{adj}}, \mathcal{E}_{\mathrm{succ}}, \mathcal{H})$ in which: (i) each spatial slice $\Sigma_k$ is a combinatorial 3-complex of vertices $v \in \mathcal{V}_k$ with bounded coordination valency $z_v$ centered on a regular isotropic mean $z_0$ (the pre-geometric precursor of Flag F5); (ii) each directed succession edge $e_{\mathrm{succ}}: v \in \Sigma_k \to v' \in \Sigma_{k+1}$ records primitive succession; and (iii) each oriented adjacency edge $e_{vv'} \in \mathcal{E}_{\mathrm{adj}}$ carries a parallel-transport comparator $U_{vv'} \in SU(2)$ relating the internal binary frame at $v$ to that at $v'$, with plaquette holonomy $H_p = \prod_{\partial p} U_{vv'} \in SU(2)$. The functional $\mathcal{H}[U_{vv'}, z_v]$ is the level-0 Hamiltonian.

**Proposition 1 (Coarse-grained emergence of the Cosserat continuum — Closure K-1) [DW-structural].** *Let $\mathfrak{S}$ be coarse-grained over mesoscopic cells $\Omega_x$ containing $N_{\mathrm{cell}} \gg 1$ vertices of combinatorial diameter $\ell_{\mathrm{cell}} \gg 1$, identifying the structural scale $\ell_s$ with the unit graph step, and assume:*

*(H0) the reference complex $\mathfrak{S}_0$ is statistically homogeneous and isotropic, its adjacency displacements have a finite isotropic second moment, and the random walk generated by the graph Laplacian $\Delta_{\mathrm{graph}}$ is diffusive with spectral dimension $d_s = 3$ — equivalently, its heat kernel obeys two-sided Gaussian bounds on scales $1 \ll \tau$.*

*Then: (1) In the diffusive scaling limit ($\tau\to\infty$ with $d^2/\tau$ fixed) the heat kernel $K_\tau(v, v') = (e^{-\tau\Delta_{\mathrm{graph}}})_{vv'}$ converges to the Euclidean Gaussian $(4\pi D\tau)^{-3/2}\exp(-|\mathbf{x}_v-\mathbf{x}_{v'}|^2/4D\tau)$, which embeds $\Sigma_k$ into a smooth 3-manifold $M^3 \simeq \mathbb{R}^3$ with a flat reference metric $\delta_{ij}$ fixed, up to normalization, by the isotropic second moment of $\mathcal{E}_{\mathrm{adj}}$; the succession index $k$ embeds into a continuous parameter $t \in \mathbb{R}$. (2) Departures of vertex positions from their reference embedding define the displacement field $\mathbf{u}(\mathbf{x}, t)$ with deformation gradient $\mathsf{F} = \mathbb{1} + \nabla\mathbf{u}$, and non-intersecting succession histories enforce $\det\mathsf{F} > 0$. (3) In a local reference trivialization on $\Omega_x$, the vertex frame orientation defines $\tilde{Q}(\mathbf{x}, t) \in SU(2)$, and the edge comparators evaluated relative to the deformed-graph rotation $\tilde{R}[\mathbf{u}]$ define the objective relative texture $\tilde{P} = \tilde{R}[\mathbf{u}]^\dagger\tilde{Q}$ of Eq. (1). (4) The Wilsonian gradient expansion of any $SU(2)$-objective graph Hamiltonian $\mathcal{H}[U_{vv'}, z_v]$ that is symmetric under global frame rotations and has a fixed-sign chiral triple-edge term $\mathrm{Tr}(U_{12}U_{23}U_{31} - U_{13}U_{32}U_{21})$ has, up to sixth order in gradients, the leading continuum energy $W = W_2 + W_\chi + W_4 + W_{6+0}$ of Eqs. (4)–(8).*

*Proof.* (1) Under (H0) the walk obeys a central limit theorem in the diffusive scaling, so the heat kernel converges to a Gaussian whose covariance is $2D\tau\,\delta_{ij}$, with $D$ set by the second moment of the adjacency displacements; the quadratic form in the exponent defines the embedding and the metric, which is Euclidean on the defect-free reference complex. The short-time behavior of $K_\tau$ on a graph is combinatorial rather than Gaussian, so the metric is read off the diffusive regime, not off a small-$\tau$ (Varadhan-type) limit. (2) A bijective combinatorial homeomorphism $\mathfrak{S}_k \to \mathfrak{S}_0$ induces a diffeomorphism of the coarse-grained manifold with $\det\mathsf{F} > 0$; changes in vertex connectivity are the coincidence strata where $\det\mathsf{F} \to 0$ (Lemma 5). (3) Because $\mathcal{H}$ depends only on the intrinsic comparators $U_{vv'}$ and the valencies $z_v$, neither of which references an ambient space, its continuum limit is invariant under rigid simultaneous rotations $\mathsf{F} \to \mathsf{R}_0\mathsf{F}$, $\tilde{Q} \to \tilde{R}_0\tilde{Q}$: objectivity (Flag F1) is a theorem of level-0 background independence. (4) Expanding the objective invariants of $(\mathsf{F}, \tilde{P})$ in powers of $\ell_s\nabla$ gives at $O(\nabla^2)$ the six isotropic Cosserat invariants of $W_2$ and the three parity-odd invariants of $W_\chi$, at $O(\nabla^4)$ the Skyrme commutator $W_4$, and at $O(\nabla^6)$ the squared topological density together with the potential $\mathcal{V}(\sigma_P)$. $\square$

GUM states the status of this proposition precisely. Items (1), (2) and (4) are an *embedding* theorem: the hypotheses — (H0), an $SU(2)$ comparator on every edge, a fixed-sign chiral triple term — are the continuum postulates in combinatorial dress, and the proposition shows that a level-0 object carrying them inherits (P1)–(P7) under coarse-graining. It does not show that a generic causal-adjacency complex acquires them. Item (3) is the genuine output: objectivity is a consequence of background independence, not a further postulate. The grade [DW-structural] is to be read as "consistent with, and reducing (P3) to, level-0 background independence", not as "derived from level 0". r2's proof of item (1) invoked Varadhan's small-time asymptotics, a result about manifolds; on a graph the metric emerges only in the diffusive regime, which is why (H0) is stated as a hypothesis (correction 57).

## 1.3 The ledger and the killable core

Every claim below carries a grade.

- [DF] — derived-form, following from the stated postulates with no further input.
- [DW] — derived-with-window; [DW-structural] — a structural statement that holds under named hypotheses; [DW-conditional] — derived given a stated condition.
- [CAL] — mechanism derived, rate calibrated.
- [IM] — imported.
- [CJ] — conjecture, which may not be built upon silently.
- [posed] — a closure with named deliverables and a kill.
- [N] — a numerical value from an integral not reproduced here, registered in Appendix I.
- [RG] — a stake re-graded, with the reason printed at the point of re-grading.

GUM also applies to itself the audit criterion of Definition 10: a claim is *non-circular* if the postulate behind it was not adopted because the claimed fact is known, or entails distinct testable facts; it is *discriminating* if a competing theory does not entail the same fact. GUM's killable core is the set of discriminating claims. GUM keeps its non-discriminating results for what they are — consistency conditions that any substrate must satisfy — and labels them so at each occurrence. A result whose content is the reproduction of a Standard-Model number by assuming the Standard-Model integrand is graded [IM] or [DW], never [DF].

GUM's *stakes* are pre-registered observations that would kill a claim; its *inverse kills* are running precision tests that GUM must survive indefinitely; its *posed closures* are computations with named deliverables and signed kills. The intellectual content of the ledger is not that GUM is right but that GUM can be shown to be wrong at a printed cost. A ledger of this kind has a second use, which this revision exercises: it makes it cheap to find and publish the places where the program was wrong about *itself*.

**How to read this revision.** Two documents preceded it, both descended from the master manuscript of 2026-09-06: the revision of 2026-09-28, called *r1* below, and revision 2 of 2026-10-14, called *r2*. They corrected the master independently and disagreed in places. This revision merges them. Everything consistent in either is kept; every place where the audit of 2026-10-17 [9] found one or both wrong is corrected; and content that r2 dropped without a stated reason is restored. All labels are renumbered in order of appearance: theorems, propositions, lemmas, corollaries, definitions and conjectures each have their own counter; flags are F1, F2, …; stakes are S1, S2, …; closures are K-1, K-2, …; cross-locks are X1, X2, …. The ledger tables of Sec. 11 show the label each item carried in r1 and r2, and Appendix K maps every labeled statement of both parents to its place here. Section 11.6 lists every correction.

## 1.4 Principal results

GUM's principal results in this revision are the following. Each item names the statements that carry it and their grades. *Corrected* marks content that differs from both parents, *restored* marks content of r1 that r2 dropped without a stated reason, and *new* marks content that neither parent had.

- **Definition 1, Proposition 1** [DW-structural]. The continuum description emerges from a level-0 adjacency–succession complex as an embedding theorem, and objectivity becomes a consequence of background independence (Closure K-1). *Corrected:* the coarse-graining hypothesis (H0) is stated, and the metric is read off the diffusive regime rather than off a small-time limit that a graph does not have.
- **Theorem 1, Proposition 2** [DF; cone condition IM]. Objectivity makes the locked transverse doublet gapless to all orders in the potential sector; under the imported cone condition (Closure K-2) the doublet is exactly lightlike at every wavelength, and the relative-rotation cone exceeds the light cone, $c_\psi>c$, by an amount that vacuum-Cherenkov limits bound.
- **Theorems 2, 3, 4** [DF]. MacCullagh's curl-only aether violates linearized objectivity as a Cauchy continuum and is consistent as the orientation sector of the substrate; the source-free Maxwell equations follow with $c^2 = \gamma_\mathrm{eff}/2J$ and an exact energy identity. *Corrected:* only time-independent re-conventions are gauge transformations.
- **Definition 2, Theorems 5, 6, Corollary 1, Proposition 4** [DF]. The longitudinal sector admits exactly one family of local completions that recover Gauss's law — the velocity gauge with speed $c_L$ — and in it the fields are the retarded Maxwell fields for every $c_L$; any other completion deviates by the field of a conserved defect current, and the transverse completion is acausal. The near-field channel is withdrawn as an electromagnetic prediction and its stake becomes a null test (Closure K-4, Stake S2 [RG]).
- **Propositions 7, 8, Theorem 7, Corollary 2, Proposition 9, Corollary 3, Proposition 10** [DF/DW]. The helical vacuum imprints a redshift-swept far-infrared trough with a fixed blue edge, co-handed circular polarization and a dipole-modulated edge; the transparency bound is $\Delta n\lesssim6\times10^{-17}$; locking suppression turns the trough into a bound on the locking length, $\ell_\mathrm{lock}\lesssim1.7$ nm, and two archival Spitzer tests give $\Delta n/\bar n<4.2\times10^{-17}$ and $\ell_\mathrm{lock}<1.5$ nm (Closure K-5, Stake S3 [RG]). *Corrected:* the condensate tilt is $\sin\theta_c = 0.79^{+0.06}_{-0.11}$, the pitch window is $p/\zeta_\nu\in[8.7,\ 24.7]\ \mu$m a priori and $[24.66,\ 24.75]\ \mu$m where the $\Lambda$CDM neutrino bound allows, and the passage formula holds for every passage parameter, with the passage sudden at the bound. *Restored:* the amorphous regime, in which the trough becomes a step, and the pitch factor $\zeta_\nu$. *New:* the archival tests.
- **Propositions 11, 12** [DF]. Static helix optical activity is $\nu^2$-dispersive and cannot produce a frequency-flat rotation; structure frozen in the material frame reaches a moving laboratory only through a detector patterned at its scale, as a $15$ GHz line for a pitch-matched array. *Restored*, with the caveat that the line's amplitude carries the locking suppression.
- **Lemma 3, Proposition 13, Theorem 8** [DF]. A depth-$d$ tower is a rank-$(d{+}1)$ separable approximation; pointer branching reproduces multi-time Lüders projection up to finite-$c_L$ terms (Closure K-6); random-circuit data give $\chi_\mathrm{max}\gtrsim1.3\times10^7$.
- **Theorems 9, 10, 11, 12, Proposition 14, Corollaries 7, 8** [DF/DW]. Dimension counting bounds the representation of every state, and reachable-set counting shows that no polynomial-size circuit can test that bound. The testable content is the dense-storage hypothesis, under which mirror circuits show a gate-independent cliff of width at most $4.45$ qubits, at $n_{50}\approx324$ qubits for an ion zone and $338$ for a superconducting die at the gravity-fixed structural scale, moving with register volume, cut area or qubit extent according to the hosting hypothesis (Closure K-7, Stakes S4 [RG], S5).
- **Proposition 15, Theorem 13, Flag F8, Proposition 16** [DF]. With the tower updated at finite $c_L$ in the material frame, GUM is a finite-speed hidden-influence model, bounded sidereally by bipartite tests and forced by multipartite configurations to choose between signaling and a departure from quantum correlations; GUM takes the no-signaling horn (Closure K-8, Stake S6). Photon timing excludes the top decade of the master's range of structural scales.
- **Proposition 42, Corollary 10** [DW, conditional]. Sakharov induction on the locked branch fixes $\ell_s$ near $\ell_\mathrm{P}$, and every $\ell_s$-dependent number is restated there. *Corrected:* the induced coefficient depends on the regularization, so $\ell_s$ is fixed only to within a factor of a few, and each cliff moves by about $5$ qubits with the cutoff.
- **Lemma 4, Theorem 14, Propositions 17, 18, 19, Flag F9** [DF]. $E_\mathrm{rot}/E = j/2$ is kinematic; the isorotating closure is solvable only for $j<2a/(a+b)$, and $j = \tfrac12$ is unique for $(a,b) = (1,1)$, which GUM adopts as a flagged commitment; $\hbar = \mathfrak{c}\Lambda\sqrt J$ is one relation among three imports (Stakes S7, S8, S9). *Corrected:* in the corrected kinetic normalization the closure requires $\mu_c = \tilde m_V^2/16$, the bench values are $35/48$ and $7/16$, $\mathfrak{c} = 128/(9\pi)$ at fixed energy, and the flag's $(1,2)$ dilation is $\sqrt5$ (Closure K-3).
- **Propositions 21, 22** [DF]. A physical clock implies the $\alpha$–$\mu$ discriminant — a stiffness drift moves $\alpha$ and not $m_p/m_e$, a pitch drift the reverse — and a parametric channeling resonance whose momentum is proportional to the row spacing (Stakes S12, S13).
- **Lemma 5, Theorem 15, Propositions 23, 24, 25** [DF/posed]. Charge is conserved as a degree, and opposite-degree pairs are created without tears; the electron's topological core sits at the structural scale and its halo is the in-gap tail of length $(c_\psi/c)\hbar/Mc$; halo dominance of the frustration integrals is posed, with a uniformity constraint at $10^{-18}$ (Closure K-9, Stakes S15, S14). *Restored:* the band edge at $\sqrt2Mc^2$ is either a halo property or a neutral quantum, and in the second case ortho-positronium shows a line at $255.5$ keV (Closure K-10, Stake S16).
- **Table 3, Propositions 26, 27, 28, 29, 30, 31, 32, 33, 34, 35** [DF/DW/IM/CJ]. The electroweak, strong, flavor and anomaly sectors at their ledger grades: $\rho = 1$ and $e = g\sin\theta_w$ protected; the per-species near-BPS window; the strong-CP residual $\bar\theta_\mathrm{eff}\lesssim10^{-45}$; the strong sector posed (Closure K-17). *Corrected:* the Weinberg-angle landing is $\sin^2\theta_w = 0.217^{+0.010}_{-0.007}$, which contains the on-shell value and not the $\overline{\mathrm{MS}}$ one; the flavor bridge is $X = 24.36\pm1.12$; the neutrino window is $\Sigma m_\nu\in[0.059,\ 0.41]$ eV with normal ordering, the asserted cap of $0.057$ eV withdrawn (Stake S18).
- **Propositions 36–41, Tables 5, 6** [DF/DW, confronted]. The relaxation family $\rho_\mathrm{DE}\propto H^{2(1-n)}$ has $w_a\ge0$ and no phantom crossing and is the Dvali–Turner family (Closure K-21). *New:* the full distance fit gives $n>0.949$ from BAO and the CMB and $n\gtrsim0.87$–$0.90$ with supernovae; the family ties $\Lambda$CDM at best and trails evolving dark energy by $\Delta\chi^2 = 7.6$–$16.6$ (Stake S25).
- **Proposition 43, Corollary 4** [DF, given the bridge coefficients]. The constancy of $m_p/m_e$ bounds the pitch lag and excludes neutrinos lighter in the past (Closure K-23). *Corrected:* the bound is $|\varepsilon_\nu|<10^{-5}$–$10^{-4}$ depending on $n$, computed with each member's own expansion history. *Restored:* the trough as a pitch tomogram, now a null prediction — the edge is fixed to $9\times10^{-6}$ out to $z\simeq3$.
- **Propositions 45, 46, 47, 48, 49** [DF/DW-conditional]. The handedness chain is a parity check; an evolving tilt induces a frequency-flat Chern–Simons birefringence whose sign is the vacuum handedness and whose redshift profile is fixed by $n$ (Closure K-26, Stake S29). *Corrected:* the rotation sense is stated and the sign derived in it, and the positivity requirement on the tilt is stated per member of the family. *Restored:* the uniformity of the bit across the sky is testable, and a chiral vacuum breaks the mirror identity of short-range forces (Closure K-27, Stake S28).
- **Conjectures 1, 2, Proposition 44** [CJ]. Undressed knots as dark matter without freeze-in, with the Higgs invisible width as adjudicator (Closure K-24, Stake S27). *Restored:* pair dressing as a source of the 511 keV line (Closure K-25).

## 1.5 Lineage

GUM names the lineage of each element of its core, because the lineage tells the reader what is borrowed and what is GUM's. The hydrodynamic reading of the Schrödinger equation is Madelung's [3]; the quantum potential from a Fisher-information penalty is Reginatto's [10]; the circulation-quantization gap in every hydrodynamic derivation is Wallstrom's [5], and its discharge through single-valuedness of a texture angle is GUM's. The Born rule as an equilibrium reached by an $H$-theorem is Valentini's and Dürr–Goldstein–Zanghì's [11; 12], with cosmological signatures worked out by Colin and Valentini [13]. Localized textures as particles descend from Skyrme [14] through Derrick's obstruction [15] and its Bogomolny-type escapes [16; 17]; knotted textures were studied by Faddeev and Niemi and by Battye and Sutcliffe [18; 19]. The replacement of the wave function by a primitive ontology in three-dimensional space is that of Allori, Goldstein, Tumulka, and Zanghì [20], and the tower of local fields is Norsen's [21], answering Bell [2].

MacCullagh's aether [22; 23] and Cosserat elasticity [7; 8] are the two nineteenth-century objects whose marriage is GUM's electromagnetic sector. The marriage has precedents that any reviewer will raise: Kelvin's gyrostatic model realized MacCullagh's rotational elasticity mechanically [23; 24], and Böhmer, Downes, and Vassiliev obtained Maxwell- and Weyl-type equations from a continuum whose only dynamical variable is the rotation of its points [25]. GUM's contribution in Sec. 3.1 is the objectivity theorem that separates the inconsistent Cauchy reading from the consistent micropolar one, and the coexistence of the rotational sector with full Cauchy rigidity. The velocity gauge, which Sec. 3.3 shows to be the unique local completion of GUM's longitudinal sector, is Jackson's [26]. The finite-speed analysis of quantum nonlocality is due to Salart et al. and Yin et al. experimentally [27; 28] and to Bancal et al. and Barnea et al. theoretically [29; 30]. The reading of a self-sustained vacuum's zero-point ledger as chemical-potential bookkeeping is Volovik's [31]; the defect–geometry dictionary is Kleinert's [32]; the induced-gravity estimate is Sakharov's [33]; the relaxation family's background equation is Dvali and Turner's [34]. The archival infrared tests and the distance fit quoted in Secs. 4.5 and 9.5 are those of the audit of 2026-10-17 [9]. The assembly is GUM's, and so is the claim that the assembly describes a substrate.

## 1.6 Conventions

Units have $\hbar = c = 1$ except where units are the point. Latin indices run over $1,2,3$; $A_{(ij)} = \tfrac12(A_{ij}+A_{ji})$ and $A_{[ij]} = \tfrac12(A_{ij}-A_{ji})$. "Continuum" refers to the level-1 description and carries no ontological weight. The structural scale is written $\ell_s$ (the master's $a$, which collides with the cosmological scale factor and the Derrick exponents), the locking length $\ell_\mathrm{lock}\equiv\sqrt{\gamma/4\mu_c}$ (which the master also called $a$), and the Planck length $\ell_\mathrm{P}$. The number of qubits in a register is $n_q$; the relaxation index of the dark-energy sector is $n$; the frustration class of a knot is $\mathsf p$; the soft-mode susceptibility is $\mathcal{X}$; the relaxation rate is $\Gamma_r$; the deceleration parameter is $q_\mathrm{dec}$. The lab's velocity relative to the material frame is $\mathbf{v}_M$, and $\gamma_v\equiv(1-v_M^2/c^2)^{-1/2}$. Every numerical input is stated where it is used and collected in Appendix H; the glossary is Appendix J.

# 2. The Substrate in Its Continuum Description

## 2.1 Kinematic fields and objectivity

A point of the continuum description carries a position and an orientation. The state at $(\mathbf{x},t)$ comprises the displacement $\mathbf{u} \in \mathbb{R}^3$, with deformation gradient $\mathsf{F} = \mathbb{1} + \nabla\mathbf{u}$ and $\det\mathsf{F} > 0$ (a tear-free substrate), and the micro-rotation $\tilde Q \in SU(2)$, the double cover of the grain orientation $Q = \pi(\tilde Q) \in SO(3)$. Polar decomposition $\mathsf{F} = \mathsf{R}[\mathbf{u}]\,\mathsf{U}$ extracts the rotation carried by the deformation itself. GUM's order parameter is the *relative texture*
$$
\tilde P(\mathbf{x}) \equiv \tilde R[\mathbf{u}(\mathbf{x})]^\dagger\,\tilde Q(\mathbf{x}) \in SU(2), \qquad \sigma_P \equiv \tfrac12\mathrm{Tr}\,\tilde P, \qquad \tilde P = \sigma_P\mathbb{1} + i\boldsymbol\pi\cdot\boldsymbol\sigma,\quad \sigma_P^2 + \boldsymbol\pi^2 = 1, \tag{1}
$$
which records how the grains are turned relative to the lattice they sit in and is invariant under a rigid rotation of the whole (Appendix A). The order parameter lives on $S^3$. GUM's objectivity principle — **Flag F1 (objectivity)**, the substrate's gauge principle, reduced to level-0 background independence by Proposition 1 — is that the potential sector depends on orientation only through $\tilde P$ and its derivatives; the kinetic sector may use absolute $\tilde Q$. Absolute orientation is redundant in exactly the way absolute phase is redundant in electromagnetism.

In the linearized theory the micro-rotation is a rotation vector $\boldsymbol{\varphi}$ (so that $\tilde Q\simeq\exp(i\boldsymbol\varphi\cdot\boldsymbol\sigma/2)$), the lattice rotation is $\tfrac12\nabla\times\mathbf{u}$, and the Cosserat strain measures are
$$
e_{ij} = \partial_iu_j - \epsilon_{ijk}\varphi_k, \qquad \Gamma_{ij} = \partial_i\varphi_j, \tag{2}
$$
with symmetric part the ordinary strain $\varepsilon_{ij} = \partial_{(i}u_{j)}$ and antisymmetric part encoding the *relative rotation*
$$
\boldsymbol\psi \equiv \boldsymbol\varphi - \tfrac12\nabla\times\mathbf{u}, \qquad e_{[ij]} = -\epsilon_{ijk}\psi_k, \tag{3}
$$
since $\partial_{[i}u_{j]} = \tfrac12\epsilon_{ijk}(\nabla\times\mathbf{u})_k$. To the same order $\tilde P\simeq\exp(i\boldsymbol\psi\cdot\boldsymbol\sigma/2)$ and $1-\sigma_P\simeq|\boldsymbol\psi|^2/8$. Under parity $e$ is a tensor and $\Gamma$ a pseudotensor; this mismatch is the gate through which every handed effect enters.

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
W_\chi = \chi_1\,e_{kk}\Gamma_{ll} + \chi_2\,e_{(ij)}\Gamma_{(ij)} + \chi_3\,e_{[ij]}\Gamma_{[ij]}, \tag{6}
$$
$$
W_4 = \tfrac{\kappa_S}{4}\,\mathrm{Tr}\big([L_i,L_j][L_i,L_j]\big), \qquad L_i \equiv \tilde P^{-1}\partial_i\tilde P, \tag{7}
$$
$$
W_{6+0} = \tfrac12\Lambda^2b_P^2 + \mathcal{V}(\sigma_P), \qquad b_P = -\frac{1}{24\pi^2}\epsilon_{ijk}\mathrm{Tr}(L_iL_jL_k), \qquad \mathcal{V} = \tilde m_V^2(1-\sigma_P) + c_2(1-\sigma_P)^2, \tag{8}
$$
with $c_2 \in [-\tilde m_V^2/2,\ \tilde m_V^2/6)$. The parity-odd sector $W_\chi$ is **Flag F2 (chiral transduction)**, and the quartic $W_4$ is **Flag F3 (Skyrme quartic)**. The rotational kinetic term is normalized so that, with $\tilde Q^{-1}\partial_t\tilde Q = \tfrac{i}{2}\boldsymbol\omega\cdot\boldsymbol\sigma$, it equals $\tfrac12J|\boldsymbol\omega|^2$; the master's coefficient $\tfrac12J$ gave $\tfrac14J|\boldsymbol\omega|^2$ and was inconsistent with its own linearized Lagrangian (Sec. 2.6).

Each sector has a structural job. $W_2$ is Eringen's micropolar elasticity [8]: non-symmetric stress and couple stress; it sets the wave speeds. $W_\chi$ is the handedness reservoir, the only parity-odd sector, and hence the ultimate source of all parity-violating physics and of the light–knot transduction vertex. $W_4$ is the Derrick–Hobart escape without which no static three-dimensional texture is stable [15]. $W_{6+0}$ is the BPS-Skyrme-lineage sector [17]: the topological density squared plus a locking potential, which together produce compactons, near-saturated topological bounds, small binding, and the band gap inside which the knot sector lives. The gap of the relative-rotation sector collects the locking and potential stiffnesses,
$$
\tilde m^2\equiv4\mu_c+\tfrac14\tilde m_V^2,\qquad\omega_0\equiv\tilde m/\sqrt J,\qquad\gamma_\mathrm{eff}\equiv\gamma+\beta, \tag{9}
$$
so that the quadratic part of $W$ in $\boldsymbol\psi$ is $\tfrac12\tilde m^2|\boldsymbol\psi|^2$ (Lemma 2 and $1-\sigma_P\simeq|\boldsymbol\psi|^2/8$), with $\tilde m_V$ the potential coefficient that enters the Bogomolny constant of Sec. 6. Units: $[\Lambda] = E^{1/2}L^{3/2}$, $[\tilde m_V] = E^{1/2}L^{-3/2}$, $[J] = ET^2L^{-3}$; $[\Lambda\sqrt J] = ET$, and $\Lambda\tilde m_V$ is an energy — the rest-energy unit of the substrate.

**Postulates consumed below.**

- **(P1)** Cosserat energetics with micro-inertia $J > 0$.
- **(P2)** The isotropic quadratic sector Eq. (5).
- **(P3)** Objectivity, Flag F1 (Proposition 1).
- **(P4)** The locking regime: the relative-rotation gap exceeds every frequency at which the doublet is probed, so low-frequency transverse motion has $\boldsymbol\psi \to 0$ (made exact by Proposition 2).
- **(P5$'$)** The longitudinal micro-rotation obeys the Gauss-completion constraint, Flag F6 of Sec. 3.3. It replaces the master's P5, which Proposition 6 shows to be unnecessary in the transverse sector, where $\beta$ only renormalizes $\gamma\to\gamma_\mathrm{eff}$.
- **(P6)** The topological sector Eqs. (7)–(8) with textures of integer degree $K \in \pi_3(S^3) = \mathbb{Z}$ [14; 35].
- **(P7)** The chiral sector Eq. (6) with the near-BPS window $\epsilon \equiv [W_2 + W_\chi + W_4]/[W_{6+0}] \ll 1$ on knots, **Flag F4 (near-BPS window)**. The window is a property of a species, not of the substrate. It is stated for the electron, $\epsilon_e\in[8\times10^{-6},\ 3\times10^{-3}]$ [N], its lower end set by the termination of the family tower (Sec. 8.1), and propagated to the other knots by $\epsilon\propto\tilde m^{-4/3}$.

**Flag F5 (periodic-on-average isotropic lattice)** asserts a periodic-on-average, statistically isotropic lattice at the structural scale $\ell_s$; Definition 1 is its level-0 precursor.

**Lemma 2 (The locking energy).** *$\mu_ce_{[ij]}e_{[ij]} = 2\mu_c|\boldsymbol\psi|^2$. Hence $\mu_c$ penalizes relative rotation only, and $\mu_c \to \infty$ enforces $\boldsymbol\varphi = \tfrac12\nabla\times\mathbf{u}$.*

*Proof.* From Eq. (3), $e_{[ij]}e_{[ij]} = \epsilon_{ijk}\epsilon_{ijl}\psi_k\psi_l = 2|\boldsymbol\psi|^2$. $\square$

## 2.3 Balance laws, the exact linear spectrum, and the four branches

Variation of Eq. (4) gives
$$
\rho_0\ddot u_i = \partial_j\sigma_{ji}, \qquad J\ddot\varphi_i = \partial_jm_{ji} + \epsilon_{ijk}\sigma_{jk} + \tau^{(6+0)}_i, \qquad \sigma_{ji} = \frac{\partial W}{\partial e_{ji}},\quad m_{ji} = \frac{\partial W}{\partial\Gamma_{ji}}, \tag{10}
$$
with non-symmetric stress whose antisymmetric part sources micro-rotation: the substrate constitutively exchanges orbital and internal angular momentum — an Einstein–de Haas mechanism built into the ontology, as required if micro-rotation is to be identified with spin.

**Proposition 2 (Linear spectrum and the cone condition) [DF].** *Linearize about the uniform locked state $\tilde P = \mathbb{1}$, with the chiral couplings set to zero at this order, and take $\mathbf{k} = k\hat{\mathbf z}$. The six real fields $(\mathbf{u},\boldsymbol\varphi)$ organize into four branches, the $3+3$ count exact:*

- ***B1*** *— longitudinal displacement: $\omega^2 = c_L^2k^2$, $c_L^2 = (\lambda+2\mu)/\rho_0$. The frame-connection scalar and the update of the quantum tower live here (Secs. 3.3, 5.8).*
- ***B2$\pm$*** *— the transverse doublet, and* ***B3$\pm$*** *— transverse relative rotation, determined by*
$$
\big(\rho_0\omega^2-\mu k^2-\tfrac14\tilde m^2k^2\big)\big(J\omega^2-\tilde m^2-\tfrac12\gamma_\mathrm{eff}k^2\big)-\tfrac14\tilde m^4k^2=0 . \tag{11}
$$
- ***B4*** *— longitudinal micro-rotation (longitudinal twist): $\omega^2 = \omega_0^2 + c_4^2k^2$, $c_4^2 = (\alpha+\beta)/J$; the light–knot pump and, after mixing with B2, the neutral member of the weak triplet (Sec. 8.3).*

*If and only if the cone condition*
$$
\frac{\mu}{\rho_0}=\frac{\gamma_\mathrm{eff}}{2J}\equiv c^2 \tag{12}
$$
*holds, Eq. (11) factorizes exactly: the doublet is $\omega = ck$ for every $k$ with eigenvector $\boldsymbol\psi\equiv0$ (exact locking at all wavelengths), and the relative-rotation branch is*
$$
\omega^2=\omega_0^2+c_\psi^2k^2,\qquad c_\psi^2=c^2+\frac{\tilde m^2}{4\rho_0}>c^2 . \tag{13}
$$

*Proof.* For B1 the curl of $\mathbf{u}$ vanishes and $\mathbf{u}$ decouples from $\boldsymbol\varphi$ at linear order. For B4, $\boldsymbol\varphi\parallel\mathbf{k}$ gives $\Gamma_{[ij]} = 0$, $\Gamma_{kk}^2 = k^2\varphi^2$, $\Gamma_{(ij)}\Gamma_{(ij)} = k^2\varphi^2$, and $\boldsymbol\psi = \boldsymbol\varphi$ since $\nabla\times\mathbf{u}$ is transverse; the Lagrangian $\tfrac12J\dot\varphi^2-\tfrac12(\alpha+\beta)k^2\varphi^2-\tfrac12\tilde m^2\varphi^2$ gives the stated branch. For the transverse sector take $u_x = u\cos(kz-\omega t)$, $\varphi_y = \varphi\sin(kz-\omega t)$; then $\psi_y = (\varphi+\tfrac12ku)\sin(kz-\omega t)$, the transverse curvature energy is $\tfrac14\gamma_\mathrm{eff}k^2\varphi^2$ by Proposition 6, and the cycle-averaged Euler–Lagrange equations are $\rho_0\omega^2u = \mu k^2u+\tfrac12\tilde m^2k(\varphi+\tfrac12ku)$ and $J\omega^2\varphi = \tilde m^2(\varphi+\tfrac12ku)+\tfrac12\gamma_\mathrm{eff}k^2\varphi$, whose determinant is Eq. (11). Substituting $\omega^2 = c^2k^2+\Delta$ with $c^2 = \mu/\rho_0 = \gamma_\mathrm{eff}/2J$, the first factor becomes $\rho_0\Delta-\tfrac14\tilde m^2k^2$ and the second $J\Delta-\tilde m^2$, so the determinant is $\Delta\,(\rho_0J\Delta-\rho_0\tilde m^2-\tfrac14J\tilde m^2k^2)$. The root $\Delta = 0$ has eigenvector $\varphi = -\tfrac12ku$, i.e. $\psi = 0$; the other root is Eq. (13). Conversely, if $\mu/\rho_0\neq\gamma_\mathrm{eff}/2J$, substituting $\omega^2 = c'^2k^2$ into Eq. (11) leaves a $k$-dependent remainder at order $k^4$, so no linear branch exists for all $k$. $\square$

The proposition settles two items of the master. First, no "cone-locking flow" is needed to make the doublet dispersionless: a single constitutive relation, Eq. (12), does it exactly, at every wavelength and at finite $\tilde m$. The cone condition is imported [IM] and is the content of Closure K-2. Discreteness then enters only through level-0 corrections $\omega^2 = c^2k^2[1+\xi_\gamma(k\ell_s)^2+\dots]$, bounded in Sec. 5.9.

Second, the relative-rotation cone is *not* the light cone: $c_\psi$ exceeds $c$ by $\tilde m^2/4\rho_0$. Since knots are textures of the relative-rotation sector and inherit its limiting speed (Sec. 6), $(c_\psi-c)/c\simeq\tilde m^2/(8\rho_0c^2)$ is a maximal-attainable-velocity difference between matter and light, bounded by vacuum-Cherenkov and photon-decay constraints at the $10^{-15}$–$10^{-20}$ level [36; 37]. Writing $\tilde m^2 = J\omega_0^2$ and $J\equiv\rho_0\ell_g^2$, with $\ell_g$ the radius of gyration of the grains, the ratio is $(\ell_g\omega_0/c)^2/8$. For a gap of an MeV and $\ell_g = 1.5\times10^{-27}$ m it is $7\times10^{-30}$. The gap that sets the matter cone, however, is the vacuum's: Sec. 8.3 identifies the vacuum relative-rotation triplet with the weak triplet, $\hbar\omega_0\simeq M_Wc^2$, for which the ratio is $5\times10^{-20}$ at the same $\ell_g$ — at the edge of the strongest bounds. Requiring $(c_\psi-c)/c\lesssim10^{-20}$ gives $\ell_g = \sqrt{J/\rho_0}\lesssim7\times10^{-28}$ m. This is a constraint on the micro-inertia, and it is an inverse kill in Stake S1. With the structural scale fixed near the Planck length by induced gravity (Sec. 9.6), grains whose radius of gyration is of order $\ell_s$ satisfy it by seven orders of magnitude; it bites only if $\ell_g\gg\ell_s$.

## 2.4 Objectivity as gauge principle: what it does and does not explain

**Theorem 1 (The doublet is gapless) [DF].** *Under (P1)–(P4), a uniform co-rotation of lattice and grains costs no energy, and the locked transverse doublet is gapless to all orders in the potential sector.*

*Proof.* By Lemma 1 every objective variable vanishes for a uniform co-rotation, so $W$ does; the $k \to 0$ limit of the locked transverse mode is a uniform co-rotation; hence $\omega(k) \to 0$. Nonlinearly, $\tilde P$ is invariant under $\tilde Q \to \tilde R_0\tilde Q$, $\mathsf{R}[\mathbf{u}] \to \mathsf{R}_0\mathsf{R}[\mathbf{u}]$, so the entire potential sector contributes no mass to B2 at any order. $\square$

GUM is explicit about the status of this theorem. It is a theorem of (P3), and (P3) is adopted — as gauge symmetry historically was — by demanding that an unwanted mass term vanish. Under Definition 10 it therefore does not *explain* photon masslessness, and GUM does not claim that it does. What (P3) does that gauge symmetry alone does not is entail, with the same stroke, three further facts: achirality of the doublet at tree level (locking quenches $\chi_3$ on B2, with regeneration $(k\ell_s)^2$-suppressed); kinematic stability of vacuum photons (by Eq. (13) the line $\omega = ck$ lies strictly below the B3 hyperbola, and a lightlike vector cannot equal a sum of two timelike vectors); and the absence of any gapless charged mode (any branch carrying net disclination winding pays the locked tension). These are standing inverse kills (Stake S1). The master listed a fourth fact — a measurable electromagnetic departure from Maxwell's theory through finite $c_L$. Section 3.3 shows that, in any local completion that recovers Gauss's law, there is none.

## 2.5 Imports

A substrate proposal is measured by the length of its import list as much as by its theorems. GUM's continuum description has, in the isotropic centrosymmetric sector, six moduli $(\lambda,\mu,\mu_c,\alpha,\beta,\gamma)$ and two inertias $(\rho_0,J)$ [8]; chirality adds $\chi_{1,2,3}$; the topological sector adds $(\kappa_S,\Lambda,\tilde m_V,c_2)$. Of these, GUM:

- fixes $c^2 = \gamma_\mathrm{eff}/2J$ to the speed of light and imports the cone condition Eq. (12) (Closure K-2);
- imports $c_L$ as a constitutive constant, bounded below by Bell timing (Sec. 5.8);
- fixes one relation among $(\Lambda, J, \hbar_\mathrm{stat})$ by closure (Sec. 6.4);
- fixes the ratio $\mu_c/\tilde m_V^2 = 1/16$ by the closure value $\kappa = 1/\sqrt2$ in one consistent normalization (Proposition 19);
- fixes the structural scale $\ell_s$ by the induced Planck mass, up to a regularization-dependent factor, with photon timing as an independent upper bound (Sec. 9.6);
- treats the locking length $\ell_\mathrm{lock} = \sqrt{\gamma/4\mu_c}$ as a separate modulus, bounded by the far-infrared trough (Sec. 4.4);
- imports the fine-structure constant as a constitutive ratio, and lands the electroweak mixing modulus $\vartheta$ from the condensate tilt with a correction whose form is asserted (Sec. 8.3);
- takes the order-unity pitch factor $\zeta_\nu = 1$ as its minimal hypothesis (Sec. 4.2);
- bounds the relaxation index to $n\in[\tfrac12,1]$ by its dissipation channels (Sec. 9.4) and lets the data fix it near one (Sec. 9.5);
- bounds the soft-mode stiffness $\mathcal{X}^{-1}$ from below (Sec. 9.7).

Appendix A prints the full list.

## 2.6 Normalization conventions and the normalization audit

Formalizing the master exposed four inconsistencies in its bookkeeping. r1 corrected them, r2 adopted the corrections, and their downstream effects are graded here rather than silently absorbed.

(1) *Kinetic normalization.* With the coefficient $\tfrac12J$ in front of the trace, the rotational kinetic energy is $\tfrac14J|\boldsymbol\omega|^2$, whereas the electromagnetic sector used $\tfrac12J\dot{\boldsymbol\varphi}^2$ to obtain $c^2 = \gamma/2J$. Equation (4) adopts the coefficient $J$, which makes the two consistent; nothing in the electromagnetic sector changes.

(2) *The gap modulus.* The master wrote the B3 gap as $\omega_0 = \tilde m/\sqrt J$ with $\tilde m$ the coefficient of the potential and without the locking contribution. With Eqs. (4)–(8) the gap is $\omega_0^2 = (4\mu_c+\tfrac14\tilde m_V^2)/J$, Eq. (9). The symbol $\tilde m$ is kept for the total stiffness, so that $\omega_0 = \tilde m/\sqrt J$ remains true, and $\tilde m_V$ is the potential coefficient that enters the Bogomolny constant.

(3) *The halo length.* The in-gap decay length of B3 at clock frequency $\kappa\omega_0$ is $c_\psi/\big(\omega_0\sqrt{1-\kappa^2}\big)$. With the closure value $\kappa = 1/\sqrt2$ and $\hbar\omega_0 = \sqrt2Mc^2$ it equals $(c_\psi/c)\,\hbar/Mc$, not the master's $\hbar/(\sqrt2Mc)$ (Proposition 23).

(4) *P5.* For a divergence-free micro-rotation, the symmetric wryness energy renormalizes the curl modulus, $\gamma\to\gamma+\beta$ (Proposition 6). The master's P5, which confined $\alpha,\beta$ to the longitudinal sector, is therefore unnecessary for the transverse sector; what the longitudinal sector *does* is fixed by Flag F6.

Items (1), (2), and (4) change no number in the core. Item (3) changes how one number is computed. The flavor bridge of Sec. 8.2 fixes a logarithm, $X\equiv\ln(1/q\lambda_{\mathrm{halo},\tau})$, and converting it into the heaviest neutrino mass requires the halo length as a yardstick: $m_3c^2 = \zeta_\nu\hbar c\,e^{-X}/\lambda_{\mathrm{halo},\tau}$. With the corrected halo, $\lambda_{\mathrm{halo},\tau}\simeq\hbar/m_\tau c$ and $m_3c^2 = \zeta_\nu m_\tau c^2e^{-X}\simeq0.047\,\zeta_\nu$ eV, the value the master printed; with the master's halo the same logarithm would give $0.066$ eV. The master's printed halo length and its printed $m_3$ were therefore mutually inconsistent, and the printed conversion shows that $X$ was referenced to $\hbar/m_\tau c$: the correction leaves the central value at $0.047$ eV. r1's first printing stated the opposite direction; its erratum E1, reproduced in Sec. 11.6, fixed it. In no case does the correction push the prediction below the oscillation floor. Whether the integrals themselves change when evaluated on the corrected halo profile cannot be checked here.

A fifth inconsistency was found by the audit of 2026-10-17 and is corrected in this revision: the inherited bench values and the inherited ratio $\mu_c = 3\tilde m_V^2/16$ were computed with the master's kinetic coefficient. Section 6.4 carries out the part of the audit that needs no unpublished integral (Proposition 19). In one consistent normalization the closure value $\kappa = 1/\sqrt2$ requires $\mu_c = \tilde m_V^2/16$; the inherited ratio gives $\kappa = \tfrac12$, which would move the band edge to the pair threshold and the neutrino mass out of the cosmologically allowed range.

Posed **Closure K-3 (normalization audit)** has four deliverables:

1. re-evaluation of every [N] quantity under Eqs. (4)–(9);
2. the corrected bridge inversion;
3. whether the frustration integrals move when evaluated on the corrected halo profile;
4. the rigorous lower bound on the closure constant $\mathfrak c$, re-derived in the corrected normalization.

Kill: a corrected $1\sigma$ band of $m_3$ lying entirely below the oscillation floor retires the neutrino-as-pitch-quantum identification at its present grade. Until the closure executes, every integral-dependent number is held at its grade (Appendix I).

# 3. Electrodynamics as the Orientation Sector

## 3.1 MacCullagh and the Cosserat rescue

In 1839 MacCullagh exhibited the unique classical aether whose dynamics reproduce Fresnel's optics: a continuum storing energy in the curl of the displacement alone [22; 23],
$$
W_\mathrm{MC} = \tfrac12\kappa\,|\nabla\times\mathbf{u}|^2 . \tag{14}
$$
It reproduces propagation, reflection, refraction, and polarization exactly, and as a Cauchy continuum it is inconsistent: its stress is antisymmetric, angular momentum is unbalanced, and it has no shear rigidity. GUM's diagnosis is a theorem.

**Theorem 2 (Cauchy no-go) [DF].** *In a non-polar continuum whose stored energy is a function of $\nabla\mathbf{u}$ alone, linearized objectivity implies $W = W(\varepsilon_{ij})$. Hence Eq. (14) is objective only if $\kappa = 0$, and no objective Cauchy energy reproduces MacCullagh's aether.*

*Proof.* Impose invariance of $W(\partial_iu_j)$ under $\delta\mathbf{u} = \boldsymbol\omega\times\mathbf{x}$ for all constant $\boldsymbol\omega$. By Lemma 1 this fixes $\varepsilon_{ij}$ and shifts $\partial_{[i}u_{j]}$ by the arbitrary antisymmetric tensor $\epsilon_{jki}\omega_k$; invariance forces $\partial W/\partial(\partial_{[i}u_{j]}) = 0$. Since $|\nabla\times\mathbf{u}|^2 = 2\,\partial_{[i}u_{j]}\partial_{[i}u_{j]}$, $W_\mathrm{MC}$ is objective only if $\kappa = 0$. $\square$

**Theorem 3 (Micropolar rescue) [DF].** *In GUM's substrate the energy $\tfrac12\gamma\,\Gamma_{[ij]}\Gamma_{[ij]} = \tfrac14\gamma|\nabla\times\boldsymbol\varphi|^2$ is objective, has MacCullagh's form with $\mathbf{u} \to \boldsymbol\varphi$, and coexists with full Cauchy rigidity $\mu > 0$; angular momentum is balanced by the couple stress. In the locked doublet the transverse displacement and orientation co-move exactly, so the MacCullagh energy is carried by B2 at every wavelength.*

*Proof.* Objectivity of $\Gamma_{ij}$ is Lemma 1; $\Gamma_{[ij]} = \tfrac12\epsilon_{ijk}(\nabla\times\boldsymbol\varphi)_k$ gives the identity; the second of Eqs. (10) balances the antisymmetric stress — the term with no partner in a Cauchy continuum — against $\partial_jm_{ji}$ and micro-inertia; coexistence with $\mu > 0$ is manifest in Eq. (5). Exact co-motion ($\boldsymbol\psi\equiv0$ on B2) is Proposition 2 under the cone condition. $\square$

The nineteenth century's aether program did not fail because light-as-response is impossible; it failed because the required class of continuum descriptions had not been invented. Kelvin's gyrostatic model [24] realized MacCullagh's rotational elasticity with hidden rotors but not alongside shear rigidity; Böhmer, Downes, and Vassiliev [25] obtained Maxwell-type equations from a purely rotational continuum. What Theorems 2–3 add is the objectivity diagnosis that separates the inconsistent Cauchy reading from the consistent micropolar one, and the coexistence of rotational elasticity with a rigid lattice in one continuum. This result is independent of everything else in GUM.

## 3.2 Maxwell in the locked doublet

**Theorem 4 (Source-free Maxwell equations) [DF].** *Let the orientation sector obey (P1)–(P4) with Lagrangian density $\mathcal{L}_\perp = \tfrac12J\dot{\boldsymbol\varphi}^2 - \tfrac14\gamma_\mathrm{eff}|\nabla\times\boldsymbol\varphi|^2$ on divergence-free $\boldsymbol\varphi$. Define*
$$
\mathbf{B} \equiv \kappa_B\nabla\times\boldsymbol\varphi, \qquad \mathbf{E}_\varphi \equiv -\kappa_B\dot{\boldsymbol\varphi}, \qquad \mathbf{A} \equiv \kappa_B\boldsymbol\varphi . \tag{15}
$$
*Then $\nabla\cdot\mathbf{B} = 0$ and $\nabla\times\mathbf{E}_\varphi = -\partial_t\mathbf{B}$ identically; $\partial_t\mathbf{E}_\varphi = c^2\nabla\times\mathbf{B}$ dynamically with*
$$
c^2 = \frac{\gamma_\mathrm{eff}}{2J}; \tag{16}
$$
*the energy density $\tfrac12J\dot{\boldsymbol\varphi}^2 + \tfrac14\gamma_\mathrm{eff}|\nabla\times\boldsymbol\varphi|^2$ equals $\tfrac12\varepsilon^\ast(\mathbf{E}_\varphi^2+c^2\mathbf{B}^2)$ with $\varepsilon^\ast\equiv J/\kappa_B^2$; and a time-independent re-convention $\boldsymbol\varphi \to \boldsymbol\varphi + \nabla\chi(\mathbf{x})$ is the gauge transformation $\mathbf{A} \to \mathbf{A} + \kappa_B\nabla\chi$, leaving $\mathbf{B}$, $\mathbf{E}_\varphi$, and $\mathcal{L}_\perp$ invariant. A time-dependent re-convention changes $\mathbf{E}_\varphi$ by $-\kappa_B\nabla\dot\chi$ and is not a redundancy of the substrate.*

*Proof.* The identities are $\nabla\cdot\nabla\times = 0$ and $\nabla\times\partial_t = \partial_t\nabla\times$. The Euler–Lagrange equation of $\mathcal{L}_\perp$ is $J\ddot{\boldsymbol\varphi} = -\tfrac12\gamma_\mathrm{eff}\nabla\times\nabla\times\boldsymbol\varphi$ (Appendix B), so $\partial_t\mathbf{E}_\varphi = (\gamma_\mathrm{eff}/2J)\nabla\times\mathbf{B}$. The energy identity follows from $\tfrac12J\dot{\boldsymbol\varphi}^2 = \tfrac12(J/\kappa_B^2)\mathbf{E}_\varphi^2$ and $\tfrac14\gamma_\mathrm{eff}|\nabla\times\boldsymbol\varphi|^2 = \tfrac12(J/\kappa_B^2)c^2\mathbf{B}^2$. Invariance of $\mathbf{B}$ follows from $\nabla\times\nabla\chi = 0$; $\mathbf{E}_\varphi = -\kappa_B\dot{\boldsymbol\varphi}$ is unchanged if and only if $\dot\chi = 0$. The symmetric wryness term $\beta$ renormalizes $\gamma$ to $\gamma_\mathrm{eff}$ and has no other transverse effect (Proposition 6). $\square$

The content of this theorem is old: a MacCullagh Lagrangian for a vector field yields the source-free Maxwell equations with the vector potential identified with the field. What is GUM's is the legitimacy of the Lagrangian (Theorem 3), the identification of $\mathbf{A}$ with the physical grain orientation, and the reading of the displacement current as rotational inertia: light exists because spinning grains have inertia. Time-independent re-conventions are re-choices of the reference triad. Time-dependent re-conventions are *not* free in GUM: they would shift the longitudinal sector, which is physical. r2 stated the gauge transformation without this restriction (correction 44). How the substrate fixes the time-dependent freedom is the subject of the next subsection, and the answer is a theorem.

## 3.3 The longitudinal sector and the locality dichotomy

Two of Maxwell's equations are identities of Eq. (15), one is the dynamics of B2, and Gauss's law is not among them.

**Proposition 3 (The transverse identification carries no static field) [DF].** *With $\mathbf{E} = \mathbf{E}_\varphi$ alone, a static field $\mathbf{E}_0 \ne 0$ requires $\boldsymbol\varphi(t) = \boldsymbol\varphi(0) - \mathbf{E}_0t/\kappa_B$, an orientation growing without bound. Electrostatics requires a longitudinal field that is not $-\kappa_B\dot{\boldsymbol\varphi}$.*

The longitudinal field is supplied by the B1 sector. Let $\rho_q$ and $\mathbf{j}_q$ be the disclination winding density and current; by degree conservation (Lemma 5) they obey $\partial_t\rho_q + \nabla\cdot\mathbf{j}_q = 0$. The *frame-connection scalar* $\Phi_c$ is the longitudinal potential of B1 sourced by winding density,
$$
\left(\frac{1}{c_L^2}\partial_t^2 - \nabla^2\right)\Phi_c = \frac{\rho_q}{\varepsilon^\ast}, \tag{17}
$$
with retarded conditions, and the total electric field is $\mathbf{E} \equiv \mathbf{E}_\varphi - \nabla\Phi_c$. Write $\Phi_\infty \equiv (-\nabla^2)^{-1}\rho_q/\varepsilon^\ast$ for the instantaneous Coulomb potential and $(\mathbf{E}^M,\mathbf{B}^M)$ for the retarded Maxwell fields of $(\rho_q,\mathbf{j}_q)$ [38]. Two elliptic-type problems coexist in the longitudinal sector and are kept separate by construction: the frame-connection scalar sourced by winding (electrostatics) and the pressure multiplier of the stiff B1 sector sourced by knot cores (the quantum-potential constraint of Sec. 5.1). Distinct fields, distinct sources; conflating them would make charge proportional to mass.

The master did not specify how moving winding sources the orientation sector. Write the orientation sector's balance, projected onto the doublet's equation of motion, as
$$
\partial_t\mathbf{E}_\varphi = c^2\nabla\times\mathbf{B} - \frac{\mathbf{J}_\varphi}{\varepsilon^\ast}, \qquad \partial_t\mathbf{B} = -\nabla\times\mathbf{E}_\varphi, \tag{18}
$$
where $\mathbf{J}_\varphi$ is the torque-current through which winding drives micro-rotation. Everything the master called "two-speed electrodynamics" depends on that choice.

**Definition 2 (Completions of the longitudinal sector).** A *completion* is a specification of $\mathbf{J}_\varphi$ as a causal functional of $(\rho_q,\mathbf{j}_q,\Phi_c)$. Two are distinguished:

- the *transverse completion* (T): $\mathbf{J}_\varphi = \mathsf{P}_\perp\mathbf{j}_q$, the transverse projection, so that $\mathbf{E}_\varphi$ stays divergence-free — the master's implicit reading;
- the *Gauss completion* (G): $\mathbf{J}_\varphi = \mathbf{j}_q - \varepsilon^\ast\partial_t\nabla\Phi_c$, a local functional.

For any completion the *defect current* is $\mathbf{j}_\mathrm{def} \equiv \mathbf{J}_\varphi - \mathbf{j}_q + \varepsilon^\ast\partial_t\nabla\Phi_c$, and the *defect density* $\rho_\mathrm{def}$ is defined by $\partial_t\rho_\mathrm{def} + \nabla\cdot\mathbf{j}_\mathrm{def} = 0$, $\rho_\mathrm{def}\to0$ in the past.

**Theorem 5 (Defect representation) [DF].** *For any completion, $(\mathbf{E},\mathbf{B})$ obey Maxwell's equations with sources $(\rho_q+\rho_\mathrm{def},\ \mathbf{j}_q+\mathbf{j}_\mathrm{def})$. Consequently*
$$
\mathbf{E} - \mathbf{E}^M = \mathbf{E}^M[\rho_\mathrm{def},\mathbf{j}_\mathrm{def}], \qquad \mathbf{B} - \mathbf{B}^M = \mathbf{B}^M[\rho_\mathrm{def},\mathbf{j}_\mathrm{def}], \tag{19}
$$
*the deviation from Maxwell's theory is the retarded Maxwell field of the conserved defect current, and the Gauss defect is $\nabla\cdot\mathbf{E} - \rho_q/\varepsilon^\ast = \rho_\mathrm{def}/\varepsilon^\ast$.*

*Proof.* Faraday's law and $\nabla\cdot\mathbf{B} = 0$ hold because $\nabla\times\nabla\Phi_c = 0$. From Eq. (18), $\partial_t\mathbf{E} = c^2\nabla\times\mathbf{B} - (\mathbf{j}_q+\mathbf{j}_\mathrm{def})/\varepsilon^\ast$ by the definition of $\mathbf{j}_\mathrm{def}$. Taking the divergence of Eq. (18) and using Eq. (17) and both continuity equations gives $\partial_t(\nabla\cdot\mathbf{E}) = \partial_t(\rho_q+\rho_\mathrm{def})/\varepsilon^\ast$, hence Gauss's law with the total source, given that all fields vanish before the sources switch on. Maxwell's equations with retarded conditions have a unique solution, linear in the sources. $\square$

**Theorem 6 (Locality dichotomy) [DF].** *(i) In (T), $\mathbf{j}_\mathrm{def} = \varepsilon^\ast\partial_t\nabla(\Phi_c - \Phi_\infty)$ and*
$$
\mathbf{E}^{(T)} - \mathbf{E}^M = -\nabla(\Phi_c - \Phi_\infty), \qquad \mathbf{B}^{(T)} = \mathbf{B}^M . \tag{20}
$$
*If a source that is static for $t<0$ changes its dipole moment at $t=0$ inside a ball of radius $R_0$, then at every point with $|\mathbf{x}| > R_0 + c_Lt$ the field has already changed by $-\Delta\mathbf{E}_C(\mathbf{x})$, minus the change of the instantaneous Coulomb field. (T) is therefore acausal at every finite speed and permits instantaneous signaling in the material frame; at $c_L = \infty$ it coincides with (G) in the Coulomb gauge and is causal. (ii) In (G), $\mathbf{j}_\mathrm{def} \equiv 0$, so $(\mathbf{E},\mathbf{B}) = (\mathbf{E}^M,\mathbf{B}^M)$ exactly, for every $c_L \in (0,\infty]$. The two pieces $\mathbf{E}_\varphi = \mathbf{E}^M + \nabla\Phi_c$ and $-\nabla\Phi_c$ are separately $c_L$-causal, and their sum is $c$-causal. The constitutive content of (G) is the local constraint*
$$
\kappa_B\nabla\cdot\boldsymbol\varphi + \frac{1}{c_L^2}\partial_t\Phi_c = 0, \tag{21}
$$
*which is the velocity-gauge condition $\nabla\cdot\mathbf{A} + c_L^{-2}\partial_t\Phi = 0$ of Maxwell theory [26] with $\mathbf{A} = \kappa_B\boldsymbol\varphi$ and $\Phi = \Phi_c$.*

*Proof.* (i) The transverse part of the current is $\mathsf{P}_\perp\mathbf{j}_q = \mathbf{j}_q - \mathsf{P}_L\mathbf{j}_q$ and, by continuity and $\rho_q = -\varepsilon^\ast\nabla^2\Phi_\infty$, $\mathsf{P}_L\mathbf{j}_q = \varepsilon^\ast\partial_t\nabla\Phi_\infty$; hence the stated $\mathbf{j}_\mathrm{def}$. A purely longitudinal conserved current generates no magnetic field, and its electric field is the instantaneous gradient $-\nabla(\Phi_c - \Phi_\infty)$, which gives Eq. (20) through Theorem 5. Outside the $c_L$-cone of the source, $\Phi_c$ still equals its old static value while $\Phi_\infty$ has changed, and the Maxwell field outside its light cone is the old static field, so the total field there is the old field minus $\Delta\mathbf{E}_C$. (ii) $\mathbf{j}_\mathrm{def} = 0$ by definition, and Theorem 5 gives exact agreement. The divergence of $\mathbf{E}_\varphi$ is $\nabla\cdot\mathbf{E}^M + \nabla^2\Phi_c = c_L^{-2}\partial_t^2\Phi_c$ by Eq. (17); with $\mathbf{E}_\varphi = -\kappa_B\dot{\boldsymbol\varphi}$ and vanishing past data, this integrates to Eq. (21). $\square$

**Corollary 1 ($c_L$ is invisible to electromagnetic probes) [DF].** *In (G), no measurement that couples to charges only through the Lorentz force, or to radiation only through $(\mathbf{E},\mathbf{B})$, can determine $c_L$. In particular, the longitudinal radiation of relative power $\eta(c/c_L)^3$ claimed by the master does not load the source: it is an internal exchange between B1 and the longitudinal micro-rotation whose sum reproduces Maxwell's fields and hence Maxwell's radiation reaction. Proposition 4 states what this requires of the longitudinal energy.*

*Proof.* Forces, radiation reaction, and the Poynting balance are functionals of $(\mathbf{E},\mathbf{B})$, which by Theorem 6(ii) are Maxwell's for every $c_L$. $\square$

**Flag F6 (Gauss completion).** GUM adopts (G) as its core completion: Eq. (21) is a constitutive law of the longitudinal micro-rotation (postulate P5$'$). Under Definition 10 this is circular — the flag is adopted because it recovers Gauss's law — and GUM says so. What it buys is a precise statement of the substrate's gauge: gauge freedom is a redundancy of the *bookkeeping*, while the substrate itself realizes one gauge, the velocity gauge with speed $c_L$, in which the grain orientation *is* the potential. Whether Eq. (21) can be derived from Eq. (4) rather than imposed is posed Closure K-4, with three deliverables: the derivation (for instance as the stiff limit of a constitutive term $\propto(\kappa_B\nabla\cdot\boldsymbol\varphi + c_L^{-2}\partial_t\Phi_c)^2$), the defect current of any completion the action actually produces, and the sign structure of the longitudinal energy (Proposition 4).

**Proposition 4 (Energy bookkeeping at finite $c_L$) [DF].** *Suppose, under Flag F6, that winding sources feel the Lorentz force of the total fields and that the energy of the longitudinal sector — B1 together with the longitudinal micro-rotation — is positive definite, with B1 normalized as $\tfrac12\varepsilon^\ast(c_L^{-2}\dot\Phi_c^2 + |\nabla\Phi_c|^2)$. Then for a neutral source with time-periodic dipole moment $\mathbf{d}(t)$ the assumptions are inconsistent at finite $c_L$: the retarded solution of Eq. (17) has the radiation zone $\Phi_c\simeq\hat{\mathbf n}\cdot\dot{\mathbf d}(t-r/c_L)/(4\pi\varepsilon^\ast c_Lr)$, which carries the time-averaged power*
$$
\frac{P_L}{P_M} = \frac12\left(\frac{c}{c_L}\right)^3 \tag{22}
$$
*relative to Maxwell's dipole power $P_M$, whereas exact Maxwell fields require the longitudinal sector's net flux to vanish. At least one of the following holds: (a) the longitudinal sector's energy is indefinite, as the scalar and longitudinal photons of the Lorenz gauge are in Gupta–Bleuler quantization; (b) the source feels an additional radiation reaction of relative size Eq. (22), so that (G) holds only up to a defect current of that order; or (c) $c_L = \infty$, where (G) and (T) coincide in the Coulomb gauge and B1 does not radiate.*

*Proof.* In a time-periodic state the time-averaged field energy is constant, so the time-averaged power delivered by the sources equals the time-averaged flux to infinity, the transverse (Maxwell) flux plus the longitudinal flux. By Theorem 6(ii) the delivered power is Maxwell's, so the longitudinal flux must average to zero; a positive-definite sector with outgoing radiation carries strictly positive flux whenever its radiation field is nonzero. The flux $-\varepsilon^\ast\dot\Phi_c\nabla\Phi_c$ of the stated $\Phi_c$ integrates to $\ddot{\mathbf d}^2/(12\pi\varepsilon^\ast c_L^3)$, against Maxwell's $\ddot{\mathbf d}^2/(6\pi\varepsilon^\ast c^3)$. $\square$

The proposition locates the master's $(c/c_L)^3$ channel exactly: it is not an electromagnetic signal but the energy that a positive-energy longitudinal sector would leak, and with $c_L\ge10^4c$ it is at most $5\times10^{-13}$ of the dipole power, far below any radiation-reaction measurement. Option (c) has a structural cost: it removes the finite longitudinal speed from the substrate altogether, so the tower's finite update speed of Sec. 5.8 would have to be a separate modulus, breaking cross-lock X1. Which option the action realizes is part of Closure K-4.

The theorem changes what the master called its most direct ontological test. Any local completion other than (G) — for instance one in which the longitudinal micro-rotation follows its own B4 dynamics (Proposition 2) instead of Eq. (21) — has $\mathbf{j}_\mathrm{def}\neq0$, localized inside the fastest cone of the local dynamics. By Eq. (19) its signature is a retarded Maxwell field radiated by the defect current. Near the source this field has the two-cone space-time structure of Stokes's elastodynamic Green's function [39], with near-field terms supported between the arrival of the fast and slow fronts (Appendix B). Its amplitude is a deliverable of Closure K-4; under Flag F6 it is zero.

## 3.4 The near-field experiment as a null test

Stake S2 is re-graded [RG]: GUM's core predicts *no* electromagnetic precursor, and the near-field experiment tests Flag F6. Such experiments are cheap and have been attempted with contested results. Kholmetskii et al. reported anomalous near-zone propagation of bound fields [40]; de Sangro et al. reported Coulomb fields of relativistic bunches that appeared rigidly attached to the bunch [41]. For a uniformly moving charge the Liénard–Wiechert field already points at the present position, so only abrupt changes of motion discriminate.

What a violation would look like is worth printing, because the master predicted it. Under (T), a $1$ nC relativistic bunch deflected by $1$ mm in $1$ ns would update the Coulomb field at $10$ m by $\Delta E_C\simeq9\times10^{-6}$ V/m within $r/c_L\simeq3$ ps for $c_L = 10^4c$, against the radiation pulse of about $10^{-2}$ V/m — the acceleration field $q\Delta x/(4\pi\varepsilon^\ast c^2r\tau^2)$ of a displacement $\Delta x$ in time $\tau$ — arriving at $r/c = 33$ ns. The two are separated by $33$ ns, so the measurement is a timing measurement with $10^6$-shot averaging, not an amplitude measurement. A clean protocol has four elements:

1. an abrupt source: a pulsed dipole or a kicked bunch emerging from a conductor;
2. battery-powered field sensors at baselines of $10$–$100$ m with analog-optical readout, so that no metallic path joins source and sensor;
3. White Rabbit time transfer at the $10$ ps level;
4. a blinded analysis of the window $0<t<r/c$ binned in sidereal time.

A pre-light signal that survives these controls would retire Flag F6. It would also identify the material frame, because of the following kinematics.

**Proposition 5 (Lab-frame ordering of material-frame signals) [DF].** *Let the lab move with velocity $\mathbf{v}_M$ relative to the material frame, and let an influence propagate at speed $c_L$ in the material frame from a source event to a receiver at material-frame distance $r$ in direction $\hat{\mathbf n}$. On Einstein-synchronized lab clocks the arrival time is*
$$
t_\mathrm{lab} = \gamma_v\,r\left(\frac{1}{c_L} - \frac{\mathbf{v}_M\cdot\hat{\mathbf n}}{c^2}\right). \tag{23}
$$
*The influence arrives before the source event whenever $\mathbf{v}_M\cdot\hat{\mathbf n} > c^2/c_L$, possible for every $v_M\gtrsim30\ \mathrm{km\,s^{-1}}$ when $c_L\ge10^4c$. As the Earth rotates, $\hat{\mathbf n}$ sweeps relative to $\mathbf{v}_M$, and $t_\mathrm{lab}$ oscillates with sidereal period with amplitude $\gamma_vrv_M\sin\theta_\oplus\,n_\perp/c^2$, where $\theta_\oplus$ is the angle between $\mathbf{v}_M$ and the Earth's axis and $n_\perp$ is the component of $\hat{\mathbf n}$ perpendicular to that axis. For $v_M = 369.8\ \mathrm{km\,s^{-1}}$ (the CMB dipole, $\sin\theta_\oplus\simeq0.99$), an east–west baseline and $r = 100$ m the full swing is $\simeq0.8$ ns.*

*Proof.* Lorentz transformation of the arrival event $(r/c_L,\ r\hat{\mathbf n})$ from the material frame to the lab (Appendix F). $\square$

The proposition is frame-agnostic about which frame is the substrate's: it turns any positive signal into a measurement of $\mathbf{v}_M$, and it is the same kinematics that governs the tower's influences in Sec. 5.8, where GUM's core *does* predict an effect.

## 3.5 Charge, Coulomb, and Aharonov–Bohm

The elementary charge is a wedge-disclination dressing of the knot: the triad convention winds irremovably around a defect line, with Frank class in $\pi_1$ of the convention circle. For a dressed knot, charge is triple-locked — disclination winding $w$ at field level, knot degree $K$ (the dressing is bound to the texture), and compact-phase integer at point level — three independent integer locks on indivisibility [DF]. Whether an *undressed* degree-one knot is a solution of Eqs. (4)–(8) is not decided by the lock; it is the first deliverable of Conjecture 1 (Sec. 9.8).

Static defect equilibrium in Eq. (17) with a point winding source gives the Coulomb far field $\mathbf{E} = (q/4\pi\varepsilon^\ast)\hat{\mathbf r}/r^2$. Like-handed disclinations superpose rotation fields coherently and repel; opposite Frank vectors partially annul the intervening distortion and attract. This is the interaction energetics of disclinations, read as electrostatics. A charged texture transported around a region of enclosed flux $\Phi_B$ that no knot enters acquires the holonomy $\Delta\phi = (q/\hbar)\oint\mathbf{A}\cdot d\mathbf{l} = q\Phi_B/\hbar$. The connection is flat and the transport nonzero: this is the Aharonov–Bohm phenomenology, with no input beyond the connection of Theorem 4, contributing dynamical phase only [DF]. Under Flag F6 the holonomy is gauge-invariant, as it must be: the loop integral of the velocity-gauge potential equals that of any other gauge.

The fine-structure constant compares defect self-coupling to torsion-wave stiffness. It is dimensionally secure, structurally plausible (one stiffness hierarchy renders $\alpha<1$, $c$ large, and $G$ small together), and quantitatively *unclaimed* [IM]. GUM's ledger forbids numerology, and the honesty of this import is what keeps the electroweak-mixing landing of Sec. 8.3 a landing rather than a fit.

## 3.6 The transverse sector does not need P5

The master postulated that the moduli $\alpha,\beta$ act only in the longitudinal sector, so that the transverse Lagrangian is gauge invariant, and printed the cost of that postulate. The cost is smaller than stated.

**Proposition 6 (Symmetric wryness is statically invisible) [DF].** *For a divergence-free micro-rotation field decaying at infinity on $\mathbb{R}^3$,*
$$
\int\Gamma_{(ij)}\Gamma_{(ij)}\,d^3x = \tfrac12\int|\nabla\times\boldsymbol\varphi|^2\,d^3x . \tag{24}
$$
*Hence in the transverse sector the $\beta$ term renormalizes the curl modulus, $\gamma\to\gamma_\mathrm{eff} = \gamma+\beta$, and has no other effect; $\alpha$ does not act at all. A transverse $\beta\neq0$ is invisible to magnetostatics, to radiation, and to the doublet's dispersion.*

*Proof.* Decompose $\partial_i\varphi_j$ into symmetric and antisymmetric parts: $|\nabla\boldsymbol\varphi|^2 = \Gamma_{(ij)}\Gamma_{(ij)} + \Gamma_{[ij]}\Gamma_{[ij]}$ with $\Gamma_{[ij]}\Gamma_{[ij]} = \tfrac12|\nabla\times\boldsymbol\varphi|^2$. Two integrations by parts give $\int|\nabla\boldsymbol\varphi|^2 = \int\big(|\nabla\times\boldsymbol\varphi|^2 + (\nabla\cdot\boldsymbol\varphi)^2\big)$. Setting $\nabla\cdot\boldsymbol\varphi = 0$ and subtracting yields Eq. (24). $\square$

In multiply connected regions, such as the exterior of a flux tube, the integrations by parts leave boundary terms on the tube's surface, and the exterior region then appears to store energy $\propto\beta\Phi_B^2$ in a field-free zone. For a smooth substrate the interior contribution cancels it, and the total is the renormalization of $\gamma$. The physical content of the master's P5 is therefore entirely longitudinal, where it is now replaced by Flag F6.

# 4. The Structured Vacuum: Condensate, Pitch, Passage, and the Far-Infrared Trough

## 4.1 The chiral condensate

GUM's chiral sector condenses. A conical texture of pitch wavenumber $q$ in a sector with twist stiffness $\gamma_s$, chiral gain $\chi_s$, and gap $\Delta_s$ has free-energy density
$$
f(\theta,q) = \sin^2\theta\left(-\chi_sq + \tfrac12\gamma_sq^2\right) + \tfrac12\Delta_s^2\theta^2, \tag{25}
$$
optimized at $q^\ast = \chi_s/\gamma_s$, with condensation iff $\chi_s^2 > \gamma_s\Delta_s^2$ (Dzyaloshinskii's criterion [42]) [DF]. In the gapped relative sector the criterion fails. The condensate lives instead on the $\epsilon$-lifted SDiff manifold of the $(6+0)$ vacuum, where every ingredient of the margin $\mathfrak{m}\equiv\bar\chi^2/(\bar\gamma\bar\Delta^2)$ carries one power of $\epsilon$, so that $\mathfrak{m}$ is a pure number of couplings, $\mathfrak{m} = 1.9\pm0.4$ [N]. Double twist gains locally about twice the single helix's chiral energy but cannot tile $\mathbb{R}^3$. In the window $1<\mathfrak{m}\lesssim$ few, the amorphous double-twist network beats the single-axis cholesteric [43]: the vacuum is locally helical and globally statistically isotropic — the blue fog, **Flag F7 (blue fog)** [DW].

**Proposition 7 (The condensate tilt) [DF, given the margin].** *At $q = q^\ast$, Eq. (25) has, for every $\mathfrak{m}>1$, a unique interior minimum $\theta_c\in(0,\pi/2)$, fixed by*
$$
\frac{\sin2\theta_c}{2\theta_c} = \frac{1}{\mathfrak{m}}, \tag{26}
$$
*so that $\mathfrak{m} = 1.9\pm0.4$ gives $\sin\theta_c = 0.79^{+0.06}_{-0.11}$ ($\theta_c = 52.6^\circ$, $\sin^2\theta_c = 0.63$).*

*Proof.* At $q^\ast$, $f(\theta) = -(\chi_s^2/2\gamma_s)\sin^2\theta + \tfrac12\Delta_s^2\theta^2$, so $f'(\theta) = -(\chi_s^2/2\gamma_s)\sin2\theta + \Delta_s^2\theta$, which vanishes when $\sin x/x = 1/\mathfrak{m}$ with $x = 2\theta$. Since $\sin x/x$ falls monotonically from $1$ to $0$ on $(0,\pi)$, there is exactly one root for $\mathfrak{m}>1$. There $f'' = \Delta_s^2(1-\mathfrak{m}\cos x) = \Delta_s^2(1 - x\cot x) > 0$, so it is a minimum. The numbers follow by solving Eq. (26) at $\mathfrak{m} = 1.5$, $1.9$ and $2.3$. $\square$

r1 and r2 printed $\sin\theta_c = \sqrt{1-1/\mathfrak{m}} = 0.69\pm0.11$. That law is the minimum of a Landau form quartic in $\sin^2\theta$, not of Eq. (25) (correction 37). The tilt enters four results downstream, each recomputed here: the locking suppression of Sec. 4.4, the weak-mixing landing and the right-handed admixture of Sec. 8.3, and the induced Chern–Simons term of Sec. 10.2. The margin itself is [N] and is held under Closure K-3.

## 4.2 The pitch and the neutrino

The pitch is fixed by the flavor sector (Sec. 8.2): the neutrino is the pitch quantum, a unit-Hopf excitation of the helix whose mass is of order $\hbar qc$. GUM writes the identification with an explicit order-unity factor,
$$
m_3c^2 = \zeta_\nu\,\hbar qc,\qquad p\equiv\frac{2\pi}{q} = \zeta_\nu\frac{hc}{m_3c^2}, \tag{27}
$$
with $\zeta_\nu = 1$ the minimal hypothesis behind every number printed below. r2 wrote the identification as exact; nothing in the heliknoton's construction fixes the order-unity factor, so this revision restores it (correction 42). A periodic-on-average handed structure at pitch $p$ is a photonic structure at frequency $c/(\bar np)$.

**Proposition 8 (The pitch window) [DW].** *With normal ordering and the oscillation parameters $\Delta m^2_{21} = 7.5\times10^{-5}$ eV$^2$ and $\Delta m^2_{31} = 2.51\times10^{-3}$ eV$^2$ [44], the oscillation floor is $m_3\ge\sqrt{\Delta m^2_{31}} = 0.0501$ eV. Truncating the $1\sigma$ band of the flavor bridge, $m_3\in[0.015,\ 0.143]$ eV (Sec. 8.2), at that floor gives*
$$
p/\zeta_\nu\in[8.7,\ 24.7]\ \mu\mathrm{m},\qquad c/(\bar np)\in[12.1,\ 34.5]\ \mathrm{THz}\times(\zeta_\nu\bar n)^{-1}. \tag{28}
$$
*If the $\Lambda$CDM bound $\Sigma m_\nu<0.064$ eV holds [45; 46], then $m_3\in[0.0501,\ 0.0503]$ eV and $p/\zeta_\nu\in[24.66,\ 24.75]\ \mu$m; within dark-energy models with $w\ge-1$, the class to which GUM's own relaxation family belongs, the cosmological bound is tighter still [47].*

*Proof.* $hc = 1.23984$ eV µm divided by $m_3$. For normal ordering $\Sigma m_\nu = m_1+\sqrt{m_1^2+\Delta m^2_{21}}+\sqrt{m_1^2+\Delta m^2_{31}}$; $\Sigma m_\nu = 0.064$ eV gives $m_3 = 0.0503$ eV (Appendix H). $\square$

Three corrections meet in this proposition. The master's central value $p\simeq26\ \mu$m, from $m_3 = 0.047$ eV, lies below the oscillation floor that the same draft used to truncate the neutrino stake; r1 and r2 withdrew it. r1 and r2 then printed the window $[21.8,\ 24.7]\ \mu$m, whose short end came from an upper edge $m_3\le0.057$ eV "of Stake S1" (the parents' label for Stake S18). That edge was asserted, never derived: it is equivalent to $\Sigma m_\nu\le0.11$ eV and corresponds to nothing in the bridge band, which extends to $0.143$ eV. This revision withdraws it (correction 39) and widens the uncertainty of the bridge to the value its stated inputs give (correction 40). Finally, r2's text stated the floor as $0.0503$ eV while its printed edge used $\Delta m^2_{31} = 2.51\times10^{-3}$ eV$^2$, a floor of $0.0501$ eV; the inputs are now stated (correction 41). The *a priori* window is wider than either parent printed, but the edge the data allow is the same thin sliver at the floor, near $24.7\ \mu$m. The window is subject to Closure K-3.

## 4.3 Cosmological Bragg passage

Any coupling of the doublet to the helix is, at leading order, a modulation $\Delta n$ of the doublet's effective index along the local helix axis. For propagation along the axis, a cholesteric structure reflects the co-handed circular polarization inside the stop band $\lambda\in[n_op,n_ep]$ and transmits the counter-handed one [48]. The master treated the universe as a static slab of such a structure, which is incorrect. A photon crossing the universe is redshifted *through* the stop band, so the relevant problem is a Bragg resonance swept by cosmic expansion.

**Theorem 7 (Cosmological Bragg passage) [DF].** *Let a helical medium of constant physical pitch $p$, mean index $\bar n$, and birefringence $\Delta n\ll\bar n$ fill a spatially flat FRW universe with expansion rate $H(z)$, and let a photon be observed at wavelength $\lambda_\mathrm{obs}$ from a source at redshift $z_s$, propagating along the local helix axis. Define the* edge *$\lambda_\mathrm{edge}\equiv\bar np$ and the* passage parameter
$$
\Pi(z)\equiv\frac{\pi^2}{2}\left(\frac{\Delta n}{\bar n}\right)^2\frac{c}{p\,H(z)} . \tag{29}
$$
*Then: (i) the photon crosses the co-handed stop band exactly once if $\lambda_\mathrm{edge}\le\lambda_\mathrm{obs}\le\lambda_\mathrm{edge}(1+z_s)$, at the resonance redshift $1+z_r = \lambda_\mathrm{obs}/\lambda_\mathrm{edge}$, and never otherwise; (ii) for a sweep that is linear across the resonance, the co-handed reflectance is*
$$
R(z_r) = 1-\exp[-\Pi(z_r)] \tag{30}
$$
*for every value of $\Pi$, and the counter-handed polarization is transmitted; (iii) the transmitted spectrum of an unpolarized source therefore carries a trough with intensity $1-R/2$ and circular polarization of degree $R/(2-R)$ between the fixed blue edge $\lambda_\mathrm{edge}$ and the red end $\lambda_\mathrm{edge}(1+z_s)$.*

*Proof.* The local wavelength at redshift $z$ is $\lambda_\mathrm{obs}/(1+z)$; it equals $\lambda_\mathrm{edge}$ once, at $z_r$, and lies in the stop band of fractional width $\Delta n/\bar n$ in a neighborhood of $z_r$. Along the ray, the coupled-mode equations for the forward and backward co-handed amplitudes have coupling $g_c = \pi\Delta n/(\bar np)$ and detuning $\delta = 2\pi\bar n(1+z)/\lambda_\mathrm{obs}-2\pi/p$. With $dz/d\ell = -(1+z)H/c$, the detuning sweeps at the rate $|d\delta/d\ell| = (2\pi/p)H(z_r)/c$ at resonance. For a linear sweep, the contra-directional coupled-mode problem is of Landau–Zener form [49; 50], and the reflected fraction is $1-\exp(-\pi g_c^2/|d\delta/d\ell|)$, as for chirped Bragg gratings [51]; substitution gives Eq. (29). The Landau–Zener formula is exact for a linear sweep whatever the value of $\Pi$; Appendix E gives the derivation and the conditions under which the sweep is linear. The counter-handed mode is off-resonant. Part (iii) follows by averaging over the two circular polarizations of an unpolarized source. $\square$

Both parents called (ii) "the adiabatic passage". The passage is adiabatic, in the Landau–Zener sense, only for $\Pi\gtrsim1$, which needs $\Delta n\gtrsim1.9\times10^{-16}$ at $p = 24.6\ \mu$m. At the transparency bound below $\Pi\simeq0.105$, so the passage there is *sudden* and $R\simeq\Pi$; the formula and the bound are unaffected. r2's statement that adiabaticity "holds for $\Delta n\gg(pH/c)$, i.e. for every $\Delta n$ above $10^{-20}$" is wrong on both counts — the threshold scales as $\sqrt{pH/c}$, and $pH_0/c = 1.8\times10^{-31}$ (correction 46).

**Corollary 2 (Corrected transparency bound) [DF].** *Since $H(z)$ is smallest today, $\Pi$ is largest for $z_r\to0$. Requiring $R\le R_\mathrm{max}$ in the co-handed polarization at every resonance redshift gives*
$$
\frac{\Delta n}{\bar n}\le\left[\frac{2\,pH_0}{\pi^2c}\ln\frac{1}{1-R_\mathrm{max}}\right]^{1/2} = 6.2\times10^{-17}\left(\frac{p}{24.6\ \mu\mathrm{m}}\right)^{1/2}\qquad(R_\mathrm{max} = 0.1), \tag{31}
$$
*with $c/H_0 = 1.37\times10^{26}$ m.*

The master's coherent-regime bound $\Delta n\lesssim10^{-31}$ assumed a photon stays in resonance over a gigaparsec. Cosmic redshift forbids that: the resonant path is only $(\Delta n/\bar n)\,c/H$, which for $\Delta n = 10^{-31}$ is about $14\ \mu$m, less than one pitch. The corrected bound is fifteen orders of magnitude weaker and comparable to the incoherent-regime estimate $\Delta n\lesssim10^{-16}$ for an amorphous network, obtained with the same $10\%$ attenuation criterion (Sec. 4.5, Appendix E). The two regimes agree to within an order of magnitude, and the requirement on the doublet–fog matrix element is $\Delta n\lesssim10^{-16}$ in either.

## 4.4 The locking length

**Proposition 9 (Locking suppression of the doublet–fog coupling — Closure K-5, conditional) [DF].** *Under (P1)–(P7), let $\tilde P_\mathrm{fog}$ be a static background texture of the soft condensate with wavenumber $q$ and tilt $\theta_c$. For a transverse doublet wave of wavenumber $k$ on $\tilde P_\mathrm{fog}$, the induced index modulation vanishes identically in the strict locking limit $\mu_c\to\infty$ and, at finite locking stiffness, satisfies*
$$
\Delta n(k) = C_\chi\,\epsilon_\mathrm{vac}\,\sin^2\theta_c\,(k\ell_\mathrm{lock})^4, \qquad \ell_\mathrm{lock}\equiv\sqrt{\frac{\gamma}{4\mu_c}}, \qquad C_\chi = O(1), \tag{32}
$$
*where $\epsilon_\mathrm{vac}$ is the near-BPS lift of the vacuum manifold, bounded above by the window of (P7).*

*Proof.* By Lemma 1 and Theorem 1, $W_4$ and $W_{6+0}$ depend exclusively on $\tilde P$. A pure locked doublet has $\boldsymbol\psi_\perp = 0$, leaving $\tilde P_\mathrm{fog}$ unperturbed at $\mu_c\to\infty$. At finite $\mu_c$ the torque balance of Eq. (10) on B2$\pm$ yields $\boldsymbol\psi_\perp = -(\gamma/4\mu_c)\nabla^2\boldsymbol\varphi_\perp\simeq(k\ell_\mathrm{lock})^2\boldsymbol\varphi_\perp$, and expanding $W$ to quadratic order in $\boldsymbol\psi_\perp$ on the lifted manifold gives $\Delta\gamma/\gamma\sim\epsilon_\mathrm{vac}\sin^2\theta_c|\boldsymbol\psi_\perp/\boldsymbol\varphi_\perp|^2$. $\square$

The master identified $\ell_\mathrm{lock}$ with the structural scale and declared the doublet–fog closure executed with fifty-five decades of margin. The identification is a hypothesis: $\ell_\mathrm{lock}$ is a ratio of moduli, $\ell_s$ is the graph step, and nothing in Eqs. (4)–(8) equates them. Closure K-5 is therefore closed *conditionally* on $\ell_\mathrm{lock}\simeq\ell_s$, and the far-infrared trough measures or bounds $\ell_\mathrm{lock}$ directly.

**Corollary 3 (The trough bounds the locking length) [DW].** *With $\epsilon_\mathrm{vac}\le3\times10^{-3}$, $\sin^2\theta_c = 0.63$, $C_\chi = 1$ and $q = 2\pi/(24.6\ \mu\mathrm{m})$, the transparency bound Eq. (31) applied to Eq. (32) gives*
$$
\ell_\mathrm{lock}\lesssim1.7\ \mathrm{nm}, \tag{33}
$$
*and the archival limit $\Delta n/\bar n<4.2\times10^{-17}$ of Sec. 4.5 gives $\ell_\mathrm{lock}<1.5$ nm. At $\ell_\mathrm{lock} = \ell_\mathrm{P}$, $\Delta n\simeq5\times10^{-121}$ and the trough has depth zero.*

With r2's tilt the same steps gave $1.8$ nm; the corrected tilt lowers the bound by $7\%$. Whether the one-loop Chern–Simons coupling of Sec. 10.2, which is induced by a *time-dependent* tilt rather than a static texture, escapes the same locking quench is not settled by Proposition 9; it is registered as a deliverable of Closure K-26.

## 4.5 Observational signatures of the trough

**Proposition 10 (Fixed edge, dipole, and handedness) [DF].** *For an observer moving with velocity $\mathbf{v}_M$ relative to the fog, the blue edge seen in the direction $\hat{\mathbf n}$ of a source is*
$$
\lambda_\mathrm{edge}(\hat{\mathbf n}) = \bar np\left(1-\frac{\mathbf{v}_M\cdot\hat{\mathbf n}}{c}\right)+O(v_M^2/c^2), \tag{34}
$$
*independent of the source redshift. The red end of the trough scales as $1+z_s$; the depth $R(z_r)$ decreases toward the red end as $H(z_r)$ grows; and the sign of the induced circular polarization is fixed by the vacuum handedness $s$ (Sec. 10). For $v_M = 369.8\ \mathrm{km\,s^{-1}}$ and $p = 24.6\ \mu$m the edge moves by $\pm0.030\ \mu$m between the dipole and anti-dipole directions.*

*Proof.* The resonance nearest the observer ($z_r\to0$) occurs in the local fog. A photon arriving from $\hat{\mathbf n}$ propagates along $-\hat{\mathbf n}$; its wavelength in the fog's frame is $\lambda_\mathrm{obs}(1+\mathbf{v}_M\cdot\hat{\mathbf n}/c)$ to first order, and resonance requires this to equal $\bar np$. The other statements restate Theorem 7. $\square$

The proposition turns the trough into a stacking experiment with three internal controls that no instrumental artifact satisfies at once: the edge wavelength must be the same for every source redshift, the trough length must grow as $1+z_s$, and the edge must shift dipolarly across the sky. Two archives cover the predicted band. JWST MIRI MRS reaches $28\ \mu$m, which contains the cosmologically allowed edge and the trough of sources with $z_s\lesssim0.15$; its resolving power at $25\ \mu$m is enough to resolve the dipole shift after stacking. Spitzer IRS reaches $38\ \mu$m and holds thousands of extragalactic spectra across redshift. At the bound of Eq. (31) the co-handed trough is about $10\%$ deep, the unpolarized depth about $5\%$, and the circular polarization about $5\%$ — a far-infrared analog of the Gunn–Peterson trough, with polarization as a second fingerprint.

Stake S3 is re-graded [RG] accordingly. GUM's core, with $\ell_\mathrm{lock}\simeq\ell_s$, predicts *no* trough. A detected trough with the three controls would retire that identification and measure $\ell_\mathrm{lock}$ through Eq. (32); a null tightens Eq. (33). The master's "non-redshifting $26\ \mu$m feature" is withdrawn: a static line is not what a helical vacuum imprints, and the depth GUM's core predicts for any feature is zero.

**Status.** Two archival tests of the coherent trough have been carried out [9], both fitting the template of Theorem 7 to Spitzer IRS spectra [52]. The first stacks 101 galaxies of the Spitzer–SDSS–GALEX survey [53] against 363 Galactic protostars [54] and finds no edge: $\Delta n/\bar n<5.5\times10^{-17}$ at $95\%$, $0.90$ times the bound, limited by a $2\%$ pattern fixed in the observed frame in the galaxy reductions. The second uses the uniform reductions of the IRS Enhanced Products [55] for 193 galaxies of the IRAS 1.2-Jy survey [56] against 656 stars and 58 nearby galaxies from the same pipeline, which lowers the systematic floor to about $0.9\%$ and gives $4.8\times10^{-17}$ ($0.77\times$) with the weaker control, a rule fixed in advance. Combined, **$\Delta n/\bar n<4.2\times10^{-17}$, $0.68$ times the transparency bound**, for edges at $22.5$–$24.7\ \mu$m (at most $0.74\times$ anywhere in that band). The remaining systematic changes sign with source redshift, which a trough cannot do; it is the galaxies' continuum shape, not a trough. The tested band contains the cosmologically allowed edge; the *a priori* window below $22.5\ \mu$m is untested, and so is the amorphous regime described next.

**The amorphous regime.** The ground state is the blue fog of Flag F7, a double-twist network statistically isotropic on scales much larger than $p$, with orientational correlation length $\ell_o$. The coherent picture of Theorem 7 needs the helix axis to stay coherent over the resonant path, which fails unless $\ell_o$ is very long. A domain inclined at angle $\theta$ to the ray has Bragg wavelength $\bar np\cos\theta\le\bar np$ and a response of fractional width $\sim p/\ell_o$, so the local fog attenuates every $\lambda_\mathrm{obs}\le\bar np$ and more distant fog attenuates redward up to $\bar np(1+z_s)$. The fixed feature at $\bar np$ survives as the red limit of the local band, with its dipole modulation (Proposition 10) and a circular polarization of the same sign but reduced degree: a *step* rather than a trough, of sharpness $\sim p/\ell_o$. The extinction integrated over a Hubble path is $\tau\sim(\Delta n)^2c/(Hp)$, and $\tau\lesssim0.1$ gives $\Delta n\lesssim10^{-16}$, within an order of magnitude of the coherent bound. Which shape applies — trough or step — is set by $\ell_o$, a deliverable of Closure K-5 (Appendix E). r2 dropped this regime although its ground state is the amorphous network; it is restored here (correction 47).

**Corollary 4 (The edge as a pitch tomogram) [DW].** *If the dark-energy soft coordinate is the pitch (Sec. 9.7), the edge at redshift $z$ tracks $p(z)/p(0) = (1+\varepsilon_\nu)/[1+\varepsilon_\nu h(z)^{1-n}]$, with $h\equiv H/H_0$ and $\varepsilon_\nu$ the present lag. The quasar bound $|\Delta\mu_{pe}/\mu_{pe}|<10^{-6}$ at $z\simeq3$ (Proposition 43) then fixes the pitch to $|p(3)/p(0)-1|<10^{-6}/\kappa_\mathrm{far} = 9\times10^{-6}$ for every $n$: the tomogram's predicted image is flat.*

*Proof.* The lag of the relaxation family scales as $h^{1-n}$ (Sec. 9.7), so $p\propto1/(q_\mathrm{eq}+\delta q)$ gives the stated ratio, whose departure from one is $\varepsilon_\nu[h^{1-n}-1]$ to first order. The same combination, times $\kappa_\mathrm{far}$, is $\Delta\mu_{pe}/\mu_{pe}$ in Proposition 43. $\square$

r1 offered the tomogram as a way to read a drifting pitch from the trough; r2 dropped it once the drift was bounded. Read with the bound, it becomes a sharper version of Proposition 10: a trough whose edge moved with source redshift by more than $10^{-5}$ would not be GUM's.

## 4.6 Helix optical activity is dispersive

**Proposition 11 (Any helix-induced optical activity is dispersive) [DF].** *For $\lambda\gg\bar np$, a cholesteric-like structure rotates linear polarization at the de Vries rate [48]*
$$
\frac{d\theta}{d\ell}\simeq-\frac{\pi\,p\,\Delta n^2}{4\bar n^2\lambda^2}\big[1-(\lambda_\mathrm{edge}/\lambda)^2\big]^{-1}\propto\nu^2 . \tag{35}
$$
*Any rotation of CMB polarization attributable to static Bragg dispersion of the helix is therefore frequency-dependent, and the reported frequency-independent cosmic birefringence across $23$–$353$ GHz [57; 58; 59] cannot be produced by it.*

At the bound of Eq. (31) the present-day fog rotates $300$ GHz radiation by about $10^{-5}$ rad per Hubble length and $23$ GHz radiation by about $6\times10^{-8}$ rad, a factor of about $240$ across the CMB bands, where the reported rotation is flat at about $5\times10^{-3}$ rad. Together with achirality (all $O(\chi^2)$ induced doublet operators are parity-even, and helicity-odd effects first appear at $O(\chi^3)(k\ell_s)$), this fixes the static prediction: a static condensate produces no frequency-flat birefringence. Section 10.2 shows that a condensate whose tilt *relaxes* with the dark-energy lag does, and with a definite redshift profile.

## 4.7 Advected structure

A structure at rest in the material frame is swept past a moving laboratory, so static structure becomes a temporal signal. The size of that signal depends on the detector as much as on the structure.

**Proposition 12 (Detector spectrum of an advected field) [DF].** *Let $\Theta(\mathbf{x})$ be a statistically homogeneous field frozen in the material frame, with power spectrum $P_\Theta(\mathbf{k})$ and correlation length $\ell_c$, and let a detector with spatial weight $w(\mathbf{x})$ ($\int w = 1$) move with velocity $\mathbf{v}_M$, recording $S(t) = \int w(\mathbf{x})\Theta(\mathbf{x}+\mathbf{v}_Mt)\,d^3x$. Then*
$$
\langle|\tilde S(\omega)|^2\rangle\propto\int\frac{d^3k}{(2\pi)^3}\,P_\Theta(\mathbf{k})\,|\tilde w(\mathbf{k})|^2\,2\pi\delta(\omega-\mathbf{k}\cdot\mathbf{v}_M). \tag{36}
$$
*For a smooth detector of linear size $L\gg\ell_c$, the signal lies at $|\omega|\lesssim v_M/L$ and its variance is suppressed by $(\ell_c/L)^3$ relative to the local variance of $\Theta$. A detector whose weight has Fourier support at $|\mathbf{k}| = 2\pi/p$ — a pitch-matched array — sees a line at $\omega = 2\pi v_\parallel/p$. For $v_M = 369.8\ \mathrm{km\,s^{-1}}$ and $p = 24.6\ \mu$m that line is at $15.0$ GHz, with an annual frequency modulation set by the Earth's orbital velocity.*

*Proof.* Fourier transform $S(t)$ and use statistical homogeneity, $\langle\tilde\Theta(\mathbf{k})\tilde\Theta^\ast(\mathbf{k}')\rangle = (2\pi)^3\delta^3(\mathbf{k}-\mathbf{k}')P_\Theta(\mathbf{k})$. For $L\gg\ell_c$, $|\tilde w|^2$ restricts $|\mathbf{k}|\lesssim1/L$, where $P_\Theta\simeq P_\Theta(0)\sim\sigma_\Theta^2\ell_c^3$ and the $k$-volume is $\sim L^{-3}$. $\square$

The proposition is a correction as much as a proposal. A smooth microwave cavity does not see pitch-scale structure at $v_M/p$; it sees only the $(\ell_c/L)^3$-suppressed long-wavelength tail. Only a detector patterned at the pitch scale selects the $15$ GHz component. Whether any coupling of the fog to such a detector survives is the same matrix-element question as Closure K-5: by Proposition 9, a pitch-scale coupling of the doublet, and of any detector that reads the fog through it, is suppressed by $(q\ell_\mathrm{lock})^4$. In GUM's core, with $\ell_\mathrm{lock}\simeq\ell_s$, the line therefore has zero amplitude; it is a discovery channel for $\ell_\mathrm{lock}$ otherwise, sharing the pitch with the neutrino mass, the trough edge, and the range of the mirror force (cross-lock X2). r2 dropped the proposition without comment; it is restored with this caveat, and no stake is registered.

# 5. Quantum Mechanics as the Bookkeeping of Local Beables

## 5.1 The kinematic frame: from agitation to the Schrödinger equation

The substrate at finite agitation executes Nelson kinematics with grounded premises: the background noise of stochastic mechanics [4] is supplied by zero-point agitation of the substrate, with diffusion coefficient $\hbar/2M$ fixed by the closure of Sec. 6.4. The osmotic contribution to the energy is the Fisher-information functional, whose variation is the quantum potential [10],
$$
U_Q = \frac{\delta}{\delta\rho}\left[\frac{\hbar^2}{8M}\int\frac{(\nabla\rho)^2}{\rho}\,d^3x\right] = -\frac{\hbar^2}{2M}\frac{\nabla^2\sqrt\rho}{\sqrt\rho}, \tag{37}
$$
and continuity with the Hamilton–Jacobi equation carrying this pressure closes to the Schrödinger equation for $\Psi = \sqrt\rho\,e^{iS/\hbar}$ [3] [DF]. Every hydrodynamic derivation has the same gap, identified by Wallstrom [5]: the equations are equivalent to Schrödinger's only if $\oint\nabla S\cdot d\mathbf{l}\in2\pi\hbar\mathbb{Z}$ around every nodal line, and nothing in the hydrodynamics enforces it; Nelson later conceded that the gap was fatal to his program [6]. In GUM the phase $S/\hbar$ is the isorotation angle of a knot (Sec. 6), a single-valued angle of the texture $\tilde P$ whose multivaluedness is classified by winding, so circulation quantization holds by construction [DF, given the knot identification]. The stiffness that carries the Fisher penalty is the B1 pressure multiplier that keeps the stiff longitudinal sector incompressible around knot cores — the second elliptic problem of Sec. 3.3, sourced by cores rather than by winding.

## 5.2 The tower

Bell demanded that a theory say what its beables are [2]. Pilot-wave theory answers with positions in $\mathbb{R}^3$ guided by a wave function on $\mathbb{R}^{3N}$, and Norsen showed that the $\mathbb{R}^{3N}$ object can be traded for an infinite hierarchy of fields on $\mathbb{R}^3$ [21]. GUM's substrate is a physical realization of that hierarchy: the texture is the primitive ontology [20], and the conditional wave functions and their derivative fields are patterns in it. For $N$ knots with wave function $\Psi(\mathbf{x}_1,\ldots,\mathbf{x}_N,t)$ and actual positions $\mathbf{X}_j(t)$, the conditional wave function of knot $k$ is
$$
\psi_k(\mathbf{x},t)\equiv\Psi(\mathbf{X}_1(t),\ldots,\mathbf{x},\ldots,\mathbf{X}_N(t),t), \tag{38}
$$
and it evolves through the tower of conditional derivative fields on $\mathbb{R}^3$,
$$
F^{(\alpha)}_k(\mathbf{x},t)\equiv\big(\partial^\alpha_{\mathbf{x}_{j\neq k}}\Psi\big)\big\rvert_{\mathbf{x}_j = \mathbf{X}_j(t)},\qquad\lvert\alpha\rvert = 0,1,2,\ldots, \tag{39}
$$
which closes at order zero for product states and at infinite order in general. The tower is hosted by the substrate's fields and updated, in the material frame, at the speed $c_L$ (Sec. 5.8).

**Definition 3 (Depth-$d$ tower).** A depth-$d$ tower retains the fields of Eq. (39) with $\lvert\alpha\rvert\le d$ and sets higher fields to zero.

**Lemma 3 (Depth is rank).** *For two knots and one coordinate direction, the depth-$d$ tower at the actual position $X_2$ encodes the Taylor polynomial of $\Psi(x,x_2)$ in $x_2$ about $X_2$ to order $d$,*
$$
\Psi_{[d]}(x,x_2) = \sum_{\alpha=0}^{d}F^{(\alpha)}(x)\,\frac{(x_2-X_2)^\alpha}{\alpha!}, \tag{40}
$$
*a separable expansion with at most $d+1$ terms, so the truncated state has Schmidt rank at most $d+1$ across the $1|2$ cut. For $N$ knots in three dimensions the bound is $\binom{3(N-1)+d}{d}$.*

*Proof.* Taylor's theorem with $F^{(\alpha)}(x) = \partial^\alpha_{x_2}\Psi(x,X_2)$; each term is a product; the multi-knot count is the number of monomials of degree at most $d$ in $3(N-1)$ variables. $\square$

## 5.3 The Born rule, its residues, and sequential measurements

The Born rule $\rho = \lvert\Psi\rvert^2$ is the endpoint of a sub-quantum $H$-theorem [11; 12], whose rates GUM's agitation accelerates relative to the deterministic pilot-wave limit by a factor $17$–$41$ [CAL, N]. r1 printed two residues at full size. The first, the multi-time statistics that stochastic mechanics must supplement [6], is now closed:

**Proposition 13 (Sequential measurements via tower pointer branching — Closure K-6) [DF].** *Let a knot system $S$ interact sequentially at times $t_1 < t_2$ with macroscopic registers $M_1, M_2$ whose pointer coordinates $\mathbf{Y}_1, \mathbf{Y}_2$ are hosted with the knot positions $\mathbf{X}(t)$ in the tower of Eqs. (38)–(39) on the B1 constraint sector. If each measurement separates the pointer packets by more than the B3 halo correlation length ($\Delta Y > \lambda_\mathrm{halo}$) and $\Delta t = t_2 - t_1 \gg r_{SM}/c_L + \tau_\mathrm{relock}$, then the joint sequential distribution equals the Lüders rule:*
$$
P(m_1, t_1;\, m_2, t_2) = \mathrm{Tr}\big(\Pi_{m_2} U(t_2, t_1)\Pi_{m_1}\rho(t_1)\Pi_{m_1}U^\dagger(t_2, t_1)\big)\left[1 + O\!\left(e^{-\Gamma_H\Delta t},\ \frac{r_{SM}}{c_L\Delta t}\right)\right]. \tag{41}
$$

*Proof.* The guiding field at $t > t_1$ is the conditional wave function Eq. (38) evaluated on the actual pointer trajectory. Once the pointer branches $\Psi = \sum_m c_m\phi_m(\mathbf{x})\chi_m(\mathbf{Y}_1)$ have disjoint supports separated by $\Delta Y\gg\lambda_\mathrm{halo}$, the actual pointer position zeroes out all empty branches in Eq. (38) and in every tower derivative across the B1 constraint channel within the update delay $r_{SM}/c_L$. Simultaneously the sub-quantum $H$-theorem relaxes the conditional density on the occupied branch to $|\phi_{m_1}|^2/\|\phi_{m_1}\|^2$ on the timescale $\Gamma_H^{-1}$, erasing pre-$t_1$ osmotic correlations. $\square$

The proposition closes the residue in form; the relaxation rate $\Gamma_H$ and the order-one coefficients of the two error terms are not derived and are deliverables. The second error term is not decoration: for sequential measurements faster than $r_{SM}/c_L$ the Lüders rule fails by that amount in GUM, which is the bipartite face of the finite-speed nonlocality of Sec. 5.8 (Stake S6).

The second residue stands as r1 printed it, and r2 dropped it without comment. Quantum non-equilibrium, if any relic of it survives, is the one place GUM's single-particle kinematics differs observably from orthodox quantum theory [13]. GUM's faster relaxation predicts a *smaller* residual than the deterministic pilot-wave limit, a discriminator between the two.

## 5.4 Capacity, the fidelity bound, and random-circuit data

**Definition 4 (Schmidt capacity).** The substrate has Schmidt capacity $\chi_\mathrm{max}$ across a spatial bipartition $A|B$ if every state it represents has Schmidt rank at most $\chi_\mathrm{max}$ across $A|B$.

**Theorem 8 (Fidelity bound) [DF].** *Let $|\Psi\rangle = \sum_i\sqrt{\lambda_i}\,|a_i\rangle|b_i\rangle$ with $\lambda_1\ge\lambda_2\ge\cdots$ and $\sum_i\lambda_i = 1$. Then*
$$
\max_{\mathrm{rank}(\Phi)\le\chi}\lvert\langle\Phi|\Psi\rangle\rvert^2 = \sum_{i=1}^{\chi}\lambda_i\equiv F_\chi, \tag{42}
$$
*attained by the normalized Schmidt truncation, and a substrate of capacity $\chi_\mathrm{max}$ prepares no state with fidelity to $|\Psi\rangle$ above $F_{\chi_\mathrm{max}}$.*

*Proof.* With coefficient matrices $M_\Phi,M_\Psi$ in a product basis, von Neumann's trace inequality and Cauchy–Schwarz give $\lvert\mathrm{Tr}(M_\Phi^\dagger M_\Psi)\rvert^2\le\big(\sum_{i\le\chi}\sigma_i(M_\Phi)\sigma_i(M_\Psi)\big)^2\le\sum_{i\le\chi}\sigma_i(M_\Psi)^2$, with $\sigma_i(M_\Psi)^2 = \lambda_i$ and $\sum_i\sigma_i(M_\Phi)^2 = 1$; equality holds at the truncated singular-value decomposition [60; 61]. $\square$

**Corollary 5 (Flat spectra).** *If $\lambda_i\le\Lambda_0/r$ for $i\le r$, then $F_\chi\le\Lambda_0\chi/r$. For a Haar-random state of $2m$ qubits split $m|m$, the Marchenko–Pastur law gives $\lambda_i\le4\cdot2^{-m}$ asymptotically [62; 63], so $F_\chi\le4\chi/2^m$.*

Random-circuit sampling prepares states that approach Haar statistics across every cut, with entanglement growing ballistically to the Page value [62; 64]. The 53-qubit experiment of Ref. [65] measured cross-entropy fidelities up to 14 cycles that agree with a multiplicative digital-error model built from independently measured gate errors, and 56- to 70-qubit experiments on superconducting and trapped-ion platforms find the same agreement [66; 67; 68]. If a coherent preparation error outside the error model enters multiplicatively (Appendix C),
$$
\frac{F^\mathrm{obs}_\mathrm{XEB}}{F^\mathrm{model}_\mathrm{noise}} = 1\pm0.1\text{–}0.2\ \Rightarrow\ F_\mathrm{trunc}\gtrsim0.8,\qquad \chi_\mathrm{max}\gtrsim\frac{F_\mathrm{trunc}\,2^{26}}{4}\approx1.3\times10^{7} \tag{43}
$$
for the 53-qubit register, rising by the corresponding powers of two for the larger registers. GUM's substrate satisfies this: its capacity is set by its degrees of freedom, not by a tower depth of order ten, which would fail Eq. (43) by six orders of magnitude. The role of the bound is to fix the direction of the test: capacity is bounded from below by every successful large entangled computation, and GUM's stakes concern where the bound must stop.

## 5.5 Dimension counting

**Definition 5 (Classical substrate with bounded gain).** A substrate is classical with $N_\mathrm{dof}$ degrees of freedom on a register's support if its instantaneous state is a point $\xi$ of a bounded region $X\subset\mathbb{R}^{N_\mathrm{dof}}$ of diameter $D_X$. It represents the register's state through a map $\mathcal{R}:X\to\mathcal{S}_{n_q} = \mathbb{C}P^{2^{n_q}-1}$ (Fubini–Study metric) with *gain* $L_R$ if $d_\mathrm{FS}(\mathcal{R}(\xi),\mathcal{R}(\xi'))\le L_R\lvert\xi-\xi'\rvert$. Write $M\equiv\ln(3L_RD_X)$.

**Theorem 9 (Dimension counting) [DF].** *If a classical substrate with $N_\mathrm{dof}$ degrees of freedom and gain $L_R$ represents every $n_q$-qubit state to within Fubini–Study distance $\delta$, then*
$$
(2^{n_q+1}-2)\,\ln\frac{1}{\sin\delta}\le N_\mathrm{dof}\,\ln\frac{3L_RD_X}{\delta}, \tag{44}
$$
*hence, for any gain not exponentially large in $2^{n_q}$, $n_q\lesssim\log_2N_\mathrm{dof}+O\big(\log_2\ln(L_RD_X)\big)$.*

*Proof.* $\mathcal{R}(X)$ must be a $\delta$-net of $\mathcal{S}_{n_q}$. A geodesic ball of radius $\delta$ in $\mathbb{C}P^{N}$ ($N = 2^{n_q}-1$) has volume $(\pi^N/N!)\sin^{2N}\delta$, which equals the total volume at $\delta = \pi/2$, so the $\delta$-covering number of $\mathcal{S}_{n_q}$ is at least $\sin^{-2N}\delta$. The $\delta$-covering number of $\mathcal{R}(X)$ is at most that of $X$ at scale $\delta/L_R$, at most $(3L_RD_X/\delta)^{N_\mathrm{dof}}$ [69]. Comparing gives Eq. (44). $\square$

The theorem uses no Schmidt structure; it is parameter counting, and it is the precise form of the objection that a field on $\mathbb{R}^3$ "has no room" for a wave function on $\mathbb{R}^{3N}$. A *quantum* substrate would evade it, but a quantum substrate is not an inverse *Umdeutung* — it is quantum mechanics relocated, and it is not GUM. With $N_\mathrm{dof}$ the number of structural degrees of freedom in a register's support, the theorem is the master's headline: a register of volume $V$ has $n_q\lesssim\log_2(V/\ell_s^3)$ up to the cell count of Definition 7. The theorem is correct, and it is untestable as stated. r1 wrote its left side as $(2^{n_q+1}-2)\ln(c_0/\delta)$ with an unstated constant $c_0 = O(1)$; r2's exact ball volume removes the constant, and since $\sin^2\delta = 1-F$ for Fubini–Study distance $\delta$ and fidelity $F$, Eq. (44) reads directly in fidelity.

**Proposition 14 (The exact cliff of dimension counting) [DF].** *Define $\alpha(n_q)\equiv(2^{n_q+1}-2)/N_\mathrm{dof}$. The largest fidelity to a worst-case state that Eq. (44) allows is*
$$
F_{\max}(n_q) = 1-\exp\!\left[-\frac{2M}{\alpha(n_q)}\right]\big[1+O(\ln\delta/M)\big], \tag{45}
$$
*so that the descent from $F_{\max} = 0.9$ to $F_{\max} = 0.1$ spans*
$$
\Delta n_{90\to10} = \log_2\frac{\ln 0.1}{\ln 0.9} = 4.45\ \text{qubits}, \tag{46}
$$
*independent of $N_\mathrm{dof}$ and of $M$, with midpoint $F_{\max} = \tfrac12$ at $n_{50} = \log_2N_\mathrm{dof} + \log_2(2M/\ln2) - 1$: $3.9$, $7.2$ and $10.5$ qubits above $\log_2N_\mathrm{dof}$ for $M = 10$, $100$ and $1000$.*

*Proof.* With $\sin^2\delta = 1-F$, Eq. (44) reads $-\tfrac12\alpha\ln(1-F)\le M+\ln(1/\delta)$; the logarithmic term is $O(1)$ for $\delta$ between $0.3$ and $\pi/2$ and is absorbed into the stated correction. Solving for $F$ gives Eq. (45); setting $F = 0.9$ and $0.1$ and using $\alpha(n_q) \simeq 2^{n_q+1}/N_\mathrm{dof}$ gives Eq. (46); $F = \tfrac12$ gives $\alpha = 2M/\ln2$. $\square$

The master printed a width "$\approx6$ qubits", obtained as the span from the first qubit above $\log_2N_\mathrm{dof}$ to the 10% point; the 90%–10% width is Eq. (46). Far beyond the midpoint, $F_{\max}\simeq2M/\alpha$ halves with every added qubit, which is r1's statement that the bound "falls by a factor of about two per added qubit". The two statements are the core and the tail of one curve. Dimension counting is nevertheless not what a circuit tests.

## 5.6 Reachable sets, dense storage, and hosting

No experiment prepares *every* state. It prepares the states that its circuits reach.

**Theorem 10 (Reachable-set counting) [DF].** *Let a gate set consist of unitaries with $p$ real parameters each and generators of operator norm at most $h$, and let $\mathcal{S}_{N_g}$ be the set of states $G_{N_g}(\theta_{N_g})\cdots G_1(\theta_1)|0\rangle$ reachable with $N_g$ gates. The map $\Theta = (\theta_1,\ldots,\theta_{N_g})\mapsto|\psi(\Theta)\rangle$ is Lipschitz from $([0,2\pi]^{N_gp},\ell_1)$ with constant $h$. Hence $\mathcal{S}_{N_g}$ has Hausdorff dimension at most $N_gp$ and $\epsilon$-covering number at most $(2\pi hN_gp/\epsilon)^{N_gp}$.*

*Proof.* $\|\partial|\psi\rangle/\partial\theta_k\|\le\|h_k\|\le h$ for every parameter, since each derivative inserts one generator into a product of unitaries. The mean-value inequality gives the Lipschitz bound in $\ell_1$. Covering the parameter cube by cubes of side $\epsilon/(hN_gp)$ gives the covering number. $\square$

**Corollary 6 (History storage evades dimension counting).** *A classical substrate that stores the parameter history $\Theta$ — $N_gp$ real numbers — represents every reachable state exactly. For circuits of polynomial size it therefore needs only polynomially many degrees of freedom, and no experiment with polynomial-size circuits can violate Eq. (44) without a further hypothesis about* how *the substrate stores states.*

The corollary does not rescue a history-storing substrate as a model of GUM. The tower must guide knots *locally* and *in real time* (Definition 3). A history store must instead evaluate exponentially large sums on demand to produce the conditional fields at a given point, which is neither local nor fast. The natural hypothesis for a substrate that keeps quantum books locally is the opposite one.

**Definition 6 (Dense storage).** A substrate *stores densely* if (M1) it is *Markovian*: the hosted state at time $t$ is a function $\mathcal{R}(x_t)$ of the substrate configuration $x_t$ alone, with gain $L_R$ as in Definition 5; and (M2) it is *target-blind*: its evolution applies the prescribed unitaries to the hosted state, and wherever the ideal evolved state is not exactly hostable, the hosting error does not depend on the future of the circuit or on the intended output.

**Theorem 11 (Local density) [DF].** *Under dense storage with $N_\mathrm{eff}$ degrees of freedom and Hilbert-space dimension $D = 2^{n_q}$: (i) if the hosted set contains an open subset of $\mathbb{C}P^{D-1}$, then $N_\mathrm{eff}\ge2^{n_q+1}-2$; (ii) for a Haar-random state $\psi$, with probability at least $1-\delta_p$ the best hosted fidelity obeys*
$$
F_\mathrm{rep}(\psi)\equiv\sup_{x\in X}\lvert\langle\psi|\mathcal{R}(x)\rangle\rvert^2\le4\,\frac{N_\mathrm{eff}\ln(CL_R\sqrt D)+\ln(1/\delta_p)}{D-1}. \tag{47}
$$

*Proof.* (i) An open subset of a manifold has full Hausdorff dimension $2D-2$, and a Lipschitz image of $X$ has dimension at most $N_\mathrm{eff}$ [69]. (ii) Take an $\epsilon_0$-net of the hosted set of size $K\le(CL_R/\epsilon_0)^{N_\mathrm{eff}}$. For a fixed unit vector $\phi$ and Haar-random $\psi$, $\Pr[|\langle\psi|\phi\rangle|^2\ge f] = (1-f)^{D-1}\le e^{-f(D-1)}$. A union bound over the net gives $\max_i\lvert\langle\psi|\phi_i\rangle\rvert^2\le f$ with probability at least $1-\delta_p$ for $f = [\ln K+\ln(1/\delta_p)]/(D-1)$. Every hosted vector lies within $\epsilon_0$ of a net point, so $F_\mathrm{rep}\le(\sqrt f+\epsilon_0)^2$. Choosing $\epsilon_0 = 1/\sqrt D\le\sqrt f$ gives Eq. (47). $\square$

Where the dense-storage hypothesis applies, it says how many degrees of freedom are available. That is a physical question about where the substrate keeps the tower, and GUM states the hypotheses rather than choosing one silently.

**Definition 7 (Hosting hypotheses).** The effective number of degrees of freedom available to an $n_q$-qubit register is one of the following, with $\nu_c = 12$ the real phase-space numbers per structural cell ($\mathbf{u}$, $\tilde Q$ and their rates):

- **(H$_V$)** bulk hosting, $N_\mathrm{eff} = \nu_cV/\ell_s^3$, with $V$ the volume of the region spanned by the register — GUM's default, since tower fields are bulk fields of the substrate;
- **(H$_A$)** cut hosting, $N_\mathrm{eff} = \nu_cA/\ell_s^2$, with $A$ the area of the minimal cut through the register;
- **(H$_R$)** extent hosting, $N_\mathrm{eff} = \nu_cn_q(\ell_q/\ell_s)^3$, with $\ell_q$ the spatial extent of one qubit's carrier.

*Schmidt hosting* is the alternative to dense storage in which the region holds only $\chi_\mathrm{max}\simeq N_\mathrm{eff}$ independent tower fields per cut (Definition 4), with no constraint from Eq. (47). Which hypothesis the tower realizes is posed Closure K-7. r1 counted one degree of freedom per cell; r2's $\nu_c = 12$ adds $\log_2 12 = 3.58$ qubits to every dense-storage cliff.

## 5.7 Mirror circuits and the exact cliff

Random-circuit sampling cannot test Eq. (47) at hundreds of qubits, because its fidelity estimator requires classical simulation of the ideal circuit. Mirror circuits do not [70]: apply a scrambling unitary $U$, then its inverse $U^\dagger$, and measure the probability $P_\mathrm{ret}$ of returning to $|0\rangle^{\otimes n_q}$. The ideal answer is known without simulation.

**Theorem 12 (Mirror-circuit bound) [DF].** *Let $U$ be drawn from an ensemble whose midpoint states $U|0\rangle$ are Haar-typical, and model the device's noise as a global depolarizing channel of fidelity $F_\mathrm{noise}$. Under dense storage,*
$$
\mathbb{E}\,[P_\mathrm{ret}]\le F_\mathrm{noise}\;\mathbb{E}\,[F_\mathrm{rep}]+2^{-n_q}. \tag{48}
$$

*Proof.* By (M1) the substrate holds at the midpoint a hosted state $\phi$ with $|\langle\psi_\mathrm{mid}|\phi\rangle|^2\le F_\mathrm{rep}$. By (M2) the second half applies $U^\dagger$ to $\phi$, giving overlap $|\langle0|U^\dagger|\phi\rangle|^2 = |\langle\psi_\mathrm{mid}|\phi\rangle|^2$ with the target. Later hosting errors are independent of the target, so on average they add at most the overlap of a target-independent state with $|0\rangle$, which is $2^{-n_q}$ averaged over the ensemble. The depolarizing channel multiplies the coherent part by $F_\mathrm{noise}$ and adds a uniform part of weight at most $2^{-n_q}$. $\square$

**Corollary 7 (The cliff and its knobs).** *Combining Eqs. (47) and (48), the normalized return probability $\mathcal{P}\equiv P_\mathrm{ret}/F_\mathrm{noise}$ satisfies $\mathcal{P}\lesssim\min\{1,\ c\,N_\mathrm{eff}\,n_q/2^{n_q}\}$ up to logarithmic factors in $L_R$. Beyond*
$$
n_q^\ast\simeq\log_2N_\mathrm{eff}+\delta n,\qquad0\lesssim\delta n\lesssim\log_2n_q+O(1), \tag{49}
$$
*the bound falls by a factor of two per added qubit, so a 90%–10% descent of the mirror bound spans $\log_29\approx3.2$ qubits, while the every-state bound of Proposition 14 spans $4.45$. The fall is* gate-independent: *once $U$ scrambles, $\mathcal{P}$ depends on $n_q$ and not on depth or gate count, whereas noise-model errors grow with depth. The cliff moves with the hosting knob — by $+10$ qubits per factor $10^3$ in $V$ (H$_V$) or $A$ (H$_A$), or per factor $10$ in $\ell_q$ (H$_R$). Under Schmidt hosting the cliff sits at $n_q^{\ast\ast}\simeq2\log_2N_\mathrm{eff}$ and moves twice as fast.*

**Corollary 8 (GUM's cliff at the gravity-fixed structural scale) [DW].** *With $\ell_s = \ell_\mathrm{P}$ (Sec. 9.6), $\nu_c = 12$ and $M = 100$, the dense-storage midpoint under bulk hosting sits at $n_{50}\approx324$ qubits for a trapped-ion or neutral-atom zone ($V = 10^{-10}\ \mathrm{m^3}$) and $338$ for a superconducting die ($10^{-6}\ \mathrm{m^3}$); at the photon-timing ceiling $\ell_s = 1.5\times10^{-27}$ m (Proposition 16) the same registers cliff at $245$ and $258$. Table 1 gives every hosting hypothesis. With $V$ the Hubble volume, $\log_2(V/\ell_\mathrm{P}^3)\approx609$.*

| Hosting | $N_\mathrm{eff}$ | Range | $\log_2N_\mathrm{eff}$ at $\ell_\mathrm{P}$ | $n_{50}$ at $\ell_\mathrm{P}$ | $\log_2N_\mathrm{eff}$ at $1.5\times10^{-27}$ m | $n_{50}$ at $1.5\times10^{-27}$ m | Knob step |
|---|---|---|---|---|---|---|---|
| H$_V$ (bulk) | $\nu_cV/\ell_s^3$ | $V\in[10^{-10},10^{-6}]\ \mathrm{m^3}$ | $317$–$330$ | $324$–$338$ | $238$–$251$ | $245$–$258$ | $+9.97$ per $10^3\times V$ |
| H$_A$ (cut) | $\nu_cA/\ell_s^2$ | $A\in[10^{-8},10^{-4}]\ \mathrm{m^2}$ | $208$–$221$ | $215$–$229$ | $155$–$169$ | $162$–$176$ | $+9.97$ per $10^3\times A$ |
| H$_R$ (extent) | $\nu_cn_q(\ell_q/\ell_s)^3$ | $\ell_q\in[10^{-8},10^{-4}]$ m, $n_q = 300$ | $279$–$319$ | $286$–$326$ | $199$–$239$ | $207$–$246$ | $+9.97$ per $10\times\ell_q$ |
| Schmidt (bulk) | $\nu_cV/\ell_s^3$ | as H$_V$ | — | $n_q^{\ast\ast}\simeq634$–$661$ | — | $n_q^{\ast\ast}\simeq475$–$502$ | $+19.9$ per $10^3\times V$ |

*Table 1. Dense-storage cliff midpoints ($M = 100$; the midpoint moves by $\pm3$ qubits for $M\in[10,1000]$). The exact 90%–10% width is at most $4.45$ qubits. H$_R$ separates platforms: ions ($\ell_q\sim10^{-8}$ m) cliff about $40$ qubits below transmons ($\ell_q\sim10^{-4}$ m). If the induced-gravity cutoff is $\pi/\ell_s$ rather than $1/\ell_s$ (Sec. 9.6), every entry at $\ell_\mathrm{P}$ is about $5$ qubits lower.*

**Scrambled mirror protocol (Stakes S4 [RG] and S5).** Run mirror circuits with scrambling first halves at fixed depth for $n_q$ from $150$ to $400$. Calibrate $F_\mathrm{noise}$ by cycle benchmarking on sub-registers, where every hosting hypothesis predicts $\mathcal{P} = 1$. Plot $\mathcal{P}(n_q)$ at two or more depths: a dense-storage substrate shows a depth-independent cliff, noise a depth-dependent drift. Then vary the knob — register volume, cut area, or qubit carrier — and measure the shift; the slope identifies the hosting mode. Feasibility requires that the pre-cliff return probability be measurable, $F_\mathrm{noise}\gtrsim e^{-7}$. A log-depth all-to-all scrambler uses about $n_q\log_2n_q$ two-qubit gates, so the two-qubit error must satisfy $\epsilon_2\lesssim2.8\times10^{-3}$ at $n_q = 300$; nearest-neighbor 2D layouts need $\epsilon_2\lesssim1.3\times10^{-3}$. Both are at the best reported two-qubit error rates, though not yet at this register size, and logical qubits sidestep the budget because a scrambled logical state is also a volume-law physical state. The kill is a flat $\mathcal{P}(n_q)$ through $n_q = 350$ in any architecture with verified scrambling midpoints; by Table 1 that retires dense storage under all three hosting hypotheses for $\ell_s\ge\ell_\mathrm{P}$ and $V\le10^{-6}\ \mathrm{m^3}$, leaving only Schmidt hosting or a sub-Planckian structural scale. The master's "verification by peaked circuits" and its headline "$n_{\max}\approx230$–$330$" are replaced by this protocol and Table 1; why Clifford and peaked circuits cannot test dense storage is explained in Appendix C.

## 5.8 Finite-speed nonlocality

Section 3.3 removed $c_L$ from electromagnetism. It remains in the tower. When a knot is measured, the conditional fields of the other knots change, and in GUM that change is a physical update of substrate fields, propagating at the fastest speed the substrate supports. GUM identifies that speed with $c_L$, the one longitudinal speed of the substrate (cross-lock X1).

**Definition 8 ($c_L$-causal model).** A model of quantum correlations is *$c_L$-causal* if there is a frame (the material frame) in which the influence of a measurement event on outcome statistics elsewhere propagates at speed $c_L$. The model reproduces quantum correlations between events that are $c_L$-connected in that frame and must otherwise account for correlations by locally available information alone.

**Proposition 15 (Bipartite timing bound) [DF].** *Let two measurement events be separated by the lab baseline $\mathbf{L}$ ($|\mathbf{L}| = L$) with lab-time mismatch $|\Delta t|\le\delta t$, let the lab move with $\mathbf{v}_M$ relative to the material frame, and let each correlation estimate integrate over time $T_\mathrm{int}$. If Bell-inequality violations persist at every sidereal time, then*
$$
c_L\ge\frac{L}{\delta t+\tfrac12\Omega_\oplus v_\perp L\,T_\mathrm{int}/c^2}, \tag{50}
$$
*with $\Omega_\oplus$ the sidereal rotation rate and $v_\perp$ the component of $\mathbf{v}_M$ perpendicular to the Earth's axis, to leading order in $v_M/c$.*

*Proof.* To first order the material-frame time separation is $\Delta t_M = \Delta t-\mathbf{v}_M\cdot\mathbf{L}/c^2$ and the spatial separation is $L$. The events are $c_L$-disconnected when $|\Delta t_M|<L/c_L$. The term $\mathbf{v}_M\cdot\mathbf{L}(\tau)/c^2$ varies with sidereal time at a rate of at most $\Omega_\oplus v_\perp L/c^2$. Over an integration window the smallest attainable $|\Delta t_M|$ is therefore at most $\delta t+\tfrac12\Omega_\oplus v_\perp LT_\mathrm{int}/c^2$. Persistent violation requires connection throughout, which gives Eq. (50) (Appendix F). $\square$

Experiments of this type by Salart et al. and Yin et al. found no loss of correlation and bounded the speed of any such influence at $\gtrsim10^4c$ for every material frame moving slowly relative to the Earth [27; 28]. GUM therefore has $c_L\gtrsim10^4c$. Bipartite tests cannot exclude finite $c_L$ entirely, because any finite timing resolution leaves a residual window. Multipartite tests can.

**Theorem 13 (Finite-speed dichotomy, after Bancal et al.) [DF].** *For every finite $v>c$ there are configurations of four parties — and, by Barnea et al., already of three — whose measurement events are arranged so that some pairs are $v$-connected and others are not. For these configurations, any $v$-causal model that reproduces the quantum correlations of the $v$-connected pairs either permits superluminal signaling between parties or fails to reproduce the quantum prediction for the multipartite correlations [29; 30].*

GUM is a $c_L$-causal model, so the theorem applies to it without modification, and GUM must choose a horn. Superluminal signaling in a preferred frame is not paradoxical for a substrate with a rest frame, but it would contradict every signaling test to date and would make the material frame operationally detectable in a way nothing has shown. GUM's default horn is therefore the second, **Flag F8 (no signaling)**: in a Bancal–Barnea configuration timed so that the designated pair is $c_L$-disconnected in the material frame, the multipartite correlations fall from the quantum value to the bound respected by $c_L$-causal no-signaling models. Since the material frame is unknown, the test scans the sidereal day; with $c_L = 10^4c$ and a $10$ km baseline the disconnection window is $3.3$ ns, within reach of present entanglement-distribution timing. This is Stake S6. Its horn is fixed by posed Closure K-8, which asks whether the tower's update rule, derived from Eqs. (10), is no-signaling. If it signals, the stake changes sign: GUM then predicts signaling in exactly these configurations. The master confronted $c_L$ with bipartite timing only.

## 5.9 The structural scale and the cone-locking bill

The tower requires a foliation, and the substrate supplies a literal one: its rest frame. Emergent Lorentz invariance must then survive two tests, and GUM prints both.

The first is discreteness. Proposition 2 makes the doublet exactly dispersionless in the continuum description, so discreteness at the structural scale enters only through level-0 corrections, which GUM parametrizes as $\omega^2 = c^2k^2[1+\xi_\gamma(k\ell_s)^2+O((k\ell_s)^4)]$; a generic cubic lattice has $\xi_\gamma = -\tfrac1{12}$.

**Proposition 16 (Photon-timing bound on the structural scale) [DF].** *With this parametrization, the group delay between photons of energies $E_1<E_2$ from a source at redshift $z$ is*
$$
\Delta t = \frac{3\xi_\gamma\ell_s^2}{2(\hbar c)^2}\frac{E_2^2-E_1^2}{H_0}\int_0^z\frac{(1+z')^2\,dz'}{\sqrt{\Omega_m(1+z')^3+\Omega_\Lambda}}, \tag{51}
$$
*the quadratic Lorentz-violation delay of Jacob and Piran with $E_{\mathrm{QG},2} = \hbar c/(\sqrt{\lvert\xi_\gamma\rvert}\,\ell_s)$ [71]. The Fermi-LAT bound $E_{\mathrm{QG},2}\gtrsim1.3\times10^{11}$ GeV [72] gives*
$$
\ell_s\lesssim1.5\times10^{-27}\,\lvert\xi_\gamma\rvert^{-1/2}\ \mathrm{m}. \tag{52}
$$

*Proof.* The group velocity is $v_g = c[1+\tfrac32\xi_\gamma(k\ell_s)^2]$. Integrating the delay over the comoving path with $k\to k(1+z')$ gives Eq. (51); matching to the $n = 2$ form of Ref. [71] identifies $E_{\mathrm{QG},2}$, and $\hbar c = 1.973\times10^{-16}$ GeV m gives Eq. (52). $\square$

The bound replaces the master's assumed range $\ell_s\in[10^{-35},10^{-26}]$ m, whose top decade it excludes outright. A softer argument points the same way: an ordered lattice has Bragg gaps near $\pi\hbar c/\ell_s$, and cosmic rays propagate at $3\times10^{20}$ eV, which suggests $\ell_s\lesssim2\times10^{-27}$ m unless the lattice is amorphous enough to smear its gaps. Section 9.6 then fixes $\ell_s$ from the induced Planck mass at $(0.4$–$1.3)\,\ell_\mathrm{P}$, where the quadratic term is $(k\ell_s)^2\simeq7\times10^{-33}$ at $1$ TeV and Eq. (52) is satisfied by about eight orders of magnitude in $\ell_s$ (r2 printed "twenty-six"; correction 58). GUM registers Eq. (52) as an inverse kill in Stake S1 and states its $\ell_s$-dependent numbers at $\ell_s = \ell_\mathrm{P}$ throughout.

The second test is universality across sectors. Proposition 2 fixes the doublet's own cone exactly, but the matter cone $c_\psi$, the gravitational cone, and the longitudinal speed $c_L$ are distinct moduli. GUM's cone-locking flow,
$$
\frac{d\delta_c}{d\ell} = -\frac{g_c^2}{\bar c^2}\,\delta_c\ \Rightarrow\ \delta_c(E) = \frac{\delta_\mathrm{UV}}{1+(g_c^2/\bar c^2)\ln(\Lambda_\mathrm{UV}/E)}, \tag{53}
$$
is a real mechanism with laboratory analogs in spinor condensates and in the Fermi-velocity running of graphene [CAL, N]. A logarithm from the structural scale to the eV yields at most a factor of $10$–$10^2$, however, whereas cone universality is required at $10^{-15}$–$10^{-20}$ [36; 37]. Generic Lorentz-violating ultraviolet completions push $O(1)$ violations into the infrared through loops unless a symmetry forbids them. This is the heaviest bill in GUM, and it stays at the top of the kill list. The present revision lightens it in one place and relocates it in another. The doublet no longer needs the flow, because the cone condition makes it exact. The matter–light difference $c_\psi-c$ is a constraint on the grains' radius of gyration (Sec. 2.3), met automatically for $\ell_g\sim\ell_s$ at the gravity-fixed scale. The one deliberate cone mismatch, $c_L\gg c$, has been moved by Theorem 6 out of electromagnetism and into the tower, where Eq. (50) and Theorem 13 are its tests. The master's claim that a single-carrier bond geometry discharges $c_\mathrm{GW} = c$ is withdrawn in Sec. 9.6.

# 6. The Isorotating Knot and the Closure of $\hbar$

## 6.1 Mass as forbidden frequency

Floquet–Bloch analysis of the relative-rotation branch on the periodic-on-average lattice yields bands with gaps. Near the band edge $\omega_0$ of Eq. (13),
$$
\omega^2 = \omega_0^2 + c_\psi^2k^2 + O(k^4\ell_s^2): \qquad E^2 = (Mc_\psi^2)^2 + (pc_\psi)^2, \quad M \equiv \hbar\omega_0/c_\psi^2, \tag{54}
$$
with $c_\psi$ the matter cone of Eq. (13). Mass is forbidden frequency [DF]. The lattice's own Bragg gaps sit at $\hbar\Omega\sim\pi\hbar c/\ell_s$, above $4\times10^{20}$ eV even at the photon-timing ceiling and near $4\times10^{28}$ eV at $\ell_s\simeq\ell_\mathrm{P}$, far above every particle mass, so all particle masses are potential-sector physics. The lattice supplies ultraviolet structure and radiative protection, never species enumeration.

A particle is a knot: a localized texture of $\tilde P$ with integer degree $K$, isorotating at a clock frequency *inside* the gap,
$$
\tilde P(\mathbf{x},t) = e^{i\omega t\sigma_3/2}\,\tilde p(\mathbf{x})\,e^{-i\omega t\sigma_3/2},\qquad\omega = \kappa\,\omega_0,\quad0<\kappa<1 . \tag{55}
$$
Because $\omega<\omega_0$, the knot cannot radiate into the relative-rotation branch; because the locked doublet is achiral at tree level (Sec. 2.4), it does not radiate into light at linear order; and because its degree is conserved (Lemma 5), it cannot unwind. A knot is stable for the reason a bound state below threshold is stable: its frequency is forbidden to every channel that could carry its energy away. A moving knot is the boosted isorotating solution. To the extent that the relative-rotation sector is Lorentz covariant with cone $c_\psi\simeq c$, its phase in the lab frame is a de Broglie wave with $\lambda = h/p$, its group velocity is the particle velocity, and its clock slows as special relativity demands. The cross-sector universality this requires is part of the cone-locking bill of Sec. 5.9.

The Bogomolny structure supplies the masses themselves. For vacuum boundary data,
$$
E_{6+0} = \int\tfrac12\big(\Lambda b_P\mp\sqrt{2\mathcal V}\big)^2\pm\Lambda\int b_P\sqrt{2\mathcal V}\ \ge\ \Lambda\big\langle\sqrt{2\mathcal V}\big\rangle_{S^3}\lvert K\rvert\equiv C_6\lvert K\rvert, \tag{56}
$$
by target-space localization ($b_P\,d^3x$ pulls back the $S^3$ volume form at degree $K$), with saturation iff $\Lambda b_P = \mathrm{sgn}(K)\sqrt{2\mathcal V}$ pointwise [16; 17] [DF]. At $c_2 = 0$ the Haar average evaluates in closed form, with $\sqrt{2\mathcal V} = 2\tilde m_V\sin(\chi/2)$ and measure $(2/\pi)\sin^2\chi\,d\chi$,
$$
C_6 = \Lambda\,\frac{2}{\pi}\int_0^\pi2\tilde m_V\sin\tfrac\chi2\,\sin^2\chi\,d\chi = \frac{64}{15\pi}\,\Lambda\tilde m_V, \tag{57}
$$
and the saturating hedgehog integrates, in the volume coordinate $r^3/3$, to the compacton $f_0(r) = 2\arccos(r/R_\ast)$ with
$$
R_\ast = \left(\frac{2\Lambda}{\pi^2\tilde m_V}\right)^{1/3}, \tag{58}
$$
whose energy is exactly $C_6$ (Appendix H). Two structural corollaries are used later. SDiff degeneracy makes masses exactly additive at $\epsilon = 0$. And the on-shell pressure $P = \tfrac12\Lambda^2b_P^2-\mathcal V$ vanishes pointwise, so knot matter is dust — the equation of state Sec. 9 uses. The species mass law is multiplicative,
$$
M_kc^2\propto\hat e_k\,\Lambda\tilde m_{V,k}\ \Rightarrow\ \frac{M_k}{M_j} = \frac{\hat e_k\tilde m_{V,k}}{\hat e_j\tilde m_{V,j}}, \tag{59}
$$
which is the structure the flavor generator and the Higgs factorization theorem of Sec. 8 require.

## 6.2 The two closure conditions

Two conditions close the isorotating knot, with the same $\hbar$:
$$
\text{(C-spin)}\quad L = \mathbb{I}\omega = j\hbar,\qquad\qquad\text{(C-clock)}\quad E_\mathrm{tot} = \hbar\omega, \tag{60}
$$
where $\mathbb{I}$ is the knot's moment of inertia and $j$ its rotor number. (C-clock) is de Broglie's internal clock read as an identity of one physical angle observed twice: the quantum phase of Sec. 5.1 is a texture angle, and for the isorotating knot that angle is the internal rotation.

**Lemma 4 (The quarter is kinematic).** *For any object with $E_\mathrm{rot} = \tfrac12\mathbb{I}\omega^2 = \tfrac12L\omega$ satisfying Eq. (60),*
$$
\frac{E_\mathrm{rot}}{E_\mathrm{tot}} = \frac j2, \tag{61}
$$
*independent of profile, shape, stabilizing terms, or the value of $\hbar$.*

*Proof.* $E_\mathrm{rot} = \tfrac12L\omega = \tfrac12(j\hbar)(E_\mathrm{tot}/\hbar)$. $\square$

GUM's "exactly 25%" is $j = \tfrac12$ substituted into Eq. (61). A bench that reads the fraction therefore does not test a profile integral: a valid bench object satisfying both closure conditions with rigid-rotor energetics *must* read $j/2$. What a bench tests is whether such objects exist in a Cosserat system, and what their $j$ is. The lemma is counted as kinematics: Stake S7 tests the validity of a bench object, not GUM.

## 6.3 Spin selection and the spin-closure flag

Let the field energy under a dilation $V$ of the profile scale as $\tfrac12\hat e_0(V^{-a}+V^{a})$ — the two-term Derrick structure of a pair of terms scaling oppositely — and the rotational energy at fixed $L$ as $KV^{-b}$, with $K = j^2\mathfrak{c}^2/(2\mathfrak{i}_0g)$ in units of $\Lambda\tilde m_V$, so that the moment of inertia scales as $\mathbb{I}\propto V^b$.

**Theorem 14 (Spin selection in the $(1,1)$ Routhian) [DF].** *For $(a,b) = (1,1)$, define $w\equiv\mathfrak{c}^2/(\hat e_0\mathfrak{i}_0g)$. Stationarity in $V$ and (C-clock) give*
$$
w\,j(1-j) = 1,\qquad V^2 = \frac{1}{1-j},\qquad\frac{E_\mathrm{rot}}{E} = \frac j2 ; \tag{62}
$$
*solutions exist only for $0<j<1$, and among half-integers only $j = \tfrac12$, with $V = \sqrt2$ and $w = 4$.*

*Proof.* Stationarity gives $\tfrac12\hat e_0(1-V^{-2}) = KV^{-2}$, i.e. $V^2-1 = j^2w$. By Lemma 4, $E_\mathrm{field} = E_\mathrm{rot}(2-j)/j$, i.e. $V^2+1 = j(2-j)w$. Subtracting gives $2 = 2wj(1-j)$; then $V^2 = 1+j/(1-j) = 1/(1-j)$, positive iff $j<1$. $j = 1$ is the pole at which the knot tears itself apart, and $j = \tfrac32$ gives $V^2<0$. $\square$

**Proposition 17 (The window depends on the stabilizing pair) [DF].** *For general $(a,b)$, stationarity and (C-clock) are jointly solvable iff*
$$
0<j<\frac{2a}{a+b},\qquad\text{with}\qquad a\tanh(a\ln V) = \frac{bj}{2-j}\quad\text{and}\quad\frac{E_\mathrm{rot}}{E} = \frac j2 . \tag{63}
$$

*Proof.* Stationarity: $\tfrac a2\hat e_0(V^{a}-V^{-a}) = bKV^{-b}$. Clock: $\tfrac12\hat e_0(V^{-a}+V^{a}) = \frac{2-j}{j}KV^{-b}$. Dividing gives the displayed relation; since $\lvert\tanh\rvert<1$ and $j>0$, solvability is $bj<a(2-j)$. $\square$

**Flag F9 (Spin closure).** GUM commits, as a flagged constitutive choice, to the $(1,1)$ closure for the rotating sector. The commitment has two halves, each with an alternative that the window of Eq. (63) prices:

- *The field-energy pair ($a = 1$).* The centrifugal response is governed by the quadratic–quartic pair, while the static mass is governed by the sextic–potential pair, whose energies scale as $V^{-3}$ and $V^{3}$. If that pair governed the isorotating closure as well, then $(a,b) = (3,1)$, the window would be $j<\tfrac32$, and $j = 1$ would be admissible: spin $\tfrac12$ would become a permission rather than a prediction (r1's reading).
- *The carrier of the spin inertia ($b = 1$).* Inertia carried by the quadratic terms — the micro-inertia $J$ of Eq. (4) — scales with the volume of the texture, $\mathbb{I}\propto V^3$, which gives $(1,3)$, the window $j<\tfrac12$, and *excludes* the electron's spin; $b = 1$ is the statement that the knot's spin inertia is carried by the quartic term (r2's reading).

The bench can tell these apart through the dilation law $V(j)$. At $j = \tfrac12$, Eq. (63) gives $V = \sqrt2$ for $(1,1)$, $V = \sqrt5\approx2.24$ for $(1,2)$ and $V\approx1.04$ for $(3,1)$, and no solution exists for $(1,3)$. r2 printed $1.24$ for the $(1,2)$ case; Eq. (63) gives $\tanh(\ln V) = 2/3$, so $V^2 = 5$ (correction 45). A bench (Stake S8) that realizes a stable isorotating knot with $j = 1$ in a system of GUM's class, or that reads a dilation law $V(j)$ inconsistent with $(1,1)$, retires the flag. Under the flag three corollaries hold: no elementary massive species of spin $0$ or $1$ exists, so $W^\pm$, $Z$, and $h$ are collective (Sec. 8.3); $j = 0$ has no rotor, hence no clock and no de Broglie sector, so no knot-elementary scalar exists; and an elementary spin-$\tfrac32$ particle would falsify the closure.

## 6.4 Exchange statistics, $\hbar = \mathfrak{c}\Lambda\sqrt J$, the normalization audit, and the bench protocol

Fermionic statistics for identical dressed knots rest on the topology of the stratified configuration space. The unstratified core has $\pi_4(S^3) = \mathbb{Z}_2$, and the stratified completion gives
$$
\pi_1(\mathcal{C}_\mathrm{strat}) = \mathbb{Z}_2\times A/\langle2a_\mathrm{rot}\rangle, \tag{64}
$$
so the rotation class survives with order exactly two and fermionic characters exist at all odd winding [DF]. The exchange–rotation correlation is forced, $\chi_\mathrm{exch} = \chi(\sigma)\chi_\mathrm{rot}$, and the fermionic value $-1$ is the closure-selected sector — consistent, not forced, in the same grading as the Finkelstein–Rubinstein construction [73]. One mechanism, isorotation, supplies clock, spin, gyrovector, and statistics sign: one clock period gives $e^{i\pi\sigma_3} = -\mathbb{1}$, and the identity returns only at $4\pi$.

Write the knot's energy, moment of inertia, and clock frequency in substrate units as $E = \hat e\,\Lambda\tilde m_V$, $\mathbb{I} = \mathfrak{i}\,\Lambda J/\tilde m_V$, and $\omega = w_u\tilde m_V/\sqrt J$. (C-clock) gives $\hbar = (\hat e/w_u)\Lambda\sqrt J$, and (C-spin) at $j = \tfrac12$ gives $w_u^2 = \hat e/2\mathfrak{i}$. Hence, for any closure,
$$
\hbar = \mathfrak{c}\,\Lambda\sqrt J,\qquad\mathfrak{c} = \sqrt{2\hat e_\mathrm{tot}\,\mathfrak{i}_\mathrm{tot}},\qquad w_u^2 = \frac{\hat e_\mathrm{tot}}{2\mathfrak{i}_\mathrm{tot}}\quad[\mathrm{DF}]. \tag{65}
$$

**Proposition 18 (One relation among three imports) [DF].** *The closure yields $\hbar_\mathrm{dyn} = \mathfrak{c}\Lambda\sqrt J$ with $\mathfrak{c}$ a pure number, and the identity of clocks $\hbar_\mathrm{stat} = \hbar_\mathrm{dyn}$: a Nelson-stationary state of energy $E$ has phase frequency $E/\hbar_\mathrm{stat}$, the isorotating knot has mechanical frequency fixed by (C-spin), and the joint system is solvable at $j = \tfrac12$ iff the two constants coincide. Given the unknown constants $(\Lambda,J)$ and the agitation invariant $\hbar_\mathrm{stat}$, this reduces three unknowns to two. Its falsifiable content is $\mathfrak{c}$, which is dimensionless, profile-determined, and — by Proposition 17 — dependent on Flag F9.*

The condition is dynamically enforced. Displacing $\mathfrak{c} = \mathfrak{c}^\ast(1+\delta)$ gives clock-mismatch exponents $d\ln\omega_\mathrm{mech}/d\ln\mathfrak{c} = +\tfrac12$ and $d\ln\omega_\mathrm{phase}/d\ln\mathfrak{c} = -\tfrac12$ (the latter exact by the envelope theorem). The beat radiates into the gapless channels with an Adler locking torque $\propto-\sin\Delta\phi$, so each knot is a phase-locked self-oscillator of the substrate, with relocking time $\tau\sim10^{-12}$ s at the electron clock [CAL, N]. Planck's constant is epoch-constant dynamically, not by decree. It is *constrained*, not derived: the closure fixes one relation among three imports, and the number GUM can be killed on is $\mathfrak{c}$.

The values the master printed for the saturated closure, which r1 and r2 carried, are $\mathfrak{c} = 64\sqrt2/(9\pi)\simeq3.2011$, $\kappa\equiv\omega/\omega_0 = 1/\sqrt2$, and the bench discriminator $\kappa^2g_\mathrm{tot} = 35/24$ against the halo-free $7/8$ [N], with binding depth $1-\kappa\simeq29.3\%$, support ratio $3/2$, and the rigorous saturated bound $\mathfrak{c}\ge2\sqrt2$, which excludes any deep-BPS endpoint below it. The mass printed in Proposition 23, $M = (64/9\pi)\Lambda\tilde m_V$, is $5/3$ of the compacton energy $C_6$; the factor is the halo's share of the closure, the same $5/3$ that appears as $(35/24)/(7/8)$ in the bench discriminator, and $\hat e_\mathrm{tot}$ in $\mathfrak{c}$ is the total, core plus halo. All of these were computed with the master's kinetic coefficient, which enters every inertia integral, and with $\tilde m = \tilde m_V$. The part of the audit that needs no unpublished integral can be carried out here.

**Proposition 19 (The normalization audit, partial — Closure K-3) [DF for the integrals; at fixed $\hat e_\mathrm{tot}$ for the rest].** *In the normalization of Eq. (4):*

*(i) The isorotating BPS compacton $f_0 = 2\arccos(r/R_\ast)$ has moment of inertia $\mathbb{I}_0 = \mathfrak{i}_0\Lambda J/\tilde m_V$ with $\mathfrak{i}_0 = 512/(105\pi)\simeq1.552$; with the master's coefficient it is half, $256/(105\pi)$.*

*(ii) In the $(1,1)$ Routhian at the closure solution ($V = \sqrt2$), $\hat e_\mathrm{tot} = \sqrt2\hat e_0$ and $\mathfrak{i}_\mathrm{tot} = \sqrt2g\mathfrak{i}_0$, so the dilation cancels in the bench quantity $\kappa^2g_\mathrm{tot} = \hat e_0/(2\mathfrak{i}_0)$. With $\hat e_0 = C_6/\Lambda\tilde m_V = 64/(15\pi)$ and the master's coefficient this is exactly $7/8$, the inherited halo-free value; in the corrected normalization it is $7/16$, the halo value becomes $35/48$, and the normalization-free content of the bench discriminator is the ratio $5/3$.*

*(iii) The inherited $\mathfrak{c} = 64\sqrt2/(9\pi)$ and $\kappa = 1/\sqrt2$ correspond, through Eq. (65), to $\hat e_\mathrm{tot} = \mathfrak{i}_\mathrm{tot} = 64/(9\pi) = \tfrac53C_6/\Lambda\tilde m_V$ with the master's coefficient. Since the correction doubles every inertia integral, at fixed $\hat e_\mathrm{tot}$ it gives $w_u^2 = \tfrac14$ and $\mathfrak{c} = 128/(9\pi)\simeq4.527$; a lower bound that scales with the inertia, like the inherited $2\sqrt2$, becomes $4$.*

*(iv) With the gap of Eq. (9), $\kappa = w_u\tilde m_V/\tilde m$, so $\kappa^2 = \tilde m_V^2/(16\mu_c+\tilde m_V^2)$. The closure value $\kappa = 1/\sqrt2$ therefore requires $\mu_c = \tilde m_V^2/16$; the inherited ratio $\mu_c = 3\tilde m_V^2/16$ gives $\kappa = \tfrac12$.*

*Proof.* (i) For $\tilde P(t) = e^{i\omega t\sigma_3/2}\tilde p\,e^{-i\omega t\sigma_3/2}$ the kinetic trace is $\mathrm{Tr}[(\tilde P^{-1}\partial_t\tilde P)^\dagger(\tilde P^{-1}\partial_t\tilde P)] = 2\omega^2(\pi_1^2+\pi_2^2)$; with the coefficient $J$ of Eq. (4) and the hedgehog angular average, $\mathbb{I} = (32\pi/3)J\int_0^{R_\ast}r^2\sin^2f_0\,dr$, and Eq. (58) gives $(512/105\pi)\Lambda J/\tilde m_V$; a direct three-dimensional integral of the full trace agrees to $6\times10^{-5}$. (ii) Substitute the scaling of field energy and inertia at $V = \sqrt2$ into $w_u^2 = \hat e_\mathrm{tot}/2\mathfrak{i}_\mathrm{tot}$. (iii) Invert Eq. (65) at the inherited values, then double $\mathfrak{i}_\mathrm{tot}$. (iv) $\kappa = \omega/\omega_0 = (w_u\tilde m_V/\sqrt J)/(\tilde m/\sqrt J)$ with $w_u^2 = \tfrac14$ and $\tilde m^2 = 4\mu_c+\tfrac14\tilde m_V^2$. $\square$

The proposition forces a choice that both parents left unmade. The two branches differ in observable ways:

| | Branch A: $\mu_c = \tilde m_V^2/16$ ($\tilde m = \tilde m_V/\sqrt2$) | Branch B: $\mu_c = 3\tilde m_V^2/16$ ($\tilde m = \tilde m_V$, the inherited ratio) |
|---|---|---|
| $\kappa$ | $1/\sqrt2$ | $\tfrac12$ |
| Band edge $Mc^2/\kappa$ | $\sqrt2Mc^2$, $722.7$ keV for the electron | $2Mc^2$, exactly the pair threshold |
| Positronium line (Sec. 7.3) | $255.5$ keV if alternative (b) holds | none: $m_X = 2m_e$ closes alternative (b) |
| Halo factor $\kappa/\sqrt{1-\kappa^2}$ | $1$ | $1/\sqrt3$ |
| $m_3$ at fixed integrals | $0.047$ eV | $0.081$ eV, $\Sigma m_\nu\simeq0.21$ eV, $p/\zeta_\nu\simeq15.4\ \mu$m |
| Verdict | every stake as printed survives | the neutrino stake and the pitch window break; DESI excludes $\Sigma m_\nu = 0.21$ eV even with evolving dark energy |

*Table 2. The two branches of the normalization audit at fixed integrals.*

GUM adopts Branch A: the ratio $\mu_c/\tilde m_V^2 = 1/16$ is then fixed by the closure value of $\kappa$, not a further modulus, and the bench values are $35/48$ against $7/16$. r1 and r2 printed $3\tilde m_V^2/16$, the value that keeps the master's identification $\tilde m = \tilde m_V$ with the master's coefficient (correction 43). "At fixed integrals" is the inherited convention, as in erratum E1: the frustration integrals are halo integrals and could move when the halo changes, and the rigorous bound on $\mathfrak{c}$ must be re-derived in the corrected normalization. Both remain deliverables of Closure K-3.

**Proposition 20 (Validity conditions for a bench) [DF].** *A bench object tests Eq. (62) and the discriminator $\kappa^2g_\mathrm{tot}$ only if, with pre-registered tolerances: (i) it is a localized texture of a chiral micropolar system with integer degree; (ii) it isorotates with measured $\omega$; (iii) its Adler locking to a drive at $\omega$ is demonstrated, realizing (C-clock); (iv) its damping satisfies $\Gamma_\mathrm{damp}\ll\omega$; and (v) its rotational and total energies are measured independently. Under (i)–(v), $E_\mathrm{rot}/E = j/2$ is an identity, the measured quantities are $j$ and the dilation law $V(j)$, which identifies $(a,b)$, and $\kappa^2g_\mathrm{tot}$ is a genuine profile test.*

Platforms exist. Three-dimensional chiral mechanical metamaterials are laboratory Cosserat systems with twist–compression coupling [74; 75]; chiral nematics host solitons with internal rotation, heliknotons and knotted fields among them [76; 77]; and chiral magnets host heliknotons and hopfion rings [78; 79]. The Spreeuw wall stands: no Bell content is claimable from any bench. The benches weigh closure mathematics, and a bench falsification kills a derivation as mathematics with no cosmological excuse available. Stakes S7, S9, S10, S8 and S11 are the bench program; none of them bears on whether the vacuum is a substrate of this kind, and every one bears on whether GUM's mathematics is what GUM says it is.

## 6.5 The clock is physical: two consequences

If the de Broglie clock is a rotation of the substrate, it has consequences that a bookkeeping phase cannot have. The master registered the first as a fingerprint of $\mathfrak{c}$-non-equilibrium; r1 stated it as a proposition and added the second; r2 added a second channel to the first.

**Proposition 21 (The $\alpha$–$\mu$ discriminant and its two channels) [DF; channel (ii) given the [N] bridge coefficients].** *(i) Suppose the global stiffness of the topological sector drifts in time or space, $\Lambda\to\Lambda(1+\delta_\Lambda)$ and $J\to J(1+\delta_J)$, with the frustration integrals, the moduli ratios that fix $\tilde m_{V,i}/\tilde m_{V,j}$, and the defect self-coupling $e^2/\varepsilon^\ast$ held fixed. Then*
$$
\Delta\ln\alpha = -\left(\delta_\Lambda+\tfrac12\delta_J\right),\qquad \Delta\ln\mu_{pe} = 0,\qquad R_{\mu\alpha}\equiv\frac{\Delta\ln\mu_{pe}}{\Delta\ln\alpha} = 0, \tag{66}
$$
*where $\mu_{pe} = m_p/m_e$; the same holds for an epoch of $\mathfrak{c}$-non-equilibrium, since mass ratios are $\hat e$-ratios and are $\mathfrak{c}$-blind. (ii) Suppose instead the pitch drifts, $q\to q(1+\delta_q)$, with the stiffnesses fixed. Then $\Delta\ln\alpha = 0$ and, through the far-field logarithm of the flavor bridge (Sec. 8.2),*
$$
\Delta\ln m_e = \kappa_\mathrm{far}\delta_q,\qquad\Delta\ln m_\mu = \tfrac12\kappa_\mathrm{far}\delta_q,\qquad\Delta\ln m_\tau = 0,\qquad\Delta\ln\mu_{pe} = -\kappa_\mathrm{far}\delta_q, \tag{67}
$$
*up to the quark sector's own response.*

*Proof.* (i) By Eq. (65), $\hbar\propto\Lambda\sqrt J$ at fixed $\mathfrak{c}$, and $\alpha = e^2/(4\pi\varepsilon^\ast\hbar c)$. By Eq. (59), every rest energy is $\hat e_i\Lambda\tilde m_{V,i}$ with $\hat e_i$ and $\tilde m_{V,i}/\tilde m_{V,j}$ fixed, so the common factor $\Lambda$ cancels in every mass ratio. (ii) $\hbar$ does not involve $q$; the family law Eq. (72) with $A(q) = A_\mathrm{halo}+\kappa_\mathrm{far}\ln(1/q\lambda_{\mathrm{halo},\tau})$ gives $\Sigma(2) = 2A+B$ and $\Sigma(1) = A$, hence the stated logarithmic derivatives. $\square$

Grand-unified scenarios tie the two drifts together, with $\lvert R_{\mu\alpha}\rvert\approx30$–$40$, because $\Lambda_\mathrm{QCD}$ depends exponentially on the unified coupling [80; 81]. In GUM the ratio is not fixed: a stiffness drift moves $\alpha$ and not $\mu_{pe}$, a pitch drift moves $\mu_{pe}$ and not $\alpha$. Present bounds are null on both sides. Optical clocks limit $\dot\alpha/\alpha$ at the $10^{-18}\ \mathrm{yr^{-1}}$ level [82]; methanol absorption at $z = 0.89$ limits $\Delta\mu_{pe}/\mu_{pe}$ below $10^{-7}$ [83], and molecular-hydrogen spectroscopy of quasars below $10^{-6}$ at $z\simeq2$–$4$ [84]; high-resolution quasar spectroscopy is consistent with $\Delta\alpha = 0$ at the $10^{-6}$ level [85], in tension with an earlier dipole claim [86]. The second channel is not free in GUM, because the pitch *does* drift: it is the dark-energy lag of Sec. 9.7, and Proposition 43 turns the quasar bound into a bound on that lag. The discriminant is Stake S12: a detected drift of $\alpha$ with $\lvert\Delta\mu_{pe}/\mu_{pe}\rvert\ll\lvert\Delta\alpha/\alpha\rvert$ is channel (i); a detected drift of $\mu_{pe}$ with no drift of $\alpha$ is channel (ii) and must match the redshift profile of Proposition 43; a joint detection with $\lvert R_{\mu\alpha}\rvert$ of order $30$ retires the physical-clock reading at its present grade.

**Proposition 22 (Channeling resonance of a physical clock) [DF].** *Let a particle of rest energy $Mc^2$ carry a physical internal rotation of rest-frame angular frequency $\omega_c = Mc^2/\hbar$, and let it traverse a crystal along an atomic row of spacing $\ell_\mathrm{row}$ with speed $v$. The row potential acts in the rest frame at the frequencies $2\pi n_h\gamma_vv/\ell_\mathrm{row}$, $n_h = 1,2,\ldots$, and resonance with the clock occurs at the momenta*
$$
p^\mathrm{res}_{n_h} = \frac{p^\mathrm{res}_1}{n_h},\qquad p^\mathrm{res}_1c = \frac{(Mc^2)^2\,\ell_\mathrm{row}}{hc}. \tag{68}
$$
*For electrons: Si$\langle110\rangle$ ($\ell_\mathrm{row} = 3.840$ Å) $80.87$ MeV/$c$; Ge$\langle110\rangle$ ($4.001$ Å) $84.26$ MeV/$c$; diamond$\langle110\rangle$ ($2.522$ Å) $53.12$ MeV/$c$.*

*Proof.* In the rest frame the row spacing is $\ell_\mathrm{row}/\gamma_v$ and the rows pass at speed $v$, giving fundamental frequency $2\pi\gamma_vv/\ell_\mathrm{row}$. Setting $n_h$ times this equal to $\omega_c$ gives $\gamma_vv = Mc^2\ell_\mathrm{row}/(n_hh)$, i.e. $p = M\gamma_vv$ as stated. The numbers use $(m_ec^2)^2 = 0.261120\ \mathrm{MeV^2}$ and $hc = 1.239842\times10^{-12}$ MeV m. $\square$

Standard quantum mechanics predicts no resonance tied to $Mc^2/\hbar$: the Compton phase is a global phase and cannot couple to a row potential. A zitterbewegung clock at $2Mc^2/\hbar$ would place the resonance at twice the momentum [87]. Catillon et al. reported a transmission anomaly near the Si$\langle110\rangle$ value [88] (not independently replicated), and Lan et al. showed that the Compton frequency can be referenced to a clock through atom interferometry, which does not by itself imply a local oscillation [89]. The proposition sharpens the test into Stake S13. The fundamental must appear in Si and Ge at momenta in the ratio $4.001/3.840$ and in diamond at $53$ MeV/$c$, with sub-harmonics at $p_1/n_h$. The kill is absence at all three momenta at a sensitivity that would have seen the reported Si anomaly. A positive result at $2p_1$ instead would favor a zitterbewegung clock over GUM's.

# 7. The Electron: Core, Halo, and the Band Edge

## 7.1 Degree conservation and pair creation

**Lemma 5 (Charge transfer and protection) [DF].** *Along any continuous history with $\mathbf{u}(t)\to0$ at spatial infinity and $\det\mathsf F(t,\mathbf{x})\ge\delta>0$ on compacts, $\deg\tilde R[\mathbf{u}(t)]$ is constant; if $\mathbf{u}(0) = 0$ then $\deg\tilde R\equiv0$ and $\deg\tilde P = \deg\tilde Q\equiv K$ throughout. The disclination winding carried by the triad convention is likewise constant, so its density and current obey $\partial_t\rho_q+\nabla\cdot\mathbf{j}_q = 0$ wherever the triad is defined. Contrapositive: a change of total degree or total winding along a history requires $\inf\det\mathsf F\to0$ — a tear.*

*Proof.* Polar decomposition is continuous on $\det\mathsf F\ge\delta$; the $SU(2)$ lift is unique up to sign and continuous along such histories; the Brouwer degree is locally constant under uniform convergence. The winding current is the identically conserved topological current of the convention angle, whose divergence vanishes wherever the angle is defined. No convexity, contractibility, or connectedness of the admissible set is used. $\square$

Three consequences are used throughout. Topological charge is conserved (degree constancy) and quantized (degree is an integer; locked fractions are classified separately in Sec. 8.4), and the lemma supplies the continuity equation of Sec. 3.3. In the Standard Model these are separate inputs — Noether charge, quantization arguments, crossing symmetry. In GUM they are one lemma, and conservation of *total* charge is the absence of tears.

The lemma constrains the total degree only. Creation of a pair of opposite degree conserves it and needs no tear. r1 read the lemma as saying that charge is "creatable only in pairs at coincidence strata where the material's integrity fails, $\det\mathsf F\to0$", and the master built its dark-matter production on such "pinch epochs"; both readings are withdrawn (correction 34), and Sec. 9.8 states what replaces them.

## 7.2 The two-scale electron

**Theorem 15 (Compatibility) [DF].** *Let a degree-one texture of the substrate be the electron, with mass texture of radius $R_\mathrm{tex}$, charge localized within $r_c$, and lowest internal excitation $\Delta E$. Compatibility with data requires*
$$
r_c\lesssim10^{-19}\ \mathrm{m},\qquad\Delta E\gtrsim\text{few TeV},\qquad R_\mathrm{tex}\lesssim\frac{\hbar c}{\Delta E}\lesssim10^{-19}\ \mathrm{m}. \tag{69}
$$
*A texture whose radius follows the compacton law Eq. (58) at the classical-electron scale $R\sim10^{-15}$ m fails the third inequality by four orders of magnitude, and a near-BPS texture at that scale fails the second by nine. Hence the topological core of the electron sits at the substrate's structural scale, $R_\mathrm{tex}\sim\ell_s$.*

*Proof.* The electron is pointlike to $r_c\lesssim10^{-19}$ m in Bhabha scattering at LEP2 energies [90] and to $10^{-22}$–$10^{-19}$ m from its anomalous magnetic moment, depending on chiral protection [91]; no excited electron exists below several TeV [92]. A compact texture of radius $R$ with internal cone speed $c_\psi\simeq c$ has shape modes at $\hbar\omega_n\approx x_n\hbar c/R$ with $x_n = O(1)$–$O(\pi)$; at $R\sim10^{-15}$ m this gives $\Delta E\sim10^2$ MeV. In the near-BPS regime the SDiff-degenerate shape modes are lifted only at $O(\epsilon)$ [17], giving $\hbar\omega_\mathrm{soft}\sim\sqrt{\epsilon_e}\,\hbar\omega_0\approx2$–$40$ keV over the electron's window. The inequalities follow, with $\Delta E\lesssim\hbar c/R_\mathrm{tex}$ for any extended texture. $\square$

r1 called $R\sim10^{-15}$ m "the Compton scale"; it is the classical-electron scale (the reduced Compton wavelength is $3.86\times10^{-13}$ m), and the conclusion only strengthens.

**Proposition 23 (Core and halo) [DF; masses N].** *The electron has two scales. Its* core *is the degree-one texture of radius $R_\mathrm{core}\sim\ell_s$, carrying the topological degree, the disclination charge, the Bogomolny energy Eq. (56), and the isorotation of Sec. 6; the compacton radius $R_\ast = R_\mathrm{core}$ fixes $\Lambda/\tilde m_V = \pi^2\ell_s^3/2$, which with $M = (64/9\pi)\Lambda\tilde m_V$ (core plus halo) [N] fixes $(\Lambda,\tilde m_V)$ per species. Its* halo *is the evanescent relative-rotation field driven by the isorotation outside the core, decaying as $e^{-r/\lambda_\mathrm{halo}}/r$ with*
$$
\lambda_\mathrm{halo} = \frac{c_\psi}{\omega_0\sqrt{1-\kappa^2}} = \frac{c_\psi}{c}\,\frac{\hbar}{Mc}\,\frac{\kappa}{\sqrt{1-\kappa^2}}\ \xrightarrow{\ \kappa = 1/\sqrt2\ }\ \frac{c_\psi}{c}\,\frac{\hbar}{Mc}, \tag{70}
$$
*numerically $\lambda_{\mathrm{halo},e} = 3.86\times10^{-13}$ m, $\lambda_{\mathrm{halo},\mu} = 1.87\times10^{-15}$ m and $\lambda_{\mathrm{halo},\tau} = 1.11\times10^{-16}$ m. The halo is not compact; its excitations are relative-rotation quanta, not shape modes. The charge form factor is unity to momentum transfer $\hbar c/\ell_s$; the core's shape modes lie at $\hbar c/\ell_s$, above $10^{11}$ GeV even at the photon-timing ceiling, and its near-BPS soft modes at $\sqrt\epsilon$ of that. The closure quantities $\mathfrak{c}$, $\kappa$, and $\kappa^2g_\mathrm{tot}$ are dimensionless ratios of profile integrals and are scale-free.*

*Proof.* The core assignments are those of Sec. 6. Outside the core the relative rotation obeys the linearized branch equation $(\partial_t^2+\omega_0^2-c_\psi^2\nabla^2)\boldsymbol\psi = 0$ of Eq. (13); a source at $\omega = \kappa\omega_0<\omega_0$ gives $\nabla^2\boldsymbol\psi = [(\omega_0^2-\omega^2)/c_\psi^2]\boldsymbol\psi$, whose decaying solution has the stated length, and $\omega_0 = Mc^2/(\hbar\kappa)$ gives the second form. The form-factor and excitation statements follow from $R_\mathrm{core}\sim\ell_s$ and Eq. (69). Scale-freedom of the closure ratios is manifest in Eq. (65). $\square$

Equation (70) is the one halo formula of this revision, used in the bridge of Sec. 8.2, in the right-handed admixture of Sec. 8.3, and in the uniformity bound below. The master printed $\lambda_\mathrm{halo} = \kappa\hbar/Mc = \hbar/(\sqrt2Mc)$ in one place, the evanescent form in another, and converted its bridge with a third yardstick; the three differed by factors of $\sqrt2$ and $2$. The evanescent decay length of an in-gap mode is the physical definition, and r1 and r2 both adopted it.

The two-scale picture is GUM's reading of a familiar fact. The electron is pointlike to every probe of its charge, and yet it has a characteristic length, the reduced Compton wavelength, below which a single-particle description fails. In GUM the first fact is the core and the second is the halo. The boundary layer in which a knot's orientation relaxes against the helical background is the halo, and the frustration integrals of the flavor sector (Sec. 8.1) are halo integrals, evaluated across the halo of the base class, $q\lambda_{\mathrm{halo},\tau}\approx2.6\times10^{-11}$ [N].

**Proposition 24 (Halo dominance of the frustration integrals — Closure K-9) [posed].** *Claim: for a degree-one texture with core radius $R_\mathrm{core}\sim\ell_s$ and halo length $\lambda_\mathrm{halo}\gg\ell_s$ carrying frustration class $\mathsf p\in\{0,1,2\}$ against the ambient helix of wavenumber $q\ll\lambda_\mathrm{halo}^{-1}$, the belt integrals $A$ and $B$ of Eq. (72) are dominated by the halo, with core contributions suppressed by a positive power of $\ell_s/\lambda_\mathrm{halo}\lesssim10^{-22}$.*

The master printed this as "variationally proven" through a balance of a gradient energy $4\pi^3a_\psi\mathsf p^2/r_b$ against a potential energy $\propto r_b^3$. r2 withdrew that proof: its gradient energy has the units of energy per length squared, the gradient it integrates, $\pi\mathsf p/r^2$, is not the $\pi\mathsf p/r_b$ it describes, and under the natural scaling both energies increase with $r_b$, so the printed balance has no interior minimum. r1 had already posed the claim. The closure has five deliverables, merged from both parents:

1. a degree-one solution of Eq. (4) with compact core at scale $\ell_s$ and linear halo at the scale of Eq. (70);
2. *core rigidity*: the saturated compacton has no zero modes other than the SDiff family, so a belt of class $\mathsf p$ confined to the core must deform the BPS profile at cost of order $\Lambda\tilde m_V$ per unit angle, and the core's share of $A$ and $B$ is $O(\epsilon)$;
3. *halo response*: a belt of class $\mathsf p$ in the halo solves the gapped linear B3 equation with winding boundary conditions, with energy a computable function of $q\lambda_\mathrm{halo}$ alone; this yields $A_\mathrm{halo}$ and $\kappa_\mathrm{far}$ in closed form and converts two [N] numbers into [DF] ones;
4. the ratio of (2) to (3), and the integrals on the solution of (1), compared with the constants of Sec. 8.1;
5. the halo-tunneling exponent of the weak vertex.

Kill: a core share of $A$ or $B$ above $10\%$ at the audited normalization demotes the lepton logarithms and the neutrino mass of Sec. 8.2 to [posed] and suspends Stake S18.

The strongest existing evidence for the claim is not variational. If any part of $A$ or $B$ depended on the local environment of the amorphous double-twist network — the orientation of the nearest helix axis, the distance to the nearest network disclination — the electron mass would vary on the pitch scale. Optical lattice clocks compare atoms at sites micrometres apart at $10^{-18}$, and electron interferometers with $100\ \mu$m path separations hold $10^{-2}$ rad over nanosecond flights, which bounds cell-to-cell variations of $m_e$ at $1.3\times10^{-14}$. Since $\delta\ln m_e = -\delta A-\tfrac12\delta B$ for the $\mathsf p = 2$ class, the frustration integrals are environment-blind to eighteen decades. Any execution of the closure must reproduce this. GUM registers it as Stake S14: a dedicated lattice-clock scan over a $100\ \mu$m range in micrometre steps, looking for pitch-periodic or cell-structured modulation at $10^{-18}$, whose null GUM predicts. The compatibility conditions Eq. (69) are a standing consistency requirement, Stake S15: a core radius above $10^{-19}$ m, or an internal excitation of the electron below the TeV scale, is retired by the LEP and LHC archives without a new measurement.

## 7.3 The band edge

The gap $\hbar\omega_0 = Mc^2/\kappa$ is, for $\kappa = 1/\sqrt2$, a *band edge* at $\sqrt2Mc^2$: $722.7$ keV for the electron, $149.42$ MeV for the muon, and $2.513$ GeV for the tau. What exists at the band edge is a question the master did not ask. A vacuum branch is common to all species, so three species-specific edges cannot all be edges of the vacuum branch. Section 8.3 identifies the vacuum relative-rotation triplet with the weak triplet, gapped at the twist scale $M_T\simeq M_W$. The lepton edges must then be properties of each class's frustrated halo, not of the vacuum.

**Proposition 25 (Band-edge alternatives and their kinematics) [DF].** *Exactly one of the following holds. (a) The halo has no discrete level below the pair threshold. Then there are no free quanta at $Mc^2/\kappa$, the halo's excitations begin at $2Mc^2$, and the band edge is observable only through the closure ratios. (b) The halo supports a discrete neutral level $X$ with $m_X = m/\kappa<2m$. Then electron–positron systems can emit $X$, and ortho-positronium, if $C_X = +1$, has a two-body decay $\mathrm{o\text{-}Ps}\to\gamma X$ with a monoenergetic photon at*
$$
E_\gamma = \frac{M_\mathrm{Ps}^2-m_X^2}{2M_\mathrm{Ps}}c^2 = \frac{m_ec^2}{4}\left(4-\kappa^{-2}\right)+O(\alpha^2m_ec^2), \tag{71}
$$
*which equals $m_ec^2/2 = 255.5$ keV at $\kappa = 1/\sqrt2$. The line position measures $\kappa$ directly: $\kappa = [4-4E_\gamma/m_ec^2]^{-1/2}$.*

*Proof.* The dichotomy is exhaustive for a gapped halo spectrum below threshold. The kinematics are those of two-body decay with $M_\mathrm{Ps} = 2m_e-B$, $B = 6.8$ eV; $X\to e^+e^-$ is closed because $m_X<2m_e$, so $X$ would decay radiatively or escape. Charge conjugation of the photon is $-1$, so the decay of the $C$-odd ortho state requires $C_X = +1$. $\square$

GUM's core adopts alternative (a), the one consistent with identifying the vacuum triplet as the weak triplet; r2 wrote it into its halo proposition as an assertion, and it is stated here as what it is, a choice between two exhaustive alternatives. Alternative (b) is registered as Stake S16, conditional on posed Closure K-10, whose deliverable is the halo spectrum below $2Mc^2$ for each frustration class. The positronium line is an unusually clean conditional stake: it is monoenergetic, its energy is fixed by a single substrate number, and existing searches for exotic ortho-positronium decays already constrain its branching ratio [92]. It is also tied to the normalization audit. In Branch A of Proposition 19 the line sits at $255.5$ keV; in Branch B, $\kappa = \tfrac12$ puts $m_X$ at the pair threshold and closes alternative (b) altogether. If the closure returns a level, the line's position measures $\kappa$ and settles the branch. r2 dropped the dichotomy, the stake and the closure without comment; they are restored (correction 59).

# 8. The Standard-Model Sectors at Their Ledger Grades

GUM's flavor, electroweak, strong, and anomaly sectors are stated here at the resolution their grades support, with the audit of Definition 10 attached to each. The pattern the audit reveals is stated once. These sectors reproduce, at various grades, the Standard Model's postulate layer, and they are almost all non-discriminating: they are consistency conditions a substrate must satisfy, and GUM satisfies them. This revision changes their content in four places: the neutrino window loses an asserted cap and gains the uncertainty its inputs imply; the weak-mixing landing is recomputed at the tilt the condensate energy actually has; the right-handed admixture and the strong-CP residual follow the corrected tilt; and the strong-sector statements are posed rather than cited.

## 8.1 Three families as frustration classes

The blue-fog vacuum carries local pitch wavenumber $q$. A knot's asymptotic frame-matching against the helix is classified by a relative-twist integer $\mathsf p$, with laboratory precedent in the discrete metastable twist classes of knot solitons in chiral hosts [76]. Class-$\mathsf p$ frustration partially defeats locking over the halo:
$$
\tilde m_{\mathsf p} = \tilde m_c\sqrt{\varsigma(\mathsf p)},\qquad\varsigma(\mathsf p) = e^{-\Sigma(\mathsf p)},\qquad\Sigma(\mathsf p) = A\mathsf p+B\,\frac{\mathsf p(\mathsf p-1)}{2},\qquad\ln\frac{m_{\mathsf p}}{m_{\mathsf p+1}} = \tfrac12(A+B\mathsf p), \tag{72}
$$
with $A$ the per-belt integral and $B$ the pairwise belt-coupling integral — multiplicative by mechanism, as the factorization theorem below requires. The requirements assembled before the generator was proposed are these: only $\tilde m$ varies across species ($\Lambda\sqrt J$ is locked by universality); composition is multiplicative (quadrature composition would give inverse-mass Higgs couplings, which are excluded); discreteness comes from topology; there is no new elementary scalar (Flag F9); and the mechanism must have hierarchy capacity. The integrals evaluate to $A = 5.6\pm0.9$ and $B = 5.7\pm1.2$ [N]. They give $\tfrac12A = 2.80\pm0.45$ against $\ln(m_\tau/m_\mu) = 2.822$ and $\tfrac12(A+B) = 5.65\pm0.75$ against $\ln(m_\mu/m_e) = 5.332$, with family map $\mathsf p = (0,1,2) = (\tau,\mu,e)$ [DW]. These are two numbers against two mass ratios; r1's third comparison, the shape ratio $(A+B)/A$, is their quotient and is not independent (correction 32). Under GUM's house style (Definition 11) they are landings, not tests, by factors of $10^3$: a two-integral mechanism reproduces the order-one coefficients of the lepton mass ratios within $\pm16\%$ with no fitted parameter. Whether they are predictions or a fit depends entirely on whether $A$ and $B$ are computed from Eq. (4) without reference to the lepton masses; that is what Appendix I registers and Closure K-3 must settle.

Because $\epsilon\propto\tilde m^{-4/3}$ at fixed $\Lambda$, the near-BPS lift differs by species. The window of (P7) is the electron's, $\epsilon_e\in[8\times10^{-6},\ 3\times10^{-3}]$, its upper end set by the admission of the SDiff manifold. The scaling then gives the windows of every other knot:

| Species | $\mu$ | $\tau$ | $d$ | $u$ | $s$ | $c$ | $b$ | $t$ |
|---|---|---|---|---|---|---|---|---|
| lower end | $6.5\times10^{-9}$ | $1.5\times10^{-10}$ | $4.2\times10^{-7}$ | $1.2\times10^{-6}$ | $7.7\times10^{-9}$ | $2.4\times10^{-10}$ | $4.8\times10^{-11}$ | $3.4\times10^{-13}$ |
| upper end | $2.5\times10^{-6}$ | $5.7\times10^{-8}$ | $1.6\times10^{-4}$ | $4.4\times10^{-4}$ | $2.9\times10^{-6}$ | $8.9\times10^{-8}$ | $1.8\times10^{-8}$ | $1.3\times10^{-10}$ |

*Table 3. Near-BPS windows by species, from $\epsilon_e\in[8\times10^{-6},3\times10^{-3}]$ and $\epsilon\propto\tilde m^{-4/3}$, quarks at their current masses.*

r1 used one admission window, $[1.5\times10^{-6},\ 3\times10^{-3}]$, for every knot; one window cannot hold for three charged leptons, and where a non-electron $\epsilon$ enters below (Propositions 9, 31, 29), the species value is used. The unfrustrated base species is the $\tau$-class knot at $\mathfrak{m}_\mathrm{Sk}\approx1.7$ GeV [N]; $\epsilon\propto\tilde m^{-4/3}$ forbids unfrustrated knots parametrically lighter than it, and the electron is the lightest admissible *frustrated* knot.

The $\mathsf p = 3$ candidate would sit at $m_ee^{-(A+2B)/2}\approx104$ eV with lift $\epsilon_3 = \epsilon_ee^{(4/3)\cdot8.5}\ge0.67$ for $\epsilon_e\ge8\times10^{-6}$: it fails closure, and the tower terminates at three charged families because its next rung cannot close [DW-structural]. The lower end of the electron's window is exactly where this holds. r1 claimed termination "for essentially the entire admission window", which covered $78\%$ of it in log measure; for $\epsilon_e$ between $1.5\times10^{-6}$ and $8\times10^{-6}$ a charged lepton near $100$ eV would close. Such a lepton does not exist, so the data trim the electron's window to $\epsilon_e\gtrsim8\times10^{-6}$, and GUM states this as a constraint that Closure K-3 must respect rather than as a derived bound. The *form* of Eq. (72) is a bench experiment, Stake S17: in a chiral nematic under conical or helical boundary conditions, skyrmions in classes $\mathsf p = 0,\ldots,3$ must have $\ln(E_{\mathsf p}/E_{\mathsf p+1})$ linear in $\mathsf p$ with $B\neq0$ and a termination class. Kill: $B = 0$ within errors, or no termination.

The generator does *not* order the neutrinos: applied to them it would give $m_2 = m_3e^{-A/2}\approx3$ meV, below the solar floor of $8.7$ meV, so GUM has no mechanism for $m_1$ and $m_2$ and says so.

## 8.2 The neutrino as pitch quantum

A light knot is impossible. The closure inflates as $\epsilon\propto\tilde m^{-4/3}$, so a milli-eV knot is $10^{12}$-fold looser than existence allows, and knots cannot be parametrically lighter than the Skyrme scale. The helical vacuum supports a texture unavailable to a uniform one: the heliknoton, a unit-Hopf excitation of the helix itself, a real object in chiral liquid crystals and magnets [77; 78]. GUM's neutrino is that texture. Its mass is the pitch quantum, Eq. (27). It is dark to electromagnetism and weakly coupled by channel residence, since a twist texture couples to the twist sector. It is fermionic by **Flag F10 (fermionic heliknoton)**: $\pi_1 = \mathbb{Z}_2$ makes fermionic quantization consistent, not forced. It is Majorana-generic, since no $U(1)$ lock survives on the Hopf sector, so neutrinoless double-beta decay must occur (Stake S19). And it has a single helicity, slaved to the ambient helix sign.

The bridge to the charged ladder is the logarithmic relaxation of the $\mathsf p$-winding over the pitch outside the halo, $A(q) = A_\mathrm{halo}+\kappa_\mathrm{far}\ln(1/q\lambda_{\mathrm{halo},\tau})$, with $A_\mathrm{halo} = 3.05\pm0.09$ and $\kappa_\mathrm{far} = 0.1065\pm0.0032$ [N]. Inverting with the data-side value $A = 2\ln(m_\tau/m_\mu) = 5.645$ gives
$$
X\equiv\ln\frac{1}{q\lambda_{\mathrm{halo},\tau}} = \frac{5.645-3.05}{0.1065} = 24.36\pm1.12\ \Rightarrow\ m_3 = m_\tau e^{-X} = 0.047\,\zeta_\nu\ \mathrm{eV},\quad1\sigma\ [0.015,\ 0.143]\ \zeta_\nu\ \mathrm{eV}, \tag{73}
$$
with the yardstick of Eq. (70), $\lambda_{\mathrm{halo},\tau} = \hbar/m_\tau c$. The uncertainty is the uncorrelated propagation of the two stated inputs. r1 and r2 printed $\pm0.90$, which would need an anticorrelation of about $-0.36$ between $A_\mathrm{halo}$ and $\kappa_\mathrm{far}$ that neither states, and $5.644$ for $2\ln(m_\tau/m_\mu)$, a rounding slip (correction 40). Whether the integrals change when evaluated on the corrected halo profile is item (3) of Closure K-3.

The oscillation floor truncates the band to $m_3\in[0.0501,\ 0.143]$ eV (Proposition 8). That is **Stake S18**: $\Sigma m_\nu\in[0.059,\ 0.41]$ eV with normal ordering [DW, conditional on Closures K-9 and K-3]. The parents' window, $[0.058,\ 0.11]$ eV in r1 and $[0.059,\ 0.113]$ eV in r2, rested on the asserted cap $m_3\le0.057$ eV, now withdrawn (correction 39); r1's lower end was a rounding slip (correction 33). Three riders attach to the stake.

- *The audit.* The halo yardstick converts the logarithm into $m_3$. At fixed integrals Branch A of Proposition 19 leaves the central value at $0.047$ eV, and Branch B would raise it to $0.081$ eV, which cosmology excludes.
- *Cosmology, from both sides.* DESI DR2 with the CMB gives $\Sigma m_\nu<0.064$ eV at $95\%$ in $\Lambda$CDM [45; 46], which leaves $m_3\in[0.0501,\ 0.0503]$ eV, the floor itself. Within dark-energy models with $w\ge-1$ — the class to which GUM's own relaxation family belongs — the cosmological bound is *tighter* than in $\Lambda$CDM [47]. r2 dropped this remark; it understates the pressure to omit it.
- *No door.* r1 kept the stake alive through a drift of the neutrino mass with the dark-energy lag, which would make the cosmological and laboratory masses different quantities. Proposition 43 bounds that drift by four orders of magnitude, and the distance fit of Sec. 9.5 independently requires a lag of $40$–$80\%$ for it to matter. The door is shut.

The stake is therefore alive at its edge. Its kills are a robust $\Sigma m_\nu<0.059$ eV, an established inverted ordering, and a corrected $1\sigma$ band from Closure K-3 lying entirely below $0.050$ eV. JUNO adjudicates the ordering clause first, and the pre-registration of Sec. 10.6 states the consequence: if JUNO establishes the inverted ordering, the stake is retired and the heliknoton identification returns to [posed].

## 8.3 The electroweak skeleton

Under Flag F9 no elementary massive species of spin $0$ or $1$ exists. $W^\pm$, $Z$, and $h$ are therefore collective modes of the $\tilde P$/locking sector, with superfluid $^3$He-B's $SO(3)$ relative-rotation order parameter as the exact mathematical analog for their classification [93]. The locked ground state is invariant under diagonal co-rotation $SO(3)_\mathrm{cr}$, under which the branches of Proposition 2 organize as B1 (constraint scalar), B2$\pm$ (co-rotation-inert doublet, the photon), and the gapped orientation triplet $\{$B3$\pm$, B4$\}$ transforming as $J = 1$. The triplet is the weak triplet, **Flag F11 (weak triplet)**. Its charged members are triplet quanta bound to unit disclination winding — charged twist excitons, the $W^\pm$ [CJ binding] — and its neutral member is B4 after B2-mixing, the $Z$. Any branch carrying net disclination winding pays the locked tension, so no gapless charged mode exists in any phase, and the residual pattern "$SU(2)$-like $\times\,U(1)\to U(1)_\mathrm{em}$" is a theorem of winding energetics rather than a choice of potential shape [DF].

**Proposition 26 (Protected diagonalization: $\rho = 1$ and $e = g\sin\theta_w$) [DF, consistency].** *In the neutral basis $(a_2,a_T)$ — the co-rotation-inert channel and the bare neutral twist channel — (P3) forbids any mass term in the pure-$a_2$ slot at every order. The only entries are the twist gap $M_T^2$ and the $\chi_2$ cross term, and protection of an exact zero eigenvalue forces rank one:*
$$
\mathbb{M}^2 = M_T^2\begin{pmatrix}\vartheta^2&\vartheta\\ \vartheta&1\end{pmatrix},\qquad\det\mathbb{M}^2 = 0,\qquad\text{eigenvalues }\{0,\ M_T^2(1+\vartheta^2)\}, \tag{74}
$$
*with $\tan\theta_w\equiv\vartheta$, photon $A = \cos\theta_wa_2-\sin\theta_wa_T$, $Z = \sin\theta_wa_2+\cos\theta_wa_T$, and $M_Z = M_T/\cos\theta_w$. The charged members carry disclination winding and cannot mix with the winding-free $a_2$, so $M_W = M_T$ at this order and*
$$
\rho\equiv\frac{M_W^2}{M_Z^2\cos^2\theta_w} = 1\quad\text{identically}. \tag{75}
$$
*Matter couples to the twist channel with strength $g$ and to $a_2$ only through the same $\chi_2$ modulus, $g' = g\vartheta$; projecting onto the null eigenvector gives $e = g\sin\theta_w = g'\cos\theta_w$.*

*Proof.* $\det\mathbb{M}^2 = M_T^4(\vartheta^2-\vartheta^2) = 0$ and $\mathrm{tr}\,\mathbb{M}^2 = M_T^2(1+\vartheta^2)$; $\mathbb{M}^2(1,-\vartheta)^{\mathsf T} = 0$; normalizing with $\tan\theta_w = \vartheta$ gives the eigenvectors; $M_Z^2 = M_T^2(1+\vartheta^2) = M_T^2/\cos^2\theta_w$, and Eq. (75) follows. The coupling identity is the projection of the two vertices onto the null eigenvector. $\square$

Because the mixing angle is defined by the mass matrix, GUM's $\sin^2\theta_w$ is the *on-shell* one, $1-M_W^2/M_Z^2 = 0.2232$, and that is the number Proposition 30(3) must land on. The co-rotation invariance that keeps the photon massless is the custodial invariance that fixes $\rho = 1$ (cross-lock X3): the two stand or fall together, and a confirmed $\rho\neq1$ beyond the radiative window, or a photon mass, kills the pair (Stake S1). GUM's audit: $\rho_\mathrm{tree} = 1$ and $e = g\sin\theta_w$ are non-circular within GUM and non-discriminating against the Standard Model, whose doublet entails the same.

The experimental statement "$\rho_0 = 1$ to $10^{-3}$" is defined *after* subtraction of the Standard Model's own loop correction, which GUM's band-edge composite top must therefore reproduce (Appendix G).

**Proposition 27 (Custodial polarization from the band-edge top–bottom doublet — Closure K-11) [IM, consistency].** *Let the $\mathsf p = 0$ quark class comprise the band-edge up-type knot $t$ of mass $m_t$ and halo $\lambda_{\mathrm{halo},t} = \hbar/m_tc = 1.14\times10^{-18}$ m and the down-type knot $b$, coupled to the weak triplet with left-handed coupling $g$ and $N_c = 3$. If the knot–triplet vertex below the core cutoff $\hbar c/\ell_s$ is that of a chiral doublet, the one-loop custodial polarization is Veltman's [94],*
$$
\Delta\rho_{\mathrm{top}} = \frac{3G_F m_t^2}{8\sqrt{2}\pi^2}\left[1 + O\!\left(\frac{m_t\ell_sc}{\hbar}\right)^{\!2}\right] = 0.0093, \tag{76}
$$
*with the GUM-specific correction $2\times10^{-34}$ at $\ell_s = \ell_\mathrm{P}$.*

The master graded this [DF] and called the closure executed. The number is the Standard Model's because the integrand is assumed to be the Standard Model's; what GUM adds is the statement that the core is pointlike to $(m_t\ell_sc/\hbar)^2$, which it is at any $\ell_s$ in play. The honest grade is [IM] with a GUM correction too small to test. That is the consistency half of the closure. r1's point stands as its discriminating half, which remains owed: a composite top whose *own* vertex, computed from Eq. (4), does not shift $\rho$ by about a percent is not the top.

**Theorem 16 (Factorization implies coupling universality) [DF; deviations N].** *If $m_f = M_0(\text{lock})\,e^{-I_f}$ with $M_0$ the band-edge scale, proportional to the lock amplitude, and $I_f$ lock-independent, then $\partial m_f/\partial(\text{lock}) = m_f/(\text{lock})$ exactly, so the coupling of the lock's amplitude mode $h$ to every knot is $g_{hff} = m_f/v_\mathrm{eff}$ with one universal $v_\mathrm{eff}$ and no fundamental Yukawa couplings. Deviations $\eta_f\equiv\kappa_f/\kappa_f^\mathrm{SM}-1 = -\partial I_f/\partial\ln(\text{lock})$ are nonzero only through the weak dependence of the frustration integrals on the lock scale via the fog stiffness.*

*Proof.* $\partial_\mathrm{lock}m_f = e^{-I_f}\partial_\mathrm{lock}M_0 = m_f\,\partial_\mathrm{lock}\ln M_0$, universal because $M_0\propto$ lock. An additive law $m_f^2 = M_0^2+\Delta_f^2$ gives $g_{hff}\propto1/m_f$ instead, which the LHC excludes. $\square$

The content is in whether $I_f$ is lock-independent, which is [N]. Requiring the two frustration landings to stay inside their bands bounds $\lvert\eta_f\rvert\le0.05$ with family ordering $\lvert\eta_t\rvert<\lvert\eta_b\rvert<\lvert\eta_\tau\rvert<\lvert\eta_\mu\rvert$ (Stake S20, two-sided at HL-LHC). The scalar $h$ is the gapped $J = 0$ breathing mode of the lock amplitude — the amplitude ("Higgs") mode of the locked condensate, as in superconductors and $^3$He — with $M_h^2$ the curvature of the effective potential at the attractor [DW]. Amplitude modes of strongly locked condensates are generically broad; the measured off-shell width $\Gamma_h = 3.2\,{}^{+2.4}_{-1.7}$ MeV [95], $\Gamma/M\approx3\times10^{-5}$, constrains the attractor stiffness. r1 also attached to this stake an invisible width "into soft-fog excitations at the few-percent level" without a number; the invisible channel now has a number and its own stake (Proposition 44).

Integrating out the gapped triplet at momenta far below $M_W$ yields the contact form $G_F/\sqrt2 = g_4^2/(8M_W^2)$ times a form factor. The four-knot vertex is the triple overlap of knot zero-mode, B4 profile, and disclination form factor, and it threads the pinned marginal halo of the compacton, $g_4\propto\exp[-\int_\mathrm{halo}d\ell\sqrt{2J\Delta W}/\hbar]\equiv e^{-\mu_hd_\mathrm{halo}}$ (cross-lock X4) [DW-structure]. The knot's fermionic zero-mode doublet, immersed in the handed condensate, splits in the manner of Jackiw and Rebbi [96]: one helicity class remains core-normalizable, the other is expelled toward the halo, and the B4 vertex couples only to the bound class. Charged currents are therefore maximally parity-violating, with the sign slaved to the vacuum's handedness. r1 observed that the measured $g\approx0.65$ is not small, so the tunneling factor at the vertex must be of order one unless the prefactors of $g_4$ and $\epsilon_R$ differ by orders of magnitude, and posed the prefactors. The following proposition supplies them.

**Proposition 28 (Orthogonality suppression of $\epsilon_R$ — Closure K-12) [DF for the form; numbers with $C_R = 1$].** *Let $\psi_L$, $\psi_R$ be the normalized Jackiw–Rebbi helicity zero-modes of a knot in the handed condensate of tilt $\theta_c$, and $\Phi_\mathrm{B4}$ the B4 twist profile. Then $\psi_L$ is bound to the core–halo interface with $g_4 = g_0\exp(-I_\mathrm{pin})$, $I_\mathrm{pin} = O(1)$, giving $g\approx0.65$ from perturbative $g_0 = O(1)$; and $\psi_R$ is repelled from the core by the centrifugal-chiral barrier, suppressing its vertex overlap by*
$$
\epsilon_R = C_R\left(\frac{\ell_s}{\lambda_\mathrm{halo}}\right)^{\gamma_\mathrm{JR}}\exp(-2\mu d_\mathrm{halo}), \qquad \gamma_\mathrm{JR} = \sqrt{1+\mathfrak{m}\sin^2\theta_c} = 1.48. \tag{77}
$$
*With $C_R$ and the exponential factor set to one, $\epsilon_R\approx7\times10^{-34}$ at $\ell_s = \ell_\mathrm{P}$ ($2\times10^{-34}$ to $9\times10^{-34}$ over $\ell_s = 0.4$–$1.26\,\ell_\mathrm{P}$) and $4\times10^{-22}$ at the photon-timing ceiling; precision $\mu$- and $\beta$-decay bounds on right-handed currents (Stake S21) are satisfied at any admissible $\ell_s$.*

r2 printed $\gamma_\mathrm{JR} = 1.38$, $1.3\times10^{-31}$ and $1.3\times10^{-20}$ from the inherited tilt (correction 37), and called the closure "closed [DF]". The form is derived; the printed numbers set the unknown prefactor $C_R$ and the factor $e^{-2\mu d_\mathrm{halo}}$ to one, so they are estimates, and the stake is safe whatever those factors are (correction 56).

The $Z$ (twist channel) is diagonal in frustration class, because class transitions require winding transfer, which a neutral channel cannot carry: there are no tree-strength flavor-changing neutral currents, a GIM analog [DW].

**Proposition 29 (Topological quantization of the B4 twist charge — Closure K-13) [DW, consistency].** *In the B4 twist channel the coupling of any localized texture at momentum transfer $M_Z\ll\hbar c/\ell_s$ is proportional to its integer fiber-linking degree under the Hopf fibration: $K = 1$ for the knot zero-mode and $Q_\mathrm{Hopf} = 1$ for the heliknoton. Hence $g^\mathrm{GUM}_{Z\nu\nu}/g^\mathrm{SM}_{Z\nu\nu} = 1+O(\epsilon_\mathrm{H})$ and $N^\mathrm{eff}_\nu = 3[1+O(\epsilon_\mathrm{H})]$, where $\epsilon_\mathrm{H}$ is the heliknoton's own near-BPS lift [N]; with $\epsilon_\mathrm{H}\le3\times10^{-3}$, $N_\nu\in[2.991,\ 3.000]$ against LEP's $2.9963\pm0.0074$ [97], a landing.*

r1 called $N_\nu = 3$ "a coincidence at the $0.3\%$ level between a Hopf texture's coupling and a knot's, for which GUM owes a theorem"; the proposition is that theorem at consistency grade. $M_W$, $M_Z$, $M_h$, and $m_t$ are all band-edge objects; their clustering within a factor of two is structural, and a constitutive band gap does not run to the lattice scale, so the hierarchy problem is re-classed as an artifact of treating $h$ as elementary [DW]. The last admitted frustration class sits nearest the band edge, forcing $y_t = \sqrt2m_t/v\approx0.991$ into the top of the last spacing (cross-lock X5: one censor prices three families and $y_t\approx1$) [DW].

**Proposition 30 (Electroweak collective modes, anomaly necessity, and the mixing attractor).** *(1) (Closure K-14) [IM, consistency] For the $J = 0$ lock-amplitude breathing mode $h$, two-boson decays into $\{W^\pm,Z\}$ are kinematically closed on shell because $2M_W = 160.7$ GeV $>M_h = 125.2$ GeV, so on-shell decay proceeds through the Yukawa-universal fermion channels of Theorem 16 and the off-shell $WW^\ast$, $ZZ^\ast$ channels; the loop-induced $gg$ and $\gamma\gamma$ channels, which the Standard Model needs to reach $\Gamma_h = 4.1$ MeV, are not derived here and are imported. (2) (Closure K-15) [DW] By the family index theorem on the periodic-on-average double-twist cell, non-tearing adiabatic transport ($\det\mathsf F>0$, Lemma 5) requires the vanishing of the six anomaly polynomials of Eq. (80). (3) (Closure K-16) [DW] Isotropic projection of the $S^3$ orientation metric across the three spatial axes of the cubic double-twist cell gives $\vartheta_\ast^2 = 1/3$ bare, hence $\sin^2\theta_w = \tfrac14$ bare, and dressing by the condensate tilt of Proposition 7 yields*
$$
\sin^2\theta_w = \frac{\vartheta^2}{1+\vartheta^2} = \frac14\left(1-\frac{\varepsilon_\mathrm{tilt}}{3}\right), \qquad \varepsilon_\mathrm{tilt} = 1-\cos\theta_c = 0.39^{+0.09}_{-0.13}, \qquad \sin^2\theta_w = 0.217^{+0.010}_{-0.007}, \tag{78}
$$
*in the on-shell scheme at the tree level of Eq. (74). The band contains the on-shell value $0.2232$, reached at $\mathfrak{m} = 1.66$; it is a landing under Definition 11. The implied modulus is $\vartheta = 0.527$, and $M_Z/M_W = \sqrt{1+\vartheta^2} = 1.130$ against $1.1346$.*

The history of this landing is the history of the tilt. The master printed $\varepsilon_\mathrm{tilt}\approx0.22$ and $\sin^2\theta_w = 0.232$. r1 imported $\sin^2\theta_w\approx0.231$ as a modulus and posed its attractor. r2 recomputed the landing as $0.227\pm0.009$ from $\sin\theta_c = \sqrt{1-1/\mathfrak{m}} = 0.69$, a law that does not follow from the condensate energy. With the tilt the condensate energy actually has, the central value is $0.217$, $0.006$ below the on-shell value and inside its band; the $\overline{\mathrm{MS}}$ value $0.2312$, which r2's band also contained, would need $\mathfrak{m} = 1.40$ and lies outside (corrections 37 and 38). The form $\tfrac14(1-\varepsilon_\mathrm{tilt}/3)$ — the sign of the correction and its $1/3$ — is asserted by equal partitioning across the $1+3$ tangent directions and is not derived. Until it is, Closure K-16 is [DW] and the landing is a landing, not a test.

## 8.4 The strong sector

Against the double-twist network, a knot's frame-matching admits locked fractional winding classes in thirds, set by the three-branch junction structure of the network; the junction-branch label is the color index and the cell arithmetic the $\mathbb{Z}_3$ center. A knot carrying fractional winding cannot be screened smoothly and must terminate a network disclination line of tension $\sigma = \pi f_q^2\ln\kappa_q\approx0.19\ \mathrm{GeV}^2$ ($f_q\approx0.14$–$0.20$ GeV [N]).

The master stated five consequences as theorems it cited but never printed, and r1 restated them in prose at grade [DF] or [DF-structural]: (i) a linear potential $V = \sigma r$; (ii) three strata of line tensions — substrate-scale lines, gapped-stratum flux tubes with $T\sim M_\mathrm{gap}^2$ (the QCD string), and soft phason strings with $f^2\in[1.6\times10^{-5},4\times10^{-3}]$ GeV$^2$; (iii) a winding charge is confined iff its mediator stratum is gapped — electric charge is unconfined because the photon is massless, and color is confined because its stratum is gapped, one gap structure for both experimental signs; (iv) a mass-blind dressing-sector floor $\epsilon_\mathrm{dress} = (f_q/\mathfrak{m}_\mathrm{Sk})^2\approx10^{-2}$, above the entrainment ceiling by a factor of about $3.8$ [N], so that no fractionally wound species closes as an asymptotic state at the vacuum's $\hbar$ — all six quarks, top included, are censored and confined, and all leptons are free; (v) the long-wavelength theory of line-neutral composites is the locking-stratum orientation field with stiffness $f_q$ and a stabilizing quartic, the hadronic Skyrme model [14; 35], with the Y-junction baryon geometry. GUM does not build on theorems it has not printed. Following r2, the five statements are the deliverables of posed **Closure K-17** (strong sector), at grade [posed], with two regression tests: the Regge slope $\alpha' = 1/(2\pi\sigma) = 0.84$ GeV$^{-2}$ against the observed $0.88$, and $\sigma/\hbar c = 0.96$ GeV/fm. GUM's audit: the dichotomy, the linear potential, and the Regge structure are entailed by QCD and are non-discriminating.

There are no gluon quanta, no color factors, no running of $\alpha_s$, no partonic scaling, and no deep-inelastic phenomenology in GUM; every short-distance fact is [IM].

**Proposition 31 (Quadratic relaxation of $\langle b_P\rangle$ and the residual EDM window — Closure K-18) [DW for the mechanism].** *(1) Because $b_P$ enters $W_{6+0}$ quadratically with $\Lambda^2>0$, any linear source $\theta_0\Lambda\tilde m_Vb_P$ relaxes to zero net Pontryagin stress under the Volovik Gibbs–Duhem identity (Sec. 9.1); no superselected $\theta$ arises, because sectors of different total degree communicate only through tears (Lemma 5). (2) Mixing with $W_\chi$ requires the pitch, the wrong-chirality overlap $\epsilon_R$, the near-BPS lift of the down-type knot, and the holonomy phase, generating a composite strong-CP angle*
$$
\bar\theta_\mathrm{eff} = s\,C_\theta\,\epsilon_d\,\epsilon_R\,(q\lambda_{\mathrm{halo},d})\,\sin\delta_{CP}\lesssim1\times10^{-45}\quad(\ell_s = \ell_\mathrm{P}), \tag{79}
$$
*hence $|d_n|\lesssim3\times10^{-61}$ e·cm from this source.*

This is r1's "axion mechanism with no axion", executed by r2. The number is not adjudicable — r2 printed $2\times10^{-43}$ from the inherited $\epsilon_R$, and the corrected tilt lowers it further — and the closure's content is the mechanism, the quadratic penalty, not the number. The master's stake "$|d_n|\lesssim10^{-39}$ e·cm" was unusable as printed, because the Standard Model's own CKM contribution is about $10^{-32}$ e·cm and GUM reproduces the Standard Model at level 3. GUM's prediction is therefore that *no $\bar\theta$-type EDM exists above the CKM background*, Stake S22: an inverse kill shared with the Standard Model, not a discriminating stake.

**Proposition 32 (Anti-screening of the $\mathbb{Z}_3$ junction stiffness — Closure K-19) [CJ].** *For the junction coupling $g_J^2(\mu)$ in the window $f_q\ll\mu\ll\mathfrak{m}_\mathrm{Sk}$, one-loop fluctuations of the Maurer–Cartan currents around a three-branch junction are claimed to give $\mu\,dg_J^2/d\mu = -(C_2(SU(2))/8\pi^2)\,g_J^4\,(1-N_f\epsilon_\mathrm{dress}/6)<0$, anti-screening.*

The effective junction stiffness is a scale-dependent network stiffness on which the cone-locking flow Eq. (53) acts, and the required sign is anti-screening; if the computed flow screens, the short-distance sector is imported permanently and no second mechanism is admitted. The master graded the claimed formula [DF-sign] and declared the stake passed by its own computation. The $S^3$ sigma model in $3+1$ dimensions is not perturbatively renormalizable, the quoted coefficient is not the Yang–Mills one, and a one-loop flow of its coupling is not a controlled calculation; the sign is a conjecture until the junction's effective theory is defined. Stake S23's adjudicator is a controlled computation.

**Proposition 33 (Timescale separation between B4 core unwinding and flux-tube nucleation — Closure K-20) [IM, consistency].** *$\Gamma_t = 1.42$ GeV at next-to-leading order (the leading-order formula gives $1.48$), $\tau_\mathrm{decay} = 4.6\times10^{-25}$ s $= 0.14$ fm/$c$, and $\tau_\mathrm{had}\simeq\hbar/\sqrt\sigma = 1.5\times10^{-24}$ s $= 0.45$ fm/$c$, so the $t$ core converts into a $b$ core before the flux tube forms: no top hadrons exist and no free fractional $t$ escapes.* This is Standard-Model top physics restated in GUM's vocabulary, the fact r1 said the universal-confinement statement must reproduce, and it is graded as such.

## 8.5 Anomalies as tiling, and CP by holonomy

**Proposition 34 (The six sums as winding arithmetic) [DW-arithmetic].** *With hypercharge $Y$ decomposed as the network third (from the strong sector) plus the helix-relative co-rotation weight $T_3$ of the core doublet zero-modes, convention $Q = T_3+Y$, the per-family left-handed content $Q_L(3,2,+\tfrac16)$, $u^c(\bar3,1,-\tfrac23)$, $d^c(\bar3,1,+\tfrac13)$, $L_L(1,2,-\tfrac12)$, $e^c(1,1,+1)$, and the heliknoton ($Y = 0$) satisfies*
$$
\begin{aligned}
&[SU(3)]^2U(1):\ 2\cdot\tfrac16-\tfrac23+\tfrac13 = 0,\qquad[SU(2)]^2U(1):\ 3\cdot\tfrac16-\tfrac12 = 0,\qquad\mathrm{grav}^2U(1):\ 1-2+1-1+1 = 0,\\
&[U(1)]^3:\ 6(\tfrac16)^3+3(-\tfrac23)^3+3(\tfrac13)^3+2(-\tfrac12)^3+1 = \tfrac{1-32+4-9+36}{36} = 0,\qquad[SU(3)]^3:\ 2-2 = 0,\qquad\text{Witten: }3+1\text{ doublets},
\end{aligned} \tag{80}
$$
*and the electric-charge tiling $3(\tfrac23)+3(-\tfrac13)+(-1)+0 = 0$ closes: a unit cell of the double-twist lattice carries no net topological flux.*

*Proof.* Arithmetic on the displayed fractions. $\square$

GUM's audit: the sums close on the same thirds that generate confinement and on the same down-type sign that the quark-spacing reconstruction forces, with no per-condition tuning. That they are the *necessary* consistency conditions of the texture theory is Proposition 30(2); the sums themselves are those of the Standard Model, hence non-discriminating.

**Proposition 35 (Holonomy phase counting) [DF].** *Transport holonomies around double-twist network cells, encoded in an $N\times N$ unitary overlap block $V$ between frustration eigenknots and B4-vertex eigenmodes, modulo independent rephasings of the in- and out-basis class labels, leave exactly $(N-1)(N-2)/2$ irreducible phases: zero for $N = 2$ and one for $N = 3$.*

*Proof.* An $N\times N$ unitary has $N^2$ real parameters, $N(N-1)/2$ angles and $N(N+1)/2$ phases; the rephasing group has $2N$ parameters, of which $2N-1$ act effectively; $N(N+1)/2-(2N-1) = (N-1)(N-2)/2$ [98]. $\square$

The counting is Kobayashi–Maskawa's transplanted onto network holonomy. GUM's content is that $N = 3$ is an output of the termination argument and that the holonomies are geometric, so that CP violation is a property of the vacuum's web with its sign welded to the handedness chain. Mixing matrices are mismatches, $U_\mathrm{CKM} = V_u^\dagger V_d$ and $U_\mathrm{PMNS} = V_\ell^\dagger V_\nu$, between frustration eigenknots and vertex eigenmodes [CJ realization]. Quark knots are network-tethered, so their bases nearly coincide and CKM is small; lepton knots float free against the fog, and the heliknoton basis is set by the helix, so PMNS is large — the confinement dichotomy speaking again [DW-qualitative]. The network's reflection symmetry on the heliknoton basis gives $\theta_{23}\to45^\circ$ and $\delta_{CP}\to-\pi/2$ with the sign fixed by the handedness chain (Stake S24, Sec. 10.1) [DW-leading-order]; the Jarlskog magnitude is not claimed.

# 9. Cosmology: The Relaxation Family, Gravity, the Pitch Lag, and the Dark Sector

## 9.1 Vacuum energy as the lag of a slow substrate mode

A substrate structured at $\ell_s$ carries a zero-point ledger of order $\hbar c/\ell_s^4$ — at least $6\times10^{81}\ \mathrm{J\,m^{-3}}$ even at the photon-timing ceiling, and about $5\times10^{113}\ \mathrm{J\,m^{-3}}$ at $\ell_s\simeq\ell_\mathrm{P}$ — against $\rho_\Lambda\approx6\times10^{-10}\ \mathrm{J\,m^{-3}}$. GUM's defusal is Volovik's [31], instantiated. For a self-sustained substrate the source of the induced gravitational equations is the grand-potential density $\omega_\mathrm{vac} = \varepsilon_\mathrm{vac}-\sum_i\mu_in_i$, and Gibbs–Duhem gives $\omega_\mathrm{vac} = -P_\mathrm{ext} = 0$ in equilibrium. The zero-point ledger is chemical-potential bookkeeping, not gravitating stress, and only departures gravitate. On the Bogomolny locus the $(6+0)$ pressure vanishes pointwise (Sec. 6.1), which is the compensation pattern operating natively in the dominant sector, and the same clause quarantines the fog's naive $10^{22}\rho_\Lambda$. The premise that the induced-gravity source is the grand potential has no in-substrate derivation and is imported [IM]; everything below inherits that conditionality visibly.

The departure is the lag of a slow mode of the substrate behind cosmic expansion. Let $q$ be the soft coordinate and expand $\rho_\Lambda(q) = \varepsilon(q)-\mu_0q$ about equilibrium: $d\rho_\Lambda/dq\rvert_0 = 0$ and $d^2\rho_\Lambda/dq^2 = \mathcal{X}^{-1}>0$ by stability. Hubble dilution drives a lag $\delta q\propto H/\Gamma_r$, with $\Gamma_r$ the relaxation rate, and
$$
\rho_\mathrm{DE}\simeq\tfrac12\mathcal{X}^{-1}\delta q^2>0, \tag{81}
$$
the displacement energy from a stable minimum [DF under the $q$-variable convention], with $\mathcal{X}^{-1}$ the stiffness of the soft mode, a quantity the master never stated and Sec. 9.7 bounds. The slow mode lives on the $\epsilon$-lifted SDiff-soft manifold of the $(6+0)$ vacuum — the same manifold that hosts the chiral condensate of Sec. 4.1 (cross-lock X6). GUM makes the cross-lock a statement rather than a remark: *the soft coordinate is the pitch wavenumber $q$ of Eq. (27)*. The consequences of taking that literally are Proposition 43 and Corollary 4.

## 9.2 The relaxation family

**Proposition 36 (Equation of state of the relaxation family) [DF].** *Let $\Gamma_r = \Gamma_0(H/H_0)^n$ with $n\in[0,1]$, and let the lag be adiabatic, $\Gamma_r\gg H$, over the epochs considered (Appendix D). Then $\rho_\mathrm{DE} = \rho_{\mathrm{DE},0}(H/H_0)^{2(1-n)}$, and in a universe of matter plus this component*
$$
w_\mathrm{DE}(a) = -\frac{n}{1-(1-n)\,\Omega_\mathrm{DE}(a)},\qquad\Omega_\mathrm{DE}\equiv\frac{\rho_\mathrm{DE}}{3M_\mathrm{Pl}^2H^2}. \tag{82}
$$
*In particular $w_\mathrm{DE}\in[-1,0]$ always; $w_\mathrm{DE}\equiv-1$ iff $n = 1$; and $w_\mathrm{DE}\equiv0$ iff $n = 0$.*

*Proof.* $\rho_\mathrm{DE}\propto(H/\Gamma_r)^2\propto H^{2(1-n)}$, so $d\ln\rho_\mathrm{DE}/d\ln a = (1-n)\,d\ln H^2/d\ln a = -3(1-n)(1+\Omega_\mathrm{DE}w_\mathrm{DE})$, while continuity gives $-3(1+w_\mathrm{DE})$; equating yields Eq. (82). Since $\Omega_\mathrm{DE}\le1$ the denominator is at least $n$, so $\lvert w_\mathrm{DE}\rvert\le1$. $\square$

**Corollary 9 (The constant-rate member does not accelerate).** *For $n = 0$, $\rho_\mathrm{DE} = \alpha_0\,3M_\mathrm{Pl}^2H^2$ with constant $\alpha_0$, and the Friedmann equation is $H^2(1-\alpha_0) = \rho_m/3M_\mathrm{Pl}^2$: matter-dominated expansion with a rescaled Newton constant, deceleration $q_\mathrm{dec} = +\tfrac12$ at all times, and no acceleration — the no-go for Hubble-cutoff holographic dark energy [99; 100].* With radiation included the $n = 0$ member carries a matter-like component $2.9$ times the matter density at recombination, excluded by the CMB determination of $\omega_m$ [101]. GUM's index therefore satisfies $n>0$, and by Proposition 37, $n>n_\mathrm{min}$.

**Proposition 37 (Acceleration requires $n>n_\mathrm{min}$) [DF].** *The present deceleration parameter $q_{\mathrm{dec},0} = \tfrac12(1+3w_{\mathrm{DE},0}\Omega_{\mathrm{DE},0})$ is negative iff*
$$
n>n_\mathrm{min} = \tfrac12\big(\Omega_{\mathrm{DE},0}^{-1}-1\big)\approx0.22\qquad(\Omega_{\mathrm{DE},0} = 0.69). \tag{83}
$$

*Proof.* $3w\Omega<-1\iff3n\Omega>1-(1-n)\Omega\iff\Omega(1+2n)>1$. $\square$

**Proposition 38 ($w_a\ge0$ and no phantom crossing) [DF].** *Along the family $d\Omega_\mathrm{DE}/d\ln a = -3w_\mathrm{DE}\Omega_\mathrm{DE}(1-\Omega_\mathrm{DE})$, and*
$$
w_a\equiv-\left.\frac{dw_\mathrm{DE}}{da}\right\rvert_{a=1} = -\frac{3n(1-n)\,w_{\mathrm{DE},0}\,\Omega_{\mathrm{DE},0}(1-\Omega_{\mathrm{DE},0})}{[1-(1-n)\Omega_{\mathrm{DE},0}]^2}\ \ge\ 0, \tag{84}
$$
*with equality iff $n\in\{0,1\}$; and $w_\mathrm{DE}\ge-1$ at all times, so the family never crosses the phantom divide.*

*Proof.* $d\ln\Omega_\mathrm{DE}/d\ln a = -3(1+w_\mathrm{DE})+3(1+\Omega_\mathrm{DE}w_\mathrm{DE}) = -3w_\mathrm{DE}(1-\Omega_\mathrm{DE})$. Differentiating Eq. (82) with $D = 1-(1-n)\Omega_\mathrm{DE}$ gives $dw/d\ln a = -(n(1-n)/D^2)\,d\Omega_\mathrm{DE}/d\ln a$; substituting and using $w_a = -dw/d\ln a\rvert_{a=1}$ gives Eq. (84). The sign follows from $w_{\mathrm{DE},0}<0$ for $n>0$; no-crossing is the bound of Proposition 36. $\square$

**Proposition 39 (Early dark energy) [DF].** *In the matter era $\rho_\mathrm{DE}/\rho_m\simeq(\Omega_{\mathrm{DE},0}/\Omega_{m,0})\,\Omega_{m,0}^{1-n}\,a^{3n}$, and in the radiation era the fraction scales as $a^{4n}$. Evaluated with radiation and the self-consistent $H$ of Eq. (85), the fraction at recombination is about $4\times10^{-5}$ for $n = \tfrac12$ and $6\times10^{-3}$ for $n = \tfrac14$ (Table 4); for $n\gtrsim0.3$ the family is safe from nucleosynthesis and early-dark-energy bounds and is constrained only by late-time distances and growth.*

*Proof.* Substitute $H^2\simeq H_0^2\Omega_{m,0}a^{-3}$ (or $H_0^2\Omega_{r,0}a^{-4}$) into $\rho_\mathrm{DE}\propto H^{2(1-n)}$ for the scalings; the table solves Eq. (85) with radiation at $z = 1100$. $\square$

| $n$ | $\alpha_\mathrm{DT}$ | $w_0$ | $w_a$ (derivative) | $q_{\mathrm{dec},0}$ | $\rho_\mathrm{DE}/\rho_m$ at $z = 1100$ |
|---|---|---|---|---|---|
| 0 | 2 | 0 | 0 | $+0.50$ | $2.9$ (matter-like) |
| 0.25 | 1.5 | $-0.52$ | $+0.27$ | $-0.04$ | $6\times10^{-3}$ |
| 0.50 | 1 (DGP) | $-0.76$ | $+0.29$ | $-0.29$ | $4\times10^{-5}$ |
| 0.75 | 0.5 | $-0.91$ | $+0.16$ | $-0.44$ | $3\times10^{-7}$ |
| 0.90 | 0.2 | $-0.97$ | $+0.06$ | $-0.50$ | $1\times10^{-8}$ |
| 1 | 0 ($\Lambda$) | $-1$ | 0 | $-0.54$ | $2\times10^{-9}$ |

*Table 4. The relaxation family at $\Omega_{\mathrm{DE},0} = 0.69$, $\Omega_{r,0} = 9.1\times10^{-5}$, with the Dvali–Turner exponent of Proposition 40. The last column uses the self-consistent $H$ with radiation. r1's table printed $2.2$, $9\times10^{-3}$, $3\times10^{-5}$, $1\times10^{-7}$, $3\times10^{-9}$ and $0$ from a matter-era estimate; r2 corrected the column and dropped $\alpha_\mathrm{DT}$, which is restored here.*

The family traces a curve in the $(w_0,w_a)$ plane from $(0,0)$ at $n = 0$ to $(-1,0)$ at $n = 1$. Every member has $w_0\ge-1$ and $w_a\ge0$: dark energy that was *less* negative in the past and never phantom.

## 9.3 The family is the Dvali–Turner family

**Proposition 40 (Equivalence with the Dvali–Turner background) [DF].** *The relaxation family's Friedmann equation,*
$$
H^2-\Omega_{\mathrm{DE},0}H_0^{2n}H^{2(1-n)} = \frac{8\pi G}{3}(\rho_m+\rho_r), \tag{85}
$$
*is the modified Friedmann equation $H^2-H^{\alpha_\mathrm{DT}}/r_c^{2-\alpha_\mathrm{DT}} = 8\pi G\rho/3$ of Dvali and Turner [34] with*
$$
\alpha_\mathrm{DT} = 2(1-n),\qquad r_c^{\,\alpha_\mathrm{DT}-2} = \Omega_{\mathrm{DE},0}H_0^{2-\alpha_\mathrm{DT}}. \tag{86}
$$
*The member $n = \tfrac12$ ($\alpha_\mathrm{DT} = 1$) is the self-accelerating background of the Dvali–Gabadadze–Porrati braneworld [102]; $n = 1$ ($\alpha_\mathrm{DT} = 0$) is $\Lambda$; and $n = 0$ ($\alpha_\mathrm{DT} = 2$) is the rescaled-$G$ member of Corollary 9.*

*Proof.* Substitute $\rho_\mathrm{DE} = \rho_{\mathrm{DE},0}(H/H_0)^{2(1-n)}$ into $H^2 = (8\pi G/3)(\rho_m+\rho_r+\rho_\mathrm{DE})$ and use $\rho_{\mathrm{DE},0} = 3H_0^2\Omega_{\mathrm{DE},0}/8\pi G$. $\square$

The equivalence cuts both ways, and GUM prints both. It removes a claim of novelty: GUM's background is not new, and every distance-data fit of the Dvali–Turner family applies to it directly. The DGP background is known to fit combined distance data worse than $\Lambda$CDM [103], and Sec. 9.5 excludes it outright. It also sharpens what *is* GUM's. The family arises from the lag of a substrate mode rather than from leakage into an extra dimension, so its perturbations are not DGP's — there is no brane, no brane-bending mode, and no ghost. The growth of structure therefore discriminates between GUM and the braneworld at fixed background, and the perturbation sector is a deliverable of Closure K-21.

## 9.4 Selecting the index

**Proposition 41 (Dissipation-channel selection of $n$ — Closure K-21) [DW].** *On the $\epsilon$-lifted SDiff manifold the exponent $n$ is fixed by the active damping channel of the lag: local gap-damping gives $n = 0$ (excluded by Corollary 9); rearrangement across the diffusively grown correlation length $\xi_c = (pc/H)^{1/2}$ gives $n = \tfrac12$ if the lag relaxes at the crossing rate $c/\xi_c\propto H^{1/2}$, with $(w_0,w_a,q_{\mathrm{dec},0}) = (-0.763,+0.285,-0.290)$ at $\Omega_{\mathrm{DE},0} = 0.69$, and $n = 1$ if it relaxes diffusively at fixed diffusivity $D$, at the rate $D/\xi_c^2\propto H$; horizon-cutoff radiative damping gives $n\in[\tfrac12,1]$, interpolating to $(-1,0,-0.535)$.*

*Proof.* By Proposition 36, $n$ is the exponent of $\Gamma_r\propto H^n$. Gap damping at a fixed gap has a constant rate; $c/\xi_c = (cH/p)^{1/2}$; $D/\xi_c^2 = DH/(pc)$. The triples follow from Eqs. (82) and (84) and $q_{\mathrm{dec},0} = \tfrac12(1+3w_{\mathrm{DE},0}\Omega_{\mathrm{DE},0})$. $\square$

The closure is executed in form, not in its selection. r2 printed the middle channel as "$\Gamma_r\propto H$, $n = \tfrac12$", which Proposition 36 does not allow: a rate proportional to $H$ is $n = 1$. The two readings of that channel bracket the family. If the lag relaxes at the crossing rate, the mechanistically preferred channel selects the DGP background, which the data exclude, and the channel that survives is the one that interpolates to $\Lambda$CDM. If it relaxes diffusively, the preferred channel is $\Lambda$CDM itself — a cosmological constant with a computed origin — at the price of the birefringence execution of Sec. 10.2, which requires $n<1$. Which rate law the soft manifold realizes is now the closure's first deliverable, and the perturbation sector its second (correction 49).

## 9.5 Status against the data

The DESI DR2 combinations prefer $w_0>-1$ with $w_a<0$ — an equation of state more negative in the past, crossing $-1$ — at $2.8$–$4.2\sigma$ in the CPL parametrization [45; 104; 105]. By Proposition 38 that region is unreachable by the family for any $n$. Two quantitative comparisons follow: a quick proxy, as r2 printed it, and the full fit that the proxy approximates.

**The CPL proxy.** For each $n$ the family's $w(a)$ is fitted by least squares to $w_0+w_a(1-a)$ over $0<z<2$, and the DESI DR2 + CMB + supernova posteriors are approximated as Gaussians in $(w_0,w_a)$ with the published marginal widths and correlation $-0.9$ (Appendix D); the proxy reproduces DESI's own $2.8\sigma$ (Pantheon+) and $4.2\sigma$ (DESY5) for $\Lambda$CDM to within $0.3\sigma$.

| $n$ | $(w_0,w_a)_\mathrm{fit}$ | Pantheon+ | Union3 | DESY5 | $\beta(z{=}7.7)/\beta_\mathrm{rec}$ |
|---|---|---|---|---|---|
| $0.50$ | $(-0.764,+0.313)$ | $\Delta\chi^2 = 176$ ($13\sigma$) | $79$ ($8.6\sigma$) | $146$ ($12\sigma$) | $6\times10^{-4}$ |
| $0.75$ | $(-0.910,+0.206)$ | $45$ ($6.4\sigma$) | $28$ ($5.0\sigma$) | $40$ ($6.0\sigma$) | $1.8\times10^{-2}$ |
| $0.90$ | $(-0.969,+0.092)$ | $15$ ($3.5\sigma$) | $17$ ($3.7\sigma$) | $20$ ($4.1\sigma$) | $0.11$ |
| $0.95$ | $(-0.985,+0.048)$ | $11$ ($2.9\sigma$) | $15$ ($3.5\sigma$) | $18$ ($3.9\sigma$) | $0.18$ |
| $1$ ($\Lambda$CDM) | $(-1,0)$ | $9$ ($2.6\sigma$) | $15$ ($3.5\sigma$) | $19$ ($4.0\sigma$) | — |

*Table 5. The relaxation family against DESI DR2 under the Gaussian CPL proxy. The last column is the birefringence profile of Proposition 47.*

Under the proxy the member $n = \tfrac12$, which the crossing-rate reading of Proposition 41 selects, is excluded at the $10\sigma$-equivalent level, and $n\gtrsim0.9$ is about as disfavored as $\Lambda$CDM. With DESY5 the least-disfavored member is $n\approx0.96$ ($\Delta\chi^2 = 18.2$ against $19.0$ for $\Lambda$CDM, and $18.3$ at $n = 0.95$); with Union3 the proxy is flat near $n = 1$; only with Pantheon+ is $\Lambda$CDM the family's best point. r2 concluded that "every $n<1$ member is therefore further from the data than $\Lambda$CDM"; its own proxy contradicts that for DESY5 (correction 48).

**The full fit (Stake S25).** The audit of 2026-10-17 fitted Eq. (85) to the DESI DR2 BAO distances, DESI's compressed CMB prior on $(\theta_\ast,\omega_b,\omega_{bc})$ [45; 106], and three supernova compilations — Pantheon+ [107], DESY5 as released in 2024 [108], and its 2025 recalibration [109] — with the supernova offset marginalized and one $0.06$ eV neutrino [9]. The pipeline reproduces DESI's published preferences for evolving dark energy: $\Delta\chi^2 = -8.02$ against DESI's $-8.0$ with the CMB prior, and $-4.95$ and $-13.71$ against $-4.9$ and $-13.6$ for BAO with Pantheon+ and with DESY5. Union3 is not included, because its release is not public in a fetchable form [110].

| Data | Best $n$ | $\Delta\chi^2$ vs $\Lambda$CDM | $95\%$ range of $n$ | Behind $w_0w_a$ by |
|---|---|---|---|---|
| BAO + CMB prior | $1$ | $0$ | $>0.949$ | $8.0$ |
| + Pantheon+ | $0.988$ | $-0.05$ | $0.905$–$1$ | $7.6$ |
| + DESY5 (2024) | $0.950$ | $-1.44$ | $0.871$–$1$ | $16.6$ |
| + DES-Dovekie (2025) | $0.975$ | $-0.27$ | $0.899$–$1$ | $10.5$ |

*Table 6. The full distance fit of the relaxation family. The DGP member, $n = \tfrac12$, is excluded by $\Delta\chi^2\approx+217$ with BAO and the CMB prior.*

The fit supplies the "printed $n$" that the stake asked for: $n\gtrsim0.95$ from BAO and the CMB, so that dark energy today lies within about $2\%$ of a cosmological constant ($w_0\lesssim-0.984$), and $n\gtrsim0.87$–$0.90$ with supernovae. The family can at best tie $\Lambda$CDM — with the 2024 DES sample the $n = 0.95$ member beats it by $\Delta\chi^2 = 1.44$, about $1.2\sigma$ for one parameter — and it trails evolving dark energy by $\Delta\chi^2 = 7.6$–$16.6$ in every combination. The sign of $w_a$ remains GUM's exposure. The stake is executed in this form; the version r2 specified, with $\Sigma m_\nu$ free and the full CMB likelihood, remains owed.

The pre-registered retirement condition stands, stated before the Euclid DR1 and DESI final analyses: **if the combined analysis prefers $w_a<0$ with $w_0>-1$ at $\ge3\sigma$ in a parametrization that does not force the crossing, GUM retires its dark-energy sector and admits no second mechanism without a new flag.** Some DESI DR2 combinations already exceed that threshold; the trigger is tied to the final combined analyses. What retirement would take with it is stated in Sec. 10.5: the birefringence execution requires $n<1$.

## 9.6 Gravity, the structural scale, and the closures of gravitational dynamics

The Kondo–Bilby–Kröner–Kleinert dictionary makes the kinematics Einstein–Cartan by theorem [32]: dislocation density is torsion, disclination density is curvature, spin density sources torsion as Einstein–Cartan requires, and spin–torsion contact corrections are unobservable by about $36$ orders of magnitude in neutron stars. Knots are defects, defects mutually strain, and test knots ride geodesics of the strain metric. The equivalence principle is structural, since every clock, rod, and particle is an excitation of the same substrate; compliance with MICROSCOPE at $10^{-15}$ [111] is an inverse kill GUM survives (Stake S1), not a triumph it claims. Weinberg–Witten [112] is evaded in the standard way, by the absence of exact Lorentz invariance at the fundamental level, which transfers the burden to the Lorentz-compliance phenomenology of Sec. 5.9.

r1 left the *dynamics* open: positivity of the graviton kinetic term was not established, and GUM built nothing on it. r2 supplied an induced Einstein–Hilbert term.

**Proposition 42 (Sakharov induction on the locked branch — Closure K-22) [DW, conditional].** *On the locked branch $\boldsymbol\psi\to0$, integrating out the $N_\mathrm{eff}$ gapped B3/B4 field components at one loop below a cutoff $\Lambda_c = \hbar c/\ell_s$ induces an Einstein–Hilbert term with [33]*
$$
M_\mathrm{Pl}^2 = \frac{N_\mathrm{eff}\,\hbar c}{12\pi\,\ell_s^2}. \tag{87}
$$

**Corollary 10 (The structural scale is fixed by $G$, up to the regularization) [DW, conditional].** *Inverting Eq. (87) with the measured Planck mass gives*
$$
\ell_s = \sqrt{\frac{N_\mathrm{eff}}{12\pi}}\,\ell_\mathrm{P} = 0.40\,\ell_\mathrm{P}\ (N_\mathrm{eff} = 6),\quad0.56\,\ell_\mathrm{P}\ (12),\quad1.26\,\ell_\mathrm{P}\ (60), \tag{88}
$$
*i.e. $\ell_s = (0.6$–$2)\times10^{-35}$ m for any plausible field count.*

Eq. (87) is the common Sakharov form $N\Lambda_c^2/12\pi$; its coefficient depends on the regularization and the field content. r2 stated the cutoff as $\pi/\ell_s$ but used the coefficient for $1/\ell_s$; with a cutoff $\pi\hbar c/\ell_s$ the same estimate gives $\ell_s = \pi\sqrt{N_\mathrm{eff}/12\pi}\,\ell_\mathrm{P} = 1.25$–$3.96\,\ell_\mathrm{P}$, which lowers every cliff of Table 1 by about $5$ qubits. The corollary therefore fixes $\ell_s$ near the Planck length to within a regularization-dependent factor of a few, not exactly (correction 55). Positivity of the induced term for every contributing species is asserted, not shown. Even so, the master's open interval $[10^{-35},10^{-26}]$ m is closed at the Planck end, and Proposition 16 excludes the other end independently.

Every $\ell_s$-dependent number of this revision is stated at $\ell_s = \ell_\mathrm{P}$: the cliff midpoints of Table 1 ($324$ and $338$ qubits under bulk hosting); $\epsilon_R\approx7\times10^{-34}$ (Proposition 28); $\bar\theta_\mathrm{eff}\lesssim1\times10^{-45}$ (Proposition 31); $\Delta n\approx5\times10^{-121}$ if $\ell_\mathrm{lock} = \ell_s$ (Corollary 3); the Hubble-volume ceiling of $609$ qubits; the core correction to $\Delta\rho_\mathrm{top}$, $2\times10^{-34}$; and the discreteness term $(k\ell_s)^2 = 7\times10^{-33}$ at $1$ TeV. One structural scale fixes them all (cross-lock X7).

Two closures the master printed as closed are re-posed. The master derived $c_\mathrm{GW} = c$ by identifying gravitational waves with transverse-traceless strain waves of speed $\sqrt{\mu/\rho_0}$ and imposing a single-carrier bond geometry. By Proposition 2 the transverse elastic waves of the displacement are locked to the micro-rotation and *are* the photon; the graviton therefore cannot be a linear transverse mode of $\mathbf{u}$, and the derivation is withdrawn. **Closure K-22** is re-posed with the carrier of gravitational waves in the defect geometry (a collective mode of the defect density, or a second-order strain-metric fluctuation) as its first deliverable, positivity of that carrier's kinetic term as its second, and the multimessenger bound $|c_\mathrm{GW}/c-1|\lesssim10^{-15}$ [113] as its third; Proposition 42 is kept as a conditional induction. **Closure K-2** is correspondingly narrowed to the cone condition Eq. (12) itself — derive $\mu/\rho_0 = \gamma_\mathrm{eff}/2J$ from level 0 or from the cone-locking flow — which is imported [IM] until then.

## 9.7 The pitch lag and the lepton masses

If the soft coordinate is the pitch wavenumber, the lag that makes dark energy also moves everything that depends on the pitch: the neutrino mass directly, and the charged-lepton masses through the far-field logarithm of the bridge. r1 read this as a door for the neutrino stake — neutrinos lighter in the past, so that cosmological and laboratory masses differ. r2 turned the same coupling into a bound.

**Proposition 43 (The pitch lag is bounded by the constancy of $m_p/m_e$) [DF; given the [N] bridge coefficients].** *Assume the adiabatic lag $\delta q = SH/\Gamma_r$ of the relaxation equation $\dot{\delta q} = -\Gamma_r\delta q+SH$ with $\Gamma_r\propto H^n$, so that $\delta q(z)/\delta q_0 = h(z)^{1-n}$ with $h\equiv H/H_0$, and write $\varepsilon_\nu\equiv\delta q_0/q_\mathrm{eq}$, with $|\varepsilon_\nu| = \sqrt{2\mathcal{X}\rho_{\mathrm{DE},0}}/q_\mathrm{eq}$ by Eq. (81). Then*
$$
\frac{m_3(z)}{m_3(0)} = \frac{1+\varepsilon_\nu h(z)^{1-n}}{1+\varepsilon_\nu}, \tag{89}
$$
*and by Proposition 21(ii)*
$$
\frac{\Delta\mu_{pe}}{\mu_{pe}}(z) = -\kappa_\mathrm{far}\,\varepsilon_\nu\left[h(z)^{1-n}-1\right]. \tag{90}
$$
*The quasar bound $|\Delta\mu_{pe}/\mu_{pe}|<10^{-6}$ at $z\simeq3$ [84] then gives*
$$
|\varepsilon_\nu|<\frac{10^{-6}}{\kappa_\mathrm{far}[h(3)^{1-n}-1]} = 7.9\times10^{-6}\ (n = \tfrac12),\quad2.0\times10^{-5}\ (0.75),\quad5.7\times10^{-5}\ (0.9),\quad1.2\times10^{-4}\ (0.95), \tag{91}
$$
*and a lower bound on the soft-mode stiffness,*
$$
\mathcal{X}^{-1}>\frac{2\rho_{\mathrm{DE},0}}{(\varepsilon_\nu q_\mathrm{eq})^2} = 3.6\times10^2\ \mathrm{eV^2}\ (n = \tfrac12),\quad55\ (0.75),\quad6.7\ (0.9),\quad1.6\ \mathrm{eV^2}\ (0.95). \tag{92}
$$

*Proof.* In the adiabatic limit $\delta q = (S/\Gamma_0)H_0^nH^{1-n}$, so $\delta q/\delta q_0 = h^{1-n}$; $m_3\propto q = q_\mathrm{eq}+\delta q$ by Eq. (27) gives Eq. (89). Eq. (90) is Proposition 21(ii) with $\delta_q = \varepsilon_\nu[h^{1-n}-1]$. Eq. (91) inserts $\kappa_\mathrm{far} = 0.1065$ and each member's own $h(3)$ from Eq. (85) — $4.82$ at $n = \tfrac12$, against $4.53$ for $\Lambda$CDM. Eq. (92) inverts Eq. (81) at $\rho_{\mathrm{DE},0} = (2.3\ \mathrm{meV})^4$ and $q_\mathrm{eq} = 0.0503$ eV, the upper end of the cosmologically allowed sliver, which makes the bound conservative. $\square$

r2's proof said it inserts $h(3) = 4.52$, the $\Lambda$CDM value; its printed bounds need, and use, each member's own $h(3)$ (correction 50). The abstract of r2 quoted the bound as $|\delta q/q^\ast|\lesssim10^{-5}$, which holds only for $n\lesssim0.75$; for the members the expansion data allow it is $10^{-5}$–$10^{-4}$ (correction 51).

Three consequences follow. First, the stiffness is stated: a pitch-scale stiffness $\mathcal{X}^{-1}\sim q_\mathrm{eq}^2 = 2.5\times10^{-3}\ \mathrm{eV^2}$ would give $\Delta\mu_{pe}/\mu_{pe}\approx4\times10^{-4}$ at $z = 3$ and is excluded four-hundred-fold; the soft mode must be stiffer than about $(20\ \mathrm{eV})^2$ for $n = \tfrac12$, a constraint on the condensate's energetics and a deliverable of Closure K-3.

Second, r1's door is shut. Lowering the neutrino mass inferred at $z\simeq1$–$3$ by $10$–$25\%$ would require $|\varepsilon_\nu|\approx0.2$–$0.5$, four orders of magnitude above Eq. (91) for every $n\le0.95$. Since the same combination $\varepsilon_\nu[h^{1-n}-1]$ controls both drifts, the laboratory and cosmological neutrino masses agree to better than $10^{-6}/\kappa_\mathrm{far}\approx10^{-5}$ out to $z\simeq3$ for every $n$, and the neutrino stake cannot be rescued by drift. The full distance fit agrees from the other side: at the allowed $n$, the door would need a lag of $40$–$80\%$ of the equilibrium pitch [9]. r1's Stake S27, "laboratory $\nu$ mass exceeds cosmological inference", is retired. **Closure K-23** — the sign of $S$, the magnitude of $\mathcal{X}$, and the stability of the coupled lag — is thereby executed negatively on its testable face; the instabilities known for mass-varying neutrinos [114; 115] are moot at this amplitude.

Third, the prediction that survives is the *correlation* of Stake S12: a drift of $\mu_{pe}$ without a drift of $\alpha$, with the redshift profile $h(z)^{1-n}-1$ of Eq. (90), at an amplitude below $10^{-6}$ that ESPRESSO- and ELT-class spectroscopy at $10^{-7}$ can reach for the stiffest allowed $\mathcal{X}$. The far-infrared edge carries the same bound as a pitch tomogram (Corollary 4).

## 9.8 The dark sector

No dark-matter candidate is derived, and GUM prints the deficit so that it cannot be elided. The natural in-substrate candidate has had three readings. The master executed it with an undressed $\tau$-class knot $N_0$ frozen in through a pinch form factor $\mathcal{F}_\mathrm{pinch} = 2\times10^{-8}$ and declared $\Omega_\mathrm{DM}h^2 = 0.12$. r1 posed it as an undressed knot "coupling to nothing but gravity and the soft fog", created only in pairs at $\det\mathsf F\to0$ strata in early-universe pinch epochs. r2 withdrew the execution for reasons its own statements supply. The abundance was a fit: $\mathcal{F}_\mathrm{pinch}$ was chosen to reproduce $0.12$. And the mechanism was inconsistent. The master coupled $N_0$ to $h$ at tree level with $g = M_{N_0}/v_\mathrm{eff} = m_\tau/v = 7.2\times10^{-3}$, as Theorem 16 requires of any knot whose mass is proportional to the lock, and in the same breath asked the particle to freeze in through a vertex suppressed by $2\times10^{-8}$. A fermion with a Yukawa coupling of $7\times10^{-3}$ is in thermal equilibrium at $T\sim100$ GeV. Pair creation of opposite degree needs no pinch (Lemma 5). And a pinch suppression that applied to undressed pairs would have to be explained away for $h\to\tau^+\tau^-$ and $e^+e^-$ pair creation, which proceed at the Standard-Model rate. The candidate returns to conjecture grade, with r2's content.

**Conjecture 1 (Undressed knots — Closure K-24) [CJ].** *Charge is a disclination dressing of a degree-one knot. If Eqs. (4)–(8) admit an undressed solution — a sterile, degree-stable fermion $N_{\mathsf p}$ in each frustration class with $M_{N_{\mathsf p}}\simeq m_{\ell,\mathsf p}$, coupling at tree level only to gravity, to the soft fog, and to the lock-amplitude mode $h$ with $g_{hNN} = M_N/v_\mathrm{eff}$ (Theorem 16) — then it is produced in pairs at Yukawa strength and is a thermal relic.*

Deliverables: (i) existence and stability of the undressed solution; (ii) the dressing cross-section $\langle\sigma_dv\rangle$ for $N\bar N\to\ell^+\ell^-$, the only annihilation channel stronger than the Higgs portal's $\langle\sigma v\rangle\approx3\times10^{-36}\ \mathrm{cm^3\,s^{-1}}$ — a pair dressing conserves total winding, so Lemma 5 does not forbid it, and whether it needs a local coincidence stratum is part of the deliverable; (iii) the relic density, which requires $\langle\sigma_dv\rangle\approx2\times10^{-26}\ \mathrm{cm^3\,s^{-1}}$ to land on $\Omega h^2 = 0.12$ and otherwise overcloses by up to $10^{10}$; (iv) the CMB energy-injection check, which excludes an $s$-wave leptonic channel at that cross-section for a $1.78$ GeV particle by a factor of about $20$ [101] and admits a $p$-wave one. Kills: no undressed solution; overclosure; CMB injection. Direct detection cannot adjudicate: $\sigma_\mathrm{SI}\approx10^{-47}\ \mathrm{cm^2}$ at $1.78$ GeV lies under the solar-neutrino fog.

**Proposition 44 (The Higgs invisible width as the adjudicator) [DF given Conjecture 1].** *If undressed $\tau$-class knots exist and couple as in Conjecture 1, then since $2M_{N_0}<M_h$,*
$$
\Gamma(h\to N_0\bar N_0) = \Gamma(h\to\tau^+\tau^-) = 0.26\ \mathrm{MeV}\ (\text{Dirac}),\quad0.13\ \mathrm{MeV}\ (\text{Majorana}), \tag{93}
$$
*so $\mathrm{BR}(h\to\mathrm{invisible}) = 5.9\%$ or $3.1\%$, against the Standard Model's $0.11\%$ ($h\to ZZ^\ast\to4\nu$), the ATLAS $95\%$ limit of $10.7\%$ [116], and the HL-LHC reach of about $2.5\%$ [117]. If no undressed solution exists, GUM predicts the Standard-Model value.*

*Proof.* The vertex is $m_\tau/v$ for both channels, the phase-space factors coincide at equal mass, and a Majorana fermion has half the Dirac width. $\square$

This is Stake S27. A measured invisible branching ratio of $3$–$6\%$ with no other new physics would confirm a $\tau$-mass sterile knot and simultaneously kill it as the dark matter, since it would be a thermal relic, overabundant unless deliverables (ii)–(iv) say otherwise; a limit below $2.5\%$ forces either the non-existence of undressed knots or a selection rule GUM has not stated. r1 attached an invisible width "at the few-percent level" to Stake S20 without a number; the number is Eq. (93), and GUM is exposed to it either way.

If undressed knots exist, Lemma 5 admits one process r1 considered and r2 dropped: an undressed pair can acquire opposite disclination dressings and emerge as a charged lepton pair.

**Conjecture 2 (Pair dressing and the 511 keV line — Closure K-25) [CJ].** *If undressed electron-class knots of mass $m_u\ge m_e$ exist and dress in collisions at a rate $\langle\sigma_dv\rangle$, they inject positrons with kinetic energy of order $(m_u-m_e)c^2$ plus the halo's virial energy, at a rate $\propto\rho_\mathrm{DM}^2\langle\sigma_dv\rangle$.*

The conjecture is worth stating because the Galactic $511$ keV line has two properties that standard sources explain with difficulty: a bulge-dominated morphology and positrons injected at low energy. In-flight annihilation limits the injection energy to a few MeV [118; 119]. A dressing process at $m_u\simeq m_e$ satisfies that bound automatically, and its $\rho_\mathrm{DM}^2$ morphology is bulge-peaked. The closure delivers the dressing threshold and cross-section. Its kills are $m_u<m_e$ (process closed), a morphology that does not track $\rho_\mathrm{DM}^2$, or a required $\langle\sigma_dv\rangle$ incompatible with the relic abundance of Conjecture 1. r2's Higgs coupling adds a consistency question that r1 did not face: electron-class undressed knots would couple to $h$ with $m_e/v\approx2\times10^{-6}$, and their thermal history, and the CMB injection constraint on dressing near $m_e$, must be computed with that coupling. A second candidate, the featherweight residue of the double-twist web, is a watch item only.

# 10. The Handedness Bit

## 10.1 The chain as a parity check

GUM's most distinctive structural claim is that one global sign — the handedness of the condensed chiral sector — simultaneously fixes observable signs that the Standard Model treats as independent (cross-lock X8): the chirality of the charged weak current, the orientation of the family ladder, and the sign of $\delta_{CP}$.

**Definition 9 (Sign chain).** Let $s\in\{+1,-1\}$ be the vacuum handedness. A sign chain is a set of observables $O_i\in\{+1,-1\}$ with theory-computed signs $\varepsilon_i\in\{+1,-1\}$ such that GUM predicts $O_i = \varepsilon_is$ for all $i$. The chain is broken if any product $O_iO_j\neq\varepsilon_i\varepsilon_j$.

The links of cross-lock X8 are numbered $O_1$ (the chirality of the charged weak current, the anchor), $O_2$ (the orientation of the family ladder), $O_3$ (the sign of the strong-CP residual, Eq. (79)), $O_4$ (the sign of $\sin\delta_{CP}$) and $O_5$ (the sign of the birefringence angle, Proposition 47). The parents used $\varepsilon_4$ and $\varepsilon_5$ in this sense without stating the numbering.

**Proposition 45 (Structure and status of the handedness chain) [DF].** *(i) A chain of length $k$ with one free bit has $k-1$ independent parity checks; with links (weak chirality, $\delta_{CP}$, family orientation), of which family orientation is not independently observable, the chain has one testable check. (ii) By Proposition 38, the sign of $w_a$ is $+1$ for all $n\in(0,1)$ independently of $s$; the dark-energy drift is therefore not a link of the chain but an unconditional prediction, and a confirmed $w_a<0$ retires the relaxation family regardless of $s$ and cannot be absorbed by any re-assignment of the $\varepsilon_i$. (iii) With weak chirality as anchor ($O_1 = $ left, fixing $s$ by convention), the remaining testable prediction of the chain is a definite sign of $\delta_{CP}$ — $\delta_{CP}\to-\pi/2$ with $\theta_{23}\to45^\circ$ — adjudicated by DUNE and Hyper-Kamiokande (Stake S24).*

*Proof.* (i) is counting; (ii) is Proposition 38; (iii) follows. $\square$

The anchor's two neutrino stakes are already in mild mutual tension, and GUM prints it: Stake S24 wants $\delta_{CP}\approx-\pi/2$ and Stake S18 wants normal ordering, while the joint long-baseline analyses leave $\delta_{CP}\approx-\pi/2$ most comfortable in the inverted ordering. JUNO's ordering determination adjudicates the neutrino-mass stake's ordering clause before DUNE and Hyper-K adjudicate the sign of $\delta_{CP}$. Birefringence, when it is a link, is the second testable check (Sec. 10.2).

## 10.2 Cosmic birefringence: the endpoint property and the induced Chern–Simons term

Cosmic birefringence — a rotation $\beta$ of the CMB's linear polarization — is a parity-violating observable with a sign. Planck and WMAP give $\beta = 0.342^\circ\,{}^{+0.094}_{-0.091}$, excluding zero at $3.6\sigma$ [57; 58]; an independent analysis of ACT DR6 gives $\beta = 0.215^\circ\pm0.074^\circ$, $2.9\sigma$, with the same sign [59]; neither finds frequency dependence across $23$–$353$ GHz. A chiral vacuum is the natural place to look for the origin of such a rotation, and GUM owes a position. A *static* condensate gives none: by achirality and Proposition 11, static Bragg dispersion of the helix produces only a $\nu^2$-dispersive rotation, far below the reported level. What a condensate whose order parameter *evolves* can do is fixed by the next proposition. Throughout, $\beta$ is measured counterclockwise as seen by the observer facing the source.

**Proposition 46 (Endpoint property of $\Theta$-birefringence) [DF].** *Let the doublet carry the coupling $\Delta\mathcal{L} = g_\Theta\,\Theta(\mathbf{x},t)\,\mathbf{E}\cdot\mathbf{B}$ (in units with $\varepsilon^\ast = 1$). In the geometric-optics limit, the plane of linear polarization of a ray from emission event $e$ to observation event $o$ rotates by*
$$
\beta = -\tfrac12g_\Theta\big[\Theta(o)-\Theta(e)\big], \tag{94}
$$
*independently of the path between them and of the photon's frequency [120; 121]. Consequently: (i) fluctuations of $\Theta$ along the path — including fog-scale fluctuations — neither accumulate nor random-walk, and produce no depolarization at leading order; (ii) the CMB measures $\Theta(o)-\Theta(\text{last scattering})$, and its anisotropy $\beta(\hat{\mathbf n})$ maps $\Theta$ on the last-scattering surface; (iii) sources at lower redshift must show $\beta(z_s)/\beta_\mathrm{CMB} = [\Theta(o)-\Theta(z_s)]/[\Theta(o)-\Theta(z_\mathrm{rec})]$.*

*Proof.* Varying $\mathcal{L} = \tfrac12(\mathbf{E}^2-\mathbf{B}^2)+g_\Theta\Theta\,\mathbf{E}\cdot\mathbf{B}$ with $\mathbf{E} = -\partial_t\mathbf{A}$, $\mathbf{B} = \nabla\times\mathbf{A}$ gives $\nabla\times\mathbf{B}-\partial_t\mathbf{E} = g_\Theta(\dot\Theta\mathbf{B}+\nabla\Theta\times\mathbf{E})$, with $\nabla\cdot\mathbf{E} = -g_\Theta\nabla\Theta\cdot\mathbf{B}$. For a wave along $\hat{\mathbf z}$ with $\Theta$ varying slowly, the circular modes $\mathbf{A}\propto(\hat{\mathbf x}\pm i\hat{\mathbf y})e^{i(kz-\omega t)}$ satisfy $\hat{\mathbf z}\times\mathbf{A} = \mp i\mathbf{A}$, hence $\omega_\pm^2 = k^2\mp g_\Theta k\,d\Theta/d\lambda$ and $\omega_\pm\simeq k\mp\tfrac12g_\Theta\,d\Theta/d\lambda$ along the ray's affine parameter $\lambda$. A linear polarization is the sum of the two modes, and its plane turns from $\hat{\mathbf x}$ toward $\hat{\mathbf y}$ — counterclockwise as seen from the observer's side — by half the accumulated phase difference, $-\tfrac12g_\Theta\int d\Theta = -\tfrac12g_\Theta[\Theta(o)-\Theta(e)]$, independent of $k$ and of the route. $\square$

r1 printed $\beta = +\tfrac12g_\Theta[\Theta(o)-\Theta(e)]$ without stating a sense of rotation; that is the same result for a clockwise angle. r2 printed its induced rotation without a convention. Because the sign is staked, this revision states the convention and derives every sign in it (correction 54).

The proposition corrects a tempting inference: that a random fog would depolarize the CMB at a level set by its correlation length. It does not. What $\Theta$-birefringence can do is produce a frequency-flat monopole (the reported signal) and a correlated anisotropy that traces $\Theta$ at recombination. r1 posed the rest as a closure whose deliverables were $\Theta$ as a function of the condensate order parameter, the order parameter's cosmological evolution, and the resulting $\beta$, its sign $\varepsilon_5$, its anisotropy spectrum, and its low-redshift ratio. r2 executed the first, second and fourth.

**Proposition 47 (Induced Chern–Simons coupling, frequency-flat birefringence, and its redshift profile — Closure K-26) [DW-conditional].** *Let the condensate tilt $\theta_c(t)$ evolve on the soft manifold alongside the pitch lag $\delta q(t)$, according to Eq. (25) and the relaxation equation of Sec. 9.7. Then:*

*(1) integrating out the gapped B3 branch at one loop in the presence of $W_\chi$ and a time-dependent tilt induces in the doublet's effective action the parity-odd operator*
$$
\mathcal{L}_\Theta = -\frac{\alpha_\mathrm{em}}{2\pi}\,\Theta(\theta_c(t))\,\mathbf{E}\cdot\mathbf{B}, \qquad \Theta(\theta_c) = s\,\kappa_\chi\frac{|\chi_3|}{\tilde m\sqrt{\gamma}}\sin^2\theta_c, \qquad\kappa_\chi = O(1)>0; \tag{95}
$$

*(2) a photon emitted at cosmic time $t_e$ experiences, by Eq. (94) with $g_\Theta = -\alpha_\mathrm{em}/2\pi$, the frequency-independent rotation*
$$
\beta(t_e) = \frac{\alpha_\mathrm{em}}{4\pi}\big[\Theta(\theta_c(t_0))-\Theta(\theta_c(t_e))\big], \qquad \sin^2\theta_c(t) = \sin^2\theta_{c,0}\left[1-\frac{2\,\rho_\mathrm{DE}(t)}{(\mathfrak{m}-1)\,\bar\gamma q^{\ast2}\sin^2\theta_{c,0}}\right]; \tag{96}
$$

*(3) because $\rho_\mathrm{DE}(t)$ decreases monotonically for every $n\in(0,1)$ (Proposition 36), $\sin^2\theta_c$ grows toward the present, so the theory sign $\varepsilon_5\equiv\mathrm{sgn}[\sin^2\theta_c(t_0)-\sin^2\theta_c(t_e)] = +1$ and the observed sign is $O_5\equiv\mathrm{sgn}\,\beta = \varepsilon_5s = s$, locked to the weak-chirality anchor; $\beta\neq0$ requires $n<1$; and the rotation accrued by a source at redshift $z$, relative to that of the CMB, is*
$$
\frac{\beta(z)}{\beta_\mathrm{rec}} = \frac{h(z)^{2(1-n)}-1}{h(z_\mathrm{rec})^{2(1-n)}-1}, \qquad h\equiv H/H_0, \tag{97}
$$
*which is $6\times10^{-4}$ at the reionization epoch $z\simeq7.7$ for $n = \tfrac12$, $1.8\times10^{-2}$ for $n = 0.75$, $0.11$ for $n = 0.9$ and $0.18$ for $n = 0.95$; for sources at $z\le3$ it is below $0.1$ for every $n\le0.95$.*

*Proof.* $\mathbf{E}\cdot\mathbf{B}$ is a total divergence, so a static $\Theta$ rotates nothing; a time-dependent $\Theta$ shifts the derivative onto $\dot\Theta\mathbf{B}$ in the Ampère–Maxwell equation and splits the circular-polarization phase velocities independently of frequency, and Proposition 46 with $g_\Theta = -\alpha_\mathrm{em}/2\pi$ integrates the split to Eq. (96). Minimizing Eq. (25) at $q = q^\ast+\delta q$ with Eq. (81) gives the tilt law. Eq. (97) follows from $\rho_\mathrm{DE}\propto H^{2(1-n)}$. $\square$

r2 defined $\varepsilon_5$ as $\mathrm{sgn}[\Theta(t_0)-\Theta(t_e)]$; since $\Theta$ carries the factor $s$, that quantity is $s$ itself, not a theory sign. The definition above is the one the chain of Definition 9 needs. The magnitude of $\beta$ is not computed — $\kappa_\chi = O(1)$ and $|\chi_3|/(\tilde m\sqrt\gamma)$ is unknown — so the proposition's content is the sign and the profile. The experiments quote $\beta$ in their own stated conventions; reading their positive $\beta$ in the counterclockwise convention used here is a step the sign readout of the stake requires, and it is listed among the deliverables of Closure K-26.

The profile is the discriminator r1's closure lacked. Axion-like explanations with $m_a\gg H(z_\mathrm{reion})$ rotate the reionization and recombination signals equally; GUM's rotation is recombination-dominated. r2 wrote that the low-multipole $EB$ bump LiteBIRD is designed to measure "should carry at most a tenth" of the high-multipole rotation; Eq. (97) gives at most $0.11$ for $n\le0.9$ and $0.18$ at $n = 0.95$, and as $n\to1$ the ratio rises monotonically toward $\ln h(7.7)/\ln h(z_\mathrm{rec})\approx0.26$ while the rotation itself vanishes. The kill threshold of $0.3$ in Sec. 10.5 therefore sits above every member's prediction. Polarized radio galaxies and quasars at $z\lesssim3$ should show essentially none ($\lesssim0.02^\circ$ even at $n = 0.9$). The ratio is a monotone function of $n$ and measures it independently of the distance ladder.

The tilt law has a positivity condition: $\sin^2\theta_c$ must stay positive back to recombination, which requires $\bar\gamma q^{\ast2}>2h_\mathrm{rec}^{2(1-n)}\rho_{\mathrm{DE},0}/[(\mathfrak{m}-1)\sin^2\theta_{c,0}]$. At the corrected tilt that is $8\times10^4$, $5\times10^2$, $26$ and $10$ times $\rho_{\mathrm{DE},0}$ for $n = \tfrac12$, $0.75$, $0.9$ and $0.95$. The condensate scale $(0.05\ \mathrm{eV})^4 = 2.2\times10^5\rho_{\mathrm{DE},0}$ clears it by a factor of $3$ at $n = \tfrac12$, $4\times10^2$ at $0.75$, $8\times10^3$ at $0.9$ and $2\times10^4$ at $0.95$. r2 printed a single threshold, $4\times10^4\rho_{\mathrm{DE},0}$, cleared "by three orders"; the requirement depends strongly on $n$, the margin is thin at $n = \tfrac12$, and "three orders" holds only for $n\gtrsim0.8$ (correction 53). Equations (96) and (97) also assume that the lag stays adiabatic back to recombination, $\Gamma_0/H_0\gg h_\mathrm{rec}^{1-n}$: about $150$ at $n = \tfrac12$, $12$ at $0.75$, $2.7$ at $0.9$ and $1.7$ at $0.95$ (Appendix D). The crossing-rate channel of Proposition 41, with $\Gamma_0/H_0 = (c/pH_0)^{1/2}\approx2\times10^{15}$, meets the condition by thirteen orders of magnitude; for the radiative channel it is a condition on $\Gamma_0$ that the closure must check.

Two further deliverables remain with the closure. The anisotropy spectrum of $\beta(\hat{\mathbf n})$ is owed. And the locking suppression of Proposition 9 quenches every *static* fog–doublet index coupling by $(k\ell_\mathrm{lock})^4$; whether the one-loop coupling of Eq. (95), driven by the *time dependence* of the tilt, escapes that quench is not argued in either parent and must be.

## 10.3 Is the bit the same everywhere?

A bit selected spontaneously need not be selected uniformly.

**Proposition 48 (Domain dichotomy) [DF].** *Suppose $s$ is selected spontaneously when the chiral sector condenses, at cosmic time $t_\ast$ with horizon $d_H(t_\ast)$, and let $\sigma_w$ be the surface tension of a wall between $s = +1$ and $s = -1$ domains. (i) If $t_\ast$ follows the end of inflation, causality produces domains with correlation length at most $d_H(t_\ast)$ [122]. (ii) A wall network with $\sigma_w^{1/3}\gtrsim1$ MeV either comes to dominate the energy density or imprints CMB anisotropies beyond those observed [123]; heavy walls therefore require that $s$ was selected before or during inflation, or explicitly biased so that walls decay early. (iii) Across a wall, weak chirality, the sign of $\delta_{CP}$, and the sign of $O_5$ flip together, so every observer sees the same internal chain, and distinct domains are distinguishable only by sign flips of $\beta(\hat{\mathbf n})$ across the sky.*

*Proof.* (i) is the Kibble argument. (ii) The wall energy density scales as $\sigma_w/d_H$ and falls more slowly than matter or radiation, which gives the Zel'dovich–Kobzarev–Okun bound. (iii) The handedness chain is a chain in $s$ (Definition 9). $\square$

GUM's walls are heavy. By cross-lock X8 a wall flips weak chirality, which requires reorganizing the core zero-modes of every knot and the locked electroweak vacuum, so $\sigma_w^{1/3}$ is at least of order the weak scale, far above the bound in (ii). GUM therefore predicts a single domain across the observable universe, and hence a uniform sign of $\beta(\hat{\mathbf n})$ wherever Proposition 47 makes it nonzero. r1 carried this as a separate stake; r2 adopted the proposition only by reference and folded its kill — sign-flipping patches in birefringence maps — into the lag–birefringence stake, which this revision keeps (Sec. 10.5). Sign-flipping patches would retire either the heaviness of the walls or the handedness chain itself.

## 10.4 A mirror test of short-range forces

**Proposition 49 (Mirror identity and its breaking) [DF].** *(i) If both the dynamics and the vacuum are invariant under the parity operation $\mathcal{P}$, then for any two bodies $B_1,B_2$ in any configuration $\mathcal{C}$, the interaction energy obeys $U[\mathcal{P}B_1,\mathcal{P}B_2;\mathcal{P}\mathcal{C}] = U[B_1,B_2;\mathcal{C}]$. For mirror-image test bodies in mirror-image configurations, $U_{LL} = U_{RR}$ and $U_{LR} = U_{RL}$. (ii) If the dynamics is $\mathcal{P}$-invariant apart from a parity-odd sector and the vacuum carries handedness $s$, then*
$$
U_{LL}-U_{RR} = s\,\mathcal{A}(r)+O(s^3),\qquad U_{LR}-U_{RL} = s\,\mathcal{B}(r)+O(s^3), \tag{98}
$$
*with $\mathcal{A},\mathcal{B}$ interaction functionals supported on the range of the vacuum's parity-odd correlations. (iii) In the Standard Model alone the differences arise only from weak neutral currents and are negligible at micrometer separations.*

*Proof.* (i) $U$ is computed from a Hamiltonian and a ground state that are both $\mathcal{P}$-invariant. (ii) $\mathcal{P}$ maps (dynamics, vacuum $s$) to (dynamics, vacuum $-s$), so $U_s[L,L] = U_{-s}[R,R]$ and the difference is odd in $s$; the same holds for the mixed pair. (iii) Weak-current contributions are suppressed by $G_F$ times the square of an atomic momentum scale and are contact-like in range. $\square$

GUM's vacuum is chiral at the pitch scale, so the natural range of $\mathcal{A}$ is the fog's correlation length, a few to tens of micrometers ($p\simeq25\ \mu$m at the cosmologically allowed edge). That is the range of precision short-range gravity and Casimir experiments. The test requires microfabricated chiral test masses — helical or gyroid metamaterials — in both handednesses, and four measurements $F_{LL}$, $F_{RR}$, $F_{LR}$, $F_{RL}$ at separations of $3$–$25\ \mu$m. The two differences are both $s$-odd in GUM and both null in a parity-invariant world, so their agreement in sign is an internal control, and exchanging the masses between their mounts controls for fabrication asymmetry. A molecular arm exists as well: vibrational spectroscopy of enantiomers, where the Standard Model's parity-violating energy differences are predicted at relative order $10^{-17}$–$10^{-14}$ and have not yet been observed, and where a vacuum-handedness term would scale differently with nuclear charge.

The amplitude $\mathcal{A}(r)$ is the deliverable of posed Closure K-27, and the stake is S28: a nonzero, sign-consistent $F_{LL}-F_{RR}$ at micrometer range would be the first direct detection of vacuum handedness. One consistency condition binds the amplitude. The fog-mediated part of $\mathcal{A}$ is a pitch-scale coupling of matter to the condensate and inherits the locking suppression of Proposition 9; in GUM's core, with $\ell_\mathrm{lock}\simeq\ell_s$, it is negligible, and a detection would measure $\ell_\mathrm{lock}$ together with the trough and the advected line, all three fixed by one pitch (cross-lock X2). r2 dropped the proposition, its closure and its stake without comment; they are restored with this condition (correction 60).

## 10.5 The lag–birefringence pair

r1 carried the dark-energy family and the birefringence sign as independent stakes. r2 merged them, and this revision keeps the merger: they are one stake with two readouts, because Proposition 47 makes $\beta\neq0$ require $n<1$ while the distance data push $n\to1$ (Sec. 9.5).

**Stake S29 (the lag–birefringence pair).** *Readout A (expansion):* $w_a\ge0$ and $w\ge-1$ at all redshifts, with the posterior on $n$ from Stake S25. *Readout B (polarization):* $\mathrm{sgn}\,\beta = +s$ in the counterclockwise convention, with the profile of Eq. (97), read as the low-$\ell$/high-$\ell$ $EB$ ratio and as the absence of rotation in $z\lesssim3$ sources, and a sign of $\beta$ uniform across the sky (Proposition 48). *Kills:* $w_a<0$ with $w_0>-1$ at $\ge3\sigma$ in a non-forcing parametrization (retires the family); $\beta\neq0$ at $\ge5\sigma$ with the expansion data forcing $n>0.98$ (retires the birefringence execution with the family, since a static condensate rotates nothing); a low-$\ell$/high-$\ell$ ratio above $0.3$ at any $n$ the expansion data allow; a sign mismatch with the anchor; sign-flipping patches. *Status:* $\beta\neq0$ at $2.9$–$3.6\sigma$; under the proxy every member of the family is disfavored at $\ge2.6\sigma$, and in the full fit the family trails evolving dark energy by $\Delta\chi^2 = 7.6$–$16.6$ (Table 6).

GUM notes that this stake can kill its electromagnetic chirality sector and its dark-energy sector in a single stroke, and that this is what a cross-lock is for.

## 10.6 Pre-registration

GUM states, before the adjudicating measurements, the following:

- if DUNE or Hyper-K find $\delta_{CP}$ with sign opposite to $\varepsilon_4s$ at $\ge3\sigma$, the handedness chain is broken;
- if JUNO establishes the inverted ordering, the neutrino-mass stake is retired and the heliknoton identification returns to [posed];
- if Euclid and DESI confirm $w_a<0$ with $w_0>-1$ at $\ge3\sigma$ in a non-forcing parametrization, the relaxation family is retired (Sec. 9.5);
- if LiteBIRD measures a low-$\ell$ rotation equal to the high-$\ell$ one, or a rotation with $n>0.98$, the birefringence execution is retired and the electromagnetic sector's chirality claims are withdrawn;
- if birefringence maps show sign-flipping patches, the single-domain prediction of Proposition 48 is retired;
- if a stacked far-infrared trough with the three controls of Proposition 10 is detected, the identification $\ell_\mathrm{lock} = \ell_s$ is retired and the trough's depth measures $\ell_\mathrm{lock}$;
- if HL-LHC measures an invisible Higgs width outside $\{0.1\%\}\cup[3\%,6\%]$, Conjecture 1 is retired;
- if a $300$-qubit mirror circuit shows a flat return probability through $350$ qubits, dense storage is retired.

A chain that cannot be broken by a scheduled measurement is not a chain.

# 11. Ledger, Closures, and Stakes

## 11.1 The audit criterion

**Definition 10 (Non-circular and discriminating).** A postulate $P$ non-circularly explains a fact $F$ if $P$ was not selected because $F$ is known, or if $P$ entails a distinct testable $F'\neq F$ not used in its selection. $P$ discriminates between two theories if some $F'$ it entails is not entailed by the competitor.

| Claim | Selected for the fact? | Non-circular | Discriminating vs. SM/$\Lambda$CDM | Disposition |
|---|---|---|---|---|
| Objectivity and the gapless doublet (Theorem 1, Proposition 1) | At level 1, yes (adopted to kill the mass term); reduced to level-0 background independence | Via $F'$ | No | Consistency; inverse kills S1 |
| Exact doublet dispersion (Proposition 2) | Yes: cone condition imported | Via $F'$ ($c_\psi>c$) | No | Consistency; K-2 |
| Maxwell for every $c_L$ (Theorems 5, 6; Flag F6) | Yes: Gauss completion adopted to recover Gauss's law | Via $F'$ (physical velocity gauge) | No (Maxwell exactly) | Null test S2; K-4 |
| Custodial $\rho = 1$; $\Delta\rho_\mathrm{top}$ (Propositions 26, 27) | No | Yes | No; SM computes $\Delta\rho_\mathrm{top}$ | Consistency [IM]; K-11 (discriminating half owed) |
| $e = g\sin\theta_w$; $\sin^2\theta_w = 0.217^{+0.010}_{-0.007}$ (Propositions 26, 30) | No | Yes | Weakly (a band) | Landing; K-16 [DW] |
| Anomaly sums as tear-free necessity (Propositions 34, 30) | Derived thirds and $\det\mathsf F>0$ | Yes | No | Consistency; K-15 |
| KM counting; confinement dichotomy; junction sign (Propositions 35, 32) | No | Yes | No | Inherited; K-17 [posed], K-19 [CJ] |
| Finite $c_L$ in the tower; Bancal–Barnea deviation (Theorem 13, Flag F8) | No | Yes | **Yes** | Prediction S6; K-8 |
| Dense-storage cliff at $n_{50}\approx324$–$338$, width $\le4.45$, knob-dependent (Proposition 14, Theorems 11, 12) | No | Yes | **Yes** (given dense storage) | Prediction S4, S5; K-7 |
| Far-infrared trough; the $\ell_\mathrm{lock}$ bound (Theorem 7, Corollary 3) | No | Yes | **Yes** (if $\ell_\mathrm{lock}\neq\ell_s$) | Bound or discovery S3; K-5 |
| Relaxation family, $w_a\ge0$, $n\in[\tfrac12,1]$ (Propositions 36–41) | No | Yes | **Yes** (disfavored by DESI) | Prediction S25, S29; K-21 |
| Birefringence sign and profile (Propositions 45, 47) | No | Yes | **Yes** | Prediction S29; K-26 |
| Pitch-lag bound; $\mu_{pe}$ drift without $\alpha$ drift (Propositions 21, 43) | No | Yes | **Yes** (correlation) | Prediction and bound S12; K-23 |
| Channeling resonance $\propto\ell_\mathrm{row}$ (Proposition 22) | No | Yes | **Yes** | Prediction S13 |
| Two-scale electron; halo dominance (Theorem 15, Propositions 23, 24) | No | Yes | **Yes** ($e^\ast$, form factor, uniformity) | Consistency + S15, S14; K-9 |
| Band edge (Proposition 25) | No | Yes | **Yes**, if (b) | Conditional S16; K-10 |
| Vacuum handedness at micrometer range (Proposition 49) | No | Yes | **Yes** | Conditional S28; K-27 |
| Undressed $\tau$-knot; Higgs invisible width (Conjecture 1, Proposition 44) | No | Yes | **Yes** | Conjecture with stake S27; K-24 |

*Table 7. GUM's ledger under the audit criterion.*

The pattern is the finding, and GUM states it about itself. Its derived-form results are almost all non-circular within GUM and almost all non-discriminating between programs; three of them — the gapless doublet, its exact dispersion, and exact Maxwell theory for every $c_L$ — are circular by construction at level 1 and are printed as such. The discriminating content lives in the substrate's unavoidable signatures: the timing of quantum correlations, a representational cliff, a pitch, a physical clock, a band edge, a drifting lag, and vacuum handedness at micrometer range.

## 11.2 Closures

| Closure | Topic | Status [grade] | Content, deliverables | Kill | r1 / r2 |
|---|---|---|---|---|---|
| K-1 | Level 0 $\to$ level 1 | Executed as an embedding theorem (Definition 1, Proposition 1) [DW-structural] | Objectivity reduced to background independence; hypothesis (H0) stated; whether a generic complex satisfies (H0) owed | none | K-0 / K-0 |
| K-2 | Cone condition | Re-posed; [IM] until executed | derive $\mu/\rho_0 = \gamma_\mathrm{eff}/2J$ from level 0 or from the cone-locking flow | none: remains [IM] | K-16 / K-16 |
| K-3 | Normalization audit | Partially executed (Proposition 19) | every [N] quantity in one normalization; the corrected bridge inversion; the integrals on the corrected halo; the bound on $\mathfrak{c}$ | corrected $1\sigma$ band of $m_3$ below $0.050$ eV | K-N / K-N |
| K-4 | Gauss completion | Posed (Flag F6) | derive Eq. (21); the defect current of any completion the action produces; the sign of the longitudinal energy | $\mathbf{j}_\mathrm{def}\neq0$ predicted, not seen (S2) | K-18 / K-18 |
| K-5 | Doublet–fog matrix element | Closed conditionally on $\ell_\mathrm{lock}\simeq\ell_s$ (Proposition 9, Corollary 3) [DF] | $\ell_\mathrm{lock}$ against $\ell_s$; the orientational correlation length $\ell_o$ (trough or step) | $\Delta n$ above Eq. (31) | K-11 / K-11 |
| K-6 | Multi-time statistics | Closed in form (Proposition 13) [DF] | the rate $\Gamma_H$ and the order-one coefficients | disagreement with the Lüders rule at accessible precision | K-9 / K-9 |
| K-7 | Hosting mode | Posed (Definition 7) | $N_\mathrm{eff}$ from the tower's field content | a cliff where no mode allows (S4, S5) | K-24 / K-24 |
| K-8 | Tower update rule | Posed (Flag F8) | signaling or not: the horn of Theorem 13 | fixes the sign of S6 | K-22 / K-22 |
| K-9 | Halo dominance of $A$, $B$ | Re-posed (Proposition 24) | two-scale solution; core rigidity; halo response in closed form; their ratio; tunneling exponent; uniformity at $10^{-18}$ (S14) | core share above $10\%$: lepton logarithms demoted, S18 suspended | K-10 / K-10 |
| K-10 | Band-edge identity | Posed (Proposition 25) | the halo spectrum below $2Mc^2$ per class | level predicted, line absent (S16) | K-19 / — |
| K-11 | Electroweak precision | Consistency [IM] (Proposition 27); discriminating half owed | $\Delta\rho_\mathrm{top}$ from the composite top's own vertex; $(S,T)$ | wrong sign or magnitude | K-5 / K-5 |
| K-12 | Prefactors of $g_4$ and $\epsilon_R$ | Closed in form (Proposition 28) [DF] | $C_R$ and $e^{-2\mu d_\mathrm{halo}}$ | nonperturbative bare coupling required | K-13 / K-13 |
| K-13 | Heliknoton–$Z$ universality | Consistency [DW] (Proposition 29) | — | off by more than $0.3\%$ | K-14 / K-14 |
| K-14 | Collective modes and $\Gamma_h$ | Consistency [IM] (Proposition 30(1)) | kinematics derived; loop channels imported; attractor stiffness from $\Gamma_h$ | as printed in Sec. 8.3 | K-EW-I / K-EW-I |
| K-15 | Anomaly necessity | Executed (Proposition 30(2)) [DW] | — | a consistent texture theory violating a sum | K-EW-II / K-EW-II |
| K-16 | Mixing attractor | Executed (Proposition 30(3)) [DW] | $\sin^2\theta_w = 0.217^{+0.010}_{-0.007}$ on-shell; derive the form of the tilt correction | a band excluding the on-shell value | K-EW-III / K-EW-III |
| K-17 | Strong sector | Posed | linear confinement; line-tension strata; gapped-mediator criterion; quark censorship; hadronic Skyrme model; regression tests (Regge slope, $\sigma/\hbar c$) | a regression test failed | — / K-Q |
| K-18 | Strong-CP relaxation by the $b_P^2$ penalty | Executed for the mechanism (Proposition 31) [DW] | $\bar\theta_\mathrm{eff}\lesssim1\times10^{-45}$, not adjudicable | a $\bar\theta$-type EDM above the CKM background (S22) | K-3 / K-3 |
| K-19 | Junction-stiffness flow | Conjecture (Proposition 32) [CJ] | the junction's effective theory; a controlled flow | screening sign (S23) | K-4 / K-4 |
| K-20 | Top decay before hadronization | Consistency [IM] (Proposition 33) | — | top hadrons predicted | K-15 / K-15 |
| K-21 | Relaxation index $n$ | Executed in form (Proposition 41) [DW]; $n = \tfrac12$ disfavored | the rate law of the diffusive channel (crossing, $n = \tfrac12$, or diffusive, $n = 1$); the perturbation sector; the fit with $\Sigma m_\nu$ free | no $n$ fits, or $w_a<0$ (S29) | K-12 / K-12 |
| K-22 | Gravity | Re-posed; Proposition 42 kept as conditional induction | carrier of gravitational waves in the defect geometry; positivity of its kinetic term; $\lvert c_\mathrm{GW}/c-1\rvert\lesssim10^{-15}$ | ghost; $c_\mathrm{GW}\neq c$ | K-G / K-G |
| K-23 | Pitch–lag coupling | Executed negatively (Proposition 43) | $\lvert\varepsilon_\nu\rvert<10^{-5}$–$10^{-4}$; $\mathcal{X}^{-1}>1.6$–$360\ \mathrm{eV^2}$; no neutrino-mass drift | a $\mu_{pe}$ drift above the bound | K-23 / K-23 |
| K-24 | Undressed knots (dark sector) | Conjecture (Conjecture 1) [CJ]; freeze-in withdrawn | existence; dressing cross-section; relic density; CMB injection; S27 | no undressed solution; overclosure; CMB injection | K-17 / K-17 |
| K-25 | Pair dressing and the 511 keV line | Conjecture (Conjecture 2) [CJ] | dressing threshold and cross-section; thermal history with the Higgs coupling | $m_u<m_e$; morphology; relic mismatch | K-21 / — |
| K-26 | Condensate-relaxation birefringence | Executed (Proposition 47) [DW-conditional] | magnitude; anisotropy spectrum; the locking-quench question; the convention map to the experiments | sign mismatch; low-$\ell$/high-$\ell$ ratio above $0.3$; $\beta\neq0$ with $n>0.98$ | K-8 / K-8 |
| K-27 | Mirror-force amplitude | Posed (Proposition 49) | $\mathcal{A}(r)$, $\mathcal{B}(r)$, with the locking suppression | null below the predicted level (S28) | K-20 / — |

*Table 8. GUM's twenty-seven closures, in the order the paper treats them, with the labels they carried in r1 and r2.*

Of the twenty-seven, ten are executed or closed — two of them conditionally, one negatively, and four only in form or for the mechanism — four are consistency conditions, three are conjectures, one is partially executed, and nine are posed. r2 marked five closures "(new)"; four of them were already posed in r1, and the label was relative to the master. Relative to r1, r3 adds one closure (the strong sector) and loses none; relative to r2 it restores three (the band edge, the mirror force, pair dressing).

## 11.3 Stakes

| Stake | Claim | Adjudicator | Kill | Status | r1 / r2 |
|---|---|---|---|---|---|
| S1 | Inverse-kill battery: photon mass; EP violation; *field-free, frequency-flat Bragg-type* vacuum birefringence (Euler–Heisenberg birefringence in strong fields is inherited); $\rho\neq1$; tree FCNC; $e\neq g\sin\theta_w$; massless charged mode; photon dispersion above Eq. (52); matter–light cone above $10^{-20}$; $c_\mathrm{GW}\neq c$ | community | any confirmed detection | standing | S7 / S7 |
| S2 [RG] | No electromagnetic precursor in $0<t<r/c$ (Flag F6) | pulsed near field; kicked bunches | sidereal-modulated pre-light signal at the $\mu$V/m level | null test | S15 / S15 |
| S3 [RG] | Far-infrared trough with fixed edge at $\zeta_\nu\bar np$ — $24.66$–$24.75\ \mu$m where cosmology allows, $8.7$–$24.7\ \mu$m a priori — dipole-shifted, circularly polarized; core predicts none; depth bounds $\ell_\mathrm{lock}$ (Corollary 3) | JWST MIRI; Spitzer IRS stacks | a trough retires $\ell_\mathrm{lock} = \ell_s$; a null tightens Eq. (33) | $\Delta n/\bar n<4.2\times10^{-17}$ at $22.5$–$24.7\ \mu$m; $\ell_\mathrm{lock}<1.5$ nm | S22 / S22 |
| S4 [RG] | Dense-storage cliff at $n_{50}\approx324$ (ion zone) and $338$ (superconducting die) at $\ell_s = \ell_\mathrm{P}$; width $\le4.45$ qubits; depth-independent | $\ge300$-qubit mirror circuits | flat $\mathcal{P}(n_q)$ through $350$ | open | S16 / S16 |
| S5 | The cliff shifts with $V$, $A$, or $\ell_q$ (K-7) | cross-platform mirror circuits | a cliff without knob dependence | open | S29 / S29 |
| S6 | Finite $c_L$: sidereal bipartite bound Eq. (50); Bancal–Barnea deviation under Flag F8 (K-8) | long-baseline and tripartite Bell tests | bound above the B1 speed (X1); no deviation where predicted | bound-raising | S28 / S28 |
| S7 | $E_\mathrm{rot}/E = j/2$ on a valid bench object | analog benches | a valid bench off $j/2$ | live (kinematic) | S3 / S3 |
| S8 | Valid isorotating bench object; measured $j$ and dilation law $V(j)$ (Flag F9) | chiral metamaterials; liquid-crystal and magnetic solitons | no valid object; $j = 1$; $V(j)$ inconsistent with $(1,1)$ | open | S13 / S13 |
| S9 | $\kappa^2g_\mathrm{tot} = 35/48$ against $7/16$, ratio $5/3$, in the corrected normalization (K-3) | analog benches | outside the band | live | S4$'$ / S4$'$ |
| S10 | Clock phase-locking $\propto\cos\Delta\phi$ | analog benches | no locking | live | S5 / S5 |
| S11 | The discriminator $\kappa^2g_\mathrm{tot}$ on a validated bench | analog benches | outside the band | open | S14 / S14 |
| S12 | $\alpha$–$\mu$ discriminant: stiffness channel ($\alpha$ drifts, $\mu_{pe}$ not) or pitch channel ($\mu_{pe}$ drifts with the profile of Eq. (90), $\alpha$ not) | optical clocks; quasar spectra | joint detection with $\lvert R_{\mu\alpha}\rvert\gtrsim1$; a $\mu_{pe}$ drift above Eq. (91) | null on both | S23 / S23 |
| S13 | Channeling resonance $p_1\propto\ell_\mathrm{row}$: $80.87$, $84.26$, $53.12$ MeV/$c$ | electron beams on thin crystals | absent at all three | one unreplicated report | S24 / S24 |
| S14 | Spatial uniformity of $m_e$ across pitch cells at $10^{-18}$ (K-9) | lattice-clock scan over $100\ \mu$m | pitch-periodic or cell-structured modulation | null expected | — / S32 |
| S15 | Two-scale electron (Eq. (69)) | LEP/LHC archives; $(g-2)_e$ | core above $10^{-19}$ m; $e^\ast$ below the TeV scale | standing | S21 / S21 |
| S16 | o-Ps $\to\gamma X$ line at $\tfrac14m_ec^2(4-\kappa^{-2}) = 255.5$ keV (K-10) | positronium spectroscopy | level predicted, line absent | conditional | S25 / — |
| S17 | Generator form Eq. (72) on the bench | chiral-nematic solitons | $B = 0$; no termination | open | S17 / S17 |
| S18 | $\Sigma m_\nu\in[0.059,\ 0.41]$ eV, normal ordering (K-9, K-3) | DESI DR3; Euclid; JUNO | robust $\Sigma<0.059$ eV; inverted ordering; corrected band below $0.050$ eV | at the $\Lambda$CDM edge ($m_3\le0.0503$ eV) | S1 / S1 |
| S19 | $0\nu\beta\beta$ occurs | LEGEND-1000; nEXO | full-funnel exclusion | live | S6 / S6 |
| S20 | Higgs couplings in the $\eta$-window, family-ordered | HL-LHC | an anomaly outside the window | live | S2$'$ / S2$'$ |
| S21 | Michel $\rho = 3/4$; right-handed currents below $\epsilon_R$ (Proposition 28) | $\mu$ and $\beta$ decay | a right-handed current above the window | live | S8 / S8 |
| S22 | No $\bar\theta$-type EDM above the CKM background (K-18) | nEDM; eEDM | a $\bar\theta$-attributable EDM above $\sim10^{-31}$ e·cm | shared inverse kill | S11 / S11 |
| S23 | Junction-stiffness sign (K-19) | controlled computation | screening sign | conjecture | S12 / S12 |
| S24 | $\theta_{23}$ near-maximal; $\delta_{CP}\to-\pi/2$ per the handedness chain, with normal ordering | DUNE; Hyper-K; JUNO | $\delta_{CP}\approx0,\pi$; wrong sign; normal ordering excluded | live, in tension | S10 / S10 |
| S25 | Printed $n$, perturbations, full distance fit (K-21) | GUM + BAO/SN/CMB | no $n$ fits | executed with the compressed CMB prior: $n>0.949$, or $0.87$–$0.90$ with supernovae; $\Sigma m_\nu$-free fit and perturbations owed | S18 / S18 |
| S26 | Lock-melt gravitational-wave background weak | LISA | a loud first-order electroweak background | live; basis owed | S9 / S9 |
| S27 | Higgs invisible width $3$–$6\%$ if undressed $\tau$-knots exist (Conjecture 1), else $0.11\%$ | HL-LHC $h\to$ invisible | a value outside $\{0.1\%\}\cup[3\%,6\%]$ | ATLAS $<10.7\%$ | — / S31 |
| S28 | $F_{LL}-F_{RR}\neq0$ at $3$–$25\ \mu$m (K-27) | short-range force; molecular parity violation | null below the predicted level | conditional; locking-suppressed in the core | S26 / — |
| S29 | The lag–birefringence pair: $w_a\ge0$ and the posterior on $n$; $\mathrm{sgn}\,\beta = +s$ (counterclockwise) with the profile of Eq. (97); a uniform sign | DESI final; Euclid DR1; SO; LiteBIRD | see Sec. 10.5 | $\beta\neq0$ at $2.9$–$3.6\sigma$; family behind $w_0w_a$ by $\Delta\chi^2 = 7.6$–$16.6$ | S19, S20, S30 / S19/20 |

*Table 9. GUM's twenty-nine stakes, in the order the paper treats them, with the labels they carried in r1 and r2; [RG] marks re-graded stakes.*

r1 had thirty stakes and r2 twenty-seven. Relative to r1, this revision retires one (r1's S27, "laboratory $\nu$ mass exceeds cosmological inference", by Proposition 43), merges three into one (r1's S19, S20 and S30 into Stake S29), and keeps the rest. Relative to r2, it restores two conditional stakes that r2 dropped without comment (Stakes S16 and S28). Stake S26 is inherited from the master in both parents' tables with no derivation in either text; it is kept at its printed grade, and the order of the lock-melt transition that it presupposes is owed.

## 11.4 Cross-locks and the bench validity clause

Bench validity clause: quasi-conservative regime $\Gamma_\mathrm{damp}\ll\omega$; no Bell content is claimable from any bench; failure of an exact ratio on a validated bench falsifies the corresponding derivation as mathematics.

The cross-locks are the load-bearing welds that forbid local repairs:

- **X1 (one longitudinal speed).** The B1 speed $c_L = \sqrt{(\lambda+2\mu)/\rho_0}$ is the tower's update speed, so Stake S6 bounds a modulus of the substrate.
- **X2 (one pitch).** The neutrino mass, the trough's edge, the range of the mirror force, and the advected line are fixed by one length; in the core, the last three share the locking suppression. r2 dropped this cross-lock; it is restored.
- **X3 (one invariance).** Photon masslessness and $\rho = 1$.
- **X4 (one halo).** $\mathfrak{c}$, the $G_F$ suppression, $\epsilon_R$, and the frustration integrals, with Closures K-9 and K-3 owed.
- **X5 (one censor).** Three families and $y_t\approx1$.
- **X6 (one soft coordinate).** The dark-energy lag, the pitch, the neutrino mass, the far-infrared edge, the birefringence profile, and the lepton mass ratios through Proposition 43 — one variable, bounded by one quasar measurement.
- **X7 (one structural scale).** Corollary 10 fixes $\ell_s$ from $G$, up to the regularization factor, so the cliff, $\epsilon_R$, the discreteness term and the core corrections are one number.
- **X8 (one handedness bit).** Family orientation, weak chirality, the sign of $\delta_{CP}$, the strong-CP residual, and through Proposition 47 the birefringence sign and profile; with Proposition 48 the bit is uniform on the sky, and with Proposition 49 it fixes the sign of the mirror force. r2 dropped the last two clauses; they are restored.

## 11.5 House style for agreements

**Definition 11 (Landing versus test).** With theory half-width $\delta_\mathrm{th}$ and experimental uncertainty $\delta_\mathrm{exp}$, an agreement is a *test* if $\delta_\mathrm{th}\lesssim3\delta_\mathrm{exp}$ and a *landing* if $\delta_\mathrm{th}\gtrsim10\delta_\mathrm{exp}$. A landing is reported as "consistent within $\pm\delta_\mathrm{th}$," never as a pull in $\sigma$.

GUM's charged-lepton logarithms, quark spacing ratios, Weinberg-angle band, $N_\nu$ and Regge slope are landings by factors of $10^2$–$10^4$, and GUM reports them as such.

## 11.6 Corrections

GUM applies its ledger to itself. The list consolidates three sets: the fifteen corrections and two errata of r1, the twenty-eight corrections of r2 (of which eleven adopt r1's), and the corrections of this revision, which answer the audit of 2026-10-17 [9]. Items 1–36 are corrections to the master that r1 or r2 made and this revision keeps, with their sources; items 37–67 are new in this revision.

**Kept from r1 and r2.**

**1.** *Kinetic normalization.* The rotational kinetic coefficient is $J$, not $\tfrac12J$, so the kinetic energy is $\tfrac12J|\boldsymbol\omega|^2$ (Sec. 2.6; r1 1, r2 1).

**2.** *Gap modulus.* The relative-rotation gap includes the locking modulus, $\tilde m^2 = 4\mu_c+\tfrac14\tilde m_V^2$ (Eq. (9); r1 2, r2 2).

**3.** *Halo length.* $\lambda_\mathrm{halo} = (c_\psi/c)\hbar/Mc$, not $\hbar/(\sqrt2Mc)$; one formula throughout (Proposition 23; r1 3, r2 5). r1's erratum E1, reproduced: "The first printing stated that the corrected halo length, at fixed frustration integrals, lowers the central $m_3$ from $0.047$ eV to $0.033$ eV, below the oscillation floor, leaving S1's window $0.46\sigma$ above the center. The conversion $m_3c^2=\zeta_\nu\hbar c\,e^{-X}/\lambda_{\mathrm{halo},\tau}$ shows the opposite: $0.047$ eV equals $m_\tau c^2e^{-24.36}$, the value at the corrected length, and the old length would give $0.066$ eV. The correction cannot move the prediction below the floor (Sec. II F, Sec. VIII B, Appendix H)." The labels are r1's: its S1 is Stake S18, and its Sections II F and VIII B and Appendix H are Sections 2.6 and 8.2 and Appendix H here.

**4.** *Cones.* The doublet is exactly lightlike under the cone condition, with no flow required, and $c_\psi>c$ (Proposition 2; r1 4, r2 4). r1's erratum E2, reproduced: "The first printing estimated $(c_\psi-c)/c\lesssim10^{-36}$ for an MeV-scale gap and called it harmless. The correct estimate at that gap is $(\ell_g\omega_0/c)^2/8\approx7\times10^{-30}$. At the weak-scale vacuum gap it is $\approx5\times10^{-20}$, at the edge of the vacuum-Cherenkov bounds, which therefore constrain the grains' radius of gyration, $\ell_g\lesssim7\times10^{-28}$ m (Sec. II C, Sec. V H)." r1's Sections II C and V H are Sections 2.3 and 5.9 here.

**5.** *P5.* Unnecessary in the transverse sector, where $\beta$ renormalizes $\gamma$ (Proposition 6; r1 5; r2 by reference, printed here).

**6.** *Near-field channel.* Withdrawn as an electromagnetic prediction: the transverse completion is acausal, the Gauss completion is exact Maxwell theory for every $c_L$, and any other completion deviates by the field of a defect current (Theorems 5–6); the near-field stake is a null test and $c_L$ moves to the tower (r1 6, r2 23).

**7.** *Longitudinal radiation.* The $\eta(c/c_L)^3$ channel is not an electromagnetic signal: an internal exchange, or a leak of at most $5\times10^{-13}$ (Proposition 4; r1 7, r2 23).

**8.** *Qubit ceiling.* Dimension counting is correct but untestable by circuits; the testable claim is dense storage, with a mirror-circuit protocol replacing verification by peaked or Clifford circuits (Sec. 5.6; r1 8, r2 8).

**9.** *Planck's constant.* Constrained, not derived: one relation among three imports (Proposition 18; r1 text, r2 3).

**10.** *Finite $c_L$.* Confronted with the Bancal–Barnea dichotomy; GUM takes the no-signaling horn (Theorem 13; r1 text, r2 6).

**11.** *Near-BPS window.* A property of a species, stated for the electron and propagated (Table 3; r2 7).

**12.** *The cliff.* Stated with the exact $\mathbb{C}P^N$ ball volume: width $4.45$ qubits, not "$\approx6$" (Proposition 14; r2 8).

**13.** *Structural scale.* Photon timing excludes the top decade of the master's range (Proposition 16; r1 9, r2 9), and the gravity closure fixes $\ell_s$ near $\ell_\mathrm{P}$ (r2 9), with the regularization qualification of correction 55.

**14.** *Pitch.* The master's $26\ \mu$m lay below the oscillation floor that the same draft used (Sec. 4.2; r1 10, r2 10).

**15.** *Far-infrared observable.* A redshift-swept trough with a fixed blue edge, not a non-redshifting line; the transparency bound is $6\times10^{-17}$, not $10^{-31}$ (Theorem 7, Corollary 2; r1 11, r2 11).

**16.** *Feature depth.* With $\ell_\mathrm{lock} = \ell_s$ the core predicts no feature; the doublet–fog closure is closed only conditionally (Sec. 4.4; r2 12).

**17.** *Halo dominance.* The master's "variationally proven" is withdrawn; the closure is re-posed (Proposition 24; r2 13).

**18.** *Grades.* The junction flow to [CJ]; electroweak precision, top decay and the collective modes to [IM]; the $Z$ coupling to [DW], as consistency conditions that reproduce Standard-Model numbers by assuming Standard-Model integrands (r2 14).

**19.** *Strong sector.* The master's cited but unprinted theorems are the deliverables of a posed closure (Sec. 8.4; r2 16).

**20.** *EDM stake.* "$|d_n|\lesssim10^{-39}$ e·cm" was not adjudicable against the CKM background; rephrased as a shared inverse kill (Stake S22; r2 17).

**21.** *Novelty of the dark-energy background.* The relaxation family is the Dvali–Turner family (Proposition 40; r1 13, r2 18).

**22.** *Distance fit.* The master marked it executed without a fit (r2 19); see correction 65.

**23.** *Gravitational waves.* Transverse strain waves are the photon, so the master's $c_\mathrm{GW} = c$ derivation is withdrawn; the gravity closure is re-posed and the cone closure narrowed (Sec. 9.6; r1 12, r2 20).

**24.** *Soft-mode stiffness.* Stated and bounded; the option of neutrinos lighter in the past is excluded; the pitch–lag closure executed negatively (Proposition 43; r2 21).

**25.** *Dark matter.* The master's freeze-in execution is withdrawn (fitted abundance; a Yukawa-strength vertex cannot freeze in; pair creation needs no pinch); the candidate returns to conjecture with the invisible width as its stake (Sec. 9.8; r2 22).

**26.** *Merged stake.* r1's dark-energy and birefringence stakes are one stake with two readouts, and the single-domain stake folds into its kills (Stake S29; r2 24).

**27.** *Inverse-kill battery.* "Forbidden birefringence" reads "field-free, frequency-flat Bragg-type birefringence"; Euler–Heisenberg birefringence is inherited (Stake S1; r2 25).

**28.** *Level 0.* Graded as an embedding theorem whose genuine output is the reduction of objectivity to background independence (Proposition 1; r2 26).

**29.** *Birefringence endpoint property.* No depolarization from fog-scale structure (Proposition 46; r1 14).

**30.** *Notation.* $a\to\ell_s$; $\ell_\mathrm{lock}$ for $\sqrt{\gamma/4\mu_c}$; $n\to n_q$; $p\to\mathsf p$; $\chi\to\mathcal{X}$; $\Gamma\to\Gamma_r$; $q\to q_\mathrm{dec}$ (r1 15, r2 27). r1 also replaced "substrate" by "material"; r2 reversed it, and this revision keeps "substrate" (Sec. 1.2).

**31.** *Integrals.* Every [N] quantity is registered with the grade of what depends on it, and nothing may be built on an unpublished integral until the normalization audit publishes it (Appendix I; r2 28).

**32.** *Lepton shape ratio.* $(A+B)/A$ is the quotient of the other two comparisons and is not independent (Sec. 8.1; r2 text).

**33.** *Neutrino-mass floor.* $\Sigma m_\nu\ge0.059$ eV, not $0.058$ (r2 text).

**34.** *Pair creation.* A pair of opposite degree conserves the total degree and needs no tear (Lemma 5; r2 text and 22).

**35.** *Early dark energy.* The table uses the self-consistent $H$ with radiation (Table 4; r2 Table 4).

**36.** *Electron scale.* $R\sim10^{-15}$ m is the classical-electron scale, not the Compton scale (Theorem 15; r2 text).

**New in this revision.**

**37.** *Condensate tilt.* $\sin\theta_c = \sqrt{1-1/\mathfrak{m}} = 0.69$ is the minimum of a Landau form quartic in $\sin^2\theta$, not of Eq. (25); the actual minimum, $\sin2\theta_c/2\theta_c = 1/\mathfrak{m}$, gives $0.79^{+0.06}_{-0.11}$, propagated to every quantity that uses the tilt (Proposition 7).

**38.** *Weak-mixing landing.* $0.217^{+0.010}_{-0.007}$, not $0.227\pm0.009$; the band contains the on-shell value and not the $\overline{\mathrm{MS}}$ value; $\vartheta = 0.527$, $M_Z/M_W = 1.130$ (Proposition 30).

**39.** *Neutrino-mass ceiling.* The cap $m_3\le0.057$ eV, which fixed the $21.8\ \mu$m end of the pitch window and $\Sigma m_\nu\le0.11$ eV, was asserted, never derived, and is withdrawn (Proposition 8, Stake S18).

**40.** *Bridge uncertainty.* $X = 24.36\pm1.12$ from uncorrelated propagation of the stated inputs, not $\pm0.90$; $2\ln(m_\tau/m_\mu) = 5.645$, not $5.644$ (Eq. (73)).

**41.** *Oscillation inputs.* $\Delta m^2_{21} = 7.5\times10^{-5}$ and $\Delta m^2_{31} = 2.51\times10^{-3}$ eV$^2$ stated; the floor is $0.0501$ eV and the $\Lambda$CDM sliver $[0.0501,\ 0.0503]$ eV. r2's text stated $0.0503$ eV for the floor while its printed edge used $2.51\times10^{-3}$ (Proposition 8).

**42.** *Pitch factor.* The order-unity factor $\zeta_\nu$ of r1, which r2 dropped without a reason, is restored with $\zeta_\nu = 1$ as the minimal hypothesis (Eq. (27)).

**43.** *Normalization of the closure.* In the corrected kinetic normalization, $\kappa = 1/\sqrt2$ requires $\mu_c = \tilde m_V^2/16$, not the inherited $3\tilde m_V^2/16$; the bench values are $35/48$ and $7/16$; at fixed $\hat e_\mathrm{tot}$, $\mathfrak{c} = 128/(9\pi)$ (Proposition 19, Table 2).

**44.** *Gauge statement.* Only time-independent re-conventions are gauge transformations; r2 stated it without the restriction. r1's energy identity is restored (Theorem 4).

**45.** *Spin-closure flag.* The $(1,2)$ dilation is $\sqrt5\approx2.24$, not $1.24$; the flag's two halves, r1's $(3,1)$ alternative and r2's $(1,3)$ alternative, are stated together (Flag F9).

**46.** *Bragg passage.* $R = 1-e^{-\Pi}$ holds for any $\Pi$ in a linear sweep; at the transparency bound the passage is sudden ($\Pi = 0.105$); r2's adiabaticity threshold was wrong in form and number; r1's validity conditions are restored, with the resonant path $(\Delta n/\bar n)c/H$ instead of r1's $(\Delta n/2\bar n)c/H$ (Theorem 7, Appendix E).

**47.** *Amorphous regime.* The step regime of the blue fog and the laboratory terahertz arm, which r2 dropped, are restored (Sec. 4.5, Appendix E).

**48.** *Data claim.* "Every $n<1$ member is therefore further from the data than $\Lambda$CDM" fails for DESY5 under r2's own proxy; the corrected statement and the full fit are printed (Sec. 9.5).

**49.** *Index channel.* r2 printed the diffusive channel as "$\Gamma_r\propto H$, $n = \tfrac12$", which the family's own definition does not allow: a rate proportional to $H$ is $n = 1$. The channel gives $n = \tfrac12$ if the lag relaxes at the crossing rate $c/\xi_c$ and $n = 1$ if it relaxes diffusively; the rate law is a deliverable of the closure (Proposition 41).

**50.** *Lag-bound proof.* The bounds use each member's own $h(3)$ ($4.82$ at $n = \tfrac12$); r2's proof quoted $\Lambda$CDM's, printed as $4.52$ where the stated inputs give $4.53$ (Proposition 43).

**51.** *Lag bound in the abstract.* $10^{-5}$–$10^{-4}$ depending on $n$, not $\lesssim10^{-5}$ (Proposition 43).

**52.** *Adiabatic lag.* r1 stated that for $n<1$ the adiabatic condition $\Gamma_r\gg H$ "fails in the far future". Since $\Gamma_r/H\propto h^{n-1}$, it improves toward the future and fails, if anywhere, in the past; the recombination entries of Table 4 and the birefringence profile require $\Gamma_0/H_0\gg h_\mathrm{rec}^{1-n}$, about $150$ at $n = \tfrac12$, and the condition is now stated where it is used (Proposition 36, Appendix D).

**53.** *Birefringence positivity.* The requirement depends on $n$; the margin is a factor $3$ at $n = \tfrac12$ and $2\times10^4$ at $0.95$, not "three orders" throughout (Sec. 10.2).

**54.** *Birefringence sign.* The rotation sense is stated (counterclockwise as seen by the observer), Eq. (94) is derived in it, and $\varepsilon_5$ is defined as a theory sign; r2 defined $\varepsilon_5 = \mathrm{sgn}[\Theta(t_0)-\Theta(t_e)]$, which equals $s$ (Propositions 46, 47).

**55.** *Induced gravity.* The Sakharov coefficient depends on the regularization; r2 stated a cutoff $\pi/\ell_s$ but used the coefficient for $1/\ell_s$. $\ell_s$ is fixed near $\ell_\mathrm{P}$ to within a factor of a few, and every cliff moves by about $5$ qubits with the cutoff (Corollary 10).

**56.** *Right-handed admixture.* "Closed [DF]" overstated the number: the form is derived, and the printed values set $C_R$ and the exponential factor to one (Proposition 28).

**57.** *Level-0 proof.* r2 invoked Varadhan's small-time manifold asymptotics on a graph; the metric is read off the diffusive regime under the stated hypothesis (H0) (Proposition 1).

**58.** *Photon-timing margin.* At $\ell_s\simeq\ell_\mathrm{P}$ the bound is met by about eight orders of magnitude in $\ell_s$, not twenty-six (Sec. 5.9).

**59.** *Band edge.* r1's band-edge dichotomy, the positronium stake and its closure, which r2 dropped without comment, are restored; r2's assertion of alternative (a) is stated as the core's choice (Sec. 7.3).

**60.** *Mirror test.* r1's mirror test of short-range forces, its closure and its stake are restored, with the locking-suppression condition on the amplitude (Sec. 10.4).

**61.** *Advected structure.* r1's advected-structure proposition and the $15$ GHz line are restored, with the caveat that their amplitude carries the locking suppression (Sec. 4.7).

**62.** *Pitch tomogram.* r1's tomogram is restored as a null prediction: with the lag bounded, the edge is fixed to $9\times10^{-6}$ out to $z\simeq3$ (Corollary 4).

**63.** *Pair dressing.* r1's 511 keV conjecture, its closure, and the featherweight-residue watch item are restored, with the consistency question that the Higgs coupling raises (Sec. 9.8).

**64.** *Further restorations.* r1's quantum non-equilibrium discriminator (Sec. 5.3); its remark that $w\ge-1$ dark energy tightens the neutrino bound (Sec. 8.2); the discriminating half of the electroweak-precision closure; its strong-sector statements, as the deliverables of the strong-sector closure; the zero-point ledger figures; the explanation of why Clifford and peaked circuits cannot test dense storage (Appendix C); the bipartite bound's numerical example (Appendix F); the Bragg-gap argument; the hosting rows H$_A$, H$_R$ and Schmidt, recomputed at $\ell_\mathrm{P}$ (Table 1); the $\alpha_\mathrm{DT}$ column; the citations of Böhmer–Downes–Vassiliev, Kholmetskii et al., de Sangro et al., and Lan et al.; the pitch cross-lock and two clauses of the handedness cross-lock; the domain proposition and the band-edge numbers, printed in full rather than adopted by reference.

**65.** *Data.* The distance fit is executed with the compressed CMB prior and three supernova compilations (Table 6), and the far-infrared trough's status records two archival Spitzer tests, $\Delta n/\bar n<4.2\times10^{-17}$ (Sec. 4.5); both come from the audit of 2026-10-17.

**66.** *Numbering.* Every section, equation, statement, table, flag, stake, closure, cross-lock and correction is numbered in order of appearance; the ledger tables show the legacy labels and Appendix K maps every labeled statement of r1 and r2.

**67.** *Housekeeping.* r2's companion files cited non-existent `gum/manuscript/` paths and an absent bibliography file; this revision's files are self-consistent, its references are numbered in order of first citation, and every cited work is listed. Rounding variants of the parents — the species windows of $d$ and $t$, the cliff range $235$–$330$ against $234$–$329$, the edge $24.7$ against $24.6\ \mu$m — are replaced by single roundings of computed values (Appendix H), and the incoherent-regime estimate, $3\times10^{-16}$ in r2 and $10^{-16}$ in r1, is stated once, with the $10\%$ attenuation criterion of the coherent bound. Two slips in r1's appendices are corrected where they are reprinted: the variation of $\tilde P$ is $-(\tilde R^{-1}\delta\tilde R)\tilde P$, not $-(\delta\tilde R\,\tilde R^{-1})\tilde P$, and the Marchenko–Pastur bound $F_\chi\le4\chi/2^m$ is nearly saturated for $\chi\ll2^m$, not "loose by a factor of about two" there (Appendices A and C); r1's illustrative drift ratio $0.82$ at $n = \tfrac12$ used $h(2)\simeq3.0$ instead of the member's own $3.26$, which gives $0.80$ (Appendix D). r2 used $\epsilon_\nu$ for both the lag fraction and the heliknoton's near-BPS lift; the lift is $\epsilon_\mathrm{H}$ here (Proposition 29). r2's stiffness bound at $n = 0.9$, $6.8\ \mathrm{eV^2}$, was computed from a rounded intermediate; the stated inputs give $6.7\ \mathrm{eV^2}$ (Eq. (92)). r2's radiation pulse in the near-field example, $3\times10^{-3}$ V/m, is about $10^{-2}$ V/m for the displacement and time it states (Sec. 3.4).

# 12. Conclusion

GUM asks what substrate could possess quantum mechanics as its coarse-grained bookkeeping, and it answers with a specific candidate. At its continuum level the candidate is a chiral micropolar continuum whose response modes are the photon, the electron, mass, charge, and Planck's constant — the last constrained rather than derived. This revision merges two independent corrections of the master manuscript: it keeps what is consistent in both, corrects what the audit of 2026-10-17 found wrong in either, and restores what one of them dropped without a reason.

The core is the following. A theorem pair about the nineteenth century holds whatever the vacuum is made of: MacCullagh's aether is inconsistent as a Cauchy continuum and consistent as the orientation sector of a micropolar one (Theorems 2–3). A rewriting of Maxwell's equations follows, which GUM does not call an explanation (Theorem 4), together with an exact statement of when the photon is exactly lightlike (Proposition 2). A locality theorem shows that the substrate's longitudinal sector either signals instantaneously or reproduces Maxwell's theory exactly, in the velocity gauge, for every longitudinal speed (Theorems 5–6). The finite speed therefore lives in the quantum tower, where it is exposed to timing and multipartite tests (Proposition 15, Theorem 13). The tower reproduces sequential Lüders projection and has a capacity with data attached (Proposition 13, Theorem 8). A dimension-counting theorem shows why a finite classical substrate has "no room" for the wave function, and a reachable-set theorem shows why no circuit can catch it in the act (Theorems 9, 10). The testable remainder — dense storage and its mirror-circuit cliff, at most $4.45$ qubits wide and near $324$–$338$ qubits at the gravity-fixed structural scale — is sharper than the headline it replaces (Theorems 11, 12, Corollary 8). The closure of $\hbar$ separates into a kinematic identity and a flagged constitutive commitment (Lemma 4, Theorem 14, Flag F9), and the de Broglie clock, taken as a physical rotation, predicts the $\alpha$–$\mu$ discriminant and a channeling resonance (Propositions 21, 22). The electron has two scales and a band edge that poses a question with a positronium answer (Theorem 15, Propositions 23, 25). A helical vacuum imprints a far-infrared trough with a fixed edge, whose depth bounds the locking length (Theorem 7, Corollary 3). An exactly solvable cosmology — the Dvali–Turner family, reached from a substrate lag — predicts $w_a\ge0$ and sits on the wrong side of the data, which GUM said in advance and the full fit now quantifies (Propositions 36–41, Table 6). The constancy of $m_p/m_e$ bounds that lag and, through one soft coordinate, ties it to the pitch, the neutrino mass, the far-infrared edge and the birefringence profile (Proposition 43). And a handedness bit links weak chirality, $\delta_{CP}$, birefringence, and a mirror test of short-range forces (Propositions 45–49).

Around the core, the electroweak, strong, flavor, and anomaly sectors reproduce the Standard Model's postulate layer at their ledger grades, and GUM's own audit labels them non-discriminating: consistency conditions that any substrate must satisfy, and that GUM satisfies. The dynamical precision core of the Standard Model — running couplings, cross sections, absolute masses — is largely unearned and is printed as such, with closures posed and kills signed. The normalization audit is partly executed (Proposition 19): the closure's integrals are in one convention, the bench ratio $5/3$ is normalization-free, and every remaining [N] quantity is registered with the grade of what depends on it (Appendix I). Until the audit is complete, the flavor and neutrino stakes are to be read at the grades printed beside them.

What changed in the merge is itself a finding. Thirty-one of the corrections of Sec. 11.6 are new. Some are arithmetic: the condensate tilt, which moves the Weinberg-angle landing onto the on-shell value and off the $\overline{\mathrm{MS}}$ one; the bridge's uncertainty; the dilation of the spin flag. Some are logical: an asserted neutrino-mass cap that fixed one end of the pitch window; a gauge statement without its restriction; an adiabaticity threshold wrong in form; a data claim contradicted by its own proxy; a sign stated without a convention; an index selection that the family's own definition does not allow. The rest restore results that one sibling dropped without saying so. A ledger is only as good as its owner's willingness to apply it to itself, and this revision was produced by applying it.

Is the vacuum a GUM substrate? The honest present answer is that a substrate of this kind has signatures it cannot avoid, and that the corrections of the master have moved them. It cannot avoid a longitudinal speed, but that speed shows up in the timing of quantum correlations rather than in electromagnetism. It cannot avoid a finite representational capacity, but the capacity shows up as a mirror-circuit cliff only if the substrate stores states densely, which is a hypothesis GUM states rather than assumes. It cannot avoid a structural scale and a pitch, which appear as a far-infrared edge, a micrometre range for vacuum handedness, and a neutrino mass at the edge of what cosmology allows; the pitch does not drift measurably, because the proton-to-electron mass ratio in distant quasar spectra forbids it. And if its clock is real, it cannot avoid the crystal rows of a channeling experiment.

Heisenberg expelled the trajectory because he could not measure it. GUM readmits it on the condition that the substrate carrying it can be measured instead. The twenty-nine stakes of Table 9 are where GUM intends to be measured.

Standing by for adjudication.

# Appendix A: Cosserat Kinematics, Objectivity, Normalization, and Imports

## A.1 Nonlinear objectivity

Under a rigid rotation $\mathsf R_0\in SO(3)$ of the whole, $\mathsf F\to\mathsf R_0\mathsf F$ and $\tilde Q\to\tilde R_0\tilde Q$, with $\tilde R_0$ a lift of $\mathsf R_0$. The polar factor transforms as $\mathsf R[\mathbf u]\to\mathsf R_0\mathsf R[\mathbf u]$, so the relative texture $\tilde P = \tilde R[\mathbf u]^\dagger\tilde Q$ of Eq. (1) is invariant. A potential built from $\tilde P$ and its derivatives is objective; one built from $\tilde Q$ alone is not. The Maurer–Cartan currents $L_i = \tilde P^{-1}\partial_i\tilde P$ obey $\partial_iL_j-\partial_jL_i+[L_i,L_j] = 0$, and $\int b_P\,d^3x = K$ for textures with $\tilde P\to\mathbb 1$ at infinity; the hedgehog $\tilde P = \exp[if(r)\hat{\mathbf x}\cdot\boldsymbol\sigma]$ with $f(0) = \pi$ and $f(\infty) = 0$ has $K = 1$. At level 0 the same invariance is item (3) of Proposition 1: the comparators $U_{vv'}$ refer to no ambient space, so no coarse-grained functional of them can depend on absolute orientation.

## A.2 Linearization

With $\mathsf F = \mathbb 1+\nabla\mathbf u$, $\mathsf R[\mathbf u] = \mathbb 1+\tfrac12(\nabla\mathbf u-\nabla\mathbf u^{\mathsf T})+O(u^2)$, with axial vector $\tfrac12\nabla\times\mathbf u$, and $Q = \mathbb 1+[\boldsymbol\varphi]_\times+O(\varphi^2)$. Hence $\boldsymbol\psi = \boldsymbol\varphi-\tfrac12\nabla\times\mathbf u$ and $e_{ij} = \partial_iu_j-\epsilon_{ijk}\varphi_k$, Eqs. (2) and (3). To the same order $\tilde P\simeq\exp(i\boldsymbol\psi\cdot\boldsymbol\sigma/2)$, so that $\sigma_P = \cos(|\boldsymbol\psi|/2)$ and $1-\sigma_P = |\boldsymbol\psi|^2/8+O(\psi^4)$. With Lemma 2 the quadratic part of $W$ in the relative rotation is $2\mu_c|\boldsymbol\psi|^2+\tfrac18\tilde m_V^2|\boldsymbol\psi|^2 = \tfrac12\tilde m^2|\boldsymbol\psi|^2$, which is Eq. (9). Because $\tilde P$ depends on $\mathbf u$ through $\tilde R[\mathbf u]$, the potential sector also exerts a force stress: from $\delta\tilde P = -(\tilde R^{-1}\delta\tilde R)\tilde P$, the variation $\delta W_{6+0}/\delta\mathbf u$ contributes to the B1 and B4 blocks of Proposition 2. Tracking it is what makes Theorem 1 an all-orders statement.

## A.3 Normalization conventions

For $\tilde Q^{-1}\partial_t\tilde Q = \tfrac i2\boldsymbol\omega\cdot\boldsymbol\sigma$ one has $(\tilde Q^{-1}\partial_t\tilde Q)^\dagger(\tilde Q^{-1}\partial_t\tilde Q) = \tfrac14|\boldsymbol\omega|^2\mathbb 1$, with trace $\tfrac12|\boldsymbol\omega|^2$. The coefficient $J$ in Eq. (4) therefore gives the rigid-rotor energy $\tfrac12J|\boldsymbol\omega|^2$, and in the linear theory $\tfrac12J\dot{\boldsymbol\varphi}^2$; the master's coefficient $\tfrac12J$ gave half of each. The quadratic part of $W$ in the relative rotation is $\tfrac12\tilde m^2|\boldsymbol\psi|^2$ with $\tilde m^2 = 4\mu_c+\tfrac14\tilde m_V^2$, whence $\omega_0^2 = \tilde m^2/J$. The transverse curvature energy is $\tfrac14\gamma_\mathrm{eff}|\nabla\times\boldsymbol\varphi|^2$ by Proposition 6. The B1 energy used in Proposition 4 is $\tfrac12\varepsilon^\ast(c_L^{-2}\dot\Phi_c^2+|\nabla\Phi_c|^2)$, the normalization in which Eq. (17) is the Euler–Lagrange equation with source term $\rho_q\Phi_c$. In these conventions the compacton inertia is $\mathfrak i_0 = 512/(105\pi)$, the closure value $\kappa = 1/\sqrt2$ requires $\mu_c = \tilde m_V^2/16$, and the bench values are $35/48$ and $7/16$ (Proposition 19). Every other [N] number was computed in the master's conventions and is held under Closure K-3 (Appendix I).

## A.4 Imports and flagged commitments

The imports are six moduli $(\lambda,\mu,\mu_c,\alpha,\beta,\gamma)$ and two inertias $(\rho_0,J)$ [8]; the chiral couplings $\chi_{1,2,3}$; the topological constants $(\kappa_S,\Lambda,\tilde m_V,c_2)$; the structural scale $\ell_s$; and the locking length $\ell_\mathrm{lock} = \sqrt{\gamma/4\mu_c}$. Of these, GUM:

- fixes $c^2 = \gamma_\mathrm{eff}/2J$ and imports the cone condition Eq. (12) (Closure K-2);
- imports $c_L$, bounded below by Bell timing (Proposition 15), and the Gauss-completion constraint Eq. (21) (Flag F6, Closure K-4);
- fixes one relation among $(\Lambda,J,\hbar_\mathrm{stat})$ by closure (Proposition 18), and the ratio $\mu_c/\tilde m_V^2 = 1/16$ by the closure value of $\kappa$ (Proposition 19);
- fixes $\ell_s$ near $\ell_\mathrm{P}$ by induced gravity, to within a regularization factor (Corollary 10), with photon timing as an independent upper bound (Proposition 16), and bounds $\ell_\mathrm{lock}$ by the far-infrared trough (Corollary 3);
- imports the fine-structure constant as a constitutive ratio, lands the mixing modulus $\vartheta$ from the condensate tilt with an asserted correction form (Proposition 30), and takes the pitch factor $\zeta_\nu = 1$ as its minimal hypothesis (Eq. (27));
- bounds the relaxation index to $n\in[\tfrac12,1]$ by its dissipation channels (Proposition 41), lets the distance fit place it near one (Table 6), and bounds the soft-mode stiffness $\mathcal X^{-1}$ from below (Proposition 43);
- derives the near-BPS window, the margin $\mathfrak m$, and the frustration constants as [N] quantities from the couplings (Appendix I).

The flagged constitutive commitments are eleven: objectivity (Flag F1), chiral transduction (Flag F2), the Skyrme quartic (Flag F3), the near-BPS window (Flag F4), the periodic-on-average isotropic lattice (Flag F5), the Gauss completion (Flag F6), the blue fog (Flag F7), no signaling (Flag F8), the spin closure (Flag F9), the fermionic heliknoton (Flag F10), and the weak triplet (Flag F11). r1 and r2 carried the master's flag numbers, with gaps and two-number labels; Appendix K maps them. A substrate proposal is measured by these lists as much as by its theorems.

# Appendix B: Proofs for the Electrodynamic Sector

## B.1 Euler–Lagrange equation of the orientation sector

With $\mathcal L_\perp = \tfrac12J\dot{\boldsymbol\varphi}^2-\tfrac14\gamma_\mathrm{eff}|\nabla\times\boldsymbol\varphi|^2$ and $\delta\int|\nabla\times\boldsymbol\varphi|^2 = 2\int(\nabla\times\nabla\times\boldsymbol\varphi)\cdot\delta\boldsymbol\varphi$,
$$
J\ddot{\boldsymbol\varphi} = -\tfrac12\gamma_\mathrm{eff}\nabla\times\nabla\times\boldsymbol\varphi = \tfrac12\gamma_\mathrm{eff}\big(\nabla^2\boldsymbol\varphi-\nabla(\nabla\cdot\boldsymbol\varphi)\big), \tag{B1}
$$
the wave equation with $c^2 = \gamma_\mathrm{eff}/2J$ on the transverse subspace, used in the proof of Theorem 4. The factor $\tfrac12$ traces to $\Gamma_{[ij]}\Gamma_{[ij]} = \tfrac12|\nabla\times\boldsymbol\varphi|^2$.

## B.2 Symmetric wryness in the transverse sector

For a divergence-free micro-rotation decaying at infinity, $\int\Gamma_{(ij)}\Gamma_{(ij)} = \tfrac12\int|\nabla\times\boldsymbol\varphi|^2$ (Proposition 6), so $\beta$ renormalizes $\gamma\to\gamma_\mathrm{eff}$ in the transverse sector and $\alpha$ does not act there. The master's P5, which confined $\alpha$ and $\beta$ to the longitudinal sector, is therefore unnecessary for the transverse sector, and its longitudinal content is replaced by Flag F6.

## B.3 The locked doublet in the strict locking limit

In the limit $\tilde m\to\infty$ the constraint $\boldsymbol\varphi = \tfrac12\nabla\times\mathbf u$ holds exactly (Lemma 2), and the transverse Lagrangian becomes $\tfrac12\rho_\mathrm{eff}(k)|\dot{\mathbf u}_\perp|^2-\tfrac12\mathcal K_\mathrm{eff}(k)k^2|\mathbf u_\perp|^2$ with $\rho_\mathrm{eff} = \rho_0+\tfrac14Jk^2$ and $\mathcal K_\mathrm{eff} = \mu+\tfrac18\gamma_\mathrm{eff}k^2$. The phase velocity is $c_T^2(k) = (\mu+\tfrac18\gamma_\mathrm{eff}k^2)/(\rho_0+\tfrac14Jk^2)$, independent of $k$ if and only if $\mu/\rho_0 = \gamma_\mathrm{eff}/2J$. Proposition 2 shows that the same condition makes the doublet exact at finite $\tilde m$: the determinant factorizes as $\Delta(\rho_0J\Delta-\rho_0\tilde m^2-\tfrac14J\tilde m^2k^2)$, so the root $\Delta = 0$ survives at every locking strength. The master's crossover wavenumbers $\sqrt{\mu/\gamma}$ and $\sqrt{\rho_0/J}$ are therefore irrelevant to the doublet once the cone condition holds.

## B.4 Existence and uniqueness of the Gauss completion

Let $(\rho_q,\mathbf j_q)$ be conserved and vanish in the far past, with retarded Maxwell fields $(\mathbf E^M,\mathbf B^M)$. Define $\Phi_c$ by Eq. (17) with retarded conditions, set $\mathbf E_\varphi\equiv\mathbf E^M+\nabla\Phi_c$, and define $\boldsymbol\varphi$ by $\kappa_B\boldsymbol\varphi(t) = -\int_{-\infty}^t\mathbf E_\varphi\,dt'$. Then:

- $\kappa_B\partial_t\nabla\times\boldsymbol\varphi = -\nabla\times\mathbf E^M = \partial_t\mathbf B^M$, so $\kappa_B\nabla\times\boldsymbol\varphi = \mathbf B^M$;
- $\partial_t\mathbf E_\varphi = c^2\nabla\times\mathbf B^M-\mathbf j_q/\varepsilon^\ast+\partial_t\nabla\Phi_c$, which is Eq. (18) with the torque current of (G);
- $\kappa_B\nabla\cdot\boldsymbol\varphi = -\int(\rho_q/\varepsilon^\ast+\nabla^2\Phi_c)\,dt' = -c_L^{-2}\partial_t\Phi_c$, which is Eq. (21).

Hence (G) has a solution with exactly Maxwell fields, and uniqueness follows from Theorem 5 with $\mathbf j_\mathrm{def} = 0$. The construction is Jackson's velocity gauge [26] with the potentials promoted to substrate fields, $\mathbf A = \kappa_B\boldsymbol\varphi$ and $\Phi = \Phi_c$.

## B.5 Two-cone near fields

For completions with $\mathbf j_\mathrm{def}\neq0$, the space-time structure of the deviation near a source is that of Stokes's solution for an isotropic elastic medium with two speeds [39]. For an impulsive point force $X_j\delta(t)\delta^3(\mathbf x)$ in a medium of density $\rho$ with speeds $c_1>c_2$, the displacement contains, besides the far-field fronts at $r/c_1$ and $r/c_2$, the near-field term
$$
u_i^\mathrm{NF}(\mathbf x,t) = \frac{3\gamma_i\gamma_j-\delta_{ij}}{4\pi\rho\,r^3}\,t\,X_j\qquad\text{for}\ \ \frac{r}{c_1}\le t\le\frac{r}{c_2}, \tag{B2}
$$
with $\gamma_i = x_i/r$, and zero outside that window. A local completion with a fast longitudinal channel and $\mathbf j_\mathrm{def}\neq0$ produces fields of this form between the $c_L$ and $c$ cones. This is the space-time signature that the near-field experiment of Sec. 3.4 searches for, with the amplitude supplied by Closure K-4; under Flag F6 it vanishes.

## B.6 Longitudinal flux and the master's radiation estimate

The far-zone retarded potential of a neutral oscillating source, $\Phi_c\simeq\hat{\mathbf n}\cdot\dot{\mathbf d}(t-r/c_L)/(4\pi\varepsilon^\ast c_Lr)$, carries the flux $-\varepsilon^\ast\dot\Phi_c\nabla\Phi_c$, which integrates over a sphere to $\ddot{\mathbf d}^2/(12\pi\varepsilon^\ast c_L^3)$, against Maxwell's $\ddot{\mathbf d}^2/(6\pi\varepsilon^\ast c^3)$; the ratio is Eq. (22). The master estimated the power radiated into B1 as $\eta(c/c_L)^3$ times the doublet's and treated it as an electromagnetic channel. Under (G) no such channel exists in $(\mathbf E,\mathbf B)$ (Corollary 1). If the longitudinal sector carries positive-definite energy, the same scaling reappears in Proposition 4 with $\eta = \tfrac12$, as a leak of energy that the source must pay for, bounded by $5\times10^{-13}$ of the dipole power for $c_L\ge10^4c$.

# Appendix C: Capacity, Reachable Sets, and the Mirror Protocol

## C.1 Page spectra, multiplicativity, and the cross-entropy argument

For a Haar-random state of $2m$ qubits split $m|m$, the reduced density matrix is Wishart with unit aspect ratio, whose spectrum converges to the Marchenko–Pastur law on $[0,4\cdot2^{-m}]$ [62; 63]; hence $F_\chi\le4\chi/2^m$ (Corollary 5). The bound is nearly saturated for $\chi\ll2^m$, where the largest eigenvalues sit at the upper edge of the law, and loose by a factor of about $1.6$ at $\chi = 2^m/4$. If the prepared state is $\rho = F_\mathrm{noise}|\Phi\rangle\langle\Phi|+(1-F_\mathrm{noise})\rho_\mathrm{dep}$, with $|\Phi\rangle$ a truncated coherent preparation of fidelity $F_\mathrm{trunc}$ to the ideal, and the discarded Schmidt component has Porter–Thomas statistics uncorrelated with the ideal probabilities, then linear cross-entropy benchmarking estimates $F_\mathrm{noise}F_\mathrm{trunc}$; with Theorem 8 this gives Eq. (43). Relaxing $F_\mathrm{trunc}\ge0.8$ to $F_\mathrm{trunc}\ge0.5$ lowers the bound to $\chi_\mathrm{max}\gtrsim8\times10^{6}$. The assumption that the cut saturates at the Page value after 14 cycles on the $9\times6$ grid is conservative, since light-cone counting across a cut of six qubits admits several ebits per cycle [64].

## C.2 Covering numbers in $\mathbb{C}P^N$

With the Fubini–Study metric, $\mathbb{C}P^N$ has volume $\pi^N/N!$, and a geodesic ball of radius $\delta$ has volume $(\pi^N/N!)\sin^{2N}\delta$, equal to the total at $\delta = \pi/2$. The $\delta$-covering number is therefore at least $\sin^{-2N}\delta$, whose logarithm, with $N = 2^{n_q}-1$, is the left side of Eq. (44) with no free constant. For two pure states at Fubini–Study distance $\delta$, $|\langle\phi|\psi\rangle|^2 = \cos^2\delta$, so $\sin^2\delta = 1-F$, and Eq. (44) and Proposition 14 read directly in fidelity.

## C.3 History storage in detail

The history-storing substrate of Corollary 6 holds $\Theta\in[0,2\pi]^{N_gp}$ and nothing else. To supply a conditional field of the tower at a point it must evaluate an amplitude of the form $\langle x|G_{N_g}\cdots G_1|0\rangle$, which for generic circuits is a tensor-network contraction of cost exponential in the entanglement across the relevant cut. Such a substrate is therefore neither local — the amplitude at a point depends on the whole of $\Theta$ — nor fast. It evades Theorem 9 only by giving up what makes the tower a tower. That is why dense storage (Definition 6) is the natural hypothesis for GUM, and why the hypothesis must still be stated rather than assumed.

## C.4 Why Clifford and peaked circuits do not test dense storage

The master proposed verifying the capacity bound with Clifford circuits, peaked circuits, or error-corrected logical states. Stabilizer states form a finite set of size $2^{O(n_q^2)}$ and are specified by an $O(n_q^2)$-bit tableau, so a substrate can host every Clifford output with polynomially many degrees of freedom; peaked circuits are likewise specified by their compact descriptions. Neither family forces a substrate to host a Haar-typical state. The mirror protocol uses non-Clifford two-qubit gates — Haar-random $SU(4)$ elements or a dense gate set — so that the midpoint is typical in the sense required by Eq. (47), while the return probability remains verifiable without simulation. Error-corrected logical registers are admissible for the opposite reason: a scrambled logical state is also a volume-law physical state.

## C.5 The protocol and its resources

The protocol of Sec. 5.7 has four steps: scrambling first halves at fixed depth; calibration of $F_\mathrm{noise}$ by cycle benchmarking on sub-registers, where every hosting hypothesis predicts $\mathcal P = 1$; $\mathcal P(n_q)$ at two or more depths above the scrambling depth; and the knob scan of Corollary 7. With two-qubit error $\epsilon_2$, the calibrated fidelity of a circuit with $N_{2q}$ two-qubit gates is $F_\mathrm{noise}\simeq e^{-\epsilon_2N_{2q}}$. A log-depth scrambler with all-to-all connectivity uses about $\tfrac12n_q\log_2n_q$ gates per half, so $N_{2q}\simeq n_q\log_2n_q$ in total; a two-dimensional nearest-neighbor layout needs depth of order $\sqrt{n_q}$ per half [64], so $N_{2q}\simeq n_q^{3/2}$. Requiring $F_\mathrm{noise}\ge e^{-7}\simeq9\times10^{-4}$ at $n_q = 300$ gives $\epsilon_2\lesssim7/2469 = 2.8\times10^{-3}$ and $\epsilon_2\lesssim7/5196 = 1.3\times10^{-3}$, the thresholds of Sec. 5.7. At that floor, measuring $P_\mathrm{ret}$ to $3\%$ relative precision takes about $1/(0.03^2\times9\times10^{-4})\simeq1.2\times10^6$ shots per circuit instance. Beyond the midpoint the bound falls by a factor of two per qubit, so a scan in steps of four qubits across $n_q^\ast\pm20$ resolves the cliff with a few dozen instances per point, and depth independence is tested by repeating the scan at two depths.

# Appendix D: The Relaxation Family

## D.1 Background equation

With $\rho_\mathrm{DE} = \rho_{\mathrm{DE},0}(H/H_0)^{2(1-n)}$, Eq. (85) reads
$$
\left(\frac{H}{H_0}\right)^2 = \Omega_{m,0}a^{-3}+\Omega_{r,0}a^{-4}+\Omega_{\mathrm{DE},0}\left(\frac{H}{H_0}\right)^{2(1-n)}, \tag{D1}
$$
an implicit algebraic equation for $H(a)$, solved by fixed-point iteration at each $a$ for $n>0$; it is linear at $n = 0$ (Corollary 9) and $\Lambda$CDM at $n = 1$. Table 4, Proposition 39, the profile Eq. (97) and the lag bound Eq. (91) all use it, with $\Omega_{m,0} = 0.31$, $\Omega_{\mathrm{DE},0} = 0.69$ and $\Omega_{r,0} = 9.1\times10^{-5}$. Because $w_\mathrm{DE}$ depends on $a$ only through $\Omega_\mathrm{DE}(a)$ (Proposition 36), $w(a)$ is monotone and bounded in $[-1,0]$, and for $n<1$ it saturates at $w\to0$ at high redshift.

## D.2 The CPL proxy

The CPL form $w_0+w_a(1-a)$ [104; 105] is accurate near $a = 1$ and overshoots at high redshift, where the family saturates; a fit of the family to data should therefore use Eq. (D1) directly, as the full fit of Table 6 does. The proxy of Table 5 fits each member's $w(a)$ by least squares to the CPL form over $0<z<2$, uniformly in $a$, and approximates the DESI DR2 + CMB + supernova posteriors [45] as Gaussians in $(w_0,w_a)$ with correlation $-0.9$ and the published marginal widths, the asymmetric $w_a$ errors symmetrized: Pantheon+ $(-0.838\pm0.055,\ -0.62\pm0.205)$, Union3 $(-0.667\pm0.088,\ -1.09\pm0.29)$, DESY5 $(-0.752\pm0.057,\ -0.86\pm0.215)$. $\Delta\chi^2$ is converted to a Gaussian-equivalent significance for two parameters. The proxy reproduces DESI's quoted $2.8\sigma$ and $4.2\sigma$ for $\Lambda$CDM to within $0.3\sigma$. Its fitted $w_a$ differs from the derivative $w_a$ of Table 4 — $+0.313$ against $+0.29$ at $n = \tfrac12$ — because the fit averages over $0<z<2$.

## D.3 The lag equation and its adiabatic condition

The structural law and the lag both follow from the relaxation equation $\dot{\delta q} = -\Gamma_r\,\delta q+SH$. In the adiabatic limit $\Gamma_r\gg H$ the lag follows its source, $\delta q\to SH/\Gamma_r$; with $\Gamma_r = \Gamma_0(H/H_0)^n$ it scales as $h^{1-n}$, and Eq. (81) turns it into $\rho_\mathrm{DE}\propto H^{2(1-n)}$. The index $n$ is the scaling of the soft manifold's relaxation rate with the expansion rate, and Proposition 41 relates it to the damping channels.

The adiabatic condition is a consistency requirement with a direction. Since $\Gamma_r/H = (\Gamma_0/H_0)\,h^{n-1}$, for $n<1$ the ratio grows as $H$ falls: in the future $H\to\Omega_{\mathrm{DE},0}^{1/2n}H_0$, the condition only improves, and $w\to-1$ is approached asymptotically. Going back in time the ratio falls, so the adiabatic law holds back to the redshift at which $h^{1-n}\simeq\Gamma_0/H_0$ and fails before it. The recombination entries of Table 4, the birefringence profile Eq. (97) and the positivity requirement of Sec. 10.2 therefore need $\Gamma_0/H_0\gg h_\mathrm{rec}^{1-n}$, with $h_\mathrm{rec} = 2.34\times10^4$: about $150$ at $n = \tfrac12$, $12$ at $0.75$, $2.7$ at $0.9$ and $1.7$ at $0.95$. The lag bound needs only $\Gamma_0/H_0\gg h(3)^{1-n}$, which is $2.2$ at $n = \tfrac12$. At $n = 1$ the condition is scale-free. The crossing-rate channel of Proposition 41 has $\Gamma_r = (cH/p)^{1/2}$, so $\Gamma_0/H_0 = (c/pH_0)^{1/2}\approx2\times10^{15}$ and the condition holds at every epoch the paper uses. r1 wrote that the condition fails in the far future; it is the past where it can fail (correction 52).

The same equation, applied to the condensate tilt on the same manifold, gives the tilt law Eq. (96) and the profile Eq. (97); applied to the pitch, it gives Eqs. (89) and (90), whose amplitude Eq. (91) bounds.

## D.4 The drift door in numbers

With the self-consistent $h(z)$ of Eq. (D1), $h(3) = 4.82$, $4.62$, $4.56$ and $4.55$ for $n = \tfrac12$, $0.75$, $0.9$ and $0.95$, against $4.53$ for $\Lambda$CDM, and $[h(3)^{1-n}-1] = 1.19$, $0.47$, $0.16$ and $0.079$, which with $\kappa_\mathrm{far} = 0.1065$ give the four bounds of Eq. (91). r1 illustrated its drift option with $(n,\varepsilon_\nu) = (0.5,-0.2)$, $(0.8,-0.3)$ and $(0.8,-0.5)$. With the self-consistent $h(2) = 3.26$ at $n = \tfrac12$ and $3.08$ at $n = 0.8$, Eq. (89) gives $m_3(2)/m_3(0) = 0.80$, $0.89$ and $0.75$; r1 printed $0.82$ for the first, from $h(2)\simeq3.0$, which holds only near $n = 1$. The linear formula itself would fail near $z\simeq12$ and $z\simeq80$ for the first two, where $|\varepsilon_\nu|h^{1-n}$ reaches one. Each of those lags exceeds the bound of Eq. (91) by four orders of magnitude, which is why the option is retired (Sec. 9.7).

# Appendix E: The Cosmological Bragg Passage

## E.1 Coupled-mode equations and the Landau–Zener limit

A cholesteric of pitch $p$ has a dielectric modulation of period $p/2$ and Bragg wavevector $K = 4\pi/p$. For propagation along the axis, the forward and backward amplitudes $A$ and $B$ of the co-handed circular polarization obey
$$
\frac{dA}{d\ell} = ig_c\,e^{-2i\int^\ell\delta\,d\ell'}B,\qquad\frac{dB}{d\ell} = -ig_c\,e^{+2i\int^\ell\delta\,d\ell'}A,\qquad g_c = \frac{\pi\Delta n}{\bar np},\quad\delta = \frac{2\pi\bar n}{\lambda_\mathrm{loc}}-\frac{2\pi}{p}, \tag{E1}
$$
with stop band $|\delta|<g_c$, i.e. $\lambda\in[n_op,n_ep]$ [48]. For a linear sweep $\delta = \delta'\ell$ the equations reduce to the Landau–Zener problem with coupling $g_c$ and sweep rate $2\delta'$ [49; 50]. The probability that the photon stays in the forward mode is $e^{-\pi g_c^2/|\delta'|}$, so $R = 1-e^{-\pi g_c^2/|\delta'|}$, the chirped-grating result [51], and the formula is exact for an unbounded linear sweep whatever the value of the exponent. Along a cosmological ray $\lambda_\mathrm{loc} = \lambda_\mathrm{obs}/(1+z)$ and $dz/d\ell = -(1+z)H/c$, so at resonance $|\delta'| = (2\pi/p)H/c$. Then $\pi g_c^2/|\delta'| = (\pi^2/2)(\Delta n/\bar n)^2c/(pH) = \Pi$, which is Eq. (29).

## E.2 Validity

The resonant path — the length over which the detuning stays inside the stop band, $|\delta|<g_c$ — is $\Delta\ell = 2g_c/|\delta'| = (\Delta n/\bar n)\,c/H$. The sweep is linear across the resonance if $\Delta\ell\ll c/H$, which holds for $\Delta n\ll1$. The coupled-mode approximation requires $g_c\ll K$, i.e. $\Delta n\ll4\bar n$. The coherent regime additionally requires the helix axis to stay coherent over $\Delta\ell$; at the bound of Eq. (31) that length is $8.5\times10^9$ m, or $3.5\times10^{14}$ pitches. r1 wrote the resonant path as $(\Delta n/2\bar n)\,c/H$, which is the half-width $g_c/|\delta'|$, while its numbers used the full width; both parents' numbers are the full width, as here (correction 46).

## E.3 The sudden regime

For $\Pi\ll1$ the reflected amplitude is first order in $g_c$, and the reflectance is $R\simeq\Pi$, the leading term of Eq. (30). The passage is adiabatic, in the sense that the photon follows the Bragg-reflected eigenmode, only for $\Pi\gtrsim1$, which at $p = 24.6\ \mu$m needs $\Delta n/\bar n\gtrsim(2pH_0/\pi^2c)^{1/2} = 1.9\times10^{-16}$. At the transparency bound $R = 0.1$ and $\Pi = \ln(1/0.9) = 0.105$: the sudden-regime value $R\simeq\Pi$ is $5\%$ high, the passage that the bound describes is sudden, and the bound, which uses the exact formula, is unchanged. The threshold scales as $(pH/c)^{1/2}$, not as $pH/c$, which is why r2's statement that adiabaticity holds "for every $\Delta n$ above $10^{-20}$" is wrong.

## E.4 The amorphous regime

For the blue fog of Flag F7, with orientational correlation length $\ell_o$, the coherent picture fails unless $\ell_o\gtrsim\Delta\ell$. Each domain then acts as a weak grating of length $\ell_o$, with peak reflectance $(g_c\ell_o)^2$ for $g_c\ell_o\ll1$ and fractional bandwidth of order $p/\ell_o$, and only the fraction of domains, of order $p/\ell_o$, whose inclination puts their Bragg wavelength $\bar np\cos\theta$ within that bandwidth of the local wavelength responds. With $\ell_o^{-1}$ domains per unit path, the extinction rate is of order $\ell_o^{-1}(p/\ell_o)(g_c\ell_o)^2 = g_c^2p$, independent of $\ell_o$, and the extinction over a Hubble path is
$$
\tau\sim g_c^2p\,\frac{c}{H} = \pi^2\left(\frac{\Delta n}{\bar n}\right)^2\frac{c}{pH}, \tag{E2}
$$
the same scaling as $\Pi$, up to orientation and polarization averages of order unity. Requiring $\tau\lesssim0.1$ gives $\Delta n/\bar n\lesssim(4\times10^{-17}$–$1.3\times10^{-16})$, the range spanning the numerical prefactor between $\pi^2$ and $1$; this is the estimate $\Delta n\lesssim10^{-16}$ of Sec. 4.5, within an order of magnitude of the coherent bound. The independence of $\ell_o$ is why the two regimes agree. What $\ell_o$ does decide is the shape: the local fog attenuates every $\lambda_\mathrm{obs}\le\bar np$ and more distant fog attenuates redward up to $\bar np(1+z_s)$, so the fixed feature at $\bar np$ is the red limit of the local band — a step of sharpness $p/\ell_o$, with the dipole modulation of Proposition 10 and a circular polarization of the same sign but reduced degree. Which shape applies is a deliverable of Closure K-5.

## E.5 Laboratory arm

A terahertz polarimeter over $\sim10^2$ m of multi-pass vacuum, near $12.1$–$12.2$ THz where cosmology allows the edge and up to $34.5$ THz in the *a priori* window (Eq. (28), for $\zeta_\nu\bar n = 1$), is not competitive with the astrophysical arm at the bound. It is the only arm sensitive to the dispersive rotation Eq. (35) near resonance, where astrophysical spectra are contaminated by dust.

# Appendix F: Preferred-Frame Kinematics

## F.1 Arrival times

Let the material frame $M$ and the lab frame $\mathcal L$ be related by a boost with velocity $\mathbf v_M$ (lab relative to substrate). An influence leaving the source event $(0,\mathbf 0)$ at speed $c_L$ in $M$ reaches the receiver at $(t_M,\mathbf x_M) = (r/c_L,\ r\hat{\mathbf n})$. The lab time is $t_{\mathcal L} = \gamma_v(t_M-\mathbf v_M\cdot\mathbf x_M/c^2)$, which gives Eq. (23) of Proposition 5; arrival precedes emission on lab clocks iff $\mathbf v_M\cdot\hat{\mathbf n}>c^2/c_L$. For a lab-fixed baseline $\hat{\mathbf n}$ and $\mathbf v_M$ at angle $\theta_\oplus$ to the Earth's axis,
$$
\mathbf v_M\cdot\hat{\mathbf n}(\tau) = v_M\big[\cos\theta_\oplus\,n_\parallel+\sin\theta_\oplus\,n_\perp\cos(\Omega_\oplus\tau-\phi_0)\big], \tag{F1}
$$
where $n_\parallel$ and $n_\perp$ are the baseline's components along and perpendicular to the axis, and $\tau$ is sidereal time. The oscillating part of $t_{\mathcal L}$ has amplitude $\gamma_vrv_M\sin\theta_\oplus n_\perp/c^2$, and its full swing is twice that: $0.8$ ns for $r = 100$ m on an east–west baseline with $v_M = 369.8\ \mathrm{km\,s^{-1}}$ and $\sin\theta_\oplus\simeq0.99$.

## F.2 The bipartite bound

For two measurement events with lab separation $(\Delta t,\mathbf L)$, first order in $v_M/c$ gives $\Delta t_M = \Delta t-\mathbf v_M\cdot\mathbf L/c^2$ and $|\Delta\mathbf x_M| = L$. By Eq. (F1), $d(\mathbf v_M\cdot\mathbf L)/d\tau$ has magnitude at most $\Omega_\oplus v_\perp L$, with $v_\perp = v_M\sin\theta_\oplus$. Within an integration window $T_\mathrm{int}$ centered on the sidereal time at which $\Delta t_M$ would vanish, $|\Delta t_M|$ stays below $\delta t+\tfrac12\Omega_\oplus v_\perp LT_\mathrm{int}/c^2$. If the events were $c_L$-disconnected throughout that window, the $c_L$-causal model of Definition 8 would lose the correlation; persistence of the violation therefore requires $L/c_L$ to exceed that bound, which is Eq. (50). For $L = 10$ km, $\delta t = 100$ ps, $T_\mathrm{int} = 60$ s and $v_\perp = 370\ \mathrm{km\,s^{-1}}$, the rotation term is $90$ ps and the bound is $c_L\gtrsim5\times10^{13}\ \mathrm{m\,s^{-1}}\approx2\times10^5c$. The multipartite test of Theorem 13 has no such residual window, which is why Stake S6 rests on it.

# Appendix G: The Electroweak Precision Obligation

GUM's electroweak skeleton gives $\rho = 1$ identically from co-rotation invariance (Proposition 26), with corrections at $O(\chi^2(k\ell_s)^2)$. In the Standard Model $\rho_\mathrm{tree} = 1$ follows from the doublet structure, and the dominant loop correction, from the top–bottom splitting, is Veltman's $\Delta\rho_\mathrm{top} = 3G_Fm_t^2/(8\sqrt2\pi^2) = 0.0093$ for $m_t = 172.57$ GeV [92; 94] — the quantity through which LEP predicted the top mass before its discovery. The experimental statement "$\rho_0 = 1$ to $10^{-3}$" is defined *after* the Standard-Model loops, including this one, are subtracted, and it constrains physics beyond the Standard Model. GUM is not the Standard Model plus new physics; it is a replacement. Its composite, band-edge top must reproduce $\Delta\rho_\mathrm{top}$, or its agreement with $\rho\approx1$ is agreement with the wrong number.

The obligation has two halves. The consistency half is met: Proposition 27 reproduces Eq. (76) by assuming the chiral-doublet vertex below the core cutoff and a core pointlike to $(m_t\ell_sc/\hbar)^2 = 2\times10^{-34}$ at $\ell_s = \ell_\mathrm{P}$, and its grade is accordingly [IM]. The discriminating half is owed: $\Delta\rho_\mathrm{top}$ and the oblique parameters $(S,T)$ computed from the composite top's own vertex. It requires no new postulate and is a clean discriminator, because a composite top that does not shift $\rho$ by about a percent is not the top. Both halves are deliverables of Closure K-11; r1 posed the discriminating half and r2 executed the consistency half, and this revision keeps both.

# Appendix H: Worked Numbers

Every closed-form number in this revision is recomputed from the inputs of Table 10 by the companion script `check_r3.py`, which rounds once from the computed value and checks that the printed form appears in the text. This appendix shows the arithmetic a reader needs to follow each sector.

## H.1 Inputs

| Quantity | Value | Source or status |
|---|---|---|
| $hc$; $\hbar c$; $\hbar$ | $1.23984198$ eV µm; $1.973269804\times10^{-7}$ eV m; $6.582119569\times10^{-16}$ eV s | exact or CODATA |
| $\alpha$ | $1/137.035999$ | [92] |
| $m_e$, $m_\mu$, $m_\tau$ | $0.51099895$, $105.6583755$, $1776.86$ MeV | [92] |
| $m_u$, $m_d$, $m_s$, $m_c$, $m_b$ | $2.16$, $4.70$, $93.5$, $1273$, $4183$ MeV | [92] |
| $m_t$; $M_W$; $M_Z$; $M_h$; $v$ | $172.57$; $80.3692$; $91.1876$; $125.20$; $246.22$ GeV | [92] |
| $G_F$; $\Gamma_h$ | $1.1663788\times10^{-5}\ \mathrm{GeV^{-2}}$; $4.1$ MeV | [92] |
| $\ell_\mathrm{P}$ | $1.616255\times10^{-35}$ m | CODATA |
| $H_0$; $\Omega_{m,0}$, $\Omega_{\mathrm{DE},0}$, $\Omega_{r,0}$; $\rho_{\mathrm{DE},0}$ | $67.4\ \mathrm{km\,s^{-1}\,Mpc^{-1}}$; $0.31$, $0.69$, $9.1\times10^{-5}$; $(2.3\ \mathrm{meV})^4$ | [101] |
| $\Delta m^2_{21}$, $\Delta m^2_{31}$ | $7.5\times10^{-5}$, $2.51\times10^{-3}$ eV$^2$, normal ordering | [44] |
| $v_M$ | $369.8\ \mathrm{km\,s^{-1}}$ (CMB dipole) | [101] |
| Quasar bound on $\mu_{pe}$ | $\lvert\Delta\mu_{pe}/\mu_{pe}\rvert<10^{-6}$ at $z\simeq3$ | [84] |
| String tension $\sigma$ | $0.19\ \mathrm{GeV^2}$ | [N], Sec. 8.4 |
| $\mathfrak m$; $\epsilon_e$ | $1.9\pm0.4$; $[8\times10^{-6},\ 3\times10^{-3}]$ | [N], Appendix I |
| $A$, $B$; $A_\mathrm{halo}$, $\kappa_\mathrm{far}$ | $5.6\pm0.9$, $5.7\pm1.2$; $3.05\pm0.09$, $0.1065\pm0.0032$ | [N], Appendix I |
| $\nu_c$; $M$ | $12$; $100$ (midpoint moves $\pm3$ qubits for $M\in[10,1000]$) | Definition 7; Proposition 14 |
| Reference pitch of the depth formulas | $24.6\ \mu$m | Sec. 4.3 |
| Archival trough limit | $\Delta n/\bar n<4.19\times10^{-17}$ ($95\%$) | Sec. 4.5 |

*Table 10. Inputs of every number in this revision. [N] entries are held at their grade under Closure K-3.*

## H.2 Bogomolny constant, compacton, and inertia

With $\sqrt{2\mathcal V} = 2\tilde m_V\sin(\chi/2)$ and $u = \chi/2$, $\int_0^\pi\sin(\chi/2)\sin^2\chi\,d\chi = 8\int_0^{\pi/2}\sin^3u\cos^2u\,du = 8(\tfrac13-\tfrac15) = \tfrac{16}{15}$, so $C_6 = (2/\pi)(2\tilde m_V)(16/15)\Lambda = (64/15\pi)\Lambda\tilde m_V = 1.358\,\Lambda\tilde m_V$. For the hedgehog, $b_P = -(2\pi^2r^2)^{-1}\sin^2f\,f'$, and the Bogomolny equation in the volume coordinate $s = r^3/3$ reads $-(\Lambda/2\pi^2)\sin^2f\,df/ds = 2\tilde m_V\sin(f/2)$. Integrating $\int_0^\pi4\sin(f/2)\cos^2(f/2)\,df = \tfrac83$ gives $R_\ast^3/3 = (8/3)\Lambda/(4\pi^2\tilde m_V)$, which is Eq. (58), with profile $\cos(f_0/2) = r/R_\ast$. The inertia of Proposition 19 follows from $\sin^2f_0 = 4x^2(1-x^2)$ with $x = r/R_\ast$: $\int_0^{R_\ast}r^2\sin^2f_0\,dr = 8R_\ast^3/35$, so $\mathbb I_0 = (32\pi/3)J(8R_\ast^3/35) = (512/105\pi)\Lambda J/\tilde m_V$, i.e. $\mathfrak i_0 = 1.552$. The halo-free bench value is $\hat e_0/(2\mathfrak i_0) = (64/15\pi)/(1024/105\pi) = 7/16$, and with the halo's factor $5/3$ it is $35/48$.

## H.3 Electroweak algebra at the corrected tilt

At $\mathfrak m = 1.9$, Eq. (26) gives $\theta_c = 52.6^\circ$, $\sin\theta_c = 0.79$ and $\varepsilon_\mathrm{tilt} = 1-\cos\theta_c = 0.39$; at $\mathfrak m = 1.5$ and $2.3$, $\sin\theta_c = 0.68$ and $0.85$. Then $\sin^2\theta_w = \tfrac14(1-\varepsilon_\mathrm{tilt}/3) = 0.217$, with band ends $0.210$ and $0.228$; the on-shell $1-M_W^2/M_Z^2 = 0.2232$ is reached at $\mathfrak m = 1.66$, and the $\overline{\mathrm{MS}}$ $0.2312$ would need $\mathfrak m = 1.40$. The implied modulus is $\vartheta = \sqrt{0.217/0.783} = 0.527$, and $M_Z/M_W = \sqrt{1+\vartheta^2} = 1.130$ against the observed $1.1346$. From $G_F$ and $M_W$, $g^2 = 8M_W^2G_F/\sqrt2$ gives $g = 0.653$ and $\alpha_w = g^2/4\pi = 1/29.5>\alpha$: the weak coupling is electromagnetic-sized, and weakness at low energy is the $1/M_W^2$ of the matching plus whatever suppression the vertex carries, which is why the prefactors of Closure K-12 are owed. The Jackiw–Rebbi exponent is $\gamma_\mathrm{JR} = \sqrt{1+\mathfrak m\sin^2\theta_c} = 1.48$, so with $\lambda_{\mathrm{halo},e} = 3.86\times10^{-13}$ m, $\epsilon_R = (\ell_\mathrm{P}/\lambda_{\mathrm{halo},e})^{1.48} = 6.7\times10^{-34}$. With the species lift $\epsilon_d\le1.6\times10^{-4}$ and $q\lambda_{\mathrm{halo},d} = 1.07\times10^{-8}$ at $p = 24.6\ \mu$m, Eq. (79) gives $\bar\theta_\mathrm{eff}\lesssim1.1\times10^{-45}$ and, at $2.4\times10^{-16}$ e·cm per unit $\bar\theta$, $|d_n|\lesssim3\times10^{-61}$ e·cm.

## H.4 Lepton logarithms and the bridge

$\ln(m_\tau/m_\mu) = \ln16.817 = 2.8224$ and $\ln(m_\mu/m_e) = \ln206.77 = 5.3316$, with ratio $1.889$, against $\tfrac12A = 2.80\pm0.45$ and $\tfrac12(A+B) = 5.65\pm0.75$; their quotient $(A+B)/A = 2.02$ is not a third test (Sec. 8.1). The bridge of Eq. (73) is $X = (5.645-3.05)/0.1065 = 24.36$, with uncorrelated uncertainty $[(0.09/0.1065)^2+(24.36\times0.0032/0.1065)^2]^{1/2} = 1.12$; the $\pm0.90$ of both parents would need a correlation of $-0.36$ between $A_\mathrm{halo}$ and $\kappa_\mathrm{far}$, which neither stated. Then $e^{-X} = 2.62\times10^{-11}$ and $m_3c^2 = \zeta_\nu m_\tau c^2e^{-X} = 0.0466\,\zeta_\nu$ eV, which rounds to the printed $0.047$ eV, with $1\sigma$ band $e^{\pm1.12}$, i.e. $[0.015,\ 0.143]$ eV; the master's halo length $\hbar/(\sqrt2m_\tau c)$ would have given $0.066$ eV.

## H.5 The neutrino window and the pitch

The oscillation floor is $\sqrt{\Delta m^2_{31}} = 0.0501$ eV; with $m_1\to0$, $\Sigma m_\nu = \sqrt{\Delta m^2_{21}}+0.0501 = 0.059$ eV, and the inverted ordering would need $\approx0.10$ eV. At the bridge band's upper end $m_3 = 0.143$ eV, $m_1 = 0.133$ eV and $\Sigma m_\nu = 0.41$ eV. The $\Lambda$CDM bound $\Sigma m_\nu<0.064$ eV gives $m_1 = 0.0041$ eV, $m_2 = 0.0096$ eV and $m_3 = 0.0503$ eV. With $hc = 1.23984$ eV µm, the pitch is $p/\zeta_\nu = 24.75\ \mu$m at the floor, $24.66\ \mu$m at the $\Lambda$CDM bound and $8.7\ \mu$m at $0.143$ eV; the corresponding frequencies $m_3c^2/h$ are $12.1$, $12.2$ and $34.5$ THz. The withdrawn cap $m_3\le0.057$ eV corresponded to $21.8\ \mu$m and $\Sigma m_\nu\le0.113$ eV. The generator Eq. (72) applied to neutrinos would give $m_3e^{-A/2}\approx3$ meV, below the solar floor $\sqrt{\Delta m^2_{21}} = 8.7$ meV, which is one reason the neutrino is not a frustration class.

## H.6 The Bragg passage and the trough

$c/H_0 = 1.372\times10^{26}$ m; with $p = 24.6\ \mu$m, $c/(pH_0) = 5.58\times10^{30}$ and $\Pi_0 = 2.75\times10^{31}(\Delta n/\bar n)^2$. $R = 0.1$ requires $\Pi_0 = \ln(1/0.9) = 0.105$, i.e. $\Delta n/\bar n = 6.2\times10^{-17}$; $\Pi_0 = 1$ requires $1.9\times10^{-16}$. The dipole shift of the edge is $\bar np\,v_M/c = 24.6\ \mu\mathrm m\times1.2335\times10^{-3} = 0.030\ \mu$m, and the advected pitch line is at $v_M/p = 15.0$ GHz. At the bound the de Vries rate at $\lambda = 1$ mm is $\pi p\Delta n^2/(4\lambda^2) = 7.4\times10^{-32}$ rad m$^{-1}$, i.e. $1.0\times10^{-5}$ rad per Hubble length, falling as $\lambda^{-2}$ to $6\times10^{-8}$ rad at $23$ GHz; across $23$–$353$ GHz the rate varies by a factor of about $240$. With $\epsilon_\mathrm{vac}\le3\times10^{-3}$, $\sin^2\theta_c = 0.63$ and $q = 2\pi/(24.6\ \mu\mathrm m)$, Eq. (32) at the bound gives $\ell_\mathrm{lock}\le1.7$ nm, and at the archival limit $1.5$ nm; at $\ell_\mathrm{lock} = \ell_\mathrm{P}$, $\Delta n\simeq5\times10^{-121}$.

## H.7 Structural scale, cliff, and timing

$\hbar c = 1.973\times10^{-16}$ GeV m; $E_{\mathrm{QG},2} = 1.3\times10^{11}$ GeV gives $\ell_s = 1.52\times10^{-27}$ m for $|\xi_\gamma| = 1$ and $5.3\times10^{-27}$ m for $|\xi_\gamma| = \tfrac1{12}$. Sakharov induction gives $\ell_s/\ell_\mathrm{P} = \sqrt{N_\mathrm{eff}/12\pi} = 0.40$, $0.56$ and $1.26$ at $N_\mathrm{eff} = 6$, $12$ and $60$, and $1.25$–$3.96$ with a cutoff $\pi\hbar c/\ell_s$, which lowers each cliff by $3\log_2\pi = 5.0$ qubits. The zero-point ledger is $\hbar c/\ell_s^4\simeq5\times10^{113}\ \mathrm{J\,m^{-3}}$ at $\ell_\mathrm{P}$ and $6\times10^{81}\ \mathrm{J\,m^{-3}}$ at $1.5\times10^{-27}$ m, against $\rho_\Lambda\approx6\times10^{-10}\ \mathrm{J\,m^{-3}}$. Under bulk hosting at $\ell_\mathrm{P}$, $\log_2(\nu_cV/\ell_\mathrm{P}^3) = 317.1$ for $V = 10^{-10}\ \mathrm{m^3}$ and $330.4$ for $10^{-6}\ \mathrm{m^3}$; the midpoint offset $\log_2(2M/\ln2)-1 = 7.17$ at $M = 100$ places $n_{50}$ at $324$ and $338$. r1's range $234$–$329$ counted one degree of freedom per cell, with $\ell_s$ spanning $1.5\times10^{-27}$ to $10^{-35}$ m. Mirror feasibility at $n_q = 300$: $n_q\log_2n_q = 2469$ and $n_q^{3/2} = 5196$ two-qubit gates, hence the budgets $2.8\times10^{-3}$ and $1.3\times10^{-3}$. The matter–light cone: $\hbar\omega_0 = 1$ MeV gives $(\ell_g\omega_0/c)^2/8 = 7\times10^{-30}$ at $\ell_g = 1.5\times10^{-27}$ m, $\hbar\omega_0 = 80.4$ GeV gives $5\times10^{-20}$, and $(c_\psi-c)/c\le10^{-20}$ requires $\ell_g\le7\times10^{-28}$ m. The discreteness term at $1$ TeV is $(k\ell_\mathrm{P})^2 = 7\times10^{-33}$.

## H.8 Clock and band edge

$(m_ec^2)^2 = 0.261120\ \mathrm{MeV^2}$ and $hc = 1.239842\times10^{-12}$ MeV m. Row spacings $a/\sqrt2$: Si $5.431/\sqrt2 = 3.840$ Å, Ge $5.658/\sqrt2 = 4.001$ Å, diamond $3.567/\sqrt2 = 2.522$ Å; hence $p_1c = 80.87$, $84.26$ and $53.12$ MeV. Band edges $\sqrt2Mc^2$: $0.7227$ MeV, $149.42$ MeV, $2.5129$ GeV. Positronium: $(4m_e^2-2m_e^2)c^2/(4m_e) = m_ec^2/2 = 255.50$ keV.

## H.9 Regge slope, termination, and species lifts

From a rotating string of tension $\sigma$ with ends at the speed of light, $M = \pi\sigma R$ and $J = \pi\sigma R^2/2$, so $J = M^2/(2\pi\sigma)$ and $\alpha' = 1/(2\pi\cdot0.19) = 0.84\ \mathrm{GeV^{-2}}$ against the observed $0.88$; $\sigma/\hbar c = 0.96\ \mathrm{GeV\,fm^{-1}}\approx1.5\times10^5$ N. Termination: $y_t = \sqrt2m_t/v = 0.991$; the $\mathsf p = 3$ lepton at $m_ee^{-(A+2B)/2}\approx104$ eV carries $\epsilon_3 = \epsilon_ee^{(4/3)\cdot8.5}\ge0.67$ for $\epsilon_e\ge8\times10^{-6}$ and fails closure. Species lifts from $\epsilon\propto\tilde m^{-4/3}$ and $\epsilon_e\in[8\times10^{-6},\ 3\times10^{-3}]$: $\epsilon_\mu\in[6.5\times10^{-9},\ 2.5\times10^{-6}]$, $\epsilon_\tau\in[1.5\times10^{-10},\ 5.7\times10^{-8}]$, $\epsilon_d\in[4.2\times10^{-7},\ 1.6\times10^{-4}]$, $\epsilon_u\in[1.2\times10^{-6},\ 4.4\times10^{-4}]$, $\epsilon_s\in[7.7\times10^{-9},\ 2.9\times10^{-6}]$, $\epsilon_c\in[2.4\times10^{-10},\ 8.9\times10^{-8}]$, $\epsilon_b\in[4.8\times10^{-11},\ 1.8\times10^{-8}]$, $\epsilon_t\in[3.4\times10^{-13},\ 1.3\times10^{-10}]$ (Table 3).

# Appendix I: The [N] Register

Every quantity below is an integral or a calibrated number that this revision does not reproduce, or a number derived from one. Each is listed with its origin as far as the text defines it, its value, where it is used, and the grade at which the dependent results are held until the normalization audit, Closure K-3, publishes it. The rule is the [CJ] rule: a result that rests on an unpublished integral may not be built upon silently.

| Quantity | Definition or origin | Value | Used in | Dependents held at |
|---|---|---|---|---|
| $\epsilon_e$ | near-BPS lift $[W_2+W_\chi+W_4]/W_{6+0}$ on the electron's SDiff manifold; lower end trimmed by the termination of the family tower | $[8\times10^{-6},\ 3\times10^{-3}]$ | Flag F4; Theorem 15; Table 3; Propositions 9, 31 | [DW-held] |
| $\mathfrak m$ | margin $\bar\chi^2/(\bar\gamma\bar\Delta^2)$ on the lifted manifold | $1.9\pm0.4$ | Proposition 7, and through the tilt Propositions 9, 28, 30, 47 | [DW-held] |
| $\sin\theta_c$ | derived from $\mathfrak m$ by Eq. (26) | $0.79^{+0.06}_{-0.11}$ | Eqs. (32), (77), (78), (96) | [DF] given $\mathfrak m$; r1 and r2 printed $0.69\pm0.11$ |
| $A$, $B$ | frustration integrals of the belt classes | $5.6\pm0.9$, $5.7\pm1.2$ | Eq. (72) | [DW-held]; the lepton logarithms are landings; Closure K-9 |
| $A_\mathrm{halo}$, $\kappa_\mathrm{far}$ | halo and far-field coefficients of $A(q)$ | $3.05\pm0.09$, $0.1065\pm0.0032$ | Eq. (73); Propositions 21(ii), 43; Corollary 4 | [DW-held]; Stake S18 and Eq. (91) inherit |
| $X$, $e^{-X} = q\lambda_{\mathrm{halo},\tau}$ | bridge logarithm, derived from the row above | $24.36\pm1.12$; $2.6\times10^{-11}$ | Eq. (73); Proposition 8 | [DW-held]; r1 and r2 printed $\pm0.90$ |
| $\hat e_\mathrm{tot}$, $\mathfrak i_\mathrm{tot}$, $\mathfrak c$, $\kappa$, $\kappa^2g_\mathrm{tot}$ | closure integrals of the isorotating knot | $\mathfrak c = 128/(9\pi)$ at fixed $\hat e_\mathrm{tot}$; $\kappa = 1/\sqrt2$ (Branch A); $35/48$ against $7/16$ | Propositions 18, 19, 25; Stakes S9, S11 | [DW-held]; Closure K-3 |
| $M = (64/9\pi)\Lambda\tilde m_V$ | knot mass, core plus halo, $\tfrac53C_6$ | — | Proposition 23 | [N] |
| bound on $\mathfrak c$ | rigorous saturated bound | $2\sqrt2$ inherited; $4$ in the corrected normalization, to be re-derived | Proposition 19 | Closure K-3 |
| $\tau_\mathrm{relock}$ | Adler relocking time at the electron clock | $10^{-12}$ s | Sec. 6.4 | [CAL] |
| $H$-theorem factor | acceleration of relaxation relative to the deterministic pilot-wave limit | $17$–$41$ | Sec. 5.3 | [CAL] |
| cone-flow coefficient $g_c^2/\bar c^2$ | strength of the cone-locking flow | a factor $10$–$10^2$ over the logarithm | Eq. (53) | [CAL] |
| $f_q$, $\sigma$, $\epsilon_\mathrm{dress}$, $\mathfrak m_\mathrm{Sk}$ | network tension and dressing floor | $0.14$–$0.20$ GeV, $0.19\ \mathrm{GeV^2}$, $10^{-2}$, $1.7$ GeV | Secs. 8.1, 8.4 | [posed]; Closure K-17 |
| $\epsilon_\mathrm{H}$ | near-BPS lift of the unit-Hopf excitation (r2's $\epsilon_\nu$) | $\le3\times10^{-3}$ assumed | Proposition 29 | [DW-held] |
| $\partial I_f/\partial\ln(\mathrm{lock})$ | lock dependence of the frustration integrals | not computed | Theorem 16; Stake S20 | [N] |
| $I_\mathrm{pin}$; $\mu_hd_\mathrm{halo}$ | pinning exponent of the bound helicity; halo-tunneling exponent of the weak vertex | $O(1)$; owed | Proposition 28; Proposition 24 item 5 | [DW-structure] |
| $N_\mathrm{eff}$ | gapped field components below the induced-gravity cutoff | $6$–$60$ | Corollary 10 | [DW]; moves $\ell_s$ by a factor of $3$, and by $\pi$ with the regularization |
| $C_\chi$, $C_R$, $C_\theta$, $\kappa_\chi$ | order-unity prefactors | set to one in the printed estimates | Eqs. (32), (77), (79), (95) | [DW-held] |
| $\mathcal X^{-1}$ | soft-mode stiffness | $>1.6$–$360\ \mathrm{eV^2}$ (bound) | Eq. (81); Proposition 43 | bounded, not computed |
| $\mathcal F_\mathrm{pinch}$ | the master's pinch form factor | withdrawn | — | — |

*Table 11. The [N] register. The normalization audit's deliverables are each integral as a functional of Eqs. (4)–(9) with the profile it is evaluated on, in one normalization; the regression tests are the two lepton logarithms, the bridge, the Weinberg-angle band, $N_\nu$, the Regge slope and the bench discriminator.*

r2 introduced the register; r1's integrals — the closure constants, the bound on $\mathfrak c$, the lock dependence of the frustration integrals, the pinning and tunneling exponents, and the cone-flow coefficient — are added here, and the tilt and the bridge appear as derived rows because both changed in this revision.

# Appendix J: Notation

| Symbol | Meaning | First used |
|---|---|---|
| $\mathfrak S$, $U_{vv'}$, $H_p$, $\mathcal H$ | level-0 adjacency–succession complex; $SU(2)$ edge comparator; plaquette holonomy; level-0 Hamiltonian | Definition 1 |
| $\mathbf u$, $\mathsf F$, $\mathsf R[\mathbf u]$ | displacement; deformation gradient; polar rotation | Sec. 2.1 |
| $\tilde Q$, $\boldsymbol\varphi$; $\tilde P$, $\sigma_P$, $\boldsymbol\pi$, $\boldsymbol\psi$ | micro-rotation; relative texture, its trace and vector part; relative rotation | Eqs. (1), (3) |
| $e_{ij}$, $\Gamma_{ij}$, $\varepsilon_{ij}$ | Cosserat strain; wryness; ordinary strain | Eq. (2) |
| $\lambda,\mu,\mu_c,\alpha,\beta,\gamma$; $\gamma_\mathrm{eff}$ | moduli; effective curl modulus $\gamma+\beta$ | Eqs. (5), (9) |
| $\chi_{1,2,3}$; $\kappa_S,\Lambda,\tilde m_V,c_2$; $\tilde m$ | chiral couplings; topological constants; total gap stiffness | Eqs. (6)–(9) |
| $L_i$, $b_P$, $K$ | Maurer–Cartan currents; topological density; degree | Eqs. (7), (8) |
| $\rho_0$, $J$, $\ell_g$; $\ell_s$; $\ell_\mathrm{lock}$; $\ell_\mathrm{P}$ | mass density; micro-inertia; grain gyration radius; structural scale; locking length $\sqrt{\gamma/4\mu_c}$; Planck length | Secs. 1.6, 2.2, 2.3 |
| $c$, $c_L$, $c_\psi$, $c_4$, $c_\mathrm{GW}$; $\omega_0$ | doublet, longitudinal, relative-rotation, B4 and gravitational-wave speeds; gap frequency | Proposition 2; Sec. 9.6 |
| $\Phi_c$, $\Phi_\infty$; $\mathbf E_\varphi$, $\mathbf B$; $\varepsilon^\ast$, $\kappa_B$ | frame-connection scalar; Coulomb potential; orientation fields; substrate permittivity; coupling | Theorem 4; Sec. 3.3 |
| $\mathbf J_\varphi$; $\mathbf j_\mathrm{def}$, $\rho_\mathrm{def}$ | torque current; defect current and density | Eq. (18); Definition 2 |
| $\mathbf v_M$, $\gamma_v$; $\theta_\oplus$, $\Omega_\oplus$, $n_\perp$ | lab velocity relative to the material frame and its Lorentz factor; angle to the Earth's axis, sidereal rate, perpendicular baseline component | Proposition 5 |
| $\mathfrak m$, $\theta_c$, $\varepsilon_\mathrm{tilt}$; $q$, $p$, $\zeta_\nu$ | margin, condensate tilt, tilt correction; pitch wavenumber, pitch, pitch factor | Secs. 4.1, 4.2; Proposition 30 |
| $\bar n$, $\Delta n$; $\lambda_\mathrm{edge}$, $\Pi$; $g_c$, $\delta$; $\ell_o$; $\epsilon_\mathrm{vac}$, $C_\chi$ | mean index, birefringence; edge, passage parameter; coupled-mode coupling and detuning; orientational correlation length; vacuum lift and prefactor of the locking suppression | Theorem 7; Proposition 9; Sec. 4.5 |
| $\psi_k$, $F^{(\alpha)}_k$; $d$ | conditional wave function; tower fields; tower depth | Eqs. (38), (39); Definition 3 |
| $\chi$, $\chi_\mathrm{max}$, $F_\chi$; $F_\mathrm{noise}$, $F_\mathrm{trunc}$ | Schmidt rank; capacity; truncated fidelity; noise fidelity; truncation fidelity | Definition 4; Eqs. (42), (43) |
| $n_q$; $N_\mathrm{dof}$, $N_\mathrm{eff}$, $\nu_c$; $L_R$, $D_X$, $M$; $n_{50}$, $n_q^\ast$; $\mathcal P$ | qubits; degrees of freedom, effective count, numbers per cell; gain, diameter, $\ln(3L_RD_X)$; cliff midpoint, cliff onset; normalized return probability | Secs. 5.5–5.7 |
| $j$, $\mathbb I$, $\omega$, $\kappa$, $w_u$; $\hat e$, $\mathfrak i$, $g$, $\mathfrak c$; $(a,b)$, $V$ | rotor number, inertia, clock frequency, $\omega/\omega_0$, clock in substrate units; closure parameters; Derrick pair, dilation | Sec. 6 |
| $R_\ast$, $R_\mathrm{core}$, $\lambda_\mathrm{halo}$; $\epsilon$, $\epsilon_i$, $\epsilon_\mathrm{H}$ | compacton radius; core radius; halo length; near-BPS lift, species lift, heliknoton lift | Eqs. (58), (70); Flag F4; Proposition 29 |
| $\mathsf p$, $A$, $B$, $\Sigma(\mathsf p)$; $A_\mathrm{halo}$, $\kappa_\mathrm{far}$, $X$ | frustration class and integrals; bridge coefficients and logarithm | Eqs. (72), (73) |
| $\vartheta$, $M_T$; $\eta_f$; $\epsilon_R$, $\gamma_\mathrm{JR}$, $C_R$; $\mu_h$, $d_\mathrm{halo}$ | mixing modulus, twist gap; coupling deviation; right-handed admixture, Jackiw–Rebbi exponent, prefactor; halo-tunneling exponent and length | Propositions 26, 28; Theorem 16 |
| $\bar\theta_\mathrm{eff}$, $C_\theta$; $f_q$, $\sigma$, $\epsilon_\mathrm{dress}$, $\mathfrak m_\mathrm{Sk}$ | composite strong-CP angle and prefactor; network tension, string tension, dressing floor, Skyrme scale | Proposition 31; Sec. 8.4 |
| $n$, $\Gamma_r$, $\Gamma_0$, $\delta q$, $S$, $\mathcal X$; $\alpha_\mathrm{DT}$; $\varepsilon_\nu$, $h$ | relaxation index, rate, rate today, lag, source, susceptibility; Dvali–Turner exponent; lag fraction, $H/H_0$ | Sec. 9.1; Propositions 36, 40, 43 |
| $N_{\mathsf p}$, $m_u$; $\langle\sigma_dv\rangle$ | undressed sterile knot in class $\mathsf p$, undressed electron-class mass; dressing cross-section | Conjectures 1, 2 |
| $s$, $\varepsilon_i$, $O_i$; $\Theta$, $g_\Theta$, $\kappa_\chi$; $\beta$ | handedness bit; theory and observed signs; parity-odd order parameter, its coupling and prefactor; birefringence angle, counterclockwise as seen by the observer | Definition 9; Propositions 46, 47 |

*Table 12. Notation.*

# Appendix K: Concordance with r1 and r2

This appendix maps every label of r1 and r2 to its place in this revision. Labels here are numbered in order of appearance, each kind with its own counter. The parents were not uniformly so: r2's equation numbers run out of order (its Eq. (13) is followed by Eqs. (79)–(84), and it uses (8a), (9a) and (9b)); its tables are numbered 6, 7, 1–5, 8 in order of appearance; its results list cites a Theorem 12 and a Proposition 2 that it never prints; and its statement numbers skip Propositions 16 and 30 and Definition 9. By context, r2's Theorem 12 is the acausality half of the locality dichotomy, Theorem 6(i), and its Proposition 2 is the condensate statement, now Proposition 7 with Eq. (25). A dash means the parent has no labeled counterpart; "text" means the content is in the parent's prose without a label.

## K.1 Sections

| This revision | r1 | r2 |
|---|---|---|
| Sec. 1: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6 | I: A, B, C, D, E, F | 1: 1.1, 1.2, 1.3, 1.4, 1.5, 1.5 |
| Sec. 2: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6 | II: A, B, C, D, E, F | 2: 2.1, 2.2, 2.3, 2.4, App. A, 10.5 item 2 |
| Sec. 3: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6 | III: A, B, C, D, E, F | 3: 3.1, 3.2, 3.3, 3.4, 3.5, App. B |
| Sec. 4: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7 | IV: A, B, C, —, D, E, F | 3.6 throughout; 7.2; App. F |
| Sec. 5: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9 | V: A, C, B, C, D, E, F, G, H | 4: 4.1, 4.2, 4.1, 4.3, 4.4, 4.4, 4.4, 4.5, 4.6 |
| Sec. 6: 6.1, 6.2, 6.3, 6.4, 6.5 | VI: A, B, B, C and E, D | 5: 5.1, 5.2, 5.3, 5.4, 5.5 |
| Sec. 7: 7.1, 7.2, 7.3 | VII: A, B, C | 6: 6.1, 6.2, — |
| Sec. 8: 8.1, 8.2, 8.3, 8.4, 8.5 | VIII: A, B, C, D, E | 7: 7.1, 7.2, 7.3, 7.4, 7.5 |
| Sec. 9: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8 | IX: A, B, C, —, D, F, E, G | 8: 8.1, 8.2, 8.2, 8.2, 8.2, 8.3, 8.4, 8.5 |
| Sec. 10: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6 | X: A, B, C, D, IX D and X B, E | 9: 9.1, 9.2, —, —, 9.2, 9.3 |
| Sec. 11: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6 | XI: A, B, C, C, D, E | 10: 10.1, 10.2, 10.3, 10.3, 10.4, 10.5 |
| Sec. 12 | XII | 11 |
| App. A: A.1, A.2, A.3, A.4 | A: 1, 2, 3, 4 | A: text, text, —, text |
| App. B: B.1, B.2, B.3, B.4, B.5, B.6 | B: 1, —, 2, 3, 4, 5 | B: text, text, text, —, text, text |
| App. C: C.1, C.2, C.3, C.4, C.5 | C: 1, —, 2, 3, 4 | C: text, text, —, —, text |
| App. D: D.1, D.2, D.3, D.4 | D: 1, 2, 2, 3 | D: text, text, text, — |
| App. E: E.1, E.2, E.3, E.4, E.5 | E: 1, 2, —, 3, 4 | F: text, text, text, —, — |
| App. F: F.1, F.2 | F: 1, 2 | F: text, text |
| App. G | G | G |
| App. H: H.1, H.2, H.3, H.4, H.5, H.6, H.7, H.8, H.9 | H: —, 1, 2, 3, 4, 5, 6, 7, 8 | H: —, —, text, text, text, —, —, —, text |
| App. I | — | I |
| App. J | I | E |
| App. K | — | — |

## K.2 Statements

| This revision | r1 | r2 |
|---|---|---|
| Definition 1 | — | Definition 8 |
| Proposition 1 | — | Proposition 23 |
| Lemma 1 | Lemma 1 | Lemma 1 |
| Lemma 2 | Lemma 2 | Lemma 2 |
| Proposition 2 | Proposition 1 | text of Sec. 2.3 |
| Theorem 1 | Theorem 1 | Theorem 1 |
| Theorem 2 | Theorem 2 | Theorem 2 |
| Theorem 3 | Theorem 3 | Theorem 3 |
| Theorem 4 | Theorem 4 | Theorem 4 |
| Proposition 3 | Proposition 2 | Proposition 1 |
| Definition 2 | Definition 1 | Definition 1 |
| Theorem 5 | Theorem 5 | Theorem 5 |
| Theorem 6 | Theorem 6 | Theorem 11 (and the cited Theorem 12) |
| Corollary 1 | Corollary 1 | Corollary 4 |
| Proposition 4 | Proposition 3 | Proposition 32 |
| Proposition 5 | Proposition 4 | Proposition 33 |
| Proposition 6 | Proposition 5 | text of App. B |
| Proposition 7 | text of Sec. IV A | text of Sec. 3.6 (the cited Proposition 2) |
| Proposition 8 | Proposition 6 | Proposition 34 |
| Theorem 7 | Theorem 7 | Theorem 14 |
| Corollary 2 | Corollary 2 | Corollary 5 |
| Proposition 9 | — | Proposition 17 |
| Corollary 3 | — | Corollary 8 |
| Proposition 10 | Proposition 7 | Proposition 35 |
| Corollary 4 | Corollary 7 | — |
| Proposition 11 | Proposition 8 | Proposition 3 |
| Proposition 12 | Proposition 9 | — |
| Definition 3 | Definition 2 | Definition 2 |
| Lemma 3 | Lemma 3 | Lemma 3 |
| Proposition 13 | — | Proposition 26 |
| Definition 4 | Definition 3 | Definition 3 |
| Theorem 8 | Theorem 8 | Theorem 6 |
| Corollary 5 | Corollary 3 | Corollary 1 |
| Definition 5 | Definition 4 | Definition 4 |
| Theorem 9 | Theorem 9 | Theorem 7 |
| Proposition 14 | — | Proposition 38 |
| Theorem 10 | Theorem 10 | Theorem 15 |
| Corollary 6 | Corollary 4 | Corollary 6 |
| Definition 6 | Definition 5 | Definition 10 |
| Theorem 11 | Theorem 11 | Theorem 16 |
| Definition 7 | Definition 6 | Definition 11 |
| Theorem 12 | Theorem 12 | Theorem 17 |
| Corollary 7 | Corollary 5 | Corollary 7 |
| Corollary 8 | — | Corollary 2 |
| Definition 8 | Definition 7 | Definition 12 |
| Proposition 15 | Proposition 10 | Proposition 39 |
| Theorem 13 | Theorem 13 | Theorem 13 |
| Proposition 16 | Proposition 11 | Proposition 42 |
| Lemma 4 | Lemma 4 | Lemma 4 |
| Theorem 14 | Theorem 14 | Theorem 8 |
| Proposition 17 | Proposition 12 | Proposition 4 |
| Proposition 18 | Proposition 13 | Proposition 5 |
| Proposition 19 | — | — |
| Proposition 20 | Proposition 16 | Proposition 6 |
| Proposition 21 | Proposition 14 | Proposition 36 |
| Proposition 22 | Proposition 15 | Proposition 37 |
| Lemma 5 | Lemma 5 | Lemma 5 |
| Theorem 15 | Theorem 15 | Theorem 9 |
| Proposition 23 | Proposition 17 | Proposition 7 |
| Proposition 24 | text of Sec. VII B (posed) | Proposition 18 |
| Proposition 25 | Proposition 18 | — |
| Proposition 26 | Proposition 19 | Proposition 8 |
| Proposition 27 | — | Proposition 21 |
| Theorem 16 | Theorem 16 | Theorem 10 |
| Proposition 28 | — | Proposition 22 |
| Proposition 29 | — | Proposition 27 |
| Proposition 30 | — | Proposition 31 |
| Proposition 31 | — | Proposition 24 |
| Proposition 32 | — | Proposition 25 |
| Proposition 33 | — | Proposition 28 |
| Proposition 34 | Proposition 20 | Proposition 9 |
| Proposition 35 | Proposition 21 | Proposition 10 |
| Proposition 36 | Proposition 22 | Proposition 11 |
| Corollary 9 | Corollary 6 | Corollary 3 |
| Proposition 37 | Proposition 23 | Proposition 12 |
| Proposition 38 | Proposition 24 | Proposition 13 |
| Proposition 39 | Proposition 25 | Proposition 14 |
| Proposition 40 | Proposition 26 | text of Proposition 19 |
| Proposition 41 | — | Proposition 19 |
| Proposition 42 | — | Proposition 29 |
| Corollary 10 | — | Corollary 9 |
| Proposition 43 | Proposition 27 (the drift; option retired) | Proposition 40 |
| Conjecture 1 | text of Sec. IX G | Conjecture K-17 |
| Proposition 44 | — | Proposition 41 |
| Conjecture 2 | Conjecture 1 | — |
| Definition 9 | Definition 8 | Definition 5 |
| Proposition 45 | Proposition 28 | Proposition 15 |
| Proposition 46 | Proposition 29 | adopted from r1 |
| Proposition 47 | — | Proposition 20 |
| Proposition 48 | Proposition 30 | adopted from r1 by reference |
| Proposition 49 | Proposition 31 | — |
| Definition 10 | Definition 9 | Definition 6 |
| Definition 11 | Definition 10 | Definition 7 |

## K.3 Flags and cross-locks

| This revision | r1 and r2 |
|---|---|
| Flag F1 (objectivity) | F10$'$ |
| Flag F2 (chiral transduction) | F2 |
| Flag F3 (Skyrme quartic) | F4 |
| Flag F4 (near-BPS window) | F9 |
| Flag F5 (periodic-on-average isotropic lattice) | F5/F8 |
| Flag F6 (Gauss completion) | F-G |
| Flag F7 (blue fog) | F13 |
| Flag F8 (no signaling) | F-NS |
| Flag F9 (spin closure) | F-B1 |
| Flag F10 (fermionic heliknoton) | F12 (r1; unnamed in r2) |
| Flag F11 (weak triplet) | F14 (r1; unnamed in r2) |
| Cross-lock X1 (one longitudinal speed) | C-L |
| Cross-lock X2 (one pitch) | X-$\nu p$ (r1; dropped by r2) |
| Cross-lock X3 (one invariance) | C-EW4 |
| Cross-lock X4 (one halo) | C-EW2 |
| Cross-lock X5 (one censor) | C-EW3 |
| Cross-lock X6 (one soft coordinate) | X-$\Lambda\nu$ |
| Cross-lock X7 (one structural scale) | C-$\ell_s$ (r2) |
| Cross-lock X8 (one handedness bit) | C-EW1 |

## K.4 Stakes and closures

Tables 8 and 9 carry the legacy label of every closure and stake beside its new one. Read the other way:

- **Stakes.** S1 → S18; S2$'$ → S20; S3 → S7; S4$'$ → S9; S5 → S10; S6 → S19; S7 → S1; S8 → S21; S9 → S26; S10 → S24; S11 → S22; S12 → S23; S13 → S8; S14 → S11; S15 → S2; S16 → S4; S17 → S17; S18 → S25; S19, S20 (r2's S19/20) and r1's S30 → S29; S21 → S15; S22 → S3; S23 → S12; S24 → S13; r1's S25 → S16; r1's S26 → S28; r1's S27 is retired (Sec. 9.7); S28 → S6; S29 → S5; r2's S31 → S27; r2's S32 → S14.
- **Closures.** K-0 → K-1; K-N → K-3; K-3 → K-18; K-4 → K-19; K-5 → K-11; K-8 → K-26; K-9 → K-6; K-10 → K-9; K-11 → K-5; K-12 → K-21; K-13 → K-12; K-14 → K-13; K-15 → K-20; K-16 → K-2; K-17 → K-24; K-18 → K-4; r1's K-19 → K-10; r1's K-20 → K-27; r1's K-21 → K-25; K-22 → K-8; K-23 → K-23; K-24 → K-7; K-EW-I → K-14; K-EW-II → K-15; K-EW-III → K-16; K-G → K-22; r2's K-Q → K-17.

## K.5 Tables

| This revision | r1 | r2 |
|---|---|---|
| Table 1 | Table 1 | Table 6 |
| Table 2 | — | — |
| Table 3 | — | text of Sec. 7.1 |
| Table 4 | Table 5 | Table 4 |
| Table 5 | — | Table 7 |
| Table 6 | — | — |
| Table 7 | Table 2 | Table 1 |
| Table 8 | Table 3 | Table 2 |
| Table 9 | Table 4 | Table 3 |
| Table 10 | — | — |
| Table 11 | — | Table 8 |
| Table 12 | Table 6 | Table 5 |

## K.6 Equations

Each equation of this revision with its number in r1 and in r2. r1's Eq. (58), the inherited closure values $\mathfrak c = 64\sqrt2/(9\pi)$, $\kappa = 1/\sqrt2$ and $\kappa^2g_\mathrm{tot} = 35/24$ against $7/8$, is printed as text in Sec. 6.4 and corrected by Proposition 19. Equations (26), (67) and (E2) are new.

| This revision | r1 | r2 |
|---|---|---|
| (1) | (1) | (1) |
| (2) | (2) | (2) |
| (3) | (3) | (3) |
| (4) | (4) | (4) |
| (5) | (5) | (5) |
| (6) | (6) | (6) |
| (7) | (7) | (7) |
| (8) | (8) | (8) |
| (9) | (10) | (8a) |
| (10) | (9) | (9) |
| (11) | (11) | — |
| (12) | (12) | (9a) |
| (13) | (13) | (9b) |
| (14) | (14) | (10) |
| (15) | (15) | (11) |
| (16) | (16) | (12) |
| (17) | (17) | (13) |
| (18) | (18) | (79) |
| (19) | (19) | (80) |
| (20) | (20) | (81) |
| (21) | (21) | (82) |
| (22) | (22) | (83) |
| (23) | (23) | (84) |
| (24) | (24) | — |
| (25) | (25) | (15) |
| (26) | — | — |
| (27) | (26) | — |
| (28) | (27) | (85) |
| (29) | (28) | (86) |
| (30) | (29) | (87) |
| (31) | (30) | (88) |
| (32) | — | (54) |
| (33) | — | (90) |
| (34) | (31) | (89) |
| (35) | (32) | (18) |
| (36) | (33) | — |
| (37) | (34) | (19) |
| (38) | — | (20) |
| (39) | (35) | (21) |
| (40) | (36) | (22) |
| (41) | — | (70) |
| (42) | (37) | (23) |
| (43) | (38) | (24) |
| (44) | (39) | (25) |
| (45) | — | (94) |
| (46) | — | (95) |
| (47) | (40) | (92) |
| (48) | (41) | (93) |
| (49) | (42) | — |
| (50) | (43) | (96) |
| (51) | (44) | — |
| (52) | (45) | (98) |
| (53) | (46) | (27) |
| (54) | — | (28) |
| (55) | (47) | — |
| (56) | (48) | (29) |
| (57) | (49) | (30) |
| (58) | (50) | — |
| (59) | (51) | (31) |
| (60) | (52) | (32) |
| (61) | (53) | (33) |
| (62) | (54) | (34) |
| (63) | (55) | (35) |
| (64) | (56) | (36) |
| (65) | (57) | — |
| (66) | (59) | — |
| (67) | — | — |
| (68) | (60) | (99) |
| (69) | (61) | (37) |
| (70) | (62) | (38) |
| (71) | (63) | — |
| (72) | (64) | (39) |
| (73) | (65) | (40) |
| (74) | (66) | (41) |
| (75) | (67) | (42) |
| (76) | (G1) | (64) |
| (77) | — | (66) |
| (78) | — | (78) |
| (79) | — | (67) |
| (80) | (68) | — |
| (81) | (69) | (44) |
| (82) | (70) | (45) |
| (83) | (71) | — |
| (84) | (72) | (47) |
| (85) | (73) | — |
| (86) | (74) | — |
| (87) | — | (75) |
| (88) | — | (100) |
| (89) | (75) | — |
| (90) | — | (101) |
| (91) | — | (102) |
| (92) | — | (103) |
| (93) | — | (104) |
| (94) | (76) | — |
| (95) | — | (61) |
| (96) | — | (62) |
| (97) | — | (105) |
| (98) | (77) | — |
| (B1) | (B1) | (48) |
| (B2) | (B2) | — |
| (D1) | (D1) | (49) |
| (E1) | (E1) | — |
| (E2) | — | — |
| (F1) | (F1) | — |

## K.7 Corrections

r1 listed fifteen corrections and two errata, r2 twenty-eight corrections. Each maps to the consolidated list of Sec. 11.6:

| Parent item | This revision |
|---|---|
| r1 1, r2 1 (kinetic normalization) | 1 |
| r1 2, r2 2 (gap modulus) | 2, with the locking ratio corrected by 43 |
| r1 3, r2 5 (halo length); r1 erratum E1 | 3 |
| r1 4, r2 4 (cones); r1 erratum E2 | 4 |
| r1 5 (P5) | 5 |
| r1 6, r2 23 (near-field channel) | 6 |
| r1 7, r2 23 (longitudinal radiation) | 7 |
| r1 8, r2 8 (qubit ceiling; the cliff) | 8, 12 |
| r2 3 (Planck's constant) | 9 |
| r2 6 (finite $c_L$) | 10 |
| r2 7 (near-BPS window) | 11 |
| r1 9, r2 9 (structural scale) | 13, with the regularization of 55 |
| r1 10, r2 10 (pitch) | 14, with the window widened by 39 |
| r1 11, r2 11 (far-infrared observable) | 15 |
| r2 12 (feature depth) | 16 |
| r2 13 (halo dominance) | 17 |
| r2 14 (grades) | 18 |
| r2 15 (Weinberg angle, $0.227\pm0.009$) | superseded by 37 and 38 |
| r2 16 (strong sector) | 19 |
| r2 17 (EDM stake) | 20 |
| r1 13, r2 18 (Dvali–Turner) | 21 |
| r2 19 (distance fit) | 22, executed by 65, with its proxy claim corrected by 48 |
| r1 12, r2 20 (gravitational waves) | 23 |
| r2 21 (soft-mode stiffness) | 24, with the proof corrected by 50 |
| r2 22 (dark matter) | 25 |
| r2 24 (merged stake) | 26 |
| r2 25 (inverse-kill battery) | 27 |
| r2 26 (level 0) | 28, with the proof corrected by 57 |
| r1 14 (endpoint property) | 29, with the sign convention of 54 |
| r1 15, r2 27 (notation) | 30 |
| r2 28 (integrals) | 31 |
| r2, unnumbered (shape ratio; neutrino-mass floor; pair creation; early dark energy; electron scale) | 32, 33, 34, 35, 36 |

## K.8 References

Each entry of the bibliography with its number in r1 and in r2. Twelve entries are new in this revision: the supernova, oscillation and infrared data sources of the audit, the compressed CMB prior, and the audit itself.

| This revision | r1 | r2 |
|---|---|---|
| [1] | [1] | 1. |
| [2] | [2] | 18. |
| [3] | [3] | 4. |
| [4] | [4] | 32. |
| [5] | [5] | 6. |
| [6] | [6] | 33. |
| [7] | [7] | 2. |
| [8] | [8] | 3. |
| [9] | — | — |
| [10] | [9] | 5. |
| [11] | [10] | 7. |
| [12] | [11] | 8. |
| [13] | [12] | 9. |
| [14] | [13] | 10. |
| [15] | [14] | 11. |
| [16] | [15] | 12. |
| [17] | [16] | 13. |
| [18] | [17] | 14. |
| [19] | [18] | 15. |
| [20] | [19] | 16. |
| [21] | [20] | 17. |
| [22] | [21] | 19. |
| [23] | [22] | 20. |
| [24] | [23] | — |
| [25] | [24] | — |
| [26] | [25] | — |
| [27] | [26] | 25. |
| [28] | [27] | 68. |
| [29] | [28] | 65. |
| [30] | [29] | 66. |
| [31] | [30] | 21. |
| [32] | [31] | 22. |
| [33] | — | 67. |
| [34] | [32] | 77. |
| [35] | [33] | 23. |
| [36] | [34] | 42. |
| [37] | [35] | 43. |
| [38] | — | 24. |
| [39] | [36] | — |
| [40] | [37] | — |
| [41] | [38] | — |
| [42] | [39] | 26. |
| [43] | [40] | 27. |
| [44] | — | — |
| [45] | [41] | 52. |
| [46] | [42] | 53. |
| [47] | [82] | — |
| [48] | [43] | 28. |
| [49] | [44] | — |
| [50] | [45] | — |
| [51] | [46] | — |
| [52] | — | — |
| [53] | — | — |
| [54] | — | — |
| [55] | — | — |
| [56] | — | — |
| [57] | [47] | 29. |
| [58] | [48] | 30. |
| [59] | [49] | 31. |
| [60] | [50] | 34. |
| [61] | [51] | 35. |
| [62] | [52] | 36. |
| [63] | [53] | 37. |
| [64] | [54] | 38. |
| [65] | [55] | 39. |
| [66] | [56] | 40. |
| [67] | [57] | 41. |
| [68] | [58] | — |
| [69] | [59] | — |
| [70] | [60] | — |
| [71] | [61] | 69. |
| [72] | [62] | 70. |
| [73] | [63] | 44. |
| [74] | [73] | 45. |
| [75] | [74] | 46. |
| [76] | [75] | 47. |
| [77] | [76] | 48. |
| [78] | [77] | — |
| [79] | [78] | — |
| [80] | [64] | — |
| [81] | [65] | 71. |
| [82] | [66] | 72. |
| [83] | [67] | — |
| [84] | — | 73. |
| [85] | [68] | — |
| [86] | [69] | — |
| [87] | [70] | — |
| [88] | [71] | 74. |
| [89] | [72] | — |
| [90] | [79] | 49. |
| [91] | [80] | 50. |
| [92] | [81] | 51. |
| [93] | [83] | 54. |
| [94] | [84] | 55. |
| [95] | [85] | 56. |
| [96] | [86] | 57. |
| [97] | [87] | 58. |
| [98] | [88] | 59. |
| [99] | [89] | 60. |
| [100] | [90] | 61. |
| [101] | [91] | 62. |
| [102] | [92] | — |
| [103] | [93] | — |
| [104] | [94] | 63. |
| [105] | [95] | 64. |
| [106] | — | — |
| [107] | — | — |
| [108] | — | — |
| [109] | — | — |
| [110] | — | — |
| [111] | [98] | — |
| [112] | [99] | — |
| [113] | [100] | — |
| [114] | [96] | — |
| [115] | [97] | — |
| [116] | — | 75. |
| [117] | — | 76. |
| [118] | [101] | — |
| [119] | [102] | — |
| [120] | [103] | — |
| [121] | [104] | — |
| [122] | [105] | — |
| [123] | [106] | — |

# References

References are numbered in order of first citation. Entries marked "to be verified" must be checked before circulation.

1. Heisenberg, W., *Über quantentheoretische Umdeutung kinematischer und mechanischer Beziehungen*. Zeitschrift für Physik **33**, 879–893 (1925).
2. Bell, J. S., *Speakable and Unspeakable in Quantum Mechanics*, 2nd ed. Cambridge University Press (2004).
3. Madelung, E., *Quantentheorie in hydrodynamischer Form*. Zeitschrift für Physik **40**, 322–326 (1927).
4. Nelson, E., *Derivation of the Schrödinger equation from Newtonian mechanics*. Physical Review **150**, 1079–1085 (1966).
5. Wallstrom, T. C., *Inequivalence between the Schrödinger equation and the Madelung hydrodynamic equations*. Physical Review A **49**, 1613–1617 (1994).
6. Nelson, E., *Review of stochastic mechanics*. Journal of Physics: Conference Series **361**, 012011 (2012).
7. Cosserat, E. and Cosserat, F., *Théorie des corps déformables*. Hermann, Paris (1909).
8. Eringen, A. C., *Microcontinuum Field Theories I: Foundations and Solids*. Springer, New York (1999).
9. GUM review, *Independent recomputation of the 2026-09-28 revision and of revision 2, a partial normalization audit, the distance fit of the relaxation family, and archival tests of the far-infrared edge*. `analysis/` in this repository (2026-10-17).
10. Reginatto, M., *Derivation of the equations of nonrelativistic quantum mechanics using the principle of minimum Fisher information*. Physical Review A **58**, 1775–1778 (1998).
11. Valentini, A., *Signal-locality, uncertainty, and the subquantum H-theorem. I and II*. Physics Letters A **156**, 5–11 (1991); **158**, 1–8 (1991).
12. Dürr, D., Goldstein, S., and Zanghì, N., *Quantum equilibrium and the origin of absolute uncertainty*. Journal of Statistical Physics **67**, 843–907 (1992).
13. Colin, S. and Valentini, A., *Primordial quantum nonequilibrium and large-scale cosmic anomalies*. Physical Review D **92**, 043520 (2015) [to be verified].
14. Skyrme, T. H. R., *A non-linear field theory*. Proceedings of the Royal Society A **260**, 127–138 (1961).
15. Derrick, G. H., *Comments on nonlinear wave equations as models for elementary particles*. Journal of Mathematical Physics **5**, 1252–1254 (1964).
16. Bogomolny, E. B., *Stability of classical solutions*. Soviet Journal of Nuclear Physics **24**, 449–454 (1976).
17. Adam, C., Sánchez-Guillén, J., and Wereszczyński, A., *A Skyrme-type proposal for baryonic matter*. Physics Letters B **691**, 105–110 (2010).
18. Faddeev, L. and Niemi, A. J., *Stable knot-like structures in classical field theory*. Nature **387**, 58–61 (1997).
19. Battye, R. A. and Sutcliffe, P. M., *Knots as stable soliton solutions in a three-dimensional classical field theory*. Physical Review Letters **81**, 4798–4801 (1998).
20. Allori, V., Goldstein, S., Tumulka, R., and Zanghì, N., *On the common structure of Bohmian mechanics and the Ghirardi–Rimini–Weber theory*. British Journal for the Philosophy of Science **59**, 353–389 (2008).
21. Norsen, T., *The theory of (exclusively) local beables*. Foundations of Physics **40**, 1858–1884 (2010).
22. MacCullagh, J., *An essay towards a dynamical theory of crystalline reflexion and refraction*. Transactions of the Royal Irish Academy **21**, 17–50 (1848) [read 9 December 1839; to be verified].
23. Whittaker, E. T., *A History of the Theories of Aether and Electricity, Vol. 1: The Classical Theories*. Nelson, London (1951).
24. Thomson, W. (Lord Kelvin), *On a gyrostatic adynamic constitution for 'ether'*. Comptes Rendus de l'Académie des Sciences **109**, 453–455 (1889) [to be verified].
25. Böhmer, C. G., Downes, R. J., and Vassiliev, D., *Rotational elasticity*. Quarterly Journal of Mechanics and Applied Mathematics **64**, 415–439 (2011) [to be verified].
26. Jackson, J. D., *From Lorenz to Coulomb and other explicit gauge transformations*. American Journal of Physics **70**, 917–928 (2002).
27. Salart, D., Baas, A., Branciard, C., Gisin, N., and Zbinden, H., *Testing the speed of 'spooky action at a distance'*. Nature **454**, 861–864 (2008).
28. Yin, J. *et al.*, *Lower bound on the speed of nonlocal correlations without locality and measurement choice loopholes*. Physical Review Letters **110**, 260407 (2013).
29. Bancal, J.-D., Pironio, S., Acín, A., Liang, Y.-C., Scarani, V., and Gisin, N., *Quantum non-locality based on finite-speed causal influences leads to superluminal signalling*. Nature Physics **8**, 867–870 (2012).
30. Barnea, T. J., Bancal, J.-D., Liang, Y.-C., and Gisin, N., *Tripartite quantum state violating the hidden-influence constraints*. Physical Review A **88**, 022123 (2013).
31. Volovik, G. E., *The Universe in a Helium Droplet*. Oxford University Press (2003).
32. Kleinert, H., *Gauge Fields in Condensed Matter*. World Scientific, Singapore (1989).
33. Sakharov, A. D., *Vacuum quantum fluctuations in curved space and the theory of gravitation*. Doklady Akademii Nauk SSSR **177**, 70–71 (1967) [Soviet Physics Doklady **12**, 1040 (1968)].
34. Dvali, G. and Turner, M. S., *Dark energy as a modification of the Friedmann equation*. arXiv:astro-ph/0301510 (2003).
35. Manton, N. and Sutcliffe, P., *Topological Solitons*. Cambridge University Press (2004).
36. Collins, J., Perez, A., Sudarsky, D., Urrutia, L., and Vucetich, H., *Lorentz invariance and quantum gravity: an additional fine-tuning problem?*. Physical Review Letters **93**, 191301 (2004).
37. Chadha, S. and Nielsen, H. B., *Lorentz invariance as a low energy phenomenon*. Nuclear Physics B **217**, 125–144 (1983).
38. Jefimenko, O. D., *Electricity and Magnetism*. Appleton-Century-Crofts, New York (1966).
39. Stokes, G. G., *On the dynamical theory of diffraction*. Transactions of the Cambridge Philosophical Society **9**, 1–62 (1849).
40. Kholmetskii, A. L., Missevitch, O. V., Smirnov-Rueda, R., Ivanov, R., and Chubykalo, A. E., *Experimental test on the applicability of the standard retardation condition to bound magnetic fields*. Journal of Applied Physics **101**, 023532 (2007) [to be verified].
41. de Sangro, R., Finocchiaro, G., Patteri, P., Piccolo, M., and Pizzella, G., *Measuring propagation speed of Coulomb fields*. European Physical Journal C **75**, 137 (2015).
42. Dzyaloshinskii, I. E., *Theory of helicoidal structures in antiferromagnets. I. Nonmetals*. Soviet Physics JETP **19**, 960–971 (1964) [to be verified].
43. Wright, D. C. and Mermin, N. D., *Crystalline liquids: the blue phases*. Reviews of Modern Physics **61**, 385–432 (1989).
44. Esteban, I., Gonzalez-Garcia, M. C., Maltoni, M., Martinez-Soler, I., Pinheiro, J. P., and Schwetz, T., *NuFit-6.0: updated global analysis of three-flavor neutrino oscillations*. Journal of High Energy Physics **12**, 216 (2024) [to be verified].
45. DESI Collaboration, *DESI DR2 Results II: Measurements of baryon acoustic oscillations and cosmological constraints*. arXiv:2503.14738 (2025).
46. Elbers, W. *et al.* (DESI Collaboration), *Constraints on neutrino physics from DESI DR2 BAO and DR1 full shape*. arXiv:2503.14744 (2025) [to be verified].
47. Vagnozzi, S., Dhawan, S., Gerbino, M., Freese, K., Goobar, A., and Mena, O., *Constraints on the sum of the neutrino masses in dynamical dark energy models with $w(z)\geq-1$ are tighter than those obtained in $\Lambda$CDM*. Physical Review D **98**, 083501 (2018).
48. de Vries, Hl., *Rotatory power and other optical properties of certain liquid crystals*. Acta Crystallographica **4**, 219–226 (1951).
49. Landau, L. D., *Zur Theorie der Energieübertragung. II*. Physikalische Zeitschrift der Sowjetunion **2**, 46–51 (1932).
50. Zener, C., *Non-adiabatic crossing of energy levels*. Proceedings of the Royal Society A **137**, 696–702 (1932).
51. Erdogan, T., *Fiber grating spectra*. Journal of Lightwave Technology **15**, 1277–1294 (1997).
52. Houck, J. R. *et al.*, *The Infrared Spectrograph (IRS) on the Spitzer Space Telescope*. Astrophysical Journal Supplement Series **154**, 18–24 (2004).
53. O'Dowd, M. J. *et al.*, *Polycyclic aromatic hydrocarbons in galaxies at z ∼ 0.1: the effect of star formation and active galactic nuclei*. Astrophysical Journal **705**, 885–898 (2009) [to be verified].
54. Furlan, E. *et al.*, *The Herschel Orion Protostar Survey: spectral energy distributions and fits using a grid of protostellar models*. Astrophysical Journal Supplement Series **224**, 5 (2016).
55. Spitzer Science Center, *IRS Enhanced Products*, NASA/IPAC Infrared Science Archive, table `irs_enhv211` [to be verified].
56. Fisher, K. B., Huchra, J. P., Strauss, M. A., Davis, M., Yahil, A., and Schlegel, D., *The IRAS 1.2 Jy survey: redshift data*. Astrophysical Journal Supplement Series **100**, 69–103 (1995).
57. Minami, Y. and Komatsu, E., *New extraction of the cosmic birefringence from the Planck 2018 polarization data*. Physical Review Letters **125**, 221301 (2020).
58. Eskilt, J. R. and Komatsu, E., *Improved constraints on cosmic birefringence from the WMAP and Planck cosmic microwave background polarization data*. Physical Review D **106**, 063503 (2022).
59. Diego-Palazuelos, P., Komatsu, E., *et al.*, *Cosmic birefringence from the Atacama Cosmology Telescope Data Release 6*. arXiv:2509.13654 (2025) [author list to be verified].
60. Eckart, C. and Young, G., *The approximation of one matrix by another of lower rank*. Psychometrika **1**, 211–218 (1936).
61. Mirsky, L., *Symmetric gauge functions and unitarily invariant norms*. Quarterly Journal of Mathematics **11**, 50–59 (1960).
62. Page, D. N., *Average entropy of a subsystem*. Physical Review Letters **71**, 1291–1294 (1993).
63. Marchenko, V. A. and Pastur, L. A., *Distribution of eigenvalues for some sets of random matrices*. Mathematics of the USSR-Sbornik **1**, 457–483 (1967).
64. Nahum, A., Ruhman, J., Vijay, S., and Haah, J., *Quantum entanglement growth under random unitary dynamics*. Physical Review X **7**, 031016 (2017).
65. Arute, F. *et al.*, *Quantum supremacy using a programmable superconducting processor*. Nature **574**, 505–510 (2019).
66. Wu, Y. *et al.*, *Strong quantum computational advantage using a superconducting quantum processor*. Physical Review Letters **127**, 180501 (2021).
67. DeCross, M. *et al.*, *The computational power of random quantum circuits in arbitrary geometries*. Physical Review X **15**, 021052 (2025) [to be verified].
68. Morvan, A. *et al.*, *Phase transitions in random circuit sampling*. Nature **634**, 328–333 (2024) [to be verified].
69. Federer, H., *Geometric Measure Theory*. Springer, Berlin (1969).
70. Proctor, T., Rudinger, K., Young, K., Nielsen, E., and Blume-Kohout, R., *Measuring the capabilities of quantum computers*. Nature Physics **18**, 75–79 (2022).
71. Jacob, U. and Piran, T., *Lorentz-violation-induced arrival delays of cosmological particles*. Journal of Cosmology and Astroparticle Physics **01**, 031 (2008).
72. Vasileiou, V., Jacholkowska, A., Piron, F., Bolmont, J., Couturier, C., Granot, J., Stecker, F. W., Cohen-Tanugi, J., and Longo, F., *Constraints on Lorentz invariance violation from Fermi-Large Area Telescope observations of gamma-ray bursts*. Physical Review D **87**, 122001 (2013).
73. Finkelstein, D. and Rubinstein, J., *Connection between spin, statistics, and kinks*. Journal of Mathematical Physics **9**, 1762–1779 (1968).
74. Frenzel, T., Kadic, M., and Wegener, M., *Three-dimensional mechanical metamaterials with a twist*. Science **358**, 1072–1074 (2017).
75. Lakes, R. S., *Experimental microelasticity of two porous solids*. International Journal of Solids and Structures **22**, 55–63 (1986).
76. Ackerman, P. J. and Smalyukh, I. I., *Diversity of knot solitons in liquid crystals manifested by linking of preimages in torons and hopfions*. Physical Review X **7**, 011006 (2017).
77. Tai, J.-S. B. and Smalyukh, I. I., *Three-dimensional crystals of adaptive knots*. Science **365**, 1449–1453 (2019).
78. Voinescu, R., Tai, J.-S. B., and Smalyukh, I. I., *Hopf solitons in helical and conical backgrounds of chiral magnetic solids*. Physical Review Letters **125**, 057201 (2020).
79. Zheng, F. *et al.*, *Hopfion rings in a cubic chiral magnet*. Nature **623**, 718–723 (2023) [to be verified].
80. Calmet, X. and Fritzsch, H., *Cosmological evolution of the unified coupling constant*. European Physical Journal C **24**, 639–642 (2002).
81. Langacker, P., Segrè, G., and Strassler, M. J., *Implications of gauge unification for time variation of the fine structure constant*. Physics Letters B **528**, 121–128 (2002).
82. Lange, R., Huntemann, N., Rahm, J. M., Sanner, C., Shao, H., Lipphardt, B., Tamm, Chr., Weyers, S., and Peik, E., *Improved limits for violations of local position invariance from atomic clock comparisons*. Physical Review Letters **126**, 011102 (2021).
83. Bagdonaite, J., Jansen, P., Henkel, C., Bethlem, H. L., Menten, K. M., and Ubachs, W., *A stringent limit on a drifting proton-to-electron mass ratio from alcohol in the early universe*. Science **339**, 46–48 (2013).
84. Ubachs, W., Bagdonaite, J., Salumbides, E. J., Murphy, M. T., and Kaper, L., *Search for a drifting proton–electron mass ratio from H$_2$*. Reviews of Modern Physics **88**, 021003 (2016).
85. Murphy, M. T. *et al.*, *Fundamental physics with ESPRESSO: Precise limit on variations in the fine-structure constant towards the bright quasar HE 0515−4414*. Astronomy & Astrophysics **658**, A123 (2022).
86. Webb, J. K., King, J. A., Murphy, M. T., Flambaum, V. V., Carswell, R. F., and Bainbridge, M. B., *Indications of a spatial variation of the fine structure constant*. Physical Review Letters **107**, 191101 (2011).
87. Hestenes, D., *The zitterbewegung interpretation of quantum mechanics*. Foundations of Physics **20**, 1213–1232 (1990).
88. Catillon, P., Cue, N., Gaillard, M. J., Genre, R., Gouanère, M., Kirsch, R. G., Poizat, J.-C., Remillieux, J., Roussel, L., and Spighel, M., *A search for the de Broglie particle internal clock by means of electron channeling*. Foundations of Physics **38**, 659–664 (2008) [to be verified].
89. Lan, S.-Y., Kuan, P.-C., Estey, B., English, D., Brown, J. M., Hohensee, M. A., and Müller, H., *A clock directly linking time to a particle's mass*. Science **339**, 554–557 (2013).
90. Bourilkov, D., *Hint for axial-vector contact interactions in the data on $e^+e^-\to e^+e^-(\gamma)$ at center-of-mass energies 192–208 GeV*. Physical Review D **64**, 071701 (2001) [to be verified; used for the electron-size bound].
91. Brodsky, S. J. and Drell, S. D., *Anomalous magnetic moment and limits on fermion substructure*. Physical Review D **22**, 2236–2243 (1980).
92. Navas, S. *et al.* (Particle Data Group), *Review of Particle Physics*. Physical Review D **110**, 030001 (2024).
93. Vollhardt, D. and Wölfle, P., *The Superfluid Phases of Helium 3*. Taylor & Francis, London (1990).
94. Veltman, M., *Limit on mass differences in the Weinberg model*. Nuclear Physics B **123**, 89–99 (1977).
95. CMS Collaboration, *Measurement of the Higgs boson width and evidence of its off-shell contributions to ZZ production*. Nature Physics **18**, 1329–1334 (2022) [to be verified].
96. Jackiw, R. and Rebbi, C., *Solitons with fermion number 1/2*. Physical Review D **13**, 3398–3409 (1976).
97. Janot, P. and Jadach, S., *Improved Bhabha cross section at LEP and the number of light neutrino species*. Physics Letters B **803**, 135319 (2020) [to be verified].
98. Kobayashi, M. and Maskawa, T., *CP-violation in the renormalizable theory of weak interaction*. Progress of Theoretical Physics **49**, 652–657 (1973).
99. Hsu, S. D. H., *Entropy bounds and dark energy*. Physics Letters B **594**, 13–16 (2004).
100. Li, M., *A model of holographic dark energy*. Physics Letters B **603**, 1–5 (2004).
101. Planck Collaboration, *Planck 2018 results. VI. Cosmological parameters*. Astronomy & Astrophysics **641**, A6 (2020).
102. Dvali, G., Gabadadze, G., and Porrati, M., *4D gravity on a brane in 5D Minkowski space*. Physics Letters B **485**, 208–214 (2000).
103. Maartens, R. and Majerotto, E., *Observational constraints on self-accelerating cosmology*. Physical Review D **74**, 023004 (2006).
104. Chevallier, M. and Polarski, D., *Accelerating universes with scaling dark matter*. International Journal of Modern Physics D **10**, 213–223 (2001).
105. Linder, E. V., *Exploring the expansion history of the universe*. Physical Review Letters **90**, 091301 (2003).
106. Lemos, P. and Lewis, A., *CMB constraints on the early Universe independent of late-time cosmology*. Physical Review D **107**, 103505 (2023) [arXiv:2302.12911].
107. Brout, D. *et al.*, *The Pantheon+ analysis: cosmological constraints*. Astrophysical Journal **938**, 110 (2022).
108. DES Collaboration, *The Dark Energy Survey: cosmology results with ∼1500 new high-redshift type Ia supernovae using the full 5-year data set*. Astrophysical Journal Letters **973**, L14 (2024).
109. DES Collaboration, *DES-SN5YR data release, "Dovekie" recalibration*. github.com/des-science/DES-SN5YR (2025) [to be verified].
110. Rubin, D. *et al.*, *Union through UNITY: cosmology with 2,000 SNe using a unified Bayesian framework*. arXiv:2311.12098 (2023).
111. Touboul, P. *et al.* (MICROSCOPE Collaboration), *MICROSCOPE mission: final results of the test of the equivalence principle*. Physical Review Letters **129**, 121102 (2022).
112. Weinberg, S. and Witten, E., *Limits on massless particles*. Physics Letters B **96**, 59–62 (1980).
113. Abbott, B. P. *et al.* (LIGO Scientific Collaboration, Virgo Collaboration, Fermi GBM, and INTEGRAL), *Gravitational waves and gamma-rays from a binary neutron star merger: GW170817 and GRB 170817A*. Astrophysical Journal Letters **848**, L13 (2017).
114. Fardon, R., Nelson, A. E., and Weiner, N., *Dark energy from mass varying neutrinos*. Journal of Cosmology and Astroparticle Physics **10**, 005 (2004).
115. Afshordi, N., Zaldarriaga, M., and Kohri, K., *On the stability of dark energy with mass-varying neutrinos*. Physical Review D **72**, 065024 (2005).
116. ATLAS Collaboration, *Combination of searches for invisible decays of the Higgs boson using 139 fb$^{-1}$ of proton–proton collision data at $\sqrt s = 13$ TeV collected with the ATLAS experiment*. Physics Letters B **842**, 137963 (2023).
117. Cepeda, M. *et al.*, *Report from Working Group 2: Higgs physics at the HL-LHC and HE-LHC*. CERN Yellow Reports: Monographs **7**, 221–584 (2019).
118. Beacom, J. F. and Yüksel, H., *Stringent constraint on galactic positron production*. Physical Review Letters **97**, 071102 (2006).
119. Prantzos, N. *et al.*, *The 511 keV emission from positron annihilation in the Galaxy*. Reviews of Modern Physics **83**, 1001–1056 (2011).
120. Carroll, S. M., Field, G. B., and Jackiw, R., *Limits on a Lorentz- and parity-violating modification of electrodynamics*. Physical Review D **41**, 1231–1240 (1990).
121. Harari, D. and Sikivie, P., *Effects of a Nambu–Goldstone boson on the polarization of radio galaxies and the cosmic microwave background*. Physics Letters B **289**, 67–72 (1992).
122. Kibble, T. W. B., *Topology of cosmic domains and strings*. Journal of Physics A **9**, 1387–1398 (1976).
123. Zel'dovich, Ya. B., Kobzarev, I. Yu., and Okun, L. B., *Cosmological consequences of a spontaneous breakdown of a discrete symmetry*. Soviet Physics JETP **40**, 1–5 (1975).
