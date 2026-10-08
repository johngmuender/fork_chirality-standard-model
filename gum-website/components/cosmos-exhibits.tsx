'use client';
import { useId, useRef, useState } from 'react';
import { line, scaleLinear } from 'd3';
import { Slider } from '@/components/ui/slider';
import {
  AmbientExhibit,
  DemoControl,
  useGentleDemo,
} from '@/components/exhibit-motion';
import { Term } from '@/components/glossary';
import {
  decelerationNow,
  desiPreference,
  driftBreakdownRedshift,
  dvaliTurnerExponent,
  earlyFraction,
  equationOfStateCurve,
  familyMembers,
  minimumIndex,
  neutrinoDriftRatio,
  relaxationTable,
  w0wa,
} from '@/lib/gum-cosmos';

export function RelaxationExhibit({
  depth,
  anchor = 'relaxation',
}: {
  depth: string;
  anchor?: string;
}) {
  const uid = useId();
  const [index, setIndex] = useState(50);
  const host = useRef<HTMLDivElement>(null);
  const demo = useGentleDemo(
    host,
    () => setIndex((n) => (n >= 95 ? 25 : n + 10)),
    9000,
  );
  const n = index / 100;
  const curve = equationOfStateCurve(n);
  const point = w0wa(n);
  const family = Array.from({ length: 41 }, (_, i) =>
    w0wa(0.02 + (0.98 * i) / 40),
  );
  const xw = scaleLinear().domain([0.2, 1]).range([50, 290]);
  const yw = scaleLinear().domain([-1.05, 0.05]).range([200, 20]);
  const wPath = line<(typeof curve)[number]>()
    .x((d) => xw(d.a))
    .y((d) => yw(d.w));
  const x0 = scaleLinear().domain([-1.1, 0]).range([330, 560]);
  const ya = scaleLinear().domain([-0.6, 0.4]).range([200, 20]);
  const familyPath = line<{ w0: number; wa: number }>()
    .x((d) => x0(d.w0))
    .y((d) => ya(d.wa));
  const wrongSide =
    point.w0 > desiPreference.w0Above && point.wa < desiPreference.waBelow;
  return (
    <div
      className="relaxation-exhibit"
      id={anchor}
      ref={host}
      {...demo.handlers}
    >
      <div className="lab-heading">
        <span className="eyebrow">
          PROPOSITIONS 22–26 · THE RELAXATION FAMILY
        </span>
        <h3>
          Dark energy as a lag,
          <br />
          and it never crosses −1.
        </h3>
        <p>
          Hubble dilution drives a lag δq ∝ H/Γ_r of a soft coordinate behind
          cosmic expansion; the displacement energy from a stable minimum is
          ρ_DE ∝ H^(2(1−n)). The equation of state is w = −n/(1 − (1−n)Ω_DE), so
          w lies in [−1, 0], w_a ≥ 0 for every member, and the family is the
          Dvali–Turner family with α_DT = 2(1 − n). DESI DR2 prefers w₀ &gt; −1
          with w_a &lt; 0, the one quadrant the family cannot reach.
        </p>
      </div>
      <DemoControl {...demo} />
      <AmbientExhibit className="foundation-instrument">
        <svg
          viewBox="0 0 600 240"
          aria-label={`w(a) for n = ${n.toFixed(2)} and the (w0, wa) curve of the family; this member has w0 = ${point.w0.toFixed(2)} and wa = ${point.wa.toFixed(2)}.`}
        >
          <title>
            Equation of state of the relaxation family and its locus in the (w₀,
            w_a) plane.
          </title>
          <g>
            <line x1="50" y1="200" x2="290" y2="200" className="plot-axis" />
            <line x1="50" y1="20" x2="50" y2="200" className="plot-axis" />
            <line
              x1="50"
              y1={yw(-1)}
              x2="290"
              y2={yw(-1)}
              stroke="#f4d592"
              strokeDasharray="2 6"
            />
            <text x="54" y={yw(-1) - 4} className="plot-tick">
              w = −1
            </text>
            {[0.2, 0.6, 1].map((a) => (
              <text key={a} x={xw(a)} y="218" className="plot-tick">
                a = {a}
              </text>
            ))}
            <path d={wPath(curve) ?? ''} className="plot-b2" />
            <text x="54" y="16" className="plot-tick">
              w_DE(a)
            </text>
          </g>
          <g>
            <rect
              x={x0(desiPreference.w0Above)}
              y={ya(desiPreference.waBelow)}
              width={x0(0) - x0(-1)}
              height={200 - ya(0)}
              fill="#f1a17d"
              opacity="0.12"
            />
            <text
              x={x0(-0.98)}
              y={ya(-0.05)}
              className="plot-tick"
              fill="#f1a17d"
            >
              DESI DR2 preference
            </text>
            <line
              x1="330"
              y1={ya(0)}
              x2="560"
              y2={ya(0)}
              className="plot-axis"
            />
            <line
              x1={x0(-1)}
              y1="20"
              x2={x0(-1)}
              y2="200"
              className="plot-axis"
            />
            {[-1, -0.5, 0].map((w) => (
              <text key={w} x={x0(w)} y="218" className="plot-tick">
                w₀ = {w}
              </text>
            ))}
            {[0.4, 0, -0.4].map((w) => (
              <text key={w} x="300" y={ya(w) + 4} className="plot-tick">
                {w}
              </text>
            ))}
            <path d={familyPath(family) ?? ''} className="plot-b3" />
            <circle cx={x0(point.w0)} cy={ya(point.wa)} r="6" fill="#f4d592" />
            <text x="334" y="16" className="plot-tick">
              (w₀, w_a) of the family, n from 0 to 1
            </text>
          </g>
        </svg>
        <label id={uid + 'index-label'} className="foundation-slider-label">
          Relaxation index n <output aria-live="off">{n.toFixed(2)}</output>
        </label>
        <Slider
          min={5}
          max={100}
          step={1}
          value={[index]}
          onValueChange={(v) => setIndex(Array.isArray(v) ? v[0] : v)}
          aria-labelledby={uid + 'index-label'}
        />
        <div
          className="pitch-readouts"
          aria-live={demo.automatic ? 'off' : 'polite'}
        >
          <span>
            w₀<strong>{point.w0.toFixed(3)}</strong>
          </span>
          <span>
            w_a
            <strong>
              {point.wa >= 0 ? '+' : ''}
              {point.wa.toFixed(3)}
            </strong>
          </span>
          <span>
            q_dec,0<strong>{decelerationNow(n).toFixed(3)}</strong>
          </span>
          <span>
            α_DT = 2(1−n)<strong>{dvaliTurnerExponent(n).toFixed(2)}</strong>
          </span>
        </div>
        <p className="instrument-answer">
          {n < minimumIndex()
            ? `Below n_min = ${minimumIndex().toFixed(2)}: no acceleration today (Proposition 23).`
            : n === 1
              ? 'n = 1 is ΛCDM: w ≡ −1, the family’s closest point to the data.'
              : `ρ_DE/ρ_m at recombination ≈ ${earlyFraction(1100, n).toExponential(1)}; ${n >= 0.3 ? 'safe from BBN and early-dark-energy bounds' : 'in tension with early-universe bounds'}.`}{' '}
          <span>
            {wrongSide
              ? 'This point lies in the DESI quadrant.'
              : 'The DESI-preferred quadrant (w₀ > −1, w_a < 0) is unreachable for every n: Stake S19. The paper states before Euclid DR1 that a ≥ 3σ preference for it retires the dark-energy sector.'}
          </span>
        </p>
      </AmbientExhibit>
      {depth !== 'story' && (
        <div className="guide-table-wrap">
          <table className="guide-table">
            <caption>
              Table 5 of the draft, recomputed: the family at Ω_DE,0 = 0.69.
            </caption>
            <thead>
              <tr>
                <th scope="col">n</th>
                <th scope="col">α_DT</th>
                <th scope="col">w₀</th>
                <th scope="col">w_a</th>
                <th scope="col">q_dec,0</th>
                <th scope="col">ρ_DE/ρ_m at z = 1100</th>
              </tr>
            </thead>
            <tbody>
              {relaxationTable().map((row) => (
                <tr key={row.n}>
                  <th scope="row">{row.n}</th>
                  <td>{row.alphaDT.toFixed(1)}</td>
                  <td>{row.w0.toFixed(2)}</td>
                  <td>
                    {row.wa >= 0 ? '+' : ''}
                    {row.wa.toFixed(2)}
                  </td>
                  <td>
                    {row.q0 >= 0 ? '+' : ''}
                    {row.q0.toFixed(2)}
                  </td>
                  <td>
                    {row.n === 0
                      ? row.earlyRatio.toFixed(1) + ' (matter-like)'
                      : row.n === 1
                        ? '0'
                        : row.earlyRatio.toExponential(0)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="source-note">
        The n = 0 member is the no-go for Hubble-cutoff holographic dark energy:
        matter-dominated expansion with a rescaled Newton constant and no
        acceleration. The DGP background (n = ½) is known to fit distance data
        worse than ΛCDM; the family’s perturbations are not DGP’s, since there
        is no brane and no ghost, so growth of structure discriminates between
        them at fixed background (closure K-12). The members of the family are
        listed for n ∈ {'{' + familyMembers.join(', ') + '}'}.
      </p>
    </div>
  );
}

export function DriftExhibit({
  anchor = 'neutrino-drift',
}: {
  anchor?: string;
} = {}) {
  const uid = useId();
  const [index, setIndex] = useState(50);
  const [lag, setLag] = useState(-20);
  const n = index / 100;
  const epsilon = lag / 100;
  const zs = Array.from({ length: 51 }, (_, i) => i / 10);
  const ratio = (z: number) => neutrinoDriftRatio(z, n, epsilon);
  const x = scaleLinear().domain([0, 5]).range([50, 560]);
  const y = scaleLinear().domain([0.4, 1.05]).range([200, 20]);
  const path = line<number>()
    .x((z) => x(z))
    .y((z) => y(Math.max(0.4, ratio(z))));
  const breakdown = epsilon < 0 ? driftBreakdownRedshift(n, epsilon) : Infinity;
  return (
    <div className="drift-exhibit" id={anchor}>
      <div className="lab-heading">
        <span className="eyebrow">
          PROPOSITION 27 · NEUTRINOS THAT WERE LIGHTER IN THE PAST
        </span>
        <h3>
          Laboratory and cosmology
          <br />
          measure different numbers.
        </h3>
        <p>
          If the soft coordinate is the pitch wavenumber, the lag that makes
          dark energy also moves the neutrino mass: m₃(a) = m₃,eq[1 +
          ε_ν(H/H₀)^(1−n)]. If Hubble dilution stretches the helix, ε_ν &lt; 0
          and neutrinos were lighter at the redshifts where lensing and growth
          are measured. Cosmological bounds and β-decay endpoints then weight
          different epochs: the one door out of the S1 trap.
        </p>
      </div>
      <AmbientExhibit className="foundation-instrument">
        <svg
          viewBox="0 0 600 240"
          aria-label={`Ratio of the neutrino mass at redshift z to today for n = ${n.toFixed(2)} and lag ${epsilon.toFixed(2)}; at z = 2 the ratio is ${ratio(2).toFixed(2)}.`}
        >
          <title>Neutrino-mass drift with redshift.</title>
          <line x1="50" y1="200" x2="560" y2="200" className="plot-axis" />
          <line x1="50" y1="20" x2="50" y2="200" className="plot-axis" />
          {[0, 1, 2, 3, 4, 5].map((z) => (
            <text key={z} x={x(z)} y="218" className="plot-tick">
              z = {z}
            </text>
          ))}
          {[0.5, 0.75, 1].map((v) => (
            <text key={v} x="22" y={y(v) + 4} className="plot-tick">
              {v}
            </text>
          ))}
          <line
            x1="50"
            y1={y(1)}
            x2="560"
            y2={y(1)}
            stroke="#f4d592"
            strokeDasharray="2 6"
          />
          <path d={path(zs) ?? ''} className="plot-b2" />
          <text x="54" y="16" className="plot-tick">
            m₃(z) / m₃(0)
          </text>
        </svg>
        <div className="ladder-sliders">
          <div>
            <label
              id={uid + 'drift-n-label'}
              className="foundation-slider-label"
            >
              Relaxation index n <output aria-live="off">{n.toFixed(2)}</output>
            </label>
            <Slider
              min={10}
              max={95}
              step={1}
              value={[index]}
              onValueChange={(v) => setIndex(Array.isArray(v) ? v[0] : v)}
              aria-labelledby={uid + 'drift-n-label'}
            />
          </div>
          <div>
            <label id={uid + 'lag-label'} className="foundation-slider-label">
              Lag amplitude ε_ν{' '}
              <output aria-live="off">{epsilon.toFixed(2)}</output>
            </label>
            <Slider
              min={-60}
              max={20}
              step={1}
              value={[lag]}
              onValueChange={(v) => setLag(Array.isArray(v) ? v[0] : v)}
              aria-labelledby={uid + 'lag-label'}
            />
          </div>
        </div>
        <p className="instrument-answer" aria-live="polite">
          Mass at z = 2 is {ratio(2).toFixed(2)} of today’s;{' '}
          {epsilon < 0
            ? `the linear formula fails near z ≈ ${Number.isFinite(breakdown) ? breakdown : '—'}, where the full relaxation dynamics must be used.`
            : 'a positive lag makes neutrinos heavier in the past and S27 void.'}{' '}
          <span>
            Lowering the mass inferred at z ≈ 1–3 by 10–25% needs ε_ν ≈ −0.2 for
            n = ½, or −0.3 to −0.5 for n = 0.8: a sizeable fraction of the
            equilibrium pitch. Mass-varying neutrinos can suffer adiabatic
            instabilities; stability is a deliverable of closure K-23. Corollary
            7 makes the far-infrared trough a tomogram of the pitch history.
          </span>
        </p>
      </AmbientExhibit>
    </div>
  );
}

export function CosmosChapter({ depth }: { depth: string }) {
  return (
    <section className="section cosmos-section" id="cosmos">
      <div className="section-number">
        <span aria-hidden="true" />
        <span className="label-rule" />
        COSMOLOGY: THE RELAXATION FAMILY, GRAVITY AND THE DARK SECTOR
      </div>
      <div className="section-heading">
        <h2>
          The zero-point ledger
          <br />
          does not <em>gravitate.</em>
        </h2>
        <p className="section-lead">
          A material structured at ℓ_s carries a zero-point ledger near 10⁸²
          J/m³ against the observed 10⁻¹⁰. GUM’s defusal is Volovik’s: for a
          self-sustained material the source of the induced gravitational
          equations is the grand-potential density, which vanishes in
          equilibrium; only departures gravitate. The premise is imported and
          everything below inherits that conditionality visibly. The departure
          is the lag of a slow mode, and the slow mode is the pitch.
        </p>
      </div>
      <RelaxationExhibit depth={depth} />
      <details
        className="unpack-panel"
        open={depth !== 'story' ? true : undefined}
      >
        <summary>
          Open the neutrino-mass drift <span>+</span>
        </summary>
        <DriftExhibit />
      </details>
      <div className="implication-grid cosmos-notes">
        <article>
          <span>GRAVITY</span>
          <h3>Einstein–Cartan by dictionary; dynamics open</h3>
          <p>
            Dislocation density is torsion, disclination density is curvature,
            spin sources torsion. Knots are defects and ride geodesics of the
            strain metric, so the equivalence principle is structural.
            Positivity of the graviton kinetic term is not established, and this
            revision withdraws the identification of transverse strain waves
            with gravitational waves: those are the photon. Closure K-G must
            identify the carrier.
          </p>
        </article>
        <article>
          <span>DARK MATTER</span>
          <h3>Undressed knots, at conjecture grade</h3>
          <p>
            Charge is a dressing; nothing forbids an undressed degree-one knot
            in each frustration class, sterile, created in pairs at tearing
            strata. Deliverables of K-17: the pair-production rate and relic
            abundance; kills are overclosure and the Lyman-α forest.
          </p>
        </article>
        <article>
          <span>THE 511 keV LINE</span>
          <h3>Pair dressing, if m_u ≳ m_e</h3>
          <p>
            An undressed pair acquiring opposite disclination dressings would
            inject positrons at low energy with a ρ_DM² morphology, two
            properties the Galactic line has and standard sources explain with
            difficulty. Closure K-21 delivers the threshold and cross-section;
            its kills are printed.
          </p>
        </article>
      </div>
      <p className="source-note">
        The <Term id="relaxation-family">relaxation family</Term>’s index n is a
        structural property of the soft mode’s relaxation, computable from the
        action; its computation, the perturbation sector and a self-consistent
        distance fit are closure K-12 and Stake S18.
      </p>
    </section>
  );
}
