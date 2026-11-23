import type { Metadata } from "next";
import { join } from "node:path";
import type { ReadingEdition } from "@/config/new-reading-editions";
import { site } from "@/config/site";
import { readReadingHtml } from "@/lib/reading-html";

export type ReadingChapter = ReadingEdition["chapters"][number];
export type ReadingParams = { params: Promise<{ chapter: string }> };

export function readingChapterUrl(paper: ReadingEdition, chapter: ReadingChapter) {
  return paper.route + "/" + chapter.slug;
}

export function readingStaticParams(paper: ReadingEdition) {
  return paper.chapters.map(chapter => ({ chapter: chapter.slug }));
}

export function readEditionChapter(paper: ReadingEdition, chapter: ReadingChapter) {
  return readReadingHtml(join(process.cwd(), "content", "reading-editions", paper.id, chapter.slug + ".html"));
}

export function readingMetadata(paper: ReadingEdition): Metadata {
  return {
    title: paper.title,
    description: paper.description,
    alternates: { canonical: paper.route, types: { "application/json": paper.manifestUrl } },
    openGraph: {
      type: "article",
      title: paper.title,
      description: paper.description,
      authors: [paper.author],
      publishedTime: paper.publicationDate,
      url: paper.route,
    },
    other: {
      citation_title: paper.title,
      citation_author: paper.author,
      citation_publication_date: paper.publicationDate ?? paper.date,
      citation_doi: paper.doi,
      citation_pdf_url: site.url + paper.pdfUrl,
    },
  };
}

export async function readingChapterMetadata(paper: ReadingEdition, { params }: ReadingParams): Promise<Metadata> {
  const { chapter: slug } = await params;
  const chapter = paper.chapters.find(item => item.slug === slug);
  if (!chapter) return {};
  return {
    title: chapter.title + " | " + paper.headline,
    description: chapter.description,
    alternates: { canonical: readingChapterUrl(paper, chapter) },
  };
}

export function readingEditionManifest(paper: ReadingEdition) {
  return Response.json({
    title: paper.title,
    author: paper.author,
    doi: paper.doi,
    date: paper.date,
    publicationDate: paper.publicationDate,
    registeredTitle: paper.zenodoTitle ?? paper.citationTitle ?? paper.title,
    publicationStatus: paper.publicationStatus,
    readingUrl: paper.route,
    citationUrl: paper.citationRoute,
    pdf: { url: paper.pdfUrl, sha256: paper.sha256, pages: paper.pages },
    markdown: paper.markdownUrl,
    search: paper.searchUrl,
    supplements: paper.supplements ?? [],
    notation: "The reader shows the original PDF notation and marks provisional transcriptions.",
    chapters: paper.chapters.map(chapter => ({ ...chapter, url: readingChapterUrl(paper, chapter) })),
  });
}
