import { Route, Routes } from "react-router-dom";
import { ErrorPage, Home, MovieDetail, Popular, Search, TopRated, Upcoming } from "../pages";

export const AppRoutes = () => {
	return (
		<div className="dark:bg-slate-800">
			<Routes>
				<Route path="/" element={<Home apiPath="movie/now_playing" />} />
				<Route path="title/:id" element={<MovieDetail apiPath="movie/" />} />
				<Route path="movies/popular" element={<Popular apiPath="movie/popular" />} />
				<Route path="movies/toprated" element={<TopRated apiPath="movie/top_rated" />} />
				<Route path="movies/upcoming" element={<Upcoming apiPath="movie/upcoming" />} />
				<Route path="search" element={<Search apiPath="search/movie" />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
};
