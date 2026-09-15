/** Publication identity transcribed from the supplied, fixed Version 2 sources. */
export const quantumPublications = [
  {
    id: "monograph",
    title: "Shadow Theory and Quantum Measurement: Source Dynamics, Event Laws, and Physical Records — Two Constitutive Completions",
    subtitle: "A controlled Bell-path limit and a massive-configuration alternative",
    shortTitle: "Quantum measurement monograph",
    doi: "10.5281/zenodo.22774584",
    paperSlug: "quantum-measurement-monograph",
    description: "The complete integrated programme: source dynamics, event laws, physical records, two constitutive completions, and the counterexamples that delimit their scope.",
  },
  {
    id: "pilot-medium",
    title: "A Deterministic Pilot Medium: Bell Path Selection and Autonomous Material Records",
    subtitle: "A constitutive completion with a controlled physical-time limit",
    shortTitle: "Deterministic pilot medium",
    doi: "10.5281/zenodo.22774634",
    paperSlug: "deterministic-pilot-medium",
    description: "A deterministic, spatially prepared pilot medium gives a controlled complete Bell-path limit, with autonomous material records under its declared interaction and preparation assumptions.",
  },
  {
    id: "massive-configuration",
    title: "A Massive Configuration Completion of the Quantum Measurement Programme",
    subtitle: "Event timing, semibounded material records, retained resources, and an autonomous finite-horizon realization",
    shortTitle: "Massive configuration completion",
    doi: "10.5281/zenodo.22774739",
    paperSlug: "massive-configuration-completion",
    description: "A separate theory of continuous material configurations: postulated guidance and initial equilibrium, exact pointer paths, retained resources, and controlled finite-horizon archive histories.",
  },
] .map((publication) => ({
  ...publication,
  version: "2",
  published: "2026-09-15",
  dateLabel: "15 September 2026",
  author: "Jeremy Rodgers",
  authorRole: "Independent Researcher",
  doiUrl: `https://doi.org/${publication.doi}`,
  zenodoUrl: `https://zenodo.org/records/${publication.doi.split(".").at(-1)}`,
  webUrl: `/quantum-measurement/${publication.id}`,
  pdfUrl: `/publications/quantum-measurement/${publication.id}.pdf`,
  texUrl: `/publications/quantum-measurement/${publication.id}.tex`,
  markdownUrl: `/publications/quantum-measurement/${publication.id}.md`,
}));

export type QuantumPublication = (typeof quantumPublications)[number];
export const quantumMonograph = quantumPublications[0];
export const quantumPilot = quantumPublications[1];
export const quantumMassive = quantumPublications[2];

export function getQuantumPublication(id: string) {
  return quantumPublications.find((publication) => publication.id === id);
}
