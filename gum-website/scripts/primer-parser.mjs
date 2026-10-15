// Parses the GUM Material Primer (Markdown) into the structure the primer
// reading path renders. The text is kept nearly verbatim: paragraphs carry
// their inline Markdown, and the primer's own devices (tags, TRY THIS,
// STEP-UP, WHAT CHANGED, NUMBERS TO HOLD, CHEW ON THIS, ★ sections) become
// typed blocks so the page can fold and style them.

const TAG_GLYPHS = ['⬛', '🟩', '🟨', '🟦', '🟪', '🟥', '🟧', '⬜', '🟫'];
const BOXES = [
  ['**TRY THIS', 'try'],
  ['**STEP-UP', 'stepup'],
  ['**WHAT CHANGED', 'changed'],
  ['**NUMBERS TO HOLD', 'numbers'],
  ['**A SLIP, CAUGHT', 'slip'],
];
const MATH = /[=→⟹≥≤≲≳∈∝≈≡]/;

function boldLead(text) {
  const match = text.match(/^\*\*(.+?)\*\*\s*([\s\S]*)$/);
  return match ? { title: match[1].trim(), body: match[2].trim() } : null;
}

function splitProblems(body) {
  const items = [];
  const marks = [...body.matchAll(/\((\d+\.\d+)( ★)?\)\s*/g)];
  if (!marks.length)
    throw new Error(
      'A problem set without numbered problems: ' + body.slice(0, 60),
    );
  marks.forEach((mark, i) => {
    const end = i + 1 < marks.length ? marks[i + 1].index : body.length;
    items.push({
      id: mark[1],
      starred: Boolean(mark[2]),
      text: body.slice(mark.index + mark[0].length, end).trim(),
    });
  });
  return items;
}

function classify(paragraph) {
  const text = paragraph.trim();
  if (text.startsWith('> '))
    return { type: 'quote', text: text.replace(/^> ?/gm, '').trim() };
  if (text.startsWith('**CHEW ON THIS')) {
    const lead = boldLead(text);
    return { type: 'chew', items: splitProblems(lead.body) };
  }
  for (const [prefix, kind] of BOXES) {
    if (text.startsWith(prefix)) {
      const lead = boldLead(text);
      if (!lead)
        throw new Error('Unterminated box title: ' + text.slice(0, 60));
      return { type: 'box', kind, title: lead.title, text: lead.body };
    }
  }
  const tag = text.match(
    /^\*\*([⬛🟩🟨🟦🟪🟥🟧⬜🟫])\s+(.+?)\*\*\s*([\s\S]*)$/u,
  );
  if (tag && TAG_GLYPHS.includes(tag[1]))
    return {
      type: 'tag',
      glyph: tag[1],
      name: tag[2].trim(),
      text: tag[3].trim(),
    };
  const lead = text.startsWith('**') ? boldLead(text) : null;
  if (
    lead &&
    MATH.test(lead.title) &&
    lead.title.length >= 0.6 * (lead.title.length + lead.body.length)
  ) {
    return { type: 'formula', text: lead.title, note: lead.body };
  }
  return { type: 'p', text };
}

function parseTable(lines) {
  const rows = lines
    .map((line) => line.trim())
    .filter((line) => line.startsWith('|'))
    .map((line) =>
      line
        .slice(1, line.endsWith('|') ? -1 : undefined)
        .split('|')
        .map((cell) => cell.trim()),
    );
  const [header, separator, ...body] = rows;
  if (!separator || !separator.every((cell) => /^:?-+:?$/.test(cell)))
    throw new Error('Malformed table near ' + lines[0]);
  return { type: 'table', header, rows: body };
}

function parseGlossary(text) {
  const entries = [];
  const pattern = /\*\*([^*]+)\*\*\s*—\s*/g;
  const marks = [...text.matchAll(pattern)];
  marks.forEach((mark, i) => {
    const end = i + 1 < marks.length ? marks[i + 1].index : text.length;
    entries.push({
      term: mark[1].trim(),
      text: text.slice(mark.index + mark[0].length, end).trim(),
    });
  });
  if (entries.length < 40)
    throw new Error(
      'The glossary parsed into only ' + entries.length + ' entries.',
    );
  return entries;
}

