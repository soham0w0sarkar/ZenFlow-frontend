import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],
	server: {
		proxy: {
			'/api': {
				target: 'https://zenflow-s63h.onrender.com',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '/api/v1')
			}
		}
	}
});
