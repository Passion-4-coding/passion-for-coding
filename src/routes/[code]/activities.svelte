<script context="module" lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import ActivityTabs from "$lib/modules/activities/ActivityTabs.svelte";
  import { EActivityTabs } from "$lib/modules/activities/types";
  import { useTranslations, type Languages } from "$lib/modules/translations";
  import type { Load } from "@sveltejs/kit";

  export const load: Load = ({ url, params }) => {
    const code = params.code as Languages;
    return {
      props: {
        tab: url.searchParams.get("tab") || EActivityTabs.community,
        lang: code
      }
    }
  }
</script>

<script lang="ts">
  export let tab: EActivityTabs;
  export let lang: Languages;
  const { t } = useTranslations("activities");
</script>

<svelte:head>
  <title>{t(`meta-title-${tab}`)}</title>
  <meta name="title" content={t(`meta-title-${tab}`)}>
  <meta name="description" content={t(`meta-description-${tab}`)}>
  <meta name="keywords" content={t(`meta-keywords-${tab}`)}>
  <meta property="og:title" content={t(`meta-title-${tab}`)}>
  <meta property="og:description" content={t(`meta-description-${tab}`)}>
  <meta property="twitter:title" content={t(`meta-title-${tab}`)}>
  <meta property="twitter:description" content={t(`meta-description-${tab}`)}>
  <meta property="og:url" content="https://pfc.dev/{lang}/activities?tab=${tab}">
  <meta property="twitter:url" content="https://pfc.dev/{lang}/activities?tab=${tab}">
  <link rel=“canonical” href="https://pfc.dev/{lang}/activities?tab=${tab}" />
  <link rel="alternate" hreflang="uk" href={`https://pfc.dev/ua/activities?tab=${tab}`} />
  <link rel="alternate" hreflang="en" href={`https://pfc.dev/en/activities?tab=${tab}`} />
  <link rel="alternate" hreflang="ru" href={`https://pfc.dev/ru/activities?tab=${tab}`} />
</svelte:head>

<div class="activities container">
  <ActivityTabs {tab} />
  <Footer>
    <div class="image-container">
      <img width="507" height="230" src="/images/activities.svg" alt="activities">
    </div>
  </Footer>
</div>

<style>
  .activities {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
  }
  @media(max-width: 768px) {
    .image-container {
      display: none;
    }
  }
</style>

<!-- markup (zero or more items) goes here -->