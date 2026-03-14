import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: path.resolve(__dirname, './src/lib/layouts/BlogPost.svelte'),
				docs: path.resolve(__dirname, './src/lib/layouts/DocsPage.svelte')
			}
		})
	],
	kit: {
		adapter: adapter({ runtime: 'nodejs22.x' })
	},
	vitePlugin: {
		dynamicCompileOptions: ({ filename }) => {
			// MDsveX generates $$props which is incompatible with runes mode — exclude .md files
			if (filename.includes('node_modules') || filename.endsWith('.md')) return undefined;
			return { runes: true };
		}
	}
};

export default config;
