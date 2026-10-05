'use client';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

/**
 * Historical plates drawn in code: engraved-ink diagrams of the ideas GUM inherits,
 * in the site's ivory, navy and copper. They are diagrams of concepts, not portraits,
 * and each is labelled with the work it refers to.
 */
type Plate = {
  id: string;
  year: string;
  name: string;
  title: string;
  text: string;
  source: string;
  url: string;
  art: ReactNode;
};

const ink = '#1b2430';
const copper = '#b5693b';
const blue = '#4f6f8f';

function Paper({ children, id }: { children: ReactNode; id: string }) {
  return (
    <svg viewBox="0 0 320 240" className="plate" aria-hidden="true">
      <defs>
        <pattern
          id={'hatch-' + id}
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(35)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="6"
            stroke={ink}
            strokeWidth="0.5"
            opacity="0.08"
          />
        </pattern>
      </defs>
      <rect x="4" y="4" width="312" height="232" rx="6" fill="#e8e5dd" />
      <rect
        x="4"
        y="4"
        width="312"
        height="232"
        rx="6"
        fill={'url(#hatch-' + id + ')'}
      />
      <rect
        x="12"
        y="12"
        width="296"
        height="216"
        rx="3"
        fill="none"
        stroke={ink}
        strokeWidth="0.8"
        opacity="0.5"
      />
      {children}
    </svg>
  );
}

function CurlAether() {
  const cells = Array.from({ length: 5 }, (_, i) =>
    Array.from({ length: 7 }, (_, j) => [52 + j * 36, 60 + i * 32]),
  );
  return (
    <Paper id="maccullagh">
      <path
        d="M30 128 C 70 70, 110 70, 150 128 S 230 186, 290 128"
        fill="none"
        stroke={copper}
        strokeWidth="1.8"
      />
      {cells.flat().map(([x, y], i) => {
        const phase = Math.sin((x - 30) / 42);
        const r = 7 + 4 * Math.abs(phase);
        return (
          <g key={i} transform={`translate(${x},${y}) rotate(${phase * 60})`}>
            <circle
              r={r}
              fill="none"
              stroke={ink}
              strokeWidth="0.9"
              opacity="0.75"
              strokeDasharray="20 4"
            />
            <path
              d={`M${r - 3} -4 L${r} 0 L${r - 3} 4`}
              fill="none"
              stroke={ink}
              strokeWidth="0.9"
            />
          </g>
        );
      })}
      <text
        x="30"
        y="214"
        fontFamily="Georgia, serif"
        fontSize="12"
        fill={ink}
        fontStyle="italic"
      >
        W = ½κ |∇ × u|²
      </text>
    </Paper>
  );
}

function Gyrostat() {
  return (
    <Paper id="kelvin">
      <g transform="translate(160,122)">
        <ellipse rx="92" ry="34" fill="none" stroke={ink} strokeWidth="1" />
        <ellipse rx="34" ry="92" fill="none" stroke={ink} strokeWidth="1" />
        <circle r="56" fill="none" stroke={ink} strokeWidth="1.2" />
        <ellipse rx="56" ry="18" fill="none" stroke={copper} strokeWidth="2" />
        <line x1="-62" y1="0" x2="62" y2="0" stroke={ink} strokeWidth="1" />
        <circle r="5" fill={copper} />
        {[-100, 100].map((x) => (
          <rect
            key={x}
            x={x - 4}
            y="-70"
            width="8"
            height="140"
            fill="none"
            stroke={ink}
            strokeWidth="0.9"
          />
        ))}
      </g>
      <text
        x="30"
        y="214"
        fontFamily="Georgia, serif"
        fontSize="12"
        fill={ink}
        fontStyle="italic"
      >
        hidden rotors carry rotational elasticity
      </text>
    </Paper>
  );
}

