import { MovieCard } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

export const Search = ({ apiPath }) => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("query") || "";

	const { data: movies } = useFetch(apiPath, query);
	return (
		<main>
			<section className="py-5">
				<p className="text-3xl text-gray-800 dark:text-white text-center py-5">
					{movies.length === 0 ? `No results found for "${query}"` : `Search results for "${query}"`}
				</p>
			</section>
			<section className="max-w-7xl mx-auto py-7 ">
				<div className="flex justify-start flex-wrap">
					{movies.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
			</section>
		</main>
	);
};
