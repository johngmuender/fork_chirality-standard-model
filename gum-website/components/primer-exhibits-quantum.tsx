'use client';
import { useRef, useState } from 'react';
import { line, scaleLinear } from 'd3';
import { Switch } from '@/components/ui/switch';
import { AmbientExhibit, useSceneClock } from '@/components/exhibit-motion';
import { Dial, Readouts, sci } from '@/components/primer-dial';
import { KnotSection } from '@/components/particle-exhibits';
import {
  amplitudeCount,
  derrickEnergy,
  derrickMinimum,
  fisherPenalty,
  hairyBallField,
  knobCount,
  massRatioDrift,
  quantumPotentialGaussian,
} from '@/lib/primer-physics';
import { capacityFloor, haarFidelityBound } from '@/lib/gum-quantum';
import { haloLength } from '@/lib/gum-particle';
import { electronMassEv, muonMassEv, tauMassEv } from '@/lib/gum-constants';

/** Server and browser can disagree in the last bit of trigonometry; drawn coordinates must not. */
const round = (value: number) => Math.round(value * 1000) / 1000;

/** 7.1–7.2: the quantum potential of a packet, and the penalty for squeezing it. */
export function Madelung() {
  const [sigma, setSigma] = useState(1);
  const xs = Array.from({ length: 121 }, (_, i) => -4 + (i / 120) * 8);
  const density = (x: number) =>
    Math.exp(-(x * x) / (2 * sigma * sigma)) / (sigma * Math.sqrt(2 * Math.PI));
  const x = scaleLinear().domain([-4, 4]).range([50, 560]);
  const yRho = scaleLinear().domain([0, 1.4]).range([110, 20]);
  const yU = scaleLinear().domain([-3, 3]).range([200, 120]);
  const rho = line<number>()
    .x((v) => x(v))
    .y((v) => yRho(density(v)));
  const potential = line<number>()
    .x((v) => x(v))
    .y((v) =>
      yU(Math.max(-3, Math.min(3, quantumPotentialGaussian(v, sigma, 1, 1)))),
    );
  const fisher = fisherPenalty(sigma, 1, 1);
  return (
    <div className="primer-exhibit" id="primer-madelung">
      <div className="lab-heading">
        <span className="eyebrow">7.1 · U_Q = −(ħ²/2M)(∇²√ρ)/√ρ</span>
        <h3>The crowd that won’t be squeezed.</h3>
      </div>
      <AmbientExhibit className="foundation-instrument cone-controls">
        <svg
          viewBox="0 0 600 220"
          aria-label={`A Gaussian packet of width ${sigma.toFixed(2)} and its quantum potential; the Fisher penalty is ${fisher.toFixed(3)} in units of ħ²/M.`}
        >
          <title>
            The probability density of a packet and the quantum potential it
            carries.
          </title>
          <path d={rho(xs) ?? ''} className="plot-b2" />
          <line x1="50" y1={yU(0)} x2="560" y2={yU(0)} className="plot-axis" />
          <path d={potential(xs) ?? ''} className="plot-b3" />
          <text x="56" y="18" className="plot-tick">
            ρ(x), blue · U_Q(x), copper
          </text>
          <text x="300" y="214" className="plot-tick">
            position x in units of a
          </text>
        </svg>
        <Dial
          label="Packet width σ"
          value={sigma}
          display={sigma.toFixed(2) + ' a'}
          min={0.3}
          max={2.5}
          step={0.01}
          onChange={setSigma}
        />
        <Readouts
          items={[
            [
              'U_Q at the centre, in ħ²/(2Ma²)',
              (1 / (2 * sigma * sigma)).toFixed(3),
            ],
            ['Fisher penalty ħ²/(8Mσ²), in ħ²/(Ma²)', fisher.toFixed(3)],
            ['Spreading pressure as σ halves', '× 4'],
          ]}
        />
        <p className="instrument-answer">
          Squeeze the packet and the quantum potential rises as 1/σ²: the
          jostling pushes back harder the tighter you pack. Hydrogen does not
          collapse because squeezing the electron’s cloud raises this energy
          faster than attraction lowers it.
          <span>
            In GUM the jitter is the material’s zero-point agitation, the
            diffusion constant ħ/2M comes from the knot closure of Chapter 10,
            and the phase is a real angle, so Wallstrom’s gap closes by
            construction.
          </span>
        </p>
      </AmbientExhibit>
    </div>
  );
}

