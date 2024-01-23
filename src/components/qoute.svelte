<script>
	import { joke } from './../lib/store.js';
	import { IconBrandTwitter } from '@tabler/icons-svelte';
</script>

<span class="variant-glass-surface h-fit w-1/4 rounded-md p-5 left-2/4 bottom-4 absolute -translate-x-1/2 hover">
	<button class="variant-glass-surface block absolute top-1/2 -translate-y-1/2 w-fit h-fit p-2 rounded-full hover-circle">
		<IconBrandTwitter />
	</button>
	<p class="text-2xl text-center h-2/3">{$joke}</p>
</span>

<style>
	.hover-circle {
		transition: opacity 0.3s ease;
		pointer-events: none;
	}

	.hover-circle {
		opacity: 1;
		animation: apperance 0.5s ease forwards;
	}

	.hover:not(:hover) .hover-circle {
		opacity: 0;
		animation: disapperance 5s ease;
	}
	@keyframes apperance {
		0% {
			transform: translate(0, -50%);
		}
		100% {
			transform: translate(-180%, -50%);
		}
	}
	@keyframes disapperance {
		0% {
			transform: translate(-180%, -50%);
			opacity: 1;
		}
		90% {
			transform: translate(-180%, -50%);
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: translate(0, -50%);
		}
	}
</style>
