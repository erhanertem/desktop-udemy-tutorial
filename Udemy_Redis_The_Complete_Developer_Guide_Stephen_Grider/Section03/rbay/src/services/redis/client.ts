import { createClient, defineScript } from 'redis';

const client = createClient({
	socket: {
		host: process.env.REDIS_HOST,
		port: parseInt(process.env.REDIS_PORT)
	},
	password: process.env.REDIS_PW,
	scripts: {
		// Step#1. Adds additional methods to the client object
		addOneAndStore: defineScript({
			// Step#3. Number of keys to be expected by EVALSHA call
			NUMBER_OF_KEYS: 1,
			// Step#2. Define the LUA script
			SCRIPT: "return redis.call('SET', KEYS[1], 1+tonumber(ARGV[1]))",
			// Step#4. Mapping how the arguments passed onto EVALSHA when calling addOneAndStore()
			transformArguments(key: string, value: number) {
				return [key, value.toString()];
				/* 
            ['books:count', '5']
            EVALSHA <ID> 1 'books:count' '5'
             */
			},
			// Step#5. Define what to do with the reply
			transformReply(reply: any) {
				return reply;
			}
		})
	}
});

// DEMO LUA SCRIPTION PROCESS
client.on('connect', async () => {
	// Upload Script
	await client.addOneAndStore('books:count', 5);
	// Ask for result
	const result = await client.get('books:count');
	console.log(result);
});

client.on('error', (err) => console.error(err));
client.connect();

export { client };
