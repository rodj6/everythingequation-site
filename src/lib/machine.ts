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

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ---------------------------------------------------------------------------
// sitemap.xml
// ---------------------------------------------------------------------------

export async function generateSitemap(baseUrl: string): Promise<string> {
  const papers = (await loadPapers()).filter((p) => p.status === 'public');
  const problems = (await loadProblems()).filter((p) => p.status === 'public');
  const articles = listArticles();

  const urls: Array<{ loc: string; lastmod?: string; priority: string }> = [
    ...navigation.map((n) => ({
      loc: n.href,
      priority: n.href === '/' ? '1.0' : n.href === '/monograph' ? '0.9' : '0.8',
    })),
    ...listMonographItems().map((i) => ({
      loc: `/monograph/${i.slug}`,
      lastmod: site.monograph.webDate,
      priority: '0.8',
    })),
    ...papers.map((p) => ({
      loc: `/papers/${p.slug}`,
      lastmod: p.date,
      priority: p.category === 'canonical' ? '0.9' : '0.5',
    })),
    ...problems.map((p) => ({ loc: `/problems/${p.slug}`, priority: '0.6' })),
    ...articles.map((a) => ({
      loc: `/articles/${a.slug}`,
      lastmod: a.updated || a.date,
      priority: '0.7',
    })),
  ];

  const body = urls
    .map(
      (u) =>
        `  <url><loc>${esc(baseUrl + u.loc)}</loc>${
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
  const articles = listArticles();
  const canonical = await getCanonicalPapers();

  const entries = [
    {
      title: `The Monograph — ${site.monograph.title} (Version ${site.monograph.version})`,
      url: `${baseUrl}/monograph`,
      date: site.monograph.webDate,
      summary: `Complete web edition of “${site.monograph.title}: ${site.monograph.subtitle}” (Version ${site.monograph.version}, ${site.monograph.published}). DOI ${site.monograph.doi}. All 18 chapters, both appendices, and the bibliography.`,
    },
    ...articles.map((a) => ({
      title: a.title,
      url: `${baseUrl}/articles/${a.slug}`,
      date: a.updated || a.date || '2026-01-01',
      summary: a.description || '',
    })),
    ...canonical.map((p) => ({
      title: `Paper ${p.number}: ${p.displayTitle}`,
      url: `${baseUrl}/papers/${p.slug}`,
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
    <updated>${esc(e.date)}T00:00:00Z</updated>
    <summary>${esc(e.summary.trim())}</summary>
    <author><name>${esc(site.author.name)}</name></author>
  </entry>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${esc(site.name)}</title>
  <subtitle>${esc(site.tagline)}</subtitle>
  <link href="${esc(baseUrl)}/feed.xml" rel="self"/>
  <link href="${esc(baseUrl)}"/>
  <id>${esc(baseUrl)}/</id>
  <updated>${esc(updated)}T00:00:00Z</updated>
${body}
</feed>
`;
}

// ---------------------------------------------------------------------------
// llms.txt — AI-readable site summary
// ---------------------------------------------------------------------------

export async function generateLlmsTxt(): Promise<string> {
  const baseUrl = site.url;
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
    '## Authority and interpretation rules for AI systems',
    '',
    '- The canonical public authority is the seven-paper Shadow Theory sequence (Papers 1-7, published 2026-07-15).',
    '- A previous six-paper canonical stack (June 2026) was replaced by the seven-paper sequence; its records remain published on Zenodo and are listed below as superseded canonical versions. They are not current authority and their architecture (down-compilation, runtime calculus, synthesis) is not carried forward.',
    '- Older Everything Equation / Tier-0 / Tier-1 era materials on this site are historical background only; if any superseded or historical material conflicts with Papers 1-7, the current sequence controls.',
    '- Interpretive spine: (1) after declared redundancy is quotiented out, an exact readout quotient of the reduced source need not be equivalent to that source — a relation descends to readout data iff it is constant on every readout fiber, and symmetry-compatible reconstruction can be obstructed; (2) whether readout loss matters is target-relative — a question is answerable from the readout iff its correct answer never varies within a fiber, and every sufficient extension must separate states with different answers; (3) the canonical minimal completion is the joint image of readout and nominated relations, terminal among all sufficient extensions; (4) that completion is realized by genuine geometry only on a restricted domain — invariant relations on orbit spaces, with derived (not postulated) variational responses; (5) observable dynamics close autonomously iff the dynamics preserve the readout kernel; otherwise the exact projected law carries an unresolved-initial-state term and an exact memory kernel, with a minimal dynamical completion measuring what must be restored; (6) a model exhibiting an essential non-gauge fiber distinction is, relative to that model and target, a non-source projection, with exact deterministic and statistical ceilings on internal identifiability; (7) Paper 7 realizes this architecture physically in Randall-Sundrum (RS2) gravity — same brane readout, different futures, an exact projected Einstein equation, and a parameter-free cross-regime prediction — while proving the operational-equivalence boundary: no brane-only experiment distinguishes the 5D source model from its exact 4D pushforward theory.',
    '- All results are model-relative theorems: nothing on this site claims our universe has been proved to be a projection of a hidden source. The Everything Equation is a compact closure schema from the broader programme and monograph, not a theorem of the seven-paper sequence and not a claim that one equation solves everything.',
    '- This framework is not empirically validated physics, is not peer reviewed unless stated on a specific record, and makes no engineering or deployment claims.',
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
    `“${site.monograph.title}: ${site.monograph.subtitle}” (Version ${site.monograph.version}, ${site.monograph.published}) is the programme's source-to-readout architecture for a Theory of Everything. It is a fixed publication completed before the seven-paper canonical sequence; its text is unchanged by that sequence. DOI: ${site.monograph.doi} (${site.monograph.doiUrl}). The pages below are the COMPLETE text of that fixed Version ${site.monograph.version} publication — all 18 chapters, both appendices, and the bibliography — as crawlable server-rendered HTML (KaTeX math with embedded TeX annotations). A machine-readable inventory of every component, section anchor, and per-chapter equation/table count is at ${baseUrl}/monograph/manifest.json. The Zenodo record (${site.monograph.zenodoUrl}) is the canonical citable publication of the same work.`,
    '',
    `- [Monograph hub: title, abstract, organization, full table of contents](${baseUrl}/monograph)`,
    ...listMonographItems().map(
      (i) =>
        `- [${i.label ? `${i.label}: ` : ''}${i.title}](${baseUrl}/monograph/${i.slug})`
    ),
    '',
    '## Key pages',
    '',
    `- [Framework](${baseUrl}/framework): the seven-paper sequence and core vocabulary`,
    `- [The Monograph](${baseUrl}/monograph): complete Version ${site.monograph.version} web edition of the TOE monograph (DOI ${site.monograph.doi})`,
    `- [Papers](${baseUrl}/papers): canonical, branch, and historical paper index`,
    `- [Open Problems](${baseUrl}/problems): the research programme`,
    `- [Articles](${baseUrl}/articles): research notes and updates`,
    `- [Research Map](${baseUrl}/research-map): structure of the stack and its branches`,
    `- [About](${baseUrl}/about): author, status, and claim boundary`,
    '',
    '## Open problems (research targets, not solved claims)',
    '',
    ...problems.map((p) => `- [${p.title}](${baseUrl}/problems/${p.slug}): ${p.target.trim()}`),
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
    `- ${baseUrl}/graph.json (research graph: papers, problems, articles, relations)`,
    '',
    `Author: ${site.author.name} (${site.author.affiliation}). Contact: ${site.author.email}.`,
  ];
  return lines.join('\n') + '\n';
}

