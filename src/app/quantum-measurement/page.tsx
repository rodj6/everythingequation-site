import type { Metadata } from "next";
import Link from "next/link";
import QuantumProgramme from "@/components/quantum-programme";
import { site } from "@/config/site";
import { quantumPublications } from "@/config/quantum";
import { quantumResearchPublications } from "@/config/quantum-research";
import "./programme.css";

const description = "Born equilibrium, complete event histories and faithful physical records: explore five new research papers alongside the full quantum measurement monograph and its original companions.";
export const metadata: Metadata = {
  title: "Quantum Measurement & the Born Rule", description,
  alternates: { canonical: "/quantum-measurement" },
  openGraph: { title: "Quantum Measurement: Equilibrium, Events and Records", description, url: "/quantum-measurement", type: "website" },
};
export const dynamic = "force-static";

function CompletionPortrait() {
  return <figure className="qm-hero-art">
    <svg viewBox="0 0 410 400" role="img" aria-labelledby="qm-portrait-title qm-portrait-desc">
      <title id="qm-portrait-title">Two constitutive routes from a source to physical records</title>
      <desc id="qm-portrait-desc">A shared source/readout question branches into a cyan pilot-medium route with discrete events and a violet massive-configuration route with continuous positions. Both routes have their own material records. The connecting lines show the programme structure, not a mathematical derivation between theories.</desc>
      <defs><radialGradient id="qm-portrait-glow"><stop stopColor="#4f9bbf" stopOpacity=".18"/><stop offset="1" stopColor="#4f9bbf" stopOpacity="0"/></radialGradient><linearGradient id="qm-cyan-trace" x2="0" y2="1"><stop stopColor="#73e4ed" stopOpacity=".12"/><stop offset="1" stopColor="#73e4ed"/></linearGradient></defs>
      <circle cx="205" cy="200" r="183" fill="url(#qm-portrait-glow)"/>
      {[82,135,182].map(r=><circle key={r} cx="205" cy="197" r={r} fill="none" stroke="#6b8aad" strokeOpacity=".15" strokeDasharray={r===135?"2 7":undefined}/>)}
      <path d="M25 197 H385 M205 15 V378" stroke="#6b8aad" strokeOpacity=".12"/>
      <text x="205" y="44" textAnchor="middle" fill="#a7b9d2" fontSize="10" letterSpacing="2.3">SOURCE / READOUT</text>
      <circle cx="205" cy="91" r="24" fill="#101f30" stroke="#9ebed6" strokeOpacity=".5"/><text x="205" y="101" fill="#d9e6f7" textAnchor="middle" fontFamily="Georgia,serif" fontSize="31">Ψ</text>
      <path d="M193 114 C183 154 101 127 92 183 M217 114 C229 154 309 127 318 183" fill="none" stroke="#7b90af" strokeWidth="1.2" strokeDasharray="3 5"/>
      <text x="92" y="176" textAnchor="middle" fill="#73e4ed" fontSize="9" letterSpacing="1.3">PILOT MEDIUM</text>
      <text x="317" y="176" textAnchor="middle" fill="#bca3ff" fontSize="9" letterSpacing="1.2">MASSIVE CONFIGURATION</text>
      <path d="M62 252 H82 V227 H101 V206 H122 V230 H143" fill="none" stroke="#73e4ed" strokeWidth="2"/>
      {[{x:62,y:252},{x:82,y:227},{x:101,y:206},{x:122,y:230}].map(({x,y})=><circle key={x} cx={x} cy={y} r="4" fill="#73e4ed"/>)}
      <path d="M269 254 C284 256 279 201 298 205 S305 247 328 229 S348 219 358 223" fill="none" stroke="#bca3ff" strokeWidth="2"/>
      <circle cx="328" cy="229" r="4" fill="#bca3ff"/>
      <text x="101" y="286" textAnchor="middle" fill="#9cb2c9" fontFamily="Georgia,serif" fontSize="15">λ = [J]₊ / w</text>
      <text x="312" y="286" textAnchor="middle" fill="#ad9fd0" fontFamily="Georgia,serif" fontSize="15">Q̇ = j / ρ</text>
      <path d="M102 300 V322 M313 300 V322" stroke="#73859f" strokeDasharray="2 5"/>
      <rect x="54" y="327" width="99" height="32" rx="4" fill="#0c2832" stroke="#73e4ed" strokeOpacity=".4"/><text x="104" y="347" textAnchor="middle" fill="#73e4ed" fontSize="9" letterSpacing="1.3">ACTUAL COPIES</text>
      <rect x="264" y="327" width="99" height="32" rx="4" fill="#211b36" stroke="#bca3ff" strokeOpacity=".4"/><text x="314" y="347" textAnchor="middle" fill="#bca3ff" fontSize="9" letterSpacing="1.3">FIXED ARCHIVES</text>
    </svg>
    <figcaption>Two constitutions · distinct paths · physical records</figcaption>
  </figure>;
}

