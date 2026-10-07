import { agencyManifest } from '@/lib/agency';
export const dynamic = 'force-static';
export function GET() { return Response.json(agencyManifest()); }
