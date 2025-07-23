import { Link } from "react-router-dom";
import backupPoster from "../assets/images/backup.png";

export const MovieCard = ({ movie }) => {
	const { id, original_title, overview, poster_path } = movie;

	const posterUrl = poster_path ? `${import.meta.env.VITE_APP_IMAGE_URL}${poster_path}` : backupPoster;

	return (
		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3">
			<Link to={`title/${id}`}>
				<img className="rounded-t-lg" src={posterUrl} alt="poster" />

				<div className="p-5">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>

					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
				</div>
			</Link>
		</div>
	);
};
