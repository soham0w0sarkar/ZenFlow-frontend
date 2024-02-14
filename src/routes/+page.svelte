<script>
	import Time from './../components/cards/time.svelte';
	import Weather from '../components/cards/weather.svelte';
	import { onMount } from 'svelte';
	import { backgroundUrl, currentCard } from '../lib/store.js';

	let isMounted = false;
	let card;

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

	$: {
		switch ($currentCard) {
			case 0:
				card = Weather;
				break;
			case 1:
				card = Time;
				break;
			default:
				card = '';
		}
	}

	onMount(() => {
		isMounted = true;
		setBackgorund();

		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				$currentCard = -1;
			}
		});
	});
</script>

<svelte:head>
	<title>ZenFlow</title>
</svelte:head>

<div class="static h-full w-full">
	<svelte:component this={card} />
</div>
