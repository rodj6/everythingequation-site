/** Source and rendered checks for the complete Einstein and Yang–Mills editions.
 * Run from the project root. --source-only; --base <origin>; --report <file>.
 * Exact vector formula panels preserve PDF appearance; their PDF text transcripts
 * are linear accessibility/search alternatives, not semantic MathML.
 */
import fs from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { compile } from '@mdx-js/mdx';
import { parse } from 'parse5';
import yaml from 'js-yaml';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { inlineScriptHashes } from './security-headers.mjs';
const args = process.argv.slice(2);
const arg = flag => args.includes(flag) ? args[args.indexOf(flag) + 1] : undefined;
const sourceOnly = args.includes('--source-only');
const base = arg('--base');
const origin = (process.env.NEXT_PUBLIC_SITE_URL || 'https://everythingequation.com').replace(/\/+$/, '');
const report = {checkedAt:new Date().toISOString(), mode:sourceOnly?'source':base?'served HTTP':'production artifacts', checks:0, failures:[], editions:[], limits:['Structural completeness and rendered presence are checked, not mathematical truth.','PDF vector notation is checked as original geometry with nonsemantic linear transcripts.','No new Lean proof or live deployment is verified.']};
function check(ok,message){report.checks++;if(!ok)report.failures.push(message);}
const text = file => fs.readFile(file, 'utf8');
const json = async file => JSON.parse(await text(file));
const isFile = file => fs.stat(file).then(stat => stat.isFile(), () => false);
function localPath(prefix, relative) {
  if (typeof relative !== 'string') throw new Error('Missing local path');
  const target = path.resolve(prefix, relative.replace(/^\/+/, ''));
  const diff = path.relative(path.resolve(prefix), target);
  if (diff === '..' || diff.startsWith('..' + path.sep) || path.isAbsolute(diff)) throw new Error('Invalid local path: ' + relative);
  return target;
}
async function digest(file, algorithm = 'sha256') {
  const hash = createHash(algorithm);
  for await (const chunk of createReadStream(file)) hash.update(chunk);
  return hash.digest('hex');
}
async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true }).catch(error => {
    if (error.code === 'ENOENT') return [];
    throw error;
  });
  const result = [];
  for (const e of entries) {
    const file = path.join(dir, e.name);
    if (e.isDirectory() && !e.name.endsWith('.func')) result.push(...await walk(file));
    else if (e.isFile()) result.push(file);
  }
  return result.sort();
}
function visit(node, action) {
  action(node);
  for (const c of node.childNodes ?? node.children ?? []) visit(c, action);
}
const attrs = node => Object.fromEntries((node.attrs ?? []).map(a => [a.name, a.value]));
const mathKey = x => x.replace(/\s+/g, ' ').trim();
const textKey = x => x.normalize('NFKC').replace(/\s+/g, '');
function inspect(html) {
  const ids = [], links = [], math = [], images = [], prose = [];
  let tableCount = 0, h1 = 0, canonical, errorCount = 0, tableCaptions = 0, tableHeaders = 0;
  function descend(node, hidden = false) {
    const a = attrs(node), tag = node.tagName, classes = (a.class ?? '').split(/\s+/);
    if (a.id) ids.push(a.id);
    if (tag === 'a' && a.href) links.push(a.href);
    if (tag === 'link' && a.rel === 'canonical') canonical = a.href;
    if (tag === 'img') images.push(a);
    if (tag === 'table') tableCount++;
    if (tag === 'caption') tableCaptions++;
    if (tag === 'th') tableHeaders++;
    if (tag === 'h1') h1++;
    if (classes.includes('katex-error')) errorCount++;
    if (tag === 'annotation' && a.encoding === 'application/x-tex')
      math.push((node.childNodes ?? []).map(n => n.value ?? '').join(''));
    hidden ||= ['script', 'style', 'noscript'].includes(tag) || classes.includes('katex-html');
    if (!hidden && node.nodeName === '#text') prose.push(node.value);
    for (const c of node.childNodes ?? []) descend(c, hidden);
  }
  descend(parse(html));
  return { ids, links, math, images, tableCount, tableCaptions, tableHeaders, h1, canonical, errorCount, prose: textKey(prose.join('')) };
}
function containsMath(expectedMath, actual, route) {
  const bag = new Map();
  for (const m of actual) bag.set(mathKey(m), (bag.get(mathKey(m)) ?? 0) + 1);
  for (const m of expectedMath) {
    const key = mathKey(m), count = bag.get(key) ?? 0;
    check(count > 0, `${route}: missing rendered MathML annotation: ${m.slice(0, 180)}`);
    bag.set(key, count - 1);
  }
}
const artifactMap = new Map();
async function indexBuild() {
  const dir = '.next/output';
  if (await isFile(dir + '/config.json')) {
    const config = await json(dir + '/config.json');
    report.layout = 'vercel-adapter';
    check(config.version === 3, 'Expected Vercel adapter build output v3');
    const staticRoot = path.join(dir, 'static');
    for (const file of await walk(staticRoot)) {
      const rel = path.relative(staticRoot, file).split(path.sep).join('/');
      const publicName = config.overrides?.[rel]?.path ?? (rel === 'index.html' ? '' : rel.replace(/\.html$/, ''));
      artifactMap.set('/' + publicName.replace(/^\/+/, ''), file);
    }
    const functions = path.join(dir, 'functions');
    for (const file of await walk(functions)) {
      if (!file.endsWith('.prerender-config.json')) continue;
      const record = await json(file);
      if (!record.fallback) continue;
      const rel = path.relative(functions, file).split(path.sep).join('/').replace(/\.prerender-config\.json$/, '');
      artifactMap.set(rel === 'index' ? '/' : '/' + rel, localPath(path.dirname(file), record.fallback));
    }
  } else {
    report.layout = 'legacy-next';
    for (const dir of ['.next/server/app', '.next/server/pages']) {
      for (const file of await walk(dir)) {
        if (!/\.(?:html|body)$/.test(file)) continue;
        const rel = path.relative(dir, file).split(path.sep).join('/').replace(/\.(?:html|body)$/, '');
        artifactMap.set(rel === 'index' ? '/' : '/' + rel, file);
      }
    }
  }
}
const cache = new Map();
async function load(route) {
  if (!cache.has(route)) cache.set(route, (async () => {
    if (base) {
      const response = await fetch(new URL(route, base), { redirect: 'manual', signal: AbortSignal.timeout(40_000) });
      return { available: response.ok, status: response.status, body: await response.text(), headers: response.headers };
    }
    const file = artifactMap.get(route) ?? localPath('public', decodeURIComponent(route));
    return await isFile(file) ? { available: true, body: await text(file) } : { available: false, body: '' };
  })());
  return cache.get(route);
}
async function page(route) {
  const result = await load(route);
  if (!result.dom) result.dom = inspect(result.body);
  return result;
}
function verifyHeaders(result, route) {
  if (!result.headers) return;
  const headers = result.headers;
  const csp = headers.get('content-security-policy') ?? '';
  const script = csp.split(';').find(s => s.trim().startsWith('script-src ')) ?? '';
  check(script && !/unsafe-inline|unsafe-eval/.test(script), `${route}: strict script CSP missing`);
  check(csp.includes("script-src-attr 'none'"), `${route}: script attribute policy missing`);
  check(headers.get('x-frame-options') === 'DENY', `${route}: frame protection missing`);
  check(headers.get('x-content-type-options') === 'nosniff', `${route}: nosniff missing`);
  check(headers.get('referrer-policy') === 'strict-origin-when-cross-origin', `${route}: referrer policy missing`);
  check(Boolean(headers.get('permissions-policy')), `${route}: permissions policy missing`);
  const hashes = inlineScriptHashes(result.body);
  check(hashes.length > 0, `${route}: page does not contain the expected inline bootstrap`);
  for (const hash of hashes) check(script.includes(hash), `${route}: inline script hash absent`);
}
function collectStringValues(object, result = new Set()) {
  if (typeof object === 'string') result.add(object);
  else if (object && typeof object === 'object')
    for (const value of Object.values(object)) collectStringValues(value, result);
  return result;
}
function hasRoute(values, route) {
  return values.has(route) || values.has(origin + route);
}
function ranges(items) {
  const result = new Set();
  for (const raw of items) {
    const value = String(raw).replace(/^(?:eq(?:uation)?s?|fig(?:ure)?s?|tables?)[.\s-]*/i, '').replace(/[()]/g, '').trim();
    for (const part of value.split(/[,;]\s*/)) {
      const match = /^(\d+)\s*[-–]\s*(\d+)$/.exec(part);
      if (match && Number(match[2]) <= 1000)
        for (let n = Number(match[1]); n <= Number(match[2]); n++) result.add(n);
      else if (/^\d+$/.test(part)) result.add(Number(part));
    }
  }
  return result;
}
async function verifyAsset(item, label) {
  check(/^[a-f0-9]{64}$/i.test(item?.sha256 ?? ''), `${label}: SHA-256 missing`);
  if (!item?.path) return;
  const file = localPath('.', item.path);
  const present = await isFile(file);
  check(present, `${label}: missing asset ${item.path}`);
  if (present) {
    check(await digest(file) === item.sha256, `${label}: asset differs from supplied bytes`);
    if (Number.isInteger(item.bytes)) check((await fs.stat(file)).size === item.bytes, `${label}: asset byte count differs`);
    if (item.remoteMd5) check(await digest(file, 'md5') === item.remoteMd5, `${label}: asset does not match the recorded published file`);
  }
  if (base && item.path.startsWith('public/')) {
    const response = await fetch(new URL(item.path.slice('public'.length), base), { signal: AbortSignal.timeout(50_000) });
    check(response.ok, `${label}: download failed with HTTP ${response.status}`);
    const hash = createHash('sha256');
    if (response.body) for await (const part of response.body) hash.update(part);
    if (item.path.endsWith('.pdf')) check(response.headers.get('content-type')?.includes('application/pdf'), `${label}: wrong download content type`);
    if (item.path.endsWith('.zip')) check(response.headers.get('content-type')?.includes('application/zip'), `${label}: wrong archive content type`);
    check(hash.digest('hex') === item.sha256, `${label}: downloaded bytes differ`);
  }
}
async function parseChapter(file, route) {
  const source = await text(file);
  const front = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(source);
  const metadata = front ? yaml.load(front[1]) : {};
  check(typeof metadata.title === 'string' && typeof metadata.description === 'string' && Number.isFinite(metadata.order), `${file}: chapter metadata invalid`);
  const body = source.slice(front?.[0].length ?? 0);
  check(!body.includes('\u2014'), `${file}: em dash in new text`);
  check(!body.includes('\ufffd') && !/\b(?:TODO|TBD|SOURCE_REQUIRED|INSERT_HERE)\b/.test(body), `${file}: placeholder or replacement character`);
  const anchors = [...body.matchAll(/<[a-zA-Z][\w-]*\s+id=["']([^"']+)["'][^>]*>/g)].map(m => m[1]);
  check(anchors.length === new Set(anchors).size, `${file}: duplicate source anchor`);
  check(anchors.length > 0, `${file}: no stable source anchors`);
  const result = { file, route, metadata, body, anchors, math: [], displayed: [], prose: [], images: [], tables: 0, links: [], equationLabels: new Set() };
  function inventory() {
    return tree => visit(tree, node => {
      const kind = node.type;
      if (kind === 'inlineMath' || kind === 'math') result.math.push(node.value);
      if (kind === 'math') result.displayed.push(node.value);
      if (kind === 'text') {
        check(!node.value.includes('\u2014'), `${file}: em dash in prose`);
        if (textKey(node.value).length >= 60) result.prose.push(node.value);
      }
      if (kind === 'link') result.links.push(node.url);
      if (kind === 'image') result.images.push({ url: node.url, alt: node.alt });
      if (kind === 'table') result.tables++;
      if (kind === 'mdxJsxFlowElement' || kind === 'mdxJsxTextElement') {
        const a = Object.fromEntries((node.attributes ?? []).filter(x => x.type === 'mdxJsxAttribute').map(x => [x.name, x.value]));
        if (node.name === 'table') result.tables++;
        if (node.name === 'img' && typeof a.src === 'string') result.images.push({ url: a.src, alt: a.alt });
        if (node.name === 'a' && typeof a.href === 'string') result.links.push(a.href);
      }
    });
  }
  try {
    const compiled = await compile(source, {
      remarkPlugins: [remarkFrontmatter, remarkGfm, remarkMath, inventory],
      rehypePlugins: [[rehypeKatex, { strict: 'error', throwOnError: true }]],
    });
    check(compiled.messages.length === 0, `${file}: ${compiled.messages.map(message => [String(message), message.cause?.message].filter(Boolean).join(': ')).join('; ')}`);
  } catch (error) { check(false, `${file}: MDX compilation error: ${String(error)}`); }
  for (const equation of result.displayed)
    for (const tag of equation.matchAll(/\\(?:tag\*?\{\s*(\d+)\s*\}|text\{\((\d+)\)\})/g))
      result.equationLabels.add(Number(tag[1] ?? tag[2]));
  for (const image of result.images) {
    check(typeof image.alt === 'string' && image.alt.trim().length >= 8, `${file}: missing descriptive figure alt text ${image.url}`);
    const imageUrl = new URL(image.url, origin + route);
    if (imageUrl.origin === new URL(origin).origin)
      check(await isFile(localPath('public', decodeURIComponent(imageUrl.pathname))), `${file}: missing image ${image.url}`);
  }
  return result;
}

