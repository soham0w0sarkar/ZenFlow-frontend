<script>
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Pannel from '../components/pannel.svelte';
	import {
		IconList,
		IconCalendar,
		IconHourglassHigh,
		IconDeviceAnalytics,
		IconSettings,
		IconUser
	} from '@tabler/icons-svelte';
</script>

<AppShell slotSidebarLeft="p-4 flex w-2/5">
	<svelte:fragment slot="sidebarLeft">
		<div class="variant-glass-surface h-full w-14 rounded flex flex-col justify-between">
			<div class="flex flex-col gap-2">
				<span class="flex justify-center p-1 mt-2">
					<IconList size={40} />
				</span>
				<span class="flex justify-center p-1 m-2">
					<IconCalendar size={40} />
				</span>
				<span class="flex justify-center p-1 m-2">
					<IconHourglassHigh size={40} />
				</span>
				<span class="flex justify-center p-1 m-2">
					<IconDeviceAnalytics size={40} />
				</span>
			</div>
			<div>
				<span class="flex justify-center p-1 m-2">
					<IconSettings size={40} />
				</span>
				<span class="flex justify-center p-1 m-2">
					<IconUser size={40} />
				</span>
			</div>
		</div>
		<Pannel title="Hey I'm Working!!" pannelNo={1}/>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>
