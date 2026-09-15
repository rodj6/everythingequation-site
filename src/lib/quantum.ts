import fs from "node:fs";
import path from "node:path";
import inventory from "@content/quantum/index.json";
import audit from "@content/quantum/audit.json";
import { quantumPublications } from "@/config/quantum";

export interface QuantumSection { anchor: string; title: string; number: string; level: number }
export interface QuantumDocument {
  publicationId: string;
  slug: string;
  title: string;
  label: string;
  kind: string;
  order: number;
  url: string;
  part: string;
  sections: QuantumSection[];
  stats: { equations: number; displayEquations: number; theorems: number; proofs: number; tables: number; bibliographyEntries: number; figures: number };
  markdownUrl: string;
}

export function listQuantumDocuments(): QuantumDocument[] { return inventory; }
export function listQuantumChapters(): QuantumDocument[] { return inventory.filter(item => item.publicationId === "monograph"); }
export function getQuantumDocument(publicationId: string, slug?: string): QuantumDocument | undefined {
  return inventory.find(item => item.publicationId === publicationId && (!slug || item.slug === slug));
}
export function readQuantumHtml(document: QuantumDocument): string {
  return fs.readFileSync(path.join(process.cwd(), "content", "quantum", document.publicationId, `${document.slug}.html`), "utf8");
}
export function getQuantumAdjacent(slug: string) {
  const chapters = listQuantumChapters(); const index = chapters.findIndex(item => item.slug === slug);
  return { previous: chapters[index - 1], next: chapters[index + 1] };
}
export function getQuantumTotals(publicationId = "monograph") {
  const documents = inventory.filter(item => item.publicationId === publicationId);
  return {
    chapters: documents.filter(item => item.kind === "chapter").length,
    appendices: documents.filter(item => item.kind === "appendix").length,
    parts: documents.filter(item => item.kind === "part").length,
    sections: documents.reduce((total, item) => total + item.sections.length, 0),
    statements: documents.reduce((total, item) => total + item.stats.theorems, 0),
    proofs: documents.reduce((total, item) => total + item.stats.proofs, 0),
    displayEquations: documents.reduce((total, item) => total + item.stats.displayEquations, 0),
    tables: documents.reduce((total, item) => total + item.stats.tables, 0),
    bibliographyEntries: documents.reduce((total, item) => total + item.stats.bibliographyEntries, 0),
  };
}
export function quantumManifest() {
  return {
    schemaVersion: 1,
    programme: "Shadow Theory — Quantum Measurement and Born Rule",
    description: "Complete fixed Version 2 web editions. The pilot-medium and massive-configuration constitutions remain distinct publications; all source labels are preserved as stable anchors.",
    publications: quantumPublications.map(publication => ({ ...publication, statistics: getQuantumTotals(publication.id), documents: inventory.filter(item => item.publicationId === publication.id) })),
    auditUrl: "/publications/quantum-measurement/conversion-audit.json",
    sourceLimitations: audit.documents.flatMap(document => document.sourceLimitations.map(limitation => ({ publicationId: document.id, ...limitation }))),
  };
}
