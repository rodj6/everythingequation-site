import { generateFeed } from "@/lib/machine";
import { site } from "@/config/site";

export const dynamic = "force-static";

export async function GET() {
  const xml = await generateFeed(site.url);
  return new Response(xml, {
    headers: { "Content-Type": "application/atom+xml; charset=utf-8" },
  });
}
