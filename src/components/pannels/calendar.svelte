<script>
	import { IconChevronDown, IconMapPin, IconCalendarEvent, IconFileStack, IconSquarePlus } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';
	import { elasticIn } from 'svelte/easing';

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

	$: if(startDate > endDate) {
		if(startDate) {
			endDate = startDate;
		} else {
			startDate = endDate;
		}
	};

	$: if(startTime > endTime) {
		if(startTime) {
			endTime = startTime;
		} else {
			startTime = endTime;
		}
	};


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
				<div class="w-full h-fit p-2 text-2xl font-bold variant-glass-{expand[index] ? 'surface' : 'success'} transition-all rounded-md relative flex flex-col m-2">
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
			<div class="w-full h-fit p-2 text-2xl font-bold variant-glass-surface transition-all rounded-md relative flex flex-col m-2">
				<button class="absolute top-3 right-2" on:click={createEvents} ><IconSquarePlus /></button>
				<span class="h-fit w-full">
					<input type="text" class="bg-inherit text-2xl border-transparent focus:border-transparent focus:ring-0 p-0" placeholder="summary" bind:value={summary}/>
				</span>
				<span class="h-fit w-full text-xl mt-2 m-1 flex justify-start">
					<IconFileStack class="mr-1" /> <input type="text" class="bg-inherit text-xl p-0 border-transparent focus:border-transparent focus:ring-0" placeholder="description" bind:value="{description}" />
				</span>
				<span class="h-fit w-full text-xl m-1 flex justify-start">
					<IconMapPin class="mr-1" /> <input type="text" class="bg-inherit text-xl p-0 border-transparent focus:border-transparent focus:ring-0" placeholder="location" bind:value="{location}"/>
				</span>
				<span class="h-fit w-full text-xl m-1 flex justify-start">
					<IconCalendarEvent class="mr-1" /> <input type="time" class="bg-inherit p-0 border-transparent focus:border-transparent focus:ring-0" name="startTime" bind:value="{startTime}"/> -
					<input type="time" class="bg-inherit p-0 border-transparent focus:border-transparent focus:ring-0" name="endTime" bind:value="{endTime}"/>
				</span>
				<span class="h-fit w-full text-xl m-1 flex justify-start">
					<IconCalendarEvent class="mr-1" /> <input type="date" class="bg-inherit p-0 border-transparent focus:border-transparent focus:ring-0" name="startDate" bind:value="{startDate}" /> -
					<input type="date" class="bg-inherit p-0 border-transparent focus:border-transparent focus:ring-0" name="endDate" bind:value="{endDate}" />
				</span>
			</div>
		{/if}
	</div>
</div>
