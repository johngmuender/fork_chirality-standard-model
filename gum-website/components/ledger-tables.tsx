'use client';
import { useId, useState } from 'react';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';
import { Term } from '@/components/glossary';
import { chapterInfo, type ChapterId } from '@/lib/reader-paths';
import {
  auditDefinition,
  auditRows,
  closures,
  corrections,
  crossLocks,
  errata,
  grades,
  stakes,
  stakesByStatus,
} from '@/lib/gum-ledger';

export function StakesTable({
  anchor = 'stakes',
}: {
  anchor?: string;
} = {}) {
  const uid = useId();
  const [status, setStatus] = useState('all');
  const [chapter, setChapter] = useState('all');
  const statuses = [...stakesByStatus().keys()].sort();
  const rows = stakes.filter(
    (s) =>
      (status === 'all' || s.status === status) &&
      (chapter === 'all' || s.chapter === chapter),
  );
  return (
    <div className="stakes-table" id={anchor}>
      <div className="lab-heading">
        <span className="eyebrow">TABLE 4 · THIRTY STAKES</span>
        <h3>Pre-registered observations that would kill a claim.</h3>
        <p>
          A <Term id="stake">stake</Term> names its adjudicator and its kill.
          Re-graded stakes are marked [RG]; the inverse-kill battery S7 is a set
          of running precision tests GUM must survive indefinitely.
        </p>
      </div>
      <div className="table-filters">
        <label htmlFor={uid + 'stake-status'}>
          Status
          <NativeSelect
            id={uid + 'stake-status'}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <NativeSelectOption value="all">All statuses</NativeSelectOption>
            {statuses.map((s) => (
              <NativeSelectOption key={s} value={s}>
                {s}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </label>
        <label htmlFor={uid + 'stake-chapter'}>
          Chapter
          <NativeSelect
            id={uid + 'stake-chapter'}
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
          >
            <NativeSelectOption value="all">All chapters</NativeSelectOption>
            {(Object.keys(chapterInfo) as ChapterId[])
              .filter((id) => stakes.some((s) => s.chapter === id))
              .map((id) => (
                <NativeSelectOption key={id} value={id}>
                  {chapterInfo[id].title}
                </NativeSelectOption>
              ))}
          </NativeSelect>
        </label>
        <output aria-live="polite">
          {rows.length} of {stakes.length}
        </output>
      </div>
      <div className="guide-table-wrap">
        <table className="guide-table ledger-table">
          <caption>
            Stakes, their adjudicators, kills and status at the revision of
            2026-09-28.
          </caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Stake</th>
              <th scope="col">Adjudicator</th>
              <th scope="col">Kill</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s) => (
              <tr key={s.id}>
                <th scope="row">
                  {s.id}
                  {s.regraded ? ' [RG]' : ''}
                </th>
                <td>
                  {s.stake} <a href={'#' + s.chapter}>↗</a>
                </td>
                <td>{s.adjudicator}</td>
                <td>{s.kill}</td>
                <td>{s.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ClosuresTable({
  anchor = 'closures',
}: {
  anchor?: string;
} = {}) {
  return (
    <div className="closures-table" id={anchor}>
      <div className="lab-heading">
        <span className="eyebrow">TABLE 3 · TWENTY-SIX POSED CLOSURES</span>
        <h3>Computations with named deliverables and a kill.</h3>
        <p>
          A <Term id="posed-closure">posed closure</Term> is what the paper
          owes. K-0 is the deepest; K-N is the normalisation audit this revision
          found necessary; the closures marked new follow from taking the
          material literally.
        </p>
      </div>
      <div className="guide-table-wrap">
        <table className="guide-table ledger-table">
          <caption>
            Posed closures, with K-EW-I, II and III counted separately.
          </caption>
          <thead>
            <tr>
              <th scope="col">Closure</th>
              <th scope="col">Content</th>
              <th scope="col">Deliverables</th>
              <th scope="col">Kill</th>
            </tr>
          </thead>
          <tbody>
            {closures.map((k) => (
              <tr key={k.id}>
                <th scope="row">
                  {k.id}
                  {k.isNew ? ' (new)' : ''}
                </th>
                <td>
                  {k.content} <a href={'#' + k.chapter}>↗</a>
                </td>
                <td>{k.deliverables}</td>
                <td>{k.kill}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AuditTable({
  anchor = 'audit',
}: {
  anchor?: string;
} = {}) {
  return (
    <div className="audit-table" id={anchor}>
      <div className="lab-heading">
        <span className="eyebrow">TABLE 2 · THE LEDGER UNDER DEFINITION 9</span>
        <h3>Non-circular? Discriminating?</h3>
        <p>
          {auditDefinition.nonCircular} {auditDefinition.discriminating} The
          pattern is the finding, and GUM states it about itself: its
          derived-form results are almost all non-circular and almost all
          non-discriminating; the discriminating content lives in the material’s
          unavoidable signatures.
        </p>
      </div>
      <div className="guide-table-wrap">
        <table className="guide-table ledger-table">
          <caption>Sixteen claims, graded and audited.</caption>
          <thead>
            <tr>
              <th scope="col">Claim (grade)</th>
              <th scope="col">Selected for the fact?</th>
              <th scope="col">Non-circular</th>
              <th scope="col">Discriminating</th>
              <th scope="col">Disposition</th>
            </tr>
          </thead>
          <tbody>
            {auditRows.map((row) => (
              <tr
                key={row.claim}
                className={row.discriminating ? 'is-discriminating' : ''}
              >
                <th scope="row">
                  {row.claim} [{row.grade}]
                </th>
                <td>{row.selectedForFact}</td>
                <td>{row.nonCircular}</td>
                <td>{row.discriminatingNote}</td>
                <td>
                  {row.disposition} <a href={'#' + row.chapter}>↗</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grade-grid">
        {grades.map((g) => (
          <div key={g.id}>
            <span className="eyebrow">[{g.id}]</span>
            <strong>{g.name}</strong>
            <p>{g.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CorrectionsList({
  anchor = 'corrections',
}: {
  anchor?: string;
} = {}) {
  return (
    <div className="corrections" id={anchor}>
      <div className="lab-heading">
        <span className="eyebrow">
          SECTION XI E · THE PAPER CORRECTS ITSELF
        </span>
        <h3>Fifteen corrections and two errata.</h3>
        <p>
          Formalising the previous draft exposed three places where it
          overstated or misstated its own predictions and several where its
          bookkeeping was inconsistent. A ledger of this kind makes it cheap to
          find and publish the places where the program was wrong about itself.
        </p>
      </div>
      <ol className="corrections-list">
        {corrections.map((c) => (
          <li key={c.title}>
            <strong>{c.title}.</strong> {c.text}
          </li>
        ))}
      </ol>
      <div className="errata-grid">
        {errata.map((e) => (
          <article key={e.id}>
            <span className="eyebrow">ERRATUM {e.id}</span>
            <strong>{e.title}</strong>
            <p>{e.text}</p>
          </article>
        ))}
      </div>
      <div className="crosslock-grid">
        {crossLocks.map((lock) => (
          <article key={lock.id}>
            <span className="eyebrow">{lock.id}</span>
            <strong>{lock.name}</strong>
            <p>{lock.text}</p>
          </article>
        ))}
      </div>
      <p className="source-note">
        <Term id="cross-lock">Cross-locks</Term> are the load-bearing welds that
        forbid local repairs: a kill on one side of a weld cannot be absorbed by
        adjusting the other.
      </p>
    </div>
  );
}

export function LedgerChapter({ depth }: { depth: string }) {
  return (
    <section className="section ledger-section" id="ledger">
      <div className="section-number">
        <span aria-hidden="true" />
        <span className="label-rule" />
        LEDGER, CLOSURES AND STAKES
      </div>
      <div className="section-heading">
        <h2>
          Not that GUM is right,
          <br />
          but that it can be shown <em>wrong at a printed cost.</em>
        </h2>
        <p className="section-lead">
          Every claim below carries a grade. Stakes are pre-registered
          observations that would kill a claim; inverse kills are running
          precision tests GUM must survive indefinitely; posed closures are
          computations with named deliverables and signed kills. Filter the
          stakes by status or by the chapter where their instrument lives.
        </p>
      </div>
      <StakesTable />
      <details
        className="unpack-panel"
        open={depth !== 'story' ? true : undefined}
      >
        <summary>
          Open the twenty-six posed closures <span>+</span>
        </summary>
        <ClosuresTable />
      </details>
      <details
        className="unpack-panel"
        open={depth !== 'story' ? true : undefined}
      >
        <summary>
          Open the audit table and the grades <span>+</span>
        </summary>
        <AuditTable />
      </details>
      <details
        className="unpack-panel"
        open={depth === 'math' ? true : undefined}
      >
        <summary>
          Open the corrections, errata and cross-locks <span>+</span>
        </summary>
        <CorrectionsList />
      </details>
    </section>
  );
}
