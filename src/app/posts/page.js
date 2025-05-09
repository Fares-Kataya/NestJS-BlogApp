import Link from "next/link";
import { loader } from "../loader";

export default async function PostsPage() {
	const { posts, categories } = await loader();

	return (
		<div className="max-w-6xl mx-auto">
			<div className="flex flex-col md:flex-row gap-8">
				<div className="md:w-3/4">
					<h1 className="text-3xl font-bold mb-6">All Posts</h1>

					<div className="space-y-8">
						{posts.map((post) => (
							<article key={post.id} className="border-b pb-6">
								<Link href={`/posts/${post.id}`} className="group">
									<h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600">
										{post.title}
									</h2>
								</Link>

								<div className="flex items-center text-sm text-gray-600 mb-3">
									<span>{post.author}</span>
									<span className="mx-2">•</span>
									<span>
										{new Date(post.date).toLocaleDateString("en-US", {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</span>
									<span className="mx-2">•</span>
									<Link
										href={`/categories/${post.category.toLowerCase()}`}
										className="text-blue-600 hover:underline">
										{post.category}
									</Link>
								</div>

								<p className="mb-4">{post.summary}</p>

								<Link
									href={`/posts/${post.id}`}
									className="text-blue-600 hover:underline inline-flex items-center">
									Read more
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 ml-1"
										viewBox="0 0 20 20"
										fill="currentColor">
										<path
											fillRule="evenodd"
											d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								</Link>
							</article>
						))}
					</div>
				</div>

				<aside className="md:w-1/4">
					<div className="bg-gray-600 p-6 rounded-lg sticky top-4">
						<h3 className="text-xl font-bold mb-4">Categories</h3>
						<ul className="space-y-2">
							{categories.map((category) => (
								<li key={category}>
									<Link
										href={`/categories/${category.toLowerCase()}`}
										className="flex items-center justify-between hover:text-blue-600">
										<span>{category}</span>
										<span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs">
											{
												posts.filter((post) => post.category === category)
													.length
											}
										</span>
									</Link>
								</li>
							))}
						</ul>

						<h3 className="text-xl font-bold mt-8 mb-4">Recent Posts</h3>
						<ul className="space-y-3">
							{posts
								.sort((a, b) => new Date(b.date) - new Date(a.date))
								.slice(0, 5)
								.map((post) => (
									<li key={post.id}>
										<Link
											href={`/posts/${post.id}`}
											className="hover:text-blue-600">
											{post.title}
										</Link>
									</li>
								))}
						</ul>
					</div>
				</aside>
			</div>
		</div>
	);
}
