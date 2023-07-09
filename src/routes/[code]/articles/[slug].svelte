<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
  
  import { getArticle } from '$lib/modules/articles/api';
	import type { Languages } from '$lib/modules/translations';

	export const load: Load = async ({ params, fetch, ...rest }) => {
		const code = params.code as Languages;
    const article = await getArticle(fetch, params.slug, params.code);
		return {
			props: {
        article,
				lang: code,
			}
		}
	}
</script>

<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import { useTranslations } from "$lib/modules/translations";
  import type { IArticle } from '$lib/modules/articles/dto';

  const { t } = useTranslations("vacanciesArticle");
  export let lang: string;
  export let article: IArticle;
</script>

<svelte:head>
  <title>{article.titleSeo}</title>
  <meta name="title" content={article.titleSeo} />
  <meta name="description" content={article.descriptionSeo} />
  <meta name="keywords" content={article.keywordsSeo} />
  <meta property="og:url" content="https://pfc.dev/{lang}/articles/{article.slug}" />
  <meta property="og:title" content={article.titleSeo} />
  <meta property="og:description" content={article.descriptionSeo} />
  <meta property="twitter:url" content="https://pfc.dev/{lang}/articles/{article.slug}" />
  <meta property="twitter:title" content={article.titleSeo} />
  <meta property="twitter:description" content={article.descriptionSeo} />
  <link rel="canonical" href="https://pfc.dev/{lang}/articles/{article.slug}" />
  <link rel="alternate" hreflang="uk" href="https://pfc.dev/ua/{article.slug}" />
  <link rel="alternate" hreflang="en" href="https://pfc.dev/en/{article.slug}" />
</svelte:head>

<div class="container">
  <div class="article">
    <h1 class="title">{article.title}</h1>
    <div class="article-content">
      {@html article.content}
    </div>
  </div>
  <Footer />
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
  .article-content :global(strong) {
    color: var(--color-primary);
  }
</style>
