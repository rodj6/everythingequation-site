import { quantumManifest } from "@/lib/quantum";
export const dynamic = "force-static";
export function GET() {
  const manifest = quantumManifest();
  return Response.json({ ...manifest, publications: manifest.publications.filter(publication => publication.id === "monograph"), sourceLimitations: manifest.sourceLimitations.filter(limitation => limitation.publicationId === "monograph") });
}
