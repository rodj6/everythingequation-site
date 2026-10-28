import {sourcePapers,paperUrl} from '@/lib/source-readout';
import {paperIntegrations} from '@/config/paper-integrations';
import {continuityNote} from '@/lib/continuity-note';
import {relationalAwareness} from '@/lib/relational-awareness';
/**
 * ARTICLE INDEX
 *
 * Articles live as MDX files in content/articles/*.mdx with YAML frontmatter.
 * The prebuild script (scripts/generate-content-maps.mjs) parses frontmatter
 * into src/generated/articles.ts; this module exposes typed accessors.
 */
import { articleMetas, type ArticleMeta as GeneratedArticleMeta } from '@/generated/articles';
import { alignment } from '@/lib/alignment';

export interface ArticleMeta extends GeneratedArticleMeta {
  /** A complete edition can live in its programme instead of a duplicate article route. */
  href?: string;
}

export function articleUrl(article: ArticleMeta): string {
  return article.href || `/articles/${article.slug}`;
}

function programmeArticles(): ArticleMeta[] {
  return [...sourcePapers().filter(p=>!p.parentId&&!p.parentSlug).map(p=>({slug:`source-readout-${p.slug}`,title:p.title,description:p.description,date:p.series==='foundations'?'2026-07-15':'2026-10-27',tags:['Source and readout',p.series==='foundations'?'Foundations':'Constructive research'],status:'published' as const,href:paperUrl(p)})),...paperIntegrations.map(p=>({slug:p.paperSlug,title:p.title,description:p.description,date:p.date,tags:['Consciousness','Enacted organization','Research'],status:'published' as const,href:p.url})),{slug:continuityNote.paperSlug,title:continuityNote.publicTitle,description:continuityNote.description,date:continuityNote.date,tags:['AI consciousness','Reflective alignment','AI welfare','Research note'],status:'published',href:continuityNote.url},{slug:relationalAwareness.paperSlug,title:relationalAwareness.publicTitle,description:relationalAwareness.description,date:relationalAwareness.date,tags:['Consciousness','Relational awareness','Philosophy of mind'],status:'published',href:relationalAwareness.url},{
    slug: alignment.paperSlug,
    title: alignment.title,
    description: alignment.description,
    date: alignment.date,
    tags: ['AI alignment', 'AI consciousness', 'Reflective alignment'],
    status: 'published',
    href: alignment.url,
  }];
}

/** Published articles, newest first. */
export function listArticles(): ArticleMeta[] {
  return [...programmeArticles(), ...articleMetas]
    .filter((a) => a.status !== 'draft')
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

export function getArticleMeta(slug: string): ArticleMeta | undefined {
  return [...programmeArticles(), ...articleMetas].find((a) => a.slug === slug);
}
