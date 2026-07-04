/**
 * PAPER CHAIN — the six-stage canonical pipeline, rendered as a semantic
 * ordered list. Fully server-rendered and responsive: a vertical connected
 * chain on phones, a three-column grid on larger screens.
 */
import Link from "next/link";
import type { LoadedPaper } from "@/lib/registry";

const stageWord: Record<number, string> = {
  1: "Readout",
  2: "Obstruction",
  3: "Canonicality",
  4: "Compilation",
  5: "Runtime",
  6: "Synthesis",
};

const stageLine: Record<number, string> = {
  1: "Exact readout is not realization equivalence.",
  2: "Loss obstructs only under certified active closure failure.",
  3: "Canonical completion is certified initiality — conditional, not automatic.",
  4: "Completion becomes a public artifact only through statused down-compilation.",
  5: "Claims are licensed by route, status, residue, and audit calculus.",
  6: "The stack composes into a scoped closure-fixed law-packet discipline.",
};

export default function PaperChain({ papers }: { papers: LoadedPaper[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="The six-paper canonical chain">
      {papers.map((p, i) => (
        <li key={p.slug} className="relative">
          <Link
            href={`/papers/${p.slug}`}
            className="card-surface card-surface-hover group flex h-full flex-col p-5"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-2xl font-bold text-glow/90">
                {String(p.number ?? i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-vio">
                {stageWord[p.number ?? i + 1]}
              </span>
            </div>
            <h3 className="mt-3 text-[0.98rem] font-semibold leading-snug text-fg group-hover:text-glow-strong">
              {p.displayTitle}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-mute">
              {stageLine[p.number ?? i + 1]}
            </p>
            {i < papers.length - 1 ? (
              <span
                aria-hidden="true"
                className="mt-4 block font-mono text-xs text-faint"
              >
                ↓ hands off to Paper {String((p.number ?? i + 1) + 1).padStart(2, "0")}
              </span>
            ) : (
              <span aria-hidden="true" className="mt-4 block font-mono text-xs text-greenc">
                ■ capstone
              </span>
            )}
          </Link>
        </li>
      ))}
    </ol>
  );
}
