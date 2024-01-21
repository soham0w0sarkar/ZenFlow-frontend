import { isAuthenticated, backgroundUrl } from '../lib/store.js';
const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function load({ fetch }) {
	const res = await fetch(`${VITE_API_URL}/auth/status`);
	const data = await res.json();

	const backgroundRes = await fetch(`${VITE_API_URL}/background/getBackground`);
	const backgroundData = await backgroundRes.json();

	backgroundUrl.set(backgroundData?.background?.url);

	isAuthenticated.set(data.success);
}
