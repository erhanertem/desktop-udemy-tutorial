import { type ReactNode, useEffect, useState } from 'react';
import { get } from './utils/http';
import BlogPosts, { type BlogPost } from './components/BlogPosts';
import fetchingImg from './assets/data-fetching.png';

type RawDataBlogPost = {
	id: number;
	userId: number;
	title: string;
	body: string;
};

function App() {
	const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();

	useEffect(() => {
		(async function fetchPosts() {
			const data = (await get('https://jsonplaceholder.typicode.com/posts')) as RawDataBlogPost[];

			const blogPosts: BlogPost[] = data.map((rawPost) => {
				return { id: rawPost.id, title: rawPost.title, text: rawPost.body };
			});

			setFetchedPosts(blogPosts);
		})();
	}, []);

	return (
		<main>
			<img src={fetchingImg} alt="An abstract image depicting a data fetching process" />
			{fetchedPosts && <BlogPosts posts={fetchedPosts} />}
		</main>
	);
}

export default App;
