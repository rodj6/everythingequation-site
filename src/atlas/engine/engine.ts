/**
 * The Atlas engine: builds the instrument, lights it, moves the camera along
 * the bench and draws frames.
 *
 * It knows nothing about React and nothing about the Atlas content. The
 * interface layer tells it which stage to show, how far the iris is open, which
 * readout groups exist and what to emphasise; the engine answers with frames,
 * with the screen position of named anchors, and with what lies under a
 * pointer.
 */
import * as THREE from "three";
import { BACKDROP, LEVEL, LIGHT, OPTICS, QUALITY, STATION_X, type InstrumentPart, type QualitySettings, type QualityTier, type StageId } from "./config";
import { createStudioEnvironment, type StudioEnvironment } from "./environment";
import { createMaterials, type MaterialKit } from "./materials";
import { createPostChain, type PostChain } from "./post";
import { Beam } from "./beam";
import { createCosmos, type Cosmos } from "./cosmos";
import { createCarrier, createRail, createTable, PLINTH, RAIL_TOP, type EngravingFonts } from "./parts/bench";
import { createCell, type CellPart } from "./parts/cell";
import { createIris, RING_TRAVEL, type IrisPart } from "./parts/iris";
import { createLamp, type LampPart } from "./parts/lamp";
import { createLawOptic, type LawOpticPart } from "./parts/lawOptic";
import { createProbe, PROBE_X, type ProbePart } from "./parts/probe";
import { createScreen, type ScreenPart } from "./parts/screen";
import { ReadoutImage, type ReadoutGroup } from "./readout";
import { createTableGloss, type TableGloss } from "./reflection";
import { CameraRig } from "./rig";
import { TraceRays } from "./trace";

/** Height at which each element's post ends (the saddle and holder sit below this). */
const POST_TOP = RAIL_TOP + 0.56;
/** The screen is the largest element and sits lower on a short post. */
const SCREEN_POST_TOP = RAIL_TOP + 0.43;

/** Opening of the iris when the Atlas first appears: partly stopped down, so points are distinct but soft. */
export const DEFAULT_APERTURE = 0.38;

/** Readout groups shown until the interface supplies the real ones from the Atlas data. */
const DEFAULT_GROUPS: ReadoutGroup[] = [
  { id: "global-closure", points: 6 },
  ...["qft", "quantum", "quantum-records", "pregeometry", "gravity", "matter", "parameter-selection", "cosmology", "thermodynamics", "time", "observers", "measurement-programme"].map(
    (id, index) => ({ id, points: 3 + ((index * 5) % 4) }),
  ),
];

export type { InstrumentPart, QualityTier, StageId } from "./config";
export type { ReadoutGroup } from "./readout";

export interface PickResult {
  /** Which element of the instrument is under the pointer. */
  part: InstrumentPart;
  /** True when the pointer is on the iris drive ring or its lever. */
  ring: boolean;
  /** Readout group under the pointer, when it is on the screen. */
  groupId: string | null;
}

export interface AnchorPosition {
  id: string;
  /** Position in CSS pixels from the top-left of the canvas. */
  x: number;
  y: number;
  /** False when the anchor is behind the camera or outside the view. */
  visible: boolean;
}

export interface AtlasEngineOptions {
  canvas: HTMLCanvasElement;
  quality: QualityTier;
  fonts: EngravingFonts;
  reducedMotion?: boolean;
}

/** World positions of the label anchors above each element. */
const PART_ANCHORS: Record<InstrumentPart, THREE.Vector3> = {
  source: new THREE.Vector3(STATION_X.lamp - 0.1, LEVEL.axis + 0.86, 0),
  law: new THREE.Vector3(STATION_X.law, LEVEL.axis + 0.84, 0),
  aperture: new THREE.Vector3(STATION_X.iris, LEVEL.axis + 1.3, 0),
  field: new THREE.Vector3(STATION_X.cell, LEVEL.axis + 0.6, 0),
  readout: new THREE.Vector3(STATION_X.screen, LEVEL.axis + OPTICS.screenHalf + 0.3, 0),
};

