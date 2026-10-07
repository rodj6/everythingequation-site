import type { Metadata } from 'next';
import Link from 'next/link';
import katex from 'katex';
import ConsciousnessSearch from '@/components/consciousness-search';
import { agency as paper, listAgencyDocuments, type AgencyDocument } from '@/lib/agency';
import { site } from '@/config/site';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Agency and Free Will · Bounded Agency and Reflective Freedom', description: paper.description,
  alternates: {canonical: paper.url, types: {'text/markdown': paper.markdownUrl}},
  openGraph: {type: 'article', title: 'Agency and Free Will', description: paper.description, url: paper.url},
};
const threshold = katex.renderToString('B=L+2,\\qquad V(L+2)=\\frac{C_L+b}{2}>F(L+2)=b', {displayMode: true, throwOnError: true});
const mediation = katex.renderToString('\\max\\{0,1-\\varepsilon_0-\\varepsilon_1\\}\\leq \\operatorname{TV}(P_0,P_1)\\leq \\operatorname{TV}(H_0,H_1)', {displayMode: true, throwOnError: true});

function Contents({documents}: {documents: AgencyDocument[]}) {
  return <ol className="agency-contents">{documents.map(document => <li key={document.slug}>
    <Link href={document.url}><span>{document.label}</span><strong>{document.title}</strong><i aria-hidden="true">↗</i></Link>
    {document.description ? <p>{document.description}</p> : null}
    {document.sections.length ? <details><summary>Inside this chapter</summary><ul>{document.sections.map(section => <li key={section.anchor}><a href={`${document.url}#${section.anchor}`}>{section.number ? `${section.number} ` : ''}{section.title}</a></li>)}</ul></details> : null}
  </li>)}</ol>;
}
export default function AgencyOverview() {
  const documents = listAgencyDocuments();
  const published = documents.filter(document => document.kind === 'published');
  const supplements = documents.filter(document => document.kind === 'supplement');
  return <article className="c-research-hub agency-hub" id="reader-top">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Agency and Free Will', description: paper.description, url: site.url + paper.url,
      author: {'@type': 'Person', name: paper.author}, inLanguage: 'en', isAccessibleForFree: true,
      hasPart: [{'@type': 'ScholarlyArticle', name: paper.fullTitle, identifier: paper.doiUrl, datePublished: paper.date, hasPart: published.map(d => ({'@type': 'Chapter', name: d.title, url: site.url + d.url}))}, ...supplements.map(d => ({'@type': 'Article', name: d.title, url: site.url + d.url}))],
    })}}/>
    <nav className="quantum-reader-breadcrumb" aria-label="Breadcrumb"><Link href="/consciousness">Consciousness</Link><span>/</span><span aria-current="page">Agency and free will</span></nav>
    <header className="c-research-hero agency-hero">
      <p className="c-eyebrow">Consciousness / Agency and free will</p>
      <h1>We can revise<br/>the rules<br/><em>by which we choose.</em></h1>
      <p>A choice depends on what an agent can perceive, retain, assess and do. Reflective freedom enters when the agent can examine a rule of decision and install a different rule that changes what it does next.</p>
      <div className="c-actions"><Link className="c-button c-button-primary" href={published[0]?.url ?? '#complete-contents'}>Enter the argument ↗</Link><a className="c-button" href="#complete-contents">Every result and proof ↓</a><Link className="c-text-link" href={paper.articleUrl}>An accessible introduction ↗</Link></div>
      <p className="agency-publication">{paper.title}<br/><span>{paper.subtitle}</span><br/>{paper.author} · {paper.authorRole} · 6 October 2026<br/><a href={paper.doiUrl}>doi:{paper.doi} ↗</a></p>
    </header>
    <section className="agency-contributions" aria-labelledby="agency-contributions-title">
      <div className="c-section-heading"><div><p className="c-eyebrow">The published contribution</p><h2 id="agency-contributions-title">A mechanism.<br/>A limit. An exact advantage.</h2></div></div>
      <div className="agency-result-grid">
        <div><span className="c-eyebrow">01 / Evaluative revision</span><h3>The change survives the next case.</h3><p>A finite agent reads retained commitments, assesses candidate charters and installs a decision rule. Fresh cases separate the new disposition from a changed command. Interventions test the actual read and installation routes.</p></div>
        <div><span className="c-eyebrow">02 / Bounded inquiry</span><h3>Information has to reach the decision.</h3><p>Accurate endorsement places a lower bound on the distinctions the inquiry can carry. A causal response can still install the wrong rule. The information, mediation and endorsement requirements must all be met.</p></div>
        <div><span className="c-eyebrow">03 / Faithful realization</span><h3>The implementation keeps the contract.</h3><p>A native realization preserves the specified operations, paid access restrictions and fresh-case behaviour. Protected returns and predictive structure coexist with evaluative agency under the declared assumptions. Recurrence by itself is insufficient.</p></div>
      </div>
      <div className="agency-equation-panel"><h3>Information limits faithful revision.</h3><div dangerouslySetInnerHTML={{__html: mediation}}/><p>Here H₀ and H₁ are the inquiry-transcript laws, P₀ and P₁ are the installed-amendment laws, and ε₀ and ε₁ are endorsement errors. The two contexts endorse disjoint amendment sets and share the same downstream installation kernel. TV measures how distinguishable two probability laws are.</p><Link className="agency-result-link" href="/consciousness/agency/revising-an-evaluative-rule">Inspect the rule-revision mechanism and prove the bound ↗</Link></div>
      <div className="agency-equation-panel"><h3>Adaptive inquiry has a sharp first winning budget.</h3><div dangerouslySetInnerHTML={{__html: threshold}}/><p>In the paper’s latent-sensor and endorsement model, L is the first calibration count that can improve evidence accuracy, b is the uncalibrated accuracy, and C<sub>L</sub> is the optimum after L calibration queries. V permits adaptive query counts; F fixes those counts in advance. Their first strict separation is exactly L + 2 paid queries. The chapter develops the full family, optimal policy and proof.</p><Link className="agency-result-link" href="/consciousness/agency/evidence-and-adaptive-inquiry">Follow the exact model, optimal policy and proof ↗</Link></div>
    </section>
    <section className="agency-philosophy" aria-labelledby="agency-philosophy-title"><div><p className="c-eyebrow">What this means for freedom</p><h2 id="agency-philosophy-title">A bounded perspective<br/>can govern its next move.</h2></div><div><p>The agent never needs a complete copy of reality to act competently. What matters is whether its available distinctions support the task, whether its evaluation reaches the rule it installs and whether that rule governs a later case.</p><p>This gives a precise form to local self-government. It also makes the next questions sharper: where do retained standards come from, how can conditioning lose its authority, and what can an audit establish about a history of change?</p><p>The extended inquiry brings those philosophical questions together with further results on source access, reversible control, information bottlenecks, capability construction and provenance. Each added construction keeps its own assumptions. Revising a decision rule and originating the standards used to assess it remain different achievements.</p><Link href="#extended-inquiry">Follow the deeper inquiry ↓</Link></div></section>
    <section id="complete-contents" className="agency-library"><p className="c-eyebrow">Complete published argument / {published.length} chapters</p><h2>The paper, developed for the web.</h2><p className="agency-library-intro">Every substantive definition, construction, result, proof, counterexample and appendix is included in the reading sequence. The mathematics sits beside the question it answers.</p><Contents documents={published}/></section>
    <section id="extended-inquiry" className="agency-library"><p className="c-eyebrow">Extended inquiry / {supplements.length} chapters</p><h2>Freedom, control and the limits of a perspective.</h2><p className="agency-library-intro">Additional philosophy and technical results developed from <em>Bounded Agency and Reversible Control</em>. These chapters extend the website treatment beyond the published paper and retain their separate models and assumptions.</p><Contents documents={supplements}/></section>
    <aside className="c-development-note"><p className="c-eyebrow">The connecting argument</p><h2>From a constructed self to reflective agency.</h2><p>The personal model can remain usable while its authority over deliberation becomes a question. The accessible article connects conditioning, choice and the recursively closed observer hypothesis to the new finite results. The bounded-agency constructions establish their specified mechanisms; the full RCO hypothesis remains a further claim.</p><Link href={paper.articleUrl}>Read Agency and the constructed self ↗</Link></aside>
    <section className="agency-related" aria-label="Related research"><Link href="/consciousness/development"><strong>How organisation develops ↗</strong><span>Retained relations, continuation, transfer and conscious scaffolding.</span></Link><Link href="/consciousness/monograph/resources-continued-operation-and-agency"><strong>The monograph’s agency account ↗</strong><span>Resources, continued operation and the relation between awareness and agency.</span></Link><Link href="/consciousness/research/paper-4"><strong>What identifies a realization? ↗</strong><span>Interventions, coordinate identification and the physical interpretation of a model.</span></Link></section>
    <section className="mt-12"><h2 className="text-xl font-semibold">Search the complete consciousness programme</h2><ConsciousnessSearch/></section>
    <footer className="agency-downloads"><Link href={`/papers/${paper.paperSlug}`}>Publication record</Link><a href={paper.doiUrl}>Zenodo DOI</a><a href={paper.pdfUrl}>Published paper PDF</a><a href={paper.markdownUrl}>Complete website Markdown</a><a href={paper.manifestUrl}>Reading inventory</a><a href="/publications/consciousness/agency/source-coverage.json">Source coverage</a></footer>
  </article>;
}
