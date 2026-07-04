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
  tagline:
    "**Shadow Theory is a new mathematical and physical framework built on a simple idea: the reality we observe is not the underlying source reality itself, but a shadow of a deeper structure.**

This is not a simulation hypothesis or a Matrix-style illusion. The world we experience is real. Shadow Theory proposes that it is a mathematically structured shadow of a deeper reality.

Rather than treating physics as the direct study of ultimate reality, Shadow Theory treats it as the study of the shadow we can observe, what it faithfully represents, what information it loses, and what can and cannot be reconstructed from it.

The six-paper foundation develops the mathematics needed to distinguish observation from source structure, determine when missing information can be recovered, and formally establish what can and cannot be claimed about the underlying reality.
",

  /**
   * One-sentence description used in <meta name="description">, Open Graph,
   * feeds, and llms.txt. Keep it inside the public claim boundary.
   */
  description:
    "Shadow Theory is a six-paper mathematical Theory of Everything architecture built around a direct claim: the reality we experience is not source reality itself, but a projected shadow of deeper structure. The framework studies what that shadow reveals, what it hides, and what can be reconstructed from it.",

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
   * Public claim boundary. Rendered on the About page and in llms.txt.
   * Do not weaken these lines without updating the loading manifest.
   */
  claimBoundary: {
    is: [
      "A mathematical Theory of Everything architecture built on a direct thesis: the reality we experience is a projected shadow of source reality, not source reality itself.",
      "A six-paper proof framework for studying what the projection reveals, what it hides, and what can be reconstructed without mistaking the shadow for the source.",
      "A research programme for open problems in mathematics and theoretical physics, with explicit paper records, status levels, and bounded public claims.",
    ],
    isNot: [
      "This is not simulation theory: the claim is not that we live inside a computer program, game, or Matrix-style artificial world.",
      "Experimental confirmation, peer review, and expert approval are separate records; they are not implied by the framework alone.",
      "The Everything Equation is a mathematical closure schema, not a slogan that one line replaces all physics.",
      "Engineering implementation, physical deployment, and applied models are future work unless a specific public record says otherwise.",
    ],
  },
} as const;

export type Site = typeof site;
