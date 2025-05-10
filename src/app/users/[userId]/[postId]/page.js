import { fetcher } from "../../../lib/api";

export default async function PostDetail({ params }) {
	const [post, comments] = await Promise.all([
		fetcher(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
		fetcher(
			`https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`
		),
	]);

	return (
		<article className="prose">
			<h1>{post.title}</h1>
			<p>{post.body}</p>
			<hr />
			<h2 className="text-xl font-semibold mt-6">Comments</h2>
			<ul className="list-disc pl-5">
				{comments.map((c) => (
					<li key={c.id} className="mb-2">
						<p className="font-medium">{c.name}:</p>
						<p>{c.body}</p>
					</li>
				))}
			</ul>
		</article>
	);
}
