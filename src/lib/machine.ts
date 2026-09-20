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
import { consciousnessPublication } from '@/config/consciousness';
import { listConsciousnessDocuments, listConsciousnessGuides } from '@/lib/consciousness';
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
          : n.href === '/monograph' || n.href === '/atlas' || n.href === '/quantum-measurement' || n.href === '/consciousness'
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
    ...['/consciousness/monograph', '/consciousness/guides', '/consciousness/glossary', '/consciousness/faq'].map(loc => ({ loc, lastmod: consciousnessPublication.published, priority: '0.8' })),
    ...listConsciousnessDocuments().map(document => ({ loc: document.url, lastmod: consciousnessPublication.published, priority: '0.8' })),
    ...listConsciousnessGuides().map(guide => ({ loc: `/consciousness/guides/${guide.slug}`, lastmod: consciousnessPublication.published, priority: '0.8' })),
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
    {
      title: `${consciousnessPublication.title} (Version ${consciousnessPublication.version})`,
      url: `${canonicalBase}${consciousnessPublication.webUrl}`,
      date: consciousnessPublication.published,
      summary: `${consciousnessPublication.description} Complete monograph, eight explanatory guides, PDF, source and Markdown. DOI ${consciousnessPublication.doi}. ${consciousnessPublication.versionNote}`,
    },
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
    '- Shadow Theory and Consciousness (20 September 2026, Version 2) supplies the current SPC-2 consciousness constitution. It supersedes the earlier Consciousness Field account, whose fixed-point/EEG claim inventory is historical and must not be merged with SPC-2.',
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
    '## Consciousness: SPC-2 (current Version 2 publication)',
    '',
    `${consciousnessPublication.title}. Version ${consciousnessPublication.version}, ${consciousnessPublication.published}. ${consciousnessPublication.author}, ${consciousnessPublication.authorRole}. DOI: ${consciousnessPublication.doiUrl}. ${consciousnessPublication.status}`,
    consciousnessPublication.versionNote,
    'A0 is an awareness-aspect commitment; A1 assigns qualifying perspectives; A2 assigns the full endogenous predictive structure across all admitted finite native continuations; A3 specifies nonbranching process continuation. These laws require certified realization and a declared selection doctrine. The finite completion theorem is conditional on these inputs, not a derivation of them.',
    'Awareness, localized subject, scene, person, memory and report are distinct. A1 retains permissive certified minimal cases; intelligent dialogue or a graph cycle alone does not certify an artificial subject. Failed recall and nonresponse do not establish a scene-less gap. Quantum antecedents retain their own assumptions and do not use consciousness to cause events. The monograph reports no new neural-data validation.',
    `- [Accessible account from beginning to end](${baseUrl}/consciousness)`,
    `- [Complete scholarly edition](${baseUrl}${consciousnessPublication.webUrl})`,
    `- [PDF](${baseUrl}${consciousnessPublication.pdfUrl}) · [Matching LaTeX source](${baseUrl}${consciousnessPublication.texUrl}) · [Full-book Markdown](${baseUrl}${consciousnessPublication.markdownUrl})`,
    `- [Inventory, source locators and format links](${baseUrl}${consciousnessPublication.manifestUrl})`,
    `- [Section search](${baseUrl}/consciousness/search.json): one mathematical representation per search snippet`,
    '',
    '### Complete consciousness reading order',
    ...listConsciousnessDocuments().map(document => `- [${document.label ? `${document.label}: ` : ''}${document.title}](${baseUrl}${document.url}) · [Markdown](${baseUrl}${document.markdownUrl})${document.source ? ` · supplied PDF pages ${document.source.pdfPage}–${document.source.pdfEndPage}` : ''}`),
    '',
    '### Consciousness explanatory guides',
    ...listConsciousnessGuides().map(guide => `- [${guide.title}](${baseUrl}/consciousness/guides/${guide.slug}): ${guide.description}`),
    `- [Glossary](${baseUrl}/consciousness/glossary): stable term anchors and source links`,
    `- [FAQ](${baseUrl}/consciousness/faq): current account, AI, minimal systems, quantum observation and continuity`,
    `- [Research status](${baseUrl}/problems/consciousness): conditional results and open realization/validation obligations`,
    `- [Subordinate historical notes](${baseUrl}${consciousnessPublication.historyUrl}): superseded predecessor, not SPC-2 evidence`,
    '',
    '## Key pages',
    '',
    `- [Framework](${baseUrl}/framework): the seven-paper sequence and core vocabulary`,
    `- [Reality Atlas](${baseUrl}/atlas): interactive source-to-observable model with ${atlasStats.representedNodes} typed structures, ${atlasStats.representedEdges} maps, equation-level navigation and reversible observable traces`,
    `- [The Monograph](${baseUrl}/monograph): complete Version ${site.monograph.version} web edition of the TOE monograph (DOI ${site.monograph.doi})`,
    `- [Quantum Measurement](${baseUrl}/quantum-measurement): two constitutive completions, physical records, Born statistics, accessible explanations and full technical reading paths`,
    `- [Consciousness](${baseUrl}/consciousness): SPC-2, awareness, perspectives, lived scenes and process continuation; complete book and explanatory guides`,
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
    `- ${baseUrl}/consciousness/manifest.json (current SPC-2 publication, ordered chapters, appendices, guides, stable anchors and source formats)`,
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
      status: p.supersededBy ? 'superseded' : p.category === 'historical' || p.category === 'superseded' ? 'historical' : 'current',
      supersededBy: p.supersededBy ? `paper:${p.supersededBy}` : null,
      number: p.number ?? null,
      title: p.displayTitle,
      role: p.role ?? null,
      version: p.version ?? null,
      date: p.date ?? null,
      doi: p.doi ?? null,
      zenodo: p.zenodoId ?? null,
      url: `${baseUrl}/papers/${p.slug}`,
      webEdition: p.webUrl ? `${baseUrl}${p.webUrl}` : null,
      downloads: p.pdfUrl ? { pdf: `${baseUrl}${p.pdfUrl}`, ...(p.texUrl ? { latex: `${baseUrl}${p.texUrl}` } : {}), ...(p.markdownUrl ? { markdown: `${baseUrl}${p.markdownUrl}` } : {}) } : null,
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
      id: 'consciousness', type: 'research-programme', title: consciousnessPublication.shortTitle,
      date: consciousnessPublication.published, version: consciousnessPublication.version,
      status: 'current; candidate internal constitutive resolution under declared assumptions',
      constitution: consciousnessPublication.constitution,
      url: `${baseUrl}/consciousness`, manifest: `${baseUrl}${consciousnessPublication.manifestUrl}`,
      scope: 'Certified realization and its selection doctrine are inputs. Conditional finite completion is distinct from realization selection and empirical assessment.',
    },
    ...listConsciousnessDocuments().map(document => ({
      id: `consciousness:${document.slug}`, type: 'consciousness-web-edition-part',
      title: document.title, label: document.label, kind: document.kind, order: document.order,
      url: `${baseUrl}${document.url}`, sections: document.sections, stats: document.stats,
      source: document.source ?? null, markdown: `${baseUrl}${document.markdownUrl}`,
    })),
    ...listConsciousnessGuides().map(guide => ({
      id: `consciousness-guide:${guide.slug}`, type: 'explanatory-article', title: guide.title,
      description: guide.description, url: `${baseUrl}/consciousness/guides/${guide.slug}`,
      sections: guide.sections.map(section => ({ anchor: section.id, title: section.title })),
    })),
    ...[
      { id: 'A0', title: 'Awareness-aspect commitment', status: 'constitutive premise', section: '17-1' },
      { id: 'A1', title: 'Perspective admission', status: 'constitutive premise', section: '17-2' },
      { id: 'A2', title: 'Full endogenous predictive content', status: 'constitutive premise', section: '17-3' },
      { id: 'A3', title: 'Nonbranching process continuation', status: 'constitutive premise', section: '17-4' },
    ].map(law => ({ id: `spc-2:${law.id}`, type: 'constitutive-law', title: law.title, status: law.status,
      url: `${baseUrl}/consciousness/monograph/the-shadow-psychophysical-constitution#section-${law.section}` })),
    { id: 'spc-2:realization', type: 'required-input', title: 'Certified realization and selection doctrine', status: 'realization obligation', url: `${baseUrl}/consciousness/monograph/the-realized-domain-and-its-boundaries` },
    { id: 'spc-2:completion', type: 'conditional-theorem', title: 'Finite constitutive completion', status: 'conditional result', url: `${baseUrl}/consciousness/monograph/completion-invariance-and-empirical-conservativity#section-18-1` },
    { id: 'spc-2:validation', type: 'research-obligation', title: 'Identification and empirical assessment', status: 'open validation question', url: `${baseUrl}/consciousness/monograph/evidence-identification-and-discriminating-tests` },
    { id: 'consciousness:historical-notes', type: 'historical-notes', title: 'Earlier Consciousness Field notes', status: 'superseded', url: `${baseUrl}${consciousnessPublication.historyUrl}` },
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
  edges.push({ from: 'consciousness', to: `paper:${consciousnessPublication.paperSlug}`, relation: 'published-as' });
  edges.push({ from: `paper:${consciousnessPublication.predecessorPaperSlug}`, to: `paper:${consciousnessPublication.paperSlug}`, relation: 'superseded-by', note: 'Author-confirmed version lineage; historical claim inventory is not merged into SPC-2.' });
  edges.push({ from: `paper:${consciousnessPublication.predecessorPaperSlug}`, to: 'consciousness:historical-notes', relation: 'historical-exposition' });
  edges.push({ from: 'consciousness', to: 'problem:consciousness', relation: 'current-results-and-open-obligations' });
  for (const law of ['A0', 'A1', 'A2', 'A3']) {
    edges.push({ from: 'consciousness', to: `spc-2:${law}`, relation: 'declares-constitutive-premise' });
    edges.push({ from: `spc-2:${law}`, to: 'spc-2:completion', relation: 'premise-of', note: 'The completion result is conditional on the constitution; it does not derive the law.' });
  }
  edges.push({ from: 'spc-2:realization', to: 'spc-2:completion', relation: 'required-input-to' });
  edges.push({ from: 'consciousness', to: 'spc-2:validation', relation: 'retains-open-obligation' });
  for (const publication of quantumPublications) edges.push({ from: `paper:${publication.paperSlug}`, to: 'consciousness', relation: 'physical-antecedent', note: 'Related physical reading with its own assumptions; not a consciousness companion or a consciousness-triggered event law.' });
  const consciousnessDocuments = listConsciousnessDocuments();
  consciousnessDocuments.forEach((document, index) => {
    edges.push({ from: `paper:${consciousnessPublication.paperSlug}`, to: `consciousness:${document.slug}`, relation: 'contains-web-edition-part' });
    if (index < consciousnessDocuments.length - 1) edges.push({ from: `consciousness:${document.slug}`, to: `consciousness:${consciousnessDocuments[index + 1].slug}`, relation: 'reading-order' });
  });
  for (const guide of listConsciousnessGuides()) edges.push({ from: 'consciousness', to: `consciousness-guide:${guide.slug}`, relation: 'explained-by' });
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
    for (const prob of problems.filter((p) => p.programme !== 'legacy' && p.slug !== 'quantum-measurement' && p.slug !== 'consciousness')) {
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
      note: 'Papers 1-7 (published 2026-07-15) are the source-readout foundation; Paper 7 is the physical witness. The September 2026 Version 2 Quantum Measurement publications control their own constitutive results and are not deductions of their physical premises from source/readout loss. Shadow Theory and Consciousness (20 September 2026, Version 2) is the current SPC-2 constitution, superseding the Consciousness Field account without inheriting its fixed-point or EEG claims. Its finite completion theorem is conditional on certified realization, selection doctrine and A0–A3. Superseded and historical publications remain archival records. The TOE Version 1.0 monograph retains its own fixed text.',
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