function OrientedPoints() {
  const points = Array.from({ length: 4 }, (_, i) =>
    Array.from({ length: 6 }, (_, j) => [58 + j * 42, 54 + i * 42]),
  );
  return (
    <Paper id="cosserat">
      {points.flat().map(([x, y], i) => {
        const twist = ((i * 37) % 60) - 30;
        return (
          <g key={i} transform={`translate(${x},${y}) rotate(${twist})`}>
            <circle r="2.4" fill={ink} />
            <line
              x1="0"
              y1="0"
              x2="15"
              y2="0"
              stroke={copper}
              strokeWidth="1.6"
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="-15"
              stroke={blue}
              strokeWidth="1.6"
            />
            <line x1="0" y1="0" x2="-9" y2="9" stroke={ink} strokeWidth="1.2" />
          </g>
        );
      })}
      <text
        x="30"
        y="214"
        fontFamily="Georgia, serif"
        fontSize="12"
        fill={ink}
        fontStyle="italic"
      >
        position and a triad at every point
      </text>
    </Paper>
  );
}

function Array1925() {
  return (
    <Paper id="heisenberg">
      <ellipse
        cx="96"
        cy="118"
        rx="62"
        ry="40"
        fill="none"
        stroke={ink}
        strokeWidth="1"
        strokeDasharray="4 5"
        opacity="0.5"
      />
      <circle cx="96" cy="118" r="5" fill={ink} opacity="0.6" />
      <circle cx="152" cy="98" r="3" fill={copper} opacity="0.6" />
      <line x1="170" y1="118" x2="196" y2="118" stroke={ink} strokeWidth="1" />
      <path
        d="M190 113 L197 118 L190 123"
        fill="none"
        stroke={ink}
        strokeWidth="1"
      />
      {Array.from({ length: 5 }, (_, i) =>
        Array.from({ length: 5 }, (_, j) => (
          <g key={i + '-' + j}>
            <circle
              cx={214 + j * 18}
              cy={82 + i * 18}
              r={2.2 + ((i * j) % 3)}
              fill={i === j ? copper : blue}
              opacity={i === j ? 0.9 : 0.55}
            />
          </g>
        )),
      )}
      <text
        x="212"
        y="66"
        fontFamily="Georgia, serif"
        fontSize="11"
        fill={ink}
        fontStyle="italic"
      >
        q(n, m)
      </text>
      <text
        x="30"
        y="214"
        fontFamily="Georgia, serif"
        fontSize="12"
        fill={ink}
        fontStyle="italic"
      >
        the orbit leaves; the array stays
      </text>
    </Paper>
  );
}

function InternalClock() {
  const wave = Array.from({ length: 60 }, (_, i) => {
    const x = 30 + i * 4.4;
    const u = i / 59;
    const envelope = Math.exp(-((u - 0.5) ** 2) / 0.05);
    return `${i ? 'L' : 'M'}${x} ${124 - 40 * envelope * Math.sin(u * 28)}`;
  }).join(' ');
  return (
    <Paper id="debroglie">
      <path d={wave} fill="none" stroke={blue} strokeWidth="1.5" />
      <g transform="translate(160,124)">
        <circle r="26" fill="#e8e5dd" stroke={ink} strokeWidth="1.2" />
        {Array.from({ length: 12 }, (_, i) => (
          <line
            key={i}
            x1="0"
            y1="-23"
            x2="0"
            y2={i % 3 ? -20 : -17}
            stroke={ink}
            strokeWidth="1"
            transform={`rotate(${i * 30})`}
          />
        ))}
        <line x1="0" y1="0" x2="12" y2="-14" stroke={copper} strokeWidth="2" />
        <circle r="2" fill={copper} />
      </g>
      <text
        x="30"
        y="214"
        fontFamily="Georgia, serif"
        fontSize="12"
        fill={ink}
        fontStyle="italic"
      >
        ν₀ = mc²/h, a clock the particle carries
      </text>
    </Paper>
  );
}

function LocalBeables() {
  return (
    <Paper id="bell">
      <g stroke={ink} strokeWidth="1" fill="none">
        <path d="M100 196 L40 60" />
        <path d="M100 196 L160 60" />
        <path d="M220 196 L160 60" />
        <path d="M220 196 L280 60" />
      </g>
      <path d="M100 196 L130 130 L160 196 Z" fill={copper} opacity="0.18" />
      <path d="M160 60 L130 130 L190 130 Z" fill={blue} opacity="0.18" />
      <circle cx="100" cy="196" r="4" fill={ink} />
      <circle cx="220" cy="196" r="4" fill={ink} />
      <rect
        x="128"
        y="36"
        width="64"
        height="16"
        fill="none"
        stroke={ink}
        strokeWidth="0.8"
      />
      <text
        x="160"
        y="48"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="10"
        fill={ink}
      >
        region 3
      </text>
      <text
        x="30"
        y="214"
        fontFamily="Georgia, serif"
        fontSize="12"
        fill={ink}
        fontStyle="italic"
      >
        what exists in a region, before what is observed
      </text>
    </Paper>
  );
}

