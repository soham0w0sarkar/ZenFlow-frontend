<script>
	import { isAuthenticated } from './../../lib/store.js';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const userId = $page.params.userId;

	let mounted = false;

	const setCredentials = async (userId) => {
		const res = await fetch(`/api/auth/setCredentials/${encodeURIComponent(userId)}`, {
			method: 'GET',
			credentials: 'include'
		});
		const data = await res.json();

		if (data.success) {
			$isAuthenticated = true;
			goto('../');
		}
	};

	$: userId && mounted && setCredentials(userId);

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Processing.............</title>
</svelte:head>

<div class="h-full w-full flex justify-center items-center text-5xl">PROCESSING ......</div>
