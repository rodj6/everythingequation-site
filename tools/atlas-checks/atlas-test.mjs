#!/usr/bin/env node
/**
 * Interaction checks for the Reality Atlas.
 *
 * Opens the built site in a headless browser and exercises the Atlas the way a
 * visitor would: stages, tours, traces, search, deep links, the iris, the
 * second probe, the Boundary and History views, the phone layout, and the
 * page when 3D is not available. Run it after any change to the Atlas.
 *
 *   npm install --no-save puppeteer-core        (once)
 *   npm run build && npm run start              (in one terminal)
 *   node tools/atlas-checks/atlas-test.mjs http://localhost:3000
 *   node tools/atlas-checks/atlas-test.mjs http://localhost:3000 --live   (also start the 3D engine)
 *
 * Environment:
 *   CHROME_PATH          path to Chrome or Chromium (default: common install locations)
 *   ATLAS_TOOL_MODULES   folder holding puppeteer-core, if it is not installed in this project
 *
 * Each line of output is PASS or FAIL with the name of the check; the exit
 * code is 1 if anything failed. See README.md in this folder.
 */
import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "../..");
async function load(name) {
  for (const base of [root, process.env.ATLAS_TOOL_MODULES ? resolve(process.env.ATLAS_TOOL_MODULES, "..") : null].filter(Boolean)) {
    try {
      return await import(pathToFileURL(createRequire(join(base, "package.json")).resolve(name)).href);
    } catch { /* try the next place */ }
  }
  throw new Error(`Cannot find "${name}". Run: npm install --no-save puppeteer-core`);
}
const puppeteer = (await load("puppeteer-core")).default;
const chrome = process.env.CHROME_PATH ?? [
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
].find((candidate) => existsSync(candidate));
if (!chrome) throw new Error("Chrome not found. Set CHROME_PATH to its location.");

