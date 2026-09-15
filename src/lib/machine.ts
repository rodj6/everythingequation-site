/**
 * MACHINE-READABLE ENDPOINT GENERATORS
 *
 * Builds the content served at /sitemap.xml, /feed.xml, /llms.txt and
 * /graph.json. All four are statically generated at build time and read
 * from the same registries as the human-facing pages, so they can never
 * drift out of sync with the visible site.
 */
import { site } from '@/config/site';
import { navigation } from '@/config/navigation';
import { loadPapers, loadProblems, getCanonicalPapers } from '@/lib/registry';
import { listArticles } from '@/lib/articles';
import { listMonographItems, monographTotals } from '@/lib/monograph';
import { quantumPublications, quantumMonograph } from '@/config/quantum';
import { listQuantumDocuments } from '@/lib/quantum';
import {
  atlasEdges,
  atlasNodes,
  atlasStats,
  observableRoutes,
} from '@/data/reality-atlas';

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.replace(/\/+$/, '');
}

function atomTimestamp(value: string): string {
  const normalized = /^\d{4}-\d{2}-\d{2}$/.test(value) ? `${value}T00:00:00Z` : value;
  const timestamp = Date.parse(normalized);
  if (!Number.isFinite(timestamp)) throw new Error(`Invalid feed date: ${value}`);
  return new Date(timestamp).toISOString();
}

// ---------------------------------------------------------------------------
// sitemap.xml
// ---------------------------------------------------------------------------

