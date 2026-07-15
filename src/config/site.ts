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
  tagline: `Shadow Theory is a new mathematical and physical framework built on a simple idea: the reality we observe is not the underlying source reality itself, but a shadow of a deeper structure.

This is not a simulation hypothesis. The world we experience is real. Shadow Theory proposes that it is a mathematically structured shadow of a deeper reality.

Rather than treating physics as the direct study of ultimate reality, Shadow Theory treats it as the study of the shadow we can observe, what it faithfully represents, what information it loses, and what can and cannot be reconstructed from it.

The seven-paper foundation develops the mathematics needed to distinguish observation from source structure, determine when missing information can be recovered, and formally establish what can and cannot be claimed about the underlying reality — and realizes that architecture in a concrete physical model as its witness.`,

  /**
   * One-sentence description used in <meta name="description">, Open Graph,
   * feeds, and llms.txt. Keep it inside the public claim boundary.
   */
  description:
    "Shadow Theory is a seven-paper mathematical Theory of Everything architecture built around a direct claim: the reality we experience is not source reality itself, but a projected shadow of deeper structure. The framework studies what that shadow reveals, what it hides, and what can be reconstructed from it — and realizes the architecture in Randall–Sundrum gravity as a concrete physical witness.",

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
    "Paper 1 — Source–Readout Non-Equivalence",
    "Paper 2 — Target-Relative Necessity of Completion",
    "Paper 3 — Canonical Minimal Source Completion",
    "Paper 4 — Geometric Realization of Completed Source Relations",
    "Paper 5 — Observable Quotients and Exact Projected Dynamics",
    "Paper 6 — Non-Source Projection and Internal Identifiability",
    "Paper 7 — Bulk-to-Brane Projection in Randall–Sundrum Gravity (physical witness)",
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
   * These lines are the programme's public claim discipline — do not weaken
   * them without deliberate review.
   */
  claimBoundary: {
    is: [
      "A mathematical Theory of Everything architecture built on a direct thesis: the reality we experience is a projected shadow of source reality, not source reality itself.",
      "A seven-paper proof framework for studying what the projection reveals, what it hides, and what can be reconstructed without mistaking the shadow for the source — six mathematical papers plus a concrete physical witness in Randall–Sundrum gravity.",
      "A research programme for open problems in mathematics and theoretical physics, with explicit paper records, declared assumptions and limitations, and bounded public claims.",
    ],
    isNot: [
      "This is not simulation theory: the claim is not that we live inside a computer program, game, or Matrix-style artificial world.",
      "Experimental confirmation, peer review, and expert approval are separate records; they are not implied by the framework alone.",
      "The Everything Equation is a mathematical closure schema from the broader programme, not a theorem of the seven-paper sequence and not a slogan that one line replaces all physics.",
      "The framework's theorems are model-relative: they do not prove that our universe is a projection of a hidden source, and Paper 7's witness is a result about the Randall–Sundrum model, not an unrestricted ontological claim.",
      "Engineering implementation, physical deployment, and applied models are future work unless a specific public record says otherwise.",
    ],
  },
} as const;

export type Site = typeof site;
