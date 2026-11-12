/**
 * QUESTION THREADS: ways into the site that start from a question.
 *
 * Each thread is one question and three steps: something to SEE (usually a
 * view of the Atlas), something that EXPLAINS it in prose, and the place where
 * it is PROVED or argued in full. The homepage shows all of them under "Start
 * from a question", and every other page shows the two or three that belong
 * to its part of the site under "Keep exploring".
 *
 * To add a thread, add an object here. Nothing else needs to change. Keep
 * the question short, make the teaser one or two plain sentences taken from
 * the linked material, and check that all three links exist. `near` lists
 * the address prefixes of the pages the thread belongs with.
 */

export interface ThreadStep {
  label: string;
  href: string;
}

export interface Thread {
  id: string;
  question: string;
  teaser: string;
  see: ThreadStep;
  explain: ThreadStep;
  prove: ThreadStep;
  /** Address prefixes of the parts of the site this thread belongs with. */
  near: string[];
}

export const threads: Thread[] = [
  {
    id: "source-lift",
    question: "How does Shadow Theory recover a physical construction?",
    teaser: "Reverse sections show what is covered, fibres identify what a readout discards, and operation identities carry a derivation. The Einstein and Yang–Mills reconstructions put that method to work.",
    see: { label: "Classical and quantum fields in the Atlas", href: "/atlas?mode=guided&tour=source-lift" },
    explain: { label: "Yang–Mills through Shadow Theory", href: "/source-readout/yang-mills" },
    prove: { label: "The complete source–readout reconstruction", href: "/source-readout/yang-mills-reconstruction" },
    near: ["/source-readout/yang-mills", "/source-readout/yang-mills-reconstruction", "/source-readout/yang-mills-companion", "/source-readout/einstein-1916", "/papers/yang-mills", "/papers/einstein-1916"],
  },
  {
    id: "readout",
    question: "What can a readout tell us about its source?",
    teaser: "Two different sources can leave the same mark. The foundation papers say exactly when that matters, and what further reading settles it.",
    see: { label: "Split the paired marks", href: "/atlas?stage=readout&probe=1" },
    explain: { label: "Sealed or Leaky", href: "/sealed-or-leaky" },
    prove: { label: "The seven foundation papers", href: "/source-readout" },
    near: ["/source-readout", "/sealed-or-leaky", "/papers", "/framework", "/legacy", "/research-map"],
  },
  {
    id: "ground",
    question: "What is the world a readout of?",
    teaser: "The model begins with a ground it leaves unspecified and an unsplit unity, and starts its mathematics at a defined source structure, Ω.",
    see: { label: "From the ground to Ω, in seven stops", href: "/atlas?mode=guided&tour=ground" },
    explain: { label: "The full Shadow Theory model", href: "/articles/full-shadow-model" },
    prove: { label: "The ground, Ω and closure", href: "/framework#ground-omega-closure" },
    near: ["/framework", "/articles", "/monograph", "/legacy", "/about", "/problems"],
  },
  {
    id: "boundary",
    question: "What does a boundary know about the interior?",
    teaser: "A stretch of boundary reaches a region inside. One perturbation passes every first-order reading of the boundary balls and is caught by the same balls at second order.",
    see: { label: "Read the boundary on the plate", href: "/atlas?lens=boundary" },
    explain: { label: "Gravity and holography", href: "/source-readout/gravity-and-holography" },
    prove: { label: "The same-ball detection theorem", href: "/source-readout/second-order-boundary-balls/03-same-ball-detection#all-radii-canonical-energy" },
    near: ["/source-readout", "/monograph", "/papers", "/research-map"],
  },
  {
    id: "measurement",
    question: "When does a measurement happen?",
    teaser: "A pattern on a detector is built from single events. The programme asks what makes an event, where its statistics come from, and what counts as a record.",
    see: { label: "Quantum measurement, in seven stops", href: "/atlas?mode=guided&tour=measurement" },
    explain: { label: "A field guide to the measurement programme", href: "/atlas/quantum-measurement" },
    prove: { label: "Quantum measurement and the Born rule", href: "/quantum-measurement" },
    near: ["/quantum-measurement", "/atlas/quantum-measurement", "/papers", "/problems"],
  },
  {
    id: "carrier",
    question: "Can one field carry both order and loss?",
    teaser: "The Canonical Spectral Curvature Field has a coherent response and a dissipative one. Both belong to a single carrier.",
    see: { label: "The canonical field on the bench", href: "/atlas?stage=field" },
    explain: { label: "The CSCF programme", href: "/source-readout/cscf" },
    prove: { label: "The common carrier", href: "/source-readout/cscf/01-common-carrier" },
    near: ["/source-readout/cscf", "/source-readout", "/monograph", "/research-map"],
  },
  {
    id: "melody",
    question: "Why does a melody seem to move?",
    teaser: "Three notes arrive one after another. Hearing a step from one to the next takes retention, and nothing has to sweep across the history to produce it.",
    see: { label: "A history, from inside", href: "/atlas?lens=history" },
    explain: { label: "The melody is experienced while it unfolds", href: "/consciousness/temporal-passage/03-an-experience-of-succession" },
    prove: { label: "Block universe and Shadow Theory", href: "/consciousness/block-universe" },
    near: ["/consciousness", "/articles", "/framework"],
  },
  {
    id: "perspective",
    question: "Where does a point of view sit in physics?",
    teaser: "Observers are physical organizations inside the readout. The consciousness programme asks what makes one of them a perspective.",
    see: { label: "Consciousness and perspective, in eight stops", href: "/atlas?mode=guided&tour=perspective" },
    explain: { label: "Shadow Theory and consciousness", href: "/consciousness" },
    prove: { label: "The consciousness monograph", href: "/consciousness/monograph" },
    near: ["/consciousness", "/about", "/articles"],
  },
];

/** The threads that belong with a page, most relevant first; never more than `limit`. */
export function threadsNear(pathname: string, limit = 3): Thread[] {
  const scored = threads
    .map((thread, order) => {
      const match = thread.near.reduce((best, prefix) => (pathname === prefix || pathname.startsWith(`${prefix}/`) ? Math.max(best, prefix.length) : best), 0);
      return { thread, match, order };
    })
    .filter((item) => item.match > 0)
    .sort((a, b) => b.match - a.match || a.order - b.order);
  const chosen = scored.slice(0, limit).map((item) => item.thread);
  // A page that belongs to no thread still gets the first few, so no page is a dead end.
  for (const thread of threads) {
    if (chosen.length >= limit) break;
    if (!chosen.includes(thread)) chosen.push(thread);
  }
  return chosen;
}
