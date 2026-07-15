import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { monographImports } from "@/generated/monograph";
import {
  getAdjacentItems,
  getMonographItem,
  listMonographItems,
  monographParts,
} from "@/lib/monograph";
import MdxContent from "@/components/mdx-content";

export const dynamic = "force-static";
export const dynamicParams = false;

const m = site.monograph;

export async function generateStaticParams() {
  return listMonographItems().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const item = getMonographItem(params.slug);
  if (!item) return {};
  const prefix = item.label ? `${item.label}: ` : "";
  return {
    title: `${prefix}${item.title} · The Monograph`,
    description: `${prefix}${item.title}. From “${m.title}” (Version ${m.version}, ${m.published}, doi:${m.doi}). ${item.description}`.slice(0, 300),
    alternates: { canonical: `/monograph/${item.slug}` },
    openGraph: {
      type: "article",
      title: `${prefix}${item.title}`,
      description: item.description,
      url: `${site.url}/monograph/${item.slug}`,
    },
  };
}

export default async function MonographItemPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = getMonographItem(params.slug);
  if (!item) notFound();

  const { prev, next } = getAdjacentItems(item.slug);
  const part = monographParts.find((p) => p.number === item.part);
  const loader = (
    monographImports as Record<string, (() => Promise<any>) | undefined>
  )[item.slug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Chapter",
    name: item.label ? `${item.label}: ${item.title}` : item.title,
    position: item.order,
    url: `${site.url}/monograph/${item.slug}`,
    author: { "@type": "Person", name: site.author.name },
    inLanguage: "en",
    license: m.licenseUrl,
    isPartOf: {
      "@type": "Book",
      name: m.title,
      bookEdition: `Version ${m.version}`,
      identifier: `https://doi.org/${m.doi}`,
      url: `${site.url}/monograph`,
      author: { "@type": "Person", name: site.author.name },
    },
  };

  return (
    <article className="mx-auto max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-[0.7rem]">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono uppercase tracking-wider text-faint">
          <li>
            <Link href="/monograph" className="text-glow hover:text-glow-strong">
              The Monograph
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          {part ? (
            <>
              <li>
                Part {part.numeral} · {part.title}
              </li>
              <li aria-hidden="true">/</li>
            </>
          ) : null}
          <li aria-current="page" className="text-mute">
            {item.label || item.title}
          </li>
        </ol>
      </nav>

      <header className="mt-4">
        {item.label ? (
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-glow">
            {item.label}
          </p>
        ) : null}
        <h1 className="mt-2 text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
          {item.title}
        </h1>
        <p className="mt-3 text-xs leading-relaxed text-faint">
          From{" "}
          <Link href="/monograph" className="underline hover:text-mute">
            {m.title}
          </Link>
          , Version {m.version} ({m.published}) ·{" "}
          <a href={m.doiUrl} className="underline hover:text-mute">
            doi:{m.doi}
          </a>
        </p>
        <div className="mt-5" aria-label={`Reading position ${item.order} of ${listMonographItems().length}`}>
          <div className="mb-2 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.14em] text-faint">
            <span>Reading position</span>
            <span>{item.order} / {listMonographItems().length}</span>
          </div>
          <progress
            className="monograph-progress h-1.5 w-full overflow-hidden rounded-full"
            max={listMonographItems().length}
            value={item.order}
          >
            {item.order} of {listMonographItems().length}
          </progress>
        </div>
      </header>

      {/* In-chapter contents */}
      {item.sections.length > 1 ? (
        <nav
          aria-label={`Sections of ${item.label || item.title}`}
          className="card-surface mt-6 px-5 py-4"
        >
          <p className="section-label">In this {item.kind === "appendix" ? "appendix" : "chapter"}</p>
          <ol className="mt-3 grid gap-x-6 gap-y-1 text-[0.85rem] leading-snug text-mute sm:grid-cols-2">
            {item.sections.map((s) => (
              <li key={s.anchor}>
                <a href={`#${s.anchor}`} className="hover:text-fg">
                  <span className="font-mono text-faint">{s.number}</span> {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}

      <div className="mt-6 border-t border-edge pt-2">
        <MdxContent loader={loader} />
      </div>

      {/* Prev / contents / next */}
      <nav
        aria-label="Monograph navigation"
        className="mt-14 grid gap-3 border-t border-edge pt-6 sm:grid-cols-3"
      >
        <div>
          {prev ? (
            <Link
              href={`/monograph/${prev.slug}`}
              className="card-surface card-surface-hover group block h-full px-4 py-3 text-sm"
              rel="prev"
            >
              <span className="font-mono text-[0.65rem] uppercase tracking-wider text-faint">
                ← Previous · {prev.label || "Contents"}
              </span>
              <span className="mt-1 block font-medium text-mute group-hover:text-glow-strong">
                {prev.title}
              </span>
            </Link>
          ) : null}
        </div>
        <div className="text-sm sm:text-center">
          <Link href="/monograph" className="card-surface card-surface-hover flex h-full items-center justify-center px-4 py-3 font-medium text-glow hover:text-glow-strong">
            Table of contents
          </Link>
        </div>
        <div className="sm:text-right">
          {next ? (
            <Link
              href={`/monograph/${next.slug}`}
              className="card-surface card-surface-hover group block h-full px-4 py-3 text-sm"
              rel="next"
            >
              <span className="font-mono text-[0.65rem] uppercase tracking-wider text-faint">
                Next · {next.label || "Bibliography"} →
              </span>
              <span className="mt-1 block font-medium text-mute group-hover:text-glow-strong">
                {next.title}
              </span>
            </Link>
          ) : null}
        </div>
      </nav>
    </article>
  );
}
