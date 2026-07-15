/**
 * MONOGRAPH ACCESSORS
 *
 * Read helpers over the generated monograph metadata (src/generated/monograph.ts,
 * produced by scripts/generate-content-maps.mjs from content/monograph/*.mdx).
 * The publication identity (title, DOI, version) lives in src/config/site.ts.
 */
import { site } from "@/config/site";
import {
  monographItems,
  type MonographItemMeta,
  type MonographSection,
} from "@/generated/monograph";

export type { MonographItemMeta, MonographSection };

/** Part titles and reading-order intros, verbatim from the Version 1.0 text. */
export const monographParts: Array<{
  number: number;
  numeral: string;
  title: string;
  intro: string;
}> = [
  {
    number: 1,
    numeral: "I",
    title: "Foundations",
    intro:
      "Part I fixes the foundations. Chapter 1 states the central thesis and the governing architecture; Chapter 2 defines the source closure substrate that supplies the domain of the theory; Chapter 3 defines the source-to-Tier-1 realization map; and Chapter 4 fixes the mathematical conventions and notation used throughout.",
  },
  {
    number: 2,
    numeral: "II",
    title: "Physical Readout Channels",
    intro: "",
  },
  {
    number: 3,
    numeral: "III",
    title: "Integration and Outlook",
    intro:
      "Part III assembles the physical sectors into one architecture, states the nine companion theorem programmes, and closes with the scientific scope, tests, and open problems.",
  },
];

/** All items (18 chapters, 2 appendices, bibliography) in reading order. */
export function listMonographItems(): MonographItemMeta[] {
  return [...monographItems].sort((a, b) => a.order - b.order);
}

export function getMonographItem(slug: string): MonographItemMeta | undefined {
  return monographItems.find((m) => m.slug === slug);
}

export function getAdjacentItems(slug: string): {
  prev: MonographItemMeta | null;
  next: MonographItemMeta | null;
} {
  const ordered = listMonographItems();
  const i = ordered.findIndex((m) => m.slug === slug);
  return {
    prev: i > 0 ? ordered[i - 1] : null,
    next: i >= 0 && i < ordered.length - 1 ? ordered[i + 1] : null,
  };
}

export function monographTotals() {
  const ordered = listMonographItems();
  return {
    parts: monographParts.length,
    chapters: ordered.filter((m) => m.kind === "chapter").length,
    appendices: ordered.filter((m) => m.kind === "appendix").length,
    sections: ordered.reduce((n, m) => n + m.sections.length, 0),
    displayEquations: ordered.reduce((n, m) => n + m.stats.displayEquations, 0),
    numberedEquations: ordered.reduce((n, m) => n + m.stats.numberedEquations, 0),
    tables: ordered.reduce((n, m) => n + m.stats.tables, 0),
    bibliographyEntries: ordered.reduce(
      (n, m) => n + m.stats.bibliographyEntries,
      0
    ),
  };
}

/** Human citation line for the fixed Version 1.0 record. */
export function monographCitation(): string {
  const m = site.monograph;
  return `${site.author.name}, “${m.title}: ${m.subtitle},” Version ${m.version}, ${m.published}. DOI: ${m.doi}.`;
}
