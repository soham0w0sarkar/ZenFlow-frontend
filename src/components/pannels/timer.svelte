<script>
	import { onMount, onDestroy } from 'svelte';
	import { IconPlayerPlayFilled, IconPlayerStopFilled } from '@tabler/icons-svelte';

	let rotation = 0;
	let min = 0;
	let seconds = 0;
	let clicked = false;
	let play = false;
	let intervalId;
	let startTime = Date.now();

	$: min = Math.ceil(seconds / 60);
	$: rotation = (seconds / 3600) * 360;
	$: if (play) handleTimer(true);

	const keydown = (e) => {
		if (e.key === 'ArrowUp') {
			seconds += 300;
		} else if (e.key === 'ArrowDown') {
			if (seconds > 0) seconds -= 60;
		}
	};

	const timer = () => {
		if (seconds > 0) {
			seconds -= 1;
		} else {
			handleTimer(false);
		}
	};

	const handleTimer = (start) => {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = null;
		}

		if (start) {
			startTime = Date.now();
			intervalId = setInterval(timer, 1000);
			play = true;
		} else {
			seconds = 0;
			play = false;
		}
	};

	onMount(() => {
		const storedSeconds = parseInt(localStorage.getItem('seconds')) || 0;
		const storedStartTime = parseInt(localStorage.getItem('startTime'));
		play = localStorage.getItem('play') === 'true';

		if (play && storedStartTime) {
			const elapsedSeconds = Math.floor((Date.now() - storedStartTime) / 1000);
			seconds = Math.max(storedSeconds - elapsedSeconds, 0);
		} else {
			seconds = storedSeconds;
		}

		document.querySelector('.point').addEventListener('click', () => {
			if (!clicked) {
				document.addEventListener('keydown', keydown);
			} else {
				document.removeEventListener('keydown', keydown);
			}
			clicked = !clicked;
		});
	});

	onDestroy(() => {
		console.log('destroy');
		localStorage.setItem('seconds', seconds.toString());
		localStorage.setItem('play', play.toString());
		localStorage.setItem('startTime', startTime.toString());
		if (intervalId) {
			clearInterval(intervalId);
		}
	});
</script>

<div class="h-full w-full">
	<div class="w-full h-1/4 flex flex-col justify-evenly items-center">
		<span class="text-8xl">{min}</span>
		<span class="text-4xl">MIN</span>
	</div>
	<div class="h-3/4 w-full flex flex-col items-center">
		<button class="w-0 h-0 m-2 point"></button>
		<div
			class="flex justify-center items-center h-60 w-60 variant-glass-surface rounded-full relative p-4 transition-all"
			style="transform: rotate({rotation}deg);"
		>
			<span class="w-6 h-6 m-1 text-center text-lg font-bold absolute top-1" style="transform: rotate(-{rotation}deg);">
				{Math.floor(min / 60) * 60}
			</span>
			<span class="w-6 h-6 m-1 text-center text-lg font-bold absolute left-1" style="transform: rotate(-{rotation}deg);">
				{Math.floor(min / 60) * 60 + 15}
			</span>
			<span class="w-6 h-6 m-1 text-center text-lg font-bold absolute bottom-1" style="transform: rotate(-{rotation}deg);">
				{Math.floor(min / 60) * 60 + 30}
			</span>
			<span class="w-6 h-6 m-1 text-center text-lg font-bold absolute right-1" style="transform: rotate(-{rotation}deg);">
				{Math.floor(min / 60) * 60 + 45}
			</span>
			{#if seconds > 0}
				<button
					class="variant-filled-surface w-1/4 h-1/4 rounded-full p-2"
					on:click={() => {
						handleTimer(!play);
					}}
					style="transform: rotate(-{rotation}deg);"
				>
					{#if play}
						<IconPlayerStopFilled size={38} />
					{:else}
						<IconPlayerPlayFilled size={38} />
					{/if}
				</button>
			{/if}
		</div>
	</div>
</div>

<style>
	.point {
		border-left: 15px solid transparent;
		border-right: 15px solid transparent;
		border-top: 30px solid #f00;
	}

	span,
	button {
		transition: all 100ms ease-in-out;
	}
</style>
