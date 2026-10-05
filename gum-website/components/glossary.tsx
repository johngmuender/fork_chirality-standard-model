'use client';
import { useState, type ReactNode } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { glossary, glossaryEntry } from '@/lib/gum-glossary';

/** A dotted glossary term: hover, focus or tap to read its meaning in place. */
export function Term({
  children,
  id,
  meaning,
}: {
  children: ReactNode;
  id?: string;
  meaning?: string;
}) {
  const [open, setOpen] = useState(false);
  const text = meaning ?? (id ? glossaryEntry(id).meaning : '');
  return (
    <TooltipProvider delay={100}>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger
          className="glossary-term"
          onClick={() => setOpen(!open)}
        >
          {children}
        </TooltipTrigger>
        <TooltipContent className="glossary-popup">{text}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

/** The full glossary, folded, with one anchor per entry. */
export function Glossary({ open = false }: { open?: boolean }) {
  return (
    <details
      className="unpack-panel glossary-panel"
      id="glossary"
      open={open ? true : undefined}
    >
      <summary>
        Open the glossary · {glossary.length} terms <span>+</span>
      </summary>
      <dl className="glossary-list">
        {glossary.map((entry) => (
          <div key={entry.id} id={'term-' + entry.id}>
            <dt>{entry.term}</dt>
            <dd>{entry.meaning}</dd>
          </div>
        ))}
      </dl>
    </details>
  );
}
