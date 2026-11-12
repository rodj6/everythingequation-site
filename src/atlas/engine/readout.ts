/**
 * The readout image: what lands on the ground-glass screen.
 *
 * The picture is built from the Atlas data. Each readout group (a sector of the
 * Tier 1 readout) contributes a small cluster of source points. The iris decides
 * how those points arrive:
 *
 *   - stopped down, each point lands as a small sharp spot and neighbours stay
 *     distinct;
 *   - opened up, each point spreads into a disc the shape of the iris opening,
 *     and neighbouring discs merge.
 *
 * Merged discs are the visual statement of the instrument: different source
 * detail can produce the same readout. It is an illustration of that idea, not
 * a model of any particular physical system.
 */
import * as THREE from "three";
import { LIGHT, OPTICS } from "./config";
import { frostMaps, seededRandom } from "./textures";

export interface ReadoutGroup {
  id: string;
  /** How many source points to draw for this group (2-9). */
  points: number;
}

export interface ReadoutLayout {
  /** Centre of each group on the plate, in plate units (-1..1, y up). */
  centres: Map<string, THREE.Vector2>;
}

const MAX_POINTS = 96;
/** Marks that are really two: one source point from each of these groups (by index) has a hidden twin. */
const MAX_TWINS = 6;
const TWIN_GROUPS = [1, 3, 5, 8, 10, 12];

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform vec4 uPoints[${MAX_POINTS}];   // x, y, energy, group index
  uniform int uCount;
  uniform float uOpen;                   // 0 = smallest stop, 1 = wide open
  uniform float uBlades;
  uniform float uHighlight;              // group index to emphasise, or -1
  uniform float uTime;
  uniform vec3 uTint;
  uniform vec3 uAccent;
  uniform vec3 uProbe;                   // x, y, strength
  uniform vec4 uTwins[${MAX_TWINS}];     // x, y, energy, direction of separation (radians)
  uniform int uTwinCount;
  uniform float uSplit;                  // 0 = second probe out, 1 = in
  uniform vec3 uWarm;
  uniform float uBlank;                  // 1 = the marks are cleared for a plate view

  const float PI = 3.141592653589793;

  // Distance to the edge of the iris opening, normalised so 1.0 is the edge.
  // The opening is a polygon with gently bowed sides, as curved blades make.
  float irisShape(vec2 p) {
    float angle = atan(p.y, p.x) + 0.35;
    float sector = 2.0 * PI / uBlades;
    float a = mod(angle, sector) - sector * 0.5;
    float polygon = cos(sector * 0.5) / cos(a);
    // Wide open the blades retract and the opening rounds off.
    float roundness = mix(0.25, 0.9, uOpen);
    float edge = mix(polygon, 1.0, roundness);
    return length(p) / edge;
  }

  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }

  void main() {
    vec2 p = vUv * 2.0 - 1.0;

    // Blur disc radius grows with the opening. The smallest stop is nearly a point.
    float radius = mix(0.016, 0.21, pow(uOpen, 1.25));
    // Energy per point rises with the area of the opening; it is then spread
    // over the disc, so discs get larger and softer, not simply brighter.
    float gain = mix(1.5, 0.2, pow(uOpen, 0.62));

    vec3 color = vec3(0.0);
    float coverage = 0.0;
    float wide = smoothstep(0.12, 0.6, uOpen);
    float edgeWidth = mix(0.6, 0.07, smoothstep(0.0, 0.45, uOpen));
    for (int i = 0; i < ${MAX_POINTS}; i++) {
      if (i >= uCount) break;
      vec4 point = uPoints[i];
      vec2 d = (p - point.xy) / radius;
      float rho = irisShape(d);
      if (rho > 2.2) continue;
      // The three colours focus at very slightly different sizes, which gives
      // each disc the faint coloured edge of real glass.
      vec3 rhoRgb = rho * vec3(0.975, 1.0, 1.03);
      vec3 disc = 1.0 - smoothstep(vec3(1.0 - edgeWidth), vec3(1.0), rhoRgb);
      // An out-of-focus highlight is not flat: a touch darker in the middle,
      // a brighter rim, and faint rings from the glass it came through.
      float profile = mix(1.0, 0.74 + 0.26 * rho * rho, wide);
      profile *= 1.0 + 0.5 * smoothstep(0.7, 0.96, rho) * wide;
      profile *= 1.0 + 0.04 * sin(rho * 34.0 + point.z * 20.0) * wide;
      // Ground glass scatters a little light beyond the edge of each disc.
      float halo = 0.07 * exp(-max(rho - 1.0, 0.0) * 4.5) * step(1.0, rho);
      // Each source point has its own slight colour temperature.
      float warmth = hash(point.xy * 91.7 + 3.1);
      vec3 tint = uTint * mix(vec3(1.0, 0.85, 0.66), vec3(0.72, 0.88, 1.0), warmth);
      float emphasis = 1.0;
      if (uHighlight >= 0.0) {
        float same = 1.0 - step(0.5, abs(point.w - uHighlight));
        emphasis = mix(0.2, 1.45, same);
        tint = mix(tint, uAccent, same * 0.5);
      }
      color += tint * ((disc * profile + halo) * point.z * gain * emphasis);
      coverage += disc.g;
    }

    // Marks that are two sources landing on one spot. Without the second probe
    // they are a single disc at every iris setting. With it, the two members
    // move apart along the probe's axis and take its two colours.
    for (int i = 0; i < ${MAX_TWINS}; i++) {
      if (i >= uTwinCount) break;
      vec4 twin = uTwins[i];
      vec2 axis = vec2(cos(twin.w), sin(twin.w));
      float reach = uSplit * (0.085 + radius * 0.9);
      for (int member = 0; member < 2; member++) {
        float sign = member == 0 ? -1.0 : 1.0;
        vec2 centre = twin.xy + axis * reach * sign;
        float rho = irisShape((p - centre) / radius);
        if (rho > 2.2) continue;
        vec3 disc = 1.0 - smoothstep(vec3(1.0 - edgeWidth), vec3(1.0), rho * vec3(0.975, 1.0, 1.03));
        float profile = mix(1.0, 0.74 + 0.26 * rho * rho, wide) * (1.0 + 0.5 * smoothstep(0.7, 0.96, rho) * wide);
        float halo = 0.07 * exp(-max(rho - 1.0, 0.0) * 4.5) * step(1.0, rho);
        vec3 plain = uTint * vec3(0.95, 0.95, 0.92);
        vec3 flagged = member == 0 ? uWarm : uAccent;
        vec3 tint = mix(plain, flagged * 1.25, uSplit);
        color += tint * ((disc * profile + halo) * twin.z * gain * 0.62);
        coverage += disc.g;
      }
      // A hairline joins the pair while they separate: one mark, two sources.
      if (uSplit > 0.02) {
        vec2 a = twin.xy - axis * reach;
        vec2 b = twin.xy + axis * reach;
        vec2 ab = b - a;
        float h = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
        float dist = length(p - a - ab * h);
        color += uTint * 0.5 * uSplit * (1.0 - smoothstep(0.0, 0.006, dist));
      }
    }

    // The image circle: the patch of screen the beam reaches at all.
    float circle = mix(0.6, 1.32, uOpen);
    float lit = 1.0 - smoothstep(circle * 0.72, circle, length(p));
    color += uTint * 0.012 * lit * mix(0.5, 1.6, uOpen);

    // Etched reticle of the ground glass: fine lines that catch a little light.
    // Etched reticle: three circles, cross wires and a degree scale at the rim.
    float rr = length(p);
    float circles = 1.0 - min(abs(fract(rr * 3.0 + 0.5) - 0.5) / fwidth(rr * 3.0), 1.0);
    circles *= step(rr, 0.99);
    float cross = (1.0 - min(abs(p.x) / fwidth(p.x), 1.0)) + (1.0 - min(abs(p.y) / fwidth(p.y), 1.0));
    float bearing = atan(p.y, p.x) * 57.29578;
    float ticks = (1.0 - min(abs(fract(bearing / 5.0 + 0.5) - 0.5) / fwidth(bearing / 5.0), 1.0)) * smoothstep(0.93, 0.94, rr) * step(rr, 0.985);
    float etch = max(max(circles * 0.5, min(cross, 1.0) * step(rr, 0.99)), ticks * 0.8);
    color += uTint * etch * (0.006 + 0.035 * lit + 0.05 * min(coverage, 1.0));

    // Probe marker for trace mode: a thin ring around the chosen readout point.
    if (uProbe.z > 0.0) {
      float ring = abs(length(p - uProbe.xy) - (radius + 0.035));
      float mark = 1.0 - smoothstep(0.0, 0.012, ring);
      color += uAccent * mark * 1.6 * uProbe.z;
    }

    // A plate view clears the marks and keeps a breath of the etched scale.
    color = mix(color, uTint * etch * 0.012, uBlank);

    // Grain of the frosted surface: the image sparkles very slightly.
    float grain = hash(floor(vUv * 900.0));
    color *= 0.86 + 0.28 * grain;

    gl_FragColor = vec4(color, 1.0);
  }
