'use client';
import { useState } from 'react';
import { line, scaleLinear, scaleLog } from 'd3';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { AmbientExhibit } from '@/components/exhibit-motion';
import { Dial, Readouts, sci } from '@/components/primer-dial';
import {
  bridgeBand,
  landingVerdict,
  neutrinoBridge,
  neutrinoMassFromBridge,
  ordersOfMagnitude,
  stringTension,
  weakStrength,
  zeroPointDensity,
} from '@/lib/primer-physics';
import { reggeSlope } from '@/lib/gum-sectors';
import { tauMassEv } from '@/lib/gum-constants';
import { neutrinoWindow } from '@/lib/gum-vacuum';

/** 12.6–12.7: the logarithmic bridge, its yardstick, and the slip the ledger caught. */
export function NeutrinoBridge() {
  const [aHalo, setAHalo] = useState(3.05);
  const [kappaFar, setKappaFar] = useState(0.1065);
  const A = 5.644;
  const L = neutrinoBridge(A, aHalo, kappaFar);
  const corrected = neutrinoMassFromBridge(L, tauMassEv);
  const old = neutrinoMassFromBridge(L, tauMassEv, Math.SQRT2);
  const band = bridgeBand(corrected);
  const x = scaleLog().domain([0.008, 0.3]).range([50, 560]);
  const sigmasBelow =
    (Math.log(corrected) - Math.log(neutrinoWindow.floor)) / 0.9;
  return (
    <div className="primer-exhibit" id="primer-bridge">
      <div className="lab-heading">
        <span className="eyebrow">
          12.6 · ln(1/(qλ_halo)) = (A − A_halo)/κ_far
        </span>
        <h3>One logarithm, one yardstick, one neutrino mass.</h3>
      </div>
      <AmbientExhibit className="foundation-instrument cone-controls">
        <svg
          viewBox="0 0 600 150"
          aria-label={`Neutrino mass from the bridge: ${corrected.toFixed(3)} eV with the corrected halo, ${old.toFixed(3)} eV with the earlier draft's; one-sigma band ${band[0].toFixed(3)} to ${band[1].toFixed(3)} eV; floor ${neutrinoWindow.floor} eV.`}
        >
          <title>
            The heaviest neutrino mass on a logarithmic line, with the bridge’s
            band and the oscillation floor.
          </title>
          <line x1="50" y1="90" x2="560" y2="90" className="plot-axis" />
          {[0.01, 0.02, 0.05, 0.1, 0.2].map((m) => (
            <text key={m} x={x(m)} y="112" className="plot-tick">
              {m} eV
            </text>
          ))}
          <rect
            x={x(band[0])}
            y="70"
            width={x(band[1]) - x(band[0])}
            height="40"
            fill="#8bbcff"
            opacity="0.18"
          />
          <rect
            x={x(neutrinoWindow.floor)}
            y="60"
            width={x(neutrinoWindow.ceiling) - x(neutrinoWindow.floor)}
            height="60"
            fill="#9acbb9"
            opacity="0.25"
          />
          <line
            x1={x(neutrinoWindow.floor)}
            y1="40"
            x2={x(neutrinoWindow.floor)}
            y2="120"
            stroke="#f4d592"
            strokeDasharray="3 5"
          />
          <text x={x(neutrinoWindow.floor)} y="34" className="plot-label">
            oscillation floor
          </text>
          <circle cx={x(corrected)} cy="90" r="7" fill="#8bbcff" />
          <circle
            cx={x(old)}
            cy="90"
            r="7"
            fill="none"
            stroke="#f1a17d"
            strokeWidth="2.5"
          />
          <text
            x={x(corrected) - 12}
            y="138"
            className="plot-tick"
            style={{ textAnchor: 'end' }}
          >
            corrected halo
          </text>
          <text
            x={x(old) + 12}
            y="138"
            className="plot-tick"
            style={{ textAnchor: 'start' }}
          >
            earlier draft’s halo
          </text>
        </svg>
        <Dial
          label="Halo belt cost A_halo"
          value={aHalo}
          display={aHalo.toFixed(2)}
          min={2.85}
          max={3.25}
          step={0.01}
          onChange={setAHalo}
        />
        <Dial
          label="Far-field coefficient κ_far"
          value={kappaFar}
          display={kappaFar.toFixed(4)}
          min={0.1}
          max={0.113}
          step={0.0005}
          onChange={setKappaFar}
        />
        <Readouts
          items={[
            ['Bridge ln(1/(qλ_halo)) with A = 5.644', L.toFixed(2)],
            ['m₃ = m_τc² e^(−L), corrected halo', corrected.toFixed(3) + ' eV'],
            ['m₃ with the earlier draft’s halo, × √2', old.toFixed(3) + ' eV'],
            [
              'One-sigma band, ±0.90 in the logarithm',
              band[0].toFixed(3) + '–' + band[1].toFixed(3) + ' eV',
            ],
            [
              'Floor relative to the centre',
              sigmasBelow >= 0
                ? sigmasBelow.toFixed(1) + 'σ above'
                : (-sigmasBelow).toFixed(1) + 'σ below',
            ],
          ]}
        />
        <p className="instrument-answer">
          At fixed integrals, correcting the halo can only leave the centre at
          0.047 eV or raise it toward 0.066 eV; it cannot lower it to 0.033 eV
          as the revised paper’s first printing said. Writing the primer caught
          that slip, and the paper now prints it as erratum E1.
          <span>
            The band is a factor e^0.90 ≈ 2.46 either way (problem 12.3 ★).
            Oscillations trim it to [0.050, 0.057] eV, and Stake S1 puts Σm_ν in
            [0.058, 0.11] eV; K-N owes the check of which yardstick the
            inherited integrals used.
          </span>
        </p>
      </AmbientExhibit>
    </div>
  );
}

