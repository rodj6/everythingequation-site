import type { Metadata } from "next";
import Link from "next/link";
import QuantumProgramme from "@/components/quantum-programme";
import { site } from "@/config/site";
import { quantumPublications } from "@/config/quantum";
import "./programme.css";

const description = "Source dynamics, event laws and physical records: explore Shadow Theory’s two constitutive completions of quantum measurement, with the full version 2 monograph and companion papers.";
export const metadata: Metadata = {
  title: "Quantum Measurement & the Born Rule", description,
  alternates: { canonical: "/quantum-measurement" },
  openGraph: { title: "Quantum Measurement — Two Constitutive Completions", description, url: "/quantum-measurement", type: "website" },
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage",name:"Quantum Measurement and the Born Rule",description,url:`${site.url}/quantum-measurement`,author:{"@type":"Person",name:site.author.name,affiliation:{"@type":"Organization",name:site.author.affiliation}},hasPart:publications.map(p=>({"@type":p.slug==="monograph"?"Book":"ScholarlyArticle",name:p.title,url:`${site.url}/quantum-measurement/${p.slug}`,identifier:p.doi,version:p.version,datePublished:p.published}))}).replace(/</g,"\\u003c")}}/>
    <header className="qm-hero">
      <div><p className="qm-eyebrow">Shadow Theory / Quantum foundations / Version 2</p><h1>Quantum<br/>measurement.<br/><em>From source to record.</em></h1>
        <p className="qm-hero-intro">A wave describes possibilities. An event picks out a history. A physical record must preserve what happened. This programme builds the connections through two explicit constitutive completions.</p>
        <div className="qm-actions"><Link className="qm-button qm-button-primary" href="/quantum-measurement/monograph">Read the full monograph <span aria-hidden="true">↗</span></Link><a className="qm-button" href="#two-completions">Explore the mechanisms <span aria-hidden="true">↓</span></a></div>
        <p className="qm-author">Jeremy Rodgers · Independent Researcher · 15 September 2026</p>
      </div><CompletionPortrait/>
    </header>
    <nav className="qm-index-bar" aria-label="Programme contents"><a href="#the-question"><span>01</span>The question</a><a href="#two-completions"><span>02</span>Two completions</a><a href="#reading-paths"><span>03</span>Reading paths</a><a href="#publications"><span>04</span>Publications</a><a href="#research-status"><span>05</span>Research status</a></nav>
    <section id="the-question" className="qm-section">
      <div className="qm-section-head"><div><p className="qm-eyebrow">01 / The measurement question</p><h2>Three questions. One complete experiment.</h2></div><p>The Born rule connects wave weights to outcome statistics. A complete measurement theory also needs actual events and material records.</p></div>
      <div className="qm-distinction"><article><span className="qm-large-number">i.</span><h3>What evolves?</h3><p>Source dynamics specifies the coherent field and its currents. The source/readout distinction asks which structures an observation preserves, and which it loses.</p><p className="qm-caption">Coherent dynamics → currents and weights</p></article><article><span className="qm-large-number">ii.</span><h3>What happens?</h3><p>Equal one-time probabilities can belong to different histories. Selecting individual events requires a law for paths, with its interaction and preparation assumptions stated.</p><p className="qm-caption">Event law → actual history</p></article><article><span className="qm-large-number">iii.</span><h3>What remains?</h3><p>A later memory must be faithful to its earlier declaration. The experiment includes the apparatus, archives, reset receivers, loss products and any returning information.</p><p className="qm-caption">Physical acquisition → retained record</p></article></div>
    </section>
    <section id="two-completions" className="qm-section">
      <div className="qm-section-head"><div><p className="qm-eyebrow">02 / Explore the constructions</p><h2>Two routes through the same question.</h2></div><p>A constitution states what exists, how it interacts and how it is prepared. Each route closes its own assumption-to-prediction chain.</p></div>
      <QuantumProgramme/>
      <div className="qm-comparison" role="region" aria-label="Comparison of constitutive completions" tabIndex={0}><table><caption className="sr-only">Static comparison of the pilot-medium and massive-configuration completions</caption><thead><tr><th scope="col">The distinction</th><th scope="col">Pilot medium</th><th scope="col">Massive configuration</th></tr></thead><tbody>
        <tr><th scope="row">Actual history</th><td>A tagged ordinary configuration, with discrete events generated by a deterministic pilot medium.</td><td>A continuous configuration of massive material positions governed by kinetic-momentum guidance.</td></tr>
        <tr><th scope="row">Selection premises</th><td>P1–P4, signed export and reactions, independent spatial gas and carrier preparation.</td><td>Universal material inventory, the guidance law and complete initial equilibrium with finite ready resources.</td></tr>
        <tr><th scope="row">Main result</th><td>Complete tagged paths converge in total variation to the minimal Bell process in unchanged physical time.</td><td>A finite measurement-chain realization with controlled retained-output and archive-history errors.</td></tr>
        <tr><th scope="row">Record mechanism</th><td>In the Bell limit, monomial copy cuts are crossed once on the finite clock’s first pass. Finite pilots inherit controlled path and record error.</td><td>Stationary storage plus derivative-controlled absolute archive flux for the autonomous controller.</td></tr>
        <tr><th scope="row">Domain</th><td>Fixed finite ordinary graph and horizon; finite resources have controlled deviations from the limit.</td><td>A smooth finite nonrelativistic material programme; guidance and equilibrium remain physical premises.</td></tr>
      </tbody></table></div>
    </section>
    <section id="reading-paths" className="qm-section">
      <div className="qm-section-head"><div><p className="qm-eyebrow">03 / Reading paths</p><h2>Start with the question you care about.</h2></div><p>The overview explains the architecture. The web editions contain the complete scientific arguments, with the original publications alongside them.</p></div>
      <div className="qm-reading-grid">
        <article className="qm-reading-card"><span className="qm-eyebrow">The broad picture</span><h3>Why probabilities<br/>are only part of the story</h3><p>Follow the distinction between source information, a selected event history and a lasting physical record.</p><ol><li><Link href="/quantum-measurement/monograph">Begin with the abstract and roadmap</Link></li><li><a href="#two-completions">Compare the two constitutions</a></li><li><Link href="/atlas?focus=measurement-programme">Place measurement in the Reality Atlas</Link></li></ol><Link className="qm-text-link" href="/quantum-measurement/monograph">Enter the monograph <span aria-hidden="true">↗</span></Link></article>
        <article className="qm-reading-card"><span className="qm-eyebrow">The discrete construction</span><h3>From signed action<br/>to complete Bell paths</h3><p>Inspect the microscopic catalogue, the three successive comparisons and the autonomous record construction.</p><ol><li><Link href="/quantum-measurement/pilot-medium#sec:source">Canonical currents and export</Link></li><li><Link href="/quantum-measurement/pilot-medium#thm:main">The full physical-time path limit</Link></li><li><Link href="/quantum-measurement/pilot-medium#sec:rivals">Rivals, retained information and scope</Link></li></ol><Link className="qm-text-link" href="/quantum-measurement/pilot-medium">Read the pilot-medium paper <span aria-hidden="true">↗</span></Link></article>
        <article className="qm-reading-card"><span className="qm-eyebrow" style={{color:"var(--qm-violet)"}}>The continuous construction</span><h3>Guided positions.<br/>Protected material archives.</h3><p>Follow the exact massive writer through nulls, reset, a retained clock and noncommuting continuation.</p><ol><li><Link href="/quantum-measurement/massive-configuration#sec:constitution">Material, guidance and equilibrium premises</Link></li><li><Link href="/quantum-measurement/massive-configuration#sec:detector">The physical pointer and crossing law</Link></li><li><Link href="/quantum-measurement/massive-configuration#thm:closure">Complete measurement-chain closure</Link></li></ol><Link className="qm-text-link" href="/quantum-measurement/massive-configuration">Read the massive-configuration paper <span aria-hidden="true">↗</span></Link></article>
      </div>
    </section>
    <section id="publications" className="qm-section">
      <div className="qm-section-head"><div><p className="qm-eyebrow">04 / The publications</p><h2>The full arguments, in full view.</h2></div><p>Three version 2 publications. Each web edition preserves its own source statements, numbering, proofs and bibliography.</p></div>
      {publications.map(p=><article className="qm-publication" key={p.slug}><span className="qm-publication-number">{p.number}</span><div><p className="qm-eyebrow" style={{marginTop:0,marginBottom:10}}>{p.kind}</p><h3><Link href={`/quantum-measurement/${p.slug}`}>{p.title}</Link></h3><p>{p.description}</p><p>{p.author} · Version {p.version} · {p.dateLabel}</p><div className="qm-publication-links"><a href={`https://doi.org/${p.doi}`}>DOI ↗</a><a href={`/publications/quantum-measurement/${p.slug}.pdf`}>Download PDF ↓</a><a href={`/publications/quantum-measurement/${p.slug}.tex`}>LaTeX source ↓</a><a href={`/publications/quantum-measurement/${p.slug}.md`}>Markdown ↓</a></div></div><Link className="qm-button" href={`/quantum-measurement/${p.slug}`}>Read online <span aria-hidden="true">↗</span></Link></article>)}
    </section>
    <section id="research-status" className="qm-section qm-status"><div><p className="qm-eyebrow">05 / Research status</p><h2>An internal resolution<br/>with named physical premises.</h2><Link href="/problems/quantum-measurement" className="qm-text-link">Research status and historical development <span aria-hidden="true">↗</span></Link></div><div><p>The September 2026 publications give two mathematically closed measurement constructions within their stated constitutions. The pilot completion supplies a controlled effective Bell law and material records. The massive completion supplies an alternative operational theory with continuous actual motion.</p><p>Source/readout incompleteness motivates the problem; it does not derive the new interaction catalogue, guidance law or preparation statistics. The publications establish internal results. Independent external verification and empirical confirmation are not established by these publications.</p><p>The original counterexamples retain their force in the constitutions they address. Broader preparation domains, exact finite-resource Bell dynamics, a smooth realization of the entire hybrid source and extended storage remain identified extensions. The <Link href="/monograph" className="text-glow hover:underline">TOE monograph</Link> remains a separate publication and complete web edition.</p></div></section>
    <section className="qm-section qm-atlas-banner"><div><p className="qm-eyebrow">The connected framework</p><h2>See where measurement sits.</h2><p>Trace source dynamics, event selection, Born statistics and physical archives in the Reality Atlas. Its connections distinguish mathematical dependencies from conceptual relationships.</p></div><Link href="/atlas?focus=measurement-programme" className="qm-button">Explore the Reality Atlas <span aria-hidden="true">↗</span></Link></section>
  </div>;
}
