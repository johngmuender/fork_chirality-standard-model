'use client';
import { useRef, useState } from 'react';
import { CheckCircle2, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  AmbientExhibit,
  DemoControl,
  useGentleDemo,
} from '@/components/exhibit-motion';
import { Term } from '@/components/glossary';
import {
  anomalyChannels,
  chargeTiling,
  confinementStrata,
  deltaRhoTop,
  familyContent,
  frustrationIntegrals,
  holonomyPhases,
  landingOrTest,
  leptonLadder,
  leptonLogarithms,
  neutralSector,
  reggeSlope,
  tilingContributions,
  tilingSums,
  topYukawa,
  weakCoupling,
} from '@/lib/gum-sectors';

export function FrustrationLadder() {
  const [A, setA] = useState(frustrationIntegrals.A);
  const [B, setB] = useState(frustrationIntegrals.B);
  const ladder = leptonLadder(A, B);
  const bars = [
    {
      label: 'ln(m_τ/m_μ) = ½A',
      theory: ladder.tauMu,
      data: leptonLogarithms.tauMu,
      width: frustrationIntegrals.dA / 2,
    },
    {
      label: 'ln(m_μ/m_e) = ½(A+B)',
      theory: ladder.muE,
      data: leptonLogarithms.muE,
      width: (frustrationIntegrals.dA + frustrationIntegrals.dB) / 2,
    },
    {
      label: 'shape (A+B)/A',
      theory: ladder.shape,
      data: leptonLogarithms.shape,
      width: 0.28,
    },
  ];
  const scale = 560 / 6.5;
  return (
    <div className="ladder-exhibit" id="families">
      <div className="lab-heading">
        <span className="eyebrow">
          SECTION VIII A · THREE FAMILIES AS FRUSTRATION CLASSES
        </span>
        <h3>
          Two integrals,
          <br />
          three charged leptons, no fourth.
        </h3>
        <p>
          A knot’s frame-matching against the helix is classified by a
          relative-twist integer 𝗉. Class-𝗉 frustration partially defeats
          locking over the halo, so ln(m_𝗉/m_𝗉₊₁) = ½(A + B𝗉) with A the
          per-belt integral and B the pairwise coupling. The 𝗉 = 3 state, near
          100 eV, crosses closure failure for the entire admission window: the
          tower terminates at three because its next rung cannot close.
        </p>
      </div>
      <AmbientExhibit className="foundation-instrument">
        <svg
          viewBox="0 0 600 190"
          aria-label={`Lepton mass logarithms: theory ${ladder.tauMu.toFixed(2)} and ${ladder.muE.toFixed(2)} against data ${leptonLogarithms.tauMu.toFixed(3)} and ${leptonLogarithms.muE.toFixed(3)}.`}
        >
          <title>
            Frustration ladder against the measured lepton mass ratios.
          </title>
          {bars.map((bar, i) => (
            <g key={bar.label} transform={`translate(0,${30 + i * 52})`}>
              <text x="8" y="14" className="balance-label" fontSize="14">
                {bar.label}
              </text>
              <rect
                x="30"
                y="22"
                width={Math.min(560, bar.theory * scale)}
                height="10"
                fill="#8bbcff"
                opacity="0.8"
              />
              <rect
                x={30 + Math.max(0, (bar.theory - bar.width) * scale)}
                y="20"
                width={Math.min(560, 2 * bar.width * scale)}
                height="14"
                fill="#8bbcff"
                opacity="0.18"
              />
              <line
                x1={30 + bar.data * scale}
                y1="16"
                x2={30 + bar.data * scale}
                y2="38"
                stroke="#f4d592"
                strokeWidth="2.5"
              />
              <text x={30 + bar.data * scale + 6} y="38" className="plot-tick">
                data {bar.data.toFixed(3)}
              </text>
            </g>
          ))}
        </svg>
        <div className="ladder-sliders">
          <div>
            <label id="integral-a-label" className="foundation-slider-label">
              Per-belt integral A{' '}
              <output aria-live="off">{A.toFixed(1)}</output>
            </label>
            <Slider
              min={4}
              max={7.5}
              step={0.1}
              value={[A]}
              onValueChange={(v) => setA(Array.isArray(v) ? v[0] : v)}
              aria-labelledby="integral-a-label"
            />
          </div>
          <div>
            <label id="integral-b-label" className="foundation-slider-label">
              Belt-coupling integral B{' '}
              <output aria-live="off">{B.toFixed(1)}</output>
            </label>
            <Slider
              min={4}
              max={7.5}
              step={0.1}
              value={[B]}
              onValueChange={(v) => setB(Array.isArray(v) ? v[0] : v)}
              aria-labelledby="integral-b-label"
            />
          </div>
        </div>
        <p className="instrument-answer" aria-live="polite">
          Next class at {ladder.nextClassMassEv.toFixed(0)} eV, which cannot
          close. With A = 5.6 ± 0.9 and B = 5.7 ± 1.2 [N] these are{' '}
          {landingOrTest(frustrationIntegrals.dA / 2, 0.001)}s, not tests: a
          two-integral mechanism reproduces the order-one coefficients within
          ±16% with no fitted parameters.{' '}
          <span>
            Definition 10 reports a landing as “consistent within ±δ_th”, never
            as a pull in σ. Stake S17 asks a chiral-nematic bench to show the
            same linear form with B ≠ 0 and a termination.
          </span>
        </p>
      </AmbientExhibit>
    </div>
  );
}

