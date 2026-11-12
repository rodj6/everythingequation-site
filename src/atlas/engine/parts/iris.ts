/**
 * Stage T0.5 — the aperture. A real iris diaphragm: curved blades pivoting in a
 * housing, driven by a knurled brass ring. This is the one control the visitor
 * turns. Opening and closing it changes what reaches the readout screen.
 */
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { LEVEL, OPTICS, STATION_X } from "../config";
import { turned } from "../geometry";
import { COLOR, type MaterialKit } from "../materials";
import { engravingTexture } from "../textures";
import { enableShadows, type EngravingFonts } from "./bench";

export interface IrisPart {
  group: THREE.Group;
  /** The brass ring a visitor drags. */
  ring: THREE.Object3D;
  /** Set the opening: 0 = smallest stop, 1 = wide open. */
  setOpen: (fraction: number) => void;
  /** Radius of the clear opening for a given fraction (scene units). */
  openRadius: (fraction: number) => number;
}

const CLEAR = OPTICS.irisClearRadius;
/** Radius of the inner edge of each blade. Slightly larger than the clear bore so open blades hide. */
const BLADE_ARC = CLEAR + 0.025;
const BLADE_WIDTH = 0.31;
const PIVOT_RADIUS = BLADE_ARC + BLADE_WIDTH * 0.5;
const HOUSING_OUTER = 0.92;
const HOUSING_HALF = 0.075;
/** How far the drive ring turns between the smallest stop and wide open. */
export const RING_TRAVEL = 1.15;

/** Blade outline in its own frame: the pivot is the origin, +x points away from the optical axis. */
function bladeShape(): THREE.Shape {
  const centre = new THREE.Vector2(-PIVOT_RADIUS, 0);
  const start = THREE.MathUtils.degToRad(-16);
  const end = THREE.MathUtils.degToRad(128);
  const inner = BLADE_ARC;
  const outer = BLADE_ARC + BLADE_WIDTH;
  const shape = new THREE.Shape();
  shape.absarc(centre.x, centre.y, outer, start, end, false);
  // Taper the far tip a little, as real blades do.
  const tip = end + THREE.MathUtils.degToRad(7);
  shape.lineTo(centre.x + Math.cos(tip) * (inner + BLADE_WIDTH * 0.35), centre.y + Math.sin(tip) * (inner + BLADE_WIDTH * 0.35));
  shape.lineTo(centre.x + Math.cos(end) * inner, centre.y + Math.sin(end) * inner);
  shape.absarc(centre.x, centre.y, inner, end, start, true);
  shape.closePath();
  return shape;
}

