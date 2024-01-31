<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let selected;
	export let pannelNo;

	const handleClick = (pannel, title) => {
		if (pannel == pannelNo) selected = !selected;
		else selected = true;

		dispatch('clicked', {
			title: title,
			selected: selected,
			pannel: pannel
		});
	};

	import { IconList, IconCalendar, IconHourglassHigh, IconSettings, IconUser, IconMail } from '@tabler/icons-svelte';
</script>

<div class="parent">
	<div
		class={`h-full w-14 flex flex-col justify-between variant-${selected == true ? 'ghost' : 'glass'}-surface ${
			selected == true ? 'rounded-l-md' : 'rounded-md'
		} `}
	>
		<div class="flex flex-col gap-2">
			<button
				aria-label="sidebar-icon"
				id="1"
				class="flex justify-center p-1 mt-2"
				on:click={(e) => {
					handleClick(+e.currentTarget.id, e.currentTarget.title);
				}}
				title="List"
			>
				<IconList size={40} />
			</button>

			<button
				aria-label="sidebar-icon"
				id="2"
				class="flex justify-center p-1 m-2"
				on:click={(e) => {
					handleClick(+e.currentTarget.id, e.currentTarget.title);
				}}
				title="Calendar"
			>
				<IconCalendar size={40} />
			</button>

			<button
				aria-label="sidebar-icon"
				id="3"
				class="flex justify-center p-1 m-2"
				on:click={(e) => {
					handleClick(+e.currentTarget.id, e.currentTarget.title);
				}}
				title="Timer"
			>
				<IconHourglassHigh size={40} />
			</button>

			<button
				aria-label="sidebar-icon"
				id="4"
				class="flex justify-center p-1 m-2"
				on:click={(e) => {
					handleClick(+e.currentTarget.id, e.currentTarget.title);
				}}
				title="Mail"
			>
				<IconMail size={40} />
			</button>
		</div>
		<div class="flex flex-col">
			<button
				aria-label="sidebar-icon"
				id="5"
				class="flex justify-center p-2 m-1"
				on:click={(e) => {
					handleClick(+e.currentTarget.id, e.currentTarget.title);
				}}
				title="Settings"
			>
				<IconSettings size={40} />
			</button>

			<button
				aria-label="sidebar-icon"
				id="6"
				class="flex justify-center p-2 m-1"
				on:click={(e) => {
					handleClick(+e.currentTarget.id, e.currentTarget.title);
				}}
				title="Profile"
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
