/** Focused production QA. Optional Playwright is supplied by PLAYWRIGHT_MODULE.
 * Start the production server first, then:
 * PLAYWRIGHT_MODULE=/path/to/playwright node scripts/verify-agency.mjs http://127.0.0.1:3000
 */
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {parse} from 'parse5';
import {spawn} from 'node:child_process';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const base=process.argv[2]||'http://127.0.0.1:3000';
const out='docs/agency/browser';fs.mkdirSync(out,{recursive:true});
const chapters=JSON.parse(fs.readFileSync('content/consciousness/agency/index.json','utf8'));
const routes=['/consciousness/agency',...chapters.map(d=>d.url),'/articles/agency-and-the-constructed-self','/consciousness','/consciousness/research','/consciousness/development','/consciousness/faq','/consciousness/glossary','/papers/bounded-agency-and-reflective-freedom'];
let server;
if(process.argv.includes('--start-server')){
 server=spawn(process.execPath,['node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port',new URL(base).port],{env:{...process.env,SKIP_ZENODO:'1'},stdio:'ignore'});
 for(let i=0;i<80;i++){try{if((await fetch(base)).ok)break;}catch{}await new Promise(r=>setTimeout(r,250));}
}
const report={checks:[],failures:[],errors:[],screenshots:[],internalLinks:0};
function check(name,pass,detail){report.checks.push({name,pass,detail});if(!pass)report.failures.push(name);}
const browser=await chromium.launch({headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
const links=new Set();
try{
 for(const [device,width,height] of [['desktop',1440,1000],['mobile',390,844]]){
  const context=await browser.newContext({viewport:{width,height},reducedMotion:'reduce',isMobile:device==='mobile',hasTouch:device==='mobile'});
  const page=await context.newPage();
  page.on('pageerror',e=>report.errors.push(e.message));
  for(const route of routes){
   const response=await page.goto(base+route,{waitUntil:'networkidle'});
   check(`${device} ${route}: HTTP 200`,response.status()===200,response.status());
   const sizes=await page.evaluate(()=>({page:document.documentElement.scrollWidth,viewport:document.documentElement.clientWidth}));
   check(`${device} ${route}: no horizontal page overflow`,sizes.page<=sizes.viewport+1,sizes);
   check(`${device} ${route}: no failed math`,await page.locator('.katex-error').count()===0);
   check(`${device} ${route}: one page title`,await page.locator('h1').count()===1);
   if(route.includes('/agency/')){
    const d=chapters.find(d=>d.url===route);
    if(d.stats.equations)check(`${device} ${route}: every formula has MathML`,await page.locator('.quantum-publication-text math').count()===d.stats.equations);
    check(`${device} ${route}: content present`,(await page.locator('.quantum-publication-text').innerText()).length>1000);
   }
   if(device==='desktop')for(const href of await page.locator('a[href]').evaluateAll(as=>as.map(a=>a.getAttribute('href')))){
    if(href.startsWith('/')||href.startsWith('#'))links.add(new URL(href,base+route).href);
   }
   const key=route.split('/').pop();
   if(['/consciousness/agency','/articles/agency-and-the-constructed-self','/consciousness'].includes(route)){
    const file=path.join(out,`${key}-${device}.png`);await page.screenshot({path:file,animations:'disabled',fullPage:route==='/consciousness/agency'});report.screenshots.push(file);
   }
   if(key==='evidence-and-adaptive-inquiry'){
    await page.locator('#eq-6-11').scrollIntoViewIfNeeded();await page.screenshot({path:path.join(out,`threshold-${device}.png`),animations:'disabled'});
    await page.locator('table').first().scrollIntoViewIfNeeded();
    check(`${device}: table keyboard scroll region`,await page.locator('.agency-table-scroll').first().getAttribute('tabindex')==='0');
    await page.screenshot({path:path.join(out,`benchmark-${device}.png`),animations:'disabled'});
   }
   if(key==='revising-an-evaluative-rule'){
    const img=page.locator('.quantum-publication-text img').first();await img.scrollIntoViewIfNeeded();
    check(`${device}: Figure 1 loads`,await img.evaluate(i=>i.complete&&i.naturalWidth>0));
    await page.screenshot({path:path.join(out,`revision-figure-${device}.png`),animations:'disabled'});
   }
   if(key==='perspective-history-and-sourcehood'){
    await page.locator('.quantum-publication-text h2').nth(1).scrollIntoViewIfNeeded();await page.screenshot({path:path.join(out,`philosophy-${device}.png`),animations:'disabled'});
   }
  }
  await page.goto(base+'/consciousness/agency',{waitUntil:'networkidle'});
  await page.getByRole('searchbox').fill('reflective');
  await page.waitForFunction(()=>document.querySelectorAll('.c-search-results a').length>0);
  check(`${device}: agency appears in programme search`,await page.locator('.c-search-results a').evaluateAll(as=>as.some(a=>a.getAttribute('href')?.startsWith('/consciousness/agency'))));
  await context.close();
 }
 const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});const page=await nojs.newPage();
 await page.goto(base+'/consciousness/agency/evidence-and-adaptive-inquiry');
 check('Without JavaScript: full proof visible',(await page.locator('.quantum-publication-text').innerText()).includes('lazy assignment'));
 check('Without JavaScript: math present',await page.locator('math').count()>100);
 await nojs.close();
 // Check destinations and fragments once per internal URL, using fetched server HTML.
 const cache=new Map();
 async function doc(url){const u=new URL(url);u.hash='';const key=u.href;if(cache.has(key))return cache.get(key);const p=(async()=>{const r=await fetch(key);const html=r.headers.get('content-type')?.includes('text/html')?await r.text():'';const ids=new Set();function walk(n){for(const a of n.attrs||[])if(a.name==='id')ids.add(a.value);for(const c of n.childNodes||[])walk(c);}if(html)walk(parse(html));return{status:r.status,ids};})();cache.set(key,p);return p;}
 for(const url of links){const u=new URL(url);const d=await doc(url);check(`Internal link ${u.pathname}${u.hash}`,d.status===200&&(!u.hash||d.ids.has(decodeURIComponent(u.hash.slice(1)))),d.status);}
 report.internalLinks=links.size;
 check('No browser exceptions',report.errors.length===0,report.errors);
}finally{await browser.close();server?.kill();fs.writeFileSync('docs/agency/browser-verification.json',JSON.stringify(report,null,2)+'\n');}
console.log(JSON.stringify({checks:report.checks.length,failures:report.failures,errors:report.errors,internalLinks:report.internalLinks},null,2));
if(report.failures.length)process.exit(1);
