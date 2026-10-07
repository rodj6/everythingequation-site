import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { agency as paper, listAgencyDocuments, readAgencyHtml } from '@/lib/agency';
import { site } from '@/config/site';

export const dynamic = 'force-static';
export const dynamicParams = false;
export function generateStaticParams() { return listAgencyDocuments().map(document => ({slug: document.slug})); }
export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params;
  const document = listAgencyDocuments().find(item => item.slug === slug);
  return document ? {title: `${document.title} · Agency and Free Will`, description: document.description ?? `${document.title}: the complete mathematical and philosophical treatment.`, alternates: {canonical: document.url, types: {'text/markdown': document.markdownUrl}}} : {};
}
export default async function AgencyChapter({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const documents = listAgencyDocuments();
  const index = documents.findIndex(document => document.slug === slug);
  const document = documents[index];
  if (!document) notFound();
  const previous = documents[index - 1], next = documents[index + 1];
  const supplement = document.kind === 'supplement';
  return <article className="quantum-reader c-research-reader agency-reader" id="reader-top">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Chapter', name: document.title, position: index + 1, url: site.url + document.url,
      author: {'@type': 'Person', name: paper.author}, inLanguage: 'en', isAccessibleForFree: true,
      isPartOf: {'@type': 'CollectionPage', name: 'Agency and Free Will', url: site.url + paper.url},
      ...(!supplement ? {isBasedOn: {'@type': 'ScholarlyArticle', name: paper.fullTitle, identifier: paper.doiUrl}} : {}),
      encoding: {'@type': 'MediaObject', encodingFormat: 'text/markdown', contentUrl: site.url + document.markdownUrl},
    })}}/>
    <nav className="quantum-reader-breadcrumb" aria-label="Breadcrumb"><Link href="/consciousness">Consciousness</Link><span>/</span><Link href={paper.url}>Agency and free will</Link><span>/</span><span aria-current="page">{document.label}</span></nav>
    <header className="quantum-reader-header"><p className="quantum-reader-kicker">{supplement ? 'Extended inquiry' : 'Bounded Agency and Reflective Freedom'}<span>{document.label}</span></p><h1>{document.title}</h1>
      {document.description ? <p className="quantum-reader-subtitle">{document.description}</p> : null}
      <p className="quantum-reader-byline">{paper.author} · {paper.authorRole}{!supplement ? <><br/><a href={paper.doiUrl}>doi:{paper.doi}</a></> : <><br/>Additional philosophy and technical development</>}</p>
      <div className="quantum-reader-downloads"><Link href={`${paper.url}#${supplement ? 'extended-inquiry' : 'complete-contents'}`}>Full contents</Link><a href={document.markdownUrl}>Chapter Markdown</a><a href={paper.markdownUrl}>Complete website Markdown</a>{!supplement ? <a href={paper.pdfUrl}>Published paper PDF</a> : null}</div>
      <div className="quantum-reading-position"><span>Reading position {index + 1} of {documents.length}</span><progress value={index + 1} max={documents.length} aria-label={`Reading position ${index + 1} of ${documents.length}`}/></div>
    </header>
    <div className="quantum-reading-layout"><aside className="quantum-reader-aside">
      <details className="quantum-reader-contents" open><summary>On this page</summary><nav aria-label="Sections on this page"><ol>{document.sections.map(section => <li key={section.anchor} className={section.level > 2 ? 'quantum-toc-subsection' : ''}><a href={`#${section.anchor}`}>{section.number ? <span>{section.number} </span> : null}{section.title}</a></li>)}</ol>{!document.sections.length ? <p>{document.title}</p> : null}</nav></details>
      <details className="c-all-contents"><summary>The complete reading sequence</summary><nav aria-label="All agency chapters"><ol>{documents.map(item => <li key={item.slug}><Link href={item.url} aria-current={item.slug === slug ? 'page' : undefined}>{item.label} · {item.title}</Link></li>)}</ol></nav></details>
      <nav className="quantum-reader-crosslinks" aria-label="Related reading"><Link href={paper.articleUrl}>Agency and the constructed self</Link><Link href="/consciousness/development">Relational development</Link><Link href="/consciousness/monograph">Foundational monograph</Link><Link href="/consciousness/research">The research programme</Link><a href={paper.manifestUrl}>Reading inventory</a></nav>
      <p className="quantum-reader-provenance">{supplement ? 'Additional material developed from Bounded Agency and Reversible Control. Its results retain their own models and assumptions and are separate from the published Reflective Freedom paper.' : 'The published argument in website form. Definitions, assumptions, mathematics, proofs and result scope are preserved and explained in context.'}</p>
    </aside><div className="quantum-reader-main"><div className="quantum-publication-text" dangerouslySetInnerHTML={{__html: readAgencyHtml(document)}}/>
      <footer className="quantum-reader-end"><span>End of this chapter</span><a href="#reader-top">Back to top ↑</a></footer></div></div>
    <nav className="quantum-chapter-navigation" aria-label="Chapter navigation">{previous ? <Link href={previous.url} rel="prev"><span>Previous · {previous.label}</span><strong>{previous.title}</strong></Link> : <Link href={paper.url}><span>Introduction</span><strong>Agency and free will</strong></Link>}<Link className="quantum-chapter-contents-link" href={`${paper.url}#complete-contents`}>All contents</Link>{next ? <Link href={next.url} rel="next"><span>Next · {next.label}</span><strong>{next.title}</strong></Link> : <Link href={paper.articleUrl}><span>Related article</span><strong>Agency and the constructed self</strong></Link>}</nav>
  </article>;
}
