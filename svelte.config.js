import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
<<<<<<< HEAD
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		vite: () => ({
			resolve: {
				alias: {
					$lib: resolve("./src/lib"),
				},
			},
		})
	}
=======
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    vite: () => ({
      resolve: {
        alias: {
          $dto: resolve('./src/dto'),
          $utils: resolve('./src/utils'),
          $api: resolve('./src/api'),
          $styles: resolve('./src/styles'),
          $modules: resolve('./src/modules'),
        },
      },
    }),
  },
>>>>>>> 57db30f8d0b755badf1282b8876ab650a0a25fae
};

export default config;
