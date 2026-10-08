'use client';
import {
  ChapteredFilm,
  filmLengthOf,
  sceneAtTime,
  type FilmScene,
} from '@/components/chaptered-film';

/**
 * The argument as a six-chapter film drawn live in the browser. The scenes are pure
 * functions of time; the shell, controls and transcript are the shared ChapteredFilm.
 */
export const filmScenes: readonly FilmScene[] = [
  {
    id: 'umdeutung',
    label: 'Umdeutung',
    duration: 9,
    caption:
      'In 1925 the orbit leaves the vocabulary. An array of transition amplitudes becomes what the theory is about.',
  },
  {
    id: 'material',
    label: 'The material',
    duration: 9,
    caption:
      'GUM reverses the act. A material with positions and orientations keeps the books; its first description is a chiral micropolar continuum.',
  },
  {
    id: 'light',
    label: 'Light',
    duration: 9,
    caption:
      'Lattice and grains co-move in a locked transverse wave. Under the cone condition it is exactly ω = ck: the photon.',
  },
  {
    id: 'knot',
    label: 'A knot',
    duration: 9,
    caption:
      'A knotted texture spins internally at a frequency inside the gap. One rotation supplies the clock, spin ½ and the statistics sign.',
  },
  {
    id: 'tower',
    label: 'The tower',
    duration: 9,
    caption:
      'Measuring one knot updates the conditional fields of the others at the material’s longitudinal speed. The finite speed is exposed to timing.',
  },
  {
    id: 'stakes',
    label: 'Thirty stakes',
    duration: 9,
    caption:
      'Every claim carries a grade and a kill. Thirty stakes and twenty-six posed closures close the paper.',
  },
];

export const filmLength = filmLengthOf(filmScenes);

export function sceneAt(time: number) {
  return sceneAtTime(filmScenes, time);
}

const ease = (p: number) => Math.max(0, Math.min(1, p));

