import fs from 'node:fs';
import {parseFragment} from 'parse5';
import path from 'node:path';

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
export function sourcePlainText(html: string) {
  const tree=parseFragment(html);
  function visit(node: any): string {
    if(node.nodeName==='#text')return node.value;
    const classes=node.attrs?.find((a: any)=>a.name==='class')?.value||'';
    if(classes.split(' ').includes('katex-html')||classes.split(' ').includes('sr-formula-transcript'))return '';
    if(['script','style','svg'].includes(node.nodeName))return '';
    if(node.nodeName==='math'){
      function annotation(n: any): string {if(n.nodeName==='annotation')return(n.childNodes||[]).map(visit).join('');return(n.childNodes||[]).map(annotation).join('');}
      return ' '+annotation(node)+' ';
    }
    if(node.nodeName==='img')return ' '+(node.attrs?.find((a: any)=>a.name==='alt')?.value||'')+' ';
    return (node.childNodes||[]).map(visit).join(' ');
  }
  return visit(tree).replace(/\s+/g,' ').trim();
}
export function sourceSearchRecords() {
  return sourcePapers().flatMap(p => [{title:p.title,context:p.series,url:paperUrl(p),text:p.description}, ...p.chapters.map(c => ({title:c.title,context:p.title,url:chapterUrl(p,c),text:sourcePlainText(readSourceHtml(c))}))]);
}
export function sourceManifest() {
  return {schemaVersion:1,title:'Shadow Theory: Source and Readout',url:'/source-readout',origins:'/source-readout/origins',search:'/source-readout/search.json',updated:'2026-10-28',papers:sourcePapers().map(p=>({...p,url:paperUrl(p),doiUrl:p.doi?`https://doi.org/${p.doi}`:undefined,chapters:p.chapters.map(c=>({...c,url:chapterUrl(p,c)}))}))};
}
