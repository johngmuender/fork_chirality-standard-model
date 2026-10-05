'use client';
import { useRef, useState } from 'react';
import { line, scaleLinear } from 'd3';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  AmbientExhibit,
  DemoControl,
  useGentleDemo,
  useSceneClock,
} from '@/components/exhibit-motion';
import { Term } from '@/components/glossary';
import {
  bipartiteBound,
  completions,
  criticalLabSpeed,
  dipoleFieldHistory,
  longitudinalLeak,
  nearFieldProtocol,
  siderealArrivalSeries,
  siderealHalfSwing,
  type Completion,
} from '@/lib/gum-light';
import { cmbDipoleSpeed, lightSpeed } from '@/lib/gum-constants';

const theorems = [
  {
    id: 'cauchy',
    short: 'Cauchy no-go',
    title: 'MacCullagh’s aether cannot be an ordinary solid',
    text: 'In a non-polar continuum whose energy depends on ∇u alone, linearised objectivity forces W = W(ε_ij). The curl-only energy is objective only if κ = 0. No objective Cauchy energy reproduces MacCullagh’s aether.',
    formula: 'W_MC = ½κ|∇ × u|²  ⇒  κ = 0',
    label: 'THEOREM 2',
  },
  {
    id: 'rescue',
    short: 'Micropolar rescue',
    title: 'The same energy is consistent for the orientation field',
    text: '½γΓ_[ij]Γ_[ij] = ¼γ|∇ × φ|² is objective, has MacCullagh’s form with u → φ, and coexists with full shear rigidity μ > 0. Couple stress balances the angular momentum. In the locked doublet the MacCullagh energy is carried at every wavelength.',
    formula: '¼γ|∇ × φ|²  with  μ > 0',
    label: 'THEOREM 3',
  },
  {
    id: 'maxwell',
    short: 'Source-free Maxwell',
    title: 'Light exists because spinning grains have inertia',
    text: 'Define B = κ_B∇ × φ, E_φ = −κ_B φ̇ and A = κ_B φ. Two Maxwell equations are identities, the third is the doublet’s dynamics with c² = γ_eff/2J, and the energy density is ½ε*(E² + c²B²). The displacement current is rotational inertia.',
    formula: 'B = κ_B∇ × φ,  ∂tE_φ = c²∇ × B,  c² = γ_eff/2J',
    label: 'THEOREM 4',
  },
  {
    id: 'dichotomy',
    short: 'Locality dichotomy',
    title: 'Gauss’s law is not among them',
    text: 'The longitudinal field comes from B1. Completing it by transverse projection is acausal at every finite speed; the local Gauss completion reproduces the retarded Maxwell field exactly for every c_L. Any other local completion deviates by the retarded field of a conserved defect current.',
    formula: 'κ_B∇·φ + c_L⁻²∂tΦ_c = 0',
    label: 'THEOREM 6',
  },
];

