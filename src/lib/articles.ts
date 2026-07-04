/**
 * ARTICLE INDEX
 *
 * Articles live as MDX files in content/articles/*.mdx with YAML frontmatter.
 * The prebuild script (scripts/generate-content-maps.mjs) parses frontmatter
 * into src/generated/articles.ts; this module exposes typed accessors.
 */
import { articleMetas, type ArticleMeta } from '@/generated/articles';

export type { ArticleMeta };

/** Published articles, newest first. */
export function listArticles(): ArticleMeta[] {
  return articleMetas
    .filter((a) => a.status !== 'draft')
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

export function getArticleMeta(slug: string): ArticleMeta | undefined {
  return articleMetas.find((a) => a.slug === slug);
}
