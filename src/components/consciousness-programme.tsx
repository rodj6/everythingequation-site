import Link from "next/link";
import { researchPapers } from "@/lib/consciousness-research";

export default function ConsciousnessProgramme({compact=false,hub=false}:{compact?:boolean;hub?:boolean}) {
  return <section className={`c-programme ${compact?"c-programme-compact":""}`} aria-labelledby="programme-title">
    <div className="c-section-heading"><div><p className="c-eyebrow">One programme / four publications</p><h2 id="programme-title">{hub?<>One foundation.<br/>Three new investigations.</>:<>From a perspective<br/>to its physical realization.</>}</h2></div>{!hub&&<Link href="/consciousness/research">Explore the research programme ↗</Link>}</div>
    {!compact&&<p className="c-programme-intro">SPC-2 gives the framework its constitutive laws. Three connected investigations put its boundaries, learning procedures and realization criteria under precise mathematical pressure. Follow the argument all the way through.</p>}
    <div className="c-programme-grid"><Link href="/consciousness/monograph"><span className="c-eyebrow">01 / Foundation</span><h3>How does awareness<br/>become a lived world?</h3><p>The philosophy, physics and mathematics of Shadow Theory and the SPC-2 constitution.</p><span className="c-programme-link">The complete monograph ↗</span></Link>{researchPapers.map(p=><Link key={p.id} href={p.url}><span className="c-eyebrow">0{p.number} / {p.step}</span><h3>{p.shortTitle}</h3><p>{p.deck}</p><span className="c-programme-link">Read the full investigation ↗</span></Link>)}</div>
  </section>;
}
