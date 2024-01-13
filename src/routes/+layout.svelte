<script>
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Pannel from '../components/pannel.svelte';
	import SideBar from '../components/sideBar.svelte';
	import Qoute from '../components/qoute.svelte';
	import Widgets from '../components/widgets.svelte';
	import BackgroundUp from '../components/backgroundUp.svelte';
	import {isAuthenticated} from '../lib/store.js';


	let selected = true;
	let pannelNo = 1;
	let title = 'List';

	const handleClick = (details) => {
		selected = details.selected;
		pannelNo = details.pannel;
		title = details.title;
	};
</script>

<AppShell
	slotSidebarLeft="p-4 flex w-fit"
	slotPageFooter="static h-1/4 p-4"
	slotPageHeader="h-1/5 p-4 flex justify-end"
>
	<svelte:fragment slot="sidebarLeft">
		<SideBar {selected} {pannelNo} on:clicked={(e) => handleClick(e.detail)} />
		<Pannel {title} {pannelNo} {selected} isAuthenticated={ $isAuthenticated } />
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<Widgets />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter"><Qoute /><BackgroundUp /></svelte:fragment>
</AppShell>
