import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import type { ReadingEdition } from "@/config/new-reading-editions";
import { site } from "@/config/site";
import { jsonLdText } from "@/lib/json-ld";
import {
  readEditionChapter,
  readingChapterUrl,
  type ReadingChapter,
  type ReadingParams,
} from "@/lib/reading-editions";
import RhCopyControls from "@/components/rh-copy-controls";
import RhSearch from "@/components/rh-search";

type EntryLink = { number?: string; slug?: string; title: string; anchor?: string };

function chapterLabel(chapter: ReadingChapter) {
  return /^\d/.test(chapter.number) ? "Section " + chapter.number : chapter.number ? "Appendix " + chapter.number : "";
}

function ContentsLink({ paper, chapter }: { paper: ReadingEdition; chapter: ReadingChapter }) {
  return (
    <Link href={readingChapterUrl(paper, chapter)} prefetch={false}>
      {chapter.number && <span className="rh-number">{chapter.number} </span>}
      {chapter.title}
    </Link>
  );
}

function Contents({ paper }: { paper: ReadingEdition }) {
  const groups: { head: ReadingChapter; children: ReadingChapter[] }[] = [];
  for (const chapter of paper.chapters) {
    const last = groups.at(-1);
    if (chapter.level > 1 && last) last.children.push(chapter);
    else groups.push({ head: chapter, children: [] });
  }
  return (
    <ol className="rh-contents">
      {groups.map(({ head, children }) => (
        <li key={head.slug}>
          <ContentsLink paper={paper} chapter={head} />
          {children.length > 0 && (
            <details>
              <summary>Subsections and continuations</summary>
              <ol>
                {children.map(child => (
                  <li className={child.level >= 3 ? "rh-subsection" : undefined} key={child.slug}>
                    <ContentsLink paper={paper} chapter={child} />
                  </li>
                ))}
              </ol>
            </details>
          )}
        </li>
      ))}
    </ol>
  );
}

function Breadcrumb({ paper, current }: { paper: ReadingEdition; current?: string }) {
  const gravity = paper.route.startsWith("/source-readout/");
  return (
    <nav className="rh-breadcrumb" aria-label="Breadcrumb">
      {gravity ? <Link href="/source-readout/gravity-and-holography">Gravity and holography</Link> : <Link href="/articles">Independent mathematics</Link>}
      {" / "}
      {current ? <Link href={paper.route}>{paper.headline}</Link> : paper.headline}
      {current && <>{" / "}{current}</>}
    </nav>
  );
}

export function ReadingEntrance({ paper, links, children }: {
  paper: ReadingEdition;
  links: EntryLink[];
  children: ReactNode;
}) {
  const firstChapter = paper.chapters[0];
  const schema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "@id": site.url + paper.citationRoute + "#publication",
    name: paper.citationTitle ?? paper.title,
    alternateName: paper.zenodoTitle ?? (paper.citationTitle ? paper.title : undefined),
    author: { "@type": "Person", name: paper.author },
    datePublished: paper.publicationDate,
    identifier: paper.doi,
    sameAs: paper.doiUrl,
    url: site.url + paper.route,
    isAccessibleForFree: true,
    hasPart: paper.chapters.map(chapter => ({
      "@type": "Chapter",
      name: chapter.title,
      url: site.url + readingChapterUrl(paper, chapter),
    })),
  };
  const manuscriptDate = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: paper.date.length > 7 ? "numeric" : undefined,
    timeZone: "UTC",
  }).format(new Date(paper.date));
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdText(schema) }} />
      <Breadcrumb paper={paper} />
      <header className="rh-hero">
        <p className="rh-kicker">{paper.route.startsWith("/source-readout/") ? "Gravity and holography" : "Independent mathematics"}</p>
        <h1>{paper.headline}</h1>
        <p className="rh-lead">{paper.description}</p>
        <p className="rh-byline">{paper.author} · <time dateTime={paper.date}>{manuscriptDate}</time> · {paper.pages.toLocaleString("en-US")} PDF pages</p>
        <div className="rh-actions">
          <Link className="rh-primary" href={readingChapterUrl(paper, firstChapter)}>Start reading</Link>
          <Link href={paper.searchUrl}>Search the paper</Link>
          <Link href={paper.citationRoute}>Citation record</Link>
          <a href={paper.doiUrl}>DOI</a>
        </div>
      </header>
      <div className="rh-intro">
        <h2>{paper.title}</h2>
        {children}
        <ul className="rh-key-links">
          {links.map(link => {
            const chapter = paper.chapters.find(item => link.slug ? item.slug === link.slug : item.number === link.number);
            if (!chapter) return null;
            const destination = readingChapterUrl(paper, chapter) + (link.anchor ? "#" + link.anchor : "");
            return (
              <li key={link.title}>
                <Link href={destination}>{link.title}{chapterLabel(chapter) && <span>{chapterLabel(chapter)}</span>}</Link>
              </li>
            );
          })}
        </ul>
        {paper.related.length > 0 && (
          <section>
            <h2>Related reading</h2>
            <ul>{paper.related.map(item => <li key={item.href}><Link href={item.href}>{item.title}</Link></li>)}</ul>
          </section>
        )}
        <h2>Downloads</h2>
        <div className="rh-actions">
          <a href={paper.pdfUrl}>Original PDF</a>
          <a href={paper.markdownUrl}>Markdown transcript</a>
          <a href={paper.manifestUrl}>Chapter manifest</a>
          {paper.supplements?.map(item => <a key={item.href} href={item.href}>{item.title}</a>)}
        </div>
        <h2 id="contents">Contents</h2>
        <Contents paper={paper} />
      </div>
    </article>
  );
}

