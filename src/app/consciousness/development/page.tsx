import type { Metadata } from 'next';
import Link from 'next/link';
import ConsciousnessSearch from '@/components/consciousness-search';
import { development as paper, listDevelopmentDocuments } from '@/lib/development';
import { site } from '@/config/site';
export const dynamic = 'force-static';
export const metadata: Metadata = {title: `${paper.title} · Full-text web edition`, description: paper.description,
  alternates: {canonical: paper.url, types: {'text/markdown': paper.markdownUrl}}, openGraph: {type: 'article', title: paper.title, description: paper.description, url: paper.url}};
export default function DevelopmentEdition() {
  const documents = listDevelopmentDocuments();
  return <article className="quantum-reader development-reader" id="reader-top">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'ScholarlyArticle', headline: paper.fullTitle,
      description: paper.description, author: {'@type': 'Person', name: paper.author, jobTitle: paper.authorRole},
      datePublished: paper.date, version: paper.version, url: site.url + paper.url, identifier: paper.doiUrl,
      isAccessibleForFree: true, inLanguage: 'en', encoding: {'@type': 'MediaObject', encodingFormat: 'text/markdown', contentUrl: site.url + paper.markdownUrl},
      hasPart: documents.map(d => ({'@type': 'Chapter', name: d.title, url: site.url + d.url})),
    })}}/>
    <nav className="quantum-reader-breadcrumb" aria-label="Breadcrumb"><Link href="/consciousness">Consciousness</Link><span>/</span><span aria-current="page">Relational development</span></nav>
    <header className="quantum-reader-header">
      <p className="quantum-reader-kicker">Consciousness / Development <span>Revised preprint · 6 October 2026</span></p>
      <h1>{paper.title}</h1><p className="quantum-reader-subtitle">{paper.subtitle}</p>
      <p className="quantum-reader-byline">{paper.author} · {paper.authorRole}<br/><a href={paper.doiUrl}>doi:{paper.doi}</a></p>
      <div className="quantum-reader-downloads"><Link href={documents[0].url}>Begin reading</Link><a href="#complete-contents">Full contents</a><a href={paper.markdownUrl}>Complete Markdown</a><a href={paper.pdfUrl}>Paper PDF</a><a href={paper.texUrl}>Original LaTeX</a><a href={paper.manifestUrl}>Reading inventory</a></div>
    </header>
    <section className="mt-8 max-w-3xl leading-relaxed text-mute" aria-labelledby="development-introduction"><h2 id="development-introduction" className="text-xl font-semibold text-fg">From retained relations to future possibilities</h2>
      <p className="mt-4">An encounter can change more than what a system knows. It can change which differences it notices, which consequences it can infer and which responses it can bring into use. This paper develops that recursive account through will, thought, embodiment, memory, artifacts and self-reference.</p>
      <p className="mt-4">The mathematical treatment asks what must be retained to preserve further development, how much organisation must be transferred, and when finite diagnostics determine continuation laws. Transfer tradeoffs and a rare-event obstruction set precise limits. A recurrent two-register model supplies a conditional incorporation witness.</p>
      <p className="mt-4">The paper extends the <Link className="text-glow" href="/consciousness/monograph">SPC-2 monograph</Link> and <Link className="text-glow" href="/consciousness/research">Papers 2–4</Link>. Physical qualification and the phenomenal bridge remain explicit premises. The complete source text follows in its original order.</p>
    </section>
    <aside className="c-development-note"><p className="c-eyebrow">Related article</p><h2>Agency and the constructed self</h2><p>Choice, conditioning and the RCO hypothesis: an accessible account of agency, learned organisation and the authority of personal representation.</p><Link href={paper.articleUrl}>Read the full article</Link><p>The new <Link className="text-glow" href="/consciousness/agency">Agency and Free Will treatment</Link> follows this developmental account into finite evaluative revision, adaptive inquiry and faithful realization, with the complete mathematics and a deeper philosophical inquiry.</p></aside>
    <section id="complete-contents" className="mt-12 scroll-mt-24"><p className="c-eyebrow">Full-text technical reading edition</p><h2 className="mt-3 text-2xl font-semibold">The argument, in {documents.length} reading sections.</h2>
      <ol className="development-contents">{documents.map(d => <li key={d.slug}><Link href={d.url}><small>{d.label || 'Opening'}</small><strong>{d.title}</strong></Link>{d.sections.length > 0 && <details><summary>Subsections</summary><ul>{d.sections.map(s => <li key={s.anchor}><a href={`${d.url}#${s.anchor}`}>{s.number} {s.title}</a></li>)}</ul></details>}</li>)}</ol>
    </section>
    <section className="mt-10"><h2 className="text-xl font-semibold">Search the consciousness programme</h2><ConsciousnessSearch/></section>
    <footer className="mt-10 border-t border-edge pt-6 flex flex-wrap gap-5 text-sm text-glow"><Link href={`/papers/${paper.paperSlug}`}>Publication record</Link><Link href="/consciousness/research">The research programme</Link><a href="/publications/consciousness/development/source-coverage.json">Source coverage</a></footer>
  </article>;
}
