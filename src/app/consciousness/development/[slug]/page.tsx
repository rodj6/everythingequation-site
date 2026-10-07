import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { development as paper, listDevelopmentDocuments, readDevelopmentHtml } from '@/lib/development';
import { site } from '@/config/site';
export const dynamic = 'force-static';
export const dynamicParams = false;
export function generateStaticParams() { return listDevelopmentDocuments().map(d => ({slug: d.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata> {
  const {slug} = await params; const d = listDevelopmentDocuments().find(item => item.slug === slug);
  return d ? {title: `${d.title} · Relational development`, description: `${d.title} — full text from ${paper.title}.`, alternates: {canonical: d.url, types: {'text/markdown': d.markdownUrl}}} : {};
}
export default async function DevelopmentSection({params}:{params:Promise<{slug:string}>}) {
  const {slug} = await params; const documents = listDevelopmentDocuments(); const index = documents.findIndex(d => d.slug === slug);
  const d = documents[index]; if (!d) notFound(); const previous = documents[index - 1], next = documents[index + 1];
  return <article className="quantum-reader c-research-reader development-reader" id="reader-top">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org', '@type':'Chapter', name:d.title, position:index+1, url:site.url+d.url,
      author:{'@type':'Person',name:paper.author}, isPartOf:{'@type':'ScholarlyArticle',name:paper.fullTitle,url:site.url+paper.url,identifier:paper.doiUrl},
      encoding:{'@type':'MediaObject',encodingFormat:'text/markdown',contentUrl:site.url+d.markdownUrl}})}}/>
    <nav className="quantum-reader-breadcrumb" aria-label="Breadcrumb"><Link href="/consciousness">Consciousness</Link><span>/</span><Link href={paper.url}>Relational development</Link><span>/</span><span aria-current="page">{d.label || 'Opening'}</span></nav>
    <header className="quantum-reader-header"><p className="quantum-reader-kicker">Relational development <span>{d.label || 'Publication identity'}</span></p><h1>{d.title}</h1>
      <p className="quantum-reader-byline">{paper.author} · {paper.authorRole} · 6 October 2026<br/><a href={paper.doiUrl}>doi:{paper.doi}</a></p>
      <div className="quantum-reader-downloads"><Link href={`${paper.url}#complete-contents`}>Full contents</Link><a href={d.markdownUrl}>Section Markdown</a><a href={paper.markdownUrl}>Complete Markdown</a><a href={paper.pdfUrl}>Paper PDF</a><a href={paper.texUrl}>Original LaTeX</a></div>
      <div className="quantum-reading-position"><span>Reading position {index + 1} of {documents.length}</span><progress value={index + 1} max={documents.length} aria-label={`Reading position ${index + 1} of ${documents.length}`}/></div>
    </header>
    <div className="quantum-reading-layout"><aside className="quantum-reader-aside">
      <details className="quantum-reader-contents" open><summary>On this page</summary><nav aria-label="Sections on this page"><ol>{d.sections.map(s => <li key={s.anchor} className={s.level > 2 ? 'quantum-toc-subsection' : ''}><a href={`#${s.anchor}`}><span>{s.number}</span> {s.title}</a></li>)}</ol>{!d.sections.length && <p>{d.title}</p>}</nav></details>
      <details className="c-all-contents"><summary>All paper sections</summary><nav aria-label="All paper sections"><ol>{documents.map(item => <li key={item.slug}><Link href={item.url} aria-current={item.slug === slug ? 'page' : undefined}>{item.label} · {item.title}</Link></li>)}</ol></nav></details>
      <nav className="quantum-reader-crosslinks" aria-label="Related reading"><Link href={paper.articleUrl}>Agency and the constructed self</Link><Link href="/consciousness/agency">Agency and free will: the complete treatment</Link><Link href="/consciousness/monograph">Foundational monograph</Link><Link href="/consciousness/research">Papers 2–4 and the programme</Link><a href={paper.manifestUrl}>Reading inventory</a></nav>
      <p className="quantum-reader-provenance">Complete publication text. The source arguments, equations and references are preserved; navigation and layout are adapted for the web.</p>
    </aside><div className="quantum-reader-main"><div className="quantum-publication-text" dangerouslySetInnerHTML={{__html:readDevelopmentHtml(d)}}/>
      <footer className="quantum-reader-end"><span>End of this section</span><a href="#reader-top">Back to top</a></footer></div></div>
    <nav className="quantum-chapter-navigation" aria-label="Section navigation">{previous ? <Link href={previous.url} rel="prev"><span>Previous · {previous.label}</span><strong>{previous.title}</strong></Link> : <Link href={paper.url}><span>Introduction</span><strong>The complete edition</strong></Link>}<Link className="quantum-chapter-contents-link" href={`${paper.url}#complete-contents`}>All contents</Link>{next ? <Link href={next.url} rel="next"><span>Next · {next.label}</span><strong>{next.title}</strong></Link> : <Link href={paper.articleUrl}><span>Related article</span><strong>Agency and the constructed self</strong></Link>}</nav>
  </article>;
}
