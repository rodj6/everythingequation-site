/**
 * The bench: table top, precision rail, and the carriers and posts that hold
 * each optical element. This is the fixed frame of the instrument.
 */
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { LEVEL, RAIL } from "../config";
import { extrudedAlongX, turned } from "../geometry";
import { COLOR, type MaterialKit } from "../materials";
import { engravingTexture } from "../textures";

export interface EngravingFonts {
  sans: string;
  serif: string;
  mono: string;
}

/** A flat, paint-filled engraving laid just above a surface. */
export function engravedPlane(
  width: number,
  height: number,
  pixels: [number, number],
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
  tint: number = COLOR.cream,
): THREE.Mesh {
  const mask = engravingTexture({ width: pixels[0], height: pixels[1], draw });
  mask.wrapS = THREE.ClampToEdgeWrapping;
  mask.wrapT = THREE.ClampToEdgeWrapping;
  const material = new THREE.MeshStandardMaterial({
    color: tint,
    alphaMap: mask,
    transparent: true,
    roughness: 0.7,
    metalness: 0,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), material);
  mesh.renderOrder = 2;
  mesh.userData.noShadow = true;
  return mesh;
}

/**
 * An engraving wrapped around a turned part whose axis is X. The band is centred
 * on `x`, faces the operator (+z) and is tipped up by `elevation` radians so it
 * reads from the usual viewpoint. Text drawn left-to-right runs along +x.
 */
