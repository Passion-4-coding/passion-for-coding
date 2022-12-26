<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { languages, loadDefaultLanguage, setSelectedLanguage, setTranslations } from '$lib/modules/translations';
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
</script>

<svelte:head>
	{#if lang === 'en'}
		<title>Software developers community in Discord | Passion for coding</title>
		<meta name="title" content="Software developers community in Discord | Passion for coding">
		<meta name="description" content="Passion for coding - fast growing software developers community in Discord. Freelance, programming, events, programmers memes and lot other activities.">
		<meta name="keywords" content="Discord community, passion for coding, freelance, upwork, coding, programming, developers, post vacancy for free, software developers, community">
		<meta property="og:url" content="https://codesire.io/en">
		<meta property="og:title" content="Software developers community in Discord | Passion for coding">
		<meta property="og:description" content="Passion for coding - fast growing software developers community in Discord. Freelance, programming, events, programmers memes and lot other activities.">
		<meta property="twitter:url" content="https://codesire.io/en">
		<meta property="twitter:title" content="Software developers community in Discord | Passion for coding">
		<meta property="twitter:description" content="Passion for coding - fast growing software developers community in Discord. Freelance, programming, events, programmers memes and lot other activities.">	
	{/if}
	{#if lang === 'ua'}
		<title>Спільнота розробників в діскорді | Passion for coding</title>
		<meta name="title" content="Спільнота розробників в діскорді | Passion for coding">
		<meta name="description" content="Passion for coding - швидко зростаюча спільнота в Діскорді. Фріланс, програмування, події, меми для програмістів і багато іншого.">
		<meta name="keywords" content="Спільнота в діскорді, passion for coding, фріланс, апворк, кодування, програмування, розробники, розмістити вакансію безкоштовно, розробники програмного забезпечення, спільнота">
		<meta property="og:url" content="https://codesire.io/ua">
		<meta property="og:title" content="Спільнота розробників в діскорді | Passion for coding">
		<meta property="og:description" content="Passion for coding - швидко зростаюча спільнота в Діскорді. Фріланс, програмування, події, меми для програмістів і багато інших активностей.">
		<meta property="twitter:url" content="https://codesire.io/ua">
		<meta property="twitter:title" content="Спільнота розробників в діскорді | Passion for coding">
		<meta property="twitter:description" content="Passion for coding - швидко зростаюча спільнота в Діскорді. Фріланс, програмування, події, меми для програмістів і багато інших активностей.">	
	{/if}
	{#if lang === 'ru'}
		<title>Сообщество разработчиков в Дискорде | Passion for coding</title>
		<meta name="title" content="Сообщество разработчиков в Дискорде | Passion for coding">
		<meta name="description" content="Passion for coding - быстро растущее сообщество в Дискорде. Фриланс, программирование, события, мемы для программистов и много другого">
		<meta name="keywords" content="Сообщество в дискорде, passion for coding, фриланс, апворк, кодирование, программирование, разработчики, разместить вакансию бесплатно, разработчики програмного обеспечения, сообщество">
		<meta property="og:url" content="https://codesire.io/ru">
		<meta property="og:title" content="Сообщество разработчиков в Дискорде | Passion for coding">
		<meta property="og:description" content="Passion for coding - быстро растущее сообщество в Дискорде. Фриланс, программирование, события, мемы для программистов и много других других активностей.">
		<meta property="twitter:url" content="https://codesire.io/ua">
		<meta property="twitter:title" content="Сообщество разработчиков в Дискорде | Passion for coding">
		<meta property="twitter:description" content="Passion for coding - быстро растущее сообщество в Дискорде. Фриланс, программирование, события, мемы для программистов и много других других активностей.">	
	{/if}
	<link rel="alternate" hreflang="ua" href="https://codesire.io/ua" />
	<link rel="alternate" hreflang="en" href="https://codesire.io/en" />
	<link rel="alternate" hreflang="ru" href="https://codesire.io/ru" />
	<meta property="og:type" content="website">
	<meta property="og:image" content="/images/social.png">
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:image" content="/images/social.png">
</svelte:head>

<Header isIndex={$page.routeId === "[code]"} />

<slot />
