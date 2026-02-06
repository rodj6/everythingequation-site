import { loadProblems, loadPapers } from '@/lib/registry';
import Card from '@/components/card';

export const dynamic = 'force-static';

/**
 * Monograph page. Presents a structured overview of problems and papers by
 * their monograph positions, if defined. Sections without any entries
 * are omitted. Draft items are never shown.
 */
export default async function MonographPage() {
  const problems = await loadProblems();
  const papers = await loadPapers();
  // Build a map from section id to arrays of problems and papers
  const sections: Record<string, { problems: typeof problems; papers: typeof papers }> = {};
  for (const prob of problems) {
    if (prob.status !== 'public' || !prob.monograph) continue;
    sections[prob.monograph] = sections[prob.monograph] || { problems: [], papers: [] };
    sections[prob.monograph].problems.push(prob);
  }
  for (const paper of papers) {
    if (paper.status !== 'public' || !paper.monograph) continue;
    sections[paper.monograph] = sections[paper.monograph] || { problems: [], papers: [] };
    sections[paper.monograph].papers.push(paper);
  }
  const sectionKeys = Object.keys(sections).sort();
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Monograph</h2>
      {sectionKeys.length === 0 ? (
        <p>No monograph sections have been defined.</p>
      ) : (
        <div className="space-y-8">
          {sectionKeys.map((key) => {
            const sect = sections[key];
            return (
              <section key={key}>
                <h3 className="text-2xl font-semibold mb-4">Section {key}</h3>
                {sect.problems.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold mb-2">Problems</h4>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                      {sect.problems.map((prob) => (
                        <Card key={prob.id} href={`/problems/${prob.id}`} title={prob.title} description={prob.claim} />
                      ))}
                    </div>
                  </div>
                )}
                {sect.papers.length > 0 && (
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Papers</h4>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                      {sect.papers.map((paper) => (
                        <Card
                          key={paper.id}
                          href={`/papers/${paper.id}`}
                          title={paper.metadata?.title ?? paper.role ?? paper.id}
                          description={paper.metadata?.description?.substring(0, 120) || ''}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
