import Link from "next/link";
import { site } from "@/config/site";
import { getQuantumPublication, quantumMonograph } from "@/config/quantum";
import { getQuantumAdjacent, listQuantumChapters, readQuantumHtml, type QuantumDocument } from "@/lib/quantum";
import "@/app/quantum-measurement/reader.css";

export function QuantumReader({ document }: { document: QuantumDocument }) {
  const publication = getQuantumPublication(document.publicationId)!;
  const isBook = document.publicationId === "monograph";
  const adjacent = isBook ? getQuantumAdjacent(document.slug) : null;
  const chapters = listQuantumChapters();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": isBook ? "Chapter" : "ScholarlyArticle",
    name: isBook ? `${document.label ? `${document.label}: ` : ""}${document.title}` : publication.title,
    url: `${site.url}${document.url}`,
    author: { "@type": "Person", name: publication.author },
    datePublished: publication.published,
    inLanguage: "en",
    version: publication.version,
    isPartOf: isBook ? { "@type": "Book", name: quantumMonograph.title, identifier: quantumMonograph.doiUrl, url: `${site.url}${quantumMonograph.webUrl}` } : undefined,
    identifier: isBook ? undefined : publication.doiUrl,
    encoding: [{ "@type": "MediaObject", encodingFormat: "application/pdf", contentUrl: `${site.url}${publication.pdfUrl}` }, { "@type": "MediaObject", encodingFormat: "text/markdown", contentUrl: `${site.url}${document.markdownUrl}` }],
  };
  return (
    <article className="quantum-reader" id="reader-top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="quantum-reader-breadcrumb">
        <Link href="/quantum-measurement">Quantum measurement</Link><span aria-hidden="true">/</span>
        {isBook ? <><Link href={publication.webUrl}>Monograph</Link><span aria-hidden="true">/</span></> : null}
        <span aria-current="page">{isBook ? document.label || document.title : publication.shortTitle}</span>
      </nav>
      <header className="quantum-reader-header">
        <p className="quantum-reader-kicker">{isBook ? document.label || "Integrated monograph" : "Companion paper"} <span>Version 2</span></p>
        <h1>{isBook ? document.title : publication.title}</h1>
        {!isBook && <p className="quantum-reader-subtitle">{publication.subtitle}</p>}
        <p className="quantum-reader-byline">{publication.author} · {publication.authorRole}<br />{publication.dateLabel} · <a href={publication.doiUrl}>doi:{publication.doi}</a></p>
        <div className="quantum-reader-downloads" aria-label="Publication formats">
          <a href={publication.pdfUrl}>Download PDF <span aria-hidden="true">↗</span></a>
          <a href={document.markdownUrl}>{isBook ? "Chapter Markdown" : "Full Markdown"}</a>
          <a href={publication.texUrl}>Original LaTeX</a>
          <Link href={`/papers/${publication.paperSlug}`}>Publication record</Link>
        </div>
        {isBook && <div className="quantum-reading-position"><span>Reading position {document.order} of {chapters.length}</span><progress max={chapters.length} value={document.order} aria-label={`Reading position ${document.order} of ${chapters.length}`} /></div>}
      </header>
      <div className="quantum-reading-layout">
        <aside className="quantum-reader-aside">
          <details className="quantum-reader-contents" open>
            <summary>On this page <span aria-hidden="true">↕</span></summary>
            <nav aria-label="Sections on this page">
              {document.sections.length ? <ol>{document.sections.map(section => <li className={section.level > 2 ? "quantum-toc-subsection" : ""} key={section.anchor}><a href={`#${section.anchor}`}><span>{section.number}</span> {section.title}</a></li>)}</ol> : <p>{document.kind === "bibliography" ? "Complete bibliography and source editions." : "Read this section below."}</p>}
              {!isBook && <a className="quantum-bibliography-link" href="#bibliography">Bibliography</a>}
            </nav>
          </details>
          <nav className="quantum-reader-crosslinks" aria-label="Related editions">
            <Link href="/quantum-measurement/monograph">Full monograph contents <span>↗</span></Link>
            {isBook ? <><Link href="/quantum-measurement/pilot-medium">Pilot-medium paper <span>↗</span></Link><Link href="/quantum-measurement/massive-configuration">Massive-configuration paper <span>↗</span></Link></> : <Link href={document.publicationId === "pilot-medium" ? "/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit#p:main" : "/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law#mc:chapter-constitution"}>Corresponding monograph treatment <span>↗</span></Link>}
            <Link href="/atlas">Explore the Atlas <span>↗</span></Link>
          </nav>
          <p className="quantum-reader-provenance">Fixed publication text. Each edition keeps its own assumptions, numbering and proofs.</p>
        </aside>
        <div className="quantum-reader-main">
          <div className="quantum-publication-text" dangerouslySetInnerHTML={{ __html: readQuantumHtml(document) }} />
          {document.publicationId === "massive-configuration" && <aside className="quantum-source-note"><span className="quantum-source-note-label">Source supplement</span><p>The fixed paper refers to <code>reproducibility/integration_verification.py</code> and <code>reproducibility/numerical_checks.py</code>. These supplementary files were not included in the supplied workspace. The published text and its provenance are retained here.</p><a href={publication.zenodoUrl}>Publication on Zenodo →</a></aside>}
          <footer className="quantum-reader-end">
            <p>{isBook ? "End of this section" : "End of the complete paper"}</p>
            <a href="#reader-top">Back to top ↑</a>
          </footer>
        </div>
      </div>
      {isBook && <nav className="quantum-chapter-navigation" aria-label="Chapter navigation">
        {adjacent?.previous ? <Link href={adjacent.previous.url} rel="prev"><span>← Previous · {adjacent.previous.label || "Contents"}</span><strong>{adjacent.previous.title}</strong></Link> : <div />}
        <Link href="/quantum-measurement/monograph" className="quantum-chapter-contents-link">All contents</Link>
        {adjacent?.next ? <Link href={adjacent.next.url} rel="next"><span>Next · {adjacent.next.label || "Contents"} →</span><strong>{adjacent.next.title}</strong></Link> : <div />}
      </nav>}
    </article>
  );
}
