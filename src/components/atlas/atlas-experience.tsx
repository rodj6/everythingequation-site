"use client";

/**
 * THE REALITY ATLAS: the interactive instrument and its reading panel.
 *
 * This component holds the state of the page (which stage, which entry, which
 * mode) and keeps it in the address, so every view can be linked to. The
 * picture is drawn by AtlasStage; the text comes from src/data/reality-atlas.ts.
 *
 * Addresses: /atlas?focus=<entry> · ?stage=<stage> · ?mode=guided&tour=<tour>
 *            ?mode=trace&trace=<trace> · ?tab=equations|connections
 *            ?aperture=0..1 · ?view=2d (still picture) · ?quality=high|medium|low
 */
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ApertureControl, ProbeControl, StageRail, TourBar, TraceBar, apertureWords, probeWords } from "@/components/atlas/atlas-dock";
import { EntryView, StageView, TourContext, TraceChooser, TraceContext } from "@/components/atlas/atlas-panel";
import AtlasPictureNote from "@/components/atlas/atlas-picture-note";
import AtlasPlateLayer from "@/components/atlas/atlas-plate-layer";
import { BoundaryControls, BoundaryPanel, HistoryControls, HistoryPanel, ViewSwitch } from "@/components/atlas/atlas-views";
import AtlasSearch from "@/components/atlas/atlas-search";
import AtlasStage from "@/components/atlas/atlas-stage";
import {
  DEFAULT_TOUR,
  STILL_APERTURES,
  findRoute,
  findTour,
  partOfEntry,
  readAddress,
  readoutGroups,
  routeSector,
  sectorFor,
  sectorLabels,
  viewForEntry,
  writeAddress,
  type AtlasAddress,
  type AtlasMode,
  type PanelTab,
} from "@/atlas/model";
import { stillReasonText, type AtlasPicture, type StillReason } from "@/atlas/quality";
import { evaluateBoundary, type BoundaryState } from "@/atlas/lenses/boundary";
import { evaluateHistory, type HistoryState } from "@/atlas/lenses/history";
import { PlateBus } from "@/atlas/lenses/plate";
import { boundaryView, entryViews, historyView, type AtlasViewId } from "@/data/atlas/views";
import { atlasNodeMap, stageMeta, stageOrder, type AtlasStage as AtlasStageId, type ObservableRoute } from "@/data/reality-atlas";

const INITIAL_ADDRESS = readAddress("");
const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

const MODES: Array<{ id: AtlasMode; label: string; hint: string }> = [
  { id: "explore", label: "Explore", hint: "Move freely between stages and entries" },
  { id: "guided", label: "Guided", hint: "Follow a tour, one stop at a time" },
  { id: "trace", label: "Trace", hint: "Follow one observable back toward the source" },
];

const PICTURE_CHOICES: Array<{ value: AtlasPicture | null; label: string; hint: string }> = [
  { value: null, label: "Automatic", hint: "Let this device choose" },
  { value: "high", label: "Live 3D, full", hint: "Refraction, reflections and soft shadows" },
  { value: "low", label: "Live 3D, light", hint: "Simpler glass and lighting" },
  { value: "still", label: "Still picture", hint: "No 3D; everything else works the same" },
];

