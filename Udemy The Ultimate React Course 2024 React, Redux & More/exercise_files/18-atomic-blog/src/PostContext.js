import { useMemo, useState } from 'react'
import { createContext, useContext } from 'react'
import { faker } from '@faker-js/faker'

function createRandomPost() {
	return {
		title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
		body: faker.hacker.phrase(),
	}
}

//-->#1.1.CREATE A CONTEXT
const PostContext = createContext() //Create a contextAPI named PostContext

//-->#1.2.CREATE CONTEXT PROVIDER
/* children is the stuff that is sandwiched inbetween PostProvider custom provider */
function PostProvider({ children }) {
	const [posts, setPosts] = useState(() =>
		Array.from({ length: 30 }, () => createRandomPost()),
	)
	const [searchQuery, setSearchQuery] = useState('')

	// Derived state. These are the posts that will actually be displayed
	const searchedPosts =
		searchQuery.length > 0
			? posts.filter(post =>
					`${post.title} ${post.body}`
						.toLowerCase()
						.includes(searchQuery.toLowerCase()),
			  )
			: posts

	function handleAddPost(post) {
		setPosts(posts => [post, ...posts])
	}

	function handleClearPosts() {
		setPosts([])
	}

	const value = useMemo(() => {
		return {
			posts: searchedPosts,
			onAddPost: handleAddPost,
			onClearPosts: handleClearPosts,
			searchQuery,
			setSearchQuery,
		}
	}, [searchedPosts, searchQuery])

	return (
		//-->#2.DEFINE CONTEXT PROVIDER
		<PostContext.Provider
			// value={{
			// 	posts: searchedPosts,
			// 	onAddPost: handleAddPost,
			// 	onClearPosts: handleClearPosts,
			// 	searchQuery,
			// 	setSearchQuery,
			// }}
			value={value}
		>
			{children}
			{/* children is the stuff that is sandwiched inbetween PostProvider custom provider */}
		</PostContext.Provider>
	)
}

function usePosts() {
	const context = useContext(PostContext)

	// Check if context is used ourt of context.  such as @ app component
	if (context === undefined)
		throw new Error('PostContext is used outside of the PostProvider')

	return context
}

//-->#3.EXPORT CONTEXT API & ITS PROVIDER
// export { PostProvider, PostContext } //Import both context API and context provider
export { PostProvider, usePosts } //Encapsulated PostContext API object w/ usePosts and context provider
