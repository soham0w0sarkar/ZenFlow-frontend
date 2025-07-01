<script>
	import './app.postcss';
    import { onMount } from 'svelte';
	import Pannel from './components/pannel.svelte';
	import SideBar from './components/sideBar.svelte';
	import { isAuthenticated } from './lib/store.js';

	let selected = false;
	let pannelNo = 1;
	let title = 'Google';

    export const Fetch = async (url) => {
		try {
			const response = await fetch(url, {
				method: 'GET',
			});
			const data = await response.json();
			return data;
		} catch (error) {
			console.error(error);
		}
	};

	onMount(async () => {
		const status = await Fetch(`http://localhost:9090/api/v1/auth/status`);

		if (status.success) {
			isAuthenticated.set(true);
		}
	});

	const handleClick = (details) => {
		selected = details.selected;
		pannelNo = details.pannel;
		title = details.title;
	};
</script>

<div class="w-fit h-full flex p-4">
		<SideBar {selected} {pannelNo} on:clicked={(e) => handleClick(e.detail)} />
		<Pannel {title} {pannelNo} {selected} isAuthenticated={$isAuthenticated} />
	<slot />
</div>