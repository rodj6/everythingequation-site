import {integratedManifest} from '@/lib/paper-integrations';
export const dynamic='force-static';
export function GET(){return Response.json(integratedManifest('whole-field'));}
