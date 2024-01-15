<script>
	import { onMount } from 'svelte';

	let joke = '';

	const getJoke = async () => {
		try {
			const res = await fetch('http://localhost:9090/api/v1/widgets/jokes');
			const data = await res.json();

			joke = data.joke;
		} catch (error) {
			console.log(error);
		}
	};

	onMount(async () => {
		await getJoke();
	});
</script>

<span
	class="variant-glass-surface h-fit w-1/4 rounded-md p-5 left-2/4 bottom-4 absolute -translate-x-1/2"
>
	<p class="text-2xl text-center h-2/3">{joke}</p>
</span>
