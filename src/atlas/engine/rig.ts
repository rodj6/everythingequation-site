/**
 * Camera rig. The visitor travels along the bench from station to station.
 *
 * Each station says what to look at, from which direction, and how much of the
 * world must fit in the frame. The distance is then solved for the current
 * window shape, so the same station frames its subject on a phone and on a wide
 * monitor. Tall windows use their own viewing directions, because a long bench
 * seen side-on does not fit a portrait screen.
 */
import * as THREE from "three";
import { LEVEL, STATION_X, type StageId } from "./config";

interface Station {
  target: [number, number, number];
  /** Direction from the subject toward the camera (need not be unit length). */
  from: [number, number, number];
  /** World width and height that must stay visible. */
  fit: [number, number];
  fov: number;
}

const AXIS = LEVEL.axis;

const LANDSCAPE: Record<StageId, Station> = {
  overview: { target: [-0.3, 1.6, 0], from: [-0.86, 0.27, 1.02], fit: [9.5, 4.7], fov: 26 },
  source: { target: [STATION_X.lamp + 0.35, AXIS - 0.12, 0], from: [-0.5, 0.26, 1], fit: [3.9, 3.0], fov: 28 },
  law: { target: [STATION_X.law + 0.1, AXIS - 0.1, 0], from: [-0.62, 0.28, 1], fit: [3.6, 3.0], fov: 28 },
  aperture: { target: [STATION_X.iris, AXIS - 0.04, 0], from: [-1, 0.22, 0.92], fit: [3.0, 2.6], fov: 28 },
  field: { target: [STATION_X.cell, AXIS - 0.1, 0], from: [-0.4, 0.3, 1], fit: [3.0, 2.5], fov: 28 },
  readout: { target: [STATION_X.screen - 0.25, AXIS, 0], from: [-1, 0.16, 0.98], fit: [4.3, 3.6], fov: 28 },
};

const PORTRAIT: Record<StageId, Station> = {
  overview: { target: [0.4, 1.3, 0], from: [-1, 0.52, 0.86], fit: [6.4, 9.4], fov: 30 },
  source: { target: [STATION_X.lamp + 0.3, AXIS - 0.15, 0], from: [-0.55, 0.3, 1], fit: [2.5, 4.2], fov: 30 },
  law: { target: [STATION_X.law, AXIS - 0.12, 0], from: [-0.7, 0.3, 1], fit: [2.2, 3.8], fov: 30 },
  aperture: { target: [STATION_X.iris, AXIS - 0.06, 0], from: [-1, 0.24, 0.7], fit: [2.2, 3.8], fov: 30 },
  field: { target: [STATION_X.cell, AXIS - 0.12, 0], from: [-0.55, 0.3, 1], fit: [2.2, 3.6], fov: 30 },
  readout: { target: [STATION_X.screen - 0.1, AXIS - 0.05, 0], from: [-1, 0.14, 0.62], fit: [3.1, 4.6], fov: 30 },
};

/** How quickly the camera settles on a new station (per second). */
/**
 * The plate views (Boundary, History) look at the readout plate as squarely as
 * the field cell in front of it allows. The galaxy lies behind the plate from here.
 */
const PLATE_LANDSCAPE: Station = { target: [STATION_X.screen, AXIS + 0.02, 0], from: [-1, 0.1, 0.76], fit: [3.7, 3.3], fov: 26 };
const PLATE_PORTRAIT: Station = { target: [STATION_X.screen, AXIS, 0], from: [-1, 0.1, 0.66], fit: [2.5, 3.5], fov: 30 };

const TRAVEL_RATE = 2.6;
/** Limits of the visitor's own orbit around the current subject (radians). */
const ORBIT_LIMIT = { yaw: 0.5, pitchUp: 0.3, pitchDown: 0.14 };

function solveStation(station: Station, aspect: number): { position: THREE.Vector3; target: THREE.Vector3; fov: number } {
  const target = new THREE.Vector3(...station.target);
  const direction = new THREE.Vector3(...station.from).normalize();
  const vertical = THREE.MathUtils.degToRad(station.fov);
  const horizontal = 2 * Math.atan(Math.tan(vertical / 2) * aspect);
  const distance = Math.max(
    station.fit[1] / 2 / Math.tan(vertical / 2),
    station.fit[0] / 2 / Math.tan(horizontal / 2),
  );
  return { position: target.clone().addScaledVector(direction, distance), target, fov: station.fov };
}

export class CameraRig {
  stage: StageId = "overview";
  private aspect = 1.6;
  private readonly goalPosition = new THREE.Vector3();
  private readonly goalTarget = new THREE.Vector3();
  private goalFov = 28;
  private readonly position = new THREE.Vector3();
  private readonly target = new THREE.Vector3();
  private fov = 28;
  private yaw = 0;
  private pitch = 0;
  private zoom = 1;
  private goalYaw = 0;
  private goalPitch = 0;
  private goalZoom = 1;
  private readonly pointer = new THREE.Vector2();
  private readonly pointerGoal = new THREE.Vector2();
  /** Fraction of the view covered by interface panels, so the subject can be re-centred. */
  private readonly inset = new THREE.Vector2();
  private readonly insetGoal = new THREE.Vector2();
  private settled = false;
  private plateView = false;

  constructor(private readonly camera: THREE.PerspectiveCamera, private reducedMotion: boolean) {}

  setReducedMotion(value: boolean): void {
    this.reducedMotion = value;
  }

  setAspect(aspect: number): void {
    this.aspect = aspect;
    this.applyStage(false);
  }

