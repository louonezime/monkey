import { Center, Text, VStack, HStack, Button } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';

import { Canvas } from '@react-three/fiber';

import Box from './HomePage/Cubes';
import { useNavigate } from 'react-router-dom';

const Title = () : ReactElement => {
    const [hovered, hover] = useState(false);
    const navigate = useNavigate();

    const navigateToGame = () => {
        navigate('/start');
    };

    return (
        <VStack spacing="1px">
            <Text
                onMouseEnter={() => hover(true)}
                onMouseLeave={() => hover(false)}
                color={hovered ? 'darkred' : 'black'}
                fontSize='6xl' as='b'>
                    type tier</Text>
            <Button onClick={(navigateToGame)} variant='link' fontSize='xl' color='darkred'>
                test your typing speed
            </Button>
        </VStack>
    );
}

const HomePage = () : ReactElement => {
    return (
        <Center mt="220px">
            <HStack spacing='1px'>
                <VStack spacing='1px'>
                <Title />
                    <Canvas>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Box position={[-2.0, 0, 0]} />
                        <Box position={[0.0, 0, 0]} />
                        <Box position={[2.0, 0, 0]} />
                    </Canvas>
                </VStack>
            </HStack>
        </Center>
    );
}

export default HomePage;