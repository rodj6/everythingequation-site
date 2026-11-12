"use client";

/**
 * The picture of the instrument: a prepared still that appears at once, and
 * the live 3D engine drawn over it when the device can run it.
 *
 * This component owns the engine's lifetime, the pointer, and the labels that
 * float over the parts. It knows nothing about entries or panels; it is told
 * which stage to show and reports what the visitor points at.
 */
import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import type { AtlasEngine, InstrumentPart, ReadoutGroup } from "@/atlas/engine/engine";
import type { QualityTier } from "@/atlas/engine/config";
import { partStage, plateStillUrl, stagePart, stillUrl } from "@/atlas/model";
import { stillPlateFrame, type PlateBus } from "@/atlas/lenses/plate";
import { decidePicture, lowerPicture, type AtlasPicture, type StillReason } from "@/atlas/quality";
import { stageMeta, type AtlasStage } from "@/data/reality-atlas";

const PARTS: InstrumentPart[] = ["source", "law", "aperture", "field", "readout"];

const ENGRAVING_FONTS = {
  sans: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif',
  serif: '"Source Serif 4", Georgia, serif',
  mono: '"IBM Plex Mono", ui-monospace, monospace',
};

/** Frame pacing (milliseconds between frames) at which the picture is made cheaper, or richer again. */
const SLOW_FRAME = 30;
const FAST_FRAME = 14;
/** Below about nine frames a second the live picture does more harm than good. */
const UNUSABLE_FRAME = 110;

export interface StageTrace {
  groupId: string | null;
  at: InstrumentPart;
}

export interface AtlasStageProps {
  stage: AtlasStage;
  aperture: number;
  onApertureChange: (value: number) => void;
  /** The second probe: in the light or aside. */
  probe: boolean;
  /** A plate view (Boundary, History): the camera faces the readout plate and its marks clear. */
  plateView: boolean;
  /** Told where the plate lies in the picture, so a diagram can be drawn on it. */
  plateBus: PlateBus;
  /** Sector whose cluster is emphasised on the screen. */
  highlightGroup: string | null;
  trace: StageTrace | null;
  groups: ReadoutGroup[];
  groupLabels: Record<string, string>;
  /** A picture asked for explicitly (address or visitor); null lets the device decide. */
  requestedPicture: AtlasPicture | null;
  reducedMotion: boolean;
  onStage: (stage: AtlasStage) => void;
  onGroup: (groupId: string) => void;
  /** Reports whether the live engine or the still picture is showing, and why. */
  onPicture: (state: { live: boolean; tier: AtlasPicture; reason: StillReason | null }) => void;
  /** Fraction of the picture's height covered by controls at its foot; the subject is raised to clear them. */
  coveredBelow?: number;
  /** Height in pixels of the controls lying over the top of the picture; labels are kept below them. */
  clearTop?: number;
  /** Text read out by assistive technology in place of the picture. */
  description: string;
  children?: ReactNode;
}

