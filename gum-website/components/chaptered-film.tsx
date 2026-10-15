'use client';
import { useRef, useState, type ReactNode } from 'react';
import { Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMotion, useSceneClock } from '@/components/exhibit-motion';

/**
 * A chaptered film rendered live in the browser: scenes drawn as pure functions of
 * time, with chapter navigation, a scrubber, captions and a transcript. It needs no
 * video file, pauses when off-screen or when motion is paused, and steps frame by
 * frame under reduced motion.
 */
export type FilmScene = {
  id: string;
  label: string;
  duration: number;
  caption: string;
};

export function filmLengthOf(scenes: readonly FilmScene[]) {
  return scenes.reduce((sum, s) => sum + s.duration, 0);
}

export function sceneAtTime(scenes: readonly FilmScene[], time: number) {
  const length = filmLengthOf(scenes);
  const t = ((time % length) + length) % length;
  let start = 0;
  for (let i = 0; i < scenes.length; i++) {
    const end = start + scenes[i].duration;
    if (t < end)
      return { index: i, progress: (t - start) / scenes[i].duration, start };
    start = end;
  }
  return { index: scenes.length - 1, progress: 1, start };
}

export function ChapteredFilm({
  id,
  eyebrow,
  title,
  blurb,
  scenes,
  render,
}: {
  id: string;
  eyebrow: string;
  title: string;
  blurb: string;
  scenes: readonly FilmScene[];
  render: (index: number, progress: number) => ReactNode;
}) {
  const stage = useRef<HTMLElement>(null);
  const { enabled, reduced } = useMotion();
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [captions, setCaptions] = useState(true);
  const length = filmLengthOf(scenes);
  const running = useSceneClock(
    stage,
    (_, dt) => setTime((t) => (t + dt) % length),
    playing,
  );
  const current = sceneAtTime(scenes, time);
  const scene = scenes[current.index];
  const jump = (index: number) => {
    let start = 0;
    for (let i = 0; i < index; i++) start += scenes[i].duration;
    setTime(start + 0.001);
  };
  return (
    <section className="equation-film gum-film" id={id}>
      <div className="film-heading">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h3>{title}</h3>
        </div>
        <p>{blurb}</p>
      </div>
      <figure
        className="film-stage"
        ref={stage}
        aria-label={
          'Film chapter ' +
          (current.index + 1) +
          ': ' +
          scene.label +
          '. ' +
          scene.caption
        }
      >
        <svg viewBox="0 0 960 540" className="film-canvas" aria-hidden="true">
          <rect width="960" height="540" fill="#080b10" />
          {render(current.index, current.progress)}
          <text x="40" y="48" className="film-kicker">
            0{current.index + 1} / 0{scenes.length} ·{' '}
            {scene.label.toUpperCase()}
          </text>
        </svg>
        {captions && (
          <figcaption className="film-caption">{scene.caption}</figcaption>
        )}
      </figure>
      <div className="film-controls">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setPlaying((v) => !v)}
          disabled={!enabled}
          aria-pressed={playing && running}
          aria-label={
            reduced
              ? 'Playback disabled by your reduced-motion preference; use the chapter buttons'
              : playing
                ? 'Pause the film'
                : 'Play the film'
          }
        >
          {playing && running ? <Pause size={13} /> : <Play size={13} />}
          {reduced
            ? 'Reduced motion'
            : !enabled
              ? 'Motion paused'
              : playing
                ? 'Pause'
                : 'Play'}
        </Button>
        <input
          type="range"
          className="film-scrubber"
          min={0}
          max={length}
          step={0.1}
          value={time}
          onChange={(event) => setTime(Number(event.target.value))}
          aria-label="Film position in seconds"
          aria-valuetext={time.toFixed(0) + ' seconds, chapter ' + scene.label}
        />
        <span className="film-time">
          {time.toFixed(0).padStart(2, '0')} / {length} s
        </span>
        <label className="film-captions-toggle">
          <input
            type="checkbox"
            checked={captions}
            onChange={(e) => setCaptions(e.target.checked)}
          />{' '}
          Captions
        </label>
      </div>
      <div className="film-chapters">
        {scenes.map((s, i) => (
          <Button
            key={s.id}
            variant="ghost"
            aria-current={current.index === i ? 'step' : undefined}
            className={current.index === i ? 'is-current' : ''}
            onClick={() => jump(i)}
          >
            <span>0{i + 1}</span>
            {s.label}
          </Button>
        ))}
      </div>
      <details className="inline-depth">
        <summary>
          Read the film as text <span>+</span>
        </summary>
        <div className="film-transcript">
          {scenes.map((s, i) => (
            <p key={s.id}>
              <strong>
                0{i + 1} · {s.label}.
              </strong>{' '}
              {s.caption}
            </p>
          ))}
        </div>
      </details>
    </section>
  );
}
