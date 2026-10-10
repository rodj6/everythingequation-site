import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getQuantumResearchPublication, quantumResearchPublications } from '@/config/quantum-research';
import { getQuantumResearchDocuments } from '@/lib/quantum-research';
import { quantumPortfolioGuides } from '@/config/quantum-portfolio-guides';
import { site } from '@/config/site';
import '../../programme.css';
import '../../reader.css';
import '../research.css';
export const dynamic = 'force-static';
export const dynamicParams = false;
export function generateStaticParams() { return quantumResearchPublications.map(p=>({publication:p.id})); }
export async function generateMetadata({params}:{params:Promise<{publication:string}>}):Promise<Metadata> {
 const {publication}=await params; const p=getQuantumResearchPublication(publication); if(!p)return {};
 return {title:p.title,description:p.description,alternates:{canonical:p.webUrl},other:{citation_title:p.title,citation_author:p.author,citation_publication_date:p.published,citation_doi:p.doi,citation_pdf_url:site.url+p.pdfUrl}};
}
export default async function PublicationContents({params}:{params:Promise<{publication:string}>}) {
 const {publication}=await params; const p=getQuantumResearchPublication(publication); if(!p)notFound(); const docs=getQuantumResearchDocuments(p.id);const guide=quantumPortfolioGuides[p.id];
 const total=(key:keyof typeof docs[number]['stats'])=>docs.reduce((n,d)=>n+d.stats[key],0);
 return <article className="qm-page qr-contents">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'ScholarlyArticle',name:p.title,author:{'@type':'Person',name:p.author},datePublished:p.published,version:p.version,identifier:p.doiUrl,url:site.url+p.webUrl,encoding:[{'@type':'MediaObject',encodingFormat:'application/pdf',contentUrl:site.url+p.pdfUrl},{'@type':'MediaObject',encodingFormat:'text/markdown',contentUrl:site.url+p.markdownUrl}]})}}/>
  <nav className="quantum-reader-breadcrumb" aria-label="Breadcrumb"><Link href="/quantum-measurement">Quantum measurement and Born rule</Link><span>/</span><span>Research edition</span></nav>
  <header className="qr-publication-hero"><p className="qm-eyebrow">{p.theme}</p><h1>{p.title}</h1><p className="qr-deck">{p.description}</p><p>{p.author} · {p.authorRole} · {p.dateLabel}</p><p className="qr-version">{p.version}</p>
   <div className="qm-actions"><Link className="qm-button qm-button-primary" href={docs[0]?.url||p.webUrl}>Start reading ↗</Link><a className="qm-button" href={p.pdfUrl}>Original PDF ↓</a>{p.texUrl&&<a className="qm-button" href={p.texUrl}>LaTeX ↓</a>}<a className="qm-button" href={p.markdownUrl}>Full Markdown ↓</a><a className="qm-button" href={p.doiUrl}>DOI ↗</a></div>
  </header>
  <div className="qr-statline"><span><strong>{docs.length}</strong> reading sections</span><span><strong>{total('theorems')}</strong> statements</span><span><strong>{total('proofs')}</strong> proofs</span><span><strong>{total('displayEquations')}</strong> mathematical displays</span></div>
  {guide&&<section className="qm-section qr-guide" aria-labelledby="article-guide-title"><p className="qm-eyebrow">The argument</p><h2 id="article-guide-title">{guide.headline}</h2><div className="qr-guide-introduction">{guide.introduction.map((text,i)=><p key={i}>{text}</p>)}</div><div className="qr-guide-grid">{guide.readingGuide.map(item=>{const target=docs.find(d=>d.title===item.sectionTitle);return <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p>{target&&<Link href={target.url}>Read the argument →</Link>}</article>;})}</div><p className="qr-guide-connection">{guide.connection}</p></section>}
  <section className="qm-section"><div className="qm-section-head"><div><p className="qm-eyebrow">The complete paper</p><h2>Follow the full argument.</h2></div><p>Every section, proof and appendix, with linked equations and the complete bibliography.</p></div>
  <ol className="qr-contents-list">{docs.map(d=><li key={d.slug}><Link href={d.url} prefetch={false}><span>{d.label||'Opening'}</span><strong>{d.title}</strong><span aria-hidden="true">↗</span></Link>{d.sections.filter(s=>s.level>2).length>0&&<p>{d.sections.filter(s=>s.level>2).map(s=>s.title).join(' · ')}</p>}</li>)}</ol></section>
  {guide&&<section className="qr-next-question"><h2>The next research question</h2><p>{guide.nextQuestion}</p><nav aria-label="Related research">{guide.related.map(id=>{const related=getQuantumResearchPublication(id);return related?<Link key={id} href={related.webUrl}>{related.shortTitle} →</Link>:null;})}</nav></section>}
  <aside className="qr-edition-note"><h2>Publication and connections</h2><p><a href={p.doiUrl}>doi:{p.doi}</a> · <Link href={`/papers/${p.paperSlug}`}>Publication record</Link> · <a href="/quantum-measurement/research/manifest.json">Reading manifest</a></p>{p.priorId&&<p>This paper revises and consolidates the <Link href={`/quantum-measurement/${p.priorId}`}>September 2026 edition</Link>, which remains available in full.</p>}<p><Link href="/quantum-measurement#new-results">Explore the connected research →</Link></p></aside>
 </article>;
}
