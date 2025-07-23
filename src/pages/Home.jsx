import React from "react";
import { MovieList } from "../components";
import { useFetch } from "../hooks/useFetch";

export const Home = ({ apiPath }) => {
	const { data: movies } = useFetch(apiPath);
	return (
		<section>
			<MovieList movies={movies} />;
		</section>
	);
};