/** 13.4: the weak coupling is not small. */
export function WeakCoupling() {
  const [fermi, setFermi] = useState(1.166);
  const [wMass, setWMass] = useState(80.4);
  const weak = weakStrength(fermi * 1e-5, wMass);
  return (
    <div className="primer-exhibit" id="primer-weak-coupling">
      <div className="lab-heading">
        <span className="eyebrow">13.4 · G_F/√2 = g²/(8M_W²)</span>
        <h3>Weakness comes from 1/M_W², not from g.</h3>
      </div>
      <div className="foundation-instrument cone-controls">
        <Dial
          label="Fermi constant G_F"
          value={fermi}
          display={fermi.toFixed(3) + ' × 10⁻⁵ GeV⁻²'}
          min={1}
          max={1.3}
          step={0.001}
          onChange={setFermi}
        />
        <Dial
          label="W mass"
          value={wMass}
          display={wMass.toFixed(1) + ' GeV'}
          min={60}
          max={100}
          step={0.1}
          onChange={setWMass}
        />
        <Readouts
          items={[
            ['g = √(8 M_W² G_F/√2)', weak.g.toFixed(3)],
            [
              'α_w = g²/4π',
              weak.alphaW.toFixed(4) + ' ≈ 1/' + (1 / weak.alphaW).toFixed(0),
            ],
            ['Compare α', '1/137'],
          ]}
        />
        <p className="instrument-answer">
          A heavy exchanged particle looks like a contact force at low energy,
          and the contact strength carries the 1/M_W². The coupling itself is
          electromagnetic-sized (problem 13.2). GUM adds where the vertex lives,
          a tunnelling event through the halo, and then audits its own slogan:
          if g ≈ 0.65 is already the suppressed value, the suppression is of
          order one, and “the same exponent” must not predict a wrong-handed
          admixture of order one (closure K-13).
        </p>
      </div>
    </div>
  );
}

