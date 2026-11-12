/**
 * The table's gloss. The table surface itself is matte black; this adds the
 * soft mirror image of the instrument that a polished dark top would show.
 *
 * It is a planar reflection (the scene drawn once more from below the table),
 * softened and weighted the way a lacquered surface reflects: weak when you
 * look straight down, stronger at a shallow angle.
 */
import * as THREE from "three";
import { Reflector } from "three/examples/jsm/objects/Reflector.js";

/** Tuning of the table gloss. */
export const GLOSS = {
  /** Overall weight of the reflection. */
  strength: 1.0,
  /** Softening of the mirror image, as a fraction of the view. */
  blur: 0.0055,
  /** Reflectance looking straight down (dielectric lacquer). */
  normalReflectance: 0.07,
  /** Reflections fade beyond this distance (scene units) from the bench centre. */
  fadeStart: 30,
  fadeEnd: 40,
} as const;

const GlossShader = {
  name: "TableGlossShader",
  uniforms: {
    color: { value: null },
    tDiffuse: { value: null },
    textureMatrix: { value: null },
    uStrength: { value: GLOSS.strength },
    uBlur: { value: GLOSS.blur },
    uF0: { value: GLOSS.normalReflectance },
    uFade: { value: new THREE.Vector2(GLOSS.fadeStart, GLOSS.fadeEnd) },
  },
  vertexShader: /* glsl */ `
    uniform mat4 textureMatrix;
    varying vec4 vUv;
    varying vec3 vWorld;
    void main() {
      vUv = textureMatrix * vec4(position, 1.0);
      vec4 world = modelMatrix * vec4(position, 1.0);
      vWorld = world.xyz;
      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `,
  fragmentShader: /* glsl */ `
    precision highp float;
    uniform sampler2D tDiffuse;
    uniform float uStrength;
    uniform float uBlur;
    uniform float uF0;
    uniform vec2 uFade;
    varying vec4 vUv;
    varying vec3 vWorld;

    float hash(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
    }

    void main() {
      vec2 uv = vUv.xy / vUv.w;
      // A lacquered top is never perfectly flat: let the image waver very slightly.
      vec2 ripple = vec2(noise(vWorld.xz * 2.3), noise(vWorld.zx * 2.3 + 7.1)) - 0.5;
      uv += ripple * 0.0028;

      // Soften: a small disc of taps. Larger blur further from the viewer's foot
      // would need depth; a constant, modest blur reads as satin lacquer.
      vec3 sum = vec3(0.0);
      float total = 0.0;
      const int TAPS = 16;
      float spin = hash(gl_FragCoord.xy) * 6.2831853;
      for (int i = 0; i < TAPS; i++) {
        float fi = float(i);
        float radius = sqrt((fi + 0.5) / float(TAPS));
        float angle = fi * 2.39996323 + spin;
        vec2 offset = vec2(cos(angle), sin(angle)) * radius * uBlur;
        // Stretch the blur vertically, as reflections on a surface smear toward the viewer.
        offset.y *= 2.4;
        sum += texture2D(tDiffuse, uv + offset).rgb;
        total += 1.0;
      }
      vec3 reflection = sum / total;

      vec3 view = normalize(cameraPosition - vWorld);
      float cosTheta = clamp(view.y, 0.0, 1.0);
      float fresnel = uF0 + (1.0 - uF0) * pow(1.0 - cosTheta, 5.0);
      float fade = 1.0 - smoothstep(uFade.x, uFade.y, length(vWorld.xz));
      gl_FragColor = vec4(reflection * fresnel * uStrength * fade, 1.0);
    }
  `,
};

export interface TableGloss {
  mesh: THREE.Mesh;
  setSize: (width: number, height: number) => void;
  dispose: () => void;
}

export function createTableGloss(length = 36, depth = 36, centreX = 0): TableGloss {
  const geometry = new THREE.PlaneGeometry(length, depth);
  const reflector = new Reflector(geometry, {
    textureWidth: 512,
    textureHeight: 512,
    clipBias: 0.002,
    shader: GlossShader,
    multisample: 0,
  });
  reflector.rotation.x = -Math.PI / 2;
  reflector.position.set(centreX, 0.0015, 0);
  const material = reflector.material as THREE.ShaderMaterial;
  material.transparent = true;
  material.blending = THREE.AdditiveBlending;
  material.depthWrite = false;
  reflector.renderOrder = 1;
  reflector.name = "table-gloss";
  return {
    mesh: reflector,
    setSize: (width, height) => reflector.getRenderTarget().setSize(Math.max(2, Math.round(width)), Math.max(2, Math.round(height))),
    dispose: () => {
      reflector.dispose();
      geometry.dispose();
    },
  };
}
