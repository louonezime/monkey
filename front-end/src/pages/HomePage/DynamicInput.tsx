import React, { useState } from 'react';
import { ThreeElements } from '@react-three/fiber';
import { Html, Text } from '@react-three/drei';

import { ControlledInput } from './ControlledInput';

const DynamicInput = (props: ThreeElements['group']) => {
    const [text, setText] = useState('hello world...');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <group {...props}>
            <Text position={[-1.2, -0.022, 0]} anchorX={0} font="/Inter-Regular.woff" fontSize={0.335} letterSpacing={-0.0}>
                {text}
                <meshStandardMaterial color="black" />
            </Text>

            <mesh position={[0, -0.022, 0]} scale={[2.5, 0.48, 1]}>
                <planeGeometry />
                <meshBasicMaterial transparent opacity={0.3} depthWrite={false} />
            </mesh>

            <Html transform>
                <ControlledInput type="text" onChange={handleInputChange} value={text} />
            </Html>
        </group>
    );
};

export default DynamicInput;