export class AtlasEngine {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(30, 1, 0.1, 120);
  readonly quality: QualitySettings;
  readonly rig: CameraRig;
  /** Called after every drawn frame; the interface uses it to place labels. */
  onFrame: (() => void) | null = null;

  private readonly options: AtlasEngineOptions;
  private environment: StudioEnvironment | null = null;
  private kit: MaterialKit | null = null;
  private post: PostChain | null = null;
  private beam: Beam | null = null;
  private readout: ReadoutImage | null = null;
  private trace: TraceRays | null = null;
  private lamp: LampPart | null = null;
  private law: LawOpticPart | null = null;
  private iris: IrisPart | null = null;
  private cell: CellPart | null = null;
  private screen: ScreenPart | null = null;
  private screenLight: THREE.PointLight | null = null;
  private gloss: TableGloss | null = null;
  private cosmos: Cosmos | null = null;
  private probePart: ProbePart | null = null;
  /** The second probe: where the visitor wants it (0 out, 1 in) and where it is. */
  private splitGoal = 0;
  private split = 0;
  private readonly pickTargets: Array<{ part: InstrumentPart; object: THREE.Object3D }> = [];
  private readonly raycaster = new THREE.Raycaster();

  /** Iris opening the visitor asked for, and the eased value actually shown (0..1). */
  private apertureGoal = DEFAULT_APERTURE;
  private aperture = DEFAULT_APERTURE;
  private reducedMotion: boolean;
  private highlightPart: InstrumentPart | null = null;
  private fieldGlow = 0;
  private probeGroup: string | null = null;
  private traceStrength = 0;
  private traceGoal = 0;
  private plate = 0;
  private plateGoal = 0;
  private pulseX: number = STATION_X.screen;
  private pulseGoalX: number = STATION_X.screen;

  private width = 1;
  private height = 1;
  private devicePixelRatio = 1;
  private resolutionScale = 1;
  private lastTime = 0;
  private running = false;
  private frameHandle = 0;
  private disposed = false;
  private needsFrame = true;
  private lastInputTime = 0;
  private frameCount = 0;
  private tickIndex = 0;
  private lastDrawnTick = -2;
  private lastTickTime = 0;
  private intervalSum = 0;
  private intervalSamples = 0;

