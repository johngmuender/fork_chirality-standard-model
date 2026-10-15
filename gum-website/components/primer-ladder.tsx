'use client';
import { useEffect, useRef, useState } from 'react';
import { easeCubicInOut, select } from 'd3';
import { ArrowDown } from 'lucide-react';
import { AmbientExhibit, useMotion } from '@/components/exhibit-motion';

/**
 * The primer's opening as a scroll-driven classification: the “made of” ladder, where it
 * stops, the aether's two deaths, and the inversion. Same mechanics as the paper's audit:
 * a sticky D3 instrument on the left, story steps on the right.
 */
const stages = [
  {
    label: 'THE LADDER',
    title: 'Ask the two-year-old’s question, over and over.',
    text: 'Wood. Cells. Molecules. Atoms, a tiny nucleus with electrons around it. Protons and neutrons. Quarks, held together by gluons. Every rung was a discovery; Rutherford found the nucleus in 1911 by what bounced back from gold foil.',
    detail:
      'The primer asks you to write the ladder out and circle the rung where it stops. In every experiment ever done, including collisions probing distances below 10⁻¹⁹ m, the electron behaves as a perfect point.',
  },
  {
    label: 'WHERE IT STOPS',
    title: 'At the bottom there is no stuff.',
    text: 'There are fields, one kind per kind of particle, and rules, quantum mechanics, for how they behave. The rulebook is the Standard Model, the most accurate theory ever built. And it makes three confessions.',
    detail:
      'About nineteen numbers typed in by hand; a triplication nobody ordered; and the rules themselves, assumed rather than explained: why quantum mechanics, why one speed limit, why is the energy of empty space nearly zero?',
  },
  {
    label: 'THE AETHER DIED TWICE',
    title: 'A good idea, with two obituaries.',
    text: 'MacCullagh’s aether stored energy only when twisted and reproduced optics exactly. A theorem killed it: a continuum of featureless points cannot have twist energy. Then Michelson and Morley’s tie, Lorentz’s contraction and Einstein’s postulates made it redundant.',
    detail:
      'Two morals the primer asks you to remember. The design died of a theorem whose key premise, “made of featureless points”, was a modelling choice. The program died of redundancy, which is fatal only until something in physics turns out to need an underlying something. GUM claims both morals have expired.',
  },
  {
    label: 'THE INVERSION',
    title: 'Heisenberg’s move, run backward.',
    text: 'In 1925 Heisenberg stopped picturing the orbit and built the theory from measurable quantities: rules first, stuff never. GUM readmits the trajectory, demotes quantum mechanics to bookkeeping, and asks what material could keep those books, and what it would be unable to hide.',
    detail:
      'The second half is the scientific half. A material that keeps the books must leave fingerprints: a speed, a size, a limit, a handedness. GUM’s job is to name them before anyone looks, and to say where to look.',
  },
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

const ladder = [
  'Your desk',
  'Wood',
  'Cells',
  'Molecules',
  'Atoms',
  'The nucleus',
  'Quarks & electrons',
];

function nodesFor(stage: number): Node[] {
  if (stage === 0)
    return ladder.map((label, i) => ({
      id: 'rung-' + i,
      label,
      sub: i === 6 ? 'the ladder stops here' : 'what is it made of?',
      x: 300,
      y: 60 + i * 76,
      opacity: 1,
      survivor: false,
      wide: true,
    }));
  if (stage === 1)
    return [
      {
        id: 'rung-6',
        label: 'Quarks & electrons',
        sub: 'pointlike below 10⁻¹⁹ m',
        x: 300,
        y: 70,
        opacity: 1,
        survivor: false,
        wide: true,
      },
      {
        id: 'fields',
        label: 'Fields and rules',
        sub: 'the Standard Model',
        x: 300,
        y: 190,
        opacity: 1,
        survivor: true,
        wide: true,
      },
      {
        id: 'numbers',
        label: '≈ 19 numbers',
        sub: 'typed in by hand',
        x: 300,
        y: 320,
        opacity: 1,
        survivor: false,
        wide: true,
      },
      {
        id: 'triplication',
        label: 'Three copies',
        sub: '“Who ordered that?”',
        x: 300,
        y: 416,
        opacity: 1,
        survivor: false,
        wide: true,
      },
      {
        id: 'rules',
        label: 'The rules themselves',
        sub: 'assumed, not explained',
        x: 300,
        y: 512,
        opacity: 1,
        survivor: false,
        wide: true,
      },
    ];
  if (stage === 2)
    return [
      {
        id: 'maccullagh',
        label: 'MacCullagh, 1839',
        sub: 'energy from twist alone',
        x: 300,
        y: 70,
        opacity: 1,
        survivor: false,
        wide: true,
      },
      {
        id: 'death-one',
        label: 'Death one: a theorem',
        sub: '“made of featureless points”',
        x: 160,
        y: 220,
        opacity: 1,
        survivor: false,
        wide: false,
      },
      {
        id: 'death-two',
        label: 'Death two: redundancy',
        sub: '1887, a perfect tie',
        x: 440,
        y: 220,
        opacity: 1,
        survivor: false,
        wide: false,
      },
      {
        id: 'einstein',
        label: 'Lorentz · Einstein',
        sub: 'the aether made redundant',
        x: 440,
        y: 360,
        opacity: 1,
        survivor: false,
        wide: false,
      },
      {
        id: 'cosserat',
        label: 'The premise that failed',
        sub: 'Chapter 4 turns on it',
        x: 160,
        y: 360,
        opacity: 1,
        survivor: false,
        wide: false,
      },
      {
        id: 'expired',
        label: 'Both morals expired?',
        sub: 'GUM’s claim',
        x: 300,
        y: 500,
        opacity: 1,
        survivor: true,
        wide: true,
      },
    ];
  return [
    {
      id: 'heisenberg',
      label: 'Heisenberg, 1925',
      sub: 'rules first, stuff never',
      x: 160,
      y: 110,
      opacity: 1,
      survivor: false,
      wide: false,
    },
    {
      id: 'gum',
      label: 'GUM',
      sub: 'stuff first; rules as books',
      x: 440,
      y: 110,
      opacity: 1,
      survivor: true,
      wide: false,
    },
    {
      id: 'question',
      label: 'What could it not hide?',
      sub: 'a speed, a size, a limit, a handedness',
      x: 300,
      y: 290,
      opacity: 1,
      survivor: false,
      wide: true,
    },
    {
      id: 'stakes',
      label: 'Thirty stakes',
      sub: 'named before anyone looks',
      x: 300,
      y: 430,
      opacity: 1,
      survivor: true,
      wide: true,
    },
  ];
}

export function PrimerLadder() {
  const { reduced, paused } = useMotion();
  const host = useRef<HTMLElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const [stage, setStage] = useState(0);
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
  }, []);
  useEffect(() => {
    if (!svg.current) return;
    const duration = reduced || paused ? 0 : 850;
    const root = select(svg.current);
    const data = nodesFor(stage);
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
      .attr('font-size', (d) => (d.wide ? 22 : 17));
    merged.select('text.option-sub').text((d) => d.sub);
    merged
      .select('rect')
      .transition()
      .duration(duration)
      .attr('x', (d) => (d.wide ? -128 : -118))
      .attr('y', -40)
      .attr('width', (d) => (d.wide ? 256 : 236))
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
  }, [stage, reduced, paused]);
  return (
    <section
      className="scroll-classification primer-ladder"
      ref={host}
      id="primer-ladder"
    >
      <div className="collapse-sticky">
        <AmbientExhibit className="collapse-instrument">
          <div className="collapse-heading">
            <span>SCROLL TO CLIMB THE LADDER</span>
            <span>0{stage + 1} / 04</span>
          </div>
          <svg
            ref={svg}
            viewBox="0 0 600 555"
            aria-label={stages[stage].label + ': ' + stages[stage].title}
          >
            <title>
              From the “made of” ladder to GUM’s inversion of Heisenberg’s move.
            </title>
          </svg>
          <div className="collapse-caption">
            <strong>
              {stages[stage].label.charAt(0) +
                stages[stage].label.slice(1).toLowerCase()}
            </strong>
            <span>
              {stage < 2
                ? 'The question the primer begins with.'
                : 'The question GUM asks instead.'}
            </span>
          </div>
          <div className="collapse-progress" aria-label="Ladder stages">
            {stages.map((s, i) => (
              <button
                type="button"
                key={s.label}
                className={stage === i ? 'active' : ''}
                onClick={() =>
                  document.getElementById('ladder-step-' + i)?.scrollIntoView({
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
            id={'ladder-step-' + i}
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
