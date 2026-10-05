import { copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

// The draft lives in gum/paper at the repository root; the site serves a
// byte-identical copy and records its hash so a reader can check the download.
const site = fileURLToPath(new URL('../', import.meta.url));
const root = resolve(site, '..');
const files = {
  'gum-paper.md': 'gum/paper/gum-paper.md',
};
const check = process.argv.includes('--check');
const manifest = {
  repository: 'https://github.com/johngmuender/fork_chirality-standard-model',
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
const json = JSON.stringify(manifest, null, 2) + '\n';
const target = resolve(site, 'public/source-manifest.json');
if (check) {
  if (readFileSync(target, 'utf8') !== json)
    throw new Error('Stale asset manifest');
} else writeFileSync(target, json);
console.log(
  `${check ? 'Verified' : 'Synced'} ${manifest.files.length} download against the canonical draft.`,
);
