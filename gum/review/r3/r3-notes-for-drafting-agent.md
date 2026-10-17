# Audit notes on GUM r3 (paper and primer), for the r3 drafting agent

**Audience.** This file is written for the agent that drafted revision 3 of the GUM Unified Master Manuscript and the r3 primer. It is not a reader-facing review. It records what an independent re-derivation found, what it could not check, what it corrects, and what it recommends, in a form that can be acted on item by item. Everything numerical here is reproduced by `gum/review/r3/verify_r3.py` (standard library only) and tabulated in `gum/review/r3/r3-verification-report.md`; check ids in square brackets refer to that report.

**Objects audited.**

| file | sha256 (first 16 hex) | size |
|---|---|---|
| `gum/manuscript/gum-unified-master-manuscript-r3.md` | `2bd5cb7995db1e86` | 2574 lines, 54,797 words, 98 numbered + 6 lettered equations |
| `gum/primer/gum-primer-r3.md` | `940e04a5d5743c8e` | 1502 lines, 38,879 words |

**Method.** Every closed-form number r3 prints was recomputed from r3's own Table 10 inputs; every derivation that could be re-derived in closed form was; Theorem 7's passage formula was integrated numerically from Eq. (E1); Table 5's proxy was re-fitted from scratch; every label, equation number, table, correction and citation was resolved mechanically; the primer's shared numbers were diffed against the paper; and the repository (all branches) was searched for the companion files and the analysis that r3 cites.

**Headline.** 368 of 383 numerical checks pass at the printed rounding. The r3 arithmetic is sound: tilt, Weinberg band, normalization audit, bridge and neutrino window, pitch window, Bragg passage and transparency bound, locking length, Table 1, Table 4, Table 5, lag bounds, profile, electroweak and flavor numbers, channeling momenta, band edges. The failures are concentrated in three places, two of which are not arithmetic: (1) the data analysis that r3 cites as ref. [9] and the companion scripts do not exist in this repository, so the archival Spitzer limits and the full distance fit are unverifiable and currently violate r3's own rule against building on unpublished work; (2) the lag–birefringence execution (Prop. 47, Closure K-26, Stake S29 readout B) is quantitatively inconsistent with r3's own pitch-lag bound (Prop. 43) through cross-lock X6: once the soft-mode stiffness obeys Eq. (92), the tilt has changed by at most 10⁻⁶–10⁻⁸ since recombination and the induced rotation is of order 10⁻⁹ rad per unit coupling, six to eight orders below the reported 0.34°; (3) Eq. (96) carries the tilt-response coefficient of the superseded Landau law. Items are listed below in severity order with proposed fixes.

Severity: **S1** = must be resolved before circulation (integrity of the claims hierarchy); **S2** = should be fixed (a derivation or statement error with downstream consequences); **S3** = polish (rounding, wording, consistency); **info** = confirmation worth keeping.

---

## 1. Items

### A-01 (S1) The analysis cited as ref. [9] and the companion scripts are absent

*Location.* Ref. [9] ("GUM review … `analysis/` in this repository (2026-10-17)"); the draft-status box (`check_r3.py`, `build_r3.py`); Appendix H first paragraph; Sec. 1.4 ("*New:* the archival tests"); Sec. 4.5 **Status**; Sec. 9.5 **The full fit**, Table 6; Sec. 9.7 ("the door would need a lag of 40–80%"); Stakes S3 and S25 status columns; correction 65. [V1, V2]

*Finding.* No `analysis/` directory, no `check_r3.py` and no `build_r3.py` exist on any branch of `johngmuender/fork_chirality-standard-model` (searched: `main`, `docs/independent-review`, the four `cursor/*` branches, `gum_v51_*`). The only review in the repository, `gum/review/` on `gum_v51_manuscript_review_1`, recomputed the 2026-09-06 master (71 checks) and produced r2; it contains no Spitzer stacking and no distance fit. Ref. [9]'s title therefore describes work that is not in the repository. Everything that rests on it — the limits 5.5×10⁻¹⁷, 4.8×10⁻¹⁷, 4.2×10⁻¹⁷ and ℓ_lock < 1.5 nm; Table 6 with its 95% ranges and the Δχ² = +217 exclusion of DGP; the pipeline reproductions −8.02, −4.95, −13.71; the "40–80%" lag — cannot be verified here. The archival limits are internally plausible (a 95% limit at 5.5×10⁻¹⁷ corresponds to an unpolarized trough depth of 4%, consistent with a 2% systematic floor at 2σ [V3]), which is not the same as verified.

*Why S1.* Correction 31 states the rule: "nothing may be built on an unpublished integral until the normalization audit publishes it." An unpublished data analysis is in the same position. r3 marks S25 "executed" and prints the archival limits in bold in Sec. 1.4, the abstract and the stake table on the strength of files a reader cannot open.

