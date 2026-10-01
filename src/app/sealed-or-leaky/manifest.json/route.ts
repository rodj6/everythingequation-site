import {sealedLeaky,listSealedDocuments} from '@/lib/sealed-leaky';
export const dynamic='force-static';
export function GET(){return Response.json({publication:sealedLeaky,edition:'Complete technical web edition',documents:listSealedDocuments()});}
