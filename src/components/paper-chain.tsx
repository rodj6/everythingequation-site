/**
 * PAPER CHAIN — the seven-paper canonical sequence, rendered as a semantic
 * ordered list. Papers 1–6 form the mathematical source–readout foundation
 * (a responsive grid); Paper 7, the physical-witness layer, gets a
 * distinguished full-width card. Fully server-rendered.
 */
import Link from "next/link";
import type { LoadedPaper } from "@/lib/registry";

const stageWord: Record<number, string> = {
  1: "Non-equivalence",
  2: "Target obstruction",
  3: "Minimal completion",
  4: "Geometric realization",
  5: "Projected dynamics",
  6: "Identifiability",
  7: "Physical witness",
};

const stageLine: Record<number, string> = {
  1: "An exact readout quotient need not be equivalent to its source: descent and equivariant reconstruction obstructions.",
  2: "Lost structure obstructs exactly the questions whose correct answers vary within a readout fiber — and every repair must separate those states.",
  3: "The coarsest extension on which a nominated family of invariant source relations becomes well defined: terminal, unique, selector-free.",
  4: "When abstract completions are realized by genuine geometry — orbit spaces, invariant relations, and derived variational response.",
  5: "When observable dynamics close autonomously, and the exact price when they do not: memory, initial-state terms, minimal dynamical completion.",
  6: "The boundary theorem: an essential non-gauge fiber distinction makes a readout a non-source projection, relative to that model and target.",
  7: "The abstract architecture instantiated in Randall–Sundrum (RS2) gravity: same brane readout, different futures — with the interpretation boundary proved, not assumed.",
};

function stageOf(p: LoadedPaper, i: number): number {
  return p.number ?? i + 1;
}

export default function PaperChain({ papers }: { papers: LoadedPaper[] }) {
  const witness = papers.find((p) => p.number === 7);
  const foundation = papers.filter((p) => p !== witness);

  return (
    <div>
      <ol
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Papers 1–6: the mathematical foundation"
      >
        {foundation.map((p, i) => (
          <li key={p.slug} className="relative">
            <Link
              href={`/papers/${p.slug}`}
              className="card-surface card-surface-hover group flex h-full flex-col p-5"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-2xl font-bold text-glow/90">
                  {String(stageOf(p, i)).padStart(2, "0")}
                </span>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-vio">
                  {stageWord[stageOf(p, i)]}
                </span>
              </div>
              <h3 className="mt-3 text-[0.98rem] font-semibold leading-snug text-fg group-hover:text-glow-strong">
                {p.displayTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">
                {stageLine[stageOf(p, i)]}
              </p>
              {i < foundation.length - 1 ? (
                <span aria-hidden="true" className="mt-4 block font-mono text-xs text-faint">
                  ↓ hands off to Paper {String(stageOf(p, i) + 1).padStart(2, "0")}
                </span>
              ) : (
                <span aria-hidden="true" className="mt-4 block font-mono text-xs text-faint">
                  ↓ instantiated by Paper 07
                </span>
              )}
            </Link>
          </li>
        ))}
      </ol>

      {witness ? (
        <Link
          href={`/papers/${witness.slug}`}
          className="card-surface card-surface-hover group mt-4 flex flex-col border-l-4 border-l-[hsl(var(--green))] p-5 sm:p-6"
          aria-label="Paper 7: the physical witness"
        >
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-2xl font-bold text-greenc">07</span>
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-greenc">
              {stageWord[7]}
            </span>
          </div>
          <h3 className="mt-3 text-[1.05rem] font-semibold leading-snug text-fg group-hover:text-glow-strong">
            {witness.displayTitle}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-mute">{stageLine[7]}</p>
          <span aria-hidden="true" className="mt-4 block font-mono text-xs text-greenc">
            ■ physical witness — model-relative, not an ontological proof
          </span>
        </Link>
      ) : null}
    </div>
  );
}
