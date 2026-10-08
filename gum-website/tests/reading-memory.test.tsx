import { expect, it } from 'vitest';
import {
  emptyMemory,
  loadMemory,
  memoryKey,
  parseMemory,
  resumable,
  saveMemory,
  withPlace,
  withRead,
} from '@/lib/reading-memory';

it('keeps only chapters, paths and anchors that still exist', () => {
  expect(parseMemory(null)).toEqual(emptyMemory);
  expect(parseMemory('{not json')).toEqual(emptyMemory);
  expect(parseMemory('"a string"')).toEqual(emptyMemory);
  expect(
    parseMemory(
      JSON.stringify({
        read: ['primer-1', 'primer-1', 'toString', 'nowhere', 3],
        place: { path: 'primer', chapter: 'primer-7', anchor: 'primer-7-4' },
      }),
    ),
  ).toEqual({
    read: ['primer-1'],
    place: { path: 'primer', chapter: 'primer-7', anchor: 'primer-7-4' },
  });
  expect(
    parseMemory(
      JSON.stringify({
        place: { path: 'primer', chapter: 'primer-7', anchor: 'primer-8-1' },
      }),
    ).place?.anchor,
  ).toBeNull();
  expect(
    parseMemory(JSON.stringify({ place: { path: 'gone', chapter: 'core' } }))
      .place,
  ).toBeNull();
});

it('stores the memory in this browser and clears it when empty', () => {
  const memory = withPlace(withRead(emptyMemory, 'primer-intro'), {
    path: 'primer',
    chapter: 'primer-2',
    anchor: 'primer-2-3',
  });
  saveMemory(memory);
  expect(loadMemory()).toEqual(memory);
  expect(withRead(memory, 'primer-intro')).toBe(memory);
  expect(withPlace(memory, { ...memory.place! })).toBe(memory);
  saveMemory(emptyMemory);
  expect(localStorage.getItem(memoryKey)).toBeNull();
});

it('offers to resume only past the opening of a path', () => {
  expect(resumable(null)).toBe(false);
  expect(
    resumable({ path: 'primer', chapter: 'primer-intro', anchor: null }),
  ).toBe(false);
  expect(
    resumable({
      path: 'primer',
      chapter: 'primer-intro',
      anchor: 'primer-rules',
    }),
  ).toBe(true);
  expect(resumable({ path: 'review', chapter: 'core', anchor: null })).toBe(
    true,
  );
});
