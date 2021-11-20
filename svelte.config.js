import preprocess from 'svelte-preprocess';

/** @type {import('@seltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
