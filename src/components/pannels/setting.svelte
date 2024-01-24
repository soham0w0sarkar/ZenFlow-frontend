<script>
	const VITE_API_URL = import.meta.env.VITE_API_URL;
	import { backgrounds, backgroundUrl } from '../../lib/store.js';
	import { IconCheck, IconTrash } from '@tabler/icons-svelte';

	const handleDelete = async (e, bg) => {
		e.stopPropagation();
		backgrounds.update((bgs) => bgs.filter((tempBg) => tempBg.id !== bg.id));

		if ($backgroundUrl === bg.url) {
			if ($backgrounds[0]) {
				$backgroundUrl = $backgrounds[0].url;
			} else {
				$backgroundUrl = '';
				console.log('here');
			}
		}

		try {
			await deleteBackground(bg.id);
		} catch (error) {
			console.error(error);
		}
	};

	const deleteBackground = async (id) => {
		await fetch(`${VITE_API_URL}/background/deleteBackground/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});
	};

	const handleSet = (e, bg) => {
		e.stopPropagation();
		$backgroundUrl = bg;
	};
</script>

<div class="h-full w-full p-2 flex flex-col items-center">
	<div class="text-2xl text-left w-full">Backgrounds</div>
	{#each $backgrounds as bg}
		<div class="w-2/3 h-1/6 rounded-md m-2 shadow-xl bg-cover relative image" style="background-image: url('{bg.url}');">
			<div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 buttons">
				<button aria-label="set-background" class="m-2 p-2 rounded hover:shadow-glow" on:click={(e) => handleSet(e, bg.url)}><IconCheck /></button>
				<button aria-label="delete" class="m-2 p-2 rounded hover:shadow-glow" on:click={(e) => handleDelete(e, bg)}><IconTrash /></button>
			</div>
		</div>
	{/each}
</div>

<style>
	.buttons {
		display: none;
	}
	.image:hover .buttons {
		display: flex;
	}
	.buttons {
		transition: opacity 0.3s ease;
		animation: appear 0.3s ease;
	}
	button {
		transition: all 0.2s ease;
	}

	@keyframes appear {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
