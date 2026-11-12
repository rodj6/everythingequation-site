/**
 * ATLAS SCHEMA
 *
 * The shape of every entry, connection, trace and tour in the Reality Atlas,
 * and the small vocabularies the interface shows: tiers, instrument stages,
 * list groups and evidence statuses.
 *
 * Content lives in two places:
 *   - src/data/reality-atlas.ts      the typed architecture (the twelve-chapter reality model)
 *   - content/atlas/research.yaml    entries that come from published papers and articles
 *
 * Nothing here knows how the Atlas is drawn. The instrument places an entry by
 * its `stage` and `group`; it never needs coordinates.
 */

export type AtlasTier =
  | "frame"
  | "foundation"
  | "source"
  | "tier0"
  | "aperture"
  | "field"
  | "tier1"
  | "observable"
  | "recovery";

export type AtlasKind =
  | "stage"
  | "operator"
  | "route"
  | "sector"
  | "equation"
  | "observable"
  | "limit"
  | "gate"
  | "frame"
  | "result";

/** Where an entry sits on the instrument. */
export type AtlasStage = "overview" | "source" | "law" | "aperture" | "field" | "readout";

/**
 * What kind of claim an entry makes. The label is always shown next to the
 * entry, so a visitor never has to guess whether something is proved.
 */
export type AtlasStatus =
  | "theorem"
  | "conditional"
  | "construction"
  | "measured"
  | "interpretation"
  | "open"
  | "historical";

export interface AtlasEquation {
  tag: string;
  tex: string;
  title: string;
  interpretation: string;
}

export interface AtlasLink {
  label: string;
  href: string;
}

export interface AtlasPaperRef {
  slug: string;
  title: string;
  doi?: string;
  date?: string;
  url: string;
}

export interface AtlasNode {
  /** Stable address: /atlas?focus=<id>. Never rename or reuse an id. */
  id: string;
  label: string;
  shortLabel: string;
  eyebrow: string;
  tier: AtlasTier;
  kind: AtlasKind;
  /** Level of detail at which the entry first appears (0 = always, 4 = numerical certificates). */
  lod: 0 | 1 | 2 | 3 | 4;
  color: string;
  stage: AtlasStage;
  group: string;
  status: AtlasStatus;
  /** One sentence: what the status rests on. */
  statusNote: string;
  chapter: string;
  section: string;
  summary: string;
  description: string;
  equations: AtlasEquation[];
  upstream: string[];
  downstream: string[];
  recovery: string[];
  gate?: string;
  atlasNote?: string;
  provenance?: string;
  readingLinks?: AtlasLink[];
  /** The publication an entry is drawn from, when there is one. */
  paper?: AtlasPaperRef;
  /** Date the entry was added to, or last revised in, the Atlas (ISO). */
  added?: string;

  // Typed contract. Present on architecture entries of the realization
  // programme; absent on entries that summarize a paper.
  mathematicalType?: string;
  domain?: string;
  codomain?: string;
  regularity?: string;
  covariance?: string;
  units?: string;
  stateVariables?: string;
  boundaryClass?: string;
  branchDomain?: string;
  approximationOrder?: string;
  errorNorm?: string;
}

export interface AtlasEdge {
  id: string;
  from: string;
  to: string;
  label: string;
  kind: "descent" | "interface" | "trace" | "recovery" | "feedback";
  /** `mathematical`: a dependence the sources prove. `conceptual`: a reading relationship; no theorem is transferred. */
  relationship: "mathematical" | "conceptual";
  map: string;
  domain: string;
  codomain: string;
  linearization: string;
  adjoint: string;
  validityDomain: string;
  verifier: string;
  errorModel: string;
  partial: boolean;
}

export interface ObservableRoute {
  id: string;
  label: string;
  shortLabel: string;
  color: string;
  description: string;
  nodeIds: string[];
  output: string;
}

export interface AtlasTour {
  id: string;
  label: string;
  description: string;
  nodeIds: string[];
}

/** One normalized entry of content/atlas/research.yaml (written by scripts/generate-content-maps.mjs). */
export interface AtlasResearchEntry {
  id: string;
  tier: AtlasTier;
  group: string;
  label: string;
  shortLabel?: string;
  eyebrow: string;
  status: AtlasStatus;
  statusNote: string;
  summary: string;
  description: string;
  note?: string;
  read: AtlasLink[];
  relations: Array<{ to: string; label: string; type: "mathematical" | "conceptual"; note: string }>;
  equations: AtlasEquation[];
  paper?: AtlasPaperRef;
  added?: string;
}

/** Colours are quiet on purpose: they tint small marks, never whole panels. */
export const tierMeta: Record<AtlasTier, { label: string; color: string; order: number; stage: AtlasStage }> = {
  frame: { label: "The whole model", color: "#b9b4c8", order: 0, stage: "overview" },
  foundation: { label: "Foundation", color: "#e3d5b0", order: 1, stage: "overview" },
  source: { label: "Ω · Source", color: "#ffcf8a", order: 2, stage: "source" },
  tier0: { label: "Tier 0 · Law", color: "#f2dfbd", order: 3, stage: "law" },
  aperture: { label: "Tier 0.5 · Aperture", color: "#d9b46a", order: 4, stage: "aperture" },
  field: { label: "Canonical field", color: "#8fe3f2", order: 5, stage: "field" },
  tier1: { label: "Tier 1 · Readout", color: "#eef2f7", order: 6, stage: "readout" },
  observable: { label: "Observable", color: "#f6e3a8", order: 7, stage: "readout" },
  recovery: { label: "Recovery limit", color: "#9fd8b8", order: 8, stage: "readout" },
};

