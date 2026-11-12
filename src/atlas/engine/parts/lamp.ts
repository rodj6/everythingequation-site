/**
 * Stage Ω — the source lamp. A finned black housing with a warm window, held in
 * a yoke. In the Atlas this stands for the source formation package: the place
 * the light starts from. (It is a picture of a role, not of a mechanism.)
 */
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { LEVEL, LIGHT, OPTICS, STATION_X } from "../config";
import { discX, turned } from "../geometry";
import type { MaterialKit } from "../materials";
import { enableShadows, engravedBand, type EngravingFonts } from "./bench";

export interface LampPart {
  group: THREE.Group;
  /** The glowing window; its brightness follows the lamp level. */
  window: THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>;
}

const BODY_RADIUS = 0.56;
const REAR = -0.72;
const FRONT = OPTICS.lampFrontX - STATION_X.lamp; // 0.8

/** Hot centre, softer edge: the look of a diffuser lit from behind. */
function windowMaterial(): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Vector3(...LIGHT.source) },
      uLevel: { value: 1 },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      uniform float uLevel;
      varying vec2 vUv;
      void main() {
        float r = length(vUv - 0.5) * 2.0;
        float core = exp(-r * r * 5.5);
        float body = smoothstep(1.0, 0.55, r);
        // A whiter, far brighter core over a warm field.
        vec3 color = uColor * (0.62 * body + 1.0 * core) + vec3(1.0, 0.95, 0.88) * core * 0.45;
        gl_FragColor = vec4(color * uLevel, 1.0);
      }
    `,
    toneMapped: false,
  });
}

export function createLamp(kit: MaterialKit, fonts: EngravingFonts, postTop: number): LampPart {
  const group = new THREE.Group();
  group.name = "lamp";
  const x0 = STATION_X.lamp;
  const y0 = LEVEL.axis;

  // Housing: domed rear cap, cylindrical body, stepped nose with the exit port.
  const body = new THREE.Mesh(
    turned(
      [
        { x: REAR, r: 0 },
        { x: REAR, r: 0.3, bevel: 0.03 },
        { x: REAR + 0.07, r: 0.5, bevel: 0.04 },
        { x: REAR + 0.14, r: BODY_RADIUS, bevel: 0.03 },
        { x: 0.3, r: BODY_RADIUS, bevel: 0.03 },
        { x: 0.36, r: 0.46, bevel: 0.015 },
        { x: 0.36, r: 0.4, bevel: 0.01 },
        { x: FRONT - 0.05, r: 0.4, bevel: 0.012 },
        { x: FRONT, r: 0.385, bevel: 0.01 },
        { x: FRONT, r: OPTICS.lampWindowRadius + 0.015, bevel: 0.008 },
        { x: FRONT - 0.16, r: OPTICS.lampWindowRadius + 0.015 },
        { x: FRONT - 0.16, r: 0 },
      ],
      96,
    ),
    kit.anodised,
  );
  group.add(body);

  // Cooling fins machined around the body.
  for (let i = 0; i < 5; i++) {
    const fx = -0.5 + i * 0.086;
    const fin = new THREE.Mesh(
      turned(
        [
          { x: fx, r: BODY_RADIUS - 0.01 },
          { x: fx, r: BODY_RADIUS + 0.085, bevel: 0.012 },
          { x: fx + 0.034, r: BODY_RADIUS + 0.085, bevel: 0.012 },
          { x: fx + 0.034, r: BODY_RADIUS - 0.01 },
        ],
        96,
      ),
      kit.anodised,
    );
    group.add(fin);
  }

  // Brass bezel around the port.
  const bezel = new THREE.Mesh(
    turned(
      [
        { x: FRONT - 0.1, r: 0.4 },
        { x: FRONT - 0.1, r: 0.425, bevel: 0.008 },
        { x: FRONT - 0.035, r: 0.425, bevel: 0.01 },
        { x: FRONT - 0.035, r: 0.4 },
      ],
      96,
    ),
    kit.brass,
  );
  group.add(bezel);

  // The window: a diffuser lit from inside.
  const window = new THREE.Mesh(discX(OPTICS.lampWindowRadius + 0.014, 64), windowMaterial());
  window.position.x = FRONT - 0.15;
  window.userData.noShadow = true;
  group.add(window);

  // Clear cover glass in front of the diffuser: catches the studio reflections.
  const cover = new THREE.Mesh(discX(OPTICS.lampWindowRadius + 0.012, 64), kit.glass);
  cover.position.x = FRONT - 0.04;
  cover.userData.noShadow = true;
  group.add(cover);

  // Engraved designation on the operator's side of the body, wrapped to the curve.
  const plate = engravedBand(BODY_RADIUS + 0.002, 0.4, 0.56, 0.5, [400, 300], (ctx, w, h) => {
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `500 170px ${fonts.serif}`;
    ctx.fillText("Ω", w / 2, h * 0.4);
    ctx.fillRect(w * 0.2, h * 0.7, w * 0.6, 2);
    ctx.font = `500 34px ${fonts.sans}`;
    const label = "SOURCE";
    // Letter-spaced by hand so it reads as an engraved legend.
    const spacing = 14;
    let total = 0;
    for (const ch of label) total += ctx.measureText(ch).width + spacing;
    let cursor = (w - total + spacing) / 2;
    ctx.textAlign = "left";
    for (const ch of label) {
      ctx.fillText(ch, cursor, h * 0.84);
      cursor += ctx.measureText(ch).width + spacing;
    }
  });
  plate.position.x = 0.09;
  group.add(plate);

  // Yoke: base bar, two arms, pivot knobs.
  const yokeBaseY = -BODY_RADIUS - 0.2;
  const base = new THREE.Mesh(new RoundedBoxGeometry(0.3, 0.09, 1.5, 3, 0.02), kit.anodised);
  base.position.set(0, yokeBaseY, 0);
  group.add(base);
  for (const side of [-1, 1]) {
    const arm = new THREE.Mesh(new RoundedBoxGeometry(0.24, 0.86, 0.07, 3, 0.02), kit.anodised);
    arm.position.set(0, yokeBaseY + 0.4, side * 0.715);
    group.add(arm);
    const pivot = new THREE.Mesh(
      turned(
        [
          { x: 0, r: 0 }, { x: 0, r: 0.1, bevel: 0.014 }, { x: 0.075, r: 0.1, bevel: 0.014 },
          { x: 0.075, r: 0.05 }, { x: 0.1, r: 0.05, bevel: 0.008 }, { x: 0.1, r: 0 },
        ],
        40,
      ),
      kit.brass,
    );
    pivot.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;
    pivot.position.set(0, 0, side * 0.75);
    group.add(pivot);
    // Trunnion between body and arm.
    const trunnion = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.2, 24), kit.steel);
    trunnion.rotation.x = Math.PI / 2;
    trunnion.position.set(0, 0, side * 0.62);
    group.add(trunnion);
  }
  // Stem from yoke to post.
  const stemTop = yokeBaseY - 0.045;
  const stemLength = Math.max(y0 + stemTop - postTop, 0.04);
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.105, stemLength, 32), kit.anodised);
  stem.position.set(0, stemTop - stemLength / 2, 0);
  group.add(stem);

  // A plain rear cap. Nothing feeds the lamp from outside the picture: what precedes
  // the source is left unspecified, in the instrument as in the theory.
  const relief = new THREE.Mesh(
    turned([{ x: 0, r: 0.1 }, { x: -0.06, r: 0.1, bevel: 0.01 }, { x: -0.2, r: 0.055, bevel: 0.01 }, { x: -0.22, r: 0.04 }], 32),
    kit.rubber,
  );
  relief.position.set(REAR, 0, 0);
  group.add(relief);
  group.position.set(x0, y0, 0);
  enableShadows(group);
  return { group, window };
}
