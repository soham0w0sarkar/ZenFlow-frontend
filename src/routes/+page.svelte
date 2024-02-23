<script>
	import Time from './../components/cards/time.svelte';
	import Weather from '../components/cards/weather.svelte';
	import { onMount } from 'svelte';
	import { backgroundUrl, joke, currentCard } from '../lib/store.js';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	export const Fetch = async (url) => {
		try {
			const response = await fetch(url, {
				method: 'GET',
				credentials: 'include'
			});

			const data = await response.json();

			return data;
		} catch (error) {
			console.error(error);
		}
	};

	injectSpeedInsights();

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

	onMount(async () => {
		isMounted = true;

		const Joke = await Fetch(`/api/widgets/jokes`);
		if (Joke.success) $joke = Joke.joke;

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
