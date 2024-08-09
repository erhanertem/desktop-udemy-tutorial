import type { CreateUserAttrs } from '$services/types';
import { genId } from '$services/utils';
import { client } from '$services/redis';
import { usernamesUniqueKey, usersKey } from '$services/keys';

export const getUserByUsername = async (username: string) => {};

export const getUserById = async (id: string) => {
	const user = await client.hGetAll(usersKey(id));
	return deserialize(id, user);
};

export const createUser = async (attrs: CreateUserAttrs) => {
	const id = genId();

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
