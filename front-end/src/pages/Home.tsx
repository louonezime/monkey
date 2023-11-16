import { Center, Text, VStack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { Canvas } from '@react-three/fiber'

import Box from './HomePage/Cubes'

const HomePage = () : ReactElement => {
    return (
        <Center mt="300px">
            <VStack spacing="10px">
                <Text fontSize='6xl' as='b'>type tier</Text>
                <Text fontSize='xl'>test your typing speed</Text>
            </VStack>
            <VStack spacing="32px">
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-2.0, 0, 0]} />
                <Box position={[0.0, 0, 0]} />
                <Box position={[2.0, 0, 0]} />
            </Canvas>
            </VStack>
        </Center>
    );
}

export default HomePage;