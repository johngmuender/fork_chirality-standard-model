'use client';
import type { ComponentType } from 'react';
import { HistoricalPlates } from '@/components/historical-plates';
import { GumFilm } from '@/components/gum-film';
import { ConeDifference, SpectrumExhibit } from '@/components/material-lab';
import { DichotomyExhibit, FrameKinematics } from '@/components/light-sector';
import { PitchExhibit, TroughExhibit } from '@/components/vacuum-exhibits';
import {
  CliffExhibit,
  TimingExhibit,
  TowerPanel,
} from '@/components/quantum-exhibits';
import {
  BandEdgeExhibit,
  ChannelingExhibit,
  ClosureExhibit,
  KnotChapterExplorer,
} from '@/components/particle-exhibits';
import {
  AnomalyTiling,
  ElectroweakSkeleton,
  FrustrationLadder,
  HolonomyCounter,
} from '@/components/sector-exhibits';
import { DriftExhibit, RelaxationExhibit } from '@/components/cosmos-exhibits';
import {
  BirefringenceEndpoint,
  MirrorForce,
  SignChain,
} from '@/components/handedness-exhibits';
import { AuditTable, StakesTable } from '@/components/ledger-tables';
import { PrimerLadder } from '@/components/primer-ladder';
import {
  DefectPaper,
  Foucault,
  HelixInstability,
  LightSpeedDial,
  MassFrequency,
  Necklace,
  Objectivity,
  RiverRace,
  SkinLength,
  SoundInSteel,
  Vanes,
} from '@/components/primer-exhibits-material';
import {
  AlphaMu,
  BeltTrick,
  CoreHalo,
  Derrick,
  HairyBall,
  KnobCounter,
  Madelung,
  SchmidtFidelity,
} from '@/components/primer-exhibits-quantum';
import {
  HeadlineAuditor,
  LandingOrTest,
  NeutrinoBridge,
  RubberBand,
  WeakCoupling,
  ZeroPoint,
} from '@/components/primer-exhibits-cosmos';

type Exhibit = ComponentType<{ depth: string }>;

function AetherPlates() {
  return (
    <HistoricalPlates
      anchor="primer-plates-aether"
      ids={['maccullagh', 'kelvin', 'michelson']}
    />
  );
}
function InversionPlates() {
  return (
    <HistoricalPlates
      anchor="primer-plates-inversion"
      ids={['rutherford', 'heisenberg']}
    />
  );
}
function CosseratPlates() {
  return (
    <HistoricalPlates
      anchor="primer-plates-cosserat"
      ids={['cosserat', 'volterra']}
    />
  );
}
function BeablePlates() {
  return (
    <HistoricalPlates
      anchor="primer-plates-beables"
      ids={['madelung', 'debroglie', 'bell']}
    />
  );
}
function WuPlates() {
  return <HistoricalPlates anchor="primer-plates-wu" ids={['wu']} />;
}
function MatterCone() {
  return (
    <div className="primer-exhibit" id="primer-matter-cone">
      <ConeDifference />
    </div>
  );
}
function PrimerSpectrum({ depth }: { depth: string }) {
  return <SpectrumExhibit depth={depth} anchor="primer-spectrum" />;
}
function PrimerGumFilm() {
  return <GumFilm anchor="primer-gum-film" />;
}
function PrimerDichotomy() {
  return <DichotomyExhibit anchor="primer-dichotomy" />;
}
function PrimerNearField() {
  return <FrameKinematics anchor="primer-near-field" />;
}
function PrimerPitch() {
  return <PitchExhibit anchor="primer-pitch" />;
}
function PrimerTrough({ depth }: { depth: string }) {
  return <TroughExhibit depth={depth} anchor="primer-trough" />;
}
function PrimerTower({ depth }: { depth: string }) {
  return <TowerPanel depth={depth} anchor="primer-tower" />;
}
function PrimerCliff({ depth }: { depth: string }) {
  return <CliffExhibit depth={depth} anchor="primer-cliff" />;
}
function PrimerTiming() {
  return <TimingExhibit anchor="primer-timing" />;
}
function PrimerKnot({ depth }: { depth: string }) {
  return <KnotChapterExplorer depth={depth} anchor="primer-knot" />;
}
function PrimerClosure({ depth }: { depth: string }) {
  return <ClosureExhibit depth={depth} anchor="primer-closure" />;
}
function PrimerChanneling() {
  return <ChannelingExhibit anchor="primer-channeling" />;
}
function PrimerBandEdge() {
  return <BandEdgeExhibit anchor="primer-band-edge" />;
}
function PrimerFamilies() {
  return <FrustrationLadder anchor="primer-families" />;
}
function PrimerElectroweak({ depth }: { depth: string }) {
  return <ElectroweakSkeleton depth={depth} anchor="primer-electroweak" />;
}
function PrimerAnomaly() {
  return <AnomalyTiling anchor="primer-anomaly" />;
}
function PrimerHolonomy() {
  return <HolonomyCounter anchor="primer-holonomy" />;
}
function PrimerRelaxation({ depth }: { depth: string }) {
  return <RelaxationExhibit depth={depth} anchor="primer-relaxation" />;
}
function PrimerDrift() {
  return <DriftExhibit anchor="primer-drift" />;
}
function PrimerSignChain() {
  return <SignChain anchor="primer-sign-chain" />;
}
function PrimerEndpoint() {
  return <BirefringenceEndpoint anchor="primer-endpoint" />;
}
function PrimerMirror() {
  return <MirrorForce anchor="primer-mirror" />;
}
function PrimerAudit() {
  return <AuditTable anchor="primer-audit" />;
}
function PrimerStakes() {
  return <StakesTable anchor="primer-stakes" />;
}
function ConePaper() {
  return <DefectPaper mode="cone" />;
}
function DefectsPaper() {
  return <DefectPaper mode="both" />;
}