const base = process.argv[2] ?? 'http://localhost:3000';
const live = process.argv.includes('--live');
const results = [];
const check = (name, ok, detail = '') => { results.push({ name, ok: Boolean(ok), detail }); console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`); };

const browser = await puppeteer.launch({
  executablePath: chrome, headless: 'new', protocolTimeout: 420000,
  // Software graphics, so the checks run the same on a machine with or without a graphics chip.
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars', '--use-angle=swiftshader', '--use-gl=angle', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'],
});
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const param = async (page, key) => page.evaluate((k) => new URL(location.href).searchParams.get(k), key);
const text = async (page, selector) => page.evaluate((s) => document.querySelector(s)?.textContent?.trim() ?? null, selector);
const clickText = async (page, selector, label) => page.evaluate((s, l) => { const el = [...document.querySelectorAll(s)].find((e) => e.textContent.trim().startsWith(l)); if (!el) return false; el.click(); return true; }, selector, label);

async function open(path, viewport = { width: 1440, height: 900 }) {
  const page = await browser.newPage();
  await page.setViewport(viewport);
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 200)); });
  page.on('pageerror', (e) => errors.push('PAGEERROR ' + String(e).slice(0, 200)));
  await page.goto(base + path, { waitUntil: 'networkidle2', timeout: 240000 });
  await page.waitForSelector('.atlas-frame[data-ready="true"]', { timeout: 120000 });
  await sleep(500);
  return { page, errors };
}

try {
  // ───── Structure
  {
    const { page, errors } = await open('/atlas');
    const info = await page.evaluate(() => {
      const seen = new Set(), dup = [];
      document.querySelectorAll('[id]').forEach((e) => { if (seen.has(e.id)) dup.push(e.id); seen.add(e.id); });
      return { h1: document.querySelectorAll('h1').length, dup, picture: document.querySelector('.atlas-frame').dataset.picture,
        entries: document.querySelectorAll('.atlas-index a[data-atlas-entry]').length, title: document.title,
        imgOk: (() => { const i = document.querySelector('.atlas-still img'); return i && i.complete && i.naturalWidth > 0; })() };
    });
    check('exactly one h1', info.h1 === 1, String(info.h1));
    check('no duplicate ids', info.dup.length === 0, info.dup.join(','));
    check('still picture chosen automatically without a graphics chip', info.picture === 'still');
    check('still picture loaded', info.imgOk);
    check('index lists every entry', info.entries === 108, String(info.entries));

    // rail
    await clickText(page, '.atlas-rail button', 'T0.5');
    await sleep(300);
    check('rail → stage in address', (await param(page, 'stage')) === 'aperture');
    check('panel shows the stage', (await text(page, '.atlas-view-title')) === 'Tier 0.5 · Aperture', await text(page, '.atlas-view-title'));
    check('focus moved to the panel heading', await page.evaluate(() => document.activeElement?.classList.contains('atlas-view-title')));
    check('still picture follows the stage', await page.evaluate(() => document.querySelector('.atlas-still img').getAttribute('src').includes('aperture-38-')));

    // entry
    await page.click('.atlas-rows .atlas-row');
    await sleep(300);
    const focus = await param(page, 'focus');
    check('entry row → focus in address', Boolean(focus), focus);
    check('entry view has status chip and note', await page.evaluate(() => Boolean(document.querySelector('.atlas-entry .atlas-status') && document.querySelector('.atlas-entry-status p')?.textContent.length > 20)));
    await clickText(page, '.atlas-tabs button', 'Equations');
    await page.waitForSelector('.atlas-tabpanel .katex, .atlas-tabpanel .atlas-empty:not(:only-child)', { timeout: 15000 }).catch(() => {});
    await page.waitForFunction("!document.querySelector('.atlas-tabpanel')?.textContent.includes('Setting the equations')", { timeout: 15000 }).catch(() => {});
    await sleep(300);
    check('tab in address', (await param(page, 'tab')) === 'equations');
    check('equations rendered with KaTeX (loaded on demand)', await page.evaluate(() => document.querySelectorAll('.atlas-tabpanel .katex-display').length >= 1), await page.evaluate(() => String(document.querySelectorAll('.atlas-tabpanel .katex-display').length)));
    check('no KaTeX errors', await page.evaluate(() => document.querySelectorAll('.katex-error').length === 0));
    await clickText(page, '.atlas-tabs button', 'Connections');
    await sleep(300);
    check('connections listed', await page.evaluate(() => document.querySelectorAll('.atlas-connections li').length > 0));
    // tab keyboard
    await page.focus('.atlas-tabs button[aria-selected="true"]');
    await page.keyboard.press('Home');
    await sleep(200);
    check('tabs: Home key selects Overview', (await param(page, 'tab')) === null);
    // escape
    await page.evaluate(() => document.activeElement?.blur());
    await page.keyboard.press('Escape');
    await sleep(300);
    check('Escape closes the entry', (await param(page, 'focus')) === null);
    await page.keyboard.press('ArrowRight');
    await sleep(300);
    check('Arrow key moves to the next stage', (await param(page, 'stage')) === 'field', await param(page, 'stage'));

    // search
    await page.keyboard.press('/');
    await sleep(300);
    check('"/" opens search', await page.evaluate(() => document.querySelector('.atlas-search')?.open === true));
    await page.keyboard.type('CSCF');
    await sleep(300);
    const found = await page.evaluate(() => document.querySelectorAll('.atlas-search-results li').length);
    check('search finds entries', found > 0, String(found));
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await sleep(400);
    check('Enter opens the chosen result', Boolean(await param(page, 'focus')), await param(page, 'focus'));
    check('search dialog closed', await page.evaluate(() => document.querySelector('.atlas-search')?.open === false));

    // guided
    await clickText(page, '.atlas-modes button', 'Guided');
    await sleep(400);
    check('Guided → address', (await param(page, 'mode')) === 'guided' && (await param(page, 'tour')) === 'essentials', `${await param(page, 'mode')} ${await param(page, 'tour')}`);
    check('tour stepper shows stop 1 of 10', (await text(page, '.atlas-stepper-count')) === 'Stop 1 of 10', await text(page, '.atlas-stepper-count'));
    await page.click('.atlas-stepper-row button[aria-label="Next stop"]');
    await sleep(250);
    await page.evaluate(() => document.activeElement?.blur());
    await page.keyboard.press('ArrowRight');
    await sleep(250);
    check('Next and arrow key step the tour', (await text(page, '.atlas-stepper-count')) === 'Stop 3 of 10', await text(page, '.atlas-stepper-count'));
    await page.select('.atlas-stepper-select select', 'foundation');
    await sleep(300);
    check('tour picker switches tour', (await param(page, 'tour')) === 'foundation' && (await text(page, '.atlas-stepper-count')) === 'Stop 1 of 7');

    // trace
    await clickText(page, '.atlas-modes button', 'Trace');
    await sleep(400);
    const routes = await page.evaluate(() => document.querySelectorAll('.atlas-traces button').length);
    check('Trace chooser lists 12 traces', routes === 12, String(routes));
    await clickText(page, '.atlas-traces button', 'Gravity');
    await sleep(400);
    check('trace in address', (await param(page, 'mode')) === 'trace' && (await param(page, 'trace')) === 'gravity');
    const start = await param(page, 'focus');
    check('trace opens at the readout end', start === 'observable-gravity', start);
    await page.click('.atlas-stepper.is-trace .atlas-stepper-row > button:first-child');
    await sleep(300);
    check('step toward the source changes the entry', (await param(page, 'focus')) !== start, await param(page, 'focus'));
    await clickText(page, '.atlas-modes button', 'Explore');
    await sleep(300);
    check('Explore leaves the trace', (await param(page, 'mode')) === null && (await param(page, 'trace')) === null);

    // aperture slider
    await page.focus('#atlas-aperture-input');
    await page.keyboard.press('ArrowRight');
    await sleep(300);
    const aperture = await param(page, 'aperture');
    check('iris slider (still picture snaps to a baked setting)', aperture === '0.90', String(aperture));
    check('still picture follows the iris', await page.evaluate(() => /-90-/.test(document.querySelector('.atlas-still img').getAttribute('src')) || !/(overview|aperture|readout)-/.test(document.querySelector('.atlas-still img').getAttribute('src'))));

    // about dialog + picture choice
    await page.click('.atlas-about-button');
    await sleep(300);
    check('About dialog opens, explains the parts and how literally to take them', await page.evaluate(() => document.querySelector('.atlas-about')?.open && /How literally to take it/.test(document.querySelector('.atlas-about').textContent) && document.querySelectorAll('.atlas-about .atlas-note-parts dt').length === 5));
    check('reason for the still picture is stated', await page.evaluate(() => Boolean(document.querySelector('.atlas-picture-reason')?.textContent.length > 20)));
    await page.evaluate(() => [...document.querySelectorAll('.atlas-picture-choice label')].find((l) => l.textContent.includes('Still picture')).querySelector('input').click());
    await sleep(300);
    check('choosing the still picture → view=2d', (await param(page, 'view')) === '2d');
    await page.keyboard.press('Escape');
    await sleep(300);
    check('Escape closes the dialog', await page.evaluate(() => document.querySelector('.atlas-about')?.open === false));

    // index link
    await page.evaluate(() => document.querySelector('.atlas-index a[data-atlas-entry="foundation-rs2-witness"]').scrollIntoView());
    await page.click('.atlas-index a[data-atlas-entry="foundation-rs2-witness"]');
    await sleep(900);
    check('index link opens the entry above', (await param(page, 'focus')) === 'foundation-rs2-witness' && (await text(page, '.atlas-view-title')) === 'The Randall–Sundrum physical witness', await text(page, '.atlas-view-title'));
    await page.waitForFunction(() => document.querySelector('.atlas-frame').getBoundingClientRect().top > -40, { timeout: 5000 }).catch(() => undefined);
    check('page scrolled back to the instrument', await page.evaluate(() => document.querySelector('.atlas-frame').getBoundingClientRect().top > -40));

    // status filter (CSS only)
    await page.evaluate(() => document.getElementById('atlas-filter-theorem').click());
    await sleep(200);
    const visible = await page.evaluate(() => [...document.querySelectorAll('.atlas-index li[data-status]')].filter((li) => li.offsetParent !== null).length);
    check('status filter shows only proved entries', visible === 15, String(visible));
    check('no console errors', errors.length === 0, errors.join(' | '));
    await page.close();
  }

  // ───── Deep links
  for (const [path, expect] of [
    ['/atlas?focus=measurement-programme', { title: true, stage: 'readout' }],
    ['/atlas?focus=canonical-field', { titleText: 'Canonical spectral-curvature field' }],
    ['/atlas?focus=observable-horizon-entropy', { titleText: 'Horizon and generalized entropy' }],
    ['/atlas?focus=gravity&tab=interfaces', { tab: 'Connections' }],
    ['/atlas?mode=guided', { stepper: 'Stop 1 of 26' }],
    ['/atlas?mode=trace&trace=alpha', { traceTitle: 'Fine structure' }],
    ['/atlas?focus=omega&lod=3&mode=explore', { titleText: 'Ω · Source substrate' }],
    ['/atlas?focus=not-a-real-id', { titleText: 'The whole instrument' }],
  ]) {
    const { page, errors } = await open(path);
    const state = await page.evaluate(() => ({
      title: document.querySelector('.atlas-view-title')?.textContent.trim(),
      tab: document.querySelector('.atlas-tabs button[aria-selected="true"]')?.textContent.replace(/\d+$/, '').trim(),
      stepper: document.querySelector('.atlas-stepper-count')?.textContent.trim(),
      traceTitle: document.querySelector('.atlas-stepper-title')?.textContent.replace('Trace', '').trim(),
      rail: document.querySelector('.atlas-rail button[aria-current="step"] .atlas-rail-label')?.textContent,
    }));
    const ok = (expect.titleText ? state.title === expect.titleText : true) && (expect.title ? Boolean(state.title) : true) && (expect.tab ? state.tab === expect.tab : true)
      && (expect.stepper ? state.stepper === expect.stepper : true) && (expect.traceTitle ? state.traceTitle === expect.traceTitle : true) && (expect.stage ? state.rail?.toLowerCase() === expect.stage : true);
    check(`deep link ${path}`, ok && errors.length === 0, JSON.stringify(state) + (errors.length ? ' ERR ' + errors.join('|') : ''));
    await page.close();
  }

  // ───── Small screen: nothing wider than the window
  for (const [name, viewport] of [['phone 390', { width: 390, height: 844, isMobile: true, hasTouch: true }], ['phone 360', { width: 360, height: 740, isMobile: true, hasTouch: true }], ['tablet 820', { width: 820, height: 1180, isMobile: true, hasTouch: true }]]) {
    for (const path of ['/atlas', '/atlas?focus=canonical-field&tab=equations', '/atlas?mode=trace&trace=cosmology', '/atlas?mode=guided&tour=descent']) {
      const { page, errors } = await open(path, viewport);
      const measure = await page.evaluate(() => ({
        width: document.documentElement.scrollWidth, viewport: document.documentElement.clientWidth,
        offenders: [...document.querySelectorAll('main *')].filter((e) => { const b = e.getBoundingClientRect(); return b.width > 0 && (b.right > innerWidth + 1 || b.left < -1) && !e.closest('.katex-display,.quantum-table-wrap'); }).slice(0, 5).map((e) => `${e.tagName}.${String(e.className).slice(0, 40)} ${Math.round(e.getBoundingClientRect().right)}`),
        smallTargets: [...document.querySelectorAll('.atlas-frame button, .atlas-frame a, .atlas-frame select, .atlas-frame input')].filter((e) => { const b = e.getBoundingClientRect(); return b.width > 0 && e.offsetParent !== null && (b.height < 40 && b.width < 40) && getComputedStyle(e).pointerEvents !== 'none'; }).slice(0, 5).map((e) => `${e.tagName}.${String(e.className).slice(0, 30)} ${Math.round(e.getBoundingClientRect().width)}x${Math.round(e.getBoundingClientRect().height)}`),
        h1Visible: (() => { const h = document.querySelector('h1'); const b = h.getBoundingClientRect(); return b.width > 0 && b.height > 0; })(),
      }));
      check(`${name} ${path}: no horizontal overflow`, measure.width <= measure.viewport && measure.offenders.length === 0, `${measure.width}/${measure.viewport} ${measure.offenders.join(' ; ')}`);
      check(`${name} ${path}: h1 visible`, measure.h1Visible);
      if (measure.smallTargets.length) check(`${name} ${path}: touch targets`, false, measure.smallTargets.join(' ; '));
      if (errors.length) check(`${name} ${path}: console`, false, errors.join(' | '));
      await page.close();
    }
  }

  // ───── Live engine (software GL here: slow, so only a few interactions)
  if (live) {
    const { page, errors } = await open('/atlas?quality=low', { width: 1280, height: 800 });
    await page.waitForFunction("document.querySelector('.atlas-surface')?.dataset.live === 'true'", { timeout: 240000 });
    check('live engine starts when asked for', true);
    await sleep(2500);
    const labels = await page.evaluate(() => [...document.querySelectorAll('.atlas-label')].map((e) => ({ name: e.textContent, visible: e.dataset.visible, box: e.getBoundingClientRect().toJSON() })));
    check('five part labels placed over the instrument', labels.filter((l) => l.visible === 'true').length === 5, JSON.stringify(labels.map((l) => [l.name, l.visible, Math.round(l.box.x), Math.round(l.box.y)])));
    // click a part: just below the "field" label
    const field = labels.find((l) => l.name.includes('Field'));
    const surface = await page.evaluate(() => document.querySelector('.atlas-surface').getBoundingClientRect().toJSON());
    await page.mouse.click(field.box.x + field.box.width / 2, field.box.y + field.box.height + 70);
    await sleep(1500);
    check('clicking a part goes to its stage', (await param(page, 'stage')) === 'field', await param(page, 'stage'));
    await clickText(page, '.atlas-rail button', '◎');
    await sleep(6000);
    // drag the iris ring: find it via the aperture label (ring top is just under the label)
    const labels2 = await page.evaluate(() => [...document.querySelectorAll('.atlas-label')].map((e) => ({ name: e.textContent, box: e.getBoundingClientRect().toJSON() })));
    const iris = labels2.find((l) => l.name.includes('Aperture'));
    const picked = await page.evaluate(() => null);
    const x0 = iris.box.x + iris.box.width / 2 + 10, y0 = iris.box.y + iris.box.height + 30;
    await page.mouse.move(x0, y0);
    await page.mouse.down();
    for (let i = 1; i <= 8; i++) { await page.mouse.move(x0 + i * 9, y0 + i * 5); await sleep(60); }
    await page.mouse.up();
    await sleep(1200);
    const aperture = await param(page, 'aperture');
    check('dragging the brass ring changes the iris', aperture !== null, String(aperture));
    check('live: no console errors', errors.length === 0, errors.join(' | '));
    await page.close();
  }
  // ───── The second probe
  {
    const { page, errors } = await open('/atlas?view=2d');
    const probe = () => page.evaluate(() => { const b = document.querySelector('.atlas-probe button'); return { checked: b?.getAttribute('aria-checked'), name: b ? (document.getElementById('atlas-probe-name')?.textContent + ' ' + b.textContent.trim()) : null, still: document.querySelector('.atlas-still img')?.getAttribute('src') ?? null, url: location.search }; });
    let state = await probe();
    check('second probe: switch is present and off', state.checked === 'false', JSON.stringify(state));
    check('second probe: worked example is in the panel', await page.evaluate(() => Boolean(document.querySelector('#atlas-try-heading')) && document.querySelectorAll('.atlas-try-figure svg').length === 2));
    await page.click('.atlas-probe button');
    await new Promise((r) => setTimeout(r, 400));
    state = await probe();
    check('second probe: switch turns on, address and still picture follow', state.checked === 'true' && /probe=1/.test(state.url) && /-p-(wide|tall)\.webp$/.test(state.still ?? ''), JSON.stringify(state));
    const loaded = await page.evaluate(() => { const i = document.querySelector('.atlas-still img'); return i ? i.decode().then(() => i.naturalWidth > 0, () => false) : false; });
    check('second probe: its still picture loads', loaded);
    await page.keyboard.press('p');
    await new Promise((r) => setTimeout(r, 300));
    state = await probe();
    check('second probe: P key swings it aside again', state.checked === 'false' && !/probe=1/.test(state.url), JSON.stringify(state));
    await page.click('.atlas-try .atlas-button');
    await new Promise((r) => setTimeout(r, 300));
    state = await probe();
    check('second probe: the panel button operates the same switch', state.checked === 'true', JSON.stringify(state));
    check('second probe: no script errors', errors.length === 0, errors.join(' | '));
    await page.close();
  }
  {
    const { page } = await open('/atlas?stage=readout&probe=1&view=2d');
    const state = await page.evaluate(() => ({ checked: document.querySelector('.atlas-probe button')?.getAttribute('aria-checked'), still: document.querySelector('.atlas-still img')?.getAttribute('src') }));
    check('deep link ?stage=readout&probe=1', state.checked === 'true' && /readout-38-p-/.test(state.still ?? ''), JSON.stringify(state));
    await page.close();
  }

  // ───── The three views
  const plateInk = (page) => page.evaluate(() => {
    const c = document.querySelector('.atlas-plate-layer');
    if (!c || !c.width) return 0;
    const d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data;
    let n = 0;
    for (let i = 3; i < d.length; i += 4 * 53) if (d[i] > 0) n++;
    return n;
  });
  const viewState = (page) => page.evaluate(() => ({
    url: location.search,
    still: document.querySelector('.atlas-still img')?.getAttribute('src') ?? '',
    title: document.querySelector('.atlas-panel .atlas-view-title')?.textContent ?? '',
    summary: document.querySelector('.atlas-says p[aria-live]')?.textContent ?? '',
    plate: document.querySelector('.atlas-surface')?.dataset.plate,
    pressed: [...document.querySelectorAll('.atlas-viewswitch button')].map((b) => `${b.textContent.trim()}:${b.getAttribute('aria-pressed')}`).join(' '),
    focus: document.activeElement?.className ?? '',
  }));
  {
    const { page, errors } = await open('/atlas?view=2d');
    let s = await viewState(page);
    check('views: the switch offers Instrument, Boundary and History', s.pressed === 'Instrument:true Boundary:false History:false', s.pressed);
    check('views: nothing is drawn on the plate in the Instrument view', (await plateInk(page)) === 0);
    check('views: seven ways in under "Start from an idea"', await page.evaluate(() => document.querySelectorAll('.atlas-ideas button').length === 7));
    await clickText(page, '.atlas-viewswitch button', 'Boundary');
    await sleep(900);
    s = await viewState(page);
    check('boundary: view opens; address, plate picture and panel follow', /lens=boundary/.test(s.url) && /plate-(wide|tall)\.webp$/.test(s.still) && s.title === 'Reading the boundary' && s.plate === 'true', JSON.stringify(s));
    check('boundary: the heading takes focus', /atlas-view-title/.test(s.focus), s.focus);
    check('boundary: the diagram is drawn on the plate', (await plateInk(page)) > 300, String(await plateInk(page)));
    check('boundary: the summary says what the default readings settle', /^130° of the rim is read, one frame, first order\. Where the readings reach: 2 constraint departures recovered\. Not settled here: 1 cross component and 1 on-shell mode\. Beyond their reach: 5 features/.test(s.summary), s.summary);
    await clickText(page, '.atlas-choice button', 'More frames');
    await sleep(300);
    s = await viewState(page);
    check('boundary: more frames reads the cross component', /1 cross component recovered/.test(s.summary) && /Not settled here: 1 on-shell mode\./.test(s.summary) && /readings=frames/.test(s.url), s.summary);
    await clickText(page, '.atlas-choice button', 'Second order');
    await sleep(300);
    s = await viewState(page);
    check('boundary: second order detects the on-shell mode and leaves the cross component', /1 on-shell mode detected/.test(s.summary) && /Not settled here: 1 cross component\./.test(s.summary) && /readings=second/.test(s.url), s.summary);
    check('boundary: reading sets are a labelled group with one pressed', await page.evaluate(() => { const g = document.querySelector('.atlas-choice[role="group"]'); return Boolean(g) && g.querySelectorAll('button[aria-pressed="true"]').length === 1; }));
    await page.focus('#atlas-boundary-arc');
    await page.keyboard.press('End');
    await sleep(300);
    s = await viewState(page);
    check('boundary: keyboard widens the region to the whole rim', /^The whole rim is read/.test(s.summary) && /Nothing on the disc lies beyond their reach/.test(s.summary) && /arc=360/.test(s.url), s.summary);
    await page.keyboard.press('Home');
    await sleep(300);
    s = await viewState(page);
    check('boundary: a small region reaches less', /^30° of the rim is read/.test(s.summary) && /arc=30/.test(s.url), s.summary);
    // Press on the plate, to the right of its centre: the region turns to face that point (bearing near 0).
    const box = await page.evaluate(() => { const r = document.querySelector('.atlas-plate-hit').getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height, shown: getComputedStyle(document.querySelector('.atlas-plate-hit')).display }; });
    await page.mouse.click(box.x + box.w * 0.82, box.y + box.h * 0.5);
    await sleep(300);
    s = await viewState(page);
    const at = Number(new URLSearchParams(s.url).get('at'));
    check('boundary: pressing on the plate turns the region toward that point', box.shown === 'block' && (at <= 12 || at >= 348), `at=${at} ${JSON.stringify(box)}`);
    await page.evaluate(() => document.activeElement?.blur());
    await page.keyboard.press('ArrowLeft');
    await sleep(200);
    const turned = Number(new URLSearchParams((await viewState(page)).url).get('at'));
    check('boundary: arrow keys turn the region', turned !== at, `${at} → ${turned}`);
    await clickText(page, '.atlas-viewlinks a', 'Second-order detection');
    await sleep(500);
    s = await viewState(page);
    check('boundary: a paper link opens its entry beside the view', /focus=gravity-second-order/.test(s.url) && /lens=boundary/.test(s.url), s.url);
    await page.keyboard.press('Escape');
    await sleep(300);
    await page.keyboard.press('Escape');
    await sleep(500);
    s = await viewState(page);
    check('views: Escape closes the entry, then returns to the instrument', !/lens=/.test(s.url) && s.pressed.startsWith('Instrument:true') && s.plate === 'false', JSON.stringify(s));
    check('boundary: no script errors', errors.length === 0, errors.join(' | '));
    await page.close();
  }
  {
    const { page, errors } = await open('/atlas?lens=history&view=2d');
    let s = await viewState(page);
    check('history: deep link opens the view with the published occasion', s.title === 'A history, from inside' && /^E is taken up, 115 ms/.test(s.summary) && /rising step/.test(s.summary), s.summary);
    check('history: the diagram is drawn on the plate', (await plateInk(page)) > 200, String(await plateInk(page)));
    await page.click('.atlas-slider-steps button[aria-label="Later occasion"]');
    await sleep(300);
    s = await viewState(page);
    check('history: stepping later reaches G', /^G is taken up, 215 ms/.test(s.summary) && /occasion=4/.test(s.url), s.summary);
    await page.click('.atlas-platecontrols [role="switch"]');
    await sleep(300);
    s = await viewState(page);
    check('history: without retention there is succession and no experience of it', /no experience of succession/.test(s.summary) && /retain=0/.test(s.url), s.summary);
    await page.evaluate(() => document.activeElement?.blur());
    await page.keyboard.press('ArrowLeft');
    await sleep(300);
    s = await viewState(page);
    check('history: arrow keys step the occasion', /occasion=|lens=history/.test(s.url) && /^E is taken up/.test(s.summary), s.summary);
    check('history: five occasions listed in the panel, one current', await page.evaluate(() => document.querySelectorAll('.atlas-occasions button').length === 5 && document.querySelectorAll('.atlas-occasions button[aria-current="step"]').length === 1));
    check('history: no script errors', errors.length === 0, errors.join(' | '));
    await page.close();
  }
  {
    const { page } = await open('/atlas?focus=gravity-second-order&view=2d');
    await page.click('.atlas-entry-plate button');
    await sleep(700);
    let s = await viewState(page);
    check('entry: "See it on the plate" opens the Boundary view at second order, entry still open', /lens=boundary/.test(s.url) && /readings=second/.test(s.url) && /focus=gravity-second-order/.test(s.url), s.url);
    await page.close();
  }
  {
    const { page } = await open('/atlas?mode=guided&tour=boundary&view=2d');
    let s = await viewState(page);
    check('tour: the gravity tour starts on the instrument', /tour=boundary/.test(s.url) && !/lens=/.test(s.url), s.url);
    for (let i = 0; i < 4; i++) { await page.keyboard.press('ArrowRight'); await sleep(250); }
    s = await viewState(page);
    check('tour: its boundary-ball stop shows the Boundary view', /focus=gravity-boundary-balls/.test(s.url) && /lens=boundary/.test(s.url), s.url);
    await page.keyboard.press('ArrowRight');
    await sleep(300);
    s = await viewState(page);
    check('tour: the next stop goes to second order', /focus=gravity-second-order/.test(s.url) && /readings=second/.test(s.url), s.url);
    await page.keyboard.press('ArrowRight');
    await sleep(300);
    s = await viewState(page);
    check('tour: later stops return to the instrument', !/lens=/.test(s.url), s.url);
    const tours = await page.evaluate(() => [...document.querySelectorAll('.atlas-stepper-select option')].map((o) => o.value).join(' '));
    check('tours: the six subject tours are offered', ['ground', 'spectral', 'boundary', 'measurement', 'perspective', 'time'].every((id) => tours.split(' ').includes(id)), tours);
    await page.close();
  }
  {
    const { page } = await open('/atlas?view=2d');
    const sections = await page.evaluate(() => ({ b: document.querySelector('#boundary h2')?.textContent, h: document.querySelector('#history h2')?.textContent, sets: document.querySelectorAll('#boundary .atlas-section-list > div').length, occasions: document.querySelectorAll('#history .atlas-section-list > div').length }));
    check('page: the two views are also written out as sections', sections.b === 'Reading the boundary' && sections.h === 'A history, from inside' && sections.sets === 3 && sections.occasions === 5, JSON.stringify(sections));
    await page.evaluate(() => document.querySelector('a[data-atlas-view="history"]').click());
    await sleep(900);
    const s = await viewState(page);
    check('page: a section link opens its view on the plate', /lens=history/.test(s.url) && s.plate === 'true', s.url);
    await page.close();
  }
  {
    const { page } = await open('/atlas?view=2d', { width: 390, height: 844, isMobile: true, hasTouch: true });
    const first = await page.evaluate(() => {
      const bottom = (sel) => document.querySelector(sel)?.getBoundingClientRect().bottom ?? 9999;
      const height = (sel) => document.querySelector(sel)?.getBoundingClientRect().height ?? 0;
      return { subtitle: getComputedStyle(document.querySelector('.atlas-subtitle')).display, switchBottom: bottom('.atlas-viewswitch'), tourBottom: bottom('.atlas-start-button'), switchButton: height('.atlas-viewswitch button'), tourButton: height('.atlas-start-button'), railBottom: bottom('.atlas-rail'), overflow: document.documentElement.scrollWidth - window.innerWidth };
    });
    check('phone: the first screen says what this is and offers the views and the tour', first.subtitle !== 'none' && first.switchBottom < 844 && first.tourBottom < 844 && first.railBottom < 844, JSON.stringify(first));
    check('phone: touch targets of the view switch and the tour button are at least 40px tall', first.switchButton >= 40 && first.tourButton >= 40, JSON.stringify(first));
    await page.tap('.atlas-viewswitch button:nth-child(2)');
    await sleep(900);
    const controls = await page.evaluate(() => ({ url: location.search, sliderBottom: document.querySelector('#atlas-boundary-arc')?.getBoundingClientRect().bottom ?? 9999, choice: [...document.querySelectorAll('.atlas-choice button')].map((b) => Math.round(b.getBoundingClientRect().height)), overflow: document.documentElement.scrollWidth - window.innerWidth }));
    check('phone: Boundary controls are labelled, large and on the first screen', /lens=boundary/.test(controls.url) && controls.sliderBottom < 844 && controls.choice.length === 3 && controls.choice.every((h) => h >= 40) && controls.overflow <= 0, JSON.stringify(controls));
    const box = await page.evaluate(() => { const r = document.querySelector('.atlas-plate-hit').getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
    await page.touchscreen.tap(box.x + box.w * 0.5, box.y + box.h * 0.15);
    await sleep(300);
    const at = Number(new URLSearchParams(await page.evaluate(() => location.search)).get('at'));
    check('phone: tapping the plate turns the region (toward the top: bearing near 90)', at >= 70 && at <= 110, `at=${at}`);
    await page.close();
  }
  if (live) {
    const { page, errors } = await open('/atlas?lens=boundary&quality=low');
    await page.waitForSelector('.atlas-surface[data-live="true"]', { timeout: 180000 });
    await sleep(6000);
    check('live: the Boundary diagram is drawn over the live plate', (await plateInk(page)) > 300, String(await plateInk(page)));
    await clickText(page, '.atlas-viewswitch button', 'History');
    await sleep(5000);
    check('live: switching to History redraws the plate', (await plateInk(page)) > 200);
    await clickText(page, '.atlas-viewswitch button', 'Instrument');
    await sleep(9000);
    check('live: back on the instrument the plate is clear of diagrams', (await plateInk(page)) === 0, String(await plateInk(page)));
    check('live: plate views run without console errors', errors.length === 0, errors.join(' | '));
    await page.close();
  }

} catch (error) {
  check('test run completed', false, String(error?.stack ?? error).slice(0, 400));
} finally {
  await browser.close();
}
const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} passed`);
process.exit(failed.length ? 1 : 0);
