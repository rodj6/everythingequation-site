/**
 * The whole Atlas as a plain document: every entry under its stage, with its
 * status, summary and source. Rendered on the server, so it is readable
 * without the 3D picture, without JavaScript, and by search engines.
 *
 * With JavaScript running, a link here opens its entry in the instrument above
 * (see atlas-experience.tsx); without it, the list still says what the Atlas
 * holds and links to the full texts.
 */
import Link from "next/link";
import { StatusMark } from "@/components/atlas/atlas-status";
import { atlasStats, getStageGroups, stageMeta, stageOrder, statusMeta, statusOrder } from "@/data/reality-atlas";

export default function AtlasIndex() {
  return (
    <section className="atlas-index" aria-labelledby="atlas-index-heading">
      <header className="atlas-index-head">
        <p className="section-label">Index</p>
        <h2 id="atlas-index-heading">Every entry, by stage</h2>
        <p>
          {atlasStats.representedNodes} entries and {atlasStats.representedEdges} connections. Each entry states what kind of claim it
          makes. Choose one to open it in the instrument, or follow its link to the full text.
        </p>
      </header>

      {/* Filter by status. Works without JavaScript: the list responds to the checked option in CSS. */}
      <fieldset className="atlas-filter">
        <legend>Show</legend>
        <label>
          <input type="radio" name="atlas-status-filter" id="atlas-filter-all" defaultChecked />
          <span>All <em>{atlasStats.representedNodes}</em></span>
        </label>
        {statusOrder.map((status) => (
          <label key={status} title={statusMeta[status].explanation}>
            <input type="radio" name="atlas-status-filter" id={`atlas-filter-${status}`} />
            <span><StatusMark status={status} />{statusMeta[status].label} <em>{atlasStats.statusCounts[status]}</em></span>
          </label>
        ))}
      </fieldset>

      {stageOrder.map((stage) => {
        const groups = getStageGroups(stage);
        if (!groups.length) return null;
        const meta = stageMeta[stage];
        return (
          <section key={stage} className="atlas-index-stage" aria-labelledby={`atlas-index-${stage}`}>
            <div className="atlas-index-stage-head">
              <h3 id={`atlas-index-${stage}`}>
                <a href={`/atlas?stage=${stage}`} data-atlas-stage={stage}>
                  <span aria-hidden="true">{meta.symbol}</span> {meta.title}
                </a>
              </h3>
              <p>{meta.blurb}</p>
            </div>
            <div className="atlas-index-groups">
              {groups.map((group) => (
                <div key={group.id} className="atlas-index-group">
                  <h4>{group.label}</h4>
                  <ul>
                    {group.nodes.map((node) => (
                      <li key={node.id} data-status={node.status}>
                        <a href={`/atlas?focus=${node.id}`} data-atlas-entry={node.id}>
                          <StatusMark status={node.status} />
                          <span className="atlas-index-label">{node.label}</span>
                          <span className="atlas-index-status">{statusMeta[node.status].label}</span>
                        </a>
                        <p>{node.summary}</p>
                        {node.paper ? (
                          <p className="atlas-index-source">
                            <Link href={node.paper.url}>{node.paper.title}</Link>
                            {node.paper.doi ? <> · <a href={`https://doi.org/${node.paper.doi}`} rel="noopener">doi:{node.paper.doi}</a></> : null}
                          </p>
                        ) : node.readingLinks?.length ? (
                          <p className="atlas-index-source"><Link href={node.readingLinks[0].href}>{node.readingLinks[0].label}</Link></p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </section>
  );
}
