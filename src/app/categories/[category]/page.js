import { loader } from '../../loader'
import Link from 'next/link'

export default async function CategoryPosts({ params }) {
	const { posts } = await loader();
	console.log(posts);
	console.log(params.category);
	const filtered = posts.filter(
		(p) => p.category.toLowerCase() === params.category
	);
	console.log(filtered)
	if (filtered.length === 0) {
		throw new Error("Category not found");
	}

	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">{params.category}</h1>
			<div className="space-y-8">
				{filtered.map((post) => (
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
	);
}
