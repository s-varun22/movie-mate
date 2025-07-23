import { MovieList } from "../components";
import { useFetch } from "../hooks/useFetch";

export const Upcoming = ({ apiPath }) => {
	const { data: movies } = useFetch(apiPath);
	return (
		<section>
			<MovieList movies={movies} />;
		</section>
	);
};
