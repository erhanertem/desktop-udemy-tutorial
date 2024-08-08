import type { Session } from '$services/types';
import { sessionsKey } from '$services/keys';
import { client } from '$services/redis';

export const getSession = async (id: string) => {
	const session = await client.hGetAll(sessionsKey(id));
	// console.log('✅', session);
	// NOTE: IF THERE IS NO MATCHING SESSIONID, RETURNS {}
	if (Object.keys(session).length === 0) {
		return null;
	}
	// RETRIEVE DATA FROM REDIS
	return deserialize(id, session);
};

export const saveSession = async (session: Session) => {
	// STORE DATA IN REDIS
	return client.hSet(sessionsKey(session.id), serialize(session));
};

const serialize = (session: Session) => {
	return {
		userId: session.userId,
		username: session.username
	};
};

const deserialize = (id: string, session: { [key: string]: string }) => {
	return {
		id,
		userId: session.userId,
		username: session.username
	};
};
