"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent, ReactNode } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import AtlasSceneBoundary, { AtlasSceneFallback } from "@/components/atlas/atlas-scene-boundary";
import AtlasEquationCard from "@/components/atlas/atlas-equation";
import {
  atlasEdges,
  atlasNodeMap,
  atlasStats,
  getAtlasNode,
  guidedTour,
  observableRoutes,
  searchAtlas,
  stageRail,
  tierMeta,
  type AtlasNode,
} from "@/data/reality-atlas";

type AtlasMode = "explore" | "guided" | "trace";
type InspectorTab = "overview" | "equations" | "interfaces";

const AtlasScene = dynamic(() => import("@/components/atlas/atlas-scene"), { ssr: false });
const INSPECTOR_TABS: InspectorTab[] = ["overview", "equations", "interfaces"];
const SUGGESTED_NODE_IDS = ["omega", "aperture", "canonical-field", "quantum-records", "gravity", "matter", "parameter-selection", "cosmology"];
const EMPTY_TRACE_IDS: string[] = [];
const FOCUSABLE_SELECTOR = "button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex='-1'])";

function isTextEntryTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return target.matches("input, textarea, select, [contenteditable='true']");
}

function isNavigationControlTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return Boolean(target.closest("button, a[href], [role='tabpanel']"));
}

