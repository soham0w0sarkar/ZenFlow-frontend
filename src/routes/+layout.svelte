<script>
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Pannel from '../components/pannel.svelte';
	import SideBar from '../components/sideBar.svelte';

	let selected = true;
	let pannelNo = 1;

	const handleClick = (details) => {
		selected = details.selected;
		pannelNo = details.pannel;
	};
</script>

<AppShell slotSidebarLeft="p-4 flex w-2/5">
	<svelte:fragment slot="sidebarLeft">
		<SideBar {selected} {pannelNo} on:clicked={(e) => handleClick(e.detail)} />
		<Pannel title="Hey I'm Working!!" {pannelNo} {selected} />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter"></svelte:fragment>
</AppShell>
