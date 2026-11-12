#!/usr/bin/env node
/**
 * Bake the still pictures of the Atlas instrument.
 *
 * The Atlas shows a prepared picture first, and keeps showing it on devices
 * that cannot run the 3D engine. Those pictures are made here, by opening the
 * real engine in a headless browser and saving what it draws. Re-run this only
 * when the look of the instrument changes (src/atlas/engine) or the list of
 * sectors on the screen changes. It is not part of the site build.
 *
 *   npm install --no-save puppeteer-core esbuild      (once; sharp is already a site dependency)
 *   node tools/atlas-stills/bake.mjs                  (all pictures, about 24)
 *   node tools/atlas-stills/bake.mjs overview readout (only these stages)
 *
 * Environment:
 *   CHROME_PATH            path to Chrome or Chromium (default: common install locations)
 *   ATLAS_STILLS_VERSION   output folder under public/atlas-stills (default: v1)
 *   ATLAS_BAKE_SOFTWARE=1  draw with the processor (use on machines without a graphics chip; slow)
 *   ATLAS_TOOL_MODULES     folder holding puppeteer-core and esbuild, if not installed in this project
 *
 * If you change the look, bake into a new version folder and update
 * STILLS_PATH in src/atlas/model.ts, because the old pictures are cached by
 * browsers for a year.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "../..");
const requireFrom = (base) => createRequire(join(base, "package.json"));

async function load(name) {
  for (const base of [root, process.env.ATLAS_TOOL_MODULES ? resolve(process.env.ATLAS_TOOL_MODULES, "..") : null].filter(Boolean)) {
    try {
      return await import(pathToFileURL(requireFrom(base).resolve(name)).href);
    } catch { /* try the next place */ }
  }
  throw new Error(`Cannot find "${name}". Run: npm install --no-save puppeteer-core esbuild`);
}

const esbuild = await load("esbuild");
const puppeteer = (await load("puppeteer-core")).default;
const sharp = (await load("sharp")).default;

const chrome = process.env.CHROME_PATH ?? [
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
].find((candidate) => existsSync(candidate));
if (!chrome) throw new Error("Chrome not found. Set CHROME_PATH to its location.");

// ── What to bake. Keep in step with src/atlas/model.ts (stillUrl).
const STAGES = ["overview", "source", "law", "aperture", "field", "readout"];
const APERTURES = [0.08, 0.38, 0.9];
const APERTURE_STAGES = new Set(["overview", "aperture", "readout"]);
const PROBE_STAGES = new Set(["overview", "readout"]);
const SHAPES = {
  wide: { width: 1600, height: 1230, zoom: 1.1 }, // desktop and tablet frames
  tall: { width: 1000, height: 1000, zoom: 1.04 }, // phone and near-square frames
};

/** One-off pictures used outside the Atlas. `hero-wide` is the homepage picture: the instrument on the right, space on the left. */
const EXTRAS = {
  "hero-wide": { stage: "overview", aperture: 0.38, width: 2400, height: 1100, zoom: 1.85, inset: "-0.36,0.03" },
};

/**
 * The plate views (Boundary, History): the readout plate, faced and clear of marks. The page draws its
 * diagram over these, so the tool also records where the plate lies in each picture
 * (src/atlas/lenses/plate-frames.json).
 */
const PLATES = {
  "plate-wide": { stage: "readout", aperture: 0.38, plate: true, inset: "0,0.07", ...SHAPES.wide },
  "plate-tall": { stage: "readout", aperture: 0.38, plate: true, ...SHAPES.tall },
};

// A one-off test picture while adjusting the look:
//   ATLAS_BAKE_ONE='{"name":"test","stage":"overview","aperture":0.38,"width":1200,"height":750}' node tools/atlas-stills/bake.mjs
const one = process.env.ATLAS_BAKE_ONE ? JSON.parse(process.env.ATLAS_BAKE_ONE) : null;
if (one) {
  for (const key of Object.keys(EXTRAS)) delete EXTRAS[key];
  for (const key of Object.keys(PLATES)) delete PLATES[key];
  EXTRAS[one.name ?? "test"] = one;
}
const wanted = one ? [one.name ?? "test"] : process.argv.slice(2);
const stages = wanted.length ? STAGES.filter((stage) => wanted.includes(stage)) : STAGES;
const extras = [...Object.entries(EXTRAS), ...Object.entries(PLATES)].filter(([name]) => !wanted.length || wanted.includes(name));
const version = process.env.ATLAS_STILLS_VERSION ?? "v3";
const outDir = join(root, "public", "atlas-stills", version);
mkdirSync(outDir, { recursive: true });

