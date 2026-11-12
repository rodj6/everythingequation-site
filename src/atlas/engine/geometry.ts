/**
 * Geometry helpers for machined parts. Real instruments are full of small
 * chamfers; they are what catch the light. These helpers make it cheap to give
 * every edge one.
 */
import * as THREE from "three";

export interface ProfilePoint {
  /** Position along the turning axis. */
  x: number;
  /** Radius at that position. */
  r: number;
  /** Size of the chamfer cut at this corner (0 = sharp). */
  bevel?: number;
}

/**
 * Turn a profile around the X axis (like a lathe). Corners with `bevel` are
 * replaced by a small chamfer. Each flat gets a guard point next to its
 * chamfers so smooth shading stays inside the chamfer and flats stay flat.
 */
export function turned(profile: ProfilePoint[], segments = 96, closed = false): THREE.BufferGeometry {
  const guard = 0.004;
  const out: THREE.Vector2[] = [];
  const count = profile.length;
  const push = (r: number, x: number) => {
    const last = out[out.length - 1];
    if (last && Math.abs(last.x - r) < 1e-6 && Math.abs(last.y - x) < 1e-6) return;
    out.push(new THREE.Vector2(Math.max(r, 0), x));
  };
  for (let i = 0; i < count; i++) {
    const current = profile[i];
    const previous = profile[i - 1] ?? (closed ? profile[count - 1] : undefined);
    const next = profile[i + 1] ?? (closed ? profile[0] : undefined);
    const bevel = current.bevel ?? 0;
    if (!previous || !next || bevel <= 0) {
      push(current.r, current.x);
      continue;
    }
    const inDir = new THREE.Vector2(current.x - previous.x, current.r - previous.r);
    const outDir = new THREE.Vector2(next.x - current.x, next.r - current.r);
    const inLen = inDir.length();
    const outLen = outDir.length();
    if (inLen < 1e-6 || outLen < 1e-6) {
      push(current.r, current.x);
      continue;
    }
    inDir.divideScalar(inLen);
    outDir.divideScalar(outLen);
    const cut = Math.min(bevel, inLen * 0.45, outLen * 0.45);
    const g = Math.min(guard, cut * 0.5);
    // guard point, chamfer start, chamfer end, guard point
    push(current.r - inDir.y * (cut + g), current.x - inDir.x * (cut + g));
    push(current.r - inDir.y * cut, current.x - inDir.x * cut);
    push(current.r + outDir.y * cut, current.x + outDir.x * cut);
    push(current.r + outDir.y * (cut + g), current.x + outDir.x * (cut + g));
  }
  if (closed && out.length) out.push(out[0].clone());
  const geometry = new THREE.LatheGeometry(out, segments);
  // LatheGeometry turns around +Y; lay it along +X so "x" in the profile is the optical axis.
  geometry.rotateZ(-Math.PI / 2);
  // Explicit tangents (around the circumference). Without them the brushed
  // highlight is derived per triangle and shows the facets as spokes.
  const position = geometry.attributes.position;
  const tangents = new Float32Array(position.count * 4);
  for (let i = 0; i < position.count; i++) {
    const y = position.getY(i);
    const z = position.getZ(i);
    const r = Math.hypot(y, z);
    tangents[i * 4] = 0;
    tangents[i * 4 + 1] = r > 1e-6 ? -z / r : 0;
    tangents[i * 4 + 2] = r > 1e-6 ? y / r : 1;
    tangents[i * 4 + 3] = 1;
  }
  geometry.setAttribute("tangent", new THREE.BufferAttribute(tangents, 4));
  return geometry;
}

/** A plain disc facing +X (used for lens faces, windows and plates). */
export function discX(radius: number, segments = 64): THREE.BufferGeometry {
  const geometry = new THREE.CircleGeometry(radius, segments);
  geometry.rotateY(Math.PI / 2);
  return geometry;
}

/**
 * Extrude a cross-section along X. `section` is given as [z, y] pairs, wound
 * counter-clockwise when looking from +X.
 */
export function extrudedAlongX(section: Array<[number, number]>, length: number, bevel = 0.008): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  section.forEach(([z, y], index) => {
    if (index === 0) shape.moveTo(-z, y);
    else shape.lineTo(-z, y);
  });
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: length - bevel * 2,
    bevelEnabled: bevel > 0,
    bevelSize: bevel,
    bevelThickness: bevel,
    bevelSegments: 2,
    steps: 1,
    curveSegments: 4,
  });
  // Extrusion runs along +Z in shape space; turn it to run along +X and centre it.
  geometry.rotateY(Math.PI / 2);
  geometry.translate(-(length - bevel * 2) / 2, 0, 0);
  return geometry;
}

/** Biconvex or plano-convex lens body: two spherical caps joined by a short cylinder edge. */
export function lensProfile(radius: number, edgeThickness: number, frontBulge: number, backBulge: number, steps = 18): ProfilePoint[] {
  const points: ProfilePoint[] = [];
  const cap = (bulge: number, sign: 1 | -1) => {
    // Spherical cap of sagitta `bulge` over aperture `radius`.
    const list: ProfilePoint[] = [];
    if (bulge <= 1e-5) {
      list.push({ x: sign * edgeThickness * 0.5, r: 0 });
      list.push({ x: sign * edgeThickness * 0.5, r: radius });
      return list;
    }
    const sphere = (radius * radius + bulge * bulge) / (2 * bulge);
    for (let i = 0; i <= steps; i++) {
      const r = (radius * i) / steps;
      const sag = sphere - Math.sqrt(Math.max(sphere * sphere - r * r, 0));
      list.push({ x: sign * (edgeThickness * 0.5 + bulge - sag), r });
    }
    return list;
  };
  const back = cap(backBulge, -1);
  const front = cap(frontBulge, 1).reverse();
  for (const p of back) points.push(p);
  for (const p of front) points.push(p);
  return points;
}
