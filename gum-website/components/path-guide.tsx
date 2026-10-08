'use client';
import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, CornerUpLeft } from 'lucide-react';
import {
  chapterInfo,
  companionChapters,
  editionOf,
  primerPartIntroductions,
  readerPaths,
  type ChapterId,
  type ReaderPath,
} from '@/lib/reader-paths';
import { paperSectionsFor, primer, primerStats } from '@/lib/primer';
import type { PrimerPart } from '@/lib/primer-types';
import {
  chapterKicker,
  chapterMinutes,
  chapterPosition,
  formatMinutes,
  placeLabel,
  primerChapterNumber,
  sentenceCase,
  shortTitle,
  statsLine,
  useJourney,
} from '@/components/journey';

const slug = (n: number) => ('primer-' + n) as ChapterId;

/** The doorway into one of the primer's eight parts, at the top of its first chapter. */
export function PartOpener({ part }: { part: PrimerPart }) {
  const read = useJourney()?.memory.read ?? [];
  const minutes = part.chapters.reduce(
    (sum, n) => sum + primerStats(slug(n)).minutes,
    0,
  );
  return (
    <header className="part-opener">
      <span className="part-numeral" aria-hidden="true">
        {part.numeral}
      </span>
      <div className="part-copy">
        <span className="eyebrow">
          PART {part.numeral} OF {primer.parts.length} ·{' '}
          {part.chapters.length === 1
            ? 'CHAPTER ' + part.chapters[0]
            : 'CHAPTERS ' + part.chapters[0] + '–' + part.chapters.at(-1)}{' '}
          · {formatMinutes(minutes).toUpperCase()}
        </span>
        <h2 className="part-title">
          <span className="sr-only">Part {part.numeral}: </span>
          {sentenceCase(part.title)}
        </h2>
        <p className="part-intro">{primerPartIntroductions[part.number]}</p>
        <ol className="part-chapters">
          {part.chapters.map((n, i) => {
            const id = slug(n);
            const body = (
              <>
                <span className="part-chapter-number">{n}</span>
                <span className="part-chapter-title">
                  {chapterInfo[id].title}
                </span>
                <small>
                  {i === 0
                    ? 'begins below'
                    : formatMinutes(primerStats(id).minutes)}
                </small>
                {read.includes(id) && (
                  <CheckCircle2 size={15} aria-label="finished" />
                )}
              </>
            );
            return (
              <li key={n}>
                {i === 0 ? (
                  <span className="part-chapter">{body}</span>
                ) : (
                  <a className="part-chapter" href={'#' + id}>
                    {body}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </header>
  );
}

/** Mark a chapter finished once its ending has stayed in view for a moment. */
function useFinishedWhenSeen(chapter: ChapterId) {
  const ref = useRef<HTMLElement>(null);
  const markRead = useJourney()?.markRead;
  useEffect(() => {
    const element = ref.current;
    if (!markRead || !element) return;
    let timer = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timer);
        if (entry.isIntersecting)
          timer = window.setTimeout(() => markRead(chapter), 700);
      },
      { threshold: 0.4 },
    );
    observer.observe(element);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [chapter, markRead]);
  return ref;
}

/**
 * The close of a chapter on the reader's path: where the other edition takes
 * the same material further, and what comes next and why.
 */
export function ChapterEnd({
  chapter,
  path,
}: {
  chapter: ChapterId;
  path: ReaderPath;
}) {
  const journey = useJourney();
  const ref = useFinishedWhenSeen(chapter);
  const finished = journey?.memory.read.includes(chapter) ?? false;
  const next = path.chapters[path.chapters.indexOf(chapter) + 1];
  const companions = companionChapters(chapter);
  const primerChapter = editionOf(chapter) === 'primer';
  const number = primerChapterNumber(chapter);
  const kicker = chapterKicker(chapter, path.id);
  return (
    <aside
      className={'chapter-end' + (finished ? ' is-finished' : '')}
      ref={ref}
      aria-label={'End of ' + kicker + ': ' + shortTitle(chapter)}
    >
      <p className="chapter-end-mark">
        <CheckCircle2 size={16} aria-hidden="true" />
        <span>
          {finished ? 'FINISHED' : 'END OF ' + kicker.toUpperCase()}
          {' · '}
          {shortTitle(chapter).toUpperCase()}
        </span>
      </p>
      <div className={'chapter-end-grid' + (next ? '' : ' is-last')}>
        {companions.length > 0 && (
          <div className="chapter-end-companions">
            <span className="eyebrow">
              {primerChapter
                ? 'GO DEEPER IN THE PAPER'
                : 'LEARN IT FROM THE GROUND UP'}
            </span>
            <p>
              {number
                ? 'The primer maps this chapter to the paper’s ' +
                  paperSectionsFor(number) +
                  '. In this edition:'
                : primerChapter
                  ? 'The paper’s own glossary, its review prompt and the browser checks of its arithmetic:'
                  : 'The primer teaches this material with no calculus, tags on every claim, and problems to try:'}
            </p>
            <ul>
              {companions.map((other) => (
                <li key={other}>
                  <a href={'#' + other}>
                    <span>
                      {editionOf(other) === 'primer'
                        ? chapterKicker(other, 'primer') + ' · '
                        : 'The paper · '}
                      {chapterInfo[other].title}
                    </span>
                    <small>
                      {chapterMinutes(other)
                        ? formatMinutes(chapterMinutes(other)!)
                        : 'opens here'}
                    </small>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {next && (
          <a
            className="chapter-end-next"
            href={'#' + next}
            aria-label={
              'Up next, ' +
              chapterKicker(next, path.id) +
              ': ' +
              chapterInfo[next].title
            }
          >
            <span className="eyebrow">
              UP NEXT · {chapterPosition(next, path.id).toUpperCase()}
            </span>
            <strong>{chapterInfo[next].title}</strong>
            <span className="chapter-end-why">
              {path.bridges[next] ?? chapterInfo[next].summary}
            </span>
            <span className="chapter-end-go">
              {statsLine(next) && <small>{statsLine(next)}</small>}
              <span>
                Continue <ArrowRight size={16} aria-hidden="true" />
              </span>
            </span>
          </a>
        )}
      </div>
    </aside>
  );
}

/** At the end of a chapter opened from outside the path: the way back to the reader's place. */
export function ReturnToPlace() {
  const returnTo = useJourney()?.returnTo;
  if (!returnTo) return null;
  return (
    <a
      className="return-to-place"
      href={'#' + (returnTo.anchor ?? returnTo.chapter)}
    >
      <CornerUpLeft size={16} aria-hidden="true" />
      <span>
        <small>BACK TO YOUR PLACE</small>
        {placeLabel(returnTo)}
      </span>
    </a>
  );
}

/** The end of a path, and the ways on from it. */
export function PathFinale({ path }: { path: ReaderPath }) {
  const journey = useJourney();
  const read = journey?.memory.read ?? [];
  const finished = path.chapters.filter((c) => read.includes(c)).length;
  const fromPrimer = path.edition === 'primer';
  const primerPath = readerPaths.find((p) => p.edition === 'primer')!;
  const primerDone = primerPath.chapters.every((c) => read.includes(c));
  const onward = readerPaths.filter(
    (p) => p.id !== path.id && !(p.edition === 'primer' && primerDone),
  );
  return (
    <section
      className="path-finale"
      id="path-finale"
      tabIndex={-1}
      aria-labelledby="path-finale-heading"
    >
      <span className="eyebrow">
        {fromPrimer ? 'THE END OF THE PRIMER' : 'THE END OF THIS ROUTE'}
      </span>
      <h2 id="path-finale-heading">
        {fromPrimer ? (
          <>
            Now open the paper,
            <br />
            and know <em>where to stand.</em>
          </>
        ) : (
          <>
            The same material,
            <br />
            <em>another way in.</em>
          </>
        )}
      </h2>
      <p className="path-finale-lead">
        {fromPrimer
          ? 'Every chapter of the primer maps onto sections of the paper. Each route below rearranges the paper’s thirteen chapters around a different question; your finished chapters stay checked on every one.'
          : 'Each route rearranges the paper’s thirteen chapters around a different question, and the primer teaches all of it from the ground up. Your finished chapters stay checked on every route.'}
      </p>
      <p className="path-finale-progress">
        <strong>
          {finished} of {path.chapters.length}
        </strong>{' '}
        {fromPrimer ? 'parts of the primer' : 'chapters of this route'} finished
        in this browser.
      </p>
      <ul className="path-finale-routes">
        {onward.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              onClick={() => journey?.choosePath(p.id, 'path-opening')}
              className={p.edition === 'primer' ? 'is-primer' : ''}
            >
              <span className="eyebrow">
                {p.edition === 'primer'
                  ? 'THE PRIMER · FROM THE GROUND UP'
                  : 'THE PAPER · ' + p.chapters.length + ' CHAPTERS'}
              </span>
              <strong>{p.label}</strong>
              <span>{p.description}</span>
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
