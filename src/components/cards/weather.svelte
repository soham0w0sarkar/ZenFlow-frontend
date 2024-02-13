<script>
	import { weather } from './../../lib/store.js';
	import { IconWind, IconArrowNarrowUp, IconSunrise, IconSunset } from '@tabler/icons-svelte';
</script>

<div
	class="variant-glass-surface rounded-md p-2 absolute h-1/5 w-1/5 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 grid grid-col-2 grid-rows-2 gap-4 shadow-md card"
>
	<div class="col-span-2">
		<div class="w-full text-xl h-1/4">{$weather.city_full}</div>
		<div class="w-full text-xl flex items-end h-3/4">
			<span><svelte:component this={$weather.icon} size={50} /></span>
			<span class="text-2xl font-bold m-2">{$weather.description}</span>
		</div>
	</div>
	<div class="p-2 flex flex-col justify-evenly">
		<span>feel's Like: {$weather.feels_like}&deg;C</span>
		<span class="flex gap-2">
			<IconWind />
			<span>{$weather.wind_speed}km/h</span>
			<IconArrowNarrowUp style="transform: rotate({$weather.wind_deg}deg);" />
		</span>
	</div>
	<div class="flex justify-center items-start p-2">
		<span class="text-7xl">{$weather.temp}</span>
		<span>&deg;C</span>
	</div>
</div>

<style>
	.card {
		animation: fadeInZoom 0.1s ease-in-out;
	}

	@keyframes fadeInZoom {
		from {
			opacity: 0;
			transform: translate(50%, -50%);
		}
		to {
			opacity: 1;
			transform: translate(50%, -50%);
		}
	}
</style>
