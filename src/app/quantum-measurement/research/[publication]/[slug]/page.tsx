import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getQuantumResearchPublication } from '@/config/quantum-research';
import { getQuantumResearchDocument, getQuantumResearchDocuments, listQuantumResearchDocuments, readQuantumResearchHtml } from '@/lib/quantum-research';
import { site } from '@/config/site';
import '../../../reader.css';
import '../../research.css';
export const dynamic = 'force-static';
export const dynamicParams = false;
export function generateStaticParams(){return listQuantumResearchDocuments().map(d=>({publication:d.publicationId,slug:d.slug}));}
export async function generateMetadata({params}:{params:Promise<{publication:string,slug:string}>}):Promise<Metadata>{const {publication,slug}=await params;const d=getQuantumResearchDocument(publication,slug);const p=getQuantumResearchPublication(publication);return d&&p?{title:`${d.title} | ${p.shortTitle}`,description:p.description,alternates:{canonical:d.url}}:{};}
export default async function ResearchReader({params}:{params:Promise<{publication:string,slug:string}>}){
 const {publication,slug}=await params;const p=getQuantumResearchPublication(publication);const d=getQuantumResearchDocument(publication,slug);if(!p||!d)notFound();const docs=getQuantumResearchDocuments(publication),idx=docs.findIndex(x=>x.slug===slug),prev=docs[idx-1],next=docs[idx+1];
 return <article className="quantum-reader qr-reader" id="reader-top">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Chapter',name:d.title,url:site.url+d.url,author:{'@type':'Person',name:p.author},isPartOf:{'@type':'ScholarlyArticle',name:p.title,identifier:p.doiUrl,url:site.url+p.webUrl},encoding:{'@type':'MediaObject',encodingFormat:'text/markdown',contentUrl:site.url+d.markdownUrl}})}}/>
 <nav aria-label="Breadcrumb" className="quantum-reader-breadcrumb"><Link href="/quantum-measurement">Quantum measurement</Link><span>/</span><Link href={p.webUrl}>{p.shortTitle}</Link><span>/</span><span aria-current="page">{d.label||'Opening'}</span></nav>
 <header className="quantum-reader-header"><p className="quantum-reader-kicker">{d.label||'Research edition'} <span>4 October 2026</span></p><h1>{d.title}</h1><p className="quantum-reader-byline">{p.author} · {p.authorRole}<br/><a href={p.doiUrl}>doi:{p.doi}</a></p><div className="quantum-reader-downloads"><a href={p.pdfUrl}>Original PDF ↗</a><a href={d.markdownUrl}>Section Markdown</a><a href={p.markdownUrl}>Full Markdown</a><Link href={p.webUrl}>All contents</Link></div><div className="quantum-reading-position"><span>Reading position {idx+1} of {docs.length}</span><progress value={idx+1} max={docs.length} aria-label={`Reading position ${idx+1} of ${docs.length}`}/></div></header>
 <div className="quantum-reading-layout"><aside className="quantum-reader-aside"><details className="quantum-reader-contents" open><summary>On this page ↕</summary><nav aria-label="On this page"><ol>{d.sections.map(s=><li key={s.anchor} className={s.level>2?'quantum-toc-subsection':''}><a href={`#${s.anchor}`}>{s.number} {s.title}</a></li>)}</ol></nav></details><details className="quantum-reader-contents qr-full-contents"><summary>Complete paper ↕</summary><nav aria-label="Paper sections"><ol>{docs.map(x=><li key={x.slug}><Link href={x.url} aria-current={x.slug===slug?'page':undefined}>{x.label?`${x.label}: `:''}{x.title}</Link></li>)}</ol></nav></details><nav className="quantum-reader-crosslinks" aria-label="Related reading"><Link href="/quantum-measurement#new-results">Five connected results ↗</Link><Link href="/quantum-measurement/monograph">Integrated monograph ↗</Link></nav></aside><div className="quantum-reader-main"><div className="quantum-publication-text" dangerouslySetInnerHTML={{__html:readQuantumResearchHtml(d)}}/><footer className="quantum-reader-end"><p>End of this section</p><a href="#reader-top">Back to top ↑</a></footer></div></div>
 <nav className="quantum-chapter-navigation" aria-label="Section navigation">{prev?<Link href={prev.url} rel="prev"><span>← Previous</span><strong>{prev.title}</strong></Link>:<div/>}<Link href={p.webUrl} className="quantum-chapter-contents-link">All contents</Link>{next?<Link href={next.url} rel="next"><span>Next →</span><strong>{next.title}</strong></Link>:<div/>}</nav>
 </article>;
}
