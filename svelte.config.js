import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static'

/** @type {import('@seltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({ fallback: 'index.html' }),
		target: '#svelte'
	}
};

export default config;
