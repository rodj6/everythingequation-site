import {sourceSearchRecords} from '@/lib/source-readout';
export const dynamic='force-static';
export function GET(){return Response.json(sourceSearchRecords());}
