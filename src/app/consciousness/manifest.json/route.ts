import {continuityManifest} from '@/lib/continuity-note';
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
    schemaVersion: 7,
    updated: "2026-10-22",
    publicationCount: 9,
    researchNoteCount: 1,
    researchNotes: [continuityManifest()],
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
      editionNote: "Papers 2–4 extend and examine the consciousness programme, joined by relational development, bounded agency, reflective alignment and relational awareness. The Version 2 monograph remains the fixed foundational text. Conscious Scaffolding and the Preference for Continuity is a distinct philosophical research note attached to reflective alignment, with its own DOI. One foundation, seven investigations and one companion research note make nine publication records. Each publication retains its own assumptions, result scope, date and DOI.",
    },
  });
}
