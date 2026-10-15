import { primerContent } from './primer-content.ts';
import type { PrimerChapter, PrimerSection } from './primer-types.ts';

/** The GUM Material Primer, as the fifth reading path renders it. */
export const primer = primerContent;
export const primerChapters: readonly PrimerChapter[] = primer.chapters;
export const primerIntroId = 'primer-intro';
export const primerEndId = 'primer-end';
export const primerChapterIds: readonly string[] = [
  primerIntroId,
  ...primerChapters.map((c) => c.slug),
  primerEndId,
];

export function primerChapter(number: number): PrimerChapter {
  const chapter = primerChapters.find((c) => c.number === number);
  if (!chapter) throw new RangeError('The primer has no chapter ' + number);
  return chapter;
}

export function primerPart(number: number) {
  const part = primer.parts.find((p) => p.number === number);
  if (!part) throw new RangeError('The primer has no part ' + number);
  return part;
}

export function primerSection(number: string): PrimerSection {
  for (const chapter of primerChapters) {
    const section = chapter.sections.find((s) => s.number === number);
    if (section) return section;
  }
  throw new RangeError('The primer has no section ' + number);
}

/** Spot-check answers for one chapter, keyed by problem number. */
export function answersForChapter(chapter: number) {
  return primer.answers.filter((a) => a.id.startsWith(chapter + '.'));
}

/**
 * Where the interactive exhibits sit in the primer's text. Each anchor is an
 * element id rendered after the named section, and a deep-link target.
 */
export const primerExhibitSlots: readonly {
  section: string;
  anchor: string;
}[] = [
  { section: '1.1', anchor: 'primer-ladder' },
  { section: '1.2', anchor: 'primer-river' },
  { section: '1.2', anchor: 'primer-plates-aether' },
  { section: '1.3', anchor: 'primer-plates-inversion' },
  { section: '2.1', anchor: 'primer-sound' },
  { section: '2.2', anchor: 'primer-necklace' },
  { section: '2.3', anchor: 'primer-mass-frequency' },
  { section: '2.4', anchor: 'primer-matter-cone' },
  { section: '2.5', anchor: 'primer-skin' },
  { section: '3.1', anchor: 'primer-plates-cosserat' },
  { section: '3.2', anchor: 'primer-objectivity' },
  { section: '3.4', anchor: 'primer-spectrum' },
  { section: '3.6', anchor: 'primer-gum-film' },
  { section: '4.2', anchor: 'primer-vanes' },
  { section: '4.3', anchor: 'primer-light-speed' },
  { section: '5.4', anchor: 'primer-dichotomy' },
  { section: '5.7', anchor: 'primer-near-field' },
  { section: '6.1', anchor: 'primer-cone' },
  { section: '6.2', anchor: 'primer-foucault' },
  { section: '6.4', anchor: 'primer-helix' },
  { section: '6.5', anchor: 'primer-pitch' },
  { section: '6.7', anchor: 'primer-trough' },
  { section: '7.1', anchor: 'primer-madelung' },
  { section: '7.4', anchor: 'primer-plates-beables' },
  { section: '7.5', anchor: 'primer-tower' },
  { section: '7.6', anchor: 'primer-fidelity' },
  { section: '8.1', anchor: 'primer-knobs' },
  { section: '8.5', anchor: 'primer-cliff' },
  { section: '8.6', anchor: 'primer-timing' },
  { section: '9.1', anchor: 'primer-hairy-ball' },
  { section: '9.2', anchor: 'primer-derrick' },
  { section: '9.3', anchor: 'primer-knot' },
  { section: '9.5', anchor: 'primer-belt' },
  { section: '10.3', anchor: 'primer-closure' },
  { section: '10.6', anchor: 'primer-alpha-mu' },
  { section: '10.7', anchor: 'primer-channeling' },
  { section: '11.3', anchor: 'primer-core-halo' },
  { section: '11.5', anchor: 'primer-band-edge' },
  { section: '12.3', anchor: 'primer-families' },
  { section: '12.7', anchor: 'primer-bridge' },
  { section: '13.2', anchor: 'primer-electroweak' },
  { section: '13.4', anchor: 'primer-weak-coupling' },
  { section: '13.5', anchor: 'primer-rubber-band' },
  { section: '13.6', anchor: 'primer-anomaly' },
  { section: '13.6', anchor: 'primer-holonomy' },
  { section: '14.1', anchor: 'primer-zero-point' },
  { section: '14.2', anchor: 'primer-relaxation' },
  { section: '14.5', anchor: 'primer-drift' },
  { section: '14.6', anchor: 'primer-defects' },
  { section: '15.1', anchor: 'primer-sign-chain' },
  { section: '15.1', anchor: 'primer-plates-wu' },
  { section: '15.3', anchor: 'primer-endpoint' },
  { section: '15.5', anchor: 'primer-mirror' },
  { section: '16.1', anchor: 'primer-audit' },
  { section: '16.2', anchor: 'primer-landing' },
  { section: '16.3', anchor: 'primer-stakes' },
  { section: '16.6', anchor: 'primer-headline' },
];
for (const slot of primerExhibitSlots) primerSection(slot.section);
if (
  new Set(primerExhibitSlots.map((s) => s.anchor)).size !==
  primerExhibitSlots.length
)
  throw new Error('Primer exhibit anchors must be unique.');

export function exhibitsFor(section: string) {
  return primerExhibitSlots
    .filter((s) => s.section === section)
    .map((s) => s.anchor);
}

/** Every primer anchor and the chapter id that renders it. */
export function primerAnchors(): Record<string, string> {
  const anchors: Record<string, string> = {
    'primer-film': primerIntroId,
    'primer-letter': primerIntroId,
    'primer-rules': primerIntroId,
    'primer-glossary': primerEndId,
    'primer-answers': primerEndId,
    'primer-project': primerEndId,
  };
  for (const chapter of primerChapters) {
    for (const section of chapter.sections) anchors[section.id] = chapter.slug;
    for (const section of chapter.sections)
      for (const anchor of exhibitsFor(section.number ?? ''))
        anchors[anchor] = chapter.slug;
  }
  return anchors;
}

/** Glossary terms to point at from the running text, keyed by the words a reader would meet. */
export const primerTerms: readonly {
  key: string;
  term: string;
  text: string;
}[] = primer.glossary
  .map((entry) => ({
    key: entry.term
      .replace(/\s*\(.*$/, '')
      .replace(/\s*\/.*$/, '')
      .trim()
      .toLowerCase(),
    term: entry.term,
    text: entry.text,
  }))
  .filter((entry) => entry.key.length > 3 && !entry.key.startsWith('level'));

/** The nine tags, from the primer's own rules page, for tooltips on the glyphs in the text. */
export const primerTagNames: Record<string, string> = Object.fromEntries(
  primer.front
    .flatMap((section) => section.blocks)
    .flatMap((block) => (block.type === 'tags' ? block.items : []))
    .map((tag) => [tag.glyph, tag.name.replace(/\.$/, '')]),
);
if (Object.keys(primerTagNames).length !== 9)
  throw new Error('The primer defines nine tags.');
/** Every numbered section, for §-links in the running text. */
export const primerSectionNumbers = new Set(
  primerChapters.flatMap((chapter) =>
    chapter.sections.map((s) => s.number ?? ''),
  ),
);
