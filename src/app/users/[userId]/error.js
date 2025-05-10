"use client";
export default function UserPostsError({ error, reset }) {
	return (
		<div className="p-4 text-red-600">
			<p>Error loading this user’s posts: {error.message}</p>
			<button onClick={reset} className="underline">
				Try again
			</button>
		</div>
	);
}
