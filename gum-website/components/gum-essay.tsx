'use client';
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import { flushSync } from 'react-dom';
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Code2,
  Download,
  FileText,
  Layers3,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PathFlow, PathChapter } from '@/components/reader-paths';
import { WaysIn } from '@/components/ways-in';
import { ReadingBar } from '@/components/reading-bar';
import { Hero } from '@/components/hero';
import { JourneyContext, navigateTo, type Journey } from '@/components/journey';
import {
  chapterForAnchor,
  chapterInfo,
  defaultPath,
  editionOf,
  readerPaths,
  resolvePath,
  type ChapterId,
  type PathId,
} from '@/lib/reader-paths';
import {
  emptyMemory,
  memorySnapshot,
  subscribeMemory,
  updateMemory,
  withPlace,
  withRead,
} from '@/lib/reading-memory';
import {
  AmbientExhibit,
  MotionProvider,
  MotionControl,
  useMotion,
} from '@/components/exhibit-motion';
import { asset } from '@/lib/assets';
import {
  paperDate,
  paperPath,
  paperTitle,
  repository,
  snapshot,
  source,
} from '@/lib/gum-site';
import { runLocalChecks } from '@/lib/gum-checks';
import { levels } from '@/lib/gum-ledger';
import { Glossary, Term } from '@/components/glossary';
import {
  HistoricalPlates,
  PlateFigure,
  paperPlates,
} from '@/components/historical-plates';
import { ScrollAudit } from '@/components/scroll-audit';
import { MaterialLab } from '@/components/material-lab';
import { LightSector } from '@/components/light-sector';
import { VacuumChapter } from '@/components/vacuum-exhibits';
import { QuantumChapter } from '@/components/quantum-exhibits';
import {
  BandEdgeExhibit,
  ChannelingExhibit,
  ClosureExhibit,
  KnotChapterExplorer,
} from '@/components/particle-exhibits';
import { SectorsChapter } from '@/components/sector-exhibits';
import { CosmosChapter } from '@/components/cosmos-exhibits';
import { HandednessChapter } from '@/components/handedness-exhibits';
import { LedgerChapter } from '@/components/ledger-tables';
import {
  PrimerChapterSection,
  PrimerEnd,
  PrimerIntro,
} from '@/components/primer-chapter';
import { primerChapters } from '@/lib/primer';

const paper = asset('gum-paper.md');

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-number">
      <span aria-hidden="true" />
      <span className="label-rule" />
      {children}
    </div>
  );
}

const timeline = [
  {
    year: '1839',
    title: 'A continuum that stores energy in rotation alone',
    text: 'James MacCullagh exhibited the classical aether whose dynamics reproduce Fresnel’s optics: an energy depending on the curl of the displacement and on nothing else. As an ordinary elastic solid it is inconsistent, and the inconsistency was treated as a verdict on all material pictures of light.',
    link: 'MacCullagh, Transactions of the Royal Irish Academy',
    url: 'https://en.wikipedia.org/wiki/James_MacCullagh',
  },
  {
    year: '1909',
    title: 'Points that carry an orientation',
    text: 'Eugène and François Cosserat wrote the mechanics of continua whose points carry a triad as well as a position. Their stress need not be symmetric, and couple stresses balance the angular momentum. GUM’s first description of its material is a chiral continuum of this kind.',
    link: 'Cosserat & Cosserat, Théorie des corps déformables',
    url: 'https://archive.org/details/thoriedescorpsdf0000euge',
  },
  {
    year: '1925',
    title: 'The trajectory leaves the vocabulary',
    text: 'Heisenberg’s Umdeutung replaced the electron’s position by an array of transition amplitudes. The trajectory was not refuted. It was expelled because it could not be measured, and the array became what the theory is about.',
    link: 'Heisenberg, Zeitschrift für Physik 33',
    url: 'https://doi.org/10.1007/BF01328377',
  },
  {
    year: '1927–1966',
    title: 'Clocks, pilot waves and agitation',
    text: 'De Broglie gave the particle an internal clock of frequency mc²/h and a guiding wave; Bohm made the guidance a deterministic law; Nelson derived the Schrödinger equation from a diffusing particle. GUM keeps all three as descriptions of a knot moving in an agitated material.',
    link: 'Nelson, Physical Review 150',
    url: 'https://journals.aps.org/pr/abstract/10.1103/PhysRev.150.1079',
  },
  {
    year: '1975–2010',
    title: 'Beables, and a tower of fields on ordinary space',
    text: 'Bell asked a theory to say what exists in a region before it says what is observed. Norsen showed that the wave function on configuration space can be traded for a hierarchy of conditional fields on three-dimensional space. GUM’s material is a physical realisation of that hierarchy.',
    link: 'Norsen, Foundations of Physics 40',
    url: 'https://doi.org/10.1007/s10701-010-9495-2',
  },
];

