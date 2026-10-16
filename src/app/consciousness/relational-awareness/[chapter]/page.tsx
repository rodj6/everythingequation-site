import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {relationalAwareness as paper,listRelationalDocuments,readRelationalDocument,relationalDocumentUrl} from '@/lib/relational-awareness';
import {site} from '@/config/site';

export const dynamic='force-static';
export const dynamicParams=false;
export function generateStaticParams(){return listRelationalDocuments().map(d=>({chapter:d.slug}));}
export async function generateMetadata({params}:{params:Promise<{chapter:string}>}):Promise<Metadata>{
  const {chapter}=await params;const result=readRelationalDocument(chapter);if(!result)return {};
  const d=result.document;return {title:`${d.title} · Relational Awareness`,description:d.description,alternates:{canonical:relationalDocumentUrl(d),types:{'text/markdown':`/publications/consciousness/relational-awareness/${d.slug}.md`}},openGraph:{type:'article',title:d.title,description:d.description,url:relationalDocumentUrl(d),publishedTime:paper.date,authors:[paper.author],images:[paper.socialImage]}};
}
export default async function RelationalChapter({params}:{params:Promise<{chapter:string}>}){
  const {chapter}=await params;const result=readRelationalDocument(chapter);if(!result)notFound();
  const {document:d,html}=result;const documents=listRelationalDocuments();const i=documents.findIndex(x=>x.slug===chapter);const prev=documents[i-1],next=documents[i+1];
  return <article className="ra-reader" id="reader-top">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Chapter',name:d.title,description:d.description,author:{'@type':'Person',name:paper.author},url:site.url+relationalDocumentUrl(d),isPartOf:{'@type':'ScholarlyArticle','@id':site.url+paper.url+'#publication',name:paper.fullTitle,identifier:paper.doiUrl},inLanguage:'en',isAccessibleForFree:true})}}/>
    <nav className="quantum-reader-breadcrumb" aria-label="Breadcrumb"><Link href="/consciousness">Consciousness</Link><span>/</span><Link href={paper.url}>Relational awareness</Link><span>/</span><span aria-current="page">{d.kind==='main'?'Main argument':d.label}</span></nav>
    <header className="ra-reader-header"><p className="c-eyebrow">{d.label}</p><h1>{d.title}</h1><p className="ra-standfirst">{d.description}</p><p className="ra-byline">Jeremy Rodgers · Independent Researcher · Version 1.4 · 16 October 2026</p><div className="ra-links"><a href={paper.doiUrl}>doi:{paper.doi} ↗</a><a href={d.kind==='main'?paper.pdfUrl:paper.supplementPdfUrl}>{d.kind==='main'?'Main paper PDF':'Technical supplement PDF'} ↓</a><a href={`/publications/consciousness/relational-awareness/${d.slug}.md`}>Chapter Markdown ↓</a><Link href={`${paper.url}#complete-contents`}>All chapters →</Link></div></header>
    <div className="ra-reader-layout"><aside className="ra-toc"><details open><summary>In this chapter</summary><nav aria-label="Chapter contents"><ol>{d.sections.filter(s=>s.level<=3).map(s=><li key={s.id} className={s.level===3?'ra-subsection':''}><a href={`#${s.id}`}>{s.title}</a></li>)}</ol></nav></details><details className="ra-volume-toc"><summary>The complete investigation</summary><nav aria-label="Publication chapters"><ol>{documents.map(x=><li key={x.slug}><Link href={relationalDocumentUrl(x)} aria-current={x.slug===chapter?'page':undefined}>{x.label}</Link></li>)}</ol></nav></details><Link href={paper.url}>The central account ↗</Link><Link href="/consciousness/research">The consciousness programme ↗</Link><a href="#reader-top">Back to the top ↑</a></aside>
      <div className="ra-reader-main"><div className="quantum-publication-text ra-publication-text" dangerouslySetInnerHTML={{__html:html}}/>
        <nav className="ra-pagination" aria-label="Reading sequence">{prev?<Link href={relationalDocumentUrl(prev)}><span>Previous</span><strong>← {prev.title}</strong></Link>:<Link href={paper.url}><span>The overview</span><strong>← When a relation becomes experience</strong></Link>}{next?<Link href={relationalDocumentUrl(next)}><span>Continue</span><strong>{next.title} →</strong></Link>:<Link href={paper.url}><span>The full investigation</span><strong>Return to the argument →</strong></Link>}</nav>
      </div>
    </div>
  </article>;
}
