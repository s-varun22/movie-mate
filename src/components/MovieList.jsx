import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies }) => {
	return (
		<main>
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
