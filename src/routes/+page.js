import { isAuthenticated, backgroundUrl } from '../lib/store.js';

export async function load({ fetch }) {
	const res = await fetch(`http://localhost:9090/api/v1/auth/status`);
	const data = await res.json();

	const backgroundRes = await fetch(`http://localhost:9090/api/v1/background/getBackground`);
	const backgroundData = await backgroundRes.json();

	backgroundUrl.set(backgroundData?.background?.url);

	isAuthenticated.set(data.success);
}
