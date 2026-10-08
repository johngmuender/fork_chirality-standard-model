'use client';
import type { MouseEvent } from 'react';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
} from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  DepthControl,
  chapterKicker,
  formatMinutes,
  inSentence,
  resumeTarget,
  sentenceCase,
  shortTitle,
  useJourney,
} from '@/components/journey';
import {
  chapterForAnchor,
  chapterInfo,
  isPathId,
  omittedChapters,
  primerBackMatterIntroduction,
  primerPartIntroductions,
  readerPaths,
  resolvePath,
  type ChapterId,
  type PathId,
  type ReaderPath,
} from '@/lib/reader-paths';
import {
  primer,
  primerEndId,
  primerIntroId,
  primerStats,
  primerTotals,
} from '@/lib/primer';
import { emptyMemory } from '@/lib/reading-memory';

const paperRoutes = readerPaths.filter((p) => p.edition === 'paper');
const primerPath = resolvePath('primer');

/** Where the reader chooses an edition and a route, and sees the whole of it before beginning. */
export function WaysIn({
  selected,
  onChoose,
}: {
  selected: PathId;
  onChoose: (id: PathId, destination?: string) => void;
}) {
  const path = resolvePath(selected);
  return (
    <section
      className="reader-paths"
      id="reader-paths"
      tabIndex={-1}
      aria-labelledby="reader-path-heading"
    >
      <div className="reader-path-intro">
        <div>
          <span className="eyebrow">FIND YOUR WAY IN</span>
          <h2 id="reader-path-heading">
            One material. <em>Two editions.</em>
          </h2>
        </div>
        <p>
          Start with the primer: it teaches the material from the ground up, and
          every chapter ends where the paper takes it further. The paper’s four
          routes rearrange its own edition around the questions you bring.
        </p>
      </div>
      <ToggleGroup
        className="reader-path-choices"
        value={[selected]}
        onValueChange={(values) => {
          const id = values[0];
          if (!isPathId(id)) return;
          // On narrow screens the opening sits below every choice; bring it into view.
          const opening = document.getElementById('path-opening');
          const below =
            !!opening &&
            opening.getBoundingClientRect().top > window.innerHeight - 140;
          onChoose(id, below ? 'path-opening' : undefined);
        }}
        aria-label="Choose a reader path"
      >
        <ToggleGroupItem value="primer" className="primer-choice">
          <span className="choice-kicker">
            ★ RECOMMENDED FIRST · THE GUM MATERIAL PRIMER
          </span>
          <strong>{primerPath.label}</strong>
          <span className="choice-description">{primerPath.description}</span>
          <span className="choice-quote">
            “What you need even more: patience with not-knowing, and a taste for
            the question ‘but how would anyone find out?’”
          </span>
          <span className="choice-stats">
            {primer.chapters.length} chapters · {primer.parts.length} parts ·{' '}
            {primerTotals.exhibits} exhibits · {primerTotals.problems} problems
            · about {formatMinutes(primerTotals.minutes)}
          </span>
        </ToggleGroupItem>
        <div className="paper-routes-intro" id="paper-routes">
          <span className="eyebrow">THE PAPER · THE INVERSE UMDEUTUNG</span>
          <h3>
            What material could keep quantum mechanics as its <em>books?</em>
          </h3>
          <p>
            In 1925 the electron’s trajectory was expelled from physics because
            it could not be measured. GUM readmits it on one condition: the
            material that carries it must be measurable instead. Grains with
            positions and orientations; light as their locked wave; a knot as a
            particle; and thirty places where the material intends to be
            measured, each with a printed way to lose.
          </p>
        </div>
        {paperRoutes.map((p) => (
          <ToggleGroupItem value={p.id} key={p.id} className="route-choice">
            <strong>{p.label}</strong>
            <span className="choice-description">{p.description}</span>
            <span className="choice-stats">
              {p.chapters.length} chapters · begins with{' '}
              {inSentence(shortTitle(p.chapters[0]))}
            </span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <PathOpening path={path} onChoose={onChoose} key={path.id} />
      <output className="sr-only">
        {path.label} selected. {path.chapters.length} chapters. The first
        chapter is {chapterInfo[path.chapters[0]].title}.
      </output>
    </section>
  );
}

function PathOpening({
  path,
  onChoose,
}: {
  path: ReaderPath;
  onChoose: (id: PathId, destination?: string) => void;
}) {
  const journey = useJourney();
  const memory = journey?.memory ?? emptyMemory;
  const depth = journey?.depth ?? path.depth;
  const depthLabel =
    path.depthLabels?.[depth] ??
    (depth === 'story'
      ? 'EQUATIONS FOLDED AWAY'
      : depth === 'math'
        ? 'MATHEMATICAL DETAILS OPEN'
        : 'INTERACTIVE EXPLANATIONS OPEN');
  const resume = resumeTarget(path, memory);
  const first = path.chapters[0];
  const fromPrimer = path.edition === 'primer';
  const current = resume ? chapterForAnchor(resume.anchor) : undefined;
  const choosePrimer = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onChoose('primer', 'path-opening');
  };
  return (
    <div
      className="path-opening"
      id="path-opening"
      tabIndex={-1}
      aria-labelledby="path-opening-title"
    >
      <div className="path-opening-copy">
        <span className="eyebrow">
          {fromPrimer
            ? 'THE PRIMER'
            : 'THE PAPER · ROUTE ' +
              (paperRoutes.indexOf(path) + 1) +
              ' OF ' +
              paperRoutes.length}{' '}
          · {depthLabel}
        </span>
        <h3 id="path-opening-title">{path.title}</h3>
        <p>{path.introduction}</p>
        <DepthControl />
        <div className="path-begin">
          <a className="begin-link" href={'#' + (resume?.anchor ?? first)}>
            {resume ? (
              <span>
                <small>CONTINUE WHERE YOU LEFT OFF</small>
                {resume.label}
              </span>
            ) : (
              <span>
                {fromPrimer
                  ? 'Begin with the letter'
                  : 'Begin with ' + inSentence(shortTitle(first))}
              </span>
            )}
            <ArrowRight size={19} aria-hidden="true" />
          </a>
          {resume && (
            <a className="begin-again" href={'#' + first}>
              Or start from the beginning
            </a>
          )}
        </div>
        {!fromPrimer && (
          <p className="path-primer-note">
            New to the material?{' '}
            <button type="button" onClick={choosePrimer}>
              Learn it from the ground up with the primer
            </button>
            . Every one of its chapters ends where this paper takes it further.
          </p>
        )}
        {fromPrimer && (
          <nav
            className="reader-path-stops"
            aria-label={path.label + ': landmarks'}
          >
            <span className="eyebrow">LANDMARKS</span>
            {path.stops.map((s, i) => (
              <a key={s.id} href={'#' + s.id}>
                <span>0{i + 1}</span>
                {s.label}
              </a>
            ))}
          </nav>
        )}
      </div>
      {fromPrimer ? (
        <CourseMap read={memory.read} current={current} />
      ) : (
        <RouteMap path={path} read={memory.read} current={current} />
      )}
    </div>
  );
}

type CourseRow = {
  key: string;
  mark: React.ReactNode;
  label: string;
  title: string;
  intro: string;
  chapters: ChapterId[];
};
const courseRows: CourseRow[] = [
  {
    key: 'front',
    mark: <BookOpen size={20} />,
    label: 'Front matter',
    title: 'A letter, and the rules',
    intro: chapterInfo[primerIntroId].summary,
    chapters: [primerIntroId],
  },
  ...primer.parts.map((part) => ({
    key: 'part-' + part.number,
    mark: part.numeral,
    label:
      part.chapters.length === 1
        ? 'Part ' + part.numeral + ' · Chapter ' + part.chapters[0]
        : 'Part ' +
          part.numeral +
          ' · Chapters ' +
          part.chapters[0] +
          '–' +
          part.chapters.at(-1),
    title: sentenceCase(part.title),
    intro: primerPartIntroductions[part.number],
    chapters: part.chapters.map((n) => ('primer-' + n) as ChapterId),
  })),
  {
    key: 'back',
    mark: <GraduationCap size={20} />,
    label: 'Back matter',
    title: 'Glossary, answer notes and the final project',
    intro: primerBackMatterIntroduction,
    chapters: [primerEndId],
  },
];

/** The primer as a course: front matter, eight parts, back matter, and how far the reader has come. */
function CourseMap({
  read,
  current,
}: {
  read: readonly ChapterId[];
  current: ChapterId | undefined;
}) {
  const finished = primerPath.chapters.filter((c) => read.includes(c));
  const left = primerPath.chapters
    .filter((c) => !read.includes(c))
    .reduce((sum, c) => sum + primerStats(c).minutes, 0);
  const here = current ?? (finished.length ? undefined : primerIntroId);
  return (
    <div className="course-map">
      <div className="course-map-head">
        <span className="eyebrow">THE COURSE</span>
        <span>
          {finished.length
            ? finished.length +
              ' of ' +
              primerPath.chapters.length +
              ' finished · about ' +
              formatMinutes(left) +
              ' to go'
            : 'About ' + formatMinutes(primerTotals.minutes) + ' in all'}
        </span>
      </div>
      <ol>
        {courseRows.map((row) => {
          const minutes = row.chapters.reduce(
            (sum, c) => sum + primerStats(c).minutes,
            0,
          );
          const done = row.chapters.every((c) => read.includes(c));
          const isHere = !!here && row.chapters.includes(here);
          return (
            <li
              key={row.key}
              className={
                (done ? 'is-finished' : '') + (isHere ? ' is-here' : '')
              }
            >
              <span className="course-mark" aria-hidden="true">
                {row.mark}
              </span>
              <div className="course-body">
                <a className="course-title" href={'#' + row.chapters[0]}>
                  <small>
                    {row.label} · {formatMinutes(minutes)}
                    {isHere && (
                      <span className="course-here">
                        {current ? ' · YOU ARE HERE' : ' · START HERE'}
                      </span>
                    )}
                  </small>
                  <span>{row.title}</span>
                  {done && <CheckCircle2 size={16} aria-label="finished" />}
                </a>
                <p>{row.intro}</p>
                {row.chapters.length > 1 && (
                  <span className="course-chapters">
                    {row.chapters.map((c) => (
                      <a
                        key={c}
                        href={'#' + c}
                        className={read.includes(c) ? 'is-read' : ''}
                        aria-label={
                          chapterKicker(c, 'primer') +
                          ': ' +
                          chapterInfo[c].title +
                          (read.includes(c) ? ', finished' : '')
                        }
                        title={chapterInfo[c].title}
                      >
                        {c.replace('primer-', '')}
                      </a>
                    ))}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/** A paper route as numbered steps, its landmarks marked and its folded background named. */
function RouteMap({
  path,
  read,
  current,
}: {
  path: ReaderPath;
  read: readonly ChapterId[];
  current: ChapterId | undefined;
}) {
  const omitted = omittedChapters(path.id);
  const finished = path.chapters.filter((c) => read.includes(c)).length;
  return (
    <div className="course-map route-map">
      <div className="course-map-head">
        <span className="eyebrow">
          THE ROUTE · {path.chapters.length} CHAPTERS
        </span>
        <span>
          {finished
            ? finished + ' of ' + path.chapters.length + ' finished'
            : 'Landmarks marked'}
        </span>
      </div>
      <ol>
        {path.chapters.map((c, i) => {
          const stop = path.stops.find((s) => s.id === c);
          return (
            <li
              key={c}
              className={
                (read.includes(c) ? 'is-finished' : '') +
                (current === c ? ' is-here' : '')
              }
            >
              <a href={'#' + c} className="route-step">
                <span className="route-number">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="route-title">
                  {chapterInfo[c].title}
                  {stop && <small>{stop.label}</small>}
                </span>
                {read.includes(c) && (
                  <CheckCircle2 size={16} aria-label="finished" />
                )}
              </a>
            </li>
          );
        })}
      </ol>
      {omitted.length > 0 && (
        <p className="route-background">
          Folded at the end, one link away:{' '}
          {omitted.map((c) => chapterInfo[c].title).join('; ')}.
        </p>
      )}
    </div>
  );
}
