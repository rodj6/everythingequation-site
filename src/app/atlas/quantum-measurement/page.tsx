import type { Metadata } from "next";
import Link from "next/link";
import { atlasEdges, atlasNodeMap, getAtlasNode, measurementNodeIds } from "@/data/reality-atlas";
import { site } from "@/config/site";

const description = "Explore equilibrium, conditional preparation, deterministic histories, retained quantum sources and faithful records in the Reality Atlas, with complete research articles and their mathematical relationships.";

export const metadata: Metadata = {
  title: "Quantum Measurement in the Atlas",
  description,
  alternates: { canonical: "/atlas/quantum-measurement" },
};
export const dynamic = "force-static";

const lanes = [
  { id: "pilot", title: "I · Pilot-medium constitution", className: "", items: [
    { id: "measurement-source", title: "Individual source currents", text: "The bond action and conservative signed export" },
    { id: "pilot-medium", title: "A finite deterministic medium", text: "Independent spatial gas · recombination · residence tracking" },
    { id: "bell-event-law", title: "The complete Bell-path limit", text: "Total variation on paths in unchanged physical time" },
    { id: "material-records", title: "Actual sampled-history copies", text: "Monomial cuts · first-pass clock · retained resources" },
  ] },
  { id: "massive", title: "II · Massive-configuration constitution", className: "is-massive", items: [
    { id: "massive-configuration", title: "Guidance and complete equilibrium", text: "Independent physical postulates in one massive inventory" },
    { id: "massive-configuration", title: "An exact physical-time pointer", text: "Add the specified smooth forced-trap writer" },
    { id: "massive-configuration", title: "A retained autonomous controller", text: "Add the finite clock and its approximation estimates" },
    { id: "material-records", title: "Protected historical archives", text: "Stationary traps · absolute archive-flux bounds" },
  ] },
];