  constructor(options: AtlasEngineOptions) {
    this.options = options;
    this.reducedMotion = Boolean(options.reducedMotion);
    this.quality = QUALITY[options.quality];
    this.renderer = new THREE.WebGLRenderer({
      canvas: options.canvas,
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
      stencil: false,
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setClearColor(BACKDROP, 1);
    this.scene.background = new THREE.Color(BACKDROP);
    this.rig = new CameraRig(this.camera, this.reducedMotion);
  }

  /** Build the instrument. Fonts for the engraved marks should be loaded before this runs. */
  init(): void {
    const { renderer, scene, quality } = this;
    // The sky first: the studio environment reflects it.
    this.cosmos = createCosmos({ stars: quality.stars, detail: quality.skyDetail });
    scene.add(this.cosmos.group);
    this.environment = createStudioEnvironment(renderer, this.cosmos.environmentSky());
    scene.environment = this.environment.texture;
    scene.environmentIntensity = 1.3;

    const kit = createMaterials(quality);
    this.kit = kit;
    const fonts = this.options.fonts;

    scene.add(createTable(kit));
    scene.add(createRail(kit, fonts));
    const carriers: Array<[InstrumentPart, THREE.Object3D]> = [
      ["source", createCarrier(kit, fonts, { x: STATION_X.lamp, postTop: POST_TOP, label: "Ω", length: 0.7 })],
      ["law", createCarrier(kit, fonts, { x: STATION_X.law, postTop: POST_TOP, label: "T0" })],
      ["aperture", createCarrier(kit, fonts, { x: STATION_X.iris, postTop: POST_TOP, label: "T0.5" })],
      ["field", createCarrier(kit, fonts, { x: STATION_X.cell, postTop: POST_TOP, label: "F" })],
      ["readout", createCarrier(kit, fonts, { x: STATION_X.screen, postTop: SCREEN_POST_TOP, label: "T1", length: 0.66 })],
    ];
    for (const [, object] of carriers) scene.add(object);
    // The second probe has its own small carrier between the cell and the plate.
    scene.add(createCarrier(kit, fonts, { x: PROBE_X, postTop: RAIL_TOP + 0.2, label: "P", length: 0.44 }));
    this.probePart = createProbe(kit, RAIL_TOP + 0.2);
    scene.add(this.probePart.group);

    this.lamp = createLamp(kit, fonts, POST_TOP);
    this.law = createLawOptic(kit, fonts, POST_TOP);
    this.iris = createIris(kit, fonts, POST_TOP);
    this.cell = createCell(kit, fonts, POST_TOP);
    this.readout = new ReadoutImage(quality.readoutSize);
    this.readout.setGroups(DEFAULT_GROUPS);
    this.screen = createScreen(kit, fonts, this.readout.plateMaterial, SCREEN_POST_TOP);
    const elements: Array<[InstrumentPart, THREE.Object3D]> = [
      ["source", this.lamp.group],
      ["law", this.law.group],
      ["aperture", this.iris.group],
      ["field", this.cell.group],
      ["readout", this.screen.group],
    ];
    for (const [, object] of elements) scene.add(object);
    this.addPickProxies();

    this.beam = new Beam(quality.dustCount);
    scene.add(this.beam.group);
    this.trace = new TraceRays();
    scene.add(this.trace.lines);

    if (quality.tableReflection) {
      this.gloss = createTableGloss(PLINTH.length - 0.08, PLINTH.depth - 0.08, PLINTH.centreX);
      scene.add(this.gloss.mesh);
    }

    this.addLights();
    this.post = createPostChain(renderer, scene, this.camera, quality);
    this.rig.setStage("overview", true);
    this.applyAperture();
  }

  private addLights(): void {
    // One shadow-casting key from above and behind the operator's left shoulder.
    const key = new THREE.SpotLight(0xfff4e6, 420, 30, 0.5, 0.85, 2);
    key.position.set(-3.5, 9.5, 6.5);
    key.target.position.set(0.3, 0.9, 0);
    key.castShadow = true;
    key.shadow.mapSize.set(this.quality.shadowMapSize, this.quality.shadowMapSize);
    key.shadow.bias = -0.00035;
    key.shadow.normalBias = 0.02;
    key.shadow.camera.near = 3;
    key.shadow.camera.far = 22;
    key.shadow.radius = 5;
    this.scene.add(key, key.target);

    // The lamp's own light spilling onto the parts nearest to it.
    const spill = new THREE.PointLight(new THREE.Color(...LIGHT.source), 0.5, 3.0, 2);
    spill.position.set(OPTICS.lampFrontX + 0.34, LEVEL.axis, 0);
    this.scene.add(spill);

    // The beam as a real light: it lands on the iris blades, the cell and the
    // screen frame, and the iris throws its shadow down the bench. No distance
    // falloff: a collimated beam keeps its strength, and nothing close to the
    // lamp is burnt out by an inverse-square hot spot.
    const beamLight = new THREE.SpotLight(new THREE.Color(...LIGHT.beam), 3.4, 0, 0.14, 0.4, 0);
    // Just in front of the lamp window, so the housing does not shadow it.
    beamLight.position.set(OPTICS.lampFrontX - 0.08, LEVEL.axis, 0);
    beamLight.target.position.set(STATION_X.screen, LEVEL.axis, 0);
    beamLight.castShadow = this.quality.shadowMapSize >= 1024;
    beamLight.shadow.mapSize.set(1024, 1024);
    beamLight.shadow.camera.near = 0.3;
    beamLight.shadow.camera.far = 11;
    beamLight.shadow.bias = -0.0006;
    beamLight.shadow.radius = 3;
    this.scene.add(beamLight, beamLight.target);

    // Light given back by the lit screen.
    const screenLight = new THREE.PointLight(new THREE.Color(...LIGHT.readout), 2.2, 4.5, 2);
    screenLight.position.set(STATION_X.screen - 0.35, LEVEL.axis, 0);
    this.scene.add(screenLight);
    this.screenLight = screenLight;

    // The galaxy as a light: a cool rim from beyond the readout, so every dark
    // edge on that side separates from the sky behind it.
    if (this.cosmos) {
      const back = new THREE.DirectionalLight(0xbfd2ff, 0.16);
      back.position.copy(this.cosmos.centre).multiplyScalar(30).add(new THREE.Vector3(0, 6, -4));
      back.target.position.set(0.5, LEVEL.axis, 0);
      this.scene.add(back, back.target);
    }

    // A kicker from behind the source end: it traces the top edges of the lamp, the
    // lens ring and the carriers, which otherwise sink into the dark around them.
    const kicker = new THREE.DirectionalLight(0xd6e2ff, 0.5);
    kicker.position.set(-9, 6.5, -7);
    kicker.target.position.set(-2.2, LEVEL.axis, 0);
    this.scene.add(kicker, kicker.target);
  }

  // ───────────────────────────── State from the interface ─────────────────────────────

  setStage(stage: StageId, immediate = false): void {
    this.rig.setStage(stage, immediate);
    this.touch();
  }

  /** Open or close the iris. 0 = smallest stop, 1 = wide open. */
  setAperture(fraction: number, immediate = false): void {
    this.apertureGoal = THREE.MathUtils.clamp(fraction, 0, 1);
    if (immediate) {
      this.aperture = this.apertureGoal;
      this.applyAperture();
    }
    this.touch();
  }

  getAperture(): number {
    return this.apertureGoal;
  }

  /** The readout groups (Tier 1 sectors) drawn on the screen, from the Atlas data. */
  setReadoutGroups(groups: ReadoutGroup[]): void {
    this.readout?.setGroups(groups);
    this.touch();
  }

  /** Emphasise one readout group on the screen (by id), or none. */
  setHighlight(groupId: string | null): void {
    this.readout?.setHighlight(groupId);
    this.touch();
  }

  /** Emphasise one element of the instrument, or none. */
  setFocusPart(part: InstrumentPart | null): void {
    this.highlightPart = part;
    this.touch();
  }

  /**
   * Trace mode. `groupId` is the readout group whose point is followed back;
   * `at` is how far back along the bench the pulse has travelled.
   */
  setTrace(trace: { groupId: string | null; at: InstrumentPart } | null): void {
    if (!trace) {
      this.traceGoal = 0;
      this.probeGroup = null;
      this.readout?.setProbe(null);
    } else {
      this.traceGoal = 1;
      this.probeGroup = trace.groupId;
      const centre = this.groupCentre(trace.groupId);
      this.readout?.setProbe(centre, 1);
      this.pulseGoalX = PART_ANCHORS[trace.at].x;
      this.updateTraceRays();
    }
    this.touch();
  }

  /** Swing the second probe into the light, or out of it. */
  setSecondProbe(on: boolean, immediate = false): void {
    this.splitGoal = on ? 1 : 0;
    if (immediate) {
      this.split = this.splitGoal;
      this.applySplit();
    }
    this.touch();
  }

  /**
   * The plate views: the camera faces the readout plate, its marks clear, and
   * the page draws a diagram over it (see getPlateFrame). The second probe
   * stands aside meanwhile.
   */
  setPlateView(on: boolean, immediate = false): void {
    this.plateGoal = on ? 1 : 0;
    this.rig.setPlateView(on, immediate);
    if (immediate) {
      this.plate = this.plateGoal;
      this.readout?.setBlank(this.plate);
      this.applySplit();
    }
    this.touch();
  }

  /**
   * Where the glass of the plate lies in the picture, in CSS pixels: its centre
   * and the two half-axes (to the right and upward on the plate). The page uses
   * this to lay a flat diagram exactly over the plate.
   */
  getPlateFrame(): { cx: number; cy: number; ax: number; ay: number; bx: number; by: number; visible: boolean; amount: number } {
    const half = OPTICS.screenHalf;
    const centre = this.projectPoint(new THREE.Vector3(STATION_X.screen, LEVEL.axis, 0));
    const right = this.projectPoint(new THREE.Vector3(STATION_X.screen, LEVEL.axis, half));
    const up = this.projectPoint(new THREE.Vector3(STATION_X.screen, LEVEL.axis + half, 0));
    return {
      cx: centre.x, cy: centre.y,
      ax: right.x - centre.x, ay: right.y - centre.y,
      bx: up.x - centre.x, by: up.y - centre.y,
      visible: centre.visible,
      amount: this.plate,
    };
  }

  private applySplit(): void {
    // In a plate view the probe swings aside, whatever its switch says.
    const shown = this.split * (1 - this.plate);
    this.probePart?.setIn(shown);
    this.readout?.setSplit(THREE.MathUtils.smoothstep(shown, 0.55, 1));
  }

  setReducedMotion(value: boolean): void {
    this.reducedMotion = value;
    this.rig.setReducedMotion(value);
    this.touch();
  }

  /** Fraction of the view hidden by panels (right side, bottom), so the subject is re-centred. */
  setInset(right: number, bottom: number): void {
    this.rig.setInset(right, bottom);
    this.touch();
  }

  // ───────────────────────────── Pointer ─────────────────────────────

  /**
   * Simple invisible volumes stand in for the detailed parts when testing what
   * is under the pointer: a handful of boxes instead of a hundred thousand
   * triangles, so hovering costs almost nothing.
   */
  private addPickProxies(): void {
    const material = new THREE.MeshBasicMaterial();
    const add = (part: InstrumentPart, geometry: THREE.BufferGeometry, x: number, y: number) => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, 0);
      mesh.visible = false;
      mesh.updateMatrixWorld(true);
      this.scene.add(mesh);
      this.pickTargets.push({ part, object: mesh });
    };
    const stand = (part: InstrumentPart, x: number) => {
      const height = LEVEL.axis - LEVEL.table;
      add(part, new THREE.BoxGeometry(0.62, height, 0.7), x, LEVEL.table + height / 2);
    };
    add("source", new THREE.BoxGeometry(1.75, 1.6, 1.6), STATION_X.lamp + 0.08, LEVEL.axis);
    stand("source", STATION_X.lamp);
    add("law", new THREE.BoxGeometry(0.95, 1.36, 1.36), STATION_X.law, LEVEL.axis);
    stand("law", STATION_X.law);
    const disc = new THREE.CylinderGeometry(1.06, 1.06, 0.36, 28);
    disc.rotateZ(Math.PI / 2);
    add("aperture", disc, STATION_X.iris, LEVEL.axis);
    add("aperture", new THREE.BoxGeometry(0.2, 0.42, 0.2), STATION_X.iris, LEVEL.axis + 1.2);
    stand("aperture", STATION_X.iris);
    add("field", new THREE.BoxGeometry(1.2, 1.05, 1.0), STATION_X.cell, LEVEL.axis - 0.06);
    stand("field", STATION_X.cell);
    const half = OPTICS.screenHalf + 0.12;
    add("readout", new THREE.BoxGeometry(0.2, half * 2, half * 2), STATION_X.screen, LEVEL.axis);
    stand("readout", STATION_X.screen);
  }

