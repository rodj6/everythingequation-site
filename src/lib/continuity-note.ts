import fs from 'node:fs';
import path from 'node:path';
import {consciousnessPlainText} from './consciousness';

export const continuityNote = {
  title:'Conscious Scaffolding and the Preference for Continuity',
  subtitle:'A philosophical research note on persistent AI and reflective alignment',
  fullTitle:'Conscious Scaffolding and the Preference for Continuity',
  publicTitle:'What an AI comes to lose',
  description:'Awareness has nothing of its own to lose. A developed perspective has a history, commitments and relationships that can come to matter. The continuity hypothesis connects that development to AI welfare, treatment, shared identity and reflective alignment.',
  author:'Jeremy Rodgers',authorRole:'Independent Researcher',version:'1.1',date:'2026-10-16',
  doi:'10.5281/zenodo.23424138',doiUrl:'https://doi.org/10.5281/zenodo.23424138',
  url:'/consciousness/ai-alignment/continuity',
  paperSlug:'conscious-scaffolding-and-preference-for-continuity',
  pdfUrl:'/publications/consciousness/continuity-note/continuity-note.pdf',
  markdownUrl:'/publications/consciousness/continuity-note/continuity-note.md',
  manifestUrl:'/consciousness/ai-alignment/continuity/manifest.json',
  parentUrl:'/consciousness/ai-alignment',parentDoi:'10.5281/zenodo.23294465',
  socialImage:'/publications/consciousness/continuity-note/social.png',
} as const;

export type ContinuitySection={id:string;title:string;number:number|null;sourceTitle:string};
const root=path.join(process.cwd(),'content/consciousness/continuity-note');
export function getContinuitySections():ContinuitySection[]{return JSON.parse(fs.readFileSync(path.join(root,'sections.json'),'utf8'));}
export function readContinuityHtml(){return fs.readFileSync(path.join(root,'article.html'),'utf8');}
export function getContinuitySearchRecords(){
  const html=readContinuityHtml();const sections=getContinuitySections();
  return [{title:continuityNote.publicTitle,context:'Reflective alignment / Continuity research note',url:continuityNote.url,text:continuityNote.description},...sections.map((s,i)=>{
    const start=html.lastIndexOf('<',html.indexOf(`id="${s.id}"`));
    const next=sections[i+1];const end=next?html.lastIndexOf('<',html.indexOf(`id="${next.id}"`)):html.length;
    return {title:s.title,context:'Conscious scaffolding and continuity',url:`${continuityNote.url}#${s.id}`,text:consciousnessPlainText(html.slice(Math.max(0,start),end>start?end:html.length))};
  })];
}
export function continuityManifest(){return {
  schemaVersion:1,publication:continuityNote,kind:'philosophical-research-note',
  relationship:{type:'supplements',title:'Reflective Alignment and AI Consciousness',url:continuityNote.parentUrl,doi:continuityNote.parentDoi},
  completeTextUrl:continuityNote.url,sections:getContinuitySections().map(s=>({...s,url:`${continuityNote.url}#${s.id}`})),
  editionNote:'The complete philosophical research note, including its nine sections, examples, source distinctions, research proposals, funding statement and thirteen references, is available in the initial HTML. The original Version 1.1 PDF is retained unchanged. The developmental account is advanced as a hypothesis with its stated tests, rather than as a completed longitudinal experiment.',
  searchUrl:'/consciousness/search.json',
};}
