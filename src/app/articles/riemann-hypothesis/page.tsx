import type { Metadata } from "next";
import Link from "next/link";
import RhContents from "@/components/rh-contents";
import { rhChapters, rhChapterUrl, rhFinalAssemblyUrl, rhLiteratureAuditUrl, rhPublication as paper } from "@/lib/riemann-hypothesis";
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
    version: paper.version,
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
        <p className="rh-kicker">Riemann Hypothesis · Lean 4 · Version 2</p>
        <h1>Read the Riemann Hypothesis argument from Lean</h1>
        <p className="rh-lead">Follow the argument from the reduction for Dirichlet characters to the final assembly for ordinary RH. Jeremy Rodgers reconstructs the mathematics of Levent Alpöge and Anthropic’s Claude in a manuscript for referee checking.</p>
        <p className="rh-byline">Jeremy Rodgers · Independent Researcher · Manuscript dated <time dateTime={paper.versionDate}>22 November 2026</time></p>
        <div className="rh-actions">
          <Link className="rh-primary" href={rhChapterUrl(rhChapters[0].slug)}>Start reading</Link>
          <Link href={paper.searchUrl}>Search the argument</Link>
          <Link href={paper.citationRoute}>Citation record</Link>
          <a href={paper.doiUrl}>Version 2 DOI</a>
        </div>
      </header>
      <div className="rh-intro">
        <h2>{paper.title}</h2>
        <p>{paper.subtitle}. The repaired edition reconstructs 45 handoff gap groups and 14 original frontier branches relative to the classical literature listed in the manuscript.</p>
        <h2>What Version 2 adds</h2>
        <p>Version 2 expands the proofs behind the <Link href={rhFinalAssemblyUrl}>final assembly in Section 17.4</Link>. Proposition 17.4 constructs one compatible family-selection bundle and Theorem 17.5 traces the discharge of the terminal inputs. The new <Link href={rhLiteratureAuditUrl}>field-by-field audit in Section 18.1</Link> records the 60 and 53 fields of the two input packages, their sources, and how they enter the mathematics.</p>
        <ul className="rh-key-links">
          <li><Link href={rhChapterUrl("the-precise-target-and-the-endpoint-reduction")}>Endpoint reduction <span>Section 2</span></Link></li>
          <li><Link href={rhChapterUrl("the-analytic-window-principle")}>Analytic window <span>Section 3</span></Link></li>
          <li><Link href={rhFinalAssemblyUrl}>Final assembly <span>Section 17.4</span></Link></li>
          <li><Link href={rhChapterUrl("essential-inputs-and-their-present-status")}>Essential inputs <span>Section 18</span></Link></li>
          <li><Link href={rhLiteratureAuditUrl}>Literature-input audit <span>Section 18.1</span></Link></li>
        </ul>
        <h2>Reading edition and verification scope</h2>
        <p>The chaptered edition follows the 1,061-page manuscript. The reader identifies provisional notation and provides the printed source for comparison.</p>
        <p>The manuscript distinguishes its repaired prose arguments, the published mathematical results they use, and the scope of external verification. It reports a textual scan of 175,187 local Lean modules, with zero missing local modules and zero textual axiom, sorry or admit declarations. A local Lean 4 elaboration and kernel check of the pinned environment and direct inspection of exact clauses and pages in unopened primary print sources remain outside the reported checks.</p>
        <div className="rh-actions">
          <a href={paper.pdfUrl}>Version 2 PDF</a>
          <a href={paper.markdownUrl}>Markdown transcript</a>
          <a href={paper.manifestUrl}>Chapter manifest</a>
        </div>
        <section className="rh-version-archive" aria-labelledby="version-history">
          <h2 id="version-history">Frozen Version 1 archive</h2>
          <a href={paper.previousVersion.pdfUrl}>Version 1 PDF</a>
          <p>DOI <a href={paper.previousVersion.doiUrl}>{paper.previousVersion.doi}</a></p>
        </section>
        <h2 id="contents">Contents</h2>
        <RhContents />
      </div>
    </article>
  );
}
