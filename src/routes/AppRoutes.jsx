import { Route, Routes } from "react-router-dom";
import { MovieList } from "../components";
import { ErrorPage, MovieDetail, Search } from "../pages";

export const AppRoutes = () => {
	return (
		<div className="dark:bg-slate-800">
			<Routes>
				<Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home" />} />
				<Route path="title/:id" element={<MovieDetail apiPath="movie/" />} />
				<Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
				<Route path="movies/toprated" element={<MovieList apiPath="movie/top_rated" title="Top Rated" />} />
				<Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
				<Route path="search" element={<Search apiPath="search/movie" />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
};
