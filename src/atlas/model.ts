/**
 * The Atlas view-model: everything the interface needs to know about how the
 * content maps onto the instrument, and how the state of the page is written
 * to (and read from) its address.
 *
 * No drawing and no React here. The content comes from src/data/reality-atlas.ts;
 * the engine (src/atlas/engine) is only referred to by its types.
 */
import {
  atlasEdges,
  atlasNodeMap,
  atlasNodes,
  atlasTours,
  getStageGroups,
  observableRoutes,
  stageOrder,
  type AtlasNode,
  type AtlasStage,
  type ObservableRoute,
} from "@/data/reality-atlas";
import { boundaryView, entryViews, historyView, type AtlasViewId } from "@/data/atlas/views";
import type { InstrumentPart } from "./engine/config";
import { initialBoundary, type BoundaryState } from "./lenses/boundary";
import { initialHistory, type HistoryState } from "./lenses/history";
import { pictureFromQuery, type AtlasPicture } from "./quality";

export type AtlasMode = "explore" | "guided" | "trace";
export type PanelTab = "overview" | "equations" | "connections";

export const DEFAULT_APERTURE = 0.38;
export const DEFAULT_TOUR = "essentials";

/** The element of the instrument each stage looks at (the overview looks at all of them). */
export const stagePart: Record<AtlasStage, InstrumentPart | null> = {
  overview: null,
  source: "source",
  law: "law",
  aperture: "aperture",
  field: "field",
  readout: "readout",
};

export const partStage: Record<InstrumentPart, AtlasStage> = {
  source: "source",
  law: "law",
  aperture: "aperture",
  field: "field",
  readout: "readout",
};

/** The entry that introduces each stage. */
export const stageLeadEntry: Record<AtlasStage, string | null> = {
  overview: null,
  source: "omega",
  law: "tier0-law",
  aperture: "aperture",
  field: "canonical-field",
  readout: "global-closure",
};

// ───────────────────────────── The readout screen ─────────────────────────────

const sectorGroup = getStageGroups("readout").find((group) => group.id === "sectors");

/** The sectors drawn as clusters of light on the screen. The global closure sits at the centre. */
export const sectorEntries: AtlasNode[] = (() => {
  const nodes = sectorGroup?.nodes ?? [];
  const closure = nodes.filter((node) => node.id === "global-closure");
  return [...closure, ...nodes.filter((node) => node.id !== "global-closure")];
})();

const sectorIds = new Set(sectorEntries.map((node) => node.id));

/** For every entry, the sector whose cluster lights up when the entry is open (if any). */
const sectorOfEntry: Map<string, string> = (() => {
  const map = new Map<string, string>();
  for (const node of atlasNodes) {
    if (sectorIds.has(node.id)) {
      map.set(node.id, node.id);
      continue;
    }
    if (node.stage !== "readout") continue;
    const neighbours = [
      ...node.upstream,
      ...node.downstream,
      ...atlasEdges.filter((edge) => edge.to === node.id).map((edge) => edge.from),
      ...atlasEdges.filter((edge) => edge.from === node.id).map((edge) => edge.to),
    ];
    const sector = neighbours.find((id) => sectorIds.has(id) && id !== "global-closure") ?? neighbours.find((id) => sectorIds.has(id));
    if (sector) map.set(node.id, sector);
  }
  return map;
})();

export function sectorFor(entryId: string | null): string | null {
  return entryId ? sectorOfEntry.get(entryId) ?? null : null;
}

/**
 * What the engine draws on the screen: one cluster per sector, with more
 * points of light where more of the Atlas reads out. Computed from the
 * content, so the picture follows the data.
 */
export const readoutGroups: Array<{ id: string; points: number }> = sectorEntries.map((sector) => {
  const related = [...sectorOfEntry.values()].filter((id) => id === sector.id).length - 1;
  return { id: sector.id, points: sector.id === "global-closure" ? 6 : Math.max(2, Math.min(7, 2 + related)) };
});

export const sectorLabels: Record<string, string> = Object.fromEntries(
  sectorEntries.map((node) => [node.id, node.shortLabel || node.label]),
);

// ───────────────────────────── Traces and tours ─────────────────────────────

/** The cluster on the screen a trace starts from. */
export function routeSector(route: ObservableRoute): string {
  for (let index = route.nodeIds.length - 1; index >= 0; index--) {
    const sector = sectorFor(route.nodeIds[index]);
    if (sector && sector !== "global-closure") return sector;
  }
  return "global-closure";
}

