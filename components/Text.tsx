import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { useThree } from "@react-three/fiber";
import { useMemo } from "react";

type GLTFResult = GLTF & {
  nodes: {
    Plane006: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export const Text = () => {
  const { nodes, materials } = useGLTF("/text.glb") as unknown as GLTFResult;

  const { size } = useThree();
  const isMobile = useMemo(() => size.width < 600, [size.width]);

  return (
    <group
      scale={isMobile ? 40 : 70}
      rotation-y={-Math.PI * 0.5}
      dispose={null}
    >
      <mesh
        geometry={nodes.Plane006.geometry}
        material={materials["Material.001"]}
        position={[0, 0, 0]}
        rotation={[-0.83, 0, -Math.PI / 2]}
        material-emissiveIntensity={0}
        material-emissive={0}
      />
    </group>
  );
};

useGLTF.preload("/text.glb");
