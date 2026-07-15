import { site } from "@/config/site";

export const dynamic = "force-static";

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml

# AI-readable site summary: ${site.url}/llms.txt
# Research graph: ${site.url}/graph.json
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
