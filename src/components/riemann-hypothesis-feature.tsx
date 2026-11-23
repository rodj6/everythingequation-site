import Link from "next/link";
import { rhPublication } from "@/lib/riemann-hypothesis";

export default function RiemannHypothesisFeature() {
  return (
    <section
      aria-labelledby="riemann-hypothesis-feature"
      className="card-surface relative overflow-hidden border border-[hsl(var(--accent)/0.35)] px-6 py-8 sm:px-10 sm:py-10"
    >
      <p className="section-label">Independent mathematics · Repaired referee edition</p>
      <h2 id="riemann-hypothesis-feature" className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
        The Riemann Hypothesis argument in Lean, in human-readable form
      </h2>
      <p className="mt-5 max-w-3xl leading-relaxed text-mute">
        Follow the argument from Dirichlet character zero-freeness through the arithmetic and
        geometric inputs to the final assembly for ordinary RH. Jeremy Rodgers reconstructs
        the supplied Lean argument of Levent Alpöge and Claude for referee checking.
      </p>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mute">
        Version 2 extends the referee manuscript to 1,061 pages and audits the literature inputs
        field by field. The reader includes the printed notation alongside provisional transcriptions.
      </p>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
        <Link href={rhPublication.route} className="rounded-lg bg-[hsl(var(--accent))] px-4 py-2 text-sm font-semibold text-ink transition hover:bg-[hsl(var(--accent-strong))]">
          Read Version 2 →
        </Link>
        <Link href={rhPublication.citationRoute} className="self-center text-sm font-medium text-glow hover:text-glow-strong">
          Citation and provenance →
        </Link>
      </div>
    </section>
  );
}
