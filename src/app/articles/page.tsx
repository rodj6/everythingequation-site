import type { Metadata } from "next";
import { listArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/cards";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Research notes, explanations, and updates from the Shadow Theory programme.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  const articles = listArticles();

  return (
    <div className="space-y-12">
      <header className="max-w-3xl">
        <p className="section-label">Notes &amp; updates</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Articles</h1>
        <p className="mt-4 text-lg leading-relaxed text-mute">
          Research notes, reading guides, explanations, and programme updates. New
          articles are added as MDX files; see the authoring guide in the repository.
        </p>
      </header>

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