  /** What is under a pointer at CSS pixel position (x, y) of the canvas. */
  pick(x: number, y: number): PickResult | null {
    const ndc = new THREE.Vector2((x / this.width) * 2 - 1, -(y / this.height) * 2 + 1);
    this.raycaster.setFromCamera(ndc, this.camera);
    let part: InstrumentPart | null = null;
    let nearest = Infinity;
    const hits: THREE.Intersection[] = [];
    for (const target of this.pickTargets) {
      hits.length = 0;
      target.object.raycast(this.raycaster, hits);
      for (const hit of hits) {
        if (hit.distance < nearest) {
          nearest = hit.distance;
          part = target.part;
        }
      }
    }
    if (!part) return null;

    // Where the pointer's ray crosses the plane of an element (x = constant).
    const ray = this.raycaster.ray;
    const crossing = (planeX: number): THREE.Vector3 | null => {
      if (Math.abs(ray.direction.x) < 1e-5) return null;
      const t = (planeX - ray.origin.x) / ray.direction.x;
      return t > 0 ? ray.at(t, new THREE.Vector3()) : null;
    };

    let ring = false;
    if (part === "aperture") {
      const point = crossing(STATION_X.iris);
      // The knurled drive ring is the outer band of the housing; the lever sits above it.
      if (point) ring = Math.hypot(point.y - LEVEL.axis, point.z) > 0.8;
    }
    let groupId: string | null = null;
    if (part === "readout" && this.readout) {
      const point = crossing(STATION_X.screen);
      if (point) {
        const half = OPTICS.screenHalf;
        const plate = new THREE.Vector2(point.z / half, (point.y - LEVEL.axis) / half);
        if (Math.abs(plate.x) <= 1 && Math.abs(plate.y) <= 1) {
          let best = 0.26;
          for (const [id, centre] of this.readout.layout.centres) {
            const distance = centre.distanceTo(plate);
            if (distance < best) {
              best = distance;
              groupId = id;
            }
          }
        }
      }
    }
    return { part, ring, groupId };
  }

