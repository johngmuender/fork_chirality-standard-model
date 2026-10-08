import { copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { parsePrimer, renderPrimerModule } from './primer-parser.mjs';

// The draft and the primer live under gum/ at the repository root; the site
// serves byte-identical copies, records their hashes, and compiles the primer
// into the typed module the fifth reading path renders.
const site = fileURLToPath(new URL('../', import.meta.url));
const root = resolve(site, '..');
const files = {
  'gum-paper.md': 'gum/paper/gum-paper.md',
  'gum-primer.md': 'gum/primer/gum-primer.md',
};
const check = process.argv.includes('--check');
const manifest = {
  repository: 'https://github.com/johngmuender/gumai-website-intro-v5-1',
  scope:
    'SHA-256 of the downloadable files copied from this checkout. Content identity, not a publisher signature.',
  files: Object.entries(files).map(([download, source]) => {
    const bytes = readFileSync(resolve(root, source));
    const target = resolve(site, 'public', download);
    if (check) {
      if (!bytes.equals(readFileSync(target)))
        throw new Error('Stale download: ' + download);
    } else copyFileSync(resolve(root, source), target);
    return {
      download,
      source,
      bytes: bytes.length,
      sha256: createHash('sha256').update(bytes).digest('hex'),
    };
  }),
};
const primer = renderPrimerModule(
  parsePrimer(readFileSync(resolve(root, files['gum-primer.md']), 'utf8')),
);
const primerTarget = resolve(site, 'lib/primer-content.ts');
if (check) {
  if (readFileSync(primerTarget, 'utf8') !== primer)
    throw new Error('Stale primer module: run npm run sync:assets');
} else writeFileSync(primerTarget, primer);
const json = JSON.stringify(manifest, null, 2) + '\n';
const target = resolve(site, 'public/source-manifest.json');
if (check) {
  if (readFileSync(target, 'utf8') !== json)
    throw new Error('Stale asset manifest');
} else writeFileSync(target, json);
console.log(
  `${check ? 'Verified' : 'Synced'} ${manifest.files.length} downloads and the compiled primer against the canonical sources.`,
);
