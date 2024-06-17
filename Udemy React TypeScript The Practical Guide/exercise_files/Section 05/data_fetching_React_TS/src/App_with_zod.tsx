import { z } from 'zod';
import { useEffect, useState } from 'react';
import { get } from './utils/http_zod.ts';
import BlogPosts, { type BlogPost } from './components/BlogPosts';
import fetchingImg from './assets/data-fetching.png';
import ErrorMessage from './components/ErrorMessage';

const rawDataBlogPostSchema = z.object({
	id: z.number(),
	userId: z.number(),
	title: z.string(),
	body: z.string(),
});
// z.array() is a Zod method that creates a new schema based on another schema
// It's simply an array containing the expected objects
const expectedResponseDataSchema = z.array(rawDataBlogPostSchema);

function App() {
	const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState<string>();

	useEffect(() => {
		(async function fetchPosts() {
			setIsFetching(true);
			try {
				const data = await get('https://jsonplaceholder.typicode.com/posts');

				const parsedData = expectedResponseDataSchema.parse(data);
				/* 
            No more type casting via "as" needed!
				Instead, here, TypeScript "knows" that parsedData will be an array
				full with objects as defined by the above schema 
            */

				const blogPosts: BlogPost[] = parsedData.map((rawPost) => {
					return { id: rawPost.id, title: rawPost.title, text: rawPost.body };
				});

				setFetchedPosts(blogPosts);
			} catch (err) {
				// Opt#1 - type checking error object via type predicator
				// setError((err as Error).message);
				// Opt#2 - type checking erro object via instanceof type narrowing
				err instanceof Error && setError(err.message);
			} finally {
				setIsFetching(false);
			}
		})();
	}, []);

	return (
		<main>
			<img src={fetchingImg} alt="An abstract image depicting a data fetching process" />
			{fetchedPosts && <BlogPosts posts={fetchedPosts} />}
			{isFetching && <p id="loading-fallback">Fetching posts...</p>}
			{error && <ErrorMessage text={error} />}
		</main>
	);
}

export default App;
