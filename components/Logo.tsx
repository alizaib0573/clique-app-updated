import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { useThree } from "@react-three/fiber";
import { useMemo } from "react";

type GLTFResult = GLTF & {
  nodes: {
    Plane007: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export const Logo = () => {
  const { nodes, materials } = useGLTF("/logo.glb") as unknown as GLTFResult;

  const { size } = useThree();
  const isMobile = useMemo(() => size.width < 600, [size.width]);

  return (
    <group
      position={[isMobile ? -1.65 : -6.5, isMobile ? 3.3 : 3, 0]}
      scale={isMobile ? 30 : 40}
      rotation-y={-Math.PI * 0.5}
      dispose={null}
    >
      <mesh
        geometry={nodes.Plane007.geometry}
        material={materials["Material.001"]}
        position={[0, 0, 0]}
        rotation={[-0.83, 0, -Math.PI / 2]}
      />
    </group>
  );
};

useGLTF.preload("/logo.glb");