const authoritative = {
  'einstein-1916': {doi:'10.5281/zenodo.24064553',sha256:'daff44d8917c882e012373c737add432217bd991d48b5e03e176a5a2413697c0',pages:48},
  'yang-mills-reconstruction': {doi:'10.5281/zenodo.24173681',sha256:'1da08819887a5e8e6321515d3f87ea0cb43c86a5c8409ccaeccf4c81f756f116',pages:530},
  'yang-mills-companion': {doi:'10.5281/zenodo.24173681',sha256:'deaa9ede71760d5758ffac8cd70084385773e4dad4de354f3b5d437e83706832',pages:458},
};
const targets=new Set();
function internal(href,current){
 try {const url=new URL(href,origin+current);if(url.origin===new URL(origin).origin)targets.add(url.pathname+url.hash);}
 catch {check(false,`Invalid URL ${href} at ${current}`);}
}
function simpleText(s){return String(s).normalize('NFKC').replace(/\s+/g,' ').trim();}
async function preserve(checksums){
 check(checksums?.baseline?.sha256==='f97b9d2f3b6845272bcb2481f45c7226bf62dd816f0cb394982a29fd0569b3ad','Latest redesigned baseline identity differs');
 check(checksums.preserved?.length>90,'Original publication preservation inventory is missing');
 report.preservedFiles=0;
 for(const item of checksums.preserved??[]){
  const f=localPath('.',item.path);check(await isFile(f)&&await digest(f)===item.sha256,`Preserved publication changed: ${item.path}`);report.preservedFiles++;
 }
}
async function verifyMetadata(checksums,configs){
 for(const [id,spec] of Object.entries(authoritative)){
  const item=checksums.publications.find(p=>p.id===id),p=configs.find(p=>p.id===id);
  check(p?.doi===spec.doi&&p?.url==='/source-readout/'+id,`${id}: canonical article identity differs`);
  check(item?.doi===spec.doi&&item?.pdf?.sha256===spec.sha256&&item?.status==='published',`${id}: authoritative source binding differs`);
  check(item?.pdf?.url===p?.pdfUrl&&item?.pdf?.path==='public'+p?.pdfUrl,`${id}: PDF URL mismatch`);
  await verifyAsset(item.pdf,id+' original PDF');
 }
 const doc=yaml.load(await text('content/papers.yaml'));const records=Array.isArray(doc)?doc:doc.papers;
 const ym=records.filter(p=>p.doi==='10.5281/zenodo.24173681');
 check(ym.length===1&&ym[0].slug==='yang-mills','Yang–Mills must have one shared publication registry record');
 check(configs.filter(p=>p.doi==='10.5281/zenodo.24173681').length===2,'Both YM article identities must share the record');
}
async function verifyRendered(route,source){
 const out=await page(route);check(out.available,`${route}: built/served HTML absent`);
 check(out.dom.h1===1&&out.dom.canonical===origin+route,`${route}: H1 or canonical invalid`);
 check(new Set(out.dom.ids).size===out.dom.ids.length,`${route}: duplicate rendered anchors`);
 check(out.dom.errorCount===0,`${route}: mathematical rendering errors`);
 verifyHeaders(out,route);
 if(source){
  check(out.dom.prose.includes(source.prose),`${route}: source prose/transcripts are not complete in rendered output`);
  for(const id of source.ids)check(out.dom.ids.includes(id),`${route}: rendered anchor missing ${id}`);
  for(const img of source.images)check(out.dom.images.some(i=>i.src===img.src&&i.alt===img.alt),`${route}: rendered vector/source image missing ${img.src}`);
 }
 for(const href of out.dom.links)internal(href,route);
 return out;
}
async function verifyEinstein(p){
 const files=(await walk('content/paper-integrations/einstein-1916')).filter(f=>f.endsWith('.mdx'));
 check(files.length>=10,'Einstein complete reading path is too short or absent');
 const ledger=await json('docs/einstein-ym/einstein-1916.json');
 const rows=ledger.records??ledger.coverage??ledger.entries??[];
 check(rows.length>=24,'Einstein source coverage is absent or too coarse');
 const stat={id:p.id,chapters:[],math:0,displayed:0,coverage:rows.length};report.editions.push(stat);
 const sources=new Map();let opening;
 if(!sourceOnly)opening=await verifyRendered(p.url);
 for(const file of files){
  const slug=path.basename(file,'.mdx'),route=p.url+'/'+slug,c=await parseChapter(file,route);sources.set(slug,c);stat.chapters.push(route);stat.math+=c.math.length;stat.displayed+=c.displayed.length;
  if(!sourceOnly){const out=await verifyRendered(route);containsMath(c.math,out.dom.math,route);for(const id of c.anchors)check(out.dom.ids.includes(id),`${route}: source anchor missing ${id}`);for(const fragment of c.prose)check(out.dom.prose.includes(textKey(fragment)),`${route}: source paragraph missing ${fragment.slice(0,80)}`);check(opening.dom.links.includes(route),`${route}: absent from opening reading path`);}
 }
 check(stat.math>150&&stat.displayed>100,'Einstein full mathematics not present');
 const comparison=await json('docs/einstein-ym/einstein-math-comparison.json');
 check(comparison.sourcePdfSha256===authoritative[p.id].sha256&&comparison.mathematicalMultisetMatches===true&&comparison.sourceMathAnnotations+comparison.addedProofEndMarkers===comparison.webMathAnnotations,'Einstein matching-source math comparison is invalid');
 check(comparison.webMathAnnotations===stat.math,'Einstein web math no longer matches its comparison receipt');
 check(rows.filter(row=>row.type==='equation').length===211,'Einstein 211 original numbered equations not fully mapped');
 for(const row of rows){
  const destination=row.destinationRoute??row.destination??row.route??row.url;
  const chapter=row.destinationChapter??row.chapter??(typeof destination==='string'?destination.split('/').at(-1)?.split('#')[0]:undefined);
  const anchor=row.anchor??(typeof destination==='string'?destination.split('#')[1]:undefined);
  check(Boolean(anchor)&&sources.get(chapter)?.anchors.includes(anchor),`Einstein invalid coverage destination ${chapter}#${anchor}`);
  if(row.type==='equation'){
   const wanted=String(row.sourceItem),math=sources.get(chapter)?.math??[];
   check(math.some(expression=>[...expression.matchAll(/\\(?:tag\{([^}]+)\}|text\{\(([^)]+)\)\})/g)].some(match=>(match[1]??match[2])===wanted)),`Einstein original equation tag ${wanted} is absent from its mapped chapter`);
  }
  check(Number.isInteger(row.sourcePdfPage)||Array.isArray(row.sourcePdfPages)&&row.sourcePdfPages.length>0,`Einstein coverage row lacks physical PDF locator ${chapter}#${anchor}`);
 }
 return stat;
}
async function verifyYangMills(p,independent){
 const index=await json('content/source-lift/'+p.id+'/index.json');
 const chapters=index.chapters??[];
 check(index.id===p.id&&chapters.length>10,`${p.id}: article chapter manifest missing`);
 const formulaPath='public/publications/source-lift/'+p.id+'/formula-inventory.json';
 const blockPath='public/publications/source-lift/'+p.id+'/source-block-inventory.json';
 const formulas=await json(formulaPath),blocks=await json(blockPath);
 const formulaRows=Array.isArray(formulas)?formulas:formulas.formulas??formulas.figures??[];
 const blockRows=Array.isArray(blocks)?blocks:blocks.blocks??[];
 const stat={id:p.id,chapters:[],formulaPanels:formulaRows.length,sourceBlocks:blockRows.length,coverage:0};report.editions.push(stat);
 check(formulaRows.length>100&&blockRows.length>500,`${p.id}: complete source/formula inventories missing`);
 check(independent?.sha256===authoritative[p.id].sha256&&independent?.physicalPdfPages===authoritative[p.id].pages,`${p.id}: independent inventory refers to wrong PDF`);
 const seenPages=new Set(),seenAssets=new Set(),sources=new Map();let opening,tableCount=0;
 if(!sourceOnly)opening=await verifyRendered(p.url);
 for(const chapter of chapters){
  const file=chapter.htmlPath??chapter.sourcePath;
  check(typeof file==='string'&&await isFile(localPath('.',file)),`${p.id}: chapter file missing ${file}`);
  if(!file||!(await isFile(file)))continue;
  const body=await text(file),dom=inspect(body),route=chapter.url??p.url+'/'+chapter.slug;
  check(!body.includes('\u2014')&&!body.includes('\ufffd'),`${file}: em dash or damaged text`);
  check(!/<(?:script|iframe|object|embed)\b/i.test(body),`${file}: embedded document/script is not an article`);
  check(dom.ids.length===new Set(dom.ids).size,`${file}: duplicate anchors`);
  check(dom.prose.length>50,`${file}: absent article content`);
  check(dom.tableCaptions===dom.tableCount&&dom.tableHeaders>=dom.tableCount,`${file}: table transcripts lack captions or header cells`);
  sources.set(chapter.slug,{dom,body,route});stat.chapters.push(route);
  tableCount+=dom.tableCount;
  for(const pg of chapter.sourcePages??[])seenPages.add(pg);
  for(const img of dom.images){
   check(img.alt?.trim()&&img.src?.startsWith('/publications/source-lift/'+p.id+'/math/'),`${file}: absent accessible equation transcript or wrong asset`);
   seenAssets.add(img.src);
  }
  if(!sourceOnly){const out=await verifyRendered(route,dom);check(opening.dom.links.includes(route),`${route}: missing from reading path`);}
 }
 const bodyStart=independent.bodyStartPhysicalPage;
 for(let n=bodyStart;n<=independent.physicalPdfPages;n++)check(seenPages.has(n),`${p.id}: substantive PDF page ${n} absent from reading path`);
 for(const f of formulaRows){
  const url=f.asset??f.url;const file=localPath('public',url);
  check(seenAssets.has(url),`${p.id}: formula inventory asset not used ${url}`);
  check(Number.isInteger(f.sourcePage??f.page)&&(f.sourcePage??f.page)>=1&&(f.sourcePage??f.page)<=independent.physicalPdfPages,`${p.id}: formula lacks source locator ${url}`);
  check(Array.isArray(f.bbox)&&f.bbox.length===4&&f.bbox.every(Number.isFinite)&&f.bbox[2]>f.bbox[0]&&f.bbox[3]>f.bbox[1],`${p.id}: invalid formula crop ${url}`);
  check(String(f.text??'').trim().length>0,`${p.id}: equation transcript missing ${url}`);
  check(await isFile(file),`${p.id}: vector equation absent ${url}`);
  if(await isFile(file)){
   const svg=await text(file);
   check(/<svg\b/.test(svg)&&/<title>[^<]+<\/title>/.test(svg)&&!/<(?:script|foreignObject)\b/i.test(svg),`${p.id}: invalid/unsafe vector equation ${url}`);
   const glyphs=new Set([...svg.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
   const refs=[...svg.matchAll(/(?:xlink:)?href="#([^"]+)"/g)].map(m=>m[1]);
   check(refs.length>0&&refs.every(ref=>glyphs.has(ref)),`${p.id}: vector equation has missing glyph definitions ${url}`);
   const box=/viewBox="([^"]+)"/.exec(svg)?.[1]?.trim().split(/\s+/).map(Number);
   check(box?.length===4&&Math.abs(box[0]-f.bbox[0])<.01&&Math.abs(box[1]-f.bbox[1])<.01&&Math.abs(box[2]-(f.bbox[2]-f.bbox[0]))<.01&&Math.abs(box[3]-(f.bbox[3]-f.bbox[1]))<.01,`${p.id}: vector crop differs from recorded equation geometry ${url}`);
  }
 }
 check([...seenAssets].every(asset=>formulaRows.some(f=>(f.asset??f.url)===asset)),`${p.id}: equation HTML lacks inventory binding`);
 const sourceKeys=new Set(),pages=new Map();
 for(const row of blockRows){
  const key=row.sourcePage+':'+row.sourceBlock;
  check(!sourceKeys.has(key),`${p.id}: duplicate source block ${key}`);sourceKeys.add(key);
  check(Number.isInteger(row.sourcePage)&&row.sourcePage>=1&&row.sourcePage<=independent.physicalPdfPages,`${p.id}: invalid source block page ${key}`);
  const source=sources.get(row.chapter);
  check(Boolean(source)&&source.dom.ids.includes(row.anchor),`${p.id}: source block lacks web destination ${row.chapter}#${row.anchor}`);
  check(row.route===p.url+'/'+row.chapter+'#'+row.anchor,`${p.id}: source block route binding differs ${key}`);
  pages.set(row.sourcePage,(pages.get(row.sourcePage)??0)+String(row.text??'').length);
 }
 for(const pageRow of independent.pageInventory){
  const characters=pages.get(pageRow.physicalPage)??0;
  check(characters>=pageRow.bodyTextCharacters*.97,`${p.id}: source block character coverage drops on PDF page ${pageRow.physicalPage} (${characters}/${pageRow.bodyTextCharacters})`);
 }
 function overlap(a,b){return a[0]<b[2]+1&&a[2]>b[0]-1&&a[1]<b[3]+1&&a[3]>b[1]-1;}
 const exactTables=independent.tableRegions??[];
 check(exactTables.length>0&&tableCount>=exactTables.length,`${p.id}: independently detected source tables lack accessible HTML transcripts`);
 stat.sourceTables=exactTables.length;
 for(const table of exactTables){
  const [left,top,right,bottom]=table.bbox;
  check(formulaRows.some(f=>f.sourcePage===table.physicalPage&&f.bbox[0]<=left+2&&f.bbox[1]<=top+2&&f.bbox[2]>=right-2&&f.bbox[3]>=bottom-2&&seenAssets.has(f.asset)),`${p.id}: PDF p${table.physicalPage} ${table.number} lacks complete original vector geometry`);
 }
 const obligations=[...independent.headings.map(x=>({...x,inventoryKind:'heading'})),...independent.formalItems.map(x=>({...x,inventoryKind:'formal'})),...independent.numberedEquations.map(x=>({...x,inventoryKind:'equation'})),...independent.captionedTables.map(x=>({...x,inventoryKind:'table-caption'})),...exactTables.map(x=>({...x,inventoryKind:'table-region'}))];
 for(const obligation of obligations){
  const match=blockRows.find(row=>row.sourcePage===obligation.physicalPage&&overlap(row.bbox,obligation.bbox));
  const label=obligation.number??obligation.label??obligation.title??'';
  check(Boolean(match),`${p.id}: independent ${obligation.inventoryKind} ${label} on PDF p${obligation.physicalPage} has no source-to-web binding`);
  if(match){
   const source=sources.get(match.chapter);
   check(Boolean(source)&&source.dom.ids.includes(match.anchor),`${p.id}: independent ${obligation.inventoryKind} ${label} has no rendered-source anchor`);
   if(!sourceOnly){const out=await page(p.url+'/'+match.chapter);check(out.dom.ids.includes(match.anchor),`${p.id}: independent ${obligation.inventoryKind} ${label} anchor absent from production output`);}
  }
 }
 stat.coverage=obligations.length;
 return {stat,index,sources,blockRows,independent};
}
async function discovery(editions,configs){
 const routes=['/sitemap.xml','/feed.xml','/llms.txt','/graph.json','/source-readout/manifest.json','/source-readout/search.json'];
 const payload=await Promise.all(routes.map(async route=>{const r=await load(route);check(r.available,`Missing discovery endpoint ${route}`);return route.endsWith('.json')?JSON.parse(r.body):r.body;}));
 const [sitemap,feed,llms,graph,manifest,search]=payload;
 const searchStrings=collectStringValues(search),manifestStrings=collectStringValues(manifest),graphStrings=collectStringValues(graph);
 const searchByRoute=new Map(search.map(row=>[row.url,row]));
 const [hub,programme,papers,articles]=await Promise.all(['/source-readout/yang-mills','/source-readout','/papers','/articles'].map(r=>verifyRendered(r)));
 check(programme.dom.links.includes('/source-readout/yang-mills'),'Source–Readout entrance lacks shared YM hub');
 for(const edition of editions){
  const p=configs.find(p=>p.id===edition.id),opening=await page(p.url);
  const chapterManifest=await load(p.manifestUrl);
  check(chapterManifest.available,`${p.id}: reading manifest response missing`);
  const manifestRecord=JSON.parse(chapterManifest.body);
  const manifestChapters=manifestRecord.chapters??[];
  check(manifestChapters.length===edition.chapters.length,`${p.id}: reading manifest chapter inventory differs`);
  for(const chapter of edition.chapters)check(manifestChapters.some(row=>row.url===chapter||p.url+'/'+row.slug===chapter),`${p.id}: reading manifest omits ${chapter}`);
  const markdown=await load(p.markdownUrl);
  check(markdown.available&&markdown.body.includes('https://doi.org/'+p.doi),`${p.id}: complete text download missing or incorrectly identified`);
  if(p.id==='einstein-1916'){
   for(const filename of (await walk('content/paper-integrations/einstein-1916')).filter(f=>f.endsWith('.mdx'))){
    const source=await text(filename),front=/^---\r?\n[\s\S]*?\r?\n---\s*\n/.exec(source);
    check(markdown.body.includes(source.slice(front?.[0].length??0)),`${p.id}: complete Markdown omits ${filename}`);
   }
  }else{
   const inventory=authoritative[p.id];
   for(let n=1;n<=inventory.pages;n++)check(markdown.body.includes('## Source page '+n+'\n'),`${p.id}: searchable original transcript omits physical PDF p${n}`);
   check(markdown.body.includes('not semantic LaTeX or MathML'),`${p.id}: searchable transcript must state its notation limitation`);
  }
  for(const url of [p.supplementUrl,p.texUrl].filter(Boolean)){
   const filename=localPath('public',url),present=await isFile(filename);
   check(present,`${p.id}: configured source/supplement missing ${url}`);
   if(present)await verifyAsset({path:'public'+url,sha256:await digest(filename),bytes:(await fs.stat(filename)).size},p.id+' companion '+url);
   check(opening.dom.links.includes(url),`${p.id}: opening page omits source/supplement link ${url}`);
  }
  for(const route of [p.url,...edition.chapters]){
   check(sitemap.includes(origin+route+'</loc>'),`Sitemap missing ${route}`);
   check(hasRoute(manifestStrings,route),`Programme manifest missing ${route}`);
   check(hasRoute(searchStrings,route),`Full-text search missing ${route}`);
   check((searchByRoute.get(route)?.text?.length??0)>=(route===p.url?50:400),`Search lacks substantive chapter text ${route}`);
   check(hasRoute(graphStrings,route),`Research graph missing ${route}`);
  }
  check(feed.includes(origin+p.url)&&llms.includes(origin+p.url),`${p.id}: feed or llms missing`);
  check(articles.dom.links.includes(p.url),`${p.id}: article listing missing`);
  check(opening.dom.links.includes('https://doi.org/'+p.doi)&&opening.dom.links.includes(p.pdfUrl),`${p.id}: DOI/download links missing`);
  const record=await verifyRendered('/papers/'+p.paperSlug);
  check(record.dom.links.includes(p.url)||record.dom.links.includes('/source-readout/yang-mills'),`${p.id}: publication detail lacks reading path`);
  if(p.id.startsWith('yang-mills-'))check(hub.dom.links.includes(p.url),`${p.id}: shared hub lacks reading path`);
 }
 const ym=graph.nodes.filter(n=>n.id?.startsWith('atlas:')&&String(n.url??'').includes('yang-mills'));
 check(graph.nodes.some(n=>n.id==='atlas:gravity-einstein-1916'),'Atlas Einstein entry missing from graph');
 check(graph.nodes.some(n=>n.id==='atlas:yang-mills-source-readout')&&graph.nodes.some(n=>n.id==='atlas:yang-mills-mathematical-companion'),'Atlas Yang–Mills relation missing');
 for(const target of targets){
  const u=new URL(target,origin);
  if(['/research','/research-intelligence','/tier-1','/what-is-the-everything-equation','/problems/consciousness-field-theorem'].includes(u.pathname))continue;
  if(await isFile(localPath('public',decodeURIComponent(u.pathname))))continue;
  const destination=await page(u.pathname);check(destination.available,`Broken local route ${target}`);
  if(u.hash)check(destination.dom.ids.includes(decodeURIComponent(u.hash.slice(1))),`Broken local anchor ${target}`);
 }
 report.localTargets=targets.size;
 if(base){const missing=await load('/einstein-yang-mills-verification-missing');check(missing.status===404,'Missing page did not return 404');verifyHeaders(missing,'missing page');}
}
async function main(){
 if(arg('--only')&&!Object.hasOwn(authoritative,arg('--only')))throw Error('Unknown edition requested: '+arg('--only'));
 const checksums=await json('docs/einstein-ym/publication-checksums.json');
 const integrated=await json('src/config/paper-integrations.json'),ym=await json('src/config/source-lift.json');
 const configs=[integrated.find(p=>p.id==='einstein-1916'),...ym];
 await preserve(checksums);await verifyMetadata(checksums,configs);
 if(!sourceOnly&&!base){if(!(await isFile('.next/security-headers-report.json')))throw Error('Production CSP postbuild receipt missing; wait for complete build/postbuild');await indexBuild();if(!artifactMap.has('/'))throw Error('No stable production output; wait for complete build/postbuild');}
 if(!arg('--only')||arg('--only')==='einstein-1916')await verifyEinstein(configs[0]);
 const sourceInventory=await json('docs/einstein-ym/ym-source-inventory.json');
 for(const p of ym)if(!arg('--only')||arg('--only')===p.id)await verifyYangMills(p,sourceInventory.papers.find(x=>x.id===p.id));
 if(!sourceOnly&&!arg('--only'))await discovery(report.editions,configs);
}
try{await main();}catch(error){check(false,error.stack??String(error));}
report.passed=report.checks-report.failures.length;
if(arg('--report')){await fs.mkdir(path.dirname(arg('--report')),{recursive:true});await fs.writeFile(arg('--report'),JSON.stringify(report,null,2)+'\n');}
console.log(JSON.stringify({...report,failures:report.failures.slice(0,40)},null,2));
if(report.failures.length)process.exitCode=1;