export function findRoute(id: string | null): ObservableRoute | null {
  return observableRoutes.find((route) => route.id === id) ?? null;
}

export function findTour(id: string | null) {
  return atlasTours.find((tour) => tour.id === id) ?? atlasTours.find((tour) => tour.id === DEFAULT_TOUR) ?? atlasTours[0];
}

/** The element of the instrument an entry belongs to, for the camera and for the trace pulse. */
export function partOfEntry(entryId: string | null): InstrumentPart | null {
  const node = entryId ? atlasNodeMap.get(entryId) : null;
  return node ? stagePart[node.stage] : null;
}

// ───────────────────────────── Address (URL) state ─────────────────────────────

export interface AtlasAddress {
  mode: AtlasMode;
  /** The stage the camera rests on. */
  stage: AtlasStage;
  /** The open entry, if any. */
  focus: string | null;
  tab: PanelTab;
  tour: string;
  trace: string | null;
  aperture: number;
  /** The second probe: swung into the light (true) or aside. */
  probe: boolean;
  /** A specific picture asked for in the address: a quality tier, or the still picture. */
  picture: AtlasPicture | null;
  /** Which view of the instrument: the whole bench, or one of the two diagrams on the plate. */
  view: AtlasViewId;
  boundary: BoundaryState;
  history: HistoryState;
}

const isStage = (value: string | null): value is AtlasStage => Boolean(value && (stageOrder as string[]).includes(value));

/**
 * Read the page state from an address. Every address the previous Atlas
 * produced still works: `focus`, `mode`, `trace`, `tab` (with `interfaces` as
 * the old name of `connections`) and `view=2d`. `lod` is accepted and ignored:
 * every entry is now reachable from its stage.
 */
export function readAddress(search: string): AtlasAddress {
  const params = new URLSearchParams(search);
  const route = findRoute(params.get("trace"));
  const modeParam = params.get("mode");
  const mode: AtlasMode =
    modeParam === "guided" || modeParam === "trace" || modeParam === "explore" ? modeParam : route ? "trace" : "explore";

  const tourParam = params.get("tour");
  // `mode=guided` on its own is the address of the original full tour.
  const tour = atlasTours.some((item) => item.id === tourParam) ? tourParam! : mode === "guided" && modeParam === "guided" && !tourParam ? "descent" : DEFAULT_TOUR;

  const activeRoute = mode === "trace" ? route : null;
  const focusParam = params.get("focus");
  let focus = focusParam && atlasNodeMap.has(focusParam) ? focusParam : null;
  if (!focus && mode === "guided") focus = findTour(tour).nodeIds[0] ?? null;
  if (!focus && activeRoute) focus = activeRoute.nodeIds[activeRoute.nodeIds.length - 1] ?? null;

  const stageParam = params.get("stage");
  const stage: AtlasStage = focus ? atlasNodeMap.get(focus)!.stage : isStage(stageParam) ? stageParam : "overview";

  const tabParam = params.get("tab");
  const tab: PanelTab = tabParam === "equations" ? "equations" : tabParam === "connections" || tabParam === "interfaces" ? "connections" : "overview";

  const apertureParam = Number(params.get("aperture"));
  const aperture = params.has("aperture") && Number.isFinite(apertureParam) ? Math.min(1, Math.max(0, apertureParam)) : DEFAULT_APERTURE;

  const picture = params.get("view") === "2d" ? "still" : pictureFromQuery(params.get("quality"));

  const probe = params.get("probe") === "1";

  // The plate views. A trace is always watched on the whole instrument.
  const lens = params.get("lens");
  const view: AtlasViewId = mode !== "trace" && (lens === "boundary" || lens === "history") ? lens : "instrument";
  const number = (key: string, fallback: number) => (params.has(key) && Number.isFinite(Number(params.get(key))) ? Number(params.get(key)) : fallback);
  const readings = params.get("readings");
  const boundary: BoundaryState = {
    arc: Math.min(boundaryView.arc.max, Math.max(boundaryView.arc.min, number("arc", initialBoundary.arc))),
    at: ((Math.round(number("at", initialBoundary.at)) % 360) + 360) % 360,
    readings: boundaryView.readingSets.some((set) => set.id === readings) ? readings! : initialBoundary.readings,
  };
  const history: HistoryState = {
    occasion: Math.min(historyView.occasions.length - 1, Math.max(0, Math.round(number("occasion", initialHistory.occasion)))),
    retain: params.get("retain") !== "0",
  };

  return { mode, stage, focus, tab, tour, trace: activeRoute?.id ?? null, aperture, probe, picture, view, boundary, history };
}