  /** Angle of a pointer around the iris axis as seen on screen; used to turn the ring by dragging. */
  ringAngle(x: number, y: number): number {
    const centre = this.projectPoint(new THREE.Vector3(STATION_X.iris, LEVEL.axis, 0));
    return Math.atan2(y - centre.y, x - centre.x);
  }

  /** Turn the ring by a change of pointer angle (radians). */
  turnRing(deltaAngle: number): void {
    // Seen from the readout side the ring turns the other way.
    const facing = this.camera.position.x > STATION_X.iris ? -1 : 1;
    this.setAperture(this.apertureGoal + (deltaAngle * facing) / RING_TRAVEL);
  }

  orbitBy(deltaYaw: number, deltaPitch: number): void {
    this.rig.orbitBy(deltaYaw, deltaPitch);
    this.touch();
  }

  zoomBy(factor: number): void {
    this.rig.zoomBy(factor);
    this.touch();
  }

  setPointer(x: number, y: number): void {
    this.rig.setPointer(x, y);
    this.touch();
  }

  // ───────────────────────────── Anchors ─────────────────────────────

  private projectPoint(world: THREE.Vector3): { x: number; y: number; visible: boolean } {
    const projected = world.clone().project(this.camera);
    return {
      x: (projected.x * 0.5 + 0.5) * this.width,
      y: (-projected.y * 0.5 + 0.5) * this.height,
      visible: projected.z > -1 && projected.z < 1 && Math.abs(projected.x) < 1.05 && Math.abs(projected.y) < 1.05,
    };
  }

