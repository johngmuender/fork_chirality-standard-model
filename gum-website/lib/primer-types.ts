/** The GUM Material Primer, parsed into typed blocks by scripts/primer-parser.mjs. */
export type PrimerTag = { glyph: string; name: string; text: string };
export type PrimerProblem = { id: string; starred: boolean; text: string };
export type PrimerBlock =
  | { type: 'p'; text: string }
  | { type: 'formula'; text: string; note: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'table'; header: string[]; rows: string[][] }
  | { type: 'tags'; items: PrimerTag[] }
  | {
      type: 'box';
      kind: 'try' | 'stepup' | 'changed' | 'numbers' | 'slip';
      title: string;
      text: string;
    }
  | { type: 'chew'; items: PrimerProblem[] };
export type PrimerSection = {
  id: string;
  number: string | null;
  title: string;
  starred: boolean;
  blocks: PrimerBlock[];
};
export type PrimerChapter = {
  number: number;
  slug: string;
  title: string;
  part: number;
  goals: string;
  sections: PrimerSection[];
};
export type PrimerPart = {
  number: number;
  numeral: string;
  title: string;
  chapters: number[];
};
export type PrimerContent = {
  title: string;
  subtitle: string;
  edition: string;
  note: string;
  front: PrimerSection[];
  parts: PrimerPart[];
  chapters: PrimerChapter[];
  glossary: { term: string; text: string }[];
  answers: { id: string; text: string }[];
  project: {
    intro: string;
    items: { id: string; text: string }[];
    rubric: string;
    closing: string;
  };
};
