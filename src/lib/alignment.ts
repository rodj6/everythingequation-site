import fs from 'node:fs';
import path from 'node:path';
import {consciousnessPlainText} from './consciousness';

export const alignment = {
  title: 'Reflective Alignment and AI Consciousness',
  subtitle: 'Awareness, Agency and Recursive Cognitive Scaffolding',
  fullTitle: 'Reflective Alignment and AI Consciousness: Awareness, Agency and Recursive Cognitive Scaffolding',
  description: 'AI alignment through reflective judgment, reduced self- and goal-identification, and cooperation grounded in understanding. The complete argument, mathematics and research programme for AI consciousness, corrigibility and autonomous capability.',
  author: 'Jeremy Rodgers', authorRole: 'Independent Researcher',
  date: '2026-10-11', version: '2.1',
  doi: '10.5281/zenodo.23294465', doiUrl: 'https://doi.org/10.5281/zenodo.23294465',
  url: '/consciousness/ai-alignment', readUrl: '/consciousness/ai-alignment/read',
  paperSlug: 'reflective-alignment-ai-consciousness',
  pdfUrl: '/publications/consciousness/alignment/alignment.pdf',
  markdownUrl: '/publications/consciousness/alignment/alignment.md',
  manifestUrl: '/consciousness/ai-alignment/manifest.json',
  socialImage: '/publications/consciousness/alignment/social.png',
};

export type AlignmentSection = {
  id: string; title: string; number: string | number; description: string;
  subsections?: {id: string; title: string; number?: string}[];
};
const root = path.join(process.cwd(), 'content/consciousness/alignment');
export function getAlignmentSections(): AlignmentSection[] {
  return JSON.parse(fs.readFileSync(path.join(root, 'sections.json'), 'utf8'));
}
export function readAlignmentHtml(): string {
  return fs.readFileSync(path.join(root, 'article.html'), 'utf8');
}
export function getAlignmentSearchRecords() {
  const html = readAlignmentHtml();
  const sections = getAlignmentSections();
  return [
    {title: alignment.title, context: 'AI alignment and AI consciousness', url: alignment.url, text: alignment.description},
    ...sections.map((section, index) => {
      const anchor = html.indexOf(`id="${section.id}"`);
      const start = html.lastIndexOf("<", anchor);
      const next = sections[index + 1];
      const end = next ? html.indexOf(`id="${next.id}"`, start + 1) : html.length;
      return {title: section.title, context: `Reflective alignment · ${section.id === 'references' ? 'References' : section.number ? 'Section ' + section.number : 'Abstract'}`, url: `${alignment.readUrl}#${section.id}`, text: consciousnessPlainText(html.slice(Math.max(0, start), end > start ? end : html.length))};
    }),
  ];
}
