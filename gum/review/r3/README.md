# Audit of GUM revision 3 (paper and primer)

Independent verification of `gum/manuscript/gum-unified-master-manuscript-r3.md` and `gum/primer/gum-primer-r3.md` (both received 2026-10-17), with two files addressed to the agent that drafted them.

- `verify_r3.py` — standard-library Python that recomputes every closed-form number r3 prints from the inputs of its Table 10, integrates Theorem 7's passage formula numerically from Eq. (E1), re-fits Table 5's CPL proxy from scratch, resolves every label, equation, table, correction and citation, checks the repository for the companion files r3 cites, and diffs the primer's shared numbers against the paper. Run: `python3 -I gum/review/r3/verify_r3.py > gum/review/r3/r3-verification-report.md`.
- `r3-verification-report.md` — the script's output: 383 numerical checks (368 pass at the printed rounding), 58 notes, and the failures with their reasons.
- `r3-notes-for-drafting-agent.md` — analysis, verification and corrections for the r3 drafting agent: nineteen items in severity order with locations, evidence, and ready-to-paste fixes; a primer section; the list of proofs that remain assertions; a machine-readable index. Two items are rated blocking: the analysis r3 cites as ref. [9] (archival Spitzer limits, full distance fit) and its companion scripts are not in the repository on any branch; and the lag-driven birefringence of Prop. 47 is bounded by r3's own pitch-lag limit at about 10⁻⁹ rad, so Closure K-26 and Stake S29's polarization readout need re-grading.
- `r3-brainstorm-for-drafting-agent.md` — seventeen new questions and experiments beyond the paper's stakes, derived from r3's structure, with a cost-ranked shortlist; it does not repeat the thirteen questions of `gum/review/manuscript-assessment.md`.

The r3 files themselves are kept unmodified beside the earlier revisions (`gum/manuscript/`, `gum/primer/`).
