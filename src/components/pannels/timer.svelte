<script>
	import { onMount } from 'svelte';
	import { IconPlayerPlayFilled, IconPlayerStopFilled } from '@tabler/icons-svelte';

	let count = 0;
	let rotation = 0;
	let seconds = 0;
	let clicked = false;

	$: seconds = count * 60;
	$: rotation = (seconds / 3600) * 360;

	const keydown = (e) => {
		if (e.key === 'ArrowUp') {
			count += 5;
		} else if (e.key === 'ArrowDown') {
			if (count > 0) count -= 1;
		}
	};

	const handleTimer = () => {
		const timer = setInterval(() => {
			if (seconds > 0) {
				seconds -= 1;
				if (seconds % 60 === 0) {
					count -= 1;
				}
			} else {
				clearInterval(timer);
			}
		}, 1000);
	};

	onMount(() => {
		document.querySelector('.point').addEventListener('click', () => {
			if (!clicked) {
				document.addEventListener('keydown', keydown);
			} else {
				document.removeEventListener('keydown', keydown);
			}
			clicked = !clicked;
		});
	});
</script>

<div class="h-full w-full">
	<div class="w-full h-1/4 flex flex-col justify-evenly items-center">
		<span class="text-8xl">{count}</span>
		<span class="text-4xl">MIN</span>
	</div>
	<div class="h-3/4 w-full flex flex-col items-center">
		<button class="w-0 h-0 m-2 point"></button>
		<div
			class="flex justify-center items-center h-60 w-60 variant-glass-surface rounded-full relative p-4 transition-all"
			style="transform: rotate({rotation}deg);"
		>
			<span class="w-6 h-6 m-1 text-center text-lg font-bold absolute top-1" style="transform: rotate(-{rotation}deg);"
				>{Math.floor(count / 60) * 60}</span
			>
			<span class="w-6 h-6 m-1 text-center text-lg font-bold absolute left-1" style="transform: rotate(-{rotation}deg);"
				>{Math.floor(count / 60) * 60 + 15}</span
			>
			<span class="w-6 h-6 m-1 text-center text-lg font-bold absolute bottom-1" style="transform: rotate(-{rotation}deg);"
				>{Math.floor(count / 60) * 60 + 30}</span
			>
			<span class="w-6 h-6 m-1 text-center text-lg font-bold absolute right-1" style="transform: rotate(-{rotation}deg);"
				>{Math.floor(count / 60) * 60 + 45}</span
			>
			{#if count > 0}
				<button class="variant-filled-surface w-1/4 h-1/4 rounded-full p-2" on:click={handleTimer} style="transform: rotate(-{rotation}deg);"
					><IconPlayerPlayFilled size={38} /></button
				>
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
