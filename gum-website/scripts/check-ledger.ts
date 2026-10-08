import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import {
  auditRows,
  closures,
  corrections,
  crossLocks,
  errata,
  grades,
  levels,
  stakes,
  stakesByStatus,
  stakesForChapter,
} from '../lib/gum-ledger.ts';
import { glossary, glossaryEntry } from '../lib/gum-glossary.ts';
import { chapterInfo } from '../lib/reader-paths.ts';

// The census the draft prints about itself.
assert.equal(stakes.length, 30, 'thirty stakes');
assert.equal(closures.length, 26, 'twenty-six posed closures');
assert.equal(auditRows.length, 16, 'sixteen audited claims');
assert.equal(corrections.length, 15, 'fifteen corrections');
assert.equal(errata.length, 2, 'two errata');
assert.equal(crossLocks.length, 7, 'seven cross-locks');
assert.equal(grades.length, 8);
assert.equal(levels.length, 4);
assert.deepEqual(
  levels.map((l) => l.level),
  [0, 1, 2, 3],
);
const unique = (items: string[], label: string) =>
  assert.equal(new Set(items).size, items.length, label + ' are unique');
unique(
  stakes.map((s) => s.id),
  'stake ids',
);
unique(
  closures.map((k) => k.id),
  'closure ids',
);
unique(
  auditRows.map((r) => r.claim),
  'audit claims',
);
unique(
  crossLocks.map((c) => c.id),
  'cross-lock ids',
);
unique(
  grades.map((g) => g.id),
  'grade ids',
);
const gradeIds = new Set<string>(grades.map((g) => g.id));
for (const row of auditRows) {
  for (const grade of row.grade.split(' / '))
    assert(gradeIds.has(grade), 'audit grade known: ' + row.grade);
  assert(row.chapter in chapterInfo, 'audit row names a chapter');
}
const discriminating = auditRows.filter((r) => r.discriminating).length;
assert(
  discriminating > 0 && discriminating < auditRows.length,
  'both audit outcomes occur',
);
assert.equal(
  discriminating,
  9,
  'nine discriminating claims, seven non-discriminating',
);
for (const stake of stakes) {
  assert(
    stake.stake && stake.adjudicator && stake.kill && stake.status,
    stake.id + ' is complete',
  );
  assert(stake.chapter in chapterInfo, stake.id + ' names a chapter');
}
for (const closure of closures) {
  assert(
    closure.content && closure.deliverables && closure.kill,
    closure.id + ' is complete',
  );
  assert(closure.chapter in chapterInfo, closure.id + ' names a chapter');
}
assert(
  closures.some((k) => k.id === 'K-0') && closures.some((k) => k.id === 'K-N'),
  'the deepest closure and the normalisation audit',
);
assert(
  stakes.some((s) => s.regraded),
  're-graded stakes are marked',
);
let counted = 0;
for (const [status, count] of stakesByStatus()) {
  assert.equal(count, stakes.filter((s) => s.status === status).length);
  counted += count;
}
assert.equal(counted, stakes.length);
assert(stakesByStatus().get('live')! >= 7, 'most stakes are live');
let perChapter = 0;
for (const chapter of Object.keys(chapterInfo) as (keyof typeof chapterInfo)[])
  perChapter += stakesForChapter(chapter).length;
assert.equal(
  perChapter,
  stakes.length,
  'every stake lives in exactly one chapter',
);

// Glossary: unique ids, and every term used in a component exists.
unique(
  glossary.map((g) => g.id),
  'glossary ids',
);
assert(glossary.length >= 40);
assert.throws(() => glossaryEntry('no-such-term'));
const sources = readdirSync('components')
  .filter((f) => f.endsWith('.tsx'))
  .map((f) => readFileSync('components/' + f, 'utf8'))
  .join('\n');
const used = new Set(
  [...sources.matchAll(/<Term id="([^"]+)"/g)].map((m) => m[1]),
);
assert(used.size >= 15, 'glossary terms are woven through the chapters');
for (const id of used)
  assert(
    glossary.some((g) => g.id === id),
    'Unknown glossary term: ' + id,
  );
console.log(
  `PASS: 30 stakes, 26 closures, 16 audited claims (${discriminating} discriminating), 15 corrections, 2 errata, 7 cross-locks; ${glossary.length} glossary entries with ${used.size} in use.`,
);
