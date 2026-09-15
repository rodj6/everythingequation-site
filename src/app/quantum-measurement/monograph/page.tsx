import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { quantumMonograph, quantumPilot, quantumMassive } from "@/config/quantum";
import { getQuantumTotals, listQuantumChapters } from "@/lib/quantum";
import "../reader.css";
import "./monograph.css";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Quantum Measurement Monograph · Complete Web Edition",
  description: quantumMonograph.description,
  alternates: { canonical: quantumMonograph.webUrl },
  openGraph: { title: quantumMonograph.title, type: "book", url: quantumMonograph.webUrl },
};
export default function QuantumMonograph() {
  const documents = listQuantumChapters(); const totals = getQuantumTotals();
  const groups: { title: string; label: string; url?: string; documents: typeof documents }[] = [{ title: "Orientation and foundations", label: "Start here", documents: [] }];
  for (const document of documents) {
    if (document.kind === "part") groups.push({ title: document.title, label: document.label, url: document.url, documents: [] });
    else if (document.kind === "appendix" && groups.at(-1)?.label !== "Appendices") groups.push({ title: "Extensions, boundaries and finite benchmarks", label: "Appendices", documents: [document] });
    else if (document.kind === "bibliography") groups.push({ title: "Bibliography and source editions", label: "References", documents: [document] });
    else groups.at(-1)!.documents.push(document);
  }
  const jsonLd = { "@context": "https://schema.org", "@type": "Book", name: quantumMonograph.title, description: quantumMonograph.description, author: { "@type": "Person", name: quantumMonograph.author }, bookEdition: "Version 2", datePublished: quantumMonograph.published, identifier: quantumMonograph.doiUrl, inLanguage: "en", url: `${site.url}${quantumMonograph.webUrl}`, hasPart: documents.map(document => ({ "@type": "Chapter", name: document.title, position: document.order, url: `${site.url}${document.url}` })), encoding: { "@type": "MediaObject", encodingFormat: "application/pdf", contentUrl: `${site.url}${quantumMonograph.pdfUrl}` } };
  return <article className="quantum-monograph-hub">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <nav className="quantum-reader-breadcrumb" aria-label="Breadcrumb"><Link href="/quantum-measurement">Quantum measurement</Link><span aria-hidden="true">/</span><span aria-current="page">Complete monograph</span></nav>
    <header className="quantum-book-header">
      <p className="quantum-reader-kicker">The complete web edition <span>Version 2 · 15 September 2026</span></p>
      <h1>Shadow Theory<br />and Quantum<br /><em>Measurement.</em></h1>
      <p className="quantum-book-subtitle">Source Dynamics, Event Laws, and Physical Records</p>
      <p className="quantum-book-constitution">Two Constitutive Completions</p>
      <div className="quantum-book-header-bottom"><p>{quantumMonograph.author}<br /><span>{quantumMonograph.authorRole}</span></p><a href={quantumMonograph.doiUrl}>doi:{quantumMonograph.doi} ↗</a></div>
      <div className="quantum-book-line-art" aria-hidden="true"><i /><i /><i /><i /><i /><span>Ψ → J → path → record</span></div>
    </header>
    <div className="quantum-book-entry">
      <div><p className="quantum-book-lede">How does a source produce an event—and how does that event become a physical record?</p><p>The monograph follows the whole chain. It sets out the source and readout distinction, the laws that select histories, the material apparatus that retains them, and the counterexamples that mark each result’s boundary.</p><p>Its two completions remain distinct: a controlled Bell-path limit from a deterministic pilot medium, and a massive-configuration theory with its own guidance and equilibrium premises.</p></div>
      <aside><span>Complete technical edition</span><dl><div><dt>Chapters</dt><dd>{totals.chapters}</dd></div><div><dt>Appendices</dt><dd>{totals.appendices}</dd></div><div><dt>Statements</dt><dd>{totals.statements}</dd></div><div><dt>Proofs</dt><dd>{totals.proofs}</dd></div></dl><a href={quantumMonograph.pdfUrl}>Download the complete PDF ↗</a><a href={quantumMonograph.markdownUrl}>Full text in Markdown ↗</a><a href={quantumMonograph.texUrl}>Original LaTeX source ↗</a></aside>
    </div>
    <nav className="quantum-book-paths" aria-label="Reading paths">
      <Link href="/quantum-measurement/monograph/abstract"><span>01 / Orientation</span><strong>Begin with the abstract</strong><p>Principal conclusions, provenance, and the limits of each constitution.</p></Link>
      <Link href="/quantum-measurement/monograph/a-deterministic-pilot-medium-and-its-bell-limit"><span>02 / Pilot medium</span><strong>Follow the complete Bell path</strong><p>Spatial contacts, recombination, residence tracking, and actual archives.</p></Link>
      <Link href="/quantum-measurement/monograph/a-massive-configuration-constitution-and-its-event-law"><span>03 / Massive configuration</span><strong>Follow the material pointer</strong><p>Guided motion, retained resources, and controlled archive histories.</p></Link>
    </nav>
    <section id="contents" className="quantum-book-contents">
      <div className="quantum-book-section-header"><h2>Contents</h2><p>{totals.parts} parts · {totals.sections} sections · {totals.bibliographyEntries} references</p></div>
      {groups.map((group, index) => <section className="quantum-book-part" key={`${group.label}-${index}`}><header><span>{group.label}</span>{group.url ? <Link href={group.url}><h3>{group.title}</h3><small>Read the part introduction →</small></Link> : <h3>{group.title}</h3>}</header><ol>{group.documents.map(document => <li key={document.slug}><Link href={document.url}><span>{document.label || (document.kind === "bibliography" ? "Sources" : "Frontmatter")}</span><strong>{document.title}</strong><i aria-hidden="true">↗</i></Link></li>)}</ol></section>)}
    </section>
    <section className="quantum-book-companions"><div><p className="quantum-reader-kicker">Companion publications</p><h2>Two self-contained arguments.</h2><p>The companion papers retain their own numbering, proofs and publication provenance. The monograph integrates their essential arguments into the wider programme.</p></div><div><Link href={quantumPilot.webUrl}><span>Pilot medium</span><strong>{quantumPilot.title}</strong><small>Read the complete paper →</small></Link><Link href={quantumMassive.webUrl}><span>Massive configuration</span><strong>{quantumMassive.title}</strong><small>Read the complete paper →</small></Link></div></section>
    <details className="quantum-book-editorial"><summary>About this web edition and its source audit</summary><p>This is a complete conversion of the supplied Integrated monograph, version 2, dated 15 September 2026. Scientific text, hypotheses, statements, proofs, equations, tables, appendices and bibliography retain their publication provenance. The original source labels remain directly linkable. Page layout and contents navigation are adapted for reading on screen.</p><p>The supplied monograph PDF contains an empty labelled placeholder for <code>massive_event_mechanism_figure.pdf</code> on PDF page 178. The original caption is preserved in Chapter 28 with an explicit source note. No missing plot has been invented.</p><p><a href="/publications/quantum-measurement/conversion-audit.json">Conversion and source audit</a> · <Link href="/quantum-measurement/manifest.json">Machine-readable inventory</Link> · <Link href="/monograph">Separate TOE monograph, Version 1.0</Link></p></details>
  </article>;
}
