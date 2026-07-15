import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { listArticles, getArticleMeta } from "@/lib/articles";
import { articleImports } from "@/generated/articles";
import { site } from "@/config/site";
import MdxContent from "@/components/mdx-content";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return listArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getArticleMeta(slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/articles/${meta.slug}` },
    openGraph: {
      type: "article",
      title: meta.title,
      description: meta.description,
      url: `${site.url}/articles/${meta.slug}`,
      publishedTime: meta.date,
      modifiedTime: meta.updated,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = getArticleMeta(slug);
  if (!meta || meta.status === "draft") notFound();

  const loader = (articleImports as Record<string, (() => Promise<any>) | undefined>)[meta.slug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date || undefined,
    dateModified: meta.updated || meta.date || undefined,
    keywords: meta.tags.join(", ") || undefined,
    author: { "@type": "Person", name: site.author.name },
    url: `${site.url}/articles/${meta.slug}`,
  };

  return (
    <article className="mx-auto max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header>
        <div className="flex flex-wrap items-center gap-2 text-[0.7rem]">
          {meta.date ? (
            <time dateTime={meta.date} className="font-mono uppercase tracking-wider text-faint">
              {meta.date}
            </time>
          ) : null}
          {meta.updated ? (
            <span className="font-mono uppercase tracking-wider text-faint">
              · updated {meta.updated}
            </span>
          ) : null}
          {meta.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-edge px-2 py-0.5 font-mono uppercase tracking-wider text-mute"
            >
              {t}
            </span>
          ))}
        </div>
        <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
          {meta.title}
        </h1>
        {meta.description ? (
          <p className="mt-3 text-lg leading-relaxed text-mute">{meta.description}</p>
        ) : null}
      </header>

      <div className="mt-6 border-t border-edge pt-2">
        <MdxContent loader={loader} />
      </div>

      <nav className="mt-12 border-t border-edge pt-6">
        <Link href="/articles" className="text-sm font-medium text-glow hover:text-glow-strong">
          ← All articles
        </Link>
      </nav>
    </article>
  );
}
