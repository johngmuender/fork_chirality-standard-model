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
assert.match(doc.title, /What Keeps the Books\? The GUM Material Primer/);
assert.match(
  doc.querySelector('meta[name=description]').content,
  /What Material Could Possess Quantum Mechanics as Its Coarse-Grained Bookkeeping/,
);
assert.equal(doc.querySelector('link[rel=canonical]').href, origin + base);
// The primer is the prerendered way in: the hero opens on its letter, the
// chooser features it beside the paper's four routes, and its course is laid
// out before the first chapter. No reader's memory is assumed.
assert.match(
  doc.querySelector('#beginning').textContent,
  /Begin with the letter/,
);
assert.doesNotMatch(doc.body.textContent, /CONTINUE WHERE YOU LEFT OFF/);
assert.equal(
  doc.querySelectorAll('.primer-choice[aria-pressed=true]').length,
  1,
  'the primer, chosen',
);
assert.equal(doc.querySelectorAll('.route-choice').length, 4, 'paper routes');
assert.match(
  doc.querySelector('#paper-routes').textContent,
  /inverse umdeutung/i,
);
assert.equal(
  doc.querySelectorAll('.course-map li').length,
  10,
  'front matter, eight parts, back matter',
);
assert.equal(doc.querySelector('.reading-bar').dataset.edition, 'primer');
assert.equal(
  doc.querySelector('.skip-link').getAttribute('href'),
  '#primer-intro',
);
// The primer's chapters appear exactly once and in order, each closing with
// the way on; the paper's thirteen wait behind the fold, unmounted.
const primerOrder = [
  'primer-intro',
  ...Array.from({ length: 16 }, (_, i) => 'primer-' + (i + 1)),
  'primer-end',
];
assert.deepEqual(
  [...doc.querySelectorAll('.path-flow > .path-chapter')].map(
    (n) => n.dataset.chapter,
  ),
  primerOrder,
);
for (const id of [
  ...primerOrder,
  'primer-letter',
  'primer-film',
  'primer-ladder',
  'primer-knot',
  'primer-stakes',
  'path-opening',
  'path-finale',
]) {
  assert.equal(
    doc.querySelectorAll('#' + id).length,
    1,
    'Missing or duplicate section: ' + id,
  );
}
assert.equal(doc.querySelectorAll('.part-opener').length, 8);
assert.equal(doc.querySelectorAll('.chapter-end').length, primerOrder.length);
assert.match(doc.querySelector('#primer-intro').textContent, /Dear reader,/);
assert.match(
  doc.querySelector('#primer-end').textContent,
  /Standing by for adjudication/,
);
for (const id of [
  'question',
  'core',
  'material',
  'light',
  'vacuum',
  'quantum',
  'particle',
  'electron',
  'sectors',
  'cosmos',
  'handedness',
  'ledger',
  'verify',
])
  assert.equal(
    doc.querySelectorAll('#' + id).length,
    0,
    'Folded paper chapter mounted: ' + id,
  );
assert.match(
  doc.querySelector('.path-foreign').textContent,
  /The paper’s instruments are one link away/,
);
assert.equal(doc.querySelectorAll('.path-finale-routes button').length, 4);
assert.equal(doc.querySelectorAll('.plate-card').length, 11);
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