  setStage(stage: StageId, immediate = false): void {
    this.stage = stage;
    this.goalYaw = 0;
    this.goalPitch = 0;
    this.goalZoom = 1;
    this.applyStage(immediate || this.reducedMotion);
  }

  /** Visitor drag: turn around the current subject, within limits. */
  /** Look at the readout plate (the Boundary and History views), or return to the stage. */
  setPlateView(on: boolean, immediate = false): void {
    if (this.plateView === on && !immediate) return;
    this.plateView = on;
    this.goalYaw = 0;
    this.goalPitch = 0;
    this.goalZoom = 1;
    this.applyStage(immediate || this.reducedMotion);
  }

  orbitBy(deltaYaw: number, deltaPitch: number): void {
    this.goalYaw = THREE.MathUtils.clamp(this.goalYaw + deltaYaw, -ORBIT_LIMIT.yaw, ORBIT_LIMIT.yaw);
    this.goalPitch = THREE.MathUtils.clamp(this.goalPitch + deltaPitch, -ORBIT_LIMIT.pitchDown, ORBIT_LIMIT.pitchUp);
    this.settled = false;
  }

  zoomBy(factor: number): void {
    this.goalZoom = THREE.MathUtils.clamp(this.goalZoom * factor, 0.55, 1.5);
    this.settled = false;
  }

  setPointer(x: number, y: number): void {
    this.pointerGoal.set(x, y);
    this.settled = false;
  }

  /** x: fraction of width hidden on the right; y: fraction of height hidden at the bottom. */
  setInset(right: number, bottom: number): void {
    this.insetGoal.set(right, bottom);
    this.settled = false;
  }

  get isSettled(): boolean {
    return this.settled;
  }

  private applyStage(immediate: boolean): void {
    const landscape = solveStation(this.plateView ? PLATE_LANDSCAPE : LANDSCAPE[this.stage], this.aspect);
    const portrait = solveStation(this.plateView ? PLATE_PORTRAIT : PORTRAIT[this.stage], this.aspect);
    // Blend between the two families of views around a square window.
    const mix = THREE.MathUtils.smoothstep(this.aspect, 0.78, 1.18);
    this.goalPosition.lerpVectors(portrait.position, landscape.position, mix);
    this.goalTarget.lerpVectors(portrait.target, landscape.target, mix);
    this.goalFov = THREE.MathUtils.lerp(portrait.fov, landscape.fov, mix);
    this.settled = false;
    if (immediate) {
      this.position.copy(this.goalPosition);
      this.target.copy(this.goalTarget);
      this.fov = this.goalFov;
      this.yaw = this.goalYaw;
      this.pitch = this.goalPitch;
      this.zoom = this.goalZoom;
      this.inset.copy(this.insetGoal);
      this.write(0);
    }
  }

  update(delta: number, time: number): void {
    const k = this.reducedMotion ? 1 : 1 - Math.exp(-TRAVEL_RATE * delta);
    const fast = this.reducedMotion ? 1 : 1 - Math.exp(-7 * delta);
    this.position.lerp(this.goalPosition, k);
    this.target.lerp(this.goalTarget, k);
    this.fov += (this.goalFov - this.fov) * k;
    this.yaw += (this.goalYaw - this.yaw) * fast;
    this.pitch += (this.goalPitch - this.pitch) * fast;
    this.zoom += (this.goalZoom - this.zoom) * fast;
    this.pointer.lerp(this.pointerGoal, fast * 0.5);
    this.inset.lerp(this.insetGoal, k);
    const remaining =
      this.position.distanceTo(this.goalPosition) + this.target.distanceTo(this.goalTarget) +
      Math.abs(this.goalYaw - this.yaw) + Math.abs(this.goalPitch - this.pitch) + Math.abs(this.goalZoom - this.zoom) +
      this.pointer.distanceTo(this.pointerGoal) + this.inset.distanceTo(this.insetGoal);
    this.settled = remaining < 0.0015;
    this.write(time);
  }

  private write(time: number): void {
    const offset = this.position.clone().sub(this.target);
    // Where panels or controls cover part of the view, stand back a little so the subject still fits in what is left.
    const distance = offset.length() * this.zoom * (1 + 0.6 * (this.inset.x + this.inset.y));
    const spherical = new THREE.Spherical().setFromVector3(offset);
    // A slow, small drift keeps reflections alive without moving the subject.
    const drift = this.reducedMotion ? 0 : 1;
    spherical.theta += this.yaw + this.pointer.x * 0.035 + Math.sin(time * 0.11) * 0.012 * drift;
    spherical.phi = THREE.MathUtils.clamp(
      spherical.phi - this.pitch - this.pointer.y * 0.02 + Math.sin(time * 0.083 + 1.3) * 0.006 * drift,
      0.35,
      1.52,
    );
    spherical.radius = distance;
    const position = new THREE.Vector3().setFromSpherical(spherical).add(this.target);
    this.camera.position.copy(position);
    this.camera.fov = this.fov;
    this.camera.lookAt(this.target);
    // Shift the picture so the subject sits in the part of the view not covered by panels.
    const full = this.camera.view ? this.camera.view.fullWidth : 0;
    if (this.inset.lengthSq() > 1e-6 || full) {
      const w = 1000;
      const h = Math.round(1000 / this.camera.aspect);
      this.camera.setViewOffset(w, h, Math.round(this.inset.x * w * 0.5), Math.round(this.inset.y * h * 0.5), w, h);
    }
    this.camera.updateProjectionMatrix();
  }
}
