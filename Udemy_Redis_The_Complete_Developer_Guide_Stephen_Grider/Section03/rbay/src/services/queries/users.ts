import type { CreateUserAttrs } from '$services/types';
import { genId } from '$services/utils';
import { client } from '$services/redis';
import { usernamesUniqueKey, usersKey, usernamesKey } from '$services/keys';

export const getUserByUsername = async (username: string) => {
	// Use the username to look-up against the persons base10 User ID in the usernames sorted set
	const base10Id = await client.zScore(usernamesKey(), username);
	// GUARD CLAUSE - Make sure we actually got an ID from the lookup table not an {} object
	if (!base10Id) {
		throw new Error('User does not exist');
	}
	// Take the id as stored in the lookup sorted table and convert to hex 16 id as originally was
	const id = base10Id.toString(16); // Hexadecimal string
	// Use the base16 original genId to look-up against the actual user's data in the users hash map
	const userData = await client.hGetAll(usersKey(id));
	// Deserialize and return the hash
	return deserialize(id, userData);
};

export const getUserById = async (id: string) => {
	const user = await client.hGetAll(usersKey(id));
	return deserialize(id, user);
};

export const createUser = async (attrs: CreateUserAttrs) => {
	const id = genId(); // Base16 string

	// Check if the username is allocated
	const res = await client.sIsMember(usernamesUniqueKey(), attrs.username);
	// If exists throw a new error
	if (res) {
		throw new Error('Username already exists');
	}
	// Otherwise, continue
	// Add user to the set of users
	await client.sAdd(usernamesUniqueKey(), attrs.username);
	// Add user credentials to the DB
	await client.hSet(usersKey(id), serialize(attrs));
	// Add usernames key to be used when sign-in
	// NOTE: id is a base16 string. Sorted sets in Redis only accepts numeric values for the score attribute
	await client.zAdd(usernamesKey(), { value: attrs.username, score: parseInt(id, 16) });
	return id;
};

const serialize = (user: CreateUserAttrs) => {
	return { username: user.username, password: user.password };
};

const deserialize = (id: string, user: { [key: string]: string }) => {
	return {
		id,
		username: user.username,
		password: user.password
	};
};
