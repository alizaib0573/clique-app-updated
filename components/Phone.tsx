import * as THREE from "three";
import { Plane, useGLTF, useTexture } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { useEffect, useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useThree } from "@react-three/fiber";
import { Text } from "./Text";

type GLTFResult = GLTF & {
  nodes: {
    Cube010: THREE.Mesh;
    Cube010_1: THREE.Mesh;
    Cube010_2: THREE.Mesh;
    Cube010_3: THREE.Mesh;
    Cube010_4: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube003_1: THREE.Mesh;
    Cube003_2: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cylinder_1: THREE.Mesh;
    Cylinder_2: THREE.Mesh;
    Sphere004: THREE.Mesh;
    Sphere004_1: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cylinder002_1: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder001_1: THREE.Mesh;
    Cylinder001_2: THREE.Mesh;
    Lens001: THREE.Mesh;
    Cylinder010: THREE.Mesh;
    Cylinder010_1: THREE.Mesh;
    Cylinder009: THREE.Mesh;
    Cylinder009_1: THREE.Mesh;
    Cylinder009_2: THREE.Mesh;
    Lens002: THREE.Mesh;
    Cylinder011: THREE.Mesh;
    Cylinder011_1: THREE.Mesh;
    Sphere001: THREE.Mesh;
    Sphere001_1: THREE.Mesh;
    LED: THREE.Mesh;
    LIDAR: THREE.Mesh;
    Mic_mesh: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube004_1: THREE.Mesh;
    Cube004_2: THREE.Mesh;
    Screws: THREE.Mesh;
    Speaker_mesh: THREE.Mesh;
  };
  materials: {
    Aluminum: THREE.MeshStandardMaterial;
    ["Plastic antena"]: THREE.MeshStandardMaterial;
    ["Plastic USB port"]: THREE.MeshStandardMaterial;
    ["Camera filter"]: THREE.MeshStandardMaterial;
    LED: THREE.MeshStandardMaterial;
    ["Frosted glass"]: THREE.MeshStandardMaterial;
    ["Tint back glass"]: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
    Frame: THREE.MeshStandardMaterial;
    Lens: THREE.MeshStandardMaterial;
    ["Sapphire miror"]: THREE.MeshStandardMaterial;
    ["Mirror filter"]: THREE.MeshStandardMaterial;
    ["Plastic LED"]: THREE.MeshStandardMaterial;
    ["Metal Screw"]: THREE.MeshStandardMaterial;
    Display: THREE.MeshStandardMaterial;
  };
};

type Props = {
  containerRef: React.RefObject<HTMLElement | null>;
  mobileRef: React.RefObject<THREE.Group | null>;
  onReady: () => void;
};

export const Phone: React.FC<Props> = ({
  containerRef,
  mobileRef,
  onReady,
}) => {
  const { nodes, materials } = useGLTF("/phone.glb") as unknown as GLTFResult;

  const displayRef = useRef<THREE.Mesh>(null);

  const { size } = useThree();
  const isMobile = useMemo(() => size.width < 600, [size.width]);

  useEffect(() => {
    if (mobileRef.current) {
      onReady?.(); // ✅ Trigger parent once refs are ready
    }
  }, [mobileRef, onReady]);

  return (
    <group>
      <group
        ref={mobileRef}
        scale={isMobile ? 25 : 35}
        position={[0, -1.5, 0]}
        rotation={[Math.PI * 0.5, 0, -Math.PI * 0.5]}
        dispose={null}
      >
        <Plane
          position={[0, 0, -0.005]}
          rotation-y={Math.PI * 1}
          args={[0.045, 0.045]}
        >
          <meshStandardMaterial map={useTexture("/logo.png")} transparent />
        </Plane>
        {/* <mesh
          geometry={nodes.Cube004.geometry}
          material={materials.Glass}
          material-opacity={0.2}
        /> */}
        <mesh geometry={nodes.Cube004_1.geometry} material={materials.Frame} />
        {/* Mark the display for bloom */}

        <mesh
          ref={displayRef}
          geometry={nodes.Cube004_2.geometry}
          material={materials.Display}
          material-emissive={"#FF474C"}
          material-emissiveIntensity={2}
          material-color={"#000000"}
        />

        {/* Bloom only applies to selected meshes */}

        <mesh geometry={nodes.Cube010.geometry} material={materials.Aluminum} />
        <mesh
          geometry={nodes.Cube010_1.geometry}
          material={materials["Plastic antena"]}
        />
        <mesh
          geometry={nodes.Cube010_2.geometry}
          material={materials["Plastic USB port"]}
        />
        <mesh
          geometry={nodes.Cube010_3.geometry}
          material={materials["Camera filter"]}
        />
        <mesh geometry={nodes.Cube010_4.geometry} material={materials.LED} />
        <mesh
          geometry={nodes.LED.geometry}
          material={materials["Plastic LED"]}
        />
        <mesh geometry={nodes.LIDAR.geometry} material={materials.Frame} />
        <mesh
          geometry={nodes.Mic_mesh.geometry}
          material={materials["Metal Screw"]}
        />
        <mesh
          geometry={nodes.Screws.geometry}
          material={materials["Metal Screw"]}
        />
        <mesh
          geometry={nodes.Speaker_mesh.geometry}
          material={materials["Metal Screw"]}
        />
        <mesh
          geometry={nodes.Cube003.geometry}
          material={materials["Frosted glass"]}
        />
        <mesh
          geometry={nodes.Cube003_1.geometry}
          material={materials["Tint back glass"]}
        />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials.Glass} />
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={materials.Aluminum}
        />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Frame} />
        <mesh
          geometry={nodes.Cylinder_2.geometry}
          material={materials["Camera filter"]}
        />
        <mesh geometry={nodes.Sphere004.geometry} material={materials.Lens} />
        <mesh
          geometry={nodes.Sphere004_1.geometry}
          material={materials["Sapphire miror"]}
        />
        <mesh
          geometry={nodes.Cylinder002.geometry}
          material={materials["Sapphire miror"]}
        />
        <mesh
          geometry={nodes.Cylinder002_1.geometry}
          material={materials["Mirror filter"]}
        />
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={materials.Aluminum}
        />
        <mesh
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Frame}
        />
        <mesh
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Camera filter"]}
        />
        <mesh geometry={nodes.Lens001.geometry} material={materials.Lens} />
        <mesh
          geometry={nodes.Cylinder010.geometry}
          material={materials["Sapphire miror"]}
        />
        <mesh
          geometry={nodes.Cylinder010_1.geometry}
          material={materials["Mirror filter"]}
        />
        <mesh
          geometry={nodes.Cylinder009.geometry}
          material={materials.Aluminum}
        />
        <mesh
          geometry={nodes.Cylinder009_1.geometry}
          material={materials.Frame}
        />
        <mesh
          geometry={nodes.Cylinder009_2.geometry}
          material={materials["Camera filter"]}
        />
        <mesh geometry={nodes.Lens002.geometry} material={materials.Lens} />
        <mesh
          geometry={nodes.Cylinder011.geometry}
          material={materials["Sapphire miror"]}
        />
        <mesh
          geometry={nodes.Cylinder011_1.geometry}
          material={materials["Mirror filter"]}
        />
        <mesh geometry={nodes.Sphere001.geometry} material={materials.Lens} />
        <mesh
          geometry={nodes.Sphere001_1.geometry}
          material={materials["Camera filter"]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/phone.glb");