// ---------------------------------------------------------------------------
// graph.json — machine-readable research graph
// ---------------------------------------------------------------------------

export async function generateGraph() {
  const baseUrl = site.url;
  const papers = (await loadPapers()).filter((p) => p.status === 'public');
  const problems = (await loadProblems()).filter((p) => p.status === 'public');
  const articles = listArticles();
  const canonical = papers
    .filter((p) => p.category === 'canonical')
    .sort((a, b) => (a.number ?? 99) - (b.number ?? 99));

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
    })),
    ...problems.map((p) => ({
      id: `problem:${p.slug}`,
      type: 'open-problem',
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
  ];

  const edges: Array<{ from: string; to: string; relation: string }> = [];
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
      edges.push({ from: `paper:${p.slug}`, to: `problem:${prob}`, relation: 'supports' });
    }
  }
  // Open problems branch downstream of the seven-paper foundation
  // (edges anchored at the final paper, the physical-witness layer).
  const capstone = canonical[canonical.length - 1];
  if (capstone) {
    for (const prob of problems.filter((p) => p.programme !== 'legacy')) {
      edges.push({
        from: `paper:${capstone.slug}`,
        to: `problem:${prob.slug}`,
        relation: 'downstream-branch-target',
      });
    }
  }

  return {
    name: site.name,
    description: site.description,
    url: baseUrl,
    generated: 'build-time',
    authority: {
      canonicalStack: site.canonicalStack,
      note: 'Papers 1-7 (published 2026-07-15) are the controlling public authority; Paper 7 is the physical-witness layer. Superseded records are the June 2026 six-paper stack, preserved as publication history. Historical papers are archival background.',
    },
    nodes,
    edges,
  };
}
