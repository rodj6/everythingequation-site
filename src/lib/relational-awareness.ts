import fs from 'node:fs';
import path from 'node:path';
import {consciousnessPlainText} from './consciousness';
import {site} from '@/config/site';

export const relationalAwareness = {
  title: 'From Physical Comparison to Relational Appearance',
  subtitle: 'A Defeasible Current-Act Account',
  fullTitle: 'From Physical Comparison to Relational Appearance: A Defeasible Current-Act Account',
  publicTitle: 'When a relation becomes experience',
  description: 'Relational appearance is a way a current native human sensory comparison occurs. Follow the argument from sensory evidence to concrete performance, with the complete philosophy, mathematics, empirical applications and ten technical modules.',
  author: 'Jeremy Rodgers', authorRole: 'Independent Researcher',
  date: '2026-10-16', version: '1.4',
  doi: '10.5281/zenodo.23408737', doiUrl: 'https://doi.org/10.5281/zenodo.23408737',
  url: '/consciousness/relational-awareness', readUrl: '/consciousness/relational-awareness/read',
  paperSlug: 'physical-comparison-relational-appearance',
  pdfUrl: '/publications/consciousness/relational-awareness/main.pdf',
  supplementPdfUrl: '/publications/consciousness/relational-awareness/technical-supplement.pdf',
  markdownUrl: '/publications/consciousness/relational-awareness/complete.md',
  manifestUrl: '/consciousness/relational-awareness/manifest.json',
  socialImage: '/publications/consciousness/social.png',
};

export type RelationalSection = {id:string; title:string; level:number};
export type RelationalDocument = {
  slug:string; source:string; title:string; label:string; description:string;
  kind:'main'|'guide'|'technical'|'references'; sections:RelationalSection[];
  words:number; mathCount:number;
};
const root = path.join(process.cwd(), 'content/consciousness/relational-awareness');
export function listRelationalDocuments():RelationalDocument[] {
  return JSON.parse(fs.readFileSync(path.join(root,'index.json'),'utf8'));
}
export function relationalDocumentUrl(d:RelationalDocument) {return `${relationalAwareness.url}/${d.slug}`;}
export function readRelationalDocument(slug:string) {
  const document=listRelationalDocuments().find(d=>d.slug===slug);
  if(!document) return null;
  return {document,html:fs.readFileSync(path.join(root,`${slug}.html`),'utf8')};
}
export function getRelationalSearchRecords() {
  return [{title:relationalAwareness.publicTitle,context:'Relational awareness',url:relationalAwareness.url,text:relationalAwareness.description},
    ...listRelationalDocuments().flatMap(d=>{
      const html=readRelationalDocument(d.slug)!.html;
      return [{title:d.title,context:d.label,url:relationalDocumentUrl(d),text:d.description},...d.sections.map((s,i)=>{
        const start=html.lastIndexOf('<',html.indexOf(`id="${s.id}"`));
        const next=d.sections[i+1];
        const end=next?html.lastIndexOf('<',html.indexOf(`id="${next.id}"`)):html.length;
        return {title:s.title,context:`Relational appearance · ${d.label}`,url:`${relationalDocumentUrl(d)}#${s.id}`,text:consciousnessPlainText(html.slice(Math.max(0,start),end>start?end:html.length))};
      })];
    })];
}
export function relationalManifest() {
  return {schemaVersion:1,canonicalOrigin:site.url,publication:relationalAwareness,
    publicationCount:1,relationship:'One publication comprising a main argument and a substantial technical companion under the same DOI.',
    documents:listRelationalDocuments().map(d=>({...d,url:relationalDocumentUrl(d),markdownUrl:`/publications/consciousness/relational-awareness/${d.slug}.md`,sections:d.sections.map(s=>({...s,url:`${relationalDocumentUrl(d)}#${s.id}`}))})),
    searchUrl:'/consciousness/search.json',
    editionNote:'The full philosophical and technical treatment is readable in HTML. The original publication PDFs are preserved unchanged. The ten modules supply distinct results and empirical applications, not additional publications.',
  };
}
