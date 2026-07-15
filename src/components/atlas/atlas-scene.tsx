"use client";

import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import type { CSSProperties, RefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Line, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import {
  atlasEdges,
  atlasNodeMap,
  atlasNodes,
  type AtlasNode,
} from "@/data/reality-atlas";

interface AtlasSceneProps {
  selectedId: string;
  hoveredId: string | null;
  lod: number;
  traceIds: string[];
  focusNonce: number;
  reducedMotion: boolean;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
  onReady?: () => void;
  onUnavailable?: () => void;
}

const CAMERA_CONFIG = { position: [0, 4.5, 29] as [number, number, number], fov: 46, near: 0.1, far: 120 };
const GL_CONFIG = { antialias: true, alpha: false, powerPreference: "high-performance" as const };
const CANVAS_IDLE_STYLE: CSSProperties = { cursor: "grab", touchAction: "none" };
const CANVAS_HOVER_STYLE: CSSProperties = { cursor: "pointer", touchAction: "none" };

const nodeScale: Record<AtlasNode["kind"], number> = {
  stage: 0.48,
  operator: 0.28,
  route: 0.25,
  sector: 0.38,
  equation: 0.22,
  observable: 0.32,
  limit: 0.24,
  gate: 0.23,
};

function BackgroundParticles({ reducedMotion }: { reducedMotion: boolean }) {
  const points = useMemo(() => {
    const positions = new Float32Array(780 * 3);
    const colors = new Float32Array(780 * 3);
    const cyan = new THREE.Color("#74e9ff");
    const violet = new THREE.Color("#9c7cff");
    for (let i = 0; i < 780; i += 1) {
      const radius = 18 + Math.random() * 34;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi) + 3;
      const color = cyan.clone().lerp(violet, Math.random());
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return { positions, colors };
  }, []);

  const ref = useRef<THREE.Points | null>(null);
  useFrame((_, delta) => {
    if (!reducedMotion && ref.current) ref.current.rotation.y += delta * 0.0025;
  });

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points.positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[points.colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0.56}
        vertexColors
        depthWrite={false}
      />
    </points>
  );
}

function SourceCore({ active, reducedMotion }: { active: boolean; reducedMotion: boolean }) {
  const core = useRef<THREE.Group | null>(null);
  useFrame((state, delta) => {
    if (!core.current || reducedMotion) return;
    core.current.rotation.y += delta * 0.08;
    core.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.08;
  });

  return (
    <group ref={core} position={[0, 0, 0]}>
      <mesh>
        <icosahedronGeometry args={[1.02, 3]} />
        <meshBasicMaterial
          color="#b8f5ff"
          transparent
          opacity={active ? 0.2 : 0.12}
          wireframe
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.56, 40, 40]} />
        <meshBasicMaterial color="#8beeff" transparent opacity={active ? 0.34 : 0.2} />
      </mesh>
      <pointLight color="#78eaff" intensity={active ? 5 : 2.6} distance={12} />
    </group>
  );
}

