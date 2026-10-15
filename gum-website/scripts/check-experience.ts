import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import {
  readerPaths,
  chapterInfo,
  chapterIds,
  chapterForAnchor,
  decodeAnchor,
  editionOf,
  foreignChapters,
  nestedChapters,
  omittedChapters,
  resolvePath,
} from '../lib/reader-paths.ts';
import { motionAllowed } from '../lib/motion-policy.ts';
import { primer, primerChapterIds } from '../lib/primer.ts';

const chapters = [...chapterIds].sort();
assert.equal(
  chapters.length,
  31,
  'thirteen paper chapters and eighteen primer chapters',
);
assert.equal(chapterIds.filter((id) => editionOf(id) === 'paper').length, 13);
const before = (list: string[], a: string, b: string) =>
  !list.includes(a) || !list.includes(b) || list.indexOf(a) < list.indexOf(b);
for (const path of readerPaths) {
  assert.equal(
    new Set(path.chapters).size,
    path.chapters.length,
    path.id + ': no repeated chapter',
  );
  assert.deepEqual(
    [
      ...path.chapters,
      ...omittedChapters(path.id),
      ...foreignChapters(path.id),
    ].sort(),
    chapters,
    path.id + ': no content lost',
  );
  for (const chapter of path.chapters)
    assert.equal(
      editionOf(chapter),
      path.edition,
      path.id + ' stays in its edition',
    );
  if (path.edition === 'paper') {
    for (const required of [
      'core',
      'material',
      'quantum',
      'particle',
      'ledger',
      'verify',
    ])
      assert(
        path.chapters.includes(required as (typeof path.chapters)[number]),
        path.id + ' keeps ' + required,
      );
    assert(
      before(path.chapters, 'material', 'light'),
      path.id + ': the spectrum precedes the electrodynamics',
    );
    assert(
      before(path.chapters, 'particle', 'electron'),
      path.id + ': the knot precedes the electron',
    );
  } else {
    assert.deepEqual(
      path.chapters,
      primerChapterIds,
      'the primer path follows the primer, front to back',
    );
    assert(
      path.depthLabels &&
        Object.keys(path.depthLabels).sort().join() === 'explore,math,story',
    );
  }
  for (const stop of path.stops) assert(path.chapters.includes(stop.id));
  for (const chapter of Object.keys(path.bridges))
    assert(path.chapters.includes(chapter as (typeof path.chapters)[number]));
  assert.equal(resolvePath(path.id), path);
}
assert.equal(
  readerPaths.length,
  5,
  'four routes through the paper and one through the primer',
);
assert.equal(readerPaths.filter((p) => p.edition === 'paper').length, 4);
assert.equal(
  new Set(readerPaths.map((p) => p.chapters.join())).size,
  5,
  'five distinct orders',
);
assert.equal(resolvePath('curious').chapters[0], 'question');
assert.equal(resolvePath('physics').chapters[0], 'material');
assert.equal(resolvePath('experiments').chapters[0], 'core');
assert.equal(resolvePath('review').chapters[0], 'verify');
assert.equal(resolvePath('primer').chapters[0], 'primer-intro');
assert.equal(resolvePath('invalid').id, 'curious');
assert.equal(resolvePath(null).id, 'curious');
assert.deepEqual(omittedChapters('curious'), ['electron', 'sectors']);
assert.deepEqual(omittedChapters('physics'), ['question']);
assert.deepEqual(omittedChapters('review'), ['question']);
assert.deepEqual(omittedChapters('primer'), []);
assert.equal(foreignChapters('curious').length, 18);
assert.equal(foreignChapters('primer').length, 13);
assert.equal(chapterForAnchor('cliff'), 'quantum');
assert.equal(chapterForAnchor('plates'), 'question');
assert.equal(chapterForAnchor('material'), 'material');
assert.equal(chapterForAnchor('primer-2-3'), 'primer-2');
assert.equal(chapterForAnchor('primer-cliff'), 'primer-8');
assert.equal(chapterForAnchor('primer-film'), 'primer-intro');
assert.equal(chapterForAnchor('primer-glossary'), 'primer-end');
assert.equal(chapterForAnchor('toString'), undefined);
assert.equal(chapterForAnchor('unknown'), undefined);
assert.equal(decodeAnchor('#%E0%A4%A'), '');
assert.equal(decodeAnchor('#knot-explorer'), 'knot-explorer');
for (let mask = 0; mask < 16; mask++) {
  const bits = [0, 1, 2, 3].map((i) => Boolean(mask & (1 << i)));
  assert.equal(motionAllowed(bits[0], bits[1], bits[2], bits[3]), mask === 12);
}

// Every deep-link anchor resolves to an element some component renders.
const sources = readdirSync('components')
  .filter((f) => f.endsWith('.tsx'))
  .map((f) => readFileSync('components/' + f, 'utf8'))
  .join('\n');
const staticIds = new Set(
  [...sources.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]),
);
const primerSectionIds = new Set([
  ...primer.chapters.flatMap((c) => c.sections.map((s) => s.id)),
  ...primer.front.map((s) => s.id),
]);
for (const [anchor, chapter] of Object.entries(nestedChapters)) {
  assert(chapter in chapterInfo, 'anchor ' + anchor + ' names a chapter');
  const dynamic =
    (/^audit-step-[0-3]$/.test(anchor) &&
      sources.includes("'audit-step-' + i")) ||
    primerSectionIds.has(anchor) ||
    sources.includes("'" + anchor + "'");
  assert(
    staticIds.has(anchor) || dynamic,
    'No element carries the anchor ' + anchor,
  );
}
for (const chapter of chapters)
  assert(
    staticIds.has(chapter) ||
      (editionOf(chapter) === 'primer' &&
        sources.includes('id={chapter.slug}')),
    'Chapter section missing: ' + chapter,
  );

const main = readFileSync('components/gum-essay.tsx', 'utf8');
for (const chapter of chapters)
  if (
    editionOf(chapter) === 'paper' ||
    chapter === 'primer-intro' ||
    chapter === 'primer-end'
  )
    assert(
      main.includes('chapter="' + chapter + '"'),
      'Missing chapter slot ' + chapter,
    );
assert(
  main.includes('primerChapters.map') &&
    main.includes('chapter={chapter.slug as ChapterId}'),
  'The sixteen primer chapters are mounted from the compiled primer',
);
const reader = readFileSync('components/reader-paths.tsx', 'utf8');
assert(
  reader.includes('path.chapters.map'),
  'Reader order is actual document order',
);
assert(
  reader.includes('{expanded ? children : null}'),
  'Closed extras are unmounted',
);
assert(
  reader.includes('foreignChapters(selected)'),
  'The other edition is reachable from every path',
);
assert(
  main.includes("new URL(location.href).searchParams.get('path')") &&
    main.includes("window.addEventListener('popstate', restore)"),
  'Static Pages restores the requested reading path and browser history',
);
assert(
  main.includes('run_gum_local_checks') &&
    main.includes('choose_gum_reading_path'),
  'Optional WebMCP tools are registered',
);
console.log(
  'PASS: five distinct reading routes over two editions; all 31 chapters retained; prerequisite order; every deep-link anchor rendered; invalid URLs; all 16 motion-policy states.',
);
