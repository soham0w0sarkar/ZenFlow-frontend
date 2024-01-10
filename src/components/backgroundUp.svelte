<script>
	import { onMount } from 'svelte';
	import { IconPhotoScan } from '@tabler/icons-svelte';
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import { IconFileUpload } from '@tabler/icons-svelte';
	import Modal from './modal.svelte';

	let showModal = false;
    let file;

	const handleClick = () => {
		showModal = true;
	};

	const handleFile = (e) => {
		file = e.target.files[0];
	};

	onMount(() => {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				showModal = false;
			}
		});
	});
</script>

<button
	class="variant-glass-surface absolute rounded-md bottom-4 right-4 h-fit w-fit p-1"
	on:click={handleClick}
>
	<IconPhotoScan size={45} class="-z-10" />
	<Modal {showModal}>
		<FileDropzone
            bind:file={file}
			name="files"
			class="h-full w-full variant-glass-surface text-xl text-white"
			on:change={(e) => {
				handleFile(e);
			}}
		>
			<svelte:fragment slot="lead"><IconFileUpload size={40} /></svelte:fragment>
			<svelte:fragment slot="message"><b>Upload or Drag</b> file</svelte:fragment>
			<svelte:fragment slot="meta"><b>Jpg</b> allowed</svelte:fragment>
		</FileDropzone>
	</Modal>
</button>
