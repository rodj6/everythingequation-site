/**
 * The Boundary view: its geometry, what a choice of readings settles, and the
 * drawing on the plate.
 *
 * The rim of the disc is the boundary. A chosen stretch of rim reaches the part
 * of the interior closed off by the arc that meets the rim at right angles at
 * its two ends (the picture of a boundary region and its wedge). Which
 * features are read there depends on the set of readings chosen. All of the
 * content (kinds, features, reading sets, wording) is in
 * src/data/atlas/views.ts; this file only works out and draws the result.
 */
import { boundaryView, type BoundaryFeature, type BoundaryKind, type BoundaryReadingSet, type FeatureReading } from "@/data/atlas/views";
import { TAU, plateVeil, rad, usePlateSpace, type PlatePen } from "./plate";

export interface BoundaryState {
  /** Width of the region read, in degrees of rim. */
  arc: number;
  /** Bearing of its middle, degrees anticlockwise from the right. */
  at: number;
  /** Id of the reading set. */
  readings: string;
}

export const initialBoundary: BoundaryState = {
  arc: boundaryView.arc.initial,
  at: boundaryView.at.initial,
  readings: boundaryView.readingSets[0].id,
};

export function readingSet(id: string): BoundaryReadingSet {
  return boundaryView.readingSets.find((set) => set.id === id) ?? boundaryView.readingSets[0];
}

const kindOf = (id: string): BoundaryKind => boundaryView.kinds.find((kind) => kind.id === id) ?? boundaryView.kinds[0];

/** True when a point of the disc lies in the part of the interior the chosen region reaches. */
export function reaches(state: BoundaryState, x: number, y: number): boolean {
  if (state.arc >= 359.5) return true;
  const half = rad(state.arc / 2);
  const ux = Math.cos(rad(state.at));
  const uy = Math.sin(rad(state.at));
  if (Math.abs(half - Math.PI / 2) < 0.01) return x * ux + y * uy > 0;
  if (half < Math.PI / 2) {
    const d = 1 / Math.cos(half);
    return Math.hypot(x - ux * d, y - uy * d) < Math.tan(half);
  }
  const rest = Math.PI - half;
  const d = 1 / Math.cos(rest);
  return Math.hypot(x + ux * d, y + uy * d) > Math.tan(rest);
}

export type FeatureStatus = FeatureReading | "outside";

export interface BoundaryResult {
  features: Array<{ feature: BoundaryFeature; kind: BoundaryKind; status: FeatureStatus }>;
  /** A sentence saying what the present choice settles; also read out by assistive technology. */
  summary: string;
}

const plural = (count: number, one: string) => `${count} ${one}${count === 1 ? "" : "s"}`;
const list = (parts: string[]) => (parts.length <= 1 ? parts.join("") : `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`);

export function evaluateBoundary(state: BoundaryState): BoundaryResult {
  const set = readingSet(state.readings);
  const features = boundaryView.features.map((feature) => {
    const kind = kindOf(feature.kind);
    const status: FeatureStatus = reaches(state, feature.x, feature.y) ? set.reads[feature.kind] ?? "open" : "outside";
    return { feature, kind, status };
  });

  const count = (status: FeatureStatus, kind: string) => features.filter((item) => item.status === status && item.kind.id === kind).length;
  const settled: string[] = [];
  const open: string[] = [];
  for (const kind of boundaryView.kinds) {
    const name = kind.label.toLowerCase();
    const read = count("read", kind.id);
    const detected = count("detected", kind.id);
    const unread = count("open", kind.id);
    if (read) settled.push(`${plural(read, name)} recovered`);
    if (detected) settled.push(`${plural(detected, name)} detected`);
    if (unread) open.push(plural(unread, name));
  }
  const outside = features.filter((item) => item.status === "outside").length;
  const region = state.arc >= 359.5 ? "The whole rim is read" : `${Math.round(state.arc)}° of the rim is read`;
  const inside = settled.length ? `Where the readings reach: ${list(settled)}.` : "Where the readings reach, nothing on the disc is settled.";
  // "Not settled" is all the picture says of these: it does not assert that no reading of this kind could register them.
  const passed = open.length ? ` Not settled here: ${list(open)}.` : "";
  const beyond = outside ? ` Beyond their reach: ${plural(outside, "feature")} these readings say nothing about.` : " Nothing on the disc lies beyond their reach.";
  return { features, summary: `${region}, ${set.label.toLowerCase()}. ${inside}${passed}${beyond}` };
}

