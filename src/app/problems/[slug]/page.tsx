import { notFound } from 'next/navigation';
import { loadProblems, loadPapers } from '@/lib/registry';
import Card from '@/components/card';
import { MdxWrapper } from '@/components/mdx-components';
import { manualProblems } from '@/generated/manualProblems';

export const dynamicParams = true;

/**
 * Generate static params for all public problems. Draft problems are
 * compiled but excluded from the site navigation and sitemap. By
 * generating params explicitly we enable static generation of problem
 * pages while still allowing dynamic fallback for new entries.
 */
export async function generateStaticParams() {
  const problems = await loadProblems();
  return problems
    .filter((p) => p.status === 'public')
    .map((p) => ({ slug: p.id }));
}

/**
 * Problem detail page. Displays the claim, statement, supporting papers
 * and connections. Manual MDX content is rendered if present.
 */
export default async function ProblemDetail({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const problems = await loadProblems();
  const problem = problems.find((p) => p.id === slug);
  if (!problem) {
    return notFound();
  }

  // If problem is draft we still build the page but not accessible via nav.
  const papers = await loadPapers();
  const supportedPapers = papers.filter((paper) => {
    if (paper.status !== 'public') return false;
    const list = paper.problems || [];
    return list.includes(problem.rawId) || list.includes(problem.id);
  });

  // Determine connections to other problems.
  const connections = (problem.connections || [])
    .map((id) => problems.find((p) => p.id === id))
    .filter(Boolean) as typeof problems;

  // Attempt to load manual MDX from generated map (if present).
  let ManualComponent: React.ComponentType | null = null;
  try {
    const loader = (manualProblems as Record<
      string,
      (() => Promise<{ default: React.ComponentType }>) | undefined
    >)[slug];

    if (typeof loader === 'function') {
      const mod = await loader();
      ManualComponent = mod.default;
    }
  } catch (_) {
    ManualComponent = null;
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{problem.title}</h1>
      <p className="lead">{problem.claim}</p>

      {/* Display optional metadata */}
      <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        {problem.domain && (
          <span>
            <strong>Domain:</strong> {problem.domain}
          </span>
        )}{' '}
        {problem.maturity && (
          <span>
            <strong>Maturity:</strong> {problem.maturity}
          </span>
        )}{' '}
        {problem.monograph_refs && problem.monograph_refs.length > 0 && (
          <span>
            <strong>Monograph:</strong> {problem.monograph_refs.join(', ')}
          </span>
        )}
      </div>

      {ManualComponent && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Notes</h2>
          <MdxWrapper>
            <ManualComponent />
          </MdxWrapper>
        </section>
      )}

      {supportedPapers.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Supporting Papers</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {supportedPapers.map((paper) => (
              <Card
                key={paper.id}
                href={`/papers/${paper.id}`}
                title={paper.metadata?.title ?? paper.role ?? paper.id}
                description={paper.metadata?.description?.substring(0, 120) || ''}
              />
            ))}
          </div>
        </section>
      )}

      {connections.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Related Problems</h2>
          <ul>
            {connections.map((p) => (
              <li key={p.id}>
                <a
                  href={`/problems/${p.id}`}
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Structured data for the problem page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ResearchProject',
            name: problem.title,
            url: `https://everythingequation.com/problems/${problem.id}`,
            description: problem.claim,
          }),
        }}
      />
    </article>
  );
}
