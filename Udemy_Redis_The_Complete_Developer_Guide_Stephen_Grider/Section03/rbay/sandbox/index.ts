import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('car1', {
		color: 'red',
		year: 1950
		// engine: { cylinders: 8 },
		// owner: null || '',
		// service: undefined || ''
	});
	await client.hSet('car2', {
		color: 'green',
		year: 1955
	});
	await client.hSet('car3', {
		color: 'maroon',
		year: 1960
	});

	const commands = [1, 2, 3].map((id) => client.hGetAll(`car${id}`));
	const results = await Promise.all(
		commands
		// [
		// client.hGetAll('car1'),
		// client.hGetAll('car2'),
		// client.hGetAll('car3')
		// ]
	);
	console.log(results);

	// const car = await client.hGetAll('car');
	// console.log(car);
	// const car2 = await client.hGetAll('car#12212');
	// console.log(car2);
	// if (Object.keys(car2).length === 0) {
	// 	console.log('Car not found, respond with 404');
	// }
};
run();
