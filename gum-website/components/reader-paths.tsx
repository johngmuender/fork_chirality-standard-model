'use client';
import {
  Children,
  isValidElement,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMotion } from '@/components/exhibit-motion';
import { navigateEvent } from '@/components/journey';
import { ChapterEnd, PathFinale, ReturnToPlace } from '@/components/path-guide';
import {
  chapterInfo,
  chapterForAnchor,
  decodeAnchor,
  foreignChapters,
  omittedChapters,
  resolvePath,
  type ChapterId,
  type PathId,
} from '@/lib/reader-paths';

export function PathChapter({
  children,
}: {
  chapter: ChapterId;
  children: ReactNode;
}) {
  return <>{children}</>;
}

function OptionalChapter({
  chapter,
  expanded,
  onToggle,
  children,
}: {
  chapter: ChapterId;
  expanded: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="optional-chapter">
      <Button
        variant="ghost"
        className="optional-heading"
        aria-expanded={expanded}
        aria-controls={'optional-' + chapter}
        onClick={onToggle}
      >
        <span>
          <strong>{chapterInfo[chapter].title}</strong>
          <small>{chapterInfo[chapter].summary}</small>
        </span>
        {expanded ? <Minus size={20} /> : <Plus size={20} />}
      </Button>
      <div id={'optional-' + chapter}>
        {expanded ? children : null}
        {expanded && <ReturnToPlace />}
      </div>
    </div>
  );
}

export function PathFlow({
  selected,
  children,
}: {
  selected: PathId;
  children: ReactNode;
}) {
  const path = resolvePath(selected);
  const { enabled } = useMotion();
  const [expanded, setExpanded] = useState<ChapterId[]>([]);
  const [listForeign, setListForeign] = useState(false);
  const [destination, setDestination] = useState('');
  const chapters = new Map(
    Children.toArray(children)
      .filter(isValidElement)
      .map((child) => {
        const item = child as React.ReactElement<{ chapter: ChapterId }>;
        return [item.props.chapter, item];
      }),
  );
  const omitted = omittedChapters(selected);
  const foreign = foreignChapters(selected);
  const toggle = (chapter: ChapterId) =>
    setExpanded((old) =>
      old.includes(chapter)
        ? old.filter((c) => c !== chapter)
        : [...old, chapter],
    );
  useEffect(() => {
    const follow = (id: string) => {
      const chapter = chapterForAnchor(id);
      if (!chapter) return false;
      if (!path.chapters.includes(chapter))
        setExpanded((old) => (old.includes(chapter) ? old : [...old, chapter]));
      setDestination(id);
      return true;
    };
    const click = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const link =
        event.target instanceof Element
          ? event.target.closest('a[href^="#"]')
          : null;
      if (!link) return;
      const id = decodeAnchor(link.getAttribute('href')!);
      if (follow(id)) {
        event.preventDefault();
        history.pushState(history.state, '', '#' + encodeURIComponent(id));
      }
    };
    const hash = () => {
      if (location.hash) follow(decodeAnchor(location.hash));
    };
    // Programmatic navigation also reaches landmarks outside the chapters,
    // such as the path's opening.
    const navigate = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (!follow(id)) {
        if (!document.getElementById(id)) return;
        setDestination(id);
      }
      history.pushState(history.state, '', '#' + encodeURIComponent(id));
    };
    document.addEventListener('click', click);
    window.addEventListener('hashchange', hash);
    window.addEventListener(navigateEvent, navigate);
    hash();
    return () => {
      document.removeEventListener('click', click);
      window.removeEventListener('hashchange', hash);
      window.removeEventListener(navigateEvent, navigate);
    };
  }, [path]);
  useEffect(() => {
    if (!destination) return;
    const frame = requestAnimationFrame(() => {
      const element = document.getElementById(destination);
      if (!element) return;
      let parent: HTMLElement | null = element;
      while (parent) {
        if (parent instanceof HTMLDetailsElement) parent.open = true;
        parent = parent.parentElement;
      }
      element.tabIndex = -1;
      element.focus({ preventScroll: true });
      // Glide to nearby anchors; jump to far ones, which would otherwise take
      // seconds of chapters streaming past.
      const near =
        Math.abs(element.getBoundingClientRect().top) <
        window.innerHeight * 1.5;
      element.scrollIntoView({
        behavior: enabled && near ? 'smooth' : 'instant',
        block: 'start',
      });
      setDestination('');
    });
    return () => cancelAnimationFrame(frame);
  }, [destination, expanded, enabled]);
  const foreignOpen = foreign.filter((chapter) => expanded.includes(chapter));
  return (
    <div className="path-flow" data-reader-path={selected}>
      {path.chapters.map((chapter) => (
        <div className="path-chapter" data-chapter={chapter} key={chapter}>
          {chapters.get(chapter)}
          <ChapterEnd chapter={chapter} path={path} />
        </div>
      ))}
      <PathFinale path={path} />
      {omitted.length > 0 && (
        <section className="path-further" aria-labelledby="further-heading">
          <span className="eyebrow">OPEN ANOTHER PART OF THE STORY</span>
          <h2 id="further-heading">The background is still here.</h2>
          <p>
            These chapters sit outside your chosen route. Open any of them
            without changing paths.
          </p>
          {omitted.map((chapter) => (
            <OptionalChapter
              key={chapter}
              chapter={chapter}
              expanded={expanded.includes(chapter)}
              onToggle={() => toggle(chapter)}
            >
              {chapters.get(chapter)}
            </OptionalChapter>
          ))}
        </section>
      )}
      {foreign.length > 0 && (
        <section
          className="path-further path-foreign"
          aria-labelledby="foreign-heading"
        >
          <span className="eyebrow">
            {path.edition === 'primer'
              ? 'THE PAPER’S EDITION'
              : 'THE PRIMER’S EDITION'}
          </span>
          <h2 id="foreign-heading">
            {path.edition === 'primer'
              ? 'The paper’s instruments are one link away.'
              : 'The primer teaches the same material from the ground up.'}
          </h2>
          <p>
            {path.edition === 'primer'
              ? 'Wherever the primer points at a theorem, a table or a stake, the paper’s chapter opens here without leaving this path.'
              : 'Sixteen chapters for honors high-school and first-year readers, with tags, problems and corrections boxes. Open one here, or take the primer as your path.'}
          </p>
          <Button
            variant="ghost"
            className="foreign-toggle"
            aria-expanded={listForeign}
            onClick={() => setListForeign((v) => !v)}
          >
            {listForeign
              ? 'Hide the list'
              : `List the ${foreign.length} chapters`}
            {listForeign ? <Minus size={16} /> : <Plus size={16} />}
          </Button>
          {foreign
            .filter((chapter) => listForeign || foreignOpen.includes(chapter))
            .map((chapter) => (
              <OptionalChapter
                key={chapter}
                chapter={chapter}
                expanded={expanded.includes(chapter)}
                onToggle={() => toggle(chapter)}
              >
                {chapters.get(chapter)}
              </OptionalChapter>
            ))}
        </section>
      )}
    </div>
  );
}