function ArchitectureShells({
  selectedId,
  traceIds,
  reducedMotion,
}: {
  selectedId: string;
  traceIds: string[];
  reducedMotion: boolean;
}) {
  const aperture = useRef<THREE.Group | null>(null);
  const field = useRef<THREE.Group | null>(null);
  const active = useMemo(() => new Set(traceIds), [traceIds]);

  useFrame((_, delta) => {
    if (reducedMotion) return;
    if (aperture.current) {
      aperture.current.rotation.z += delta * 0.09;
      aperture.current.rotation.x += delta * 0.018;
    }
    if (field.current) field.current.rotation.z -= delta * 0.035;
  });

  return (
    <group>
      <SourceCore active={selectedId === "omega" || active.has("omega")} reducedMotion={reducedMotion} />

      <group position={[0, 0.15, 3.25]}>
        {[1.28, 1.58, 1.9].map((radius, index) => (
          <mesh key={radius} rotation={[index * 0.34, index * 0.28, index * 0.2]}>
            <icosahedronGeometry args={[radius, index === 2 ? 1 : 2]} />
            <meshBasicMaterial
              color="#71d9ff"
              transparent
              opacity={selectedId === "tier0-law" ? 0.26 - index * 0.045 : 0.11 - index * 0.018}
              wireframe
            />
          </mesh>
        ))}
      </group>

      <group ref={aperture} position={[0, 0, 6.2]} rotation={[0.9, 0.2, 0]}>
        {[2.2, 2.55, 2.92].map((radius, index) => (
          <mesh key={radius} rotation={[index * 0.5, index * 0.72, index * 0.4]}>
            <torusGeometry args={[radius, 0.025 + index * 0.008, 12, 128]} />
            <meshBasicMaterial
              color={index === 1 ? "#d0b3ff" : "#9f7dff"}
              transparent
              opacity={selectedId.startsWith("aperture") ? 0.55 : 0.22}
            />
          </mesh>
        ))}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.35, 1.7, 96]} />
          <meshBasicMaterial
            color="#ad8cff"
            transparent
            opacity={0.08}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      <group ref={field} position={[0, 0, 8.95]} rotation={[0.22, -0.1, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[3.45, 0.045, 14, 160, Math.PI]} />
          <meshBasicMaterial color="#70f0d0" transparent opacity={0.46} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, Math.PI, 0]}>
          <torusGeometry args={[3.45, 0.045, 14, 160, Math.PI]} />
          <meshBasicMaterial color="#37bfa8" transparent opacity={0.42} />
        </mesh>
        {[0.82, 1.3, 1.86].map((radius, index) => (
          <mesh key={radius} rotation={[index * 0.7, index * 0.4, 0]}>
            <torusGeometry args={[radius, 0.018, 8, 96]} />
            <meshBasicMaterial color="#62e6c5" transparent opacity={0.22} />
          </mesh>
        ))}
      </group>

      <group position={[0, 0, 11]}>
        <mesh>
          <sphereGeometry args={[12.5, 48, 28]} />
          <meshBasicMaterial color="#dcecff" transparent opacity={0.035} wireframe />
        </mesh>
        <mesh>
          <sphereGeometry args={[10.9, 48, 28]} />
          <meshBasicMaterial color="#7da7cf" transparent opacity={0.022} wireframe />
        </mesh>
      </group>
    </group>
  );
}

const AtlasNodeMesh = memo(function AtlasNodeMesh({
  node,
  selected,
  hovered,
  traced,
  reducedMotion,
  onSelect,
  onHover,
}: {
  node: AtlasNode;
  selected: boolean;
  hovered: boolean;
  traced: boolean;
  reducedMotion: boolean;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
}) {
  const group = useRef<THREE.Group | null>(null);
  const scale = nodeScale[node.kind] * (selected ? 1.32 : traced ? 1.16 : hovered ? 1.12 : 1);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reducedMotion) {
      group.current.rotation.y += delta * (node.kind === "stage" ? 0.11 : 0.04);
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.8 + node.position[0]) * 0.025;
      group.current.scale.setScalar(scale * pulse);
    } else {
      group.current.scale.setScalar(scale);
    }
  });

  const showLabel = selected || hovered || traced || node.kind === "stage" || node.lod <= 1;
  const geometry =
    node.kind === "sector" ? (
      <octahedronGeometry args={[1, 1]} />
    ) : node.kind === "observable" ? (
      <dodecahedronGeometry args={[1, 1]} />
    ) : node.kind === "limit" ? (
      <tetrahedronGeometry args={[1, 1]} />
    ) : node.kind === "stage" ? (
      <icosahedronGeometry args={[1, 2]} />
    ) : (
      <sphereGeometry args={[1, 24, 24]} />
    );

  return (
    <group position={node.position}>
      <group ref={group}>
        <mesh
          onClick={(event) => {
            event.stopPropagation();
            onSelect(node.id);
          }}
          onPointerOver={(event) => {
            event.stopPropagation();
            onHover(node.id);
          }}
          onPointerOut={() => {
            onHover(null);
          }}
        >
          {geometry}
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={selected ? 2.4 : traced ? 1.45 : hovered ? 1.1 : 0.42}
            roughness={0.2}
            metalness={0.28}
            transparent
            opacity={selected ? 1 : 0.82}
          />
        </mesh>
        <mesh scale={1.65}>
          <sphereGeometry args={[1, 20, 20]} />
          <meshBasicMaterial
            color={node.color}
            transparent
            opacity={selected ? 0.09 : traced ? 0.06 : 0.018}
            depthWrite={false}
          />
        </mesh>
      </group>

      {showLabel ? (
        <Html
          center
          sprite
          distanceFactor={11}
          position={[0, node.kind === "stage" ? 0.78 : 0.54, 0]}
          zIndexRange={[35, 0]}
        >
          <button
            type="button"
            className={`atlas-node-label ${selected ? "is-selected" : ""} ${traced ? "is-traced" : ""}`}
            style={{ "--node-color": node.color } as CSSProperties}
            onClick={(event) => {
              event.stopPropagation();
              onSelect(node.id);
            }}
          >
            <span>{node.shortLabel}</span>
            {selected ? <small>{node.eyebrow}</small> : null}
          </button>
        </Html>
      ) : null}
    </group>
  );
});

