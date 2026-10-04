import { quantumManifest } from "@/lib/quantum";
import { quantumResearchManifest } from '@/lib/quantum-research';
export const dynamic = "force-static";
export function GET() { return Response.json({...quantumManifest(), research: quantumResearchManifest(), researchManifestUrl: "/quantum-measurement/research/manifest.json"}); }
