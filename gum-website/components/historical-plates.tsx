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

function Interferometer() {
  return (
    <Paper id="michelson">
      <g transform="translate(160,124)">
        <rect
          x="-10"
          y="-10"
          width="20"
          height="20"
          fill="none"
          stroke={ink}
          strokeWidth="1"
          transform="rotate(45)"
        />
        <line x1="-120" y1="0" x2="-10" y2="0" stroke={ink} strokeWidth="1" />
        <line
          x1="10"
          y1="0"
          x2="120"
          y2="0"
          stroke={copper}
          strokeWidth="1.6"
        />
        <line x1="0" y1="-10" x2="0" y2="-90" stroke={blue} strokeWidth="1.6" />
        <line x1="0" y1="10" x2="0" y2="70" stroke={ink} strokeWidth="1" />
        <rect x="118" y="-14" width="4" height="28" fill={ink} />
        <rect x="-14" y="-92" width="28" height="4" fill={ink} />
        <circle
          cx="-126"
          cy="0"
          r="6"
          fill="none"
          stroke={ink}
          strokeWidth="1"
        />
        <rect
          x="-12"
          y="70"
          width="24"
          height="12"
          fill="none"
          stroke={ink}
          strokeWidth="1"
        />
        {Array.from({ length: 7 }, (_, i) => (
          <line
            key={i}
            x1={-8 + i * 2.7}
            y1="74"
            x2={-8 + i * 2.7}
            y2="80"
            stroke={i % 2 ? ink : copper}
            strokeWidth="1"
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
        two arms, one speed: a perfect tie
      </text>
    </Paper>
  );
}

function GoldFoil() {
  return (
    <Paper id="rutherford">
      <line
        x1="30"
        y1="124"
        x2="150"
        y2="124"
        stroke={ink}
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <rect x="150" y="60" width="4" height="128" fill={copper} opacity="0.7" />
      {[
        [154, 124, 290, 118],
        [154, 124, 290, 134],
        [154, 124, 290, 104],
        [154, 124, 250, 60],
        [154, 124, 60, 40],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={i > 2 ? copper : blue}
          strokeWidth={i > 2 ? 1.6 : 1}
        />
      ))}
      <circle cx="152" cy="124" r="4" fill={ink} />
      {Array.from({ length: 5 }, (_, i) => (
        <circle key={i} cx={40 + i * 22} cy="124" r="2.2" fill={blue} />
      ))}
      <text
        x="30"
        y="214"
        fontFamily="Georgia, serif"
        fontSize="12"
        fill={ink}
        fontStyle="italic"
      >
        a tiny nucleus, found by what bounced back
      </text>
    </Paper>
  );
}

function QuantumFluid() {
  const streams = Array.from({ length: 5 }, (_, i) => 70 + i * 24);
  return (
    <Paper id="madelung">
      {streams.map((y, i) => (
        <path
          key={y}
          d={`M30 ${y} C 90 ${y - 22 + i * 8}, 150 ${y + 26 - i * 10}, 210 ${y - 6} S 290 ${y + 10}, 300 ${y}`}
          fill="none"
          stroke={i === 2 ? copper : blue}
          strokeWidth={i === 2 ? 1.8 : 1}
          opacity="0.8"
        />
      ))}
      <path
        d="M60 180 C 120 120, 200 120, 260 180"
        fill="none"
        stroke={ink}
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <text
        x="30"
        y="214"
        fontFamily="Georgia, serif"
        fontSize="12"
        fill={ink}
        fontStyle="italic"
      >
        ρ flows; one extra pressure keeps it apart
      </text>
    </Paper>
  );
}

function Guillotine() {
  const curve = Array.from({ length: 40 }, (_, i) => {
    const l = 0.15 + (i / 39) * 2.4;
    const e = l + 0.35 / l;
    return `${i ? 'L' : 'M'}${40 + ((l - 0.15) / 2.4) * 240} ${190 - e * 36}`;
  }).join(' ');
  const collapse = Array.from({ length: 40 }, (_, i) => {
    const l = 0.15 + (i / 39) * 2.4;
    return `${i ? 'L' : 'M'}${40 + ((l - 0.15) / 2.4) * 240} ${190 - (l + 0.2 * l ** 3) * 36}`;
  }).join(' ');
  return (
    <Paper id="derrick">
      <line x1="40" y1="190" x2="290" y2="190" stroke={ink} strokeWidth="1" />
      <line x1="40" y1="190" x2="40" y2="40" stroke={ink} strokeWidth="1" />
      <path
        d={collapse}
        fill="none"
        stroke={ink}
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <path d={curve} fill="none" stroke={copper} strokeWidth="1.8" />
      <circle
        cx={40 + ((Math.sqrt(0.35) - 0.15) / 2.4) * 240}
        cy={190 - 2 * Math.sqrt(0.35) * 36}
        r="3.5"
        fill={blue}
      />
      <text
        x="246"
        y="186"
        fontFamily="Georgia, serif"
        fontSize="10"
        fill={ink}
      >
        size
      </text>
      <text
        x="30"
        y="214"
        fontFamily="Georgia, serif"
        fontSize="12"
        fill={ink}
        fontStyle="italic"
      >
        a lump shrinks to nothing, unless a term resists
      </text>
    </Paper>
  );
}

function CutAndGlue() {
  const rows = Array.from({ length: 7 }, (_, i) => 56 + i * 20);
  return (
    <Paper id="volterra">
      {rows.map((y, i) => (
        <g key={y}>
          <line
            x1="40"
            y1={y}
            x2="160"
            y2={y}
            stroke={ink}
            strokeWidth="0.8"
            opacity="0.7"
          />
          <line
            x1="160"
            y1={y + (i < 4 ? 10 : 0)}
            x2="280"
            y2={y + (i < 4 ? 10 : 0)}
            stroke={ink}
            strokeWidth="0.8"
            opacity="0.7"
          />
        </g>
      ))}
      <line
        x1="160"
        y1="56"
        x2="160"
        y2="126"
        stroke={copper}
        strokeWidth="2.2"
      />
      <circle cx="160" cy="126" r="4" fill={copper} />
      <path
        d="M200 110 L240 110 L240 150 L200 150 L200 118"
        fill="none"
        stroke={blue}
        strokeWidth="1.4"
      />
      <path
        d="M197 122 L200 116 L203 122"
        fill="none"
        stroke={blue}
        strokeWidth="1.4"
      />
      <text
        x="30"
        y="214"
        fontFamily="Georgia, serif"
        fontSize="12"
        fill={ink}
        fontStyle="italic"
      >
        cut, shift by one step, re-glue: a loop fails to close
      </text>
    </Paper>
  );
}

function MirrorDecay() {
  return (
    <Paper id="wu">
      {[90, 230].map((cx, side) => (
        <g key={cx} transform={`translate(${cx},120)`}>
          <circle r="22" fill="none" stroke={ink} strokeWidth="1.2" />
          <path
            d="M0 -22 A22 22 0 0 1 22 0"
            fill="none"
            stroke={copper}
            strokeWidth="2"
          />
          <path
            d={side ? 'M-28 -32 L-22 -38 L-16 -32' : 'M16 -32 L22 -38 L28 -32'}
            fill="none"
            stroke={ink}
            strokeWidth="1"
          />
          <line
            x1={side ? -22 : 22}
            y1="-38"
            x2={side ? -22 : 22}
            y2="-6"
            stroke={ink}
            strokeWidth="1"
          />
          {Array.from({ length: 5 }, (_, i) => (
            <line
              key={i}
              x1="0"
              y1="26"
              x2={(i - 2) * 9}
              y2={side ? 70 : 62}
              stroke={blue}
              strokeWidth="1.2"
              opacity={side ? 0.9 : 0.45}
            />
          ))}
        </g>
      ))}
      <line
        x1="160"
        y1="50"
        x2="160"
        y2="200"
        stroke={ink}
        strokeWidth="0.8"
        strokeDasharray="5 4"
      />
      <text
        x="30"
        y="214"
        fontFamily="Georgia, serif"
        fontSize="12"
        fill={ink}
        fontStyle="italic"
      >
        the mirror image decays differently
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
    url: 'https://archive.org/details/thoriedescorpsdf0000euge',
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
  {
    id: 'michelson',
    year: '1887',
    name: 'Albert Michelson & Edward Morley',
    title: 'The race that ended in a tie',
    text: 'Light was raced along two perpendicular arms, one along the supposed aether wind and one across it. Cross-stream should always win if there is a current; the result was a perfect tie, now confirmed to a part in a billion billion.',
    source: 'American Journal of Science 34',
    url: 'https://en.wikipedia.org/wiki/Michelson%E2%80%93Morley_experiment',
    art: <Interferometer />,
  },
  {
    id: 'rutherford',
    year: '1911',
    name: 'Ernest Rutherford',
    title: 'The nucleus, found by what bounced back',
    text: 'Alpha particles fired at gold foil mostly passed through, and a few came straight back. The atom is nearly empty, with a tiny massive nucleus: one more rung on the “made of” ladder.',
    source: 'Philosophical Magazine 21',
    url: 'https://en.wikipedia.org/wiki/Rutherford_scattering_experiments',
    art: <GoldFoil />,
  },
  {
    id: 'madelung',
    year: '1926',
    name: 'Erwin Madelung',
    title: 'Quantum mechanics as a fluid',
    text: 'Written as amplitude times phase, the Schrödinger equation becomes a continuity equation and Newton’s mechanics plus one extra pressure, the quantum potential. The primer’s question sharpens to what produces that pressure.',
    source: 'Zeitschrift für Physik 40',
    url: 'https://en.wikipedia.org/wiki/Madelung_equations',
    art: <QuantumFluid />,
  },
  {
    id: 'derrick',
    year: '1964',
    name: 'G. H. Derrick',
    title: 'The guillotine for lumps of field',
    text: 'A static, localised texture whose energy has only first derivatives lowers its energy by shrinking, and no stable size exists. Skyrme’s quartic term and the sextic–potential pair are the two escapes GUM uses.',
    source: 'Journal of Mathematical Physics 5',
    url: 'https://en.wikipedia.org/wiki/Derrick%27s_theorem',
    art: <Guillotine />,
  },
  {
    id: 'volterra',
    year: '1907',
    name: 'Vito Volterra',
    title: 'Defects you can cut and glue',
    text: 'Cut a body, shift or rotate one face, and re-glue: a dislocation or a disclination. A lattice full of them is a non-Euclidean space, with dislocations carrying torsion and disclinations carrying curvature.',
    source: 'Annales scientifiques de l’É.N.S. 24',
    url: 'https://en.wikipedia.org/wiki/Dislocation',
    art: <CutAndGlue />,
  },
  {
    id: 'wu',
    year: '1957',
    name: 'Chien-Shiung Wu',
    title: 'The mirror breaks',
    text: 'Electrons from polarised cobalt-60 nuclei preferred one direction relative to the nuclear spin. The weak interaction distinguishes a process from its mirror image: the anchor of GUM’s sign chain.',
    source: 'Physical Review 105',
    url: 'https://journals.aps.org/pr/abstract/10.1103/PhysRev.105.1413',
    art: <MirrorDecay />,
  },
];

/** The six plates the paper's question chapter shows; the primer picks its own subsets. */
export const paperPlates = [
  'maccullagh',
  'kelvin',
  'cosserat',
  'heisenberg',
  'debroglie',
  'bell',
];

export function HistoricalPlates({
  ids,
  anchor = 'plates',
}: {
  ids?: string[];
  anchor?: string;
}) {
  const shown = ids
    ? ids.map((id) => {
        const plate = plates.find((p) => p.id === id);
        if (!plate) throw new RangeError('Unknown plate ' + id);
        return plate;
      })
    : plates;
  return (
    <div className="plate-gallery" id={anchor}>
      {shown.map((plate) => (
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
