<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";
	import { getWidgetData, type IChannel } from "$lib/modules/discord";
	
	export const load: Load = async ({ fetch, params }) => {
		const channel = await getWidgetData(fetch);
    const lang = params.code as Languages;
		return {
			props: {
				channel,
        lang
			}
		}
	}
</script>

<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Title from "$lib/components/Title.svelte";
  import { useTranslations, type Languages } from "$lib/modules/translations";

  export let channel: IChannel;
  export let lang: Languages;

  const { t } = useTranslations("about");
</script>

<svelte:head>
  <title>{t("seo-title")}</title>
  <meta name="title" content={t("seo-title")}>
  <meta name="description" content={t("seo-description")}>
  <meta name="keywords" content={t("seo-keywords")}>
  <meta property="og:title" content={t("seo-title")}>
  <meta property="og:description" content={t("seo-description")}>
  <meta property="twitter:title" content={t("seo-title")}>
  <meta property="twitter:description" content={t("seo-description")}>	
  <meta property="og:url" content="https://pfc.dev/{lang}/about">
  <link rel=“canonical” href="https://pfc.dev/{lang}/about" />
  <meta property="twitter:url" content="https://pfc.dev/{lang}/about">
  <link rel="alternate" hreflang="uk" href="https://pfc.dev/ua/about" />
  <link rel="alternate" hreflang="en" href="https://pfc.dev/en/about" />
  <link rel="alternate" hreflang="ru" href="https://pfc.dev/ru/about" />
</svelte:head>

<div class="about container">
  <Title>{t("title")}</Title>
  <div class="about-content">
    <div class="description">{@html t("description")}</div>
    <div class="stats">
      <div class="stat-item">
        &#123;<span class="number">1200+</span> {t("members")}&#125;
      </div>
      <div class="stat-item">
        &#123;<span class="number">20+</span> {t("channels")}&#125;
      </div>
      <div class="stat-item">
        &#123;<span class="number">∞</span> {t("knowledge")}&#125;
      </div>
      <div class="stat-item">
        &#123;<span class="number">{channel.presence_count}</span> {t("online")}&#125;
      </div>
    </div>
  </div>
</div>

<Footer>
  <div class="image-container">
    <img width="507" height="230" src="/images/about.svg" alt="about">
  </div>
</Footer>

<style>
  .about {
    padding: 100px 20px;
  }
  .image-container {
    max-width: 50%;
  }
  .about-content {
    display: flex;
    gap: 50px;
    padding-top: 40px;
  }

  .description {
    font-size: 30px;
    line-height: 34px;
  }

  .about :global(b) {
    color: var(--color-primary);
  }
  .about :global(p) {
    margin-bottom: 20px;
  }
  .stat-item {
    font-weight: 700;
    font-size: 34px;
    line-height: 32px;
    white-space: nowrap;
    margin-bottom: 25px;
  }

  .stat-item .number {
    color: var(--color-primary);
  }
  @media(max-width: 992px) {
    .about {
      padding: 40px 20px;
    }
    .stat-item {
      font-size: 24px;
      line-height: 24px;
      margin-bottom: 25px;
    }
    .description {
      font-size: 24px;
      line-height: 24px;
    }
  }
  @media(max-width: 600px) {
    .image-container {
      max-width: 90%;
    }
    .stat-item {
      margin-bottom: 10px;
    }
    .about-content {
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }
	}
</style>