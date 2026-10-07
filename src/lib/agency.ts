import fs from 'node:fs';
import path from 'node:path';
import { consciousnessPlainText, type SearchRecord } from './consciousness';

export const agency = {
  title: 'Bounded Agency and Reflective Freedom',
  subtitle: 'Evaluative Revision, Information Limits, and Faithful Realization',
  fullTitle: 'Bounded Agency and Reflective Freedom: Evaluative Revision, Information Limits, and Faithful Realization',
  description: 'How an agent can revise the rules it uses to choose. Complete finite constructions, information bounds, the exact adaptive inquiry threshold and faithful realization, with an expanded philosophy of bounded freedom.',
  author: 'Jeremy Rodgers', authorRole: 'Independent Researcher',
  date: '2026-10-06', version: '2.0',
  doi: '10.5281/zenodo.23202999', doiUrl: 'https://doi.org/10.5281/zenodo.23202999',
  url: '/consciousness/agency', paperSlug: 'bounded-agency-and-reflective-freedom',
  articleUrl: '/articles/agency-and-the-constructed-self',
  pdfUrl: '/publications/consciousness/agency/bounded-agency-and-reflective-freedom.pdf',
  markdownUrl: '/publications/consciousness/agency/agency.md',
  manifestUrl: '/consciousness/agency/manifest.json',
};

export interface AgencyDocument {
  slug: string; title: string; label: string; kind: 'published' | 'supplement';
  order: number; url: string; description?: string;
  sections: {anchor: string; title: string; level: number; number?: string}[];
  markdownUrl: string;
}
const contentRoot = path.join(process.cwd(), 'content/consciousness/agency');
export function listAgencyDocuments(): AgencyDocument[] {
  return JSON.parse(fs.readFileSync(path.join(contentRoot, 'index.json'), 'utf8'));
}
export function readAgencyHtml(document: AgencyDocument): string {
  return fs.readFileSync(path.join(contentRoot, `${document.slug}.html`), 'utf8');
}
export function getAgencySearchRecords(): SearchRecord[] {
  return listAgencyDocuments().map(document => ({
    title: document.title,
    context: `Agency and free will · ${document.kind === 'supplement' ? 'Extended inquiry' : document.label}`,
    url: document.url, text: consciousnessPlainText(readAgencyHtml(document)),
  }));
}
export function agencyManifest() {
  return {
    schemaVersion: 1, publication: agency, documents: listAgencyDocuments(),
    coverageUrl: '/publications/consciousness/agency/source-coverage.json',
    sourceNote: 'The final published Bounded Agency and Reflective Freedom supplies the complete primary treatment. Extended inquiry sections draw on Bounded Agency and Reversible Control, an unpublished manuscript, and are identified separately. Supplementary results are not attributed to the published paper.',
    scope: 'Finite evaluative constructions and exact inquiry results under specified contracts; faithful physical realization and the SPC-2 coexistence statement retain their assumptions. The RCO hypothesis and ultimate authorship are not established by these constructions.',
    article: { title: 'Agency and the constructed self', url: agency.articleUrl },
  };
}
