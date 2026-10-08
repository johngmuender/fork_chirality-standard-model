# GUM interactive edition

The GUM Material Primer and the working draft it teaches, as one interactive edition. The primer leads, its sixteen chapters nearly verbatim with their tags, problems and corrections boxes; four routes through the draft follow. Across the two: a scroll-driven audit of the ledger and a scroll-driven “made of” ladder, historical plates drawn in code, D3 exhibits for every sector, a Three.js knot explorer, GUM-physics and GUM-particle demonstrations, and two chaptered films rendered live. Five reading paths change the page’s order and depth. Glossary entries and folded chapters keep the background within reach.

The draft is `gum/paper/gum-paper.md` and the primer is `gum/primer/gum-primer.md`, both at the repository root. Every number on the page is computed by the library in `lib/` from their stated formulas; the chapters cite the propositions and sections they draw on.

## Develop

Use Node 22.13 or later. From this directory:

```sh
npm ci
npm run dev
```

The startup task copies the current draft and primer from `gum/` at the repository root into `public/`, records their SHA-256 in a manifest, and compiles the primer’s Markdown into `lib/primer-content.ts`, the typed module the primer path renders. [Illustration and film notes](ASSET_NOTES.md) explain how the plates and the films are made.

## Check and publish

```sh
npm run check
npm run typecheck
npm run lint
npm run build
npm run check:export
```

`npm run build` copies the draft and the primer again and writes the static export to `dist/client`. Two build variables, read in `site-address.mjs`, say where the export will be served: `BASE_PATH`, the URL prefix (`/gumai-website-intro-v5-1` on the GitHub project page, empty at the root of a domain), and `SITE_ORIGIN`, the scheme and host the canonical link names. On Vercel the origin defaults to the production domain; elsewhere, without `SITE_ORIGIN`, the page leaves its canonical link out. Run `npm run check:export` with the same variables: it reads the export from `dist/client` under the base path, the directory a host publishes. [Publishing](../README.md#publish) covers GitHub Pages, Vercel and Cloudflare.

The download manifest records both sources’ SHA-256 and is checked against the files. The compiled primer module is checked against a fresh parse of the Markdown.

## Reading and motion

The page opens on the primer. The hero begins with its letter, sends readers fluent in physics to the paper’s routes, and offers a returning reader their place. The chooser features the primer beside the paper’s four routes: curious readers start with the inverse Umdeutung, physics readers with the Cosserat action, experimenters with the thirty stakes, and reviewers with the sources and corrections. A chosen path is laid out before its first chapter: the primer as a course of eight parts between its front and back matter, a paper route as numbered steps with its landmarks and folded background.

The primer path begins with the primer’s letter and rules and runs through its sixteen chapters to the final project. Each part opens with what it sets out to do. On every path, a chapter ends with where the other edition treats the same material and with what comes next, and the end of a path offers the other ways in. A sticky reading bar shows the place on the path and steps to the previous and next chapters; its contents drawer holds the whole path, the reading depth and the other ways in, and when a reader opens a chapter outside the path the bar offers the way back. Finished chapters and the reader’s place are kept in this browser only and can be forgotten from the drawer. The reading-depth control becomes the primer’s two tracks on that path: the high-school track folds the ★ sections and the problems, the undergraduate track opens them, and the third setting opens the answer notes beside each problem. The URL preserves the path; on static hosting, the browser restores its query string after hydration. Links into folded chapters open the necessary material, and links from the primer into the paper’s instruments open the paper’s chapter without leaving the primer path.

Exhibits move gently only while visible. Interaction or keyboard focus pauses automatic selection changes. The page-wide pause control and reduced-motion preferences stop nonessential movement. Three.js rendering is capped at 30 frames per second and stops off-screen. A failed 3D download or graphics context leaves the flat section and the shell inspector available. The dark presentation is the only presentation.

## What the checks cover

- The exact linear spectrum and the cone condition; Proposition 4 arrival-time kinematics and the Eq. (43) bound; the pitch window and the transparency bound; Table 1 cliffs; the closure of ħ, the spin selection, the band edge, the positronium line and the channeling momenta; the knot’s sampled geometry.
- All 64 subsets of one family across six consistency sums; the rank-one neutral sector; holonomy counting; the frustration ladder; the relaxation family’s bounds; theme tokens and body-text contrast.
- Five reading routes over two editions, chapter coverage, prerequisite order, deep-link anchors and motion policies.
- The ledger census: thirty stakes, twenty-six closures, sixteen audited claims, fifteen corrections, two errata, seven cross-locks, and every glossary term in use.
- The primer: the compiled module matches its Markdown; sixteen chapters in eight parts with every box, problem set and table; every exhibit slot anchored and registered; and the primer’s own answer-key notes recomputed from the exhibits’ functions.
- React component tests for route changes, focus, timers, reduced motion, the films, the primer’s rendering and graphics failures; and for the reading journey: the hero, the chooser, the course and route maps, chapter ends, the reading bar, the contents drawer and the reading memory.
- Download identity, base-path asset paths for the page and its not-found page, the canonical link, and the static HTML of the primer-first page with its chapter text.

These are presentation and consistency tests. They recompute the draft’s and the primer’s closed-form arithmetic; they do not evaluate the profile and frustration integrals the draft marks [N], do not run its normalisation audit K-N, and do not adjudicate any stake.

The optional WebMCP interface exposes the same local checks and the reading-path switch; the page works without it.
