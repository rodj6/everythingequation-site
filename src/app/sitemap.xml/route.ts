import { generateSitemap } from "@/lib/machine";
import { site } from "@/config/site";

export const dynamic = "force-static";

export async function GET() {
  const xml = await generateSitemap(site.url);
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
