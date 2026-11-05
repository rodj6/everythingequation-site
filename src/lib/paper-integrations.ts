import fs from 'node:fs';
import path from 'node:path';
import {paperIntegrations as allPaperIntegrations} from '@/config/paper-integrations';
import {integrationChapters} from '@/generated/paper-integrations';
export {integrationChapters};
// Keep the legacy consciousness manifest scoped to its original programme.
export const paperIntegrations = allPaperIntegrations.filter(p => !p.programme);
export function integratedChapters(id:string){return integrationChapters.filter(c=>c.paperId===id).sort((a,b)=>a.order-b.order);}
export function integratedManifest(id:string){const paper=allPaperIntegrations.find(p=>p.id===id);if(!paper)throw new Error('Unknown publication');return {schemaVersion:1,publication:paper,kind:'complete-translated-web-edition',chapters:integratedChapters(id),completeMarkdown:paper.markdownUrl,originalPdf:paper.pdfUrl};}
export function integratedSearchRecords(programme?:'source-readout'){return allPaperIntegrations.filter(p=>p.programme===programme).flatMap(p=>[{title:p.title,context:programme?'Source and readout / Complete paper article':'Consciousness / Complete paper article',url:p.url,text:p.description},...integratedChapters(p.id).map(c=>({title:c.title,context:p.title,url:c.url,text:fs.readFileSync(path.join(process.cwd(),c.sourcePath),'utf8').replace(/^---[\s\S]*?---/,'').replace(/<[^>]+>/g,' ').replace(/^#{1,6}\s+/gm,'').replace(/\[([^\]]+)\]\([^)]+\)/g,'$1').replace(/\s+/g,' ')}))]);}
