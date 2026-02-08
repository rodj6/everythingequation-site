import { notFound } from 'next/navigation';
import { loadPapers, loadProblems } from '@/lib/registry';
import Card from '@/components/card';
import { MdxWrapper } from '@/components/mdx-components';
import { manualPapers } from '@/generated/manualPapers';

export const dynamicParams = true;

export async function generateStaticParams() {
  const papers = await loadPapers();
  return papers
    .filter((p) => p.status === 'public')
    .map((p) => ({ slug: p.id }));
}

export default async function PaperDetail({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const papers = await loadPapers();
  const paper = papers.find((p) => p.id === slug);
  if (!paper) {
    return notFound();
  }
  const problems = await loadProblems();
  const supportedProblems = problems.filter(
    (prob) => paper.problems?.includes(prob.id) && prob.status === 'public'
  );

  // Attempt to load manual MDX from generated map (if present).
  let ManualComponent: React.ComponentType | null = null;
  try {
    const loader = (manualPapers as Record<
      string,
      (() => Promise<{ default: React.ComponentType }>) | undefined
    >)[slug];

    if (typeof loader === 'function') {
      const mod = await loader();
      ManualComponent = mod.default;
    }
  } catch {
    ManualComponent = null;
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      {/* Use metadata title if available, fall back to role or rawId */}
      <h1>{paper.metadata?.title ?? paper.role ?? paper.rawId}</h1>

      {paper.metadata?.creators && paper.metadata.creators.length > 0 && (
        <p>
          <strong>Authors:</strong> {paper.metadata.creators.join(', ')}
        </p>
      )}

      {(paper.doi || paper.metadata?.doi) && (
        <p>
          <strong>DOI:</strong>{' '}
          <a
            href={`https://doi.org/${paper.doi ?? paper.metadata?.doi}`}
            className="underline text-blue-600 hover:text-blue-800"
          >
            {paper.doi ?? paper.metadata?.doi}
          </a>
        </p>
      )}

      {paper.metadata?.url && (
        <p>
          <strong>Zenodo:</strong>{' '}
          <a href={paper.metadata.url} className="underline text-blue-600 hover:text-blue-800">
            View record
          </a>
        </p>
      )}

      {paper.metadata?.files && paper.metadata.files.length > 0 && (
        <p>
          <strong>PDF:</strong>{' '}
          <a
            href={paper.metadata.files[0].url}
            className="underline text-blue-600 hover:text-blue-800"
          >
            Download
          </a>
        </p>
      )}

      {paper.role && (
        <p>
          <strong>Role:</strong> {paper.role}
        </p>
      )}

      {paper.notes && (
        <p>
          <strong>Notes:</strong> {paper.notes}
        </p>
      )}

      {paper.monograph && (
        <p>
          <strong>Monograph:</strong> {paper.monograph}
        </p>
      )}

      {ManualComponent && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Notes</h2>
          <MdxWrapper>
            <ManualComponent />
          </MdxWrapper>
        </section>
      )}

      {supportedProblems.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Supported Problems</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {supportedProblems.map((prob) => (
              <Card
                key={prob.id}
                href={`/problems/${prob.id}`}
                title={prob.title}
                description={prob.claim}
              />
            ))}
          </div>
        </section>
      )}

      {/* JSON-LD for the paper page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ScholarlyArticle',
            name: paper.metadata?.title ?? paper.role ?? paper.rawId,
            url: `https://everythingequation.com/papers/${paper.id}`,
            identifier: paper.doi ?? paper.metadata?.doi ?? undefined,
            author: paper.metadata?.creators ?? paper.authors ?? [],
            isPartOf: paper.monograph
              ? { '@type': 'CreativeWork', name: paper.monograph }
              : undefined,
          }),
        }}
      />
    </article>
  );
}
