/**
 * Trace rays. In trace mode a point on the readout screen is followed back
 * toward the source. What is drawn is not one ray but the whole bundle that
 * arrives at that point through the iris opening.
 *
 * That bundle is the picture of a readout fibre: many source paths, one readout
 * point. Close the iris and the bundle thins toward a single line; open it and
 * the bundle widens. It illustrates non-uniqueness. It does not reconstruct the
 * source, and no unique reconstruction is implied.
 */
import * as THREE from "three";
import { LEVEL, LIGHT, OPTICS, STATION_X } from "./config";

const RAYS = 16;
const GOLDEN_ANGLE = 2.39996323;

export class TraceRays {
  readonly lines: THREE.LineSegments<THREE.BufferGeometry, THREE.LineBasicMaterial>;
  private readonly positions = new Float32Array(RAYS * 3 * 2 * 3);

  constructor() {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(this.positions, 3));
    geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, LEVEL.axis, 0), 9);
    this.lines = new THREE.LineSegments(
      geometry,
      new THREE.LineBasicMaterial({
        color: new THREE.Color(...LIGHT.coherent).multiplyScalar(1.6),
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    this.lines.frustumCulled = false;
    this.lines.renderOrder = 7;
    this.lines.visible = false;
    this.lines.name = "trace-rays";
  }

  /** Rebuild the bundle for a probe point on the screen and an iris opening radius. */
  update(probe: THREE.Vector3, irisRadius: number): void {
    const array = this.positions;
    let i = 0;
    const put = (v: THREE.Vector3) => {
      array[i++] = v.x;
      array[i++] = v.y;
      array[i++] = v.z;
    };
    const iris = new THREE.Vector3();
    const lens = new THREE.Vector3();
    const lamp = new THREE.Vector3();
    const lampX = OPTICS.lampFrontX - 0.14;
    for (let j = 0; j < RAYS; j++) {
      const rho = irisRadius * Math.sqrt((j + 0.5) / RAYS) * 0.92;
      const angle = j * GOLDEN_ANGLE;
      iris.set(STATION_X.iris, LEVEL.axis + Math.cos(angle) * rho, Math.sin(angle) * rho);
      // Continue the straight line back to the law optics.
      const t = (STATION_X.iris - STATION_X.law) / (probe.x - STATION_X.iris);
      lens.copy(iris).addScaledVector(iris.clone().sub(probe), t);
      // Keep the ray inside the clear glass.
      const off = Math.hypot(lens.y - LEVEL.axis, lens.z);
      const limit = OPTICS.lensRadius * 0.9;
      if (off > limit) {
        lens.y = LEVEL.axis + ((lens.y - LEVEL.axis) * limit) / off;
        lens.z = (lens.z * limit) / off;
      }
      // The optics gather the bundle toward the lamp window.
      lamp.set(lampX, LEVEL.axis + (lens.y - LEVEL.axis) * 0.5, lens.z * 0.5);
      put(probe); put(iris);
      put(iris); put(lens);
      put(lens); put(lamp);
    }
    this.lines.geometry.attributes.position.needsUpdate = true;
  }

  setStrength(strength: number): void {
    this.lines.material.opacity = strength * 0.5;
    this.lines.visible = strength > 0.01;
  }

  dispose(): void {
    this.lines.geometry.dispose();
    this.lines.material.dispose();
  }
}
