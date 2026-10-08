'use client';
import { createContext, useContext } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  chapterInfo,
  editionOf,
  resolvePath,
  type ChapterId,
  type PathId,
  type ReaderPath,
} from '@/lib/reader-paths';
import {
  partOfSlug,
  primerChapters,
  primerEndId,
  primerIntroId,
  primerSectionById,
  primerStats,
} from '@/lib/primer';
import {
  resumable,
  type ReadingMemory,
  type ReadingPlace,
} from '@/lib/reading-memory';

/** The reader's journey through the edition: path, depth, position and what they have finished. */
export type Journey = {
  pathId: PathId;
  depth: string;
  setDepth: (depth: string) => void;
  choosePath: (id: PathId, destination?: string) => void;
  active: string;
  memory: ReadingMemory;
  markRead: (chapter: ChapterId) => void;
  forget: () => void;
  returnTo: ReadingPlace | null;
};
export const JourneyContext = createContext<Journey | null>(null);
export const useJourney = () => useContext(JourneyContext);

export const navigateEvent = 'gum:navigate';
/** Ask the path flow to open, focus and scroll to an anchor, mounting folded chapters on the way. */
export function navigateTo(id: string) {
  window.dispatchEvent(new CustomEvent(navigateEvent, { detail: id }));
}
/** Go to an anchor, switching reading path first when it lives on another one. */
export function goTo(journey: Journey | null, id: string, path?: PathId) {
  if (journey && path && path !== journey.pathId) journey.choosePath(path, id);
  else navigateTo(id);
}

export function formatMinutes(minutes: number): string {
  if (minutes < 60) return minutes + ' min';
  const rounded = Math.round(minutes / 5) * 5;
  const hours = Math.floor(rounded / 60);
  const rest = rounded % 60;
  return hours + ' h' + (rest ? ' ' + rest + ' min' : '');
}

const primerNumber = new Map(primerChapters.map((c) => [c.slug, c.number]));
export function primerChapterNumber(chapter: string): number | undefined {
  return primerNumber.get(chapter);
}
/** The primer's reading time for a chapter; the paper's chapters are instruments, not timed. */
export function chapterMinutes(chapter: ChapterId): number | undefined {
  return editionOf(chapter) === 'primer'
    ? primerStats(chapter).minutes
    : undefined;
}

/** How the edition names a chapter's place: “Chapter 7”, “Front matter”, or its step on a route. */
export function chapterKicker(chapter: ChapterId, pathId: PathId): string {
  if (chapter === primerIntroId) return 'Front matter';
  if (chapter === primerEndId) return 'Back matter';
  const number = primerNumber.get(chapter);
  if (number) return 'Chapter ' + number;
  const path = resolvePath(pathId);
  const index = path.chapters.indexOf(chapter);
  return index >= 0
    ? 'Chapter ' + String(index + 1).padStart(2, '0')
    : 'From the paper';
}

/** Where a chapter sits, for the reading bar: part and chapter for the primer, step for a route. */
export function chapterPosition(chapter: ChapterId, pathId: PathId): string {
  const path = resolvePath(pathId);
  const index = path.chapters.indexOf(chapter);
  if (index < 0)
    return editionOf(chapter) === path.edition
      ? 'Background'
      : path.edition === 'primer'
        ? 'From the paper'
        : 'From the primer';
  if (path.edition === 'primer') {
    const part = partOfSlug(chapter);
    if (!part) return chapterKicker(chapter, pathId);
    return (
      'Part ' +
      part.numeral +
      ' · Chapter ' +
      primerNumber.get(chapter) +
      ' of ' +
      primerChapters.length
    );
  }
  return (
    String(index + 1).padStart(2, '0') +
    ' / ' +
    String(path.chapters.length).padStart(2, '0')
  );
}

/** The short title of a chapter, without the primer's “7 · ” prefix. */
export function shortTitle(chapter: ChapterId): string {
  return chapterInfo[chapter].short.replace(/^\d+ · /, '');
}

