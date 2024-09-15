import { Environment, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DonutElements } from "./donut-elements";

export const ThreeWrapper = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight color="white" position={[10, 0, 10]} />
        <Environment preset="park" />
        <ScrollControls pages={3}>
          <Scroll>
            <DonutElements />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
};
