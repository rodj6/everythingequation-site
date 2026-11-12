/**
 * The Boundary and History views, written out as ordinary sections of the
 * page below the instrument. They carry the same explanation as the panels of
 * the two views, so the ideas can be read, linked to and found without
 * running the interactive picture. The wording comes from src/data/atlas/views.ts.
 */
import Link from "next/link";
import { atlasNodeMap } from "@/data/reality-atlas";
import { boundaryView, historyView, type ViewLink } from "@/data/atlas/views";

function Links({ links }: { links: ViewLink[] }) {
  return (
    <ul className="atlas-section-links">
      {links.map((link) => {
        const node = link.entry ? atlasNodeMap.get(link.entry) : null;
        if (node) return <li key={link.label}><a href={`/atlas?focus=${node.id}`} data-atlas-entry={node.id}>{link.label}</a></li>;
        return link.href ? <li key={link.label}><Link href={link.href} prefetch={false}>{link.label}</Link></li> : null;
      })}
    </ul>
  );
}

export default function AtlasViewSections() {
  return (
    <div className="atlas-view-sections">
      <section id="boundary" aria-labelledby="atlas-boundary-heading">
        <p className="section-label">View · Boundary</p>
        <h2 id="atlas-boundary-heading">{boundaryView.title}</h2>
        <p className="atlas-reading-lead">{boundaryView.lead}</p>
        {boundaryView.intro.map((text) => <p key={text.slice(0, 24)}>{text}</p>)}
        <dl className="atlas-section-list">
          {boundaryView.readingSets.map((set) => (
            <div key={set.id}>
              <dt>{set.label}</dt>
              <dd>
                {set.says}{" "}
                {set.source.href ? <Link href={set.source.href} prefetch={false}>{set.source.label}</Link> : null}
              </dd>
            </div>
          ))}
        </dl>
        <p>{boundaryView.distinct.text}</p>
        <p>{boundaryView.literal.text}</p>
        <p>{boundaryView.heading.text}</p>
        <p className="atlas-section-open">
          <a href="/atlas?lens=boundary" data-atlas-view="boundary">Open the Boundary view on the plate ↑</a>
        </p>
        <Links links={boundaryView.links} />
      </section>

      <section id="history" aria-labelledby="atlas-history-heading">
        <p className="section-label">View · History</p>
        <h2 id="atlas-history-heading">{historyView.title}</h2>
        <p className="atlas-reading-lead">{historyView.lead}</p>
        {historyView.intro.map((text) => <p key={text.slice(0, 24)}>{text}</p>)}
        <dl className="atlas-section-list">
          {historyView.occasions.map((occasion) => (
            <div key={occasion.at}>
              <dt>{occasion.at} ms · {occasion.label}</dt>
              <dd>{occasion.says}</dd>
            </div>
          ))}
        </dl>
        {historyView.after.map((text) => <p key={text.slice(0, 24)}>{text}</p>)}
        <p>{historyView.literal.text}</p>
        <p className="atlas-section-open">
          <a href="/atlas?lens=history" data-atlas-view="history">Open the History view on the plate ↑</a>
        </p>
        <Links links={historyView.links} />
      </section>
    </div>
  );
}
