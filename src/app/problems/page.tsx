import { loadProblems } from '@/lib/registry';
import Card from '@/components/card';

export const dynamic = 'force-static';

/**
 * List all public problems. Excludes drafts from the navigation.
 */
export default async function ProblemsPage() {
  const problems = await loadProblems();
  const publicProblems = problems.filter((p) => p.status === 'public');
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Problems</h2>
      {publicProblems.length === 0 ? (
        <p>No public problems defined.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {publicProblems.map((p) => (
            <Card key={p.id} href={`/problems/${p.id}`} title={p.title} description={p.claim} />
          ))}
        </div>
      )}
    </div>
  );
}