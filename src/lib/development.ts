import fs from 'node:fs';
import path from 'node:path';
import { consciousnessPlainText, type SearchRecord } from './consciousness';

export const development = {
  title: 'Relational Development and Conscious Scaffolding',
  subtitle: 'Conceptual Foundations, Strengthened Results, and Research Commitments',
  fullTitle: 'Relational Development and Conscious Scaffolding: Conceptual Foundations, Strengthened Results, and Research Commitments',
  description: 'How acquired relations become retained organisation that shapes later interpretation, reasoning and action. Full philosophical account, continuation and transfer results, diagnostic bounds and a conditional native incorporation witness.',
  author: 'Jeremy Rodgers', authorRole: 'Independent Researcher',
  date: '2026-10-06', version: 'Revised preprint',
  doi: '10.5281/zenodo.23190711', doiUrl: 'https://doi.org/10.5281/zenodo.23190711',
  url: '/consciousness/development', paperSlug: 'relational-development-and-conscious-scaffolding',
  articleUrl: '/articles/agency-and-the-constructed-self',
  pdfUrl: '/publications/consciousness/development/relational_development.pdf',
  texUrl: '/publications/consciousness/development/relational_development.tex',
  markdownUrl: '/publications/consciousness/development/development.md',
  manifestUrl: '/consciousness/development/manifest.json',
};
export interface DevelopmentDocument {
  slug: string; title: string; label: string; kind: string; order: number; url: string;
  sections: {anchor: string; title: string; number: string; level: number}[];
  markdownUrl: string; stats: Record<string, number>;
}
const contentRoot = path.join(process.cwd(), 'content/consciousness/development');
export function listDevelopmentDocuments(): DevelopmentDocument[] {
  return JSON.parse(fs.readFileSync(path.join(contentRoot, 'index.json'), 'utf8'));
}
export function readDevelopmentHtml(document: DevelopmentDocument): string {
  return fs.readFileSync(path.join(contentRoot, `${document.slug}.html`), 'utf8');
}
export function getDevelopmentSearchRecords(): SearchRecord[] {
  const records = listDevelopmentDocuments().map(document => ({
    title: document.title, context: `Relational development · ${document.label}`,
    url: document.url, text: consciousnessPlainText(readDevelopmentHtml(document)),
  }));
  const articleText = fs.readFileSync(path.join(contentRoot, 'agency-article-search.txt'), 'utf8');
  records.push({title: 'Agency and the constructed self', context: 'Article · Choice, conditioning and the RCO hypothesis', url: development.articleUrl, text: articleText});
  return records;
}
export function developmentManifest() {
  return { schemaVersion: 1, publication: development, documents: listDevelopmentDocuments(),
    figureStatus: 'resolved-author-supplied-original',
    figureNote: 'Figure 1 uses the original PNG and vector PDF supplied by the author. The downloadable paper PDF is the author-supplied corrected edition containing the figure.',
    coverageUrl: '/publications/consciousness/development/source-coverage.json',
    sourceNote: 'The supplied 6 October 2026 revised preprint controls this edition. The foundational monograph and Papers 2–4 retain their own publication identities and claims.',
    article: {title: 'Agency and the constructed self', url: development.articleUrl,
      sourceNote: 'Citation [11] is unresolved in the supplied Word document; the web edition preserves the marker and documents the omission.'},
  };
}
