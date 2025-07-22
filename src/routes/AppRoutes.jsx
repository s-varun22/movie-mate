import { Route, Routes } from "react-router-dom";
import { Error, MovieDetail, MovieList, Search } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="title/:id" element={<MovieDetail />} />
      <Route path="movies/popular" element={<MovieList />} />
      <Route path="movies/toprated" element={<MovieList />} />
      <Route path="movies/upcoming" element={<MovieList />} />
      <Route path="search" element={<Search />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