/** Turn a pointer position on the plate into a bearing for the middle of the region, or null if it is off the plate. */
export function bearingAt(x: number, y: number): number | null {
  const r = Math.hypot(x, y);
  if (r < 0.12 || r > 1.32) return null;
  const degrees = (Math.atan2(y, x) * 180) / Math.PI;
  return (Math.round(degrees) + 360) % 360;
}

// ───────────────────────────── Drawing ─────────────────────────────

const WARM = "255, 232, 194";
const COOL = "143, 227, 255";
const AMBER = "255, 170, 112";
const GHOST = "198, 208, 226";

/** Adds the curve that closes off the region of half-angle `half` centred on bearing `at` (radians) to the current path, from its far end back to its near end. */
function closingCurve(ctx: CanvasRenderingContext2D, at: number, half: number, move: boolean): void {
  const ux = Math.cos(at);
  const uy = Math.sin(at);
  if (move) ctx.moveTo(Math.cos(at + half), Math.sin(at + half));
  if (Math.abs(half - Math.PI / 2) < 0.01) {
    ctx.lineTo(Math.cos(at - half), Math.sin(at - half));
  } else if (half < Math.PI / 2) {
    const d = 1 / Math.cos(half);
    ctx.arc(ux * d, uy * d, Math.tan(half), at + Math.PI / 2 + half, at + (3 * Math.PI) / 2 - half, false);
  } else {
    const rest = Math.PI - half;
    const d = 1 / Math.cos(rest);
    ctx.arc(-ux * d, -uy * d, Math.tan(rest), at + Math.PI / 2 - rest, at - Math.PI / 2 + rest, true);
  }
}

