<script>
	export let showModal;

	let dialog;
	$: if (showModal == true) dialog.showModal();
</script>

<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	class="variant-ghost-surface flex p-2 justify-center items-center rounded-md h-1/4 w-1/4 {showModal
		? 'block'
		: 'hidden'}"
>
	<slot />
</dialog>
