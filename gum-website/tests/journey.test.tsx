import type { ReactNode } from 'react';
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { expect, it, onTestFinished, vi } from 'vitest';
import { MotionProvider } from '@/components/exhibit-motion';
import {
  JourneyContext,
  navigateEvent,
  placeLabel,
  type Journey,
} from '@/components/journey';
import { Hero } from '@/components/hero';
import { ChapterEnd } from '@/components/path-guide';
import { ReadingBar } from '@/components/reading-bar';
import { WaysIn } from '@/components/ways-in';
import {
  chapterInfo,
  resolvePath,
  type PathId,
  type ReaderPath,
} from '@/lib/reader-paths';
import {
  emptyMemory,
  type ReadingMemory,
  type ReadingPlace,
} from '@/lib/reading-memory';
import { intersections } from './setup';

const settle = async () => {
  await act(async () => {
    await Promise.resolve();
  });
};

function journeyOn(pathId: PathId, overrides: Partial<Journey> = {}): Journey {
  const path = resolvePath(pathId);
  return {
    pathId,
    depth: path.depth,
    setDepth: vi.fn(),
    choosePath: vi.fn(),
    active: path.chapters[0],
    memory: emptyMemory,
    markRead: vi.fn(),
    forget: vi.fn(),
    returnTo: null,
    ...overrides,
  };
}

function Reader({
  journey,
  children,
}: {
  journey: Journey;
  children: ReactNode;
}) {
  return (
    <MotionProvider>
      <JourneyContext.Provider value={journey}>
        {children}
      </JourneyContext.Provider>
    </MotionProvider>
  );
}

const primerPath = resolvePath('primer');
const hrefs = (links: Iterable<Element>) =>
  [...links].map((a) => a.getAttribute('href'));
function recordNavigation() {
  const destinations: string[] = [];
  const record = (event: Event) =>
    destinations.push((event as CustomEvent<string>).detail);
  window.addEventListener(navigateEvent, record);
  onTestFinished(() => window.removeEventListener(navigateEvent, record));
  return destinations;
}

it('opens on the primer’s letter, with the paper one step away', async () => {
  const destinations = recordNavigation();
  const journey = journeyOn('primer');
  render(
    <Reader journey={journey}>
      <Hero />
    </Reader>,
  );
  await settle();
  const hero = document.getElementById('beginning')!;
  expect(within(hero).queryByText(/CONTINUE WHERE YOU LEFT OFF/)).toBeNull();
  expect(
    within(hero).getByRole('list', { name: 'The primer at a glance' })
      .textContent,
  ).toContain('16 chapters');
  fireEvent.click(
    within(hero).getByRole('link', { name: 'Begin with the letter' }),
  );
  fireEvent.click(
    within(hero).getByRole('link', { name: /Go straight to the paper/ }),
  );
  expect(destinations).toEqual(['primer-intro', 'paper-routes']);
  expect(journey.choosePath).not.toHaveBeenCalled();
});

it('greets a returning reader with their place, changing path to reach it', async () => {
  const destinations = recordNavigation();
  const place: ReadingPlace = {
    path: 'curious',
    chapter: 'light',
    anchor: null,
  };
  const journey = journeyOn('primer', {
    memory: { read: ['question'], place },
  });
  render(
    <Reader journey={journey}>
      <Hero />
    </Reader>,
  );
  await settle();
  const hero = document.getElementById('beginning')!;
  const resume = within(hero).getByRole('link', {
    name: /CONTINUE WHERE YOU LEFT OFF/,
  });
  expect(resume).toHaveProperty('hash', '#light');
  expect(resume.textContent).toContain(placeLabel(place));
  fireEvent.click(resume);
  expect(journey.choosePath).toHaveBeenCalledWith('curious', 'light');
  fireEvent.click(
    within(hero).getByRole('link', {
      name: 'Or begin the primer again with its letter',
    }),
  );
  expect(destinations).toEqual(['primer-intro']);
});

