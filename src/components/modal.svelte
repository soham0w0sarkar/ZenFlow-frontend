<script>
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import { IconFileUpload, IconX } from '@tabler/icons-svelte';

	export let showModal;

	let dialog;
	let file;

	$: if (dialog && showModal == true) {
		dialog.showModal();
	}

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
</script>

<dialog
	bind:this={dialog}
	class="variant-ghost-surface flex p-2 justify-center items-center rounded-md h-1/4 w-1/4 {showModal
		? 'block'
		: 'hidden'}"
>
	<button
		class="absolute top-2 right-2 variant-filled-primary"
		on:click={() => {
			dialog.close();
			showModal = false;
		}}><IconX size={15} /></button
	>
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
</dialog>