function Scene({ index, progress }: { index: number; progress: number }) {
  const p = ease(progress);
  if (index === 0) {
    const fadeOut = Math.max(0, 1 - p * 1.6);
    const fadeIn = Math.max(0, (p - 0.3) / 0.7);
    return (
      <g>
        <ellipse
          cx="300"
          cy="270"
          rx="150"
          ry="92"
          fill="none"
          stroke="#8bbcff"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          opacity={fadeOut}
        />
        <circle
          cx={300 + 150 * Math.cos(p * 6)}
          cy={270 - 92 * Math.sin(p * 6)}
          r="6"
          fill="#f1a17d"
          opacity={fadeOut}
        />
        <circle
          cx="300"
          cy="270"
          r="9"
          fill="#e4edf8"
          opacity={0.5 + 0.5 * fadeOut}
        />
        {Array.from({ length: 6 }, (_, i) =>
          Array.from({ length: 6 }, (_, j) => (
            <circle
              key={i + '-' + j}
              cx={560 + j * 44}
              cy={160 + i * 44}
              r={i === j ? 8 : 4 + ((i * 7 + j * 3) % 4)}
              fill={i === j ? '#f4d592' : '#8bbcff'}
              opacity={fadeIn * (i === j ? 0.95 : 0.55)}
            />
          )),
        )}
        <text
          x="300"
          y="420"
          textAnchor="middle"
          className="film-equation"
          opacity={fadeOut}
        >
          x(t)
        </text>
        <text
          x="670"
          y="430"
          textAnchor="middle"
          className="film-equation"
          opacity={fadeIn}
        >
          q(n, m) e^{'{'}2πiν(n,m)t{'}'}
        </text>
      </g>
    );
  }
  if (index === 1) {
    return (
      <g>
        {Array.from({ length: 7 }, (_, i) =>
          Array.from({ length: 14 }, (_, j) => {
            const x = 110 + j * 56,
              y = 110 + i * 54;
            const angle = 35 * Math.sin(j / 2 - p * 8) * Math.min(1, p * 3);
            return (
              <g
                key={i + '-' + j}
                transform={`translate(${x},${y}) rotate(${angle})`}
              >
                <circle r="3" fill="#8bbcff" />
                <line
                  x1="0"
                  y1="0"
                  x2="18"
                  y2="0"
                  stroke="#f1a17d"
                  strokeWidth="2"
                />
              </g>
            );
          }),
        )}
        <text x="480" y="470" textAnchor="middle" className="film-equation">
          (u, Q̃) on (x, t) · P̃ = R̃[u]†Q̃
        </text>
      </g>
    );
  }
  if (index === 2) {
    const path = Array.from({ length: 80 }, (_, i) => {
      const x = 80 + i * 10;
      const y = 250 - 70 * Math.sin(i / 4 - p * 14);
      return `${i ? 'L' : 'M'}${x} ${y}`;
    }).join(' ');
    return (
      <g>
        <path d={path} fill="none" stroke="#8bbcff" strokeWidth="3" />
        {Array.from({ length: 20 }, (_, i) => {
          const x = 100 + i * 40;
          const phase = (x - 80) / 40 - p * 14;
          const y = 250 - 70 * Math.sin(phase);
          return (
            <g
              key={i}
              transform={`translate(${x},${y}) rotate(${-40 * Math.cos(phase)})`}
            >
              <line
                x1="-12"
                y1="0"
                x2="12"
                y2="0"
                stroke="#f1a17d"
                strokeWidth="2.5"
              />
            </g>
          );
        })}
        <text x="480" y="440" textAnchor="middle" className="film-equation">
          ω = ck, ψ ≡ 0, c² = γ_eff / 2J = μ / ρ₀
        </text>
      </g>
    );
  }
  if (index === 3) {
    const spin = p * 4 * Math.PI;
    return (
      <g transform="translate(480,250)">
        <circle r="150" fill="none" stroke="#365271" strokeDasharray="3 8" />
        {Array.from({ length: 36 }, (_, i) => {
          const r = 24 + (i % 6) * 20;
          const a = (i * 2 * Math.PI) / 36 + spin * (i % 2 ? 1 : -1) * 0.2;
          const f = 2 * Math.acos(Math.min(1, r / 150));
          const len = 20 * Math.abs(Math.sin(f));
          return (
            <g
              key={i}
              transform={`translate(${r * Math.cos(a)},${r * Math.sin(a)}) rotate(${(a + spin) * (180 / Math.PI)})`}
            >
              <line
                x1="0"
                y1="0"
                x2={len}
                y2="0"
                stroke={r < 100 ? '#8bbcff' : '#f4d592'}
                strokeWidth="2"
              />
            </g>
          );
        })}
        <circle r="8" fill="#f4d592" />
        <text x="0" y="200" textAnchor="middle" className="film-equation">
          P̃(t) = e^{'{'}iωtσ₃/2{'}'} p̃ e^{'{'}−iωtσ₃/2{'}'}, ω = κω₀, j = ½
        </text>
      </g>
    );
  }
  if (index === 4) {
    const front = Math.max(0, (p - 0.25) / 0.75);
    return (
      <g>
        <circle
          cx="220"
          cy="250"
          r="26"
          fill="#1b3a5c"
          stroke="#8bbcff"
          strokeWidth="2"
        />
        <circle
          cx="740"
          cy="250"
          r="26"
          fill="#1b3a5c"
          stroke="#8bbcff"
          strokeWidth="2"
        />
        <circle
          cx="220"
          cy="250"
          r={26 + front * 520}
          fill="none"
          stroke="#f1a17d"
          strokeWidth="2"
          opacity={1 - front * 0.6}
        />
        <circle
          cx="220"
          cy="250"
          r={26 + front * 320}
          fill="none"
          stroke="#8bbcff"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          opacity={1 - front * 0.5}
        />
        <text x="220" y="310" textAnchor="middle" className="film-label">
          measured
        </text>
        <text x="740" y="310" textAnchor="middle" className="film-label">
          {front > 0.99 ? 'updated' : 'waiting'}
        </text>
        <text x="480" y="130" textAnchor="middle" className="film-equation">
          ψ_k(x, t) = Ψ(X₁, …, x, …, X_N, t)
        </text>
        <text x="480" y="430" textAnchor="middle" className="film-equation">
          copper front at c_L · dashed front at c
        </text>
      </g>
    );
  }
  const lit = Math.floor(p * 31);
  return (
    <g>
      {Array.from({ length: 30 }, (_, i) => {
        const on = i < lit;
        const discriminating = [
          15, 21, 22, 23, 25, 26, 27, 28, 29, 9, 19,
        ].includes(i);
        return (
          <rect
            key={i}
            x={120 + (i % 10) * 76}
            y={150 + Math.floor(i / 10) * 76}
            width="56"
            height="56"
            rx="6"
            fill={on ? (discriminating ? '#183c36' : '#122235') : '#0b1420'}
            stroke={on ? (discriminating ? '#9acbb9' : '#365271') : '#1d2b3c'}
            strokeWidth={discriminating && on ? 2 : 1}
          />
        );
      })}
      <text x="480" y="430" textAnchor="middle" className="film-equation">
        {Math.min(30, lit)} / 30 stakes · 26 posed closures
      </text>
    </g>
  );
}

export function GumFilm({ anchor = 'gum-film' }: { anchor?: string }) {
  return (
    <ChapteredFilm
      id={anchor}
      eyebrow="THE ARGUMENT AS A SHORT FILM"
      title="Watch the material keep the books."
      blurb={
        'Six chapters drawn live in your browser, ' +
        filmLength +
        ' seconds in all. Pause, jump to a chapter, or read it as text.'
      }
      scenes={filmScenes}
      render={(index, progress) => <Scene index={index} progress={progress} />}
    />
  );
}
