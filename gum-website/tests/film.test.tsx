import { act, fireEvent, render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { MotionProvider } from '@/components/exhibit-motion';
import {
  GumFilm,
  filmLength,
  filmScenes,
  sceneAt,
} from '@/components/gum-film';

it('maps film time onto its six chapters', () => {
  expect(filmScenes).toHaveLength(6);
  expect(filmLength).toBe(54);
  expect(sceneAt(0).index).toBe(0);
  expect(sceneAt(4.5).progress).toBeCloseTo(0.5);
  expect(sceneAt(9).index).toBe(1);
  expect(sceneAt(53.9).index).toBe(5);
  expect(sceneAt(54).index).toBe(0);
  expect(sceneAt(-1).index).toBe(5);
});

it('jumps between chapters, scrubs, and reads as text', async () => {
  const view = render(
    <MotionProvider>
      <GumFilm />
    </MotionProvider>,
  );
  await act(async () => {
    await Promise.resolve();
  });
  const stage = () =>
    view.container.querySelector('.film-stage')?.getAttribute('aria-label') ??
    '';
  expect(stage()).toContain('Film chapter 1');
  fireEvent.click(screen.getByRole('button', { name: /A knot/ }));
  expect(stage()).toContain('Film chapter 4');
  const scrubber = screen.getByLabelText(
    'Film position in seconds',
  ) as HTMLInputElement;
  fireEvent.change(scrubber, { target: { value: '50' } });
  expect(stage()).toContain('Film chapter 6');
  expect(view.container.querySelector('.film-caption')?.textContent).toBe(
    filmScenes[5].caption,
  );
  fireEvent.click(screen.getByLabelText('Captions'));
  expect(view.container.querySelector('.film-caption')).toBeNull();
  expect(view.container.querySelectorAll('.film-transcript p')).toHaveLength(
    filmScenes.length,
  );
  view.unmount();
});
