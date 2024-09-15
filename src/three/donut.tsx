import modelDonut from "@models/donut.glb";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group, Vector3 } from "three";

export const ModelDonut = () => {
  const scene: Group = useGLTF(modelDonut).scene;
  const scroll = useScroll();

  useFrame((state) => {
    scene.rotateOnAxis(new Vector3(0, 1, 0), 0.01);
  });

  return <primitive object={scene} scale={0.3} />;
};
