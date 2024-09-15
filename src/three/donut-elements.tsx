import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group, Object3DEventMap } from "three";
import { Donut } from "./donut";
import { Icing } from "./icing";

export const DonutElements = () => {
  const icingRef = useRef<Group<Object3DEventMap>>();
  const donutRef = useRef<Group<Object3DEventMap>>();

  const scroll = useScroll();
  useFrame((state, delta) => {
    donutRef.current.rotation.x = scroll.offset * Math.PI * 2;
    donutRef.current?.scale.setScalar(0.2);
    icingRef.current.rotation.y = scroll.offset;
  });

  return (
    <>
      <Donut innerRef={donutRef} />
      <Icing innerRef={icingRef} />
    </>
  );
};
