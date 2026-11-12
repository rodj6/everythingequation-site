"use client";

/**
 * The three views of the Atlas (Instrument, Boundary, History): the switch
 * between them, the controls of the two plate views, and their reading panels.
 *
 * The wording, links, kinds of feature and sets of readings come from
 * src/data/atlas/views.ts. Nothing here draws on the plate; that is
 * src/atlas/lenses.
 */
import Link from "next/link";
import type { ReactNode, RefObject } from "react";
import { evaluateBoundary, readingSet, type BoundaryState } from "@/atlas/lenses/boundary";
import { evaluateHistory, type HistoryState } from "@/atlas/lenses/history";
import { atlasNodeMap } from "@/data/reality-atlas";
import { boundaryView, historyView, viewMeta, viewOrder, type AtlasViewId, type BoundaryKind, type ViewLink } from "@/data/atlas/views";

// ───────────────────────────── The switch ─────────────────────────────

export function ViewSwitch({ view, onView }: { view: AtlasViewId; onView: (view: AtlasViewId) => void }) {
  return (
    <div className="atlas-viewswitch" role="group" aria-label="View of the instrument">
      {viewOrder.map((id) => (
        <button key={id} type="button" aria-pressed={view === id} title={viewMeta[id].hint} onClick={() => onView(id)}>
          <ViewIcon view={id} />
          <span>{viewMeta[id].label}</span>
        </button>
      ))}
    </div>
  );
}

function ViewIcon({ view }: { view: AtlasViewId }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      {view === "instrument" ? (
        <>
          <path d="M2 12.5h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <circle cx="4" cy="8.5" r="1.6" stroke="currentColor" strokeWidth="1.3" />
          <path d="M8 5.5v6M11 6.5v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <circle cx="14.2" cy="8.5" r="2.3" stroke="currentColor" strokeWidth="1.3" />
        </>
      ) : view === "boundary" ? (
        <>
          <circle cx="9" cy="9" r="6.6" stroke="currentColor" strokeWidth="1.1" opacity="0.5" />
          <path d="M3.3 12.3A6.6 6.6 0 0 1 5.7 3.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M3.3 12.3C6.4 10.9 7.2 6.6 5.7 3.3" stroke="currentColor" strokeWidth="1.1" />
        </>
      ) : (
        <>
          <path d="M5 2.5v13M13 2.5v13" stroke="currentColor" strokeWidth="1.1" opacity="0.6" strokeLinecap="round" />
          <path d="M5 12.5l8-1M5 8.5l8-1" stroke="currentColor" strokeWidth="1.1" />
          <circle cx="13" cy="7.5" r="2" fill="currentColor" />
        </>
      )}
    </svg>
  );
}

// ───────────────────────────── Boundary: controls ─────────────────────────────