/** The view an entry asks for when it is a stop of a tour: its own plate view, or the whole instrument. */
export function viewForEntry(id: string | null, current: Pick<AtlasAddress, "boundary" | "history">): Pick<AtlasAddress, "view" | "boundary" | "history"> {
  const hint = id ? entryViews[id] : undefined;
  if (!hint) return { view: "instrument", boundary: current.boundary, history: current.history };
  return {
    view: hint.view,
    boundary: hint.readings ? { ...current.boundary, readings: hint.readings } : current.boundary,
    history: hint.occasion !== undefined ? { ...current.history, occasion: hint.occasion } : current.history,
  };
}

/** Write the page state into an address, leaving out anything at its default so links stay short. */
export function writeAddress(url: URL, state: AtlasAddress): URL {
  const params = url.searchParams;
  const set = (key: string, value: string | null) => {
    if (value === null) params.delete(key);
    else params.set(key, value);
  };
  set("focus", state.focus);
  set("stage", !state.focus && state.stage !== "overview" ? state.stage : null);
  set("mode", state.mode === "explore" ? null : state.mode);
  set("tour", state.mode === "guided" ? state.tour : null);
  set("trace", state.mode === "trace" ? state.trace : null);
  set("tab", state.tab === "overview" ? null : state.tab);
  set("aperture", Math.abs(state.aperture - DEFAULT_APERTURE) > 0.005 ? state.aperture.toFixed(2) : null);
  set("probe", state.probe ? "1" : null);
  set("lens", state.view === "instrument" ? null : state.view);
  const onBoundary = state.view === "boundary";
  set("arc", onBoundary && state.boundary.arc !== initialBoundary.arc ? String(Math.round(state.boundary.arc)) : null);
  set("at", onBoundary && state.boundary.at !== initialBoundary.at ? String(Math.round(state.boundary.at)) : null);
  set("readings", onBoundary && state.boundary.readings !== initialBoundary.readings ? state.boundary.readings : null);
  const onHistory = state.view === "history";
  set("occasion", onHistory && state.history.occasion !== initialHistory.occasion ? String(state.history.occasion) : null);
  set("retain", onHistory && !state.history.retain ? "0" : null);
  params.delete("lod");
  if (state.picture === "still") {
    params.set("view", "2d");
    params.delete("quality");
  } else {
    params.delete("view");
    set("quality", state.picture);
  }
  return url;
}

// ───────────────────────────── Prepared pictures ─────────────────────────────

/** Folder of the prepared pictures. A new set of pictures gets a new folder. */
export const STILLS_PATH = "/atlas-stills/v3";
/** The iris settings a prepared picture exists for. */
export const STILL_APERTURES = [0.08, 0.38, 0.9] as const;
/** Stages that have a picture for each iris setting; the others have one, at the default opening. */
const STILL_APERTURE_STAGES = new Set<AtlasStage>(["overview", "aperture", "readout"]);

export function nearestStillAperture(aperture: number): number {
  return STILL_APERTURES.reduce((best, value) => (Math.abs(value - aperture) < Math.abs(best - aperture) ? value : best), STILL_APERTURES[1]);
}

/** Address of the prepared picture for a stage. `shape` is "wide" for landscape frames, "tall" for narrow ones. */
/** Stages that also have pictures with the second probe in the light. */
const STILL_PROBE_STAGES = new Set<AtlasStage>(["overview", "readout"]);

/** True when a prepared picture can show the second probe for this stage. */
export function stillShowsProbe(stage: AtlasStage): boolean {
  return STILL_PROBE_STAGES.has(stage);
}

/** Address of the prepared picture for a stage. `shape` is "wide" for landscape frames, "tall" for narrow ones. */
export function stillUrl(stage: AtlasStage, aperture: number, shape: "wide" | "tall", probe = false): string {
  const opening = STILL_APERTURE_STAGES.has(stage) ? nearestStillAperture(aperture) : DEFAULT_APERTURE;
  const withProbe = probe && STILL_PROBE_STAGES.has(stage) ? "-p" : "";
  return `${STILLS_PATH}/${stage}-${Math.round(opening * 100).toString().padStart(2, "0")}${withProbe}-${shape}.webp`;
}

/** Address of the prepared picture for the plate views: the readout plate, faced and clear. */
export function plateStillUrl(shape: "wide" | "tall"): string {
  return `${STILLS_PATH}/plate-${shape}.webp`;
}

export { stageOrder };