// ── Bundle the page.
const work = join(tmpdir(), "atlas-stills");
mkdirSync(work, { recursive: true });
await esbuild.build({
  entryPoints: [join(here, "page.ts")],
  bundle: true,
  format: "iife",
  target: "es2020",
  outfile: join(work, "page.js"),
  tsconfig: join(root, "tsconfig.json"),
  logLevel: "warning",
});
const font = (file) => pathToFileURL(join(root, "public", "fonts", "v1", file)).href;
writeFileSync(join(work, "index.html"), `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:"Source Serif 4";src:url("${font("source-serif-4-latin-wght-normal.woff2")}") format("woff2");font-weight:200 900}
@font-face{font-family:"Source Serif 4";src:url("${font("source-serif-4-greek-wght-normal.woff2")}") format("woff2");font-weight:200 900;unicode-range:U+0370-03FF}
@font-face{font-family:"IBM Plex Sans";src:url("${font("ibm-plex-sans-latin-wght-normal.woff2")}") format("woff2");font-weight:100 700}
@font-face{font-family:"IBM Plex Sans";src:url("${font("ibm-plex-sans-greek-wght-normal.woff2")}") format("woff2");font-weight:100 700;unicode-range:U+0370-03FF}
@font-face{font-family:"IBM Plex Mono";src:url("${font("ibm-plex-mono-latin-500-normal.woff2")}") format("woff2");font-weight:500}
html,body{margin:0;height:100%;background:#08090b;overflow:hidden}canvas{display:block;width:100vw;height:100vh}
</style></head><body><canvas id="canvas"></canvas><script src="page.js"></script></body></html>`);

// ── Draw and save.
const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: "new",
  protocolTimeout: 600_000,
  args: [
    "--no-sandbox", "--hide-scrollbars", "--force-color-profile=srgb", "--ignore-gpu-blocklist", "--enable-webgl",
    "--allow-file-access-from-files",
    ...(process.env.ATLAS_BAKE_SOFTWARE ? ["--use-angle=swiftshader", "--use-gl=angle", "--enable-unsafe-swiftshader", "--disable-dev-shm-usage"] : []),
  ],
});

let made = 0;
const plateFrames = {};
async function bake(name, { stage, aperture, width, height, zoom = 1, inset = "0,0", probe = false, plate = false }) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  const started = Date.now();
  const query = `?stage=${stage}&aperture=${aperture}&zoom=${zoom}&inset=${inset}&probe=${probe ? 1 : 0}&plate=${plate ? 1 : 0}`;
  await page.goto(pathToFileURL(join(work, "index.html")).href + query, { waitUntil: "load", timeout: 600_000 });
  await page.waitForFunction("window.__ready === true", { timeout: 600_000 });
  const error = await page.evaluate("window.__error || null");
  if (error) throw new Error(`${name}: ${error}`);
  const png = await page.screenshot({ type: "png" });
  if (plate) plateFrames[name] = { width, height, ...(await page.evaluate("window.__plate")) };
  await page.close();
  await sharp(png).webp({ quality: 84, effort: 6, smartSubsample: true }).toFile(join(outDir, `${name}.webp`));
  made++;
  console.log(`${name}.webp  ${((Date.now() - started) / 1000).toFixed(1)} s`);
}

try {
  for (const stage of stages) {
    for (const aperture of APERTURE_STAGES.has(stage) ? APERTURES : [0.38]) {
      for (const [shape, size] of Object.entries(SHAPES)) {
        const name = `${stage}-${String(Math.round(aperture * 100)).padStart(2, "0")}`;
        await bake(`${name}-${shape}`, { stage, aperture, ...size });
        // The same view with the second probe swung into the light.
        if (PROBE_STAGES.has(stage)) await bake(`${name}-p-${shape}`, { stage, aperture, probe: true, ...size });
      }
    }
  }
  for (const [name, options] of extras) await bake(name, options);
} finally {
  await browser.close();
}
const platesFile = join(root, "src", "atlas", "lenses", "plate-frames.json");
const platesBaked = Object.fromEntries(Object.entries(plateFrames).filter(([name]) => name in PLATES));
if (Object.keys(platesBaked).length) {
  const before = existsSync(platesFile) ? JSON.parse(readFileSync(platesFile, "utf8")) : {};
  const round = (frame) => Object.fromEntries(Object.entries(frame).map(([key, value]) => [key, Math.round(value * 1e5) / 1e5]));
  const merged = { ...before, ...Object.fromEntries(Object.entries(platesBaked).map(([name, frame]) => [name, round(frame)])) };
  writeFileSync(platesFile, `${JSON.stringify(merged, null, 2)}\n`);
  console.log(`plate positions written to ${platesFile}`);
}
console.log(`${made} pictures written to ${outDir}`);
