'use client';
import { useMemo, useRef, useState } from 'react';
import { line, scaleLinear } from 'd3';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  AmbientExhibit,
  DemoControl,
  useGentleDemo,
} from '@/components/exhibit-motion';
import { Term } from '@/components/glossary';
import { GumFilm } from '@/components/gum-film';
import {
  actionSectors,
  branches,
  coneSpeed,
  doubletDispersion,
  gyrationBound,
  matterLightConeDifference,
  postulates,
  referenceModuli,
  relativeRotationSpeed,
  transverseBranches,
  type Moduli,
} from '@/lib/gum-material';
import { frequencyFromEnergy } from '@/lib/gum-constants';
import { source } from '@/lib/gum-site';

const format = (n: number, digits = 3) => n.toFixed(digits);
const sci = (n: number) => {
  if (n === 0) return '0';
  const exponent = Math.floor(Math.log10(Math.abs(n)));
  return (n / 10 ** exponent).toFixed(1) + '×10' + superscript(exponent);
};
const superscript = (n: number) =>
  String(n)
    .replace(/-/g, '⁻')
    .replace(/\d/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(d)]);

export function SpectrumExhibit({ depth }: { depth: string }) {
  const [mismatch, setMismatch] = useState(100);
  const host = useRef<HTMLDivElement>(null);
  const demo = useGentleDemo(
    host,
    () => setMismatch((m) => (m >= 130 ? 70 : m + 15)),
    9000,
  );
  const moduli: Moduli = useMemo(
    () => ({ ...referenceModuli, mu: (referenceModuli.mu * mismatch) / 100 }),
    [mismatch],
  );
  const c = coneSpeed(moduli);
  const cPsi = relativeRotationSpeed(moduli);
  const kMax = 4;
  const ks = Array.from({ length: 81 }, (_, i) => (i / 80) * kMax);
  const x = scaleLinear().domain([0, kMax]).range([50, 560]);
  const y = scaleLinear().domain([0, 7]).range([300, 20]);
  const path = line<number>()
    .x((k) => x(k))
    .y((k) => y(k));
  const doublet = line<number>()
    .x((k) => x(k))
    .y((k) => y(transverseBranches(k, moduli)[0]));
  const relative = line<number>()
    .x((k) => x(k))
    .y((k) => y(transverseBranches(k, moduli)[1]));
  const cone = line<number>()
    .x((k) => x(k))
    .y((k) => y(c * k));
  const deviation = doubletDispersion(3, moduli);
  return (
    <div
      className="spectrum-exhibit"
      id="spectrum"
      ref={host}
      {...demo.handlers}
    >
      <div className="lab-heading">
        <span className="eyebrow">
          PROPOSITION 1 · THE EXACT LINEAR SPECTRUM
        </span>
        <h3>
          One constitutive relation
          <br />
          makes light exactly lightlike.
        </h3>
        <p>
          Six real fields organise into four branches. The transverse pair B2
          and B3 come from one determinant. Move the shear modulus away from the{' '}
          <Term id="cone-condition">cone condition</Term> and the doublet
          acquires dispersion at order k⁴; restore it and ω = ck holds at every
          wavelength, with the relative-rotation branch strictly above.
        </p>
      </div>
      <DemoControl {...demo} />
      <div className="spectrum-layout">
        <AmbientExhibit className="foundation-instrument spectrum-plot">
          <svg
            viewBox="0 0 600 340"
            aria-label={`Transverse dispersion with μ/ρ₀ at ${mismatch}% of γ_eff/2J; the doublet deviates from the cone by ${(deviation * 100).toFixed(2)}% at k = 3.`}
          >
            <title>
              Dispersion of the locked doublet and the relative-rotation branch.
            </title>
            <line x1="50" y1="300" x2="560" y2="300" className="plot-axis" />
            <line x1="50" y1="20" x2="50" y2="300" className="plot-axis" />
            {[1, 2, 3, 4].map((k) => (
              <text key={k} x={x(k)} y="318" className="plot-tick">
                k = {k}
              </text>
            ))}
            {[2, 4, 6].map((w) => (
              <text key={w} x="24" y={y(w) + 4} className="plot-tick">
                {w}
              </text>
            ))}
            <path d={cone(ks) ?? ''} className="plot-cone" />
            <path d={relative(ks) ?? ''} className="plot-b3" />
            <path d={doublet(ks) ?? ''} className="plot-b2" />
            <path d={path([]) ?? ''} />
            <text x={x(3.4)} y={y(c * 3.4) - 10} className="plot-label">
              light cone ω = ck
            </text>
            <text
              x={x(1.6)}
              y={y(transverseBranches(1.6, moduli)[1]) - 12}
              className="plot-label plot-label-b3"
            >
              B3: ω² = ω₀² + c_ψ²k²
            </text>
          </svg>
          <label id="mismatch-label" className="foundation-slider-label">
            Shear modulus μ/ρ₀ relative to γ_eff/2J{' '}
            <output aria-live="off">{mismatch}%</output>
          </label>
          <Slider
            min={60}
            max={140}
            step={1}
            value={[mismatch]}
            onValueChange={(v) => setMismatch(Array.isArray(v) ? v[0] : v)}
            aria-labelledby="mismatch-label"
          />
          <p
            className="instrument-answer"
            aria-live={demo.automatic ? 'off' : 'polite'}
          >
            {mismatch === 100
              ? 'Cone condition satisfied: the doublet is exactly ω = ck and ψ ≡ 0 at every k.'
              : `Doublet phase velocity differs from c by ${(deviation * 100).toFixed(2)}% at k = 3: no linear branch exists for all k.`}{' '}
            <span>
              c_ψ/c = {format(cPsi / c)} · ω₀ ={' '}
              {format(moduli.mTilde / Math.sqrt(moduli.J), 2)} in units with c =
              1.
            </span>
          </p>
        </AmbientExhibit>
        <div className="branch-list">
          {branches.map((b) => (
            <article key={b.id}>
              <span className="eyebrow">{b.id}</span>
              <h4>{b.name}</h4>
              <code>{b.dispersion}</code>
              <p>{b.role}</p>
            </article>
          ))}
        </div>
      </div>
      <details
        className="inline-depth"
        open={depth === 'math' ? true : undefined}
      >
        <summary>
          Why the factorisation is exact <span>+</span>
        </summary>
        <p>
          Substitute ω² = c²k² + Δ with c² = μ/ρ₀ = γ_eff/2J. The first factor
          becomes ρ₀Δ − ¼m̃²k² and the second JΔ − m̃², so the determinant is
          Δ(ρ₀JΔ − ρ₀m̃² − ¼Jm̃²k²). The root Δ = 0 has eigenvector φ = −½ku, that
          is ψ = 0, at every locking strength; the other root is Eq. (13).
          Conversely, any mismatch leaves a k-dependent remainder at order k⁴.{' '}
          <a
            href={source('gum/paper/gum-paper.md')}
            target="_blank"
            rel="noreferrer"
          >
            Draft, Sec. II C ↗
          </a>
        </p>
      </details>
    </div>
  );
}

