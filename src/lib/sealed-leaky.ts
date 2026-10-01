import fs from 'node:fs';
import path from 'node:path';
import { consciousnessPlainText } from './consciousness';

export const sealedLeaky = {
  title: 'Sealed or Leaky: The Source Tetralemma, Bell-Certified Hidden Information, and Finite-Resource Witnesses',
  shortTitle: 'Sealed or Leaky',
  description: 'Information can survive in the whole and remain inaccessible to a readout. Bell bounds, reversible seals, operational surrogates and finite-resource witnesses make that distinction quantitative.',
  doi: '10.5281/zenodo.23077474',
  doiUrl: 'https://doi.org/10.5281/zenodo.23077474',
  version: '3.1',
  webDate: '2026-10-01',
  manuscriptDate: '2026-09-21',
  url: '/sealed-or-leaky',
  articleUrl: '/articles/sealed-or-leaky',
  pdfUrl: '/publications/sealed-or-leaky/Sealed_or_Leaky_v3.1.pdf',
  texUrl: '/publications/sealed-or-leaky/Sealed_or_Leaky_v3.1.tex',
  markdownUrl: '/publications/sealed-or-leaky/sealed-or-leaky.md',
  verificationUrl: '/publications/sealed-or-leaky/Sealed_or_Leaky_v3.1_Verification.py',
  paperSlug: 'sealed-or-leaky',
};
export interface SealedDocument {
  slug:string; title:string; label:string; kind:string; order:number; url:string;
  sections:{anchor:string; title:string; number:string; level:number}[];
  markdownUrl:string; stats:Record<string,number>;
}
const root=path.join(process.cwd(),'content/sealed-or-leaky');
export function listSealedDocuments():SealedDocument[]{return JSON.parse(fs.readFileSync(path.join(root,'index.json'),'utf8'));}
export function readSealedHtml(document:SealedDocument){return fs.readFileSync(path.join(root,`${document.slug}.html`),'utf8');}
export function getSealedSearchRecords(){return listSealedDocuments().map(d=>({title:d.title,context:`Sealed or Leaky · ${d.label}`,url:d.url,text:consciousnessPlainText(readSealedHtml(d))}));}
