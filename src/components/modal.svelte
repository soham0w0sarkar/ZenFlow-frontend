<script>
	export let showModal;

	let dialog;
	$: if (dialog && showModal == true) {
		dialog.showModal();
	}
</script>

<dialog
	on:close={() => (showModal = false)}
	class="variant-ghost-surface flex p-2 justify-center items-center rounded-md h-1/4 w-1/4 {showModal
		? 'block'
		: 'hidden'}"
>
	<slot />
</dialog>
