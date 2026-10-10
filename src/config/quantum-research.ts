import publications from '@content/quantum-research/publications.json';

export const quantumResearchPublications = publications.map(p => ({
  ...p, subtitle: p.theme, published: p.published, dateLabel: p.dateLabel,
  author: 'Jeremy Rodgers', authorRole: 'Independent Researcher',
  paperSlug: `quantum-${p.id}`, doiUrl: `https://doi.org/${p.doi}`,
  zenodoUrl: `https://zenodo.org/records/${p.doi.split('.').at(-1)}`,
  webUrl: `/quantum-measurement/research/${p.id}`,
  pdfUrl: `/publications/quantum-measurement/research/${p.id}.pdf`,
  markdownUrl: `/publications/quantum-measurement/research/${p.id}.md`,
  // Only the four new papers have separately verified original TeX downloads.
  texUrl: p.sourceAvailable ? `/publications/quantum-measurement/research/${p.id}.tex` : undefined,
}));
export function getQuantumResearchPublication(id: string) {
  return quantumResearchPublications.find(p => p.id === id);
}