function Icon({ name }: { name: "search" | "expand" | "reset" | "close" | "info" | "arrow" | "layers" | "share" }) {
  const paths: Record<typeof name, ReactNode> = {
    search: <><circle cx="10.5" cy="10.5" r="5.5" /><path d="m15 15 4.5 4.5" /></>,
    expand: <><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" /></>,
    reset: <><path d="M4 11a8 8 0 1 1 2.2 6" /><path d="M4 5v6h6" /></>,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7.5h.01" /></>,
    arrow: <path d="m9 18 6-6-6-6" />,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    share: <><circle cx="18" cy="5" r="2" /><circle cx="6" cy="12" r="2" /><circle cx="18" cy="19" r="2" /><path d="m8 11 8-5M8 13l8 5" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function TypeRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="atlas-type-row">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function ConnectionButton({
  id,
  direction,
  currentId,
  onSelect,
}: {
  id: string;
  direction: "upstream" | "downstream";
  currentId: string;
  onSelect: (id: string) => void;
}) {
  const node = atlasNodeMap.get(id);
  if (!node) return null;
  const edge = atlasEdges.find((candidate) => direction === "upstream"
    ? candidate.from === id && candidate.to === currentId
    : candidate.from === currentId && candidate.to === id);
  const contract = edge
    ? [
        `${edge.label}: ${edge.map}`,
        `Linearization: ${edge.linearization}`,
        `Adjoint: ${edge.adjoint}`,
        `Validity: ${edge.validityDomain}`,
        `Error model: ${edge.errorModel}`,
        `Map class: ${edge.partial ? "partial" : "total"}`,
      ].join("\n")
    : undefined;
  return (
    <button
      type="button"
      className="atlas-connection"
      onClick={() => onSelect(id)}
      style={{ "--connection-color": node.color } as CSSProperties}
      title={contract}
      aria-label={`${direction === "upstream" ? "Arrives from" : "Continues to"} ${node.label}${edge ? ` through ${edge.map}` : ""}`}
    >
      {direction === "upstream" ? <Icon name="arrow" /> : null}
      <span>
        <small>{tierMeta[node.tier].label}{edge ? ` · ${edge.map}` : ""}</small>
        {node.shortLabel}
      </span>
      {direction === "downstream" ? <Icon name="arrow" /> : null}
    </button>
  );
}

function Inspector({
  node,
  tab,
  traceIds,
  onTab,
  onClose,
  onSelect,
  onShare,
}: {
  node: AtlasNode;
  tab: InspectorTab;
  traceIds: string[];
  onTab: (tab: InspectorTab) => void;
  onClose: () => void;
  onSelect: (id: string) => void;
  onShare: () => void;
}) {
  const traceIndex = traceIds.indexOf(node.id);
  return (
    <aside className="atlas-inspector" aria-label={`Details for ${node.label}`}>
      <div className="atlas-inspector-head">
        <div>
          <p style={{ color: node.color }}>{node.eyebrow}</p>
          <h2>{node.label}</h2>
        </div>
        <div className="atlas-inspector-actions">
          <button type="button" onClick={onShare} aria-label="Copy a link to this atlas location" title="Copy link">
            <Icon name="share" />
          </button>
          <button type="button" onClick={onClose} aria-label="Close details" title="Close details">
            <Icon name="close" />
          </button>
        </div>
      </div>

      {traceIndex >= 0 ? (
        <div className="atlas-trace-position">
          <span style={{ width: `${((traceIndex + 1) / traceIds.length) * 100}%`, background: node.color }} />
          <small>Trace step {traceIndex + 1} of {traceIds.length}</small>
        </div>
      ) : null}

      <nav className="atlas-inspector-tabs" aria-label="Inspector sections" role="tablist">
        {INSPECTOR_TABS.map((item, index) => (
          <button
            type="button"
            key={item}
            onClick={() => onTab(item)}
            onKeyDown={(event) => {
              let nextIndex = index;
              if (event.key === "ArrowRight") nextIndex = (index + 1) % INSPECTOR_TABS.length;
              else if (event.key === "ArrowLeft") nextIndex = (index - 1 + INSPECTOR_TABS.length) % INSPECTOR_TABS.length;
              else if (event.key === "Home") nextIndex = 0;
              else if (event.key === "End") nextIndex = INSPECTOR_TABS.length - 1;
              else return;
              event.preventDefault();
              event.stopPropagation();
              const nextTab = INSPECTOR_TABS[nextIndex];
              onTab(nextTab);
              document.getElementById(`atlas-inspector-tab-${nextTab}`)?.focus();
            }}
            id={`atlas-inspector-tab-${item}`}
            role="tab"
            aria-controls="atlas-inspector-panel"
            aria-selected={tab === item}
            aria-current={tab === item ? "page" : undefined}
            tabIndex={tab === item ? 0 : -1}
          >
            {item}
            {item === "equations" && node.equations.length ? <b>{node.equations.length}</b> : null}
          </button>
        ))}
      </nav>

      <div
        className="atlas-inspector-body"
        id="atlas-inspector-panel"
        role="tabpanel"
        aria-labelledby={`atlas-inspector-tab-${tab}`}
        tabIndex={0}
      >
        {tab === "overview" ? (
          <>
            <p className="atlas-inspector-summary">{node.summary}</p>
            <p className="atlas-inspector-description">{node.description}</p>
            {node.gate ? (
              <div className="atlas-gate">
                <span>Mathematical gate</span>
                <p>{node.gate}</p>
              </div>
            ) : null}
            <dl className="atlas-type-list">
              <TypeRow label="Mathematical type" value={node.mathematicalType} />
              <TypeRow label="Chapter" value={`${node.chapter} · ${node.section}`} />
              <TypeRow label="Units" value={node.units} />
            </dl>
            {node.atlasNote ? <p className="atlas-note">{node.atlasNote}</p> : null}
          </>
        ) : null}

        {tab === "equations" ? (
          <div className="atlas-equation-stack">
            {node.equations.length ? (
              node.equations.map((equation) => (
                <AtlasEquationCard key={`${node.id}-${equation.tag}`} equation={equation} />
              ))
            ) : (
              <div className="atlas-empty-state">
                <Icon name="layers" />
                <p>This node is a structural route. Its controlling equations are carried by the adjacent operator and gate nodes.</p>
              </div>
            )}
          </div>
        ) : null}

        {tab === "interfaces" ? (
          <>
            <dl className="atlas-type-list">
              <TypeRow label="Domain" value={node.domain} />
              <TypeRow label="Codomain" value={node.codomain} />
              <TypeRow label="Regularity" value={node.regularity} />
              <TypeRow label="Covariance" value={node.covariance} />
              <TypeRow label="State variables" value={node.stateVariables} />
              <TypeRow label="Boundary class" value={node.boundaryClass} />
              <TypeRow label="Branch domain" value={node.branchDomain} />
              <TypeRow label="Approximation order" value={node.approximationOrder} />
              <TypeRow label="Error norm" value={node.errorNorm} />
            </dl>
            {node.upstream.length ? (
              <section className="atlas-connections">
                <h3>Arrives from</h3>
                <div>
                  {node.upstream.map((id) => (
                    <ConnectionButton key={id} id={id} currentId={node.id} direction="upstream" onSelect={onSelect} />
                  ))}
                </div>
              </section>
            ) : null}
            {node.downstream.length ? (
              <section className="atlas-connections">
                <h3>Continues to</h3>
                <div>
                  {node.downstream.map((id) => (
                    <ConnectionButton key={id} id={id} currentId={node.id} direction="downstream" onSelect={onSelect} />
                  ))}
                </div>
              </section>
            ) : null}
          </>
        ) : null}
      </div>
    </aside>
  );
}

function SearchPanel({
  query,
  onQuery,
  onClose,
  onSelect,
}: {
  query: string;
  onQuery: (value: string) => void;
  onClose: () => void;
  onSelect: (id: string) => void;
}) {
  const input = useRef<HTMLInputElement | null>(null);
  const panel = useRef<HTMLDivElement | null>(null);
  const results = useMemo(
    () => query.trim() ? searchAtlas(query) : SUGGESTED_NODE_IDS.map(getAtlasNode),
    [query],
  );

  useEffect(() => {
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    input.current?.focus();
    return () => {
      window.requestAnimationFrame(() => {
        if (previouslyFocused?.isConnected) previouslyFocused.focus();
      });
    };
  }, []);

  const handleDialogKey = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      onClose();
      return;
    }
    if (event.key !== "Tab" || !panel.current) return;
    const focusable = [...panel.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      ref={panel}
      className="atlas-search-panel"
      role="dialog"
      aria-modal="true"
      aria-label="Search the reality atlas"
      aria-describedby="atlas-search-status"
      onKeyDown={handleDialogKey}
    >
      <div className="atlas-search-input">
        <Icon name="search" />
        <input
          ref={input}
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder="Search gravity, aperture, α, Born rule, equation tag…"
          aria-label="Search atlas nodes and equations"
        />
        <button type="button" onClick={onClose} aria-label="Close search"><Icon name="close" /></button>
      </div>
      <p className="atlas-search-hint" id="atlas-search-status" aria-live="polite">
        {query ? `${results.length} matching locations` : "Suggested atlas locations"}
      </p>
      <div className="atlas-search-results">
        {results.map((node) => (
          <button
            key={node.id}
            type="button"
            onClick={() => onSelect(node.id)}
            style={{ "--result-color": node.color } as CSSProperties}
          >
            <i />
            <span>
              <small>{node.eyebrow}</small>
              <strong>{node.label}</strong>
              <em>{node.summary}</em>
            </span>
            <Icon name="arrow" />
          </button>
        ))}
        {!results.length ? (
          <div className="atlas-empty-state">
            <p>No location matches that search. Try a sector, observable, equation tag or physical concept.</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function AtlasExperience() {
  const root = useRef<HTMLElement | null>(null);
  const mainUi = useRef<HTMLDivElement | null>(null);
  const intro = useRef<HTMLDivElement | null>(null);
  const copyTimer = useRef<number | null>(null);
  const [selectedId, setSelectedId] = useState("omega");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mode, setMode] = useState<AtlasMode>("explore");
  const [lod, setLod] = useState(1);
  const [focusNonce, setFocusNonce] = useState(0);
  const [tourIndex, setTourIndex] = useState(0);
  const [traceId, setTraceId] = useState<string | null>(null);
  const [inspectorOpen, setInspectorOpen] = useState(false);
  const [inspectorTab, setInspectorTab] = useState<InspectorTab>("overview");
  const [introOpen, setIntroOpen] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sceneReady, setSceneReady] = useState(false);
  const [webglAvailable, setWebglAvailable] = useState<boolean | null>(null);
  const [copied, setCopied] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenSupported, setFullscreenSupported] = useState(false);
  const [urlHydrated, setUrlHydrated] = useState(false);

  const selectedNode = getAtlasNode(selectedId);
  const activeTrace = observableRoutes.find((route) => route.id === traceId) ?? null;
  const traceIds = activeTrace?.nodeIds ?? EMPTY_TRACE_IDS;

  const selectNode = useCallback((id: string, focus = true) => {
    const node = atlasNodeMap.get(id);
    if (!node) return;
    setSelectedId(id);
    setLod((current) => Math.max(current, node.lod));
    setInspectorOpen(true);
    setInspectorTab("overview");
    if (focus) setFocusNonce((value) => value + 1);
  }, []);

  const applyUrlState = useCallback(() => {
    const params = new URL(window.location.href).searchParams;
    const focusParam = params.get("focus");
    const modeParam = params.get("mode");
    const traceParam = params.get("trace");
    const lodParam = params.get("lod");
    const tabParam = params.get("tab");
    const matchedTrace = observableRoutes.find((route) => route.id === traceParam) ?? null;
    const validMode: AtlasMode = modeParam === "guided" || modeParam === "trace" || modeParam === "explore"
      ? modeParam
      : matchedTrace
        ? "trace"
        : "explore";
    const nextTrace = validMode === "trace" ? matchedTrace ?? observableRoutes[0] : null;
    const validFocus = focusParam && atlasNodeMap.has(focusParam) ? focusParam : null;
    const nextSelected = validFocus
      ?? (validMode === "guided"
        ? guidedTour[0]
        : nextTrace?.nodeIds[nextTrace.nodeIds.length - 1] ?? "omega");
    const parsedLod = Number(lodParam);
    const requestedLod = lodParam !== null && Number.isInteger(parsedLod) && parsedLod >= 0 && parsedLod <= 4
      ? parsedLod
      : 1;
    const nextTab: InspectorTab = tabParam === "equations" || tabParam === "interfaces" ? tabParam : "overview";
    const hasAtlasState = Boolean(focusParam || modeParam || traceParam || lodParam || tabParam);
    const selected = getAtlasNode(nextSelected);

    setSelectedId(nextSelected);
    setMode(validMode);
    setTraceId(nextTrace?.id ?? null);
    setLod(Math.max(requestedLod, selected.lod));
    setInspectorTab(nextTab);
    setInspectorOpen(hasAtlasState);
    setIntroOpen(!hasAtlasState);
    if (validMode === "guided") {
      const matchedStep = guidedTour.findIndex((id) => id === nextSelected);
      setTourIndex(matchedStep >= 0 ? matchedStep : 0);
    } else {
      setTourIndex(0);
    }
    if (hasAtlasState) setFocusNonce((value) => value + 1);
    setUrlHydrated(true);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    applyUrlState();
    setFullscreenSupported(Boolean(root.current?.requestFullscreen && document.exitFullscreen));
    const onFullscreen = () => setIsFullscreen(document.fullscreenElement === root.current);
    const onPopState = () => applyUrlState();
    document.addEventListener("fullscreenchange", onFullscreen);
    window.addEventListener("popstate", onPopState);
    return () => {
      media.removeEventListener("change", update);
      document.removeEventListener("fullscreenchange", onFullscreen);
      window.removeEventListener("popstate", onPopState);
    };
  }, [applyUrlState]);

  useEffect(() => {
    if (!urlHydrated) return;
    const url = new URL(window.location.href);
    if (introOpen) url.searchParams.delete("focus");
    else url.searchParams.set("focus", selectedId);
    if (mode === "explore") url.searchParams.delete("mode");
    else url.searchParams.set("mode", mode);
    if (mode === "trace" && traceId) url.searchParams.set("trace", traceId);
    else url.searchParams.delete("trace");
    if (lod === 1) url.searchParams.delete("lod");
    else url.searchParams.set("lod", String(lod));
    if (inspectorTab === "overview") url.searchParams.delete("tab");
    else url.searchParams.set("tab", inspectorTab);
    window.history.replaceState(window.history.state, "", url);
  }, [inspectorTab, introOpen, lod, mode, selectedId, traceId, urlHydrated]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (introOpen) {
        intro.current?.querySelector<HTMLButtonElement>("button")?.focus();
        return;
      }
      if (document.activeElement === document.body) {
        root.current?.querySelector<HTMLButtonElement>(".atlas-mode-switch button[aria-pressed='true']")?.focus();
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [introOpen]);

  useEffect(() => {
    if (new URL(window.location.href).searchParams.get("view") === "2d") {
      setWebglAvailable(false);
      setSceneReady(true);
      return;
    }
    const canvas = document.createElement("canvas");
    let available = false;
    let context: WebGLRenderingContext | WebGL2RenderingContext | null = null;
    try {
      context = canvas.getContext("webgl2") || canvas.getContext("webgl");
      available = Boolean(context);
    } catch {
      available = false;
    } finally {
      context?.getExtension("WEBGL_lose_context")?.loseContext();
    }
    setWebglAvailable(available);
    if (!available) setSceneReady(true);
  }, []);

  const stepTrace = useCallback((delta: -1 | 1) => {
    if (!activeTrace) return;
    const current = activeTrace.nodeIds.indexOf(selectedId);
    const base = current >= 0 ? current : activeTrace.nodeIds.length - 1;
    const next = Math.max(0, Math.min(activeTrace.nodeIds.length - 1, base + delta));
    selectNode(activeTrace.nodeIds[next]);
  }, [activeTrace, selectNode, selectedId]);

  const closeInspector = useCallback(() => {
    setInspectorOpen(false);
    window.requestAnimationFrame(() => {
      root.current?.querySelector<HTMLButtonElement>(".atlas-info-trigger")?.focus();
    });
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (introOpen && event.key === "Tab" && intro.current) {
        const focusable = [...intro.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!intro.current.contains(document.activeElement)) {
          event.preventDefault();
          (event.shiftKey ? last : first)?.focus();
        } else if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
      if (event.key === "Escape") {
        if (searchOpen) setSearchOpen(false);
        else if (introOpen) setIntroOpen(false);
        else if (inspectorOpen) closeInspector();
        else return;
        event.preventDefault();
        return;
      }
      if (introOpen || searchOpen) return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key === "/" && !isTextEntryTarget(event.target)) {
        event.preventDefault();
        setSearchOpen(true);
        return;
      }
      if (isTextEntryTarget(event.target)) return;
      const navigationControlFocused = isNavigationControlTarget(event.target);
      if (mode === "guided" && !navigationControlFocused) {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          setTourIndex((current) => Math.min(guidedTour.length - 1, current + 1));
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          setTourIndex((current) => Math.max(0, current - 1));
        }
      }
      if (mode === "trace" && !navigationControlFocused && event.key === "ArrowRight") {
        event.preventDefault();
        stepTrace(1);
      }
      if (mode === "trace" && !navigationControlFocused && event.key === "ArrowLeft") {
        event.preventDefault();
        stepTrace(-1);
      }
      if (event.key === "]") {
        event.preventDefault();
        setLod((value) => Math.min(4, value + 1));
      }
      if (event.key === "[") {
        event.preventDefault();
        setLod((value) => Math.max(0, value - 1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeInspector, inspectorOpen, introOpen, mode, searchOpen, stepTrace]);

  useEffect(() => {
    if (mode !== "guided") return;
    const target = guidedTour[tourIndex];
    if (selectedId !== target) selectNode(target);
  }, [mode, selectNode, selectedId, tourIndex]);

  const startGuided = () => {
    setIntroOpen(false);
    setMode("guided");
    setTraceId(null);
    setTourIndex(0);
    setLod(1);
    selectNode(guidedTour[0]);
  };

  const startTrace = (id: string) => {
    const route = observableRoutes.find((item) => item.id === id);
    if (!route) return;
    setIntroOpen(false);
    setMode("trace");
    setTraceId(id);
    setLod(2);
    selectNode(route.nodeIds[route.nodeIds.length - 1]);
  };

  const setAtlasMode = (next: AtlasMode) => {
    setMode(next);
    if (next !== "trace") setTraceId(null);
    if (next === "guided") {
      setTourIndex(0);
      selectNode(guidedTour[0]);
    }
  };

  const resetView = () => {
    setMode("explore");
    setTraceId(null);
    setLod(1);
    selectNode("global-closure");
    setInspectorOpen(false);
  };

  const toggleFullscreen = async () => {
    if (!root.current || !fullscreenSupported) return;
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await root.current.requestFullscreen();
    } catch {
      setIsFullscreen(document.fullscreenElement === root.current);
    }
  };

  const shareSelected = async () => {
    const url = new URL(window.location.href);
    url.searchParams.set("focus", selectedId);
    try {
      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
      if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => {
        setCopied(false);
        copyTimer.current = null;
      }, 1800);
    } catch {
      window.history.replaceState(window.history.state, "", url);
    }
  };

  useEffect(() => () => {
    if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
  }, []);

  const searchSelect = (id: string) => {
    setSearchOpen(false);
    setSearchQuery("");
    selectNode(id);
  };

  const handleSceneReady = useCallback(() => setSceneReady(true), []);
  const handleSceneUnavailable = useCallback(() => {
    setWebglAvailable(false);
    setSceneReady(true);
    setHoveredId(null);
  }, []);

  const traceProgress = useMemo(() => {
    if (!activeTrace) return null;
    const index = activeTrace.nodeIds.indexOf(selectedId);
    return index >= 0 ? { index, total: activeTrace.nodeIds.length } : null;
  }, [activeTrace, selectedId]);
  const modalOpen = introOpen || searchOpen;

  useEffect(() => {
    if (mainUi.current) mainUi.current.inert = modalOpen;
  }, [modalOpen]);

  return (
    <section ref={root} className="atlas-experience" aria-label="Interactive Reality Atlas">
      <div
        ref={mainUi}
        className="atlas-main-ui"
        aria-hidden={modalOpen ? true : undefined}
        aria-busy={!sceneReady}
      >
      <div className="atlas-scene-layer" aria-hidden={introOpen ? "true" : undefined}>
        {webglAvailable ? (
          <AtlasSceneBoundary onUnavailable={handleSceneUnavailable}>
            <AtlasScene
              selectedId={selectedId}
              hoveredId={hoveredId}
              lod={lod}
              traceIds={traceIds}
              focusNonce={focusNonce}
              reducedMotion={reducedMotion}
              onSelect={selectNode}
              onHover={setHoveredId}
              onReady={handleSceneReady}
              onUnavailable={handleSceneUnavailable}
            />
          </AtlasSceneBoundary>
        ) : webglAvailable === false ? <AtlasSceneFallback /> : null}
      </div>
      <div className="atlas-vignette" aria-hidden="true" />
      <div className="atlas-grid-overlay" aria-hidden="true" />

      {!sceneReady ? (
        <div className="atlas-loading" role="status">
          <i aria-hidden="true" />
          <span>Constructing the source-to-readout field…</span>
        </div>
      ) : null}

      <header className="atlas-toolbar">
        <div className="atlas-toolbar-title">
          <span className="atlas-live-dot" aria-hidden="true" />
          <div>
            <p>The Reality Atlas</p>
            <small>{atlasStats.representedNodes} structures · {atlasStats.representedEdges} typed maps</small>
          </div>
        </div>

        <nav className="atlas-mode-switch" aria-label="Atlas mode">
          {(["explore", "guided", "trace"] as const).map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => item === "trace" ? startTrace(traceId ?? "gravity") : setAtlasMode(item)}
              aria-current={mode === item ? "page" : undefined}
              aria-pressed={mode === item}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="atlas-toolbar-actions">
          <button type="button" onClick={() => setSearchOpen(true)} aria-label="Search the atlas" title="Search (/)" className="atlas-search-trigger">
            <Icon name="search" /><span>Search</span><kbd>/</kbd>
          </button>
          <button type="button" onClick={resetView} aria-label="Reset atlas view" title="Reset view"><Icon name="reset" /></button>
          <button
            type="button"
            onClick={toggleFullscreen}
            disabled={!fullscreenSupported}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            title={fullscreenSupported ? (isFullscreen ? "Exit fullscreen" : "Enter fullscreen") : "Fullscreen is not supported by this browser"}
          >
            <Icon name="expand" />
          </button>
          <Link href="/" aria-label="Return to the Shadow Theory homepage" title="Return to site"><Icon name="close" /></Link>
        </div>
      </header>

      <nav className="atlas-stage-rail" aria-label="Primary reality stages">
        <span className="atlas-stage-line" aria-hidden="true" />
        {stageRail.map((stage, index) => {
          const node = getAtlasNode(stage.id);
          const active = selectedId === stage.id || (stage.id === "global-closure" && selectedNode.tier === "observable");
          return (
            <button
              type="button"
              key={stage.id}
              onClick={() => selectNode(stage.id)}
              className={active ? "is-active" : ""}
              style={{ "--stage-color": node.color } as CSSProperties}
              aria-current={active ? "location" : undefined}
            >
              <i>{index + 1}</i>
              <span>{stage.label}<small>{stage.sublabel}</small></span>
            </button>
          );
        })}
      </nav>

      <div className="atlas-breadcrumb" aria-live="polite">
        <span style={{ color: selectedNode.color }}>{tierMeta[selectedNode.tier].label}</span>
        <Icon name="arrow" />
        <strong>{selectedNode.shortLabel}</strong>
        {hoveredId && hoveredId !== selectedId ? (
          <em aria-hidden="true">Hovering: {getAtlasNode(hoveredId).label}</em>
        ) : null}
      </div>

      {!inspectorOpen ? (
        <button
          type="button"
          className="atlas-info-trigger"
          onClick={() => {
            setInspectorOpen(true);
            window.requestAnimationFrame(() => {
              document.getElementById(`atlas-inspector-tab-${inspectorTab}`)?.focus();
            });
          }}
          aria-label={`Open details for ${selectedNode.label}`}
        >
          <Icon name="info" />
          <span>{selectedNode.shortLabel}</span>
        </button>
      ) : (
        <Inspector
          node={selectedNode}
          tab={inspectorTab}
          traceIds={traceIds}
          onTab={setInspectorTab}
          onClose={closeInspector}
          onSelect={selectNode}
          onShare={shareSelected}
        />
      )}

      <footer className="atlas-control-deck">
        <div className="atlas-lod-control">
          <span><Icon name="layers" /> Detail</span>
          <input
            id="atlas-lod"
            type="range"
            min="0"
            max="4"
            step="1"
            value={lod}
            onChange={(event) => setLod(Number(event.target.value))}
            aria-label="Atlas level of detail"
            aria-valuetext={`Level of detail ${lod}`}
          />
          <output htmlFor="atlas-lod">LOD {lod}</output>
        </div>
        <div className="atlas-route-list" aria-label="Observable traces">
          {observableRoutes.map((route) => (
            <button
              type="button"
              key={route.id}
              onClick={() => startTrace(route.id)}
              className={traceId === route.id ? "is-active" : ""}
              style={{ "--route-color": route.color } as CSSProperties}
              title={route.label}
              aria-pressed={traceId === route.id}
            >
              <i />{route.shortLabel}
            </button>
          ))}
        </div>
        <p className="atlas-control-help">Drag or swipe to orbit · Scroll or pinch to zoom · Select any structure</p>
      </footer>

      {mode === "guided" && !introOpen ? (
        <div className="atlas-guided-controls">
          <button
            type="button"
            onClick={() => setTourIndex((value) => Math.max(0, value - 1))}
            disabled={tourIndex === 0}
          >
            Previous
          </button>
          <div>
            <small>Guided descent · {tourIndex + 1}/{guidedTour.length}</small>
            <strong>{selectedNode.label}</strong>
          </div>
          <button
            type="button"
            onClick={() => setTourIndex((value) => Math.min(guidedTour.length - 1, value + 1))}
            disabled={tourIndex === guidedTour.length - 1}
          >
            Next <Icon name="arrow" />
          </button>
        </div>
      ) : null}

      {mode === "trace" && activeTrace ? (
        <div className="atlas-active-trace" style={{ "--trace-color": activeTrace.color } as CSSProperties}>
          <i aria-hidden="true" />
          <div>
            <small>Active source-to-observable path</small>
            <strong>{activeTrace.label}</strong>
          </div>
          <button
            type="button"
            onClick={() => stepTrace(-1)}
            disabled={!traceProgress || traceProgress.index === 0}
            aria-label="Previous stage in active trace"
            title="Previous trace stage (Left arrow)"
          >
            ‹
          </button>
          {traceProgress ? <span>{traceProgress.index + 1}/{traceProgress.total}</span> : <span>{activeTrace.nodeIds.length} stages</span>}
          <button
            type="button"
            onClick={() => stepTrace(1)}
            disabled={!traceProgress || traceProgress.index === traceProgress.total - 1}
            aria-label="Next stage in active trace"
            title="Next trace stage (Right arrow)"
          >
            ›
          </button>
          <button type="button" onClick={() => { setMode("explore"); setTraceId(null); }} aria-label="Close active trace"><Icon name="close" /></button>
        </div>
      ) : null}

      <div className="sr-only" aria-live="polite">
        Selected {selectedNode.label}. {selectedNode.summary}
      </div>
      </div>

      {introOpen ? (
        <div ref={intro} className="atlas-intro" role="dialog" aria-modal="true" aria-labelledby="atlas-intro-title">
          <div className="atlas-intro-orbit" aria-hidden="true"><i /><i /><i /></div>
          <p className="section-label">The complete source-to-readout construction</p>
          <h1 id="atlas-intro-title">Reality, from <span>Ω</span> to observation</h1>
          <p>
            Enter a navigable model of source reality, fixed law, recursive aperture,
            the coherent–dissipative field and the complete Tier-1 physical readout.
            Every visible structure carries its equations, type, interfaces and reverse lineage.
          </p>
          <div className="atlas-intro-actions">
            <button type="button" onClick={startGuided}>Begin the guided descent <Icon name="arrow" /></button>
            <button type="button" onClick={() => { setIntroOpen(false); setMode("explore"); selectNode("global-closure"); }}>Explore freely</button>
          </div>
          <dl>
            <div><dt>{atlasStats.chapters}</dt><dd>canonical chapters</dd></div>
            <div><dt>{atlasStats.equationTags.toLocaleString()}</dt><dd>equation tags</dd></div>
            <div><dt>{atlasStats.sectors}</dt><dd>coupled sectors</dd></div>
            <div><dt>2-way</dt><dd>source tracing</dd></div>
          </dl>
          <small>Designed for orbit, zoom, touch and keyboard navigation</small>
        </div>
      ) : null}

      {searchOpen ? (
        <SearchPanel
          query={searchQuery}
          onQuery={setSearchQuery}
          onClose={() => setSearchOpen(false)}
          onSelect={searchSelect}
        />
      ) : null}

      {copied ? <div className="atlas-toast" role="status">Atlas link copied</div> : null}
    </section>
  );
}
