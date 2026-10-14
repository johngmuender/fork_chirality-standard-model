# The GUM Unified Master Manuscript

- `gum-unified-master-manuscript.md` — the master manuscript as received, draft of 2026-09-06 (SHA-256 `96c57246…b8b6`). Reviewed in `gum/review/`.
- `gum-unified-master-manuscript-r2.md` — revision 2 (2026-10-14): the master manuscript reconciled with the repository's revision of 2026-09-28 (`gum/paper/gum-paper.md`) and with the thirteen remediation items of the review. Section 10.5 of the revision lists its twenty-eight corrections; Appendix I registers every integral-dependent number with the grade of what depends on it.
- `check_revision.py` — standard-library Python that recomputes every number revision 2 prints that differs from, or is new relative to, the 09-06 draft: `python3 gum/manuscript/check_revision.py > gum/manuscript/revision-numbers.md`.
- `revision-numbers.md` — the script's output.

The revision keeps the master manuscript's section and equation numbering where the content is unchanged; new results carry new numbers (Theorems 11–17, Propositions 32–42, Corollaries 4–9, Definitions 10–12, Eqs. 79–105), and re-graded or withdrawn results keep their old numbers with their new grade.
