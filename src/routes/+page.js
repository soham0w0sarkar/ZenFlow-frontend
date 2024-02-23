import { isAuthenticated, backgrounds, backgroundUrl } from '../lib/store.js';

export async function load({ fetch }) {
	const statusRes = await fetch('/api/auth/status', {
		method: 'GET',
		credentials: 'include'
	});
	const status = await statusRes.json();

	if (status.success) {
		isAuthenticated.set(true);

		const backgroundsRes = await fetch('/api/background/getBackground', {
			method: 'GET',
			credentials: 'include'
		});

		const backgroundsData = await backgroundsRes.json();

		if (backgroundsData.success && backgroundsData.backgrounds.length > 0) {
			backgrounds.set(backgroundsData.backgrounds);
			backgroundUrl.set(backgroundsData.currentBackground);
		}
	}
}
