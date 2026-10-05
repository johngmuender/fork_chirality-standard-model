import { act, render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { MotionProvider } from '@/components/exhibit-motion';
import {
  PrimerChapterSection,
  PrimerEnd,
  PrimerIntro,
} from '@/components/primer-chapter';
import { Inline } from '@/components/primer-text';
import { primer, primerChapter } from '@/lib/primer';

const settle = async () => {
  await act(async () => {
    await Promise.resolve();
  });
};

it('renders the primer’s inline devices', () => {
  const seen = new Set<string>();
  const view = render(
    <Inline
      text={
        '🟩 **Proven** by *logic*, with E^{2} = (mc^{2})^{2} and ħω₀; see Chapter 10 and §2.4, where the band edge is \\*starred\\*.'
      }
      seen={seen}
    />,
  );
  expect(view.container.querySelector('strong')?.textContent).toBe('Proven');
  expect(view.container.querySelector('em')?.textContent).toBe('logic');
  expect(
    [...view.container.querySelectorAll('sup')].map((n) => n.textContent),
  ).toEqual(['2', '2', '2']);
  expect(
    view.container.querySelector('.primer-tag')?.getAttribute('title'),
  ).toBe('PROVEN [the paper writes DF]');
  expect(
    view.container.querySelector('a[href="#primer-10"]')?.textContent,
  ).toBe('Chapter 10');
  expect(
    view.container.querySelector('a[href="#primer-2-4"]')?.textContent,
  ).toBe('§2.4');
  expect(view.container.querySelector('.glossary-term')?.textContent).toBe(
    'band edge',
  );
  expect(view.container.textContent).toContain('*starred*');
  expect(seen.has('band edge')).toBe(true);
});

it('renders a chapter nearly verbatim, folding the problems on the story track', async () => {
  const chapter = primerChapter(2);
  const view = render(
    <MotionProvider>
      <PrimerChapterSection chapter={chapter} depth="story" />
    </MotionProvider>,
  );
  await settle();
  expect(view.container.querySelector('#primer-2')).toBeTruthy();
  expect(screen.getByRole('heading', { level: 2 }).textContent).toContain(
    'Chapter 2',
  );
  const sections = [
    ...view.container.querySelectorAll('h3.primer-section-title'),
  ];
  expect(sections.map((h) => h.id)).toEqual(chapter.sections.map((s) => s.id));
  expect(sections[0].textContent).toContain('The sound-in-steel move');
  const paragraphs = view.container.querySelectorAll('.primer-p');
  expect(paragraphs.length).toBeGreaterThan(8);
  expect(view.container.textContent).toContain(
    'Nobody calls that a constant of nature; it is a property of steel.',
  );
  expect(
    view.container.querySelector('.box-changed .eyebrow')?.textContent,
  ).toBe('WHAT CHANGED');
  expect(view.container.querySelector('.box-numbers')).toBeTruthy();
  const chew = view.container.querySelector(
    'details.primer-chew',
  ) as HTMLDetailsElement;
  expect(chew.open).toBe(false);
  expect(chew.querySelectorAll('.primer-problems > li')).toHaveLength(6);
  expect(
    chew.querySelectorAll('.primer-problems > li.is-starred'),
  ).toHaveLength(3);
  for (const anchor of [
    'primer-sound',
    'primer-necklace',
    'primer-mass-frequency',
    'primer-matter-cone',
    'primer-skin',
  ])
    expect(view.container.querySelector('#' + anchor)).toBeTruthy();
  expect(
    view.container.querySelector('.primer-formula')?.textContent,
  ).toContain('E² = (ħω₀)² + (pc)²');
});

it('opens the problems and answer notes on the deeper tracks, and folds ★ sections on the story track', async () => {
  const five = primerChapter(5);
  const story = render(
    <MotionProvider>
      <PrimerChapterSection chapter={five} depth="story" />
    </MotionProvider>,
  );
  await settle();
  const starred = story.container.querySelector(
    'details.primer-starred',
  ) as HTMLDetailsElement;
  expect(starred.open).toBe(false);
  expect(starred.textContent).toContain('5.6');
  story.unmount();
  const math = render(
    <MotionProvider>
      <PrimerChapterSection chapter={five} depth="math" />
    </MotionProvider>,
  );
  await settle();
  expect(
    (
      math.container.querySelector(
        'details.primer-starred',
      ) as HTMLDetailsElement
    ).open,
  ).toBe(true);
  expect(
    (math.container.querySelector('details.primer-chew') as HTMLDetailsElement)
      .open,
  ).toBe(true);
  const answers = [
    ...math.container.querySelectorAll('details.primer-answer'),
  ] as HTMLDetailsElement[];
  expect(answers.length).toBeGreaterThan(0);
  expect(answers.every((a) => a.open)).toBe(true);
  expect(math.container.textContent).toContain('5×10⁻¹³; 5×10⁻¹⁶');
});

it('renders the front and back matter with the tags, the film, the glossary and the project', async () => {
  const intro = render(
    <MotionProvider>
      <PrimerIntro depth="explore" />
    </MotionProvider>,
  );
  await settle();
  expect(intro.container.querySelector('#primer-letter')).toBeTruthy();
  expect(intro.container.querySelectorAll('.primer-tags > div')).toHaveLength(
    9,
  );
  expect(intro.container.querySelector('#primer-film')).toBeTruthy();
  expect(intro.container.textContent).toContain('Dear reader,');
  intro.unmount();
  const end = render(
    <MotionProvider>
      <PrimerEnd depth="math" />
    </MotionProvider>,
  );
  await settle();
  expect(end.container.querySelectorAll('.primer-glossary > div')).toHaveLength(
    primer.glossary.length,
  );
  expect(end.container.querySelectorAll('.primer-answers > li')).toHaveLength(
    primer.answers.length,
  );
  expect(
    end.container.querySelectorAll('.primer-project-list > li'),
  ).toHaveLength(7);
  expect(end.container.textContent).toContain('Standing by for adjudication');
});
