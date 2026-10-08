import { renderToString } from 'react-dom/server';
import { expect, it } from 'vitest';
import GumEssay from '@/components/gum-essay';

// The static export is a server render of the curious route; the primer route must
// render on the server too, so a reader arriving with ?path=primer gets the text.
it('server-renders the curious route with the paper’s chapters only', () => {
  const html = renderToString(<GumEssay initialPath="curious" />);
  expect(html).toContain('id="question"');
  expect(html).toContain('id="ledger"');
  expect(html).toContain('Teach me from the ground up');
  expect(html).not.toContain('id="primer-1"');
});

it('server-renders the primer route, every chapter and exhibit anchor', () => {
  const html = renderToString(<GumEssay initialPath="primer" />);
  for (let n = 1; n <= 16; n++) expect(html).toContain('id="primer-' + n + '"');
  expect(html).toContain('id="primer-ladder"');
  expect(html).toContain('id="primer-knot"');
  expect(html).toContain('id="primer-stakes"');
  expect(html).toContain('Standing by for adjudication');
  expect(html).not.toContain('id="question"');
});
