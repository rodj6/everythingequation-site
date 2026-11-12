/**
 * Light in air. The beam itself, the dust it catches, and the pattern it shows
 * inside the field cell.
 *
 * A beam is only visible where something scatters it, so it is drawn faintly:
 * a soft volume that is brightest through its middle, plus individual motes
 * that flare as they drift through. Its width follows the iris: stop the iris
 * down and everything after it narrows to a pencil.
 */
import * as THREE from "three";
import { LEVEL, LIGHT, OPTICS, STATION_X } from "./config";
import { dustSpriteTexture, seededRandom } from "./textures";

/** Stations along the axis where the beam's radius is defined. */
const KNOTS = 6;
/** Number of standing discs drawn inside the field cell. */
const FIELD_DISCS = 11;

export interface BeamEnvelope {
  x: Float32Array;
  r: Float32Array;
}

/** Radius of the beam at each knot for a given iris opening radius. */
export function beamEnvelope(irisRadius: number, open: number): BeamEnvelope {
  const atIris = Math.min(0.34, irisRadius);
  const atScreen = THREE.MathUtils.lerp(0.42, 1.0, open);
  const x = new Float32Array([
    OPTICS.lampFrontX - 0.14,
    STATION_X.law,
    STATION_X.iris,
    STATION_X.cell - OPTICS.cellHalf.x,
    STATION_X.cell + OPTICS.cellHalf.x,
    STATION_X.screen,
  ]);
  const span = STATION_X.screen - STATION_X.iris;
  const along = (station: number) => (station - STATION_X.iris) / span;
  const r = new Float32Array([
    OPTICS.lampWindowRadius * 0.92,
    OPTICS.lensRadius * 0.86,
    atIris,
    THREE.MathUtils.lerp(atIris, atScreen, along(x[3])),
    THREE.MathUtils.lerp(atIris, atScreen, along(x[4])),
    atScreen,
  ]);
  return { x, r };
}

const ENVELOPE_GLSL = /* glsl */ `
  uniform float uKnotX[${KNOTS}];
  uniform float uKnotR[${KNOTS}];
  float beamRadius(float x) {
    float r = uKnotR[0];
    for (int i = 0; i < ${KNOTS - 1}; i++) {
      float t = clamp((x - uKnotX[i]) / (uKnotX[i + 1] - uKnotX[i]), 0.0, 1.0);
      if (x >= uKnotX[i]) r = mix(uKnotR[i], uKnotR[i + 1], t);
    }
    return r;
  }
`;

const NOISE_GLSL = /* glsl */ `
  float hash31(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.zyx + 31.32);
    return fract((p.x + p.y) * p.z);
  }
  float noise3(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash31(i), hash31(i + vec3(1, 0, 0)), f.x), mix(hash31(i + vec3(0, 1, 0)), hash31(i + vec3(1, 1, 0)), f.x), f.y),
      mix(mix(hash31(i + vec3(0, 0, 1)), hash31(i + vec3(1, 0, 1)), f.x), mix(hash31(i + vec3(0, 1, 1)), hash31(i + vec3(1, 1, 1)), f.x), f.y),
      f.z);
  }
`;

export class Beam {
  readonly group = new THREE.Group();
  private readonly volume: THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>;
  private readonly dust: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>;
  private readonly field: THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>;
  private readonly footprint: THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>;
  private readonly sprite = dustSpriteTexture();

