import { loadProblems, loadPapers } from '@/lib/registry';

export const dynamic = 'force-static';

/**
 * Research Intelligence page. Provides high‑level statistics about the
 * curated corpus and exposes machine‑readable endpoints for LLMs and
 * search engines.
 */
export default async function ResearchIntelligencePage() {
  const problems = await loadProblems();
  const papers = await loadPapers();
  const publicProblems = problems.filter((p) => p.status === 'public').length;
  const publicPapers = papers.filter((p) => p.status === 'public').length;
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Research Intelligence</h2>
      <p className="mb-6">
        Everything Equation automatically generates a knowledge graph and
        metadata feeds to support search engines and large language models.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Public problems:</strong> {publicProblems}
        </li>
        <li>
          <strong>Public papers:</strong> {publicPapers}
        </li>
        <li>
          <strong>Graph:</strong>{' '}
          <a href="/graph.json" className="underline text-blue-600 hover:text-blue-800">
            /graph.json
          </a>
        </li>
        <li>
          <strong>LLMs manifest:</strong>{' '}
          <a href="/llms.txt" className="underline text-blue-600 hover:text-blue-800">
            /llms.txt
          </a>
        </li>
        <li>
          <strong>Sitemap:</strong>{' '}
          <a href="/sitemap.xml" className="underline text-blue-600 hover:text-blue-800">
            /sitemap.xml
          </a>
        </li>
        <li>
          <strong>Feed:</strong>{' '}
          <a href="/feed.xml" className="underline text-blue-600 hover:text-blue-800">
            /feed.xml
          </a>
        </li>
      </ul>
    </div>
  );
}