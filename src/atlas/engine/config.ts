/**
 * THE INSTRUMENT — shared dimensions and tuning values.
 *
 * The Reality Atlas is drawn as one optical instrument on a bench. Light leaves
 * the source lamp, passes fixed optics (law), an adjustable iris (aperture) and
 * a glass cell (the field), and lands on a ground-glass screen (the readout).
 *
 * Everything that controls the look lives here or in materials.ts, with a name
 * and a reason. Scene units are arbitrary; 1 unit is roughly 6 cm of a real
 * bench instrument, which keeps numbers readable.
 *
 * The picture is an illustration of the source-to-readout architecture. It is
 * not a physical claim, and nothing in the rendering asserts optics as the
 * mechanism of the theory.
 */

export type StageId = "overview" | "source" | "law" | "aperture" | "field" | "readout";

/** The five elements of the instrument, in the order the light meets them. */
export type InstrumentPart = "source" | "law" | "aperture" | "field" | "readout";
export const PART_ORDER: InstrumentPart[] = ["source", "law", "aperture", "field", "readout"];

/** The five instrument stages, in order along the bench, plus the overview. */
export const STAGE_ORDER: StageId[] = ["overview", "source", "law", "aperture", "field", "readout"];

/** Heights (y) of the fixed levels of the bench. */
export const LEVEL = {
  table: 0,
  railTop: 0.36,
  /** Height of the optical axis: the line the light follows. */
  axis: 2.08,
} as const;

/** Positions (x) of each element along the bench. Light travels toward +x. */
export const STATION_X = {
  lamp: -4.2,
  law: -2.35,
  iris: -0.55,
  cell: 1.45,
  screen: 3.95,
} as const;

export const RAIL = {
  length: 10.8,
  width: 0.66,
  height: 0.3,
} as const;

/** Clear radii of the optical elements. The beam envelope is derived from these. */
export const OPTICS = {
  lampWindowRadius: 0.3,
  lampFrontX: STATION_X.lamp + 0.8,
  lensRadius: 0.47,
  irisClearRadius: 0.5,
  /** Smallest and largest opening the iris reaches, as a fraction of its clear radius. */
  irisMinOpen: 0.07,
  irisMaxOpen: 0.94,
  irisBlades: 11,
  cellHalf: { x: 0.46, y: 0.38, z: 0.38 },
  screenHalf: 1.05,
} as const;

/** Colours of light. Kept physical: a warm source that reads neutral on the screen. */
export const LIGHT = {
  /** Tungsten-warm source glow (linear RGB multipliers). */
  source: [1.0, 0.72, 0.42] as [number, number, number],
  /** The beam after the law optics: nearly neutral, a touch warm. */
  beam: [1.0, 0.93, 0.82] as [number, number, number],
  /** Coherent-face accent inside the field cell. */
  coherent: [0.55, 0.9, 1.0] as [number, number, number],
  /** The readout image on the ground glass. */
  readout: [0.96, 0.97, 1.0] as [number, number, number],
} as const;

/** Background of the scene. Matches the page background so the canvas has no visible edge. */
export const BACKDROP = 0x08090b;

export type QualityTier = "high" | "medium" | "low";

export interface QualitySettings {
  /** Upper bound for devicePixelRatio. */
  maxPixelRatio: number;
  /** Upper bound on rendered pixels (width*height after pixel ratio). */
  maxPixels: number;
  msaaSamples: number;
  /** Real refraction through glass (costs one extra scene pass). */
  transmission: boolean;
  transmissionScale: number;
  bloom: boolean;
  shadowMapSize: number;
  dustCount: number;
  /** Blurred reflection of the instrument in the table top (one extra scene pass). */
  tableReflection: boolean;
  readoutSize: number;
  /** Individual stars drawn in the sky beyond the readout. */
  stars: number;
  /** Detail of the galaxy's diffuse light (1 = full, 0 = lightest). */
  skyDetail: number;
}

export const QUALITY: Record<QualityTier, QualitySettings> = {
  high: {
    maxPixelRatio: 2,
    maxPixels: 2_600_000,
    msaaSamples: 4,
    transmission: true,
    transmissionScale: 1,
    bloom: true,
    shadowMapSize: 2048,
    dustCount: 900,
    tableReflection: true,
    readoutSize: 1024,
    stars: 9000,
    skyDetail: 1,
  },
  medium: {
    maxPixelRatio: 1.5,
    maxPixels: 1_500_000,
    msaaSamples: 2,
    transmission: true,
    transmissionScale: 0.5,
    bloom: true,
    shadowMapSize: 1024,
    dustCount: 420,
    tableReflection: false,
    readoutSize: 768,
    stars: 5200,
    skyDetail: 0.6,
  },
  low: {
    maxPixelRatio: 1,
    maxPixels: 900_000,
    msaaSamples: 0,
    transmission: false,
    transmissionScale: 0.5,
    bloom: false,
    shadowMapSize: 512,
    dustCount: 160,
    tableReflection: false,
    readoutSize: 512,
    stars: 2600,
    skyDetail: 0,
  },
};
