/** Browser verification against a production build. Optional QA dependencies:
 * Playwright + Chromium. PLAYWRIGHT_MODULE and CHROME_PATH can select local installations.
 * node scripts/verify-consciousness-research-browser.mjs [base-url]
 * Add --start-server to start and stop a local production server for the check.
 */
import fs from 'node:fs';
import path from 'node:path';
import {spawn} from 'node:child_process';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const base=process.argv.find(a=>a.startsWith('http'))||'http://127.0.0.1:3002';
let server;
if(process.argv.includes('--start-server')){
  server=spawn(process.execPath,['node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port',new URL(base).port],{env:{...process.env,SKIP_ZENODO:'1'},stdio:'ignore'});
  for(let i=0;i<40;i++){try{if((await fetch(base)).ok)break;}catch{}await new Promise(r=>setTimeout(r,250));}
}
const out='evidence/consciousness-research';fs.mkdirSync(out,{recursive:true});
const report={checkedAt:new Date().toISOString(),base,checks:[],failures:[],consoleErrors:[],screenshots:[]};
const check=(name,pass,detail)=>{report.checks.push({name,pass,detail});if(!pass)report.failures.push(name);};
const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{}),args:['--disable-dev-shm-usage','--disable-gpu']});
const listen=p=>{p.on('pageerror',e=>report.consoleErrors.push(e.message));p.on('console',m=>{if(m.type()==='error')report.consoleErrors.push(m.text());});};
async function screenshot(p,name){const file=path.join(out,`${name}.png`);await p.screenshot({path:file,animations:'disabled'});report.screenshots.push(file);}
async function overflow(p,name){const m=await p.evaluate(()=>({width:document.documentElement.scrollWidth,viewport:document.documentElement.clientWidth}));check(`${name}: no page overflow`,m.width<=m.viewport+1,m);}
const routes=[
  ['/consciousness','overview'],['/consciousness/research','programme'],
  ['/consciousness/research/paper-2','boundary-article'],['/consciousness/research/paper-3','learning-article'],['/consciousness/research/paper-4','identification-article'],
  ['/consciousness/research/paper-2/robust-reconstruction-of-joint-experiments','boundary-math'],
  ['/consciousness/research/paper-2/the-inherited-realization-and-finite-operational-setting','resource-table'],
  ['/consciousness/research/paper-3/final-matched-state-learning-comparison','learning-results'],
  ['/consciousness/research/paper-3/appendix-b-stage-specific-numerical-results','learning-tables'],
  ['/consciousness/research/paper-4/identification-from-an-unlabeled-response-family','identification-proof'],
  ['/consciousness/research/paper-4/executed-official-intrinsic-grain-comparison','iit-table']
];
try{
 for(const [device,width,height] of [['desktop',1440,1000],['mobile',390,844]]){
  const context=await browser.newContext({viewport:{width,height},reducedMotion:'reduce',isMobile:device==='mobile',hasTouch:device==='mobile'});const page=await context.newPage();listen(page);
  for(const [route,name] of routes){
   const response=await page.goto(base+route,{waitUntil:'networkidle'});check(`${device} ${name}: HTTP200`,response.status()===200);
   await overflow(page,`${device} ${name}`);check(`${device} ${name}: math renders`,await page.locator('.katex-error').count()===0);
   if(name.includes('article')){check(`${device} ${name}: substantial article`,(await page.locator('.c-editorial-body').innerText()).split(/\s+/).length>1400);check(`${device} ${name}: full section links`,await page.locator('.c-research-contents>ol>li').count()>=11);}
   if(name.endsWith('math')||name.endsWith('proof')){await page.locator('.quantum-environment').first().scrollIntoViewIfNeeded();check(`${device} ${name}: accessible math`,await page.locator('math').count()>10);}
   if(name.includes('table')||name==='learning-results'){
    const table=page.locator('.quantum-table-wrap').first();await table.scrollIntoViewIfNeeded();check(`${device} ${name}: accessible table scroll`,await table.getAttribute('tabindex')==='0'&&await table.getAttribute('role')==='region');
    if(device==='mobile'){await table.focus();await page.keyboard.press('ArrowRight');}
   }
   await screenshot(page,`${name}-${device}`);
   if(name==='learning-results'){
    const figure=page.locator('.quantum-publication-figure img').first();await figure.scrollIntoViewIfNeeded();check(`${device}: source figure loads`,await figure.evaluate(img=>img.complete&&img.naturalWidth>0));await screenshot(page,`learning-figure-${device}`);
   }
  }
  await page.goto(base+'/consciousness/research',{waitUntil:'networkidle'});await page.getByRole('searchbox').fill('24,804');await page.locator('.c-search-results a').first().waitFor();check(`${device}: research search finds new paper`,(await page.locator('.c-search-results a').first().getAttribute('href')).includes('paper-4'));await page.locator('.c-search-results a').first().click();check(`${device}: search navigation opens Paper4`,page.url().includes('paper-4'));
  await context.close();
 }
 const plain=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});const page=await plain.newPage();
 for(const [paper,slug] of [['paper-2','robust-reconstruction-of-joint-experiments'],['paper-3','final-matched-state-learning-comparison'],['paper-4','identification-from-an-unlabeled-response-family']]){
  await page.goto(`${base}/consciousness/research/${paper}/${slug}`);check(`${paper}: full text without JavaScript`,(await page.locator('.quantum-publication-text').innerText()).length>4000);check(`${paper}: MathML without JavaScript`,await page.locator('math').count()>5);check(`${paper}: section navigation without JavaScript`,await page.getByRole('navigation',{name:'Section navigation'}).isVisible());
 }
 await plain.close();check('No browser console or hydration errors',report.consoleErrors.length===0,report.consoleErrors);
}catch(e){report.failures.push(e.message);report.error=e.stack;}
finally{await browser.close();server?.kill();fs.writeFileSync('docs/consciousness/research-browser-verification.json',JSON.stringify(report,null,2)+'\n');}
console.log(JSON.stringify({checks:report.checks.length,passed:report.checks.filter(c=>c.pass).length,failures:report.failures,screenshots:report.screenshots.length},null,2));if(report.failures.length)process.exitCode=1;
