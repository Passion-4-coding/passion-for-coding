<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { languages, setTranslations } from '$lib/translations';
	import type { Languages, Translation } from '$lib/translations';

	export const load: Load = ({ params }) => {
		const code = params.code as Languages;
		return {
			props: {
				translation: languages[code]
			}
		}
	}
</script>

<script lang="ts">
	import '../app.css';
	import Header from '../lib/Header.svelte';
	
	export let translation: Translation;
	setTranslations(translation);

</script>

<Header />

<main>
  <slot />
</main>

<style>

</style>

