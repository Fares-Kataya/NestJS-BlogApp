import Link from "next/link";
import { fetcher } from "../lib/api";

export default async function UsersPage() {
	const users = await fetcher("https://jsonplaceholder.typicode.com/users");

	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Users</h1>
			<ul className="list-disc pl-5">
				{users.map((u) => (
					<li key={u.id}>
						<Link href={`/users/${u.id}`}>{u.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