export default function GumEssay({
  initialPath = defaultPath,
}: {
  initialPath?: PathId;
}) {
  return (
    <MotionProvider>
      <EssayContent initialPath={initialPath} />
    </MotionProvider>
  );
}

/**
 * The reader's position and memory. It sits apart from the essay so that
 * scrolling re-renders the reader's controls, never the chapters themselves.
 */
function JourneyProvider({
  pathId,
  depth,
  setDepth,
  choosePath,
  children,
}: {
  pathId: PathId;
  depth: string;
  setDepth: (depth: string) => void;
  choosePath: (id: PathId, destination?: string) => void;
  children: ReactNode;
}) {
  const path = resolvePath(pathId);
  const [active, setActive] = useState<{ path: PathId; id: string }>({
    path: pathId,
    id: path.chapters[0],
  });
  const activeSection = active.path === pathId ? active.id : path.chapters[0];
  const memory = useSyncExternalStore(
    subscribeMemory,
    memorySnapshot,
    () => emptyMemory,
  );

  useEffect(() => {
    // The finale counts as the end of the path's last chapter, so a reader
    // who jumps straight to it is placed there.
    const last = resolvePath(pathId).chapters.at(-1)!;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActive({
              path: pathId,
              id: entry.target.id === 'path-finale' ? last : entry.target.id,
            });
        }),
      { rootMargin: '-15% 0px -65% 0px' },
    );
    const observed = new Map<string, HTMLElement>();
    const watchChapters = () => {
      [...Object.keys(chapterInfo), 'path-finale'].forEach((id) => {
        const element = document.getElementById(id);
        const previous = observed.get(id);
        if (element === previous) return;
        if (previous) observer.unobserve(previous);
        if (element) {
          observed.set(id, element);
          observer.observe(element);
        } else observed.delete(id);
      });
    };
    watchChapters();
    const chapterChanges = new MutationObserver(watchChapters);
    const flow = document.querySelector('.path-flow');
    if (flow) chapterChanges.observe(flow, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      chapterChanges.disconnect();
    };
  }, [pathId]);

  // A place is recorded only when scrolling settles inside one of the path's
  // own chapters, so the hero, the opening and side trips never overwrite it.
  useEffect(() => {
    const chapters = resolvePath(pathId).chapters;
    let timer = 0;
    const record = () => {
      const line = window.innerHeight * 0.3;
      const chapter = chapters.find((id) => {
        const box = document.getElementById(id)?.getBoundingClientRect();
        return !!box && box.top <= line && box.bottom > line;
      });
      if (!chapter) return;
      let anchor: string | null = null;
      const candidates = document
        .getElementById(chapter)!
        .querySelectorAll<HTMLElement>(
          editionOf(chapter) === 'primer'
            ? '.primer-section-title[id]'
            : '[id]',
        );
      for (const candidate of candidates) {
        if (
          candidate.id === chapter ||
          chapterForAnchor(candidate.id) !== chapter
        )
          continue;
        const box = candidate.getBoundingClientRect();
        if (!box.height) continue;
        if (box.top > line) break;
        anchor = candidate.id;
      }
      updateMemory((old) => withPlace(old, { path: pathId, chapter, anchor }));
    };
    const schedule = () => {
      clearTimeout(timer);
      timer = window.setTimeout(record, 400);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', schedule);
    };
  }, [pathId]);

  const markRead = useCallback(
    (chapter: ChapterId) => updateMemory((old) => withRead(old, chapter)),
    [],
  );
  const forget = useCallback(() => updateMemory(() => emptyMemory), []);
  const offPath =
    Object.hasOwn(chapterInfo, activeSection) &&
    !path.chapters.includes(activeSection as ChapterId);
  const returnTo =
    offPath && memory.place?.path === pathId ? memory.place : null;
  const journey = useMemo<Journey>(
    () => ({
      pathId,
      depth,
      setDepth,
      choosePath,
      active: activeSection,
      memory,
      markRead,
      forget,
      returnTo,
    }),
    [
      pathId,
      depth,
      setDepth,
      choosePath,
      activeSection,
      memory,
      markRead,
      forget,
      returnTo,
    ],
  );
  return (
    <JourneyContext.Provider value={journey}>
      {children}
    </JourneyContext.Provider>
  );
}

