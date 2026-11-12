"use client";

/**
 * The reading panel: what a stage contains, what an entry says, and which
 * observable to trace. All text comes from the Atlas data; nothing is written
 * here that makes a scientific claim.
 */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useId, useRef, type KeyboardEvent, type ReactNode } from "react";
import AtlasPictureNote from "@/components/atlas/atlas-picture-note";
import { StatusChip, StatusMark } from "@/components/atlas/atlas-status";
import { stageLeadEntry, type PanelTab } from "@/atlas/model";
import { atlasIdeas, type AtlasViewId } from "@/data/atlas/views";
import {
  atlasNodeMap,
  atlasStats,
  atlasTours,
  getConnections,
  getStageGroups,
  observableRoutes,
  researchEntryIds,
  stageMeta,
  stageOrder,
  statusMeta,
  statusOrder,
  type AtlasConnection,
  type AtlasNode,
  type AtlasStage,
  type ObservableRoute,
} from "@/data/reality-atlas";

// The equation renderer (KaTeX) is fetched the first time an Equations tab is opened, not with the page.
const AtlasEquationCard = dynamic(() => import("@/components/atlas/atlas-equation"), {
  ssr: false,
  loading: () => <p className="atlas-empty">Setting the equations…</p>,
});

const TABS: Array<{ id: PanelTab; label: string }> = [
  { id: "overview", label: "Overview" },
  { id: "equations", label: "Equations" },
  { id: "connections", label: "Connections" },
];

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const formatDate = (iso?: string) => {
  if (!iso) return null;
  const time = Date.parse(iso);
  return Number.isNaN(time) ? iso : dateFormat.format(time);
};

// ───────────────────────────── Entry rows ─────────────────────────────

export function EntryRow({
  node,
  onOpen,
  onHover,
  current,
}: {
  node: AtlasNode;
  onOpen: (id: string) => void;
  onHover?: (id: string | null) => void;
  current?: boolean;
}) {
  return (
    <li>
      <a
        href={`/atlas?focus=${node.id}`}
        className="atlas-row"
        aria-current={current ? "true" : undefined}
        onClick={(event) => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
          event.preventDefault();
          onOpen(node.id);
        }}
        onMouseEnter={onHover ? () => onHover(node.id) : undefined}
        onMouseLeave={onHover ? () => onHover(null) : undefined}
        onFocus={onHover ? () => onHover(node.id) : undefined}
        onBlur={onHover ? () => onHover(null) : undefined}
      >
        <StatusMark status={node.status} />
        <span className="atlas-row-text">
          <span className="atlas-row-label">{node.label}</span>
          <span className="atlas-row-summary">{node.summary}</span>
        </span>
        <span className="atlas-row-status">{statusMeta[node.status].label}</span>
      </a>
    </li>
  );
}

// ───────────────────────────── Stage view ─────────────────────────────

/** One plate of the worked example: marks as dots, with or without the pair separated. */
function PlateSketch({ split }: { split: boolean }) {
  const singles: Array<[number, number]> = [[34, 30], [78, 26], [96, 62], [58, 84], [24, 70]];
  return (
    <svg viewBox="0 0 120 110" role="img" aria-label={split ? "Readout plate with the second probe: one mark has separated into two" : "Readout plate: every mark looks single"}>
      <circle cx="60" cy="55" r="50" fill="none" stroke="hsl(var(--brass))" strokeWidth="2" />
      <circle cx="60" cy="55" r="46" fill="hsl(220 12% 6%)" />
      <path d="M60 11v88M16 55h88" stroke="hsl(var(--border-strong))" strokeWidth="0.6" />
      {singles.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="hsl(40 20% 88%)" opacity="0.92" />)}
      {split ? (
        <>
          <path d="M49 49L71 61" stroke="hsl(40 20% 80%)" strokeWidth="0.8" />
          <circle cx="49" cy="49" r="5" fill="hsl(var(--amber))" />
          <circle cx="71" cy="61" r="5" fill="hsl(var(--accent-strong))" />
        </>
      ) : (
        <circle cx="60" cy="55" r="5.6" fill="hsl(40 20% 96%)" />
      )}
    </svg>
  );
}

