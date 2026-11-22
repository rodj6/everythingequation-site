import { readFile } from "node:fs/promises";
import { join } from "node:path";
import katex from "katex";
import chapters from "../../content/riemann-hypothesis/chapters.json";

const route = "/articles/riemann-hypothesis";
const assets = "/publications/riemann-hypothesis";

export const rhChapters = chapters;
export type RhChapter = (typeof rhChapters)[number];

export const rhPublication = {
  title: "The ordinary Riemann Hypothesis argument in the supplied Lean source",
  subtitle: "A mathematical reconstruction for referee checking",
  citationTitle: "The Riemann Hypothesis Argument of Levent Alpöge and Anthropic's Claude: A Full Human-Readable Reconstruction from Lean",
  searchTitle: "The Riemann Hypothesis in Lean | Human-Readable Reconstruction",
  description: "Read Jeremy Rodgers’s reconstruction of the Riemann Hypothesis argument of Levent Alpöge and Claude, from the Lean endpoint reduction through the final assembly.",
  doi: "10.5281/zenodo.24433884",
  date: "2026-11-22",
  route,
  citationRoute: "/papers/riemann-hypothesis",
  pdfUrl: assets + "/paper.pdf",
  markdownUrl: assets + "/complete.md",
  searchIndexUrl: assets + "/search.json",
  manifestUrl: route + "/manifest.json",
  searchUrl: route + "/search",
  doiUrl: "https://doi.org/10.5281/zenodo.24433884",
  pages: 980,
  sha256: "bae1f777817c69c9a3ca7eac08543538547315c640a31ff24d13ac02666c3fb3",
};

export function rhChapterUrl(slug: string) {
  return route + "/" + slug;
}

const checkedDisplay = /(<details class="rh-formula-transcript"><summary>Checked LaTeX<\/summary>[\s\S]*?<pre id="[^"]+">)([\s\S]*?)(<\/pre><\/details>)/g;
const htmlEntities: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', "#x27": "'" };

export async function readRhChapter(chapter: RhChapter) {
  const html = await readFile(join(process.cwd(), "content", "riemann-hypothesis", chapter.slug + ".html"), "utf8");
  return html.replace(checkedDisplay, (details, _start, notation: string) => {
    const latex = notation.replace(/&(amp|lt|gt|quot|#x27);/g, (_, key: string) => htmlEntities[key]);
    const math = katex.renderToString(latex, { displayMode: true, throwOnError: true, trust: false, strict: "ignore" });
    return '<div class="rh-semantic-display">' + math + "</div>" + details;
  });
}
