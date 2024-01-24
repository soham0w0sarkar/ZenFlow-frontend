<script>
	import { IconPhotoScan } from '@tabler/icons-svelte';
	import Modal from './modal.svelte';

	let showModal;

	const handleClick = () => {
		showModal = true;
	};
</script>

<button aria-label="background-upload" class="variant-glass-surface absolute rounded-md bottom-4 right-4 h-fit w-fit p-1" on:click={handleClick}>
	<IconPhotoScan size={45} class="-z-10" />
</button>
<Modal bind:showModal />