/** 13.5: quarks in prison, with the string's fossil. */
export function RubberBand() {
  const [sigma, setSigma] = useState(0.19);
  const tension = stringTension(sigma);
  const slope = reggeSlope(sigma);
  const masses = Array.from({ length: 31 }, (_, i) => (i / 30) * 6);
  const x = scaleLinear().domain([0, 6]).range([50, 560]);
  const y = scaleLinear().domain([0, 6]).range([160, 20]);
  const regge = line<number>()
    .x((m2) => x(m2))
    .y((m2) => y(Math.min(6, slope * m2)));
  const observed = line<number>()
    .x((m2) => x(m2))
    .y((m2) => y(Math.min(6, 0.88 * m2)));
  return (
    <div className="primer-exhibit" id="primer-rubber-band">
      <div className="lab-heading">
        <span className="eyebrow">13.5 · α′ = 1/(2πσ)</span>
        <h3>The rubber band and its fossil.</h3>
      </div>
      <AmbientExhibit className="foundation-instrument cone-controls">
        <svg
          viewBox="0 0 600 190"
          aria-label={`Regge trajectory J = α′M² for a string tension of ${sigma.toFixed(2)} GeV²: slope ${slope.toFixed(2)} against the observed 0.88 GeV⁻².`}
        >
          <title>Spin against mass squared for hadrons on a string.</title>
          <line x1="50" y1="160" x2="560" y2="160" className="plot-axis" />
          <line x1="50" y1="20" x2="50" y2="160" className="plot-axis" />
          <path d={observed(masses) ?? ''} className="plot-cone" />
          <path d={regge(masses) ?? ''} className="plot-b3" />
          <text x="300" y="180" className="plot-tick">
            M² in GeV²
          </text>
          <text x="56" y="18" className="plot-tick">
            spin J · dashed: observed slope 0.88 GeV⁻²
          </text>
        </svg>
        <Dial
          label="String tension σ"
          value={sigma}
          display={sigma.toFixed(2) + ' GeV²'}
          min={0.1}
          max={0.3}
          step={0.005}
          onChange={setSigma}
        />
        <Readouts
          items={[
            ['Force', tension.geVPerFm.toFixed(2) + ' GeV/fm'],
            ['In newtons', sci(tension.newtons, 2) + ' N'],
            ['In tonnes-force', tension.tonnesForce.toFixed(1)],
            ['Regge slope 1/(2πσ)', slope.toFixed(2) + ' GeV⁻²'],
          ]}
        />
        <p className="instrument-answer">
          A string spinning with light-speed ends has M = πσR and J = πσR²/2, so
          J = M²/(2πσ): at σ = 0.19 GeV² that is 0.84 GeV⁻² against the observed
          0.88, which GUM lists as a consistency, not a claim.
          <span>
            The dichotomy theorem: a winding charge is confined iff the channel
            that mediates it is gapped. Electric charge is free because the
            photon is massless; colour is jailed because its channel is gapped.
            Problem 13.6: 0.19 GeV² ≈ 0.96 GeV/fm ≈ 1.5×10⁵ N.
          </span>
        </p>
      </AmbientExhibit>
    </div>
  );
}

