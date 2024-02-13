import { Button, Flex, Text, Title } from '@mantine/core';
import { IconHeart, IconThumbDown, IconThumbUp } from '@tabler/icons-react';
import { MouseEventHandler, useState } from 'react';

interface MovieProps {
	name: string;
	description: string;
	onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

export function Movie({ name, description, onClick }: MovieProps) {
	const [likeValue, setLikeValue] = useState(0);
	const [hiddenValueOnLike, setHiddenValueOnLike] = useState('');
	const [hiddenValueOnDislike, setHiddenValueOnDislike] = useState('');

	return (
		<>
			<Flex
				justify={'space-between'}
				p={'xs'}
				bg={'whitesmoke'}
				my={'sm'}
				w={'35rem'}
			>
				<Flex direction={'column'}>
					<Title order={5}>{name}</Title>
					<Text>{description}</Text>
					<Text>LIKES: {likeValue}</Text>
					<Flex gap={'sm'}>
						<Button
							leftSection={<IconThumbUp />}
							onClick={() => setLikeValue(likeValue + 1)}
							onMouseOver={() => setHiddenValueOnLike(likeValue.toString())}
							onMouseLeave={() => setHiddenValueOnLike('')}
						>
							Like {hiddenValueOnLike}
						</Button>
						<Button
							leftSection={<IconThumbDown />}
							onClick={() => setLikeValue(likeValue - 1)}
							onMouseOver={() => setHiddenValueOnDislike(likeValue.toString())}
							onMouseLeave={() => setHiddenValueOnDislike('')}
						>
							Dislike {hiddenValueOnDislike}
						</Button>
						<Button leftSection={<IconHeart />} onClick={onClick}>
							Add to favorites
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}
