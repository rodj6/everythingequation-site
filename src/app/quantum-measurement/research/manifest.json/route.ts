import { quantumResearchManifest } from '@/lib/quantum-research';
export const dynamic = 'force-static';
export function GET() { return Response.json(quantumResearchManifest()); }
