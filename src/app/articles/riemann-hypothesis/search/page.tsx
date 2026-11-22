import type { Metadata } from "next";
import Link from "next/link";
import RhSearch from "@/components/rh-search";
import { rhPublication as paper } from "@/lib/riemann-hypothesis";

export const metadata: Metadata = {
  title: "Search the Riemann Hypothesis reconstruction",
  description: "Find theorem numbers, Lean declarations, and technical terms in Jeremy Rodgers’s referee manuscript.",
  alternates: { canonical: paper.searchUrl },
};

export default function RhSearchPage() {
  return (
    <section className="rh-search">
      <nav className="rh-breadcrumb" aria-label="Breadcrumb"><Link href={paper.route}>Riemann Hypothesis</Link> / Search</nav>
      <h1>Search the argument</h1>
      <RhSearch indexUrl={paper.searchIndexUrl} readingUrl={paper.route} />
    </section>
  );
}