/**
 * What a readout keeps. The Atlas's worked example of the foundation papers,
 * operated by the second probe. It is written out here in words and two
 * drawings, so it reads the same with the still picture or with none.
 */
function ReadoutExample({ probe, onProbe, onOpen }: { probe: boolean; onProbe: (on: boolean) => void; onOpen: (id: string) => void }) {
  const entryLink = (id: string, label: string) => (
    <a
      href={`/atlas?focus=${id}`}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
        event.preventDefault();
        onOpen(id);
      }}
    >
      {label}
    </a>
  );
  return (
    <section className="atlas-try" aria-labelledby="atlas-try-heading">
      <p className="section-label">Try it</p>
      <h3 id="atlas-try-heading">What a readout keeps</h3>
      <p>
        Close the iris and the marks on the plate sharpen. A few never divide. Each of those is{" "}
        <strong>two sources landing on one spot</strong>, and no setting of the iris tells them apart: the plate does
        not hold the difference.
      </p>
      <p>
        Swing in the second probe and each pair separates. A readout answers a question exactly when the answer is the
        same for every source behind a given mark. When it is not, a further readout that keeps the missing
        distinction settles it, and the least such addition can be constructed.
      </p>
      <div className="atlas-try-figure">
        <figure data-active={!probe}>
          <PlateSketch split={false} />
          <figcaption><b>One readout</b>Two sources, one mark.</figcaption>
        </figure>
        <figure data-active={probe}>
          <PlateSketch split />
          <figcaption><b>With the second probe</b>The pair is told apart.</figcaption>
        </figure>
      </div>
      <div className="atlas-actions">
        <button type="button" className="atlas-button is-primary" aria-pressed={probe} onClick={() => onProbe(!probe)}>
          {probe ? "Swing the probe aside" : "Swing in the second probe"}
        </button>
      </div>
      <p className="atlas-try-links">
        {entryLink("foundation-non-equivalence", "Non-equivalence")}
        {entryLink("foundation-target-necessity", "When a readout suffices")}
        {entryLink("foundation-minimal-completion", "Canonical completion")}
        {entryLink("foundation-rs2-witness", "Equal readouts, different futures")}
      </p>
    </section>
  );
}