`;

/** Lay the groups out on the plate: a calm ring of clusters around a centre. */
function layoutGroups(groups: ReadoutGroup[]): { points: Float32Array; count: number; twins: Float32Array; twinCount: number; centres: Map<string, THREE.Vector2> } {
  const points = new Float32Array(MAX_POINTS * 4);
  const twins = new Float32Array(MAX_TWINS * 4);
  let twinCount = 0;
  const centres = new Map<string, THREE.Vector2>();
  let count = 0;
  const outer = groups.slice(1);
  groups.forEach((group, index) => {
    const random = seededRandom(1000 + index * 97);
    let centre: THREE.Vector2;
    if (index === 0) {
      centre = new THREE.Vector2(0, 0);
    } else {
      const k = index - 1;
      const angle = (k / outer.length) * Math.PI * 2 + Math.PI / 2 + 0.26;
      // Two interleaved rings give the clusters room without a rigid wheel.
      const ring = k % 2 === 0 ? 0.66 : 0.4;
      centre = new THREE.Vector2(Math.cos(angle) * ring * 1.08, Math.sin(angle) * ring);
    }
    centres.set(group.id, centre);
    const n = Math.max(2, Math.min(9, group.points));
    for (let j = 0; j < n && count < MAX_POINTS; j++) {
      // Points sit on a small loose spiral so each cluster has its own figure.
      const t = j / n;
      const a = t * Math.PI * 2 * 1.7 + random() * 0.9;
      const r = (index === 0 ? 0.05 : 0.035) + t * (index === 0 ? 0.11 : 0.1) + random() * 0.02;
      const energy = 0.3 + Math.pow(random(), 1.6) * 1.1;
      // The outermost point of a few groups is a pair of sources on one spot.
      if (j === n - 1 && TWIN_GROUPS.includes(index) && twinCount < MAX_TWINS) {
        twins[twinCount * 4] = centre.x + Math.cos(a) * r;
        twins[twinCount * 4 + 1] = centre.y + Math.sin(a) * r;
        twins[twinCount * 4 + 2] = Math.max(energy, 0.9) * 1.5;
        // Separate along the direction away from the group's centre, so pairs open into free space.
        twins[twinCount * 4 + 3] = a + 0.5;
        twinCount++;
        continue;
      }
      points[count * 4] = centre.x + Math.cos(a) * r;
      points[count * 4 + 1] = centre.y + Math.sin(a) * r;
      points[count * 4 + 2] = energy;
      points[count * 4 + 3] = index;
      count++;
    }
  });
  return { points, count, twins, twinCount, centres };
}

export class ReadoutImage {
  readonly target: THREE.WebGLRenderTarget;
  readonly plateMaterial: THREE.MeshStandardMaterial;
  layout: ReadoutLayout = { centres: new Map() };

  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private readonly material: THREE.ShaderMaterial;
  private readonly quad: THREE.Mesh;
  private groups: ReadoutGroup[] = [];
  private dirty = true;
  private readonly frost = frostMaps(31, 256);

  constructor(size: number) {
    this.target = new THREE.WebGLRenderTarget(size, size, {
      type: THREE.HalfFloatType,
      depthBuffer: false,
      generateMipmaps: true,
      minFilter: THREE.LinearMipmapLinearFilter,
      magFilter: THREE.LinearFilter,
    });
    this.target.texture.anisotropy = 8;
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uPoints: { value: new Float32Array(MAX_POINTS * 4) },
        uCount: { value: 0 },
        uOpen: { value: 0.5 },
        uBlades: { value: OPTICS.irisBlades },
        uHighlight: { value: -1 },
        uTime: { value: 0 },
        uTint: { value: new THREE.Vector3(...LIGHT.readout) },
        uAccent: { value: new THREE.Vector3(...LIGHT.coherent) },
        uProbe: { value: new THREE.Vector3(0, 0, 0) },
        uTwins: { value: new Float32Array(MAX_TWINS * 4) },
        uTwinCount: { value: 0 },
        uSplit: { value: 0 },
        uBlank: { value: 0 },
        uWarm: { value: new THREE.Vector3(1.0, 0.72, 0.38) },
      },
      vertexShader: /* glsl */ `varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
      fragmentShader,
      depthTest: false,
      depthWrite: false,
    });
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material);
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);

    this.frost.normal.repeat.set(6, 6);
    this.frost.roughness.repeat.set(6, 6);
    // Ground glass: matte, faintly luminous where the image falls.
    this.plateMaterial = new THREE.MeshStandardMaterial({
      color: 0x0d0e10,
      roughness: 0.95,
      roughnessMap: this.frost.roughness,
      normalMap: this.frost.normal,
      normalScale: new THREE.Vector2(0.35, 0.35),
      metalness: 0,
      emissive: 0xffffff,
      emissiveMap: this.target.texture,
      emissiveIntensity: 1.9,
      side: THREE.DoubleSide,
      envMapIntensity: 0.35,
      // Smoked glass: the sky beyond shows through, dimmed, behind the marks.
      transparent: true,
      opacity: 0.7,
    });
  }

  setGroups(groups: ReadoutGroup[]): void {
    this.groups = groups;
    const { points, count, twins, twinCount, centres } = layoutGroups(groups);
    this.material.uniforms.uPoints.value = points;
    this.material.uniforms.uCount.value = count;
    this.material.uniforms.uTwins.value = twins;
    this.material.uniforms.uTwinCount.value = twinCount;
    this.layout = { centres };
    this.dirty = true;
  }

  setOpen(fraction: number): void {
    if (this.material.uniforms.uOpen.value === fraction) return;
    this.material.uniforms.uOpen.value = fraction;
    this.dirty = true;
  }

  /** The second probe: 0 = out, 1 = in. Paired marks separate as it comes in. */
  /** Clear the marks from the plate (1) or show them (0). */
  setBlank(amount: number): void {
    if (this.material.uniforms.uBlank.value === amount) return;
    this.material.uniforms.uBlank.value = amount;
    this.dirty = true;
  }

  setSplit(amount: number): void {
    if (this.material.uniforms.uSplit.value === amount) return;
    this.material.uniforms.uSplit.value = amount;
    this.dirty = true;
  }

  /** Emphasise one group by id (or none). */
  setHighlight(id: string | null): void {
    const index = id ? this.groups.findIndex((group) => group.id === id) : -1;
    if (this.material.uniforms.uHighlight.value === index) return;
    this.material.uniforms.uHighlight.value = index;
    this.dirty = true;
  }

  setProbe(point: THREE.Vector2 | null, strength = 1): void {
    const probe = this.material.uniforms.uProbe.value as THREE.Vector3;
    if (point) probe.set(point.x, point.y, strength);
    else probe.set(0, 0, 0);
    this.dirty = true;
  }

  /** Redraw the image if anything changed. Returns true when it drew. */
  update(renderer: THREE.WebGLRenderer): boolean {
    if (!this.dirty) return false;
    this.dirty = false;
    const previous = renderer.getRenderTarget();
    renderer.setRenderTarget(this.target);
    renderer.render(this.scene, this.camera);
    renderer.setRenderTarget(previous);
    return true;
  }

  dispose(): void {
    this.target.dispose();
    this.material.dispose();
    this.plateMaterial.dispose();
    this.quad.geometry.dispose();
    this.frost.normal.dispose();
    this.frost.roughness.dispose();
  }
}