/** 14.1: the worst prediction in physics, as a dial. */
export function ZeroPoint() {
  const [logLength, setLogLength] = useState(Math.log10(1.6e-35));
  const density = zeroPointDensity(10 ** logLength, 3.16e-26);
  const orders = ordersOfMagnitude(density, 6e-10);
  const x = scaleLinear().domain([-12, 120]).range([50, 560]);
  return (
    <div className="primer-exhibit" id="primer-zero-point">
      <div className="lab-heading">
        <span className="eyebrow">14.1 · ħc/L⁴ AGAINST 6×10⁻¹⁰ J/m³</span>
        <h3>The estimate answers the wrong question.</h3>
      </div>
      <AmbientExhibit className="foundation-instrument cone-controls">
        <svg
          viewBox="0 0 600 110"
          aria-label={`Zero-point energy density for a cutoff of ${sci(10 ** logLength, 1)} m: ${sci(density, 1)} joules per cubic metre, ${orders.toFixed(0)} orders of magnitude above the observed dark energy.`}
        >
          <title>
            The zero-point ledger on a logarithmic scale against the observed
            dark-energy density.
          </title>
          <line x1="50" y1="60" x2="560" y2="60" className="plot-axis" />
          {[0, 30, 60, 90, 120].map((v) => (
            <text key={v} x={x(v)} y="84" className="plot-tick">
              10^{v}
            </text>
          ))}
          <rect
            x={x(Math.log10(6e-10))}
            y="40"
            width={Math.max(2, x(Math.log10(density)) - x(Math.log10(6e-10)))}
            height="40"
            fill="#f1a17d"
            opacity="0.35"
          />
          <line
            x1={x(Math.log10(6e-10))}
            y1="30"
            x2={x(Math.log10(6e-10))}
            y2="90"
            stroke="#9acbb9"
            strokeWidth="2"
          />
          <text x={x(Math.log10(6e-10)) + 4} y="26" className="plot-label">
            observed
          </text>
          <line
            x1={x(Math.log10(density))}
            y1="30"
            x2={x(Math.log10(density))}
            y2="90"
            stroke="#f4d592"
            strokeWidth="2"
          />
          <text
            x={x(Math.log10(density)) - 4}
            y="26"
            className="plot-label"
            textAnchor="end"
          >
            ħc/L⁴
          </text>
        </svg>
        <Dial
          label="Cutoff length log₁₀ L (m)"
          value={logLength}
          display={sci(10 ** logLength, 1) + ' m'}
          min={-35}
          max={-20}
          step={0.1}
          onChange={setLogLength}
        />
        <Readouts
          items={[
            ['ħc/L⁴', sci(density, 1) + ' J/m³'],
            ['Orders of magnitude above the observed', orders.toFixed(0)],
            ['Observed dark energy', '6×10⁻¹⁰ J/m³'],
          ]}
        />
        <p className="instrument-answer">
          At the Planck length the mismatch is about 123 orders; at GUM’s grain
          size still about 91 (problem 14.1 ★). Volovik’s sentence: for a
          self-sustained material, equilibrium forces the pressure on its
          surroundings to vanish and a thermodynamic identity cancels the
          zero-point budget against the material’s own binding; only departures
          from equilibrium gravitate.
          <span>
            The question it leaves: that gravity is sourced by this equilibrium
            quantity is imported, not derived, and everything in Chapter 14
            inherits the condition.
          </span>
        </p>
      </AmbientExhibit>
    </div>
  );
}

const examples = [
  { id: 'leptons', name: 'Lepton logarithms', theory: 16, experiment: 0.0001 },
  { id: 'rho', name: 'ρ = 1 (after Δρ_top)', theory: 0.1, experiment: 0.1 },
  { id: 'regge', name: 'Regge slope 0.84 vs 0.88', theory: 5, experiment: 1 },
];

