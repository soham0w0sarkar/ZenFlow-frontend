import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";
import { sveltePreprocess } from "svelte-preprocess";

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        css: "injected",
        hydratable: false,
      },
      emitCss: false,
      preprocess: sveltePreprocess({
        postcss: true,
      }),
    }),
  ],
  build: {
    lib: {
      entry: resolve("src/entry-point.js"),
      name: "ZenflowSidebar",
      fileName: "content",
      formats: ["iife"],
    },
    outDir: "../ZenFlow-extension/",
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        manualChunks: undefined,
      },
      external: [],
    },
    minify: "terser",
    sourcemap: false,
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
