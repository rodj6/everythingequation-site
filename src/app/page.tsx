import { loadProblems, loadPapers } from '@/lib/registry';
import Card from '@/components/card';

export const dynamic = 'force-static';

/**
 * Home page: Introduces the Everything Equation platform and highlights
 * recently added problems and papers. Data is fetched at build time.
 */
export default async function HomePage() {
  const problems = await loadProblems();
  const papers = await loadPapers();
  const publicProblems = problems.filter((p) => p.status === 'public');
  const publicPapers = papers.filter((p) => p.status === 'public');
  const latestProblems = publicProblems.slice(0, 3);
  const latestPapers = publicPapers.slice(0, 3);
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to Everything Equation</h2>
        <p className="mx-auto max-w-3xl text-lg text-slate-700 dark:text-slate-300">
          A premium research platform curating open problems and scholarly
          articles, connecting ideas across disciplines.
        </p>
      </section>
      <section>
        <h3 className="text-2xl font-semibold mb-4">Latest Problems</h3>
        {latestProblems.length === 0 ? (
          <p>No public problems have been added yet.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestProblems.map((p) => (
              <Card key={p.id} href={`/problems/${p.id}`} title={p.title} description={p.claim} />
            ))}
          </div>
        )}
      </section>
      <section>
        <h3 className="text-2xl font-semibold mb-4">Latest Papers</h3>
        {latestPapers.length === 0 ? (
          <p>No public papers have been added yet.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestPapers.map((paper) => (
              <Card
                key={paper.id}
                href={`/papers/${paper.id}`}
                title={paper.title}
                description={paper.metadata?.description?.substring(0, 120) || ''}
              />
            ))}
          </div>
        )}
      </section>
      {/* JSON‑LD for the home page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            'name': 'Everything Equation',
            'url': 'https://everythingequation.com',
            'description': 'A premium research platform curating open problems and scholarly articles.',
          }),
        }}
      />
    </div>
  );
}