export function StageView({
  stage,
  onOpen,
  onStage,
  onHover,
  onStartTour,
  onChooseTrace,
  onSearch,
  onAboutPicture,
  probe,
  onProbe,
  onView,
  headingRef,
}: {
  stage: AtlasStage;
  onOpen: (id: string) => void;
  onStage: (stage: AtlasStage) => void;
  onHover: (id: string | null) => void;
  onStartTour: (id: string) => void;
  onChooseTrace: () => void;
  onSearch: () => void;
  onAboutPicture: () => void;
  probe: boolean;
  onProbe: (on: boolean) => void;
  onView: (view: AtlasViewId) => void;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
}) {
  const meta = stageMeta[stage];
  const groups = getStageGroups(stage);
  const leadId = stageLeadEntry[stage];
  const lead = leadId ? atlasNodeMap.get(leadId) : null;
  const position = stageOrder.indexOf(stage);

  return (
    <div className="atlas-view">
      <p className="section-label">{stage === "overview" ? "The Reality Atlas" : `Stage ${position} of ${stageOrder.length - 1}`}</p>
      <h2 ref={headingRef} tabIndex={-1} className="atlas-view-title">{meta.title}</h2>
      <p className="atlas-view-lead">{meta.blurb}</p>

      {stage === "overview" ? (
        <>
          <p className="atlas-view-text">
            Read the bench from left to right as an order of dependence. Ω is the source structure. The law fixes what
            is lawful in it, the aperture routes it, and the canonical field carries it. The plate is Tier 1:
            spacetime, quantum fields, matter and the observers among them. Light stands for what each stage hands to
            the next, and the galaxy lies beyond the plate because the world is on the readout side.
          </p>
          <div className="atlas-actions">
            <button type="button" className="atlas-button is-primary" onClick={() => onStartTour("essentials")}>Take the ten-stop tour</button>
            <button type="button" className="atlas-button" onClick={onChooseTrace}>Trace an observable</button>
            <button type="button" className="atlas-button" onClick={onSearch}>Search the Atlas</button>
          </div>

          <section className="atlas-ideas" aria-labelledby="atlas-ideas-heading">
            <h3 id="atlas-ideas-heading">Start from an idea</h3>
            <ul>
              {atlasIdeas.map((idea) => (
                <li key={idea.label}>
                  <button
                    type="button"
                    onClick={() => {
                      if (idea.view) onView(idea.view);
                      else if (idea.tour) onStartTour(idea.tour);
                      else if (idea.entry) onOpen(idea.entry);
                    }}
                  >
                    <strong>{idea.label}</strong>
                    <span>{idea.text}</span>
                    <em>{idea.view ? "View" : idea.tour ? "Tour" : "Entry"}</em>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <h3 className="atlas-view-subhead">The five stages</h3>
          <ol className="atlas-stage-list">
            {stageOrder.filter((id) => id !== "overview").map((id) => {
              const count = getStageGroups(id).reduce((total, group) => total + group.nodes.length, 0);
              return (
                <li key={id}>
                  <button type="button" onClick={() => onStage(id)}>
                    <span className="atlas-stage-symbol" aria-hidden="true">{stageMeta[id].symbol}</span>
                    <span className="atlas-stage-text">
                      <strong>{stageMeta[id].title}</strong>
                      <span>{stageMeta[id].blurb}</span>
                    </span>
                    <span className="atlas-stage-count">{count}<span className="sr-only"> entries</span></span>
                  </button>
                </li>
              );
            })}
          </ol>
          <ReadoutExample probe={probe} onProbe={onProbe} onOpen={onOpen} />
        </>
      ) : null}
      {stage === "readout" ? (
        <>
          <p className="atlas-view-text">
            Two further views are drawn on this plate. Boundary reads its rim as boundary data and shows what those
            readings reach inside. History draws a small physical history with an observer in it.
          </p>
          <div className="atlas-actions">
            <button type="button" className="atlas-button is-primary" onClick={() => onView("boundary")}>Read the boundary</button>
            <button type="button" className="atlas-button" onClick={() => onView("history")}>A history, from inside</button>
          </div>
          <ReadoutExample probe={probe} onProbe={onProbe} onOpen={onOpen} />
        </>
      ) : null}

      {lead ? (
        <a
          href={`/atlas?focus=${lead.id}`}
          className="atlas-lead-entry"
          onClick={(event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
            event.preventDefault();
            onOpen(lead.id);
          }}
        >
          <span className="atlas-lead-eyebrow">{lead.eyebrow}</span>
          <strong>{lead.label}</strong>
          <span className="atlas-lead-summary">{lead.summary}</span>
          <span className="atlas-lead-foot"><StatusChip status={lead.status} /><span className="atlas-lead-more">Read this entry →</span></span>
        </a>
      ) : null}

      {groups.map((group, index) => (
        <details key={group.id} className="atlas-group" open={index < 2 || groups.length <= 3}>
          <summary>
            <span className="atlas-group-label">{group.label}</span>
            <span className="atlas-group-count">{group.nodes.length}</span>
          </summary>
          <p className="atlas-group-blurb">{group.blurb}</p>
          <ul className="atlas-rows">
            {group.nodes.map((node) => (
              <EntryRow key={node.id} node={node} onOpen={onOpen} onHover={group.id === "sectors" ? onHover : undefined} />
            ))}
          </ul>
        </details>
      ))}

      {stage === "overview" ? (
        <>
          <section className="atlas-tours" aria-labelledby="atlas-tours-heading">
            <h3 id="atlas-tours-heading">Guided tours</h3>
            <ul>
              {atlasTours.filter((tour) => tour.nodeIds.length > 0).map((tour) => (
                <li key={tour.id}>
                  <button type="button" onClick={() => onStartTour(tour.id)}>
                    <strong>{tour.label}</strong>
                    <span>{tour.description}</span>
                    <em>{tour.nodeIds.length} stops</em>
                  </button>
                </li>
              ))}
            </ul>
          </section>
          <section className="atlas-counts" aria-labelledby="atlas-counts-heading">
            <h3 id="atlas-counts-heading">What the Atlas holds</h3>
            <dl>
              <div><dt>Entries</dt><dd>{atlasStats.representedNodes}</dd></div>
              <div><dt>Connections</dt><dd>{atlasStats.representedEdges}</dd></div>
              <div><dt>Papers and articles linked</dt><dd>{atlasStats.papersLinked}</dd></div>
              <div><dt>Equations shown</dt><dd>{atlasStats.equationsShown}</dd></div>
              <div><dt>Observable traces</dt><dd>{atlasStats.traces}</dd></div>
            </dl>
            <ul className="atlas-status-counts">
              {statusOrder.map((status) => (
                <li key={status} title={statusMeta[status].explanation}>
                  <StatusMark status={status} />
                  <span>{statusMeta[status].label}</span>
                  <strong>{atlasStats.statusCounts[status]}</strong>
                </li>
              ))}
            </ul>
            <p className="atlas-counts-note">
              {atlasStats.architectureEntries} entries are typed structures of the realization programme, whose source text
              runs to {atlasStats.chapters} chapters and {atlasStats.equationTags.toLocaleString("en-GB")} numbered equations.{" "}
              {atlasStats.researchEntries} are drawn from published papers and articles. Counts are computed from the data.
            </p>
          </section>
          <p className="atlas-view-text">
            <button type="button" className="atlas-link" onClick={onAboutPicture}>What each part of the instrument stands for</button>.
          </p>
        </>
      ) : null}
    </div>
  );
}

// ───────────────────────────── Entry view ─────────────────────────────

function ContractRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function ConnectionList({ title, items, onOpen }: { title: string; items: AtlasConnection[]; onOpen: (id: string) => void }) {
  if (!items.length) return null;
  return (
    <section className="atlas-connections">
      <h3>{title}</h3>
      <ul>
        {items.map(({ node, edge }) => (
          <li key={node.id} data-relationship={edge?.relationship ?? "structural"}>
            <a
              href={`/atlas?focus=${node.id}`}
              onClick={(event) => {
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
                event.preventDefault();
                onOpen(node.id);
              }}
            >
              <span className="atlas-connection-line" aria-hidden="true" />
              <span className="atlas-connection-text">
                <strong>{node.label}</strong>
                {edge ? <span>{edge.label}</span> : null}
              </span>
              <span className="atlas-connection-kind">
                {edge?.relationship === "mathematical" ? "Mathematical" : edge?.relationship === "conceptual" ? "Conceptual" : stageMeta[node.stage].label}
              </span>
            </a>
            {edge && (edge.map || edge.validityDomain) ? (
              <details className="atlas-edge">
                <summary>Details of this connection</summary>
                <dl>
                  <ContractRow label="Map" value={edge.map} />
                  <ContractRow label="From" value={edge.domain} />
                  <ContractRow label="To" value={edge.codomain} />
                  <ContractRow label="Holds where" value={edge.validityDomain} />
                  <ContractRow label="Checked by" value={edge.verifier} />
                  <ContractRow label="Error model" value={edge.errorModel} />
                  <ContractRow label="Linearization" value={edge.linearization} />
                  <ContractRow label="Adjoint" value={edge.adjoint} />
                </dl>
                {edge.partial ? <p>This map is partial: it is defined only on the stated domain.</p> : null}
              </details>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function EntryView({
  node,
  tab,
  onTab,
  onOpen,
  onBack,
  onShare,
  shared,
  context,
  plate,
  headingRef,
}: {
  node: AtlasNode;
  tab: PanelTab;
  onTab: (tab: PanelTab) => void;
  onOpen: (id: string) => void;
  onBack: () => void;
  onShare: () => void;
  shared: boolean;
  /** A strip above the entry while a tour or a trace is running. */
  context?: ReactNode;
  /** Set when this entry has something to show on the readout plate. */
  plate?: { label: string; shown: boolean; onShow: () => void };
  headingRef: React.RefObject<HTMLHeadingElement | null>;
}) {
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const connections = getConnections(node.id);
  const connectionCount = connections.incoming.length + connections.outgoing.length;
  const counts: Record<PanelTab, number | null> = { overview: null, equations: node.equations.length, connections: connectionCount };
  const isResearch = researchEntryIds.has(node.id);
  const hasContract = Boolean(node.mathematicalType);
  const added = formatDate(node.added);

  const onTabKey = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = TABS.findIndex((item) => item.id === tab);
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % TABS.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + TABS.length) % TABS.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = TABS.length - 1;
    else return;
    event.preventDefault();
    event.stopPropagation();
    onTab(TABS[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <article className="atlas-view atlas-entry" aria-labelledby={`${tabsId}-title`}>
      {context}
      <div className="atlas-entry-bar">
        <button type="button" className="atlas-back" onClick={onBack}>
          <span aria-hidden="true">←</span> {stageMeta[node.stage].title}
        </button>
        <button type="button" className="atlas-share" onClick={onShare}>{shared ? "Link copied" : "Copy link"}</button>
      </div>

      <p className="section-label">{node.eyebrow}</p>
      <h2 ref={headingRef} id={`${tabsId}-title`} tabIndex={-1} className="atlas-view-title">{node.label}</h2>
      <div className="atlas-entry-status">
        <StatusChip status={node.status} />
        <p>{node.statusNote}</p>
      </div>
      <p className="atlas-entry-summary">{node.summary}</p>
      {plate ? (
        <div className="atlas-actions atlas-entry-plate">
          <button type="button" className="atlas-button is-primary" onClick={plate.onShow} disabled={plate.shown}>
            {plate.shown ? "Shown on the plate" : `${plate.label} →`}
          </button>
        </div>
      ) : null}

      <div className="atlas-tabs" role="tablist" aria-label="Sections of this entry" onKeyDown={onTabKey}>
        {TABS.map((item, index) => (
          <button
            key={item.id}
            ref={(element) => { tabRefs.current[index] = element; }}
            type="button"
            role="tab"
            id={`${tabsId}-tab-${item.id}`}
            aria-selected={tab === item.id}
            aria-controls={`${tabsId}-panel-${item.id}`}
            tabIndex={tab === item.id ? 0 : -1}
            onClick={() => onTab(item.id)}
          >
            {item.label}
            {counts[item.id] !== null ? <span className="atlas-tab-count">{counts[item.id]}</span> : null}
          </button>
        ))}
      </div>

      {tab === "overview" ? (
        <div role="tabpanel" id={`${tabsId}-panel-overview`} aria-labelledby={`${tabsId}-tab-overview`} className="atlas-tabpanel">
          {node.description.split(/\n{2,}/).map((paragraph, index) => <p key={index} className="atlas-entry-text">{paragraph}</p>)}
          {node.atlasNote ? (
            <aside className="atlas-aside">
              <p className="atlas-aside-label">Note</p>
              <p>{node.atlasNote}</p>
            </aside>
          ) : null}
          {node.gate ? (
            <aside className="atlas-aside is-gate">
              <p className="atlas-aside-label">Gate</p>
              <p>{node.gate}</p>
            </aside>
          ) : null}
          {node.recovery.length ? (
            <section className="atlas-facts">
              <h3>Recovers</h3>
              <ul>{node.recovery.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          ) : null}

          {node.paper ? (
            <section className="atlas-paper">
              <h3>{isResearch ? "Source" : "Publication"}</h3>
              <p className="atlas-paper-title"><Link href={node.paper.url}>{node.paper.title}</Link></p>
              <p className="atlas-paper-meta">
                {formatDate(node.paper.date)}
                {node.paper.doi ? <> · <a href={`https://doi.org/${node.paper.doi}`} rel="noopener">doi:{node.paper.doi}</a></> : null}
              </p>
            </section>
          ) : null}

          {node.readingLinks?.length ? (
            <section className="atlas-reading">
              <h3>Read in full</h3>
              <ul>
                {node.readingLinks.map((link) => (
                  <li key={link.href}><Link href={link.href}>{link.label}<span aria-hidden="true"> →</span></Link></li>
                ))}
              </ul>
            </section>
          ) : null}

          {hasContract ? (
            <details className="atlas-contract">
              <summary>Typed contract</summary>
              <p>What this structure is, what it takes and gives, and under which conditions, as stated in the realization programme.</p>
              <dl>
                <ContractRow label="Mathematical type" value={node.mathematicalType} />
                <ContractRow label="Domain" value={node.domain} />
                <ContractRow label="Codomain" value={node.codomain} />
                <ContractRow label="Regularity" value={node.regularity} />
                <ContractRow label="Covariance" value={node.covariance} />
                <ContractRow label="Units" value={node.units} />
                <ContractRow label="State variables" value={node.stateVariables} />
                <ContractRow label="Boundary class" value={node.boundaryClass} />
                <ContractRow label="Branch domain" value={node.branchDomain} />
                <ContractRow label="Approximation order" value={node.approximationOrder} />
                <ContractRow label="Error norm" value={node.errorNorm} />
              </dl>
            </details>
          ) : null}

          <p className="atlas-provenance">
            {isResearch ? null : <>Reality model · chapter {node.chapter} · {node.section}. </>}
            {node.provenance ? <>{node.provenance} </> : null}
            {added ? <>Entry {isResearch ? "added" : "revised"} {added}.</> : null}
          </p>
        </div>
      ) : null}

      {tab === "equations" ? (
        <div role="tabpanel" id={`${tabsId}-panel-equations`} aria-labelledby={`${tabsId}-tab-equations`} className="atlas-tabpanel">
          {node.equations.length ? (
            node.equations.map((equation) => <AtlasEquationCard key={`${equation.tag}-${equation.title}`} equation={equation} />)
          ) : (
            <p className="atlas-empty">This entry carries no displayed equation. {node.readingLinks?.length ? "The full text is linked under Overview." : ""}</p>
          )}
        </div>
      ) : null}

      {tab === "connections" ? (
        <div role="tabpanel" id={`${tabsId}-panel-connections`} aria-labelledby={`${tabsId}-tab-connections`} className="atlas-tabpanel">
          {connectionCount ? (
            <>
              <p className="atlas-connection-key">
                <span data-relationship="mathematical"><i aria-hidden="true" /> Mathematical: a dependence the sources prove.</span>
                <span data-relationship="conceptual"><i aria-hidden="true" /> Conceptual: a reading relationship. No theorem is transferred.</span>
              </p>
              <ConnectionList title="Comes from" items={connections.incoming} onOpen={onOpen} />
              <ConnectionList title="Leads to" items={connections.outgoing} onOpen={onOpen} />
            </>
          ) : (
            <p className="atlas-empty">No connection to another entry is declared for this one.</p>
          )}
        </div>
      ) : null}
    </article>
  );
}

// ───────────────────────────── Trace chooser ─────────────────────────────

export function TraceChooser({
  onStart,
  onHover,
  headingRef,
}: {
  onStart: (id: string) => void;
  onHover: (route: ObservableRoute | null) => void;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
}) {
  return (
    <div className="atlas-view">
      <p className="section-label">Trace</p>
      <h2 ref={headingRef} tabIndex={-1} className="atlas-view-title">Follow one observable back toward the source</h2>
      <p className="atlas-view-lead">
        Each trace lists the entries a readout depends on, in order. Step toward the source or back toward the screen.
      </p>
      <p className="atlas-view-text">
        A trace follows dependence inside the Atlas. It does not reconstruct a unique source: in general a readout does not determine one.
      </p>
      <ul className="atlas-traces">
        {observableRoutes.map((route) => (
          <li key={route.id}>
            <button
              type="button"
              onClick={() => onStart(route.id)}
              onMouseEnter={() => onHover(route)}
              onMouseLeave={() => onHover(null)}
              onFocus={() => onHover(route)}
              onBlur={() => onHover(null)}
            >
              <strong>{route.shortLabel}</strong>
              <span className="atlas-trace-output">{route.output}</span>
              <span className="atlas-trace-steps">{route.nodeIds.length} steps</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** The strip shown above an entry while a trace is running. */
export function TraceContext({ route }: { route: ObservableRoute }) {
  return (
    <aside className="atlas-context">
      <p className="atlas-context-label">Trace · {route.shortLabel}</p>
      <p>{route.description}</p>
      <p className="atlas-context-output"><span>Readout</span> {route.output}</p>
    </aside>
  );
}

export function TourContext({ label, description }: { label: string; description: string }) {
  return (
    <aside className="atlas-context">
      <p className="atlas-context-label">Tour · {label}</p>
      <p>{description}</p>
    </aside>
  );
}

export { AtlasPictureNote };
