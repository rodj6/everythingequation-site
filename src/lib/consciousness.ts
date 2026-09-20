import fs from "node:fs";
import path from "node:path";
import { parseFragment } from "parse5";
import inventory from "@content/consciousness/index.json";
import editorial from "@content/consciousness/editorial.json";
import { consciousnessPublication } from "@/config/consciousness";
import { site } from "@/config/site";

export interface ConsciousnessSection { anchor: string; title: string; number: string; level: number }
export interface ConsciousnessDocument {
  publicationId: string; slug: string; title: string; label: string; kind: string; order: number;
  url: string; part: string; sections: ConsciousnessSection[]; markdownUrl: string;
  partTitle?: string; source?: { pdfPage: number; pdfEndPage: number; title?: string };
  stats: { equations: number; displayEquations: number; theorems: number; proofs: number; tables: number; bibliographyEntries: number; figures: number };
}
export interface EditorialSection { id: string; title: string; html: string }
export interface ConsciousnessGuide { slug: string; title: string; description: string; sections: EditorialSection[] }
export interface SearchRecord { title: string; context: string; url: string; text: string }

export function listConsciousnessDocuments(): ConsciousnessDocument[] { return inventory; }
export const listConsciousnessChapters = listConsciousnessDocuments;
export function getConsciousnessDocument(slug: string) { return listConsciousnessDocuments().find(item => item.slug === slug); }
export function readConsciousnessHtml(document: ConsciousnessDocument) {
  return fs.readFileSync(path.join(process.cwd(), "content/consciousness/monograph", `${document.slug}.html`), "utf8");
}
export function getConsciousnessAdjacent(slug: string) {
  const documents = listConsciousnessDocuments(); const index = documents.findIndex(item => item.slug === slug);
  return { previous: documents[index - 1], next: documents[index + 1] };
}
export function getConsciousnessTotals() {
  const documents = listConsciousnessDocuments();
  return { chapters: documents.filter(d => d.kind === "chapter").length, appendices: documents.filter(d => d.kind === "appendix").length,
    sections: documents.reduce((n,d) => n + d.sections.length, 0), proofs: documents.reduce((n,d) => n + d.stats.proofs, 0),
    statements: documents.reduce((n,d) => n + d.stats.theorems, 0), references: documents.reduce((n,d) => n + d.stats.bibliographyEntries, 0) };
}
export function getConsciousnessEditorial() { return editorial; }
export function listConsciousnessGuides(): ConsciousnessGuide[] { return editorial.guides; }
export function getConsciousnessGuide(slug: string) { return listConsciousnessGuides().find(guide => guide.slug === slug); }

// Keep one mathematical representation in search text. KaTeX's visual span and
// parallel MathML tree otherwise repeat every formula several times.
export function consciousnessPlainText(html: string): string {
  const root = parseFragment(html);
  function walk(node: any): string {
    if (node.nodeName === "#text") return node.value || "";
    if (["script", "style"].includes(node.nodeName)) return "";
    const classes = node.attrs?.find((a: any) => a.name === "class")?.value || "";
    if (classes.split(" ").includes("katex-html")) return "";
    if (node.nodeName === "math") {
      const findAnnotation = (n: any): any => n.nodeName === "annotation" ? n : n.childNodes?.map(findAnnotation).find(Boolean);
      const annotation = findAnnotation(node);
      return annotation ? ` ${walk(annotation)} ` : " ";
    }
    return (node.childNodes || []).map(walk).join("") + (/^(p|h[1-6]|li|td|section|div|br)$/.test(node.nodeName) ? " " : "");
  }
  return walk(root).replace(/\s+/g, " ").trim();
}
export function getConsciousnessSearchRecords(): SearchRecord[] {
  const records: SearchRecord[] = [];
  for (const document of listConsciousnessDocuments()) {
    const html = readConsciousnessHtml(document);
    const sections = document.sections.map(section => ({ ...section, start: html.indexOf(`id="${section.anchor}"`) })).filter(s => s.start >= 0);
    if (!sections.length) records.push({ title: document.title, context: document.label || "Monograph", url: document.url, text: consciousnessPlainText(html) });
    else {
      const introduction = consciousnessPlainText(html.slice(0, sections[0].start).replace(/<[^>]*$/, ""));
      if (introduction.length > 30) records.push({ title: document.title, context: document.label || "Monograph", url: document.url, text: introduction });
      sections.forEach((section, i) => records.push({ title: `${section.number} ${section.title}`.trim(), context: `${document.label} · ${document.title}`, url: `${document.url}#${section.anchor}`, text: consciousnessPlainText(html.slice(section.start, sections[i + 1]?.start ?? html.length).replace(/^[^>]*>/, "")) }));
    }
  }
  for (const guide of listConsciousnessGuides()) for (const section of guide.sections) records.push({ title: section.title, context: guide.title, url: `/consciousness/guides/${guide.slug}#${section.id}`, text: consciousnessPlainText(section.html) });
  for (const section of editorial.overview.sections) records.push({ title: section.title, context: "Programme overview", url: `/consciousness#${section.id}`, text: consciousnessPlainText(section.html) });
  for (const term of editorial.glossary) records.push({ title: term.term, context: "Glossary", url: `/consciousness/glossary#${term.id}`, text: consciousnessPlainText(term.html) });
  for (const question of editorial.faq) records.push({ title: question.question, context: "FAQ", url: `/consciousness/faq#${question.id}`, text: consciousnessPlainText(question.html) });
  return records;
}
export function consciousnessManifest() {
  return { schemaVersion: 1, programme: "Shadow Theory and Consciousness", constitution: "SPC-2", status: "Candidate internal constitutive resolution under declared assumptions", canonicalOrigin: site.url,
    publication: consciousnessPublication, documents: listConsciousnessDocuments(), statistics: getConsciousnessTotals(),
    guides: listConsciousnessGuides().map(({slug,title,description,sections}) => ({ title, description, url: `/consciousness/guides/${slug}`, sections: sections.map(({id,title}) => ({ anchor:id,title })) })),
    glossaryUrl: "/consciousness/glossary", faqUrl: "/consciousness/faq", searchUrl: "/consciousness/search.json",
    auditUrl: "/publications/consciousness/conversion-audit.json", editionNote: "Version 2 supersedes the earlier Consciousness Field account. The current formulation is SPC-2.",
    metadataVerification: "DOI supplied and confirmed by author; live DOI and Zenodo API retrieval unavailable during implementation. No licence or peer-review status inferred." };
}
