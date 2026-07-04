/**
 * CONTENT REGISTRY LOADER
 *
 * Reads content/papers.yaml and content/problems.yaml, merges cached Zenodo
 * metadata (.cache/zenodo.json), and exposes typed loaders used by every page.
 *
 * You normally never need to edit this file. To change site content, edit
 * the YAML registries and MDX files under content/ instead.
 */
import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export type Visibility = 'draft' | 'public';
export type PaperCategory = 'canonical' | 'branch' | 'historical';
export type Programme = 'featured' | 'additional' | 'legacy';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

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

export interface LoadedPaper {
  /** URL slug: /papers/<slug> */
  slug: string;
  /** Original registry identifier (e.g. paper:shadow:1 or paper:zenodo:123). */
  rawId: string;
  /** 1-6 for the canonical stack; undefined otherwise. */
  number?: number;
  category: PaperCategory;
  status: Visibility;
  featured: boolean;
  /** Explicit title from YAML (canonical papers) — falls back to Zenodo title. */
  title?: string;
  subtitle?: string;
  role?: string;
  summary?: string;
  version?: string;
  date?: string;
  zenodoId?: string;
  doi?: string;
  /** Problem slugs this paper supports. */
  supports: string[];
  /** Cached Zenodo metadata, when available. */
  metadata: ZenodoMetadata | null;
  /** Whether a manual notes MDX exists at content/manual/papers/<slug>.mdx */
  hasNotes: boolean;
  /** Best display title (YAML title, else Zenodo title, else role, else slug). */
  displayTitle: string;
  /** Resolved DOI link if a DOI is known. */
  doiUrl: string | null;
  /** Resolved Zenodo record link if a record ID is known. */
  zenodoUrl: string | null;
}

export interface LoadedProblem {
  slug: string;
  rawId: string;
  title: string;
  domain?: string;
  programme: Programme;
  status: Visibility;
  maturity?: string;
  legacyNotes: boolean;
  /** Neutral statement of the research target. */
  target: string;
  /** Whether a manual notes MDX exists at content/manual/problems/<slug>.mdx */
  hasNotes: boolean;
}

// ---------------------------------------------------------------------------
// Internals
// ---------------------------------------------------------------------------

const ROOT = process.cwd();
const CACHE_PATH = path.join(ROOT, '.cache/zenodo.json');

async function loadZenodoCache(): Promise<Record<string, ZenodoMetadata>> {
  try {
    return JSON.parse(await fs.readFile(CACHE_PATH, 'utf8'));
  } catch {
    return {};
  }
}

async function saveZenodoCache(cache: Record<string, ZenodoMetadata>): Promise<void> {
  await fs.mkdir(path.dirname(CACHE_PATH), { recursive: true });
  await fs.writeFile(CACHE_PATH, JSON.stringify(cache, null, 2), 'utf8');
}

/**
 * Fetch metadata for a Zenodo record. Never throws; returns null on any
 * failure so builds succeed offline. A 5s timeout keeps builds fast.
 * Set SKIP_ZENODO=1 to skip all network fetches (cache-only builds).
 */
