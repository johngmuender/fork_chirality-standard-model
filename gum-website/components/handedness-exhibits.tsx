'use client';
import { useId, useRef, useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import {
  AmbientExhibit,
  DemoControl,
  useGentleDemo,
} from '@/components/exhibit-motion';
import { Term } from '@/components/glossary';

const links = [
  {
    id: 'weak',
    label: 'Weak chirality',
    plus: 'left-handed charged currents',
    minus: 'right-handed charged currents',
    status: 'anchor',
  },
  {
    id: 'family',
    label: 'Family orientation',
    plus: 'τ → μ → e ladder',
    minus: 'reversed ladder',
    status: 'not independently observable',
  },
  {
    id: 'cp',
    label: 'Sign of δ_CP',
    plus: 'δ_CP → −π/2',
    minus: 'δ_CP → +π/2',
    status: 'DUNE · Hyper-K (S10)',
  },
  {
    id: 'k3',
    label: 'Strong-CP residual',
    plus: 'θ̄_eff positive',
    minus: 'θ̄_eff negative',
    status: 'closure K-3',
  },
  {
    id: 'cb',
    label: 'Birefringence sign ε₅s',
    plus: 'β_cb > 0',
    minus: 'β_cb < 0',
    status: 'closure K-8 · SO, LiteBIRD',
  },
  {
    id: 'mirror',
    label: 'Mirror force sign',
    plus: 'F_LL − F_RR > 0',
    minus: 'F_LL − F_RR < 0',
    status: 'closure K-20 (S26)',
  },
] as const;

export function SignChain({
  anchor = 'sign-chain',
}: {
  anchor?: string;
} = {}) {
  const uid = useId();
  const [positive, setPositive] = useState(true);
  const host = useRef<HTMLDivElement>(null);
  const demo = useGentleDemo(host, () => setPositive((p) => !p), 12000);
  const s = positive ? 1 : -1;
  return (
    <div className="sign-chain" id={anchor} ref={host} {...demo.handlers}>
      <div className="lab-heading">
        <span className="eyebrow">
          PROPOSITION 28 · ONE BIT, ONE PARITY CHECK
        </span>
        <h3>
          Flip the vacuum
          <br />
          and every link flips with it.
        </h3>
        <p>
          A sign chain is a set of observables O_i with theory-computed signs
          ε_i such that O_i = ε_i s for one global{' '}
          <Term id="handedness-bit">handedness bit</Term>. A chain of length k
          with one free bit has k − 1 independent parity checks; with weak
          chirality as the anchor, the remaining testable prediction is a
          definite sign of δ_CP, and if closure K-8 reproduces the cosmic
          birefringence, its sign becomes a second check.
        </p>
      </div>
      <DemoControl {...demo} />
      <AmbientExhibit className="foundation-instrument chain-instrument">
        <label className="chain-toggle" htmlFor={uid + 'handedness-bit'}>
          <Switch
            id={uid + 'handedness-bit'}
            checked={positive}
            onCheckedChange={setPositive}
          />{' '}
          Vacuum handedness s = {s > 0 ? '+1' : '−1'}
        </label>
        <ol
          className="chain-links"
          aria-live={demo.automatic ? 'off' : 'polite'}
        >
          {links.map((link, i) => (
            <li key={link.id} className={i === 0 ? 'is-anchor' : ''}>
              <span className="eyebrow">{link.label.toUpperCase()}</span>
              <strong>{s > 0 ? link.plus : link.minus}</strong>
              <small>{link.status}</small>
            </li>
          ))}
        </ol>
        <p className="instrument-answer">
          The chain is broken if any product O_iO_j ≠ ε_iε_j. The sign of w_a is
          +1 for all n independently of s, so the dark-energy drift is not a
          link but an unconditional prediction.{' '}
          <span>
            Proposition 30: a wall between domains flips weak chirality and must
            reorganise the core zero-modes of every knot, so walls are
            weak-scale heavy, and the bit was selected before or during
            inflation. GUM predicts one domain across the observable universe
            and a uniform sign of β(n̂) wherever K-8 makes it nonzero (Stake
            S30).
          </span>
        </p>
      </AmbientExhibit>
    </div>
  );
}

export function MirrorForce({
  anchor = 'mirror-force',
}: {
  anchor?: string;
} = {}) {
  const uid = useId();
  const [positive, setPositive] = useState(true);
  const [amplitude, setAmplitude] = useState(30);
  const [separation, setSeparation] = useState(12);
  const s = positive ? 1 : -1;
  const range = 24.6;
  const a = (amplitude / 100) * Math.exp(-separation / range);
  const b = 0.6 * a;
  const forces = {
    LL: 1 + s * a,
    RR: 1 - s * a,
    LR: 1 + s * b,
    RL: 1 - s * b,
  };
  return (
    <div className="mirror-force" id={anchor}>
      <div className="lab-heading">
        <span className="eyebrow">
          PROPOSITION 31 · A MIRROR TEST OF SHORT-RANGE FORCES
        </span>
        <h3>
          In a parity-invariant world
          <br />
          U_LL = U_RR.
        </h3>
        <p>
          For mirror-image test bodies in mirror-image configurations, a
          parity-invariant dynamics and vacuum give U_LL = U_RR and U_LR = U_RL.
          If the vacuum carries handedness s, the differences are odd in s: U_LL
          − U_RR = s𝒜(r) and U_LR − U_RL = sℬ(r), supported on the range of the
          vacuum’s parity-odd correlations, which in GUM is the fog’s
          correlation length of a few to tens of micrometres: exactly the range
          of precision Casimir and short-range-gravity experiments.
        </p>
      </div>
      <div className="foundation-instrument mirror-instrument">
        <label className="chain-toggle" htmlFor={uid + 'mirror-bit'}>
          <Switch
            id={uid + 'mirror-bit'}
            checked={positive}
            onCheckedChange={setPositive}
          />{' '}
          Vacuum handedness s = {s > 0 ? '+1' : '−1'}
        </label>
        <div className="mirror-grid" aria-live="polite">
          {(['LL', 'RR', 'LR', 'RL'] as const).map((pair) => (
            <div
              key={pair}
              className={pair === 'LL' || pair === 'RR' ? 'same-hand' : ''}
            >
              <span className="eyebrow">F_{pair}</span>
              <strong>{forces[pair].toFixed(3)}</strong>
              <small>schematic units</small>
            </div>
          ))}
        </div>
        <div className="ladder-sliders">
          <div>
            <label
              id={uid + 'amplitude-label'}
              className="foundation-slider-label"
            >
              Schematic amplitude of 𝒜 at zero separation{' '}
              <output aria-live="off">{amplitude}%</output>
            </label>
            <Slider
              min={0}
              max={60}
              step={1}
              value={[amplitude]}
              onValueChange={(v) => setAmplitude(Array.isArray(v) ? v[0] : v)}
              aria-labelledby={uid + 'amplitude-label'}
            />
          </div>
          <div>
            <label
              id={uid + 'separation-label'}
              className="foundation-slider-label"
            >
              Separation <output aria-live="off">{separation} μm</output>
            </label>
            <Slider
              min={3}
              max={25}
              step={1}
              value={[separation]}
              onValueChange={(v) => setSeparation(Array.isArray(v) ? v[0] : v)}
              aria-labelledby={uid + 'separation-label'}
            />
          </div>
        </div>
        <p className="instrument-answer">
          F_LL − F_RR = {(forces.LL - forces.RR).toFixed(3)} and F_LR − F_RL ={' '}
          {(forces.LR - forces.RL).toFixed(3)}: both s-odd, so their agreement
          in sign is an internal control; exchanging the masses between their
          mounts controls for fabrication asymmetry.{' '}
          <span>
            The amplitudes here are schematic with a 24.6 μm range; the real
            𝒜(r) is the deliverable of closure K-20 and sets the level at which
            a null result kills Stake S26. In the Standard Model alone the
            differences arise only from weak neutral currents and are negligible
            at micrometre separations.
          </span>
        </p>
      </div>
    </div>
  );
}

export function BirefringenceEndpoint({
  anchor = 'endpoint',
}: {
  anchor?: string;
} = {}) {
  const uid = useId();
  const [difference, setDifference] = useState(0.6);
  const g = 0.01;
  const beta = 0.5 * g * difference;
  return (
    <div className="endpoint-exhibit" id={anchor}>
      <div className="lab-heading">
        <span className="eyebrow">PROPOSITION 29 · THE ENDPOINT PROPERTY</span>
        <h3>Θ-birefringence depends only on the endpoints.</h3>
        <p>
          With a coupling g_Θ Θ E·B, the plane of linear polarisation rotates by
          β = ½g_Θ[Θ(o) − Θ(e)], independently of the path and of the frequency.
          Fog-scale fluctuations along the path neither accumulate nor
          random-walk, so there is no depolarisation at leading order; the CMB
          measures Θ today minus Θ at last scattering, and sources at lower
          redshift must show β(z_s)/β_CMB = [Θ(o) − Θ(z_s)]/[Θ(o) − Θ(z_rec)].
        </p>
      </div>
      <div className="foundation-instrument">
        <label
          id={uid + 'theta-difference-label'}
          className="foundation-slider-label"
        >
          Θ(o) − Θ(last scattering), schematic units{' '}
          <output aria-live="off">{difference.toFixed(2)}</output>
        </label>
        <Slider
          min={-1}
          max={1}
          step={0.05}
          value={[difference]}
          onValueChange={(v) => setDifference(Array.isArray(v) ? v[0] : v)}
          aria-labelledby={uid + 'theta-difference-label'}
        />
        <div className="mass-equation" aria-live="polite">
          <span>β = ½ g_Θ [Θ(o) − Θ(e)]</span>
          <strong>
            {((beta * 180) / Math.PI).toFixed(3)}° for g_Θ = {g}
          </strong>
          <small>
            Frequency-flat, as the reported 0.2–0.3° is across 23–353 GHz. The
            core predicts β_cb = 0; K-8 is the only mechanism in GUM that could
            produce a flat rotation, so a confirmed β_cb ≠ 0 makes K-8
            mandatory.
          </small>
        </div>
      </div>
    </div>
  );
}

export function HandednessChapter({ depth }: { depth: string }) {
  return (
    <section className="section handedness-section" id="handedness">
      <div className="section-number">
        <span aria-hidden="true" />
        <span className="label-rule" />
        THE HANDEDNESS BIT
      </div>
      <div className="section-heading">
        <h2>
          One sign
          <br />
          for the <em>whole vacuum.</em>
        </h2>
        <p className="section-lead">
          W_χ is the only parity-odd sector, and when it condenses it selects a
          sign. GUM’s most distinctive structural claim, cross-lock C-EW1, is
          that this one sign fixes observables the Standard Model treats as
          independent: the chirality of the charged weak current, the
          orientation of the family ladder and the sign of δ_CP; through closure
          K-8 the sign of cosmic birefringence; and through Proposition 31 the
          sign of a mirror force.
        </p>
      </div>
      <SignChain />
      <details
        className="unpack-panel"
        open={depth !== 'story' ? true : undefined}
      >
        <summary>
          Open the mirror test of short-range forces <span>+</span>
        </summary>
        <MirrorForce />
      </details>
      <details
        className="unpack-panel"
        open={depth === 'math' ? true : undefined}
      >
        <summary>
          Open the birefringence endpoint property <span>+</span>
        </summary>
        <BirefringenceEndpoint />
      </details>
      <p className="source-note">
        Pre-registration (Sec. X E): if DUNE or Hyper-K find δ_CP with the sign
        opposite to ε₄s at ≥ 3σ, C-EW1 is broken; if Euclid or DESI confirm w_a
        &lt; 0 with w₀ &gt; −1 at ≥ 3σ, the relaxation family is retired; if the
        Simons Observatory or LiteBIRD confirm β_cb ≠ 0, the core’s achirality
        is retired and K-8 must execute; if birefringence maps show
        sign-flipping patches, the single-domain prediction is retired. A chain
        that cannot be broken by a scheduled measurement is not a chain.
      </p>
    </section>
  );
}
