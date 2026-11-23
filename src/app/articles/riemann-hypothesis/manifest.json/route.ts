import { rhChapters, rhChapterUrl, rhFinalAssemblyUrl, rhLiteratureAuditUrl, rhPublication as paper } from "@/lib/riemann-hypothesis";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    title: paper.title,
    subtitle: paper.subtitle,
    citationTitle: paper.citationTitle,
    doi: paper.doi,
    version: paper.version,
    versionDate: paper.versionDate,
    publicationDate: paper.date,
    previousVersion: paper.previousVersion,
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
    finalAssembly: rhFinalAssemblyUrl,
    literatureInputAudit: rhLiteratureAuditUrl,
    verificationScope: {
      projectInternal: "The repaired prose arguments use the literature basis inventoried in Tables 1, 2, 3, 5 and 6.",
      textualSourceScan: { localModules: 175187, missingLocalModules: 0, textualAxiomSorryAdmitDeclarations: 0 },
      localLean4ElaborationOrKernelCheck: false,
      primaryLiteratureClauses: "Exact clauses and pages in unopened primary print publications remain subject to direct inspection.",
    },
    chapters: rhChapters.map(chapter => ({ ...chapter, url: rhChapterUrl(chapter.slug) })),
  });
}
