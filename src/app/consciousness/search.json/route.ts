import { getAgencySearchRecords } from '@/lib/agency';
import { getAlignmentSearchRecords } from '@/lib/alignment';
import { getDevelopmentSearchRecords } from '@/lib/development';
import { getConsciousnessSearchRecords } from "@/lib/consciousness";
import { getResearchSearchRecords } from "@/lib/consciousness-research";

export const dynamic = "force-static";

export function GET() {
  return Response.json([...getAlignmentSearchRecords(), ...getConsciousnessSearchRecords(), ...getResearchSearchRecords(), ...getDevelopmentSearchRecords(), ...getAgencySearchRecords()]);
}
