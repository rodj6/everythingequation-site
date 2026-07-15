import { generateLlmsTxt } from "@/lib/machine";

export const dynamic = "force-static";

export async function GET() {
  const content = await generateLlmsTxt();
  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
