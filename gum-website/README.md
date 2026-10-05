# GUM interactive edition

The GUM draft’s interactive website edition: a scroll-driven audit of the ledger, historical plates drawn in code, D3 exhibits for every sector, a Three.js knot explorer, GUM-physics and GUM-particle demonstrations and a chaptered film rendered live. Four reading paths change the page’s order and depth. Glossary entries and folded chapters keep the background within reach.

The draft is `gum/paper/gum-paper.md` at the repository root. Every number on the page is computed by the library in `lib/` from the draft’s stated formulas; the chapters cite the propositions they draw on.

## Develop

Use Node 22.13 or later. From this directory:

```sh
npm ci
npm run dev
```

The startup task copies the current draft from its canonical location in the parent repository into `public/` and records its SHA-256 in a manifest. [Illustration and film notes](ASSET_NOTES.md) explain how the plates and the film are made.

## Check and publish

```sh
npm run sync:assets
npm run check
npm run build:pages
node scripts/check-pages.mjs
```

GitHub Pages serves the static export under the repository name, `/fork_chirality-standard-model/` by default. Set `PAGES_BASE_PATH` and `SITE_ORIGIN` to publish a fork under another name. [The publishing workflow](../.github/workflows/gum-pages.yml) runs these checks and deploys that export when started by hand; the repository’s default Pages workflow still publishes the chirality essay on every push to `main`, so a repository chooses which site its project page serves.

The download manifest records the draft’s SHA-256 and is checked against the source file. There is no second copy of the draft on the site.

## Reading and motion

Curious readers start with the inverse Umdeutung, physics readers with the Cosserat action, experimenters with the thirty stakes and reviewers with the sources and corrections. The URL preserves the path; on static hosting, the browser restores its query string after hydration. Links into folded chapters open the necessary material.

Exhibits move gently only while visible. Interaction or keyboard focus pauses automatic selection changes. The page-wide pause control and reduced-motion preferences stop nonessential movement. Three.js rendering is capped at 30 frames per second and stops off-screen. A failed 3D download or graphics context leaves the flat section and the shell inspector available. The dark presentation is the only presentation.

## What the checks cover

- The exact linear spectrum and the cone condition; Proposition 4 arrival-time kinematics and the Eq. (43) bound; the pitch window and the transparency bound; Table 1 cliffs; the closure of ħ, the spin selection, the band edge, the positronium line and the channeling momenta; the knot’s sampled geometry.
- All 64 subsets of one family across six consistency sums; the rank-one neutral sector; holonomy counting; the frustration ladder; the relaxation family’s bounds; theme tokens and body-text contrast.
- Four reading routes, chapter coverage, prerequisite order, deep-link anchors and motion policies.
- The ledger census: thirty stakes, twenty-six closures, sixteen audited claims, fifteen corrections, two errata, seven cross-locks, and every glossary term in use.
- React component tests for route changes, focus, timers, reduced motion, the film and graphics failures.
- Download identity, Pages asset paths, static HTML and chapter text.

These are presentation and consistency tests. They recompute the draft’s closed-form arithmetic; they do not evaluate the profile and frustration integrals the draft marks [N], do not run its normalisation audit K-N, and do not adjudicate any stake.

The optional WebMCP interface exposes the same local checks and the reading-path switch; the page works without it.
