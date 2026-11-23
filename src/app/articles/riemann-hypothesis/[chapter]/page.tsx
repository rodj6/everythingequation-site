import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RhCopyControls from "@/components/rh-copy-controls";
import { readRhChapter, rhChapters, rhChapterUrl, rhPublication as paper } from "@/lib/riemann-hypothesis";
import { site } from "@/config/site";
import { jsonLdText } from "@/lib/json-ld";

export const dynamic = "force-static";
export const dynamicParams = false;

type Params = { params: Promise<{ chapter: string }> };

export function generateStaticParams() {
  return rhChapters.map(chapter => ({ chapter: chapter.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { chapter: slug } = await params;
  const chapter = rhChapters.find(item => item.slug === slug);
  if (!chapter) return {};
  return {
    title: chapter.title + " | Riemann Hypothesis in Lean, Version 2",
    description: chapter.description,
    alternates: { canonical: rhChapterUrl(chapter.slug) },
  };
}

export default async function RhChapterPage({ params }: Params) {
  const { chapter: slug } = await params;
  const index = rhChapters.findIndex(chapter => chapter.slug === slug);
  const chapter = rhChapters[index];
  if (!chapter) notFound();

  const previous = rhChapters[index - 1];
  const next = rhChapters[index + 1];
  const subsections = chapter.level === 1
    ? rhChapters.filter(item => item.number.startsWith(chapter.number + "."))
    : [];
  const html = await readRhChapter(chapter);
  const pages = chapter.firstPage === chapter.lastPage
    ? `PDF page ${chapter.firstPage}`
    : `PDF pages ${chapter.firstPage}–${chapter.lastPage}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Chapter",
    name: chapter.title,
    position: index + 1,
    url: site.url + rhChapterUrl(chapter.slug),
    isPartOf: {
      "@type": "ScholarlyArticle",
      "@id": site.url + paper.citationRoute + "#publication",
      name: paper.title,
      url: site.url + paper.route,
      identifier: paper.doi,
      version: paper.version,
    },
  };

  return (
    <article className="rh-chapter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdText(schema) }} />
      <nav className="rh-breadcrumb" aria-label="Breadcrumb"><Link href="/articles">Articles</Link> / <Link href={paper.route}>Riemann Hypothesis</Link></nav>
      <header className="rh-chapter-header">
        <p className="rh-kicker">Version 2 · {chapter.number ? "Section " + chapter.number + " · " : ""}{pages}</p>
        <h1>{chapter.title}</h1>
        <div className="rh-actions">
          <Link href={paper.route + "#contents"}>Contents</Link>
          <Link href={paper.searchUrl}>Search</Link>
          <a href={paper.pdfUrl + "#page=" + chapter.firstPage}>Open at {pages.toLowerCase()}</a>
          <a href={paper.doiUrl}>Version 2 DOI</a>
        </div>
        <p className="rh-transcription-note">The notation transcription is provisional. Check it against the printed mathematics when citing or reusing a formula.</p>
      </header>
      <div id="rh-reading-body" className="rh-reading-body" dangerouslySetInnerHTML={{ __html: html }} />
      <RhCopyControls />
      {subsections.length > 0 && (
        <nav aria-label={"Subsections of Section " + chapter.number}>
          <h2>Subsections</h2>
          <ol className="rh-contents">
            {subsections.map(item => (
              <li key={item.slug}>
                <Link href={rhChapterUrl(item.slug)} prefetch={false}>
                  <span className="rh-number">{item.number} </span>{item.title}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      )}
      <nav className="rh-pagination" aria-label="Chapter navigation">
        {previous ? <Link rel="prev" href={rhChapterUrl(previous.slug)}><small>Previous</small>{previous.title}</Link> : <Link href={paper.route}>Reading entrance</Link>}
        {next ? <Link rel="next" href={rhChapterUrl(next.slug)}><small>Next</small>{next.title}</Link> : <Link href={paper.route + "#contents"}>Contents</Link>}
      </nav>
    </article>
  );
}
