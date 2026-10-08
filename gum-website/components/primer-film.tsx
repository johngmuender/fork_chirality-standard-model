'use client';
import {
  ChapteredFilm,
  filmLengthOf,
  sceneAtTime,
  type FilmScene,
} from '@/components/chaptered-film';
import { riverRace } from '@/lib/primer-physics';

/** The primer in eight scenes: one STEP-UP analogy per part, drawn live. */
export const primerScenes: readonly FilmScene[] = [
  {
    id: 'river',
    label: 'The river',
    duration: 8,
    caption:
      'A swimmer crossing a river and back always beats one going upstream and back, if there is a current. Michelson and Morley raced light and got a perfect tie.',
  },
  {
    id: 'necklace',
    label: 'The necklace',
    duration: 8,
    caption:
      'Shake a necklace of beads above its band edge and a wave travels. Drive it below the edge and only a dying skin forms: the halo of every particle.',
  },
  {
    id: 'vanes',
    label: 'Weathervanes',
    duration: 8,
    caption:
      'One weathervane per grain. E is how fast each vane swings; B is how much neighbours disagree. Faraday’s law is a law of looking.',
  },
  {
    id: 'cone',
    label: 'The cone',
    duration: 8,
    caption:
      'Cut a wedge from a disc and tape it: a cone. The missing angle is locked in, sits at the tip, and bends lines far away. Charge is a cone.',
  },
  {
    id: 'hotel',
    label: 'The hotel',
    duration: 8,
    caption:
      'A hotel with N rooms cannot give 2ⁿ guests private rooms once 2ⁿ exceeds N. The states are the guests; the material’s knobs are the rooms.',
  },
  {
    id: 'washboard',
    label: 'The washboard',
    duration: 8,
    caption:
      'Roll a spinning top over a washboard. When the bumps pass at its spin rate it wobbles wildly: a clock you can hit, at 80.87 MeV/c in silicon.',
  },
  {
    id: 'pendulum',
    label: 'The pendulum',
    duration: 8,
    caption:
      'Drag a pendulum with a hand that slows down. It lags, and the stored energy fades, never negative. Dark energy as a lag that never crosses −1.',
  },
  {
    id: 'corkscrew',
    label: 'The corkscrew',
    duration: 8,
    caption:
      'Gloves in still air swing as mirror images. In a corkscrew breeze they need not. One bit of handedness, checked by parity.',
  },
];
export const primerFilmLength = filmLengthOf(primerScenes);
export const primerSceneAt = (time: number) => sceneAtTime(primerScenes, time);

const clamp = (p: number) => Math.max(0, Math.min(1, p));

