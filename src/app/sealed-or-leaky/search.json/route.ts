import {getSealedSearchRecords} from '@/lib/sealed-leaky';
export const dynamic='force-static';
export function GET(){return Response.json(getSealedSearchRecords());}
