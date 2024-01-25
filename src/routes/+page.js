import { isAuthenticated, backgrounds, backgroundUrl, joke } from '../lib/store.js';
const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function load({ fetch }) {
	const res = await fetch(`${VITE_API_URL}/auth/status`, {
		method: 'GET',
		credentials: 'include'
	});
	const data = await res.json();

	const backgroundRes = await fetch(`${VITE_API_URL}/background/getBackground`, {
		method: 'GET',
		credentials: 'include'
	});
	const backgroundData = await backgroundRes.json();

	const jokeRes = await fetch(`${VITE_API_URL}/widgets/jokes`);
	const jokeData = await jokeRes.json();

	if (jokeData.success) joke.set(jokeData.joke);
	if (data.success) isAuthenticated.set(data.success);
	if (backgroundData.success) backgrounds.set(backgroundData?.backgrounds);
	if (backgroundData.success) backgroundUrl.set(backgroundData?.backgrounds[0]?.url);
}
