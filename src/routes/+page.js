import { isAuthenticated, backgrounds, backgroundUrl, joke } from '../lib/store.js';
import { Fetch } from '../lib/utils.js';

export async function load({ fetch }) {
	const status = await Fetch(`/api/auth/status`, 'GET', fetch);
	const background = await Fetch(`/api/background/getBackground`, 'GET', fetch);
	const Joke = await Fetch(`/api/widgets/jokes`, 'GET', fetch);

	if (status.success) isAuthenticated.set(status.success);
	if (background.success) {
		backgrounds.set(background?.backgrounds);
		backgroundUrl.set(background?.backgrounds[0]?.url);
	}
	if (Joke.success) joke.set(Joke.joke);
}