function Scene({ index, progress }: { index: number; progress: number }) {
  const p = clamp(progress);
  if (index === 0) {
    const race = riverRace(5, 4, 100);
    const t = p * race.along;
    const crossY =
      t < race.cross / 2
        ? 430 - (300 * t) / (race.cross / 2)
        : t < race.cross
          ? 130 + (300 * (t - race.cross / 2)) / (race.cross / 2)
          : 430;
    const alongX =
      t < 100 ? 200 + 4 * t : 600 - (400 * (t - 100)) / (race.along - 100);
    return (
      <g>
        <rect x="100" y="130" width="760" height="300" fill="#10243a" />
        {Array.from({ length: 12 }, (_, i) => (
          <text
            key={i}
            x={110 + ((i * 70 + p * 400) % 760)}
            y={165 + (i % 4) * 70}
            fill="#4f6f8f"
            fontSize="22"
          >
            →
          </text>
        ))}
        <line
          x1="480"
          y1="430"
          x2="480"
          y2="130"
          stroke="#8bbcff"
          strokeDasharray="6 8"
        />
        <circle cx="480" cy={crossY} r="9" fill="#8bbcff" />
        <line
          x1="200"
          y1="280"
          x2="600"
          y2="280"
          stroke="#f1a17d"
          strokeDasharray="6 8"
        />
        <circle cx={alongX} cy="280" r="9" fill="#f1a17d" />
        <text x="480" y="470" textAnchor="middle" className="film-label">
          across and back: {Math.min(t, race.cross).toFixed(0)} s of{' '}
          {race.cross.toFixed(1)} s
        </text>
        <text x="480" y="500" textAnchor="middle" className="film-label">
          upstream and back: {t.toFixed(0)} s of {race.along.toFixed(1)} s
        </text>
      </g>
    );
  }
  if (index === 1) {
    const beads = Array.from({ length: 22 }, (_, i) => 90 + i * 37);
    return (
      <g>
        {beads.map((x, i) => (
          <circle
            key={'a' + i}
            cx={x}
            cy={180 + 34 * Math.sin(i / 1.6 - p * 18)}
            r={i % 2 ? 7 : 11}
            fill={i % 2 ? '#8bbcff' : '#c9d8ea'}
          />
        ))}
        {beads.map((x, i) => (
          <circle
            key={'b' + i}
            cx={x}
            cy={380 + 60 * Math.exp(-i / 4) * Math.sin(p * 18)}
            r={i % 2 ? 7 : 11}
            fill={i % 2 ? '#f1a17d' : '#c9d8ea'}
          />
        ))}
        <text x="480" y="120" textAnchor="middle" className="film-equation">
          above the edge: a travelling wave
        </text>
        <text x="480" y="470" textAnchor="middle" className="film-equation">
          below the edge: a skin, e^(−x/λ)
        </text>
      </g>
    );
  }
  if (index === 2) {
    const showB = p > 0.5;
    return (
      <g>
        {Array.from({ length: 6 }, (_, i) =>
          Array.from({ length: 12 }, (_, j) => {
            const phase = j / 1.8 - p * 16;
            const angle = 40 * Math.sin(phase);
            const rate = Math.abs(Math.cos(phase));
            const disagreement = Math.abs(
              Math.sin(phase + 0.3) - Math.sin(phase),
            );
            const tint = showB
              ? `rgba(241,161,125,${0.25 + 2.2 * disagreement})`
              : `rgba(139,188,255,${0.25 + 0.75 * rate})`;
            return (
              <g
                key={i + '-' + j}
                transform={`translate(${130 + j * 64},${110 + i * 60}) rotate(${angle})`}
              >
                <line
                  x1="-16"
                  y1="0"
                  x2="16"
                  y2="0"
                  stroke={tint}
                  strokeWidth="3"
                />
                <path
                  d="M10 -4 L16 0 L10 4"
                  fill="none"
                  stroke={tint}
                  strokeWidth="2"
                />
              </g>
            );
          }),
        )}
        <text x="480" y="500" textAnchor="middle" className="film-equation">
          {showB
            ? 'B: how much neighbours disagree'
            : 'E: how fast each vane swings'}
        </text>
      </g>
    );
  }
  if (index === 3) {
    const wedge = 90 * (1 - 0.9 * p);
    const a = (wedge * Math.PI) / 360;
    return (
      <g>
        <g transform="translate(300,270)">
          <path
            d={`M0 0 L${150 * Math.cos(-Math.PI / 2 + a)} ${150 * Math.sin(-Math.PI / 2 + a)} A150 150 0 1 0 ${150 * Math.cos(-Math.PI / 2 - a)} ${150 * Math.sin(-Math.PI / 2 - a)} Z`}
            fill="#e8e5dd"
            stroke="#1b2430"
          />
          {[-90, -50, -10, 30, 70].map((y) => (
            <line
              key={y}
              x1="-150"
              y1={y}
              x2="150"
              y2={y}
              stroke="#4f6f8f"
              strokeWidth="1"
              opacity="0.8"
            />
          ))}
        </g>
        <g transform="translate(680,300)">
          <path
            d={`M0 ${-160 * (1 - 0.35 * p)} L-120 60 Q0 ${110} 120 60 Z`}
            fill="#e8e5dd"
            stroke="#1b2430"
          />
          <circle cx="0" cy={-160 * (1 - 0.35 * p)} r="6" fill="#b5693b" />
          <text
            x="0"
            y="110"
            textAnchor="middle"
            fill="#1b2430"
            fontSize="16"
            fontFamily="Georgia, serif"
            fontStyle="italic"
          >
            tip: the charge
          </text>
        </g>
        <text x="480" y="500" textAnchor="middle" className="film-equation">
          wedge {wedge.toFixed(0)}° removed, locked in by the tape
        </text>
      </g>
    );
  }
  if (index === 4) {
    const n = Math.min(7, 1 + Math.floor(p * 7));
    const guests = 2 ** n;
    return (
      <g>
        {Array.from({ length: 64 }, (_, i) => (
          <rect
            key={i}
            x={140 + (i % 16) * 42}
            y={120 + Math.floor(i / 16) * 42}
            width="34"
            height="34"
            rx="4"
            fill={i < guests ? '#183c36' : '#122235'}
            stroke={i < guests ? '#9acbb9' : '#365271'}
          />
        ))}
        {Array.from({ length: Math.max(0, guests - 64) }, (_, i) => (
          <circle
            key={i}
            cx={150 + (i % 32) * 21}
            cy={330 + Math.floor(i / 32) * 22}
            r="6"
            fill="#f1a17d"
          />
        ))}
        <text x="480" y="470" textAnchor="middle" className="film-equation">
          {n} qubits · {guests} guests · 64 rooms
          {guests > 64 ? ' · the hotel is full' : ''}
        </text>
      </g>
    );
  }
  if (index === 5) {
    const bumpRate = 0.4 + p;
    const resonance = Math.exp(-((bumpRate - 1) ** 2) / 0.02);
    const x = 120 + p * 720;
    return (
      <g>
        {Array.from({ length: 24 }, (_, i) => (
          <path
            key={i}
            d={`M${80 + i * 36} 360 q18 -34 36 0`}
            fill="none"
            stroke="#365271"
            strokeWidth="2"
          />
        ))}
        <g
          transform={`translate(${x},${330 - 20 * resonance * Math.sin(p * 90)}) rotate(${25 * resonance * Math.sin(p * 60)})`}
        >
          <path d="M-26 -40 L26 -40 L0 20 Z" fill="#8bbcff" />
          <line
            x1="0"
            y1="-40"
            x2="0"
            y2="-70"
            stroke="#f4d592"
            strokeWidth="3"
          />
        </g>
        <text x="480" y="470" textAnchor="middle" className="film-equation">
          bumps pass at {bumpRate.toFixed(2)} × the spin rate
          {resonance > 0.6 ? ' — resonance' : ''}
        </text>
      </g>
    );
  }
  if (index === 6) {
    const hand = 200 + 500 * (1 - (1 - p) ** 2);
    const lag = 60 * (1 - p);
    return (
      <g>
        <line
          x1={hand}
          y1="120"
          x2={hand - lag}
          y2="330"
          stroke="#8bbcff"
          strokeWidth="3"
        />
        <circle cx={hand - lag} cy="330" r="22" fill="#f1a17d" />
        <rect
          x={hand - 18}
          y="96"
          width="36"
          height="24"
          rx="6"
          fill="#c9d8ea"
        />
        <rect x="140" y="420" width="680" height="14" fill="#122235" />
        <rect
          x="140"
          y="420"
          width={680 * (lag / 60) ** 2}
          height="14"
          fill="#9acbb9"
        />
        <text x="480" y="470" textAnchor="middle" className="film-equation">
          stored energy ∝ lag² · the hand slows, the lag fades
        </text>
      </g>
    );
  }
  const swing = 25 * Math.sin(p * 12);
  return (
    <g>
      {Array.from({ length: 9 }, (_, i) => (
        <path
          key={i}
          d={`M${80 + i * 100} 100 c 20 30, -20 60, 0 90 s -20 60, 0 90 s -20 60, 0 90`}
          fill="none"
          stroke="#365271"
          strokeWidth="1.5"
          transform={`translate(${(p * 60) % 100},0)`}
        />
      ))}
      {[
        ['L', 300, 1],
        ['L', 400, 1],
        ['R', 560, -1],
        ['R', 660, -1],
      ].map(([hand, x, s], i) => (
        <g
          key={i}
          transform={`translate(${x},160) rotate(${(s as number) * swing * (i % 2 ? 0.6 : 1)})`}
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="150"
            stroke="#c9d8ea"
            strokeWidth="2"
          />
          <path
            d={`M0 150 l${(s as number) * 18} 30 l${(s as number) * -8} 40 l${(s as number) * -22} -10 l${(s as number) * -6} -50 Z`}
            fill={(s as number) > 0 ? '#8bbcff' : '#f1a17d'}
          />
          <text x="0" y="250" textAnchor="middle" className="film-label">
            {hand}
          </text>
        </g>
      ))}
      <text x="480" y="500" textAnchor="middle" className="film-equation">
        U_LL − U_RR = s𝒜(r): one bit, read by a torsion balance
      </text>
    </g>
  );
}

export function PrimerFilm({ anchor = 'primer-film' }: { anchor?: string }) {
  return (
    <ChapteredFilm
      id={anchor}
      eyebrow="THE PRIMER IN EIGHT SCENES"
      title="One analogy per part, drawn live."
      blurb={
        'The primer’s STEP-UP pictures as a ' +
        primerFilmLength +
        '-second film. Pause, jump to a scene, or read it as text.'
      }
      scenes={primerScenes}
      render={(index, progress) => <Scene index={index} progress={progress} />}
    />
  );
}
