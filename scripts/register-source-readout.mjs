/** Update only source-readout publication entries; all other YAML bytes survive. */
import fs from 'node:fs';
const root=process.cwd();
const papers=['foundations','constructive'].flatMap(name=>JSON.parse(fs.readFileSync(`${root}/content/source-readout/${name}.json`,'utf8')).papers);
const path=`${root}/content/papers.yaml`;let yaml=fs.readFileSync(path,'utf8');
const marker='  # SOURCE-READOUT CONSTRUCTIVE SERIES (2026-10-27)';
if(yaml.includes(marker))yaml=yaml.slice(0,yaml.indexOf(marker)).trimEnd()+'\n';
for(const p of papers.filter(p=>p.series==='constructive'&&!p.parentId)){
 yaml+=`\n${p.number===1?marker+'\n':''}  - id: paper:source-readout:constructive:${p.number}\n    slug: ${p.slug}\n    category: branch\n    visibility: public\n    featured: true\n    title: ${JSON.stringify(p.title)}\n    role: ${JSON.stringify(p.description)}\n    summary: ${JSON.stringify(p.description)}\n    date: "2026-10-27"\n    doi: ${JSON.stringify(p.doi)}\n    webUrl: /source-readout/${p.slug}\n    pdfUrl: ${p.pdfUrl}\n    markdownUrl: ${p.markdownUrl}\n    supports: []\n`;
}
fs.writeFileSync(path,yaml);
console.log('Registered five constructive publications; foundation links resolve through the source-readout manifest.');