  private groupCentre(groupId: string | null): THREE.Vector2 {
    return (groupId && this.readout?.layout.centres.get(groupId)) || new THREE.Vector2(0, 0);
  }

  private groupWorld(groupId: string | null): THREE.Vector3 {
    const centre = this.groupCentre(groupId);
    const half = OPTICS.screenHalf;
    return new THREE.Vector3(STATION_X.screen - 0.02, LEVEL.axis + centre.y * half, centre.x * half);
  }

  /** Screen positions of the label anchors: one per element, one per readout group. */
  getAnchors(): { parts: AnchorPosition[]; groups: AnchorPosition[] } {
    const parts = (Object.keys(PART_ANCHORS) as InstrumentPart[]).map((id) => ({ id, ...this.projectPoint(PART_ANCHORS[id]) }));
    const groups: AnchorPosition[] = [];
    if (this.readout) {
      for (const id of this.readout.layout.centres.keys()) groups.push({ id, ...this.projectPoint(this.groupWorld(id)) });
    }
    return { parts, groups };
  }

  // ───────────────────────────── Frames ─────────────────────────────

  private applyAperture(): void {
    if (!this.iris) return;
    const open = this.aperture;
    this.iris.setOpen(open);
    const radius = this.iris.openRadius(open);
    this.beam?.setAperture(radius, open);
    this.readout?.setOpen(open);
    // More light through the iris means more light on, and from, the screen.
    if (this.screenLight) this.screenLight.intensity = THREE.MathUtils.lerp(0.5, 3.4, open);
    if (this.traceGoal > 0) this.updateTraceRays();
  }