*Fix (either).* (a) Commit the analysis: for the Spitzer arm, the AOR or program lists of the 101 + 363 and 193 + 656 + 58 objects, the pipeline version (CASSIS or the IRS Enhanced Products release), the template-fit code for Theorem 7, the systematic-floor estimate, the pre-registered combination rule and the blinding; for the distance arm, the DESI DR2 BAO distance table and covariance used, the compressed CMB prior triplet and its covariance, the supernova compilation versions (Pantheon+ release, DES-SN5YR 2024, DES-Dovekie 2025) with their covariances, the marginalization, the neutrino treatment, and the run that reproduces DESI's −8.0/−4.9/−13.6; plus `check_r3.py` and `build_r3.py`. (b) Until (a), re-grade: in Table 9 set S25 to "executed in an unpublished analysis; files owed" and move Table 6 and the Sec. 4.5 Status paragraph into a clearly marked provisional box; drop "two archival Spitzer tests give …" from the abstract and Sec. 1.4, or qualify it; replace the Appendix H sentence "recomputed … by the companion script `check_r3.py`" with a pointer to a script that exists (this repository's `gum/review/r3/verify_r3.py` reproduces every closed-form number of r3 and can be cited for that purpose).

### A-02 (S1) The lag-driven birefringence is bounded by r3's own equations at ~10⁻⁹ rad; the positivity paragraph uses a stiffness Eq. (92) excludes

*Location.* Prop. 47 (Eqs. 95–97) and the positivity paragraph of Sec. 10.2; Closure K-26 (Table 8, "Executed [DW-conditional]"); Stake S29 readout B; Table 7 row "Birefringence sign and profile … **Yes**"; Sec. 10.6 bullets 4 and 5; Sec. 1.4 and the abstract item (ix); primer Chapter 15 and the glossary entry "Lag–birefringence pair". [R50, R51]

*Finding 1 (inconsistency).* The positivity paragraph writes the condition as γ̄q*² > 2h_rec^{2(1−n)}ρ_DE,0/[(𝔪−1)sin²θ_c,0] and tests it against "the condensate scale (0.05 eV)⁴ = 2.2×10⁵ ρ_DE,0", finding margins 3, 4×10², 8×10³, 2×10⁴. Equation (96) relates the tilt to ρ_DE through Eq. (81), which identifies the soft-mode stiffness with the curvature of Eq. (25) in q, 𝒳⁻¹ = γ̄ sin²θ_c,0. The "condensate scale" is then 𝒳⁻¹ = 0.63 × (0.05 eV)⁴/(0.0503 eV)² = 1.6×10⁻³ eV², i.e. the pitch-scale stiffness that Sec. 9.7 itself excludes four-hundred-fold, and that Eq. (92) bounds from below by 1.6 eV² (n = 0.95) to 3.6×10² eV² (n = ½): a factor 10³ to 2.3×10⁵. The margins paragraph is therefore evaluated at a stiffness the paper has already ruled out. With an Eq. (92)-compliant stiffness the positivity condition is met by at least 10³ at every n and the paragraph can be reduced to one sentence.

*Finding 2 (magnitude).* The same substitution bounds the signal. From Eq. (96), with the lag at recombination δq_rec = ε_ν q h_rec^{1−n} (Prop. 43),

  sin²θ_c(t₀) − sin²θ_c(t_rec) ≤ ε_ν,max² sin²θ_c,0 h_rec^{2(1−n)}/(𝔪−1) = 1.0×10⁻⁶ (n = ½), 4.3×10⁻⁸ (0.75), 1.7×10⁻⁸ (0.9), 2.7×10⁻⁸ (0.95)

(with the corrected coefficient of A-03 these fall by a further 16%). Then, by Eqs. (94)–(96), the rotation accrued since recombination is

  |β_rec| = (α/4π) κ_χ (|χ₃|/m̃√γ̄) Δsin²θ_c ≤ κ_χ (|χ₃|/m̃√γ̄) × (5.9×10⁻¹⁰, 2.5×10⁻¹¹, 1.0×10⁻¹¹, 1.6×10⁻¹¹) rad.

The reported β = 0.342° = 5.97×10⁻³ rad would need κ_χ|χ₃|/(m̃√γ̄) ≥ 10⁷ (n = ½) to 4×10⁸ (n = 0.95). But positivity of the quadratic form of W₂ + W_χ in (ψ, ∇×φ) — 2μ_c|ψ|² − χ₃ ψ·(∇×φ) + ¼γ|∇×φ|² ≥ 0, using e_[ij]Γ_[ij] = −ψ·(∇×φ) — requires χ₃² < 2μ_cγ, hence |χ₃|/(m̃√γ) < √(2μ_c)/m̃ ≤ 1/√2 in general and = ½ in Branch A. With κ_χ = O(1) the induced rotation is at most ~10⁻⁹ rad. A coupling linear in δq rather than quadratic (Θ ∝ q sin²θ_c, say) would give at most (α/4π)|ε_ν|h_rec^{1−n} ≈ 7×10⁻⁷ rad (n = ½) to 1×10⁻⁷ rad (0.95) — still four orders below the signal. The conclusion does not depend on the regularization, on 𝔪, or on the choice between S(x) and 1/(𝔪−1).

