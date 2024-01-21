<script>
	import { onMount } from 'svelte';
	import { backgroundUrl } from '../lib/store.js';

	let isMounted = false;

	const setBackgorund = () => {
		document.body.style.backgroundImage = `url(${$backgroundUrl})`;
		document.body.style.backgroundSize = 'cover';
	};

	$: if (isMounted && $backgroundUrl) {
		setBackgorund();
	}

	onMount(() => {
		isMounted = true;
		setBackgorund();
	});
</script>

<svelte:head>
	<title>ZenFlow</title>
</svelte:head>