/** 7.6–7.7: the best a limited material can do, and the floor set by existing machines. */
export function SchmidtFidelity() {
  const [half, setHalf] = useState(26);
  const [logRank, setLogRank] = useState(7);
  const [agreement, setAgreement] = useState(0.8);
  const bound = haarFidelityBound(10 ** logRank, half);
  const floor = capacityFloor(half, agreement);
  return (
    <div className="primer-exhibit" id="primer-fidelity">
      <div className="lab-heading">
        <span className="eyebrow">7.6 · F_χ ≤ 4χ/2^m</span>
        <h3>Capacity χ against a half-split of m qubits.</h3>
      </div>
      <div className="foundation-instrument cone-controls">
        <Dial
          label="Qubits on each side of the cut, m"
          value={half}
          display={String(half)}
          min={6}
          max={40}
          step={1}
          onChange={setHalf}
        />
        <Dial
          label="Material capacity log₁₀ χ"
          value={logRank}
          display={sci(10 ** logRank, 1)}
          min={0}
          max={12}
          step={0.1}
          onChange={setLogRank}
        />
        <Dial
          label="Observed agreement with the gate-error model"
          value={agreement}
          display={agreement.toFixed(2)}
          min={0.4}
          max={0.98}
          step={0.01}
          onChange={setAgreement}
        />
        <Readouts
          items={[
            [
              'Best fidelity a rank-χ material can reach',
              bound.toFixed(bound < 0.01 ? 6 : 3),
            ],
            ['Capacity floor χ ≥ F × 2^m / 4', sci(floor, 1)],
            ['2^m', sci(2 ** half, 1)],
          ]}
        />
        <p className="instrument-answer">
          {bound >= 0.999
            ? 'This capacity hosts a random state of that size with no loss: the hotel has rooms to spare.'
            : 'A material of this capacity would spoil a random-circuit experiment of this size by a factor ' +
              (1 / Math.max(bound, 1e-9)).toExponential(1) +
              ' in fidelity.'}
          <span>
            With m = 26 and agreement within 20%, the 2019 random-circuit
            experiment already implies χ ≥ 0.8 × 2²⁶/4 ≈ 1.3×10⁷. A tower a few
            layers deep fails by six orders of magnitude; GUM passes because its
            capacity is set by the material’s degrees of freedom. Redo it at 50%
            agreement (problem 7.4) and the conclusion does not change.
          </span>
        </p>
      </div>
    </div>
  );
}

/** 8.1: you cannot store more numbers than you have knobs. */
export function KnobCounter() {
  const [logVolume, setLogVolume] = useState(-10);
  const [logScale, setLogScale] = useState(Math.log10(1.5e-27));
  const [qubits, setQubits] = useState(200);
  const knobs = knobCount(10 ** logVolume, 10 ** logScale);
  const amplitudes = amplitudeCount(qubits);
  const full = qubits > knobs.bits;
  const rooms = 48;
  const guests = Math.min(96, Math.round(rooms * 2 ** (qubits - knobs.bits)));
  return (
    <div className="primer-exhibit" id="primer-knobs">
      <div className="lab-heading">
        <span className="eyebrow">8.1 · n_q ≲ log₂ N_eff</span>
        <h3>The hotel with N rooms.</h3>
      </div>
      <AmbientExhibit className="foundation-instrument cone-controls">
        <svg
          viewBox="0 0 600 150"
          aria-label={`A hotel of ${rooms} rooms with ${guests} guests: ${full ? 'full' : 'rooms to spare'}.`}
        >
          <title>Rooms are knobs; guests are the states to be stored.</title>
          {Array.from({ length: rooms }, (_, i) => (
            <rect
              key={i}
              x={40 + (i % 16) * 33}
              y={20 + Math.floor(i / 16) * 33}
              width="27"
              height="27"
              rx="4"
              fill={i < guests ? '#183c36' : '#122235'}
              stroke={i < guests ? '#9acbb9' : '#365271'}
            />
          ))}
          {Array.from({ length: Math.max(0, guests - rooms) }, (_, i) => (
            <circle
              key={i}
              cx={50 + (i % 24) * 21}
              cy={128 + Math.floor(i / 24) * 14}
              r="5"
              fill="#f1a17d"
            />
          ))}
        </svg>
        <Dial
          label="Register volume log₁₀ V (m³)"
          value={logVolume}
          display={sci(10 ** logVolume, 0) + ' m³'}
          min={-12}
          max={-4}
          step={0.1}
          onChange={setLogVolume}
        />
        <Dial
          label="Structural scale log₁₀ ℓ_s (m)"
          value={logScale}
          display={sci(10 ** logScale, 1) + ' m'}
          min={-35}
          max={-26}
          step={0.05}
          onChange={setLogScale}
        />
        <Dial
          label="Qubits n_q"
          value={qubits}
          display={String(qubits)}
          min={10}
          max={400}
          step={1}
          onChange={setQubits}
        />
        <Readouts
          items={[
            ['Knobs N_eff = V/ℓ_s³', sci(knobs.knobs, 1)],
            ['log₂ N_eff', knobs.bits.toFixed(1)],
            ['Real numbers in an n_q-qubit state', sci(amplitudes.real, 1)],
            ['Verdict', full ? 'more guests than rooms' : 'rooms to spare'],
          ]}
        />
        <p className="instrument-answer">
          {full
            ? 'Beyond log₂N_eff qubits the hotel is full: a classical material with bounded gain cannot represent every state. That is Theorem 9, and the paper’s verdict is that it is correct and untestable as stated.'
            : 'Below log₂N_eff qubits every state fits. Raise the qubit count past the bits of the register to see the hotel fill.'}
          <span>
            Problem 8.1: V = 10⁻¹⁰ m³ with ℓ_s = 1.5×10⁻²⁷ m gives about 234; V
            = 10⁻⁶ m³ with the Planck length gives about 329. Those are the ends
            of the H_V cliff range. Why no experiment can test the theorem as
            stated, and what replaces it, is §8.2–8.4.
          </span>
        </p>
      </AmbientExhibit>
    </div>
  );
}

