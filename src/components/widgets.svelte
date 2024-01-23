<script>
	import { IconCloud, IconCloudFilled, IconCloudRain, IconCloudStorm, IconMist, IconSnowflake, IconSun } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';
	const VITE_API_URL = import.meta.env.VITE_API_URL;

	const timeFormat = (value) => {
		if (value < 10) {
			return `0${value}`;
		}
		return value;
	};

	const getIcon = (icon) => {
		switch (icon) {
			case '01d' || '01n':
				return IconSun;
			case '02d' || '02n':
				return IconCloud;
			case '03d' || '03n' || '04d' || '04n':
				return IconCloudFilled;
			case '09d' || '09n' || '10d' || '10n':
				return IconCloudRain;
			case '11d' || '11n':
				return IconCloudStorm;
			case '13d' || '13n':
				return IconSnowflake;
			case '50d' || '50n':
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
					const res = await fetch(`${VITE_API_URL}/widgets/weather/${latitude}/${longitude}`);
					if (!res.ok) {
						reject(`HTTP error! status: ${res.status}`);
					}
					const weatherData = await res.json();

					if (weatherData.success) {
						reject('Unexpected API response');
					}

					const { icon, temp, city } = weatherData.data;

					resolve({ icon, temp, city });
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
	let temp = '',
		city = '',
		icon = IconSun;

	onMount(async () => {
		let interval = (60 - new Date().getSeconds()) * 1000;
		let {icon:newIcon, temp: newTemp, city: newCity } = await getLocation();
		temp = newTemp;
		city = newCity;
		icon = getIcon(newIcon);

		setTimeout(async () => {
			const { temp: newTemp, city: newCity } = await getLocation();
			temp = newTemp;
			city = newCity;

			setInterval(() => {
				const { time: newTime } = getTimeAndDate();
				time = newTime;
			}, 60 * 1000);
		}, interval);
	});
</script>

<div class="variant-glass-surface flex justify-between items-center rounded-md h-1/2 w-60 p-2">
	<div class="h-full p-2 w-fit rounded-md hover:variant-glass-surface">
		<div class="w-full h-2/3 flex items-center justify-evenly text-xl font-bold">
			<span><svelte:component this={icon} /></span>
			<span>{temp}°C</span>
		</div>
		<div class="w-full h-1/3 flex justify-center">{city}</div>
	</div>
	<span class="h-3/4 bg-white w-px"></span>
	<div class="h-full p-2 w-5/12 rounded-md hover:variant-glass-surface">
		<div class="w-full h-2/3 flex justify-center text-xl font-bold">{time}</div>
		<div class="w-full h-1/3 flex justify-center">{displayDate}</div>
	</div>
</div>
