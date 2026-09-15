import { quantumManifest } from "@/lib/quantum";
export const dynamic = "force-static";
export function GET() { return Response.json(quantumManifest()); }
