<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { Languages } from '$lib/modules/translations';

	export const load: Load = async ({ params, fetch }) => {
		const code = params.code as Languages;
		return {
			props: {
				lang: code,
			}
		}
	}
</script>

<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import { useTranslations } from "$lib/modules/translations";

  const { t } = useTranslations("improvementsArticle");
  export let lang: string;

</script>

<svelte:head>
  <title>{t("seoTitle")}</title>
  <meta name="title" content={t("seoTitle")}>
  <meta name="description" content={t("seoDescription")}>
  <meta name="keywords" content={t("seoKeywords")}>
  <meta property="og:url" content="https://pfc.dev/{lang}/articles/improvements">
  <meta property="og:title" content={t("seoTitle")}>
  <meta property="og:description" content={t("seoDescription")}>
  <meta property="twitter:url" content="https://pfc.dev/{lang}/articles/improvements">
  <meta property="twitter:title" content={t("title")}>
  <meta property="twitter:description" content={t("seoDescription")}>	
  <link rel=“canonical” href="https://pfc.dev/{lang}/articles/improvements" />
  <link rel="alternate" hreflang="uk" href="https://pfc.dev/ua/rules" />
  <link rel="alternate" hreflang="en" href="https://pfc.dev/en/rules" />
  <link rel="alternate" hreflang="ru" href="https://pfc.dev/ru/rules" />
</svelte:head>

<div class="container">
  <div class="article">
    <h1 class="title">{t("title")}</h1>
    <div class="article-content">
      <p>{@html t("paragraph1")}</p>
      <p>{@html t("paragraph2")}</p>
      <p>{@html t("paragraph3")}</p>
      <p>{@html t("paragraph4")}</p>
      <p>{@html t("paragraph5")}</p>
    </div>
  </div>
  <Footer>
  </Footer>
</div>

<style>
  .container {
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    height: 100px;
  }
  .article-content {
    font-size: 24px;
    line-height: 32px;
  }
  .article-content :global(b) {
    color: var(--color-primary);
  }
</style>

<!-- markup (zero or more items) goes here -->