<script>
	import { onMount } from 'svelte';
	import { backgroundUrl } from '../lib/store.js';

	let isMounted = false;

	const setBackgorund = () => {
		if ($backgroundUrl) {
			document.body.style.backgroundImage = `url(${$backgroundUrl})`;
		} else if ($backgroundUrl === '') {
			document.body.style.backgroundImage = 'none';
		}
		document.body.style.backgroundSize = 'cover';
	};

	$: if (isMounted && ($backgroundUrl || $backgroundUrl === '')) {
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
