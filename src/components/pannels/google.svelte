<script>
	import { IconBrandGoogle } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';

	let query = '';
	let data = [];
	let suggestions = [];
	let selectFlag = false;

	let focused = false;

	const focus = () => {
		focused = true;
	};

	const blur = () => {
		focused = false;
	};

	$: if (!selectFlag) {
		if (query.length > 0) {
			suggestions = data.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
		} else {
			suggestions = [];
		}
	}

	$: console.log(suggestions);

	const search = (event) => {
		event.preventDefault();
		window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
		query = '';
	};

	onMount(async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const json = await res.json();

		data = json.map((user) => user.name);

		let suggestionPosition = 0;

		document.addEventListener('keydown', (e) => {
			if (e.key === 'ArrowDown') {
				if (suggestionPosition < suggestions.length - 1) {
					query = suggestions[suggestionPosition];
					suggestionPosition++;
					selectFlag = true;
				}
			} else if (e.key === 'ArrowUp') {
				if (suggestionPosition > 0) {
					query = suggestions[suggestionPosition];
					suggestionPosition--;
					selectFlag = true;
				}
			} else {
				selectFlag = false;
			}
		});
	});
</script>

<form class="h-full w-full p-2" on:submit={search}>
	<div
		class="h-fit w-full flex justify-center transition-all pl-2 {suggestions.length > 0 ? 'rounded-t-2xl' : 'rounded-full'} items-center {focused
			? 'variant-ghost-surface'
			: 'bg-transparent'} duration-200"
	>
		{#if focused}
			<IconBrandGoogle />
		{/if}
		<input
			type="text"
			name="google"
			bind:value={query}
			on:focus={focus}
			on:blur={blur}
			id="google"
			class="w-11/12 {focused ? 'bg-transparent' : 'variant-ghost-surface'} text-xl rounded-full focus:border-transparent focus:ring-0"
			placeholder={focused ? '' : 'Search'}
			autocomplete="off"
		/>
		<input type="submit" style="display: none;" />
	</div>
	{#if suggestions.length > 0}
		<div class="h-fit w-full rounded-b-md text-xl font-bold variant-ghost-surface">
			{#each suggestions as suggestion}
				<div class="w-full h-fit p-2 pt-3">{suggestion}</div>
			{/each}
		</div>
	{/if}
</form>