export function DichotomyExhibit() {
  const [completion, setCompletion] = useState<Completion>('T');
  const [speedRatio, setSpeedRatio] = useState(3);
  const [time, setTime] = useState(0);
  const stage = useRef<HTMLDivElement>(null);
  const running = useSceneClock(stage, (_, dt) =>
    setTime((t) => (t + dt * 0.35) % 1.5),
  );
  const r = 1;
  const c = 1;
  const cL = speedRatio;
  const x = scaleLinear().domain([0, 1.5]).range([40, 560]);
  const y = scaleLinear().domain([-1.2, 1.2]).range([150, 20]);
  const ts = Array.from({ length: 151 }, (_, i) => i / 100);
  const history = line<number>()
    .x((t) => x(t))
    .y((t) => y(dipoleFieldHistory(t, r, completion, cL, c)));
  const value = dipoleFieldHistory(time, r, completion, cL, c);
  return (
    <div className="dichotomy-exhibit" id="dichotomy" ref={stage}>
      <div className="lab-heading">
        <span className="eyebrow">
          THEOREM 6 · WATCH THE FIELD AT A FIXED DISTANCE
        </span>
        <h3>
          Two completions.
          <br />
          Only one is causal.
        </h3>
        <p>
          A neutral source changes its dipole moment at t = 0. Watch the
          electric field at distance r in units of the Coulomb change. Under the{' '}
          <Term id="gauss-completion">Gauss completion</Term> nothing happens
          until the light front; under the transverse completion the field has
          already changed, by minus the Coulomb change, before any front
          arrives.
        </p>
      </div>
      <ToggleGroup
        className="lab-tabs"
        value={[completion]}
        onValueChange={(v) => v[0] && setCompletion(v[0] as Completion)}
        aria-label="Longitudinal completion"
      >
        {completions.map((c) => (
          <ToggleGroupItem value={c.id} key={c.id}>
            {c.name}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="dichotomy-layout">
        <AmbientExhibit className="foundation-instrument">
          <svg
            viewBox="0 0 600 330"
            aria-label={`Spacetime diagram with light cone and c_L cone at ${speedRatio} c; field history under the ${completion === 'T' ? 'transverse' : 'Gauss'} completion.`}
          >
            <title>Spacetime cones and the field at a fixed observer.</title>
            <g transform="translate(0,160)">
              <line x1="40" y1="150" x2="560" y2="150" className="plot-axis" />
              <text x="560" y="166" className="plot-tick" textAnchor="end">
                distance →
              </text>
              <text x="44" y="12" className="plot-tick">
                time ↑
              </text>
              <polygon
                points={`60,150 ${60 + 400},10 60,10`}
                fill="#8bbcff"
                opacity="0.12"
              />
              <polygon
                points={`60,150 ${60 + 400 * Math.min(1, 1 / speedRatio) * speedRatio},10 60,10`}
                fill="#f1a17d"
                opacity="0.1"
              />
              <line
                x1="60"
                y1="150"
                x2="460"
                y2="10"
                stroke="#8bbcff"
                strokeWidth="1.5"
              />
              <line
                x1="60"
                y1="150"
                x2={60 + Math.min(500, 400 * speedRatio)}
                y2={150 - 140 * Math.min(1, 500 / (400 * speedRatio))}
                stroke="#f1a17d"
                strokeWidth="1.5"
                strokeDasharray="5 5"
              />
              <line
                x1={60 + 400 * 0.7}
                y1="150"
                x2={60 + 400 * 0.7}
                y2="10"
                stroke="#f4d592"
                strokeDasharray="2 6"
              />
              <circle
                cx={60 + 400 * 0.7}
                cy={150 - 140 * Math.min(1, time / 1.5)}
                r="5"
                fill="#f4d592"
              />
              <text x={60 + 400 * 0.7 + 8} y="30" className="plot-label">
                observer at r
              </text>
              <text x="300" y="60" className="plot-label" fill="#8bbcff">
                light front, c
              </text>
              <text x="140" y="26" className="plot-label" fill="#f1a17d">
                c_L front
              </text>
            </g>
            <g>
              <line
                x1="40"
                y1={y(0)}
                x2="560"
                y2={y(0)}
                className="plot-axis"
              />
              <path
                d={history(ts) ?? ''}
                className={completion === 'T' ? 'plot-b3' : 'plot-b2'}
              />
              <circle cx={x(time)} cy={y(value)} r="5" fill="#f4d592" />
              <text x="44" y="18" className="plot-tick">
                E(r, t) in units of ΔE_C
              </text>
              <text x={x(r / cL) + 4} y={y(-1.1)} className="plot-tick">
                r/c_L
              </text>
              <text x={x(r / c) + 4} y={y(-1.1)} className="plot-tick">
                r/c
              </text>
            </g>
          </svg>
          <label id="speed-ratio-label" className="foundation-slider-label">
            Longitudinal speed c_L / c (drawn small so the cones are visible){' '}
            <output aria-live="off">{speedRatio.toFixed(1)}</output>
          </label>
          <Slider
            min={1.5}
            max={8}
            step={0.1}
            value={[speedRatio]}
            onValueChange={(v) => setSpeedRatio(Array.isArray(v) ? v[0] : v)}
            aria-labelledby="speed-ratio-label"
          />
          <p className="instrument-answer" aria-live="off">
            {completion === 'T'
              ? 'Transverse completion: the field changes at t = 0⁺ everywhere outside the c_L cone, before any front. Acausal, and it permits instantaneous signalling in the material frame.'
              : 'Gauss completion: (E, B) coincide with the retarded Maxwell fields for every c_L. The two pieces E_φ = E^M + ∇Φ_c and −∇Φ_c are separately c_L-causal; their sum is c-causal.'}{' '}
            <span>
              {running
                ? 'Clock running.'
                : 'Clock paused; the curve is the full history.'}
            </span>
          </p>
        </AmbientExhibit>
        <div className="completion-notes">
          {completions.map((c) => (
            <article
              key={c.id}
              className={c.id === completion ? 'is-current' : ''}
            >
              <span className="eyebrow">{c.name.toUpperCase()}</span>
              <code>{c.rule}</code>
              <strong>{c.verdict}</strong>
              <p>{c.text}</p>
            </article>
          ))}
          <p className="source-note">
            Corollary 1: in the Gauss completion no measurement that couples to
            charges through the Lorentz force, or to radiation through (E, B),
            can determine c_L. Proposition 3 adds the price: a positive-definite
            longitudinal sector would leak ½(c/c_L)³ of the dipole power, at
            most {longitudinalLeak(1e-4).toExponential(1)} for c_L ≥ 10⁴c,
            unless the longitudinal energy is indefinite or c_L = ∞. Which
            option the action realises is closure K-18.
          </p>
        </div>
      </div>
    </div>
  );
}

export function FrameKinematics() {
  const [baseline, setBaseline] = useState(100);
  const [logSpeed, setLogSpeed] = useState(4);
  const [orientation, setOrientation] = useState('east-west');
  const host = useRef<HTMLDivElement>(null);
  const demo = useGentleDemo(
    host,
    () =>
      setOrientation((o) => (o === 'east-west' ? 'north-south' : 'east-west')),
    12000,
  );
  const cL = 10 ** logSpeed * lightSpeed;
  const thetaEarth = Math.acos(0.14);
  const nPerp = orientation === 'east-west' ? 1 : 0;
  const nParallel = orientation === 'east-west' ? 0 : 1;
  const series = siderealArrivalSeries(
    baseline,
    cL,
    cmbDipoleSpeed,
    thetaEarth,
    nParallel,
    nPerp,
    96,
  );
  const swing =
    2 *
    siderealHalfSwing(baseline, cmbDipoleSpeed, Math.sin(thetaEarth), nPerp);
  const values = series.map((s) => s.arrival * 1e9);
  const lo = Math.min(...values),
    hi = Math.max(...values);
  const pad = Math.max(0.05, (hi - lo) * 0.2);
  const x = scaleLinear().domain([0, 24]).range([60, 560]);
  const y = scaleLinear()
    .domain([lo - pad, hi + pad])
    .range([200, 20]);
  const curve = line<(typeof series)[number]>()
    .x((d) => x(d.hours))
    .y((d) => y(d.arrival * 1e9));
  const bound = bipartiteBound(1e4, 1e-10, 3.7e5, 60);
  return (
    <div
      className="frame-kinematics"
      id="near-field"
      ref={host}
      {...demo.handlers}
    >
      <div className="lab-heading">
        <span className="eyebrow">
          PROPOSITION 4 · A MATERIAL FRAME HAS A SIDEREAL SIGNATURE
        </span>
        <h3>
          Any pre-light signal
          <br />
          would measure the frame.
        </h3>
        <p>
          On Einstein-synchronised lab clocks an influence that travels at c_L
          in the material frame arrives at t = γ r(1/c_L − v_M·n̂/c²). It arrives
          before its cause whenever v_M·n̂ exceeds c²/c_L, which for c_L = 10⁴c
          is {(criticalLabSpeed(1e4 * lightSpeed) / 1e3).toFixed(0)} km/s. As
          the Earth rotates the baseline sweeps relative to v_M, so the arrival
          time oscillates with sidereal period.
        </p>
      </div>
      <DemoControl {...demo} />
      <div className="frame-layout">
        <AmbientExhibit className="foundation-instrument">
          <svg
            viewBox="0 0 600 240"
            aria-label={`Lab arrival time over a sidereal day for a ${baseline} m ${orientation} baseline with c_L = 10^${logSpeed} c; full swing ${(swing * 1e9).toFixed(2)} ns.`}
          >
            <title>Sidereal modulation of the lab arrival time.</title>
            <line x1="60" y1="200" x2="560" y2="200" className="plot-axis" />
            <line x1="60" y1="20" x2="60" y2="200" className="plot-axis" />
            {[0, 6, 12, 18, 24].map((h) => (
              <text key={h} x={x(h)} y="218" className="plot-tick">
                {h} h
              </text>
            ))}
            <line
              x1="60"
              y1={y(0)}
              x2="560"
              y2={y(0)}
              stroke="#f4d592"
              strokeDasharray="2 6"
            />
            <text x="64" y={y(0) - 6} className="plot-tick">
              emission
            </text>
            <path d={curve(series) ?? ''} className="plot-b2" />
            <text x="64" y="16" className="plot-tick">
              t_lab (ns)
            </text>
          </svg>
          <div className="frame-controls">
            <ToggleGroup
              className="lab-tabs"
              value={[orientation]}
              onValueChange={(v) => v[0] && setOrientation(v[0])}
              aria-label="Baseline orientation"
            >
              <ToggleGroupItem value="east-west">
                East–west baseline
              </ToggleGroupItem>
              <ToggleGroupItem value="north-south">
                Along the Earth’s axis
              </ToggleGroupItem>
            </ToggleGroup>
            <label id="baseline-label" className="foundation-slider-label">
              Baseline r <output aria-live="off">{baseline} m</output>
            </label>
            <Slider
              min={10}
              max={1000}
              step={10}
              value={[baseline]}
              onValueChange={(v) => setBaseline(Array.isArray(v) ? v[0] : v)}
              aria-labelledby="baseline-label"
            />
            <label id="cl-label" className="foundation-slider-label">
              c_L / c{' '}
              <output aria-live="off">
                10{'⁰¹²³⁴⁵⁶'[logSpeed] ?? logSpeed}
              </output>
            </label>
            <Slider
              min={3}
              max={6}
              step={1}
              value={[logSpeed]}
              onValueChange={(v) => setLogSpeed(Array.isArray(v) ? v[0] : v)}
              aria-labelledby="cl-label"
            />
          </div>
          <p
            className="instrument-answer"
            aria-live={demo.automatic ? 'off' : 'polite'}
          >
            Full sidereal swing {(swing * 1e9).toFixed(3)} ns for v_M = 369.8
            km/s (the CMB dipole).{' '}
            {series.some((s) => s.precedes)
              ? 'For part of the day the influence arrives before emission on lab clocks.'
              : 'The influence never precedes emission for this geometry.'}{' '}
            <span>
              {orientation === 'north-south'
                ? 'A baseline along the axis keeps v_M·n̂ constant: the rotation term in Eq. (43) vanishes and one fixed lab offset holds.'
                : 'An east–west baseline has the largest swing; the paper’s example is 0.8 ns at 100 m.'}
            </span>
          </p>
        </AmbientExhibit>
        <div className="completion-notes">
          <article>
            <span className="eyebrow">STAKE S15 · NOW A NULL TEST</span>
            <strong>No electromagnetic precursor in 0 &lt; t &lt; r/c</strong>
            <p>
              The core predicts none. A pre-light signal that survives the
              controls would retire the Gauss completion, and by this kinematics
              it would identify the material frame.
            </p>
            <ol className="protocol-list">
              {nearFieldProtocol.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
          <article>
            <span className="eyebrow">WHERE c_L SURVIVES</span>
            <strong>In the timing of quantum correlations</strong>
            <p>
              With L = 10 km, δt = 100 ps, T_int = 60 s and v⊥ = 370 km/s, the
              rotation term is {(bound.rotationTerm * 1e12).toFixed(0)} ps and
              persistent Bell violation requires c_L ≳{' '}
              {(bound.bound / lightSpeed).toExponential(1)} c. The quantum
              chapter has the instrument.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export function LightSector({ depth }: { depth: string }) {
  const [theorem, setTheorem] = useState('cauchy');
  const host = useRef<HTMLDivElement>(null);
  const demo = useGentleDemo(
    host,
    () =>
      setTheorem(
        (t) =>
          theorems[
            (theorems.findIndex((x) => x.id === t) + 1) % theorems.length
          ].id,
      ),
    15000,
  );
  return (
    <section className="section light-section" id="light">
      <div className="section-number">
        <span aria-hidden="true" />
        <span className="label-rule" />
        ELECTRODYNAMICS AS THE ORIENTATION SECTOR
      </div>
      <div className="section-heading">
        <h2>
          MacCullagh was right
          <br />
          about the <em>wrong continuum.</em>
        </h2>
        <p className="section-lead">
          In 1839 MacCullagh exhibited the unique classical aether whose
          dynamics reproduce Fresnel’s optics: a continuum storing energy in the
          curl of the displacement alone. As a Cauchy continuum it is
          inconsistent. GUM’s diagnosis is a theorem, and its rescue is another:
          the same energy is objective for the orientation field of a micropolar
          medium and coexists with full rigidity.
        </p>
      </div>
      <div ref={host} {...demo.handlers} id="maxwell">
        <DemoControl {...demo} />
        <Tabs
          value={theorem}
          onValueChange={(value) => setTheorem(String(value))}
          className="step-tabs"
        >
          <TabsList className="step-list">
            {theorems.map((t, i) => (
              <TabsTrigger value={t.id} key={t.id}>
                <span>0{i + 1}</span>
                {t.short}
              </TabsTrigger>
            ))}
          </TabsList>
          {theorems.map((t) => (
            <TabsContent value={t.id} key={t.id} className="step-panel">
              <div>
                <span className="eyebrow">{t.label}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
              <div className="formula-card">
                <div className="formula formula-small">{t.formula}</div>
                <span>
                  {t.id === 'maxwell'
                    ? 'A IS THE PHYSICAL GRAIN ORIENTATION'
                    : t.id === 'dichotomy'
                      ? 'THE VELOCITY GAUGE AS MATERIAL DYNAMICS'
                      : 'OBJECTIVITY DECIDES'}
                </span>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <p className="source-note">
        Charge is a wedge-disclination dressing of the knot, triple-locked by
        disclination winding, knot degree and a compact phase. Static defect
        equilibrium gives the Coulomb far field; transport around enclosed flux
        gives the Aharonov–Bohm holonomy qΦ_B/ħ with no input beyond the
        connection of Theorem 4. The fine-structure constant compares defect
        self-coupling to torsion-wave stiffness and is quantitatively unclaimed:
        an import.
      </p>
      <details
        className="unpack-panel"
        open={depth !== 'story' ? true : undefined}
      >
        <summary>
          Open the locality dichotomy <span>+</span>
        </summary>
        <DichotomyExhibit />
      </details>
      <details
        className="unpack-panel"
        open={depth === 'math' ? true : undefined}
      >
        <summary>
          Open the preferred-frame kinematics and the near-field null test{' '}
          <span>+</span>
        </summary>
        <FrameKinematics />
      </details>
    </section>
  );
}
