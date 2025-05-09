"use client";
import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="p-8">
			<h1 className="text-2xl text-red-600 mb-4">Something went wrong!</h1>
			<p>{error.message}</p>
			<button
				onClick={reset}
				className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
				Try Again
			</button>
		</div>
	);
}
