<script>
	import {
		IconList,
		IconCalendar,
		IconHourglassHigh,
		IconDeviceAnalytics,
		IconSettings,
		IconUser
	} from '@tabler/icons-svelte';
	export let pannelNo;
	export let selected;
	
	let title;
	let icon;
	$: {
		switch (pannelNo) {
			case 1:
				title = 'Todo List';
				icon = IconList;
				break;
			case 2:
				title = 'Calendar';
				icon = IconCalendar;
				break;
			case 3:
				title = 'Timer';
				icon = IconHourglassHigh;
				break;
			case 4:
				title = 'Analytics';
				icon = IconDeviceAnalytics;
				break;
			case 5:
				title = 'Settings';
				icon = IconSettings;
				break;
			case 6:
				title = 'Profile';
				icon = IconUser;
				break;
			default:
				title = 'Todo List';
				icon = IconList;
		}
	}
</script>

{#if selected === true}
	<div class="variant-ghost-surface rounded-r-lg w-96 overflow-hidden">
		<div class="variant-ghost-surface h-8 flex p-1">
			<span><svelte:component this={icon} /></span>
			<span class="font-bold ml-1">{title}</span>
		</div>
	</div>
{/if}
