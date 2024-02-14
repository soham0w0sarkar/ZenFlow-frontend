<script>
    const timeFormat = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    let hours, minutes, seconds ;
    
    const getTime = () => {
        const date = new Date();
        hours = timeFormat(date.getHours());
        minutes = timeFormat(date.getMinutes());
        seconds = timeFormat(date.getSeconds());
    };

	const getDate = () => {
		const date = new Date();
		const week = "SUN MON TUE WED THU FRI SAT".split(" ")[date.getDay()];
		const day = date.getDate();

		return `${week}, ${day}`;
	};
    
    getTime();
    
    setInterval(getTime, 1000);
</script>

<div
	class="variant-glass-surface rounded-md p-2 absolute h-1/5 w-1/4 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 shadow-md card flex flex-col items-center text-8xl transition-all"
>
	<div class="flex justify-evenly items-center w-11/12 h-3/4">
		<div class="h-full w-1/4 flex items-center justify-center">{hours}</div>
		:
		<div class="h-full w-1/4 flex items-center justify-center">{minutes}</div>
		:
		<div class="h-full w-1/4 flex items-center justify-center">{seconds}</div>
	</div>
	<div class="h-1/4 w-full flex justify-center items-center text-2xl">{getDate()}</div>
</div>

<style>
	@font-face {
		font-family: 'Clock_font';
		src: url('src/fonts/clock_font.ttf');
	}

	.card {
		animation: fadeInZoom 0.1s ease-in-out;
		font-family: 'Clock_font';
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
