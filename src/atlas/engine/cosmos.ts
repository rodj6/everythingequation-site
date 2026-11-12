/**
 * The setting: the readout end of the bench opens onto a galaxy.
 *
 * In the theory, space, time, matter and observers belong to the readout. The
 * picture says the same thing with light: the source end of the bench stands in
 * darkness with almost no stars, and the sky fills toward the readout, where a
 * spiral galaxy lies beyond the plate.
 *
 * Two layers, both procedural (no image files):
 *
 *   - a sky sphere whose shader draws the galaxy's diffuse light, spiral arms,
 *     dust lanes and star-forming knots for every pixel, so it stays sharp at
 *     any resolution;
 *   - a few thousand individual stars as points, with a realistic spread of
 *     brightness and colour, denser in the galaxy's disc.
 *
 * The same sky is added to the studio environment, so brass and glass reflect
 * it and the galaxy lights the instrument from behind.
 */
import * as THREE from "three";
import { seededRandom } from "./textures";

/** Where the galaxy sits and how it is turned. Directions are in world space. */
export const GALAXY = {
  /** Direction from the bench to the galaxy's centre: beyond the readout, up and to the back. */
  centre: new THREE.Vector3(0.8325, -0.052, -0.551).normalize(),
  /** The disc is tipped toward the viewer so its spiral reads as an ellipse. */
  tilt: 0.98,
  /** Rotation of the disc about the line of sight (radians). */
  roll: -0.42,
  /** Angular size: radius of the disc as a tangent of the half-angle. */
  radius: 0.27,
} as const;

const SKY_VERTEX = /* glsl */ `
  varying vec3 vDirection;
  void main() {
    vDirection = normalize((modelMatrix * vec4(position, 0.0)).xyz);
    vec4 clip = projectionMatrix * viewMatrix * vec4((modelMatrix * vec4(position, 0.0)).xyz, 0.0);
    // Keep the sky just inside the far plane whatever the camera does.
    gl_Position = vec4(clip.xy, clip.w * 0.9999, clip.w);
  }
`;

