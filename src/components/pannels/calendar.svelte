<script>
	import { IconChevronDown } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';

	onMount(async () => {
		try {
			const res = await fetch(`/api/widgets/calendar/getAllEvents`, {
				method: 'GET',
				credentials: 'include'
			});
			const data = await res.json();

			console.log(data);
		} catch (error) {
			console.error(error);
		}
	});
</script>

<div class="h-full w-full">
	<div class="h-fit w-full variant-ghost-surface p-2 flex flex-col items-center">
		<div class="w-5/6 h-fit p-2 text-2xl font-bold variant-glass-success rounded-md flex justify-between">
			<span class="h-fit w-fit">Summary</span>
			<button>
				<IconChevronDown />
			</button>
		</div>
	</div>
</div>
