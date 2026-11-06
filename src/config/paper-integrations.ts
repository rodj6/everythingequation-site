import publications from './paper-integrations.json';

export interface IntegratedPaper {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  doi: string;
  date: string;
  url: string;
  pdfUrl: string;
  markdownUrl: string;
  manifestUrl: string;
  paperSlug: string;
  headline: string;
  author: string;
  programme?: 'source-readout';
  series?: 'gravity-holography';
  supplementUrl?: string;
}

export const paperIntegrations = publications as IntegratedPaper[];
export const sourceReadoutEditions = paperIntegrations.filter(p => p.programme === 'source-readout');
export const spectralEditions = sourceReadoutEditions.filter(p => !p.series);
export const gravityEditions = sourceReadoutEditions.filter(p => p.id === 'transport-projective' || p.series === 'gravity-holography');
export const gravityHub = '/source-readout/gravity-and-holography';
export const gravityReleaseDate = '2026-11-06';
export const firstOrderKernel = '/source-readout/boundary-ball-readouts/04-what-fixed-slice-balls-miss#fixed-frame-kernel';
export const secondOrderDetection = '/source-readout/second-order-boundary-balls/03-same-ball-detection#all-radii-canonical-energy';
export const holographyAtlas = '/atlas?focus=observable-horizon-entropy';
export const gravityAtlas = '/atlas?focus=gravity';
export const sameBallTakeaway = 'What a readout reveals depends on both where you look and which order of response you measure.';
export const spectralHub = '/source-readout/spectral-carriers';