it('takes a reader on a paper route back to the primer for its letter', async () => {
  const journey = journeyOn('review');
  render(
    <Reader journey={journey}>
      <Hero />
    </Reader>,
  );
  await settle();
  fireEvent.click(screen.getByRole('link', { name: 'Begin with the letter' }));
  expect(journey.choosePath).toHaveBeenCalledWith('primer', 'primer-intro');
});

it('leads with the primer, opens it as a course, and lets a reader choose a paper route', async () => {
  const onChoose = vi.fn();
  const view = render(
    <Reader journey={journeyOn('primer')}>
      <WaysIn selected="primer" onChoose={onChoose} />
    </Reader>,
  );
  await settle();
  const choices = [
    ...view.container.querySelectorAll('.reader-path-choices > button'),
  ];
  expect(choices).toHaveLength(5);
  expect(choices[0].classList.contains('primer-choice')).toBe(true);
  expect(choices[0].textContent).toContain('RECOMMENDED FIRST');
  expect(choices[0].getAttribute('aria-pressed')).toBe('true');
  expect(
    screen.getByRole('link', { name: /Begin with the letter/ }),
  ).toHaveProperty('hash', '#primer-intro');
  const rows = view.container.querySelectorAll('.course-map li');
  expect(rows).toHaveLength(10);
  expect(rows[0].classList.contains('is-here')).toBe(true);
  expect(rows[0].textContent).toContain('START HERE');
  expect(
    hrefs(view.container.querySelectorAll('.course-map .course-title')),
  ).toEqual([
    '#primer-intro',
    '#primer-1',
    '#primer-2',
    '#primer-4',
    '#primer-7',
    '#primer-9',
    '#primer-12',
    '#primer-14',
    '#primer-16',
    '#primer-end',
  ]);
  expect(
    hrefs(view.container.querySelectorAll('.course-map .course-chapters a')),
  ).toEqual(
    primerPath.chapters
      .filter(
        (c) =>
          !['primer-intro', 'primer-1', 'primer-16', 'primer-end'].includes(c),
      )
      .map((c) => '#' + c),
  );
  fireEvent.click(screen.getByRole('button', { name: /I’m curious/ }));
  expect(onChoose).toHaveBeenCalledWith('curious', undefined);
});

it('opens a paper route as numbered steps, with the primer one click away', async () => {
  const onChoose = vi.fn();
  const view = render(
    <Reader journey={journeyOn('curious')}>
      <WaysIn selected="curious" onChoose={onChoose} />
    </Reader>,
  );
  await settle();
  const curious = resolvePath('curious');
  expect(
    screen.getByRole('link', { name: /^Begin with the inverse Umdeutung/ }),
  ).toHaveProperty('hash', '#question');
  expect(
    hrefs(view.container.querySelectorAll('.route-map .route-step')),
  ).toEqual(curious.chapters.map((c) => '#' + c));
  const background = view.container.querySelector('.route-background');
  expect(background?.textContent).toContain(chapterInfo.electron.title);
  expect(background?.textContent).toContain(chapterInfo.sectors.title);
  fireEvent.click(
    screen.getByRole('button', {
      name: 'Learn it from the ground up with the primer',
    }),
  );
  expect(onChoose).toHaveBeenCalledWith('primer', 'path-opening');
});

it('sends a returning reader back to their place and marks the course', async () => {
  const memory: ReadingMemory = {
    read: ['primer-intro', 'primer-1'],
    place: { path: 'primer', chapter: 'primer-2', anchor: 'primer-2-3' },
  };
  const view = render(
    <Reader journey={journeyOn('primer', { memory })}>
      <WaysIn selected="primer" onChoose={vi.fn()} />
    </Reader>,
  );
  await settle();
  const resume = screen.getByRole('link', {
    name: /CONTINUE WHERE YOU LEFT OFF/,
  });
  expect(resume).toHaveProperty('hash', '#primer-2-3');
  expect(resume.textContent).toContain('Chapter 2 · ');
  expect(resume.textContent).toContain('§2.3 ');
  expect(
    screen.getByRole('link', { name: 'Or start from the beginning' }),
  ).toHaveProperty('hash', '#primer-intro');
  const rows = view.container.querySelectorAll('.course-map li');
  expect(rows[0].classList.contains('is-finished')).toBe(true);
  expect(rows[1].classList.contains('is-finished')).toBe(true);
  expect(rows[2].classList.contains('is-here')).toBe(true);
  expect(rows[2].textContent).toContain('YOU ARE HERE');
  expect(
    view.container.querySelector('.course-map-head')?.textContent,
  ).toContain('2 of 18 finished');
});

