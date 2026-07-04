import type { Metadata } from "next";
import { loadPapers } from "@/lib/registry";
import { PaperCard } from "@/components/cards";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Papers",
  description:
    "The canonical six-paper Shadow Theory stack, branch papers, and the historical Everything Equation era archive, with DOIs and Zenodo records where available.",
  alternates: { canonical: "/papers" },
};

export default async function PapersPage() {
  const papers = (await loadPapers()).filter((p) => p.status === "public");
  const canonical = papers
    .filter((p) => p.category === "canonical")
    .sort((a, b) => (a.number ?? 99) - (b.number ?? 99));
  const branch = papers.filter((p) => p.category === "branch");
  const historical = papers.filter((p) => p.category === "historical");

  return (
    <div className="space-y-16">
      <header className="max-w-3xl">
        <p className="section-label">Papers</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Paper index</h1>
        <p className="mt-4 text-lg leading-relaxed text-mute">
          The six canonical papers are the controlling public authority of Shadow Theory.
          Branch papers carry statused branch results. Historical papers are the earlier
          Everything Equation / Tier-0 era archive — retained for the record, superseded
          as authority.
        </p>
      </header>

      <section aria-labelledby="canonical-heading">
        <h2 id="canonical-heading" className="text-2xl font-bold tracking-tight">
          Canonical stack
        </h2>
        <p className="mt-1 text-sm text-mute">
          Papers 1–6 · read in order · the public loading manifest defines their authority.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {canonical.map((p) => (
            <PaperCard key={p.slug} paper={p} />
          ))}
        </div>
      </section>

      {branch.length > 0 ? (
        <section aria-labelledby="branch-heading">
          <h2 id="branch-heading" className="text-2xl font-bold tracking-tight">
            Branch papers
          </h2>
          <p className="mt-1 text-sm text-mute">
            Statused branch results routed through the public packet discipline.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {branch.map((p) => (
              <PaperCard key={p.slug} paper={p} />
            ))}
          </div>
        </section>
      ) : null}

      <section aria-labelledby="historical-heading">
        <h2 id="historical-heading" className="text-2xl font-bold tracking-tight">
          Historical archive
        </h2>
        <p className="mt-1 max-w-3xl text-sm leading-relaxed text-mute">
          {historical.length} records from the earlier programme era. These remain
          publicly available on Zenodo, but they are historical background and branch
          development traces — where they conflict with Papers 1–6, the six-paper stack
          controls.
        </p>
        <ul className="mt-6 divide-y divide-edge overflow-hidden rounded-xl border border-edge">
          {historical.map((p) => (
            <li key={p.slug}>
              <a
                href={`/papers/${p.slug}`}
                className="flex flex-col gap-1 px-5 py-4 transition hover:bg-raised sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-sm leading-snug text-fg/90">
                  {p.displayTitle}
                </span>
                <span className="shrink-0 font-mono text-xs text-faint">
                  {p.doi ? `DOI ${p.doi}` : p.zenodoId ? `Zenodo ${p.zenodoId}` : ""}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
