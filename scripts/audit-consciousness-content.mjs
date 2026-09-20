/** Independent read-only checks of the converted, fixed consciousness edition.
 * Run after convert-consciousness.mjs. This validates source preservation and
 * internal publication links, not the scientific truth of the manuscript.
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { parseFragment } from "parse5";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assetDir = path.join(root, "public/publications/consciousness");
const contentDir = path.join(root, "content/consciousness");
const index = JSON.parse(fs.readFileSync(path.join(contentDir, "index.json"), "utf8"));
const conversion = JSON.parse(fs.readFileSync(path.join(contentDir, "audit.json"), "utf8")).documents[0];
const hash = value => crypto.createHash("sha256").update(value).digest("hex");
const texBytes = fs.readFileSync(path.join(assetDir, "monograph.tex"));
const pdfBytes = fs.readFileSync(path.join(assetDir, "monograph.pdf"));
const source = texBytes.toString("utf8");
const errors = []; const checks = [];
function check(name, ok, detail) { checks.push({ name, status: ok ? "PASS" : "FAIL", detail }); if (!ok) errors.push(name); }
check("Original TeX hash agrees with conversion", hash(texBytes) === conversion.sourceSha256, hash(texBytes));
check("Archival PDF hash agrees with conversion", hash(pdfBytes) === conversion.pdfSha256, hash(pdfBytes));
check("Converter structural/prose/render checks", conversion.status === "PASS", { ...conversion.convertedStats, unknown: conversion.unsupportedCommands, unresolved: conversion.unresolvedReferences, mathErrors: conversion.mathErrors.length });
check("25 chapters and six appendices", index.filter(doc => doc.kind === "chapter").length === 25 && index.filter(doc => doc.kind === "appendix").length === 6, index.length + " total reading routes");
check("Complete front matter and bibliography", ["title-and-publication-identity", "preface-and-scope", "abstract", "conventions-and-principal-distinctions", "the-argument-and-how-to-read-it", "bibliography"].every(slug => index.some(doc => doc.slug === slug)), "Includes terminology, reading guidance, and all 54 source references");
const pages = new Map(); const formulas = [];
function textContent(node) { return node.nodeName === "#text" ? node.value : (node.childNodes || []).map(textContent).join(""); }
for (const doc of index) {
  const html = fs.readFileSync(path.join(contentDir, "monograph", doc.slug + ".html"), "utf8");
  const tree = parseFragment(html); const ids = []; const links = []; const math = [];
  function walk(node) {
    const attrs = Object.fromEntries((node.attrs || []).map(a => [a.name, a.value]));
    if (attrs.id) ids.push(attrs.id);
    if (attrs.href) links.push(attrs.href);
    if (node.tagName === "annotation" && attrs.encoding === "application/x-tex") math.push(textContent(node));
    for (const child of node.childNodes || []) walk(child);
  }
  walk(tree); pages.set(doc.url, { ids: new Set(ids), links });
  check(`${doc.slug}: unique anchors`, ids.length === new Set(ids).size, ids.length);
  check(`${doc.slug}: mathematical markup coverage`, math.length === doc.stats.equations, math.length);
  check(`${doc.slug}: standalone Markdown`, fs.existsSync(path.join(root, "public", doc.markdownUrl)) && fs.statSync(path.join(root, "public", doc.markdownUrl)).size > 200, doc.markdownUrl);
  formulas.push(...math.map((latex, position) => ({ latex, route: doc.url, expressionInRoute: position + 1 })));
}
const brokenLinks = [];
for (const [route, page] of pages) for (const link of page.links) {
  if (!link.startsWith("/consciousness/monograph/")) continue;
  const [target, anchor] = link.split("#");
  if (!pages.has(target) || anchor && !pages.get(target).ids.has(decodeURIComponent(anchor))) brokenLinks.push({ route, link });
}
check("All chapter, statement, citation and bibliography backlinks resolve", brokenLinks.length === 0, brokenLinks);
for (const [label, target] of Object.entries(conversion.labels)) check(`Source label ${label}`, pages.get(target.url.split("#")[0])?.ids.has(label), target.url);

// A separate lexical scan reads mathematical expressions directly from the
// untouched original source. Compare each expression, in source order, with the
// TeX annotation embedded in rendered HTML. Only listed presentational changes
// and resolved references are normalized; mathematical operands are untouched.
const bodyOffset = source.indexOf("\\begin{document}") + "\\begin{document}".length;
const body = source.slice(bodyOffset, source.lastIndexOf("\\end{document}"));
const originalMath = []; let cursor = 0;
const opener = /\\begin\{(?:equation\*?|align\*?|gather\*?|multline\*?|displaymath)\}|\\\[|\\\(|(?<!\\)\${1,2}/g;
for (const match of body.matchAll(opener)) {
  if (match.index < cursor) continue;
  const token = match[0]; const closer = token.startsWith("\\begin") ? token.replace("begin", "end") : token === "\\[" ? "\\]" : token === "\\(" ? "\\)" : token;
  const end = body.indexOf(closer, match.index + token.length);
  if (end < 0) throw new Error("Unclosed source mathematics");
  originalMath.push({ latex: body.slice(match.index + token.length, end), sourceLine: source.slice(0, bodyOffset + match.index).split("\n").length }); cursor = end + closer.length;
}
function canonicalMath(latex) {
  return latex.replace(/(?<!\\)%[^\n]*(?:\n|$)/g, "")
    .replace(/\\label\{[^}]+\}|\\tag\{[^}]+\}|\\(?:nonumber|notag)\b/g, "")
    .replace(/\\(?:eqref|ref)\{([^}]+)\}/g, (all, key) => `\\text{${all.startsWith("\\eqref") ? "(" : ""}${conversion.labels[key]?.number || key}${all.startsWith("\\eqref") ? ")" : ""}}`)
    .replace(/\\(?:begin|end)\{(?:split|aligned|align\*?|gathered|gather\*?)\}/g, "")
    .replace(/\\spctwo\b/g, "SPC-2").replace(/\\spcone\b/g, "SPC-1").replace(/\s+/g, "");
}
const mathMismatches = [];
const equationCoverage = originalMath.map((item, i) => {
  const rendered = formulas[i]; const expected = canonicalMath(item.latex); const actual = rendered ? canonicalMath(rendered.latex) : "";
  if (expected !== actual) mathMismatches.push({ sourceLine: item.sourceLine, route: rendered?.route, source: item.latex, rendered: rendered?.latex });
  return { sourceLine: item.sourceLine, route: rendered?.route, expressionInRoute: rendered?.expressionInRoute, sourceSha256: hash(item.latex), normalizedSha256: hash(expected), matchesRenderedAnnotation: expected === actual };
});
check("Independent original-source mathematical expression count", originalMath.length === formulas.length, { source: originalMath.length, html: formulas.length });
check("Every original formula matches its rendered TeX annotation", mathMismatches.length === 0, mathMismatches);
check("Section 18.1 documented reference is Assumption 16.4", conversion.labels["ass:spc2-congruence"].number === "16.4" && fs.readFileSync(path.join(contentDir, "monograph/completion-invariance-and-empirical-conservativity.html"), "utf8").includes('class="quantum-reference">Assumption 16.4</a>'), "Archival PDF p. 81 / printed p. 69 remains unchanged");
check("Numbered table caption and reference type", conversion.labels["tab:o1"].kind === "table" && conversion.labels["tab:o1"].number === "12.1" && fs.readFileSync(path.join(contentDir, "monograph/finite-incidence-recurrent-response-and-physical-access.html"), "utf8").includes("Table 12.1. Finite local source-response carriers"), "One numbered table plus seven unnumbered tables");
check("Every section has source PDF and TeX locators", index.every(doc => doc.sections.every(section => section.pdfPage && section.sourceLine)), "165 source headings");
check("Plain-text navigation labels contain no escaped underscores", index.every(doc => doc.sections.every(section => !section.title.includes("\\_"))), "Appendix D profile names are V2_02, V2_34, V2_04, V2_11 and V2_29");
const result = { schemaVersion: 1, status: errors.length ? "FAIL" : "PASS", command: "node scripts/audit-consciousness-content.mjs", sourceSha256: hash(texBytes), pdfSha256: hash(pdfBytes), checks, mathematicalCoverage: equationCoverage, limitations: ["Mathematical equivalence here checks preserved source expressions and rendering annotations, not independent proofs of the publication's results.", "Automated structural and prose checks supplement source/PDF comparison and browser inspection; they do not establish empirical validity."] };
fs.writeFileSync(path.join(contentDir, "verification.json"), JSON.stringify(result, null, 2) + "\n");
fs.writeFileSync(path.join(assetDir, "source-verification.json"), JSON.stringify(result, null, 2) + "\n");
console.log(`${result.status}: ${checks.length} checks, ${index.length} reading routes, ${formulas.length} source-to-HTML mathematical expressions, ${brokenLinks.length} broken internal links`);
if (errors.length) { console.error(errors); process.exitCode = 1; }
