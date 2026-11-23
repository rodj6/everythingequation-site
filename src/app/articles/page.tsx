import type { Metadata } from "next";
import { listArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/cards";
import RiemannHypothesisFeature from "@/components/riemann-hypothesis-feature";
import { rhPublication } from "@/lib/riemann-hypothesis";
import NewReadingEditionFeatures from "@/components/new-reading-edition-features";
import { newReadingEditions } from "@/config/new-reading-editions";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Read the AdS4 boundary-ball and Haar unitary derivative-moment editions, the Riemann Hypothesis reconstruction from Lean, and Shadow Theory research.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  const featured = new Set([rhPublication.route, ...newReadingEditions.map(edition => edition.route)]);
  const articles = listArticles().filter(article => !article.href || !featured.has(article.href));

  return (
    <div className="space-y-12">
      <header className="max-w-3xl">
        <p className="section-label">Notes &amp; updates</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Articles</h1>
        <p className="mt-4 text-lg leading-relaxed text-mute">
          Research notes, reading guides, explanations, and programme updates. New
          research includes the conscious-scaffolding continuity note, the complete relational-awareness investigation and Reflective Alignment and AI Consciousness
          website edition.
        </p>
      </header>

      <NewReadingEditionFeatures />
      <RiemannHypothesisFeature />

      <h2 className="sr-only">All articles</h2>
      {articles.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : (
        <p className="text-mute">No articles published yet.</p>
      )}
    </div>
  );
}
