/**
 * Where the readout plate lies in the picture, and how to draw on it.
 *
 * The Boundary and History views draw a flat diagram over the glass of the
 * plate. The 3D engine (or, for a prepared picture, a table made when the
 * pictures were baked) says where the plate is: its centre and its two
 * half-axes in CSS pixels. Everything else here is plain 2D geometry.
 *
 * Plate coordinates: the centre is (0, 0), the rim of the glass is at distance
 * 1, x runs to the right and y upward.
 */
import frames from "./plate-frames.json";

export interface PlateFrame {
  cx: number;
  cy: number;
  /** One plate unit to the right, in pixels. */
  ax: number;
  ay: number;
  /** One plate unit upward, in pixels. */
  bx: number;
  by: number;
  /** 0 while the plate still shows its marks, 1 when it is clear for a diagram. */
  amount: number;
}

/** Passes the plate's position from the picture to whatever draws on it, without going through React state. */
export class PlateBus {
  frame: PlateFrame | null = null;
  private listeners = new Set<() => void>();

  publish(frame: PlateFrame | null): void {
    const before = this.frame;
    this.frame = frame;
    if (
      before && frame &&
      Math.abs(before.cx - frame.cx) < 0.05 && Math.abs(before.cy - frame.cy) < 0.05 &&
      Math.abs(before.ax - frame.ax) < 0.05 && Math.abs(before.by - frame.by) < 0.05 &&
      Math.abs(before.bx - frame.bx) < 0.05 && Math.abs(before.ay - frame.ay) < 0.05 &&
      Math.abs(before.amount - frame.amount) < 0.004
    ) return;
    for (const listener of this.listeners) listener();
  }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}

/** A point of the picture (CSS pixels) in plate coordinates. */
export function toPlate(frame: PlateFrame, x: number, y: number): { x: number; y: number } {
  const dx = x - frame.cx;
  const dy = y - frame.cy;
  const det = frame.ax * frame.by - frame.bx * frame.ay;
  if (Math.abs(det) < 1e-6) return { x: 0, y: 0 };
  return { x: (dx * frame.by - dy * frame.bx) / det, y: (dy * frame.ax - dx * frame.ay) / det };
}

/** A plate point in the picture (CSS pixels). */
export function fromPlate(frame: PlateFrame, x: number, y: number): { x: number; y: number } {
  return { x: frame.cx + x * frame.ax + y * frame.bx, y: frame.cy + x * frame.ay + y * frame.by };
}

/** Rough size of one plate unit in pixels (the smaller half-axis). */
export function plateScale(frame: PlateFrame): number {
  return Math.min(Math.hypot(frame.ax, frame.ay), Math.hypot(frame.bx, frame.by));
}

type BakedFrame = { width: number; height: number; cx: number; cy: number; ax: number; ay: number; bx: number; by: number };
const baked = frames as Record<string, BakedFrame>;

/**
 * The plate's position in a prepared picture shown with `object-fit: cover`.
 * `box` is the size of the frame the picture fills; `position` is its
 * object-position as fractions (0.5, 0.5 is centred).
 */
export function stillPlateFrame(shape: "wide" | "tall", box: { width: number; height: number }, position: { x: number; y: number }): PlateFrame | null {
  const source = baked[`plate-${shape}`];
  if (!source || box.width <= 0 || box.height <= 0) return null;
  const scale = Math.max(box.width / source.width, box.height / source.height);
  const shown = { width: source.width * scale, height: source.height * scale };
  const left = (box.width - shown.width) * position.x;
  const top = (box.height - shown.height) * position.y;
  return {
    cx: left + source.cx * shown.width,
    cy: top + source.cy * shown.height,
    ax: source.ax * shown.width,
    ay: source.ay * shown.height,
    bx: source.bx * shown.width,
    by: source.by * shown.height,
    amount: 1,
  };
}

// ───────────────────────────── Drawing helpers ─────────────────────────────

export interface PlatePen {
  ctx: CanvasRenderingContext2D;
  frame: PlateFrame;
  /** Device pixels per CSS pixel. */
  ratio: number;
  /** One CSS pixel, in plate units. */
  px: number;
  /** Seconds, for slow breathing; 0 when motion is reduced. */
  time: number;
}

/** Set the transform so that drawing happens in plate coordinates. */
export function usePlateSpace(pen: PlatePen): void {
  const { ctx, frame, ratio } = pen;
  ctx.setTransform(frame.ax * ratio, frame.ay * ratio, frame.bx * ratio, frame.by * ratio, frame.cx * ratio, frame.cy * ratio);
}

/** Text is drawn upright in picture space, anchored at a plate point. */
export function plateText(pen: PlatePen, text: string, x: number, y: number, options: { size?: number; color?: string; align?: CanvasTextAlign; weight?: number; family?: string; dx?: number; dy?: number } = {}): void {
  const { ctx, frame, ratio } = pen;
  const at = fromPlate(frame, x, y);
  ctx.save();
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  const size = options.size ?? 12;
  ctx.font = `${options.weight ?? 500} ${size}px ${options.family ?? '"IBM Plex Mono", ui-monospace, monospace'}`;
  ctx.textAlign = options.align ?? "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "rgba(0, 0, 0, 0.85)";
  ctx.shadowBlur = 6 * ratio;
  ctx.fillStyle = options.color ?? "rgba(240, 236, 226, 0.92)";
  ctx.fillText(text, at.x + (options.dx ?? 0), at.y + (options.dy ?? 0));
  ctx.restore();
}

/** A soft dark veil over the glass, so the diagram reads against the galaxy behind it. */
export function plateVeil(pen: PlatePen, strength = 0.46): void {
  const { ctx } = pen;
  const veil = ctx.createRadialGradient(0, 0, 0.1, 0, 0, 1);
  veil.addColorStop(0, `rgba(5, 7, 11, ${strength})`);
  veil.addColorStop(0.8, `rgba(5, 7, 11, ${strength * 0.92})`);
  veil.addColorStop(1, `rgba(5, 7, 11, ${strength * 0.55})`);
  ctx.fillStyle = veil;
  ctx.beginPath();
  ctx.arc(0, 0, 0.992, 0, Math.PI * 2);
  ctx.fill();
}

export const TAU = Math.PI * 2;
export const rad = (degrees: number) => (degrees * Math.PI) / 180;