export default function MeasurementAtlasGuide() {
  return (
    <article className="atlas-field-guide">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article", headline: "Quantum Measurement in the Reality Atlas",
        description, url: new URL("/atlas/quantum-measurement", site.url).toString(), datePublished: "2026-09-15", dateModified: "2026-10-09",
        author: { "@type": "Person", name: "Jeremy Rodgers" },
        about: measurementNodeIds.map((id) => ({ "@type": "Thing", name: getAtlasNode(id).label })),
      }).replace(/</g, "\\u003c") }} />
      <header className="atlas-guide-head">
        <p className="section-label">Reality Atlas / Quantum Measurement</p>
        <h1>Where a source becomes<br />a recorded history.</h1>
        <p>The Atlas connects equilibrium, event histories and physical records to the wider source-to-readout architecture. The two construction routes below sit alongside equilibrium uniqueness, conditional preparation, quantitative nonequilibrium records and the analytic tools for retained sources.</p>
        <div className="atlas-guide-actions">
          <Link href="/atlas?focus=measurement-programme">Enter this region of the Atlas ↗</Link>
          <Link href="/quantum-measurement">Programme and complete publications →</Link>
        </div>
      </header>

      <figure className="atlas-guide-map">
        <div className="atlas-guide-context">
          <strong>The source / readout distinction supplies the question.</strong>
          <p>Each constitution supplies additional dynamics and preparation. The dashed context connection makes no derivation of these laws from incompleteness.</p>
        </div>
        <div className="atlas-guide-lanes">
          {lanes.map((lane) => <div key={lane.id} className={`atlas-guide-lane ${lane.className}`}>
            <p>{lane.title}</p>
            <ol>{lane.items.map((item, index) => <li key={`${item.id}-${index}`}><a href={`#${item.id}`}><strong>{item.title}</strong><small>{item.text}</small></a></li>)}</ol>
          </div>)}
        </div>
        <figcaption>This is a schematic of the arguments, with no numerical or experimental claim. The solid links show steps inside a declared constitution. The two branches meet at questions about outputs and faithful records; their axioms and actual path spaces remain distinct.</figcaption>
      </figure>

      <section className="atlas-guide-relations" aria-label="How to read Atlas connections">
        <div><h2>Solid · Mathematical dependence</h2><p>A source construction, theorem or comparison supplies an input or consequence under named hypotheses. Read its domain, horizon, output space and error estimate in the node details.</p></div>
        <div><h2>Dashed · Conceptual relationship</h2><p>A connection identifies context or a related question. It transfers no theorem. In particular, material records still need the Atlas’s wider objectivity and reconstruction criteria before they serve as geometric input.</p></div>
      </section>

      <section className="atlas-guide-relations" aria-label="October research connections">
        <div><h2>Why the Born measure?</h2><p><Link href="/quantum-measurement/research/control-consistency">Control consistency</Link> singles out a regular density assignment using local scalar controls and fixed interactions. <Link href="/quantum-measurement/research/preparation-returns">Preparation returns</Link> single out an arbitrary Borel law at an engineered reference preparation. They answer different statistical questions.</p></div>
        <div><h2>What survives beyond equilibrium?</h2><p><Link href="/quantum-measurement/research/nonequilibrium-records">Two finite record models</Link> bound both the joint calibrated symbolic history and failure to retain an actual earlier label. Their Hamiltonians, input domains and numerical constants stay separate.</p></div>
      </section>
      <section id="retained-systems" className="space-y-5 scroll-mt-24" aria-labelledby="retained-systems-heading">
        <div>
          <p className="section-label">9 October portfolio · Four complete articles</p>
          <h2 id="retained-systems-heading" className="text-2xl font-bold tracking-tight">Prepare, record, transport and estimate</h2>
          <p className="mt-3 leading-relaxed text-mute">These papers examine the complete retained experiment from four directions. Preparation keeps the archive, resetting keeps the correlations, transport keeps the original law, and current estimates keep the quantum source and its feedback.</p>
        </div>
        <div className="atlas-guide-relations">
          <div><h3 className="font-semibold text-lg"><Link href="/quantum-measurement/research/conditional-gaussian-preparation">Conditional Gaussian preparation →</Link></h3><p>A smooth reversible construction prepares a writer conditionally on its retained archive under physical score and moment assumptions. Its instrument result uses a separate receiver and covers one admitted unknown input.</p></div>
          <div><h3 className="font-semibold text-lg"><Link href="/quantum-measurement/research/repeated-position-records">Repeated position records →</Link></h3><p>A finite protocol writes and preserves distinct receiver records through copying, calibrated wave reset and later operations. The whole-bank law and retained correlations remain part of the theorem.</p></div>
          <div><h3 className="font-semibold text-lg"><Link href="/quantum-measurement/research/reference-weighted-flows">Deterministic flows →</Link></h3><p>Complete currents select reference-compatible histories under explicit regularity and boundary assumptions. Reweighting those paths transports admitted original laws, including applications with singular interactions and retained sources.</p></div>
          <div><h3 className="font-semibold text-lg"><Link href="/quantum-measurement/research/complete-current-estimates">Complete-current estimates →</Link></h3><p>Coherent response estimates retain source motion, interference, reciprocal feedback and continua. The coupled Coulomb electron and oscillator example gives quantitative current bounds for its declared parent.</p></div>
        </div>
        <p className="text-sm leading-relaxed text-mute">The links describe conditional interfaces. A prepared writer does not establish the repeated-record bank premises; wave reset does not renew actual independence; current comparison needs the stated geometry and flow before it controls a history probability. Portfolio paper labels P1 to P4 are distinct from the pilot interaction axioms with those names.</p>
      </section>
      <p className="section-label">Seven connected locations</p>
      <nav className="atlas-guide-index" aria-label="Measurement Atlas contents">
        {measurementNodeIds.map((id) => <a href={`#${id}`} key={id}>{getAtlasNode(id).shortLabel}</a>)}
      </nav>

      {measurementNodeIds.map((id, index) => {
        const node = getAtlasNode(id);
        const outgoing = atlasEdges.filter((edge) => edge.from === id);
        return <section key={id} id={id} className="atlas-guide-node">
          <header>
            <p className="section-label">{String(index + 1).padStart(2, "0")} / {node.kind === "observable" ? "Output and records" : "Source and construction"}</p>
            <h2>{node.label}</h2>
            <Link href={`/atlas?focus=${id}`}>Inspect in the interactive Atlas ↗</Link>
          </header>
          <div>
            <p className="atlas-guide-summary">{node.summary}</p>
            <p>{node.description}</p>
            <dl><dt>Assumptions and domain</dt><dd>{node.domain}</dd><dt>What follows</dt><dd>{node.codomain}</dd>{node.gate ? <><dt>Scope</dt><dd>{node.gate}</dd></> : null}</dl>
            {node.readingLinks?.length ? <nav className="atlas-reading-links" aria-label={`Publication reading for ${node.shortLabel}`}><h3>Read the exact construction</h3>{node.readingLinks.map((link) => <Link key={link.href} href={link.href}>{link.label} →</Link>)}</nav> : null}
            {outgoing.length ? <div className="atlas-guide-links" aria-label="Outgoing Atlas connections">{outgoing.map((edge) => <Link key={edge.id} href={`/atlas?focus=${edge.to}&tab=interfaces`} title={edge.validityDomain}>{edge.relationship === "mathematical" ? "→" : "⇢"} {atlasNodeMap.get(edge.to)?.shortLabel} · {edge.relationship}</Link>)}</div> : null}
          </div>
        </section>;
      })}
    </article>
  );
}
