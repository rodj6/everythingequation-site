import { developmentManifest } from '@/lib/development';
export const dynamic = 'force-static';
export function GET() { return Response.json(developmentManifest()); }
