import { Link } from "react-router-dom";
import errorImg from "../assets/images/errorImage.png";
import { useTitle } from "../hooks";

export const ErrorPage = () => {
	useTitle("Error Page");

	return (
		<main>
			<section className="flex flex-col justify-center items-center px-2">
				<div className="flex flex-col my-4 items-center">
					<p className="text-xl text-gray-700 dark:text-gray-50 mt-4">
						Oops! The page you are looking for does not exist.
					</p>
					<img src={errorImg} alt="Error" className="rounded w-dvh h-auto my-4" />
					<Link
						to="/"
						className="mt-6 inline-block bg-gray-800 dark:bg-gray-50 text-white dark:text-gray-500 px-4 py-2 rounded hover:bg-gray-600">
						Go to Home
					</Link>
				</div>
			</section>
		</main>
	);
};