export function ElectroweakSkeleton({ depth }: { depth: string }) {
  const [theta, setTheta] = useState(0.55);
  const sector = neutralSector(theta);
  return (
    <div className="electroweak-exhibit" id="electroweak">
      <div className="lab-heading">
        <span className="eyebrow">
          PROPOSITION 19 · PROTECTED DIAGONALISATION
        </span>
        <h3>
          ρ = 1 identically,
          <br />
          because the photon is massless.
        </h3>
        <p>
          Under F-B1 no elementary massive species of spin 0 or 1 exists, so W±,
          Z and h are collective modes of the locking sector. In the neutral
          basis, objectivity forbids any mass term in the pure co-rotation slot,
          so the matrix has rank one: a zero eigenvalue for the photon, M_Z =
          M_T/cos θ_w, and M_W = M_T at this order. The co-rotation invariance
          that keeps the photon massless is the custodial invariance that fixes
          ρ = 1.
        </p>
      </div>
      <div className="foundation-instrument electroweak-instrument">
        <div className="matrix-display" aria-live="polite">
          <div className="matrix">
            <span>M_T² ×</span>
            <table aria-label="Neutral mass matrix">
              <tbody>
                <tr>
                  <td>{sector.matrix[0][0].toFixed(3)}</td>
                  <td>{sector.matrix[0][1].toFixed(2)}</td>
                </tr>
                <tr>
                  <td>{sector.matrix[1][0].toFixed(2)}</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pitch-readouts">
            <span>
              Determinant<strong>{sector.determinant.toFixed(6)}</strong>
            </span>
            <span>
              sin²θ_w = ϑ²/(1+ϑ²)<strong>{sector.sin2ThetaW.toFixed(3)}</strong>
            </span>
            <span>
              M_Z/M_W = √(1+ϑ²)
              <strong>{sector.mzOverMw.toFixed(3)} vs 1.134</strong>
            </span>
            <span>
              ρ = M_W²/(M_Z²cos²θ_w)<strong>{sector.rho}</strong>
            </span>
          </div>
        </div>
        <label id="theta-label" className="foundation-slider-label">
          Mixing modulus ϑ = tan θ_w{' '}
          <output aria-live="off">{theta.toFixed(2)}</output>
        </label>
        <Slider
          min={0.3}
          max={0.8}
          step={0.01}
          value={[theta]}
          onValueChange={(v) => setTheta(Array.isArray(v) ? v[0] : v)}
          aria-labelledby="theta-label"
        />
        <p className="instrument-answer">
          ϑ ≈ 0.55 is a constitutive modulus [IM] in the same class as α;
          whether the cone-locking flow has an attractor for it is closure
          K-EW-III.{' '}
          <span>
            The experimental statement “ρ₀ = 1 to 10⁻³” is defined after
            subtracting the Standard Model’s own loop correction Δρ_top ={' '}
            {(deltaRhoTop() * 100).toFixed(2)}%, which GUM’s band-edge composite
            top must reproduce (closure K-5, Appendix G). g ={' '}
            {weakCoupling().toFixed(3)} is electromagnetic-sized; weakness at
            low energy is the 1/M_W² of the matching.
          </span>
        </p>
      </div>
      {depth !== 'story' && (
        <p className="source-note">
          Theorem 16: if m_f = M₀(lock) e^(−I_f) with I_f lock-independent, the
          amplitude mode h couples to every knot with g_hff = m_f/v_eff and no
          fundamental Yukawa couplings; an additive law would give inverse-mass
          couplings, which the LHC excludes. The last admitted class sits
          nearest the band edge, forcing y_t = {topYukawa().toFixed(3)} into the
          top of the last spacing. The strong sector gives the Regge slope α′ ={' '}
          {reggeSlope().toFixed(2)} GeV⁻² against the observed 0.88, a
          consistency and not a claim.
        </p>
      )}
    </div>
  );
}

