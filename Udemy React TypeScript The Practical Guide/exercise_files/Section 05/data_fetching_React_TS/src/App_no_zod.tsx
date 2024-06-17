import { useEffect, useState } from 'react';
import { get } from './utils/http_no_zod.ts';
import BlogPosts, { type BlogPost } from './components/BlogPosts';
import fetchingImg from './assets/data-fetching.png';
import ErrorMessage from './components/ErrorMessage';

type RawDataBlogPost = {
	[x: string]: any;
	id: number;
	userId: number;
	title: string;
	body: string;
};

function App() {
	const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState<string>();

	useEffect(() => {
		(async function fetchPosts() {
			setIsFetching(true);
			try {
				// > http_no_zod w/Generic get function solution
				const data = await get<RawDataBlogPost>('https://jsonplaceholder.typicode.com/posts');
				// > http_no_zod w/as type predicating solution
				// const data = (await get('https://jsonplaceholder.typicode.com/podsts')) as RawDataBlogPost[];

				const blogPosts: BlogPost[] = data.map((rawPost: RawDataBlogPost) => {
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
