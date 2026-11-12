import {liftManifest} from '@/lib/source-lift';
export const dynamic='force-static';
export function GET(){return Response.json(liftManifest('yang-mills-companion'));}
