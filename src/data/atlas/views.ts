/**
 * THE PLATE VIEWS: what the Boundary and History views say and show.
 *
 * The Atlas has three views of one instrument. "Instrument" is the bench from
 * source to readout. "Boundary" and "History" both look at the readout plate
 * and draw a diagram on its glass.
 *
 * Everything a future paper is likely to change is in this file: the text, the
 * links, the kinds of feature on the Boundary disc, the sets of readings and
 * what each set reads, and the notes and occasions of the History view. The
 * drawing code (src/atlas/lenses) and the 3D engine (src/atlas/engine) read
 * this file and do not need to change when it does. ATLAS-UPDATING.md has a
 * worked example.
 */

export type AtlasViewId = "instrument" | "boundary" | "history";

export interface ViewLink {
  label: string;
  /** A page on the site. */
  href?: string;
  /** An Atlas entry id; opens in the reading panel. */
  entry?: string;
}

export const viewOrder: AtlasViewId[] = ["instrument", "boundary", "history"];

export const viewMeta: Record<AtlasViewId, { label: string; hint: string }> = {
  instrument: { label: "Instrument", hint: "The whole bench, from source to readout" },
  boundary: { label: "Boundary", hint: "What readings on the rim tell you about the interior" },
  history: { label: "History", hint: "An observer inside a physical history" },
};

// ───────────────────────────── Boundary ─────────────────────────────

/** How a set of readings stands toward one kind of feature. */
export type FeatureReading = "read" | "detected" | "open";

export interface BoundaryKind {
  id: string;
  /** Shape drawn on the disc. Three are available; add a kind by reusing one. */
  glyph: "dot" | "diamond" | "ripple";
  label: string;
  /** One sentence for the key. */
  what: string;
}

export interface BoundaryReadingSet {
  id: string;
  /** Text on the button. */
  label: string;
  /** Said by assistive technology and shown under the buttons. */
  hint: string;
  /** For each kind id: read, detected, or left open. A kind not listed is open. */
  reads: Record<string, FeatureReading>;
  /** One sentence shown while this set is chosen. */
  says: string;
  source: ViewLink;
}

export interface BoundaryFeature {
  id: string;
  kind: string;
  /** Position on the disc: centre is 0,0; the rim is at distance 1; y is upward. */
  x: number;
  y: number;
}

