import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
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
};

export default config;