const SKY_FRAGMENT = /* glsl */ `
  precision highp float;
  varying vec3 vDirection;
  uniform vec3 uCentre;
  uniform vec3 uAxisU;
  uniform vec3 uAxisV;
  uniform vec3 uNormal;
  uniform float uRadius;
  uniform float uExposure;
  uniform float uDetail;      // 1 = full detail, 0 = fewer noise octaves (light tier)

  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float sum = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 6; i++) {
      if (float(i) > 2.5 + 3.0 * uDetail) break;
      sum += amp * noise(p);
      p = p * 2.03 + vec2(17.1, 9.2);
      amp *= 0.5;
    }
    return sum;
  }

  void main() {
    vec3 d = normalize(vDirection);
    vec3 color = vec3(0.0);

    // Where this line of sight crosses the plane of the disc.
    float facing = dot(d, uNormal);
    float along = dot(uCentre, uNormal) / facing;
    vec2 uv = vec2(1000.0);
    if (along > 0.0) {
      vec3 p = d * along - uCentre;
      uv = vec2(dot(p, uAxisU), dot(p, uAxisV)) / uRadius;
    }
    float r = length(uv);
    float inside = 1.0 - smoothstep(0.92, 1.35, r);

    if (inside > 0.0) {
      float theta = atan(uv.y, uv.x);
      // Slow, large distortion so the arms are not perfect curves.
      float warp = (fbm(uv * 2.6 + 4.0) - 0.5) * 1.0;
      float fine = fbm(uv * 11.0 + 21.0);
      float grain = fbm(uv * 34.0 + 3.0);

      // Two logarithmic spiral arms starting from the ends of a short bar.
      float winding = 3.25 * log(r + 0.035);
      float phase = 2.0 * (theta - winding) + warp;
      float arm = pow(0.5 + 0.5 * cos(phase), 3.4);
      // A fainter second pair fills the gaps, as in most real spirals.
      float spur = pow(0.5 + 0.5 * cos(phase * 2.0 + 1.3 + warp), 3.0) * 0.32;
      float armMask = smoothstep(0.1, 0.3, r);

      float disc = exp(-r * 3.4);
      // Filaments: ridged noise stretched along the arms breaks them into streamers.
      vec2 swirl = vec2(r * 9.0, (theta - winding) * 2.2);
      float ridged = 1.0 - abs(2.0 * fbm(swirl * vec2(1.0, 2.6) + 13.0) - 1.0);
      float streamers = pow(ridged, 2.2);
      float old = disc * (0.1 + 0.08 * fine);
      float young = disc * (arm + spur) * armMask * (0.18 + 2.3 * fine * fine) * (0.35 + 1.1 * streamers);

      // Dust lanes run along the inner edge of each arm and across the bulge.
      float lane = pow(0.5 + 0.5 * cos(phase + 1.05), 5.0) * armMask;
      float dust = lane * smoothstep(0.34, 0.74, fbm(uv * 7.5 + 40.0) + 0.3 * grain);
      // Finer dust threads between the streamers, everywhere in the disc.
      dust += 0.55 * smoothstep(0.55, 0.9, 1.0 - streamers) * smoothstep(0.42, 0.62, fbm(uv * 15.0 + 5.0)) * armMask;
      dust *= 1.0 - smoothstep(0.75, 1.05, r);
      float transmit = 1.0 - 0.93 * clamp(dust * 1.3, 0.0, 1.0);

      // Bulge and bar: old, warm stars.
      vec2 barUv = vec2(uv.x * 0.92 + uv.y * 0.39, -uv.x * 0.39 + uv.y * 0.92);
      float bulge = 1.1 * exp(-r * r / 0.0075) + 0.4 * exp(-(barUv.x * barUv.x / 0.03 + barUv.y * barUv.y / 0.0058));

      // Star-forming knots strung along the arms: pink hydrogen light and blue clusters.
      float knots = smoothstep(0.7, 0.86, fbm(uv * 46.0 + 70.0)) * arm * armMask * disc * 5.0;
      float clusters = smoothstep(0.68, 0.88, fbm(uv * 58.0 + 11.0)) * (arm + spur) * armMask * disc * 5.0;

      vec3 warmLight = vec3(1.0, 0.74, 0.46);
      vec3 oldLight = vec3(1.0, 0.8, 0.6);
      vec3 youngLight = vec3(0.4, 0.6, 1.0);
      vec3 galaxy = oldLight * old * 0.9 + youngLight * young * 1.15;
      galaxy += vec3(1.0, 0.3, 0.42) * knots * 0.75 + vec3(0.55, 0.78, 1.0) * clusters * 0.7;
      // Dust reddens what it does not hide.
      galaxy *= mix(vec3(1.0), vec3(1.0, 0.72, 0.5), clamp(dust * 1.4, 0.0, 1.0)) * transmit;
      galaxy += warmLight * bulge * (1.0 - 0.45 * clamp(dust, 0.0, 1.0));
      // Individual stars are too many to draw as points: a fine sparkle stands in for them.
      galaxy *= 0.82 + 0.36 * grain;
      color += galaxy * inside * smoothstep(0.02, 0.2, abs(facing));
    }

    // The bulge is a ball, not a flat patch: add its light by angle from the centre.
    float away = acos(clamp(dot(d, uCentre), -1.0, 1.0));
    color += vec3(1.0, 0.84, 0.62) * (0.55 * exp(-away * away / 0.00035) + 0.05 * exp(-away * away / 0.006));
    // Faint outer halo.
    color += vec3(0.5, 0.6, 0.85) * 0.006 * exp(-away * away / 0.08);

    // A small companion, the way most large spirals have one.
    vec3 companion = normalize(uCentre + uAxisU * 0.2 - uAxisV * 0.2);
    float toCompanion = acos(clamp(dot(d, companion), -1.0, 1.0));
    color += vec3(1.0, 0.9, 0.78) * 0.3 * exp(-toCompanion * toCompanion / 0.00004);

    gl_FragColor = vec4(color * uExposure, 1.0);
  }
`;

