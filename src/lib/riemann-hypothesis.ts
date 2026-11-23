import { join } from "node:path";
import { readReadingHtml } from "@/lib/reading-html";
import chapters from "../../content/riemann-hypothesis/chapters.json";

const route = "/articles/riemann-hypothesis";
const assets = "/publications/riemann-hypothesis";

export const rhChapters = chapters;
export type RhChapter = (typeof rhChapters)[number];

export const rhPublication = {
  title: "The ordinary Riemann Hypothesis argument in the supplied Lean source",
  subtitle: "A mathematical reconstruction for referee checking (Version 2)",
  citationTitle: "The Riemann Hypothesis Argument of Levent Alpöge and Anthropic's Claude: A Full Human-Readable Reconstruction from Lean",
  searchTitle: "The Riemann Hypothesis in Lean | Referee Reconstruction, Version 2",
  description: "Read Jeremy Rodgers’s repaired reconstruction of Levent Alpöge and Claude’s Riemann Hypothesis argument. Follow the Lean endpoint reduction, final assembly, and field-by-field account of the literature inputs.",
  version: 2,
  versionDate: "2026-11-22",
  date: "2026-11-23",
  doi: "10.5281/zenodo.24473551",
  doiUrl: "https://doi.org/10.5281/zenodo.24473551",
  route,
  citationRoute: "/papers/riemann-hypothesis",
  pdfUrl: assets + "/paper.pdf",
  markdownUrl: assets + "/complete.md",
  searchIndexUrl: assets + "/search.json",
  manifestUrl: route + "/manifest.json",
  searchUrl: route + "/search",
  pages: 1061,
  sha256: "dbb02e1656b98611c49380f6f4b3af07b45e0022de5525d43d70b3aaf210a0e8",
  previousVersion: {
    version: 1,
    doi: "10.5281/zenodo.24433884",
    doiUrl: "https://doi.org/10.5281/zenodo.24433884",
    pdfUrl: assets + "/v1/paper.pdf",
    sha256: "bae1f777817c69c9a3ca7eac08543538547315c640a31ff24d13ac02666c3fb3",
  },
};

export function rhChapterUrl(slug: string) {
  return route + "/" + slug;
}

export const rhFinalAssemblyUrl = rhChapterUrl("construction-of-the-compatible-family-bundle-and-final-assembly");
export const rhLiteratureAuditUrl = rhChapterUrl("field-by-field-audit-of-unitarygroupthirdplacehypotheses-and-thetalocalinputs");

export function readRhChapter(chapter: RhChapter) {
  return readReadingHtml(join(process.cwd(), "content", "riemann-hypothesis", chapter.slug + ".html"));
}