/** A title set inside a sentence: “Begin with the inverse Umdeutung”. */
export function inSentence(title: string): string {
  return title.replace(/^(The|A|An) /, (article) => article.toLowerCase());
}

/** The primer prints its part titles in capitals; the reader shows them in sentence case. */
export function sentenceCase(text: string): string {
  return text.charAt(0) + text.slice(1).toLowerCase();
}

const count = (n: number, noun: string) =>
  n + ' ' + noun + (n === 1 ? '' : 's');
/** “14 min · 3 exhibits · 9 problems” for a primer chapter; null for the paper's. */
export function statsLine(chapter: ChapterId): string | null {
  if (editionOf(chapter) !== 'primer') return null;
  const stats = primerStats(chapter);
  return [
    formatMinutes(stats.minutes),
    stats.exhibits ? count(stats.exhibits, 'exhibit') : '',
    stats.problems ? count(stats.problems, 'problem') : '',
  ]
    .filter(Boolean)
    .join(' · ');
}

/** “Chapter 7 · The jittery material · §7.4 Bell’s beables and the tower”, or the chapter alone. */
export function placeLabel(place: ReadingPlace): string {
  const chapter =
    chapterKicker(place.chapter, place.path) +
    ' · ' +
    shortTitle(place.chapter);
  const section =
    place.anchor && place.anchor !== place.chapter
      ? primerSectionById(place.anchor)
      : undefined;
  if (!section) return chapter;
  return (
    chapter +
    ' · ' +
    (section.number ? '§' + section.number + ' ' : '') +
    section.title
  );
}

/**
 * Where a path's opening sends a returning reader: their saved place on this
 * path, or else the first chapter they have not finished.
 */
export function resumeTarget(
  path: ReaderPath,
  memory: ReadingMemory,
): { anchor: string; label: string } | null {
  const place = memory.place;
  if (resumable(place) && place.path === path.id)
    return { anchor: place.anchor ?? place.chapter, label: placeLabel(place) };
  if (!path.chapters.some((c) => memory.read.includes(c))) return null;
  const next = path.chapters.find((c) => !memory.read.includes(c));
  if (!next) return null;
  return {
    anchor: next,
    label: chapterKicker(next, path.id) + ' · ' + shortTitle(next),
  };
}

const depthOptions = {
  primer: [
    {
      value: 'story',
      label: 'High-school track',
      note: 'The ★ sections and the problem sets fold away; open any of them by hand. Do the TRY THIS experiments.',
    },
    {
      value: 'explore',
      label: 'Undergraduate track',
      note: 'Everything open: the ★ sections and every CHEW ON THIS problem set, with spot checks a click away.',
    },
    {
      value: 'math',
      label: 'With answer notes',
      note: 'Everything open, with the primer’s spot-check answer under each problem it covers.',
    },
  ],
  paper: [
    {
      value: 'story',
      label: 'The story',
      note: 'Equations fold away; the argument runs in prose, pictures and instruments.',
    },
    {
      value: 'explore',
      label: 'Explore',
      note: 'The interactive explanations open beside the argument.',
    },
    {
      value: 'math',
      label: 'The mathematics',
      note: 'The mathematical details open too, derivation by derivation.',
    },
  ],
} as const;

/** The reading depth: the primer's two tracks and its answer notes, or the paper's three depths. */
export function DepthControl({ className = '' }: { className?: string }) {
  const journey = useJourney();
  if (!journey) return null;
  const edition = resolvePath(journey.pathId).edition;
  const options = depthOptions[edition];
  const current = options.find((o) => o.value === journey.depth) ?? options[1];
  return (
    <div className={('depth-control ' + className).trim()}>
      <span className="eyebrow">
        {edition === 'primer' ? 'HOW WILL YOU READ?' : 'HOW DEEP?'}
      </span>
      <ToggleGroup
        value={[journey.depth]}
        onValueChange={(values) => {
          if (values[0]) journey.setDepth(values[0]);
        }}
        aria-label="Reading depth"
      >
        {options.map((option) => (
          <ToggleGroupItem value={option.value} key={option.value}>
            {option.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <p className="depth-note">{current.note}</p>
    </div>
  );
}
