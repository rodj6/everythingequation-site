"use client";

/**
 * The diagram of a plate view, drawn over the readout plate.
 *
 * AtlasStage says where the plate is (through the PlateBus); this component
 * draws the Boundary or History diagram there on a flat canvas, and lets the
 * pointer take hold of the Boundary region. The same drawing serves the live
 * 3D picture and the prepared one.
 */
import { useEffect, useRef, type PointerEvent as ReactPointerEvent } from "react";
import { bearingAt, drawBoundary, evaluateBoundary, type BoundaryState } from "@/atlas/lenses/boundary";
import { drawHistory, evaluateHistory, type HistoryState } from "@/atlas/lenses/history";
import { plateScale, toPlate, type PlateBus } from "@/atlas/lenses/plate";
import type { AtlasViewId } from "@/data/atlas/views";

export interface AtlasPlateLayerProps {
  bus: PlateBus;
  view: AtlasViewId;
  boundary: BoundaryState;
  history: HistoryState;
  reducedMotion: boolean;
  /** The pointer has turned the Boundary region to a new bearing (degrees). */
  onBearing: (degrees: number) => void;
}

export default function AtlasPlateLayer({ bus, view, boundary, history, reducedMotion, onBearing }: AtlasPlateLayerProps) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const hit = useRef<HTMLDivElement>(null);
  const latest = useRef({ view, boundary, history, reducedMotion });
  latest.current = { view, boundary, history, reducedMotion };
  const request = useRef<() => void>(() => undefined);
  /** What is on the plate right now: the region eases toward where it was sent, and a new diagram fades in. */
  const motion = useRef({ arc: boundary.arc, at: boundary.at, view, since: 0, last: 0 });

  useEffect(() => {
    const element = canvas.current;
    if (!element) return;
    let frameRequest = 0;
    let timer = 0;
    let stopped = false;

    const draw = (now: number) => {
      frameRequest = 0;
      if (stopped) return;
      const state = latest.current;
      const frame = bus.frame;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const box = element.getBoundingClientRect();
      const width = Math.max(1, Math.round(box.width * ratio));
      const height = Math.max(1, Math.round(box.height * ratio));
      if (element.width !== width || element.height !== height) {
        element.width = width;
        element.height = height;
      }
      const ctx = element.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const area = hit.current;
      const shown = Boolean(frame) && state.view !== "instrument" && frame!.amount > 0.02;
      if (area) {
        if (shown && state.view === "boundary") {
          // The part of the picture a pointer can take hold of: the plate and a margin around its rim.
          const reach = 1.3;
          const halfWidth = (Math.abs(frame!.ax) + Math.abs(frame!.bx)) * reach;
          const halfHeight = (Math.abs(frame!.ay) + Math.abs(frame!.by)) * reach;
          area.style.display = "block";
          area.style.left = `${frame!.cx - halfWidth}px`;
          area.style.top = `${frame!.cy - halfHeight}px`;
          area.style.width = `${halfWidth * 2}px`;
          area.style.height = `${halfHeight * 2}px`;
        } else {
          area.style.display = "none";
        }
      }
      if (!shown || !frame) return;

      const scale = plateScale(frame);
      if (scale < 20) return;
      const pen = { ctx, frame, ratio, px: 1 / scale, time: state.reducedMotion ? 0 : now / 1000 };
      const moving = motion.current;
      if (moving.view !== state.view) {
        moving.view = state.view;
        moving.since = now;
      }
      const step = Math.min(0.1, Math.max(0, (now - moving.last) / 1000));
      moving.last = now;
      if (state.reducedMotion) {
        moving.arc = state.boundary.arc;
        moving.at = state.boundary.at;
      } else {
        const ease = 1 - Math.exp(-step * 11);
        moving.arc += (state.boundary.arc - moving.arc) * ease;
        const turn = ((state.boundary.at - moving.at + 540) % 360) - 180;   // the short way round
        moving.at = (moving.at + turn * ease + 360) % 360;
        if (Math.abs(state.boundary.arc - moving.arc) < 0.3) moving.arc = state.boundary.arc;
        if (Math.abs(turn) < 0.3) moving.at = state.boundary.at;
      }
      const appear = state.reducedMotion ? 1 : Math.min(1, (now - moving.since) / 360);
      const strength = frame.amount * appear * (2 - appear);
      if (state.view === "boundary") {
        const drawn = { ...state.boundary, arc: moving.arc, at: moving.at };
        drawBoundary(pen, drawn, evaluateBoundary(drawn), strength);
      } else {
        drawHistory(pen, state.history, evaluateHistory(state.history), strength);
      }

      // The open features breathe slowly; thirty frames a second is plenty.
      if (!state.reducedMotion) timer = window.setTimeout(ask, 34);
    };
    const ask = () => {
      if (!frameRequest && !stopped) frameRequest = requestAnimationFrame(draw);
    };
    request.current = ask;

    const unsubscribe = bus.subscribe(ask);
    const observer = new ResizeObserver(ask);
    observer.observe(element);
    ask();
    return () => {
      stopped = true;
      unsubscribe();
      observer.disconnect();
      cancelAnimationFrame(frameRequest);
      window.clearTimeout(timer);
    };
  }, [bus]);

  useEffect(() => { request.current(); }, [view, boundary, history, reducedMotion]);

  // ── Pointer: press or drag anywhere on the plate to turn the region toward that point.
  const held = useRef<number | null>(null);
  const turn = (event: ReactPointerEvent<HTMLDivElement>) => {
    const frame = bus.frame;
    const layer = canvas.current;
    if (!frame || !layer) return false;
    const box = layer.getBoundingClientRect();
    const point = toPlate(frame, event.clientX - box.left, event.clientY - box.top);
    const bearing = bearingAt(point.x, point.y);
    if (bearing === null) return false;
    onBearing(bearing);
    return true;
  };

  return (
    <>
      <canvas ref={canvas} className="atlas-plate-layer" aria-hidden="true" />
      <div
        ref={hit}
        className="atlas-plate-hit"
        aria-hidden="true"
        onPointerDown={(event) => {
          if (event.pointerType === "mouse" && event.button !== 0) return;
          if (!turn(event)) return;
          event.stopPropagation();
          held.current = event.pointerId;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (held.current !== event.pointerId) return;
          event.stopPropagation();
          turn(event);
        }}
        onPointerUp={(event) => { if (held.current === event.pointerId) { held.current = null; event.stopPropagation(); } }}
        onPointerCancel={(event) => { if (held.current === event.pointerId) held.current = null; }}
      />
    </>
  );
}