export function engravedBand(
  radius: number,
  axialLength: number,
  arc: number,
  elevation: number,
  pixels: [number, number],
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
  tint: number = COLOR.cream,
): THREE.Mesh {
  const mask = engravingTexture({ width: pixels[0], height: pixels[1], draw });
  mask.wrapS = THREE.ClampToEdgeWrapping;
  mask.wrapT = THREE.ClampToEdgeWrapping;
  const geometry = new THREE.CylinderGeometry(radius, radius, axialLength, 40, 1, true, -elevation - arc / 2, arc);
  // Around Y by default: lay the axis along X, then make canvas-x follow the axis.
  geometry.rotateZ(-Math.PI / 2);
  const uv = geometry.attributes.uv;
  for (let i = 0; i < uv.count; i++) {
    const u = uv.getX(i);
    const v = uv.getY(i);
    uv.setXY(i, v, 1 - u);
  }
  const material = new THREE.MeshStandardMaterial({
    color: tint,
    alphaMap: mask,
    transparent: true,
    roughness: 0.7,
    metalness: 0,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.renderOrder = 2;
  mesh.userData.noShadow = true;
  return mesh;
}

/**
 * A brass thumbscrew: smooth head with a knurled grip band. The head lies along
 * +x from the origin, so callers rotate it to point where it is needed.
 */
export function thumbscrew(kit: MaterialKit, radius: number, length: number): THREE.Group {
  const group = new THREE.Group();
  const core = radius * 0.86;
  const head = new THREE.Mesh(
    turned(
      [
        { x: 0, r: 0 },
        { x: 0, r: core, bevel: radius * 0.1 },
        { x: length, r: core, bevel: radius * 0.14 },
        { x: length, r: 0 },
      ],
      40,
    ),
    kit.brass,
  );
  group.add(head);
  const grip = new THREE.Mesh(
    turned(
      [
        { x: length * 0.2, r: core - 0.002 },
        { x: length * 0.2, r: radius, bevel: radius * 0.06 },
        { x: length * 0.8, r: radius, bevel: radius * 0.06 },
        { x: length * 0.8, r: core - 0.002 },
      ],
      40,
    ),
    kit.brassKnurled,
  );
  // Scale the knurl so teeth stay about the same size on any screw.
  const uv = grip.geometry.attributes.uv;
  const teeth = Math.max(2, Math.round(radius * 30));
  for (let i = 0; i < uv.count; i++) uv.setX(i, uv.getX(i) * teeth);
  group.add(grip);
  return group;
}

/** Let every solid part of a group cast and receive shadows. */
export function enableShadows(group: THREE.Object3D): void {
  group.traverse((object) => {
    const mesh = object as THREE.Mesh;
    if (!mesh.isMesh || mesh.userData.noShadow) return;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
  });
}

/** The slab the bench stands on: a finite plinth of polished black stone, afloat in the setting. */
export const PLINTH = { centreX: -0.15, length: 13.2, depth: 4.3, thickness: 0.34 } as const;

export function createTable(kit: MaterialKit): THREE.Mesh {
  const geometry = new RoundedBoxGeometry(PLINTH.length, PLINTH.thickness, PLINTH.depth, 4, 0.035);
  const mesh = new THREE.Mesh(geometry, kit.table);
  mesh.position.set(PLINTH.centreX, LEVEL.table - PLINTH.thickness / 2, 0);
  mesh.receiveShadow = true;
  mesh.name = "plinth";
  return mesh;
}

/** Cross-section of the rail, as [z, y]: a base flange, a neck and a dovetail top. */
const RAIL_SECTION: Array<[number, number]> = [
  [-0.33, 0.0], [0.33, 0.0], [0.33, 0.1], [0.215, 0.1], [0.215, 0.17],
  [0.29, 0.3], [-0.29, 0.3], [-0.215, 0.17], [-0.215, 0.1], [-0.33, 0.1],
];

const FOOT_HEIGHT = 0.06;

export function createRail(kit: MaterialKit, fonts: EngravingFonts): THREE.Group {
  const group = new THREE.Group();
  group.name = "rail";

  const railGeometry = extrudedAlongX(RAIL_SECTION, RAIL.length, 0.01);
  // Brushing runs along the length of an extruded rail: map the grain to follow x.
  const railUv = railGeometry.attributes.uv;
  const railPos = railGeometry.attributes.position;
  for (let i = 0; i < railUv.count; i++) {
    railUv.setXY(i, railPos.getX(i) * 0.35, (railPos.getY(i) + railPos.getZ(i)) * 0.9);
  }
  const rail = new THREE.Mesh(railGeometry, kit.anodised);
  rail.position.y = FOOT_HEIGHT;
  rail.castShadow = true;
  rail.receiveShadow = true;
  group.add(rail);

  // Two cross feet lift the rail off the table, as on a real bench.
  for (const x of [-RAIL.length / 2 + 0.9, 0, RAIL.length / 2 - 0.9]) {
    const foot = new THREE.Mesh(new RoundedBoxGeometry(0.34, FOOT_HEIGHT + 0.02, 1.18, 3, 0.015), kit.anodisedSatin);
    foot.position.set(x, FOOT_HEIGHT / 2, 0);
    foot.castShadow = true;
    foot.receiveShadow = true;
    group.add(foot);
    for (const z of [-0.5, 0.5]) {
      const pad = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.075, 0.02, 24), kit.rubber);
      pad.position.set(x, 0.01, z);
      group.add(pad);
    }
  }

  // Engraved millimetre-style scale along the front of the base flange.
  const scaleLength = RAIL.length - 0.4;
  const pixelsPerUnit = 320;
  const scale = engravedPlane(scaleLength, 0.085, [Math.round(scaleLength * pixelsPerUnit), 28], (ctx, w, h) => {
    const units = scaleLength;
    const step = 0.05;
    const count = Math.round(units / step);
    for (let i = 0; i <= count; i++) {
      const x = Math.round((i / count) * (w - 2)) + 1;
      const major = i % 20 === 0;
      const mid = i % 10 === 0;
      const tick = major ? h * 0.62 : mid ? h * 0.46 : h * 0.26;
      ctx.fillRect(x - (major ? 1 : 0.5), 0, major ? 2 : 1, tick);
    }
    ctx.font = `500 11px ${fonts.mono}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    for (let i = 0; i <= count; i += 20) {
      const x = Math.round((i / count) * (w - 2)) + 1;
      if (i > 0 && i < count) ctx.fillText(String(i / 20), x, h + 1);
    }
  });
  scale.position.set(0, FOOT_HEIGHT + 0.05, 0.3305);
  group.add(scale);

  return group;
}

export const RAIL_TOP = FOOT_HEIGHT + RAIL.height;

export interface CarrierOptions {
  x: number;
  /** Height at which the post ends (where the element mount begins). */
  postTop: number;
  /** Short engraved designation on the front of the saddle, e.g. "Ω" or "T0.5". */
  label?: string;
  /** Extra saddle length for heavy elements. */
  length?: number;
  /** Two posts instead of one (for wide elements); gives the separation in z. */
  twinPostSpacing?: number;
}

/** Saddle that clamps to the rail, with one or two posts rising from it. */
export function createCarrier(kit: MaterialKit, fonts: EngravingFonts, options: CarrierOptions): THREE.Group {
  const group = new THREE.Group();
  group.name = `carrier:${options.label ?? ""}`;
  const length = options.length ?? 0.58;
  const saddleHeight = 0.2;
  const saddleY = RAIL_TOP + saddleHeight / 2 - 0.004;

  const saddle = new THREE.Mesh(new RoundedBoxGeometry(length, saddleHeight, 0.92, 4, 0.022), kit.anodised);
  saddle.position.set(options.x, saddleY, 0);
  group.add(saddle);

  // Cheeks that grip the dovetail.
  for (const side of [-1, 1]) {
    const cheek = new THREE.Mesh(new RoundedBoxGeometry(length, 0.2, 0.09, 3, 0.015), kit.anodised);
    cheek.position.set(options.x, RAIL_TOP - 0.085, side * 0.385);
    group.add(cheek);
  }

  // Brass clamp screw on the operator's side.
  const knob = thumbscrew(kit, 0.085, 0.11);
  knob.rotation.y = -Math.PI / 2; // +x -> +z
  knob.position.set(options.x + length * 0.22, RAIL_TOP - 0.085, 0.43);
  group.add(knob);

  if (options.label) {
    const label = engravedPlane(0.3, 0.115, [240, 92], (ctx, w, h) => {
      ctx.font = `600 62px ${fonts.sans}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(options.label!, w / 2, h / 2 + 3);
    });
    label.position.set(options.x - length * 0.18, saddleY, 0.4605);
    group.add(label);
  }

  const postZs = options.twinPostSpacing ? [-options.twinPostSpacing / 2, options.twinPostSpacing / 2] : [0];
  for (const z of postZs) {
    const holderTop = RAIL_TOP + saddleHeight + 0.2;
    const holder = new THREE.Mesh(
      turned(
        [
          { x: 0, r: 0.07 }, { x: 0, r: 0.17, bevel: 0.015 }, { x: 0.2, r: 0.17, bevel: 0.02 },
          { x: 0.2, r: 0.07 },
        ],
        48,
      ),
      kit.anodised,
    );
    holder.rotation.z = Math.PI / 2; // lathe axis (+x) -> +y
    holder.position.set(options.x, RAIL_TOP + saddleHeight - 0.004, z);
    group.add(holder);

    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.062, 0.062, options.postTop - holderTop + 0.16, 32, 1), kit.steel);
    post.position.set(options.x, (options.postTop + holderTop - 0.16) / 2, z);
    group.add(post);

    // Small brass thumbscrew locking the post.
    const lock = thumbscrew(kit, 0.045, 0.075);
    lock.rotation.y = -Math.PI / 2;
    lock.position.set(options.x, RAIL_TOP + saddleHeight + 0.1, z + 0.165);
    group.add(lock);
  }

  enableShadows(group);
  return group;
}
