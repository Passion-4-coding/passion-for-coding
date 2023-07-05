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
  import { ArticlesList } from "$lib/modules/articles";
  import { useTranslations } from "$lib/modules/translations";

  export let lang: Languages;

  const { t } = useTranslations("layout")
</script>

<svelte:head>
  <title>{t("title")}</title>
  <meta name="title" content={t("title")}>
  <meta name="description" content={t("description")}>
  <meta name="keywords" content={t("keywords")}>
  <meta property="og:title" content={t("title")}>
  <meta property="og:description" content={t("description")}>
  <meta property="twitter:title" content={t("title")}>
  <meta property="og:url" content="https://pfc.dev/{lang}/articles">
  <meta property="twitter:url" content="https://pfc.dev/{lang}/articles">
  <meta property="twitter:description" content={t("description")}>	
  <link rel=“canonical” href="https://pfc.dev/{lang}/articles" />
  <link rel="alternate" hreflang="uk" href="https://pfc.dev/ua/articles" />
  <link rel="alternate" hreflang="en" href="https://pfc.dev/en/articles" />
</svelte:head>

<div class="container">
  <ArticlesList />
  <Footer>
    <div class="image-container">
      <img width="350" height="350" src="/images/articles.png" alt="articles">
    </div>
  </Footer>
</div>


<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 50px 25px;
  }
  .image-container {
    position: relative;
  }
  .image-container img {
    position: absolute;
    width: 400px;
    height: 400px;
    min-width: 400px;
    right: 0px;
    bottom: -60px;
  }
  @media(max-width: 600px) {
    .image-container {
      width: 100%;
    }
    .image-container img {
      min-width: 200px;
      width: 200px;
      height: 200px;
      margin: 0 auto;
      left: 0;
    }
  }
</style>

<!-- markup (zero or more items) goes here -->