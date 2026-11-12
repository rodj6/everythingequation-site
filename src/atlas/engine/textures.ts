/**
 * Procedural textures. Everything the instrument is made of is generated here
 * at start-up from small functions: there are no image or model files.
 *
 * Each generator returns a tiling texture. Sizes are powers of two so they
 * mip-map cleanly. All of them are deterministic (seeded), so the instrument
 * looks the same on every visit and in every baked still.
 */
import * as THREE from "three";

/** Small deterministic random generator (mulberry32). */
export function seededRandom(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash2(ix: number, iy: number, seed: number): number {
  let h = Math.imul(ix, 374761393) ^ Math.imul(iy, 668265263) ^ Math.imul(seed, 1274126177);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

/** Tiling value noise: `period` lattice cells across the unit square. */
function valueNoise(u: number, v: number, period: number, seed: number): number {
  const x = u * period;
  const y = v * period;
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const fx = x - x0;
  const fy = y - y0;
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  const wrap = (n: number) => ((n % period) + period) % period;
  const a = hash2(wrap(x0), wrap(y0), seed);
  const b = hash2(wrap(x0 + 1), wrap(y0), seed);
  const c = hash2(wrap(x0), wrap(y0 + 1), seed);
  const d = hash2(wrap(x0 + 1), wrap(y0 + 1), seed);
  return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
}

/** Tiling fractal noise in 0..1. */
export function fbm(u: number, v: number, basePeriod: number, octaves: number, seed: number): number {
  let sum = 0;
  let amp = 0.5;
  let norm = 0;
  let period = basePeriod;
  for (let i = 0; i < octaves; i++) {
    sum += amp * valueNoise(u, v, period, seed + i * 17);
    norm += amp;
    amp *= 0.5;
    period *= 2;
  }
  return sum / norm;
}

function makeCanvas(width: number, height: number): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function finishTexture(
  canvas: HTMLCanvasElement,
  options: { color?: boolean; repeat?: [number, number]; anisotropy?: number } = {},
): THREE.CanvasTexture {
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  if (options.repeat) texture.repeat.set(options.repeat[0], options.repeat[1]);
  texture.colorSpace = options.color ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  texture.anisotropy = options.anisotropy ?? 8;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.needsUpdate = true;
  return texture;
}

/** Paint a height field (0..1, tiling) and return it as a greyscale canvas. */
function heightCanvas(size: number, height: (u: number, v: number) => number): { canvas: HTMLCanvasElement; data: Float32Array } {
  const canvas = makeCanvas(size, size);
  const ctx = canvas.getContext("2d")!;
  const image = ctx.createImageData(size, size);
  const data = new Float32Array(size * size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const h = Math.min(1, Math.max(0, height(x / size, y / size)));
      data[y * size + x] = h;
      const i = (y * size + x) * 4;
      const g = Math.round(h * 255);
      image.data[i] = g;
      image.data[i + 1] = g;
      image.data[i + 2] = g;
      image.data[i + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);
  return { canvas, data };
}

/** Convert a tiling height field to a tangent-space normal map. */
function normalCanvasFromHeight(size: number, data: Float32Array, strength: number): HTMLCanvasElement {
  const canvas = makeCanvas(size, size);
  const ctx = canvas.getContext("2d")!;
  const image = ctx.createImageData(size, size);
  const at = (x: number, y: number) => data[((y + size) % size) * size + ((x + size) % size)];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * strength;
      const dy = (at(x, y + 1) - at(x, y - 1)) * strength;
      const inv = 1 / Math.hypot(dx, dy, 1);
      const i = (y * size + x) * 4;
      image.data[i] = Math.round((-dx * inv * 0.5 + 0.5) * 255);
      image.data[i + 1] = Math.round((dy * inv * 0.5 + 0.5) * 255);
      image.data[i + 2] = Math.round((inv * 0.5 + 0.5) * 255);
      image.data[i + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);
  return canvas;
}

export interface SurfaceMaps {
  roughness: THREE.Texture;
  normal: THREE.Texture;
}

/**
 * Brushed or turned metal: long fine streaks along U. On lathe-turned parts U
 * runs around the circumference, which gives the circular grain of machined
 * metal and stretches highlights the way real anodised parts do.
 */
export function brushedMetalMaps(seed = 3, size = 512): SurfaceMaps {
  const random = seededRandom(seed);
  const rows = new Float32Array(size);
  // Each row is one tool mark: mostly similar, occasionally a deeper score.
  for (let y = 0; y < size; y++) {
    const fine = random();
    const score = random() > 0.985 ? random() * 0.5 : 0;
    rows[y] = 0.45 + (fine - 0.5) * 0.3 - score;
  }
  // Soften neighbouring rows slightly so marks are not single-pixel aliasing.
  const smooth = new Float32Array(size);
  for (let y = 0; y < size; y++) {
    smooth[y] = (rows[(y + size - 1) % size] + rows[y] * 2 + rows[(y + 1) % size]) / 4;
  }
  const { canvas, data } = heightCanvas(size, (u, v) => {
    const row = smooth[Math.floor(v * size) % size];
    const drift = (fbm(u, v, 4, 3, seed + 11) - 0.5) * 0.12;
    return row + drift;
  });
  return {
    roughness: finishTexture(canvas),
    normal: finishTexture(normalCanvasFromHeight(size, data, 1.6)),
  };
}

/** Diamond knurling for grip rings: two crossed families of ridges. */
export function knurlNormalMap(size = 256, cells = 8): THREE.Texture {
  const { data } = heightCanvas(size, (u, v) => {
    const a = Math.abs((((u + v) * cells) % 1) - 0.5) * 2;
    const b = Math.abs((((u - v) * cells) % 1 + 1) % 1 - 0.5) * 2;
    // Pyramids: high where both ridge families peak.
    return Math.min(a, b);
  });
  return finishTexture(normalCanvasFromHeight(size, data, 5.5));
}

/** Fine frosting for ground glass and matte paint. */
export function frostMaps(seed = 9, size = 512): SurfaceMaps {
  const { canvas, data } = heightCanvas(size, (u, v) => {
    const grain = fbm(u, v, 96, 2, seed);
    const cloud = fbm(u, v, 6, 3, seed + 5);
    return grain * 0.8 + cloud * 0.2;
  });
  return {
    roughness: finishTexture(canvas),
    normal: finishTexture(normalCanvasFromHeight(size, data, 2.2)),
  };
}

/**
 * Micro-variation for polished surfaces (table top, glass): almost uniform,
 * with faint smears and a few specks, so reflections are not perfectly clean.
 */
export function smudgeRoughnessMap(seed = 21, size = 512): THREE.Texture {
  const random = seededRandom(seed);
  const specks: Array<[number, number, number]> = [];
  for (let i = 0; i < 26; i++) specks.push([random(), random(), 0.0008 + random() * 0.0016]);
  const { canvas } = heightCanvas(size, (u, v) => {
    const smear = fbm(u * 1.0, v * 3.0, 5, 4, seed) * 0.5 + fbm(u, v, 22, 2, seed + 3) * 0.2;
    let speck = 0;
    for (const [sx, sy, r] of specks) {
      const dx = Math.min(Math.abs(u - sx), 1 - Math.abs(u - sx));
      const dy = Math.min(Math.abs(v - sy), 1 - Math.abs(v - sy));
      const d = Math.hypot(dx, dy);
      if (d < r) speck = Math.max(speck, 1 - d / r);
    }
    return 0.42 + smear * 0.22 + speck * 0.3;
  });
  return finishTexture(canvas);
}

/** Braided cloth sleeve for the lamp cable: an over-under weave. */
export function braidMaps(size = 256, strands = 10): SurfaceMaps & { color: THREE.Texture } {
  const weave = (u: number, v: number) => {
    const a = (u * strands + v * strands) % 1;
    const b = ((u * strands - v * strands) % 1 + 1) % 1;
    const ridgeA = Math.sin(a * Math.PI);
    const ridgeB = Math.sin(b * Math.PI);
    const cell = Math.floor(u * strands + v * strands) + Math.floor(u * strands - v * strands + 64);
    return cell % 2 === 0 ? Math.max(ridgeA, ridgeB * 0.55) : Math.max(ridgeB, ridgeA * 0.55);
  };
  const { canvas, data } = heightCanvas(size, weave);
  const colorCanvas = makeCanvas(size, size);
  const ctx = colorCanvas.getContext("2d")!;
  const image = ctx.createImageData(size, size);
  for (let i = 0; i < size * size; i++) {
    const h = data[i];
    // Dark charcoal thread with slightly lighter crowns.
    const tone = 18 + h * 26;
    image.data[i * 4] = tone;
    image.data[i * 4 + 1] = tone;
    image.data[i * 4 + 2] = tone + 2;
    image.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);
  return {
    roughness: finishTexture(canvas),
    normal: finishTexture(normalCanvasFromHeight(size, data, 4.5)),
    color: finishTexture(colorCanvas, { color: true }),
  };
}

/**
 * Polished dark hardwood for the screen frame. U runs along the grain.
 * Growth rings are bands bent by slow noise; pores are short dark streaks.
 */
export function woodMaps(seed = 41, size = 512): SurfaceMaps & { color: THREE.Texture } {
  const tones = new Float32Array(size * size);
  const colorCanvas = makeCanvas(size, size);
  const ctx = colorCanvas.getContext("2d")!;
  const image = ctx.createImageData(size, size);
  const dark = [30, 15, 9];
  const light = [96, 52, 28];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size;
      const v = y / size;
      const bend = fbm(u, v, 3, 3, seed) * 2.4 + Math.sin(u * Math.PI * 2) * 0.12;
      const ring = (v * 9 + bend) % 1;
      const band = Math.sin(ring * Math.PI);
      const pores = fbm(u * 1.0, v, 160, 2, seed + 9) * fbm(u, v, 24, 2, seed + 4);
      const figure = fbm(u, v, 8, 3, seed + 21);
      const tone = Math.min(1, Math.max(0, band * 0.55 + figure * 0.35 - pores * 0.5 + 0.12));
      tones[y * size + x] = tone;
      const i = (y * size + x) * 4;
      image.data[i] = dark[0] + (light[0] - dark[0]) * tone;
      image.data[i + 1] = dark[1] + (light[1] - dark[1]) * tone;
      image.data[i + 2] = dark[2] + (light[2] - dark[2]) * tone;
      image.data[i + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);
  const { canvas } = heightCanvas(size, (u, v) => 0.5 - tones[Math.floor(v * size) * size + Math.floor(u * size)] * 0.25);
  return {
    color: finishTexture(colorCanvas, { color: true }),
    roughness: finishTexture(canvas),
    normal: finishTexture(normalCanvasFromHeight(size, tones, 0.9)),
  };
}

/** Soft-edged white rectangle used for studio light panels. */
export function softboxTexture(width = 256, height = 256, edge = 0.28): THREE.Texture {
  const canvas = makeCanvas(width, height);
  const ctx = canvas.getContext("2d")!;
  const image = ctx.createImageData(width, height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const u = x / (width - 1);
      const v = y / (height - 1);
      const fx = Math.min(u, 1 - u) / edge;
      const fy = Math.min(v, 1 - v) / edge;
      const f = Math.min(1, fx) * Math.min(1, fy);
      const s = f * f * (3 - 2 * f);
      const g = Math.round(s * 255);
      const i = (y * width + x) * 4;
      image.data[i] = g;
      image.data[i + 1] = g;
      image.data[i + 2] = g;
      image.data[i + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.NoColorSpace;
  return texture;
}

/** Round, soft particle for dust in the beam. */
export function dustSpriteTexture(size = 64): THREE.Texture {
  const canvas = makeCanvas(size, size);
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.35, "rgba(255,255,255,0.55)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.NoColorSpace;
  return texture;
}

export interface EngravingOptions {
  width: number;
  height: number;
  /** Draws white marks on black. White becomes the engraved, paint-filled line. */
  draw: (ctx: CanvasRenderingContext2D, width: number, height: number) => void;
  repeat?: [number, number];
}

/**
 * Engraved and paint-filled markings (scales, numerals, stage letters).
 * Returns a mask: white where the mark is. Materials use it to tint the base
 * colour toward the fill paint and to press the surface in slightly.
 */
export function engravingTexture(options: EngravingOptions): THREE.CanvasTexture {
  const canvas = makeCanvas(options.width, options.height);
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, options.width, options.height);
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#fff";
  options.draw(ctx, options.width, options.height);
  const texture = finishTexture(canvas, { repeat: options.repeat, anisotropy: 16 });
  return texture;
}
