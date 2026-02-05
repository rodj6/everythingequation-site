import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';

export type ProblemStatus = 'draft' | 'public';
export type PaperStatus = 'draft' | 'public';

export interface ProblemEntry {
  id: string;
  title: string;
  claim: string;
  statement?: string;
  papers?: string[];
  connections?: string[];
  monograph?: string;
  status: ProblemStatus;
}

export interface PaperEntry {
  id: string;
  title: string;
  doi?: string;
  zenodoId?: string;
  authors?: string[];
  problems?: string[];
  role?: string;
  monograph?: string;
  status: PaperStatus;
}

export interface ZenodoMetadata {
  id: string;
  doi?: string;
  title?: string;
  url?: string;
  creators?: string[];
  description?: string;
  published?: string;
  files?: Array<{ filename: string; url: string }>;
}

export interface LoadedProblem extends ProblemEntry {
  manualPath: string | null;
}

export interface LoadedPaper extends PaperEntry {
  metadata: ZenodoMetadata | null;
  manualPath: string | null;
}

const ROOT = process.cwd();

/**
 * Load a YAML file relative to the project root.
 */
async function loadYamlFile<T>(relPath: string): Promise<T[]> {
  const fullPath = path.join(ROOT, relPath);
  const source = await fs.readFile(fullPath, 'utf8');
  const doc = yaml.load(source);
  if (Array.isArray(doc)) {
    return doc as unknown as T[];
  }
  return [];
}

/**
 * Load or initialise the Zenodo metadata cache. The cache is a map from
 * paper ID (slug) to the retrieved Zenodo metadata. The cache file lives
 * under `.cache/zenodo.json`. If it does not exist, an empty cache is
 * returned.
 */
async function loadZenodoCache(): Promise<Record<string, ZenodoMetadata>> {
  try {
    const cachePath = path.join(ROOT, '.cache/zenodo.json');
    const contents = await fs.readFile(cachePath, 'utf8');
    return JSON.parse(contents) as Record<string, ZenodoMetadata>;
  } catch (err) {
    return {};
  }
}

async function saveZenodoCache(cache: Record<string, ZenodoMetadata>): Promise<void> {
  const cachePath = path.join(ROOT, '.cache/zenodo.json');
  await fs.mkdir(path.dirname(cachePath), { recursive: true });
  await fs.writeFile(cachePath, JSON.stringify(cache, null, 2), 'utf8');
}

/**
 * Fetch metadata for a Zenodo record given its record ID or DOI. This
 * function calls the Zenodo API and returns a subset of the metadata
 * fields we care about. If the fetch fails for any reason the function
 * returns null.
 */
