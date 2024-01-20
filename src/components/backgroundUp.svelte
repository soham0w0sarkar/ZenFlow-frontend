<script>
	import { onMount } from 'svelte';
	import { IconPhotoScan } from '@tabler/icons-svelte';
	import Modal from './modal.svelte';

	let showModal = false;

	const handleClick = () => {
		showModal = true;
	};
</script>

<button
	class="variant-glass-surface absolute rounded-md bottom-4 right-4 h-fit w-fit p-1"
	on:click={handleClick}
>
	<IconPhotoScan size={45} class="-z-10" />
</button>
<Modal {showModal} />
