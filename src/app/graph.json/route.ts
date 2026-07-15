import { generateGraph } from "@/lib/machine";

export const dynamic = "force-static";

export async function GET() {
  const graph = await generateGraph();
  return new Response(JSON.stringify(graph, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
