'use client';
import { useId, useRef, useState } from 'react';
import { line, scaleLinear } from 'd3';
import { Slider } from '@/components/ui/slider';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  AmbientExhibit,
  DemoControl,
  useGentleDemo,
} from '@/components/exhibit-motion';
import { Term } from '@/components/glossary';
import {
  capacityFloor,
  cliffLocation,
  effectiveDegrees,
  gateBudget,
  hostingHypotheses,
  returnProbability,
  schmidtCliff,
  shotsRequired,
  towerDefinition,
  towerSchmidtRank,
  type Hosting,
} from '@/lib/gum-quantum';
import {
  bipartiteBound,
  disconnectionWindow,
  simultaneityOffset,
} from '@/lib/gum-light';
import { cmbDipoleSpeed, lightSpeed } from '@/lib/gum-constants';

const sci = (n: number, digits = 1) => {
  if (n === 0) return '0';
  const exponent = Math.floor(Math.log10(Math.abs(n)));
  const mantissa = n / 10 ** exponent;
  return (
    mantissa.toFixed(digits) +
    '×10' +
    String(exponent)
      .replace(/-/g, '⁻')
      .replace(/\d/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(d)])
  );
};

type Mode = Hosting | 'schmidt';

export function CliffExhibit({
  depth,
  anchor = 'cliff',
}: {
  depth: string;
  anchor?: string;
}) {
  const uid = useId();
  const [mode, setMode] = useState<Mode>('volume');
  const [logScale, setLogScale] = useState(Math.log10(1.5e-27));
  const [logKnob, setLogKnob] = useState(-10);
  const host = useRef<HTMLDivElement>(null);
  const demo = useGentleDemo(
    host,
    () =>
      setMode(
        (m) =>
          (['volume', 'area', 'extent', 'schmidt'] as Mode[])[
            (['volume', 'area', 'extent', 'schmidt'].indexOf(m) + 1) % 4
          ],
      ),
    13000,
  );
  const hypothesis: Hosting = mode === 'schmidt' ? 'volume' : mode;
  const knobRange: Record<Hosting, [number, number, string]> = {
    volume: [-13, -5, 'register volume V (m³)'],
    area: [-13, -3, 'minimal cut area A (m²)'],
    extent: [-9, -3, 'qubit carrier size ℓ_q (m)'],
  };
  const [knobMin, knobMax, knobLabel] = knobRange[hypothesis];
  const knob = Math.min(knobMax, Math.max(knobMin, logKnob));
  const structuralScale = 10 ** logScale;
  const effective = effectiveDegrees(hypothesis, {
    structuralScale,
    volume: 10 ** knob,
    area: 10 ** knob,
    carrier: 10 ** knob,
    qubits: 300,
  });
  const cliff = cliffLocation(effective);
  const location = mode === 'schmidt' ? schmidtCliff(effective) : cliff.base;
  const qubits = Array.from({ length: 121 }, (_, i) => 100 + i * 4);
  const x = scaleLinear().domain([100, 580]).range([60, 560]);
  const y = scaleLinear().domain([-12, 0.3]).range([200, 20]);
  const probability = (n: number) =>
    mode === 'schmidt'
      ? Math.min(0, 2 * Math.log2(effective) + Math.log2(n) - n) / Math.log2(10)
      : Math.log10(returnProbability(n, effective));
  const curve = line<number>()
    .x((n) => x(n))
    .y((n) => y(Math.max(-12, probability(n))));
  const budget = gateBudget(Math.max(2, Math.round(location)), 'all-to-all');
  return (
    <div className="cliff-exhibit" id={anchor} ref={host} {...demo.handlers}>
      <div className="lab-heading">
        <span className="eyebrow">
          THEOREMS 9–12 · DENSE STORAGE AND THE MIRROR-CIRCUIT CLIFF
        </span>
        <h3>
          A classical material has
          <br />
          no room for a Haar-random state.
        </h3>
        <p>
          A register of n_q qubits lives on ℂP^(2^n_q − 1), of real dimension
          2^(n_q+1) − 2. A material with N_eff classical degrees of freedom can
          represent every state only if n_q ≲ log₂N_eff. No circuit can test
          that bound, because circuits reach only polynomially many states.
          Under <Term id="dense-storage">dense storage</Term> it becomes
          testable: a <Term id="mirror-circuit">mirror circuit</Term> must show
          a gate-independent return-probability cliff near log₂N_eff, falling by
          half per added qubit.
        </p>
      </div>
      <DemoControl {...demo} />
      <ToggleGroup
        className="lab-tabs"
        value={[mode]}
        onValueChange={(v) => v[0] && setMode(v[0] as Mode)}
        aria-label="Hosting hypothesis"
      >
        {hostingHypotheses.map((h) => (
          <ToggleGroupItem value={h.id} key={h.id}>
            {h.label}
          </ToggleGroupItem>
        ))}
        <ToggleGroupItem value="schmidt">Schmidt hosting</ToggleGroupItem>
      </ToggleGroup>
      <div className="cliff-layout">
        <AmbientExhibit className="foundation-instrument">
          <svg
            viewBox="0 0 600 240"
            aria-label={`Normalised return probability against register size under ${mode} hosting; the cliff sits at ${location.toFixed(0)} qubits.`}
          >
            <title>
              The mirror-circuit cliff under the selected hosting hypothesis.
            </title>
            <line x1="60" y1="200" x2="560" y2="200" className="plot-axis" />
            <line x1="60" y1="20" x2="60" y2="200" className="plot-axis" />
            {[100, 200, 300, 400, 500].map((n) => (
              <text key={n} x={x(n)} y="218" className="plot-tick">
                {n}
              </text>
            ))}
            {[0, -4, -8, -12].map((v) => (
              <text key={v} x="30" y={y(v) + 4} className="plot-tick">
                10
                {String(v)
                  .replace(/-/g, '⁻')
                  .replace(/\d/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(d)])}
              </text>
            ))}
            <rect
              x={x(150)}
              y="20"
              width={x(400) - x(150)}
              height="180"
              fill="#8bbcff"
              opacity="0.05"
            />
            <text x={x(152)} y="34" className="plot-tick">
              protocol scan 150–400
            </text>
            <line
              x1={x(Math.min(580, location))}
              y1="20"
              x2={x(Math.min(580, location))}
              y2="200"
              stroke="#f4d592"
              strokeDasharray="3 5"
            />
            <path d={curve(qubits) ?? ''} className="plot-b2" />
            <text x="64" y="16" className="plot-tick">
              𝒫 = P_ret / F_noise, log scale · n_q →
            </text>
          </svg>
          <label id={uid + 'scale-label'} className="foundation-slider-label">
            Structural scale ℓ_s{' '}
            <output aria-live="off">{sci(structuralScale)} m</output>
          </label>
          <Slider
            min={-35}
            max={Math.log10(1.5e-27)}
            step={0.1}
            value={[logScale]}
            onValueChange={(v) => setLogScale(Array.isArray(v) ? v[0] : v)}
            aria-labelledby={uid + 'scale-label'}
          />
          <label id={uid + 'knob-label'} className="foundation-slider-label">
            {knobLabel} <output aria-live="off">{sci(10 ** knob)}</output>
          </label>
          <Slider
            min={knobMin}
            max={knobMax}
            step={0.1}
            value={[knob]}
            onValueChange={(v) => setLogKnob(Array.isArray(v) ? v[0] : v)}
            aria-labelledby={uid + 'knob-label'}
          />
          <p
            className="instrument-answer"
            aria-live={demo.automatic ? 'off' : 'polite'}
          >
            N_eff = {sci(effective)}; cliff at {location.toFixed(0)} qubits
            {mode === 'schmidt'
              ? ' (2 log₂N_eff, moving twice as fast with the knob)'
              : `, up to ${cliff.upper.toFixed(0)} with δn`}
            .{' '}
            <span>
              {budget.gates.toFixed(0)} two-qubit gates in a log-depth scrambler
              at that size need ε ≲ {budget.error.toExponential(1)};{' '}
              {shotsRequired().toExponential(1)} shots per instance at the
              F_noise floor.
            </span>
          </p>
        </AmbientExhibit>
        <div className="completion-notes">
          {hostingHypotheses.map((h) => (
            <article key={h.id} className={h.id === mode ? 'is-current' : ''}>
              <span className="eyebrow">{h.label.toUpperCase()}</span>
              <code>{h.formula}</code>
              <strong>{h.shift}</strong>
              <p>{h.text}</p>
            </article>
          ))}
          <p className="source-note">
            Capacity is bounded from below by every successful large entangled
            computation: the 53-qubit random-circuit experiment already implies
            χ_max ≳ {sci(capacityFloor())} across its central cut. A
            history-storing material would evade dimension counting with
            polynomially many parameters, but it could not guide knots locally
            and in real time. The kill for Stake S16 is a flat 𝒫(n_q) through
            350 qubits with verified scrambling midpoints; Stake S29 asks the
            cliff to move with the knob.
          </p>
        </div>
      </div>
      <details
        className="inline-depth"
        open={depth === 'math' ? true : undefined}
      >
        <summary>
          Why Clifford and peaked circuits do not test it <span>+</span>
        </summary>
        <p>
          Stabiliser states form a finite set of size 2^O(n_q²) specified by a
          tableau, and peaked circuits are specified by their compact
          descriptions; a material can host every such output with polynomially
          many degrees of freedom. The mirror protocol uses Haar-random SU(4)
          two-qubit gates so the midpoint is typical, while the return
          probability remains verifiable without simulation.
        </p>
      </details>
    </div>
  );
}

