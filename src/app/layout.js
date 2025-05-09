import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Blog App - Next.js",
	description: "A blog application built with Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<div className="navbar bg-base-100 shadow-sm">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost lg:hidden">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									{" "}
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>{" "}
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
								<li>
									<a href="/">Home</a>
								</li>
								<li>
									<a href="/posts">Posts</a>
								</li>
								<li>
									<a>Categories</a>
									<ul className="p-2">
										<li>
											<a href="/categories">All Categories</a>
										</li>
										<li>
											<a href="/categories/technology">Technology</a>
										</li>
										<li>
											<a href="/categories/health">Health</a>
										</li>
										<li>
											<a href="/categories/travel">Travel</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<a href="/" className="btn btn-ghost text-xl">
							Blog App
						</a>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/posts">Posts</a>
							</li>
							<li>
								<details>
									<summary>Categories</summary>
									<ul className="p-2">
										<li>
											<a href="/categories">All Categories</a>
										</li>
										<li>
											<a href="/categories/technology">Technology</a>
										</li>
										<li>
											<a href="/categories/health">Health</a>
										</li>
										<li>
											<a href="/categories/travel">Travel</a>
										</li>
									</ul>
								</details>
							</li>
						</ul>
					</div>
					<div className="navbar-end">
						<a href="/posts" className="btn">
							View Posts
						</a>
					</div>
				</div>
				<main className="container mx-auto py-8 px-4">{children}</main>
			</body>
		</html>
	);
}
