import { alignmentManifest } from '@/lib/alignment-discovery';

export const dynamic = 'force-static';

export function GET() {
  return Response.json(alignmentManifest());
}
