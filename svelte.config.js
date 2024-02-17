import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess()],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};
export default config;

// "dev": "vite dev",
// "build": "vite build",
// "preview": "vite preview",
// "lint": "prettier --check . && eslint .",
// "format": "prettier --write ."

// "@sveltejs/kit": "^2.5.0",
// "@tabler/icons-svelte": "^2.45.0",
// "@vercel/speed-insights": "^1.0.10"