const ArchitectureEdges = memo(function ArchitectureEdges({
  visibleIds,
  selectedId,
  selectedColor,
}: {
  visibleIds: Set<string>;
  selectedId: string;
  selectedColor: string;
}) {
  return atlasEdges.map((edgeItem) => {
    if (!visibleIds.has(edgeItem.from) || !visibleIds.has(edgeItem.to)) return null;
    const from = atlasNodeMap.get(edgeItem.from);
    const to = atlasNodeMap.get(edgeItem.to);
    if (!from || !to) return null;
    const adjacent = edgeItem.from === selectedId || edgeItem.to === selectedId;
    const color = adjacent ? selectedColor : "#6280a0";
    return (
      <Line
        key={edgeItem.id}
        points={[from.position, to.position]}
        color={color}
        lineWidth={adjacent ? 1.35 : 0.5}
        transparent
        opacity={adjacent ? 0.56 : 0.12}
        dashed
        dashScale={6}
        dashSize={0.28}
        gapSize={0.2}
      />
    );
  });
});

const TracePath = memo(function TracePath({ traceIds }: { traceIds: string[] }) {
  return traceIds.slice(1).map((id, index) => {
    const from = atlasNodeMap.get(traceIds[index]);
    const to = atlasNodeMap.get(id);
    if (!from || !to) return null;
    return (
      <Line
        key={`${from.id}--${to.id}--trace`}
        points={[from.position, to.position]}
        color="#ffe08a"
        lineWidth={2}
        transparent
        opacity={0.9}
      />
    );
  });
});

function CameraRig({
  selected,
  focusNonce,
  controls,
  reducedMotion,
}: {
  selected: AtlasNode;
  focusNonce: number;
  controls: RefObject<OrbitControlsImpl | null>;
  reducedMotion: boolean;
}) {
  const { camera, invalidate } = useThree();
  const desiredPosition = useRef(new THREE.Vector3(0, 4.5, 29));
  const desiredTarget = useRef(new THREE.Vector3(0, 0, 6.2));
  const moving = useRef(false);

  useEffect(() => {
    if (focusNonce === 0) return;
    const target = new THREE.Vector3(...selected.position);
    const distance = selected.cameraDistance ?? (selected.kind === "stage" ? 7.5 : 4.8);
    const lateral = Math.abs(selected.position[0]) > 8 ? Math.sign(selected.position[0]) * 0.8 : 0;
    desiredTarget.current.copy(target);
    desiredPosition.current.set(
      target.x + lateral,
      target.y + Math.max(1.2, distance * 0.22),
      target.z + distance,
    );
    moving.current = true;
    invalidate();
  }, [focusNonce, invalidate, selected]);

  useFrame((_, delta) => {
    if (!moving.current) return;
    const alpha = reducedMotion ? 1 : 1 - Math.exp(-delta * 3.4);
    camera.position.lerp(desiredPosition.current, alpha);
    if (controls.current) {
      controls.current.target.lerp(desiredTarget.current, alpha);
      controls.current.update();
    }
    if (
      camera.position.distanceTo(desiredPosition.current) < 0.025 &&
      (!controls.current || controls.current.target.distanceTo(desiredTarget.current) < 0.025)
    ) {
      moving.current = false;
    } else if (reducedMotion) {
      invalidate();
    }
  });

  return null;
}

