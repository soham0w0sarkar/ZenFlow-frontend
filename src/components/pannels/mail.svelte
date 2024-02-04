<script>
	import { onMount } from 'svelte';
	import { IconChevronDown }from "@tabler/icons-svelte";

	let mails = [];
	let oppend = [];

	const openSesame = (i) => {
		oppend[i] = !oppend[i];
	};

	onMount(async () => {
		const res = await fetch(`/api/widgets/allMails/`, {
			method: 'GET',
			credentials: 'include'
		});

		const data = await res.json();

		if (data.success) {
			mails = data.mails;
			oppend = new Array(mails.length).fill(false);
		}
	});
</script>

<div class="h-full w-full p-2 transition-all duration-200">
	<h1 class="w-full font-extrabold">Today's Mail</h1>
	{#each mails as mail, i}
		<a href="{mail.link}" target="_blank" class="h-fit w-full p-2 text-2xl rounded-md mt-2 variant-glass-surface flex flex-col relative transition-all duration-75">
			<button class="h-fit w-fit absolute top-2 right-2 z-10 transition-all" on:click={(e) => {openSesame(i)}} style="{oppend[i] ? 'rotate:180deg;': ''}">
				<IconChevronDown class="-z-10" />
			</button>
			<span class="h-full w-fit font-bold text-xl">{mail.senderName}</span>
			<span class="w-fit h-full">{(oppend[i] ? mail.subject : mail.short)}</span>
		</a>
	{/each}
	
</div>
