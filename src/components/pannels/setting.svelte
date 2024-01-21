<script>
	import { backgroundUrls, backgroundUrl } from '../../lib/store.js';

	const handleCLick = (e) => {
		$backgroundUrl = e.target.getAttribute('data-bg-image');
	};
</script>

<div class="h-full w-full p-2 flex flex-col items-center">
	<div class="text-2xl text-left w-full">Backgrounds</div>
	{#each $backgroundUrls as bgUrl}
		<button class="w-2/3 h-1/6 rounded-md m-2 shadow-xl bg-cover" style="background-image: url('{bgUrl}');" data-bg-image={bgUrl} on:click={handleCLick}></button>
	{/each}
</div>
