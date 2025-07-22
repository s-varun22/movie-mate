import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className="bg-white border-t-1 border-gray-200 dark:bg-gray-800">
			<div className="w-full mx-auto max-w-screen-xl p-6 md:flex md:items-center md:justify-center">
				<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2025{" "}
					<Link href="/" className="hover:underline">
						Movie Mate
					</Link>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	);
};
