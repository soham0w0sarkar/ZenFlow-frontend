<script>
	import GoogleTest from './pannels/googleTest.svelte';
	import GoogleBtn from './googleBtn.svelte';
	import Google from './pannels/google.svelte';
	import Calendar from './pannels/calendar.svelte';
	import Timer from './pannels/timer.svelte';
	import Mail from './pannels/mail.svelte';
	import Setting from './pannels/setting.svelte';
	import Logout from './logout.svelte';
	import { IconList, IconCalendar, IconHourglassHigh, IconSettings, IconUser, IconMail, IconBrandGoogle } from '@tabler/icons-svelte';

	export let pannelNo;
	export let selected;
	export let title;
	export let isAuthenticated;

	let icon;
	let pannel;
	$: {
		switch (pannelNo) {
			case 1:
				icon = IconBrandGoogle;
				pannel = Google;
				break;
			case 2:
				icon = IconCalendar;
				pannel = Calendar;
				break;
			case 3:
				icon = IconHourglassHigh;
				pannel = Timer;
				break;
			case 4:
				icon = IconMail;
				pannel = Mail;
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
				icon = IconGoogle;
				pannel = Google;
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
