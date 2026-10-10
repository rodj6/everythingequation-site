import fs from 'node:fs';
import path from 'node:path';
import inventory from '@content/quantum-research/index.json';
import { quantumResearchPublications } from '@/config/quantum-research';
import type { QuantumDocument } from '@/lib/quantum';
export function listQuantumResearchDocuments(): QuantumDocument[] { return inventory; }
export function getQuantumResearchDocuments(id: string) { return listQuantumResearchDocuments().filter(d => d.publicationId === id); }
export function getQuantumResearchDocument(id: string, slug: string) { return getQuantumResearchDocuments(id).find(d => d.slug === slug); }
export function readQuantumResearchHtml(d: QuantumDocument) {
 return fs.readFileSync(path.join(process.cwd(), 'content', 'quantum-research', d.publicationId, `${d.slug}.html`), 'utf8');
}
export function quantumResearchManifest() {
 return { schemaVersion: 1, programme: 'Quantum Measurement and Born Rule', date: quantumResearchPublications.reduce((date, publication) => publication.published > date ? publication.published : date, ''), publications: quantumResearchPublications.map(p => ({...p, documents: getQuantumResearchDocuments(p.id)})), auditUrl: '/publications/quantum-measurement/research/conversion-audit.json' };
}
