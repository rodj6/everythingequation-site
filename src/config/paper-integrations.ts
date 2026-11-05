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
  supplementUrl?: string;
}

export const paperIntegrations = publications as IntegratedPaper[];
export const spectralEditions = paperIntegrations.filter(p => p.programme === 'source-readout');
export const spectralHub = '/source-readout/spectral-carriers';
