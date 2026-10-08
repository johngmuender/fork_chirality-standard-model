'use client';
import { useRef, useState } from 'react';
import { line, scaleLinear } from 'd3';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { AmbientExhibit, useSceneClock } from '@/components/exhibit-motion';
import { Dial, Readouts } from '@/components/primer-dial';
import {
  chainBands,
  chainSkin,
  chainWavenumber,
  coneHalfAngle,
  diatomicChain,
  foucaultRotation,
  groupPhase,
  helixCriterion,
  helixFreeEnergy,
  helixWavenumber,
  riverDoublingCurrent,
  riverRace,
  skinLength,
  soundSpeed,
} from '@/lib/primer-physics';

/** Server and browser can disagree in the last bit of trigonometry; drawn coordinates must not. */
const round = (value: number) => Math.round(value * 1000) / 1000;

/** 1.2: the swimmer in the river, Michelson and Morley's race in miniature. */
export function RiverRace() {
  const [swim, setSwim] = useState(5);
  const [current, setCurrent] = useState(4);
  const [t, setT] = useState(0);
  const stage = useRef<HTMLDivElement>(null);
  const flow = Math.min(current, swim - 0.25);
  const race = riverRace(swim, flow, 100);
  const running = useSceneClock(stage, (_, dt) =>
    setT((old) => (old + (dt * race.along) / 14) % race.along),
  );
  const half = race.cross / 2;
  const crossY =
    t < half
      ? 200 - (160 * t) / half
      : t < race.cross
        ? 40 + (160 * (t - half)) / half
        : 200;
  const up = 100 / (swim - flow);
  const alongX =
    t < up ? 150 + (300 * t) / up : 450 - (300 * (t - up)) / (race.along - up);
  return (
    <div className="primer-exhibit river-exhibit" id="primer-river" ref={stage}>
      <div className="lab-heading">
        <span className="eyebrow">TRY THIS · THE RIVER, WITH NUMBERS</span>
        <h3>Cross-stream always wins, if there is a current.</h3>
      </div>
      <div className="spectrum-layout">
        <AmbientExhibit className="foundation-instrument">
          <svg
            viewBox="0 0 600 260"
            aria-label={`River race: crossing and back takes ${race.cross.toFixed(1)} s, upstream and back ${race.along.toFixed(1)} s.`}
          >
            <title>
              Two swimmers: across the current and back, along it and back.
            </title>
            <rect
              x="60"
              y="40"
              width="480"
              height="160"
              fill="#10243a"
              rx="6"
            />
            {Array.from({ length: 10 }, (_, i) => (
              <text
                key={i}
                x={70 + ((i * 52 + t * 6) % 470)}
                y={70 + (i % 3) * 50}
                fill="#4f6f8f"
                fontSize="18"
              >
                →
              </text>
            ))}
            <line
              x1="300"
              y1="200"
              x2="300"
              y2="40"
              stroke="#8bbcff"
              strokeDasharray="5 7"
            />
            <circle cx="300" cy={crossY} r="8" fill="#8bbcff" />
            <line
              x1="150"
              y1="120"
              x2="450"
              y2="120"
              stroke="#f1a17d"
              strokeDasharray="5 7"
            />
            <circle cx={alongX} cy="120" r="8" fill="#f1a17d" />
            <text x="300" y="232" className="plot-tick">
              across {Math.min(t, race.cross).toFixed(0)} s · along{' '}
              {t.toFixed(0)} s{running ? '' : ' · paused'}
            </text>
          </svg>
          <Dial
            label="Swimmer’s speed"
            value={swim}
            display={swim.toFixed(1) + ' m/s'}
            min={2}
            max={8}
            step={0.1}
            onChange={setSwim}
          />
          <Dial
            label="River current"
            value={flow}
            display={flow.toFixed(2) + ' m/s'}
            min={0}
            max={swim - 0.25}
            step={0.05}
            onChange={setCurrent}
          />
          <Readouts
            items={[
              ['Across and back, 100 m each way', race.cross.toFixed(1) + ' s'],
              ['Upstream and back', race.along.toFixed(1) + ' s'],
              ['Ratio', race.ratio.toFixed(3)],
              [
                'Current for a 2× ratio (problem 1.2)',
                riverDoublingCurrent(swim).toFixed(2) + ' m/s',
              ],
            ]}
          />
        </AmbientExhibit>
        <div className="completion-notes">
          <article>
            <span className="eyebrow">THE PRIMER’S NUMBERS</span>
            <strong>5 m/s in a 4 m/s river: 66.7 s against 111.1 s</strong>
            <p>
              Crossing needs an upstream angle, so the crossing speed is √(5² −
              4²) = 3 m/s. Going along, the slow leg dominates: 100/1 + 100/9 s.
              Only with no current do the two trips tie.
            </p>
          </article>
          <article>
            <span className="eyebrow">1887</span>
            <strong>Michelson and Morley: a perfect tie</strong>
            <p>
              Light raced along two perpendicular arms came back level, now
              confirmed to better than a part in a billion billion. The aether
              was not disproven; it was made redundant.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

const materials = [
  { id: 'steel', name: 'Steel', stiffness: 200, density: 7850 },
  { id: 'aluminium', name: 'Aluminium', stiffness: 70, density: 2700 },
  { id: 'glass', name: 'Glass', stiffness: 70, density: 2500 },
  { id: 'oak', name: 'Oak, along the grain', stiffness: 11, density: 700 },
];

/** 2.1: the sound-in-steel move, v = √(stiffness/density). */
export function SoundInSteel() {
  const [stiffness, setStiffness] = useState(200);
  const [density, setDensity] = useState(7850);
  const speed = soundSpeed(stiffness * 1e9, density);
  return (
    <div className="primer-exhibit" id="primer-sound">
      <div className="lab-heading">
        <span className="eyebrow">
          2.1 · A PROPERTY, NOT A CONSTANT OF NATURE
        </span>
        <h3>Which stiffness, which inertia?</h3>
      </div>
      <div className="foundation-instrument cone-controls">
        <ToggleGroup
          className="lab-tabs"
          value={[
            materials.find(
              (m) => m.stiffness === stiffness && m.density === density,
            )?.id ?? 'custom',
          ]}
          onValueChange={(v) => {
            const m = materials.find((x) => x.id === v[0]);
            if (m) {
              setStiffness(m.stiffness);
              setDensity(m.density);
            }
          }}
          aria-label="Material presets"
        >
          {materials.map((m) => (
            <ToggleGroupItem value={m.id} key={m.id}>
              {m.name}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <Dial
          label="Stiffness (Young’s modulus)"
          value={stiffness}
          display={stiffness + ' GPa'}
          min={5}
          max={400}
          step={1}
          onChange={setStiffness}
        />
        <Dial
          label="Density"
          value={density}
          display={density + ' kg/m³'}
          min={300}
          max={20000}
          step={10}
          onChange={setDensity}
        />
        <div className="mass-equation" aria-live="polite">
          <span>v = √(stiffness / density)</span>
          <strong>{speed.toFixed(0)} m/s</strong>
          <small>
            Steel gives about 5,050 m/s and aluminium about 5,090 m/s (problem
            2.1). GUM’s bet is that c, ħ and every mass are this move: a
            stiffness, an inertia, a gap, or a pure shape number.
          </small>
        </div>
      </div>
    </div>
  );
}

/** 2.2: necklaces and band gaps, with a drive that makes a wave or a skin. */
export function Necklace() {
  const [ratio, setRatio] = useState(3);
  const [drive, setDrive] = useState(0.85);
  const [t, setT] = useState(0);
  const stage = useRef<HTMLDivElement>(null);
  useSceneClock(stage, (_, dt) => setT((old) => old + dt));
  const light = 1,
    heavy = ratio;
  const bands = chainBands(light, heavy);
  const omega = drive * bands.edge;
  const skin = chainSkin(omega, light, heavy);
  const k = chainWavenumber(omega, light, heavy);
  const ks = Array.from({ length: 61 }, (_, i) => (i / 60) * Math.PI);
  const x = scaleLinear().domain([0, Math.PI]).range([50, 560]);
  const y = scaleLinear()
    .domain([0, bands.opticalTop * 1.08])
    .range([200, 20]);
  const acoustic = line<number>()
    .x((kk) => x(kk))
    .y((kk) => y(diatomicChain(kk, light, heavy).acoustic));
  const optical = line<number>()
    .x((kk) => x(kk))
    .y((kk) => y(diatomicChain(kk, light, heavy).optical));
  const beads = Array.from({ length: 24 }, (_, i) => i);
  const amplitude = (i: number) => {
    if (skin !== null)
      return 16 * Math.exp((-skin * i) / 2) * Math.cos(omega * t * 1.4);
    if (k === null) return 0;
    const sign = omega >= bands.edge && i % 2 ? -1 : 1;
    return 12 * sign * Math.cos((k * i) / 2 - omega * t * 1.4);
  };
  const regime =
    skin !== null
      ? 'In the gap: a skin that dies by a factor e every ' +
        (2 / skin).toFixed(1) +
        ' beads.'
      : omega >= bands.edge
        ? 'Optical branch: a travelling wave with neighbours moving against each other.'
        : omega === 0
          ? 'No drive.'
          : 'Acoustic branch: a travelling wave with neighbours moving together.';
  return (
    <div
      className="primer-exhibit necklace-exhibit"
      id="primer-necklace"
      ref={stage}
    >
      <div className="lab-heading">
        <span className="eyebrow">2.2 · BEADS, SPRINGS AND A GAP</span>
        <h3>
          Allowed frequencies form bands;
          <br />
          forbidden ones, gaps.
        </h3>
      </div>
      <div className="spectrum-layout">
        <AmbientExhibit className="foundation-instrument">
          <svg
            viewBox="0 0 600 300"
            aria-label={`Diatomic chain with mass ratio ${ratio}: acoustic branch up to ${bands.acousticTop.toFixed(2)}, gap to the edge ${bands.edge.toFixed(2)}, drive at ${omega.toFixed(2)}. ${regime}`}
          >
            <title>
              Dispersion of a necklace of alternating beads, and the chain under
              a drive.
            </title>
            <rect
              x="50"
              y={y(bands.edge)}
              width="510"
              height={y(bands.acousticTop) - y(bands.edge)}
              fill="#f1a17d"
              opacity="0.1"
            />
            <line x1="50" y1="200" x2="560" y2="200" className="plot-axis" />
            <line x1="50" y1="20" x2="50" y2="200" className="plot-axis" />
            <path d={acoustic(ks) ?? ''} className="plot-b2" />
            <path d={optical(ks) ?? ''} className="plot-b3" />
            <line
              x1="50"
              y1={y(omega)}
              x2="560"
              y2={y(omega)}
              stroke="#f4d592"
              strokeDasharray="3 6"
            />
            <text x="56" y={y(omega) - 5} className="plot-label">
              drive ω = {drive.toFixed(2)} ω₀
            </text>
            <text x="300" y="218" className="plot-tick">
              wavenumber k, 0 to π
            </text>
            <text x="470" y={y(bands.edge) - 6} className="plot-tick">
              band edge ω₀
            </text>
            <text
              x="110"
              y={y((bands.edge + bands.acousticTop) / 2) + 4}
              className="plot-tick"
            >
              gap
            </text>
            {beads.map((i) => (
              <circle
                key={i}
                cx={62 + i * 21}
                cy={262 + amplitude(i)}
                r={i % 2 ? 4 : 4 + Math.min(5, ratio)}
                fill={i % 2 ? '#8bbcff' : '#c9d8ea'}
              />
            ))}
          </svg>
          <Dial
            label="Heavy bead ÷ light bead"
            value={ratio}
            display={ratio.toFixed(1)}
            min={1.2}
            max={6}
            step={0.1}
            onChange={setRatio}
          />
          <Dial
            label="Drive frequency ÷ band edge"
            value={drive}
            display={drive.toFixed(2)}
            min={0.05}
            max={1.5}
            step={0.01}
            onChange={setDrive}
          />
          <p className="instrument-answer" aria-live="polite">
            {regime}{' '}
            <span>
              Acoustic top √(2K/m_heavy) = {bands.acousticTop.toFixed(2)}; edge
              √(2K/m_light) = {bands.edge.toFixed(2)}; optical top{' '}
              {bands.opticalTop.toFixed(2)}, in units with K = m_light = 1. A
              frequency inside the gap makes a skin, not a wave: the answer to
              problem 2.3.
            </span>
          </p>
        </AmbientExhibit>
        <div className="completion-notes">
          <article>
            <span className="eyebrow">STEP-UP</span>
            <strong>The playground swing</strong>
            <p>
              Push slower than a swing’s rhythm and it sloshes along; push much
              faster and it barely moves. A band edge is a whole structure with
              a floor below which no travelling wave exists.
            </p>
          </article>
          <article>
            <span className="eyebrow">WHERE GUM USES IT</span>
            <strong>
              Mass is the admission price of a branch that starts above zero
            </strong>
            <p>
              The relative-rotation branch B3 starts at ω₀. A free quantum sits
              at the edge; a knot ticks inside the gap, a fixed fraction below
              it, and its skin is every particle’s halo.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

/** 2.3: Einstein's relation read off a dispersion curve. */
export function MassFrequency() {
  const [momentum, setMomentum] = useState(0.8);
  const gp = groupPhase(momentum || 1e-9, 1, 1);
  const energy = Math.sqrt(1 + momentum * momentum);
  const ks = Array.from({ length: 61 }, (_, i) => (i / 60) * 3);
  const x = scaleLinear().domain([0, 3]).range([50, 560]);
  const y = scaleLinear().domain([0, 3.3]).range([200, 20]);
  const branch = line<number>()
    .x((k) => x(k))
    .y((k) => y(Math.sqrt(1 + k * k)));
  const cone = line<number>()
    .x((k) => x(k))
    .y((k) => y(k));
  return (
    <div className="primer-exhibit" id="primer-mass-frequency">
      <div className="lab-heading">
        <span className="eyebrow">
          2.3 · E² = (mc²)² + (pc)², READ OFF A CURVE
        </span>
        <h3>Rest energy is a forbidden frequency.</h3>
      </div>
      <AmbientExhibit className="foundation-instrument cone-controls">
        <svg
          viewBox="0 0 600 230"
          aria-label={`The gapped branch ω² = ω₀² + c²k² against the light cone; at pc = ${momentum.toFixed(2)} mc² the energy is ${energy.toFixed(3)} mc².`}
        >
          <title>The B3 branch and the light cone, in units of the gap.</title>
          <line x1="50" y1="200" x2="560" y2="200" className="plot-axis" />
          <line x1="50" y1="20" x2="50" y2="200" className="plot-axis" />
          <path d={cone(ks) ?? ''} className="plot-cone" />
          <path d={branch(ks) ?? ''} className="plot-b3" />
          <circle cx={x(momentum)} cy={y(energy)} r="6" fill="#f4d592" />
          <text x="300" y="218" className="plot-tick">
            pc in units of mc²
          </text>
          <text x="56" y="18" className="plot-tick">
            E in units of mc²
          </text>
          <text x={x(2.2)} y={y(2.2) + 16} className="plot-label">
            light cone E = pc
          </text>
        </svg>
        <Dial
          label="Momentum pc"
          value={momentum}
          display={momentum.toFixed(2) + ' mc²'}
          min={0}
          max={3}
          step={0.01}
          onChange={setMomentum}
        />
        <Readouts
          items={[
            ['Energy E', energy.toFixed(3) + ' mc²'],
            ['Group velocity v_g/c', gp.group.toFixed(3)],
            ['Phase velocity v_p/c', momentum > 0 ? gp.phase.toFixed(3) : '∞'],
            ['v_g · v_p', momentum > 0 ? gp.product.toFixed(3) + ' c²' : 'c²'],
            [
              'Low-momentum check mc² + p²/2m',
              (1 + (momentum * momentum) / 2).toFixed(3) + ' mc²',
            ],
          ]}
        />
        <p className="instrument-answer">
          Multiply ω² = ω₀² + c²k² by ħ² and you have Einstein’s relation with m
          ≡ ħω₀/c². The group velocity never reaches c; the phase velocity never
          drops below it; their product is c² at every momentum (problem 2.4 ★).
        </p>
      </AmbientExhibit>
    </div>
  );
}

/** 2.5: the evanescent skin, and the √2 the earlier draft lost. */
export function SkinLength() {
  const [kappa, setKappa] = useState(1 / Math.SQRT2);
  const length = skinLength(1, 1, kappa);
  const rs = Array.from({ length: 61 }, (_, i) => (i / 60) * 5);
  const x = scaleLinear().domain([0, 5]).range([50, 560]);
  const y = scaleLinear().domain([0, 1.05]).range([160, 20]);
  const profile = line<number>()
    .x((r) => x(r))
    .y((r) => y(Math.exp(-r / length)));
  return (
    <div className="primer-exhibit" id="primer-skin">
      <div className="lab-heading">
        <span className="eyebrow">2.5 · λ_skin = c_ψ / (ω₀√(1 − κ²))</span>
        <h3>Drive below the edge and the skin reaches out.</h3>
      </div>
      <AmbientExhibit className="foundation-instrument cone-controls">
        <svg
          viewBox="0 0 600 190"
          aria-label={`Skin profile for κ = ${kappa.toFixed(3)}: decay length ${length.toFixed(2)} in units of c_ψ/ω₀.`}
        >
          <title>The exponentially dying skin outside a particle.</title>
          <line x1="50" y1="160" x2="560" y2="160" className="plot-axis" />
          <path d={profile(rs) ?? ''} className="plot-b2" />
          <line
            x1={x(length)}
            y1="20"
            x2={x(length)}
            y2="160"
            stroke="#f4d592"
            strokeDasharray="3 6"
          />
          <text x={x(length) + 6} y="34" className="plot-label">
            λ = {length.toFixed(2)} c_ψ/ω₀
          </text>
          <text x="300" y="180" className="plot-tick">
            distance r in units of c_ψ/ω₀
          </text>
        </svg>
        <Dial
          label="Clock ratio κ = ω/ω₀"
          value={kappa}
          display={kappa.toFixed(3)}
          min={0.05}
          max={0.95}
          step={0.005}
          onChange={setKappa}
        />
        <Readouts
          items={[
            [
              'κ/√(1 − κ²), the right factor',
              (kappa / Math.sqrt(1 - kappa * kappa)).toFixed(3),
            ],
            ['κ, the earlier draft’s factor', kappa.toFixed(3)],
            [
              'Halo in units of ħ/(Mc)',
              ((kappa / Math.sqrt(1 - kappa * kappa)) * 1).toFixed(3),
            ],
          ]}
        />
        <p className="instrument-answer">
          With Mc² = κħω₀ the skin is λ_halo = (c_ψ/c) · ħ/(Mc) · κ/√(1 − κ²) ·
          (1/κ)·κ … and at κ = 1/√2 both factors in the readout are equal to one
          another’s reciprocal: κ ≈ 0.707 while κ/√(1 − κ²) = 1, so the correct
          halo is √2 longer than the earlier draft printed (problem 2.5 ★). That
          √2 is the yardstick of Chapter 12.
        </p>
      </AmbientExhibit>
    </div>
  );
}

/** 3.2: Lemma 1 at your level — a rigid rotation changes φ but not ψ or ∇φ. */
export function Objectivity() {
  const [rigid, setRigid] = useState(18);
  const [twist, setTwist] = useState(0);
  const grains = Array.from({ length: 16 }, (_, i) => [
    i % 4,
    Math.floor(i / 4),
  ]);
  const centre = 5;
  return (
    <div className="primer-exhibit" id="primer-objectivity">
      <div className="lab-heading">
        <span className="eyebrow">3.2 · LEMMA 1, BY HAND</span>
        <h3>Turn everything, and nothing objective changes.</h3>
      </div>
      <div className="spectrum-layout">
        <AmbientExhibit className="foundation-instrument">
          <svg
            viewBox="0 0 600 300"
            aria-label={`A lattice of grains rotated rigidly by ${rigid}° with one grain twisted by a further ${twist}°.`}
          >
            <title>
              Grains with painted faces on a lattice; one grain may turn
              relative to its neighbours.
            </title>
            <g transform={`translate(300,150) rotate(${rigid})`}>
              {[0, 1, 2, 3].map((i) => (
                <g key={i}>
                  <line
                    x1={-90 + i * 60}
                    y1="-90"
                    x2={-90 + i * 60}
                    y2="90"
                    stroke="#365271"
                  />
                  <line
                    x1="-90"
                    y1={-90 + i * 60}
                    x2="90"
                    y2={-90 + i * 60}
                    stroke="#365271"
                  />
                </g>
              ))}
              {grains.map(([gx, gy], i) => (
                <g
                  key={i}
                  transform={`translate(${-90 + gx * 60},${-90 + gy * 60}) rotate(${i === centre ? twist : 0})`}
                >
                  <circle
                    r="16"
                    fill={i === centre ? '#183c36' : '#122235'}
                    stroke={i === centre ? '#9acbb9' : '#5f7fa3'}
                  />
                  <line
                    x1="0"
                    y1="0"
                    x2="14"
                    y2="0"
                    stroke="#f1a17d"
                    strokeWidth="3"
                  />
                </g>
              ))}
            </g>
          </svg>
          <Dial
            label="Rigid rotation of the whole material, ω"
            value={rigid}
            display={rigid + '°'}
            min={-45}
            max={45}
            step={1}
            onChange={setRigid}
          />
          <Dial
            label="Extra twist of one grain against its neighbours"
            value={twist}
            display={twist + '°'}
            min={-45}
            max={45}
            step={1}
            onChange={setTwist}
          />
          <Readouts
            items={[
              ['Change in the grain’s orientation φ', rigid + twist + '°'],
              ['Change in the lattice rotation ½ curl u', rigid + '°'],
              ['Change in the relative rotation ψ', twist + '°'],
              [
                'Change in the wryness ∇φ (disagreement)',
                twist === 0 ? '0' : 'nonzero near the grain',
              ],
            ]}
          />
          <p className="instrument-answer">
            {twist === 0
              ? 'A rigid rotation shifts φ and ½ curl u by the same angle, so ψ = φ − ½ curl u does not change, and the gradient of a constant is zero. Nothing the energy may depend on has moved: that is objectivity, and you have proved Lemma 1.'
              : 'Now one grain disagrees with its lattice: ψ and ∇φ are nonzero, and the energy may, and does, depend on them. Relative texture is what the material is allowed to feel.'}
          </p>
        </AmbientExhibit>
        <div className="completion-notes">
          <article>
            <span className="eyebrow">THE RULE WITH TEETH</span>
            <strong>No sealed box detects its own rigid rotation</strong>
            <p>
              GUM builds its potential energy only from the relative texture P̃ =
              R̃[u]†Q̃: the grain orientation with the lattice’s own rotation
              undone. The paper calls this Flag F10′, the material’s gauge
              principle.
            </p>
          </article>
          <article>
            <span className="eyebrow">WHY IT IS GRADED CAREFULLY</span>
            <strong>Adopted to forbid a photon mass</strong>
            <p>
              Because the principle was chosen to kill an unwanted mass term,
              GUM does not claim to explain masslessness with it; the credit
              goes to what it forces unasked (Chapter 4).
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

/** 4.2: the weathervane field, E as swing rate and B as disagreement. */
export function Vanes() {
  const [view, setView] = useState('E');
  const [t, setT] = useState(0);
  const stage = useRef<HTMLDivElement>(null);
  useSceneClock(stage, (_, dt) => setT((old) => old + dt));
  const cols = 10,
    rows = 5;
  return (
    <div className="primer-exhibit" id="primer-vanes" ref={stage}>
      <div className="lab-heading">
        <span className="eyebrow">4.2 · STEP-UP, ANIMATED</span>
        <h3>Faraday’s law is a law of looking.</h3>
      </div>
      <AmbientExhibit className="foundation-instrument">
        <ToggleGroup
          className="lab-tabs"
          value={[view]}
          onValueChange={(v) => v[0] && setView(v[0])}
          aria-label="Field to colour"
        >
          <ToggleGroupItem value="E">
            E: how fast each vane swings
          </ToggleGroupItem>
          <ToggleGroupItem value="B">
            B: how much neighbours disagree
          </ToggleGroupItem>
        </ToggleGroup>
        <svg
          viewBox="0 0 600 300"
          aria-label={`A wave of weathervanes, coloured by ${view === 'E' ? 'swing rate' : 'neighbour disagreement'}.`}
        >
          <title>
            One weathervane per grain, carrying a travelling wave of
            orientation.
          </title>
          {Array.from({ length: rows }, (_, r) =>
            Array.from({ length: cols }, (_, c) => {
              const phase = c / 1.5 - t * 2.2;
              const angle = 35 * Math.sin(phase);
              const rate = Math.abs(Math.cos(phase));
              const disagreement = Math.abs(
                Math.sin(phase + 1 / 1.5) - Math.sin(phase),
              );
              const strength =
                view === 'E' ? rate : Math.min(1, disagreement * 1.6);
              const tint =
                view === 'E'
                  ? `rgba(139,188,255,${0.25 + 0.75 * strength})`
                  : `rgba(241,161,125,${0.25 + 0.75 * strength})`;
              return (
                <g
                  key={r + '-' + c}
                  transform={`translate(${45 + c * 57},${50 + r * 52}) rotate(${angle})`}
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
                  <circle r="2.5" fill="#c9d8ea" />
                </g>
              );
            }),
          )}
        </svg>
        <p className="instrument-answer">
          {view === 'E'
            ? 'Bright vanes are swinging fastest: E_φ = −∂A/∂t with A the orientation itself. Where the pattern is at its extremes the vanes are momentarily still.'
            : 'Bright vanes disagree most with their neighbours: B = curl A. Watch the disagreement pattern travel; if it changes, some vanes must be swinging. That is Faraday’s law, identically.'}
          <span>
            div B = 0 is not a law here but a tautology: B is a curl, and curls
            have no divergence.
          </span>
        </p>
      </AmbientExhibit>
    </div>
  );
}

/** 4.3: c² = γ_eff/(2J), a stiffness over an inertia. */
export function LightSpeedDial() {
  const [stiffness, setStiffness] = useState(1);
  const [inertia, setInertia] = useState(1);
  const ratio = Math.sqrt(stiffness / inertia);
  return (
    <div className="primer-exhibit" id="primer-light-speed">
      <div className="lab-heading">
        <span className="eyebrow">
          4.3 · LIGHT EXISTS BECAUSE SPINNING GRAINS HAVE INERTIA
        </span>
        <h3>A stiffness over an inertia, like sound in steel.</h3>
      </div>
      <div className="foundation-instrument cone-controls">
        <Dial
          label="Twist stiffness γ_eff, relative to the vacuum’s"
          value={stiffness}
          display={stiffness.toFixed(2) + '×'}
          min={0.25}
          max={4}
          step={0.05}
          onChange={setStiffness}
        />
        <Dial
          label="Rotational inertia J, relative to the vacuum’s"
          value={inertia}
          display={inertia.toFixed(2) + '×'}
          min={0.25}
          max={4}
          step={0.05}
          onChange={setInertia}
        />
        <div className="mass-equation" aria-live="polite">
          <span>c² = γ_eff / (2J)</span>
          <strong>c = {ratio.toFixed(3)} × c₀</strong>
          <small>
            Double J at fixed γ_eff and c falls by √2 (problem 4.3). Maxwell’s
            displacement current is the term Jφ̈: the grains’ resistance to being
            spun up. Light’s energy density is ½ε*(E² + c²B²) with ε* = J/κ_B².
          </small>
        </div>
      </div>
    </div>
  );
}

/** 6.1 and 14.6: a wedge makes a cone (curvature); a cut and a shift make a dislocation (torsion). */
export function DefectPaper({ mode }: { mode: 'cone' | 'both' }) {
  const [kind, setKind] = useState('cone');
  const [wedge, setWedge] = useState(90);
  const [shift, setShift] = useState(1);
  const theta = coneHalfAngle(wedge);
  const a = (wedge * Math.PI) / 360;
  const anchor = mode === 'cone' ? 'primer-cone' : 'primer-defects';
  const showCone = mode === 'cone' || kind === 'cone';
  return (
    <div className="primer-exhibit defect-paper" id={anchor}>
      <div className="lab-heading">
        <span className="eyebrow">
          {mode === 'cone'
            ? '6.1 · TRY THIS, WITH THE NUMBERS'
            : '14.6 · SPACETIME ON YOUR DESK'}
        </span>
        <h3>
          {mode === 'cone'
            ? 'Cut a wedge, tape the edges: a cone.'
            : 'Curvature and torsion, made with scissors.'}
        </h3>
      </div>
      <div className="foundation-instrument">
        {mode === 'both' && (
          <ToggleGroup
            className="lab-tabs"
            value={[kind]}
            onValueChange={(v) => v[0] && setKind(v[0])}
            aria-label="Defect"
          >
            <ToggleGroupItem value="cone">
              Disclination · a wedge · curvature
            </ToggleGroupItem>
            <ToggleGroupItem value="dislocation">
              Dislocation · a shifted cut · torsion
            </ToggleGroupItem>
          </ToggleGroup>
        )}
        {showCone ? (
          <>
            <svg
              viewBox="0 0 600 260"
              aria-label={`A disc with a ${wedge}° wedge removed cones to a half-angle of ${theta.toFixed(1)}°.`}
            >
              <title>
                The flat disc with its wedge, and the cone it becomes.
              </title>
              <g transform="translate(160,130)">
                <path
                  d={`M0 0 L${100 * Math.cos(-Math.PI / 2 + a)} ${100 * Math.sin(-Math.PI / 2 + a)} A100 100 0 ${wedge < 180 ? 1 : 0} 0 ${100 * Math.cos(-Math.PI / 2 - a)} ${100 * Math.sin(-Math.PI / 2 - a)} Z`}
                  fill="#e8e5dd"
                  stroke="#1b2430"
                />
                {[-60, -30, 0, 30, 60].map((yy) => (
                  <line
                    key={yy}
                    x1="-100"
                    y1={yy}
                    x2="100"
                    y2={yy}
                    stroke="#4f6f8f"
                    strokeWidth="1"
                    opacity="0.7"
                  />
                ))}
                <text x="0" y="125" className="plot-tick">
                  Frank angle {wedge}°
                </text>
              </g>
              <g transform="translate(440,150)">
                <path
                  d={`M0 ${-120 * Math.cos((theta * Math.PI) / 180) - 10} L${-120 * Math.sin((theta * Math.PI) / 180)} 60 Q0 ${90} ${120 * Math.sin((theta * Math.PI) / 180)} 60 Z`}
                  fill="#e8e5dd"
                  stroke="#1b2430"
                />
                <circle
                  cx="0"
                  cy={-120 * Math.cos((theta * Math.PI) / 180) - 10}
                  r="5"
                  fill="#b5693b"
                />
                <text x="0" y="110" className="plot-tick">
                  half-angle θ = {theta.toFixed(1)}°
                </text>
              </g>
            </svg>
            <Dial
              label="Wedge removed"
              value={wedge}
              display={wedge + '°'}
              min={10}
              max={200}
              step={1}
              onChange={setWedge}
            />
            <Readouts
              items={[
                ['sin θ = 1 − wedge/360', (1 - wedge / 360).toFixed(3)],
                ['Half-angle θ', theta.toFixed(1) + '°'],
                [
                  'Problem 6.1, a 90° wedge',
                  coneHalfAngle(90).toFixed(1) + '°',
                ],
              ]}
            />
            <p className="instrument-answer">
              Quantised: the removed angle is locked by the tape. Conserved: all
              the wrongness sits at the tip, and only a negative wedge cancels
              it. Felt far away: lines drawn parallel before coning converge
              afterwards, the elastic far field that in GUM is Coulomb’s law.{' '}
              <span>
                The cone gives charge its topology, not its strength: α is
                borrowed.
              </span>
            </p>
          </>
        ) : (
          <>
            <svg
              viewBox="0 0 600 260"
              aria-label={`A lattice cut halfway across and shifted by ${shift.toFixed(2)} lattice steps: a loop around the cut’s end fails to close by that much.`}
            >
              <title>A dislocation: cut, shift by one step, re-glue.</title>
              {Array.from({ length: 7 }, (_, i) => (
                <g key={i}>
                  <line
                    x1="60"
                    y1={40 + i * 30}
                    x2="300"
                    y2={40 + i * 30}
                    stroke="#5f7fa3"
                  />
                  <line
                    x1="300"
                    y1={40 + i * 30 + (i < 4 ? 30 * shift : 0)}
                    x2="540"
                    y2={40 + i * 30 + (i < 4 ? 30 * shift : 0)}
                    stroke="#5f7fa3"
                  />
                </g>
              ))}
              <line
                x1="300"
                y1="40"
                x2="300"
                y2="160"
                stroke="#f1a17d"
                strokeWidth="3"
              />
              <circle cx="300" cy="160" r="5" fill="#f1a17d" />
              <path
                d={`M240 110 L360 110 L360 ${200} L240 200 L240 ${110 + 30 * shift}`}
                fill="none"
                stroke="#8bbcff"
                strokeWidth="2"
              />
              <circle cx="240" cy={110 + 30 * shift} r="4" fill="#f4d592" />
              <text x="470" y="236" className="plot-tick">
                the loop misses by {shift.toFixed(2)} step
                {shift === 1 ? '' : 's'}
              </text>
            </svg>
            <Dial
              label="Shift of one side of the cut"
              value={shift}
              display={shift.toFixed(2) + ' steps'}
              min={0}
              max={2}
              step={0.05}
              onChange={setShift}
            />
            <p className="instrument-answer">
              Count equal steps around a rectangle enclosing the cut’s end: it
              fails to close by the shift. That failure is torsion, the second
              charge of Einstein–Cartan geometry; the cone’s converging lines
              are the first, curvature.{' '}
              <span>
                In GUM, dislocation density is torsion and disclination density
                is curvature; the dynamics of that geometry is owed (K-G).
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

/** 6.2: Aharonov–Bohm as holonomy, with the Foucault pendulum as the floor model. */
export function Foucault() {
  const [latitude, setLatitude] = useState(41);
  const [t, setT] = useState(0);
  const stage = useRef<HTMLDivElement>(null);
  useSceneClock(stage, (_, dt) => setT((old) => (old + dt) % 24));
  const perDay = foucaultRotation(latitude);
  const angle = (perDay * t) / 24;
  return (
    <div className="primer-exhibit" id="primer-foucault" ref={stage}>
      <div className="lab-heading">
        <span className="eyebrow">6.2 · HOLONOMY ON A FLOOR</span>
        <h3>The surface did it.</h3>
      </div>
      <div className="spectrum-layout">
        <AmbientExhibit className="foundation-instrument">
          <svg
            viewBox="0 0 600 260"
            aria-label={`A Foucault pendulum at latitude ${latitude}° turns ${perDay.toFixed(0)}° per sidereal day; the swing plane is shown after ${t.toFixed(1)} of 24 hours.`}
          >
            <title>
              The swing plane of a Foucault pendulum, turning through the day.
            </title>
            <circle cx="300" cy="130" r="110" fill="none" stroke="#365271" />
            {Array.from({ length: 24 }, (_, i) => (
              <line
                key={i}
                x1={round(300 + 104 * Math.cos((i * Math.PI) / 12))}
                y1={round(130 + 104 * Math.sin((i * Math.PI) / 12))}
                x2={round(300 + 110 * Math.cos((i * Math.PI) / 12))}
                y2={round(130 + 110 * Math.sin((i * Math.PI) / 12))}
                stroke="#5f7fa3"
              />
            ))}
            <g transform={`translate(300,130) rotate(${-angle})`}>
              <line
                x1="-100"
                y1="0"
                x2="100"
                y2="0"
                stroke="#8bbcff"
                strokeWidth="3"
              />
              <circle cx={100 * Math.sin(t * 4)} cy="0" r="7" fill="#f1a17d" />
            </g>
            <text x="300" y="252" className="plot-tick">
              hour {t.toFixed(0)} · plane turned {angle.toFixed(0)}°
            </text>
          </svg>
          <Dial
            label="Latitude"
            value={latitude}
            display={latitude + '°'}
            min={0}
            max={90}
            step={1}
            onChange={setLatitude}
          />
          <Readouts
            items={[
              [
                '360° × sin(latitude) per sidereal day',
                perDay.toFixed(1) + '°',
              ],
              ['At 41° (problem 6.2)', foucaultRotation(41).toFixed(0) + '°'],
            ]}
          />
        </AmbientExhibit>
        <div className="completion-notes">
          <article>
            <span className="eyebrow">THE DICTIONARY</span>
            <strong>Loop on a sphere → loop around a flux</strong>
            <p>
              Enclosed solid angle → enclosed flux; swing plane → quantum phase,
              Δφ = qΦ_B/ħ. Nothing pushed the pendulum; the geometry of its loop
              turned it. Under the Gauss completion the Aharonov–Bohm holonomy
              is exactly the textbook one.
            </p>
          </article>
          <article>
            <span className="eyebrow">STEP-UP</span>
            <strong>
              An arrow walked around a triangle on a basketball comes back
              rotated
            </strong>
            <p>
              Keep it locally straight at every step; the surface still turns
              it. Carry a frame around a twist defect and the same happens.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

/** 6.4: the helical instability in four lines. */
export function HelixInstability() {
  const [chi, setChi] = useState(1.2);
  const [gamma, setGamma] = useState(1);
  const [delta, setDelta] = useState(0.9);
  const q = helixWavenumber(chi, gamma);
  const verdict = helixCriterion(chi, gamma, delta);
  const thetas = Array.from({ length: 61 }, (_, i) => (i / 60) * (Math.PI / 2));
  const values = thetas.map((th) => helixFreeEnergy(th, q, chi, gamma, delta));
  const lo = Math.min(0, ...values),
    hi = Math.max(0.2, ...values);
  const x = scaleLinear()
    .domain([0, Math.PI / 2])
    .range([50, 560]);
  const y = scaleLinear().domain([lo, hi]).range([180, 20]);
  const curve = line<number>()
    .x((th) => x(th))
    .y((th) => y(helixFreeEnergy(th, q, chi, gamma, delta)));
  const best = thetas[values.indexOf(Math.min(...values))];
  return (
    <div className="primer-exhibit" id="primer-helix">
      <div className="lab-heading">
        <span className="eyebrow">6.4 · f(θ, q⋆) = −(χ²/2γ) sin²θ + ½Δ²θ²</span>
        <h3>The vacuum twists itself iff χ² &gt; γΔ².</h3>
      </div>
      <AmbientExhibit className="foundation-instrument cone-controls">
        <svg
          viewBox="0 0 600 210"
          aria-label={`Free energy against tilt angle at the optimal wavenumber; margin ${verdict.margin.toFixed(2)}, ${verdict.condenses ? 'a helix forms' : 'the untwisted state wins'}.`}
        >
          <title>
            The free energy of a tilt along a helix, at the optimal wavenumber.
          </title>
          <line x1="50" y1={y(0)} x2="560" y2={y(0)} className="plot-axis" />
          <line x1="50" y1="20" x2="50" y2="180" className="plot-axis" />
          <path d={curve(thetas) ?? ''} className="plot-b2" />
          <circle
            cx={x(best)}
            cy={y(Math.min(...values))}
            r="6"
            fill="#f4d592"
          />
          <text x="300" y="200" className="plot-tick">
            tilt angle θ, 0 to π/2
          </text>
          <text x="56" y="18" className="plot-tick">
            f at q⋆ = χ/γ
          </text>
        </svg>
        <Dial
          label="Chiral gain χ"
          value={chi}
          display={chi.toFixed(2)}
          min={0}
          max={2}
          step={0.01}
          onChange={setChi}
        />
        <Dial
          label="Twist stiffness γ"
          value={gamma}
          display={gamma.toFixed(2)}
          min={0.3}
          max={2}
          step={0.01}
          onChange={setGamma}
        />
        <Dial
          label="Tilt gap Δ"
          value={delta}
          display={delta.toFixed(2)}
          min={0.2}
          max={2}
          step={0.01}
          onChange={setDelta}
        />
        <Readouts
          items={[
            ['Line 1 · q⋆ = χ/γ', q.toFixed(3)],
            ['Line 3 · ½(Δ² − χ²/γ)', verdict.coefficient.toFixed(3)],
            ['Margin 𝔪 = χ²/(γΔ²)', verdict.margin.toFixed(2)],
            [
              'Tilt sin θ_c = √(1 − 1/𝔪)',
              verdict.condenses ? verdict.tilt.toFixed(2) : '—',
            ],
          ]}
        />
        <p className="instrument-answer">
          {verdict.condenses
            ? 'The coefficient of θ² is negative: the untwisted state is unstable and the minimum sits at a finite tilt. The vacuum is a helix.'
            : 'The coefficient of θ² is positive: the minimum is at θ = 0 and no helix forms. In GUM’s gapped relative-rotation sector this is the case.'}
          <span>
            GUM’s helix forms on the star sector’s almost-free manifold, where
            the margin is a pure number, 𝔪 = 1.9 ± 0.4 ⬜, giving sin θ_c = 0.69
            ± 0.11: the blue fog of Flag F13. The energy gain vanishes exactly
            at χ² = γΔ² (problem 6.3).
          </span>
        </p>
      </AmbientExhibit>
    </div>
  );
}
