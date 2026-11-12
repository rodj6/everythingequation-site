/**
 * Materials of the instrument. One place for every surface, so the whole object
 * can be re-tuned without touching geometry.
 *
 * Naming follows what the part would be made of in a workshop: black anodised
 * aluminium for bodies, brass for adjusters and scales, steel for rods, optical
 * glass with an anti-reflection coating for the elements.
 */
import * as THREE from "three";
import {
  braidMaps,
  brushedMetalMaps,
  frostMaps,
  knurlNormalMap,
  woodMaps,
} from "./textures";
import type { QualitySettings } from "./config";

/** Base colours (sRGB hex). */
export const COLOR = {
  anodised: 0x16171a,
  anodisedSatin: 0x202226,
  brass: 0xb59355,
  brassDark: 0x8a6c3a,
  steel: 0xc9cdd1,
  bluedSteel: 0x1b1e25,
  blackPaint: 0x060607,
  table: 0x060607,
  cream: 0xe8dfc8,
} as const;

export interface MaterialKit {
  anodised: THREE.MeshPhysicalMaterial;
  anodisedSatin: THREE.MeshPhysicalMaterial;
  brass: THREE.MeshPhysicalMaterial;
  brassKnurled: THREE.MeshPhysicalMaterial;
  steel: THREE.MeshPhysicalMaterial;
  blade: THREE.MeshPhysicalMaterial;
  blackPaint: THREE.MeshStandardMaterial;
  glass: THREE.MeshPhysicalMaterial;
  glassBlock: THREE.MeshPhysicalMaterial;
  table: THREE.MeshStandardMaterial;
  wood: THREE.MeshPhysicalMaterial;
  cable: THREE.MeshStandardMaterial;
  rubber: THREE.MeshStandardMaterial;
  dispose: () => void;
}