export function TimingExhibit({
  anchor = 'timing',
}: {
  anchor?: string;
} = {}) {
  const uid = useId();
  const [logBaseline, setLogBaseline] = useState(4);
  const [logSpeed, setLogSpeed] = useState(4);
  const [logTiming, setLogTiming] = useState(-10);
  const [integration, setIntegration] = useState(60);
  const baseline = 10 ** logBaseline;
  const cL = 10 ** logSpeed * lightSpeed;
  const window = disconnectionWindow(baseline, cL);
  const offset = simultaneityOffset(cmbDipoleSpeed, baseline);
  const bound = bipartiteBound(
    baseline,
    10 ** logTiming,
    cmbDipoleSpeed,
    integration,
  );
  return (
    <div className="timing-exhibit" id={anchor}>
      <div className="lab-heading">
        <span className="eyebrow">
          PROPOSITION 10 AND THEOREM 13 · FINITE-SPEED NONLOCALITY
        </span>
        <h3>
          The tower updates at c_L.
          <br />
          Timing can see that.
        </h3>
        <p>
          When a knot is measured, the conditional fields of the others change,
          and in GUM that change propagates at the fastest speed the material
          supports. Two measurement events separated by L are{' '}
          <Term id="cl-causal">c_L-disconnected</Term> in the material frame
          during a window L/c_L around simultaneity; a bipartite test scans the
          sidereal day for it, and a multipartite Bancal–Barnea configuration
          forces a dichotomy: superluminal signalling or a departure from
          quantum correlations.
        </p>
      </div>
      <div className="foundation-instrument timing-instrument">
        <div className="timing-grid">
          <div>
            <label
              id={uid + 'baseline-log-label'}
              className="foundation-slider-label"
            >
              Baseline L <output aria-live="off">{sci(baseline)} m</output>
            </label>
            <Slider
              min={3}
              max={6.1}
              step={0.1}
              value={[logBaseline]}
              onValueChange={(v) => setLogBaseline(Array.isArray(v) ? v[0] : v)}
              aria-labelledby={uid + 'baseline-log-label'}
            />
          </div>
          <div>
            <label
              id={uid + 'speed-log-label'}
              className="foundation-slider-label"
            >
              Assumed c_L / c{' '}
              <output aria-live="off">{sci(10 ** logSpeed, 0)}</output>
            </label>
            <Slider
              min={3}
              max={6}
              step={0.1}
              value={[logSpeed]}
              onValueChange={(v) => setLogSpeed(Array.isArray(v) ? v[0] : v)}
              aria-labelledby={uid + 'speed-log-label'}
            />
          </div>
          <div>
            <label
              id={uid + 'timing-label'}
              className="foundation-slider-label"
            >
              Timing mismatch δt{' '}
              <output aria-live="off">{sci(10 ** logTiming)} s</output>
            </label>
            <Slider
              min={-11}
              max={-8}
              step={0.1}
              value={[logTiming]}
              onValueChange={(v) => setLogTiming(Array.isArray(v) ? v[0] : v)}
              aria-labelledby={uid + 'timing-label'}
            />
          </div>
          <div>
            <label
              id={uid + 'integration-label'}
              className="foundation-slider-label"
            >
              Integration window T_int{' '}
              <output aria-live="off">{integration} s</output>
            </label>
            <Slider
              min={1}
              max={600}
              step={1}
              value={[integration]}
              onValueChange={(v) => setIntegration(Array.isArray(v) ? v[0] : v)}
              aria-labelledby={uid + 'integration-label'}
            />
          </div>
        </div>
        <div className="pitch-readouts" aria-live="polite">
          <span>
            Disconnection window L/c_L<strong>{sci(window)} s</strong>
          </span>
          <span>
            Simultaneity offset v_M L/c²<strong>{sci(offset)} s</strong>
          </span>
          <span>
            Rotation term in Eq. (43)
            <strong>{sci(bound.rotationTerm)} s</strong>
          </span>
          <span>
            Bound from persistent violation
            <strong>c_L ≳ {sci(bound.bound / lightSpeed)} c</strong>
          </span>
        </div>
        <p className="instrument-answer">
          Salart et al. and Yin et al. found no loss of correlation and bounded
          the speed at ≳ 10⁴c for every material frame moving slowly relative to
          the Earth; GUM therefore has c_L ≳ 10⁴c. Bipartite tests cannot
          exclude a finite c_L, because any timing resolution leaves a residual
          window; multipartite tests can.{' '}
          <span>
            Stake S28: in a Bancal–Barnea configuration timed so that the
            designated pair is c_L-disconnected, the correlations fall to the
            bound respected by c_L-causal no-signalling models. Closure K-22
            decides which horn the tower’s update rule takes; if it signals, the
            stake changes sign.
          </span>
        </p>
      </div>
    </div>
  );
}

