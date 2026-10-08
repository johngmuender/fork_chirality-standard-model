import { renderToString } from 'react-dom/server';
import { expect, it } from 'vitest';
import GumEssay from '@/components/gum-essay';

// The static export is a server render of the default route, the primer; a
// paper route must render on the server too, so a reader arriving with
// ?path=curious gets the paper's text.
it('server-renders the primer by default, every chapter and exhibit anchor', () => {
  const html = renderToString(<GumEssay />);
  expect(html).toContain('id="primer-intro"');
  for (let n = 1; n <= 16; n++) expect(html).toContain('id="primer-' + n + '"');
  expect(html).toContain('id="primer-end"');
  expect(html).toContain('id="primer-ladder"');
  expect(html).toContain('id="primer-knot"');
  expect(html).toContain('id="primer-stakes"');
  expect(html).toContain('Standing by for adjudication');
  expect(html).toContain('Begin with the letter');
  expect(html).toContain('One material. <em>Two editions.</em>');
  expect(html).toContain('id="path-finale"');
  expect(html).not.toContain('id="question"');
  expect(html).not.toContain('CONTINUE WHERE YOU LEFT OFF');
});

it('server-renders the curious route with the paper’s chapters only', () => {
  const html = renderToString(<GumEssay initialPath="curious" />);
  expect(html).toContain('id="question"');
  expect(html).toContain('id="ledger"');
  expect(html).toContain('Teach me from the ground up');
  expect(html).toContain('Learn it from the ground up with the primer');
  expect(html).not.toContain('id="primer-1"');
});
