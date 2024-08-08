import type { CreateItemAttrs } from '$services/types';

export const serialize = (attrs: CreateItemAttrs) => {
	return {
		...attrs,
		createdAt: attrs.createdAt.toMillis(), //toMillis() is a Luxon library - Datetime verb
		endingAt: attrs.endingAt.toMillis()
	};
};
