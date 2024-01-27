<script>
	import { IconPower } from '@tabler/icons-svelte';
	import { isAuthenticated } from '../lib/store.js';

	const logout = async () => {
		try {
			const res = await fetch(`/api/auth/logout`, {
				method: 'GET',
				credentials: 'include',
			});
			const data = await res.json();

			if (data.success) {
				isAuthenticated.set(false);
			}
		} catch (error) {
			console.error(error);
		}
	};
</script>

{#if $isAuthenticated === true}
	<button aria-label="logout" on:click={logout}><IconPower /></button>
{/if}
