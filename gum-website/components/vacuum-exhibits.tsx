'use client';
import { useRef, useState } from 'react';
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
  advectedLineFrequency,
  condensateTilt,
  edgeWavelength,
  massSum,
  neutrinoWindow,
  pitchFromMass,
  pitchWindow,
  transparencyBound,
  troughSpectrum,
} from '@/lib/gum-vacuum';
import { cmbDipoleSpeed, lightSpeed } from '@/lib/gum-constants';

const micron = (m: number, digits = 2) => (m * 1e6).toFixed(digits) + ' μm';

export function PitchExhibit() {
  const [mass, setMass] = useState(50.5);
  const m3 = mass / 1000;
  const pitch = pitchFromMass(m3);
  const [low, high] = pitchWindow();
  const sum = massSum(0.004);
  return (
    <div className="pitch-exhibit" id="pitch">
      <div className="lab-heading">
        <span className="eyebrow">
          PROPOSITION 6 · THE NEUTRINO IS THE PITCH QUANTUM
        </span>
        <h3>
          One length fixes the vacuum’s period
          <br />
          and the lightest matter.
        </h3>
        <p>
          The chiral sector condenses into a <Term id="blue-fog">blue fog</Term>
          : locally helical, globally isotropic. Its pitch is the neutrino’s
          Compton length, p = ζ_ν hc/m₃c². With normal ordering, the oscillation
          floor and the S1 upper edge place the pitch between {micron(low, 1)}{' '}
          and {micron(high, 1)} for ζ_ν = 1.
        </p>
      </div>
      <div className="foundation-instrument pitch-instrument">
        <label id="pitch-mass-label" className="foundation-slider-label">
          Heaviest neutrino mass m₃{' '}
          <output aria-live="off">{m3.toFixed(4)} eV</output>
        </label>
        <Slider
          min={neutrinoWindow.floor * 1000}
          max={neutrinoWindow.ceiling * 1000}
          step={0.1}
          value={[mass]}
          onValueChange={(v) => setMass(Array.isArray(v) ? v[0] : v)}
          aria-labelledby="pitch-mass-label"
        />
        <div className="pitch-readouts" aria-live="polite">
          <span>
            Pitch p<strong>{micron(pitch)}</strong>
          </span>
          <span>
            Photonic edge c/p
            <strong>{(lightSpeed / pitch / 1e12).toFixed(2)} THz</strong>
          </span>
          <span>
            Advected line at v_M/p
            <strong>
              {(advectedLineFrequency(cmbDipoleSpeed, pitch) / 1e9).toFixed(1)}{' '}
              GHz
            </strong>
          </span>
          <span>
            Σm_ν at m₁ = 4 meV<strong>{sum.sum.toFixed(3)} eV</strong>
          </span>
        </div>
        <p className="instrument-answer">
          Margin 𝔪 = 1.9 ± 0.4 gives a condensate tilt sin θ_c ={' '}
          {condensateTilt(1.9).toFixed(2)}: the double-twist network beats the
          single helix.{' '}
          <span>
            The DESI DR2 bound Σm_ν &lt; 0.064 eV leaves m₃ ≤ 0.0505 eV, the
            lowest sliver of the window; the paper prints that trap and its one
            door, Proposition 27.
          </span>
        </p>
      </div>
    </div>
  );
}

