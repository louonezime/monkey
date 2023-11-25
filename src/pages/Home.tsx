import { Center, Text, VStack, Button } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';

import { Canvas } from '@react-three/fiber';

import Box from './HomePage/Cubes';
import { useNavigate } from 'react-router-dom';

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

const Title = () : ReactElement => {
    const [hovered, hover] = useState(false);
    const navigate = useNavigate();

    const navigateToGame = () => {
        navigate('/start');
    };

    return (
        <VStack spacing='1'>
            <Text
                onMouseEnter={() => hover(true)}
                onMouseLeave={() => hover(false)}
                color={hovered ? 'darkred' : 'black'}
                fontSize='6xl'>
                type tier
            </Text>
            <Button
                onClick={(navigateToGame)}
                variant='link'
                fontSize='l'
                color='darkred'>
                test your typing speed
            </Button>
        </VStack>
    );
}

const HomePage = () : ReactElement => {

    return (
        <Center mt="220px">
            <Title />
            <VStack spacing='1'>
                <ThreeDots />
            </VStack>
        </Center>
    );
}

export default HomePage;