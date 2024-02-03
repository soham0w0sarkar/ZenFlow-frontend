<script>
	import { IconUserCircle } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';

	onMount(async () => {
		const res = await fetch(`/api/widgets/allMails/`, {
			method: 'GET',
			credentials: 'include'
		});

		const data = await res.json();

		if (data.status) {
			console.log(data);
		}
	});
</script>

<div class="h-full w-full p-2">
	<h1 class="w-full font-extrabold">Today's Mail</h1>
	<span class="h-fit w-full p-2 text-2xl rounded-md mt-2 variant-glass-surface flex items-center">
		<span class="h-full w-fit"><IconUserCircle size={38} /></span>
		<span class="w-fit h-full ml-2">Mail Content Here</span>
	</span>
</div>