*What this means.* Within r3's own structure — one soft coordinate (X6), the quasar bound on its lag (Prop. 43), the tilt law of Eq. (96) and the Chern–Simons coupling of Eq. (95) — GUM predicts **no detectable Θ-birefringence**. The reported 0.2–0.3° rotation, if real, is not GUM's. This removes the sign readout O₅ from the testable chain and dissolves the tension that the "lag–birefringence pair" was built to express (β ≠ 0 needing n < 1 while the distance data push n → 1): the pair stake retires itself on paper, which is a gain in consistency, not a loss. The only escape is to break X6 (a second soft coordinate that drives Θ but not the pitch), which would be a new flag.

*Fix.* (i) In Prop. 47 add the magnitude bound above as part (4), stated per n, and the positivity bound on |χ₃|/(m̃√γ) as a lemma. (ii) Re-grade Closure K-26 to "executed negatively on its magnitude: no detectable rotation; the sign and profile are conditional on an escape from X6", or to [posed] if the agent wants to look for a linear coupling. (iii) Rewrite Stake S29: readout A (w_a ≥ 0 and the posterior on n) stands; readout B becomes "GUM predicts |β_Θ| < 10⁻⁸ rad; a confirmed β at the reported level is external to GUM and does not test the handedness bit"; remove "β ≠ 0 at ≥ 5σ with n > 0.98" as a kill (it no longer kills anything) and the low-ℓ/high-ℓ threshold. (iv) Replace the positivity paragraph by: "With 𝒳⁻¹ bounded by Eq. (92), sin²θ_c changes by less than 10⁻⁶ back to recombination for every n, so the tilt law is positive trivially and the adiabatic condition is the only one that remains (Appendix D)." (v) Update Table 7 (the row becomes a null prediction, non-discriminating), Sec. 10.6 bullets 4–5, Sec. 1.4 item on Propositions 45–49, abstract item (ix), the conclusion's handedness sentence, and Appendix I's κ_χ row. (vi) Primer: Chapter 15 ("GUM: β ≠ 0 needs n < 1; sign +s …"), its NUMBERS TO HOLD, the step-up box, problem 15.3, the answer key, and the glossary entries "Lag–birefringence pair" and "Birefringence" need the same change; Chapter 16's stake table row S29. (vii) Prop. 45(iii) stands: the chain keeps exactly one testable check, the sign of δ_CP.

### A-03 (S2) Eq. (96) carries the tilt-response coefficient of the superseded Landau law

*Location.* Prop. 47(2), Eq. (96); the positivity paragraph of Sec. 10.2; Appendix D.3 last paragraph ("applied to the condensate tilt … gives the tilt law"). [R40]

*Finding.* Correction 37 replaced sin²θ_c = 1 − 1/𝔪 by the root of Eq. (26), and propagated the new value to Eqs. (32), (77), (78). Equation (96) was not re-derived: its bracket 1 − 2ρ_DE/[(𝔪−1)γ̄q*² sin²θ_c,0] is exactly δ ln sin²θ_c = (1/(𝔪−1)) δ ln 𝔪 with δ ln 𝔪 = −δq²/q*² — the sensitivity of the quartic Landau law. Differentiating Eq. (26) instead gives

  d ln sin²θ_c / d ln 𝔪 = S(x) ≡ x sin²x / [(1 − cos x)(sin x − x cos x)],  x = 2θ_c,

which is 1.82, 0.94, 0.61 at 𝔪 = 1.5, 1.9, 2.3 against 2.00, 1.11, 0.77. The printed coefficient overstates the tilt's response by 10–27% across the band. The sign of ε₅ and the profile Eq. (97) are unchanged (S > 0 and the ratio cancels it); the positivity thresholds scale by S(𝔪−1) = 0.84 at 𝔪 = 1.9.

*Fix.* Replace 1/(𝔪−1) by S(x₀) in Eq. (96) and state S in words ("the logarithmic sensitivity of the tilt to the margin, from Eq. (26)"). Given A-02 the positivity paragraph is rewritten anyway; the derivation note in D.3 should say that the tilt law follows from 𝔪 → 𝔪(1 − δq²/q*²), which is exact for Eq. (25).

### A-04 (S2) Stake S14 and the clock bound of Prop. 24 do not account for the fog sweeping past the laboratory

