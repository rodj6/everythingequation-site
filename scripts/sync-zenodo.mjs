/**
 * ZENODO METADATA SYNC
 *
 * Usage: npm run sync:zenodo
 *
 * Reads every paper in content/papers.yaml that has a `zenodo:` record ID,
 * fetches fresh metadata (title, DOI, authors, publication date) from the
 * Zenodo API, and writes it to .cache/zenodo.json. Commit the updated cache
 * so builds don't need to hit the network.
 *
 * Also runs daily via .github/workflows/sync-zenodo.yml.
 */
import { promises as fs } from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const yaml = require('js-yaml');

const ROOT = process.cwd();
const CACHE_PATH = path.join(ROOT, '.cache', 'zenodo.json');

async function fetchZenodo(recordId) {
  try {
    const res = await fetch(`https://zenodo.org/api/records/${recordId}`);
    if (!res.ok) {
      console.warn(`  ! Zenodo ${recordId}: HTTP ${res.status}`);
      return null;
    }
    const rec = await res.json();
    return {
      id: rec.id?.toString() ?? String(recordId),
      doi: rec?.metadata?.doi ?? rec.doi ?? undefined,
      title: rec?.metadata?.title,
      url: rec?.links?.html,
      creators: (rec?.metadata?.creators || []).map(
        (c) => c.name || `${c.given_name ?? ''} ${c.family_name ?? ''}`.trim()
      ),
      description: rec?.metadata?.description,
      published: rec?.metadata?.publication_date,
      files: (rec?.files || []).map((f) => ({
        filename: f.key || f.filename,
        url: f?.links?.self,
      })),
    };
  } catch (err) {
    console.warn(`  ! Zenodo ${recordId}: ${err.message}`);
    return null;
  }
}

async function main() {
  const source = await fs.readFile(path.join(ROOT, 'content/papers.yaml'), 'utf8');
  const doc = yaml.load(source);
  const papers = Array.isArray(doc) ? doc : doc?.papers ?? [];

  let cache = {};
  try {
    cache = JSON.parse(await fs.readFile(CACHE_PATH, 'utf8'));
  } catch {
    /* first run */
  }

  let updated = 0;
  for (const raw of papers) {
    if (raw.zenodo == null) continue;
    const slug = raw.slug || String(raw.id || '').replace(/^paper:/, '').replace(/:/g, '-');
    const meta = await fetchZenodo(String(raw.zenodo));
    if (meta) {
      cache[slug] = meta;
      updated++;
    }
  }

  await fs.mkdir(path.dirname(CACHE_PATH), { recursive: true });
  await fs.writeFile(CACHE_PATH, JSON.stringify(cache, null, 2), 'utf8');
  console.log(`Zenodo metadata refreshed: ${updated} records updated.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