it('without a saved place, resumes at the first chapter not yet finished', async () => {
  render(
    <Reader
      journey={journeyOn('physics', {
        memory: { read: ['material', 'light'], place: null },
      })}
    >
      <WaysIn selected="physics" onChoose={vi.fn()} />
    </Reader>,
  );
  await settle();
  const physics = resolvePath('physics');
  const next = physics.chapters.find(
    (c) => !['material', 'light'].includes(c),
  )!;
  expect(
    screen.getByRole('link', { name: /CONTINUE WHERE YOU LEFT OFF/ }),
  ).toHaveProperty('hash', '#' + next);
});

it('ends a primer chapter with the paper’s companion and what comes next, and finishes it once its end is read', async () => {
  vi.useFakeTimers();
  const journey = journeyOn('primer');
  const view = render(
    <Reader journey={journey}>
      <ChapterEnd chapter="primer-7" path={primerPath} />
    </Reader>,
  );
  await settle();
  const end = screen.getByRole('complementary', { name: /^End of Chapter 7/ });
  expect(within(end).getByText('GO DEEPER IN THE PAPER')).toBeTruthy();
  expect(
    within(end).getByRole('link', {
      name: /The paper · The quantum description/,
    }),
  ).toHaveProperty('hash', '#quantum');
  expect(
    within(end).getByRole('link', {
      name: 'Up next, Chapter 8: ' + chapterInfo['primer-8'].title,
    }),
  ).toHaveProperty('hash', '#primer-8');
  // The test observer reports the end as seen as soon as it is observed; a
  // reader who scrolls past it at once has not finished the chapter.
  await act(async () => {
    vi.advanceTimersByTime(400);
  });
  act(() => intersections.forEach((observer) => observer.emit(false)));
  await act(async () => {
    vi.advanceTimersByTime(2000);
  });
  expect(journey.markRead).not.toHaveBeenCalled();
  act(() => intersections.forEach((observer) => observer.emit(true)));
  await act(async () => {
    vi.advanceTimersByTime(700);
  });
  expect(journey.markRead).toHaveBeenCalledWith('primer-7');
  view.unmount();
  expect(vi.getTimerCount()).toBe(0);
  expect(intersections.size).toBe(0);
});

it('points a paper chapter to where the primer teaches it, and stays inert outside a journey', () => {
  vi.useFakeTimers();
  render(<ChapterEnd chapter="material" path={resolvePath('physics')} />);
  expect(intersections.size).toBe(0);
  expect(vi.getTimerCount()).toBe(0);
  expect(screen.getByText('LEARN IT FROM THE GROUND UP')).toBeTruthy();
  expect(
    hrefs(
      screen
        .getByRole('complementary')
        .querySelectorAll('.chapter-end-companions a'),
    ),
  ).toEqual(['#primer-2', '#primer-3']);
});

it('shows the place on the path and steps to its neighbours', async () => {
  render(
    <Reader
      journey={journeyOn('primer', {
        active: 'primer-3',
        memory: { read: ['primer-intro'], place: null },
      })}
    >
      <ReadingBar draft="/draft.pdf" />
    </Reader>,
  );
  await settle();
  const bar = screen.getByRole('navigation', { name: 'Reading position' });
  expect(bar.textContent).toContain('Part II · Chapter 3 of 16');
  expect(
    within(bar).getByRole('link', {
      name: 'Previous: ' + chapterInfo['primer-2'].title,
    }),
  ).toHaveProperty('hash', '#primer-2');
  expect(
    within(bar).getByRole('link', {
      name: 'Next: ' + chapterInfo['primer-4'].title,
    }),
  ).toHaveProperty('hash', '#primer-4');
  const rail = bar.querySelectorAll('.reading-rail a');
  expect(hrefs(rail)).toEqual(primerPath.chapters.map((c) => '#' + c));
  expect(rail[0].classList.contains('is-read')).toBe(true);
  expect(rail[3].hasAttribute('data-current')).toBe(true);
});

