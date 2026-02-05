import { loadPapers } from '@/lib/registry';
import Card from '@/components/card';

export const dynamic = 'force-static';

/**
 * List all public papers. Excludes drafts from the navigation.
 */
export default async function PapersPage() {
  const papers = await loadPapers();
  const publicPapers = papers.filter((p) => p.status === 'public');
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Papers</h2>
      {publicPapers.length === 0 ? (
        <p>No public papers defined.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {publicPapers.map((p) => (
          <Card
            key={p.id}
            href={`/papers/${p.id}`}
            title={p.metadata?.title ?? p.role ?? p.rawId}
            description={p.metadata?.description?.substring(0, 120) || ''}
          />
        ))}
        </div>
      )}
    </div>
  );
}