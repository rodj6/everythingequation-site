import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MdxContent from "@/components/mdx-content";
import { manualPages } from "@/generated/manualPages";

export const dynamic = "force-static";
export const dynamicParams = false;

const titles: Record<string, string> = {
  monograph: "Monograph (Legacy)",
  "tier-1": "Tier-1 System (Legacy)",
  "what-is-the-everything-equation": "What Is the Everything Equation? (Legacy)",
};

export function generateStaticParams() {
  return Object.keys(manualPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: titles[slug] ?? `${slug} (Legacy)`,
    description:
      "Historical page from the Everything Equation era, retained as a development trace. Superseded as public authority by the Shadow Theory canonical stack.",
    alternates: { canonical: `/legacy/${slug}` },
    robots: { index: false, follow: true },
  };
}

export default async function LegacyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loader = (manualPages as Record<string, (() => Promise<any>) | undefined>)[slug];
  if (!loader) notFound();

  return (
    <article className="mx-auto max-w-3xl">
      <header>
        <p className="section-label">Legacy archive</p>
        <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">
          {titles[slug] ?? slug}
        </h1>
      </header>

      <aside className="mt-6 rounded-xl border border-[hsl(var(--amber)/0.35)] bg-[hsl(var(--amber)/0.06)] px-5 py-4 text-sm leading-relaxed text-fg/90">
        <p className="m-0 mb-1 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-amberc">
          Historical page
        </p>
        This page was written during the earlier Everything Equation era of the
        programme and is retained as a development trace. It is superseded as
        controlling public authority by the{" "}
        <Link href="/framework" className="text-glow hover:text-glow-strong">
          Shadow Theory canonical stack
        </Link>
        .
      </aside>

      <div className="mt-4">
        <MdxContent loader={loader} />
      </div>

      <nav className="mt-12 border-t border-edge pt-6">
        <Link href="/" className="text-sm font-medium text-glow hover:text-glow-strong">
          ← Back to the current site
        </Link>
      </nav>
    </article>
  );
}