it('offers the way back when the reader has stepped off the path', async () => {
  const place: ReadingPlace = {
    path: 'primer',
    chapter: 'primer-7',
    anchor: 'primer-7-4',
  };
  render(
    <Reader
      journey={journeyOn('primer', {
        active: 'quantum',
        memory: { read: [], place },
        returnTo: place,
      })}
    >
      <ReadingBar draft="/draft.pdf" />
    </Reader>,
  );
  await settle();
  const bar = screen.getByRole('navigation', { name: 'Reading position' });
  expect(bar.textContent).toContain('From the paper');
  expect(
    within(bar).getByRole('link', { name: 'Back to chapter 7' }),
  ).toHaveProperty('hash', '#primer-7-4');
  expect(within(bar).queryByRole('link', { name: /^Next:/ })).toBeNull();
});

it('navigates from the contents only once the drawer has closed', async () => {
  const destinations = recordNavigation();
  const journey = journeyOn('primer', {
    active: 'primer-3',
    memory: { read: ['primer-intro', 'primer-1'], place: null },
  });
  render(
    <Reader journey={journey}>
      <ReadingBar draft="/draft.pdf" />
    </Reader>,
  );
  await settle();
  const trigger = screen.getByRole('button', { name: 'Contents' });
  const drawerOpenAtNavigation: (string | null)[] = [];
  const check = () =>
    drawerOpenAtNavigation.push(trigger.getAttribute('aria-expanded'));
  window.addEventListener(navigateEvent, check);
  onTestFinished(() => window.removeEventListener(navigateEvent, check));

  fireEvent.click(trigger);
  await settle();
  const drawer = screen.getByRole('dialog');
  expect(
    within(drawer).getByText('2 of 18 finished', { exact: false }),
  ).toBeTruthy();
  expect(
    within(drawer).getByRole('link', { current: 'location' }).textContent,
  ).toContain(chapterInfo['primer-3'].title);
  expect(within(drawer).getAllByText(/^PART [IVX]+ · /)).toHaveLength(8);
  fireEvent.click(
    within(drawer).getByRole('link', {
      name: new RegExp(chapterInfo['primer-9'].title),
    }),
  );
  await settle();
  expect(screen.queryByRole('dialog')).toBeNull();
  expect(destinations).toEqual(['primer-9']);
  expect(drawerOpenAtNavigation).toEqual(['false']);
  // The destination takes focus, not the button that opened the drawer.
  expect(document.activeElement).not.toBe(trigger);

  fireEvent.click(trigger);
  await settle();
  fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' });
  await settle();
  expect(screen.queryByRole('dialog')).toBeNull();
  expect(document.activeElement).toBe(trigger);
  expect(destinations).toEqual(['primer-9']);

  fireEvent.click(trigger);
  await settle();
  fireEvent.click(
    within(screen.getByRole('dialog')).getByRole('button', {
      name: /I’m curious/,
    }),
  );
  await settle();
  expect(journey.choosePath).toHaveBeenCalledWith('curious', 'path-opening');
});

it('lists a paper route in reading order, with its folded background', async () => {
  const curious: ReaderPath = resolvePath('curious');
  render(
    <Reader journey={journeyOn('curious', { active: 'light' })}>
      <ReadingBar draft="/draft.pdf" />
    </Reader>,
  );
  await settle();
  fireEvent.click(screen.getByRole('button', { name: 'Contents' }));
  await settle();
  const toc = within(screen.getByRole('dialog')).getByRole('navigation', {
    name: 'Chapters of this path',
  });
  expect(hrefs(toc.querySelectorAll('a'))).toEqual([
    ...curious.chapters.map((c) => '#' + c),
    '#electron',
    '#sectors',
  ]);
  expect(toc.textContent).toContain('BACKGROUND · FOLDED ON THIS ROUTE');
});
