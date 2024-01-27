import { isAuthenticated, backgrounds, backgroundUrl, joke } from '../lib/store.js';

export async function load({ fetch }) {
	const res = await fetch(`/api/auth/status`, {
		method: 'GET',
		credentials: 'include'
	});
	const data = await res.json();

	const backgroundRes = await fetch(`/api/background/getBackground`, {
		method: 'GET',
		credentials: 'include'
	});
	const backgroundData = await backgroundRes.json();

	const jokeRes = await fetch(`/api/widgets/jokes`, {
		method: 'GET',
		credentials: 'include'
	});
	const jokeData = await jokeRes.json();

	joke.set(jokeData.joke);
	if (data.success) isAuthenticated.set(data.success);
	if (backgroundData.success) backgrounds.set(backgroundData?.backgrounds);
	if (backgroundData.success) backgroundUrl.set(backgroundData?.backgrounds[0]?.url);
}
