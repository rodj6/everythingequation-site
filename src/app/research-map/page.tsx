import type { Metadata } from "next";
import Link from "next/link";
import { getCanonicalPapers, loadProblems } from "@/lib/registry";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Research Map",
  description:
    "The structure of the Shadow Theory programme: the six-paper pipeline from bounded readouts to statused artifacts, with open problems as downstream branch targets.",
  alternates: { canonical: "/research-map" },
};

const stageWord: Record<number, string> = {
  1: "Readout",
  2: "Obstruction",
  3: "Canonicality",
  4: "Compilation",
  5: "Runtime",
  6: "Synthesis",
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
          One pipeline, six certified stages, and a set of open problems branching
          downstream from the synthesis layer. A machine-readable version of this map is
          published at{" "}
          <a href="/graph.json" className="text-glow hover:text-glow-strong">
            /graph.json
          </a>
          .
        </p>
      </header>

      {/* Pipeline */}
      <section aria-labelledby="pipeline-heading">
        <h2 id="pipeline-heading" className="text-2xl font-bold tracking-tight">
          The canonical pipeline
        </h2>
        <ol className="relative mt-8 space-y-0 border-l border-edge-strong pl-6 sm:pl-8">
          {canonical.map((p, i) => (
            <li key={p.slug} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className={
                  "absolute -left-[31px] top-1 flex h-5 w-5 items-center justify-center rounded-full border sm:-left-[39px] " +
                  (i === canonical.length - 1
                    ? "border-[hsl(var(--green)/0.6)] bg-[hsl(var(--green)/0.15)]"
                    : "border-[hsl(var(--accent)/0.6)] bg-[hsl(var(--accent)/0.12)]")
                }
              >
                <span
                  className={
                    "h-1.5 w-1.5 rounded-full " +
                    (i === canonical.length - 1
                      ? "bg-[hsl(var(--green))]"
                      : "bg-[hsl(var(--accent))]")
                  }
                />
              </span>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-vio">
                Stage {p.number} · {stageWord[p.number ?? i + 1]}
              </p>
              <h3 className="mt-1 text-lg font-semibold leading-snug">
                <Link href={`/papers/${p.slug}`} className="hover:text-glow-strong">
                  {p.displayTitle}
                </Link>
              </h3>
              {p.role ? (
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-mute">{p.role}</p>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      {/* Branches */}
      <section aria-labelledby="branches-heading">
        <h2 id="branches-heading" className="text-2xl font-bold tracking-tight">
          Downstream branch targets
        </h2>
        <p className="mt-2 max-w-3xl text-mute">
          Open problems attach to the synthesis layer as branch targets. Each requires
          its own branch packet — route, status, residues, obligations, and claim
          boundary — before any result becomes public framework content.
        </p>

        <div className="card-surface mt-8 p-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-greenc">
            Synthesis layer (Paper 06)
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
                  branch target · packet required
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
          Beneath the map: the historical layer
        </h2>
        <p className="mt-3 leading-relaxed text-mute">
          The programme began as the Everything Equation project, which produced a large
          archive of exploratory papers. That archive remains available in the{" "}
          <Link href="/papers" className="text-glow hover:text-glow-strong">
            paper index
          </Link>{" "}
          as historical background. Where any historical material conflicts with Papers
          1–6, the canonical stack controls.
        </p>
      </section>
    </div>
  );
}
