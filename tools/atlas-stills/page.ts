/**
 * The page the still-picture tool opens in a browser: it builds the same
 * instrument the Atlas shows, sets it to one stage and one iris opening, and
 * draws a few frames. See bake.mjs.
 */
import { AtlasEngine } from "@/atlas/engine/engine";
import type { QualityTier, StageId } from "@/atlas/engine/config";
import { readoutGroups } from "@/atlas/model";

declare global {
  interface Window {
    __ready?: boolean;
    __error?: string;
    __plate?: { cx: number; cy: number; ax: number; ay: number; bx: number; by: number };
  }
}

const params = new URLSearchParams(location.search);

(async () => {
  await Promise.all([
    document.fonts.load('600 32px "IBM Plex Sans"', "ΩT0.5F1"),
    document.fonts.load('500 12px "IBM Plex Mono"', "T0"),
    document.fonts.load('400 32px "Source Serif 4"', "Ω"),
  ]);
  const engine = new AtlasEngine({
    canvas: document.getElementById("canvas") as HTMLCanvasElement,
    quality: (params.get("quality") as QualityTier) ?? "high",
    fonts: {
      sans: '"IBM Plex Sans", sans-serif',
      serif: '"Source Serif 4", serif',
      mono: '"IBM Plex Mono", monospace',
    },
    // Stills are taken with motion at rest, so every bake of the same view is identical.
    reducedMotion: true,
  });
  engine.init();
  engine.setSize(window.innerWidth, window.innerHeight, window.devicePixelRatio);
  engine.setReadoutGroups(readoutGroups);
  engine.setAperture(Number(params.get("aperture") ?? 0.38), true);
  engine.setSecondProbe(params.get("probe") === "1", true);
  const stage = (params.get("stage") as StageId) ?? "overview";
  engine.setStage(stage, true);
  engine.setFocusPart(stage === "overview" ? null : stage);
  // Stand a little further back than the live view: the page crops the picture to fit frames of other shapes.
  if (params.get("plate") === "1") engine.setPlateView(true, true);
  engine.zoomBy(Number(params.get("zoom") ?? 1));
  // The homepage picture places the instrument to one side, leaving room for the headline.
  const [insetRight, insetBottom] = (params.get("inset") ?? "0,0").split(",").map(Number);
  engine.setInset(insetRight || 0, insetBottom || 0);
  for (let frame = 0; frame < 4; frame++) engine.renderFrame(frame * 0.05);
  // Where the plate lies in this picture, as fractions of its width and height.
  const frame = engine.getPlateFrame();
  const w = window.innerWidth;
  const h = window.innerHeight;
  window.__plate = { cx: frame.cx / w, cy: frame.cy / h, ax: frame.ax / w, ay: frame.ay / h, bx: frame.bx / w, by: frame.by / h };
  window.__ready = true;
})().catch((error) => {
  window.__error = String(error?.stack ?? error);
  window.__ready = true;
});