export default function AtlasExperience() {
  const [address, setAddress] = useState<AtlasAddress>(INITIAL_ADDRESS);
  const [hydrated, setHydrated] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(true);
  const [hoverEntry, setHoverEntry] = useState<string | null>(null);
  const [hoverRoute, setHoverRoute] = useState<ObservableRoute | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [picture, setPicture] = useState<{ live: boolean; tier: AtlasPicture; reason: StillReason | null } | null>(null);
  const [shared, setShared] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [canFullscreen, setCanFullscreen] = useState(false);
  /** Share of the picture's height that the controls at its foot cover (0 where they sit below it). */
  const [coveredBelow, setCoveredBelow] = useState(0);
  const [clearTop, setClearTop] = useState(0);

  const frame = useRef<HTMLElement>(null);
  const panel = useRef<HTMLElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const aboutDialog = useRef<HTMLDialogElement>(null);
  const dock = useRef<HTMLDivElement>(null);
  const topbar = useRef<HTMLDivElement>(null);
  const wantsFocus = useRef(false);
  const plateBus = useMemo(() => new PlateBus(), []);
  const shareTimer = useRef<number | null>(null);

  // ── Address in, address out.
  useIsomorphicLayoutEffect(() => {
    setAddress(readAddress(window.location.search));
    setHydrated(true);
    const onPop = () => setAddress(readAddress(window.location.search));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const url = writeAddress(new URL(window.location.href), address);
    if (url.toString() !== window.location.href) window.history.replaceState(window.history.state, "", url);
  }, [address, hydrated]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    setCanFullscreen(Boolean(document.fullscreenEnabled && frame.current?.requestFullscreen));
    const onFullscreen = () => setIsFullscreen(document.fullscreenElement === frame.current);
    document.addEventListener("fullscreenchange", onFullscreen);
    return () => {
      media.removeEventListener("change", update);
      document.removeEventListener("fullscreenchange", onFullscreen);
      if (shareTimer.current !== null) window.clearTimeout(shareTimer.current);
    };
  }, []);

  // ── On wide screens the controls lie over the foot of the picture; tell the picture how much to clear.
  useEffect(() => {
    const element = dock.current;
    const stage = element?.parentElement;
    if (!element || !stage) return;
    const measure = () => {
      const overlaid = getComputedStyle(element).position === "absolute";
      const height = stage.getBoundingClientRect().height;
      // The top of the dock is a soft gradient; only the solid part counts.
      const covered = overlaid && height > 0 ? Math.max(0, element.getBoundingClientRect().height - 44) / height : 0;
      setCoveredBelow((current) => (Math.abs(current - covered) < 0.015 ? current : Math.min(0.4, covered)));
      const bar = topbar.current;
      // The controls in the top bar end about 40px above the foot of its gradient.
      const top = bar && getComputedStyle(bar).position === "absolute" ? Math.max(0, bar.getBoundingClientRect().height - 36) : 0;
      setClearTop((current) => (Math.abs(current - top) < 4 ? current : top));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  // ── What is showing.
  const node = address.focus ? atlasNodeMap.get(address.focus) ?? null : null;
  const tour = findTour(address.tour);
  const route = address.mode === "trace" ? findRoute(address.trace) : null;
  const tourIndex = address.mode === "guided" && address.focus ? tour.nodeIds.indexOf(address.focus) : -1;
  const routeIndex = route && address.focus ? route.nodeIds.indexOf(address.focus) : -1;
  // A trace is watched from the overview, so the whole bundle of rays stays in sight.
  const onPlate = address.view !== "instrument";
  const cameraStage: AtlasStageId = onPlate ? "readout" : address.mode === "trace" ? "overview" : address.stage;

  const trace = useMemo(() => {
    if (route) return { groupId: routeSector(route), at: partOfEntry(address.focus) ?? ("readout" as const) };
    if (hoverRoute) return { groupId: routeSector(hoverRoute), at: "readout" as const };
    return null;
  }, [route, hoverRoute, address.focus]);

  const highlightGroup = hoverEntry ? sectorFor(hoverEntry) : route ? routeSector(route) : hoverRoute ? routeSector(hoverRoute) : sectorFor(address.focus);

  // ── Actions.
  const update = useCallback((change: (current: AtlasAddress) => AtlasAddress, focusPanel = true) => {
    wantsFocus.current = focusPanel;
    setAddress(change);
  }, []);

  const goStage = useCallback((stage: AtlasStageId) => {
    update((current) => ({ ...current, mode: "explore", trace: null, stage, focus: null, tab: "overview", view: "instrument" }));
  }, [update]);

  const openEntry = useCallback((id: string) => {
    const target = atlasNodeMap.get(id);
    if (!target) return;
    setPanelOpen(true);
    update((current) => {
      const inTour = current.mode === "guided" && findTour(current.tour).nodeIds.includes(id);
      const inTrace = current.mode === "trace" && Boolean(findRoute(current.trace)?.nodeIds.includes(id));
      const mode: AtlasMode = inTour ? "guided" : inTrace ? "trace" : "explore";
      // An entry about the readout can be read beside a plate view; any other returns to the whole instrument.
      const view: AtlasViewId = inTour ? viewForEntry(id, current).view : target.stage === "readout" && !inTrace ? current.view : "instrument";
      return { ...current, ...(inTour ? viewForEntry(id, current) : {}), view, mode, trace: inTrace ? current.trace : null, focus: id, stage: target.stage, tab: "overview" };
    });
  }, [update]);

  const closeEntry = useCallback(() => {
    update((current) => ({ ...current, mode: "explore", trace: null, focus: null, tab: "overview" }));
  }, [update]);

  const startTour = useCallback((id: string) => {
    const next = findTour(id);
    const first = next.nodeIds[0];
    setPanelOpen(true);
    update((current) => ({
      ...current, ...viewForEntry(first ?? null, current), mode: "guided", tour: next.id, trace: null, focus: first ?? null,
      stage: first ? atlasNodeMap.get(first)!.stage : current.stage, tab: "overview",
    }));
  }, [update]);

  const stepTour = useCallback((delta: number) => {
    update((current) => {
      const ids = findTour(current.tour).nodeIds;
      const index = Math.max(0, ids.indexOf(current.focus ?? ""));
      const id = ids[Math.min(ids.length - 1, Math.max(0, index + delta))];
      return id ? { ...current, ...viewForEntry(id, current), focus: id, stage: atlasNodeMap.get(id)!.stage, tab: "overview" } : current;
    });
  }, [update]);

  const chooseTrace = useCallback(() => {
    setPanelOpen(true);
    update((current) => ({ ...current, mode: "trace", trace: null, focus: null, stage: "overview", tab: "overview", view: "instrument" }));
  }, [update]);

  const startTrace = useCallback((id: string) => {
    const next = findRoute(id);
    if (!next) return;
    setHoverRoute(null);
    const last = next.nodeIds[next.nodeIds.length - 1];
    update((current) => ({ ...current, mode: "trace", trace: next.id, focus: last, stage: atlasNodeMap.get(last)!.stage, tab: "overview", view: "instrument" }));
  }, [update]);

  const stepTrace = useCallback((delta: number) => {
    update((current) => {
      const ids = findRoute(current.trace)?.nodeIds ?? [];
      const at = ids.indexOf(current.focus ?? "");
      const index = at < 0 ? ids.length - 1 : at;
      const id = ids[Math.min(ids.length - 1, Math.max(0, index + delta))];
      return id ? { ...current, focus: id, stage: atlasNodeMap.get(id)!.stage, tab: "overview" } : current;
    });
  }, [update]);

  const setMode = useCallback((mode: AtlasMode) => {
    if (mode === "guided") startTour(address.mode === "guided" ? address.tour : DEFAULT_TOUR);
    else if (mode === "trace") chooseTrace();
    else update((current) => ({ ...current, mode: "explore", trace: null }), false);
  }, [address.mode, address.tour, chooseTrace, startTour, update]);

  /** Change the view. From a plate view's own button the panel shows that view; from an entry the entry stays open beside it. */
  const setView = useCallback((view: AtlasViewId, keepEntry = false) => {
    setPanelOpen(true);
    update((current) => ({
      ...current,
      view,
      mode: current.mode === "trace" || !keepEntry ? "explore" : current.mode,
      trace: null,
      focus: keepEntry ? current.focus : null,
      stage: view === "instrument" ? (keepEntry ? current.stage : "overview") : "readout",
      tab: "overview",
    }), !keepEntry);
  }, [update]);

  const showEntryOnPlate = useCallback((id: string) => {
    update((current) => ({ ...current, ...viewForEntry(id, current) }), false);
  }, [update]);

  const setBoundary = useCallback((next: BoundaryState) => setAddress((current) => ({ ...current, boundary: next })), []);
  const setHistory = useCallback((next: HistoryState) => setAddress((current) => ({ ...current, history: next })), []);
  const setBearing = useCallback((degrees: number) => {
    setAddress((current) => (current.boundary.at === degrees ? current : { ...current, boundary: { ...current.boundary, at: degrees } }));
  }, []);

  const setProbe = useCallback((on: boolean) => {
    setAddress((current) => (current.probe === on ? current : { ...current, probe: on }));
  }, []);

  const setAperture = useCallback((value: number) => {
    setAddress((current) => (Math.abs(current.aperture - value) < 0.002 ? current : { ...current, aperture: Math.min(1, Math.max(0, value)) }));
  }, []);

  const setTab = useCallback((tab: PanelTab) => setAddress((current) => ({ ...current, tab })), []);

  const choosePicture = useCallback((value: AtlasPicture | null) => {
    setAddress((current) => ({ ...current, picture: value }));
  }, []);

  const share = useCallback(async () => {
    const url = writeAddress(new URL(window.location.href), address).toString();
    try {
      await navigator.clipboard.writeText(url);
      setShared(true);
      if (shareTimer.current !== null) window.clearTimeout(shareTimer.current);
      shareTimer.current = window.setTimeout(() => setShared(false), 2000);
    } catch {
      // Without clipboard access the address bar already holds the link.
      window.prompt("Copy this link", url);
    }
  }, [address]);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await frame.current?.requestFullscreen();
    } catch {
      setIsFullscreen(document.fullscreenElement === frame.current);
    }
  }, []);

  // ── Move focus to the new heading after a deliberate change, so the text is announced.
  useEffect(() => {
    if (!wantsFocus.current) return;
    wantsFocus.current = false;
    heading.current?.focus({ preventScroll: true });
    if (panel.current) panel.current.scrollTop = 0;
  }, [address.focus, address.stage, address.mode, address.trace, address.view]);

  // ── Links in the page below the instrument open their entry up here.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
      const link = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>("a[data-atlas-entry], a[data-atlas-stage], a[data-atlas-view]");
      if (!link) return;
      const wantedView = link.dataset.atlasView;
      if (wantedView === "boundary" || wantedView === "history" || wantedView === "instrument") {
        event.preventDefault();
        setView(wantedView);
        frame.current?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
        return;
      }
      const entry = link.dataset.atlasEntry;
      const stage = link.dataset.atlasStage as AtlasStageId | undefined;
      if (entry && atlasNodeMap.has(entry)) {
        event.preventDefault();
        openEntry(entry);
      } else if (stage && (stageOrder as string[]).includes(stage)) {
        event.preventDefault();
        goStage(stage);
      } else return;
      frame.current?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [goStage, openEntry, reducedMotion, setView]);

  // ── Keyboard.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.altKey || event.metaKey || event.ctrlKey) return;
      const target = event.target as HTMLElement | null;
      const typing = Boolean(target && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)));
      if (event.key === "/" && !typing) {
        event.preventDefault();
        setSearchOpen(true);
        return;
      }
      if (typing || searchOpen || aboutOpen || target?.closest('[role="tablist"]')) return;
      // Only while the instrument is in view; further down the page the keys belong to the page.
      const box = frame.current?.getBoundingClientRect();
      if (!box || box.bottom < 160 || box.top > window.innerHeight - 160) return;

      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        const delta = event.key === "ArrowRight" ? 1 : -1;
        event.preventDefault();
        if (address.mode === "guided") stepTour(delta);
        else if (address.mode === "trace" && route) stepTrace(delta);
        else if (address.view === "boundary") setBearing((address.boundary.at - delta * boundaryView.at.step + 360) % 360);
        else if (address.view === "history") setHistory({ ...address.history, occasion: Math.min(historyView.occasions.length - 1, Math.max(0, address.history.occasion + delta)) });
        else {
          const index = stageOrder.indexOf(address.stage);
          const next = stageOrder[Math.min(stageOrder.length - 1, Math.max(0, index + delta))];
          if (next !== address.stage || address.focus) goStage(next);
        }
      } else if (event.key === "Escape") {
        if (address.mode !== "explore") update((current) => ({ ...current, mode: "explore", trace: null }));
        else if (address.focus) closeEntry();
        else if (address.view !== "instrument") setView("instrument");
        else if (address.stage !== "overview") goStage("overview");
      } else if (event.key === "]" || event.key === "[") {
        setAperture(address.aperture + (event.key === "]" ? 0.1 : -0.1));
      } else if (event.key === "p" || event.key === "P") {
        setProbe(!address.probe);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [aboutOpen, address, closeEntry, goStage, route, searchOpen, setAperture, setBearing, setHistory, setProbe, setView, stepTour, stepTrace, update]);

  // ── The "About this picture" dialog.
  useEffect(() => {
    const element = aboutDialog.current;
    if (!element) return;
    if (aboutOpen && !element.open) element.showModal();
    else if (!aboutOpen && element.open) element.close();
  }, [aboutOpen]);

  const percent = Math.round(address.aperture * 100);
  const plateSummary = address.view === "boundary" ? evaluateBoundary(address.boundary).summary : address.view === "history" ? evaluateHistory(address.history).summary : "";
  const instrumentDescription = `Shadow Theory drawn as one instrument: a source lamp, the law optics, an iris, a glass field cell and a round readout plate, in a row on a rail, with a spiral galaxy beyond the plate. Showing ${stageMeta[address.mode === "trace" ? "overview" : address.stage].title}. The iris is ${percent} percent open. ${apertureWords(address.aperture)}. Second probe: ${probeWords(address.probe)}.`;
  const description = address.view === "boundary"
    ? `The readout plate, faced, with a spiral galaxy seen through its glass. Its rim stands for boundary data and its interior for what those readings reach. ${plateSummary}`
    : address.view === "history"
      ? `The readout plate, faced, with a small history drawn on its glass: a source sounds three notes and a listener receives each a little later. ${plateSummary}`
      : instrumentDescription;
  const stillNote = picture && !picture.live && picture.tier === "still" && picture.reason && picture.reason !== "requested" ? stillReasonText[picture.reason] : null;
  const isStill = picture ? picture.tier === "still" : address.picture === "still";

  return (
    <section
      ref={frame}
      className="atlas-frame"
      data-panel={panelOpen ? "open" : "closed"}
      data-mode={address.mode}
      data-view={address.view}
      data-picture={isStill ? "still" : "live"}
      data-ready={hydrated ? "true" : undefined}
      aria-label="The Reality Atlas, interactive"
    >
      <div className="atlas-stage">
        <div ref={topbar} className="atlas-topbar">
          <div className="atlas-heading">
            <h1 className="atlas-title">The Reality Atlas</h1>
            <p className="atlas-subtitle">Shadow Theory as one instrument, from source to readout.</p>
          </div>
          <div className="atlas-modes" role="group" aria-label="Mode">
            {MODES.map((mode) => (
              <button key={mode.id} type="button" aria-pressed={address.mode === mode.id} title={mode.hint} onClick={() => setMode(mode.id)}>
                {mode.label}
              </button>
            ))}
          </div>
          <div className="atlas-tools">
            <button type="button" className="atlas-tool is-search" onClick={() => setSearchOpen(true)} aria-keyshortcuts="/">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="5.25" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 12l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>Search</span>
              <kbd aria-hidden="true">/</kbd>
            </button>
            {canFullscreen ? (
              <button type="button" className="atlas-tool is-icon" onClick={toggleFullscreen} aria-label={isFullscreen ? "Leave full screen" : "Full screen"} title={isFullscreen ? "Leave full screen" : "Full screen"}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d={isFullscreen ? "M6 2v4H2M10 2v4h4M6 14v-4H2M10 14v-4h4" : "M2 6V2h4M14 6V2h-4M2 10v4h4M14 10v4h-4"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ) : null}
            <button type="button" className="atlas-tool is-icon is-panel-toggle" onClick={() => setPanelOpen((value) => !value)} aria-expanded={panelOpen} aria-controls="atlas-panel" aria-label={panelOpen ? "Hide the reading panel" : "Show the reading panel"} title={panelOpen ? "Hide the reading panel" : "Show the reading panel"}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="1.75" y="2.75" width="12.5" height="10.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 3v10" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>

        <AtlasStage
          stage={cameraStage}
          aperture={address.aperture}
          onApertureChange={setAperture}
          probe={address.probe}
          plateView={onPlate}
          plateBus={plateBus}
          highlightGroup={highlightGroup}
          trace={trace}
          groups={readoutGroups}
          groupLabels={sectorLabels}
          requestedPicture={address.picture}
          reducedMotion={reducedMotion}
          onStage={goStage}
          onGroup={openEntry}
          onPicture={setPicture}
          coveredBelow={coveredBelow}
          clearTop={clearTop}
          description={description}
        >
          <AtlasPlateLayer bus={plateBus} view={address.view} boundary={address.boundary} history={address.history} reducedMotion={reducedMotion} onBearing={setBearing} />
        </AtlasStage>

        <div ref={dock} className="atlas-dock">
          {address.mode === "guided" ? (
            <TourBar tour={tour} index={tourIndex} onStep={stepTour} onTour={startTour} onExit={() => setMode("explore")} />
          ) : null}
          {route ? (
            <TraceBar route={route} index={routeIndex} onStep={stepTrace} onSelect={openEntry} onExit={chooseTrace} />
          ) : null}
          <div className="atlas-dock-row">
            <div className="atlas-dock-left">
              <ViewSwitch view={address.view} onView={(view) => setView(view)} />
              <div className="atlas-dock-links">
                <button type="button" className="atlas-about-button" onClick={() => setAboutOpen(true)}>
                  <span aria-hidden="true">i</span>
                  {stillNote ? "Still picture: why?" : "About this picture"}
                </button>
                {address.mode === "explore" && !address.focus && address.view === "instrument" ? (
                  <button type="button" className="atlas-start-button" onClick={() => startTour(DEFAULT_TOUR)}>Take the tour →</button>
                ) : null}
              </div>
            </div>
            {address.view === "boundary" ? (
              <BoundaryControls state={address.boundary} onChange={setBoundary} />
            ) : address.view === "history" ? (
              <HistoryControls state={address.history} onChange={setHistory} />
            ) : (
              <>
                <StageRail stage={address.stage} onStage={goStage} />
                <div className="atlas-controls">
                  <ApertureControl aperture={address.aperture} onChange={setAperture} steps={isStill ? STILL_APERTURES : undefined} />
                  <ProbeControl on={address.probe} onChange={setProbe} />
                </div>
              </>
            )}
          </div>
        </div>

        {/* In a plate view the panel announces what the readings settle; here only the change of picture is said. */}
        <p className="sr-only" aria-live="polite">{onPlate ? `${address.view === "boundary" ? "Boundary" : "History"} view: the readout plate, faced.` : description}</p>
      </div>

      <aside ref={panel} id="atlas-panel" className="atlas-panel" aria-label="Reading panel" hidden={!panelOpen}>
        {address.mode === "trace" && !route ? (
          <TraceChooser onStart={startTrace} onHover={setHoverRoute} headingRef={heading} />
        ) : node ? (
          <EntryView
            key={node.id}
            node={node}
            tab={address.tab}
            onTab={setTab}
            onOpen={openEntry}
            onBack={closeEntry}
            onShare={share}
            shared={shared}
            headingRef={heading}
            plate={entryViews[node.id] ? { label: entryViews[node.id].label, shown: address.view === entryViews[node.id].view, onShow: () => showEntryOnPlate(node.id) } : undefined}
            context={
              route ? <TraceContext route={route} /> : address.mode === "guided" ? <TourContext label={tour.label} description={tour.description} /> : undefined
            }
          />
        ) : address.view === "boundary" ? (
          <BoundaryPanel state={address.boundary} onChange={setBoundary} headingRef={heading} onOpen={openEntry} onBack={() => setView("instrument")} onStartTour={startTour} />
        ) : address.view === "history" ? (
          <HistoryPanel state={address.history} onChange={setHistory} headingRef={heading} onOpen={openEntry} onBack={() => setView("instrument")} onStartTour={startTour} />
        ) : (
          <StageView
            stage={address.stage}
            onView={(view) => setView(view)}
            onOpen={openEntry}
            onStage={goStage}
            onHover={setHoverEntry}
            onStartTour={startTour}
            onChooseTrace={chooseTrace}
            onSearch={() => setSearchOpen(true)}
            onAboutPicture={() => setAboutOpen(true)}
            probe={address.probe}
            onProbe={setProbe}
            headingRef={heading}
          />
        )}
      </aside>

      <AtlasSearch open={searchOpen} onClose={() => setSearchOpen(false)} onSelect={openEntry} />

      <dialog
        ref={aboutDialog}
        className="atlas-dialog atlas-about"
        aria-labelledby="atlas-about-title"
        onClose={() => setAboutOpen(false)}
        onClick={(event) => { if (event.target === aboutDialog.current) setAboutOpen(false); }}
      >
        <div className="atlas-about-head">
          <h2 id="atlas-about-title">About this picture</h2>
          <button type="button" className="atlas-dialog-close" onClick={() => setAboutOpen(false)}>Close</button>
        </div>
        <div className="atlas-about-body">
          <AtlasPictureNote />
          <fieldset className="atlas-picture-choice">
            <legend>How the picture is drawn</legend>
            {stillNote ? <p className="atlas-picture-reason">{stillNote}</p> : null}
            {PICTURE_CHOICES.map((choice) => (
              <label key={choice.label}>
                <input type="radio" name="atlas-picture" checked={address.picture === choice.value} onChange={() => choosePicture(choice.value)} />
                <span><strong>{choice.label}</strong><em>{choice.hint}</em></span>
              </label>
            ))}
            <p className="atlas-picture-foot">
              Motion follows your system setting: with reduced motion on, the camera moves at once and nothing drifts.
              There is no sound.
            </p>
          </fieldset>
        </div>
      </dialog>
    </section>
  );
}
