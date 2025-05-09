import { loader } from "../../loader";
import Link from "next/link";

export default async function PostDetail({ params }) {
	const { posts } = await loader();
	const post = posts.find((p) => p.id === params.id);

	if (!post) {
		throw new Error("Post not found");
	}

	return (
		<article className="max-w-3xl mx-auto">
			<div className="mb-8">
				<Link
					href="/posts"
					className="text-blue-600 hover:underline mb-4 inline-block">
					&larr; Back to all posts
				</Link>
				<h1 className="text-4xl font-bold mb-3">{post.title}</h1>

				<div className="flex items-center text-gray-600 mb-6">
					<span className="mr-4">By {post.author}</span>
					<span className="mr-4">|</span>
					<span className="mr-4">
						{new Date(post.date).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</span>
					<span className="mr-4">|</span>
					<Link
						href={`/categories/${post.category.toLowerCase()}`}
						className="text-blue-600 hover:underline">
						{post.category}
					</Link>
				</div>

				<div className="bg-gray-800 p-4 rounded-lg mb-6">
					<p className="italic">{post.summary}</p>
				</div>
			</div>

			<div
				className="prose lg:prose-xl"
				dangerouslySetInnerHTML={{ __html: post.content }}
			/>

			<div className="mt-12 pt-8 border-t">
				<h3 className="text-xl font-bold mb-4">Related Posts</h3>
				<div className="grid gap-4 md:grid-cols-2">
					{posts
						.filter((p) => p.category === post.category && p.id !== post.id)
						.slice(0, 2)
						.map((relatedPost) => (
							<div key={relatedPost.id} className="border p-4 rounded-lg">
								<h4 className="font-bold mb-2">
									<Link
										href={`/posts/${relatedPost.id}`}
										className="hover:text-blue-600">
										{relatedPost.title}
									</Link>
								</h4>
								<p className="text-sm text-gray-600">
									{relatedPost.summary.substring(0, 100)}...
								</p>
							</div>
						))}
				</div>
			</div>
		</article>
	);
}
