import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ModelDonut } from "./donut";

export const ThreeWrapper = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight color="white" position={[10, 0, 10]} />
        <Environment preset="park" />
        <ModelDonut />
      </Canvas>
    </>
  );
};