function SceneContents({
  selectedId,
  hoveredId,
  lod,
  traceIds,
  focusNonce,
  reducedMotion,
  onSelect,
  onHover,
}: AtlasSceneProps) {
  const selected = atlasNodeMap.get(selectedId) ?? atlasNodes[0];
  const controls = useRef<OrbitControlsImpl | null>(null);
  const { invalidate } = useThree();
  const requestFrame = useCallback(() => invalidate(), [invalidate]);
  const traceSet = useMemo(() => new Set(traceIds), [traceIds]);
  const visibleNodes = useMemo(
    () =>
      atlasNodes.filter(
        (node) =>
          node.lod <= lod ||
          node.id === selectedId ||
          traceSet.has(node.id) ||
          node.kind === "stage",
      ),
    [lod, selectedId, traceSet],
  );
  const visibleIds = useMemo(() => new Set(visibleNodes.map((node) => node.id)), [visibleNodes]);

  return (
    <>
      <color attach="background" args={["#030711"]} />
      <fog attach="fog" args={["#030711", 26, 62]} />
      <ambientLight intensity={0.45} />
      <directionalLight color="#b7eaff" position={[8, 12, 20]} intensity={1.8} />
      <directionalLight color="#b08cff" position={[-12, -4, 14]} intensity={1.1} />
      <BackgroundParticles reducedMotion={reducedMotion} />
      <ArchitectureShells selectedId={selectedId} traceIds={traceIds} reducedMotion={reducedMotion} />

      <ArchitectureEdges
        visibleIds={visibleIds}
        selectedId={selectedId}
        selectedColor={selected.color}
      />
      <TracePath traceIds={traceIds} />

      {visibleNodes.map((node) => (
        <AtlasNodeMesh
          key={node.id}
          node={node}
          selected={node.id === selectedId}
          hovered={node.id === hoveredId}
          traced={traceSet.has(node.id)}
          reducedMotion={reducedMotion}
          onSelect={onSelect}
          onHover={onHover}
        />
      ))}

      <OrbitControls
        ref={controls}
        makeDefault
        enableDamping={!reducedMotion}
        dampingFactor={0.055}
        rotateSpeed={0.42}
        zoomSpeed={0.72}
        panSpeed={0.6}
        minDistance={2.1}
        maxDistance={46}
        minPolarAngle={0.18}
        maxPolarAngle={Math.PI - 0.18}
        onChange={requestFrame}
      />
      <CameraRig
        selected={selected}
        focusNonce={focusNonce}
        controls={controls}
        reducedMotion={reducedMotion}
      />
    </>
  );
}

function SceneLifecycle({
  onReady,
  onUnavailable,
}: Pick<AtlasSceneProps, "onReady" | "onUnavailable">) {
  const { gl } = useThree();
  const ready = useRef(false);

  useFrame(() => {
    if (ready.current) return;
    ready.current = true;
    onReady?.();
  });

  useEffect(() => {
    const canvas = gl.domElement;
    const handleContextLoss = (event: Event) => {
      event.preventDefault();
      onUnavailable?.();
    };
    canvas.addEventListener("webglcontextlost", handleContextLoss, false);
    return () => canvas.removeEventListener("webglcontextlost", handleContextLoss, false);
  }, [gl, onUnavailable]);

  return null;
}

export default function AtlasScene(props: AtlasSceneProps) {
  return (
    <Canvas
      className="atlas-canvas"
      dpr={[1, 1.6]}
      camera={CAMERA_CONFIG}
      gl={GL_CONFIG}
      frameloop={props.reducedMotion ? "demand" : "always"}
      style={props.hoveredId ? CANVAS_HOVER_STYLE : CANVAS_IDLE_STYLE}
      onPointerMissed={() => props.onHover(null)}
    >
      <SceneLifecycle onReady={props.onReady} onUnavailable={props.onUnavailable} />
      <SceneContents {...props} />
    </Canvas>
  );
}