export async function generateSitemap(baseUrl: string): Promise<string> {
  const canonicalBase = normalizeBaseUrl(baseUrl);
  const papers = (await loadPapers()).filter((p) => p.status === 'public');
  const problems = (await loadProblems()).filter((p) => p.status === 'public');
  const articles = listArticles();

  const urls: Array<{ loc: string; lastmod?: string; priority: string }> = [
    { loc: '/atlas/quantum-measurement', lastmod: quantumMonograph.published, priority: '0.8' },
    ...navigation.map((n) => ({
      loc: n.href,
      priority:
        n.href === '/'
          ? '1.0'
          : n.href === '/monograph' || n.href === '/atlas' || n.href === '/quantum-measurement'
            ? '0.9'
            : '0.8',
    })),
    ...listMonographItems().map((i) => ({
      loc: `/monograph/${i.slug}`,
      lastmod: site.monograph.webDate,
      priority: '0.8',
    })),
    ...quantumPublications.map((publication) => ({ loc: publication.webUrl, lastmod: publication.published, priority: '0.9' })),
    ...listQuantumDocuments().map((document) => ({ loc: document.url, lastmod: quantumMonograph.published, priority: '0.8' })),
    ...papers.map((p) => ({
      loc: `/papers/${p.slug}`,
      lastmod: p.date,
      priority: p.category === 'canonical' || p.researchProgramme ? '0.9' : '0.5',
    })),
    ...problems.map((p) => ({ loc: `/problems/${p.slug}`, priority: '0.6' })),
    ...articles.map((a) => ({
      loc: `/articles/${a.slug}`,
      lastmod: a.updated || a.date,
      priority: '0.7',
    })),
  ];

  const uniqueUrls = [...new Map(urls.map((item) => [item.loc, item])).values()];
  const body = uniqueUrls
    .map(
      (u) =>
        `  <url><loc>${esc(canonicalBase + u.loc)}</loc>${
          u.lastmod ? `<lastmod>${esc(u.lastmod)}</lastmod>` : ''
        }<priority>${u.priority}</priority></url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

// ---------------------------------------------------------------------------
// feed.xml (Atom)
// ---------------------------------------------------------------------------

export async function generateFeed(baseUrl: string): Promise<string> {
  const canonicalBase = normalizeBaseUrl(baseUrl);
  const articles = listArticles();
  const canonical = await getCanonicalPapers();

  const entries = [
    ...quantumPublications.map((publication) => ({
      title: `${publication.title} (Version ${publication.version})`,
      url: `${canonicalBase}${publication.webUrl}`,
      date: publication.published,
      summary: `${publication.description} Complete web edition, PDF, LaTeX and Markdown. DOI ${publication.doi}.`,
    })),
    {
      title: `The Monograph: ${site.monograph.title} (Version ${site.monograph.version})`,
      url: `${canonicalBase}/monograph`,
      date: site.monograph.webDate,
      summary: `Complete web edition of “${site.monograph.title}: ${site.monograph.subtitle}” (Version ${site.monograph.version}, ${site.monograph.published}). DOI ${site.monograph.doi}. All 18 chapters, both appendices, and the bibliography.`,
    },
    ...articles.map((a) => ({
      title: a.title,
      url: `${canonicalBase}/articles/${a.slug}`,
      date: a.updated || a.date || '2026-01-01',
      summary: a.description || '',
    })),
    ...canonical.map((p) => ({
      title: `Paper ${p.number}: ${p.displayTitle}`,
      url: `${canonicalBase}/papers/${p.slug}`,
      date: p.date || '2026-01-01',
      summary: p.summary || p.role || '',
    })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  const updated = entries[0]?.date || '2026-01-01';
  const body = entries
    .map(
      (e) => `  <entry>
    <title>${esc(e.title)}</title>
    <link href="${esc(e.url)}"/>
    <id>${esc(e.url)}</id>
    <updated>${esc(atomTimestamp(e.date))}</updated>
    <summary>${esc(e.summary.trim())}</summary>
    <author><name>${esc(site.author.name)}</name></author>
  </entry>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${esc(site.name)}</title>
  <subtitle>${esc(site.tagline)}</subtitle>
  <link href="${esc(canonicalBase)}/feed.xml" rel="self"/>
  <link href="${esc(canonicalBase)}"/>
  <id>${esc(canonicalBase)}/</id>
  <updated>${esc(atomTimestamp(updated))}</updated>
${body}
</feed>
`;
}

// ---------------------------------------------------------------------------
// llms.txt: AI-readable site summary
// ---------------------------------------------------------------------------

export async function generateLlmsTxt(): Promise<string> {
  const baseUrl = normalizeBaseUrl(site.url);
  const canonical = await getCanonicalPapers();
  const problems = (await loadProblems()).filter(
    (p) => p.status === 'public' && p.programme !== 'legacy'
  );
  const articles = listArticles();
  const allPapers = await loadPapers();
  const historical = allPapers.filter(
    (p) => p.category === 'historical' && p.status === 'public'
  );
  const superseded = allPapers.filter(
    (p) => p.category === 'superseded' && p.status === 'public'
  );

  const lines: string[] = [
    `# ${site.name}`,
    '',
    `> ${site.tagline}`,
    '',
    site.description,
    '',
    '## Canonical authority and result map',
    '',
    '- The canonical source-readout foundation is the seven-paper Shadow Theory sequence (Papers 1-7, published 2026-07-15). The September 2026 Quantum Measurement publications supply separate physical constitutions and are the current authority for their own measurement results.',
    '- A previous six-paper canonical stack (June 2026) was replaced by the seven-paper sequence; its records remain published on Zenodo and are listed below as superseded canonical versions. They are not current authority and their architecture (down-compilation, runtime calculus, synthesis) is not carried forward.',
    '- Older Everything Equation / Tier-0 / Tier-1 era materials on this site are historical background only; if any superseded or historical material conflicts with Papers 1-7, the current sequence controls.',
    '- Paper 1 establishes exact quotient presentation together with independent descent and equivariant-reconstruction obstructions.',
    '- Paper 2 proves target-relative solvability and constructs the compatible-answer set and coarsest single-target completion.',
    '- Paper 3 constructs the canonical minimal source completion as the terminal relation-sufficient extension.',
    '- Paper 4 gives geometric descent and orbit-space realization criteria and derives covariant variational responses.',
    '- Paper 5 proves the autonomous-closure criterion, derives the exact unresolved-state and memory terms, and constructs the minimal dynamical completion.',
    '- Paper 6 proves non-source projection from an essential non-gauge fiber distinction and derives deterministic and statistical internal-identifiability theorems.',
    '- Within Randall-Sundrum (RS2) gravity, Paper 7 proves that identical instantaneous brane readouts can evolve into different futures, derives the exact projected Einstein equation, links cosmological and weak-field residues through a parameter-free relation, and proves exact brane-level operational equivalence with a four-dimensional pushforward theory.',
    '- The Everything Equation is the compact closure schema of the broader programme and monograph. The canonical seven-paper sequence supplies the source-to-readout mathematics summarized above.',
    '- Experimental tests, peer review, engineering realization, and subsequent expert assessment are tracked as distinct research records.',
    '',
    '## Canonical papers',
    '',
    ...canonical.map(
      (p) =>
        `- [Paper ${p.number}: ${p.displayTitle}](${baseUrl}/papers/${p.slug}): ${(
          p.role || ''
        ).trim()}${p.doiUrl ? ` DOI: ${p.doi}` : ''}`
    ),
    '',
    '## The monograph (complete web edition)',
    '',
    `“${site.monograph.title}: ${site.monograph.subtitle}” (Version ${site.monograph.version}, ${site.monograph.published}) is the programme's source-to-readout architecture for a Theory of Everything. It is a fixed publication completed before the seven-paper canonical sequence; its text is unchanged by that sequence. DOI: ${site.monograph.doi} (${site.monograph.doiUrl}). The pages below are the COMPLETE text of that fixed Version ${site.monograph.version} publication: all 18 chapters, both appendices, and the bibliography, as crawlable server-rendered HTML (KaTeX math with embedded TeX annotations). A machine-readable inventory of every component, section anchor, and per-chapter equation/table count is at ${baseUrl}/monograph/manifest.json. The Zenodo record (${site.monograph.zenodoUrl}) is the canonical citable publication of the same work.`,
    '',
    `- [Monograph hub: title, abstract, organization, full table of contents](${baseUrl}/monograph)`,
    ...listMonographItems().map(
      (i) =>
        `- [${i.label ? `${i.label}: ` : ''}${i.title}](${baseUrl}/monograph/${i.slug})`
    ),
    '',
    '## Quantum Measurement and Born Rule (complete Version 2 publications)',
    '',
    `Published ${quantumMonograph.published} by ${quantumMonograph.author}, ${quantumMonograph.authorRole}. Programme overview: ${baseUrl}/quantum-measurement. Full inventory with stable anchors and source-comparison counts: ${baseUrl}/quantum-measurement/manifest.json.`,
    '',
    'The pilot-medium completion uses a declared P1-P4 interaction catalogue, independent spatial-gas preparation, conservative packet export, finite recombination and carrier population tracking. It yields controlled total-variation convergence on complete tagged paths to the minimal Bell process in unchanged physical time on a finite graph and horizon. Its finite autonomous apparatus retains material records; finite deviations and recurrence bound the claim.',
    'The massive-configuration completion separately postulates the universal spinor inventory, kinetic-momentum guidance and complete initial equilibrium with a finite independent ready stock. It gives continuous physical configuration paths, semibounded apparatus dynamics, retained resources, a massive autonomous controller, and separate retained-output and archive-history error bounds. It does not assume or derive discrete Bell jumps for internal spin labels.',
    'Source/readout incompleteness alone derives neither constitution, interaction catalogue, guidance law nor preparation statistics. Internal resolutions are conditional on their named premises. The publications do not establish independent verification or experimental confirmation. Their counterexamples and finite-resource scope restrictions are part of the results.',
    'The integrated monograph and companion papers retain separate publication provenance; do not merge different statements into a new theorem. The TOE Version 1.0 text remains its own earlier publication. Historical Tier-0 quantum measurement notes at /problems/quantum-measurement remain accessible with their original anchors and are not the current Version 2 claims.',
    '',
    ...quantumPublications.flatMap((publication) => [
      `- [${publication.title}](${baseUrl}${publication.webUrl}): Version ${publication.version}; DOI ${publication.doi}; publication record ${baseUrl}/papers/${publication.paperSlug}.`,
      `  - [PDF](${baseUrl}${publication.pdfUrl}) · [LaTeX source](${baseUrl}${publication.texUrl}) · [Complete Markdown](${baseUrl}${publication.markdownUrl})`,
    ]),
    '',
    '### Complete quantum web-edition reading inventory',
    ...listQuantumDocuments().map((document) => `- [${document.label ? `${document.label}: ` : ''}${document.title}](${baseUrl}${document.url})`),
    '',
    '## Key pages',
    '',
    `- [Framework](${baseUrl}/framework): the seven-paper sequence and core vocabulary`,
    `- [Reality Atlas](${baseUrl}/atlas): interactive source-to-observable model with ${atlasStats.representedNodes} typed structures, ${atlasStats.representedEdges} maps, equation-level navigation and reversible observable traces`,
    `- [The Monograph](${baseUrl}/monograph): complete Version ${site.monograph.version} web edition of the TOE monograph (DOI ${site.monograph.doi})`,
    `- [Quantum Measurement](${baseUrl}/quantum-measurement): two constitutive completions, physical records, Born statistics, accessible explanations and full technical reading paths`,
    `- [Quantum Measurement Atlas field guide](${baseUrl}/atlas/quantum-measurement): the programme's typed structures, declared mathematical dependencies, conceptual links and exact reading sources`,
    `- [Papers](${baseUrl}/papers): canonical, branch, and historical paper index`,
    `- [Open Problems](${baseUrl}/problems): the research programme`,
    `- [Articles](${baseUrl}/articles): research notes and updates`,
    `- [Research Map](${baseUrl}/research-map): structure of the stack and its branches`,
    `- [About](${baseUrl}/about): author, publication record, and research position`,
    '',
    '## Research status and open problems',
    '',
    ...problems.map((p) => `- [${p.title}](${baseUrl}/problems/${p.slug}) [${p.maturity === 'constitutive-results' ? 'published constitutive results' : 'active research target'}]: ${p.target.trim()}`),
    '',
    '## Articles',
    '',
    ...articles.map(
      (a) => `- [${a.title}](${baseUrl}/articles/${a.slug}): ${a.description || ''}`
    ),
    '',
    '## Superseded canonical versions (June 2026 six-paper stack)',
    '',
    ...superseded.map(
      (p) =>
        `- [${p.displayTitle}](${baseUrl}/papers/${p.slug})${p.doi ? ` (DOI: ${p.doi})` : ''}: superseded 2026-07-15 by the seven-paper sequence${
          p.supersededBy ? `; current treatment of its subject: ${baseUrl}/papers/${p.supersededBy}` : ''
        }`
    ),
    '',
    '## Historical archive',
    '',
    `${historical.length} earlier papers from the Everything Equation / Tier-0 era are listed at ${baseUrl}/papers under "Historical archive". They are superseded as controlling public authority.`,
    '',
    '## Machine-readable endpoints',
    '',
    `- ${baseUrl}/sitemap.xml`,
    `- ${baseUrl}/feed.xml (Atom)`,
    `- ${baseUrl}/graph.json (publication graph plus typed Reality Atlas nodes, maps and observable trace routes)`,
    `- ${baseUrl}/quantum-measurement/manifest.json (all three quantum publications, reading inventory, stable anchors, content counts and source downloads)`,
    '',
    `Author: ${site.author.name} (${site.author.affiliation}). Contact: ${site.author.email}.`,
  ];
  return lines.join('\n') + '\n';
}

