<script>
	import { onMount } from 'svelte';
	import Spinner from '../spinner.svelte';
	import { IconChevronDown, IconSquare } from '@tabler/icons-svelte';
	import { PUBLIC_API_URL } from '$env/static/public';

	let mails = [];
	let oppend = [];

	const openSesame = (i) => {
		oppend[i] = !oppend[i];
	};

	const markAsRead = async (e, i) => {
		e.preventDefault();
		e.stopPropagation();

		const res = await fetch(`${PUBLIC_API_URL}/widgets/markAsRead/${mails[i].id}`, {
			method: 'POST',
			credentials: 'include'
		});

		const data = await res.json();

		if (data.success) {
			mails = mails.filter((m, j) => {
				return j !== i;
			});
			if (mails.length == 0) {
				mails = [{ senderName: 'No Mail', subject: 'No Mail', short: 'No Mail', link: '#' }];
			}
		}
	};

	onMount(async () => {
		const res = await fetch(`${PUBLIC_API_URL}/widgets/allMails/`, {
			method: 'GET',
			credentials: 'include'
		});

		const data = await res.json();

		if (data.success) {
			mails = data.mails;

			if (mails.length == 0) {
				mails = [{ senderName: 'No Mail', subject: 'No Mail', short: 'No Mail', link: '#' }];
			}

			oppend = new Array(mails.length).fill(false);
		}
	});
</script>

<div class="h-full w-full p-2 transition-all duration-200 overflow-y-scroll relative {mails.length == 0 ? 'flex items-center justify-center' : ''}">
	{#if mails.length === 0}
		<Spinner />
	{:else}
		<h1 class="w-full font-extrabold">Today's Mail</h1>
	{/if}
	{#each mails as mail, i}
		<a
			href={mail.link}
			on:click={() => {
				mails = mails.filter((m, j) => {
					return j !== i;
				});
			}}
			target="_blank"
			class="h-fit w-full p-2 text-2xl rounded-md mt-2 variant-glass-surface flex flex-col relative transition-all duration-75"
		>
			<button
				class="h-fit w-fit absolute top-2 right-2 z-1 transition-all"
				on:click={(e) => {
					e.stopPropagation();
					e.preventDefault();
					openSesame(i);
				}}
				style={oppend[i] ? 'rotate:180deg;' : ''}
			>
				<IconChevronDown class="-z-1" />
			</button>
			<button
				class="absolute bottom-3 right-2 h-fit w-fit"
				on:click={(e) => {
					markAsRead(e, i);
				}}
			>
				<IconSquare size="20" />
			</button>
			<span class="h-full w-fit font-bold text-xl -z-1">{mail.senderName}</span>
			<span class="w-fit h-full -z-1">{oppend[i] ? mail.subject : mail.short}</span>
		</a>
	{/each}
</div>
