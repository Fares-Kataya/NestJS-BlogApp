import { loader } from '../loader'
import Link from 'next/link'

export default async function CategoriesPage() {
	const { categories, posts } = await loader();

	const categoryPosts = categories.reduce((acc, category) => {
		acc[category] = posts.filter((post) => post.category === category);
		return acc;
	}, {});

	return (
		<div className="max-w-6xl mx-auto">
			<h1 className="text-3xl font-bold mb-8">Browse by Category</h1>
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{categories.map((category) => {
					const items = categoryPosts[category] || [];
					const latest = items
						.slice()
						.sort((a, b) => new Date(b.date) - new Date(a.date))[0];

					return (
						<div
							key={category}
							className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
							<div className="bg-gray-800 p-4 border-b">
								<h2 className="text-xl font-bold">
									<Link
										href={`/categories/${category.toLowerCase()}`}
										className="hover:text-blue-600">
										{category}
									</Link>
								</h2>
								<p className="text-gray-600 text-sm">{items.length} posts</p>
							</div>

							{latest && (
								<div className="p-4">
									<h3 className="font-medium mb-2">Latest Post:</h3>
									<Link
										href={`/posts/${latest.id}`}
										className="font-medium hover:text-blue-600">
										{latest.title}
									</Link>
									<p className="text-sm text-gray-600 mt-1">
										{new Date(latest.date).toLocaleDateString("en-US", {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</p>
									<p className="mt-2 text-sm line-clamp-2">{latest.summary}</p>
								</div>
							)}

							<div className="bg-gray-950 p-4 border-t">
								<Link
									href={`/categories/${category.toLowerCase()}`}
									className="text-blue-600 hover:underline flex items-center justify-between">
									<span>View all {category} posts</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