async function fetchZenodo(record: string): Promise<ZenodoMetadata | null> {
  try {
    const idNumber = record.match(/^\d+$/) ? record : undefined;
    const endpoint = idNumber
      ? `https://zenodo.org/api/records/${idNumber}`
      : `https://zenodo.org/api/records/?doi=${encodeURIComponent(record)}`;
    const res = await fetch(endpoint, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    const data = await res.json();
    // If we looked up by DOI the API returns an array of hits under hits.hits
    const recordData: any = Array.isArray(data?.hits?.hits) ? data.hits.hits[0] : data;
    if (!recordData) return null;
    const files = (recordData?.files || []).map((f: any) => ({ filename: f.key || f.filename, url: f.links.self }));
    const creators = (recordData?.metadata?.creators || []).map((c: any) => c.name || `${c.given_name} ${c.family_name}`);
    return {
      id: recordData.id?.toString() ?? record,
      doi: recordData?.metadata?.doi ?? recordData.doi ?? undefined,
      title: recordData?.metadata?.title,
      url: recordData?.links?.html,
      creators,
      description: recordData?.metadata?.description,
      published: recordData?.metadata?.publication_date,
      files,
    } as ZenodoMetadata;
  } catch (err) {
    return null;
  }
}

/**
 * Load and merge Zenodo metadata for the given papers. If metadata is
 * missing or outdated, fetch it from the network and update the cache.
 * Returns the loaded papers augmented with their Zenodo data and manual
 * MDX paths. When running inside Next.js build the network calls will be
 * executed server‑side.
 */
export async function loadPapers(): Promise<LoadedPaper[]> {
  const entries = await loadYamlFile<PaperEntry>('content/papers.yaml');
  const cache = await loadZenodoCache();
  let changed = false;
  const loaded: LoadedPaper[] = [];
  for (const entry of entries) {
    let metadata: ZenodoMetadata | null = null;
    const key = entry.id;
    // Determine which record identifier to use.
    const record = entry.zenodoId || entry.doi;
    if (record) {
      // Use cached metadata if available.
      if (cache[key]) {
        metadata = cache[key];
      } else {
        metadata = await fetchZenodo(record);
        if (metadata) {
          cache[key] = metadata;
          changed = true;
        }
      }
    }
    // Compute manual MDX path if present.
    const manualPath = await resolveManualPath('papers', entry.id);
    loaded.push({ ...entry, metadata, manualPath });
  }
  // Save cache if there were modifications.
  if (changed) {
    await saveZenodoCache(cache);
  }
  return loaded;
}

export async function loadProblems(): Promise<LoadedProblem[]> {
  const entries = await loadYamlFile<ProblemEntry>('content/problems.yaml');
  const loaded: LoadedProblem[] = [];
  for (const entry of entries) {
    const manualPath = await resolveManualPath('problems', entry.id);
    loaded.push({ ...entry, manualPath });
  }
  return loaded;
}

async function resolveManualPath(category: 'problems' | 'papers', slug: string): Promise<string | null> {
  const possible = path.join(ROOT, `content/manual/${category}/${slug}.mdx`);
  try {
    await fs.access(possible);
    return possible;
  } catch {
    return null;
  }
}

/**
 * Generate a simple site graph capturing the relationships between
 * problems and papers. Only public entries are included. The graph
 * conforms loosely to the JSON‑LD `@graph` structure used by schema.org.
 */
export async function generateGraph() {
  const problems = await loadProblems();
  const papers = await loadPapers();
  const graph: any[] = [];
  for (const prob of problems) {
    if (prob.status !== 'public') continue;
    graph.push({
      '@type': 'Thing',
      '@id': `/problems/${prob.id}`,
      name: prob.title,
      description: prob.claim,
    });
  }
  for (const paper of papers) {
    if (paper.status !== 'public') continue;
    graph.push({
      '@type': 'ScholarlyArticle',
      '@id': `/papers/${paper.id}`,
      name: paper.title,
      url: paper.metadata?.url ?? null,
      doi: paper.metadata?.doi ?? paper.doi ?? null,
      creator: paper.metadata?.creators ?? paper.authors ?? [],
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

/**
 * Generate the llms.txt content. This simple text file enumerates
 * public resources in a human‑readable format to aid large language
 * models in discovering the site’s scope. Each line contains the type
 * and slug of the resource.
 */
export async function generateLlmsTxt(): Promise<string> {
  const problems = await loadProblems();
  const papers = await loadPapers();
  const lines: string[] = [];
  lines.push('# List of public resources for Everything Equation');
  for (const p of problems) {
    if (p.status === 'public') {
      lines.push(`problem ${p.id}`);
    }
  }
  for (const p of papers) {
    if (p.status === 'public') {
      lines.push(`paper ${p.id}`);
    }
  }
  return lines.join('\n');
}

/**
 * Generate an XML sitemap including all publicly accessible pages. Each
 * URL is listed with a weekly change frequency. Only public problems
 * and papers are included; draft entries are omitted.
 */
export async function generateSitemap(baseUrl: string): Promise<string> {
  const problems = await loadProblems();
  const papers = await loadPapers();
  const urls: string[] = [];
  // Static routes
  const staticRoutes = ['/', '/problems', '/papers', '/monograph', '/research-intelligence', '/about'];
  for (const route of staticRoutes) {
    urls.push(route);
  }
  for (const prob of problems) {
    if (prob.status === 'public') {
      urls.push(`/problems/${prob.id}`);
    }
  }
  for (const paper of papers) {
    if (paper.status === 'public') {
      urls.push(`/papers/${paper.id}`);
    }
  }
  const lastmod = new Date().toISOString();
  const sitemapItems = urls
    .map((url) => {
      return `  <url>\n    <loc>${baseUrl}${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n  </url>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapItems}\n</urlset>`;
}

/**
 * Generate a minimal Atom feed for the site. Each public paper is
 * represented as an entry with its title, link and publication date
 * (if available). Problems are not included in the feed. The feed
 * identifies the site as the author.
 */
export async function generateFeed(baseUrl: string): Promise<string> {
  const papers = await loadPapers();
  const feedId = `${baseUrl}/`; 
  const updated = new Date().toISOString();
  const entries: string[] = [];
  for (const paper of papers) {
    if (paper.status !== 'public') continue;
    const link = `${baseUrl}/papers/${paper.id}`;
    const pubDate = paper.metadata?.published ?? updated;
    entries.push(
      `  <entry>\n    <id>${link}</id>\n    <title>${escapeXml(paper.title)}</title>\n    <updated>${pubDate}</updated>\n    <link href="${link}" />\n    <summary>${escapeXml(paper.metadata?.description ?? '')}</summary>\n  </entry>`
    );
  }
  return `<?xml version="1.0" encoding="UTF-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom">\n  <id>${feedId}</id>\n  <title>Everything Equation Publications</title>\n  <updated>${updated}</updated>\n  <link href="${baseUrl}/feed.xml" rel="self" />\n  <author>\n    <name>Everything Equation</name>\n  </author>\n${entries.join('\n')}\n</feed>`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}