export function ConeDifference() {
  const [gap, setGap] = useState('weak');
  const [logRadius, setLogRadius] = useState(-27 + Math.log10(1.5));
  const energy = gap === 'weak' ? 80.4e9 : 1e6;
  const omega = frequencyFromEnergy(energy);
  const radius = 10 ** logRadius;
  const delta = matterLightConeDifference(radius, omega);
  const bound = gyrationBound(omega, 1e-20);
  return (
    <div className="cone-difference">
      <div className="lab-heading">
        <span className="eyebrow">THE MATTER–LIGHT CONE DIFFERENCE</span>
        <h3>Knots inherit c_ψ, so matter can outrun light by (ℓ_gω₀/c)²/8.</h3>
        <p>
          Vacuum-Cherenkov and photon-decay constraints bound this difference at
          the 10⁻¹⁵–10⁻²⁰ level. The gap that sets the matter cone is the
          vacuum’s, identified with the weak triplet, and the result constrains
          the grains’ radius of gyration. The first printing estimated 10⁻³⁶ and
          called it harmless; erratum E2 corrects it.
        </p>
      </div>
      <div className="cone-controls">
        <ToggleGroup
          className="lab-tabs"
          value={[gap]}
          onValueChange={(v) => v[0] && setGap(v[0])}
          aria-label="Gap energy"
        >
          <ToggleGroupItem value="weak">
            ħω₀ = 80.4 GeV (vacuum triplet)
          </ToggleGroupItem>
          <ToggleGroupItem value="mev">
            ħω₀ = 1 MeV (knot scale)
          </ToggleGroupItem>
        </ToggleGroup>
        <label id="gyration-label" className="foundation-slider-label">
          Grain radius of gyration ℓ_g{' '}
          <output aria-live="off">{sci(radius)} m</output>
        </label>
        <Slider
          min={-30}
          max={-26}
          step={0.05}
          value={[logRadius]}
          onValueChange={(v) => setLogRadius(Array.isArray(v) ? v[0] : v)}
          aria-labelledby="gyration-label"
        />
        <div className="mass-equation" aria-live="polite">
          <span>(c_ψ − c)/c = (ℓ_gω₀/c)²/8</span>
          <strong>
            = {sci(delta)} ·{' '}
            {delta > 1e-20 ? 'above the 10⁻²⁰ bound' : 'within the 10⁻²⁰ bound'}
          </strong>
          <small>
            Requiring ≤ 10⁻²⁰ at this gap gives ℓ_g ≲ {sci(bound)} m.
          </small>
        </div>
      </div>
    </div>
  );
}