export const plates: Plate[] = [
  {
    id: 'maccullagh',
    year: '1839',
    name: 'James MacCullagh',
    title: 'The rotational aether',
    text: 'A continuum storing energy in the curl of displacement alone reproduces Fresnel’s optics exactly, and is inconsistent as an ordinary elastic solid: its stress is antisymmetric and it has no shear rigidity.',
    source: 'Transactions of the Royal Irish Academy',
    url: 'https://en.wikipedia.org/wiki/James_MacCullagh',
    art: <CurlAether />,
  },
  {
    id: 'kelvin',
    year: '1889',
    name: 'Lord Kelvin',
    title: 'A gyrostatic constitution for the ether',
    text: 'Kelvin realised MacCullagh’s rotational elasticity mechanically, with hidden rotors, but not alongside shear rigidity.',
    source: 'Comptes Rendus 109',
    url: 'https://en.wikipedia.org/wiki/William_Thomson,_1st_Baron_Kelvin',
    art: <Gyrostat />,
  },
  {
    id: 'cosserat',
    year: '1909',
    name: 'Eugène & François Cosserat',
    title: 'Théorie des corps déformables',
    text: 'A continuum whose points carry an orientation as well as a position. Its stress need not be symmetric; couple stresses balance the angular momentum. GUM’s continuum description has this form.',
    source: 'Hermann, Paris',
    url: 'https://en.wikipedia.org/wiki/Cosserat_elasticity',
    art: <OrientedPoints />,
  },
  {
    id: 'heisenberg',
    year: '1925',
    name: 'Werner Heisenberg',
    title: 'Über quantentheoretische Umdeutung',
    text: 'The electron’s position is replaced by an array of transition amplitudes. The trajectory is not refuted; it is expelled from the vocabulary because it cannot be measured.',
    source: 'Zeitschrift für Physik 33',
    url: 'https://doi.org/10.1007/BF01328377',
    art: <Array1925 />,
  },
  {
    id: 'debroglie',
    year: '1927',
    name: 'Louis de Broglie',
    title: 'The internal clock and the pilot wave',
    text: 'A particle carries a clock of frequency mc²/h and is guided by a wave. In GUM the clock is the isorotation of a knot, and reading it as a physical rotation is a stake.',
    source: 'Solvay Conference',
    url: 'https://en.wikipedia.org/wiki/Louis_de_Broglie',
    art: <InternalClock />,
  },
  {
    id: 'bell',
    year: '1975',
    name: 'John Stewart Bell',
    title: 'The theory of local beables',
    text: 'A theory should say what exists in a region of spacetime before it says what is observed. GUM’s local beables are the material’s fields; Norsen’s tower is its answer to the wave function on ℝ³ᴺ.',
    source: 'Speakable and Unspeakable',
    url: 'https://doi.org/10.1017/CBO9780511815676',
    art: <LocalBeables />,
  },
];

export function HistoricalPlates() {
  return (
    <div className="plate-gallery" id="plates">
      {plates.map((plate) => (
        <article key={plate.id} className="plate-card">
          {plate.art}
          <div>
            <span>{plate.year}</span>
            <h4>{plate.name}</h4>
            <strong>{plate.title}</strong>
            <p>{plate.text}</p>
            <a href={plate.url} target="_blank" rel="noreferrer">
              {plate.source} <ArrowUpRight size={13} />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PlateFigure({ id }: { id: string }) {
  const plate = plates.find((p) => p.id === id);
  if (!plate) throw new RangeError('Unknown plate ' + id);
  return (
    <figure className="plate-figure">
      {plate.art}
      <div className="portrait-label">
        <span>{plate.name.toUpperCase()}</span>
        <span>{plate.year}</span>
      </div>
      <figcaption>
        Code-drawn diagram of {plate.title.toLowerCase()}, in the site’s
        engraved style. A diagram of the idea, not a portrait or a
        reconstruction of an apparatus.
      </figcaption>
    </figure>
  );
}
