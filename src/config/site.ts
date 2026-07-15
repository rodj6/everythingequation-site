/**
 * SITE-WIDE CONFIGURATION — edit this file to change global site identity.
 *
 * This is the single source of truth for the site name, tagline, description,
 * base URL, and author information. Page metadata, machine-readable endpoints
 * (sitemap.xml, feed.xml, llms.txt, graph.json), and structured data all read
 * from here.
 */

export const site = {
  /** Public framework / site name. */
  name: "Shadow Theory",

  /** Tagline shown in the hero and used in metadata. */
  tagline: "A public architecture for readout, completion, and shadow compilation.",

  /**
   * One-sentence description used in <meta name="description">, Open Graph,
   * feeds, and llms.txt. Keep it inside the public claim boundary.
   */
  description:
    "Shadow Theory is a six-paper public mathematical framework for distinguishing readout from realization, certifying closure obstructions, defining conditional canonical completion, down-compiling completion outputs into statused Tier-1 artifacts, and governing public claims through a runtime, status, residue, and audit calculus.",

  /**
   * Canonical base URL. Set NEXT_PUBLIC_SITE_URL in Vercel project settings
   * (or .env.local) to override without editing code.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://everythingequation.com",

  author: {
    name: "Jeremy Rodgers",
    affiliation: "Independent Researcher",
    email: "jeremysemails@gmail.com",
  },

  /**
   * The canonical public stack. Referenced by the framework page, llms.txt,
   * and structured data. Paper records themselves live in content/papers.yaml.
   */
  canonicalStack: [
    "Paper 1 — Readout Non-Equivalence Theorem",
    "Paper 2 — Completion Necessity",
    "Paper 3 — Canonical Completion Object Theorem",
    "Paper 4 — Tier-1 Shadow Compiler Theorem",
    "Paper 5 — Shadow Theory Framework Mathematics",
    "Paper 6 — Shadow Theory Synthesis",
  ],

  /**
   * THE MONOGRAPH — fixed Version 1.0 publication record.
   * The web edition at /monograph is the complete text of this same work;
   * the Zenodo record is the canonical citable publication.
   */
  monograph: {
    title: "A Source-to-Readout Architecture for a Theory of Everything",
    subtitle:
      "Sector Physics as Coupled Projections from a Common Realization Carrier",
    version: "1.0",
    published: "July 2026",
    /** Full date used for feeds/sitemaps (web edition publication). */
    webDate: "2026-07-14",
    doi: "10.5281/zenodo.21366204",
    doiUrl: "https://doi.org/10.5281/zenodo.21366204",
    zenodoUrl: "https://zenodo.org/records/21366204",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    keywords: [
      "Shadow Theory",
      "theory of everything",
      "source-to-readout architecture",
      "reflective mathematics",
      "reflective physics",
      "quantum gravity",
      "emergent spacetime",
      "foundations of physics",
    ],
  },

  /**
   * Public claim boundary. Rendered on the About page and in llms.txt.
   * Do not weaken these lines without updating the loading manifest.
   */
  claimBoundary: {
    is: [
      "A public mathematical framework: definitions, theorems, statuses, and claim discipline.",
      "A six-paper canonical foundation (Papers 1–6) plus a public loading manifest.",
      "A research programme with statused open problems and bounded public claims.",
    ],
    isNot: [
      "Not a claim that one equation solves everything.",
      "Not empirically validated physics.",
      "Not peer-reviewed or expert-approved unless separately stated on a specific record.",
      "Not build-ready engineering, and not a deployed physical model.",
    ],
  },
} as const;

export type Site = typeof site;
