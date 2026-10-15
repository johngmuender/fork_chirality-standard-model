'use client';
import { Fragment, type ReactNode } from 'react';
import { Term } from '@/components/glossary';
import {
  answersForChapter,
  primerSectionNumbers,
  primerTagNames,
  primerTerms,
} from '@/lib/primer';
import type { PrimerBlock } from '@/lib/primer-types';

/**
 * Renders the primer's inline Markdown nearly verbatim: bold, italics, the nine tag
 * glyphs with their names, ^{…} and _{…} as superscripts and subscripts, “Chapter n”
 * and “§n.m” as links into the primer, and the first mention of each glossary term in
 * a chapter as a tooltip.
 */
export type TermMemory = Set<string>;
const ESCAPED_STAR = '\uE000';
const termPattern = new RegExp(
  '\\b(' +
    [...primerTerms]
      .map((t) => t.key)
      .sort((a, b) => b.length - a.length)
      .map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('|') +
    ')\\b',
  'i',
);
const tagPattern = new RegExp(
  '[' + Object.keys(primerTagNames).join('') + ']',
  'u',
);
const mathPattern =
  /\^\{([^}]*)\}|_\{([^}]*)\}|(?<=[\p{L}\p{N}̃̂])_([\p{L}\p{N}]{1,6})(?![\p{L}\p{N}])|Chapter (\d{1,2})\b|§(\d{1,2}\.\d{1,2})\b/u;

function renderTerms(
  text: string,
  seen: TermMemory | undefined,
  keyBase: string,
): ReactNode[] {
  const out: ReactNode[] = [];
  let rest = text;
  let i = 0;
  while (rest) {
    const match = seen ? rest.match(termPattern) : null;
    if (!match || match.index === undefined) {
      out.push(rest.replace(/\uE000/g, '*'));
      break;
    }
    const key = match[1].toLowerCase();
    const entry = primerTerms.find((t) => t.key === key);
    const before = rest.slice(0, match.index);
    if (before) out.push(before.replace(/\uE000/g, '*'));
    if (entry && seen && !seen.has(key)) {
      seen.add(key);
      out.push(
        <Term key={keyBase + '-t' + i} meaning={entry.text}>
          {match[1]}
        </Term>,
      );
    } else out.push(match[1]);
    rest = rest.slice(match.index + match[0].length);
    i++;
  }
  return out;
}

function renderText(
  text: string,
  seen: TermMemory | undefined,
  keyBase: string,
): ReactNode[] {
  const out: ReactNode[] = [];
  let rest = text;
  let i = 0;
  while (rest) {
    const tag = rest.match(tagPattern);
    const math = rest.match(mathPattern);
    const candidates = [tag, math].filter((m): m is RegExpMatchArray =>
      Boolean(m && m.index !== undefined),
    );
    if (!candidates.length) {
      out.push(...renderTerms(rest, seen, keyBase + '-' + i));
      break;
    }
    const first = candidates.reduce((a, b) => (a.index! <= b.index! ? a : b));
    const before = rest.slice(0, first.index);
    if (before) out.push(...renderTerms(before, seen, keyBase + '-' + i));
    const key = keyBase + '-m' + i;
    if (first === tag) {
      out.push(
        <span key={key} className="primer-tag" title={primerTagNames[first[0]]}>
          {first[0]}
        </span>,
      );
    } else if (first[1] !== undefined)
      out.push(<sup key={key}>{first[1]}</sup>);
    else if (first[2] !== undefined) out.push(<sub key={key}>{first[2]}</sub>);
    else if (first[3] !== undefined) out.push(<sub key={key}>{first[3]}</sub>);
    else if (first[4] !== undefined) {
      const n = Number(first[4]);
      out.push(
        n >= 1 && n <= 16 ? (
          <a key={key} href={'#primer-' + n} className="primer-link">
            Chapter {first[4]}
          </a>
        ) : (
          'Chapter ' + first[4]
        ),
      );
    } else if (first[5] !== undefined) {
      out.push(
        primerSectionNumbers.has(first[5]) ? (
          <a
            key={key}
            href={'#primer-' + first[5].replace('.', '-')}
            className="primer-link"
          >
            §{first[5]}
          </a>
        ) : (
          '§' + first[5]
        ),
      );
    }
    rest = rest.slice(first.index! + first[0].length);
    i++;
  }
  return out;
}

function renderEmphasis(
  text: string,
  seen: TermMemory | undefined,
  keyBase: string,
): ReactNode[] {
  const out: ReactNode[] = [];
  const pattern = /\*(\S(?:[^*\n]*?\S)?)\*/g;
  let last = 0;
  let i = 0;
  for (const match of text.matchAll(pattern)) {
    if (match.index! > last)
      out.push(
        ...renderText(text.slice(last, match.index), seen, keyBase + '-' + i),
      );
    out.push(
      <em key={keyBase + '-e' + i}>
        {renderText(match[1], seen, keyBase + '-ei' + i)}
      </em>,
    );
    last = match.index! + match[0].length;
    i++;
  }
  if (last < text.length)
    out.push(...renderText(text.slice(last), seen, keyBase + '-' + i));
  return out;
}

