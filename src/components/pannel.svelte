<script>
	import Logout from './logout.svelte';
	import GoogleBtn from './googleBtn.svelte';
	import { IconList, IconCalendar, IconHourglassHigh, IconDeviceAnalytics, IconSettings, IconUser } from '@tabler/icons-svelte';
	import Setting from './pannels/setting.svelte';

	export let pannelNo;
	export let selected;
	export let title;
	export let isAuthenticated;

	let icon;
	let pannel;
	$: {
		switch (pannelNo) {
			case 1:
				icon = IconList;
				pannel = '';
				break;
			case 2:
				icon = IconCalendar;
				pannel = '';
				break;
			case 3:
				icon = IconHourglassHigh;
				pannel = '';
				break;
			case 4:
				icon = IconDeviceAnalytics;
				pannel = '';
				break;
			case 5:
				icon = IconSettings;
				pannel = Setting;
				break;
			case 6:
				icon = IconUser;
				pannel = '';
				break;
			default:
				icon = IconList;
				pannel = '';
		}
	}
</script>

{#if selected === true}
	<div class="variant-ghost-surface rounded-r-lg w-96 overflow-hidden">
		<div class="variant-ghost-surface h-8 flex p-1">
			<span><svelte:component this={icon} /></span>
			<span class="font-bold ml-1">{title}</span>
			<span class="ml-auto mr-1"><Logout /></span>
		</div>
		<div class="variant-ghost-surface h-full flex justify-center items-center">
			{#if isAuthenticated === false}
				<GoogleBtn />
			{:else if isAuthenticated === true}
				<svelte:component this={pannel} />
			{/if}
		</div>
	</div>
{/if}