export const boundaryView = {
  title: "Reading the boundary",
  lead: "The rim of the plate stands for boundary data. The glass inside it stands for what those readings can tell you about the interior.",
  intro: [
    "In holography a region of the boundary comes with a region of the interior: a boundary ball selects a wedge, closed off by an extremal surface. The gravity papers treat the ball's area and energy variations as two readouts of one common source and ask exactly what they settle.",
    "Choose a stretch of the rim. Every ball inside it contributes a reading, and together they reach the union of their half-balls, drawn as the lit part of the glass. Inside it the local constraint is recovered. Outside it these readings say nothing, so every configuration there remains compatible with them.",
  ],
  /** Width of the chosen region, in degrees of the rim. */
  arc: { min: 30, max: 360, step: 5, initial: 130, presets: [{ label: "A small region", value: 60 }, { label: "Half the rim", value: 180 }, { label: "The whole rim", value: 360 }] },
  /** Bearing of the middle of the region, in degrees anticlockwise from the right. */
  at: { initial: 200, step: 10 },

  kinds: [
    {
      id: "local",
      glyph: "dot",
      label: "Constraint departure",
      what: "A local departure from the slice constraint. Rest-frame balls read it at first order wherever they reach.",
    },
    {
      id: "cross",
      glyph: "diamond",
      label: "Cross component",
      what: "A departure that leaves every rest-frame ball unchanged. Balls taken in further frames reach it.",
    },
    {
      id: "mode",
      glyph: "ripple",
      label: "On-shell mode",
      what: "A solution of the linearized equations whose first-order readings all vanish on these balls. The same balls register it at second order.",
    },
  ] as BoundaryKind[],

  readingSets: [
    {
      id: "first",
      label: "One frame, first order",
      hint: "Rest-frame balls on one boundary slice, first-order response",
      reads: { local: "read" },
      says: "Rest-frame balls on one slice recover the slice constraint where they reach. Two kinds of feature pass through every one of them unread.",
      source: { label: "What fixed-slice balls miss", href: "/source-readout/boundary-ball-readouts/04-what-fixed-slice-balls-miss#fixed-frame-kernel" },
    },
    {
      id: "frames",
      label: "More frames",
      hint: "The same region, with balls taken in several Lorentz frames",
      reads: { local: "read", cross: "read" },
      says: "Balls in further frames couple to components the rest-frame family cannot see. This is an extra reading, in the sense of the second probe.",
      source: { label: "Recovering the local equation", href: "/source-readout/boundary-ball-readouts/03-recovering-the-local-equation" },
    },
    {
      id: "second",
      label: "Second order",
      hint: "The same rest-frame balls, with the response carried to second order",
      reads: { local: "read", mode: "detected" },
      says: "Nothing about the balls has changed. Carried to second order, each one registers the on-shell mode: its canonical energy is positive at every radius. That detects the mode; it does not map it.",
      source: { label: "The same-ball detection theorem", href: "/source-readout/second-order-boundary-balls/03-same-ball-detection#all-radii-canonical-energy" },
    },
  ] as BoundaryReadingSet[],

  features: [
    { id: "a1", kind: "local", x: -0.52, y: 0.2 },
    { id: "a2", kind: "local", x: -0.26, y: -0.44 },
    { id: "a3", kind: "local", x: 0.36, y: 0.54 },
    { id: "a4", kind: "local", x: 0.56, y: -0.3 },
    { id: "a5", kind: "local", x: 0.04, y: 0.76 },
    { id: "b1", kind: "cross", x: -0.64, y: -0.16 },
    { id: "b2", kind: "cross", x: 0.2, y: -0.62 },
    { id: "c1", kind: "mode", x: -0.28, y: 0.02 },
    { id: "c2", kind: "mode", x: 0.5, y: 0.14 },
  ] as BoundaryFeature[],

  distinct: {
    title: "Three different changes",
    text: "Widening the region changes where the balls sit. Adding frames adds readings. Going to second order keeps the readings and changes the order of the response. The iris on the instrument is a fourth thing again: how finely one readout resolves. None of these is simply a sharper image.",
  },
  literal: {
    title: "How literally to take it",
    text: "The disc is a schematic. The published results are first- and second-order statements about perturbations of anti-de Sitter space. They recover a local equation on a region, which is less than reconstructing the geometry, and the entropy reading of the second-order result adds a holographic dictionary and an admissible family of states.",
  },
  heading: {
    title: "Where this is going",
    text: "Research under way asks how far this reaches: what the readings of a single ball determine about a localized perturbation, and what they leave open. The view is built so that a further set of readings can be added when that work is published.",
  },
  links: [
    { label: "Gravity and holography reading editions", href: "/source-readout/gravity-and-holography" },
    { label: "Boundary ball readouts", entry: "gravity-boundary-balls" },
    { label: "Second-order detection by boundary balls", entry: "gravity-second-order" },
    { label: "Modular transport", entry: "gravity-modular-transport" },
    { label: "Minimal completion: the least further readout", entry: "foundation-minimal-completion" },
  ] as ViewLink[],
};

// ───────────────────────────── History ─────────────────────────────

export interface HistoryNote {
  id: string;
  /** When the source sounds it, in milliseconds. */
  at: number;
  /** Height on the stave, 0 (low) to 1 (high). */
  pitch: number;
}

export interface HistoryOccasion {
  /** The listener's local time, in milliseconds. */
  at: number;
  label: string;
  /** What the listener holds here, with retention. */
  says: string;
  /** The same occasion with retention switched off. */
  saysAlone: string;
}

