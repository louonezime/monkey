import { useRef, useState, ReactElement } from 'react';

import * as THREE from 'three';
import { useFrame, ThreeElements, Canvas } from '@react-three/fiber';

const Box = (props: ThreeElements['mesh']) => {
  const ref = useRef<THREE.Mesh>(null!);

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.x += delta));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.3 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>

      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'red' : 'black'} />
    </mesh>
  );
};

const ThreeDots = () : ReactElement => {
  return (
      <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-2.0, 0, 0]} />
          <Box position={[0.0, 0, 0]} />
          <Box position={[2.0, 0, 0]} />
      </Canvas>
  );
}

export default ThreeDots;