function glyph(ctx: CanvasRenderingContext2D, kind: BoundaryKind["glyph"], x: number, y: number, size: number, turn: number): void {
  ctx.beginPath();
  if (kind === "dot") {
    ctx.arc(x, y, size, 0, TAU);
  } else if (kind === "diamond") {
    const s = size * 1.28;
    ctx.moveTo(x, y + s);
    ctx.lineTo(x + s * 0.78, y);
    ctx.lineTo(x, y - s);
    ctx.lineTo(x - s * 0.78, y);
    ctx.closePath();
  } else {
    // A short wave packet: the mark of an extended mode.
    const length = size * 3.4;
    const cos = Math.cos(turn);
    const sin = Math.sin(turn);
    for (let step = 0; step <= 44; step++) {
      const u = (step / 44) * 2 - 1;
      const along = u * length;
      const across = Math.cos(u * 8.6) * Math.exp(-u * u * 2.6) * size * 1.25;
      const px = x + along * cos - across * sin;
      const py = y + along * sin + across * cos;
      if (step === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
  }
}

export function drawBoundary(pen: PlatePen, state: BoundaryState, result: BoundaryResult, strength: number): void {
  const { ctx, px, time } = pen;
  const at = rad(state.at);
  const half = Math.min(Math.PI, rad(state.arc / 2));
  const whole = state.arc >= 359.5;
  const set = readingSet(state.readings);

  ctx.save();
  ctx.globalAlpha = strength;
  usePlateSpace(pen);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  plateVeil(pen, 0.5);

  // ── The interior the readings reach.
  ctx.save();
  ctx.beginPath();
  if (whole) ctx.arc(0, 0, 0.985, 0, TAU);
  else {
    ctx.arc(0, 0, 0.985, at - half, at + half, false);
    closingCurve(ctx, at, half, false);
    ctx.closePath();
  }
  const glow = ctx.createRadialGradient(Math.cos(at) * 0.9, Math.sin(at) * 0.9, 0.05, Math.cos(at) * 0.4, Math.sin(at) * 0.4, 1.5);
  glow.addColorStop(0, `rgba(${COOL}, 0.26)`);
  glow.addColorStop(0.55, `rgba(${COOL}, 0.11)`);
  glow.addColorStop(1, `rgba(${COOL}, 0.05)`);
  ctx.fillStyle = glow;
  ctx.fill();
  ctx.clip();
  // Smaller balls inside the region: every one of them is read, and their half-balls fill it.
  if (!whole) {
    ctx.strokeStyle = `rgba(${COOL}, 0.2)`;
    ctx.lineWidth = px * 0.9;
    const nested: Array<[number, number]> = [[0, 0.74], [0, 0.5], [0, 0.27], [-0.46, 0.42], [0.46, 0.42], [-0.7, 0.2], [0.7, 0.2]];
    for (const [shift, share] of nested) {
      ctx.beginPath();
      closingCurve(ctx, at + shift * half, share * half, true);
      ctx.stroke();
    }
  }
  ctx.restore();

  // The surface that closes the region off.
  if (!whole) {
    ctx.beginPath();
    closingCurve(ctx, at, half, true);
    ctx.shadowColor = `rgba(${COOL}, 0.9)`;
    ctx.shadowBlur = 10 * pen.ratio;
    ctx.strokeStyle = `rgba(${COOL}, 0.95)`;
    ctx.lineWidth = px * 1.7;
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  // ── The rim: a fine track, and one reading for each small step around it.
  ctx.beginPath();
  ctx.arc(0, 0, 0.968, 0, TAU);
  ctx.strokeStyle = `rgba(${WARM}, 0.22)`;
  ctx.lineWidth = px;
  ctx.stroke();

  const BARS = 144;
  const inRegion = (angle: number) => {
    if (whole) return true;
    let delta = Math.abs(angle - at) % TAU;
    if (delta > Math.PI) delta = TAU - delta;
    return delta <= half + 1e-6;
  };
  const response = (angle: number, wanted: FeatureStatus) => {
    let sum = 0;
    for (const item of result.features) {
      if (item.status !== wanted) continue;
      const r = Math.hypot(item.feature.x, item.feature.y);
      let delta = Math.abs(angle - Math.atan2(item.feature.y, item.feature.x)) % TAU;
      if (delta > Math.PI) delta = TAU - delta;
      const spread = 0.2 + 0.55 * (1 - r);
      sum += (0.45 + 0.55 * r) * Math.exp(-(delta * delta) / (2 * spread * spread));
    }
    return sum;
  };
  for (let index = 0; index < BARS; index++) {
    const angle = (index / BARS) * TAU;
    const lit = inRegion(angle);
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const base = 0.016 + 0.006 * Math.sin(index * 2.4) + 0.004 * Math.sin(index * 0.7 + 1);
    const read = lit ? response(angle, "read") * 0.058 : 0;
    const outer = 0.96;
    const inner = outer - base - read;
    ctx.beginPath();
    ctx.moveTo(cos * outer, sin * outer);
    ctx.lineTo(cos * inner, sin * inner);
    ctx.strokeStyle = lit ? `rgba(${WARM}, ${0.62 + Math.min(0.38, read * 6)})` : `rgba(${WARM}, 0.3)`;
    ctx.lineWidth = px * (lit ? 1.5 : 1);
    ctx.stroke();
    // The second-order response is drawn as a second, warmer stroke continuing each reading inward.
    if (lit) {
      const more = response(angle, "detected");
      if (more > 0.01) {
        const extra = 0.028 + more * 0.075;
        ctx.beginPath();
        ctx.moveTo(cos * (inner - px * 1.5), sin * (inner - px * 1.5));
        ctx.lineTo(cos * (inner - px * 1.5 - extra), sin * (inner - px * 1.5 - extra));
        ctx.strokeStyle = `rgba(${AMBER}, 1)`;
        ctx.lineWidth = px * 2.2;
        ctx.stroke();
      }
    }
  }

  // The stretch of rim that is read, with a grip at each end and in the middle.
  ctx.beginPath();
  if (whole) ctx.arc(0, 0, 0.985, 0, TAU);
  else ctx.arc(0, 0, 0.985, at - half, at + half, false);
  ctx.shadowColor = `rgba(${WARM}, 0.95)`;
  ctx.shadowBlur = 12 * pen.ratio;
  ctx.strokeStyle = `rgba(${WARM}, 0.98)`;
  ctx.lineWidth = px * 3.2;
  ctx.stroke();
  ctx.shadowBlur = 0;
  if (!whole) {
    for (const end of [at - half, at + half]) {
      ctx.beginPath();
      ctx.arc(Math.cos(end) * 0.985, Math.sin(end) * 0.985, px * 4.5, 0, TAU);
      ctx.fillStyle = `rgba(${WARM}, 1)`;
      ctx.fill();
    }
  }
  // The middle grip: this is what a finger or the pointer takes hold of.
  ctx.beginPath();
  ctx.arc(Math.cos(at) * 0.985, Math.sin(at) * 0.985, px * 9, 0, TAU);
  ctx.fillStyle = "rgba(12, 14, 18, 0.9)";
  ctx.fill();
  ctx.strokeStyle = `rgba(${WARM}, 1)`;
  ctx.lineWidth = px * 2;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(Math.cos(at) * 0.985, Math.sin(at) * 0.985, px * 3, 0, TAU);
  ctx.fillStyle = `rgba(${WARM}, 1)`;
  ctx.fill();

  // ── The features.
  result.features.forEach((item, index) => {
    const { x, y } = item.feature;
    const size = 0.046;
    const turn = 0.6 + index * 1.1;
    if (item.status === "read") {
      glyph(ctx, item.kind.glyph, x, y, size, turn);
      ctx.shadowColor = `rgba(${WARM}, 0.95)`;
      ctx.shadowBlur = 14 * pen.ratio;
      if (item.kind.glyph === "ripple") {
        ctx.strokeStyle = `rgba(${WARM}, 1)`;
        ctx.lineWidth = px * 2.2;
        ctx.stroke();
      } else {
        ctx.fillStyle = `rgba(${WARM}, 1)`;
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      // A fine collar: this one is fixed.
      ctx.beginPath();
      ctx.arc(x, y, size * 2.2, 0, TAU);
      ctx.strokeStyle = `rgba(${WARM}, 0.4)`;
      ctx.lineWidth = px;
      ctx.stroke();
    } else if (item.status === "detected") {
      // Registered, not mapped: rings spreading from where it is, and a faint mark.
      for (let ring = 0; ring < 3; ring++) {
        const phase = (time * 0.32 + ring / 3) % 1;
        const radius = size * (1.6 + phase * 4.2);
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, TAU);
        ctx.strokeStyle = `rgba(${AMBER}, ${(time ? 1 - phase : 0.75 - ring * 0.22) * 0.8})`;
        ctx.lineWidth = px * 1.6;
        ctx.stroke();
      }
      glyph(ctx, item.kind.glyph, x, y, size, turn);
      ctx.strokeStyle = `rgba(${AMBER}, 0.95)`;
      ctx.lineWidth = px * 1.8;
      ctx.shadowColor = `rgba(${AMBER}, 0.9)`;
      ctx.shadowBlur = 10 * pen.ratio;
      ctx.stroke();
      ctx.shadowBlur = 0;
    } else {
      // Left open: several compatible versions, none of them fixed.
      const reached = item.status === "open";
      const tone = reached ? COOL : GHOST;
      ctx.setLineDash([px * 3, px * 3]);
      for (let version = 0; version < 3; version++) {
        const angle = index * 2.3 + version * 2.094;
        const drift = time ? Math.sin(time * 0.7 + index + version * 2.1) : 0;
        const offset = 0.034 + 0.012 * drift;
        const alpha = (reached ? 0.9 : 0.62) * (time ? 0.6 + 0.4 * Math.sin(time * 0.9 + version * 2.094 + index) : 0.8);
        glyph(ctx, item.kind.glyph, x + Math.cos(angle) * offset, y + Math.sin(angle) * offset, size * (0.85 + version * 0.16), turn + version * 0.5);
        ctx.strokeStyle = `rgba(${tone}, ${Math.max(0.16, alpha)})`;
        ctx.lineWidth = px * 1.4;
        ctx.stroke();
      }
      ctx.setLineDash([]);
    }
  });

  ctx.restore();
  void set;
}