export function TowerPanel({
  depth,
  anchor = 'tower',
}: {
  depth: string;
  anchor?: string;
}) {
  const depths = [0, 1, 2, 3, 4];
  const knots = [2, 3, 4];
  return (
    <div className="tower-panel" id={anchor}>
      <div className="lab-heading">
        <span className="eyebrow">THE TOWER OF CONDITIONAL FIELDS</span>
        <h3>
          Bell asked for beables.
          <br />
          Norsen answered with a hierarchy of fields on ℝ³.
        </h3>
        <p>
          Pilot-wave theory answers Bell with positions in ℝ³ guided by a wave
          function on ℝ³ᴺ. Norsen showed that the ℝ³ᴺ object can be traded for
          an infinite <Term id="tower">tower</Term> of fields on ℝ³. GUM’s
          material is a physical realisation of that hierarchy: the texture is
          the primitive ontology, and the conditional wave functions and their
          derivative fields are patterns in it.
        </p>
      </div>
      <div className="formula-card tower-card">
        <div className="formula formula-small">
          {towerDefinition.conditional}
        </div>
        <div className="formula formula-small">{towerDefinition.tower}</div>
        <span>{towerDefinition.note.toUpperCase()}</span>
      </div>
      <details
        className="inline-depth"
        open={depth === 'math' ? true : undefined}
      >
        <summary>
          Lemma 3: depth is rank <span>+</span>
        </summary>
        <p>
          A depth-d tower encodes the Taylor polynomial of Ψ in the other knots’
          coordinates to order d, so the truncated state has Schmidt rank at
          most C(3(N − 1) + d, d) across one knot’s cut. Random-circuit
          experiments already demand capacities far beyond any tower of depth
          ten.
        </p>
        <div className="guide-table-wrap">
          <table className="guide-table">
            <caption>
              Schmidt-rank bound of a depth-d tower for N knots in three
              dimensions.
            </caption>
            <thead>
              <tr>
                <th scope="col">depth d</th>
                {knots.map((n) => (
                  <th scope="col" key={n}>
                    N = {n}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {depths.map((d) => (
                <tr key={d}>
                  <th scope="row">{d}</th>
                  {knots.map((n) => (
                    <td key={n}>
                      {towerSchmidtRank(d, n).toLocaleString('en-US')}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
      <p className="source-note">
        The kinematic frame is Nelson’s, with the noise supplied by zero-point
        agitation and the quantum potential as the variation of the
        Fisher-information functional. Every hydrodynamic derivation shares the{' '}
        <Term id="wallstrom">Wallstrom gap</Term>; here the phase S/ħ is the
        isorotation angle of a knot, so circulation quantisation holds by
        construction. The Born rule is the endpoint of Valentini’s sub-quantum
        H-theorem, accelerated by the agitation by a factor 17–41 [CAL, N]; the
        multi-time statistics of the agitated material are closure K-9.
      </p>
    </div>
  );
}

export function QuantumChapter({ depth }: { depth: string }) {
  return (
    <section className="section quantum-section" id="quantum">
      <div className="section-number">
        <span aria-hidden="true" />
        <span className="label-rule" />
        THE QUANTUM DESCRIPTION
      </div>
      <div className="section-heading">
        <h2>
          The wave function is bookkeeping.
          <br />
          The books have a <em>capacity.</em>
        </h2>
        <p className="section-lead">
          The material at finite agitation executes Nelson kinematics with
          grounded premises, and the wave function is bookkeeping for a tower of
          conditional fields. A tower hosted by a classical material has
          finitely many degrees of freedom. That is where GUM cannot hide, and
          the paper turns it into two instruments: a mirror-circuit cliff and a
          finite-speed timing test.
        </p>
      </div>
      <TowerPanel depth={depth} />
      <details
        className="unpack-panel"
        open={depth !== 'story' ? true : undefined}
      >
        <summary>
          Open the mirror-circuit cliff <span>+</span>
        </summary>
        <CliffExhibit depth={depth} />
      </details>
      <details
        className="unpack-panel"
        open={depth !== 'story' ? true : undefined}
      >
        <summary>
          Open the finite-speed timing instrument <span>+</span>
        </summary>
        <TimingExhibit />
      </details>
    </section>
  );
}
