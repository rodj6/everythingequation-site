import publications from './paper-integrations.json';
export const paperIntegrations = publications;
export type IntegratedPaper = typeof paperIntegrations[number];
