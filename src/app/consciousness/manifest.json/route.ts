import { consciousnessManifest } from "@/lib/consciousness";
export const dynamic="force-static";
export function GET(){return Response.json(consciousnessManifest());}