export function BoundaryControls({ state, onChange }: { state: BoundaryState; onChange: (next: BoundaryState) => void }) {
  const { arc } = boundaryView;
  const fill = ((state.arc - arc.min) / (arc.max - arc.min)) * 100;
  const set = readingSet(state.readings);
  return (
    <div className="atlas-platecontrols" role="group" aria-label="Boundary readings">
      <div className="atlas-slider atlas-aperture">
        <label htmlFor="atlas-boundary-arc">
          <span className="atlas-aperture-name">Region read</span>
          <span className="atlas-aperture-words">{state.arc >= 359.5 ? "The whole rim" : `${Math.round(state.arc)}° of the rim`}</span>
        </label>
        <input
          id="atlas-boundary-arc"
          type="range"
          min={arc.min}
          max={arc.max}
          step={arc.step}
          value={state.arc}
          style={{ ["--fill" as string]: `${fill}%` }}
          aria-valuetext={state.arc >= 359.5 ? "The whole rim" : `${Math.round(state.arc)} degrees of the rim`}
          onChange={(event) => onChange({ ...state, arc: Number(event.target.value) })}
        />
      </div>
      <div className="atlas-slider atlas-aperture">
        <label htmlFor="atlas-boundary-at">
          <span className="atlas-aperture-name">Turn the region</span>
          <span className="atlas-aperture-words">or press anywhere on the plate</span>
        </label>
        <input
          id="atlas-boundary-at"
          type="range"
          min={0}
          max={355}
          step={5}
          value={Math.round(state.at / 5) * 5 % 360}
          style={{ ["--fill" as string]: `${(state.at / 355) * 100}%` }}
          aria-valuetext={`Centred at ${Math.round(state.at)} degrees`}
          onChange={(event) => onChange({ ...state, at: Number(event.target.value) })}
        />
      </div>
      <div className="atlas-choice" role="group" aria-label="Which readings are taken">
        {boundaryView.readingSets.map((item) => (
          <button key={item.id} type="button" aria-pressed={set.id === item.id} title={item.hint} onClick={() => onChange({ ...state, readings: item.id })}>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ───────────────────────────── History: controls ─────────────────────────────

export function HistoryControls({ state, onChange }: { state: HistoryState; onChange: (next: HistoryState) => void }) {
  const last = historyView.occasions.length - 1;
  const occasion = historyView.occasions[Math.min(last, Math.max(0, state.occasion))];
  return (
    <div className="atlas-platecontrols" role="group" aria-label="The listener's occasion">
      <div className="atlas-slider atlas-aperture">
        <label htmlFor="atlas-history-occasion">
          <span className="atlas-aperture-name">Occasion on the listener&rsquo;s path</span>
          <span className="atlas-aperture-words">{occasion.at} ms · {occasion.label}</span>
        </label>
        <div className="atlas-slider-steps">
          <button type="button" onClick={() => onChange({ ...state, occasion: Math.max(0, state.occasion - 1) })} disabled={state.occasion <= 0} aria-label="Earlier occasion">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <input
            id="atlas-history-occasion"
            type="range"
            min={0}
            max={last}
            step={1}
            value={state.occasion}
            style={{ ["--fill" as string]: `${(state.occasion / last) * 100}%` }}
            aria-valuetext={`${occasion.at} milliseconds. ${occasion.label}`}
            onChange={(event) => onChange({ ...state, occasion: Number(event.target.value) })}
          />
          <button type="button" onClick={() => onChange({ ...state, occasion: Math.min(last, state.occasion + 1) })} disabled={state.occasion >= last} aria-label="Later occasion">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
      <div className="atlas-probe">
        <span className="atlas-aperture-name" id="atlas-retain-name">Retention</span>
        <button type="button" role="switch" aria-checked={state.retain} aria-labelledby="atlas-retain-name atlas-retain-words" onClick={() => onChange({ ...state, retain: !state.retain })}>
          <span aria-hidden="true" className="atlas-probe-track"><span /></span>
          <span id="atlas-retain-words" className="atlas-probe-words">{state.retain ? "On" : "Off"}</span>
        </button>
      </div>
    </div>
  );
}

// ───────────────────────────── Panels ─────────────────────────────

function ViewLinks({ links, onOpen }: { links: ViewLink[]; onOpen: (id: string) => void }) {
  return (
    <ul className="atlas-viewlinks">
      {links.map((link) => {
        if (link.entry && atlasNodeMap.has(link.entry)) {
          return (
            <li key={link.label}>
              <a
                href={`/atlas?focus=${link.entry}`}
                onClick={(event) => {
                  if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
                  event.preventDefault();
                  onOpen(link.entry!);
                }}
              >
                <span>{link.label}</span>
                <em>Atlas entry</em>
              </a>
            </li>
          );
        }
        return link.href ? (
          <li key={link.label}>
            <Link href={link.href} prefetch={false}><span>{link.label}</span><em>Read</em></Link>
          </li>
        ) : null;
      })}
    </ul>
  );
}

function KindGlyph({ glyph, status }: { glyph: BoundaryKind["glyph"]; status: "read" | "detected" | "open" }) {
  const stroke = status === "detected" ? "#ffaa70" : status === "read" ? "#ffe8c2" : "#9fb4cc";
  const dash = status === "open" ? "2.2 2.2" : undefined;
  const fill = status === "read" && glyph !== "ripple" ? stroke : "none";
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
      {status === "detected" ? <circle cx="13" cy="13" r="10.5" fill="none" stroke={stroke} strokeWidth="1" opacity="0.5" /> : null}
      {glyph === "dot" ? (
        <circle cx="13" cy="13" r="4.2" fill={fill} stroke={stroke} strokeWidth="1.4" strokeDasharray={dash} />
      ) : glyph === "diamond" ? (
        <path d="M13 6.8l4.6 6.2-4.6 6.2-4.6-6.2z" fill={fill} stroke={stroke} strokeWidth="1.4" strokeDasharray={dash} strokeLinejoin="round" />
      ) : (
        <path d="M3 13c2 0 2-3 4-3s2 6 4 6 2-9 4-9 2 6 4 6 2-2 4-2" fill="none" stroke={stroke} strokeWidth="1.5" strokeDasharray={dash} strokeLinecap="round" />
      )}
    </svg>
  );
}

interface PanelProps {
  headingRef: RefObject<HTMLHeadingElement | null>;
  onOpen: (id: string) => void;
  onBack: () => void;
  onStartTour: (id: string) => void;
  /** Extra content under the heading (for example the context of a tour). */
  children?: ReactNode;
}

export function BoundaryPanel({ state, onChange, headingRef, onOpen, onBack, onStartTour }: PanelProps & { state: BoundaryState; onChange: (next: BoundaryState) => void }) {
  const result = evaluateBoundary(state);
  const set = readingSet(state.readings);
  return (
    <div className="atlas-view atlas-plateview">
      <button type="button" className="atlas-back" onClick={onBack}>← The instrument</button>
      <p className="section-label">View · the readout plate</p>
      <h2 ref={headingRef} tabIndex={-1} className="atlas-view-title">{boundaryView.title}</h2>
      <p className="atlas-view-lead">{boundaryView.lead}</p>

      <section className="atlas-says" aria-labelledby="atlas-says-heading">
        <h3 id="atlas-says-heading">What these readings settle</h3>
        <p aria-live="polite">{result.summary}</p>
        <p className="atlas-says-set">
          {set.says}{" "}
          {set.source.href ? <Link href={set.source.href} prefetch={false} className="atlas-link">{set.source.label}</Link> : null}
        </p>
        <div className="atlas-actions">
          {boundaryView.arc.presets.map((preset) => (
            <button key={preset.label} type="button" className="atlas-button" aria-pressed={Math.abs(state.arc - preset.value) < 0.5} onClick={() => onChange({ ...state, arc: preset.value })}>
              {preset.label}
            </button>
          ))}
        </div>
      </section>

      {boundaryView.intro.map((text) => <p key={text.slice(0, 24)} className="atlas-view-text">{text}</p>)}

      <section className="atlas-key" aria-labelledby="atlas-key-heading">
        <h3 id="atlas-key-heading">On the disc</h3>
        <dl>
          {boundaryView.kinds.map((kind) => {
            const reading = set.reads[kind.id] ?? "open";
            return (
              <div key={kind.id}>
                <dt><KindGlyph glyph={kind.glyph} status={reading} /><span>{kind.label}</span><em>{reading === "read" ? "recovered where reached" : reading === "detected" ? "detected where reached" : "left open"}</em></dt>
                <dd>{kind.what}</dd>
              </div>
            );
          })}
        </dl>
        <p className="atlas-key-note">
          A bright mark is settled by the readings chosen. A faint, shifting outline is left open: the readings are
          the same whichever version is there. Rings spreading from a mark show something registered and not mapped.
        </p>
      </section>

      {[boundaryView.distinct, boundaryView.literal, boundaryView.heading].map((block) => (
        <section key={block.title} className="atlas-viewnote">
          <h3>{block.title}</h3>
          <p>{block.text}</p>
        </section>
      ))}

      <section className="atlas-viewnote" aria-labelledby="atlas-boundary-links">
        <h3 id="atlas-boundary-links">Read the mathematics</h3>
        <ViewLinks links={boundaryView.links} onOpen={onOpen} />
        <div className="atlas-actions">
          <button type="button" className="atlas-button" onClick={() => onStartTour("boundary")}>Take the gravity tour</button>
        </div>
      </section>
    </div>
  );
}

export function HistoryPanel({ state, onChange, headingRef, onOpen, onBack, onStartTour }: PanelProps & { state: HistoryState; onChange: (next: HistoryState) => void }) {
  const result = evaluateHistory(state);
  return (
    <div className="atlas-view atlas-plateview">
      <button type="button" className="atlas-back" onClick={onBack}>← The instrument</button>
      <p className="section-label">View · the readout plate</p>
      <h2 ref={headingRef} tabIndex={-1} className="atlas-view-title">{historyView.title}</h2>
      <p className="atlas-view-lead">{historyView.lead}</p>

      <section className="atlas-says" aria-labelledby="atlas-says-heading">
        <h3 id="atlas-says-heading">What the listener holds</h3>
        <p aria-live="polite">{result.summary}</p>
        <ol className="atlas-occasions">
          {historyView.occasions.map((occasion, index) => (
            <li key={occasion.at}>
              <button type="button" aria-current={state.occasion === index ? "step" : undefined} onClick={() => onChange({ ...state, occasion: index })}>
                <span>{occasion.at} ms</span>
                {occasion.label}
              </button>
            </li>
          ))}
        </ol>
        <div className="atlas-actions">
          <button type="button" className="atlas-button" aria-pressed={!state.retain} onClick={() => onChange({ ...state, retain: !state.retain })}>
            {state.retain ? "Switch retention off" : "Switch retention on"}
          </button>
        </div>
      </section>

      {historyView.intro.map((text) => <p key={text.slice(0, 24)} className="atlas-view-text">{text}</p>)}

      <section className="atlas-key" aria-labelledby="atlas-key-heading">
        <h3 id="atlas-key-heading">On the plate</h3>
        <dl className="is-plain">
          <div><dt>Blue points</dt><dd>The notes as events at the source. They are drawn solid at every occasion, because they are part of the history whether or not they have reached the listener.</dd></div>
          <div><dt>Blue lines</dt><dd>Each note on its way across. A dashed line has not yet arrived at the chosen occasion.</dd></div>
          <div><dt>Warm points</dt><dd>Arrivals on the listener&rsquo;s line. The brightest is live; a paler filled one is retained; a hollow one is no longer held.</dd></div>
          <div><dt>Warm arrow</dt><dd>A step that is heard: a retained note and the next, taken up together.</dd></div>
        </dl>
      </section>

      {historyView.after.map((text) => <p key={text.slice(0, 24)} className="atlas-view-text">{text}</p>)}

      <section className="atlas-viewnote">
        <h3>{historyView.literal.title}</h3>
        <p>{historyView.literal.text}</p>
      </section>

      <section className="atlas-viewnote" aria-labelledby="atlas-history-links">
        <h3 id="atlas-history-links">Read the argument</h3>
        <ViewLinks links={historyView.links} onOpen={onOpen} />
        <div className="atlas-actions">
          <button type="button" className="atlas-button" onClick={() => onStartTour("time")}>Take the tour of time and the observer</button>
        </div>
      </section>
    </div>
  );
}
