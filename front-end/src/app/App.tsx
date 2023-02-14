import { Center, Text, VStack } from '@chakra-ui/react';

const App = (): JSX.Element => (
	<Center mt="160px">
		<VStack spacing="32px">
			<Text fontSize='6xl' as='b'>type tier</Text>
			<Text fontSize='xl' as='i'>test your typing speed</Text>
		</VStack>
	</Center>
);

export default App;