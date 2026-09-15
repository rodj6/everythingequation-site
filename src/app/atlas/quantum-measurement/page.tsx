import type { Metadata } from "next";
import Link from "next/link";
import { atlasEdges, atlasNodeMap, getAtlasNode, measurementNodeIds } from "@/data/reality-atlas";
import { site } from "@/config/site";

const description = "Locate the two Quantum Measurement constitutions in the Reality Atlas: source currents, pilot-medium Bell paths, massive guidance, Born statistics and retained material records, with explicit mathematical and conceptual connections.";

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
        description, url: new URL("/atlas/quantum-measurement", site.url).toString(), datePublished: "2026-09-15",
        author: { "@type": "Person", name: "Jeremy Rodgers" },
        about: measurementNodeIds.map((id) => ({ "@type": "Thing", name: getAtlasNode(id).label })),
      }).replace(/</g, "\\u003c") }} />
      <header className="atlas-guide-head">
        <p className="section-label">Reality Atlas / Quantum Measurement</p>
        <h1>Where a source becomes<br />a recorded history.</h1>
        <p>The Atlas connects the new measurement programme to the wider source-to-readout architecture. Follow two distinct physical constructions, and keep their assumptions attached to every result.</p>
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
