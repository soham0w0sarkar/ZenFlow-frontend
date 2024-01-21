<script>
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import {backgroundUrl} from '../lib/store.js';
	import { IconFileUpload, IconX } from '@tabler/icons-svelte';

	export let showModal;

	let dialog;
	let file;

	$: if (dialog && showModal) {
		dialog.showModal();
	} else if (dialog && !showModal) {
		dialog.close();
	}

	const handleDrop = async() => {
		const formData = new FormData();
		formData.append('file', file[0]);
		try {
			const res = await fetch('http://localhost:9090/api/v1/background/setBackground', {
				method: 'POST',
				body: formData
			});
			console.log('Uploaded......');
			const data = await res.json();

			$backgroundUrl = data.url;

		} catch (error) {
			console.log(error);
		}
	};
</script>

<dialog
	bind:this={dialog}
	on:close={(e) => {
		showModal = false;
	}}
	class="variant-ghost-surface flex p-2 justify-center items-center rounded-md h-1/4 w-1/4 {showModal ? 'block' : 'hidden'}"
>
	<button
		class="absolute top-3 right-3 z-10"
		on:click={() => {
			showModal = false;
		}}
	>
		<IconX size={20} stroke={3} color="white" />
	</button>
	<FileDropzone name="files" bind:files={file} class="h-full w-full variant-glass-surface text-xl text-white" on:change={handleDrop} accept="image/jpeg" />
</dialog>

<style>
	dialog {
		animation: apperance 0.3s ease;
	}
	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.5);
	}
	@keyframes apperance {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
