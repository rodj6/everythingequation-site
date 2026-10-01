/** Production browser check. Run from the site root:
 * PLAYWRIGHT_MODULE=/path/to/playwright CHROME_PATH=/path/to/chromium node scripts/verify-sealed-leaky-browser.mjs http://127.0.0.1:3010 --start-server
 * Optional dependencies are Playwright and Chromium; neither is shipped in the ZIP.
 */
import fs from 'node:fs';
import {spawn} from 'node:child_process';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const base=(process.argv.find(a=>a.startsWith('http'))||'http://127.0.0.1:3010').replace(/\/$/,'');
const documents=JSON.parse(fs.readFileSync('content/sealed-or-leaky/index.json','utf8'));
let server;
if(process.argv.includes('--start-server')){
 server=spawn(process.execPath,['node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port',new URL(base).port],{env:{...process.env,SKIP_ZENODO:'1'},stdio:'ignore'});
 for(let i=0;i<80;i++){try{if((await fetch(base)).ok)break;}catch{}await new Promise(r=>setTimeout(r,250));}
}
const report={checkedAt:new Date().toISOString(),base,checks:[],failures:[],consoleErrors:[],pageErrors:[],screenshots:[]};
const check=(name,pass,detail)=>{report.checks.push({name,pass,...(detail===undefined?{}:{detail})});if(!pass)report.failures.push(name);};
fs.mkdirSync('evidence/sealed-or-leaky',{recursive:true});fs.mkdirSync('docs/sealed-or-leaky',{recursive:true});
const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{}),args:['--no-sandbox','--disable-dev-shm-usage','--disable-gpu']});
const errors=page=>{page.on('pageerror',e=>report.pageErrors.push({url:page.url(),error:e.message}));page.on('console',m=>{if(m.type()==='error')report.consoleErrors.push({url:page.url(),error:m.text()});});};
async function capture(page,name){const file=`evidence/sealed-or-leaky/${name}.png`;await page.screenshot({path:file,animations:'disabled'});report.screenshots.push(file);}
async function overflow(page,name){const measure=await page.evaluate(()=>({width:document.documentElement.scrollWidth,viewport:document.documentElement.clientWidth,offenders:[...document.querySelectorAll('main *')].filter(e=>{const b=e.getBoundingClientRect();return b.width>0&&(b.right>innerWidth+1||b.left< -1)&&!e.closest('.katex-display,.quantum-table-wrap');}).slice(0,8).map(e=>({tag:e.tagName,class:e.className,width:e.getBoundingClientRect().width}))}));check(`${name}: no document overflow`,measure.width<=measure.viewport+1,measure);}
const highlights=[['/','home'],['/articles/full-shadow-model','full-model'],['/articles/sealed-or-leaky','article'],['/sealed-or-leaky','reader'],['/papers/sealed-or-leaky','paper'],['/framework','framework'],['/atlas','atlas'],['/consciousness','consciousness']];
try{
 for(const [device,width,height] of [['desktop',1440,1000],['mobile',390,844]]){
  const context=await browser.newContext({viewport:{width,height},reducedMotion:'reduce',isMobile:device==='mobile',hasTouch:device==='mobile'}),page=await context.newPage();errors(page);
  for(const [route,name] of highlights){try{const response=await page.goto(base+route,{waitUntil:'networkidle'});check(`${device} ${route}: HTTP200`,response.status()===200);check(`${device} ${route}: main heading visible`,await page.locator('h1').first().isVisible());check(`${device} ${route}: no math errors`,await page.locator('.katex-error').count()===0);await overflow(page,`${device} ${route}`);if(route.startsWith('/articles/')){const headings=await page.locator('main h2').evaluateAll(nodes=>nodes.map(e=>({font:parseFloat(getComputedStyle(e).fontSize),margin:parseFloat(getComputedStyle(e).marginTop)})));check(`${device} ${route}: section headings visibly styled`,headings.length>5&&headings.every(h=>h.font>=22&&h.margin>=24),headings);}await capture(page,`${name}-${device}`);}catch(e){check(`${device} ${route}: visit`,false,e.message);}}
  for(const d of documents){try{const response=await page.goto(base+d.url,{waitUntil:'networkidle'});check(`${device} ${d.slug}: HTTP200`,response.status()===200);check(`${device} ${d.slug}: all MathML renders`,await page.locator('annotation[encoding="application/x-tex"]').count()===d.stats.equations);check(`${device} ${d.slug}: no math errors`,await page.locator('.katex-error').count()===0);await overflow(page,`${device} ${d.slug}`);
   const source=fs.readFileSync(`content/sealed-or-leaky/${d.slug}.html`,'utf8');check(`${device} ${d.slug}: all proofs remain`,await page.locator('.quantum-proof').count()===(source.match(/class="[^"]*\bquantum-proof\b[^"]*"/g)||[]).length);
   const table=page.locator('.quantum-table-wrap').first();if(await table.count()){check(`${device} ${d.slug}: table scroll keyboard-accessible`,await table.getAttribute('tabindex')==='0'&&await table.getAttribute('role')==='region');if(device==='mobile'){await table.scrollIntoViewIfNeeded();await table.focus();const dimensions=await table.evaluate(e=>({width:e.scrollWidth,client:e.clientWidth}));await page.keyboard.press('ArrowRight');await page.waitForTimeout(150);if(dimensions.width>dimensions.client+1)check(`${device} ${d.slug}: arrow key scrolls wide table`,await table.evaluate(e=>e.scrollLeft)>0);await table.evaluate(e=>e.scrollLeft=0);}}
   if(['the-source-tetralemma','experimental-anchoring','finite-pilot-resources-exact-inventories-and-retained-records'].includes(d.slug)){if(await table.count())await table.scrollIntoViewIfNeeded();else{const math=page.locator('.katex-display').first();if(await math.count())await math.scrollIntoViewIfNeeded();}await capture(page,`${d.slug}-${device}`);}
   if(d.slug==='the-source-tetralemma'){await page.locator('.quantum-proof').first().scrollIntoViewIfNeeded();await capture(page,`tetralemma-proof-${device}`);}
   const next=page.getByRole('navigation',{name:'Section navigation'});check(`${device} ${d.slug}: section navigation present`,await next.count()===1);
  }catch(e){check(`${device} ${d.slug}: visit`,false,e.message);}}
  await page.goto(base+'/sealed-or-leaky',{waitUntil:'networkidle'});const search=page.getByRole('searchbox');await search.fill('trine');await page.locator('.sl-search ol a').first().waitFor();check(`${device}: search returns full-paper match`,await page.locator('.sl-search ol a').count()>0);await search.focus();await page.keyboard.press('Tab');check(`${device}: search result keyboard focus`,await page.evaluate(()=>document.activeElement?.matches('.sl-search ol a')));await capture(page,`search-${device}`);await Promise.all([page.waitForURL(url=>url.pathname.startsWith('/sealed-or-leaky/'),{waitUntil:'networkidle'}),page.keyboard.press('Enter')]);check(`${device}: keyboard search opens technical reader`,page.url().includes('/sealed-or-leaky/')&&await page.locator('.quantum-publication-text').count()===1);
  await context.close();
 }
 const plain=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}}),page=await plain.newPage();
 for(const d of documents){await page.goto(base+d.url);check(`No JS ${d.slug}: complete scientific text`,(await page.locator('.quantum-publication-text').textContent()).length>100);check(`No JS ${d.slug}: full MathML`,await page.locator('annotation[encoding="application/x-tex"]').count()===d.stats.equations);check(`No JS ${d.slug}: section navigation`,await page.getByRole('navigation',{name:'Section navigation'}).count()===1);await overflow(page,`No JS ${d.slug}`);}
 await page.goto(base+'/sealed-or-leaky');check('No JS complete contents available',await page.locator('#complete-contents a').count()>=documents.length);await capture(page,'reader-no-javascript');
 for(const route of ['/articles/full-shadow-model','/articles/sealed-or-leaky']){await page.goto(base+route);check(`No JS ${route}: substantial article`,(await page.locator('main').textContent()).length>5000);}
 await plain.close();check('No browser runtime errors',report.pageErrors.length===0,report.pageErrors);check('No browser console or hydration errors',report.consoleErrors.length===0,report.consoleErrors);
}catch(e){report.failures.push(e.message);report.error=e.stack;}
finally{await browser.close();server?.kill();report.passed=report.failures.length===0;fs.writeFileSync('docs/sealed-or-leaky/browser-verification.json',JSON.stringify(report,null,2)+'\n');}
console.log(JSON.stringify({passed:report.passed,checks:report.checks.length,failures:report.failures,screenshots:report.screenshots.length,consoleErrors:report.consoleErrors,pageErrors:report.pageErrors},null,2));if(!report.passed)process.exitCode=1;
