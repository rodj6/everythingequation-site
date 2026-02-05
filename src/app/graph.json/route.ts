import { generateGraph } from '@/lib/registry';

export const dynamic = 'force-static';

export async function GET() {
  const graph = await generateGraph();
  return new Response(JSON.stringify(graph, null, 2), {
    headers: {
      'Content-Type': 'application/ld+json; charset=utf-8',
    },
  });
}