"use client";

/**
 * The controls under the instrument: the stage rail, the iris, and, when a
 * tour or a trace is running, its stepper.
 */
import { atlasNodeMap, atlasTours, stageMeta, stageOrder, type AtlasStage, type AtlasTour, type ObservableRoute } from "@/data/reality-atlas";

// ───────────────────────────── Stage rail ─────────────────────────────

export function StageRail({ stage, onStage }: { stage: AtlasStage; onStage: (stage: AtlasStage) => void }) {
  return (
    <nav className="atlas-rail" aria-label="Stages of the instrument">
      <ol>
        {stageOrder.map((id) => {
          const meta = stageMeta[id];
          const current = id === stage;
          return (
            <li key={id}>
              <button type="button" aria-current={current ? "step" : undefined} onClick={() => onStage(id)} title={meta.title}>
                <span className="atlas-rail-symbol" aria-hidden="true">{meta.symbol}</span>
                <span className="atlas-rail-label">{meta.label}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// ───────────────────────────── Iris ─────────────────────────────

export function apertureWords(aperture: number): string {
  if (aperture < 0.22) return "Stopped down: every mark distinct";
  if (aperture < 0.62) return "Partly open";
  return "Wide open: neighbours merge";
}

export function ApertureControl({
  aperture,
  onChange,
  steps,
}: {
  aperture: number;
  onChange: (value: number) => void;
  /** With the still picture only a few settings exist; the slider then moves between those. */
  steps?: readonly number[];
}) {
  const percent = Math.round(aperture * 100);
  const nearestStep = steps
    ? steps.reduce((best, step, index) => (Math.abs(step - aperture) < Math.abs(steps[best] - aperture) ? index : best), 0)
    : 0;
  const fill = steps ? (nearestStep / (steps.length - 1)) * 100 : percent;
  return (
    <div className="atlas-aperture">
      <label htmlFor="atlas-aperture-input">
        <span className="atlas-aperture-name">Iris</span>
        <span className="atlas-aperture-words">{apertureWords(aperture)}</span>
      </label>
      <div className="atlas-aperture-track">
        <span aria-hidden="true" className="atlas-aperture-icon is-closed" />
        <input
          id="atlas-aperture-input"
          type="range"
          min={0}
          max={steps ? steps.length - 1 : 100}
          step={1}
          value={steps ? nearestStep : percent}
          aria-valuetext={`${percent} percent open. ${apertureWords(aperture)}`}
          style={{ ["--fill" as string]: `${fill}%` }}
          onChange={(event) => {
            const value = Number(event.target.value);
            onChange(steps ? steps[value] : value / 100);
          }}
        />
        <span aria-hidden="true" className="atlas-aperture-icon is-open" />
      </div>
    </div>
  );
}

// ───────────────────────────── Second probe ─────────────────────────────

export function probeWords(on: boolean): string {
  return on ? "In the light: paired marks separate" : "Aside: some marks hide two sources";
}

/**
 * The second probe. A switch, because it has two positions: aside, or in the
 * light. It is the Atlas's working example of a second readout.
 */
export function ProbeControl({ on, onChange }: { on: boolean; onChange: (on: boolean) => void }) {
  return (
    <div className="atlas-probe">
      <span className="atlas-aperture-name" id="atlas-probe-name">Second probe</span>
      <button type="button" role="switch" aria-checked={on} aria-labelledby="atlas-probe-name atlas-probe-words" aria-keyshortcuts="P" onClick={() => onChange(!on)}>
        <span aria-hidden="true" className="atlas-probe-track"><span /></span>
        <span id="atlas-probe-words" className="atlas-probe-words">{on ? "In" : "Out"}</span>
      </button>
    </div>
  );
}

// ───────────────────────────── Tour stepper ─────────────────────────────

export function TourBar({
  tour,
  index,
  onStep,
  onTour,
  onExit,
}: {
  tour: AtlasTour;
  index: number;
  onStep: (delta: number) => void;
  onTour: (id: string) => void;
  onExit: () => void;
}) {
  const total = tour.nodeIds.length;
  const safeIndex = Math.max(0, index);
  const node = atlasNodeMap.get(tour.nodeIds[safeIndex]);
  return (
    <div className="atlas-stepper" role="group" aria-label="Guided tour">
      <div className="atlas-stepper-head">
        <label className="atlas-stepper-select">
          <span className="sr-only">Tour</span>
          <select value={tour.id} onChange={(event) => onTour(event.target.value)}>
            {atlasTours.filter((item) => item.nodeIds.length > 0).map((item) => (
              <option key={item.id} value={item.id}>{item.label} · {item.nodeIds.length} stops</option>
            ))}
          </select>
        </label>
        <button type="button" className="atlas-stepper-exit" onClick={onExit}>End tour</button>
      </div>
      <div className="atlas-stepper-row">
        <button type="button" onClick={() => onStep(-1)} disabled={safeIndex <= 0} aria-label="Previous stop">
          <Arrow direction="left" />
        </button>
        <p aria-live="polite">
          <span className="atlas-stepper-count">Stop {safeIndex + 1} of {total}</span>
          <strong>{node?.label ?? ""}</strong>
        </p>
        <button type="button" onClick={() => onStep(1)} disabled={safeIndex >= total - 1} aria-label="Next stop">
          <Arrow direction="right" />
        </button>
      </div>
      <div className="atlas-stepper-progress" aria-hidden="true">
        <span style={{ width: `${((safeIndex + 1) / total) * 100}%` }} />
      </div>
    </div>
  );
}

// ───────────────────────────── Trace stepper ─────────────────────────────

export function TraceBar({
  route,
  index,
  onStep,
  onSelect,
  onExit,
}: {
  route: ObservableRoute;
  index: number;
  onStep: (delta: number) => void;
  onSelect: (id: string) => void;
  onExit: () => void;
}) {
  const total = route.nodeIds.length;
  const safeIndex = index < 0 ? total - 1 : index;
  return (
    <div className="atlas-stepper is-trace" role="group" aria-label={`Trace: ${route.shortLabel}`}>
      <div className="atlas-stepper-head">
        <p className="atlas-stepper-title"><span>Trace</span> {route.shortLabel}</p>
        <button type="button" className="atlas-stepper-exit" onClick={onExit}>Choose another</button>
      </div>
      <div className="atlas-stepper-row">
        <button type="button" onClick={() => onStep(-1)} disabled={safeIndex <= 0}>
          <Arrow direction="left" />
          <span>Toward source</span>
        </button>
        <ol className="atlas-chain" aria-label="Steps of this trace, from source to readout">
          {route.nodeIds.map((id, position) => {
            const node = atlasNodeMap.get(id);
            if (!node) return null;
            return (
              <li key={id}>
                <button
                  type="button"
                  aria-current={position === safeIndex ? "step" : undefined}
                  data-passed={position >= safeIndex ? "true" : "false"}
                  onClick={() => onSelect(id)}
                  title={node.label}
                >
                  <span className="sr-only">{position + 1}. {node.label}</span>
                </button>
              </li>
            );
          })}
        </ol>
        <button type="button" onClick={() => onStep(1)} disabled={safeIndex >= total - 1}>
          <span>Toward readout</span>
          <Arrow direction="right" />
        </button>
      </div>
    </div>
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d={direction === "left" ? "M10 3L5 8l5 5" : "M6 3l5 5-5 5"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
