import {
  chapterForAnchor,
  chapterInfo,
  isPathId,
  resolvePath,
  type ChapterId,
  type PathId,
} from './reader-paths.ts';

/**
 * Where a reader stopped and which chapters they finished. It is kept in this
 * browser only, and every field is validated on the way back in, because a
 * stored chapter or anchor may no longer exist after the edition changes.
 */
export type ReadingPlace = {
  path: PathId;
  chapter: ChapterId;
  anchor: string | null;
};
export type ReadingMemory = { read: ChapterId[]; place: ReadingPlace | null };

export const memoryKey = 'gum-reading-v1';
export const emptyMemory: ReadingMemory = { read: [], place: null };

const isChapter = (id: unknown): id is ChapterId =>
  typeof id === 'string' && Object.hasOwn(chapterInfo, id);

export function parseMemory(raw: string | null): ReadingMemory {
  if (!raw) return emptyMemory;
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== 'object') return emptyMemory;
    const { read, place } = value as { read?: unknown; place?: unknown };
    const chapters = Array.isArray(read)
      ? [...new Set(read.filter(isChapter))]
      : [];
    let kept: ReadingPlace | null = null;
    if (place && typeof place === 'object') {
      const p = place as {
        path?: unknown;
        chapter?: unknown;
        anchor?: unknown;
      };
      if (isPathId(p.path) && isChapter(p.chapter))
        kept = {
          path: p.path,
          chapter: p.chapter,
          anchor:
            typeof p.anchor === 'string' &&
            chapterForAnchor(p.anchor) === p.chapter
              ? p.anchor
              : null,
        };
    }
    return { read: chapters, place: kept };
  } catch {
    return emptyMemory;
  }
}

export function loadMemory(): ReadingMemory {
  try {
    return parseMemory(localStorage.getItem(memoryKey));
  } catch {
    return emptyMemory;
  }
}

export function saveMemory(memory: ReadingMemory) {
  try {
    if (!memory.read.length && !memory.place)
      localStorage.removeItem(memoryKey);
    else localStorage.setItem(memoryKey, JSON.stringify(memory));
  } catch {
    /* Optional storage. */
  }
}

export function withRead(
  memory: ReadingMemory,
  chapter: ChapterId,
): ReadingMemory {
  return memory.read.includes(chapter)
    ? memory
    : { ...memory, read: [...memory.read, chapter] };
}

export function withPlace(
  memory: ReadingMemory,
  place: ReadingPlace,
): ReadingMemory {
  const old = memory.place;
  return old &&
    old.path === place.path &&
    old.chapter === place.chapter &&
    old.anchor === place.anchor
    ? memory
    : { ...memory, place };
}

/**
 * The memory as an external store for useSyncExternalStore. The snapshot is
 * re-read from storage so another tab's progress shows up, and is cached by its
 * raw text so an unchanged memory keeps its identity. When storage is
 * unavailable the memory still lasts for the visit.
 */
const listeners = new Set<() => void>();
let cachedRaw: string | null = null;
let cached: ReadingMemory = emptyMemory;
function readRaw(): string | null {
  try {
    return localStorage.getItem(memoryKey);
  } catch {
    return cachedRaw;
  }
}
export function memorySnapshot(): ReadingMemory {
  const raw = readRaw();
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cached = parseMemory(raw);
  }
  return cached;
}
export function subscribeMemory(listener: () => void) {
  listeners.add(listener);
  const storage = (event: StorageEvent) => {
    if (event.key === memoryKey || event.key === null) listener();
  };
  window.addEventListener('storage', storage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', storage);
  };
}
export function updateMemory(change: (memory: ReadingMemory) => ReadingMemory) {
  const old = memorySnapshot();
  const next = change(old);
  if (next === old) return;
  saveMemory(next);
  cachedRaw = readRaw();
  cached = next;
  listeners.forEach((listener) => listener());
}

/** A saved place is worth offering only once the reader is past the path's opening. */
export function resumable(place: ReadingPlace | null): place is ReadingPlace {
  return (
    !!place &&
    (place.chapter !== resolvePath(place.path).chapters[0] || !!place.anchor)
  );
}
