<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let selected;
	export let pannelNo;

	const handleClick = (pannel) => {
		if (pannel == pannelNo) selected = !selected;
		else selected = true;

		dispatch('clicked', {
			selected: selected,
			pannel: pannel
		});
	};

	import {
		IconList,
		IconCalendar,
		IconHourglassHigh,
		IconDeviceAnalytics,
		IconSettings,
		IconUser
	} from '@tabler/icons-svelte';
</script>

<div class="parent">
	<div
		class={`h-full w-14 rounded flex flex-col justify-between variant-${
			selected == true ? 'ghost' : 'glass'
		}-surface`}
	>
		<div class="flex flex-col gap-2">
			<button
				id="1"
				class="flex justify-center p-1 mt-2"
				on:click={(e) => {
					handleClick(+e.currentTarget.id);
				}}
			>
				<IconList size={40} />
			</button>

			<button
				id="2"
				class="flex justify-center p-1 m-2"
				on:click={(e) => {
					handleClick(+e.currentTarget.id);
				}}
			>
				<IconCalendar size={40} />
			</button>

			<button
				id="3"
				class="flex justify-center p-1 m-2"
				on:click={(e) => {
					handleClick(+e.currentTarget.id);
				}}
			>
				<IconHourglassHigh size={40} />
			</button>

			<button
				id="4"
				class="flex justify-center p-1 m-2"
				on:click={(e) => {
					handleClick(+e.currentTarget.id);
				}}
			>
				<IconDeviceAnalytics size={40} />
			</button>
		</div>
		<div class="flex flex-col">
			<button
				id="5"
				class="flex justify-center p-2 m-1"
				on:click={(e) => {
					handleClick(+e.currentTarget.id);
				}}
			>
				<IconSettings size={40} />
			</button>

			<button
				id="6"
				class="flex justify-center p-2 m-1"
				on:click={(e) => {
					handleClick(+e.currentTarget.id);
				}}
			>
				<IconUser size={40} />
			</button>
		</div>
	</div>
</div>

<style>
	.variant-glass-surface {
		transform: translateX(-120%);
		transition: transform 0.3s ease-in-out;
	}
	.parent:hover .variant-glass-surface {
		transform: translateX(0);
	}
</style>
