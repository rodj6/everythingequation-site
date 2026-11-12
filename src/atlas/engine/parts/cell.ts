/**
 * Stage F — the field cell. One block of glass on a small stage. In the Atlas
 * this stands for the canonical spectral-curvature field: one carrier with two
 * linked responses. Inside the block the beam shows both at once, a phase
 * pattern that keeps its form (coherent) under an envelope that decays
 * (dissipative). The drawing of that pattern lives in beam.ts.
 */
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { LEVEL, OPTICS, STATION_X } from "../config";
import type { MaterialKit } from "../materials";
import { enableShadows, engravedPlane, type EngravingFonts } from "./bench";

export interface CellPart {
  group: THREE.Group;
  block: THREE.Mesh;
}

export function createCell(kit: MaterialKit, fonts: EngravingFonts, postTop: number): CellPart {
  const group = new THREE.Group();
  group.name = "field-cell";
  const half = OPTICS.cellHalf;

  const block = new THREE.Mesh(new RoundedBoxGeometry(half.x * 2, half.y * 2, half.z * 2, 6, 0.028), kit.glassBlock);
  block.userData.noShadow = true;
  group.add(block);

  // Stage plate under the block, with a recess lip front and back.
  const plateY = -half.y - 0.035;
  const plate = new THREE.Mesh(new RoundedBoxGeometry(half.x * 2 + 0.26, 0.07, half.z * 2 + 0.2, 3, 0.016), kit.anodised);
  plate.position.set(0, plateY, 0);
  group.add(plate);
  for (const side of [-1, 1]) {
    const lip = new THREE.Mesh(new RoundedBoxGeometry(0.05, 0.1, half.z * 2 + 0.2, 2, 0.012), kit.anodised);
    lip.position.set(side * (half.x + 0.105), plateY + 0.05, 0);
    group.add(lip);
  }

  // Low brass stops locate the block on the stage, front and back.
  for (const side of [-1, 1]) {
    const stop = new THREE.Mesh(new RoundedBoxGeometry(half.x * 1.1, 0.05, 0.035, 2, 0.008), kit.brass);
    stop.position.set(0, plateY + 0.058, side * (half.z + 0.02));
    group.add(stop);
  }

  const legend = engravedPlane(0.62, 0.05, [744, 60], (ctx, w, h) => {
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    ctx.font = `600 40px ${fonts.sans}`;
    ctx.fillText("F", 6, h / 2 + 2);
    ctx.fillRect(44, h / 2 - 16, 2, 32);
    ctx.font = `500 25px ${fonts.sans}`;
    ctx.fillText("C A N O N I C A L   F I E L D   ·   C S C F", 62, h / 2 + 2);
  });
  legend.position.set(0, plateY, half.z + 0.1005);
  group.add(legend);

  // Pillar down to the post.
  const drop = LEVEL.axis - postTop;
  const pillarLength = Math.max(drop + plateY - 0.035, 0.04);
  const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.11, pillarLength, 32), kit.anodised);
  pillar.position.set(0, plateY - 0.035 - pillarLength / 2, 0);
  group.add(pillar);

  group.position.set(STATION_X.cell, LEVEL.axis, 0);
  enableShadows(group);
  return { group, block };
}
