import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('car', {
		color: 'red',
		year: 1950,
		engine: { cylinders: 8 },
		owner: null || '',
		service: undefined || ''
	});
	const car = await client.hGetAll('car');
	console.log(car);
	const car2 = await client.hGetAll('car#12212');
	console.log(car2);
	if (Object.keys(car2).length === 0) {
		console.log('Car not found, respond with 404');
	}
};
run();
