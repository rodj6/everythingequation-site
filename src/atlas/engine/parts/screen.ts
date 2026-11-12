/**
 * Stage T1 — the readout plate. A disc of smoked glass in a graduated brass
 * ring, carried in a fork like a small transit instrument. What lands on it is
 * the readout: the marks an observer actually holds. The sky beyond shows
 * through the glass.
 */
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { LEVEL, OPTICS, STATION_X } from "../config";
import { turned } from "../geometry";
import type { MaterialKit } from "../materials";
import { enableShadows, engravedPlane, type EngravingFonts } from "./bench";

export interface ScreenPart {
  group: THREE.Group;
  /** The glass plate. Its material is supplied by the readout renderer. */
  plate: THREE.Mesh;
}

/** Width of the brass ring around the plate, and its thickness along the axis. */
const RING_WIDTH = 0.15;
const RING_DEPTH = 0.11;

export function createScreen(kit: MaterialKit, fonts: EngravingFonts, plateMaterial: THREE.Material, postTop: number): ScreenPart {
  const group = new THREE.Group();
  group.name = "readout-plate-assembly";
  const half = OPTICS.screenHalf;
  const outer = half + RING_WIDTH;

  // The ring: a turned brass body with a stepped inner bezel that holds the glass.
  const ring = new THREE.Mesh(
    turned(
      [
        { x: -RING_DEPTH / 2, r: half + 0.012 },
        { x: -RING_DEPTH / 2, r: outer - 0.012, bevel: 0.012 },
        { x: RING_DEPTH / 2, r: outer - 0.012, bevel: 0.012 },
        { x: RING_DEPTH / 2, r: half + 0.012 },
        { x: 0.012, r: half + 0.012 },
        { x: 0.012, r: half - 0.012 },
        { x: -0.02, r: half - 0.012 },
        { x: -0.02, r: half + 0.012 },
      ],
      160,
      true,
    ),
    kit.brass,
  );
  group.add(ring);
  // A dark inner lip, so the glass sits in shadow at its edge like a mounted lens.
  const lip = new THREE.Mesh(new THREE.TorusGeometry(half - 0.004, 0.012, 12, 160), kit.blackPaint);
  lip.rotation.y = Math.PI / 2;
  lip.position.x = -0.022;
  group.add(lip);
  // Knurled outer band.
  const band = new THREE.Mesh(
    turned([{ x: -0.03, r: outer - 0.004 }, { x: -0.03, r: outer + 0.012, bevel: 0.004 }, { x: 0.03, r: outer + 0.012, bevel: 0.004 }, { x: 0.03, r: outer - 0.004 }], 160, true),
    kit.brassKnurled,
  );
  group.add(band);

  // The glass plate.
  const plateGeometry = new THREE.CircleGeometry(half + 0.008, 128);
  plateGeometry.rotateY(-Math.PI / 2); // faces the source (-x)
  const plate = new THREE.Mesh(plateGeometry, plateMaterial);
  plate.userData.noShadow = true;
  plate.name = "readout-plate";
  group.add(plate);

  // Engraved scale on the face of the ring: a full circle of degree marks, and the legend along the top arc.
  const scaleSize = outer * 2;
  const scale = engravedPlane(scaleSize, scaleSize, [1536, 1536], (ctx, w) => {
    const c = w / 2;
    const unit = w / scaleSize; // pixels per scene unit
    const r0 = (half + 0.03) * unit;
    ctx.translate(c, c);
    for (let degree = 0; degree < 360; degree += 2) {
      // Leave the top arc free for the legend.
      const fromTop = Math.abs(((degree + 90 + 540) % 360) - 180);
      if (fromTop < 52) continue;
      const long = degree % 10 === 0;
      const a = (degree * Math.PI) / 180;
      const r1 = r0 + (long ? 0.05 : 0.026) * unit;
      ctx.lineWidth = long ? 2.4 : 1.4;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * r0, Math.sin(a) * r0);
      ctx.lineTo(Math.cos(a) * r1, Math.sin(a) * r1);
      ctx.stroke();
    }
    // Legend, set around the top of the ring.
    const text = "T1  ·  READOUT  ·  WHAT AN OBSERVER HOLDS";
    ctx.font = `600 ${Math.round(0.062 * unit)}px ${fonts.sans}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const radius = (half + 0.076) * unit;
    const step = 0.049;
    const start = -Math.PI / 2 - ((text.length - 1) * step) / 2;
    for (let i = 0; i < text.length; i++) {
      const a = start + i * step;
      ctx.save();
      ctx.translate(Math.cos(a) * radius, Math.sin(a) * radius);
      ctx.rotate(a + Math.PI / 2);
      ctx.fillText(text[i], 0, 0);
      ctx.restore();
    }
  }, 0x1a1509);
  scale.rotation.y = -Math.PI / 2;
  scale.position.x = -RING_DEPTH / 2 - 0.0015;
  group.add(scale);

  // Fork: a cross bar under the ring and two arms up to trunnions at its sides.
  const barY = -outer - 0.2;
  const bar = new THREE.Mesh(new RoundedBoxGeometry(0.22, 0.1, outer * 2 + 0.5, 3, 0.02), kit.anodised);
  bar.position.set(0, barY, 0);
  group.add(bar);
  for (const sz of [-1, 1]) {
    const armHeight = -barY;
    const arm = new THREE.Mesh(new RoundedBoxGeometry(0.16, armHeight, 0.07, 3, 0.016), kit.anodised);
    arm.position.set(0, barY + armHeight / 2, sz * (outer + 0.085));
    group.add(arm);
    // Trunnion: a steel pin through a brass clamp knob.
    const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.11, 24), kit.steel);
    pin.rotation.x = Math.PI / 2;
    pin.position.set(0, 0, sz * (outer + 0.045));
    group.add(pin);
    const knob = new THREE.Mesh(
      turned([{ x: 0, r: 0.03 }, { x: 0, r: 0.085, bevel: 0.012 }, { x: 0.07, r: 0.085, bevel: 0.012 }, { x: 0.07, r: 0.03 }], 48),
      kit.brassKnurled,
    );
    knob.rotation.y = sz > 0 ? -Math.PI / 2 : Math.PI / 2;
    knob.position.set(0, 0, sz * (outer + 0.12));
    group.add(knob);
  }
  const drop = LEVEL.axis - postTop;
  const stemLength = Math.max(drop + barY - 0.05, 0.03);
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.11, stemLength, 32), kit.anodised);
  stem.position.set(0, barY - 0.05 - stemLength / 2, 0);
  group.add(stem);

  group.position.set(STATION_X.screen, LEVEL.axis, 0);
  enableShadows(group);
  return { group, plate };
}
