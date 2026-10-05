'use client';
import { useEffect, useRef, useState } from 'react';
import { easeCubicInOut, select } from 'd3';
import { ArrowDown } from 'lucide-react';
import { AmbientExhibit, useMotion } from '@/components/exhibit-motion';
import { auditRows, grades, levels } from '@/lib/gum-ledger';

const stages = [
  {
    title: 'Begin with one material and four levels of description.',
    label: 'THE LEVELS',
    text: 'The material is the primitive. Its first coarse-grained bookkeeping is a chiral micropolar continuum; the bookkeeping of that continuum’s textures has the form of quantum mechanics; the bookkeeping of their response modes has the form of the Standard Model.',
    detail:
      'Level 0 asserts only existence, adjacency and succession. The passage from level 0 to level 1, including the parameter space (x, t) and a metric, is the deepest posed closure, K-0. The paper works at level 1 and prints that it does so.',
  },
  {
    title: 'Give every claim a grade.',
    label: 'THE LEDGER',
    text: 'Derived-form, derived-with-window, calibrated, imported, conjecture, posed, numerical and re-graded. A conjecture may not be built upon silently; an import is printed as a cost; a numerical value waits for the normalisation audit.',
    detail:
      'A material proposal is measured by the length of its import list as much as by its theorems. GUM imports six moduli, two inertias, three chiral couplings, four topological constants, the structural scale, the cone condition, c_L, α and the electroweak mixing modulus.',
  },
  {
    title: 'Ask two questions of each claim.',
    label: 'THE AUDIT',
    text: 'Was the postulate behind it adopted because the fact is known? Does a competing theory entail the same fact? Sixteen claims go through Definition 9. Three are circular by construction and are printed as such.',
    detail:
      'The gapless doublet, its exact dispersion and exact Maxwell theory for every c_L were each adopted to produce the fact they explain. GUM keeps them as consistency conditions any material must satisfy, with their inverse kills, and does not call them explanations.',
  },
  {
    title: 'Keep what the Standard Model and ΛCDM do not entail.',
    label: 'THE KILLABLE CORE',
    text: 'ρ = 1, e = g sin θ_w, the anomaly sums and the confinement dichotomy are reproduced, and they are non-discriminating. What remains discriminates: a finite-speed tower, a dense-storage cliff, a far-infrared trough, a relaxation family, a drifting neutrino mass, a physical clock, a handedness bit and a two-scale electron.',
    detail:
      'This revision moved one signature out of electromagnetism and into the tower, and added four that come from taking the material literally: the physical clock, the band edge, the drifting pitch and vacuum handedness at micrometre range.',
  },
];

const shortClaims = [
  'Doublet gapless',
  'Exact dispersion',
  'Maxwell ∀ c_L',
  'ρ = 1',
  'e = g sin θ_w',
  'Anomaly sums',
  'KM · confinement',
  'Finite-c_L tower',
  'Dense-storage cliff',
  'Far-IR trough',
  'Relaxation family',
  'ν-mass drift',
  'Physical clock',
  'Handedness bit',
  'Two-scale electron',
  'Band edge',
];

type Node = {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  opacity: number;
  survivor: boolean;
  wide: boolean;
};

