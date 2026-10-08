'use client';
import { lazy, Suspense, useId, useRef, useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';
import {
  AmbientExhibit,
  DemoControl,
  useGentleDemo,
} from '@/components/exhibit-motion';
import { ExhibitBoundary } from '@/components/exhibit-boundary';
import { Term } from '@/components/glossary';
import {
  admittedHalfIntegers,
  axes,
  bandEdge,
  bogomolnyCoefficient,
  channelingResonance,
  clockFrequency,
  clockParticles,
  closureNumber,
  closureSolution,
  crystals,
  haloLength,
  kappaFromLine,
  positroniumLine,
  resonanceWidth,
  routhianWindow,
  rowSpacing,
} from '@/lib/gum-particle';
import { hedgehog } from '@/lib/gum-knot';
import { electronMassEv, muonMassEv, tauMassEv } from '@/lib/gum-constants';
const KnotExplorer = lazy(() => import('@/components/knot-explorer'));

const mev = (ev: number, digits = 2) => (ev / 1e6).toFixed(digits) + ' MeV';
/** Server and browser can disagree in the last bit of exp and atan2; drawn coordinates must not. */
const round = (value: number) => Math.round(value * 1000) / 1000;

/** A flat cross-section of the hedgehog: the x–z plane, arrows for π = sin f x̂, shade for σ_P. */
export function KnotSection({
  kappa,
  spinning,
}: {
  kappa: number;
  spinning: boolean;
}) {
  const radius = 1;
  const halo = (kappa / Math.sqrt(1 - kappa * kappa)) * 0.8;
  const cells = Array.from({ length: 13 }, (_, i) =>
    Array.from({ length: 13 }, (_, j) => [(i - 6) / 2.6, (j - 6) / 2.6]),
  );
  return (
    <svg
      viewBox="0 0 560 560"
      className={'root-diagram knot-section ' + (spinning ? 'spinning' : '')}
      aria-label={`Cross-section of a degree-one hedgehog texture with κ = ${kappa.toFixed(2)}: arrows show the vector part of the texture, which vanishes at the centre and at the core edge; the halo decays over ${halo.toFixed(2)} core radii outside.`}
    >
      <title>
        Hedgehog texture cross-section: core inside the solid circle, halo
        outside.
      </title>
      <circle
        cx="280"
        cy="280"
        r={radius * 100}
        className="root-guide"
        strokeDasharray="none"
      />
      <circle
        cx="280"
        cy="280"
        r={(radius + halo) * 100}
        className="root-guide"
      />
      {cells.flat().map(([x, z], i) => {
        const field = hedgehog(x, 0, z, radius);
        const r = Math.hypot(x, z);
        const length = round(
          r < radius
            ? 26 * Math.hypot(field.pi[0], field.pi[2])
            : 12 * Math.exp(-(r - radius) / halo) * (radius / r),
        );
        if (length < 0.4) return null;
        const angle = round((Math.atan2(z, x) * 180) / Math.PI);
        const tint =
          r < radius ? (field.sigma < 0 ? '#8bbcff' : '#9acbb9') : '#f1a17d';
        return (
          <g
            key={i}
            transform={`translate(${280 + x * 100},${280 + z * 100}) rotate(${angle})`}
          >
            <line
              x1={-length / 2}
              y1="0"
              x2={length / 2}
              y2="0"
              stroke={tint}
              strokeWidth={r < radius ? 2.2 : 1.4}
              opacity={r < radius ? 0.95 : 0.7}
            />
            <path
              d={`M${length / 2 - 4} -3 L${length / 2} 0 L${length / 2 - 4} 3`}
              fill="none"
              stroke={tint}
              strokeWidth="1.4"
            />
          </g>
        );
      })}
      <circle cx="280" cy="280" r="5" fill="#f4d592" />
    </svg>
  );
}

export function KnotChapterExplorer({
  depth,
  anchor = 'knot-explorer',
}: {
  depth: string;
  anchor?: string;
}) {
  const uid = useId();
  const [view, setView] = useState('3d');
  const [kappa, setKappa] = useState(1 / Math.SQRT2);
  const flatViewControl = useRef<HTMLButtonElement>(null);
  const halo = haloLength(electronMassEv, kappa);
  return (
    <div className="explorer-shell" id={anchor}>
      <div className="explorer-top">
        <span>
          <span className="live-dot" /> KNOT EXPLORER · DEGREE ONE
        </span>
        <span>σ_P = cos f(r) · π = sin f(r) x̂</span>
      </div>
      <div className="explorer-body">
        <div className="geometry-display">
          <ToggleGroup
            className="view-selector"
            value={[view]}
            onValueChange={(v) => v[0] && setView(v[0])}
            aria-label="Knot view"
          >
            <ToggleGroupItem value="2d" ref={flatViewControl}>
              The flat section
            </ToggleGroupItem>
            <ToggleGroupItem value="3d">Turn it in 3D</ToggleGroupItem>
          </ToggleGroup>
          {view === '3d' ? (
            <ExhibitBoundary
              onFlatView={() => setView('2d')}
              flatViewControl={flatViewControl}
            >
              <Suspense
                fallback={
                  <div className="three-loading">Preparing the 3D texture…</div>
                }
              >
                <KnotExplorer kappa={kappa} />
              </Suspense>
            </ExhibitBoundary>
          ) : (
            <AmbientExhibit>
              <KnotSection kappa={kappa} spinning />
            </AmbientExhibit>
          )}
          <div className="plot-caption">
            <span>{view === '3d' ? 'ISOROTATING TEXTURE' : 'x–z SECTION'}</span>
            <span>GOLD = CENTRE, WHERE P̃ = −1</span>
          </div>
        </div>
        <div className="cell-inspector">
          <span className="eyebrow">THE KNOT’S TWO SCALES</span>
          <h3>A compact core and an evanescent halo.</h3>
          <p>
            Inside the compacton the profile is f₀(r) = 2 arccos(r/R*), from π
            at the centre to 0 at the edge; the vector part of the texture
            vanishes at both and peaks between. Outside, the isorotation at ω =
            κω₀ drives a relative-rotation field that decays over λ_halo =
            (c_ψ/c)(ħ/Mc) κ/√(1 − κ²).
          </p>
          <label id={uid + 'kappa-label'} className="foundation-slider-label">
            Clock ratio κ = ω/ω₀{' '}
            <output aria-live="off">{kappa.toFixed(3)}</output>
          </label>
          <Slider
            min={0.5}
            max={0.95}
            step={0.005}
            value={[kappa]}
            onValueChange={(v) => setKappa(Array.isArray(v) ? v[0] : v)}
            aria-labelledby={uid + 'kappa-label'}
          />
          <dl className="intersection-table">
            <div>
              <dt>Electron halo length</dt>
              <dd>{(halo * 1e13).toFixed(2)} × 10⁻¹³ m</dd>
            </div>
            <div>
              <dt>Band edge Mc²/κ</dt>
              <dd>{(bandEdge(electronMassEv, kappa) / 1e3).toFixed(1)} keV</dd>
            </div>
            <div
              className={
                Math.abs(kappa - 1 / Math.SQRT2) < 0.004 ? 'common-row' : ''
              }
            >
              <dt>Closure value</dt>
              <dd>
                κ = 1/√2{' '}
                <span>
                  {Math.abs(kappa - 1 / Math.SQRT2) < 0.004 ? 'selected' : ''}
                </span>
              </dd>
            </div>
          </dl>
          <p className="source-note">
            The texture is a mathematical object on S³, drawn in the space of
            the parameter grid. It is not a picture of the electron’s shape:
            Theorem 15 puts the core at the structural scale ℓ_s ≲ 1.5×10⁻²⁷ m
            and the halo at the Compton scale, a ratio the drawing cannot show.
          </p>
          {depth === 'math' && (
            <p className="source-note">
              Closure numbers at κ = 1/√2: 𝔠 ={' '}
              {closureNumber().value.toFixed(4)} against the rigorous floor 2√2
              = {closureNumber().floor.toFixed(4)}; C₆ ={' '}
              {bogomolnyCoefficient().toFixed(4)} Λm̃_V. Both are recomputed in
              the browser checks.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function ClosureExhibit({
  depth,
  anchor = 'closure',
}: {
  depth: string;
  anchor?: string;
}) {
  const uid = useId();
  const [rotor, setRotor] = useState(50);
  const [pair, setPair] = useState('11');
  const j = rotor / 100;
  const [a, b] = pair === '11' ? [1, 1] : [3, 1];
  const window = routhianWindow(a, b);
  const admitted = admittedHalfIntegers(window);
  const solution = j < 1 ? closureSolution(Math.min(0.99, j)) : null;
  return (
    <div className="closure-exhibit" id={anchor}>
      <div className="lab-heading">
        <span className="eyebrow">
          LEMMA 4, THEOREM 14, PROPOSITION 12 · THE CLOSURE OF ħ
        </span>
        <h3>
          The quarter is kinematic.
          <br />
          The window is constitutive.
        </h3>
        <p>
          Two conditions close the <Term id="knot">knot</Term> with the same ħ:
          L = jħ and E = ħω. For any rigid rotor satisfying both, E_rot/E = j/2,
          independent of profile. What a bench tests is whether such objects
          exist and what their j is. For the (1,1) Routhian the window is 0 &lt;
          j &lt; 1 and j = ½ is the only half-integer in it; for the (3,1) pair
          j = 1 would be admissible. GUM commits to (1,1) as Flag F-B1 and
          prints the kill.
        </p>
      </div>
      <div className="foundation-instrument closure-instrument">
        <ToggleGroup
          className="lab-tabs"
          value={[pair]}
          onValueChange={(v) => v[0] && setPair(v[0])}
          aria-label="Derrick pair"
        >
          <ToggleGroupItem value="11">
            (a, b) = (1, 1) · Flag F-B1
          </ToggleGroupItem>
          <ToggleGroupItem value="31">
            (a, b) = (3, 1) · sextic–potential dilation
          </ToggleGroupItem>
        </ToggleGroup>
        <label id={uid + 'rotor-label'} className="foundation-slider-label">
          Rotor number j <output aria-live="off">{j.toFixed(2)}</output>
        </label>
        <Slider
          min={5}
          max={95}
          step={1}
          value={[rotor]}
          onValueChange={(v) => setRotor(Array.isArray(v) ? v[0] : v)}
          aria-labelledby={uid + 'rotor-label'}
        />
        <div className="pitch-readouts" aria-live="polite">
          <span>
            E_rot / E = j/2<strong>{(j / 2).toFixed(3)}</strong>
          </span>
          <span>
            Window 0 &lt; j &lt; 2a/(a+b)<strong>{window.toFixed(2)}</strong>
          </span>
          <span>
            Admitted half-integers<strong>{admitted.join(', ')}</strong>
          </span>
          <span>
            (1,1) solution
            <strong>
              {solution
                ? `w = ${solution.w.toFixed(2)}, V = ${solution.dilation.toFixed(3)}`
                : '—'}
            </strong>
          </span>
        </div>
        <p className="instrument-answer">
          {Math.abs(j - 0.5) < 0.006
            ? 'At j = ½: w = 4 and V = √2, with E_rot/E exactly 25%. This is GUM’s spin-½ knot.'
            : j >= window
              ? 'Outside the window: stationarity and the clock condition cannot both hold.'
              : 'Inside the window: a solution exists, but only half-integer j can be a fermion.'}{' '}
          <span>
            Three corollaries hold under F-B1: no elementary massive species of
            spin 0 or 1, no knot-elementary scalar, and an elementary spin-3/2
            particle would falsify the closure.
          </span>
        </p>
      </div>
      {depth !== 'story' && (
        <p className="source-note">
          Closure gives ħ = 𝔠Λ√J with 𝔠 = √(2ê_tot 𝔦_tot), one relation among
          three imports. The condition is dynamically enforced: a displaced 𝔠
          beats against the Nelson phase and relocks through the gapless
          channels in about 10⁻¹² s at the electron clock. Planck’s constant is
          epoch-constant dynamically, not by decree. The saturated closure gives
          𝔠 = {closureNumber().value.toFixed(4)} and κ = 1/√2; recomputing it in
          one consistent normalisation is item (2) of audit K-N.
        </p>
      )}
    </div>
  );
}

export function ChannelingExhibit({
  anchor = 'channeling',
}: {
  anchor?: string;
} = {}) {
  const uid = useId();
  const [crystal, setCrystal] = useState<(typeof crystals)[number]['id']>('Si');
  const [axis, setAxis] = useState<(typeof axes)[number]['id']>('110');
  const [particle, setParticle] =
    useState<(typeof clockParticles)[number]['id']>('electron');
  const [thickness, setThickness] = useState(1);
  const host = useRef<HTMLDivElement>(null);
  const demo = useGentleDemo(
    host,
    () =>
      setCrystal(
        (c) =>
          crystals[
            (crystals.findIndex((x) => x.id === c) + 1) % crystals.length
          ].id,
      ),
    11000,
  );
  const mass = clockParticles.find((p) => p.id === particle)!.mass;
  const spacing = rowSpacing(crystal, axis);
  const fundamental = channelingResonance(mass, spacing);
  const width = resonanceWidth(thickness * 1e-6, spacing);
  const harmonics = [1, 2, 3, 4].map((n) => ({
    n,
    p: channelingResonance(mass, spacing, n),
  }));
  const span = Math.max(fundamental * 1.25, 1);
  return (
    <div
      className="channeling-exhibit"
      id={anchor}
      ref={host}
      {...demo.handlers}
    >
      <div className="lab-heading">
        <span className="eyebrow">
          PROPOSITION 15 · THE CLOCK MEETS THE CRYSTAL ROWS
        </span>
        <h3>
          If the clock is physical,
          <br />
          the rows can drive it.
        </h3>
        <p>
          A particle carrying an internal rotation of rest-frame frequency Mc²/ħ
          traverses a crystal along an atomic row of spacing ℓ_row. In its rest
          frame the rows pass at 2πγv/ℓ_row, and resonance with the clock occurs
          at p_res c = (Mc²)² ℓ_row / hc, with sub-harmonics at p₁/n_h. Standard
          quantum mechanics predicts no resonance tied to Mc²/ħ: the Compton
          phase is global and cannot couple to a row potential.
        </p>
      </div>
      <DemoControl {...demo} />
      <div className="channeling-layout">
        <div className="channeling-controls">
          <ToggleGroup
            className="lab-tabs"
            value={[crystal]}
            onValueChange={(v) => v[0] && setCrystal(v[0] as typeof crystal)}
            aria-label="Crystal"
          >
            {crystals.map((c) => (
              <ToggleGroupItem value={c.id} key={c.id}>
                {c.name}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <ToggleGroup
            className="lab-tabs"
            value={[axis]}
            onValueChange={(v) => v[0] && setAxis(v[0] as typeof axis)}
            aria-label="Crystal axis"
          >
            {axes.map((a) => (
              <ToggleGroupItem value={a.id} key={a.id}>
                {a.name}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <label
            htmlFor={uid + 'clock-particle'}
            className="foundation-slider-label"
          >
            Particle
          </label>
          <NativeSelect
            id={uid + 'clock-particle'}
            value={particle}
            onChange={(event) =>
              setParticle(event.target.value as typeof particle)
            }
          >
            {clockParticles.map((p) => (
              <NativeSelectOption key={p.id} value={p.id}>
                {p.name}
              </NativeSelectOption>
            ))}
          </NativeSelect>
          <label
            id={uid + 'thickness-label'}
            className="foundation-slider-label"
          >
            Crystal thickness{' '}
            <output aria-live="off">{thickness.toFixed(1)} μm</output>
          </label>
          <Slider
            min={0.2}
            max={20}
            step={0.1}
            value={[thickness]}
            onValueChange={(v) => setThickness(Array.isArray(v) ? v[0] : v)}
            aria-labelledby={uid + 'thickness-label'}
          />
        </div>
        <AmbientExhibit className="foundation-instrument">
          <svg
            viewBox="0 0 600 200"
            aria-label={`Resonance comb for ${particle} in ${crystal} ${axis}: fundamental at ${mev(fundamental)}/c with sub-harmonics.`}
          >
            <title>Channeling resonances along the momentum axis.</title>
            <line x1="40" y1="150" x2="560" y2="150" className="plot-axis" />
            {harmonics.map(({ n, p }) => {
              const x = 40 + (520 * p) / span;
              const w = Math.max(2, (520 * p * width) / span);
              return (
                <g key={n}>
                  <rect
                    x={x - w / 2}
                    y={150 - 110 / n}
                    width={w}
                    height={110 / n}
                    fill={n === 1 ? '#8bbcff' : '#f1a17d'}
                    opacity="0.85"
                  />
                  <text x={x} y={150 - 110 / n - 8} className="plot-tick">
                    p₁/{n}
                  </text>
                </g>
              );
            })}
            <text x="560" y="170" className="plot-tick" textAnchor="end">
              momentum → {mev(span, 0)}/c
            </text>
          </svg>
          <div
            className="pitch-readouts"
            aria-live={demo.automatic ? 'off' : 'polite'}
          >
            <span>
              Row spacing<strong>{(spacing * 1e10).toFixed(3)} Å</strong>
            </span>
            <span>
              Fundamental p₁c<strong>{mev(fundamental)}</strong>
            </span>
            <span>
              Clock frequency
              <strong>{clockFrequency(mass).toExponential(2)} rad/s</strong>
            </span>
            <span>
              Width over {thickness.toFixed(1)} μm
              <strong>Δp/p ≈ {width.toExponential(1)}</strong>
            </span>
          </div>
          <p className="instrument-answer">
            {axis === '111'
              ? 'Along ⟨111⟩ the diamond lattice alternates two spacings, so the fundamental sits at the full period and carries a strong second harmonic.'
              : `The paper’s Stake S24 lists ${mev(channelingResonance(electronMassEv, rowSpacing('Si', '110')))}, ${mev(channelingResonance(electronMassEv, rowSpacing('Ge', '110')))} and ${mev(channelingResonance(electronMassEv, rowSpacing('C', '110')))} per c for electrons along ⟨110⟩ in Si, Ge and diamond.`}{' '}
            <span>
              Catillon et al. reported a transmission anomaly near the Si⟨110⟩
              value, unreplicated. The kill is absence at all three momenta at a
              sensitivity that would have seen it; a result at 2p₁ instead would
              favour a zitterbewegung clock.
            </span>
          </p>
        </AmbientExhibit>
      </div>
    </div>
  );
}

export function BandEdgeExhibit({
  anchor = 'band-edge',
}: {
  anchor?: string;
} = {}) {
  const uid = useId();
  const [kappa, setKappa] = useState(1 / Math.SQRT2);
  const lineEnergy = positroniumLine(kappa);
  const rows = [
    ['electron', electronMassEv],
    ['muon', muonMassEv],
    ['tau', tauMassEv],
  ] as const;
  return (
    <div className="band-edge-exhibit" id={anchor}>
      <div className="lab-heading">
        <span className="eyebrow">
          PROPOSITION 18 · WHAT EXISTS AT THE BAND EDGE?
        </span>
        <h3>
          A question with
          <br />
          a positronium answer.
        </h3>
        <p>
          The gap ħω₀ = Mc²/κ is a <Term id="band-edge">band edge</Term>: 722.7
          keV for the electron at the closure value. Either the halo has no
          discrete level below the pair threshold, or it supports a neutral
          level X with m_X = m/κ &lt; 2m, and ortho-positronium decays to γX
          with a monoenergetic photon whose energy measures κ.
        </p>
      </div>
      <div className="foundation-instrument">
        <label
          id={uid + 'edge-kappa-label'}
          className="foundation-slider-label"
        >
          Clock ratio κ <output aria-live="off">{kappa.toFixed(3)}</output>
        </label>
        <Slider
          min={0.52}
          max={0.98}
          step={0.005}
          value={[kappa]}
          onValueChange={(v) => setKappa(Array.isArray(v) ? v[0] : v)}
          aria-labelledby={uid + 'edge-kappa-label'}
        />
        <div className="guide-table-wrap">
          <table className="guide-table">
            <caption>
              Band edges Mc²/κ and halo lengths for the three charged leptons at
              the selected κ.
            </caption>
            <thead>
              <tr>
                <th scope="col">Lepton</th>
                <th scope="col">Band edge</th>
                <th scope="col">Halo length</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([name, mass]) => (
                <tr key={name}>
                  <th scope="row">{name}</th>
                  <td>
                    {bandEdge(mass, kappa) > 1e9
                      ? (bandEdge(mass, kappa) / 1e9).toFixed(4) + ' GeV'
                      : mev(bandEdge(mass, kappa), 3)}
                  </td>
                  <td>{haloLength(mass, kappa).toExponential(3)} m</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mass-equation" aria-live="polite">
          <span>E_γ = (m_e/4)(4 − κ⁻²)</span>
          <strong>
            {lineEnergy === null
              ? 'closed: the edge lies above 2m_e'
              : (lineEnergy / 1e3).toFixed(1) + ' keV'}
          </strong>
          <small>
            {lineEnergy === null
              ? 'For κ below 1/2 the halo level could not be emitted by positronium.'
              : `Inverting: κ = ${kappaFromLine(lineEnergy).toFixed(3)}. A line at 255.5 keV would fix κ = 1/√2 and settle item (2) of audit K-N.`}
          </small>
        </div>
        <p className="instrument-answer">
          GUM’s core adopts alternative (a), consistent with identifying the
          vacuum triplet as the weak triplet; the line is Stake S25, conditional
          on closure K-19 returning a level. Charge conjugation of the photon is
          −1, so the C-odd ortho state needs C_X = +1.
        </p>
      </div>
    </div>
  );
}