  private updateTraceRays(): void {
    if (!this.trace || !this.iris) return;
    this.trace.update(this.groupWorld(this.probeGroup), this.iris.openRadius(this.aperture));
  }

  setSize(width: number, height: number, devicePixelRatio = 1): void {
    this.width = Math.max(1, Math.floor(width));
    this.height = Math.max(1, Math.floor(height));
    this.devicePixelRatio = devicePixelRatio;
    this.applySize();
  }

  /** Lower the rendering resolution (0.5..1) when frames take too long. */
  setResolutionScale(scale: number): void {
    const next = THREE.MathUtils.clamp(scale, 0.5, 1);
    if (Math.abs(next - this.resolutionScale) < 0.04) return;
    this.resolutionScale = next;
    this.applySize();
  }

  getResolutionScale(): number {
    return this.resolutionScale;
  }

  private applySize(): void {
    let ratio = Math.min(this.devicePixelRatio, this.quality.maxPixelRatio) * this.resolutionScale;
    const pixels = this.width * this.height * ratio * ratio;
    if (pixels > this.quality.maxPixels) ratio *= Math.sqrt(this.quality.maxPixels / pixels);
    this.renderer.setPixelRatio(ratio);
    this.renderer.setSize(this.width, this.height, false);
    this.post?.setSize(this.width, this.height, ratio);
    // The table reflection is soft, so half resolution is enough.
    this.gloss?.setSize(this.width * ratio * 0.5, this.height * ratio * 0.5);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.rig.setAspect(this.camera.aspect);
    // Dust motes are sized in pixels; keep them the same physical size at any resolution.
    this.beam?.setPointScale((this.height * ratio) / (2 * Math.tan(THREE.MathUtils.degToRad(this.camera.fov) / 2)));
    // Stars are sized in device pixels, scaled so they look the same on a phone and a large monitor.
    this.cosmos?.setPixelScale(Math.max(1, (this.height * ratio) / 900));
    this.touch();
  }

  /** Note that something changed and a frame is due. */
  private touch(): void {
    this.needsFrame = true;
    this.lastInputTime = this.lastTime;
  }

