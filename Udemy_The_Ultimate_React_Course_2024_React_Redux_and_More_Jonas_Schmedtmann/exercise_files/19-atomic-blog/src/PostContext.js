import { createContext, useContext, useMemo, useState } from 'react';
import { faker } from '@faker-js/faker';

function createRandomPost() {
	return {
		title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
		body: faker.hacker.phrase(),
	};
}

// #1. CREATE A NEW CONTEXT PROVIDER COMPONENT OUTSIDE THE APP COMPONENT
// NOTE: We may either specify null or totally ignore the intiial value as its pretty useless
// const PostContext = createContext(null);
const PostContext = createContext();

function PostProvider({ children }) {
	// #2. PROVIDE CONTEXT VALUES/METHODS
	const [posts, setPosts] = useState(() =>
		Array.from({ length: 30 }, () => createRandomPost())
	);
	const [searchQuery, setSearchQuery] = useState('');

	// Derived state. These are the posts that will actually be displayed
	const searchedPosts =
		searchQuery.length > 0
			? posts.filter((post) =>
					`${post.title} ${post.body}`
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
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
			onAddPost: handleAddPost,
			onClearPosts: handleClearPosts,
			searchQuery,
			setSearchQuery,
		};
	}, [searchedPosts, searchQuery]);

	// #3. RETURN CONTEXT WITH PROVIDERS
	return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

// #4. CREATE CUSTOM HOOK FOR CONSUMING CONTEXT
function usePosts() {
	const context = useContext(PostContext);

	//GUARD CLAUSE
	if (context === undefined)
		throw new Error('PostContext was used outside of the PostProvider');

	return context;
}

/* 
NOTE: We export them individually because @App.js we need
  #1. usePosts simplification hook is returned for hooks to consume state/eventhandler within the context object.
  #2. We would need PostProvider custom provider abstraction to wrap entire children components in the App.js
*/
export { PostProvider, usePosts };