/** 16.2: Definition 10, landings and tests. */
export function LandingOrTest() {
  const [theory, setTheory] = useState(16);
  const [logExperiment, setLogExperiment] = useState(-4);
  const experiment = 10 ** logExperiment;
  const verdict = landingVerdict(theory, experiment);
  return (
    <div className="primer-exhibit" id="primer-landing">
      <div className="lab-heading">
        <span className="eyebrow">16.2 · δ_th AGAINST δ_exp</span>
        <h3>Tell a landing from a test before anyone says “sigma”.</h3>
      </div>
      <div className="foundation-instrument cone-controls">
        <ToggleGroup
          className="lab-tabs"
          value={[
            examples.find(
              (e) =>
                e.theory === theory &&
                Math.abs(Math.log10(e.experiment) - logExperiment) < 1e-9,
            )?.id ?? 'custom',
          ]}
          onValueChange={(v) => {
            const e = examples.find((x) => x.id === v[0]);
            if (e) {
              setTheory(e.theory);
              setLogExperiment(Math.log10(e.experiment));
            }
          }}
          aria-label="Worked examples"
        >
          {examples.map((e) => (
            <ToggleGroupItem value={e.id} key={e.id}>
              {e.name}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <Dial
          label="Theory band ±δ_th"
          value={theory}
          display={theory + '%'}
          min={0.1}
          max={50}
          step={0.1}
          onChange={setTheory}
        />
        <Dial
          label="Experimental uncertainty ±δ_exp, log₁₀ of a percentage"
          value={logExperiment}
          display={
            experiment < 0.01
              ? experiment.toExponential(0) + '%'
              : experiment.toFixed(2) + '%'
          }
          min={-6}
          max={1.5}
          step={0.1}
          onChange={setLogExperiment}
        />
        <Readouts
          items={[
            ['δ_th / δ_exp', sci(verdict.ratio, 1)],
            ['Verdict', verdict.verdict],
          ]}
        />
        <p className="instrument-answer">
          {verdict.verdict === 'landing'
            ? 'Report it as “consistent within ±' +
              theory +
              '%”, never as a pull in standard deviations. GUM’s lepton logarithms are landings by factors of 10³–10⁴.'
            : verdict.verdict === 'test'
              ? 'The theory is sharp enough for the experiment to bite: a genuine test, and a σ is a meaningful word.'
              : 'Between the two rules: say both numbers and let the reader judge.'}
          <span>
            Apply this to the next “stunning agreement” you read about, in any
            field.
          </span>
        </p>
      </div>
    </div>
  );
}

const questions = [
  [
    'Tag',
    'A theorem given a hypothesis (dense storage) — the headline dropped the “given”.',
  ],
  [
    'Kill',
    'A flat mirror-circuit return probability through 350 qubits with verified scrambling.',
  ],
  [
    'Error bar',
    '234–329 qubits under one hosting hypothesis, set by an unknown grain size, plus up to about 8 more; other hypotheses give 152–219 or 196–317.',
  ],
  ['Discrimination', 'Yes: standard quantum mechanics predicts no cliff.'],
  [
    'Landing or test',
    'A test, of a shape (halving per qubit, depth-independent) and a knob dependence, not just a number.',
  ],
  ['Owed', 'Which hosting mode (K-24).'],
  [
    'Corrections',
    'An earlier version of this claim was untestable; check which version is being quoted.',
  ],
];

/** 16.6: reading a headline with the kit. */
export function HeadlineAuditor() {
  const [revealed, setRevealed] = useState<number[]>([]);
  return (
    <div className="primer-exhibit headline-audit" id="primer-headline">
      <div className="lab-heading">
        <span className="eyebrow">16.6 · SEVEN QUESTIONS, SIXTY SECONDS</span>
        <h3>
          “Physicists predict quantum computers will hit a wall at 300 qubits.”
        </h3>
      </div>
      <div className="foundation-instrument">
        <ol className="headline-questions">
          {questions.map(([question, answer], i) => (
            <li key={question}>
              <button
                type="button"
                className="headline-question"
                aria-expanded={revealed.includes(i)}
                onClick={() =>
                  setRevealed((old) =>
                    old.includes(i) ? old.filter((x) => x !== i) : [...old, i],
                  )
                }
              >
                <span className="eyebrow">0{i + 1}</span>
                <strong>{question}</strong>
                <span>{revealed.includes(i) ? '−' : '+'}</span>
              </button>
              {revealed.includes(i) && <p>{answer}</p>}
            </li>
          ))}
        </ol>
        <p className="instrument-answer">
          The strongest sentence the evidence licenses:{' '}
          <em>
            a speculative program predicts that, if a stated hypothesis about
            how nature stores quantum states holds, a specific
            scramble-and-unscramble test will fail abruptly somewhere near
            230–330 qubits, at a point that moves with chip size; standard
            quantum mechanics predicts no failure; nobody has run the test yet.
          </em>
        </p>
      </div>
    </div>
  );
}
