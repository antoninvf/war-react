import { Box, Flex, Rating, Text, TextInput, Title } from '@mantine/core';
import { useState } from 'react';
import { Movie } from './components/Movie';
import { IconHeartFilled } from '@tabler/icons-react';

function App() {
	const data = [
		{
			name: 'Smith-Brown',
			description: 'amazing movie',
		},
		{
			name: 'Parks-Williams',
			description: 'amazing movie',
		},
		{
			name: 'Cook-Cline',
			description: 'amazing movie',
		},
		{
			name: 'Brown, Jennings and Yoder',
			description: 'amazing movie',
		},
		{
			name: 'Rice LLC',
			description: 'amazing movie',
		},
		{
			name: 'Burke Group',
			description: 'amazing movie',
		},
		{
			name: 'Murphy Inc',
			description: 'amazing movie',
		},
		{
			name: 'Lopez-Edwards',
			description: 'amazing movie',
		},
		{
			name: 'Salas, Harris and Martin',
			description: 'amazing movie',
		},
		{
			name: 'Andrews and Sons',
			description: 'amazing movie',
		},
	];

	const favlist: string[] = [];

	const [value, setValue] = useState('');
	const [starValue, setStarValue] = useState(0);
	const [favorites, setFavorites] = useState(favlist);

	return (
		<>
			<Flex
				w={'100%'}
				align={'center'}
				p={'lg'}
				gap={'lg'}
				direction={'column'}
			>
				<Box>
					<Title>I LOVE FEET 🦶🦶🦶</Title>
					<Text>
						<IconHeartFilled /> {[...new Set(favorites)].length}
					</Text>
					{data.map((movie, index) => (
						<Movie
							name={movie.name}
							description={movie.description}
							onClick={() => setFavorites((prev) => [...prev, movie.name])}
							key={index}
						/>
					))}
				</Box>
				<Flex gap={'sm'}>
					<img src="kubik.gif" width={'250px'} height={'320px'} alt="" />
					<Flex direction={'column'}>
						<Title>Jakub Tesař</Title>
						<Text>
							Sex slave, stupid dumb ass, buy him to code stuff for you
						</Text>
						<TextInput
							value={value}
							onChange={(event) => setValue(event.currentTarget.value)}
						/>
						<Text>{value.length}</Text>
						<Rating size="xl" value={starValue} onChange={setStarValue} />
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}

export default App;