export async function fetchZenodo(record: string): Promise<ZenodoMetadata | null> {
  if (process.env.SKIP_ZENODO === '1') return null;
  try {
    const isId = /^\d+$/.test(record);
    const endpoint = isId
      ? `https://zenodo.org/api/records/${record}`
      : `https://zenodo.org/api/records/?q=doi:%22${encodeURIComponent(record)}%22`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(endpoint, { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = await res.json();
    const rec: any = Array.isArray(data?.hits?.hits) ? data.hits.hits[0] : data;
    if (!rec) return null;
    return {
      id: rec.id?.toString() ?? record,
      doi: rec?.metadata?.doi ?? rec.doi ?? undefined,
      title: rec?.metadata?.title,
      url: rec?.links?.html,
      creators: (rec?.metadata?.creators || []).map(
        (c: any) => c.name || `${c.given_name ?? ''} ${c.family_name ?? ''}`.trim()
      ),
      description: rec?.metadata?.description,
      published: rec?.metadata?.publication_date,
      files: (rec?.files || []).map((f: any) => ({
        filename: f.key || f.filename,
        url: f?.links?.self,
      })),
    };
  } catch {
    return null;
  }
}

function hasManual(kind: 'papers' | 'problems' | 'pages', slug: string): boolean {
  return existsSync(path.join(ROOT, 'content', 'manual', kind, `${slug}.mdx`));
}

// ---------------------------------------------------------------------------
// Papers
// ---------------------------------------------------------------------------

let papersPromise: Promise<LoadedPaper[]> | null = null;

async function loadPapersUncached(): Promise<LoadedPaper[]> {
  const source = await fs.readFile(path.join(ROOT, 'content/papers.yaml'), 'utf8');
  const doc = yaml.load(source) as any;
  const items: any[] = Array.isArray(doc) ? doc : doc?.papers ?? [];
  const cache = await loadZenodoCache();
  let cacheChanged = false;

  const loaded: LoadedPaper[] = [];
  for (const raw of items) {
    const rawId: string = raw.id || '';
    let slug: string = raw.slug || rawId.replace(/^paper:/, '').replace(/:/g, '-');
    const zenodoId: string | undefined = raw.zenodo != null ? String(raw.zenodo) : undefined;

    // Zenodo metadata: cache first, network as fallback (never fatal).
    let metadata: ZenodoMetadata | null = null;
    if (zenodoId) {
      if (cache[slug]) {
        metadata = cache[slug];
      } else {
        metadata = await fetchZenodo(zenodoId);
        if (metadata) {
          cache[slug] = metadata;
          cacheChanged = true;
        }
      }
    }

    const doi: string | undefined = raw.doi ?? metadata?.doi ?? undefined;
    const title: string | undefined = raw.title ?? metadata?.title ?? undefined;
    const category: PaperCategory =
      raw.category === 'canonical' || raw.category === 'branch'
        ? raw.category
        : 'historical';

    loaded.push({
      slug,
      rawId,
      number: typeof raw.number === 'number' ? raw.number : undefined,
      category,
      status: raw.visibility === 'public' ? 'public' : 'draft',
      featured: Boolean(raw.featured),
      title,
      subtitle: raw.subtitle,
      role: raw.role,
      summary: raw.summary,
      version: raw.version,
      date: raw.date ?? metadata?.published,
      zenodoId,
      doi,
      supports: Array.isArray(raw.supports)
        ? raw.supports.map((p: any) =>
            typeof p === 'string' && p.startsWith('problem:') ? p.slice(8) : String(p)
          )
        : [],
      metadata,
      hasNotes: hasManual('papers', slug),
      displayTitle: title ?? raw.role ?? slug,
      doiUrl: doi ? `https://doi.org/${doi}` : null,
      zenodoUrl: metadata?.url ?? (zenodoId ? `https://zenodo.org/records/${zenodoId}` : null),
    });
  }

  if (cacheChanged) {
    try {
      await saveZenodoCache(cache);
    } catch {
      /* read-only FS at runtime is fine */
    }
  }
  return loaded;
}

export async function loadPapers(): Promise<LoadedPaper[]> {
  if (!papersPromise) papersPromise = loadPapersUncached();
  return papersPromise;
}

export async function getCanonicalPapers(): Promise<LoadedPaper[]> {
  const papers = await loadPapers();
  return papers
    .filter((p) => p.category === 'canonical' && p.status === 'public')
    .sort((a, b) => (a.number ?? 99) - (b.number ?? 99));
}

export async function getPaper(slug: string): Promise<LoadedPaper | undefined> {
  const papers = await loadPapers();
  return papers.find((p) => p.slug === slug);
}

// ---------------------------------------------------------------------------
// Problems
// ---------------------------------------------------------------------------

let problemsPromise: Promise<LoadedProblem[]> | null = null;

async function loadProblemsUncached(): Promise<LoadedProblem[]> {
  const source = await fs.readFile(path.join(ROOT, 'content/problems.yaml'), 'utf8');
  const doc = yaml.load(source) as any;
  const items: any[] = Array.isArray(doc) ? doc : doc?.problems ?? [];

  return items.map((raw: any): LoadedProblem => {
    const slug: string = raw.slug || String(raw.id).replace(/^problem:/, '');
    const programme: Programme =
      raw.programme === 'featured' || raw.programme === 'legacy'
        ? raw.programme
        : 'additional';
    return {
      slug,
      rawId: raw.id ?? slug,
      title: raw.title ?? slug,
      domain: raw.domain,
      programme,
      status: raw.status === 'public' ? 'public' : 'draft',
      maturity: raw.maturity,
      legacyNotes: Boolean(raw.legacy_notes),
      target: raw.target ?? raw.direct_answer ?? '',
      hasNotes: hasManual('problems', slug),
    };
  });
}

export async function loadProblems(): Promise<LoadedProblem[]> {
  if (!problemsPromise) problemsPromise = loadProblemsUncached();
  return problemsPromise;
}

export async function getProblem(slug: string): Promise<LoadedProblem | undefined> {
  const problems = await loadProblems();
  return problems.find((p) => p.slug === slug);
}
