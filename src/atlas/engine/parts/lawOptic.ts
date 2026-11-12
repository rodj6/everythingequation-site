/**
 * Stage T0 — the fixed optics. Two glass elements in a plain barrel with no
 * adjuster: in the Atlas this stands for source-fixed law, the part of the
 * train that every later stage has to pass through unchanged.
 */
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { LEVEL, OPTICS, STATION_X } from "../config";
import { lensProfile, turned } from "../geometry";
import type { MaterialKit } from "../materials";
import { enableShadows, engravedBand, type EngravingFonts } from "./bench";

export interface LawOpticPart {
  group: THREE.Group;
}

const OUTER = 0.63;
const BORE = OPTICS.lensRadius + 0.02;
const HALF = 0.21;

export function createLawOptic(kit: MaterialKit, fonts: EngravingFonts, postTop: number): LawOpticPart {
  const group = new THREE.Group();
  group.name = "law-optic";

  const barrel = new THREE.Mesh(
    turned(
      [
        { x: -HALF, r: BORE, bevel: 0.008 },
        { x: -HALF, r: OUTER, bevel: 0.016 },
        { x: -0.065, r: OUTER, bevel: 0.008 },
        { x: -0.065, r: OUTER - 0.012 },
        { x: 0.065, r: OUTER - 0.012 },
        { x: 0.065, r: OUTER, bevel: 0.008 },
        { x: HALF, r: OUTER, bevel: 0.016 },
        { x: HALF, r: BORE, bevel: 0.008 },
      ],
      112,
      true,
    ),
    kit.anodised,
  );
  group.add(barrel);

  // Plain brass band in the waist of the barrel: fixed, with nothing to turn.
  const band = new THREE.Mesh(
    turned(
      [
        { x: -0.06, r: OUTER - 0.014 },
        { x: -0.06, r: OUTER + 0.012, bevel: 0.008 },
        { x: 0.06, r: OUTER + 0.012, bevel: 0.008 },
        { x: 0.06, r: OUTER - 0.014 },
      ],
      112,
    ),
    kit.brass,
  );
  group.add(band);

  // Retaining rings, front and back.
  for (const side of [-1, 1]) {
    const a = Math.min(side * (HALF - 0.05), side * (HALF - 0.012));
    const b = Math.max(side * (HALF - 0.05), side * (HALF - 0.012));
    const ring = new THREE.Mesh(
      turned(
        [
          { x: a, r: OPTICS.lensRadius - 0.012, bevel: 0.004 },
          { x: a, r: BORE },
          { x: b, r: BORE },
          { x: b, r: OPTICS.lensRadius - 0.012, bevel: 0.004 },
        ],
        96,
        true,
      ),
      kit.brass,
    );
    group.add(ring);
  }

  // The glass: a biconvex element and a thinner plano-convex one behind it.
  const front = new THREE.Mesh(turned(lensProfile(OPTICS.lensRadius, 0.05, 0.125, 0.08), 96), kit.glass);
  front.position.x = 0.045;
  front.userData.noShadow = true;
  group.add(front);
  const rear = new THREE.Mesh(turned(lensProfile(OPTICS.lensRadius - 0.01, 0.04, 0.02, 0.07), 96), kit.glass);
  rear.position.x = -0.115;
  rear.userData.noShadow = true;
  group.add(rear);

  const legend = engravedBand(OUTER + 0.001, 0.12, 0.95, 0.55, [120, 600], (ctx, w, h) => {
    // The band is narrow along the axis and long around the barrel, so the
    // legend is set to read around the circumference.
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(Math.PI / 2);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `600 54px ${fonts.sans}`;
    ctx.fillText("T0", -170, 2);
    ctx.fillRect(-116, -22, 2, 44);
    ctx.font = `500 30px ${fonts.sans}`;
    ctx.fillText("L A W   ·   F I X E D", 60, 2);
    ctx.restore();
  });
  legend.position.x = 0.137;
  group.add(legend);

  // Stem down to the post.
  const drop = LEVEL.axis - postTop;
  const clamp = new THREE.Mesh(new RoundedBoxGeometry(0.3, 0.14, 0.34, 3, 0.02), kit.anodised);
  clamp.position.set(0, -OUTER - 0.05, 0);
  group.add(clamp);
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.1, Math.max(drop - OUTER - 0.1, 0.05), 32), kit.anodised);
  stem.position.set(0, -(OUTER + 0.1 + (drop - OUTER - 0.1) / 2), 0);
  group.add(stem);

  group.position.set(STATION_X.law, LEVEL.axis, 0);
  enableShadows(group);
  return { group };
}
