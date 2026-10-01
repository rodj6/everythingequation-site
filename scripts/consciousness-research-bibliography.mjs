/** Bibliography parser based on consciousness-bibliography.mjs; preserves all source fields and compiled numeric order. */
import fs from 'node:fs';
import path from 'node:path';
export function prepareResearchBibliography(original,assetDir){
 const bib=/\\begin\{filecontents\*\}[^\n]*\n([\s\S]*?)\\end\{filecontents\*\}/.exec(original)?.[1];
 if(!bib)return null;
 function group(s,i){while(/\s/.test(s[i]))i++;if(s[i]!=='{')throw new Error(`Expected bibliography field at ${i}`);const start=++i;let depth=1;while(depth&&i<s.length){if(s[i]==='\\'){i+=2;continue;}if(s[i]==='{')depth++;if(s[i]==='}')depth--;i++;}if(depth)throw new Error('Unclosed bibliography field');return {value:s.slice(start,i-1),end:i};}
 const entries=new Map();
 for(const m of bib.matchAll(/@(\w+)\{([^,]+),/g)){let i=m.index+m[0].length;const fields={};while(true){const f=/^\s*,?\s*(\w+)\s*=\s*/.exec(bib.slice(i));if(!f)break;const field=group(bib,i+f[0].length);fields[f[1]]=field.value;i=field.end;}entries.set(m[2],{type:m[1],fields});}
 const compiled=fs.readFileSync(path.join(assetDir,'compiled-bibliography.bbl'),'utf8');
 const order=[...compiled.matchAll(/\\entry\{([^}]+)\}/g)].map(m=>m[1]);
 if(!order.length||order.some(k=>!entries.has(k)))throw new Error('Compiled bibliography order missing or inconsistent');
 const uncited=[...entries.keys()].filter(k=>!order.includes(k));
 function authors(s){return s.split(' and ').map(n=>{const p=n.split(', ');return n==='others'?'et al.':p.length===2?`${p[1]} ${p[0]}`:n;}).join(', ');}
 const rows=order.map(key=>{const f=entries.get(key).fields;let text=`${authors(f.author||f.editor||'').replace(/\.$/,'')}. \\emph{${f.title}}${/[.!?]$/.test(f.title)?"":"."} `;
 for(const k of ['journal','booktitle','series','volume','number','pages','publisher','address','howpublished','edition','version'])if(f[k])text+=`${['journal','booktitle','publisher','address','howpublished'].includes(k)?'':k[0].toUpperCase()+k.slice(1)+' '}${f[k]}. `;
 if(f.date||f.year)text+=`${f.date||f.year}. `;
 if(f.doi)text+=`\\doi{${f.doi}}. `;
 if(f.url)text+=`\\url{${f.url}}. `;
 if(f.eprint)text+=`${f.eprinttype==='arxiv'?'arXiv:':''}${f.eprint}. `;
 if(f.urldate)text+=`Accessed ${f.urldate}. `;
 if(f.note)text+=`${f.note}${/[.!?]$/.test(f.note)?"":"."}`;
 return `\\bibitem{${key}}\n${text}\n`;});
 const bbl=`\\begin{thebibliography}{99}\n${rows.join('\n')}\n\\end{thebibliography}`;
 fs.writeFileSync(path.join(assetDir,'references.bib'),bib);fs.writeFileSync(path.join(assetDir,'references-web.bbl'),bbl);
 return {bbl,entries:Object.fromEntries(entries),order,uncited};
}
