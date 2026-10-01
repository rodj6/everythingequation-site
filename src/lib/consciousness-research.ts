import fs from "node:fs";
import path from "node:path";
import katex from "katex";
import { consciousnessPlainText, type SearchRecord } from "./consciousness";
import referenceEntries from "@content/consciousness/research/reference-entries.json";

export const researchGlossary=referenceEntries.glossary;
export const researchFAQ=referenceEntries.faq;

const root = path.join(process.cwd(), "content/consciousness/research");
export interface ResearchDocument {
  paperId:string; slug:string; title:string; label:string; kind:string; order:number; url:string;
  sections:{anchor:string;title:string;number:string;level:number}[];
  markdownUrl:string;
  stats:Record<string,number>;
}
export interface ResearchEditorial {
  paperId:string; eyebrow:string; title:string; deck:string;
  sections:{id:string;title:string;html:string}[];
  chapterIntros:{sourceTitle:string;title:string;standfirst:string}[];
}
const identities = [
  {id:"paper-2",number:2,title:"Relational Boundaries and Awareness Localization: Robustness, Composition, and Identification Limits",shortTitle:"What makes a boundary real?",deck:"The conditions under which a relational boundary survives change, composes across scales and can be reconstructed from evidence.",doi:"10.5281/zenodo.23075822",version:"1.0",date:"2026-09-29",step:"Boundary",paperSlug:"consciousness-relational-boundaries"},
  {id:"paper-3",number:3,title:"Learning Effective Interfaces from Opaque Stochastic Systems: Capacity, Selection, and Validation Limits",shortTitle:"Can an interface be learned?",deck:"A complete interaction-law framework separates what an interface can represent, what learning produces, and what held-out evidence supports.",doi:"10.5281/zenodo.23075824",version:"2",date:"2026-09-29",step:"Learning",paperSlug:"consciousness-effective-interfaces"},
  {id:"paper-4",number:4,title:"Identifying Binary Realizations from Intervention Laws: Certificates, Recoding Obstructions, and a Bounded SPC-2/IIT Comparison",shortTitle:"What identifies a realization?",deck:"Intervention laws identify binary coordinates under a declared response model, exposing recoding obstructions and the separate question of grain.",doi:"10.5281/zenodo.23075828",version:"1.1-RC1",date:"2026-09-30",step:"Identification",paperSlug:"consciousness-binary-realizations"},
];
export const researchPapers = identities.map(p=>({...p,doiUrl:`https://doi.org/${p.doi}`,url:`/consciousness/research/${p.id}`,pdfUrl:`/publications/consciousness/${p.id}/${p.id}.pdf`,texUrl:`/publications/consciousness/${p.id}/${p.id}.tex`,markdownUrl:`/publications/consciousness/${p.id}/${p.id}.md`}));
export type ResearchPaper = typeof researchPapers[number];
export function getResearchPaper(id:string) { return researchPapers.find(p=>p.id===id); }
export function listResearchDocuments(paperId?:string):ResearchDocument[] {
  const documents:ResearchDocument[]=JSON.parse(fs.readFileSync(path.join(root,"index.json"),"utf8"));
  return paperId ? documents.filter(d=>d.paperId===paperId) : documents;
}
export function getResearchDocument(paperId:string,slug:string){return listResearchDocuments(paperId).find(d=>d.slug===slug);}
export function readResearchHtml(document:ResearchDocument){return fs.readFileSync(path.join(root,document.paperId,`${document.slug}.html`),"utf8");}
export function getResearchEditorial(paperId:string):ResearchEditorial {
  if(!getResearchPaper(paperId)) throw new Error("Unknown research publication");
  return JSON.parse(fs.readFileSync(path.join(root,`${paperId}-editorial.json`),"utf8"));
}
export function renderResearchEditorial(html:string) {
  return html.replace(/\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)/g,(_,display,inline)=>katex.renderToString((display??inline).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),{displayMode:display!==undefined,throwOnError:true,strict:"ignore",output:"htmlAndMathml",macros:{"\\TV":"\\operatorname{TV}","\\R":"\\mathbb{R}","\\E":"\\mathbb{E}","\\Pr":"\\mathbb{P}"}}));
}
export function getResearchChapterIntro(document:ResearchDocument){
  const normalize=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]/g,"");
  return getResearchEditorial(document.paperId).chapterIntros.find(i=>normalize(i.sourceTitle)===normalize(document.title));
}
export function getResearchSearchRecords():SearchRecord[] {
  const result:SearchRecord[]=[];
  for(const paper of researchPapers){
    const editorial=getResearchEditorial(paper.id);
    result.push({title:editorial.title,context:`Paper ${paper.number} · ${paper.title}`,url:paper.url,text:editorial.deck});
    for(const section of editorial.sections) result.push({title:section.title,context:`Paper ${paper.number} · Article`,url:`${paper.url}#${section.id}`,text:consciousnessPlainText(renderResearchEditorial(section.html))});
  }
  for(const document of listResearchDocuments()) result.push({title:document.title,context:`Paper ${document.paperId.slice(-1)} · ${document.label}`,url:document.url,text:consciousnessPlainText(readResearchHtml(document))});
  for(const term of researchGlossary) result.push({title:term.term,context:"Research glossary",url:`/consciousness/glossary#${term.id}`,text:consciousnessPlainText(term.html)});
  for(const question of researchFAQ) result.push({title:question.question,context:"Research FAQ",url:`/consciousness/faq#${question.id}`,text:consciousnessPlainText(question.html)});
  return result;
}
