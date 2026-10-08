'use client';
import { ArrowUpRight } from 'lucide-react';
import { asset } from '@/lib/assets';
import { chapterInfo } from '@/lib/reader-paths';
import {
  exhibitsFor,
  primer,
  primerEndId,
  primerIntroId,
  primerPart,
} from '@/lib/primer';
import type {
  PrimerChapter as PrimerChapterData,
  PrimerSection,
} from '@/lib/primer-types';
import {
  Inline,
  PrimerBlocks,
  type TermMemory,
} from '@/components/primer-text';
import { primerExhibitComponents } from '@/components/primer-exhibits';
import { PrimerFilm } from '@/components/primer-film';
import { PartOpener } from '@/components/path-guide';
import { repository, snapshot } from '@/lib/gum-site';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-number">
      <span aria-hidden="true" />
      <span className="label-rule" />
      {children}
    </div>
  );
}

function SectionView({
  section,
  chapter,
  depth,
  seen,
}: {
  section: PrimerSection;
  chapter: number;
  depth: string;
  seen: TermMemory;
}) {
  const anchors = exhibitsFor(section.number ?? '');
  const body = (
    <>
      <h3 id={section.id} className="primer-section-title">
        <span>{section.number}</span>
        {section.starred ? '★ ' : ''}
        {section.title}
      </h3>
      <PrimerBlocks
        blocks={section.blocks}
        depth={depth}
        chapter={chapter}
        seen={seen}
        keyBase={section.id}
      />
      {anchors.map((anchor) => {
        const Exhibit = primerExhibitComponents[anchor];
        if (!Exhibit) throw new Error('No exhibit is registered for ' + anchor);
        return <Exhibit key={anchor} depth={depth} />;
      })}
    </>
  );
  if (!section.starred) return <div className="primer-section">{body}</div>;
  return (
    <details
      className="unpack-panel primer-starred"
      open={depth !== 'story' ? true : undefined}
    >
      <summary>
        ★ {section.number} {section.title} · one level deeper <span>+</span>
      </summary>
      <div className="primer-section">{body}</div>
    </details>
  );
}

/** One chapter of the primer, nearly verbatim, with its exhibits in place. */
export function PrimerChapterSection({
  chapter,
  depth,
}: {
  chapter: PrimerChapterData;
  depth: string;
}) {
  const part = primerPart(chapter.part);
  const info = chapterInfo[chapter.slug as keyof typeof chapterInfo];
  const seen: TermMemory = new Set();
  return (
    <section className="section primer-chapter" id={chapter.slug}>
      {part.chapters[0] === chapter.number ? (
        <PartOpener part={part} />
      ) : (
        <SectionLabel>
          PART {part.numeral} · {part.title}
        </SectionLabel>
      )}
      <div className="section-heading">
        <h2>
          <span className="primer-chapter-number">
            Chapter {chapter.number}
          </span>
          {info.title}
        </h2>
        <p className="section-lead">{info.summary}</p>
      </div>
      <aside className="primer-box box-goals">
        <span className="eyebrow">
          WHAT YOU’LL BE ABLE TO DO AFTER THIS CHAPTER
        </span>
        <p>
          <Inline
            text={chapter.goals}
            seen={seen}
            keyBase={chapter.slug + '-goals'}
          />
        </p>
      </aside>
      {chapter.sections.map((section) => (
        <SectionView
          key={section.id}
          section={section}
          chapter={chapter.number}
          depth={depth}
          seen={seen}
        />
      ))}
      <p className="source-note">
        Chapter {chapter.number} of the GUM Material Primer, reproduced from{' '}
        <a
          href={repository + '/blob/' + snapshot + '/gum/primer/gum-primer.md'}
          target="_blank"
          rel="noreferrer"
        >
          gum/primer/gum-primer.md
        </a>{' '}
        with its tags, boxes and problems; the exhibits are this edition’s.
      </p>
    </section>
  );
}

