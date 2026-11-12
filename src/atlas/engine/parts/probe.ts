/**
 * The second probe: a small analysing prism on a swing arm, between the field
 * cell and the readout plate. Swung aside it does nothing. Swung into the
 * light it answers one further question of the light, and marks that looked
 * single on the plate separate into two.
 *
 * In the theory this is a second readout: a new map out of the same source,
 * chosen to keep a distinction the first readout drops.
 */
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { LEVEL } from "../config";
import { turned } from "../geometry";
import type { MaterialKit } from "../materials";
import { enableShadows } from "./bench";

/** Position along the bench: between the cell and the plate. */
export const PROBE_X = 2.72;
/** Angle of the arm when the prism is out of the light (radians from "in"). */
const OUT_ANGLE = 1.95;
/** Length of the swing arm, hinge to optical axis. */
const ARM = 0.78;

export interface ProbePart {
  group: THREE.Group;
  /** 0 = swung aside, 1 = in the light. */
  setIn: (amount: number) => void;
}

export function createProbe(kit: MaterialKit, postTop: number): ProbePart {
  const group = new THREE.Group();
  group.name = "second-probe";

  // Post from the carrier up to the hinge, set back from the axis.
  const hingeY = LEVEL.axis - ARM * 0.72;
  const hingeZ = -ARM * 0.69;
  const postLength = Math.max(hingeY - postTop, 0.05);
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.065, postLength, 28), kit.anodised);
  post.position.set(0, postTop + postLength / 2, hingeZ);
  group.add(post);
  const foot = new THREE.Mesh(new RoundedBoxGeometry(0.2, 0.05, Math.abs(hingeZ) + 0.2, 3, 0.012), kit.anodised);
  foot.position.set(0, postTop + 0.025, hingeZ / 2);
  group.add(foot);
  const hinge = new THREE.Mesh(
    turned([{ x: -0.07, r: 0.02 }, { x: -0.07, r: 0.075, bevel: 0.01 }, { x: 0.07, r: 0.075, bevel: 0.01 }, { x: 0.07, r: 0.02 }], 40),
    kit.brassKnurled,
  );
  hinge.position.set(0, hingeY, hingeZ);
  group.add(hinge);

  // The arm swings about the hinge (an axis along the bench).
  const swing = new THREE.Group();
  swing.position.set(0, hingeY, hingeZ);
  group.add(swing);
  // Direction from hinge to the optical axis when the prism is in the light.
  const reach = new THREE.Vector3(0, LEVEL.axis - hingeY, -hingeZ);
  const length = reach.length();
  const angle = Math.atan2(reach.y, reach.z);
  const arm = new THREE.Mesh(new RoundedBoxGeometry(0.045, 0.06, length - 0.3, 2, 0.012), kit.anodised);
  arm.position.set(0, 0, (length - 0.3) / 2 + 0.05);
  const holder = new THREE.Group();
  holder.position.set(0, 0, length);
  // Brass cell around the prism.
  const frame = new THREE.Mesh(
    turned(
      [
        { x: -0.07, r: 0.2 }, { x: -0.07, r: 0.262, bevel: 0.01 }, { x: 0.07, r: 0.262, bevel: 0.01 }, { x: 0.07, r: 0.2 },
      ],
      72,
      true,
    ),
    kit.brass,
  );
  holder.add(frame);
  // The prism: a thick disc of clear glass with a faint tint.
  const prism = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.1, 64), kit.glassBlock);
  prism.rotation.z = Math.PI / 2;
  prism.userData.noShadow = true;
  holder.add(prism);
  const tilted = new THREE.Group();
  tilted.rotation.x = -angle;
  tilted.add(arm, holder);
  swing.add(tilted);
  // Keep the holder's own axis along the bench whatever the arm's angle.
  const setIn = (amount: number) => {
    const t = THREE.MathUtils.clamp(amount, 0, 1);
    swing.rotation.x = -(1 - t) * OUT_ANGLE;
  };
  setIn(0);

  group.position.set(PROBE_X, 0, 0);
  enableShadows(group);
  return { group, setIn };
}