function EssayContent({ initialPath }: { initialPath: PathId }) {
  const { enabled: motionEnabled } = useMotion();
  const [pathId, setPathId] = useState<PathId>(initialPath);
  const currentPath = useRef(initialPath);
  const path = resolvePath(pathId);
  const [depth, setDepth] = useState(resolvePath(initialPath).depth);
  const [report, setReport] = useState<ReturnType<
    typeof runLocalChecks
  > | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const choose = useRef<(id: PathId) => void>(() => {});
  const pendingDestination = useRef<string | null>(null);

  const choosePath = (id: PathId, destination?: string) => {
    const next = resolvePath(id);
    if (next.id === currentPath.current) {
      if (destination) navigateTo(destination);
      return;
    }
    pendingDestination.current = destination ?? null;
    const apply = () => {
      currentPath.current = next.id;
      setPathId(next.id);
      setDepth(next.depth);
    };
    const transition = (
      document as Document & {
        startViewTransition?: (callback: () => void) => unknown;
      }
    ).startViewTransition;
    if (transition && motionEnabled)
      transition.call(document, () => flushSync(apply));
    else apply();
    const url = new URL(location.href);
    url.searchParams.set('path', next.id);
    url.hash = destination ? '' : 'path-opening';
    history.replaceState(history.state, '', url);
  };
  useEffect(() => {
    choose.current = choosePath;
  });
  // A destination on the new path is followed once that path's flow has mounted.
  useEffect(() => {
    const destination = pendingDestination.current;
    if (!destination) return;
    pendingDestination.current = null;
    navigateTo(destination);
  }, [pathId]);
  useEffect(() => {
    const restore = () => {
      const next = resolvePath(new URL(location.href).searchParams.get('path'));
      if (next.id === currentPath.current) return;
      currentPath.current = next.id;
      setPathId(next.id);
      setDepth(next.depth);
    };
    restore();
    window.addEventListener('popstate', restore);
    return () => window.removeEventListener('popstate', restore);
  }, []);

  useEffect(() => {
    type Tool = {
      name: string;
      title: string;
      description: string;
      inputSchema: object;
      annotations: { readOnlyHint: boolean; untrustedContentHint: boolean };
      execute: (input: unknown) => unknown;
    };
    const context = (
      document as Document & {
        modelContext?: {
          registerTool: (
            tool: Tool,
            options: { signal: AbortSignal },
          ) => void | Promise<void>;
        };
      }
    ).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    const register = (tool: Tool) => {
      try {
        void Promise.resolve(
          context.registerTool(tool, { signal: lifecycle.signal }),
        ).catch(() => {});
      } catch {
        /* The essay works without this optional browser API. */
      }
    };
    register({
      name: 'run_gum_local_checks',
      title: 'Recompute the printed arithmetic of the GUM draft',
      description:
        'Run the same twelve local checks as the visible verification button and display the results. They recompute closed-form numbers of the draft; they do not evaluate the profile integrals marked [N].',
      inputSchema: {
        type: 'object',
        properties: {},
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute: (input) => {
        if (
          !input ||
          typeof input !== 'object' ||
          Array.isArray(input) ||
          Object.keys(input).length
        )
          throw new Error('Expected an empty object.');
        const result = runLocalChecks();
        flushSync(() => setReport(result));
        return result;
      },
    });
    register({
      name: 'choose_gum_reading_path',
      title: 'Choose a reading path through the GUM edition',
      description:
        'Reorder the page for one of the five reader paths: primer (the GUM Material Primer, from the ground up), curious, physics, experiments or review (routes through the paper). Returns the chapter order that is now on the page.',
      inputSchema: {
        type: 'object',
        properties: {
          path: { enum: readerPaths.map((p) => p.id) },
        },
        required: ['path'],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute: (input) => {
        if (
          !input ||
          typeof input !== 'object' ||
          Object.keys(input).length !== 1 ||
          !('path' in input) ||
          !readerPaths.some((p) => p.id === String(input.path))
        )
          throw new Error(
            'path must be ' + readerPaths.map((p) => p.id).join(', ') + '.',
          );
        const next = resolvePath(String(input.path));
        flushSync(() => choose.current(next.id));
        return { path: next.id, depth: next.depth, chapters: next.chapters };
      },
    });
    return () => lifecycle.abort();
  }, []);

  const reviewPrompt =
    'Independently examine the working draft “' +
    paperTitle +
    '” (GUM, revision of ' +
    paperDate +
    ') at ' +
    source(paperPath) +
    '. Read the complete draft. Start with postulates P1–P7 and the import list; then check the exact linear spectrum and the cone condition, Theorems 2–6 on the electromagnetic sector and the locality dichotomy, the capacity theorems and the mirror-circuit cliff, the closure of ħ and the spin selection, the two-scale electron, the six anomaly sums, the relaxation family against DESI DR2, and the sign chain. For each claim state its printed ledger grade, say whether that grade is justified, and apply Definition 9: was the postulate adopted for the fact it explains, and does the Standard Model or ΛCDM entail the same fact? Seek counterexamples, circular steps and unjustified transitions between the four levels of description. Cite exact section and proposition numbers, and record which of the thirty stakes you consider adjudicable with existing data. Distinguish derived-form results, calibrated rates, imports, conjectures and posed closures.';

  return (
    <JourneyProvider
      pathId={pathId}
      depth={depth}
      setDepth={setDepth}
      choosePath={choosePath}
    >
      <main data-depth={depth} data-path={pathId}>
        <a href={'#' + path.chapters[0]} className="skip-link">
          Skip to the interactive edition
        </a>
        <header className="masthead">
          <a className="wordmark" href="#beginning">
            GUM<span> / </span>MATERIAL
          </a>
          <nav>
            <MotionControl />
            <a href="#reader-paths">Ways in</a>
            <a
              className="repository-link"
              href={repository}
              target="_blank"
              rel="noreferrer"
            >
              Repository <ArrowUpRight size={14} />
            </a>
            <a
              href={paper}
              target="_blank"
              rel="noreferrer"
              className="paper-link"
            >
              Read the draft <ArrowUpRight size={15} />
            </a>
          </nav>
        </header>
        <Hero />
        <WaysIn selected={pathId} onChoose={choosePath} />
        <ReadingBar draft={paper} />

        <PathFlow selected={pathId} key={pathId}>
          <PathChapter chapter="question">
            <section className="section question-section" id="question">
              <SectionLabel>THE INVERSE UMDEUTUNG</SectionLabel>
              <div className="section-heading">
                <h2>
                  Heisenberg expelled the trajectory.
                  <br />
                  GUM asks what could <em>keep the books.</em>
                </h2>
                <p className="section-lead">
                  The <Term id="umdeutung">Umdeutung</Term> of 1925 did not
                  refute the electron’s path; it removed the path from the
                  vocabulary because no instrument could record it, and made the
                  array of transition amplitudes the subject of the theory. GUM
                  executes the inverse act. It asks what{' '}
                  <Term id="material">material</Term>, described at four levels,
                  would have quantum mechanics as the bookkeeping of its
                  textures and the Standard Model as the bookkeeping of their
                  response modes, and then prints where that material could be
                  caught out.
                </p>
              </div>
              <div className="history-layout">
                <PlateFigure id="heisenberg" />
                <div className="timeline" id="timeline">
                  {timeline.map((entry) => (
                    <article key={entry.year}>
                      <span className="timeline-year">{entry.year}</span>
                      <div>
                        <h3>{entry.title}</h3>
                        <p>{entry.text}</p>
                        <a href={entry.url} target="_blank" rel="noreferrer">
                          {entry.link} <ArrowUpRight size={13} />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <HistoricalPlates ids={paperPlates} />
              <p className="source-note">
                Code-drawn plates in the site’s engraved style. Each is a
                diagram of the idea named beside it, not a portrait, a
                reconstruction or a reproduction of a historical figure; dates
                identify the work.
              </p>
              <div className="question-band">
                <span className="eyebrow">THE QUESTION THE DRAFT ASKS</span>
                <h3>
                  What material could possess quantum mechanics
                  <br />
                  as its <em>coarse-grained bookkeeping?</em>
                </h3>
                <p className="band-note">
                  GUM is not an interpretation of quantum mechanics and not a
                  hidden-variable completion of it. It is a material proposal:
                  the material is the only primitive, and geometry, force, the
                  light cone, the wave function and the particle spectrum are
                  response descriptions of it. The draft states its own grades,
                  prints its imports as costs, audits its claims for
                  circularity, and pre-registers the observations that would
                  retire each of them.
                </p>
              </div>
              <details
                className="inline-depth"
                open={depth === 'math' ? true : undefined}
              >
                <summary>
                  What the draft commits to, and what it declines to claim{' '}
                  <span>+</span>
                </summary>
                <p>
                  Commitments: a chiral micropolar continuum at level 1 with
                  objectivity as its gauge principle; a locked transverse
                  doublet as the photon; degree-one textures as fermions, with ħ
                  closed by two conditions; a tower of conditional fields as the
                  wave function; a helical condensate as the vacuum, with its
                  pitch tied to the neutrino mass; and one handedness bit for
                  the whole vacuum. Declined: a derivation of the fine-structure
                  constant, of the electroweak mixing modulus, of the structural
                  scale or of the six moduli, each printed as an import; any
                  claim at level 0; and any explanation that Definition 9 marks
                  as selected for the fact it explains.
                </p>
              </details>
            </section>
          </PathChapter>

          <PathChapter chapter="core">
            <ScrollAudit />
          </PathChapter>
          <PathChapter chapter="material">
            <MaterialLab depth={depth} />
          </PathChapter>
          <PathChapter chapter="light">
            <LightSector depth={depth} />
          </PathChapter>
          <PathChapter chapter="vacuum">
            <VacuumChapter depth={depth} />
          </PathChapter>
          <PathChapter chapter="quantum">
            <QuantumChapter depth={depth} />
          </PathChapter>

          <PathChapter chapter="particle">
            <section className="section particle-section" id="particle">
              <SectionLabel>THE GUM PARTICLE</SectionLabel>
              <div className="section-heading">
                <h2>
                  Mass is a forbidden frequency.
                  <br />
                  Spin is a <em>rotation.</em>
                </h2>
                <p className="section-lead">
                  A <Term id="knot">knot</Term> is a degree-one texture of the
                  relative orientation on S³, held together by the Skyrme and
                  Bogomolny sectors of the action. It is at rest when it
                  isorotates at a frequency ω = κω₀ inside the gap, where no
                  wave of the material can carry its energy away: its mass is a
                  frequency the spectrum forbids. The Haar-averaged compacton
                  saturates the Bogomolny bound at C₆ = 64/15π in units of Λm̃_V;
                  two closure conditions select the rotor number j = ½; and the
                  de Broglie clock is the rotation itself.
                </p>
              </div>
              <p className="explorer-invitation">
                The explorer draws the texture over its parameter space. Gold
                marks the centre, where the relative texture is −1; blue and
                green arrows inside the core show the vector part of the
                texture, and copper arrows outside show the evanescent halo that
                the isorotation drives in the relative-rotation field. The clock
                ratio κ sets how far the halo reaches.
              </p>
              <KnotChapterExplorer depth={depth} />
              <p className="source-note">
                Spin ½ and the statistics sign come from the same rotation: a 2π
                isorotation of the texture multiplies its phase by −1, which the
                draft reads as the Pauli sign (Theorem 14, Proposition 12). The
                drawing is the mathematical object; the electron’s core sits at
                the structural scale and its halo at the Compton scale, a ratio
                no picture can show.{' '}
                <a href={source(paperPath)} target="_blank" rel="noreferrer">
                  Draft, Sec. VI ↗
                </a>
              </p>
              <details
                className="unpack-panel"
                open={depth !== 'story' ? true : undefined}
              >
                <summary>
                  Open the closure of ħ and the spin selection <span>+</span>
                </summary>
                <ClosureExhibit depth={depth} />
              </details>
              <details
                className="unpack-panel"
                open={depth !== 'story' ? true : undefined}
              >
                <summary>
                  Open the channeling resonance <span>+</span>
                </summary>
                <ChannelingExhibit />
              </details>
            </section>
          </PathChapter>

          <PathChapter chapter="electron">
            <section className="section electron-section" id="electron">
              <SectionLabel>THE ELECTRON: CORE, HALO, BAND EDGE</SectionLabel>
              <div className="section-heading">
                <h2>
                  Pointlike to every probe,
                  <br />
                  structured to the <em>vacuum.</em>
                </h2>
                <p className="section-lead">
                  A knot the size of the electron’s Compton length would
                  contradict the form-factor and g − 2 bounds that put any
                  electron structure below 10⁻¹⁹ m. Theorem 15 turns the
                  contradiction into a structure: the winding lives in a core at
                  the structural scale ℓ_s, the isorotation drives a halo at the
                  Compton scale, and the halo’s spectrum ends at a band edge ħω₀
                  = Mc²/κ. Every charged lepton is the same object at a
                  different mass.
                </p>
              </div>
              <div className="implication-grid scale-grid">
                <article>
                  <span>THE CORE · ℓ_s ≲ 1.5 × 10⁻²⁷ m</span>
                  <h3>Where the texture winds</h3>
                  <p>
                    The degree-one winding is confined to the structural scale,
                    so scattering sees a point. The core’s size is an import,
                    bounded above by the cliff arithmetic of the quantum
                    chapter.
                  </p>
                </article>
                <article>
                  <span>THE HALO · ħ/Mc</span>
                  <h3>Where the clock is felt</h3>
                  <p>
                    Outside the core the isorotation at ω = κω₀ drives an
                    evanescent relative-rotation field of length (c_ψ/c)(ħ/Mc)
                    κ/√(1 − κ²). At κ = 1/√2 that is the Compton length times
                    one.
                  </p>
                </article>
                <article>
                  <span>THE BAND EDGE · Mc²/κ</span>
                  <h3>Where the halo’s spectrum ends</h3>
                  <p>
                    The gap frequency is √2 Mc² at the closure value: 722.7 keV
                    for the electron. Whether a discrete level sits below the
                    pair threshold is Proposition 18’s question, with a
                    positronium answer.
                  </p>
                </article>
              </div>
              <BandEdgeExhibit />
              <details
                className="inline-depth"
                id="positronium"
                open={depth === 'math' ? true : undefined}
              >
                <summary>
                  Why the line would be monoenergetic, and what it would fix{' '}
                  <span>+</span>
                </summary>
                <p>
                  If the halo supports a neutral level X with m_X = m_e/κ below
                  2m_e, ortho-positronium can decay to γX with a two-body final
                  state, so the photon is monoenergetic at E_γ = (m_e/4)(4 −
                  κ⁻²). At the closure value that is 255.5 keV, and a measured
                  line inverts to κ directly. Charge-conjugation parity of the
                  photon is −1, so the C-odd ortho state needs C_X = +1. The
                  core adopts alternative (a), no such level; the line is Stake
                  S25, conditional on closure K-19 returning a level.
                </p>
              </details>
            </section>
          </PathChapter>

          <PathChapter chapter="sectors">
            <SectorsChapter depth={depth} />
          </PathChapter>
          <PathChapter chapter="cosmos">
            <CosmosChapter depth={depth} />
          </PathChapter>
          <PathChapter chapter="handedness">
            <HandednessChapter depth={depth} />
          </PathChapter>
          <PathChapter chapter="ledger">
            <LedgerChapter depth={depth} />
          </PathChapter>

          <PathChapter chapter="verify">
            <section className="section verification-section" id="verify">
              <SectionLabel>READ IT. CHECK IT. RETIRE IT.</SectionLabel>
              <div className="section-heading">
                <h2>
                  The draft is arranged
                  <br />
                  to be <em>efficiently wrong.</em>
                </h2>
                <p className="section-lead">
                  Read the draft, follow every number on this page back to the
                  formula that produced it, and take the review prompt with you.
                  The browser checks below recompute the printed arithmetic; the
                  integrals marked [N] wait for the normalisation audit K-N.
                </p>
              </div>
              <div className="resource-grid">
                <a
                  className="resource-card featured"
                  href={paper}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FileText size={24} />
                  <span className="resource-type">THE DRAFT</span>
                  <h3>
                    What material could possess
                    <br />
                    quantum mechanics?
                  </h3>
                  <p>
                    The revision of {paperDate}: four levels, seven grades,
                    thirty stakes, twenty-six posed closures and fifteen
                    corrections to the draft before it.
                  </p>
                  <span className="resource-action">
                    Read the draft <ArrowUpRight size={19} />
                  </span>
                </a>
                <a
                  className="resource-card"
                  href={repository + '/tree/' + snapshot + '/gum-website'}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={24} />
                  <span className="resource-type">THE SOURCE OF THIS PAGE</span>
                  <h3>
                    Every number,
                    <br />
                    computed in the open.
                  </h3>
                  <p>
                    The exhibits call a small library that encodes the draft’s
                    formulas. Change an input and the page recomputes; read the
                    library and you have the formulas.
                  </p>
                  <span className="resource-action">
                    Read the library <ArrowUpRight size={19} />
                  </span>
                </a>
                <a
                  className="resource-card"
                  href={repository}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Layers3 size={24} />
                  <span className="resource-type">THE REPOSITORY</span>
                  <h3>
                    Follow the
                    <br />
                    branch.
                  </h3>
                  <p>
                    The draft, the primer and this edition live in one
                    repository with their checks.
                  </p>
                  <span className="resource-action">
                    Explore on GitHub <ArrowUpRight size={19} />
                  </span>
                </a>
              </div>
              <div className="download-strip">
                <a href={paper} download>
                  Draft, Markdown source <Download size={14} />
                </a>
                <a href={asset('gum-primer.md')} download>
                  Primer, Markdown source <Download size={14} />
                </a>
                <a href={asset('source-manifest.json')}>
                  Download manifest <Download size={14} />
                </a>
                <a href={repository + '/archive/' + snapshot + '.zip'}>
                  Branch ZIP <Download size={14} />
                </a>
              </div>
              <p className="source-note">
                The Markdown copy on this site is byte-identical to the draft in
                the repository, and the manifest records its SHA-256. The draft
                contains no executable verification layer; its checkable content
                is the closed-form arithmetic reproduced below and the stakes’
                printed numbers.
              </p>
              <div className="proof-layers levels-grid">
                {levels.map((level) => (
                  <div key={level.level}>
                    <span className="proof-label">
                      0{level.level + 1} / LEVEL {level.level}
                    </span>
                    <h3>{level.name}</h3>
                    <p>{level.text}</p>
                  </div>
                ))}
              </div>
              <AmbientExhibit>
                <div className="live-verification" id="local-checks">
                  <div className="live-check-heading">
                    <div>
                      <span className="eyebrow">TRY A SMALL CHECK HERE</span>
                      <h3>Recompute the draft’s arithmetic.</h3>
                      <p>
                        Twelve closed-form results, from the Haar integral to
                        the ledger census, recomputed in your browser.
                      </p>
                    </div>
                    <Button
                      onClick={() => setReport(runLocalChecks())}
                      className="check-button"
                    >
                      <ShieldCheck size={17} />
                      {report ? 'Run checks again' : 'Run local checks'}
                    </Button>
                  </div>
                  {report && (
                    <div className="check-report" aria-live="polite">
                      <strong
                        className={report.passed ? 'check-pass' : 'check-fail'}
                      >
                        {report.passed
                          ? 'All ' +
                            report.checks.length +
                            ' local checks passed'
                          : 'A local check failed'}
                      </strong>
                      {report.checks.map((c) => (
                        <div key={c.label}>
                          {c.passed ? (
                            <CheckCircle2 size={16} />
                          ) : (
                            <span>×</span>
                          )}
                          <span>{c.label}</span>
                        </div>
                      ))}
                      <p>{report.scope}</p>
                    </div>
                  )}
                </div>
              </AmbientExhibit>
              <Glossary open={depth === 'math'} />
              <details
                className="disclosure"
                open={pathId === 'review' ? true : undefined}
              >
                <summary>
                  Source snapshot, scope & credits <span>+</span>
                </summary>
                <div>
                  <p>
                    This interactive edition is built from the repository’s{' '}
                    <a
                      href={repository + '/tree/' + snapshot}
                      target="_blank"
                      rel="noreferrer"
                    >
                      branch source ↗
                    </a>
                    . The draft is copied from{' '}
                    <a
                      href={source(paperPath)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {paperPath}
                    </a>{' '}
                    at build time and checked byte for byte; the{' '}
                    <a href={asset('source-manifest.json')}>
                      download manifest
                    </a>{' '}
                    records its SHA-256.
                  </p>
                  <p>
                    The exhibits encode the draft’s stated formulas and tables:
                    the spectrum determinant, the arrival-time kinematics, the
                    Bragg passage, the cliff arithmetic, the closure solution,
                    the anomaly sums, the relaxation family and the ledger. They
                    do not evaluate the profile and frustration integrals marked
                    [N], do not run the normalisation audit K-N, and do not
                    adjudicate any stake. Where an exhibit uses a schematic
                    amplitude, it says so beside the number.
                  </p>
                  <p>
                    Historical plates are drawn in code as diagrams of ideas,
                    with the work they refer to linked beside them. The
                    six-chapter film is rendered live in the browser from the
                    same formulas. The claims on this page are the draft’s,
                    reproduced at the grades it prints for them; the agreements
                    it reports are landings within stated theoretical
                    uncertainty, not fits.
                  </p>
                </div>
              </details>
              <div className="review-row">
                <div>
                  <h3>Bring your own scrutiny.</h3>
                  <p>
                    A useful review applies Definition 9 to every claim and
                    names the stake that would settle it.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(reviewPrompt);
                      setCopied(true);
                      setCopyError(false);
                    } catch {
                      setCopyError(true);
                    }
                  }}
                >
                  {copied ? (
                    <>
                      <Check size={15} /> Review prompt copied
                    </>
                  ) : (
                    'Copy independent-review prompt'
                  )}
                </Button>
              </div>
              {copyError && (
                <div className="copy-fallback">
                  <p>
                    Clipboard access is unavailable. Select and copy the prompt
                    below.
                  </p>
                  <textarea
                    aria-label="Independent review prompt"
                    readOnly
                    value={reviewPrompt}
                  />
                </div>
              )}
            </section>
          </PathChapter>
          <PathChapter chapter="primer-intro">
            <PrimerIntro depth={depth} />
          </PathChapter>
          {primerChapters.map((chapter) => (
            <PathChapter chapter={chapter.slug as ChapterId} key={chapter.slug}>
              <PrimerChapterSection chapter={chapter} depth={depth} />
            </PathChapter>
          ))}
          <PathChapter chapter="primer-end">
            <PrimerEnd depth={depth} />
          </PathChapter>
        </PathFlow>
        <footer className="site-footer">
          <div>
            <a className="wordmark" href="#beginning">
              GUM<span> / </span>MATERIAL
            </a>
            <p>A material proposal, graded, audited and staked.</p>
          </div>
          <div>
            <span>GUM · REVISION OF {paperDate}</span>
            <a href={asset('gum-primer.md')} target="_blank" rel="noreferrer">
              Primer <ArrowUpRight size={14} />
            </a>
            <a href={paper} target="_blank" rel="noreferrer">
              Draft <ArrowUpRight size={14} />
            </a>
            <a href={repository} target="_blank" rel="noreferrer">
              Repository <ArrowUpRight size={14} />
            </a>
            <a href="#beginning">Back to the beginning ↑</a>
          </div>
        </footer>
      </main>
    </JourneyProvider>
  );
}
