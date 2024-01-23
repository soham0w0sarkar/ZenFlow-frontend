import { isAuthenticated, backgrounds, backgroundUrl, joke } from '../lib/store.js';
const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function load({ fetch }) {
	const res = await fetch(`${VITE_API_URL}/auth/status`);
	const data = await res.json();

	const backgroundRes = await fetch(`${VITE_API_URL}/background/getBackground`);
	const backgroundData = await backgroundRes.json();

	const jokeRes = await fetch(`${VITE_API_URL}/widgets/jokes`);
	const jokeData = await jokeRes.json();

	joke.set(jokeData.joke);
	isAuthenticated.set(data.success);
	backgrounds.set(backgroundData?.backgrounds);
	backgroundUrl.set(backgroundData?.backgrounds[0]?.url);
}
