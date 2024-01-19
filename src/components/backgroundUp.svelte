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

	const handleDrop = () => {
		const formData = new FormData();
		formData.append('file', file[0]);
		console.log(file[0]);
		try {
			const res = fetch('http://localhost:9090/api/v1/background/setBackground', {
				method: 'POST',
				body: formData
			});
			console.log('Uploaded......');
		} catch (error) {
			console.log(error);
		}
	};

	onMount(() => {
		document.addEventListener('keydown', (e) => {
			showModal = false;
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
			name="files"
			bind:files={file}
			class="h-full w-full variant-glass-surface text-xl text-white"
			on:change={handleDrop}
			accept="image/jpeg"
		>
			<svelte:fragment slot="lead"><IconFileUpload size={40} /></svelte:fragment>
			<svelte:fragment slot="message"><b>Upload or Drag</b> file</svelte:fragment>
			<svelte:fragment slot="meta"><b>Jpg</b> allowed</svelte:fragment>
		</FileDropzone>
	</Modal>
</button>
