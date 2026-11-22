import { rhChapters, rhChapterUrl, rhPublication as paper } from "@/lib/riemann-hypothesis";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    title: paper.title,
    subtitle: paper.subtitle,
    citationTitle: paper.citationTitle,
    doi: paper.doi,
    versionDate: paper.date,
    attribution: {
      reconstruction: "Jeremy Rodgers, Independent Researcher",
      underlyingArgument: "Levent Alpöge and Anthropic’s Claude",
    },
    readingUrl: paper.route,
    citationUrl: paper.citationRoute,
    pdf: { url: paper.pdfUrl, sha256: paper.sha256, pages: paper.pages },
    markdown: paper.markdownUrl,
    search: paper.searchUrl,
    notation: "PDF-derived transcription undergoing comparison with the printed mathematics.",
    chapters: rhChapters.map(chapter => ({ ...chapter, url: rhChapterUrl(chapter.slug) })),
  });
}
