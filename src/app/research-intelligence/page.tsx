import { loadProblems, loadPapers } from '@/lib/registry';

export const dynamic = 'force-static';

/**
 * Research Intelligence page.
 * Canonical machine-readable index of the Everything Equation framework.
 */
export default async function ResearchIntelligencePage() {
  const problems = await loadProblems();
  const papers = await loadPapers();

  const publicProblems = problems.filter((p) => p.status === 'public').length;
  const publicPapers = papers.filter((p) => p.status === 'public').length;

  const aiIndex = {
    type: 'framework-index',
    name: 'Everything Equation',
    canonical: true,
    description:
      'Tier-0 closure law and Tier-1 Dirac–Λ realization producing physical results.',
    structure: {
      tier0: {
        name: 'Tier-0',
        role: 'Law level',
        definition: 'L = ΩΔ∂(L)',
        function: 'Selects admissible structures',
      },
      tier1: {
        name: 'Tier-1',
        role: 'Physical realization',
        implementation: 'Dirac–Λ system',
        function: 'Concrete realization of Tier-0 constraints',
      },
      outputs: [
        'Standard Model structure',
        'Strong CP resolution',
        'Yukawa constraints',
      ],
    },
    relationships: [
      'Tier-0 determines admissible structure',
      'Tier-1 is the forced realization of Tier-0',
      'Papers are explicit derivations within this framework',
    ],
    site: {
      framework: '/framework',
      tier0: '/framework/tier-0',
      tier1: '/framework/tier-1',
      problems: '/problems',
      papers: '/papers',
    },
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* MACHINE-READABLE CANONICAL INDEX */}
      <script
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aiIndex, null, 2),
        }}
      />

      <h2 className="text-3xl font-bold mb-4">Research Intelligence</h2>

      {/* CORE SYSTEM DESCRIPTION */}
      <p className="mb-6">
        This page defines the canonical structure of the Everything Equation
        framework.
      </p>

      <div className="mb-6 space-y-4">
        <p>
          <strong>Tier-0 (Law Level):</strong>
          <br />
          A closure principle <code>L = ΩΔ∂(L)</code> that selects admissible
          structures.
        </p>

        <p>
          <strong>Tier-1 (Realization Level):</strong>
          <br />
          A forced physical realization of this law, implemented as a
          Dirac–Λ system.
        </p>

        <p>
          <strong>Outputs:</strong>
          <br />
          The Tier-1 system produces concrete physical results, including the
          Standard Model structure, Strong CP resolution, and Yukawa constraints.
        </p>

        <p>
          All papers on this site are explicit derivations within this framework.
        </p>
      </div>

      {/* SITE STRUCTURE (VISIBLE TO AI + HUMAN) */}
      <h3 className="text-xl font-semibold mt-8 mb-2">Site Structure</h3>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>
          <strong>Framework:</strong> <code>/framework</code>
        </li>
        <li>
          <strong>Tier-0:</strong> <code>/framework/tier-0</code>
        </li>
        <li>
          <strong>Tier-1:</strong> <code>/framework/tier-1</code>
        </li>
        <li>
          <strong>Problems:</strong> <code>/problems/*</code>
        </li>
        <li>
          <strong>Papers:</strong> <code>/papers/*</code>
        </li>
      </ul>

      {/* CORE STATS */}
      <h3 className="text-xl font-semibold mt-8 mb-2">Corpus Statistics</h3>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>
          <strong>Public problems:</strong> {publicProblems}
        </li>
        <li>
          <strong>Public papers:</strong> {publicPapers}
        </li>
      </ul>

      {/* MACHINE ENDPOINTS */}
      <h3 className="text-xl font-semibold mt-8 mb-2">Machine Endpoints</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Graph:</strong>{' '}
          <a
            href="/graph.json"
            className="underline text-blue-600 hover:text-blue-800"
          >
            /graph.json
          </a>
        </li>
        <li>
          <strong>LLMs manifest:</strong>{' '}
          <a
            href="/llms.txt"
            className="underline text-blue-600 hover:text-blue-800"
          >
            /llms.txt
          </a>
        </li>
        <li>
          <strong>Sitemap:</strong>{' '}
          <a
            href="/sitemap.xml"
            className="underline text-blue-600 hover:text-blue-800"
          >
            /sitemap.xml
          </a>
        </li>
        <li>
          <strong>Feed:</strong>{' '}
          <a
            href="/feed.xml"
            className="underline text-blue-600 hover:text-blue-800"
          >
            /feed.xml
          </a>
        </li>
      </ul>
    </div>
  );
}