export function createIris(kit: MaterialKit, fonts: EngravingFonts, postTop: number): IrisPart {
  const group = new THREE.Group();
  group.name = "iris";

  // Housing: a flat ring with a clear bore.
  const housing = new THREE.Mesh(
    turned(
      [
        { x: -HOUSING_HALF, r: CLEAR, bevel: 0.012 },
        { x: -HOUSING_HALF, r: HOUSING_OUTER, bevel: 0.016 },
        { x: HOUSING_HALF, r: HOUSING_OUTER, bevel: 0.016 },
        { x: HOUSING_HALF, r: CLEAR, bevel: 0.012 },
      ],
      128,
      true,
    ),
    kit.anodised,
  );
  group.add(housing);

  // Blades live in a plane across the axis. They are drawn in XY and the whole
  // set is turned so that plane faces along the optical axis.
  const bladePlane = new THREE.Group();
  bladePlane.rotation.y = Math.PI / 2;
  group.add(bladePlane);
  const bladeGeometry = new THREE.ExtrudeGeometry(bladeShape(), { depth: 0.004, bevelEnabled: false, curveSegments: 40 });
  const blades: THREE.Mesh[] = [];
  const count = OPTICS.irisBlades;
  for (let i = 0; i < count; i++) {
    const theta = (i / count) * Math.PI * 2;
    const blade = new THREE.Mesh(bladeGeometry, kit.blade);
    blade.position.set(Math.cos(theta) * PIVOT_RADIUS, Math.sin(theta) * PIVOT_RADIUS, (i - (count - 1) / 2) * 0.0055);
    blade.userData.theta = theta;
    blade.castShadow = true;
    blade.receiveShadow = true;
    bladePlane.add(blade);
    blades.push(blade);
  }

  // Drive ring: knurled brass around the rim, with a small lever.
  const ring = new THREE.Group();
  ring.name = "iris-ring";
  const grip = new THREE.Mesh(
    turned(
      [
        { x: -0.05, r: HOUSING_OUTER - 0.004 },
        { x: -0.05, r: HOUSING_OUTER + 0.045, bevel: 0.012 },
        { x: 0.05, r: HOUSING_OUTER + 0.045, bevel: 0.012 },
        { x: 0.05, r: HOUSING_OUTER - 0.004 },
      ],
      128,
    ),
    kit.brassKnurled,
  );
  // More knurl teeth around a ring this size.
  grip.geometry.attributes.uv.array.forEach((_, i, array) => {
    if (i % 2 === 0) (array as Float32Array)[i] *= 22;
  });
  ring.add(grip);
  const lever = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.2, 16), kit.steel);
  lever.position.set(0, HOUSING_OUTER + 0.13, 0);
  ring.add(lever);
  const leverTip = new THREE.Mesh(new THREE.SphereGeometry(0.05, 24, 16), kit.blackPaint);
  leverTip.position.set(0, HOUSING_OUTER + 0.25, 0);
  ring.add(leverTip);
  group.add(ring);

  // Engraved scale on the source-facing side of the housing.
  const face = engravingTexture({
    width: 1024,
    height: 1024,
    draw: (ctx, w, h) => {
      ctx.translate(w / 2, h / 2);
      const unit = w / 2 / HOUSING_OUTER; // pixels per scene unit
      const r0 = 0.66 * unit;
      // Tick arc across the top, where the lever travels.
      for (let i = 0; i <= 40; i++) {
        const angle = -Math.PI / 2 + (i / 40 - 0.5) * RING_TRAVEL;
        const long = i % 10 === 0;
        const mid = i % 5 === 0;
        const length = (long ? 0.085 : mid ? 0.06 : 0.035) * unit;
        ctx.save();
        ctx.rotate(angle + Math.PI / 2);
        ctx.fillRect(-(long ? 2 : 1), -(r0 + 0.14 * unit), long ? 4 : 2, length);
        ctx.restore();
      }
      // Numerals at the long ticks.
      ctx.font = `500 ${Math.round(0.06 * unit)}px ${fonts.mono}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ["1", "2", "4", "8", "16"].forEach((label, index) => {
        const angle = (index / 4 - 0.5) * RING_TRAVEL;
        ctx.save();
        ctx.rotate(angle);
        ctx.fillText(label, 0, -(r0 + 0.005 * unit));
        ctx.restore();
      });
      // Legend along the lower arc.
      const legend = "T0.5   ·   RECURSIVE APERTURE";
      ctx.font = `600 ${Math.round(0.062 * unit)}px ${fonts.sans}`;
      const radius = 0.7 * unit;
      const step = 0.052;
      const startAngle = Math.PI / 2 + ((legend.length - 1) * step) / 2;
      [...legend].forEach((ch, index) => {
        const angle = startAngle - index * step;
        ctx.save();
        ctx.rotate(angle - Math.PI / 2);
        ctx.fillText(ch, 0, radius);
        ctx.restore();
      });
    },
  });
  face.wrapS = THREE.ClampToEdgeWrapping;
  face.wrapT = THREE.ClampToEdgeWrapping;
  const faceGeometry = new THREE.RingGeometry(CLEAR + 0.02, HOUSING_OUTER - 0.02, 96, 1);
  const faceMesh = new THREE.Mesh(
    faceGeometry,
    new THREE.MeshStandardMaterial({
      color: COLOR.cream,
      alphaMap: face,
      transparent: true,
      roughness: 0.7,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    }),
  );
  // RingGeometry maps uv by position; scale so the texture spans the housing diameter.
  const uv = faceGeometry.attributes.uv;
  const pos = faceGeometry.attributes.position;
  for (let i = 0; i < uv.count; i++) {
    uv.setXY(i, pos.getX(i) / (2 * HOUSING_OUTER) + 0.5, pos.getY(i) / (2 * HOUSING_OUTER) + 0.5);
  }
  // Face the source (-x): ring geometry faces +z by default.
  faceMesh.rotation.y = -Math.PI / 2;
  faceMesh.position.x = -HOUSING_HALF - 0.0015;
  faceMesh.userData.noShadow = true;
  faceMesh.renderOrder = 2;
  group.add(faceMesh);

  // Cover screws on both faces.
  for (const side of [-1, 1]) {
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2 + (side > 0 ? 0.26 : 0.52);
      const screw = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.012, 16), kit.steel);
      screw.rotation.z = Math.PI / 2;
      screw.position.set(side * (HOUSING_HALF + 0.004), Math.cos(angle) * 0.8, Math.sin(angle) * 0.8);
      group.add(screw);
    }
  }
  // A fine machined groove on the readout-facing side.
  const groove = new THREE.Mesh(new THREE.RingGeometry(0.615, 0.628, 96, 1), kit.blackPaint);
  groove.rotation.y = Math.PI / 2;
  groove.position.x = HOUSING_HALF + 0.0012;
  groove.userData.noShadow = true;
  group.add(groove);

  // Index mark fixed to the housing above the ring's zero.
  const index = new THREE.Mesh(new RoundedBoxGeometry(0.05, 0.07, 0.022, 2, 0.006), kit.steel);
  index.position.set(-HOUSING_HALF - 0.01, HOUSING_OUTER - 0.045, 0);
  group.add(index);

  // Stem down to the post.
  const drop = LEVEL.axis - postTop;
  const stemLength = Math.max(drop - HOUSING_OUTER - 0.03, 0.04);
  const foot = new THREE.Mesh(new RoundedBoxGeometry(0.2, 0.12, 0.32, 3, 0.02), kit.anodised);
  foot.position.set(0, -HOUSING_OUTER - 0.02, 0);
  group.add(foot);
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.1, stemLength, 32), kit.anodised);
  stem.position.set(0, -(HOUSING_OUTER + 0.03 + stemLength / 2), 0);
  group.add(stem);

  const openRadius = (fraction: number) =>
    CLEAR * THREE.MathUtils.lerp(OPTICS.irisMinOpen, OPTICS.irisMaxOpen, THREE.MathUtils.clamp(fraction, 0, 1));

  const setOpen = (fraction: number) => {
    const radius = openRadius(fraction);
    // Each blade edge is an arc of radius BLADE_ARC whose centre sits 2·Rp·sin(φ/2)
    // from the axis after the blade has turned by φ about its pivot.
    const phi = 2 * Math.asin(THREE.MathUtils.clamp((BLADE_ARC - radius) / (2 * PIVOT_RADIUS), 0, 1));
    for (const blade of blades) blade.rotation.z = blade.userData.theta + phi;
    ring.rotation.x = (THREE.MathUtils.clamp(fraction, 0, 1) - 0.5) * RING_TRAVEL;
  };
  setOpen(0.5);

  group.position.set(STATION_X.iris, LEVEL.axis, 0);
  enableShadows(group);
  return { group, ring, setOpen, openRadius };
}
