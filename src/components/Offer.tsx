import { Button, Flex, Rating, Text, Title } from '@mantine/core';
import { useState } from 'react';

interface OfferProps {
	shop: string;
	price: number;
	shopUrl: string;
	delivery: number;
	key: number;
}

export function Offer({ shop, price, shopUrl, delivery }: OfferProps) {
	const [starValue, setStarValue] = useState(0);

	return (
		<>
			<Flex
				justify={'space-between'}
				w={'25rem'}
				p={'xs'}
				bg={'whitesmoke'}
				my={'sm'}
			>
				<Flex direction={'column'}>
					<Title order={5}>{shop}</Title>
					{delivery > 0 ? (
						<Text size={'xs'} color={'red'}>
							Delivery: ${delivery}
						</Text>
					) : (
						<Text size={'xs'} color={'green'}>
							Free delivery
						</Text>
					)}
					<Rating mt={'sm'} value={starValue} onChange={setStarValue} />
				</Flex>
				<Button w={'6rem'} component="a" href={shopUrl}>
					${price}
				</Button>
			</Flex>
		</>
	);
}
