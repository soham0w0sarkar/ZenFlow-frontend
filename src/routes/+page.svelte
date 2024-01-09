<script>
	import { onMount } from 'svelte';
	import bgImage from '../bg.jpg';

	const setBackgorund = () => {
		document.body.style.backgroundImage = `url(${bgImage})`;
		console.log('background set');
	};

	onMount(setBackgorund);
</script>