export function MaterialLab({ depth }: { depth: string }) {
  const [sector, setSector] = useState('W2');
  const host = useRef<HTMLDivElement>(null);
  const demo = useGentleDemo(
    host,
    () =>
      setSector(
        (s) =>
          actionSectors[
            (actionSectors.findIndex((a) => a.id === s) + 1) %
              actionSectors.length
          ].id,
      ),
    14000,
  );
  return (
    <section className="section material-section" id="material">
      <div className="section-number">
        <span aria-hidden="true" />
        <span className="label-rule" />
        THE MATERIAL IN ITS CONTINUUM DESCRIPTION
      </div>
      <div className="section-heading">
        <h2>
          Grains with positions
          <br />
          and <em>orientations.</em>
        </h2>
        <p className="section-lead">
          A point of the continuum description carries a displacement u and a
          micro-rotation Q̃ in SU(2), the double cover of the grain orientation.
          GUM’s order parameter is the{' '}
          <Term id="relative-texture">relative texture</Term> P̃ = R̃[u]†Q̃: how
          the grains are turned relative to the lattice they sit in. The
          potential sector may depend on orientation only through P̃. That is{' '}
          <Term id="objectivity">objectivity</Term>, and it plays the role of a
          gauge principle.
        </p>
      </div>
      <div className="plain-result">
        <p>
          The action is S = ∫ dt d³x (𝒦 − W), with a kinetic sector 𝒦 = ½ρ₀u̇² +
          J Tr[(Q̃⁻¹∂tQ̃)†(Q̃⁻¹∂tQ̃)] and four potential sectors. Each has a
          structural job.
        </p>
      </div>
      <div ref={host} {...demo.handlers} id="action">
        <DemoControl {...demo} />
        <Tabs
          value={sector}
          onValueChange={(value) => setSector(String(value))}
          className="step-tabs"
        >
          <TabsList className="step-list">
            {actionSectors.map((s, i) => (
              <TabsTrigger value={s.id} key={s.id}>
                <span>0{i + 1}</span>
                {s.symbol}
              </TabsTrigger>
            ))}
          </TabsList>
          {actionSectors.map((s) => (
            <TabsContent value={s.id} key={s.id} className="step-panel">
              <div>
                <span className="eyebrow">{s.flag.toUpperCase()}</span>
                <h3>{s.name}</h3>
                <p>{s.role}</p>
              </div>
              <div className="formula-card">
                <div className="formula formula-small">{s.terms}</div>
                <span>{s.symbol} · ONE OF FOUR POTENTIAL SECTORS</span>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <details
        className="unpack-panel"
        open={depth !== 'story' ? true : undefined}
      >
        <summary>
          Open the postulates and the import list <span>+</span>
        </summary>
        <div className="postulate-grid">
          {postulates.map(([id, text]) => (
            <div key={id}>
              <span className="eyebrow">{id}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <p className="source-note">
          Imports: six moduli (λ, μ, μ_c, α, β, γ) and two inertias (ρ₀, J);
          chiral couplings χ₁,₂,₃; topological constants (κ_S, Λ, m̃_V, c₂); the
          structural scale ℓ_s; the cone condition; c_L bounded below by Bell
          timing; α and the electroweak mixing modulus as constitutive ratios.
          Theorem 1 makes the doublet gapless to all orders in the potential
          sector, and the paper says that under Definition 9 this does not
          explain photon masslessness: F10′ was adopted to kill the mass term.
        </p>
      </details>
      <SpectrumExhibit depth={depth} />
      <details
        className="inline-depth"
        open={depth === 'math' ? true : undefined}
      >
        <summary>
          The matter–light cone and the grains’ inertia <span>+</span>
        </summary>
        <ConeDifference />
      </details>
      <GumFilm />
    </section>
  );
}