export const stageOrder: AtlasStage[] = ["overview", "source", "law", "aperture", "field", "readout"];

export const stageMeta: Record<AtlasStage, { symbol: string; label: string; title: string; blurb: string }> = {
  overview: {
    symbol: "◎",
    label: "Whole",
    title: "The whole instrument",
    blurb: "Shadow Theory holds that the physical world is a realized readout of a source structure. The Atlas draws that claim as one instrument.",
  },
  source: {
    symbol: "Ω",
    label: "Source",
    title: "Ω · Source",
    blurb: "The formation package: the structure everything downstream is formed from.",
  },
  law: {
    symbol: "T0",
    label: "Law",
    title: "Tier 0 · Law",
    blurb: "Everything the source generates from its own witnesses, and nothing brought in from outside.",
  },
  aperture: {
    symbol: "T0.5",
    label: "Aperture",
    title: "Tier 0.5 · Aperture",
    blurb: "Where realization is routed: what is reduced, what stays visible, what is completed.",
  },
  field: {
    symbol: "F",
    label: "Field",
    title: "Canonical field",
    blurb: "One carrier with two linked responses, coherent and dissipative.",
  },
  readout: {
    symbol: "T1",
    label: "Readout",
    title: "Tier 1 · Readout",
    blurb: "The physical world as it is read out: sectors, observables, records, and the observers within them.",
  },
};

export const groupMeta: Record<string, { label: string; stage: AtlasStage; order: number; blurb: string }> = {
  frame: { label: "The whole model", stage: "overview", order: 0, blurb: "Four explanatory stages, ordered by dependence." },
  foundation: { label: "Foundation · the seven papers", stage: "overview", order: 1, blurb: "Exact mathematics of sources, readouts and completion." },
  source: { label: "Source", stage: "source", order: 2, blurb: "The pre-geometric formation package." },
  law: { label: "Law", stage: "law", order: 3, blurb: "The least class closed under the source's lawful operations." },
  "aperture-core": { label: "Operations and routes", stage: "aperture", order: 4, blurb: "Reduction, visibility, completion and routing." },
  "aperture-faces": { label: "Faces", stage: "aperture", order: 5, blurb: "Typed faces of the aperture, each with its own gate." },
  field: { label: "The canonical field", stage: "field", order: 6, blurb: "Coherent and dissipative responses of one carrier." },
  spectral: { label: "Spectral carriers · papers", stage: "field", order: 7, blurb: "November 2026 papers on the field, its measured signature and adaptive carriers." },
  sectors: { label: "Sectors", stage: "readout", order: 8, blurb: "The coupled sectors of the Tier 1 readout." },
  measurement: { label: "Quantum measurement", stage: "readout", order: 9, blurb: "Two constitutive completions, with events, statistics and records." },
  gravity: { label: "Gravity and holography · papers", stage: "readout", order: 10, blurb: "Gravitational and holographic readouts." },
  perspective: { label: "Perspective and experience", stage: "readout", order: 11, blurb: "The consciousness programme: localized perspectives within the readout." },
  "source-lift": { label: "Source–readout reconstructions", stage: "readout", order: 10.5, blurb: "Complete classical and quantum-field reconstructions with their recovery contracts." },
  readers: { label: "Readers and access", stage: "readout", order: 12, blurb: "Constructed sources, physical readers and what they can reach." },
  observables: { label: "Observables", stage: "readout", order: 13, blurb: "Typed targets traced back to the source." },
  limits: { label: "Recovery limits", stage: "readout", order: 14, blurb: "Where established physics is recovered." },
  numerics: { label: "Certified numerics", stage: "readout", order: 15, blurb: "The executable layer behind a number." },
};

export const statusOrder: AtlasStatus[] = [
  "theorem", "conditional", "construction", "measured", "interpretation", "open", "historical",
];

export const statusMeta: Record<AtlasStatus, { label: string; explanation: string }> = {
  theorem: {
    label: "Proved",
    explanation: "A mathematical result with a published proof. It holds under the hypotheses stated in the paper.",
  },
  conditional: {
    label: "Conditional",
    explanation: "Follows once stated premises, constitutive laws or gates are supplied; the entry lists them.",
  },
  construction: {
    label: "Construction",
    explanation: "An explicit model, witness or typed architecture. It establishes that something of the kind can be built.",
  },
  measured: {
    label: "Measured",
    explanation: "A computed or measured result, with its controls and limits recorded.",
  },
  interpretation: {
    label: "Interpretation",
    explanation: "A philosophical or organizing account. It guides the programme and says where the theorems are meant to apply.",
  },
  open: {
    label: "Open",
    explanation: "A stated target or gate that has yet to be met.",
  },
  historical: {
    label: "Historical",
    explanation: "An earlier stage, kept for the record and superseded by current work.",
  },
};

export const eq = (tag: string, title: string, tex: string, interpretation: string): AtlasEquation => ({
  tag,
  title,
  tex,
  interpretation,
});
