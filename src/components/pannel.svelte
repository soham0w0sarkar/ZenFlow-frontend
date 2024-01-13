<script>
	import GoogleBtn from './googleBtn.svelte';
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
	export let title;
	export let isAuthenticated;

	let icon;
	$: {
		console.log(isAuthenticated)
		switch (pannelNo) {
			case 1:
				icon = IconList;
				break;
			case 2:
				icon = IconCalendar;
				break;
			case 3:
				icon = IconHourglassHigh;
				break;
			case 4:
				icon = IconDeviceAnalytics;
				break;
			case 5:
				icon = IconSettings;
				break;
			case 6:
				icon = IconUser;
				break;
			default:
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
		<div class="variant-ghost-surface h-full flex justify-center items-center">
			{#if isAuthenticated === false}
				<GoogleBtn />
			{:else if isAuthenticated === true}
				<p class="text-2xl">You are logged in</p>
			{/if}
		</div>
	</div>
{/if}
