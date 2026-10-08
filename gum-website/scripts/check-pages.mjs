import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { JSDOM } from 'jsdom';

// The same environment that configured the build names the project page.
const basePath =
  process.env.PAGES_BASE_PATH ?? '/fork_chirality-standard-model';
const origin = process.env.SITE_ORIGIN ?? 'https://johngmuender.github.io';
const base = basePath + '/';
const output = resolve('dist/client' + basePath);
const html = readFileSync(resolve(output, 'index.html'), 'utf8');
const doc = new JSDOM(html).window.document;
assert.match(doc.title, /What Material Could Possess Quantum Mechanics/);
assert.equal(doc.querySelector('link[rel=canonical]').href, origin + base);
assert.match(doc.body.textContent, /inverse act/);
assert.match(
  doc.querySelector('#audit-step-0').textContent,
  /four levels of description/,
);
assert.match(
  doc.querySelector('#question').textContent,
  /What material could possess quantum mechanics/,
);
assert.match(doc.querySelector('#material').textContent, /cone condition/);
assert.match(doc.querySelector('#ledger').textContent, /THIRTY STAKES/);
// The curious route is prerendered; its chapters appear exactly once and the
// background chapters wait behind the fold, unmounted.
for (const id of [
  'question',
  'core',
  'material',
  'light',
  'particle',
  'quantum',
  'vacuum',
  'cosmos',
  'handedness',
  'ledger',
  'verify',
  'glossary',
  'local-checks',
  'stakes',
]) {
  assert.equal(
    doc.querySelectorAll('#' + id).length,
    1,
    'Missing or duplicate section: ' + id,
  );
}
for (const id of ['electron', 'sectors'])
  assert.equal(
    doc.querySelectorAll('#' + id).length,
    0,
    'Folded chapter mounted: ' + id,
  );
assert.match(doc.body.textContent, /The background is still here/);
assert.match(doc.body.textContent, /Teach me from the ground up/);
assert.equal(
  doc.querySelectorAll('.primer-choice').length,
  1,
  'the fifth path',
);
for (const id of ['primer-intro', 'primer-1', 'primer-16'])
  assert.equal(
    doc.querySelectorAll('#' + id).length,
    0,
    'Primer chapter mounted on the curious route: ' + id,
  );
assert.equal(doc.querySelectorAll('.plate-card').length, 6);
let references = 0;
for (const element of doc.querySelectorAll('[src],[href],[poster]')) {
  for (const attr of ['src', 'href', 'poster']) {
    const url = element.getAttribute(attr);
    if (!url || /^(?:https?:|data:|mailto:|#)/.test(url)) continue;
    assert(url.startsWith(base), 'Missing Pages prefix: ' + url);
    const path = decodeURIComponent(url.slice(base.length).split(/[?#]/)[0]);
    assert(
      existsSync(resolve(output, path || 'index.html')),
      'Missing published file: ' + url,
    );
    references++;
  }
}
const manifest = JSON.parse(
  readFileSync(resolve(output, 'source-manifest.json'), 'utf8'),
);
assert.equal(manifest.files.length, 2, 'the draft and the primer');
for (const file of manifest.files) {
  const bytes = readFileSync(resolve(output, file.download));
  assert.equal(bytes.length, file.bytes);
  assert.equal(createHash('sha256').update(bytes).digest('hex'), file.sha256);
  assert(
    bytes.equals(readFileSync(resolve('..', file.source))),
    'Published copy differs: ' + file.download,
  );
}
function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = resolve(dir, name);
    assert(
      !/^(?:\.git|\.env.*|node_modules|wrangler\.json)$/.test(name),
      'Private or server file in public output: ' + path,
    );
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}
const files = walk(output);
const downloads = new Set(manifest.files.map((file) => file.download));
for (const path of files.filter((path) => /\.(?:pdf|tex|md)$/i.test(path))) {
  assert(
    downloads.has(path.slice(output.length + 1)),
    'Unlisted manuscript download: ' + path,
  );
}
for (const path of files.filter((path) => path.endsWith('.css'))) {
  const css = readFileSync(path, 'utf8');
  for (const match of css.matchAll(/url\(["']?(\/[^)"']+)["']?\)/g)) {
    assert(match[1].startsWith(base), 'CSS resource lacks project prefix');
    assert(
      existsSync(resolve(output, match[1].slice(base.length))),
      'Missing CSS resource: ' + match[1],
    );
  }
}
console.log(
  `PASS: static Pages export at ${base}; ${references} local references; ${manifest.files.length} byte-identical download; ${files.length} public files; metadata and current chapter text.`,
);