const publications = quantumPublications.map((publication, index) => ({
  ...publication,
  slug: publication.id,
  number: String(index + 1).padStart(2, "0"),
  kind: ["Integrated monograph", "Companion paper · pilot medium", "Companion paper · massive configuration"][index],
}));

export default function QuantumMeasurementPage() {
  return <div className="qm-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage",name:"Quantum Measurement and the Born Rule",description,url:`${site.url}/quantum-measurement`,author:{"@type":"Person",name:site.author.name,affiliation:{"@type":"Organization",name:site.author.affiliation}},dateModified:"2026-10-04",hasPart:[...publications,...quantumResearchPublications].map(p=>({"@type":p.id==="monograph"?"Book":"ScholarlyArticle",name:p.title,url:`${site.url}${p.webUrl}`,identifier:p.doi,version:p.version,datePublished:p.published}))}).replace(/</g,"\\u003c")}}/>
    <header className="qm-hero">
      <div><p className="qm-eyebrow">Shadow Theory / Quantum foundations / October 2026</p><h1>Quantum<br/>measurement.<br/><em>From source to record.</em></h1>
        <p className="qm-hero-intro">Why the Born distribution? How does an event become a lasting record? Five research papers sharpen the answers: equilibrium uniqueness under controls and preparation returns, autonomous measurement chains, a deterministic Bell-path limit, and faithful records from restricted nonequilibrium preparations.</p>
        <div className="qm-actions"><a className="qm-button qm-button-primary" href="#new-results">Explore the five papers <span aria-hidden="true">↓</span></a><a className="qm-button" href="#two-completions">Explore the mechanisms <span aria-hidden="true">↓</span></a></div>
        <p className="qm-author">Jeremy Rodgers · Independent Researcher · Updated 4 October 2026</p>
      </div><CompletionPortrait/>
    </header>
    <nav className="qm-index-bar" aria-label="Programme contents"><a href="#the-question"><span>01</span>The question</a><a href="#two-completions"><span>02</span>Two completions</a><a href="#new-results"><span>03</span>Five research advances</a><a href="#reading-paths"><span>04</span>Reading paths</a><a href="#publications"><span>05</span>Publications</a><a href="#research-status"><span>06</span>Research status</a></nav>
    <section id="the-question" className="qm-section">
      <div className="qm-section-head"><div><p className="qm-eyebrow">01 / The measurement question</p><h2>Three questions. One complete experiment.</h2></div><p>The Born rule connects wave weights to outcome statistics. A complete measurement theory also needs actual events and material records.</p></div>
      <div className="qm-distinction"><article><span className="qm-large-number">i.</span><h3>What evolves?</h3><p>Source dynamics specifies the coherent field and its currents. The source/readout distinction asks which structures an observation preserves, and which it loses.</p><p className="qm-caption">Coherent dynamics → currents and weights</p></article><article><span className="qm-large-number">ii.</span><h3>What happens?</h3><p>Equal one-time probabilities can belong to different histories. Selecting individual events requires a law for paths, with its interaction and preparation assumptions stated.</p><p className="qm-caption">Event law → actual history</p></article><article><span className="qm-large-number">iii.</span><h3>What remains?</h3><p>A later memory must be faithful to its earlier declaration. The experiment includes the apparatus, archives, reset receivers, loss products and any returning information.</p><p className="qm-caption">Physical acquisition → retained record</p></article></div>
    </section>
    <section id="two-completions" className="qm-section">
      <div className="qm-section-head"><div><p className="qm-eyebrow">02 / Explore the constructions</p><h2>Two routes through the same question.</h2></div><p>The September monograph develops these two routes. The October equilibrium and hybrid papers consolidate them in dedicated complete editions, with their physical premises and record observables explicit.</p></div>
      <QuantumProgramme/>
      <div className="qm-comparison" role="region" aria-label="Comparison of constitutive completions" tabIndex={0}><table><caption className="sr-only">Static comparison of the pilot-medium and massive-configuration completions</caption><thead><tr><th scope="col">The distinction</th><th scope="col">Pilot medium</th><th scope="col">Massive configuration</th></tr></thead><tbody>
        <tr><th scope="row">Actual history</th><td>A tagged ordinary configuration, with discrete events generated by a deterministic pilot medium.</td><td>A continuous configuration of massive material positions governed by kinetic-momentum guidance.</td></tr>
        <tr><th scope="row">Selection premises</th><td>P1–P4, signed export and reactions, independent spatial gas and carrier preparation.</td><td>Universal material inventory, the guidance law and complete initial equilibrium with finite ready resources.</td></tr>
        <tr><th scope="row">Main result</th><td>Complete tagged paths converge in total variation to the minimal Bell process in unchanged physical time.</td><td>A finite measurement-chain realization with controlled retained-output and archive-history errors.</td></tr>
        <tr><th scope="row">Record mechanism</th><td>In the Bell limit, monomial copy cuts are crossed once on the finite clock’s first pass. Finite pilots inherit controlled path and record error.</td><td>Stationary storage plus derivative-controlled absolute archive flux for the autonomous controller.</td></tr>
        <tr><th scope="row">Domain</th><td>Fixed finite ordinary graph and horizon; finite resources have controlled deviations from the limit.</td><td>A smooth finite nonrelativistic material programme; guidance and equilibrium remain physical premises.</td></tr>
      </tbody></table></div>
    </section>
    <section id="new-results" className="qm-section">
      <div className="qm-section-head"><div><p className="qm-eyebrow">03 / Five research advances</p><h2>Equilibrium. Events. Records.<br/>Each question gets its own proof.</h2></div><p>The October papers extend the programme in distinct directions. Read the full arguments, assumptions and calculations in each web edition.</p></div>
      <div className="qm-reading-grid">
        {[
          { id: "control-consistency", theorem: "physical-model-and-statistical-assumptions#thm:main", theoremLabel: "Theorem 2.1 and A1–A4", title: "Local controls single out Born equilibrium", question: "Which density assignments survive changes of control?", body: "For a regular projective density assignment, consistency across local scalar controls and fixed connected interactions forces the Born density. Effective spin, identical-particle sectors, nodes and binary-flag heredity receive their own treatments." },
          { id: "preparation-returns", theorem: "introduction#thm:main", theoremLabel: "Theorem 1.1 and its engineered domain", title: "Return the wave. Test the distribution.", question: "What does an exact return leave invariant?", body: "Engineered nonlinear and Gaussian returns single out the Born measure among all Borel probabilities at one preparation. Randomized returns reveal how marginal equilibration coexists with retained information and a reversible inverse echo." },
          { id: "equilibrium-records", theorem: "complete-instruments-references-and-finite-histories#thm:closure", theoremLabel: "Complete finite-chain theorem", title: "Make a whole experiment autonomous", question: "Can an apparatus preserve its own earlier declarations?", body: "A semibounded model realizes each fixed finite measurement programme with a massive clock, prepared resources and Bohmian equilibrium. Absolute archive flux controls historical errors separately from the final quantum output." },
          { id: "hybrid-bell-paths", theorem: "the-complete-physical-time-bell-path-limit#thm:main", theoremLabel: "Theorem 8.1 and its path bound", title: "Recover the complete Bell path", question: "What fixes events and their timing?", body: "Calibrated carriers, independent spatial gas and finite recombination produce the complete ordinary-configuration Bell-path limit in physical time. Monomial copying cuts preserve actual earlier configurations on the clock’s first pass." },
          { id: "nonequilibrium-records", theorem: "observable-and-theorem#rad:thm:main", theoremLabel: "Theorem 19.1 and its joint record observable", title: "Faithful records beyond full equilibrium", question: "Can restricted nonequilibrium laws give calibrated histories?", body: "Two finite autonomous models prove joint earlier-label and whole-record bounds. The periodic and radial apparatuses keep their own Hamiltonians, law classes and constants, with quantitative guarantees for copying and retention." },
        ].map(result => <article key={result.id} className="qm-reading-card"><p className="qm-eyebrow">{result.question}</p><h3>{result.title}</h3><p>{result.body}</p><Link href={`/quantum-measurement/research/${result.id}/${result.theorem}`} className="qm-text-link">{result.theoremLabel} →</Link><Link href={`/quantum-measurement/research/${result.id}`} className="qm-text-link">Read the complete paper <span aria-hidden="true">↗</span></Link></article>)}
      </div>
      <div className="qm-comparison" role="region" aria-label="Nonequilibrium model record guarantees" tabIndex={0}><table><caption className="sr-only">Two separate effective models and their exact record bounds</caption><thead><tr><th scope="col">Finite model</th><th scope="col">Joint earlier-label and whole-record law</th><th scope="col">Actual-label copy-and-hold failure</th></tr></thead><tbody>
        <tr><th scope="row">Periodic detector</th><td>≤ 0.00443484008607784720002304</td><td>≤ 0.00232725479707784720002304</td></tr>
        <tr><th scope="row">Radial apparatus</th><td>&lt; 0.006086770113</td><td>&lt; 0.000552421956</td></tr>
      </tbody></table></div>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mute">The first column of bounds compares the joint label and entire symbolic holding path with its ideal calibrated path. The second measures failure to preserve the apparatus’s own actual earlier label. These are different observables, proved under each model’s stated entrance-law and readiness conditions. <Link href="/quantum-measurement/research/nonequilibrium-records/finite-complete-theorem" className="text-glow hover:underline">Periodic theorem and joint corollary →</Link>{" "}<Link href="/quantum-measurement/research/nonequilibrium-records/observable-and-theorem#rad:thm:main" className="text-glow hover:underline">Radial joint-path theorem →</Link></p>
    </section>
    <section id="reading-paths" className="qm-section">
      <div className="qm-section-head"><div><p className="qm-eyebrow">04 / Reading paths</p><h2>Start with the question you care about.</h2></div><p>These routes lead through the preserved September editions. The five research cards above lead to the October extensions and consolidated treatments, each with its complete scientific text.</p></div>
      <div className="qm-reading-grid">
        <article className="qm-reading-card"><span className="qm-eyebrow">The broad picture</span><h3>Why probabilities<br/>are only part of the story</h3><p>Follow the distinction between source information, a selected event history and a lasting physical record.</p><ol><li><Link href="/quantum-measurement/monograph">Begin with the abstract and roadmap</Link></li><li><a href="#two-completions">Compare the two constitutions</a></li><li><Link href="/atlas?focus=measurement-programme">Place measurement in the Reality Atlas</Link></li></ol><Link className="qm-text-link" href="/quantum-measurement/monograph">Enter the monograph <span aria-hidden="true">↗</span></Link></article>
        <article className="qm-reading-card"><span className="qm-eyebrow">The discrete construction</span><h3>From signed action<br/>to complete Bell paths</h3><p>Inspect the microscopic catalogue, the three successive comparisons and the autonomous record construction.</p><ol><li><Link href="/quantum-measurement/pilot-medium#sec:source">Canonical currents and export</Link></li><li><Link href="/quantum-measurement/pilot-medium#thm:main">The full physical-time path limit</Link></li><li><Link href="/quantum-measurement/pilot-medium#sec:rivals">Rivals, retained information and scope</Link></li></ol><Link className="qm-text-link" href="/quantum-measurement/pilot-medium">Read the pilot-medium paper <span aria-hidden="true">↗</span></Link></article>
        <article className="qm-reading-card"><span className="qm-eyebrow" style={{color:"var(--qm-violet)"}}>The continuous construction</span><h3>Guided positions.<br/>Protected material archives.</h3><p>Follow the exact massive writer through nulls, reset, a retained clock and noncommuting continuation.</p><ol><li><Link href="/quantum-measurement/massive-configuration#sec:constitution">Material, guidance and equilibrium premises</Link></li><li><Link href="/quantum-measurement/massive-configuration#sec:detector">The physical pointer and crossing law</Link></li><li><Link href="/quantum-measurement/massive-configuration#thm:closure">Complete measurement-chain closure</Link></li></ol><Link className="qm-text-link" href="/quantum-measurement/massive-configuration">Read the massive-configuration paper <span aria-hidden="true">↗</span></Link></article>
      </div>
    </section>
    <section id="publications" className="qm-section">
      <div className="qm-section-head"><div><p className="qm-eyebrow">05 / The publications</p><h2>The full arguments, in full view.</h2></div><p>Five October research papers join the three September Version 2 publications. Every edition keeps its own statements, proofs, bibliography and publication identity.</p></div>
      {quantumResearchPublications.map((p, index)=><article className="qm-publication" key={p.id}><span className="qm-publication-number">{String(index + 1).padStart(2, "0")}</span><div><p className="qm-eyebrow" style={{marginTop:0,marginBottom:10}}>October research paper</p><h3><Link href={p.webUrl}>{p.title}</Link></h3><p>{p.description}</p><p>{p.author} · {p.dateLabel}</p><div className="qm-publication-links"><a href={p.doiUrl}>DOI ↗</a><a href={p.pdfUrl}>Original PDF ↓</a><a href={p.markdownUrl}>Complete Markdown ↓</a></div></div><Link className="qm-button" href={p.webUrl}>Read online <span aria-hidden="true">↗</span></Link></article>)}
      <h3 className="mt-10 mb-4 text-xl font-medium">The September foundation, preserved in full</h3>
      {publications.map(p=><article className="qm-publication" key={p.slug}><span className="qm-publication-number">{p.number}</span><div><p className="qm-eyebrow" style={{marginTop:0,marginBottom:10}}>{p.kind}</p><h3><Link href={`/quantum-measurement/${p.slug}`}>{p.title}</Link></h3><p>{p.description}</p><p>{p.author} · Version {p.version} · {p.dateLabel}</p><div className="qm-publication-links"><a href={`https://doi.org/${p.doi}`}>DOI ↗</a><a href={`/publications/quantum-measurement/${p.slug}.pdf`}>Download PDF ↓</a><a href={`/publications/quantum-measurement/${p.slug}.tex`}>LaTeX source ↓</a><a href={`/publications/quantum-measurement/${p.slug}.md`}>Markdown ↓</a></div></div><Link className="qm-button" href={`/quantum-measurement/${p.slug}`}>Read online <span aria-hidden="true">↗</span></Link></article>)}
    </section>
    <section id="research-status" className="qm-section qm-status"><div><p className="qm-eyebrow">06 / Research status</p><h2>What the programme<br/>now establishes.</h2><Link href="/problems/quantum-measurement" className="qm-text-link">Results, scope and the next physical steps <span aria-hidden="true">↗</span></Link></div><div><p>The October papers add two equilibrium-characterization theorems, consolidate both measurement constructions and prove quantitative faithful-record results for two restricted nonequilibrium classes. Control consistency and return invariance are distinct statistical premises. The record constructions keep their own guidance, interaction and preparation requirements.</p><p>The equilibrium measurement theorem achieves arbitrary positive tolerances for fixed finite programmes and horizons using finite resources. The hybrid theorem controls complete ordinary-configuration paths; the continuous record theorems control their specified symbolic records. Gaussian resources have finite moments, rather than hard spatial or energy cutoffs.</p><p>Independent specialist review and material realization remain the next tests. A smooth isolated contact module does not yet realize the complete hybrid medium. The nonequilibrium models prescribe interactions whose full sources and loading still need a compatible material construction. Their unused error margins are available for a future proof, not established hardware errors.</p><p>The September editions retain their original text and provenance. Source/readout structure supplies the programme’s conceptual setting; the physical and statistical hypotheses are stated in the papers that use them.</p></div></section>
    <section className="qm-section qm-atlas-banner"><div><p className="qm-eyebrow">The connected framework</p><h2>See where measurement sits.</h2><p>Trace source dynamics, event selection, Born statistics and physical archives in the Reality Atlas. Its connections distinguish mathematical dependencies from conceptual relationships.</p></div><Link href="/atlas?focus=measurement-programme" className="qm-button">Explore the Reality Atlas <span aria-hidden="true">↗</span></Link></section>
  </div>;
}
