<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let selected;

	const handleClick = (pannel) => {
		selected = !selected;
        console.log(pannel);
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
				handleClick(e.target.id);
			}}
		>
			<IconList size={40} />
		</button>

		<button
			id="2"
			class="flex justify-center p-1 m-2"
			on:click={(e) => {
				handleClick(e.target.id);
			}}
		>
			<IconCalendar size={40} />
		</button>

		<button
			id="3"
			class="flex justify-center p-1 m-2"
			on:click={(e) => {
				handleClick(e.target.id);
			}}
		>
			<IconHourglassHigh
				size={40}
				on:click={(e) => {
					handleClick(e.target.id);
				}}
			/>
		</button>

		<button
			id="4"
			class="flex justify-center p-1 m-2"
			on:click={(e) => {
				handleClick(e.target.id);
			}}
		>
			<IconDeviceAnalytics size={40} />
		</button>
	</div>
	<div>
		<button
			id="5"
			class="flex justify-center p-1 m-2"
			on:click={(e) => {
				handleClick(e.target.id);
			}}
		>
			<IconSettings size={40} />
		</button>

		<button
			id="6"
			class="flex justify-center p-1 m-2"
			on:click={(e) => {
				handleClick(e.target.id);
			}}
		>
			<IconUser size={40} />
		</button>
	</div>
</div>