const STAR_VERTEX = /* glsl */ `
  attribute float aSize;
  attribute vec3 aColor;
  uniform float uPixelScale;
  uniform float uTime;
  varying vec3 vColor;
  varying float vSize;
  void main() {
    vColor = aColor;
    // The brighter stars scintillate, slowly and each at its own pace. uTime stays 0 when motion is reduced.
    float phase = fract(sin(dot(position.xy, vec2(12.9898, 78.233))) * 43758.5453) * 6.2832;
    float lively = smoothstep(1.6, 3.2, aSize);
    vColor *= 1.0 + 0.22 * lively * sin(uTime * (0.6 + phase * 0.22) + phase) * step(0.0001, uTime);
    vec4 clip = projectionMatrix * viewMatrix * vec4(position, 0.0);
    gl_Position = vec4(clip.xy, clip.w * 0.9999, clip.w);
    // Never smaller than about a pixel and a half, or faint stars flicker as the view turns.
    vSize = max(aSize * uPixelScale, 1.6);
    gl_PointSize = vSize;
    // What a too-small star loses in size it keeps in brightness.
    vColor *= min(1.0, (aSize * uPixelScale) / 1.6);
  }
`;

const STAR_FRAGMENT = /* glsl */ `
  precision highp float;
  varying vec3 vColor;
  varying float vSize;
  void main() {
    vec2 p = gl_PointCoord * 2.0 - 1.0;
    float r2 = dot(p, p);
    if (r2 > 1.0) discard;
    // A tight core with a faint skirt, like a star through a good lens.
    float core = exp(-r2 * 7.0);
    float skirt = exp(-r2 * 2.2) * 0.22;
    gl_FragColor = vec4(vColor * (core + skirt), 1.0);
  }
`;

export interface Cosmos {
  /** Add to the scene. Draws before everything else and never hides anything. */
  group: THREE.Group;
  /** A dimmer copy of the sky for the reflection environment. */
  environmentSky: () => THREE.Mesh;
  /** World-space direction of the galaxy's centre (for the back light). */
  centre: THREE.Vector3;
  setPixelScale: (scale: number) => void;
  /** Seconds, for the slow scintillation of the stars; pass 0 to hold them still. */
  setTime: (time: number) => void;
  dispose: () => void;
}

/** Colour of a star from a 0..1 "temperature" draw: most are warm-white, a few blue or orange. */
function starColor(t: number): [number, number, number] {
  if (t < 0.12) return [0.62, 0.74, 1.0];
  if (t < 0.4) return [0.86, 0.92, 1.0];
  if (t < 0.72) return [1.0, 0.97, 0.9];
  if (t < 0.92) return [1.0, 0.86, 0.66];
  return [1.0, 0.68, 0.46];
}

