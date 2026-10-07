import { agencyManifest } from '@/lib/agency';
import { developmentManifest } from '@/lib/development';
import { consciousnessManifest } from "@/lib/consciousness";
import { listResearchDocuments, researchPapers } from "@/lib/consciousness-research";

export const dynamic = "force-static";

export function GET() {
  const monograph = consciousnessManifest();
  return Response.json({
    ...monograph,
    schemaVersion: 4,
    updated: "2026-10-06",
    development: developmentManifest(),
    agency: agencyManifest(),
    research: {
      title: "Boundaries, interfaces and realizations",
      url: "/consciousness/research",
      papers: researchPapers,
      documents: listResearchDocuments(),
      readingOrder: researchPapers.map(paper => paper.id),
      editionNote: "Papers 2–4 extend and examine the consciousness programme. The Version 2 monograph remains the fixed foundational text. Each paper retains its own assumptions, result scope, date and DOI.",
    },
  });
}
