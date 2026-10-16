import {relationalManifest} from '@/lib/relational-awareness';
export const dynamic='force-static';
export function GET(){return Response.json(relationalManifest());}
