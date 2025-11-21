import { Environment, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Phone } from "./Phone";
import { Group } from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

type Props = {
  containerRef: React.RefObject<HTMLElement | null>;
  mobileRef: React.RefObject<Group | null>;
  onReady: () => void;
};

const Render: React.FC<Props> = ({ containerRef, mobileRef, onReady }) => {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas>
        <Environment environmentIntensity={0.6} files={"/env.hdr"} />
        <Suspense fallback={null}>
          <Phone
            containerRef={containerRef}
            mobileRef={mobileRef}
            onReady={onReady}
          />
        </Suspense>
        <EffectComposer
          multisampling={0}
          resolutionScale={0.5}
          autoClear={false}
        >
          <Bloom mipmapBlur intensity={0.8} luminanceThreshold={0.2} />
        </EffectComposer>
      </Canvas>
      <Loader />
    </div>
  );
};

export default Render;
