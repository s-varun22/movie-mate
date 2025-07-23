import { MovieList } from "../components";
import { useFetch } from "../hooks/useFetch";

export const TopRated = ({ apiPath }) => {
	const { data: movies } = useFetch(apiPath);
	return (
		<section>
			<MovieList movies={movies} />;
		</section>
	);
};