export const historyView = {
  title: "A history, from inside",
  lead: "Time belongs on the plate. A physical history lies on the readout side, and an observer is an organization within it.",
  intro: [
    "The bench runs from source to readout in order of dependence. That order is explanatory. The source is not an earlier moment, and nothing has to travel down the bench for the world to exist.",
    "The diagram is a small history. A source sounds three notes, and each reaches a listener a little later. All of it is on the plate together, every event at its own place and time. The marker picks one occasion on the listener's path and shows what is held there: what has been received, what is retained, and what is live.",
  ],
  /** The published illustration: C, E and G at 0, 100 and 200 ms; 10 ms to arrive; 5 ms to integrate. */
  notes: [
    { id: "C", at: 0, pitch: 0.15 },
    { id: "E", at: 100, pitch: 0.5 },
    { id: "G", at: 200, pitch: 0.85 },
  ] as HistoryNote[],
  receptionDelay: 10,
  integrationDelay: 5,
  /** Span of the diagram, in milliseconds. */
  span: [-25, 250] as [number, number],
  occasions: [
    {
      at: 5,
      label: "Before C arrives",
      says: "C has sounded at the source and is on its way. The listener holds none of the phrase.",
      saysAlone: "C has sounded at the source and is on its way. The listener holds none of the phrase.",
    },
    {
      at: 12,
      label: "C arrives",
      says: "C is live. Nothing is retained yet for it to follow.",
      saysAlone: "C is live.",
    },
    {
      at: 111,
      label: "E arrives",
      says: "E arrives while C is retained. Both are available; their relation has not yet been taken up.",
      saysAlone: "E arrives. C is no longer held, so E has nothing to follow.",
    },
    {
      at: 115,
      label: "E is taken up",
      says: "The retained C and the live E enter one stream and are taken up as a rising step. G has not arrived, and nothing waits for it. The dashed line is anticipation: a present expectation, not a signal from later in the history.",
      saysAlone: "E is live, alone. The notes came in order, yet no step from C to E is held.",
    },
    {
      at: 215,
      label: "G is taken up",
      says: "G is received and taken up. The phrase is kept, and the live part passes from E to G.",
      saysAlone: "G is live, alone. Three notes in succession, and no experience of succession.",
    },
  ] as HistoryOccasion[],
  initialOccasion: 3,
  after: [
    "Hearing a melody takes more than notes arriving one after another. Retained and live contributions have to be held together, in their different roles, for a step from one note to the next to be experienced. Switch retention off to see the difference between a succession of states and an experience of succession.",
    "The listener's stages really differ in what they receive, retain and can do, and those differences belong to the history. No universal present has to sweep across the plate to produce them.",
  ],
  literal: {
    title: "How literally to take it",
    text: "The block-universe reading is an interpretation argued in the papers, and the account of experienced passage is a philosophical argument. The timings are the papers' own illustration of a schedule, not a measured window of human hearing. Quantum alternatives may need a process or branch-relative account in place of one classical history.",
  },
  links: [
    { label: "The melody is experienced while it unfolds", href: "/consciousness/temporal-passage/03-an-experience-of-succession#section-3-2" },
    { label: "Experienced temporal passage", entry: "perspective-temporal-passage" },
    { label: "Block universe and Shadow Theory", entry: "perspective-block-universe" },
    { label: "Ground, source, history and readout", href: "/consciousness/block-universe/02-ground-source-history-and-readout" },
    { label: "Scent, recollection and melody", href: "/consciousness/whole-field/03-the-field-and-its-relations" },
  ] as ViewLink[],
};

/** Entries that have something to show on the plate: opening the entry offers the view, set as given. */
export const entryViews: Record<string, { view: AtlasViewId; readings?: string; occasion?: number; label: string }> = {
  "gravity-boundary-balls": { view: "boundary", readings: "first", label: "See it on the plate" },
  "gravity-second-order": { view: "boundary", readings: "second", label: "See it on the plate" },
  "perspective-temporal-passage": { view: "history", occasion: 3, label: "See the melody on the plate" },
  "perspective-block-universe": { view: "history", occasion: 3, label: "See a history on the plate" },
};

// ───────────────────────────── Ways in ─────────────────────────────

/**
 * "Start from an idea": the short list at the top of the Atlas. Each item
 * opens a view, starts a tour (ids in src/data/reality-atlas.ts, atlasTours)
 * or opens one entry. Give exactly one of `view`, `tour`, `entry`.
 */
export const atlasIdeas: Array<{ label: string; text: string; view?: AtlasViewId; tour?: string; entry?: string }> = [
  { label: "Ground, the unsplit and Ω", text: "What the theory takes as fundamental, and where the mathematics begins.", tour: "ground" },
  { label: "Fixed points and closure", text: "The Everything Equation, then and now.", entry: "everything-equation-schema" },
  { label: "CSCF and the spectral carriers", text: "One canonical field, its measured signature and its adaptive carriers.", tour: "spectral" },
  { label: "Gravity and the boundary", text: "What readings on a boundary settle about the interior.", view: "boundary" },
  { label: "Quantum measurement", text: "Events, statistics and records, from two constitutive completions.", tour: "measurement" },
  { label: "Consciousness and perspective", text: "Localized perspectives within the readout.", tour: "perspective" },
  { label: "Time, from inside a history", text: "An observer within a physical history, and how succession is heard.", view: "history" },
];