export function AnomalyTiling() {
  const [included, setIncluded] = useState(familyContent.map(() => true));
  const [channel, setChannel] = useState(3);
  const host = useRef<HTMLDivElement>(null);
  const demo = useGentleDemo(
    host,
    () => setChannel((c) => (c + 1) % anomalyChannels.length),
    11000,
  );
  const result = tilingSums(included);
  const values = familyContent.map((_, i) => tilingContributions(i)[channel]);
  const extent = Math.max(1, ...values.map(Math.abs));
  return (
    <div
      className="anomaly-exhibit"
      id="anomaly-sums"
      ref={host}
      {...demo.handlers}
    >
      <DemoControl {...demo} />
      <div className="lab-heading">
        <span className="eyebrow">
          PROPOSITION 20 · THE SIX SUMS AS WINDING ARITHMETIC
        </span>
        <h3>
          Anomalies
          <br />
          as tiling.
        </h3>
        <p>
          With hypercharge decomposed as the network third plus the co-rotation
          weight T₃, and the heliknoton at Y = 0, one family satisfies all six
          consistency sums on the same thirds that generate confinement. The
          electric-charge tiling 3(⅔) + 3(−⅓) + (−1) + 0 = {chargeTiling()}{' '}
          closes: a unit cell of the double-twist lattice carries no net
          topological flux. Leave a multiplet out to see a sum fail.
        </p>
      </div>
      <div className="anomaly-layout">
        <div className="multiplet-switches">
          <span className="eyebrow">ONE FAMILY · ALL-LEFT-HANDED · q = 6Y</span>
          {familyContent.map((m, i) => (
            <label
              key={m.id}
              htmlFor={'tile-' + m.id}
              className={included[i] ? 'included' : ''}
            >
              <Switch
                id={'tile-' + m.id}
                checked={included[i]}
                onCheckedChange={(checked) =>
                  setIncluded((prev) =>
                    prev.map((x, j) => (j === i ? checked : x)),
                  )
                }
              />
              <strong>{m.label}</strong>
              <span>
                {m.role}
                <small>{m.rep}</small>
              </span>
            </label>
          ))}
          <Button
            variant="outline"
            onClick={() => setIncluded(familyContent.map(() => true))}
          >
            <RotateCcw size={14} /> Restore the full family
          </Button>
        </div>
        <div className="anomaly-instrument">
          <ToggleGroup
            className="lab-tabs"
            value={[String(channel)]}
            onValueChange={(v) => v[0] && setChannel(Number(v[0]))}
            aria-label="Consistency sum"
          >
            {anomalyChannels.map((name, i) => (
              <ToggleGroupItem key={name} value={String(i)}>
                {name}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <AmbientExhibit className="balance-motion">
            <svg
              viewBox="0 0 580 300"
              aria-label={
                anomalyChannels[channel] +
                ' contributions; sum ' +
                result.totals[channel]
              }
            >
              <title>Signed contributions of the included multiplets.</title>
              <line
                x1="285"
                x2="285"
                y1="25"
                y2="285"
                className="balance-axis"
              />
              <text x="105" y="18" className="balance-sign">
                NEGATIVE
              </text>
              <text x="370" y="18" className="balance-sign">
                POSITIVE
              </text>
              {familyContent.map((m, i) => {
                const value = included[i] ? values[i] : 0;
                const width = (Math.abs(value) / extent) * 175;
                return (
                  <g key={m.id}>
                    <text x="12" y={53 + i * 44} className="balance-label">
                      {m.id === 'nu' ? 'ν' : m.label}
                    </text>
                    <rect
                      x={value < 0 ? 285 - width : 285}
                      y={33 + i * 44}
                      width={width}
                      height="28"
                      rx="3"
                      className={value < 0 ? 'negative' : 'positive'}
                    />
                    <text x="535" y={53 + i * 44} className="balance-value">
                      {value > 0 ? '+' : ''}
                      {value}
                    </text>
                  </g>
                );
              })}
            </svg>
          </AmbientExhibit>
          <div
            className={
              'anomaly-total ' +
              (channel === 5
                ? result.totals[5] % 2 === 0
                  ? 'balanced'
                  : 'unbalanced'
                : result.totals[channel] === 0
                  ? 'balanced'
                  : 'unbalanced')
            }
            aria-live={demo.automatic ? 'off' : 'polite'}
          >
            <span>
              {anomalyChannels[channel]} {channel === 5 ? 'DOUBLETS' : 'SUM'}
            </span>
            <strong>
              {result.totals[channel] > 0 && channel !== 5 ? '+' : ''}
              {result.totals[channel]}
            </strong>
            <span>
              {channel === 5
                ? result.totals[5] % 2 === 0
                  ? 'EVEN'
                  : 'ODD'
                : result.totals[channel] === 0
                  ? 'CANCELS'
                  : 'DOES NOT CANCEL'}
            </span>
          </div>
          <div className="anomaly-summary">
            {result.totals.map((n, i) => (
              <span
                key={anomalyChannels[i]}
                className={
                  (i === 5 ? n % 2 === 0 : n === 0) ? 'balanced' : 'unbalanced'
                }
              >
                {anomalyChannels[i]}
                <strong>{n}</strong>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        className={
          'anomaly-verdict ' + (result.passes ? 'balanced' : 'unbalanced')
        }
        aria-live={demo.automatic ? 'off' : 'polite'}
      >
        {result.passes ? (
          <CheckCircle2 size={22} />
        ) : (
          <span className="anomaly-cross">×</span>
        )}
        <p>
          {!included.some(Boolean)
            ? 'An empty cell cancels trivially, but contains no matter.'
            : result.passes
              ? 'The six sums close with no per-condition tuning. That these sums are the necessary consistency conditions of the texture theory is closure K-EW-II; the sums themselves are the Standard Model’s, hence non-discriminating.'
              : 'This content fails a consistency sum. The sums close on the same thirds that generate confinement and on the down-type sign the quark-spacing reconstruction forces.'}
        </p>
        <span>{result.doublets} weak doublets</span>
      </div>
    </div>
  );
}

export function HolonomyCounter() {
  const [families, setFamilies] = useState(3);
  return (
    <div className="holonomy-exhibit">
      <div className="lab-heading">
        <span className="eyebrow">PROPOSITION 21 · CP BY HOLONOMY</span>
        <h3>(N − 1)(N − 2)/2 irreducible phases.</h3>
        <p>
          Transport holonomies around double-twist cells form an N × N unitary
          overlap between frustration eigenknots and vertex eigenmodes. Modulo
          rephasings, Kobayashi–Maskawa counting leaves zero phases for two
          families and one for three. GUM’s content is that N = 3 is an output
          of the termination argument and that the holonomies are geometric, so
          CP violation is a property of the vacuum’s web with its sign welded to
          the handedness chain.
        </p>
      </div>
      <ToggleGroup
        className="lab-tabs"
        value={[String(families)]}
        onValueChange={(v) => v[0] && setFamilies(Number(v[0]))}
        aria-label="Number of families"
      >
        {[2, 3, 4].map((n) => (
          <ToggleGroupItem value={String(n)} key={n}>
            N = {n}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="mass-equation" aria-live="polite">
        <span>Irreducible phases</span>
        <strong>{holonomyPhases(families)}</strong>
        <small>
          {families === 3
            ? 'One phase. Quark knots are network-tethered, so CKM is small; lepton knots float against the fog and the heliknoton basis is set by the helix, so PMNS is large.'
            : families === 2
              ? 'No CP-violating phase survives with two families.'
              : 'A fourth family is excluded by the termination argument of Sec. VIII A.'}
        </small>
      </div>
    </div>
  );
}

export function SectorsChapter({ depth }: { depth: string }) {
  return (
    <section className="section sectors-section" id="sectors">
      <div className="section-number">
        <span aria-hidden="true" />
        <span className="label-rule" />
        THE STANDARD-MODEL SECTORS AT THEIR LEDGER GRADES
      </div>
      <div className="section-heading">
        <h2>
          Reproduced, graded,
          <br />
          and mostly <em>non-discriminating.</em>
        </h2>
        <p className="section-lead">
          The flavour, electroweak, strong and anomaly sectors reproduce the
          Standard Model’s postulate layer. The audit attached to each says the
          same thing: these are consistency conditions a material must satisfy,
          and GUM satisfies them. There are no gluon quanta, no colour factors,
          no running of α_s and no partonic phenomenology in GUM; every
          short-distance fact is imported and printed as such.
        </p>
      </div>
      <FrustrationLadder />
      <details
        className="unpack-panel"
        open={depth !== 'story' ? true : undefined}
      >
        <summary>
          Open the electroweak skeleton <span>+</span>
        </summary>
        <ElectroweakSkeleton depth={depth} />
      </details>
      <details
        className="unpack-panel"
        open={depth !== 'story' ? true : undefined}
      >
        <summary>
          Balance the six sums yourself <span>+</span>
        </summary>
        <AnomalyTiling />
      </details>
      <div className="strata-grid">
        {confinementStrata.map((s) => (
          <article key={s.name}>
            <span className="eyebrow">{s.name.toUpperCase()}</span>
            <strong>{s.tension}</strong>
            <p>{s.fate}</p>
          </article>
        ))}
      </div>
      <p className="source-note">
        A winding charge is confined iff its mediator stratum is gapped:
        electric charge is unconfined because the photon is massless, and colour
        is confined because its stratum is gapped. All six quarks are censored
        and confined, all leptons free. The top decaying before hadronisation is
        a fact the universal-confinement theorem must reproduce (closure K-15).
        The <Term id="landing">landing</Term> convention governs every agreement
        in this chapter.
      </p>
      <HolonomyCounter />
    </section>
  );
}
