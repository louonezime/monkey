import { Center, Text, VStack, Button, HStack } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ThreeDots from './assets/Cubes';

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
            <HStack>
                <Title />
                <VStack spacing='1'>
                    <ThreeDots />
                </VStack>
            </HStack>
        </Center>
    );
}

export default HomePage;