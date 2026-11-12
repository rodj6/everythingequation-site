/**
 * The History view: a small physical history drawn on the plate, and what one
 * listener holds at a chosen occasion within it.
 *
 * Later is upward. A source (left) sounds the notes; each travels to the
 * listener (right) and arrives a little later. The whole history is always
 * drawn. The marker on the listener's line chooses an occasion, and the
 * drawing shows what is received, retained and live there. The notes, timings
 * and wording are in src/data/atlas/views.ts.
 */
import { historyView, type HistoryNote } from "@/data/atlas/views";
import { TAU, plateText, plateVeil, usePlateSpace, type PlatePen } from "./plate";

export interface HistoryState {
  /** Index into historyView.occasions. */
  occasion: number;
  /** Whether the listener retains what it has received. */
  retain: boolean;
}

export const initialHistory: HistoryState = { occasion: historyView.initialOccasion, retain: true };

export interface HistoryResult {
  /** The listener's local time at the chosen occasion, in milliseconds. */
  at: number;
  notes: Array<{ note: HistoryNote; arrival: number; received: boolean; live: boolean; retained: boolean; takenUp: boolean }>;
  summary: string;
}

export function evaluateHistory(state: HistoryState): HistoryResult {
  const index = Math.min(historyView.occasions.length - 1, Math.max(0, state.occasion));
  const occasion = historyView.occasions[index];
  const arrivals = historyView.notes.map((note) => note.at + historyView.receptionDelay);
  const lastReceived = arrivals.reduce((last, arrival, i) => (occasion.at >= arrival ? i : last), -1);
  const notes = historyView.notes.map((note, i) => {
    const received = occasion.at >= arrivals[i];
    const live = i === lastReceived;
    const retained = state.retain && received && !live;
    // A step is heard once the new note has been integrated with a retained predecessor.
    const takenUp = state.retain && received && i > 0 && occasion.at >= arrivals[i] + historyView.integrationDelay;
    return { note, arrival: arrivals[i], received, live, retained, takenUp };
  });
  const says = state.retain ? occasion.says : occasion.saysAlone;
  return { at: occasion.at, notes, summary: `${occasion.label}, ${occasion.at} ms on the listener\u2019s path. ${says}` };
}

// ───────────────────────────── Drawing ─────────────────────────────

const WARM = "255, 232, 194";
const COOL = "143, 227, 255";
const GHOST = "198, 208, 226";

const SOURCE_X = -0.5;
const LISTENER_X = 0.3;
const [T0, T1] = historyView.span;
const yOf = (ms: number) => -0.68 + ((ms - T0) / (T1 - T0)) * 1.36;

