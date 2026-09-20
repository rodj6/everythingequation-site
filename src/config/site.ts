/**
 * SITE-WIDE CONFIGURATION: edit this file to change global site identity.
 *
 * This is the single source of truth for the site name, tagline, description,
 * base URL, and author information. Page metadata, machine-readable endpoints
 * (sitemap.xml, feed.xml, llms.txt, graph.json), and structured data all read
 * from here.
 */

export const site = {
  /** Public framework / site name. */
  name: "Shadow Theory",

  /** Concise site-wide description used outside the homepage hero. */
  tagline:
    "Source structure, physical measurement, and conscious perspectives.",

  /** Restored homepage wording. Keep this text unchanged. */
  heroStatement: `Shadow Theory is a new mathematical and physical framework built on a simple idea: the reality we observe is not the underlying source reality itself, but a shadow of a deeper structure.

This is not a simulation hypothesis. The world we experience is real. Shadow Theory proposes that it is a mathematically structured shadow of a deeper reality.

Rather than treating physics as the direct study of ultimate reality, Shadow Theory treats it as the study of the shadow we can observe, what it faithfully represents, what information it loses, and what can and cannot be reconstructed from it.

The seven-paper foundation develops the mathematics needed to distinguish observation from source structure, determine when missing information can be recovered, and formally establish what can and cannot be claimed about the underlying reality — and realizes that architecture in a concrete physical model as its witness.`,

  /**
   * One-sentence description used in <meta name="description">, Open Graph,
   * feeds, and llms.txt.
   */
  description:
    "Shadow Theory develops source-to-readout mathematics, physical measurement and SPC-2 consciousness: awareness, lived scenes and subject continuity. Read the complete monographs, proofs and explanatory guides.",

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
    "Paper 1: Source–Readout Non-Equivalence",
    "Paper 2: Target-Relative Necessity of Completion",
    "Paper 3: Canonical Minimal Source Completion",
    "Paper 4: Geometric Realization of Completed Source Relations",
    "Paper 5: Observable Quotients and Exact Projected Dynamics",
    "Paper 6: Non-Source Projection and Internal Identifiability",
    "Paper 7: Bulk-to-Brane Projection in Randall–Sundrum Gravity (physical witness)",
  ],

  /**
   * THE MONOGRAPH: fixed Version 1.0 publication record.
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
   * Research position rendered on the homepage and About page.
   */
  researchPosition: {
    establishes: [
      "A seven-paper mathematical framework that separates reduced source structure from bounded readout and proves exact descent, reconstruction, completion, closure, and identifiability results.",
      "A canonical minimal-completion construction that determines the least additional structure required by a nominated family of source relations.",
      "An RS2 physical witness in which identical instantaneous brane readouts evolve into different futures, together with the exact projected Einstein equation and a parameter-free cross-regime relation.",
      "Two published constitutive completions of quantum measurement: a controlled pilot-medium Bell-path limit with material records, and a separate massive-configuration construction with retained-output and archive-history bounds.",
      "SPC-2 specifies perspective admission, lived content and process continuation, with a finite completion theorem conditional on certified realization and its constitutive premises.",
    ],
    programme: [
      "Every canonical result states its hypotheses, domain, target, and mathematical conclusion directly.",
      "Experimental tests, peer review, and engineering realizations are tracked as distinct stages of the research programme.",
      "The Everything Equation functions as the broader programme's compact closure schema; the seven-paper sequence supplies the exact mathematics of source-to-readout structure.",
      "Open problems remain active branch targets until a dedicated public result establishes them.",
      "The measurement results hold within their stated interaction, guidance and preparation premises. Independent assessment and experimental verification are separate from those internal mathematical results.",
      "The consciousness account requires a declared realization-selection doctrine and empirical assessment. Its candidate internal resolution does not establish universal certification or new neural-data validation.",
    ],
  },
} as const;

export type Site = typeof site;
