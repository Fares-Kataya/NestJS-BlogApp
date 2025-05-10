import Link from "next/link";
import { fetcher } from "../../lib/api";

export default async function UserPosts({ params }) {
	const posts = await fetcher(
		`https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`
	);

	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Posts by User {params.userId}</h1>
			<ul className="list-disc pl-5">
				{posts.map((p) => (
					<li key={p.id}>
						<Link href={`/users/${params.userId}/${p.id}`}>{p.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