  /** Draw one frame at an explicit time (seconds). Used by the loop and by baking. */
  renderFrame(time: number): void {
    if (this.disposed || !this.post) return;
    const delta = Math.min(Math.max(time - this.lastTime, 0), 0.1);
    this.lastTime = time;
    const ease = (rate: number) => (this.reducedMotion ? 1 : 1 - Math.exp(-rate * delta));

    if (Math.abs(this.apertureGoal - this.aperture) > 0.0005) {
      // The iris eases to its new setting, like a damped mechanism.
      this.aperture += (this.apertureGoal - this.aperture) * ease(9);
      this.applyAperture();
    }

    if (Math.abs(this.splitGoal - this.split) > 0.0005) {
      this.split += (this.splitGoal - this.split) * ease(4.5);
      if (Math.abs(this.splitGoal - this.split) <= 0.0005) this.split = this.splitGoal;
      // The marks begin to separate once the prism reaches the light.
      this.applySplit();
    }
    if (Math.abs(this.plateGoal - this.plate) > 0.0005) {
      this.plate += (this.plateGoal - this.plate) * ease(3.2);
      if (Math.abs(this.plateGoal - this.plate) <= 0.002) this.plate = this.plateGoal;
      this.readout?.setBlank(this.plate);
      this.applySplit();
    }
    // Trace: bundle fades in, pulse travels to its station.
    this.traceStrength += (this.traceGoal - this.traceStrength) * ease(5);
    this.pulseX += (this.pulseGoalX - this.pulseX) * ease(2.2);
    this.trace?.setStrength(this.traceStrength);
    this.beam?.setPulse(this.pulseX, this.traceStrength);

    // The field cell brightens a little while it is the subject.
    const glowGoal = this.highlightPart === "field" ? 1 : 0;
    this.fieldGlow += (glowGoal - this.fieldGlow) * ease(4);
    this.beam?.setFieldHighlight(this.fieldGlow);

    this.rig.update(delta, time);
    this.beam?.update(this.reducedMotion ? 0 : time);
    this.cosmos?.setTime(this.reducedMotion ? 0 : time);
    this.readout?.update(this.renderer);
    this.post.render(time);
    this.frameCount++;
    this.onFrame?.();
  }

  /** True while something is still easing toward its target. */
  private isAnimating(): boolean {
    return (
      !this.rig.isSettled ||
      Math.abs(this.apertureGoal - this.aperture) > 0.0005 ||
      Math.abs(this.splitGoal - this.split) > 0.0005 ||
      Math.abs(this.plateGoal - this.plate) > 0.0005 ||
      Math.abs(this.traceGoal - this.traceStrength) > 0.01 ||
      Math.abs(this.pulseGoalX - this.pulseX) > 0.01
    );
  }

  start(): void {
    if (this.running || this.disposed) return;
    this.running = true;
    let skip = 0;
    const tick = (now: number) => {
      if (!this.running) return;
      const time = now / 1000;
      const animating = this.needsFrame || this.isAnimating();
      // With motion allowed the dust keeps drifting, so frames continue; after a
      // quiet spell they drop to half rate to save power. With reduced motion
      // nothing moves on its own, so frames are drawn only when something changes.
      const idle = time - this.lastInputTime > 6;
      let draw = animating;
      if (!draw && !this.reducedMotion) draw = idle ? skip++ % 2 === 0 : true;
      if (draw) {
        this.needsFrame = false;
        this.renderFrame(time);
        // Pace of consecutive frames: the honest measure of how hard the device is working.
        if (this.lastDrawnTick === this.tickIndex - 1) {
          this.intervalSum += now - this.lastTickTime;
          this.intervalSamples++;
        }
        this.lastDrawnTick = this.tickIndex;
      }
      this.tickIndex++;
      this.lastTickTime = now;
      this.frameHandle = requestAnimationFrame(tick);
    };
    this.frameHandle = requestAnimationFrame(tick);
  }

  stop(): void {
    this.running = false;
    cancelAnimationFrame(this.frameHandle);
  }

  get frames(): number {
    return this.frameCount;
  }

  /**
   * Mean time between consecutive frames (milliseconds) since this was last
   * called, or null when too few frames have been drawn to say. The interface
   * uses it to lower the resolution, or the quality tier, on a slow device.
   */
  takeFrameInterval(minimumSamples = 24): number | null {
    if (this.intervalSamples < minimumSamples) return null;
    const mean = this.intervalSum / this.intervalSamples;
    this.intervalSum = 0;
    this.intervalSamples = 0;
    return mean;
  }

  dispose(): void {
    this.stop();
    this.disposed = true;
    this.onFrame = null;
    this.post?.dispose();
    this.beam?.dispose();
    this.trace?.dispose();
    this.gloss?.dispose();
    this.cosmos?.dispose();
    this.readout?.dispose();
    this.kit?.dispose();
    this.environment?.dispose();
    this.scene.traverse((object) => {
      const mesh = object as THREE.Mesh;
      if (mesh.isMesh) mesh.geometry.dispose();
    });
    this.renderer.dispose();
  }
}