/** Every exhibit the primer path renders, keyed by the anchor named in lib/primer.ts. */
export const primerExhibitComponents: Record<string, Exhibit> = {
  'primer-ladder': PrimerLadder,
  'primer-river': RiverRace,
  'primer-plates-aether': AetherPlates,
  'primer-plates-inversion': InversionPlates,
  'primer-sound': SoundInSteel,
  'primer-necklace': Necklace,
  'primer-mass-frequency': MassFrequency,
  'primer-matter-cone': MatterCone,
  'primer-skin': SkinLength,
  'primer-plates-cosserat': CosseratPlates,
  'primer-objectivity': Objectivity,
  'primer-spectrum': PrimerSpectrum,
  'primer-gum-film': PrimerGumFilm,
  'primer-vanes': Vanes,
  'primer-light-speed': LightSpeedDial,
  'primer-dichotomy': PrimerDichotomy,
  'primer-near-field': PrimerNearField,
  'primer-cone': ConePaper,
  'primer-foucault': Foucault,
  'primer-helix': HelixInstability,
  'primer-pitch': PrimerPitch,
  'primer-trough': PrimerTrough,
  'primer-madelung': Madelung,
  'primer-plates-beables': BeablePlates,
  'primer-tower': PrimerTower,
  'primer-fidelity': SchmidtFidelity,
  'primer-knobs': KnobCounter,
  'primer-cliff': PrimerCliff,
  'primer-timing': PrimerTiming,
  'primer-hairy-ball': HairyBall,
  'primer-derrick': Derrick,
  'primer-knot': PrimerKnot,
  'primer-belt': BeltTrick,
  'primer-closure': PrimerClosure,
  'primer-alpha-mu': AlphaMu,
  'primer-channeling': PrimerChanneling,
  'primer-core-halo': CoreHalo,
  'primer-band-edge': PrimerBandEdge,
  'primer-families': PrimerFamilies,
  'primer-bridge': NeutrinoBridge,
  'primer-electroweak': PrimerElectroweak,
  'primer-weak-coupling': WeakCoupling,
  'primer-rubber-band': RubberBand,
  'primer-anomaly': PrimerAnomaly,
  'primer-holonomy': PrimerHolonomy,
  'primer-zero-point': ZeroPoint,
  'primer-relaxation': PrimerRelaxation,
  'primer-drift': PrimerDrift,
  'primer-defects': DefectsPaper,
  'primer-sign-chain': PrimerSignChain,
  'primer-plates-wu': WuPlates,
  'primer-endpoint': PrimerEndpoint,
  'primer-mirror': PrimerMirror,
  'primer-audit': PrimerAudit,
  'primer-landing': LandingOrTest,
  'primer-stakes': PrimerStakes,
  'primer-headline': HeadlineAuditor,
};
