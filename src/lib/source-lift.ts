import fs from 'node:fs';
import path from 'node:path';
import editions from '@/config/source-lift.json';
import {sourcePlainText} from '@/lib/source-readout-text';

export type LiftEdition = typeof editions[number];
export interface LiftChapter {
 slug:string;title:string;order:number;htmlPath:string;sourcePages:number[];
 sections:{anchor:string;title:string;level:number}[];words:number;sourceUnit?:string;
}
export interface LiftManifest {
 id:string;title:string;doi:string;description:string;date:string;pdfUrl:string;
 markdownUrl:string;fidelity?:unknown;chapters:LiftChapter[];
}
export const liftEditions = editions;
export const yangMillsHub = '/source-readout/yang-mills';
export function liftManifest(id:string):LiftManifest {
 const filename=path.join(process.cwd(),'content/source-lift',id,'index.json');
 return JSON.parse(fs.readFileSync(filename,'utf8'));
}
export function liftChapters(id:string){return liftManifest(id).chapters;}
export function liftHtml(c:LiftChapter){
 const filename=path.resolve(process.cwd(),c.htmlPath);
 const root=path.resolve(process.cwd(),'content/source-lift');
 if(!filename.startsWith(root+path.sep))throw Error('Invalid reading source');
 return fs.readFileSync(filename,'utf8');
}
export function liftSearchRecords(){
 return liftEditions.flatMap(p=>[{title:p.title,context:'Source Lift / Yang–Mills',url:p.url,text:p.description},...liftChapters(p.id).map(c=>({title:c.title,context:p.title,url:p.url+'/'+c.slug,text:sourcePlainText(liftHtml(c))}))]);
}