/** The front matter: the letter, the rules, and the primer in eight scenes. */
export function PrimerIntro({ depth }: { depth: string }) {
  const seen: TermMemory = new Set();
  return (
    <section className="section primer-chapter primer-front" id={primerIntroId}>
      <SectionLabel>
        THE GUM MATERIAL PRIMER · {primer.edition.toUpperCase()}
      </SectionLabel>
      <div className="section-heading">
        <h2>
          What keeps the books?
          <br />A <em>first book</em> on the GUM program.
        </h2>
        <p className="section-lead">
          <Inline text={primer.note} seen={seen} keyBase="primer-note" />
        </p>
      </div>
      {primer.front.map((section) => (
        <div className="primer-section" key={section.id}>
          <h3 id={section.id} className="primer-section-title">
            {section.title.charAt(0) + section.title.slice(1).toLowerCase()}
          </h3>
          <PrimerBlocks
            blocks={section.blocks}
            depth={depth}
            chapter={null}
            seen={seen}
            keyBase={section.id}
          />
        </div>
      ))}
      <div className="download-strip">
        <a href={asset('gum-primer.md')} download>
          The primer, Markdown source <ArrowUpRight size={14} />
        </a>
        <a href={asset('gum-paper.md')} download>
          The paper it accompanies <ArrowUpRight size={14} />
        </a>
      </div>
      <PrimerFilm />
    </section>
  );
}

/** The back matter: the selected glossary, the answer notes and the final project. */
export function PrimerEnd({ depth }: { depth: string }) {
  return (
    <section className="section primer-chapter primer-back" id={primerEndId}>
      <SectionLabel>BACK MATTER</SectionLabel>
      <div className="section-heading">
        <h2>
          Glossary, answer notes,
          <br />
          and the <em>final project.</em>
        </h2>
        <p className="section-lead">
          The primer’s own glossary, the spot checks for its problems, and the
          project it ends on: choose one claim, audit it with the full kit,
          write three pages.
        </p>
      </div>
      <details
        className="unpack-panel"
        id="primer-glossary"
        open={depth !== 'story' ? true : undefined}
      >
        <summary>
          Glossary (selected) · {primer.glossary.length} terms <span>+</span>
        </summary>
        <dl className="glossary-list primer-glossary">
          {primer.glossary.map((entry) => (
            <div key={entry.term}>
              <dt>{entry.term}</dt>
              <dd>
                <Inline text={entry.text} keyBase={'g-' + entry.term} />
              </dd>
            </div>
          ))}
        </dl>
      </details>
      <details
        className="unpack-panel"
        id="primer-answers"
        open={depth === 'math' ? true : undefined}
      >
        <summary>
          Answer-key notes · {primer.answers.length} spot checks <span>+</span>
        </summary>
        <ol className="primer-problems primer-answers">
          {primer.answers.map((answer) => (
            <li key={answer.id}>
              <span className="problem-number">{answer.id}</span>
              <span>
                <Inline text={answer.text} keyBase={'a-' + answer.id} />
              </span>
            </li>
          ))}
        </ol>
      </details>
      <div className="primer-project" id="primer-project">
        <div className="lab-heading">
          <span className="eyebrow">THE FINAL PROJECT</span>
          <h3>
            Choose one claim; audit it with the full kit; write three pages.
          </h3>
          <p>
            <Inline text={primer.project.intro} keyBase="project-intro" />
          </p>
        </div>
        <ol className="primer-project-list" type="a">
          {primer.project.items.map((item) => (
            <li key={item.id}>
              <Inline text={item.text} keyBase={'project-' + item.id} />
            </li>
          ))}
        </ol>
        <p className="primer-rubric">
          <Inline text={primer.project.rubric} keyBase="project-rubric" />
        </p>
        <p className="primer-closing">{primer.project.closing}</p>
      </div>
      <p className="source-note">
        The paper’s own glossary of forty terms sits in the{' '}
        <a href="#glossary">verification chapter</a>; the thirty stakes and the
        twenty-six closures are in the <a href="#ledger">ledger</a>. Both open
        from here without leaving the primer.
      </p>
    </section>
  );
}
