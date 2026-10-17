# Review of the GUM Unified Master Manuscript

This folder holds an independent verification and critical assessment of `gum/manuscript/gum-unified-master-manuscript.md` (the draft dated 2026-09-06, SHA-256 `96c57246…b8b6`), written in a deliberately non-mainstream frame: the substrate hypothesis is taken on its own terms and pushed to the experiments that could retire or confirm it.

- `manuscript-assessment.md` — the assessment: what reproduces, what does not, what is internally inconsistent, what is really discriminating, and twelve new questions with the experiments that answer them.
- `verify_manuscript.py` — a standard-library Python script that recomputes every closed-form number in the manuscript and several consequences the manuscript does not draw. Run it with `python3 gum/review/verify_manuscript.py > gum/review/verification-report.md`.
- `verification-report.md` — the script's output, one row per check, with a status code.

The repository's later revision of the same draft, `gum/paper/gum-paper.md` (2026-09-28), already withdraws or re-grades some of the items reviewed here; the assessment says which, so the two documents can be reconciled.

## Revision 3 audit

`gum/review/r3/` holds the audit of revision 3 (2026-10-17) of the manuscript and of the r3 primer: `verify_r3.py` and its report, and two files written for the agent that drafted r3 — the verification and correction notes and a brainstorm of new experiments. See `gum/review/r3/README.md`.
