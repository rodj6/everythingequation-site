import type { Metadata } from "next";
import Link from "next/link";
import RhContents from "@/components/rh-contents";
import { rhChapters, rhChapterUrl, rhPublication as paper } from "@/lib/riemann-hypothesis";
import { site } from "@/config/site";
import { jsonLdText } from "@/lib/json-ld";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: paper.searchTitle,
  description: paper.description,
  alternates: { canonical: paper.route, types: { "application/json": paper.manifestUrl } },
  openGraph: {
    type: "article",
    title: paper.searchTitle,
    description: paper.description,
    publishedTime: paper.date,
    authors: [site.author.name],
    url: paper.route,
  },
  other: {
    citation_title: paper.citationTitle,
    citation_author: site.author.name,
    citation_publication_date: paper.date,
    citation_doi: paper.doi,
    citation_pdf_url: site.url + paper.pdfUrl,
  },
};

export default function RiemannHypothesis() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "@id": site.url + paper.citationRoute + "#publication",
    name: paper.citationTitle,
    alternateName: paper.title + ": " + paper.subtitle,
    author: { "@type": "Person", name: site.author.name, jobTitle: "Independent Researcher" },
    creditText: "Underlying mathematical argument by Levent Alpöge and Anthropic’s Claude. Reconstruction by Jeremy Rodgers.",
    datePublished: paper.date,
    identifier: paper.doi,
    sameAs: paper.doiUrl,
    url: site.url + paper.route,
    isAccessibleForFree: true,
    hasPart: rhChapters.map(chapter => ({
      "@type": "Chapter", name: chapter.title, url: site.url + rhChapterUrl(chapter.slug),
    })),
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdText(schema) }} />
      <nav className="rh-breadcrumb" aria-label="Breadcrumb"><Link href="/articles">Articles</Link> / Riemann Hypothesis</nav>
      <header className="rh-hero">
        <p className="rh-kicker">Riemann Hypothesis · Lean 4 · Referee reconstruction</p>
        <h1>Read the Riemann Hypothesis argument from Lean</h1>
        <p className="rh-lead">Follow the argument from the reduction for Dirichlet characters to the final assembly for ordinary RH. Jeremy Rodgers reconstructs the mathematics of Levent Alpöge and Anthropic’s Claude in a manuscript for referee checking.</p>
        <p className="rh-byline">Jeremy Rodgers · Independent Researcher · <time dateTime={paper.date}>22 November 2026</time></p>
        <div className="rh-actions">
          <Link className="rh-primary" href={rhChapterUrl(rhChapters[0].slug)}>Start reading</Link>
          <Link href={paper.searchUrl}>Search the argument</Link>
          <Link href={paper.citationRoute}>Citation record</Link>
          <a href={paper.doiUrl}>DOI</a>
        </div>
      </header>
      <div className="rh-intro">
        <h2>{paper.title}</h2>
        <p>{paper.subtitle}. The manuscript reconstructs 45 handoff gap groups and 14 original frontier branches. Proposition 17.4 constructs a compatible family-selection bundle. Theorem 17.5 traces the discharge of the terminal inputs and assembles the argument for ordinary RH.</p>
        <ul className="rh-key-links">
          <li><Link href={rhChapterUrl("the-precise-target-and-the-endpoint-reduction")}>Endpoint reduction <span>Section 2</span></Link></li>
          <li><Link href={rhChapterUrl("the-analytic-window-principle")}>Analytic window <span>Section 3</span></Link></li>
          <li><Link href={rhChapterUrl("construction-of-the-compatible-family-bundle-and-final-assembly")}>Final assembly <span>Section 17.4</span></Link></li>
          <li><Link href={rhChapterUrl("essential-inputs-and-their-present-status")}>Essential inputs <span>Section 18</span></Link></li>
        </ul>
        <h2>Reading edition and verification scope</h2>
        <p>The chaptered edition covers the 980-page preprint. Copyable notation is still undergoing transcription checks. The reader identifies provisional text and provides the source notation for comparison.</p>
        <p>The manuscript reports a textual dependency scan of 175,187 local Lean modules and targeted manuscript audits. Local Lean 4 kernel checking of the full pinned environment was outside the reported checks.</p>
        <div className="rh-actions">
          <a href={paper.pdfUrl}>Original PDF</a>
          <a href={paper.markdownUrl}>Markdown transcript</a>
          <a href={paper.manifestUrl}>Chapter manifest</a>
        </div>
        <h2 id="contents">Contents</h2>
        <RhContents />
      </div>
    </article>
  );
}
