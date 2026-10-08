# GUM: the Material Primer and the draft it teaches

This repository holds the two texts of the GUM program (Geometrische Umdeutung Mechanik) and the interactive edition that presents them.

| Path | Contents |
| --- | --- |
| `gum/primer/gum-primer.md` | *The GUM Material Primer: What Keeps the Books?* Sixteen chapters in eight parts for honors high-school and first-year undergraduate readers, with a glossary, answer notes and a final project. |
| `gum/paper/gum-paper.md` | The working draft, *What Material Could Possess Quantum Mechanics as Its Coarse-Grained Bookkeeping?*, revision of 2026-09-28. |
| `gum-website/` | The interactive edition: the primer first, then four routes through the draft. [Its README](gum-website/README.md) describes the reading paths, the exhibits and what the checks cover. |

The website copies both texts from `gum/` when it builds and checks the copies byte for byte, so `gum/` is the only place to edit them.

## Develop

Use Node 22.13 or later.

```sh
cd gum-website
npm ci
npm run dev
```

## Check

```sh
cd gum-website
npm run check
npm run typecheck
npm run lint
```

GitHub Actions runs the same checks on every pull request, then builds the export and checks it.

## Publish

The edition is a static export: `npm run build` in `gum-website` writes it to `gum-website/dist/client`. The repository is ready for three hosts; any one of them is enough.

### GitHub Pages

[`.github/workflows/pages.yml`](.github/workflows/pages.yml) publishes the default branch on every push to it. Once, in the repository's Settings → Pages, set Source to GitHub Actions, then push to the default branch or run the workflow from the Actions tab. The edition is served at `https://johngmuender.github.io/gumai-website-intro-v5-1/`, or at a custom domain set on the same page; the workflow reads the address from Pages. Pages needs a public repository, or a paid plan for a private one.

### Vercel

Add New → Project, import the repository and deploy with the defaults. [`vercel.json`](vercel.json) supplies the install command, build command and output directory, so leave the root directory at the repository root. Pushes to the production branch deploy to production and other branches get preview deployments; the canonical link names the production domain. Vercel picks `main`, then `master`, then the repository's default branch; change it under the project's Settings → Git.

### Cloudflare Workers

Workers & Pages → Create application → Import a repository, choose this repository and set:

- Project name: `gumai-website-intro-v5-1`, the `name` in [`wrangler.jsonc`](wrangler.jsonc); the build fails if they differ.
- Build command: `cd gum-website && npm ci && npm run build`
- Deploy command: `npx wrangler deploy`, the default.

The edition is served at `https://gumai-website-intro-v5-1.<subdomain>.workers.dev/`. For a canonical link, add that address as the build variable `SITE_ORIGIN`. To deploy from a machine instead, build, then run `npx wrangler deploy` from the repository root.

### Where the export is served

Two build variables, read in [`gum-website/site-address.mjs`](gum-website/site-address.mjs), tell the build where the export will live:

| Variable | Meaning |
| --- | --- |
| `BASE_PATH` | The URL prefix: `/gumai-website-intro-v5-1` on the project page, empty at the root of a domain. The Pages workflow sets it. |
| `SITE_ORIGIN` | The scheme and host the canonical link names. The Pages workflow sets it; on Vercel it defaults to the production domain. Without it the page has no canonical link. |

To build and check the project-page export locally:

```sh
cd gum-website
export BASE_PATH=/gumai-website-intro-v5-1 SITE_ORIGIN=https://johngmuender.github.io
npm run build
npm run check:export
```
