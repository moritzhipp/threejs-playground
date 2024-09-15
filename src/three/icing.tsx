import icing from "@models/icing.glb";
import { useGLTF } from "@react-three/drei";
import { Children, useState } from "react";
import { Euler, Vector3 } from "three";
import { randomInt, randomPositionInCylinder, randomRadian } from "./utils";

export function Icing({ innerRef, ...props }) {
  const [cylinders] = useState(
    Children.map(new Array(200), () => SingleCylinder(new Vector3(0, 0, 0)))
  );

  return (
    <group dispose={null} ref={innerRef}>
      {cylinders}
    </group>
  );
}

const SingleCylinder = (position: Vector3) => {
  const { nodes, materials } = useGLTF(icing);

  const randomGeomatryName = [
    "Cylinder",
    "Cylinder001",
    "Cylinder002",
    "Cylinder003",
  ][randomInt(0, 3)];

  const randomPosition = randomPositionInCylinder(8, 10);
  const randomRotation = new Euler(
    randomRadian(),
    randomRadian(),
    randomRadian()
  );

  return (
    <mesh
      geometry={nodes[randomGeomatryName].geometry}
      position={randomPosition}
      material={materials.Sprinkles}
      rotation={randomRotation}
      scale={20.52}
    />
  );
};
