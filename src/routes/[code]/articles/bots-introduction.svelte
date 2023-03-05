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

  const { t } = useTranslations("botsArticle");
  export let lang: string;

</script>

<svelte:head>
  <title>{t("seoTitle")}</title>
  <meta name="title" content={t("seoTitle")}>
  <meta name="description" content={t("seoDescription")}>
  <meta name="keywords" content={t("seoKeywords")}>
  <meta property="og:url" content="https://pfc.dev/{lang}/articles/bots-introduction">
  <meta property="og:title" content={t("seoTitle")}>
  <meta property="og:description" content={t("seoDescription")}>
  <meta property="twitter:url" content="https://pfc.dev/{lang}/articles/bots-introduction">
  <meta property="twitter:title" content={t("title")}>
  <meta property="twitter:description" content={t("seoDescription")}>	
  <link rel="alternate" hreflang="uk" href="https://pfc.dev/ua/rules" />
  <link rel="alternate" hreflang="en" href="https://pfc.dev/en/rules" />
  <link rel="alternate" hreflang="ru" href="https://pfc.dev/ru/rules" />
</svelte:head>

<div class="container">
  <div class="article">
    <h1 class="title">{t("title")}</h1>
    <div class="article-content">
      <div class="content-with-image">
        <div class="content-text">
          {@html t("paragraph1")}
        </div>
        <img width="250" height="250" src="/images/robot.png" alt="robot">
      </div>
      <h3 class="commands-title">{t("paragraph2")}</h3>
      <table>
        <thead>
          <tr>
            <td class="command">{t("command")}</td>
            <td class="param">{t("param")}</td>
            <td class="description">{t("description")}</td>
            <td class="required">{t("required")}</td>
            <td class="default">{t("default")}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="no-wrap">/gpt</td>
            <td class="no-wrap">&lt;{t("question")}></td>
            <td>{t("gptDescription")}</td>
            <td>{t("yes")}</td>
            <td>-</td>
          </tr>
          <tr class="bordered">
            <td></td>
            <td class="no-wrap">&lt;{t("answerType")}></td>
            <td>{t("answerTypeDescription")}</td>
            <td>{t("no")}</td>
            <td>reply</td>
          </tr>
          <tr>
            <td class="no-wrap">/deep-gpt</td>
            <td class="no-wrap">&lt;{t("question")}></td>
            <td>{t("deepGptDescription")}</td>
            <td>{t("yes")}</td>
            <td>-</td>
          </tr>
          <tr class="bordered">
            <td></td>
            <td class="no-wrap">&lt;{t("answerType")}></td>
            <td>{t("answerTypeDescription")}</td>
            <td>{t("no")}</td>
            <td>reply</td>
          </tr>
          <tr>
            <td class="no-wrap">/image</td>
            <td class="no-wrap">&lt;{t("descriptionSmall")}></td>
            <td>{t("imageDescription")}</td>
            <td>{t("yes")}</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td class="no-wrap">&lt;{t("size")}></td>
            <td>{t("imageSize")}</td>
            <td>{t("no")}</td>
            <td>SM(256x256)</td>
          </tr>
          <tr class="bordered">
            <td></td>
            <td class="no-wrap">&lt;{t("quantity")}></td>
            <td>{t("imageQuantity")}</td>
            <td>{t("no")}</td>
            <td>1</td>
          </tr>
          <tr class="bordered">
            <td class="no-wrap">/translate-en</td>
            <td class="no-wrap">&lt;{t("text")}></td>
            <td>{t("translateEn")}</td>
            <td>{t("yes")}</td>
            <td>-</td>
          </tr>
          <tr class="bordered">
            <td class="no-wrap">/translate-ru</td>
            <td class="no-wrap">&lt;{t("text")}></td>
            <td>{t("translateRu")}</td>
            <td>{t("yes")}</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <p>{@html t("paragraph4")}</p>
      <h3 class="commands-title mid-title">{t("paragraph3")}</h3>
      <table>
        <thead>
          <tr>
            <td class="command">{t("command")}</td>
            <td class="param">{t("param")}</td>
            <td class="description">{t("description")}</td>
            <td class="required">{t("required")}</td>
            <td class="default">{t("default")}</td>
          </tr>
        </thead>
        <tbody>
          <tr class="bordered">
            <td class="no-wrap">/imagine</td>
            <td class="no-wrap">&lt;{t("descriptionSmall")}></td>
            <td>{t("imagine")}</td>
            <td>{t("yes")}</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <div class="content-with-image bottom-image">
        <img width="250" height="250" src="/images/robot2.png" alt="robot2">
        <div class="text-content">
          {@html t("paragraph5")}
        </div>
      </div>
      
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
  .content-with-image {
    display: flex;
  }
  .bottom-image {
    padding: 20px 0px 40px;
  }
  .bottom-image .text-content {
    padding-top: 30px;
  }
  .article-content {
    font-size: 24px;
    line-height: 32px;
  }
  .article {
    flex: 1;
  }
  .mid-title {
    padding-top: 20px;
  }
  .container .article :global(a), .container :global(b) {
    color: var(--color-primary);
  }
  .commands-title {
    margin: 0;
  }
  table {
    border-collapse: collapse;
    margin: 10px 0px 50px;
    width: 100%;
  }
  table thead td {
    color: var(--color-primary);
  }
  table td {
    padding: 10px 20px;
  }
  .bordered td {
    border-bottom: 1px solid var(--color-secondary);
  }
  .no-wrap {
    white-space: nowrap;
  }
</style>

<!-- markup (zero or more items) goes here -->