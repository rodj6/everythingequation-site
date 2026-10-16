import {relationalManifest} from '@/lib/relational-awareness';
import { agencyManifest } from '@/lib/agency';
import { alignmentManifest } from '@/lib/alignment-discovery';
import { developmentManifest } from '@/lib/development';
import { consciousnessManifest } from "@/lib/consciousness";
import { listResearchDocuments, researchPapers } from "@/lib/consciousness-research";

export const dynamic = "force-static";

export function GET() {
  const monograph = consciousnessManifest();
  return Response.json({
    ...monograph,
    schemaVersion: 6,
    updated: "2026-10-16",
    publicationCount: 8,
    investigationCount: 7,
    relationalAwareness: relationalManifest(),
    alignment: alignmentManifest(),
    development: developmentManifest(),
    agency: agencyManifest(),
    research: {
      title: "Consciousness, relational awareness, agency and reflective alignment",
      url: "/consciousness/research",
      papers: researchPapers,
      documents: listResearchDocuments(),
      readingOrder: researchPapers.map(paper => paper.id),
      editionNote: "Papers 2–4 extend and examine the consciousness programme, joined by relational development, bounded agency, reflective alignment and relational awareness. The Version 2 monograph remains the fixed foundational text. Each paper retains its own assumptions, result scope, date and DOI.",
    },
  });
}
