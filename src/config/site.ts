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
<<<<<<< HEAD
  tagline: "A public architecture for readout, completion, and shadow compilation.",
=======
  tagline: `Shadow Theory is a new mathematical and physical framework built on a simple idea: the reality we observe is not the underlying source reality itself, but a shadow of a deeper structure.

This is not a simulation hypothesis. The world we experience is real. Shadow Theory proposes that it is a mathematically structured shadow of a deeper reality.

Rather than treating physics as the direct study of ultimate reality, Shadow Theory treats it as the study of the shadow we can observe, what it faithfully represents, what information it loses, and what can and cannot be reconstructed from it.

The six-paper foundation develops the mathematics needed to distinguish observation from source structure, determine when missing information can be recovered, and formally establish what can and cannot be claimed about the underlying reality.`,
>>>>>>> 5964c8c4e638290cb6ad2d0944200027bc4a1f48

  /**
   * One-sentence description used in <meta name="description">, Open Graph,
   * feeds, and llms.txt. Keep it inside the public claim boundary.
   */
  description:
<<<<<<< HEAD
    "Shadow Theory is a six-paper public mathematical framework for distinguishing readout from realization, certifying closure obstructions, defining conditional canonical completion, down-compiling completion outputs into statused Tier-1 artifacts, and governing public claims through a runtime, status, residue, and audit calculus.",
=======
    "Shadow Theory is a six-paper mathematical Theory of Everything architecture built around a direct claim: the reality we experience is not source reality itself, but a projected shadow of deeper structure. The framework studies what that shadow reveals, what it hides, and what can be reconstructed from it.",
>>>>>>> 5964c8c4e638290cb6ad2d0944200027bc4a1f48

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
<<<<<<< HEAD
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
=======
>>>>>>> 5964c8c4e638290cb6ad2d0944200027bc4a1f48
   * Public claim boundary. Rendered on the About page and in llms.txt.
   * Do not weaken these lines without updating the loading manifest.
   */
  claimBoundary: {
    is: [
<<<<<<< HEAD
      "A public mathematical framework: definitions, theorems, statuses, and claim discipline.",
      "A six-paper canonical foundation (Papers 1–6) plus a public loading manifest.",
      "A research programme with statused open problems and bounded public claims.",
    ],
    isNot: [
      "Not a claim that one equation solves everything.",
      "Not empirically validated physics.",
      "Not peer-reviewed or expert-approved unless separately stated on a specific record.",
      "Not build-ready engineering, and not a deployed physical model.",
=======
      "A mathematical Theory of Everything architecture built on a direct thesis: the reality we experience is a projected shadow of source reality, not source reality itself.",
      "A six-paper proof framework for studying what the projection reveals, what it hides, and what can be reconstructed without mistaking the shadow for the source.",
      "A research programme for open problems in mathematics and theoretical physics, with explicit paper records, status levels, and bounded public claims.",
    ],
    isNot: [
      "This is not simulation theory: the claim is not that we live inside a computer program, game, or Matrix-style artificial world.",
      "Experimental confirmation, peer review, and expert approval are separate records; they are not implied by the framework alone.",
      "The Everything Equation is a mathematical closure schema, not a slogan that one line replaces all physics.",
      "Engineering implementation, physical deployment, and applied models are future work unless a specific public record says otherwise.",
>>>>>>> 5964c8c4e638290cb6ad2d0944200027bc4a1f48
    ],
  },
} as const;

export type Site = typeof site;
