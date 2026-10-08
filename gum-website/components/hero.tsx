'use client';
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from 'react';
import { ArrowDown, ArrowRight, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AmbientExhibit, useMotion } from '@/components/exhibit-motion';
import {
  formatMinutes,
  goTo,
  placeLabel,
  useJourney,
} from '@/components/journey';
import type { PathId } from '@/lib/reader-paths';
import { resumable } from '@/lib/reading-memory';
import { paperDate } from '@/lib/gum-site';
import {
  primer,
  primerChapters,
  primerIntroId,
  primerTotals,
} from '@/lib/primer';

/**
 * The hero field: oriented grains on a disc, twisted into a helix along the vertical axis.
 * Each grain turns in place at one slow rate; the twist makes the turning read as a helix
 * advancing through the field. Pure CSS motion, paused by the page-wide motion control.
 */
function HeroField({ spinning }: { spinning: boolean }) {
  const grains = useMemo(() => {
    const out: { x: number; y: number; r: number; angle: number }[] = [];
    for (let i = 0; i < 13; i++)
      for (let j = 0; j < 13; j++) {
        const x = 61 + i * 36.5,
          y = 61 + j * 36.5;
        const dx = x - 280,
          dy = y - 280;
        const r = Math.hypot(dx, dy);
        if (r > 246) continue;
        out.push({ x, y, r, angle: (y / 560) * 540 + (dx / 560) * 70 });
      }
    return out;
  }, []);
  return (
    <svg
      viewBox="0 0 560 560"
      className={'root-diagram hero-field ' + (spinning ? 'spinning' : '')}
      aria-label="A field of oriented grains twisted into a helix, the structured vacuum of the GUM material, turning slowly"
    >
      <title>
        Oriented grains arranged with a helical twist along the vertical axis.
        Blue grains sit near the axis, copper grains further out.
      </title>
      <circle cx="280" cy="280" r="252" className="root-guide" />
      <circle cx="280" cy="280" r="164" className="root-guide" />
      <circle cx="280" cy="280" r="73" className="root-guide" />
      <path d="M280 13V547 M13 280H547" className="root-axis" />
      {grains.map((g, i) => (
        <g key={i} transform={`translate(${g.x},${g.y})`}>
          <g
            className="hero-grain"
            style={{ '--angle': g.angle + 'deg' } as CSSProperties}
          >
            <line
              x1="-11"
              y1="0"
              x2="11"
              y2="0"
              stroke={g.r < 120 ? '#8bbcff' : '#f1a17d'}
              strokeWidth={g.r < 120 ? 2.4 : 1.8}
              strokeLinecap="round"
              opacity={0.95 - g.r / 520}
            />
            <circle r="2" fill="#e4edf8" opacity="0.55" />
          </g>
        </g>
      ))}
    </svg>
  );
}

/** The opening screen: the primer's question first, with the way back for a returning reader. */
export function Hero() {
  const journey = useJourney();
  const { enabled: motionEnabled } = useMotion();
  const [spin, setSpin] = useState(true);
  const [visible, setVisible] = useState(true);
  const art = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    if (art.current) observer.observe(art.current);
    return () => observer.disconnect();
  }, []);
  const place =
    journey && resumable(journey.memory.place) ? journey.memory.place : null;
  const go = (id: string, path?: PathId) => (event: MouseEvent) => {
    if (!journey) return;
    event.preventDefault();
    goTo(journey, id, path);
  };
  return (
    <section className="hero" id="beginning" tabIndex={-1}>
      <div className="hero-kicker">
        <span className="live-dot" /> AN INTERACTIVE EDITION OF A WORKING DRAFT,
        AND THE PRIMER THAT TEACHES IT{' '}
        <span className="edition">GUM · REVISION OF {paperDate}</span>
      </div>
      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">
            THE GUM MATERIAL PRIMER · A FIRST BOOK ON THE GUM PROGRAM
          </p>
          <h1>
            What keeps
            <br />
            the <em>books?</em>
          </h1>
          <p className="hero-deck">
            This primer teaches you a theory that might be wrong — and that has
            already been caught being wrong, by itself, in print. Sixteen
            chapters for honors high-school and first-year readers, with
            exhibits you can turn by hand; each one ends where the paper takes
            it further.
          </p>
          <div className="hero-actions">
            {place ? (
              <a
                className="primary-link resume-link"
                href={'#' + (place.anchor ?? place.chapter)}
                onClick={go(place.anchor ?? place.chapter, place.path)}
              >
                <span>
                  <small>CONTINUE WHERE YOU LEFT OFF</small>
                  {placeLabel(place)}
                </span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            ) : (
              <a
                className="primary-link"
                href={'#' + primerIntroId}
                onClick={go(primerIntroId, 'primer')}
              >
                Begin with the letter <ArrowDown size={18} aria-hidden="true" />
              </a>
            )}
            {place && (
              <a
                className="secondary-link"
                href={'#' + primerIntroId}
                onClick={go(primerIntroId, 'primer')}
              >
                Or begin the primer again with its letter
              </a>
            )}
            <a
              className="secondary-link"
              href="#paper-routes"
              onClick={go('paper-routes')}
            >
              Already fluent in physics? Go straight to the paper{' '}
              <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
          <ul className="hero-stats" aria-label="The primer at a glance">
            <li>
              <strong>{primerChapters.length}</strong> chapters
            </li>
            <li>
              <strong>{primer.parts.length}</strong> parts
            </li>
            <li>
              <strong>{primerTotals.exhibits}</strong> exhibits
            </li>
            <li>
              <strong>{primerTotals.problems}</strong> problems
            </li>
            <li>
              about <strong>{formatMinutes(primerTotals.minutes)}</strong>
            </li>
          </ul>
        </div>
        <div className="hero-art" ref={art}>
          <div className="hero-halo" />
          <AmbientExhibit>
            <HeroField spinning={spin && visible && motionEnabled} />
          </AmbientExhibit>
          <div className="root-overlay">
            <span>P̃</span>
            <small>
              <span>SU(2) TEXTURE</span>
              <span>22–25 μm PITCH</span>
            </small>
          </div>
          <div className="art-caption">
            <span>ORIENTED GRAINS · HELICAL VACUUM</span>
            <Button
              variant="ghost"
              size="sm"
              disabled={!motionEnabled}
              aria-label={
                !motionEnabled
                  ? 'Grain motion paused by motion settings'
                  : spin
                    ? 'Pause the grains'
                    : 'Turn the grains'
              }
              onClick={() => setSpin(!spin)}
            >
              {spin && motionEnabled ? <Pause size={13} /> : <Play size={13} />}
              <span>
                {!motionEnabled ? 'Motion paused' : spin ? 'Pause' : 'Turn'}
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className="hero-footer">
        <span>A MATERIAL PROPOSAL, GRADED AND STAKED</span>
        <span className="hero-result-chain">
          <span>ONE MATERIAL</span>
          <span>
            <span className="footer-arrow">→</span> FOUR LEVELS OF DESCRIPTION
          </span>
          <span>
            <span className="footer-arrow">→</span> THIRTY STAKES
          </span>
        </span>
      </div>
    </section>
  );
}
