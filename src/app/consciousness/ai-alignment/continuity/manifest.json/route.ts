import {continuityManifest} from '@/lib/continuity-note';
export const dynamic='force-static';
export function GET(){return Response.json(continuityManifest());}
