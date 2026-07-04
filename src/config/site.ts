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
  tagline: "A mathematical Theory of Everything architecture: what can be observed, what must be completed, and what can be claimed.",

  /**
   * One-sentence description used in <meta name="description">, Open Graph,
   * feeds, and llms.txt. Keep it inside the public claim boundary.
   */
  description:
    "Shadow Theory is a mathematical Theory of Everything architecture developed across six canonical papers. It separates observation from underlying realization, identifies when missing structure becomes a real obstruction, defines when completion is possible, and controls what can be translated into public, checkable theoretical claims.",

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
    "A mathematical Theory of Everything architecture developed through six canonical papers.",
    "A formal framework for separating observation from underlying realization, identifying when missing structure becomes a real obstruction, and controlling what can be stated publicly.",
    "A research programme with defined theorem layers, open problems, paper records, and statused claims.",
  ],
  isNot: [
    "The framework is mathematical and theoretical; experimental confirmation is a separate stage.",
    "The Everything Equation is treated as a disciplined closure schema, not a slogan that one line replaces physics.",
    "Peer review, expert approval, and empirical validation are recorded only when they exist for a specific paper or result.",
    "Engineering implementation, physical deployment, and applied models are outside the current public claim unless explicitly documented later.",
  ],
},} as const;

export type Site = typeof site;