export function ScrollAudit() {
  const { reduced, paused } = useMotion();
  const host = useRef<HTMLElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const [stage, setStage] = useState(0);
  const [excluded, setExcluded] = useState(0);
  const nonDiscriminating = auditRows.filter((r) => !r.discriminating).length;

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!host.current) return;
      const steps = [
        ...host.current.querySelectorAll<HTMLElement>('.collapse-story-step'),
      ];
      let current = 0;
      steps.forEach((el, i) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.55)
          current = i;
      });
      setStage(current);
      const last = steps[3].getBoundingClientRect();
      const amount = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight * 0.55 - last.top) /
            Math.max(250, last.height * 0.58),
        ),
      );
      setExcluded(
        current === 3
          ? Math.min(
              nonDiscriminating,
              Math.floor(amount * (nonDiscriminating + 1)),
            )
          : 0,
      );
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [nonDiscriminating]);

  useEffect(() => {
    if (!svg.current) return;
    const duration = reduced || paused ? 0 : 850;
    const root = select(svg.current);
    let data: Node[];
    if (stage === 0)
      data = levels.map((l, i) => ({
        id: 'level-' + l.level,
        label: 'Level ' + l.level,
        sub: l.name,
        x: 300,
        y: 80 + i * 128,
        opacity: 1,
        survivor: false,
        wide: true,
      }));
    else if (stage === 1)
      data = grades.map((g, i) => ({
        id: 'grade-' + g.id,
        label: g.id,
        sub: g.name,
        x: 160 + (i % 2) * 280,
        y: 88 + Math.floor(i / 2) * 118,
        opacity: 1,
        survivor: false,
        wide: true,
      }));
    else {
      const hidden = auditRows
        .map((r, i) => (r.discriminating ? -1 : i))
        .filter((i) => i >= 0)
        .slice(0, excluded);
      data = auditRows.map((r, i) => ({
        id: 'claim-' + i,
        label: shortClaims[i],
        sub:
          stage === 3 && hidden.includes(i)
            ? 'not discriminating'
            : stage === 3 && r.discriminating && excluded === nonDiscriminating
              ? 'discriminating'
              : r.grade,
        x: 92 + (i % 4) * 139,
        y: 86 + Math.floor(i / 4) * 128,
        opacity: hidden.includes(i) ? 0.12 : 1,
        survivor:
          stage === 3 && r.discriminating && excluded === nonDiscriminating,
        wide: false,
      }));
    }
    const joined = root
      .selectAll<SVGGElement, Node>('g.option')
      .data(data, (d) => d.id);
    joined
      .exit()
      .transition()
      .duration(duration * 0.65)
      .attr('opacity', 0)
      .attr('transform', 'translate(300,275) scale(.1)')
      .remove();
    const enter = joined
      .enter()
      .append('g')
      .attr('class', 'option')
      .attr('transform', 'translate(300,275) scale(.5)')
      .attr('opacity', 0);
    enter.append('rect').attr('rx', 9);
    enter
      .append('text')
      .attr('class', 'option-label')
      .attr('text-anchor', 'middle')
      .attr('dy', -3);
    enter
      .append('text')
      .attr('class', 'option-sub')
      .attr('text-anchor', 'middle')
      .attr('dy', 23);
    const merged = enter.merge(joined);
    merged
      .select('text.option-label')
      .text((d) => d.label)
      .attr('font-size', (d) => (d.wide ? 22 : 15));
    merged.select('text.option-sub').text((d) => d.sub);
    merged
      .select('rect')
      .transition()
      .duration(duration)
      .attr('x', (d) => (d.wide ? -128 : -64))
      .attr('y', -40)
      .attr('width', (d) => (d.wide ? 256 : 128))
      .attr('height', 82)
      .attr('fill', (d) => (d.survivor ? '#183c36' : '#122235'))
      .attr('stroke', (d) => (d.survivor ? '#9acbb9' : '#365271'))
      .attr('stroke-width', (d) => (d.survivor ? 2 : 1));
    merged
      .transition()
      .duration(duration)
      .ease(easeCubicInOut)
      .attr('opacity', (d) => d.opacity)
      .attr(
        'transform',
        (d) => `translate(${d.x},${d.y}) scale(${d.survivor ? 1.05 : 1})`,
      );
    return () => {
      root.selectAll('*').interrupt();
    };
  }, [stage, excluded, reduced, paused, nonDiscriminating]);

  const remaining = auditRows.length - excluded;
  return (
    <section className="scroll-classification" ref={host} id="core">
      <div className="collapse-sticky">
        <AmbientExhibit className="collapse-instrument">
          <div className="collapse-heading">
            <span>SCROLL TO FOLLOW THE AUDIT</span>
            <span>0{stage + 1} / 04</span>
          </div>
          <svg
            ref={svg}
            viewBox="0 0 600 555"
            aria-label={
              stage === 0
                ? 'Four levels of description'
                : stage === 1
                  ? 'Eight ledger grades'
                  : remaining + ' of sixteen audited claims remain highlighted'
            }
          >
            <title>
              The ledger narrows from four levels to the discriminating claims.
            </title>
          </svg>
          <div className="collapse-caption">
            <strong>
              {stage === 0
                ? 'One material, four levels'
                : stage === 1
                  ? 'Eight grades'
                  : excluded === nonDiscriminating
                    ? `${auditRows.length - nonDiscriminating} discriminating claims`
                    : `${remaining} claims under audit`}
            </strong>
            <span>
              {stage < 2
                ? 'Every claim carries a grade and a kill.'
                : 'Table 2 of the draft, under Definition 9.'}
            </span>
          </div>
          <div className="collapse-progress" aria-label="Audit stages">
            {stages.map((s, i) => (
              <button
                type="button"
                key={s.label}
                className={stage === i ? 'active' : ''}
                onClick={() =>
                  document.getElementById('audit-step-' + i)?.scrollIntoView({
                    behavior: reduced || paused ? 'instant' : 'smooth',
                    block: 'center',
                  })
                }
                aria-label={s.label}
                aria-current={stage === i ? 'step' : undefined}
              >
                <span />
              </button>
            ))}
          </div>
        </AmbientExhibit>
      </div>
      <div className="collapse-story">
        {stages.map((s, i) => (
          <article
            key={s.label}
            id={'audit-step-' + i}
            className={
              'collapse-story-step ' + (stage === i ? 'is-current' : '')
            }
          >
            <span className="eyebrow">
              0{i + 1} / {s.label}
            </span>
            <h2>{s.title}</h2>
            <p>{s.text}</p>
            <details className="inline-depth">
              <summary>
                Unpack this step <span>+</span>
              </summary>
              <p>{s.detail}</p>
            </details>
            {i === 0 && (
              <span className="scroll-cue">
                KEEP SCROLLING <ArrowDown size={14} />
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
