<script>
	import { onMount } from 'svelte';
	import bgImage from '../assests/img/bg.jpg';

	const setBackgorund = () => {
		document.body.style.backgroundImage = `url(${bgImage})`;
		document.body.style.backgroundSize = 'cover';
	};

	onMount(setBackgorund);
</script>

<svelte:head>
	<title>ZenFlow</title>
</svelte:head>
