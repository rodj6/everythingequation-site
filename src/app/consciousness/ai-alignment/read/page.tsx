import type {Metadata} from 'next';
import Link from 'next/link';
import {alignment as paper, getAlignmentSections, readAlignmentHtml} from '@/lib/alignment';
import {site} from '@/config/site';
export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Reflective Alignment and AI Consciousness · Complete Web Edition',
  description: 'Read the complete reflective alignment argument: awareness, RCO, self- and goal-identification, seven mathematical propositions and proofs, cultivation, corrigibility, AI welfare, shutdown ethics and the research programme.',
  alternates:{canonical:paper.readUrl,types:{'text/markdown':paper.markdownUrl}},
  openGraph:{type:'article',title:paper.title,description:paper.description,url:paper.readUrl,images:[paper.socialImage],publishedTime:paper.date,authors:[paper.author]},
  twitter:{card:'summary_large_image',title:paper.title,description:paper.description,images:[paper.socialImage]},
};
export default function FullAlignmentReader(){
  const sections=getAlignmentSections();
  return <article className="quantum-reader c-reader alignment-reader" id="reader-top">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'ScholarlyArticle','@id':site.url+paper.readUrl+'#edition',headline:paper.fullTitle,author:{'@type':'Person',name:paper.author},datePublished:paper.date,version:paper.version,identifier:paper.doi,sameAs:paper.doiUrl,url:site.url+paper.readUrl,inLanguage:'en',isAccessibleForFree:true,isPartOf:{'@type':'ScholarlyArticle','@id':site.url+paper.url+'#article'},encoding:{'@type':'MediaObject',encodingFormat:'text/markdown',contentUrl:site.url+paper.markdownUrl}})}}/>
    <nav className="quantum-reader-breadcrumb" aria-label="Breadcrumb"><Link href="/consciousness">Consciousness</Link><span>/</span><Link href={paper.url}>AI alignment</Link><span>/</span><span aria-current="page">Complete argument</span></nav>
    <header className="alignment-reader-header"><p className="alignment-kicker">Reflective alignment / Complete web edition</p><h1>{paper.title}</h1><p>{paper.subtitle}</p><p className="alignment-byline">Jeremy Rodgers · Independent Researcher · Version 2.1 · 11 October 2026<br/><a href={paper.doiUrl}>doi:{paper.doi}</a></p><div className="alignment-actions"><a className="alignment-button" href="#section-1">Begin the argument ↓</a><a className="alignment-text-link" href="#section-6">Enter the mathematics →</a><a className="alignment-text-link" href={paper.markdownUrl}>Complete Markdown ↓</a><a className="alignment-text-link" href={paper.pdfUrl}>Publication PDF ↓</a></div></header>
    <div className="alignment-reader-layout"><aside className="alignment-toc"><details open><summary>In this article</summary><nav aria-label="Complete article contents"><ol>{sections.map(s=><li key={s.id}><a href={`#${s.id}`}><span>{s.number?String(s.number).padStart(2,'0'):'—'}</span>{s.title}</a></li>)}</ol></nav></details><div className="alignment-toc-footer"><Link href={paper.url}>The central argument ↗</Link><Link href="/consciousness/research">Consciousness research ↗</Link><a href="#references">All references ↓</a><a href="#reader-top">Back to the top ↑</a></div></aside><div className="alignment-reader-main"><div className="quantum-publication-text" dangerouslySetInnerHTML={{__html:readAlignmentHtml()}}/><footer className="alignment-reader-end"><Link href={paper.url}>Return to AI alignment →</Link><a href="#reader-top">Back to top ↑</a><a href={paper.manifestUrl}>Reading inventory</a><a href="/publications/consciousness/alignment/source-coverage.json">Source coverage</a></footer></div></div>
  </article>;
}