*Location.* Prop. 24, paragraph "The strongest existing evidence …"; Stake S14 (Table 9); Prop. 12 by contrast. [no numerical check; kinematic]

*Finding.* Propositions 10 and 12 treat the fog as frozen in the material frame, past which the laboratory moves at v_M = 369.8 km s⁻¹. Any pitch-periodic modulation of m_e is then, at a fixed laboratory site, a temporal modulation at v_M/p = 15.0 GHz, identical at every site up to a delay d/v_M (2.7 ps per micrometre). A lattice-clock comparison between sites micrometres apart, averaged over seconds, sees the time average, which is the same at all sites: the spatial scan of S14 is blind to exactly the structure it is meant to detect, and its null is guaranteed by kinematics, not by halo dominance. The electron-interferometer figure survives in weakened form: during a nanosecond flight each arm is swept by about 15 pitches, so the differential phase from a static pattern averages down by a factor of order √15 and the bound on cell-to-cell variation is ~10⁻¹³ rather than 1.3×10⁻¹⁴ — still environment-blind to seventeen decades, so the paragraph's conclusion stands while its first sentence does not.

*Fix.* Re-pose S14 in the frequency domain: a search for a sideband at 15.0 GHz (annually modulated by ±8% through the Earth's orbital velocity, with sidereal phase) on a clock transition, with the expected sensitivity stated honestly (it is poor: the modulation index is δm_e/m_e × ν/15 GHz); or retire S14 and keep the interferometer bound, recomputed with the sweep. State in Prop. 24 that the clock comparison cannot bound pitch-cell structure for a fog at rest in the material frame.

### A-05 (S2) The tilt is model-dependent through the gap term of Eq. (25)

*Location.* Eq. (25), Prop. 7; everything downstream of sin θ_c. [T8, W13]

*Finding.* Equation (25) writes the gap energy as ½Δ_s²θ², the small-angle form, and then solves it at θ_c = 0.92 rad. With a periodic gap energy Δ_s²(1 − cos θ) the stationarity condition is cos θ_c = 1/𝔪 and sin θ_c = 0.85 (θ_c = 58.2°); with Δ_s² sin²θ there is no interior minimum. The 0.79 is the correct minimum of Eq. (25) as written (verified, including the second-derivative sign), but the number is model-dependent at the 10% level through a term whose form r3 does not derive. Downstream, the three tilt laws in play give sin²θ_w = 0.227 (quartic Landau), 0.217 (Eq. 25) and 0.211 (periodic gap), all within ±0.013 of the on-shell value: the landing is robust; its central value is not.

*Fix.* Either derive the gap term's form from W₂ + W_χ on the lifted manifold, or print the tilt as a band over gap forms (0.79–0.85) and carry that band into Eqs. (32), (77), (78), (96). State explicitly that θ_c is not small.

### A-06 (S3) Branch A of the normalization audit is a stake-preserving choice; say so once more where κ enters

*Location.* Prop. 19, Table 2, Sec. 2.5 bullet "fixes the ratio μ_c/m̃_V² = 1/16". [N20]

*Finding.* The audit is correct (all of (i)–(iv) verified, including 𝔦₀ = 512/(105π) from the compacton integral and the invariance of the (1,1) Routhian identity w j(1−j) = 1 under the rescaling). But κ = 1/√2 is itself an inherited [N] solution value, and "at fixed ê_tot" is a convention. Branch A is therefore the branch that preserves every printed stake, chosen for that reason. r3 says this; Sec. 2.5's "fixes the ratio … by the closure value of κ" reads as a derivation.

*Fix.* In Sec. 2.5 and A.4 write "adopts the ratio μ_c/m̃_V² = 1/16 (Branch A of Prop. 19), the value at which the inherited closure value κ = 1/√2 survives the normalization correction".

### A-07 (S3) Table 1 caption: the π-cutoff shift is 3.3 qubits for cut hosting

*Location.* Table 1 caption; H.7. [S13, S14]

*Finding.* "Every entry at ℓ_P is about 5 qubits lower" holds for the rows that scale as ℓ_s⁻³ (H_V, H_R, Schmidt: 3 log₂π = 4.95). The cut-hosting row scales as ℓ_s⁻², so it moves by 2 log₂π = 3.3.

*Fix.* "… every volume and extent entry at ℓ_P is about 5 qubits lower and the cut entry about 3."

### A-08 (S3) Prop. 44's 5.9% does not follow from Table 10's inputs

*Location.* Eq. (93) and the sentence after it; Table 10 (Γ_h = 4.1 MeV). [E9]

*Finding.* With Γ_h = 4.1 MeV and Γ(h→ττ) = 0.26 MeV the invisible branching ratio is 0.26/4.36 = 5.96%, which rounds to 6.0%; 5.9% needs the unrounded Standard-Model width (4.07 MeV) and BR(h→ττ) = 6.27%. The primer prints 5.9% as well.

*Fix.* Either print 6.0% and 3.1%, or list Γ_h = 4.07 MeV and BR(h→ττ) = 6.27% in Table 10 and say "0.255 MeV".

### A-09 (S3) The d_n coefficient changed between revisions without a citation

*Location.* Prop. 31, H.3 ("at 2.4×10⁻¹⁶ e·cm per unit θ̄"). The master used 3.6×10⁻¹⁶. [E21]

*Fix.* Cite the source of the coefficient (both values are in the literature; lattice determinations are lower still) and keep one across revisions. Nothing downstream depends on it.

### A-10 (S3) m₁ at the top of the band: 0.133 in H.5, 0.134 in the primer's answer (12.7)

*Finding.* With m₃ = 0.143 eV, m₁ = 0.1339 eV; with the unrounded edge 0.1426 eV, 0.1335. Both roundings are defensible; they should agree. [B14, Q3]

### A-11 (S3) Two reference pitches are used without being named

*Location.* Sec. 7.2 ("q λ_halo,τ ≈ 2.6×10⁻¹¹"), H.6 ("reference pitch of the depth formulas 24.6 µm"). [B30]

*Finding.* 2.6×10⁻¹¹ = e^{−X} is q λ_halo,τ at the bridge's central pitch (26.6 µm, m₃ = 0.047 eV); at the reference pitch 24.6 µm it is 2.84×10⁻¹¹ (X = 24.29). Both are used consistently, but a reader cannot tell which pitch a given number assumes.

*Fix.* Name the pitch at each occurrence, or print q λ_halo,τ at 24.6 µm in Sec. 7.2.

### A-12 (S3) Correction 67 misstates r2's companion files

*Location.* Correction 67, first sentence ("r2's companion files cited non-existent `gum/manuscript/` paths and an absent bibliography file"). [V7]

*Finding.* `gum/manuscript/check_revision.py`, `gum/manuscript/revision-numbers.md`, `gum/manuscript/build_pdf.mjs` and `gum/manuscript/README.md` exist on branch `gum_v51_manuscript_review_1`, where r2 was committed (60faa61, 170725f). The r3 agent appears to have audited r2 from the uploaded manuscript alone.

*Fix.* Delete the clause, or restate it as "r2's companion files live on a branch that was not available to this revision".

### A-13 (S3) Rounding of γ_JR propagates into ε_R

*Location.* Prop. 28, H.3. [E13]

*Finding.* With γ_JR printed as 1.48, (ℓ_P/λ_halo,e)^{1.48} = 7.6×10⁻³⁴; H.3's 6.7×10⁻³⁴ uses the unrounded 1.4824. Print γ_JR = 1.483 or say the exponent is used unrounded. Nothing downstream changes.

### A-14 (S3) Cross-references: clean; twenty citations still flagged

*Finding.* 98 numbered equations in sequence, all equation references resolve; 16 theorems, 49 propositions, 5 lemmas, 10 corollaries, 11 definitions, 2 conjectures, all referenced labels defined (the strings "Theorem 17" and "Definition 12" occur only as r2's legacy labels in Appendix K.2); Flags F1–F11; Stakes S1–S29 and Closures K-1–K-27 in order; Tables 1–12; corrections 1–67 listed once each, 31 new as stated; bibliography 1–123, every citation resolves, no entry uncited; 20 entries carry "to be verified". Appendix K.4's map of r2's labels is correct (r2 had 27 stakes including S31 and S32, and 24 closures including K-Q). [X1–X16, V4, V5]

### A-15 (S2) Sec. 5.9: name the strongest applicable quadratic Lorentz-violation bound

*Location.* Prop. 16, Eq. (52), the sentence "satisfied by about eight orders of magnitude in ℓ_s". [S4, S25]

*Finding.* The arithmetic is right (ℓ_P is 8.0 decades below 1.5×10⁻²⁷ m). But ξ_γ = −1/12 is subluminal, and the Fermi-LAT GRB 090510 bound is one of several n = 2 bounds; the LHAASO time-of-flight analysis of GRB 221009A and the TeV–PeV transparency and photon-decay constraints are stronger for one or the other sign. The margin quoted should be against the strongest bound that applies to a subluminal photon, with the sign stated.

*Fix.* Add the sign statement and the strongest applicable current bound (to be looked up and cited; this audit had no network access to verify the numbers), and restate the margin.

### A-16 (info) Independent confirmations worth keeping

- Theorem 7's passage formula R = 1 − e^{−Π} was confirmed by direct numerical integration of the contra-directional coupled-mode equations (E1) with a linear sweep at Π = 0.105, 0.5, 1, 2, to four significant figures, with flux conservation to 10⁻¹³ [P24]. The Landau–Zener mapping is exact for this problem, as r3 states; a sharply truncated coupling window gives a 7% deficit at Π = 0.1 (the Fresnel tail), which is worth a sentence in Appendix E for anyone who re-does the check.
- Table 5's CPL proxy was re-fitted from scratch: all five (w₀, w_a) pairs and all fifteen Δχ² reproduce, the DESY5 minimum sits at n = 0.96 with 18.23 against 18.97 at n = 1, and the σ-equivalents for ΛCDM are 2.6, 3.5, 4.0 [R41–R49]. Correction 48 is confirmed.
- r3's characterizations of r2's errors were checked against the r2 text and are accurate in every case: corrections 37, 38, 45, 46, 48, 49, 50, 51, 53, 54, 55, 57, 58 and the 67 housekeeping items (6.8 eV², 3×10⁻³ V/m, ε_ν symbol) [V6]. The reviewer who produced r2 concurs with each.
- The abstract's closure census (10 executed or closed, 4 consistency, 3 conjectures, 1 partial, 9 posed) matches Table 8 row by row [X16].

### A-17 (S2) Stake S19 is not adjudicable by its named experiments once S18 sits at the ΛCDM edge

*Location.* Stake S19 ("0νββ occurs; LEGEND-1000; nEXO; kill: full-funnel exclusion"); Sec. 8.2; Prop. 8. [B17–B19]

*Finding.* r3's own cosmological rider puts m₃ in [0.0501, 0.0503] eV and hence m₁ ≤ 4.1 meV, m₂ ≈ 9.6 meV with normal ordering. With the standard mixing (sin²θ₁₂ ≈ 0.31, sin²θ₁₃ ≈ 0.022) the effective Majorana mass is then |m₁ × 0.67 + m₂ × 0.30 e^{iα} + m₃ × 0.022 e^{iβ}| ≲ 7 meV, with full cancellation available for m₁ ≈ 2–4 meV. LEGEND-1000 and nEXO reach roughly 10–20 meV. So if S18 survives at its edge, S19's kill condition cannot be reached by the experiments named, and a null from them tests nothing GUM predicts.

*Fix.* Print the implied m_ββ window beside S19, name it "not adjudicable by this generation unless m₁ > 10 meV, which S18's cosmological rider forbids", and move the adjudicator to a next-generation tonne-scale-plus programme or to the inverted-ordering clause (where m_ββ ≥ 15 meV and the stake is live).

### A-18 (S3) The locking-quench question of K-26 is moot for the stake after A-02 but not for the closure

*Location.* Sec. 4.4 last paragraph; Sec. 10.2 last paragraph; Table 8, K-26 deliverables.

*Finding.* Whether the time-dependent one-loop coupling escapes the (kℓ_lock)⁴ quench of Prop. 9 decides whether κ_χ is O(1) or ~(Hℓ_lock/c)⁴ ≈ 0. After A-02 the rotation is unobservable either way, so the question no longer bears on S29; it still bears on the honest grade of K-26 and should stay listed.

### A-19 (S2) Follow-through list for A-02 (every place the birefringence execution is relied on)

Abstract (ix); Sec. 1.4 bullet "Propositions 45, 46, 47, 48, 49"; Sec. 4.6 last sentence ("Section 10.2 shows that a condensate whose tilt relaxes … does"); Sec. 9.4 ("at the price of the birefringence execution of Sec. 10.2, which requires n < 1") and Sec. 9.5 ("What retirement would take with it … the birefringence execution requires n < 1"); Prop. 45 numbering of O₅; Sec. 10.2 entire second half; Sec. 10.3 (sign flips of β as the domain diagnostic — now unobservable; keep the proposition, drop the readout); Sec. 10.5; Sec. 10.6 bullets 4–5; Table 7; Table 8 K-26; Table 9 S29; X8 ("and through Proposition 47 the birefringence sign and profile"); Sec. 12 ("a handedness bit links weak chirality, δ_CP, birefringence …"); Appendix I rows κ_χ and 𝒳⁻¹; Appendix K entries for r1's S19/S20/S30 and r2's S19/20; correction 53 and 54 (keep, they remain true), and a new correction recording the magnitude bound. In the primer: Chapter 15 throughout, Chapter 16's stake table and reading-kit example, the glossary.

---

## 2. The primer

The primer's numbers agree with the paper's wherever both print one (58 shared values checked, all present [Q1]); legacy values (0.69, 1.24, 0.227, ±0.90, 0.057, 4.52, 1.38) appear only in "what changed" context [Q2]. Items:

- **P-1 (S1, follows A-02).** Chapter 15's content — "β ≠ 0 needs n < 1; sign +s, counterclockwise; profile 6×10⁻⁴ to 0.18" — and the glossary entries "Birefringence" and "Lag–birefringence pair" present the birefringence execution as a live two-readout stake. After A-02 the chapter should teach the stronger lesson: a chiral vacuum does *not* automatically rotate polarization, and GUM's own bounds put its rotation at 10⁻⁹ rad. Problem 15.3 already points in this direction and can carry the new number.
- **P-2 (S2, follows A-04).** Chapter 11's "strongest evidence … a measurement" paragraph and the S14 row in Chapter 16 inherit the moving-frame caveat.
- **P-3 (S3).** Answer (12.7): m₁ ≈ 0.134 eV versus the paper's 0.133 (A-10).
- **P-4 (S3).** Answer (14.9) correctly gives 8.3×10⁻⁶ for the ΛCDM-h(3) version of the bound — keep it; it is a good teaching point.
- **P-5 (S3).** Chapter 13's NUMBERS TO HOLD prints 5.9% (A-08).
- **P-6 (S3).** Chapter 6's NUMBERS TO HOLD lists ℓ_lock ≲ 1.7 nm and the archival 1.5 nm; the second depends on A-01 and should be marked "archival analysis, files owed" until the analysis is committed.
- **P-7 (info).** The primer's statements of Theorem 7 ("adiabatic or sudden?"), of the cliff width, of the clock resonance, of the bridge and of the two branches are correct and match the verified numbers.

## 3. Proofs and grades that remain assertions (compact list, for the next revision's ledger)

| item | status in r3 | smallest next computation |
|---|---|---|
| cone condition Eq. (12) | imported, K-2 | the ℓ_g-dependence of (c_ψ − c)/c is already a constraint; derive μ/ρ₀ = γ_eff/2J from a one-parameter level-0 bond model |
| Gauss completion Eq. (21), Flag F6 | adopted, K-4 | the stiff limit of a constitutive term ∝ (κ_B∇·φ + c_L⁻²∂_tΦ_c)² (r3's own suggestion), with its defect current |
| dense storage (M1, M2) | hypothesis, K-7 | none needed: it is the hypothesis the mirror protocol tests; keep it a hypothesis |
| Flag F9 (1,1) | flagged | the dilation law on a bench (S8); no paper computation available |
| tilt correction form ¼(1 − ε/3) | asserted, K-16 | the projection of the S³ metric onto the tilted cell, which is a finite computation in the (6+0) geometry |
| gap-term form in Eq. (25) | unstated (A-05) | expand W₂ + W_χ on the lifted manifold to quartic order in θ |
| Sakharov positivity, N_eff | asserted, K-22 | the sign of each species' heat-kernel coefficient a₁ under the chosen regularization |
| Θ-coupling magnitude | now bounded (A-02) | the positivity bound on χ₃ as a lemma; a search for a coupling linear in δq, which would break X6 |
| K-26 locking quench | posed | the one-loop B3 determinant with a time-dependent mass at k → 0 |
| Prop. 1 (H0) | hypothesis | none in the paper; state that generic complexes need not satisfy (H0), as r3 does |
| Prop. 24 halo dominance | posed, K-9 | item 3 of its deliverables (the gapped linear B3 belt) is a one-dimensional ODE and could be executed in this revision cycle |
| Prop. 19 Branch A | choice | item 3 of K-3 |
| archival limits and distance fit | unpublished (A-01) | commit the analysis |

## 4. Ready-to-paste patches (manuscript voice)

**4.1 Prop. 47, new part (4).** "*(4) The magnitude is bounded by the pitch lag. With one soft coordinate (X6), δq_rec = ε_ν q h_rec^{1−n}, and Eq. (96) gives sin²θ_c(t₀) − sin²θ_c(t_rec) ≤ S(x₀) ε_ν² sin²θ_{c,0} h_rec^{2(1−n)}, which with Eq. (91) is below 10⁻⁶ for every n ∈ [½, 0.95]. Positivity of the quadratic form of W₂ + W_χ in (ψ, ∇×φ) requires χ₃² < 2μ_cγ, hence |χ₃|/(m̃√γ) < √(2μ_c)/m̃ ≤ 1/√2. Therefore |β_rec| ≤ (α/4π) κ_χ × 10⁻⁶/√2 ≈ 4×10⁻¹⁰ κ_χ rad for n = ½ and smaller for larger n: GUM's condensate relaxation produces no detectable rotation. The reported β = 0.34° is not GUM's.*"

**4.2 Sec. 10.2 positivity paragraph, replacement.** "The tilt law has a positivity condition, that sin²θ_c stay positive back to recombination. With 𝒳⁻¹ bounded below by Eq. (92) it is met by at least three orders of magnitude for every n, and the only condition that remains is the adiabatic one of Appendix D."

**4.3 Stake S29, replacement of readout B.** "*Readout B (polarization):* GUM predicts |β_Θ| < 10⁻⁸ rad from condensate relaxation (Prop. 47(4)); the reported 0.2–0.3° rotation, if confirmed, is external to GUM and does not read the handedness bit. The sign and profile of Eqs. (96)–(97) apply only to a coupling that escapes cross-lock X6, which GUM has not exhibited."

**4.4 Table 1 caption, last sentence.** "If the induced-gravity cutoff is π/ℓ_s rather than 1/ℓ_s (Sec. 9.6), every volume and extent entry at ℓ_P is about 5 qubits lower and the cut entry about 3."

**4.5 Eq. (96), bracket.** Replace 2ρ_DE(t)/[(𝔪−1) γ̄q*² sin²θ_{c,0}] by S(x₀) · 2ρ_DE(t)/(γ̄q*² sin²θ_{c,0}) with "S(x) = x sin²x/[(1−cos x)(sin x − x cos x)] the logarithmic sensitivity of Eq. (26); S = 0.94 at 𝔪 = 1.9".

**4.6 Prop. 24, clock sentence.** "Optical lattice clocks compare atoms at sites micrometres apart at 10⁻¹⁸, but a fog at rest in the material frame sweeps past every site at v_M, so a pitch-periodic modulation of m_e is a 15 GHz temporal signal common to all sites, which a site-to-site comparison cannot see. The bound that survives is the interferometric one, …"

**4.7 Correction 67, first clause.** Delete "r2's companion files cited non-existent `gum/manuscript/` paths and an absent bibliography file;".

**4.8 Appendix H, first sentence.** "Every closed-form number in this revision is recomputed from the inputs of Table 10 by `gum/review/r3/verify_r3.py` in this repository, which rounds once from the computed value and checks that the printed form appears in the text." (Or restore `check_r3.py` to the repository.)

**4.9 Ref. [9] and the two Status paragraphs.** Until the analysis is committed: "[9] GUM review, *Archival tests of the far-infrared edge and the distance fit of the relaxation family*. Analysis files not yet in the repository; the numbers quoted from it in Secs. 4.5 and 9.5 are provisional." and mark Table 6 and the Sec. 4.5 Status paragraph "provisional (ref. [9])".

**4.10 Prop. 44.** "…so BR(h→invisible) = 6.0% or 3.1% with Γ_h = 4.1 MeV (5.9% and 3.1% with the Standard Model's 4.07 MeV)…"

## 5. Machine-readable index

| id | severity | location | type | action | status after this audit |
|---|---|---|---|---|---|
| A-01 | S1 | ref. [9]; Secs. 4.5, 9.5; Table 6; S3, S25; App. H | provenance | commit analysis or re-grade | open |
| A-02 | S1 | Prop. 47; Sec. 10.2; K-26; S29; Table 7; Sec. 10.6 | derivation/consistency | add magnitude bound; re-grade K-26; rewrite S29 | open |
| A-03 | S2 | Eq. (96) | derivation | replace 1/(𝔪−1) by S(x₀) | open |
| A-04 | S2 | Prop. 24; S14 | kinematics | frequency-domain S14; recompute bound | open |
| A-05 | S2 | Eq. (25), Prop. 7 | model dependence | derive or band the gap term | open |
| A-06 | S3 | Sec. 2.5, A.4 | wording | "adopts" not "fixes" | open |
| A-07 | S3 | Table 1 caption | arithmetic | 3 qubits for H_A | open |
| A-08 | S3 | Eq. (93) | rounding provenance | 6.0% or unrounded inputs | open |
| A-09 | S3 | Prop. 31 | citation | d_n coefficient source | open |
| A-10 | S3 | H.5 vs primer (12.7) | rounding | harmonize 0.133/0.134 | open |
| A-11 | S3 | Sec. 7.2, H.6 | naming | name the reference pitch | open |
| A-12 | S3 | correction 67 | factual | delete clause | open |
| A-13 | S3 | Prop. 28, H.3 | rounding | γ_JR = 1.483 | open |
| A-14 | S3 | whole paper | cross-references | none required; 20 citations to verify | clean |
| A-15 | S2 | Sec. 5.9 | citation | strongest applicable n = 2 bound, sign stated | open |
| A-16 | info | Theorem 7; Table 5; corrections | confirmations | keep | — |
| A-17 | S2 | Stake S19 | adjudicability | print m_ββ window; re-assign adjudicator | open |
| A-18 | S3 | K-26 deliverables | bookkeeping | keep the quench question | open |
| A-19 | S2 | list in §1 | follow-through of A-02 | edit each site | open |
| P-1…P-7 | S1–info | primer | as above | as above | open |

*Provenance of this file.* Produced on branch `gum_v51_r3_review_1` of `johngmuender/fork_chirality-standard-model`, 2026-10-17, by the reviewing agent that produced `gum/review/` and r2. The script and report beside it are the evidence; nothing here rests on an unpublished computation.
