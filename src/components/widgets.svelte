<script>
	import { currentCard, weather } from './../lib/store.js';
	import { IconCloud, IconCloudFilled, IconCloudRain, IconCloudStorm, IconMist, IconSnowflake, IconSun } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';

	const timeFormat = (value) => {
		if (value < 10) {
			return `0${value}`;
		}
		return value;
	};

	const getIcon = (icon) => {
		switch (icon) {
			case '01d':
			case '01n':
				return IconSun;
			case '02d':
			case '02n':
				return IconCloud;
			case '03d':
			case '03n':
			case '04d':
			case '04n':
				return IconCloudFilled;
			case '09d':
			case '09d':
			case '09n':
			case '10d':
			case '10n':
				return IconCloudRain;
			case '11d':
			case '11n':
				return IconCloudStorm;
			case '13d':
			case '13n':
				return IconSnowflake;
			case '50d':
			case '50n':
				return IconMist;
			default:
				return IconSun;
		}
	};

	const getLocation = () => {
		return new Promise((resolve, reject) => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(async (position) => {
					const { latitude, longitude } = position.coords;

					const res = await fetch(`/api/widgets/weather/${latitude}/${longitude}`, {
						method: 'GET',
						credentials: 'include'
					});

					if (!res.ok) {
						reject(`HTTP error! status: ${res.status}`);
					}

					const weatherData = await res.json();

					if (!weatherData.success) {
						reject('Unexpected API response');
					}

					const data = weatherData.data;

					resolve(data);
				});
			} else {
				reject('Geolocation is not supported by this browser.');
			}
		});
	};

	const getTimeAndDate = () => {
		const date = new Date();
		const hours = date.getHours();
		const minutes = date.getMinutes();

		const time = `${timeFormat(hours)}:${timeFormat(minutes)}`;

		const week = date.getDay();
		const day = date.getDate();

		const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

		const displayDate = `${weekDays[week]}, ${day}`;

		return { time, displayDate };
	};

	let { time, displayDate } = getTimeAndDate();

	onMount(async () => {
		let interval = (60 - new Date().getSeconds()) * 1000;

		$weather = await getLocation();
		$weather.icon = getIcon($weather.icon);

		setTimeout(async () => {
			setInterval(() => {
				const { time: newTime } = getTimeAndDate();
				time = newTime;
			}, 60 * 1000);
		}, interval);
	});
</script>

<div class="variant-glass-surface flex justify-between items-center rounded-md h-1/2 w-60 p-2">
	<div class="h-full p-2 w-fit rounded-md hover:variant-glass-surface cursor-pointer">
		<button class="w-full h-2/3 flex items-center justify-evenly text-xl font-bold" on:click={() => {$currentCard = 0}}>
			<span><svelte:component this={$weather.icon || ""} /></span>
			<span>{$weather.temp || ""}°C</span>
		</button>
		<div class="w-full h-1/3 flex justify-center">{$weather.city || ""}</div>
	</div>
	<span class="h-3/4 bg-white w-px"></span>
	<div class="h-full p-2 w-5/12 rounded-md hover:variant-glass-surface cursor-pointer">
		<div class="w-full h-2/3 flex justify-center text-xl font-bold">{time}</div>
		<div class="w-full h-1/3 flex justify-center">{displayDate}</div>
	</div>
</div>
