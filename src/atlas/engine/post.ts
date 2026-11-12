/**
 * Finishing: bloom on the true highlights, a filmic tone curve, a slight
 * vignette and fine grain. The grain also dithers the very dark gradients of
 * the scene so they do not band.
 */
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import type { QualitySettings } from "./config";

/** Look of the final image. */
export const GRADE = {
  exposure: 1.0,
  bloomStrength: 0.17,
  bloomRadius: 0.45,
  /** Only light brighter than this (scene-linear) blooms: lamp, beam core, hot glints. */
  bloomThreshold: 1.75,
  vignette: 0.34,
  grain: 0.022,
} as const;

const FinishShader = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    uExposure: { value: GRADE.exposure },
    uVignette: { value: GRADE.vignette },
    uGrain: { value: GRADE.grain },
    uTime: { value: 0 },
    uAspect: { value: 1 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    precision highp float;
    uniform sampler2D tDiffuse;
    uniform float uExposure;
    uniform float uVignette;
    uniform float uGrain;
    uniform float uTime;
    uniform float uAspect;
    varying vec2 vUv;

    // ACES filmic curve (Stephen Hill's fit), as used by three.js.
    vec3 RRTAndODTFit(vec3 v) {
      vec3 a = v * (v + 0.0245786) - 0.000090537;
      vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
      return a / b;
    }
    vec3 acesFilmic(vec3 color) {
      const mat3 inputMat = mat3(
        vec3(0.59719, 0.07600, 0.02840),
        vec3(0.35458, 0.90834, 0.13383),
        vec3(0.04823, 0.01566, 0.83777));
      const mat3 outputMat = mat3(
        vec3(1.60475, -0.10208, -0.00327),
        vec3(-0.53108, 1.10813, -0.07276),
        vec3(-0.07367, -0.00605, 1.07602));
      color *= uExposure / 0.6;
      color = inputMat * color;
      color = RRTAndODTFit(color);
      color = outputMat * color;
      return clamp(color, 0.0, 1.0);
    }
    vec3 toSRGB(vec3 c) {
      return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
    }
    float hash(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    void main() {
      vec3 color = texture2D(tDiffuse, vUv).rgb;

      // Vignette in scene-linear light, before the tone curve.
      vec2 centred = (vUv - 0.5) * vec2(min(uAspect, 1.6), 1.0);
      float falloff = smoothstep(0.25, 1.05, length(centred));
      color *= 1.0 - uVignette * falloff;

      color = toSRGB(acesFilmic(color));

      // Fine grain, slightly stronger in the shadows. Also dithers gradients.
      float n = hash(gl_FragCoord.xy + fract(uTime) * 517.0) - 0.5;
      float luma = dot(color, vec3(0.299, 0.587, 0.114));
      color += n * uGrain * mix(1.0, 0.45, luma);

      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

export interface PostChain {
  composer: EffectComposer;
  setSize: (width: number, height: number, pixelRatio: number) => void;
  render: (time: number) => void;
  dispose: () => void;
}

export function createPostChain(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
  quality: QualitySettings,
): PostChain {
  const target = new THREE.WebGLRenderTarget(4, 4, {
    type: THREE.HalfFloatType,
    samples: quality.msaaSamples,
    depthBuffer: true,
  });
  const composer = new EffectComposer(renderer, target);
  composer.addPass(new RenderPass(scene, camera));

  let bloom: UnrealBloomPass | null = null;
  if (quality.bloom) {
    bloom = new UnrealBloomPass(new THREE.Vector2(4, 4), GRADE.bloomStrength, GRADE.bloomRadius, GRADE.bloomThreshold);
    composer.addPass(bloom);
  }

  const finish = new ShaderPass(FinishShader);
  composer.addPass(finish);

  return {
    composer,
    setSize: (width, height, pixelRatio) => {
      composer.setPixelRatio(pixelRatio);
      composer.setSize(width, height);
      finish.uniforms.uAspect.value = width / Math.max(height, 1);
    },
    render: (time) => {
      finish.uniforms.uTime.value = time;
      composer.render();
    },
    dispose: () => {
      composer.dispose();
      target.dispose();
    },
  };
}