export default function AtlasStage({
  stage,
  aperture,
  onApertureChange,
  probe,
  plateView,
  plateBus,
  highlightGroup,
  trace,
  groups,
  groupLabels,
  requestedPicture,
  reducedMotion,
  onStage,
  onGroup,
  onPicture,
  coveredBelow = 0,
  clearTop = 0,
  description,
  children,
}: AtlasStageProps) {
  const surface = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<AtlasEngine | null>(null);
  const labelRefs = useRef<Partial<Record<InstrumentPart, HTMLButtonElement | null>>>({});
  const tagRef = useRef<HTMLSpanElement>(null);

  const [tier, setTier] = useState<AtlasPicture | null>(null);
  const [reason, setReason] = useState<StillReason | null>(null);
  const [live, setLive] = useState(false);
  const [hoverPart, setHoverPart] = useState<InstrumentPart | null>(null);
  const [hoverGroup, setHoverGroup] = useState<string | null>(null);
  const [overRing, setOverRing] = useState(false);
  const [dragging, setDragging] = useState<"orbit" | "ring" | null>(null);
  /** Shape of the prepared picture that suits the frame; unknown until the frame has been measured. */
  const [stillShape, setStillShape] = useState<"wide" | "tall" | null>(null);

  // The latest props, for callbacks that outlive a render.
  const latest = useRef({ stage, aperture, probe, plateView, highlightGroup, trace, groups, reducedMotion, coveredBelow, clearTop });
  latest.current = { stage, aperture, probe, plateView, highlightGroup, trace, groups, reducedMotion, coveredBelow, clearTop };
  const shownGroup = hoverGroup ?? highlightGroup;
  const shownGroupRef = useRef(shownGroup);
  shownGroupRef.current = shownGroup;

  // ── The prepared picture comes in two shapes; use the one nearer the frame's own.
  useEffect(() => {
    const element = surface.current;
    if (!element) return;
    const measure = () => {
      const box = element.getBoundingClientRect();
      if (box.height > 0) setStillShape(box.width / box.height < 1.14 ? "tall" : "wide");
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // ── Which picture: the address or the visitor may ask; otherwise the device decides.
  useEffect(() => {
    if (requestedPicture) {
      setTier(requestedPicture);
      setReason(requestedPicture === "still" ? "requested" : null);
      return;
    }
    const decision = decidePicture();
    setTier(decision.picture);
    setReason(decision.reason);
  }, [requestedPicture]);

  useEffect(() => {
    if (tier) onPicture({ live, tier, reason });
  }, [live, tier, reason, onPicture]);

  // ── Labels follow their parts. Written straight to the DOM: this runs every frame.
  const placeLabels = useCallback(() => {
    const engine = engineRef.current;
    if (!engine) return;
    const anchors = engine.getAnchors();
    for (const anchor of anchors.parts) {
      const element = labelRefs.current[anchor.id as InstrumentPart];
      if (!element) continue;
      // A label keeps clear of the controls along the top; its foot then no longer touches the part, which is fine.
      const y = Math.max(anchor.y, latest.current.clearTop + element.offsetHeight);
      element.style.transform = `translate3d(${anchor.x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -100%)`;
      element.dataset.visible = anchor.visible ? "true" : "false";
    }
    const tag = tagRef.current;
    if (tag) {
      const anchor = shownGroupRef.current ? anchors.groups.find((item) => item.id === shownGroupRef.current) : null;
      if (anchor && anchor.visible) {
        tag.style.transform = `translate3d(${anchor.x.toFixed(1)}px, ${anchor.y.toFixed(1)}px, 0) translate(-50%, -160%)`;
        tag.dataset.visible = "true";
      } else {
        tag.dataset.visible = "false";
      }
    }
  }, []);

  // ── The engine's lifetime.
  useEffect(() => {
    if (!tier || tier === "still") {
      setLive(false);
      return;
    }
    const canvasElement = canvas.current;
    const surfaceElement = surface.current;
    if (!canvasElement || !surfaceElement) return;

    let cancelled = false;
    let engine: AtlasEngine | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let visibilityObserver: IntersectionObserver | null = null;
    let onScreen = true;
    let framesSeen = 0;
    let goodWindows = 0;

    const fail = (why: StillReason) => {
      if (cancelled) return;
      setReason(why);
      setTier("still");
    };

    const run = () => {
      if (!engine) return;
      if (onScreen && !document.hidden) engine.start();
      else engine.stop();
    };

    const watchPace = () => {
      if (!engine) return;
      framesSeen++;
      // The first second includes compiling shaders; it says nothing about steady speed.
      if (framesSeen < 45) {
        if (framesSeen === 44) engine.takeFrameInterval(0);
        return;
      }
      const interval = engine.takeFrameInterval(30);
      if (interval === null) return;
      if (interval > SLOW_FRAME) {
        goodWindows = 0;
        const scale = engine.getResolutionScale();
        if (scale > 0.62) engine.setResolutionScale(scale * 0.85);
        else if (interval > UNUSABLE_FRAME && lowerPicture(tier) === "still") fail("slow");
        else if (interval > SLOW_FRAME * 1.4 && tier !== "low") setTier(lowerPicture(tier));
      } else if (interval < FAST_FRAME) {
        goodWindows++;
        if (goodWindows >= 4 && engine.getResolutionScale() < 1) {
          engine.setResolutionScale(Math.min(1, engine.getResolutionScale() * 1.12));
          goodWindows = 0;
        }
      }
    };

    const begin = async () => {
      try {
        // The marks engraved on the instrument are drawn with the site's typefaces.
        await Promise.all([
          document.fonts.load('600 32px "IBM Plex Sans"', "ΩT0.5F1"),
          document.fonts.load('500 12px "IBM Plex Mono"', "T0"),
          document.fonts.load('400 32px "Source Serif 4"', "Ω"),
        ]).catch(() => undefined);
        const { AtlasEngine } = await import("@/atlas/engine/engine");
        if (cancelled) return;

        engine = new AtlasEngine({
          canvas: canvasElement,
          quality: tier as QualityTier,
          fonts: ENGRAVING_FONTS,
          reducedMotion: latest.current.reducedMotion,
        });
        engine.init();
        const box = surfaceElement.getBoundingClientRect();
        engine.setSize(box.width, box.height, window.devicePixelRatio || 1);
        engine.setReadoutGroups(latest.current.groups);
        engine.setAperture(latest.current.aperture, true);
        engine.setSecondProbe(latest.current.probe, true);
        engine.setStage(latest.current.stage, true);
        engine.setPlateView(latest.current.plateView, true);
        engine.setFocusPart(stagePart[latest.current.stage]);
        engine.setHighlight(latest.current.highlightGroup);
        engine.setTrace(latest.current.trace);
        engine.setInset(0, latest.current.coveredBelow);
        engineRef.current = engine;

        let first = true;
        engine.onFrame = () => {
          placeLabels();
          watchPace();
          if (engine) {
            // The diagram of a plate view is drawn by the page, over the plate: say where the plate is.
            const plate = engine.getPlateFrame();
            plateBus.publish(latest.current.plateView || plate.amount > 0 ? plate : null);
          }
          if (first) {
            first = false;
            if (!cancelled) setLive(true);
          }
        };

        resizeObserver = new ResizeObserver((entries) => {
          const size = entries[0]?.contentRect;
          if (size && engine) engine.setSize(size.width, size.height, window.devicePixelRatio || 1);
        });
        resizeObserver.observe(surfaceElement);

        // Draw only while the instrument is on screen and the tab is in front.
        visibilityObserver = new IntersectionObserver((entries) => {
          onScreen = entries[0]?.isIntersecting ?? true;
          run();
        }, { threshold: 0.05 });
        visibilityObserver.observe(surfaceElement);
        document.addEventListener("visibilitychange", run);
        run();
      } catch {
        fail("error");
      }
    };

    const onLost = (event: Event) => {
      event.preventDefault();
      fail("lost");
    };
    canvasElement.addEventListener("webglcontextlost", onLost);

    // Start after the page has painted, so the text and the still picture come first.
    const hasIdle = "requestIdleCallback" in window;
    const idle = hasIdle
      ? window.requestIdleCallback(() => void begin(), { timeout: 900 })
      : window.setTimeout(() => void begin(), 120);

    return () => {
      cancelled = true;
      if (hasIdle) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
      canvasElement.removeEventListener("webglcontextlost", onLost);
      document.removeEventListener("visibilitychange", run);
      resizeObserver?.disconnect();
      visibilityObserver?.disconnect();
      engineRef.current = null;
      engine?.dispose();
      setLive(false);
    };
  }, [tier, placeLabels, plateBus]);

  // ── Prepared pictures dissolve into one another: the one being left stays underneath while the next fades in.
  const stillSrc = plateView ? plateStillUrl(stillShape ?? "wide") : stillUrl(stage, aperture, stillShape ?? "wide", probe);
  const [stills, setStills] = useState<{ current: string; plate: boolean; shape: string | null; turn: number; previous: { src: string; plate: boolean } | null }>({ current: stillSrc, plate: plateView, shape: stillShape, turn: 0, previous: null });
  if (stills.current !== stillSrc) {
    // No dissolve when the page has only just learned which shape of picture fits: nothing was on show yet.
    const dissolve = stills.shape !== null && stills.shape === stillShape;
    setStills({ current: stillSrc, plate: plateView, shape: stillShape, turn: stills.turn + 1, previous: dissolve ? { src: stills.current, plate: stills.plate } : null });
  } else if (stills.shape !== stillShape) {
    setStills({ ...stills, shape: stillShape });
  }

  // ── With a prepared picture, the plate's position comes from a table made when the pictures were baked.
  useEffect(() => {
    if (live) return;
    const element = surface.current;
    if (!plateView || !element || !stillShape) {
      plateBus.publish(null);
      return;
    }
    const place = () => {
      const box = element.getBoundingClientRect();
      plateBus.publish(stillPlateFrame(stillShape, { width: box.width, height: box.height }, { x: 0.5, y: 0.5 }));
    };
    place();
    const observer = new ResizeObserver(place);
    observer.observe(element);
    return () => observer.disconnect();
  }, [live, plateView, stillShape, plateBus]);

  // ── Keep the engine in step with the page.
  useEffect(() => {
    engineRef.current?.setStage(stage);
    engineRef.current?.setFocusPart(stagePart[stage]);
  }, [stage, live]);
  useEffect(() => { engineRef.current?.setAperture(aperture); }, [aperture, live]);
  useEffect(() => { engineRef.current?.setSecondProbe(probe); }, [probe, live]);
  useEffect(() => { engineRef.current?.setPlateView(plateView); }, [plateView, live]);
  useEffect(() => { engineRef.current?.setHighlight(shownGroup); }, [shownGroup, live]);
  useEffect(() => { engineRef.current?.setTrace(trace); }, [trace, live]);
  useEffect(() => { engineRef.current?.setReadoutGroups(groups); }, [groups, live]);
  useEffect(() => { engineRef.current?.setReducedMotion(reducedMotion); }, [reducedMotion, live]);
  useEffect(() => { engineRef.current?.setInset(0, coveredBelow); }, [coveredBelow, live]);
  useEffect(() => { placeLabels(); }, [clearTop, placeLabels]);

  // ── Pointer: drag to look around, drag the brass ring to work the iris, click to choose.
  const drag = useRef<{ id: number; x: number; y: number; travelled: number; mode: "orbit" | "ring"; angle: number } | null>(null);
  const hoverFrame = useRef(0);

  const local = (event: ReactPointerEvent) => {
    const box = surface.current!.getBoundingClientRect();
    return { x: event.clientX - box.left, y: event.clientY - box.top, width: box.width, height: box.height };
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const engine = engineRef.current;
    if (!engine || (event.pointerType === "mouse" && event.button !== 0)) return;
    const point = local(event);
    const hit = engine.pick(point.x, point.y);
    const mode = hit?.ring ? "ring" : "orbit";
    drag.current = { id: event.pointerId, x: point.x, y: point.y, travelled: 0, mode, angle: engine.ringAngle(point.x, point.y) };
    if (mode === "ring" || event.pointerType === "mouse") event.currentTarget.setPointerCapture(event.pointerId);
    if (mode === "ring") setDragging("ring");
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const engine = engineRef.current;
    if (!engine) return;
    const point = local(event);
    const state = drag.current;
    if (state && state.id === event.pointerId) {
      const dx = point.x - state.x;
      const dy = point.y - state.y;
      state.travelled += Math.abs(dx) + Math.abs(dy);
      if (state.mode === "ring") {
        const angle = engine.ringAngle(point.x, point.y);
        let delta = angle - state.angle;
        if (delta > Math.PI) delta -= Math.PI * 2;
        if (delta < -Math.PI) delta += Math.PI * 2;
        state.angle = angle;
        engine.turnRing(delta);
        onApertureChange(engine.getAperture());
      } else if (state.travelled > 6) {
        if (dragging !== "orbit") setDragging("orbit");
        engine.orbitBy(-dx * 0.0045, dy * 0.0035);
      }
      state.x = point.x;
      state.y = point.y;
      return;
    }
    if (event.pointerType !== "mouse") return;
    // Hover: one pick per frame at most.
    engine.setPointer((point.x / point.width) * 2 - 1, (point.y / point.height) * 2 - 1);
    cancelAnimationFrame(hoverFrame.current);
    hoverFrame.current = requestAnimationFrame(() => {
      const hit = engineRef.current?.pick(point.x, point.y) ?? null;
      setHoverPart(hit?.part ?? null);
      setHoverGroup(hit?.groupId ?? null);
      setOverRing(Boolean(hit?.ring));
    });
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>, cancelled: boolean) => {
    const engine = engineRef.current;
    const state = drag.current;
    if (!state || state.id !== event.pointerId) return;
    drag.current = null;
    setDragging(null);
    if (cancelled || !engine || state.travelled > 6) return;
    const point = local(event);
    const hit = engine.pick(point.x, point.y);
    if (!hit) return;
    if (hit.groupId) onGroup(hit.groupId);
    else onStage(partStage[hit.part]);
  };

  const onPointerLeave = () => {
    cancelAnimationFrame(hoverFrame.current);
    setHoverPart(null);
    setHoverGroup(null);
    setOverRing(false);
    engineRef.current?.setPointer(0, 0);
  };

  // Pinch on a trackpad arrives as a wheel event with the control key held. Plain scrolling is left to the page.
  useEffect(() => {
    const element = surface.current;
    if (!element) return;
    const onWheel = (event: WheelEvent) => {
      if (!event.ctrlKey || !engineRef.current) return;
      event.preventDefault();
      engineRef.current.zoomBy(Math.exp(event.deltaY * 0.01));
    };
    element.addEventListener("wheel", onWheel, { passive: false });
    return () => element.removeEventListener("wheel", onWheel);
  }, []);

  const cursor = dragging === "ring" ? "grabbing" : dragging === "orbit" ? "grabbing" : overRing ? "grab" : hoverPart ? "pointer" : live ? "grab" : "default";
  const activePart = stagePart[stage];

  return (
    <div
      ref={surface}
      className="atlas-surface"
      data-live={live ? "true" : "false"}
      data-plate={plateView ? "true" : "false"}
      style={{ cursor }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={(event) => endDrag(event, false)}
      onPointerCancel={(event) => endDrag(event, true)}
      onPointerLeave={onPointerLeave}
    >
      {/* The prepared picture: first paint, and the whole picture when 3D is not available. */}
      {stills.previous && !live && !reducedMotion ? (
        <img key={`previous ${stills.previous.src}`} className="atlas-still-previous" data-plate={stills.previous.plate ? "true" : "false"} src={stills.previous.src} alt="" aria-hidden="true" draggable={false} />
      ) : null}
      <picture className="atlas-still">
        {/* On a narrow screen the tall picture is right from the first paint. Once the fitting shape is known the
            source names the same picture as the img, so the browser never fetches a second one. */}
        <source media="(max-width: 47.99em)" srcSet={plateView ? plateStillUrl(stillShape ?? "tall") : stillUrl(stage, aperture, stillShape ?? "tall", probe)} />
        <img
          /* The element is kept (taking an img out of its picture makes the browser fetch its fallback);
             the fade is restarted by alternating between two identical animations. */
          className={stills.previous && !reducedMotion ? (stills.turn % 2 ? "is-entering-a" : "is-entering-b") : undefined}
          src={stillSrc}
          alt={live ? "" : description}
          decoding="async"
          draggable={false}
          onAnimationEnd={() => setStills((current) => (current.previous ? { ...current, previous: null } : current))}
        />
      </picture>

      {tier && tier !== "still" ? <canvas ref={canvas} key={tier} className="atlas-canvas" aria-hidden="true" /> : null}

      {/* Labels over the parts (live picture only). The stage rail is the keyboard route to the same places. */}
      <div className="atlas-labels" aria-hidden="true">
        {PARTS.map((part) => {
          const meta = stageMeta[partStage[part]];
          return (
            <button
              key={part}
              ref={(element) => { labelRefs.current[part] = element; }}
              type="button"
              tabIndex={-1}
              className="atlas-label"
              data-active={activePart === part ? "true" : "false"}
              data-hover={hoverPart === part ? "true" : "false"}
              data-visible="false"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={() => onStage(partStage[part])}
            >
              <span className="atlas-label-symbol">{meta.symbol}</span>
              <span className="atlas-label-name">{meta.label}</span>
            </button>
          );
        })}
        <span ref={tagRef} className="atlas-sector-tag" data-visible="false">
          {shownGroup ? groupLabels[shownGroup] ?? "" : ""}
        </span>
      </div>

      {children}
    </div>
  );
}
