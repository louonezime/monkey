import { VStack, Center, Input, Text, Stack, Button, Progress } from '@chakra-ui/react';
import { ReactElement, useState, useRef, useEffect,  } from 'react';
import { MdOutlineRestartAlt } from "react-icons/md";

import * as txtgen from 'txtgen';

import ThreeDots from './assets/Cubes';

const InputStart = (): ReactElement => {
    const [text, setText] = useState('');
    const [generatedText, setGeneratedText] = useState('');
    const [startTime, setStartTime] = useState<number | null>(null);
    const [feedback, setFeedback] = useState<string>('');
    const [progress, setProgress] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        startGame();
    }, []);

    const startGame = () => {
        const newGeneratedText = txtgen.sentence();
        setGeneratedText(newGeneratedText);
        setText('');
        setStartTime(Date.now());
        setFeedback('');
        setProgress(0);
        inputRef.current?.focus();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);

        if (e.target.value === generatedText) {
            const endTime = Date.now();
            const elapsedTime = (endTime - startTime!) / 1000; // in seconds
            const wordsPerMinute = (generatedText.split(' ').length / elapsedTime) * 60;

            setFeedback(`Typing Speed: ${wordsPerMinute.toFixed(2)} words per minute`);
            startGame();
        } else {
            const correctCharacters =
                generatedText.split('').filter((char, index) => char === text[index]);
            const accuracy = (correctCharacters.length / generatedText.length) * 100;
            setProgress(accuracy);
        }
    };

    return (
        <Stack spacing={5} align="center">
            <Text align="center" fontSize="xl">
            {generatedText.split('').map((char, index) => (
                <span
                    key={index}
                    style={{ color: text[index] === char ? 'black' : 'gray' }}>
                {char}
                </span>
            ))}
            </Text>
            <Input
                ref={inputRef}
                variant="flushed"
                focusBorderColor="darkred"
                onChange={handleInputChange}
                value={text}
                />
            <Progress value={progress} />
            <Text>{feedback}</Text>
            <Button
                leftIcon={<MdOutlineRestartAlt />}
                variant='link'
                fontSize='xl'
                color='darkred'
                onClick={startGame}>
                Start Typing
            </Button>
        </Stack>
    );
};

const Start = (): ReactElement => {
    return (
        <Center mt="220px">
            <VStack>
                <ThreeDots />
                <InputStart />
            </VStack>
        </Center>
    );
};

export default Start;
