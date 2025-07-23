import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryParam = null) => {
	const [data, setData] = useState();
	const url =
		queryParam != null
			? `${import.meta.env.VITE_APP_API_URL}${apiPath}?api_key=${import.meta.env.VITE_APP_API_KEY}&query=${queryParam}`
			: `${import.meta.env.VITE_APP_API_URL}${apiPath}?api_key=${import.meta.env.VITE_APP_API_KEY}`;

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				// Check if the response is ok before parsing
				const json = await response.json();
				setData(json.results || json); // Use json.results for paginated responses
			} catch (error) {
				console.error("Fetch error:", error);
			}
		}
		fetchData();
	}, [url]);

	return data ? { data } : { data: [] };
};
