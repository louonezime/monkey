import { Center, Text, VStack, Button } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';

import { Canvas } from '@react-three/fiber';

import Box from './HomePage/Cubes';
import { useNavigate } from 'react-router-dom';

const HomePage = () : ReactElement => {
    const navigate = useNavigate();
    const [hovered, hover] = useState(false);

    const navigateToGame = () => {
        navigate('/start');
    };

    return (
        <Center mt="300px">
            <VStack spacing="1px">
                <Text
                    onMouseEnter={() => hover(true)}
                    onMouseLeave={() => hover(false)}
                    color={hovered ? 'darkred' : 'black'}
                    fontSize='6xl' as='b'>
                        type tier</Text>
                <Button onClick={navigateToGame} variant='link' fontSize='xl' color='darkred'>
                    test your typing speed
                </Button>
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