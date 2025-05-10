"use client";
export default function UsersError({ error, reset }) {
	return (
		<div className="p-4 text-red-600">
			<p>Error loading users: {error.message}</p>
			<button onClick={reset} className="underline">
				Try again
			</button>
		</div>
	);
}