export function TroughExhibit({ depth }: { depth: string }) {
  const [redshift, setRedshift] = useState(0.12);
  const [logDn, setLogDn] = useState(Math.log10(6.2e-17));
  const [direction, setDirection] = useState('dipole');
  const host = useRef<HTMLDivElement>(null);
  const demo = useGentleDemo(
    host,
    () => setRedshift((z) => (z >= 0.4 ? 0.05 : Number((z + 0.07).toFixed(2)))),
    10000,
  );
  const pitch = 24.6e-6;
  const dn = 10 ** logDn;
  const spectrum = troughSpectrum(redshift, pitch, dn);
  const cosAngle = direction === 'dipole' ? 1 : direction === 'anti' ? -1 : 0;
  const edge = edgeWavelength(pitch, cmbDipoleSpeed, cosAngle);
  const x = scaleLinear()
    .domain([spectrum[0].lambda * 1e6, spectrum.at(-1)!.lambda * 1e6])
    .range([60, 560]);
  const y = scaleLinear().domain([0.86, 1.02]).range([200, 20]);
  const intensity = line<(typeof spectrum)[number]>()
    .x((d) => x(d.lambda * 1e6))
    .y((d) => y(d.intensity));
  const polarisation = line<(typeof spectrum)[number]>()
    .x((d) => x(d.lambda * 1e6))
    .y((d) => y(1 - d.polarization));
  const deepest = spectrum.reduce(
    (best, d) => (d.reflectance > best.reflectance ? d : best),
    spectrum[0],
  );
  const bound = transparencyBound(pitch);
  return (
    <div className="trough-exhibit" id="trough" ref={host} {...demo.handlers}>
      <div className="lab-heading">
        <span className="eyebrow">THEOREM 7 · COSMOLOGICAL BRAGG PASSAGE</span>
        <h3>
          A trough with a fixed blue edge,
          <br />
          not a line.
        </h3>
        <p>
          A helical medium reflects the co-handed circular polarisation inside
          its stop band. A photon crossing the universe is redshifted through
          that band exactly once, at the resonance redshift 1 + z_r = λ_obs/n̄p.
          The reflectance is Landau–Zener: R = 1 − exp(−Π) with Π ∝
          (Δn/n̄)²c/pH(z_r). The transmitted spectrum of an unpolarised source
          therefore carries a trough from the fixed edge n̄p to n̄p(1 + z_s).
        </p>
      </div>
      <DemoControl {...demo} />
      <div className="trough-layout">
        <AmbientExhibit className="foundation-instrument">
          <svg
            viewBox="0 0 600 240"
            aria-label={`Transmitted intensity against observed wavelength for a source at redshift ${redshift}: edge at ${micron(edge)}, deepest unpolarised dip ${((1 - deepest.intensity) * 100).toFixed(1)}%.`}
          >
            <title>
              The far-infrared trough and its circular polarisation.
            </title>
            <line x1="60" y1="200" x2="560" y2="200" className="plot-axis" />
            <line x1="60" y1="20" x2="60" y2="200" className="plot-axis" />
            {[0.9, 0.95, 1].map((v) => (
              <text key={v} x="30" y={y(v) + 4} className="plot-tick">
                {v.toFixed(2)}
              </text>
            ))}
            {[24, 26, 28, 30, 32, 34]
              .filter(
                (w) =>
                  w >= spectrum[0].lambda * 1e6 &&
                  w <= spectrum.at(-1)!.lambda * 1e6,
              )
              .map((w) => (
                <text key={w} x={x(w)} y="218" className="plot-tick">
                  {w} μm
                </text>
              ))}
            <line
              x1={x(edge * 1e6)}
              y1="20"
              x2={x(edge * 1e6)}
              y2="200"
              stroke="#f4d592"
              strokeDasharray="3 5"
            />
            <text x={x(edge * 1e6) + 6} y="34" className="plot-label">
              edge {micron(edge)}
            </text>
            <path d={polarisation(spectrum) ?? ''} className="plot-b3" />
            <path d={intensity(spectrum) ?? ''} className="plot-b2" />
            <text x="64" y="16" className="plot-tick">
              intensity (blue) · 1 − circular polarisation (copper)
            </text>
          </svg>
          <label id="source-z-label" className="foundation-slider-label">
            Source redshift z_s{' '}
            <output aria-live="off">{redshift.toFixed(2)}</output>
          </label>
          <Slider
            min={0.02}
            max={0.5}
            step={0.01}
            value={[redshift]}
            onValueChange={(v) => setRedshift(Array.isArray(v) ? v[0] : v)}
            aria-labelledby="source-z-label"
          />
          <label id="dn-label" className="foundation-slider-label">
            Birefringence Δn/n̄{' '}
            <output aria-live="off">{dn.toExponential(1)}</output>
          </label>
          <Slider
            min={-18}
            max={-16}
            step={0.05}
            value={[logDn]}
            onValueChange={(v) => setLogDn(Array.isArray(v) ? v[0] : v)}
            aria-labelledby="dn-label"
          />
          <ToggleGroup
            className="lab-tabs"
            value={[direction]}
            onValueChange={(v) => v[0] && setDirection(v[0])}
            aria-label="Sky direction"
          >
            <ToggleGroupItem value="dipole">
              Toward the CMB dipole
            </ToggleGroupItem>
            <ToggleGroupItem value="perp">Perpendicular</ToggleGroupItem>
            <ToggleGroupItem value="anti">Anti-dipole</ToggleGroupItem>
          </ToggleGroup>
          <p
            className="instrument-answer"
            aria-live={demo.automatic ? 'off' : 'polite'}
          >
            Deepest co-handed reflectance{' '}
            {(deepest.reflectance * 100).toFixed(1)}% at z_r ≈{' '}
            {deepest.resonanceRedshift?.toFixed(3) ?? '—'}; unpolarised depth{' '}
            {((1 - deepest.intensity) * 100).toFixed(1)}%; polarisation degree{' '}
            {(deepest.polarization * 100).toFixed(1)}%. The red end sits at{' '}
            {micron(pitch * (1 + redshift))}.{' '}
            <span>
              The edge is the same for every source redshift; the trough length
              grows as 1 + z_s; the edge shifts by ±
              {micron(pitch * (cmbDipoleSpeed / lightSpeed), 3)} between the
              dipole and anti-dipole directions. No instrumental artefact
              satisfies all three at once.
            </span>
          </p>
        </AmbientExhibit>
        <div className="completion-notes">
          <article>
            <span className="eyebrow">
              COROLLARY 2 · THE CORRECTED TRANSPARENCY BOUND
            </span>
            <strong>Δn/n̄ ≲ {bound.toExponential(1)} for R ≤ 0.1 today</strong>
            <p>
              The previous draft’s 10⁻³¹ assumed a photon stays in resonance
              over a gigaparsec. Cosmic redshift forbids that: the resonant path
              is only (Δn/n̄)c/H, less than one pitch at the old bound. The
              coherent and incoherent regimes now agree within an order of
              magnitude; the matrix element is closure K-11.
            </p>
          </article>
          <article>
            <span className="eyebrow">STAKE S22 · THE ARCHIVES</span>
            <strong>
              JWST MIRI MRS reaches 28 μm; Spitzer IRS reaches 38 μm
            </strong>
            <p>
              Stack extragalactic spectra in the observed frame. A feature fixed
              in observed wavelength while every astrophysical feature redshifts
              is the fingerprint; the dipole shift needs resolving power near
              10³. The kill is a stacked non-detection at the depth implied by
              K-11.
            </p>
          </article>
        </div>
      </div>
      <details
        className="inline-depth"
        open={depth === 'math' ? true : undefined}
      >
        <summary>
          Why the CMB birefringence cannot be the helix <span>+</span>
        </summary>
        <p>
          For λ ≫ n̄p a cholesteric structure rotates linear polarisation at the
          de Vries rate, which scales as ν². The reported cosmic birefringence
          of 0.2–0.3° is flat from 23 to 353 GHz, and at the transparency bound
          the fog would rotate 300 GHz light by only 10⁻⁵ rad per Hubble length.
          The core therefore predicts β_cb = 0 at CMB frequencies and registers
          the extension that could change it as closure K-8.
        </p>
      </details>
    </div>
  );
}

export function VacuumChapter({ depth }: { depth: string }) {
  return (
    <section className="section vacuum-section" id="vacuum">
      <div className="section-number">
        <span aria-hidden="true" />
        <span className="label-rule" />
        THE STRUCTURED VACUUM
      </div>
      <div className="section-heading">
        <h2>
          The vacuum has a pitch,
          <br />
          and the pitch has a <em>fingerprint.</em>
        </h2>
        <p className="section-lead">
          A conical texture condenses when χ² exceeds γΔ², Dzyaloshinskii’s
          criterion. In the gapped relative sector it fails; on the ε-lifted
          soft manifold of the (6+0) vacuum it succeeds with a margin that is a
          pure number of couplings. The result is a helical vacuum whose one
          length, the pitch, is shared with the neutrino, the far-infrared edge,
          the mirror force and the advected line.
        </p>
      </div>
      <PitchExhibit />
      <details
        className="unpack-panel"
        open={depth !== 'story' ? true : undefined}
      >
        <summary>
          Open the far-infrared trough <span>+</span>
        </summary>
        <TroughExhibit depth={depth} />
      </details>
    </section>
  );
}
