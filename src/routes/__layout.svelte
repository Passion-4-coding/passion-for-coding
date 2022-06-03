<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { DEFAULT_LANGUAGE, languages, setSelectedLanguage, setTranslations } from '$lib/translations';
	import type { Languages, Translation } from '$lib/translations';

	export const load: Load = ({ params }) => {
		const code = params.code as Languages;
		if (!languages[code]) {
			return {
				status: 302,
				redirect: `/${DEFAULT_LANGUAGE}`,
			};
		}
		return {
			props: {
				translation: languages[code],
				lang: code,
			}
		}
	}
</script>

<script lang="ts">
	import '../app.css';
	import Header from '../lib/Header.svelte';
	
	export let translation: Translation;
	export let lang: Languages;
	setTranslations(translation);
	setSelectedLanguage(lang);

</script>

<Header />

<main>
	<div class="container">
		<slot />
	</div>
</main>

<style>

</style>

