import modelApe from "@models/ape.glb";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export const ModelApe = () => {
  const gltf: Group = useGLTF(modelApe).scene;

  useFrame((state) => {
    gltf.lookAt(state.pointer.x, state.pointer.y, 1);
  });

  return <primitive object={gltf} scale={0.3} />;
};
