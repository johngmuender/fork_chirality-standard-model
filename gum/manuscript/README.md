# The GUM Unified Master Manuscript

- `gum-unified-master-manuscript.md` — the master manuscript as received, draft of 2026-09-06 (SHA-256 `96c57246…b8b6`). Reviewed in `gum/review/`.
- `gum-unified-master-manuscript-r2.md` — revision 2 (2026-10-14): the master manuscript reconciled with the repository's revision of 2026-09-28 (`gum/paper/gum-paper.md`) and with the thirteen remediation items of the review. Section 10.5 of the revision lists its twenty-eight corrections; Appendix I registers every integral-dependent number with the grade of what depends on it.
- `gum-unified-master-manuscript-r3.md` — revision 3 (2026-10-17), received as drafted: a merge of the 2026-09-28 revision and revision 2 with sixty-seven listed corrections and a concordance to both parents. Audited in `gum/review/r3/`; its companion primer is `gum/primer/gum-primer-r3.md`.
- `check_revision.py` — standard-library Python that recomputes every number revision 2 prints that differs from, or is new relative to, the 09-06 draft: `python3 gum/manuscript/check_revision.py > gum/manuscript/revision-numbers.md`.
- `revision-numbers.md` — the script's output.
- `gum-unified-master-manuscript-r2.pdf` — a PDF preview of revision 2 (Letter, single column, 49 pages), rendered from the Markdown with KaTeX and Chromium.
- `build_pdf.mjs` — the renderer: `node gum/manuscript/build_pdf.mjs <input.md> <output.pdf> --modules <dir>` where `<dir>` holds `node_modules/katex` and `node_modules/markdown-it` (install with `npm install katex markdown-it` in any directory) and a Playwright Chromium is available (`PLAYWRIGHT_BROWSERS_PATH`). Math is rendered server-side by KaTeX; the YAML front matter is stripped; page headers carry the running title and footers the page numbers.

The revision keeps the master manuscript's section and equation numbering where the content is unchanged; new results carry new numbers (Theorems 11–17, Propositions 32–42, Corollaries 4–9, Definitions 10–12, Eqs. 79–105), and re-graded or withdrawn results keep their old numbers with their new grade.