export async function ReadingChapterPage({ paper, params }: ReadingParams & { paper: ReadingEdition }) {
  const { chapter: slug } = await params;
  const position = paper.chapters.findIndex(item => item.slug === slug);
  const chapter = paper.chapters[position];
  if (!chapter) notFound();
  const previous = paper.chapters[position - 1];
  const next = paper.chapters[position + 1];
  const html = await readEditionChapter(paper, chapter);
  const pages = chapter.firstPage === chapter.lastPage
    ? `PDF page ${chapter.firstPage}`
    : `PDF pages ${chapter.firstPage}–${chapter.lastPage}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Chapter",
    name: chapter.title,
    position: position + 1,
    url: site.url + readingChapterUrl(paper, chapter),
    isPartOf: { "@id": site.url + paper.citationRoute + "#publication", name: paper.title },
  };
  return (
    <article className="rh-chapter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdText(schema) }} />
      <Breadcrumb paper={paper} current={chapterLabel(chapter) || chapter.title} />
      <header className="rh-chapter-header">
        <p className="rh-kicker">{chapterLabel(chapter) && chapterLabel(chapter) + " · "}{pages}</p>
        <h1>{chapter.title}</h1>
        <div className="rh-actions">
          <Link href={paper.route + "#contents"}>Contents</Link>
          <Link href={paper.searchUrl}>Search</Link>
          <a href={paper.pdfUrl + "#page=" + chapter.firstPage}>Open at {pages.toLowerCase()}</a>
          <a href={paper.doiUrl}>DOI</a>
        </div>
        <p className="rh-transcription-note">Printed notation is visible in the reader. Compare provisional transcriptions with the source before reusing them.</p>
      </header>
      <div id="rh-reading-body" className="rh-reading-body" dangerouslySetInnerHTML={{ __html: html }} />
      <RhCopyControls />
      <nav className="rh-pagination" aria-label="Chapter navigation">
        {previous ? <Link rel="prev" href={readingChapterUrl(paper, previous)}><small>Previous</small>{previous.title}</Link> : <Link href={paper.route}>Reading entrance</Link>}
        {next ? <Link rel="next" href={readingChapterUrl(paper, next)}><small>Next</small>{next.title}</Link> : <Link href={paper.route + "#contents"}>Contents</Link>}
      </nav>
    </article>
  );
}

export function ReadingSearchPage({ paper }: { paper: ReadingEdition }) {
  return (
    <section className="rh-search">
      <Breadcrumb paper={paper} current="Search" />
      <h1>Search the paper</h1>
      <RhSearch indexUrl={paper.searchIndexUrl} readingUrl={paper.route} label="Find a result, formula label, or term" prioritizeResultStatements />
    </section>
  );
}