export function drawHistory(pen: PlatePen, state: HistoryState, result: HistoryResult, strength: number): void {
  const { ctx, px, time } = pen;
  ctx.save();
  ctx.globalAlpha = strength;
  usePlateSpace(pen);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  plateVeil(pen, 0.6);

  // A fine rim, and faint rules for equal steps of the history's time.
  ctx.beginPath();
  ctx.arc(0, 0, 0.968, 0, TAU);
  ctx.strokeStyle = `rgba(${WARM}, 0.22)`;
  ctx.lineWidth = px;
  ctx.stroke();
  ctx.strokeStyle = `rgba(${GHOST}, 0.09)`;
  for (let ms = 0; ms <= 200; ms += 50) {
    const y = yOf(ms);
    const reach = Math.sqrt(Math.max(0, 0.9 * 0.9 - y * y));
    ctx.beginPath();
    ctx.moveTo(-reach, y);
    ctx.lineTo(reach, y);
    ctx.stroke();
  }

  // The two world lines. Both run the whole height: the history is all there.
  const line = (x: number, alpha: number, width: number) => {
    const reach = Math.sqrt(Math.max(0, 0.86 * 0.86 - x * x));
    ctx.beginPath();
    ctx.moveTo(x, -reach);
    ctx.lineTo(x, reach);
    ctx.strokeStyle = `rgba(${GHOST}, ${alpha})`;
    ctx.lineWidth = px * width;
    ctx.stroke();
    return reach;
  };
  const sourceReach = line(SOURCE_X, 0.7, 1.8);
  const listenerReach = line(LISTENER_X, 0.7, 1.8);

  const here = yOf(result.at);

  // What the listener has behind it on its own line, up to the chosen occasion.
  ctx.beginPath();
  ctx.moveTo(LISTENER_X, -listenerReach);
  ctx.lineTo(LISTENER_X, here);
  ctx.strokeStyle = `rgba(${WARM}, 0.9)`;
  ctx.lineWidth = px * 2.6;
  ctx.stroke();

  // ── Each note: sounded at the source, carried across, received.
  for (const item of result.notes) {
    const from = yOf(item.note.at);
    const to = yOf(item.arrival);
    // The signal.
    ctx.beginPath();
    ctx.moveTo(SOURCE_X, from);
    ctx.lineTo(LISTENER_X, to);
    ctx.strokeStyle = item.received ? `rgba(${COOL}, 0.95)` : `rgba(${COOL}, 0.5)`;
    ctx.lineWidth = px * (item.received ? 2.2 : 1.5);
    if (!item.received) ctx.setLineDash([px * 5, px * 4]);
    ctx.stroke();
    ctx.setLineDash([]);
    // The event at the source: always solid. It is part of the history whether or not it has arrived.
    ctx.beginPath();
    ctx.arc(SOURCE_X, from, 0.038, 0, TAU);
    ctx.fillStyle = `rgba(${COOL}, 0.95)`;
    ctx.shadowColor = `rgba(${COOL}, 0.8)`;
    ctx.shadowBlur = 8 * pen.ratio;
    ctx.fill();
    ctx.shadowBlur = 0;
    // Its arrival on the listener's line.
    ctx.beginPath();
    ctx.arc(LISTENER_X, to, item.live ? 0.05 : 0.036, 0, TAU);
    if (item.live) {
      ctx.fillStyle = `rgba(${WARM}, 1)`;
      ctx.shadowColor = `rgba(${WARM}, 1)`;
      ctx.shadowBlur = 16 * pen.ratio;
      ctx.fill();
      ctx.shadowBlur = 0;
    } else if (item.retained) {
      ctx.fillStyle = `rgba(${WARM}, 0.62)`;
      ctx.fill();
      ctx.strokeStyle = `rgba(${WARM}, 0.9)`;
      ctx.lineWidth = px * 1.2;
      ctx.stroke();
    } else {
      ctx.fillStyle = "rgba(10, 12, 16, 0.9)";
      ctx.fill();
      ctx.strokeStyle = item.received ? `rgba(${GHOST}, 0.8)` : `rgba(${GHOST}, 0.5)`;
      ctx.lineWidth = px * 1.5;
      ctx.stroke();
    }
  }

  // ── Steps that are heard: a retained note and the next, taken up together.
  const bow = (fromY: number, toY: number, alpha: number, dashed: boolean) => {
    const out = 0.2 + Math.abs(toY - fromY) * 0.22;
    ctx.beginPath();
    ctx.moveTo(LISTENER_X + 0.05, fromY);
    ctx.bezierCurveTo(LISTENER_X + out, fromY + (toY - fromY) * 0.2, LISTENER_X + out, toY - (toY - fromY) * 0.2, LISTENER_X + 0.062, toY - 0.012);
    ctx.strokeStyle = `rgba(${WARM}, ${alpha})`;
    ctx.lineWidth = px * (dashed ? 1.6 : 2.6);
    if (dashed) ctx.setLineDash([px * 4, px * 4]);
    ctx.stroke();
    ctx.setLineDash([]);
    if (!dashed) {
      // Arrowhead at the later note.
      ctx.beginPath();
      ctx.moveTo(LISTENER_X + 0.05, toY - 0.004);
      ctx.lineTo(LISTENER_X + 0.112, toY - 0.05);
      ctx.lineTo(LISTENER_X + 0.122, toY + 0.012);
      ctx.closePath();
      ctx.fillStyle = `rgba(${WARM}, ${alpha})`;
      ctx.fill();
    }
  };
  let heard = false;
  result.notes.forEach((item, index) => {
    if (!item.takenUp || index === 0) return;
    heard = true;
    bow(yOf(result.notes[index - 1].arrival), yOf(item.arrival), item.live ? 0.98 : 0.5, false);
  });
  // Anticipation: a present expectation of a continuation. It starts from the live note and reaches no event.
  const live = result.notes.find((item) => item.live);
  if (heard && live && live !== result.notes[result.notes.length - 1]) {
    const from = yOf(live.arrival);
    bow(from, Math.min(listenerReach - 0.06, from + 0.3), 0.42, true);
  }

  // ── The occasion: where on its path the listener is being asked about.
  const pulse = time ? 0.5 + 0.5 * Math.sin(time * 1.6) : 0.6;
  ctx.beginPath();
  ctx.moveTo(LISTENER_X - 0.11, here);
  ctx.lineTo(LISTENER_X + 0.11, here);
  ctx.strokeStyle = `rgba(${WARM}, 0.95)`;
  ctx.lineWidth = px * 1.6;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(LISTENER_X, here, 0.062 + pulse * 0.012, 0, TAU);
  ctx.strokeStyle = `rgba(${WARM}, ${0.55 + pulse * 0.4})`;
  ctx.lineWidth = px * 1.6;
  ctx.stroke();

  ctx.restore();

  // ── Lettering, upright.
  const small = Math.max(10, Math.min(14, 1 / px / 20));
  ctx.save();
  ctx.globalAlpha = strength;
  for (const item of result.notes) {
    plateText(pen, item.note.id, SOURCE_X, yOf(item.note.at), { size: small + 5, dx: -small * 1.5, weight: 600, color: `rgba(${COOL}, 0.98)`, family: '"Source Serif 4", Georgia, serif' });
  }
  plateText(pen, "SOURCE", SOURCE_X, -sourceReach, { size: small - 1, dy: small * 1.2, color: `rgba(${GHOST}, 0.8)` });
  plateText(pen, "LISTENER", LISTENER_X, -listenerReach, { size: small - 1, dy: small * 1.2, color: `rgba(${GHOST}, 0.8)` });
  plateText(pen, "LATER ↑", -0.02, 0.86, { size: small - 1, color: `rgba(${GHOST}, 0.62)` });
  plateText(pen, `${result.at} ms`, LISTENER_X, here, { size: small, dx: small * 4.4, dy: -small * 1.5, color: `rgba(${WARM}, 0.98)` });
  ctx.restore();
  void state;
}