export function Inline({
  text,
  seen,
  keyBase = 'k',
}: {
  text: string;
  seen?: TermMemory;
  keyBase?: string;
}) {
  const escaped = text.replace(/\\\*/g, ESCAPED_STAR);
  const out: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*/gs;
  let last = 0;
  let i = 0;
  for (const match of escaped.matchAll(pattern)) {
    if (match.index! > last)
      out.push(
        ...renderEmphasis(
          escaped.slice(last, match.index),
          seen,
          keyBase + '-' + i,
        ),
      );
    out.push(
      <strong key={keyBase + '-b' + i}>
        {renderEmphasis(match[1], seen, keyBase + '-bi' + i)}
      </strong>,
    );
    last = match.index! + match[0].length;
    i++;
  }
  if (last < escaped.length)
    out.push(...renderEmphasis(escaped.slice(last), seen, keyBase + '-' + i));
  return (
    <>
      {out.map((node, j) =>
        typeof node === 'string' ? (
          <Fragment key={keyBase + '-s' + j}>{node}</Fragment>
        ) : (
          node
        ),
      )}
    </>
  );
}

const boxLabels: Record<string, string> = {
  try: 'TRY THIS',
  stepup: 'STEP-UP',
  changed: 'WHAT CHANGED',
  numbers: 'NUMBERS TO HOLD',
  slip: 'A SLIP, CAUGHT',
};

function boxHeading(kind: string, title: string) {
  return title
    .replace(
      /^(TRY THIS|STEP-UP|WHAT CHANGED|NUMBERS TO HOLD|A SLIP, CAUGHT)\s*/,
      '',
    )
    .replace(/^[—.:-]\s*/, '')
    .replace(/\.$/, '')
    .trim();
}

export function PrimerBlocks({
  blocks,
  depth,
  chapter,
  seen,
  keyBase,
}: {
  blocks: PrimerBlock[];
  depth: string;
  chapter: number | null;
  seen?: TermMemory;
  keyBase: string;
}) {
  return (
    <>
      {blocks.map((block, i) => {
        const key = keyBase + '-' + i;
        switch (block.type) {
          case 'p':
            return (
              <p key={key} className="primer-p">
                <Inline text={block.text} seen={seen} keyBase={key} />
              </p>
            );
          case 'formula':
            return (
              <div key={key} className="primer-formula">
                <span>
                  <Inline text={block.text} seen={seen} keyBase={key} />
                </span>
                {block.note && (
                  <small>
                    <Inline text={block.note} seen={seen} keyBase={key + 'n'} />
                  </small>
                )}
              </div>
            );
          case 'quote':
            return (
              <blockquote key={key} className="primer-quote">
                <Inline text={block.text} seen={seen} keyBase={key} />
              </blockquote>
            );
          case 'list': {
            const Tag = block.ordered ? 'ol' : 'ul';
            return (
              <Tag key={key} className="primer-list">
                {block.items.map((item, j) => (
                  <li key={j}>
                    <Inline text={item} seen={seen} keyBase={key + '-' + j} />
                  </li>
                ))}
              </Tag>
            );
          }
          case 'table':
            return (
              <div key={key} className="guide-table-wrap">
                <table className="guide-table primer-table">
                  <thead>
                    <tr>
                      {block.header.map((cell, j) => (
                        <th scope="col" key={j}>
                          <Inline text={cell} keyBase={key + 'h' + j} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) =>
                          c === 0 ? (
                            <th scope="row" key={c}>
                              <Inline text={cell} keyBase={key + r + '-' + c} />
                            </th>
                          ) : (
                            <td key={c}>
                              <Inline
                                text={cell}
                                seen={seen}
                                keyBase={key + r + '-' + c}
                              />
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'tags':
            return (
              <dl key={key} className="primer-tags">
                {block.items.map((tag) => (
                  <div key={tag.glyph}>
                    <dt>
                      <span className="primer-tag" aria-hidden="true">
                        {tag.glyph}
                      </span>{' '}
                      {tag.name}
                    </dt>
                    <dd>
                      <Inline
                        text={tag.text}
                        seen={seen}
                        keyBase={key + tag.glyph}
                      />
                    </dd>
                  </div>
                ))}
              </dl>
            );
          case 'box': {
            const heading = boxHeading(block.kind, block.title);
            return (
              <aside key={key} className={'primer-box box-' + block.kind}>
                <span className="eyebrow">{boxLabels[block.kind]}</span>
                {heading && <h4>{heading}</h4>}
                <p>
                  <Inline text={block.text} seen={seen} keyBase={key} />
                </p>
              </aside>
            );
          }
          case 'chew': {
            const answers = chapter === null ? [] : answersForChapter(chapter);
            return (
              <details
                key={key}
                className="inline-depth primer-chew"
                open={depth !== 'story' ? true : undefined}
              >
                <summary>
                  Chew on this · {block.items.length} problems
                  {block.items.some((p) => p.starred)
                    ? ' · ★ one level deeper'
                    : ''}{' '}
                  <span>+</span>
                </summary>
                <ol className="primer-problems">
                  {block.items.map((problem) => {
                    const answer = answers.find((a) => a.id === problem.id);
                    return (
                      <li
                        key={problem.id}
                        className={problem.starred ? 'is-starred' : ''}
                      >
                        <span className="problem-number">
                          {problem.id}
                          {problem.starred ? ' ★' : ''}
                        </span>
                        <span>
                          <Inline
                            text={problem.text}
                            seen={seen}
                            keyBase={key + problem.id}
                          />
                          {answer && (
                            <details
                              className="primer-answer"
                              open={depth === 'math' ? true : undefined}
                            >
                              <summary>Spot check</summary>
                              <p>
                                <Inline
                                  text={answer.text}
                                  keyBase={key + problem.id + 'a'}
                                />
                              </p>
                            </details>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </details>
            );
          }
        }
      })}
    </>
  );
}
