import { Center, Input, Text, Stack } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';

const Start = () : ReactElement => {
    const [text, setText] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <Center mt="400px">
            <Stack spacing={3}>
                <Text align='center' fontSize='xl'>{text}</Text>
                <Input variant='flushed' focusBorderColor='darkred' onChange={handleInputChange} value={text}/>
            </Stack>
        </Center>
    );
}

export default Start;