import {sourceReadoutEditions,spectralHub,gravityHub,gravityReleaseDate} from '@/config/paper-integrations';
import {integratedSearchRecords,integratedManifest} from '@/lib/paper-integrations';
import fs from 'node:fs';
import {sourcePlainText} from '@/lib/source-readout-text';
export {sourcePlainText} from '@/lib/source-readout-text';
import {liftEditions,liftManifest,liftSearchRecords,yangMillsHub} from '@/lib/source-lift';
import path from 'node:path';
import { ads4Edition, readingChapterUrl } from '@/config/new-reading-editions';

export interface SourceChapter {
  slug: string; title: string; htmlPath: string; order?: number;
  sections?: {anchor?: string; id?: string; title: string; level?: number}[];
  markdownUrl?: string;
}
export interface SourcePaper {
  id: string; slug: string; title: string; doi?: string; series: string; number?: number;
  description: string; chapters: SourceChapter[]; pdfUrl: string; texUrl?: string;
  markdownUrl?: string; supplementUrl?: string; parentId?: string; parentSlug?: string;
  kind?: string; date?: string;
  companions?: unknown[];
}
function readManifest(name: string): SourcePaper[] {
  const file = path.join(process.cwd(), 'content/source-readout', `${name}.json`);
  if (!fs.existsSync(file)) return [];
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  return Array.isArray(data) ? data : data.papers;
}
export function sourcePapers(): SourcePaper[] { return [...readManifest('foundations'), ...readManifest('constructive')]; }
export function sourcePaper(slug: string) { return sourcePapers().find(p => p.slug === slug); }
export const paperUrl = (p: SourcePaper) => `/source-readout/${p.slug}`;
export const chapterUrl = (p: SourcePaper, c: SourceChapter) => `${paperUrl(p)}/${c.slug}`;
export function readSourceHtml(c: SourceChapter) { const html=fs.readFileSync(path.join(process.cwd(), c.htmlPath), 'utf8');return c.htmlPath.includes('/foundations/')?html.replace(/<(\/?)h([1-5])\b/g,(_,closing,level)=>`<${closing}h${Number(level)+1}`):html; }
export function sourceSearchRecords() {
  const ads4Records = ads4Edition.chapters.map(chapter => ({
    title: chapter.title,
    context: ads4Edition.title,
    url: readingChapterUrl(ads4Edition, chapter.slug),
    text: sourcePlainText(fs.readFileSync(path.join(process.cwd(), 'content', 'reading-editions', ads4Edition.id, chapter.slug + '.html'), 'utf8')),
  }));
  return [...sourcePapers().flatMap(p => [{title:p.title,context:p.series,url:paperUrl(p),text:p.description}, ...p.chapters.map(c => ({title:c.title,context:p.title,url:chapterUrl(p,c),text:sourcePlainText(readSourceHtml(c))}))]), ...integratedSearchRecords('source-readout'),...liftSearchRecords(), {title:ads4Edition.title,context:'Gravity and holography',url:ads4Edition.route,text:ads4Edition.description}, ...ads4Records];
}
export function sourceManifest() {
  const { chapters, ...publication } = ads4Edition;
  const ads4Manifest = {
    schemaVersion: 1,
    kind: 'PDF-derived-reading-edition',
    publication: { ...publication, url: publication.route, programme: 'source-readout' },
    url: publication.route,
    chapters: chapters.map(chapter => ({ ...chapter, url: readingChapterUrl(ads4Edition, chapter.slug) })),
    completeMarkdown: publication.markdownUrl,
    originalPdf: publication.pdfUrl,
  };
  return {schemaVersion:1,title:'Shadow Theory: Source and Readout',url:'/source-readout',origins:'/source-readout/origins',search:'/source-readout/search.json',updated:ads4Edition.publicationDate??ads4Edition.date,yangMillsProgramme:yangMillsHub,spectralProgramme:spectralHub,gravityProgramme:gravityHub,readingEditions:[...sourceReadoutEditions.map(p=>integratedManifest(p.id)),...liftEditions.map(p=>{const manifest=liftManifest(p.id);return {...manifest,publication:p,url:p.url,chapters:manifest.chapters.map(c=>({...c,url:p.url+'/'+c.slug}))};}),ads4Manifest],papers:sourcePapers().map(p=>({...p,url:paperUrl(p),doiUrl:p.doi?`https://doi.org/${p.doi}`:undefined,chapters:p.chapters.map(c=>({...c,url:chapterUrl(p,c)}))}))};
}
