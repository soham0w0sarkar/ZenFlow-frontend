<script>
	import { onMount } from 'svelte';
	import { IconSun } from '@tabler/icons-svelte';

	const timeFormat = (value) => {
		if (value < 10) {
			return `0${value}`;
		}
		return value;
	};

	const cityFormat = (value) => {
		value = value.split(' ');
		value = value.map((word, indx) => {
			if (indx !== value.length - 1) {
				return word[0].toUpperCase();
			}
			return word[0].toUpperCase() + word.slice(1);
		});
		return value.join(' ');
	};

	const getLocation = () => {
		return new Promise((resolve, reject) => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(async (position) => {
					const { latitude, longitude } = position.coords;
					const res = await fetch(
						`http://localhost:9090/api/v1/widgets/weather/${latitude}/${longitude}`
					);
					if (!res.ok) {
						reject(`HTTP error! status: ${res.status}`);
					}
					const weatherData = await res.json();

					if (!weatherData.data || !weatherData.data.weather) {
						reject('Unexpected API response');
					}

					const temp = Math.round(weatherData.data.weather.main.temp - 273);
					const city = cityFormat(weatherData.data.weather.name);

					resolve({ temp, city });
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
		city = '';

	onMount(async () => {
		const interval = (60 - new Date().getSeconds()) * 1000;
		let { temp: newTemp, city: newCity } = await getLocation();
		temp = newTemp;
		city = newCity;

		setInterval(() => {
			const { time: newTime } = getTimeAndDate();
			time = newTime;
		}, interval);
	});
</script>

<div class="variant-glass-surface flex justify-between items-center rounded-md h-1/2 w-60 p-2">
	<div class="h-full p-2 w-5/12 rounded-md hover:variant-glass-surface">
		<div class="w-full h-2/3 flex justify-evenly text-xl font-bold">
			<IconSun size={30} />{temp}&degC
		</div>
		<div class="w-full h-1/3 flex justify-center">{city}</div>
	</div>
	<span class="h-3/4 bg-white w-px"></span>
	<div class="h-full p-2 w-5/12 rounded-md hover:variant-glass-surface">
		<div class="w-full h-2/3 flex justify-center text-xl font-bold">{time}</div>
		<div class="w-full h-1/3 flex justify-center">{displayDate}</div>
	</div>
</div>
