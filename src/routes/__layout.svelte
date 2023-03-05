<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { languages, loadDefaultLanguage, setSelectedLanguage, setTranslations, useTranslations } from '$lib/modules/translations';
	import type { Languages, Translation } from '$lib/modules/translations';

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
	import { page } from '$app/stores';
	import '../app.css';
	import Header from '../lib/components/Header.svelte';
	
	export let translation: Translation;
	export let lang: Languages;
	
	setTranslations(translation);
	setSelectedLanguage(lang);

	const { t } = useTranslations("layout");
</script>

<svelte:head>
	<meta property="og:type" content="website">
	<meta property="og:image" content="/images/social.png">
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:image" content="/images/social.png">
</svelte:head>

<Header isIndex={$page.routeId === "[code]"} />

<slot />
