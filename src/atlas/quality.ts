/**
 * Decide how the instrument should be drawn on this device.
 *
 * "still" means: do not start the 3D engine, show the prepared picture
 * instead. Everything else about the Atlas works the same either way.
 */
import type { QualityTier } from "./engine/config";

export type AtlasPicture = QualityTier | "still";

export type StillReason =
  | "requested" // the visitor (or the address) asked for it
  | "no-webgl" // the browser cannot run the 3D engine
  | "software" // 3D would be drawn by the processor, not a graphics chip
  | "save-data" // the visitor has asked the browser to save data
  | "slow" // the engine ran, but too slowly to be pleasant
  | "lost" // the browser took the graphics context away
  | "error"; // the engine failed to start

export interface PictureDecision {
  picture: AtlasPicture;
  reason: StillReason | null;
}

const SOFTWARE_RENDERERS = /swiftshader|llvmpipe|softpipe|software|microsoft basic render/i;

/** Read `?quality=high|medium|low|still` (for testing and for visitors who want to choose). */
export function pictureFromQuery(value: string | null): AtlasPicture | null {
  return value === "high" || value === "medium" || value === "low" || value === "still" ? value : null;
}

export function decidePicture(): PictureDecision {
  if (typeof window === "undefined") return { picture: "still", reason: "no-webgl" };

  const probe = document.createElement("canvas");
  const gl = probe.getContext("webgl2", { failIfMajorPerformanceCaveat: false });
  if (!gl) return { picture: "still", reason: "no-webgl" };
  const info = gl.getExtension("WEBGL_debug_renderer_info");
  const renderer = String(info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER));
  const floatTargets = Boolean(gl.getExtension("EXT_color_buffer_float") || gl.getExtension("EXT_color_buffer_half_float"));
  gl.getExtension("WEBGL_lose_context")?.loseContext();
  if (SOFTWARE_RENDERERS.test(renderer)) return { picture: "still", reason: "software" };

  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  if (connection?.saveData) return { picture: "still", reason: "save-data" };

  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
  const cores = navigator.hardwareConcurrency ?? 4;
  if (!floatTargets || (memory !== undefined && memory <= 2) || cores <= 2) return { picture: "low", reason: null };

  // Phones and small tablets: real refraction at half resolution, no table reflection.
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const smallScreen = Math.max(window.screen.width, window.screen.height) < 1100;
  if (coarse && smallScreen) return { picture: "medium", reason: null };
  if ((memory !== undefined && memory <= 4) || cores <= 4) return { picture: "medium", reason: null };
  return { picture: "high", reason: null };
}

/** The next tier down, or "still" when there is none. */
export function lowerPicture(picture: AtlasPicture): AtlasPicture {
  return picture === "high" ? "medium" : picture === "medium" ? "low" : "still";
}

export const stillReasonText: Record<StillReason, string> = {
  requested: "Showing the still picture.",
  "no-webgl": "This browser cannot draw the 3D instrument, so a still picture is shown. Everything else works the same.",
  software: "This device has no graphics acceleration available, so a still picture is shown. Everything else works the same.",
  "save-data": "Your browser is set to save data, so a still picture is shown instead of the 3D instrument.",
  slow: "The 3D instrument was drawing too slowly on this device, so a still picture is shown instead.",
  lost: "The browser paused 3D graphics, so a still picture is shown.",
  error: "The 3D instrument could not start, so a still picture is shown. Everything else works the same.",
};