/** 9.1: the hairy ball, combed as flat as it can be. */
export function HairyBall() {
  const [tilt, setTilt] = useState(35);
  const [t, setT] = useState(0);
  const stage = useRef<HTMLDivElement>(null);
  useSceneClock(stage, (_, dt) => setT((old) => old + dt * 0.35));
  const points: {
    x: number;
    y: number;
    vx: number;
    vy: number;
    depth: number;
    mag: number;
  }[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  const tiltRad = (tilt * Math.PI) / 180;
  for (let i = 0; i < 260; i++) {
    const yy = 1 - (2 * (i + 0.5)) / 260;
    const ring = Math.sqrt(1 - yy * yy);
    const phi = golden * i + t;
    const px = ring * Math.cos(phi),
      pz = ring * Math.sin(phi);
    const theta = Math.acos(yy);
    const field = hairyBallField(theta, phi);
    const rotate = (vx: number, vy: number, vz: number) => ({
      x: vx,
      y: vy * Math.cos(tiltRad) - vz * Math.sin(tiltRad),
      z: vy * Math.sin(tiltRad) + vz * Math.cos(tiltRad),
    });
    const pos = rotate(px, yy, pz);
    const vec = rotate(field[0], field[2], field[1]);
    if (pos.z < 0) continue;
    points.push({
      x: pos.x,
      y: pos.y,
      vx: vec.x,
      vy: vec.y,
      depth: pos.z,
      mag: Math.sin(theta),
    });
  }
  return (
    <div className="primer-exhibit" id="primer-hairy-ball" ref={stage}>
      <div className="lab-heading">
        <span className="eyebrow">9.1 · TRY THIS, ON A SPHERE</span>
        <h3>Every combing leaves a cowlick.</h3>
      </div>
      <div className="spectrum-layout">
        <AmbientExhibit className="foundation-instrument">
          <svg
            viewBox="0 0 400 400"
            aria-label={`A sphere combed with a tangent field, tilted by ${tilt}° so the cowlicks at the poles come into view.`}
          >
            <title>
              A tangent field on a sphere; the arrows shrink to nothing at two
              points.
            </title>
            <circle cx="200" cy="200" r="170" fill="#0f1824" stroke="#365271" />
            {points.map((p, i) => {
              const sx = round(200 + 170 * p.x),
                sy = round(200 - 170 * p.y);
              const len = 14 * p.mag;
              return (
                <g key={i} opacity={round(0.35 + 0.65 * p.depth)}>
                  <line
                    x1={sx}
                    y1={sy}
                    x2={round(sx + len * p.vx)}
                    y2={round(sy - len * p.vy)}
                    stroke={p.mag < 0.25 ? '#f4d592' : '#8bbcff'}
                    strokeWidth={p.mag < 0.25 ? 2.5 : 1.5}
                  />
                  <circle
                    cx={sx}
                    cy={sy}
                    r={p.mag < 0.12 ? 4 : 1.5}
                    fill={p.mag < 0.12 ? '#f1a17d' : '#c9d8ea'}
                  />
                </g>
              );
            })}
          </svg>
          <Dial
            label="Tilt the ball toward you"
            value={tilt}
            display={tilt + '°'}
            min={0}
            max={90}
            step={1}
            onChange={setTilt}
          />
          <p className="instrument-answer">
            The fuzz is combed along circles of latitude; it lies flat
            everywhere except at two points where the circles shrink to nothing.
            Move the cowlicks, merge them, cancel them in pairs: their signed
            count stays fixed. That count is a topological invariant.
            <span>
              In three dimensions the hedgehog is the same idea one dimension
              up: orientations pointing outward from a centre, wrapping the
              sphere of orientations once. A whole number cannot pass through ½,
              so a hedgehog is a knot in the material: a particle.
            </span>
          </p>
        </AmbientExhibit>
        <div className="completion-notes">
          <article>
            <span className="eyebrow">LEMMA 5</span>
            <strong>Charge conservation is the absence of tears</strong>
            <p>
              Along any tear-free history the total degree is constant, an
              integer, and changes only in ±1 pairs at a pinch. Three
              Standard-Model inputs, one lemma.
            </p>
          </article>
          <article>
            <span className="eyebrow">⬛ REAL PHYSICS</span>
            <strong>
              Somewhere on Earth the horizontal wind is always zero
            </strong>
            <p>The hairy-ball theorem, applied to the atmosphere.</p>
          </article>
        </div>
      </div>
    </div>
  );
}

/** 9.2: Derrick's guillotine and the two escapes. */
export function Derrick() {
  const [terms, setTerms] = useState({
    e2: true,
    e0: true,
    e4: false,
    e6: false,
  });
  const values = {
    e2: terms.e2 ? 1 : 0,
    e0: terms.e0 ? 0.4 : 0,
    e4: terms.e4 ? 0.5 : 0,
    e6: terms.e6 ? 0.15 : 0,
  };
  const lambdas = Array.from({ length: 81 }, (_, i) => 0.25 + (i / 80) * 2.75);
  const energies = lambdas.map((l) => derrickEnergy(l, values));
  const top = Math.max(1, ...energies.filter((e) => e < 12));
  const x = scaleLinear().domain([0.25, 3]).range([50, 560]);
  const y = scaleLinear().domain([0, top]).range([180, 20]);
  const curve = line<number>()
    .x((l) => x(l))
    .y((l) => y(Math.min(top, derrickEnergy(l, values))));
  const minimum = derrickMinimum(values);
  const labels: [keyof typeof terms, string][] = [
    ['e2', 'E₂ · two derivatives · scales as λ'],
    ['e0', 'E₀ · potential · scales as λ³'],
    ['e4', 'E₄ · Skyrme, four derivatives · 1/λ'],
    ['e6', 'E₆ · sextic · 1/λ³'],
  ];
  return (
    <div className="primer-exhibit" id="primer-derrick">
      <div className="lab-heading">
        <span className="eyebrow">9.2 · SHRINK IT BY λ</span>
        <h3>A lump of field implodes, unless a term resists.</h3>
      </div>
      <AmbientExhibit className="foundation-instrument cone-controls">
        <svg
          viewBox="0 0 600 210"
          aria-label={`Energy against scale factor for the chosen terms; ${minimum ? 'a stable size exists at λ = ' + minimum.lambda.toFixed(2) : 'no stable size exists'}.`}
        >
          <title>Derrick’s scaling: energy against the shrink factor.</title>
          <line x1="50" y1="180" x2="560" y2="180" className="plot-axis" />
          <line x1="50" y1="20" x2="50" y2="180" className="plot-axis" />
          <path d={curve(lambdas) ?? ''} className="plot-b2" />
          {minimum && minimum.lambda > 0.26 && (
            <circle
              cx={x(minimum.lambda)}
              cy={y(Math.min(top, minimum.energy))}
              r="6"
              fill="#f4d592"
            />
          )}
          <text x="300" y="200" className="plot-tick">
            scale factor λ: small is shrunk, large is swollen
          </text>
        </svg>
        <div className="derrick-switches">
          {labels.map(([key, label]) => (
            <label key={key} className="chain-toggle">
              <Switch
                checked={terms[key]}
                onCheckedChange={(checked) =>
                  setTerms((old) => ({ ...old, [key]: checked }))
                }
              />{' '}
              {label}
            </label>
          ))}
        </div>
        <p className="instrument-answer" aria-live="polite">
          {!terms.e2 && !terms.e0
            ? 'Without gradient or potential energy nothing pulls the texture inward, but nothing holds it together either.'
            : minimum && minimum.lambda > 0.26
              ? 'A minimum exists at λ = ' +
                minimum.lambda.toFixed(2) +
                ': this pair of terms stabilises a static knot. ' +
                (terms.e4
                  ? 'Four derivatives blow up under shrinking: Skyrme’s escape, GUM’s W₄. '
                  : '') +
                (terms.e6
                  ? 'Six derivatives against the potential: the BPS escape, GUM’s W₆₊₀, with the minimum where E₆ = E₀. '
                  : '')
              : 'Both terms decrease as λ → 0: the texture lowers its energy by imploding and no stable size exists. That is Derrick’s guillotine (problem 9.2 ★).'}
          <span>
            Which pair governs a spinning knot decides what spin it can have:
            Chapter 10’s window.
          </span>
        </p>
      </AmbientExhibit>
    </div>
  );
}

/** 9.5: the belt trick, with the spinor sign it carries. */
export function BeltTrick() {
  const [twist, setTwist] = useState(360);
  const segments = Array.from({ length: 40 }, (_, i) => i);
  const sign = Math.cos((twist * Math.PI) / 360);
  return (
    <div className="primer-exhibit" id="primer-belt">
      <div className="lab-heading">
        <span className="eyebrow">9.5 · 360° IS NOT 720°</span>
        <h3>Why knots can be fermions.</h3>
      </div>
      <AmbientExhibit className="foundation-instrument cone-controls">
        <svg
          viewBox="0 0 600 200"
          aria-label={`A belt twisted by ${twist}°; the spinor phase factor is ${sign.toFixed(2)}.`}
        >
          <title>
            A belt buckled at one end, twisted at the other; and the half-angle
            phase it carries.
          </title>
          <rect x="30" y="70" width="16" height="60" fill="#5f7fa3" />
          {segments.map((i) => {
            const u = i / segments.length;
            const angle = (twist * Math.PI * u) / 180;
            const w = round(26 * Math.cos(angle));
            const front = Math.cos(angle) >= 0;
            return (
              <rect
                key={i}
                x={50 + i * 10.5}
                y={100 - Math.abs(w) / 2}
                width="9"
                height={Math.max(2, Math.abs(w))}
                fill={front ? '#8bbcff' : '#f1a17d'}
              />
            );
          })}
          <rect x="474" y="70" width="16" height="60" fill="#c9d8ea" />
          <g transform="translate(545,100)">
            <circle r="36" fill="none" stroke="#365271" />
            <line
              x1="0"
              y1="0"
              x2={round(36 * Math.cos((twist * Math.PI) / 360))}
              y2={round(-36 * Math.sin((twist * Math.PI) / 360))}
              stroke="#f4d592"
              strokeWidth="3"
            />
            <text x="0" y="56" className="plot-tick">
              phase e^(iθ/2)
            </text>
          </g>
        </svg>
        <Dial
          label="Twist of the free end"
          value={twist}
          display={twist + '°'}
          min={0}
          max={720}
          step={5}
          onChange={setTwist}
        />
        <Readouts
          items={[
            [
              'Phase factor cos(θ/2), the real part of e^(iθ/2)',
              sign.toFixed(2),
            ],
            ['At 360°', '−1'],
            ['At 720°', '+1'],
          ]}
        />
        <p className="instrument-answer">
          {twist < 180
            ? 'A small twist unwinds trivially.'
            : twist < 540
              ? 'Near 360° the belt cannot be untwisted while the end’s orientation is held fixed: the twist is topological, and the phase has flipped to −1.'
              : 'Near 720° the belt can be undone by looping it around the end. Two full turns are nothing; one full turn is a sign.'}
          <span>
            Finkelstein and Rubinstein: swapping two identical knots is
            continuously connected to rotating one by 360°, so a −1 for the
            rotation is a −1 for the swap. One clock period multiplies the state
            by −1; only 720° brings it back. Pauli exclusion is a belt trick
            performed by the material.
          </span>
        </p>
      </AmbientExhibit>
    </div>
  );
}

/** 10.6: the α–µ discriminant. */
export function AlphaMu() {
  const [drift, setDrift] = useState(1);
  const dlnAlpha = drift * 1e-6;
  const gum = massRatioDrift(dlnAlpha, 0);
  const unified = massRatioDrift(dlnAlpha, 35);
  return (
    <div className="primer-exhibit" id="primer-alpha-mu">
      <div className="lab-heading">
        <span className="eyebrow">10.6 · R_µα ≡ Δln µ_pe / Δln α</span>
        <h3>If α ever drifts, mass ratios stay put.</h3>
      </div>
      <div className="foundation-instrument cone-controls">
        <Dial
          label="Suppose a survey finds Δα/α"
          value={drift}
          display={drift.toFixed(1) + ' × 10⁻⁶'}
          min={-5}
          max={5}
          step={0.1}
          onChange={setDrift}
        />
        <Readouts
          items={[
            ['GUM: Δµ_pe/µ_pe', gum.toExponential(1)],
            ['Grand unification, R ≈ 35: Δµ_pe/µ_pe', unified.toExponential(1)],
            ['Present limit on Δµ_pe/µ_pe at z = 0.89', '< 10⁻⁷'],
          ]}
        />
        <p className="instrument-answer">
          ħ ∝ Λ√J is the exchange rate between the material’s units and ours: if
          the stiffnesses drift, α moves, but every rest energy is a shape
          number times Λm̃_V, so Λ cancels in every mass ratio. Unified theories
          tie the drifts together with |R| ≈ 30–40 instead.
          <span>
            Stake S23: a joint detection with |R_µα| ≳ 1 retires the physical
            clock. Problem 10.7: for Δα/α = 10⁻⁶, GUM predicts 0 and a unified
            theory with R = 35 predicts 3.5×10⁻⁵.
          </span>
        </p>
      </div>
    </div>
  );
}

/** 11.3: the lighthouse in fog — a core at the structural scale, a halo at the Compton scale. */
export function CoreHalo() {
  const [kappa, setKappa] = useState(1 / Math.SQRT2);
  const rows = [
    ['electron', electronMassEv],
    ['muon', muonMassEv],
    ['tau', tauMassEv],
  ] as const;
  return (
    <div className="primer-exhibit" id="primer-core-halo">
      <div className="lab-heading">
        <span className="eyebrow">11.3 · THE LIGHTHOUSE IN FOG</span>
        <h3>A point that shines, a glow set by the fog.</h3>
      </div>
      <div className="spectrum-layout">
        <AmbientExhibit className="foundation-instrument">
          <KnotSection kappa={kappa} spinning />
          <Dial
            label="Clock ratio κ"
            value={kappa}
            display={kappa.toFixed(3)}
            min={0.5}
            max={0.95}
            step={0.005}
            onChange={setKappa}
          />
          <Readouts
            items={rows.map(([name, mass]) => [
              name + ' halo (c_ψ/c)·ħ/(Mc)·κ/√(1−κ²)/κ·κ',
              haloLength(mass, kappa).toExponential(2) + ' m',
            ])}
          />
          <p className="instrument-answer">
            The drawing shows the texture over its parameter grid; the real
            ratio of halo to core is about 2.6×10¹⁴ for the electron and cannot
            be drawn. Poke the glow and nothing new shines; for a second glow
            you need a second lamp.
          </p>
        </AmbientExhibit>
        <div className="completion-notes">
          <article>
            <span className="eyebrow">THE CORE · ℓ_s ≲ 1.5×10⁻²⁷ m</span>
            <strong>Where the light comes from</strong>
            <p>
              The degree, the disclination charge, the Bogomolny energy and the
              internal rotation. Pointlike to every probe of the charge.
            </p>
          </article>
          <article>
            <span className="eyebrow">THE HALO · (c_ψ/c) ħ/(Mc)</span>
            <strong>How far the glow reaches</strong>
            <p>
              The evanescent skin of Chapter 2, driven by the spinning core,
              with no vibrations of its own. Its only excitation is another
              particle.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
