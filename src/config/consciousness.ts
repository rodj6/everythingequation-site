/** Fixed publication identity from the supplied Version 2 manuscript.
 * The DOI is author-supplied; no unverified licence or review status is inferred.
 */
export const consciousnessPublication = {
  id: "monograph",
  title: "Shadow Theory and Consciousness: Awareness, Perspectival Realization, and the Source-to-Experience Problem",
  subtitle: "Awareness, Perspectival Realization, and the Source-to-Experience Problem",
  shortTitle: "Shadow Theory and Consciousness",
  constitution: "Shadow Psychophysical Constitution (SPC-2)",
  doi: "10.5281/zenodo.22853774",
  doiUrl: "https://doi.org/10.5281/zenodo.22853774",
  paperSlug: "shadow-theory-and-consciousness",
  version: "2",
  published: "2026-09-20",
  dateLabel: "20 September 2026",
  author: "Jeremy Rodgers",
  authorRole: "Independent Researcher",
  description: "SPC-2 proposes explicit laws for qualifying perspectives, lived content and process continuation, with a conditional finite completion theorem, worked models and open realization and validation obligations.",
  status: "Candidate internal constitutive resolution under declared assumptions.",
  webUrl: "/consciousness/monograph",
  pdfUrl: "/publications/consciousness/monograph.pdf",
  texUrl: "/publications/consciousness/monograph.tex",
  markdownUrl: "/publications/consciousness/monograph.md",
  manifestUrl: "/consciousness/manifest.json",
  socialImage: "/publications/consciousness/social.png",
  predecessorPaperSlug: "zenodo-19324253",
  historyUrl: "/legacy/consciousness-field-theorem",
  versionNote: "Version 2 supersedes the earlier Consciousness Field account. The current formulation is SPC-2, presented in Shadow Theory and Consciousness.",
} as const;

export type ConsciousnessPublication = typeof consciousnessPublication;
