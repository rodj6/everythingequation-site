/** Reproducible browser review. Optional QA dependency: Playwright + Chromium.
 * PLAYWRIGHT_MODULE may point to a bundled Playwright installation.
 * CHROME_PATH may select an existing Chromium/Chrome executable.
 * Run after npm run build && npm start: node scripts/verify-consciousness-browser.mjs [base-url]
 */
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base=(process.argv[2] || 'http://127.0.0.1:3000').replace(/\/$/,'');
const out=path.resolve('evidence/screenshots');fs.mkdirSync(out,{recursive:true});
const options={headless:true};
if(process.env.CHROME_PATH)options.executablePath=process.env.CHROME_PATH;
const browser=await chromium.launch(options);
const report={base,checkedAt:new Date().toISOString(),checks:[],screenshots:[],consoleErrors:[],failures:[]};
function check(name,pass,detail){report.checks.push({name,pass,detail});if(!pass)report.failures.push(name);}
function listen(page){page.on('pageerror',error=>report.consoleErrors.push(error.message));page.on('console',message=>{if(message.type()==='error')report.consoleErrors.push(`${message.text()} (${message.location().url || page.url()})`);});}
async function shot(page,name,fullPage=false){const file=path.join(out,`${name}.png`);await page.screenshot({path:file,fullPage,animations:'disabled'});report.screenshots.push(`evidence/screenshots/${name}.png`);}
async function overflow(page){return page.evaluate(()=>({viewport:document.documentElement.clientWidth,width:document.documentElement.scrollWidth,overflowing:[...document.querySelectorAll('main *')].filter(el=>{const r=el.getBoundingClientRect();return r.width>0&&r.right>document.documentElement.clientWidth+2&&getComputedStyle(el).position!=='absolute'&&!el.closest('.katex-display,.quantum-table-wrap,.c-book-orbits,svg');}).slice(0,12).map(el=>({tag:el.tagName,class:el.className,text:el.textContent?.slice(0,80)}))}));}
try{
 const desktop=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'no-preference'});const page=await desktop.newPage();listen(page);
 await page.goto(`${base}/consciousness`,{waitUntil:'networkidle'});
 check('Overview has substantial initial rendered content',(await page.locator('.c-editorial-body').innerText()).split(/\s+/).length>2000);
 await page.locator('.c-network[data-motion="running"]').waitFor({timeout:10000});
 check('Hero starts restrained animation in view',true);
 await shot(page,'overview-desktop');
 const pause=page.getByRole('button',{name:'Pause network animation'});await pause.focus();await page.keyboard.press('Space');
 await page.locator('.c-network[data-motion="paused"]').waitFor();
 check('Keyboard Space pauses animation',await page.getByRole('button',{name:'Play network animation'}).isVisible());
 check('Paused CSS animation work stops',await page.locator('.c-impulse,.c-junction').evaluateAll(nodes=>nodes.every(node=>getComputedStyle(node).animationPlayState==='paused')));
 await page.keyboard.press('Enter');await page.locator('.c-network[data-motion="running"]').waitFor();
 await page.locator('.c-publication-footer').scrollIntoViewIfNeeded();await page.locator('.c-network[data-motion="paused"]').waitFor();
 check('Off-screen hero stops animation work',await page.locator('.c-impulse,.c-junction').evaluateAll(nodes=>nodes.every(node=>getComputedStyle(node).animationPlayState==='paused')));
 await page.locator('.c-network').scrollIntoViewIfNeeded();await page.locator('.c-network[data-motion="running"]').waitFor();
 // Exercise the visibility-event path explicitly; headless tabs need not become hidden.
 await page.evaluate(()=>{Object.defineProperty(document,'visibilityState',{configurable:true,value:'hidden'});document.dispatchEvent(new Event('visibilitychange'));});
 await page.locator('.c-network[data-motion="paused"]').waitFor();
 check('Simulated hidden-document event stops actual CSS animations',await page.locator('.c-impulse,.c-junction').evaluateAll(nodes=>nodes.every(node=>getComputedStyle(node).animationPlayState==='paused')));
 await page.evaluate(()=>{delete document.visibilityState;document.dispatchEvent(new Event('visibilitychange'));});
 const ov=await overflow(page);check('Desktop overview has no horizontal page overflow',ov.width<=ov.viewport+1,ov);
 await page.goto(`${base}/consciousness/monograph`,{waitUntil:'networkidle'});await shot(page,'monograph-contents-desktop');
 await page.getByRole('searchbox').fill('predictive congruence');await page.locator('.c-search-results a').first().waitFor();
 check('Search reaches specific sections',await page.locator('.c-search-results a').first().getAttribute('href').then(href=>href.includes('#')));
 await page.locator('.c-search-results a').first().click();await page.waitForLoadState('networkidle');
 check('Search result opens its actual anchor',await page.evaluate(()=>Boolean(document.getElementById(decodeURIComponent(location.hash.slice(1))))));
 await page.goto(`${base}/consciousness/guides/can-ai-be-conscious`,{waitUntil:'networkidle'});await shot(page,'guide-ai-desktop');
 check('AI guide contains substantive complete text',(await page.locator('.c-editorial-body').innerText()).split(/\s+/).length>900);
 await page.goto(`${base}/consciousness/monograph/a-fully-worked-finite-vessel#section-19-1`,{waitUntil:'networkidle'});await page.locator('#section-19-1').scrollIntoViewIfNeeded();await shot(page,'chapter-19-mathematics-desktop');
 check('Chapter mathematical expressions carry accessible MathML',await page.locator('math').count()>5);
 check('No mathematical render errors',await page.locator('.katex-error').count()===0);
 const appendix='/consciousness/monograph/appendix-d-exact-finite-matrices-and-reproducibility';
 await page.goto(base+appendix,{waitUntil:'networkidle'});await page.locator('.quantum-reader-main').scrollIntoViewIfNeeded();await shot(page,'appendix-d-desktop');
 const appendixOverflow=await overflow(page);check('Desktop appendix has no horizontal page overflow',appendixOverflow.width<=appendixOverflow.viewport+1,appendixOverflow);
 const mobile=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,reducedMotion:'reduce'});const phone=await mobile.newPage();listen(phone);
 for(const [route,name] of [['/consciousness','overview-mobile'],['/consciousness/guides/can-ai-be-conscious','guide-ai-mobile'],['/consciousness/monograph/a-fully-worked-finite-vessel','chapter-19-mobile'],[appendix,'appendix-d-mobile']]){
  await phone.goto(base+route,{waitUntil:'networkidle'});const result=await overflow(phone);check(`${name}: no horizontal page overflow`,result.width<=result.viewport+1,result);await shot(phone,name);
  if(route==='/consciousness'){check('Reduced motion defaults to static illustration',await phone.locator('.c-network').getAttribute('data-motion')==='paused');check('Primary reading action precedes decorative illustration',await phone.evaluate(()=>document.querySelector('.c-button-primary').getBoundingClientRect().top<document.querySelector('.c-network').getBoundingClientRect().top));await phone.getByRole('button',{name:'Open menu'}).click();check('Mobile navigation includes Consciousness',await phone.locator('#mobile-menu').getByRole('link',{name:'Consciousness',exact:true}).isVisible());await phone.keyboard.press('Escape');check('Escape closes mobile menu',!(await phone.locator('#mobile-menu').isVisible()));}
  if(route===appendix){await phone.locator('#section-D-1').scrollIntoViewIfNeeded();await shot(phone,'appendix-d-math-mobile');check('Wide equations use independent horizontal scroll',await phone.locator('.katex-display').evaluateAll(nodes=>nodes.filter(n=>n.scrollWidth>n.clientWidth).every(n=>getComputedStyle(n).overflowX==='auto')));}
 }
 await phone.goto(base+'/consciousness/monograph/appendix-f-notation-claim-status-and-construction-dependencies',{waitUntil:'networkidle'});
 const table=phone.locator('.quantum-table-wrap').first();await table.scrollIntoViewIfNeeded();await table.focus();await phone.keyboard.press('ArrowRight');
 check('Publication tables are keyboard-accessible scroll regions',await table.getAttribute('tabindex')==='0' && await table.getAttribute('role')==='region');
 const tableOverflow=await overflow(phone);check('Long publication tables stay inside mobile page',tableOverflow.width<=tableOverflow.viewport+1,tableOverflow);await shot(phone,'appendix-f-table-mobile');
 const nojs=await browser.newContext({viewport:{width:390,height:844},javaScriptEnabled:false});const plain=await nojs.newPage();
 await plain.goto(base+'/consciousness',{waitUntil:'networkidle'});
 check('No-JavaScript overview and visual remain complete',(await plain.locator('.c-editorial-body').innerText()).split(/\s+/).length>2000 && await plain.locator('.c-network svg').count()===2);
 await plain.getByText('Browse the site',{exact:true}).click();check('No-JavaScript mobile navigation works',await plain.locator('noscript nav').getByRole('link',{name:'Consciousness',exact:true}).isVisible());await shot(plain,'no-javascript-mobile-navigation');
 await plain.goto(base+'/consciousness/monograph/a-fully-worked-finite-vessel',{waitUntil:'networkidle'});
 check('No-JavaScript chapter contains full mathematics and text',await plain.locator('math').count()>5 && (await plain.locator('.quantum-publication-text').innerText()).length>5000);
 check('No-JavaScript chapter navigation is present',await plain.getByRole('navigation',{name:'Chapter navigation'}).isVisible());
 check('No browser console or hydration errors',report.consoleErrors.length===0,report.consoleErrors);
 await desktop.close();await mobile.close();await nojs.close();
}catch(error){report.failures.push(error.message);report.error=error.stack;}finally{await browser.close();fs.writeFileSync('evidence/browser-checks.json',JSON.stringify(report,null,2)+'\n');}
console.log(JSON.stringify({checks:report.checks.length,passed:report.checks.filter(c=>c.pass).length,failures:report.failures,screenshots:report.screenshots,consoleErrors:report.consoleErrors},null,2));
if(report.failures.length)process.exitCode=1;
