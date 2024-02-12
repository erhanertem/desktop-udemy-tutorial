import { createContext, useContext, useMemo, useState } from 'react';
import { faker } from '@faker-js/faker';

// > #1. CREATE A CONTEXT
// PostContext starts with an upper casing as its a Component.
// createContext comes from 'react' library just like useEffect.
const PostContext = createContext();

function createRandomPost() {
	return {
		title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
		body: faker.hacker.phrase(),
	};
}

function PostProvider({ children }) {
	const [posts, setPosts] = useState(() => Array.from({ length: 30 }, () => createRandomPost()));
	const [searchQuery, setSearchQuery] = useState('');

	// Derived state. These are the posts that will actually be displayed
	const searchedPosts =
		searchQuery.length > 0
			? posts.filter((post) =>
					`${post.title} ${post.body}`.toLowerCase().includes(searchQuery.toLowerCase()),
			  )
			: posts;

	function handleAddPost(post) {
		setPosts((posts) => [post, ...posts]);
	}

	function handleClearPosts() {
		setPosts([]);
	}

	const value = useMemo(() => {
		return {
			posts: searchedPosts,
			onClearPosts: handleClearPosts,
			onAddPost: handleAddPost,
			searchQuery,
			setSearchQuery,
		};
	}, [searchedPosts, searchQuery]);

	return (
		<PostContext.Provider
			value={value}
			// value={{
			// 	posts: searchedPosts,
			// 	onClearPosts: handleClearPosts,
			// 	onAddPost: handleAddPost,
			// 	searchQuery,
			// 	setSearchQuery,
			// }}
		>
			{children}
		</PostContext.Provider>
	);
}

function usePosts() {
	const context = useContext(PostContext);

	//GUARD CLAUSE Consuming context is only available to components that is wrapped by the Provider. If Context is attempted to be consumed outside the Provider, err occurs.
	if (context === undefined) throw new Error('⛔ PostContext was used outside of the PostProvider');

	return context;
}

export { PostProvider, usePosts };
