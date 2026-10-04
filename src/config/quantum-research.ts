import publications from '@content/quantum-research/publications.json';

export const quantumResearchPublications = publications.map(p => ({
  ...p, subtitle: p.theme, published: '2026-10-04', dateLabel: '4 October 2026',
  author: 'Jeremy Rodgers', authorRole: 'Independent Researcher',
  paperSlug: `quantum-${p.id}`, doiUrl: `https://doi.org/${p.doi}`,
  zenodoUrl: `https://zenodo.org/records/${p.doi.split('.').at(-1)}`,
  webUrl: `/quantum-measurement/research/${p.id}`,
  pdfUrl: `/publications/quantum-measurement/research/${p.id}.pdf`,
  markdownUrl: `/publications/quantum-measurement/research/${p.id}.md`,
  // Reconciled web-conversion sources are provided in the source package,
  // not mislabelled as an original manuscript download.
  texUrl: undefined,
}));
export function getQuantumResearchPublication(id: string) {
  return quantumResearchPublications.find(p => p.id === id);
}
