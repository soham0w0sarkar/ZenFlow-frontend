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
		const intervalTime = (60 - date.getSeconds()) * 1000;
		const intervalDate = (24 - date.getHours()) * 60 * 60 * 1000;

		return { time, displayDate, intervalTime, intervalDate };
	};

	let { time, displayDate, intervalTime, intervalDate } = getTimeAndDate();

	onMount(async () => {
		$weather = await getLocation();
		$weather.icon = getIcon($weather.icon);

		setTimeout(async () => {
			({ time } = getTimeAndDate());

			setInterval(async () => {
				({ time } = getTimeAndDate());
			}, 60000);
		}, intervalTime);

		setInterval(async () => {
			$weather = await getLocation();
			$weather.icon = getIcon($weather.icon);
			console.log('Weather updated', count++);
		}, 3600000);

		setTimeout(async () => {
			({ displayDate } = getTimeAndDate());

			setInterval(async () => {
				({ displayDate } = getTimeAndDate());
			}, 86400000);
		}, intervalDate);
	});
</script>

<div class="variant-glass-surface flex justify-between items-center rounded-md h-1/2 w-60 p-2">
	<button
		class="h-full p-2 w-fit rounded-md hover:variant-glass-surface cursor-pointer"
		on:click={() => {
			$currentCard = 0;
		}}
	>
		<div class="w-full h-2/3 flex items-center justify-evenly text-xl font-bold">
			<span><svelte:component this={$weather.icon || ''} /></span>
			<span>{$weather.temp || ''}°C</span>
		</div>
		<div class="w-full h-1/3 flex justify-center">{$weather.city || ''}</div>
	</button>
	<span class="h-3/4 bg-white w-px"></span>
	<button
		class="h-full p-2 w-5/12 rounded-md hover:variant-glass-surface cursor-pointer"
		on:click={() => {
			$currentCard = 1;
		}}
	>
		<div class="w-full h-2/3 flex justify-center text-xl font-bold">{time}</div>
		<div class="w-full h-1/3 flex justify-center">{displayDate}</div>
	</button>
</div>
