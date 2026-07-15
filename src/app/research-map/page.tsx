import type { Metadata } from "next";
import Link from "next/link";
import { getCanonicalPapers, loadProblems } from "@/lib/registry";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Research Map",
  description:
    "The structure of the Shadow Theory programme: the seven-paper canonical sequence from source–readout non-equivalence to the Randall–Sundrum physical witness, with open problems as downstream branch targets.",
  alternates: { canonical: "/research-map" },
};

const stageWord: Record<number, string> = {
  1: "Non-equivalence",
  2: "Target obstruction",
  3: "Minimal completion",
  4: "Geometric realization",
  5: "Projected dynamics",
  6: "Identifiability",
  7: "Physical witness",
};

/**
 * The real handoff structure, as the papers themselves state it. The sequence
 * reads in order, but the dependencies are not a single assembly line:
 * Papers 1–3 are the abstract completion core; Paper 4 realizes it
 * geometrically; Paper 5 is the (self-contained) dynamical layer; Paper 6
 * integrates 1–5 into a boundary theorem; Paper 7 instantiates the whole
 * architecture physically.
 */
const handoff: Record<number, string> = {
  1: "Hands the descent criterion to Paper 2 (answer maps) and Paper 3 (relation families); its equivariant obstruction returns in Paper 6's reconstruction corollary.",
  2: "Supplies the single-target completion and the flat-U(1) spectral rigidity input that Paper 3 generalizes to families of relations.",
  3: "Emits the canonical minimal completion that Paper 4 realizes geometrically; its target-relative minimality is the phenomenon Papers 5 and 6 meet again dynamically.",
  4: "Defers all dynamical questions — closure, retention, memory — to Paper 5; its orbit-space architecture is one of Paper 6's three standard specializations.",
  5: "Provides the closure criterion, exact memory equation, and minimal dynamical completion that Paper 6 restates as its projected-law dichotomy and Paper 7 instantiates in RS2.",
  6: "Proves the boundary theorem the sequence needs a witness for — and states exactly what a physical model must supply: a source domain, an equivalence, a readout, and a witness pair.",
  7: "Supplies that witness in RS2 gravity, and proves the operational-equivalence boundary that caps the whole sequence's interpretation.",
};

export default async function ResearchMapPage() {
  const canonical = await getCanonicalPapers();
  const problems = (await loadProblems()).filter(
    (p) => p.status === "public" && p.programme !== "legacy"
  );
  const featured = problems.filter((p) => p.programme === "featured");
  const additional = problems.filter((p) => p.programme === "additional");

  return (
    <div className="space-y-16">
      <header className="max-w-3xl">
        <p className="section-label">Research map</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          The shape of the programme
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-mute">
          Seven canonical papers, read in order: six build the source–readout
          mathematics, and the seventh realizes it in a concrete physical model. A
          machine-readable version of this map is published at{" "}
          <a href="/graph.json" className="text-glow hover:text-glow-strong">
            /graph.json
          </a>
          .
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-faint">
          The dependencies are not a single assembly line. Papers 1–3 form the abstract
          completion core; Paper 4 realizes it geometrically; Paper 5 is the dynamical
          layer (deliberately self-contained); Paper 6 integrates everything into a
          model-relative boundary theorem; Paper 7 is the physical witness that theorem
          calls for.
        </p>
      </header>

      {/* Sequence */}
      <section aria-labelledby="pipeline-heading">
        <h2 id="pipeline-heading" className="text-2xl font-bold tracking-tight">
          The canonical sequence
        </h2>
        <ol className="relative mt-8 space-y-0 border-l border-edge-strong pl-6 sm:pl-8">
          {canonical.map((p, i) => {
            const n = p.number ?? i + 1;
            const isWitness = n === 7;
            return (
              <li key={p.slug} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className={
                    "absolute -left-[31px] top-1 flex h-5 w-5 items-center justify-center rounded-full border sm:-left-[39px] " +
                    (isWitness
                      ? "border-[hsl(var(--green)/0.6)] bg-[hsl(var(--green)/0.15)]"
                      : "border-[hsl(var(--accent)/0.6)] bg-[hsl(var(--accent)/0.12)]")
                  }
                >
                  <span
                    className={
                      "h-1.5 w-1.5 rounded-full " +
                      (isWitness ? "bg-[hsl(var(--green))]" : "bg-[hsl(var(--accent))]")
                    }
                  />
                </span>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-vio">
                  {isWitness ? "Witness layer" : `Stage ${n}`} · {stageWord[n]}
                </p>
                <h3 className="mt-1 text-lg font-semibold leading-snug">
                  <Link href={`/papers/${p.slug}`} className="hover:text-glow-strong">
                    {p.displayTitle}
                  </Link>
                </h3>
                {p.role ? (
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-mute">{p.role}</p>
                ) : null}
                <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-faint">
                  {handoff[n]}
                </p>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Branches */}
      <section aria-labelledby="branches-heading">
        <h2 id="branches-heading" className="text-2xl font-bold tracking-tight">
          Downstream branch targets
        </h2>
        <p className="mt-2 max-w-3xl text-mute">
          Open problems attach downstream of the seven-paper foundation as branch
          targets. Each is a research target with a declared claim boundary — none is
          presented as solved, and none is public framework content without its own
          public paper or record stating its assumptions, support, and limitations.
        </p>

        <div className="card-surface mt-8 p-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-greenc">
            The seven-paper foundation
          </p>
          <div aria-hidden="true" className="my-4 ml-3 h-6 w-px bg-edge-strong" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/problems/${p.slug}`}
                className="rounded-lg border border-[hsl(var(--amber)/0.3)] bg-[hsl(var(--amber)/0.05)] px-4 py-3 text-sm font-medium text-fg transition hover:border-[hsl(var(--amber)/0.6)]"
              >
                {p.title}
                <span className="mt-1 block font-mono text-[0.65rem] uppercase tracking-wider text-faint">
                  branch target · open
                </span>
              </Link>
            ))}
          </div>
          {additional.length > 0 ? (
            <>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-faint">
                Further targets
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {additional.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/problems/${p.slug}`}
                      className="inline-block rounded-full border border-edge px-3 py-1 text-xs text-mute transition hover:border-edge-strong hover:text-fg"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </section>

      {/* Historical layer */}
      <section aria-labelledby="history-heading" className="max-w-3xl">
        <h2 id="history-heading" className="text-2xl font-bold tracking-tight">
          Beneath the map: superseded and historical layers
        </h2>
        <p className="mt-3 leading-relaxed text-mute">
          The current seven-paper sequence (July 2026) replaced an earlier six-paper
          canonical stack (June 2026), whose records remain published and are listed in
          the{" "}
          <Link href="/papers" className="text-glow hover:text-glow-strong">
            paper index
          </Link>{" "}
          as superseded canonical versions. Beneath both lies the original Everything
          Equation archive, retained as historical background. Where any superseded or
          historical material conflicts with Papers 1–7, the current canonical sequence
          controls.
        </p>
      </section>
    </div>
  );
}