  constructor(dustCount: number) {
    this.group.name = "beam";
    const knotX = { value: new Float32Array(KNOTS) };
    const knotR = { value: new Float32Array(KNOTS) };
    const shared = {
      uKnotX: knotX,
      uKnotR: knotR,
      uTime: { value: 0 },
      uOpen: { value: 0.5 },
      uLevel: { value: 1 },
      uIrisX: { value: STATION_X.iris },
      uAxisY: { value: LEVEL.axis },
      /** x position and strength of the travelling pulse shown in trace mode. */
      uPulse: { value: new THREE.Vector2(0, 0) },
    };

    // --- The beam volume: a tube whose radius is solved in the vertex shader.
    const axial = 96;
    const around = 48;
    const positions = new Float32Array((axial + 1) * (around + 1) * 3);
    const indices: number[] = [];
    const x0 = OPTICS.lampFrontX - 0.14;
    const x1 = STATION_X.screen;
    let v = 0;
    for (let i = 0; i <= axial; i++) {
      const x = THREE.MathUtils.lerp(x0, x1, i / axial);
      for (let j = 0; j <= around; j++) {
        positions[v++] = x;
        positions[v++] = (j / around) * Math.PI * 2; // angle, turned into y/z in the shader
        positions[v++] = 0;
      }
    }
    for (let i = 0; i < axial; i++) {
      for (let j = 0; j < around; j++) {
        const a = i * (around + 1) + j;
        const b = a + around + 1;
        indices.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
    const volumeGeometry = new THREE.BufferGeometry();
    volumeGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    volumeGeometry.setIndex(indices);
    volumeGeometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, LEVEL.axis, 0), 9);
    this.volume = new THREE.Mesh(
      volumeGeometry,
      new THREE.ShaderMaterial({
        uniforms: {
          ...shared,
          uWarm: { value: new THREE.Vector3(...LIGHT.source) },
          uNeutral: { value: new THREE.Vector3(...LIGHT.beam) },
          uLawX: { value: STATION_X.law },
          uCellX: { value: new THREE.Vector2(STATION_X.cell - OPTICS.cellHalf.x, STATION_X.cell + OPTICS.cellHalf.x) },
        },
        vertexShader: /* glsl */ `
          ${ENVELOPE_GLSL}
          uniform float uAxisY;
          uniform float uIrisX;
          varying vec3 vWorld;
          varying vec3 vNormal;
          varying float vAxial;
          varying float vRadius;
          varying float vRadiusAtIris;
          void main() {
            float x = position.x;
            float angle = position.y;
            float r = beamRadius(x);
            vRadius = r;
            vRadiusAtIris = beamRadius(uIrisX);
            vec3 radial = vec3(0.0, cos(angle), sin(angle));
            vec3 world = vec3(x, uAxisY, 0.0) + radial * r;
            vWorld = world;
            vNormal = radial;
            vAxial = x;
            gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          precision highp float;
          ${NOISE_GLSL}
          uniform float uTime;
          uniform float uOpen;
          uniform float uLevel;
          uniform float uIrisX;
          uniform float uLawX;
          uniform vec2 uCellX;
          uniform vec3 uWarm;
          uniform vec3 uNeutral;
          uniform vec2 uPulse;
          varying vec3 vWorld;
          varying vec3 vNormal;
          varying float vAxial;
          varying float vRadius;
          varying float vRadiusAtIris;
          void main() {
            vec3 view = normalize(cameraPosition - vWorld);
            // How much lit air the eye looks through: the chord across a round
            // beam is longest through its middle, and longer still when looking
            // along the beam instead of across it.
            float across = max(length(view - vec3(view.x, 0.0, 0.0)), 0.22);
            float chord = pow(abs(dot(normalize(vNormal), view)), 1.2) / across;
            // Slow drifting unevenness, like haze in a quiet room.
            float haze = noise3(vWorld * vec3(1.1, 2.6, 2.6) + vec3(-uTime * 0.035, uTime * 0.012, 0.0));
            haze = 0.7 + 0.55 * haze;
            // Warm at the lamp, neutral after the law optics.
            vec3 color = mix(uWarm, uNeutral, smoothstep(uLawX - 0.9, uLawX + 0.2, vAxial));
            // The iris passes only part of the light on.
            float passed = clamp(vRadiusAtIris * vRadiusAtIris / (0.34 * 0.34), 0.03, 1.0);
            float power = mix(1.0, passed, smoothstep(uIrisX - 0.02, uIrisX + 0.04, vAxial));
            // The same light in a narrower beam is denser, so thin sections glow more.
            float density = power * 0.4 / max(vRadius, 0.13);
            // Glass scatters a little more than air.
            float inGlass = step(uCellX.x, vAxial) * step(vAxial, uCellX.y);
            density *= 1.0 + inGlass * 0.6;
            // Haze scatters mostly forward: brighter looking toward the lamp.
            float mu = view.x;
            float phase = 0.8 + 0.7 * mu * mu * step(0.0, mu);
            // Trace mode: a soft pulse travels along the beam.
            float pulse = uPulse.y * exp(-pow((vAxial - uPulse.x) / 0.34, 2.0));
            vec3 lit = color * chord * haze * density * phase * 0.075;
            lit += vec3(0.55, 0.9, 1.0) * chord * pulse * 0.16 / max(vRadius * 2.4, 0.3);
            gl_FragColor = vec4(lit * uLevel, 1.0);
          }
        `,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
        side: THREE.FrontSide,
      }),
    );
    this.volume.frustumCulled = false;
    this.volume.renderOrder = 5;
    this.group.add(this.volume);

    // --- Dust motes: only bright while they are inside the beam.
    const random = seededRandom(77);
    const dustPositions = new Float32Array(dustCount * 3);
    const dustSeeds = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = THREE.MathUtils.lerp(x0 - 0.2, x1 + 0.1, random());
      // Concentrate motes near the axis, where they will be seen.
      const radius = Math.pow(random(), 0.7) * 1.25;
      const angle = random() * Math.PI * 2;
      dustPositions[i * 3 + 1] = LEVEL.axis + Math.cos(angle) * radius;
      dustPositions[i * 3 + 2] = Math.sin(angle) * radius;
      dustSeeds[i * 3] = random();
      dustSeeds[i * 3 + 1] = random();
      dustSeeds[i * 3 + 2] = random();
    }
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
    dustGeometry.setAttribute("aSeed", new THREE.BufferAttribute(dustSeeds, 3));
    dustGeometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, LEVEL.axis, 0), 9);
    this.dust = new THREE.Points(
      dustGeometry,
      new THREE.ShaderMaterial({
        uniforms: {
          ...shared,
          uSprite: { value: this.sprite },
          uColor: { value: new THREE.Vector3(...LIGHT.beam) },
          uScale: { value: 600 },
        },
        vertexShader: /* glsl */ `
          ${ENVELOPE_GLSL}
          uniform float uTime;
          uniform float uAxisY;
          uniform float uOpen;
          uniform float uIrisX;
          uniform float uScale;
          attribute vec3 aSeed;
          varying float vGlow;
          void main() {
            vec3 p = position;
            // Slow convection: each mote wanders on its own small loop.
            float t = uTime * (0.05 + aSeed.x * 0.06);
            p.x += sin(t * 1.3 + aSeed.y * 40.0) * 0.12 - uTime * 0.004 * (aSeed.z - 0.3);
            p.y += sin(t + aSeed.z * 30.0) * 0.1 + cos(t * 0.6 + aSeed.x * 12.0) * 0.05;
            p.z += cos(t * 0.9 + aSeed.x * 50.0) * 0.1;
            float off = length(p.yz - vec2(uAxisY, 0.0));
            float r = beamRadius(p.x);
            float inside = 1.0 - smoothstep(r * 0.82, r * 1.04, off);
            float passed = mix(1.0, mix(0.25, 1.0, uOpen), step(uIrisX, p.x));
            // Motes glint: brightness flickers as they tumble.
            float glint = 0.55 + 0.45 * sin(uTime * (0.7 + aSeed.y * 1.6) + aSeed.x * 90.0);
            vGlow = inside * passed * glint * (0.15 + aSeed.z * aSeed.z * 1.1);
            vec4 mv = viewMatrix * vec4(p, 1.0);
            gl_Position = projectionMatrix * mv;
            gl_PointSize = max((0.009 + aSeed.y * aSeed.y * 0.024) * uScale / max(-mv.z, 0.1), 1.5);
          }
        `,
        fragmentShader: /* glsl */ `
          precision highp float;
          uniform sampler2D uSprite;
          uniform vec3 uColor;
          uniform float uLevel;
          varying float vGlow;
          void main() {
            if (vGlow < 0.004) discard;
            float a = texture2D(uSprite, gl_PointCoord).a;
            gl_FragColor = vec4(uColor * a * a * vGlow * 2.4 * uLevel, 1.0);
          }
        `,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
      }),
    );
    this.dust.frustumCulled = false;
    this.dust.renderOrder = 6;
    this.group.add(this.dust);

    // --- Where the beam lands on the iris blades: a lit ring around the opening.
    const footprintGeometry = new THREE.PlaneGeometry(1.1, 1.1);
    footprintGeometry.rotateY(-Math.PI / 2); // faces the source
    this.footprint = new THREE.Mesh(
      footprintGeometry,
      new THREE.ShaderMaterial({
        uniforms: {
          uColor: { value: new THREE.Vector3(...LIGHT.beam) },
          uOpenRadius: { value: 0.2 },
          uBeamRadius: { value: 0.34 },
          uLevel: shared.uLevel,
        },
        vertexShader: /* glsl */ `
          varying vec2 vPlane;
          void main() {
            vPlane = position.zy;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          precision highp float;
          uniform vec3 uColor;
          uniform float uOpenRadius;
          uniform float uBeamRadius;
          uniform float uLevel;
          varying vec2 vPlane;
          void main() {
            float d = length(vPlane);
            // Lit only on the blades: outside the opening, inside the beam.
            float onBlade = smoothstep(uOpenRadius * 0.98, uOpenRadius * 1.06 + 0.004, d);
            float inBeam = 1.0 - smoothstep(uBeamRadius * 0.86, uBeamRadius * 1.08, d);
            float falloff = mix(1.0, 0.55, d / max(uBeamRadius, 0.001));
            gl_FragColor = vec4(uColor * onBlade * inBeam * falloff * falloff * 0.2 * uLevel, 1.0);
          }
        `,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -4,
        polygonOffsetUnits: -4,
      }),
    );
    this.footprint.position.set(STATION_X.iris - 0.036, LEVEL.axis, 0);
    this.footprint.renderOrder = 3;
    this.group.add(this.footprint);

    // --- Inside the field cell: one carrier, two responses.
    // A row of thin luminous discs across the beam, like the nodes of a standing
    // wave. Their even spacing is the coherent response; their fading along the
    // path is the dissipative response. Both come from the same row.
    const half = OPTICS.cellHalf;
    const plane = new THREE.PlaneGeometry(1, 1);
    plane.rotateY(Math.PI / 2); // lies across the axis
    const discs = new THREE.InstancedBufferGeometry();
    discs.index = plane.index;
    discs.setAttribute("position", plane.attributes.position);
    const ids = new Float32Array(FIELD_DISCS);
    for (let i = 0; i < FIELD_DISCS; i++) ids[i] = i;
    discs.setAttribute("aIndex", new THREE.InstancedBufferAttribute(ids, 1));
    discs.instanceCount = FIELD_DISCS;
    discs.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 2);
    this.field = new THREE.Mesh(
      discs,
      new THREE.ShaderMaterial({
        uniforms: {
          ...shared,
          uCoherent: { value: new THREE.Vector3(...LIGHT.coherent) },
          uNeutral: { value: new THREE.Vector3(...LIGHT.beam) },
          uCentre: { value: new THREE.Vector3(STATION_X.cell, LEVEL.axis, 0) },
          uHalfX: { value: half.x },
          uHighlight: { value: 0 },
          uDiscs: { value: FIELD_DISCS },
          uMaxRadius: { value: Math.min(half.y, half.z) - 0.05 },
        },
        vertexShader: /* glsl */ `
          ${ENVELOPE_GLSL}
          uniform float uTime;
          uniform float uHalfX;
          uniform float uDiscs;
          uniform float uMaxRadius;
          uniform vec3 uCentre;
          attribute float aIndex;
          varying vec2 vDisc;
          varying float vAlong;
          void main() {
            // Phase advances slowly: the row drifts along the path and re-enters.
            float along = fract(aIndex / uDiscs + uTime * 0.01);
            float x = (along - 0.5) * 2.0 * uHalfX * 0.95;
            // The pattern lives inside the glass: never wider than the block.
            float r = min(beamRadius(uCentre.x + x), uMaxRadius);
            vDisc = position.zy * 2.0;
            vAlong = along;
            vec3 world = uCentre + vec3(x, position.y * 2.0 * r, position.z * 2.0 * r);
            gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          precision highp float;
          uniform float uOpen;
          uniform float uLevel;
          uniform float uHighlight;
          uniform vec3 uCoherent;
          uniform vec3 uNeutral;
          varying vec2 vDisc;
          varying float vAlong;
          void main() {
            float d = length(vDisc);
            if (d > 1.0) discard;
            // Each node is a fine bright ring with a very faint film across it.
            float ring = smoothstep(0.88, 0.955, d) * (1.0 - smoothstep(0.965, 1.0, d));
            float film = (1.0 - smoothstep(0.9, 1.0, d)) * 0.05;
            // Dissipative response: the same carrier, decaying along the path.
            float envelope = exp(-2.4 * vAlong);
            float ends = smoothstep(0.0, 0.06, vAlong) * (1.0 - smoothstep(0.94, 1.0, vAlong));
            vec3 color = mix(uNeutral, uCoherent, 0.82) * (ring * 1.15 + film);
            float passed = mix(0.45, 1.0, uOpen);
            gl_FragColor = vec4(color * envelope * ends * passed * (1.0 + uHighlight * 0.9) * uLevel, 1.0);
          }
        `,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    this.field.frustumCulled = false;
    this.field.renderOrder = 4;
    this.group.add(this.field);
  }

  /** Follow the iris: `irisRadius` in scene units, `open` as 0..1. */
  setAperture(irisRadius: number, open: number): void {
    const envelope = beamEnvelope(irisRadius, open);
    for (const mesh of [this.volume, this.dust, this.field]) {
      (mesh.material.uniforms.uKnotX.value as Float32Array).set(envelope.x);
      (mesh.material.uniforms.uKnotR.value as Float32Array).set(envelope.r);
      mesh.material.uniforms.uOpen.value = open;
    }
    this.footprint.material.uniforms.uOpenRadius.value = irisRadius;
  }

  /** Position (x along the bench) and strength of the trace pulse; strength 0 hides it. */
  setPulse(x: number, strength: number): void {
    (this.volume.material.uniforms.uPulse.value as THREE.Vector2).set(x, strength);
  }

  /** Overall brightness of all light in air (used to fade in at start). */
  setLevel(level: number): void {
    this.volume.material.uniforms.uLevel.value = level;
  }

  setFieldHighlight(amount: number): void {
    this.field.material.uniforms.uHighlight.value = amount;
  }

  setPointScale(pixelsPerUnitAtOneUnit: number): void {
    this.dust.material.uniforms.uScale.value = pixelsPerUnitAtOneUnit;
  }

  update(time: number): void {
    this.volume.material.uniforms.uTime.value = time;
    this.dust.material.uniforms.uTime.value = time;
    this.field.material.uniforms.uTime.value = time;
  }

  dispose(): void {
    this.sprite.dispose();
    for (const mesh of [this.volume, this.dust, this.field, this.footprint]) {
      mesh.geometry.dispose();
      mesh.material.dispose();
    }
  }
}
