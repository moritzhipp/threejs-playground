import modelDonut from "@models/donut.glb";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

export const Donut = ({ innerRef, ...props }) => {
  const scene: Group = useGLTF(modelDonut).scene;

  return <primitive object={scene} scale={0.2} {...props} ref={innerRef} />;
};
