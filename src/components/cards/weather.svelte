<script>
	import { IconSun, IconWind, IconArrowNarrowUp } from '@tabler/icons-svelte';
</script>

<div class="variant-glass-surface rounded-md p-2 absolute h-1/5 w-1/5 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 grid grid-col-2 grid-rows-2 gap-4 shadow-md">
	<div class="col-span-2">
		<div class="w-full text-xl h-1/4">location</div>
		<div class="w-full text-xl flex items-end h-3/4">
			<span><IconSun size={50} /></span>
			<span class="text-2xl font-bold m-2">Description</span>
		</div>
	</div>
	<div class="p-2 flex flex-col justify-evenly">
		<span>feel's Like:</span>
		<span class="flex gap-2">
			<IconWind />
			<span>1.52km/h</span>
			<IconArrowNarrowUp />
		</span>
	</div>
	<div class="flex justify-center items-start p-2">
		<span class="text-8xl font-light">32</span>
		<span>&deg;C</span>
	</div>
</div>
