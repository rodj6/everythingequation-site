/**
 * Studio lighting. The instrument is mostly metal and glass, and those are made
 * of reflections: what sells them is what they reflect. This builds a small dark
 * studio of soft light panels and converts it to an environment map.
 *
 * Panels are placed the way a product photographer would light a black object:
 * a broad top light for form, long strips for clean highlights along cylinders,
 * and a cool rim from behind so dark edges separate from the dark room.
 */
import * as THREE from "three";
import { softboxTexture } from "./textures";

interface Panel {
  size: [number, number];
  position: [number, number, number];
  color: [number, number, number];
  intensity: number;
}

/** Light panels of the studio. Intensities are in scene-linear units. */
const STUDIO_PANELS: Panel[] = [
  // Broad top key: gives every part its form.
  { size: [10, 5], position: [-1.5, 8.5, 2.5], color: [1.0, 0.98, 0.95], intensity: 7.5 },
  // Long front strip: the clean line highlight along barrels and rods.
  { size: [15, 0.75], position: [0, 4.6, 9.5], color: [0.95, 0.97, 1.0], intensity: 6.5 },
  // Left softbox: the "window" seen in lens faces from the source side.
  { size: [3.4, 5.5], position: [-10.5, 3.6, 4.5], color: [1.0, 0.97, 0.93], intensity: 8.5 },
  // Cool rim from behind: separates dark metal from the dark room.
  { size: [14, 1.3], position: [2, 3.6, -9], color: [0.78, 0.88, 1.0], intensity: 5.5 },
  // Broad, dim fill from behind the viewer: gives glass and dark faces a gradient to reflect.
  { size: [16, 8], position: [1, 4.5, 13], color: [0.92, 0.95, 1.0], intensity: 0.75 },
  // Warm kicker on the readout side.
  { size: [2.2, 4.5], position: [11, 3.0, -2], color: [1.0, 0.86, 0.72], intensity: 2.6 },
];

export interface StudioEnvironment {
  texture: THREE.Texture;
  dispose: () => void;
}

export function createStudioEnvironment(renderer: THREE.WebGLRenderer, sky?: THREE.Object3D): StudioEnvironment {
  const scene = new THREE.Scene();
  // The galaxy beyond the readout is part of what the metal and glass reflect.
  if (sky) scene.add(sky);
  scene.background = new THREE.Color(0.004, 0.004, 0.005);
  const soft = softboxTexture();
  const disposables: Array<{ dispose: () => void }> = [soft];

  for (const panel of STUDIO_PANELS) {
    const geometry = new THREE.PlaneGeometry(panel.size[0], panel.size[1]);
    const material = new THREE.MeshBasicMaterial({
      map: soft,
      color: new THREE.Color(
        panel.color[0] * panel.intensity,
        panel.color[1] * panel.intensity,
        panel.color[2] * panel.intensity,
      ),
      side: THREE.DoubleSide,
      toneMapped: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...panel.position);
    mesh.lookAt(0, 1.4, 0);
    scene.add(mesh);
    disposables.push(geometry, material);
  }

  const generator = new THREE.PMREMGenerator(renderer);
  const target = generator.fromScene(scene, 0.035, 0.1, 60);
  generator.dispose();
  for (const item of disposables) item.dispose();

  return { texture: target.texture, dispose: () => target.dispose() };
}
