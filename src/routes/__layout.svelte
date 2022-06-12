<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { languages, loadDefaultLanguage, setSelectedLanguage, setTranslations } from '$lib/translations';
	import type { Languages, Translation } from '$lib/translations';

	export const load: Load = async ({ params, fetch }) => {
		const code = params.code as Languages;
		if (!languages[code]) {
			const defaultLanguage = await loadDefaultLanguage(fetch);
			return {
				status: 302,
				redirect: `/${defaultLanguage}`,
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
	import Footer from '$lib/Footer.svelte';
import '../app.css';
	import Header from '../lib/Header.svelte';
	
	export let translation: Translation;
	export let lang: Languages;
	setTranslations(translation);
	setSelectedLanguage(lang);

</script>

<svelte:head>
	<title>Passion for coding</title>
	<meta name="description" content="Passion for coding, discord community for developers">
	<meta name="keywords" content="Discord community, passion for coding, freelance, upwork, coding, programming, developers">
	<html {lang} />
</svelte:head>

<Header />

<main>
	<div class="container">
		<slot />
	</div>
</main>

<Footer />

<style>

</style>

