<script>
	import { IconChevronDown, IconMapPin, IconCalendarEvent, IconFileStack, IconSquarePlus, IconCircleCheckFilled } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';

	const colorId = {
		1: 'rgba(121, 134, 203, 0.3)',
		2: 'rgba(51, 182, 121, 0.3)',
		3: 'rgba(142, 36, 170, 0.3)',
		4: 'rgba(230, 124, 115, 0.3)',
		5: 'rgba(246, 191, 38, 0.3)',
		6: 'rgba(244, 81, 30, 0.3)',
		7: 'rgba(3, 155, 229, 0.3)',
		8: 'rgba(97, 97, 97, 0.3)',
		9: 'rgba(63, 81, 181, 0.3)',
		10: 'rgba(11, 128, 67, 0.3)',
		11: 'rgba(213, 0, 0, 0.3)'
	};

	let currentColorId = 7;

	let openRecentEvent = false;
	let openCreateEvent = false;
	let expand = [];
	let events = [];

	let summary = '';
	let description = '';
	let location = '';
	let startTime = '';
	let endTime = '';
	let startDate = '';
	let endDate = '';

	$: if (startDate > endDate) {
		if (startDate) {
			endDate = startDate;
		} else {
			startDate = endDate;
		}
	}

	$: if (startTime > endTime) {
		if (startTime) {
			endTime = startTime;
		} else {
			startTime = endTime;
		}
	}

	const getEvents = async () => {
		try {
			const res = await fetch(`/api/widgets/calendar/`, {
				method: 'GET',
				credentials: 'include'
			});

			const data = await res.json();

			if (data.status) {
				events = data.events;
				expand = Array(events.length).fill(false);
			}

		} catch (error) {
			console.error(error);
		}
	};

	const createEvents = async () => {
		try {
			const res = await fetch(`/api/widgets/calendar/`, {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					currentColorId,
					summary,
					description,
					location,
					startTime,
					endTime,
					startDate,
					endDate
				})
			});

			const data = await res.json();

			if (data.status) {
				await getEvents();
			}
		} catch (error) {
			console.error(error);
		}
	};

	const changeColor = (e) => {
		currentColorId = e.target.id;
	};

	const handleClickEvents = (index) => {
		expand[index] = !expand[index];
	};

	const handleOpenRecentEvents = () => {
		openRecentEvent = !openRecentEvent;
	};

	const handleOpenCreateEvents = () => {
		openCreateEvent = !openCreateEvent;
	};

	onMount(async () => {
		await getEvents();
	});
</script>

<div class="h-full w-full">
	<div class="h-fit w-full variant-ghost-surface p-3 flex flex-col items-center relative transition-all">
		<div class="text-xl font-bold w-full">Recent Events</div>
		<button class="absolute right-2 top-3 transition-all" on:click={handleOpenRecentEvents} style={openRecentEvent ? 'rotate:180deg;' : ''}><IconChevronDown class="-z-10" /></button>
		{#if openRecentEvent}
			{#each events as event, index}
				<div class="w-full h-fit p-2 text-2xl font-bold variant-glass-surface transition-all rounded-md relative flex flex-col m-2" style="background-color: {colorId[event.colorId]};">
					<span class="h-fit w-full">{event.summary}</span>
					<button on:click={(e) => handleClickEvents(index)} class="absolute right-2 top-3 transition-all" style={expand[index] ? 'rotate:180deg;' : ''}>
						<IconChevronDown class="-z-10" />
					</button>
					{#if expand[index]}
						<span class="h-fit w-full text-xl mt-2 m-1 flex justify-start">
							<IconFileStack class="mr-1" />
							{event.description}
						</span>
						<span class="h-fit w-full text-xl m-1 flex justify-start">
							<IconMapPin class="mr-1" />
							{event.location}
						</span>
						<span class="h-fit w-full text-xl m-1 flex justify-start">
							<IconCalendarEvent class="mr-1" />
							{event.startTime} - {event.endTime}
						</span>
						<span class="h-fit w-full text-xl m-1 flex justify-start">
							<IconCalendarEvent class="mr-1" />
							{event.startDate} - {event.endDate}
						</span>
					{/if}
				</div>
			{/each}
		{/if}
	</div>
	<div class="h-fit w-full variant-ghost-surface p-3 flex flex-col items-center relative transition-all">
		<div class="text-xl font-bold w-full">Create Events</div>
		<button class="absolute right-2 top-3 transition-all" on:click={handleOpenCreateEvents} style={openCreateEvent ? 'rotate:180deg;' : ''}><IconChevronDown class="-z-10" /></button>
		{#if openCreateEvent}
			<div class="w-full h-fit p-2 text-2xl font-bold variant-glass-surface transition-all rounded-md relative flex flex-col m-2" style="background-color: {colorId[currentColorId]};">
				<button class="absolute top-3 right-2" on:click={createEvents}><IconSquarePlus /></button>
				<span class="h-fit w-full">
					<input type="text" class="bg-inherit text-2xl border-transparent focus:border-transparent focus:ring-0 p-0" placeholder="summary" bind:value={summary} />
				</span>
				<span class="h-fit w-full text-xl mt-2 m-1 flex justify-start">
					<IconFileStack class="mr-1" />
					<input type="text" class="bg-inherit text-xl p-0 border-transparent focus:border-transparent focus:ring-0" placeholder="description" bind:value={description} />
				</span>
				<span class="h-fit w-full text-xl m-1 flex justify-start">
					<IconMapPin class="mr-1" /> <input type="text" class="bg-inherit text-xl p-0 border-transparent focus:border-transparent focus:ring-0" placeholder="location" bind:value={location} />
				</span>
				<span class="h-fit w-full text-xl m-1 flex justify-start">
					<IconCalendarEvent class="mr-1" /> <input type="time" class="bg-inherit p-0 border-transparent focus:border-transparent focus:ring-0" name="startTime" bind:value={startTime} /> -
					<input type="time" class="bg-inherit p-0 border-transparent focus:border-transparent focus:ring-0" name="endTime" bind:value={endTime} />
				</span>
				<span class="h-fit w-full text-xl m-1 flex justify-start">
					<IconCalendarEvent class="mr-1" /> <input type="date" class="bg-inherit p-0 border-transparent focus:border-transparent focus:ring-0" name="startDate" bind:value={startDate} /> -
					<input type="date" class="bg-inherit p-0 border-transparent focus:border-transparent focus:ring-0" name="endDate" bind:value={endDate} />
				</span>
				<span class="h-fit w-full flex gap-1 m-1">
					{#each Object.keys(colorId) as color, index}
						<button class="rounded-full inline-block h-7 w-7 border-2 border-white transition-all" id={index + 1} style="background-color: {colorId[index + 1]}; {currentColorId == (index + 1) ? "border: none": ""}" on:click={changeColor}></button>
					{/each}
				</span>
				<!-- <span class="h-fit w-full text-2xl text-center">Done</span> -->
			</div>
		{/if}
	</div>
</div>