export function createMaterials(quality: QualitySettings): MaterialKit {
  const brushed = brushedMetalMaps(3);
  const brushedFine = brushedMetalMaps(7);
  const frost = frostMaps(9);
  const knurl = knurlNormalMap();
  const braid = braidMaps();
  const wood = woodMaps();
  const textures: THREE.Texture[] = [
    wood.color, wood.roughness, wood.normal,
    brushed.roughness, brushed.normal, brushedFine.roughness, brushedFine.normal,
    frost.roughness, frost.normal, knurl, braid.roughness, braid.normal, braid.color,
  ];

  // Black anodised aluminium: dark, satin, with the faint circular grain of turning.
  const anodised = new THREE.MeshPhysicalMaterial({
    color: COLOR.anodised,
    metalness: 0.92,
    roughness: 1.0,
    roughnessMap: brushed.roughness,
    normalMap: brushed.normal,
    normalScale: new THREE.Vector2(0.18, 0.18),
    anisotropy: 0.55,
    envMapIntensity: 1.0,
  });
  anodised.roughnessMap!.repeat.set(1, 3);
  anodised.normalMap!.repeat.set(1, 3);

  const anodisedSatin = new THREE.MeshPhysicalMaterial({
    color: COLOR.anodisedSatin,
    metalness: 0.85,
    roughness: 0.72,
    roughnessMap: frost.roughness,
    normalMap: frost.normal,
    normalScale: new THREE.Vector2(0.12, 0.12),
    envMapIntensity: 0.9,
  });

  // Lacquered brass: warm, brighter than the body, slightly worn.
  const brass = new THREE.MeshPhysicalMaterial({
    color: COLOR.brass,
    metalness: 1,
    roughness: 0.72,
    roughnessMap: brushedFine.roughness,
    normalMap: brushedFine.normal,
    normalScale: new THREE.Vector2(0.14, 0.14),
    anisotropy: 0.45,
    clearcoat: 0.25,
    clearcoatRoughness: 0.3,
    envMapIntensity: 1.15,
  });

  const brassKnurled = new THREE.MeshPhysicalMaterial({
    color: COLOR.brass,
    metalness: 1,
    roughness: 0.56,
    normalMap: knurl,
    normalScale: new THREE.Vector2(0.9, 0.9),
    envMapIntensity: 1.15,
  });

  const steel = new THREE.MeshPhysicalMaterial({
    color: COLOR.steel,
    metalness: 1,
    roughness: 0.55,
    roughnessMap: brushedFine.roughness,
    anisotropy: 0.7,
    envMapIntensity: 1.2,
  });

  // Iris blades: thin blued spring steel.
  const blade = new THREE.MeshPhysicalMaterial({
    color: COLOR.bluedSteel,
    metalness: 1,
    roughness: 0.9,
    roughnessMap: brushedFine.roughness,
    envMapIntensity: 1.1,
    side: THREE.DoubleSide,
  });

  const blackPaint = new THREE.MeshStandardMaterial({
    color: COLOR.blackPaint,
    metalness: 0,
    roughness: 0.92,
  });

  // Coated optical glass. Transmission gives true refraction of what lies
  // behind; the thin-film term gives the violet/green cast of a lens coating.
  const glassBase: THREE.MeshPhysicalMaterialParameters = quality.transmission
    ? {
        color: 0xffffff,
        metalness: 0,
        roughness: 0.015,
        transmission: 1,
        // A dense flint glass: its surfaces reflect enough of the studio to read as glass.
        ior: 1.68,
        clearcoat: 1,
        clearcoatRoughness: 0.02,
        // Thin: lens elements bend the view only slightly, as real thin lenses do off-axis.
        thickness: 0.07,
        attenuationColor: new THREE.Color(0xd9efe4),
        attenuationDistance: 3.2,
        specularIntensity: 1,
        iridescence: 1,
        iridescenceIOR: 1.38,
        iridescenceThicknessRange: [260, 430],
        dispersion: 0.35,
        envMapIntensity: 2.4,
        // Glass does not write depth, so light drawn later (beam, dust, the
        // field pattern inside the cell) still shows through it.
        depthWrite: false,
      }
    : {
        // Without the refraction pass: a clear, strongly reflective shell.
        color: 0xdfeee8,
        metalness: 0,
        roughness: 0.03,
        transparent: true,
        opacity: 0.16,
        ior: 1.52,
        specularIntensity: 1,
        iridescence: 1,
        iridescenceIOR: 1.38,
        iridescenceThicknessRange: [260, 430],
        envMapIntensity: 2.2,
        depthWrite: false,
      };
  // Polished glass turns any small lamp into a pin-sharp glint that the bloom
  // then swells. Real lenses in a dim room show soft studio reflections instead,
  // so the mirror highlight of the scene's point lights is limited on glass.
  // A physically based highlight on a smooth surface can be thousands of times
  // brighter than its surroundings; one such pixel blooms into a flare. Direct
  // specular light is capped per material: low on glass, higher on metal.
  const limitGlints = <T extends THREE.MeshPhysicalMaterial>(material: T, limit = 0.55): T => {
    material.onBeforeCompile = (shader) => {
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <lights_fragment_end>",
        `#include <lights_fragment_end>\n  reflectedLight.directSpecular = min(reflectedLight.directSpecular, vec3(${limit.toFixed(2)}));`,
      );
    };
    material.customProgramCacheKey = () => `limited-glints-${limit.toFixed(2)}`;
    return material;
  };
  const glass = limitGlints(new THREE.MeshPhysicalMaterial(glassBase));
  const glassBlock = limitGlints(new THREE.MeshPhysicalMaterial({
    ...glassBase,
    ...(quality.transmission ? { thickness: 0.8, attenuationDistance: 4.5, dispersion: 0.5, iridescence: 0.35 } : { opacity: 0.2 }),
  }));

  // The bench stands on a dark table. Its own surface is nearly black and
  // matte; the gloss is added by the reflection layer (see reflection.ts).
  const table = new THREE.MeshStandardMaterial({
    color: COLOR.table,
    metalness: 0,
    roughness: 0.9,
    envMapIntensity: 0.04,
  });

  // French-polished dark hardwood for the screen frame.
  const woodMaterial = new THREE.MeshPhysicalMaterial({
    map: wood.color,
    roughnessMap: wood.roughness,
    normalMap: wood.normal,
    normalScale: new THREE.Vector2(0.25, 0.25),
    roughness: 0.9,
    metalness: 0,
    clearcoat: 0.7,
    clearcoatRoughness: 0.22,
    envMapIntensity: 1.0,
  });

  const cable = new THREE.MeshStandardMaterial({
    map: braid.color,
    roughnessMap: braid.roughness,
    normalMap: braid.normal,
    normalScale: new THREE.Vector2(1.2, 1.2),
    roughness: 0.95,
    metalness: 0,
  });

  const rubber = new THREE.MeshStandardMaterial({ color: 0x0b0b0c, roughness: 0.85, metalness: 0 });

  for (const metal of [brass, brassKnurled, steel, anodised, anodisedSatin]) limitGlints(metal, 1.55);
  const materials = [anodised, anodisedSatin, brass, brassKnurled, steel, blade, blackPaint, glass, glassBlock, table, woodMaterial, cable, rubber];
  return {
    anodised, anodisedSatin, brass, brassKnurled, steel, blade, blackPaint, glass, glassBlock, table, wood: woodMaterial, cable, rubber,
    dispose: () => {
      for (const m of materials) m.dispose();
      for (const t of textures) t.dispose();
    },
  };
}