// ---------------------------------------------------------------------------
// graph.json: machine-readable research graph
// ---------------------------------------------------------------------------

export async function generateGraph() {
  const baseUrl = normalizeBaseUrl(site.url);
  const papers = (await loadPapers()).filter((p) => p.status === 'public');
  const problems = (await loadProblems()).filter((p) => p.status === 'public');
  const articles = listArticles();
  const canonical = papers
    .filter((p) => p.category === 'canonical')
    .sort((a, b) => (a.number ?? 99) - (b.number ?? 99));
  const publicProblemSlugs = new Set(problems.map((problem) => problem.slug));

  const nodes = [
    ...papers.map((p) => ({
      id: `paper:${p.slug}`,
      type: 'paper',
      category: p.category,
      number: p.number ?? null,
      title: p.displayTitle,
      role: p.role ?? null,
      version: p.version ?? null,
      date: p.date ?? null,
      doi: p.doi ?? null,
      zenodo: p.zenodoId ?? null,
      url: `${baseUrl}/papers/${p.slug}`,
      webEdition: p.webUrl ? `${baseUrl}${p.webUrl}` : null,
      downloads: p.pdfUrl ? { pdf: `${baseUrl}${p.pdfUrl}`, latex: `${baseUrl}${p.texUrl}`, markdown: `${baseUrl}${p.markdownUrl}` } : null,
    })),
    ...problems.map((p) => ({
      id: `problem:${p.slug}`,
      type: p.maturity === 'constitutive-results' ? 'research-programme' : 'open-problem',
      maturity: p.maturity ?? 'open',
      programme: p.programme,
      title: p.title,
      domain: p.domain ?? null,
      target: p.target.trim(),
      url: `${baseUrl}/problems/${p.slug}`,
    })),
    ...articles.map((a) => ({
      id: `article:${a.slug}`,
      type: 'article',
      title: a.title,
      date: a.date ?? null,
      tags: a.tags ?? [],
      url: `${baseUrl}/articles/${a.slug}`,
    })),
    {
      id: 'monograph',
      type: 'monograph',
      title: site.monograph.title,
      subtitle: site.monograph.subtitle,
      version: site.monograph.version,
      date: site.monograph.webDate,
      doi: site.monograph.doi,
      zenodo: site.monograph.zenodoUrl,
      url: `${baseUrl}/monograph`,
      manifest: `${baseUrl}/monograph/manifest.json`,
      totals: monographTotals(),
    },
    ...listMonographItems().map((i) => ({
      id: `monograph:${i.slug}`,
      type: 'monograph-part',
      kind: i.kind,
      number: i.number || null,
      label: i.label || null,
      part: i.part,
      order: i.order,
      title: i.title,
      url: `${baseUrl}/monograph/${i.slug}`,
    })),
    {
      id: 'quantum-measurement', type: 'research-programme',
      title: 'Quantum Measurement and the Born Rule',
      date: quantumMonograph.published, version: quantumMonograph.version,
      status: 'published constitutive results; external verification not established by these publications',
      url: `${baseUrl}/quantum-measurement`,
      manifest: `${baseUrl}/quantum-measurement/manifest.json`,
      scope: 'Two distinct constitutions. Source/readout incompleteness does not derive their interactions, guidance or preparation statistics.',
    },
    ...listQuantumDocuments().map((document) => ({
      id: `quantum:${document.publicationId}:${document.slug}`,
      type: 'quantum-web-edition-part', publicationId: document.publicationId,
      title: document.title, label: document.label, kind: document.kind, order: document.order,
      url: `${baseUrl}${document.url}`, sections: document.sections, stats: document.stats,
      markdown: `${baseUrl}${document.markdownUrl}`,
    })),
    {
      id: 'quantum-atlas-guide', type: 'atlas-field-guide',
      title: 'Quantum Measurement Atlas field guide',
      url: `${baseUrl}/atlas/quantum-measurement`,
    },
    {
      id: 'atlas',
      type: 'interactive-atlas',
      title: 'The Reality Atlas',
      contract: 'Typed multiscale atlas A = (V, E, F), canonical equations G10.83-G10.86',
      levelsOfDetail: [0, 1, 2, 3, 4],
      stats: atlasStats,
      url: `${baseUrl}/atlas`,
    },
    ...atlasNodes.map((node) => ({
      id: `atlas:${node.id}`,
      type: 'atlas-node',
      atlasId: node.id,
      tier: node.tier,
      kind: node.kind,
      levelOfDetail: node.lod,
      title: node.label,
      summary: node.summary,
      chapter: node.chapter,
      section: node.section,
      mathematicalType: node.mathematicalType,
      stateVariables: node.stateVariables,
      domain: node.domain,
      codomain: node.codomain,
      regularity: node.regularity,
      boundaryClass: node.boundaryClass,
      covariance: node.covariance,
      units: node.units,
      branchDomain: node.branchDomain,
      approximationOrder: node.approximationOrder,
      errorNorm: node.errorNorm,
      gate: node.gate ?? null,
      recoveryLimits: node.recovery ?? [],
      equations: node.equations,
      provenance: node.provenance ?? null,
      readingLinks: node.readingLinks ?? [],
      url: `${baseUrl}/atlas?focus=${encodeURIComponent(node.id)}`,
    })),
    ...observableRoutes.map((route) => ({
      id: `atlas-route:${route.id}`,
      type: 'atlas-observable-route',
      title: route.label,
      description: route.description,
      output: route.output,
      stages: route.nodeIds.length,
      url: `${baseUrl}/atlas?focus=${encodeURIComponent(route.nodeIds.at(-1) ?? 'omega')}`,
    })),
  ];

  const edges: Array<{
    from: string;
    to: string;
    relation: string;
    [key: string]: unknown;
  }> = [];
  for (const publication of quantumPublications) {
    const publicationId = `paper:${publication.paperSlug}`;
    edges.push({ from: 'quantum-measurement', to: publicationId, relation: 'published-as' });
    const documents = listQuantumDocuments().filter((document) => document.publicationId === publication.id);
    documents.forEach((document, index) => {
      const documentId = `quantum:${document.publicationId}:${document.slug}`;
      edges.push({ from: publicationId, to: documentId, relation: 'contains-web-edition-part' });
      if (index < documents.length - 1) edges.push({ from: documentId, to: `quantum:${documents[index + 1].publicationId}:${documents[index + 1].slug}`, relation: 'reading-order' });
    });
    if (publication.id !== 'monograph') edges.push({ from: `paper:${quantumMonograph.paperSlug}`, to: publicationId, relation: 'companion-treatment', note: 'Independent publication provenance; statements and proofs retain their own hypotheses.' });
  }
  edges.push({ from: 'paper:source-readout-non-equivalence', to: 'quantum-measurement', relation: 'conceptual-context', note: 'The source/readout distinction motivates the programme; it does not derive the added physical premises.' });
  edges.push({ from: 'quantum-measurement', to: 'problem:quantum-measurement', relation: 'current-results-and-historical-provenance' });
  edges.push({ from: 'quantum-measurement', to: 'atlas:measurement-programme', relation: 'visualized-in' });
  edges.push({ from: 'quantum-measurement', to: 'quantum-atlas-guide', relation: 'explained-by' });
  // Monograph containment + reading order
  const monoItems = listMonographItems();
  for (let i = 0; i < monoItems.length; i++) {
    edges.push({
      from: 'monograph',
      to: `monograph:${monoItems[i].slug}`,
      relation: 'contains',
    });
    if (i < monoItems.length - 1) {
      edges.push({
        from: `monograph:${monoItems[i].slug}`,
        to: `monograph:${monoItems[i + 1].slug}`,
        relation: 'precedes',
      });
    }
  }
  // The fixed Version 1.0 monograph is broader programme context for the
  // canonical sequence (it predates the seven papers; its text is unchanged).
  for (const p of canonical) {
    edges.push({ from: 'monograph', to: `paper:${p.slug}`, relation: 'programme-context-for' });
  }
  // Canonical chain: Paper 1 -> 2 -> ... -> 7 (Paper 7 = physical witness)
  for (let i = 0; i < canonical.length - 1; i++) {
    edges.push({
      from: `paper:${canonical[i].slug}`,
      to: `paper:${canonical[i + 1].slug}`,
      relation: 'hands-off-to',
    });
  }
  // Papers supporting problems
  for (const p of papers) {
    for (const prob of p.supports) {
      if (publicProblemSlugs.has(prob)) {
        edges.push({ from: `paper:${p.slug}`, to: `problem:${prob}`, relation: 'supports' });
      }
    }
  }
  // Open problems branch downstream of the seven-paper foundation
  // (edges anchored at the final paper, the physical-witness layer).
  const capstone = canonical[canonical.length - 1];
  if (capstone) {
    for (const prob of problems.filter((p) => p.programme !== 'legacy' && p.slug !== 'quantum-measurement')) {
      edges.push({
        from: `paper:${capstone.slug}`,
        to: `problem:${prob.slug}`,
        relation: 'downstream-branch-target',
      });
    }
  }

  edges.push({ from: 'monograph', to: 'atlas', relation: 'architecture-visualized-by' });
  for (const node of atlasNodes) {
    edges.push({
      from: 'atlas',
      to: `atlas:${node.id}`,
      relation: 'contains-typed-node',
      levelOfDetail: node.lod,
    });
  }
  for (const atlasEdge of atlasEdges) {
    edges.push({
      id: `atlas-edge:${atlasEdge.id}`,
      from: `atlas:${atlasEdge.from}`,
      to: `atlas:${atlasEdge.to}`,
      relation: `atlas-${atlasEdge.kind}`,
      relationship: atlasEdge.relationship,
      label: atlasEdge.label,
      map: atlasEdge.map,
      domain: atlasEdge.domain,
      codomain: atlasEdge.codomain,
      linearization: atlasEdge.linearization,
      adjoint: atlasEdge.adjoint,
      validityDomain: atlasEdge.validityDomain,
      verifier: atlasEdge.verifier,
      errorModel: atlasEdge.errorModel,
      partial: atlasEdge.partial,
    });
  }
  for (const route of observableRoutes) {
    const routeId = `atlas-route:${route.id}`;
    edges.push({ from: 'atlas', to: routeId, relation: 'offers-observable-trace' });
    route.nodeIds.forEach((nodeId, order) => {
      edges.push({
        from: routeId,
        to: `atlas:${nodeId}`,
        relation: 'trace-step',
        order,
      });
    });
  }

  return {
    name: site.name,
    description: site.description,
    url: baseUrl,
    generated: 'build-time',
    authority: {
      canonicalStack: site.canonicalStack,
      note: 'Papers 1-7 (published 2026-07-15) are the source-readout foundation; Paper 7 is the physical witness. The September 2026 Version 2 Quantum Measurement publications control their own constitutive results and are not deductions of their physical premises from source/readout loss. Superseded June 2026 papers and historical quantum notes remain archival records. The TOE Version 1.0 monograph retains its own fixed text.',
    },
    atlas: {
      contract: 'Every node declares its type, domain, codomain, regularity, covariance, units, interfaces and recovery limits; every map declares its verifier. The relationship field distinguishes mathematical dependence inside stated premises from conceptual relationships.',
      forwardPath: 'source preparation -> aperture selection -> canonical field -> coupled Tier-1 closure -> observable',
      reversePath: 'observable -> ordered trace route -> residual source-producing structure',
      url: `${baseUrl}/atlas`,
    },
    nodes,
    edges,
  };
}
