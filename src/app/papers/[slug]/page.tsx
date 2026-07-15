import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { loadPapers, loadProblems, getPaper } from "@/lib/registry";
import { site } from "@/config/site";
import { Badge } from "@/components/cards";
import MdxContent from "@/components/mdx-content";
import { manualPapers } from "@/generated/manualPapers";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const papers = await loadPapers();
  return papers.filter((p) => p.status === "public").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const paper = await getPaper(params.slug);
  if (!paper) return {};
  const description =
    paper.summary?.trim() || paper.role || site.description;
  return {
    title: paper.displayTitle,
    description,
    alternates: { canonical: `/papers/${paper.slug}` },
    openGraph: {
      type: "article",
      title: paper.displayTitle,
      description,
      url: `${site.url}/papers/${paper.slug}`,
    },
  };
}

export default async function PaperPage({ params }: { params: { slug: string } }) {
  const paper = await getPaper(params.slug);
  if (!paper || paper.status !== "public") notFound();

  const problems = await loadProblems();
  const supported = problems.filter((p) => paper.supports.includes(p.slug));
  const loader = (manualPapers as Record<string, (() => Promise<any>) | undefined>)[paper.slug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: paper.displayTitle,
    name: paper.displayTitle,
    author: {
      "@type": "Person",
      name: paper.metadata?.creators?.[0] ?? site.author.name,
    },
    datePublished: paper.date ?? undefined,
    version: paper.version ?? undefined,
    sameAs: [paper.doiUrl, paper.zenodoUrl].filter(Boolean),
    identifier: paper.doi ?? undefined,
    url: `${site.url}/papers/${paper.slug}`,
    isPartOf:
      paper.category === "canonical"
        ? { "@type": "CreativeWorkSeries", name: `${site.name} canonical stack` }
        : undefined,
    description: paper.summary?.trim() || paper.role || undefined,
  };

  const citation = `${paper.metadata?.creators?.join(", ") || site.author.name}. ${
    paper.date ? `(${paper.date.slice(0, 4)}). ` : ""
  }${paper.displayTitle}${paper.version ? ` (${paper.version})` : ""}.${
    paper.doi ? ` https://doi.org/${paper.doi}` : ""
  }`;

  return (
    <article className="mx-auto max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header>
        <div className="flex flex-wrap items-center gap-2">
          {paper.number ? (
            <span className="font-mono text-sm font-bold text-glow">
              Paper {String(paper.number).padStart(2, "0")}
            </span>
          ) : null}
          <Badge kind={paper.category} />
          {paper.version ? (
            <span className="font-mono text-xs text-faint">{paper.version}</span>
          ) : null}
          {paper.date ? (
            <time dateTime={paper.date} className="font-mono text-xs text-faint">
              {paper.date}
            </time>
          ) : null}
        </div>

        <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
          {paper.displayTitle}
        </h1>
        {paper.subtitle ? (
          <p className="mt-3 text-lg leading-relaxed text-mute">{paper.subtitle}</p>
        ) : null}

        {paper.category === "superseded" ? (
          <aside className="mt-6 rounded-xl border border-[hsl(var(--amber)/0.35)] bg-[hsl(var(--amber)/0.06)] px-5 py-4 text-sm leading-relaxed text-fg/90">
            <p className="m-0 mb-1 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-amberc">
              Superseded canonical version
            </p>
            This record belongs to the June 2026 six-paper canonical stack, which was
            replaced on 2026-07-15 by the current seven-paper canonical sequence. It is
            preserved as publication history; it is not current authority, and its
            architecture is not carried forward.{" "}
            {paper.supersededBy ? (
              <>
                See the current sequence:{" "}
                <Link
                  href={`/papers/${paper.supersededBy}`}
                  className="font-medium text-glow hover:text-glow-strong"
                >
                  current canonical paper →
                </Link>
              </>
            ) : (
              <>
                See the{" "}
                <Link href="/papers" className="font-medium text-glow hover:text-glow-strong">
                  current canonical sequence →
                </Link>
              </>
            )}
          </aside>
        ) : null}

        {paper.category === "historical" ? (
          <aside className="mt-6 rounded-xl border border-[hsl(var(--amber)/0.35)] bg-[hsl(var(--amber)/0.06)] px-5 py-4 text-sm leading-relaxed text-fg/90">
            <p className="m-0 mb-1 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-amberc">
              Historical record
            </p>
            This paper belongs to the earlier Everything Equation / Tier-0 era of the
            programme. It is retained as historical background and development trace. It
            is superseded as controlling public authority by the canonical Shadow Theory
            sequence (Papers 1–7).
          </aside>
        ) : null}

        {/* Links */}
        <div className="mt-6 flex flex-wrap gap-3">
          {paper.doiUrl ? (
            <a
              href={paper.doiUrl}
              rel="noopener"
              className="rounded-lg bg-[hsl(var(--accent))] px-4 py-2 text-sm font-semibold text-[hsl(var(--background))] transition hover:bg-[hsl(var(--accent-strong))]"
            >
              DOI: {paper.doi}
            </a>
          ) : null}
          {paper.zenodoUrl ? (
            <a
              href={paper.zenodoUrl}
              rel="noopener"
              className="rounded-lg border border-edge-strong px-4 py-2 text-sm font-semibold text-fg transition hover:border-[hsl(var(--accent)/0.5)] hover:text-glow-strong"
            >
              View on Zenodo
            </a>
          ) : null}
          {!paper.doiUrl && !paper.zenodoUrl && paper.category === "canonical" ? (
            <p className="rounded-lg border border-edge px-4 py-2 text-sm text-mute">
              DOI and Zenodo record pending publication — this page will link them once
              the record ID is added to <code className="font-mono">content/papers.yaml</code>.
            </p>
          ) : null}
        </div>
      </header>

      {/* Role */}
      {paper.role ? (
        <section className="card-surface mt-8 border-l-4 border-l-[hsl(var(--accent))] px-5 py-4">
          <p className="m-0 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-glow">
            Authority role
          </p>
          <p className="mt-2 text-[0.97rem] leading-relaxed text-fg/90">{paper.role}</p>
        </section>
      ) : null}

      {/* Summary */}
      {paper.summary ? (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Summary</h2>
          <p className="mt-3 leading-relaxed text-fg/90">{paper.summary.trim()}</p>
        </section>
      ) : null}

      {/* Zenodo abstract for records that have one and no local summary */}
      {!paper.summary && paper.metadata?.description ? (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Abstract (from Zenodo)</h2>
          <div
            className="prose mt-3 text-fg/90"
            dangerouslySetInnerHTML={{ __html: paper.metadata.description }}
          />
        </section>
      ) : null}

      {/* Manual notes */}
      {loader ? (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Notes</h2>
          <MdxContent loader={loader} />
        </section>
      ) : null}

      {/* Supported problems */}
      {supported.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Related open problems</h2>
          <ul className="mt-3 space-y-2">
            {supported.map((p) => (
              <li key={p.slug}>
                <Link href={`/problems/${p.slug}`} className="text-glow hover:text-glow-strong">
                  {p.title} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Citation */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Cite this paper</h2>
        <pre className="mt-3 overflow-auto rounded-lg border border-edge bg-surface p-4 font-mono text-xs leading-relaxed text-fg/90">
          {citation}
        </pre>
      </section>

      <nav className="mt-12 border-t border-edge pt-6">
        <Link href="/papers" className="text-sm font-medium text-glow hover:text-glow-strong">
          ← All papers
        </Link>
      </nav>
    </article>
  );
}
