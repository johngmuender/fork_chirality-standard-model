'use client';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CornerUpLeft,
  FileText,
  ListTree,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DepthControl,
  chapterKicker,
  chapterMinutes,
  chapterPosition,
  formatMinutes,
  navigateTo,
  placeLabel,
  sentenceCase,
  shortTitle,
  useJourney,
  type Journey,
} from '@/components/journey';
import {
  chapterInfo,
  companionChapters,
  editionOf,
  omittedChapters,
  readerPaths,
  resolvePath,
  type ChapterId,
  type ReaderPath,
} from '@/lib/reader-paths';
import { primer, primerEndId, primerIntroId } from '@/lib/primer';

const isChapter = (id: string | undefined): id is ChapterId =>
  !!id && Object.hasOwn(chapterInfo, id);
const goToLandmark = (id: string) => (event: MouseEvent) => {
  event.preventDefault();
  navigateTo(id);
};

/**
 * The sticky reading bar: where the reader is on their path, the way back when
 * they have stepped off it, the next and previous chapters, and the contents.
 */
export function ReadingBar({ draft }: { draft: string }) {
  const journey = useJourney();
  const rail = useRef<HTMLDivElement>(null);
  const active = journey?.active;
  const pathId = journey?.pathId;
  useEffect(() => {
    if (!active) return;
    const segment = rail.current?.querySelector<HTMLElement>('[data-current]');
    const chapter = document.getElementById(active);
    if (!segment || !chapter) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const box = chapter.getBoundingClientRect();
      const span = Math.max(1, box.height - window.innerHeight * 0.5);
      const progress = (window.innerHeight * 0.3 - box.top) / span;
      segment.style.setProperty(
        '--fill',
        Math.min(1, Math.max(0, progress)).toFixed(3),
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [active, pathId]);
  if (!journey) return null;
  const path = resolvePath(journey.pathId);
  const current = isChapter(active) ? active : path.chapters[0];
  const index = path.chapters.indexOf(current);
  const previous = index > 0 ? path.chapters[index - 1] : undefined;
  const next =
    index >= 0 && index + 1 < path.chapters.length
      ? path.chapters[index + 1]
      : undefined;
  const read = journey.memory.read;
  const returnTo = journey.returnTo;
  return (
    <nav
      className="reading-bar"
      aria-label="Reading position"
      data-edition={path.edition}
    >
      <div className="reading-bar-row">
        <ContentsDrawer journey={journey} path={path} current={current} />
        <div className="reading-where">
          <small>{chapterPosition(current, path.id)}</small>
          <span>{chapterInfo[current].title}</span>
        </div>
        {returnTo ? (
          <a
            className="reading-return"
            href={'#' + (returnTo.anchor ?? returnTo.chapter)}
            title={placeLabel(returnTo)}
          >
            <CornerUpLeft size={16} aria-hidden="true" />
            <span>
              Back to{' '}
              {chapterKicker(returnTo.chapter, returnTo.path).toLowerCase()}
            </span>
          </a>
        ) : (
          <div className="reading-steps">
            {previous ? (
              <a
                href={'#' + previous}
                aria-label={'Previous: ' + chapterInfo[previous].title}
                title={chapterInfo[previous].title}
              >
                <ArrowLeft size={17} aria-hidden="true" />
              </a>
            ) : (
              <a
                href="#path-opening"
                onClick={goToLandmark('path-opening')}
                aria-label="Back to the opening of this path"
                title="The opening of this path"
              >
                <ArrowLeft size={17} aria-hidden="true" />
              </a>
            )}
            {next ? (
              <a
                className="reading-next"
                href={'#' + next}
                aria-label={'Next: ' + chapterInfo[next].title}
                title={chapterInfo[next].title}
              >
                <span>Next</span>
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            ) : (
              <a
                className="reading-next"
                href="#path-finale"
                onClick={goToLandmark('path-finale')}
                aria-label="Where to go after this path"
              >
                <span>Where next</span>
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            )}
          </div>
        )}
        <a
          className="reading-draft"
          href={draft}
          target="_blank"
          rel="noreferrer"
        >
          <FileText size={15} aria-hidden="true" />
          <span>Draft</span>
        </a>
      </div>
      <div className="reading-rail" ref={rail} aria-hidden="true">
        {path.chapters.map((c) => (
          <a
            key={c}
            href={'#' + c}
            tabIndex={-1}
            aria-label={chapterInfo[c].title}
            title={chapterKicker(c, path.id) + ' · ' + chapterInfo[c].title}
            className={read.includes(c) ? 'is-read' : undefined}
            data-current={c === current ? '' : undefined}
            style={{ flexGrow: chapterMinutes(c) ?? 1 }}
          />
        ))}
      </div>
    </nav>
  );
}

function ContentsDrawer({
  journey,
  path,
  current,
}: {
  journey: Journey;
  path: ReaderPath;
  current: ChapterId;
}) {
  const [open, setOpen] = useState(false);
  const [forgotten, setForgotten] = useState(false);
  // Navigation waits until the drawer has closed, so its focus return and
  // exit animation cannot pull the page back.
  const pending = useRef<(() => void) | null>(null);
  const after = (action: () => void) => (event: MouseEvent) => {
    event.preventDefault();
    pending.current = action;
    setOpen(false);
  };
  const read = journey.memory.read;
  const finished = path.chapters.filter((c) => read.includes(c)).length;
  const minutesLeft = path.chapters
    .filter((c) => !read.includes(c))
    .reduce((sum, c) => sum + (chapterMinutes(c) ?? 0), 0);
  const fromPrimer = path.edition === 'primer';
  const companions = companionChapters(current);
  const omitted = omittedChapters(path.id);
  const chapterLink = (c: ChapterId, number: string) => (
    <a
      href={'#' + c}
      onClick={after(() => navigateTo(c))}
      aria-current={c === current ? 'location' : undefined}
      className={read.includes(c) ? 'is-read' : undefined}
    >
      <span className="toc-number">{number}</span>
      <span className="toc-title">{chapterInfo[c].title}</span>
      <small>
        {chapterMinutes(c) ? formatMinutes(chapterMinutes(c)!) : ''}
      </small>
      {read.includes(c) && <CheckCircle2 size={15} aria-label="finished" />}
    </a>
  );
  return (
    <Sheet
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (next) setForgotten(false);
      }}
      modal="trap-focus"
      onOpenChangeComplete={(isOpen) => {
        if (isOpen) return;
        const action = pending.current;
        pending.current = null;
        action?.();
      }}
    >
      <SheetTrigger className="contents-trigger">
        <ListTree size={17} aria-hidden="true" />
        <span>Contents</span>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="contents-drawer"
        finalFocus={() => !pending.current}
      >
        <SheetHeader className="contents-head">
          <span className="eyebrow">
            {fromPrimer
              ? 'THE GUM MATERIAL PRIMER'
              : 'A ROUTE THROUGH THE PAPER'}
          </span>
          <SheetTitle className="contents-title">{path.label}</SheetTitle>
          <SheetDescription className="contents-summary">
            {finished} of {path.chapters.length} finished
            {fromPrimer && minutesLeft
              ? ' · about ' + formatMinutes(minutesLeft) + ' to go'
              : ''}
          </SheetDescription>
          <span className="contents-progress" aria-hidden="true">
            <span
              style={{
                width: (100 * finished) / path.chapters.length + '%',
              }}
            />
          </span>
        </SheetHeader>
        <div className="contents-body">
          <DepthControl className="contents-depth" />
          <nav aria-label="Chapters of this path" className="contents-toc">
            {fromPrimer ? (
              <>
                <p className="toc-group">FRONT MATTER</p>
                <ol>
                  <li>{chapterLink(primerIntroId, '·')}</li>
                </ol>
                {primer.parts.map((part) => (
                  <div key={part.number}>
                    <p className="toc-group">
                      PART {part.numeral} · {sentenceCase(part.title)}
                    </p>
                    <ol>
                      {part.chapters.map((n) => (
                        <li key={n}>
                          {chapterLink(('primer-' + n) as ChapterId, String(n))}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
                <p className="toc-group">BACK MATTER</p>
                <ol>
                  <li>{chapterLink(primerEndId, '·')}</li>
                </ol>
              </>
            ) : (
              <ol>
                {path.chapters.map((c, i) => (
                  <li key={c}>
                    {chapterLink(c, String(i + 1).padStart(2, '0'))}
                  </li>
                ))}
              </ol>
            )}
            {omitted.length > 0 && (
              <>
                <p className="toc-group">BACKGROUND · FOLDED ON THIS ROUTE</p>
                <ol>
                  {omitted.map((c) => (
                    <li key={c}>{chapterLink(c, '+')}</li>
                  ))}
                </ol>
              </>
            )}
          </nav>
          {companions.length > 0 && (
            <section className="contents-section">
              <p className="toc-group">
                {editionOf(current) === 'primer'
                  ? 'GO DEEPER IN THE PAPER · ' +
                    shortTitle(current).toUpperCase()
                  : 'LEARN IT FROM THE GROUND UP · ' +
                    shortTitle(current).toUpperCase()}
              </p>
              <ul>
                {companions.map((c) => (
                  <li key={c}>
                    <a
                      href={'#' + c}
                      onClick={after(() => navigateTo(c))}
                      className="contents-companion"
                    >
                      <span>
                        {editionOf(c) === 'primer'
                          ? chapterKicker(c, 'primer')
                          : 'The paper'}
                      </span>
                      {chapterInfo[c].title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <section className="contents-section">
            <p className="toc-group">OTHER WAYS IN</p>
            <ul className="contents-paths">
              {readerPaths
                .filter((p) => p.id !== path.id)
                .map((p) => (
                  <li key={p.id}>
                    <button
                      type="button"
                      onClick={after(() =>
                        journey.choosePath(p.id, 'path-opening'),
                      )}
                    >
                      <span>
                        {p.edition === 'primer'
                          ? 'THE PRIMER'
                          : 'THE PAPER · ' + p.chapters.length + ' CHAPTERS'}
                      </span>
                      {p.label}
                    </button>
                  </li>
                ))}
            </ul>
          </section>
          <section className="contents-section contents-memory">
            <p>
              Your place and the chapters you finish are kept in this browser
              only.
            </p>
            <button
              type="button"
              onClick={() => {
                journey.forget();
                setForgotten(true);
              }}
              disabled={!read.length && !journey.memory.place}
            >
              {forgotten ? 'Forgotten' : 'Forget my place'}
            </button>
          </section>
        </div>
      </SheetContent>
    </Sheet>
  );
}