export function createCosmos(options: { stars: number; detail: number }): Cosmos {
  const centre = GALAXY.centre.clone();
  // Build the disc's own axes: start facing the viewer, then tip and roll it.
  const up = new THREE.Vector3(0, 1, 0);
  const right = new THREE.Vector3().crossVectors(up, centre).normalize();
  const top = new THREE.Vector3().crossVectors(centre, right).normalize();
  const axisU = right.clone().applyAxisAngle(centre, GALAXY.roll);
  const axisVFlat = top.clone().applyAxisAngle(centre, GALAXY.roll);
  // Tip the disc about its U axis.
  const axisV = axisVFlat.clone().applyAxisAngle(axisU, GALAXY.tilt);
  const normal = new THREE.Vector3().crossVectors(axisU, axisV).normalize();

  const uniforms = () => ({
    uCentre: { value: centre },
    uAxisU: { value: axisU },
    uAxisV: { value: axisV },
    uNormal: { value: normal },
    uRadius: { value: GALAXY.radius },
    uExposure: { value: 1.0 },
    uDetail: { value: options.detail },
  });

  const skyGeometry = new THREE.SphereGeometry(1, 48, 24);
  const skyMaterial = new THREE.ShaderMaterial({
    uniforms: uniforms(),
    vertexShader: SKY_VERTEX,
    fragmentShader: SKY_FRAGMENT,
    side: THREE.BackSide,
    depthWrite: false,
    depthTest: false,
    fog: false,
  });
  const sky = new THREE.Mesh(skyGeometry, skyMaterial);
  sky.frustumCulled = false;
  sky.renderOrder = -20;
  sky.name = "sky";

  // Stars. Two populations: the galaxy's own brightest stars, scattered over
  // its disc, and foreground stars of our own sky, which thin out toward the
  // source end of the bench.
  const count = options.stars;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const random = seededRandom(4217);
  const direction = new THREE.Vector3();
  for (let i = 0; i < count; i++) {
    const inDisc = random() < 0.42;
    if (inDisc) {
      // Exponential disc, with a preference for the spiral arms.
      let u = 0;
      let v = 0;
      for (let attempt = 0; attempt < 8; attempt++) {
        const r = -Math.log(1 - random() * 0.97) / 3.1;
        const theta = random() * Math.PI * 2;
        const phase = 2 * (theta - 3.25 * Math.log(r + 0.035));
        const arm = Math.pow(0.5 + 0.5 * Math.cos(phase), 2.4);
        u = Math.cos(theta) * r;
        v = Math.sin(theta) * r;
        if (random() < 0.25 + 0.75 * arm || r < 0.12) break;
      }
      // A little thickness, so the disc is not a perfect sheet.
      const lift = (random() - 0.5) * 0.035;
      direction.copy(centre)
        .addScaledVector(axisU, u * GALAXY.radius)
        .addScaledVector(axisV, v * GALAXY.radius)
        .addScaledVector(normal, lift)
        .normalize();
    } else {
      // Foreground: uniform on the sphere, then thinned away from the readout side.
      for (let attempt = 0; attempt < 12; attempt++) {
        const z = random() * 2 - 1;
        const a = random() * Math.PI * 2;
        const s = Math.sqrt(1 - z * z);
        direction.set(s * Math.cos(a), z, s * Math.sin(a));
        const toward = direction.dot(centre);
        const keep = 0.05 + 0.95 * THREE.MathUtils.smoothstep(toward, -0.35, 0.75);
        if (random() < keep) break;
      }
    }
    positions[i * 3] = direction.x;
    positions[i * 3 + 1] = direction.y;
    positions[i * 3 + 2] = direction.z;
    // Brightness follows a steep power law: many faint stars, very few bright ones.
    const magnitude = Math.pow(random(), inDisc ? 9 : 6);
    const brightness = (inDisc ? 0.22 : 0.3) + magnitude * (inDisc ? 2.2 : 5.5);
    const [cr, cg, cb] = starColor(inDisc ? random() * 0.75 : random());
    colors[i * 3] = cr * brightness;
    colors[i * 3 + 1] = cg * brightness;
    colors[i * 3 + 2] = cb * brightness;
    sizes[i] = (inDisc ? 0.9 : 1.1) + magnitude * (inDisc ? 2.2 : 4.6);
  }
  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  starGeometry.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));
  starGeometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
  const starMaterial = new THREE.ShaderMaterial({
    uniforms: { uPixelScale: { value: 1 }, uTime: { value: 0 } },
    vertexShader: STAR_VERTEX,
    fragmentShader: STAR_FRAGMENT,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: false,
    // Not marked transparent: additive points in the opaque pass are drawn first, behind everything.
    fog: false,
  });
  const stars = new THREE.Points(starGeometry, starMaterial);
  stars.frustumCulled = false;
  stars.renderOrder = -19;
  stars.name = "stars";

  const group = new THREE.Group();
  group.name = "cosmos";
  group.add(sky, stars);

  const extra: Array<{ dispose: () => void }> = [];
  return {
    group,
    centre,
    environmentSky: () => {
      const material = new THREE.ShaderMaterial({
        uniforms: { ...uniforms(), uExposure: { value: 1.6 }, uDetail: { value: 0 } },
        vertexShader: /* glsl */ `
          varying vec3 vDirection;
          void main() {
            vDirection = normalize(position);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: SKY_FRAGMENT,
        side: THREE.BackSide,
        depthWrite: false,
      });
      const geometry = new THREE.SphereGeometry(40, 48, 24);
      extra.push(material, geometry);
      return new THREE.Mesh(geometry, material);
    },
    setPixelScale: (scale) => {
      starMaterial.uniforms.uPixelScale.value = scale;
    },
    setTime: (time) => {
      starMaterial.uniforms.uTime.value = time;
    },
    dispose: () => {
      skyGeometry.dispose();
      skyMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      for (const item of extra) item.dispose();
    },
  };
}