function parseAnswers(text) {
  const entries = [];
  const marks = [...text.matchAll(/\((\d+\.\d+)\)\s*/g)];
  marks.forEach((mark, i) => {
    const end = i + 1 < marks.length ? marks[i + 1].index : text.length;
    entries.push({
      id: mark[1],
      text: text.slice(mark.index + mark[0].length, end).trim(),
    });
  });
  if (entries.length < 30)
    throw new Error(
      'The answer key parsed into only ' + entries.length + ' entries.',
    );
  return entries;
}

export function parsePrimer(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const content = {
    title: '',
    subtitle: '',
    edition: '',
    note: '',
    front: [],
    parts: [],
    chapters: [],
    glossary: [],
    answers: [],
    project: { intro: '', items: [], rubric: '', closing: '' },
  };
  let part = null;
  let chapter = null;
  let section = null;
  let back = null; // 'glossary' | 'answers' | 'project'
  let paragraph = [];
  let table = [];
  let list = null;

  const target = () => {
    if (section) return section.blocks;
    throw new Error(
      'Text outside any section: ' + paragraph.join(' ').slice(0, 80),
    );
  };
  const flushList = () => {
    if (list) {
      target().push(list);
      list = null;
    }
  };
  const flushTable = () => {
    if (table.length) {
      target().push(parseTable(table));
      table = [];
    }
  };
  const flushParagraph = () => {
    if (!paragraph.length) return;
    const text = paragraph.join(' ').trim();
    paragraph = [];
    if (!text) return;
    if (back === 'glossary') {
      content.glossary = parseGlossary(text);
      return;
    }
    if (back === 'answers') {
      content.answers = parseAnswers(text);
      return;
    }
    if (back === 'project') {
      if (text.startsWith('**[END OF'))
        content.project.closing = text.replace(/^\*\*|\*\*$/g, '');
      else if (text.startsWith('Grading rubric')) content.project.rubric = text;
      else if (!content.project.intro) content.project.intro = text;
      else
        throw new Error('Unexpected final-project text: ' + text.slice(0, 60));
      return;
    }
    if (chapter && !section && text.startsWith("**What you'll be able to do")) {
      chapter.goals = boldLead(text).body;
      return;
    }
    if (!chapter && !section && text.startsWith('*(') && text.endsWith(')*')) {
      content.note = text.slice(2, -2);
      return;
    }
    const block = classify(text);
    const blocks = target();
    if (block.type === 'tag') {
      const previous = blocks[blocks.length - 1];
      if (previous && previous.type === 'tags')
        previous.items.push({
          glyph: block.glyph,
          name: block.name,
          text: block.text,
        });
      else
        blocks.push({
          type: 'tags',
          items: [{ glyph: block.glyph, name: block.name, text: block.text }],
        });
      return;
    }
    blocks.push(block);
  };
  const flushAll = () => {
    flushParagraph();
    flushTable();
    flushList();
  };
  const sectionCounter = { front: 0 };

  for (const raw of lines) {
    const line = raw.replace(/\s+$/, '');
    if (line.startsWith('|')) {
      flushParagraph();
      flushList();
      table.push(line);
      continue;
    }
    if (table.length) flushTable();
    const bullet = line.match(/^- (.*)$/);
    const numbered = line.match(/^(\d+)\. (.*)$/);
    if (bullet || numbered) {
      flushParagraph();
      const ordered = Boolean(numbered);
      if (!list || list.ordered !== ordered) {
        flushList();
        list = { type: 'list', ordered, items: [] };
      }
      list.items.push((bullet ? bullet[1] : numbered[2]).trim());
      continue;
    }
    if (list && line.trim() === '') {
      flushList();
      continue;
    }
    if (line.startsWith('# ')) {
      flushAll();
      const heading = line.slice(2).trim();
      const partMatch = heading.match(/^PART ([IVX]+) — (.+)$/);
      const chapterMatch = heading.match(/^CHAPTER (\d+) — (.+)$/);
      if (partMatch) {
        part = {
          number: content.parts.length + 1,
          numeral: partMatch[1],
          title: partMatch[2].trim(),
          chapters: [],
        };
        content.parts.push(part);
        chapter = null;
        section = null;
      } else if (chapterMatch) {
        if (!part) throw new Error('A chapter before any part: ' + heading);
        chapter = {
          number: Number(chapterMatch[1]),
          slug: 'primer-' + chapterMatch[1],
          title: chapterMatch[2].trim(),
          part: part.number,
          goals: '',
          sections: [],
        };
        part.chapters.push(chapter.number);
        content.chapters.push(chapter);
        section = null;
      } else if (!content.title) {
        content.title = heading;
      } else throw new Error('Unexpected top-level heading: ' + heading);
      continue;
    }
    if (line.startsWith('### ')) {
      flushAll();
      content.edition = line.slice(4).trim();
      continue;
    }
    if (line.startsWith('## ')) {
      flushAll();
      const heading = line.slice(3).trim();
      if (
        !content.subtitle &&
        !content.chapters.length &&
        !content.front.length
      ) {
        content.subtitle = heading;
        continue;
      }
      if (heading.startsWith('GLOSSARY')) {
        back = 'glossary';
        section = {
          id: 'primer-glossary',
          number: null,
          title: heading,
          starred: false,
          blocks: [],
        };
        continue;
      }
      if (heading.startsWith('ANSWER-KEY')) {
        back = 'answers';
        section = {
          id: 'primer-answers',
          number: null,
          title: heading,
          starred: false,
          blocks: [],
        };
        continue;
      }
      if (heading.startsWith('THE FINAL PROJECT')) {
        back = 'project';
        section = {
          id: 'primer-project',
          number: null,
          title: heading,
          starred: false,
          blocks: [],
        };
        continue;
      }
      if (chapter) {
        const match = heading.match(/^(\d+)\.(\d+)\s+(★\s+)?(.+)$/);
        if (!match || Number(match[1]) !== chapter.number)
          throw new Error('Section outside its chapter: ' + heading);
        section = {
          id: 'primer-' + match[1] + '-' + match[2],
          number: match[1] + '.' + match[2],
          title: match[4].trim(),
          starred: Boolean(match[3]),
          blocks: [],
        };
        chapter.sections.push(section);
      } else {
        sectionCounter.front++;
        section = {
          id: sectionCounter.front === 1 ? 'primer-letter' : 'primer-rules',
          number: null,
          title: heading,
          starred: false,
          blocks: [],
        };
        content.front.push(section);
      }
      continue;
    }
    if (line.trim() === '---') {
      flushAll();
      continue;
    }
    if (line.trim() === '') {
      flushParagraph();
      continue;
    }
    if (back === 'project' && line.startsWith('**(')) {
      flushParagraph();
      const item = line.match(/^\*\*\((\w)\)\*\*\s*(.*)$/);
      if (!item) throw new Error('Malformed project item: ' + line);
      content.project.items.push({ id: item[1], text: item[2].trim() });
      continue;
    }
    paragraph.push(line.trim());
  }
  flushAll();
  if (content.chapters.length !== 16)
    throw new Error('Expected 16 chapters, found ' + content.chapters.length);
  if (content.parts.length !== 8)
    throw new Error('Expected 8 parts, found ' + content.parts.length);
  for (const c of content.chapters) {
    if (!c.goals)
      throw new Error('Chapter ' + c.number + ' has no goals paragraph.');
    if (!c.sections.length)
      throw new Error('Chapter ' + c.number + ' has no sections.');
  }
  if (content.front.length !== 2)
    throw new Error('Expected the letter and the rules in the front matter.');
  if (content.project.items.length !== 7)
    throw new Error('Expected seven final-project options.');
  return content;
}

/** The generated module: a typed object literal, so the page bundles it without any loader. */
export function renderPrimerModule(content) {
  return (
    '// Generated by scripts/sync-assets.mjs from gum/primer/gum-primer.md. Do not edit.\n' +
    "import type { PrimerContent } from './primer-types.ts';\n\n" +
    'export const primerContent: PrimerContent = ' +
    JSON.stringify(content, null, 1) +
    ';\n'
  );
}
