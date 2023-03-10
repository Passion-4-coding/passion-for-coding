<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { Languages } from '$lib/modules/translations';

	export const load: Load = async ({ params }) => {
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
  import Title from "$lib/components/Title.svelte";
  import { Role, roles } from "$lib/modules/roles";
  import { useTranslations  } from "$lib/modules/translations";

  export let lang: Languages;

  const { t } = useTranslations("roles");
  const { t: tl } = useTranslations("layout");
</script>

<svelte:head>
  <title>{tl("title")}</title>
  <meta name="title" content={tl("title")}>
  <meta name="description" content={tl("description")}>
  <meta name="keywords" content={tl("keywords")}>
  <meta property="og:title" content={tl("title")}>
  <meta property="og:description" content={tl("description")}>
  <meta property="twitter:title" content={tl("title")}>
  <meta property="twitter:description" content={tl("description")}>
  <meta property="og:url" content="https://pfc.dev/{lang}/roles">
  <link rel=“canonical” href="https://pfc.dev/{lang}/roles" />
  <meta property="twitter:url" content="https://pfc.dev/{lang}/roles">
  <link rel="alternate" hreflang="uk" href="https://pfc.dev/ua/roles" />
  <link rel="alternate" hreflang="en" href="https://pfc.dev/en/roles" />
  <link rel="alternate" hreflang="ru" href="https://pfc.dev/ru/roles" />
</svelte:head>

<div class="roles container">
  <Title>{t("title")}</Title>
  <div class="roles-content">
    {#each roles as role}
      <Role name={role.name} imgName={role.image} description={t(role.descriptionTranslationKey)}/>
    {/each}
  </div>
</div>
<Footer/>

<style>
  .roles {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 100px 20px 70px 20px;
  }
  .roles-content {
    margin-top: 50px;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 20px 40px;
  }
  @media (max-width: 992px) {
    .roles {
      padding: 50px 15px;
    }
    .roles-content {
      grid-auto-flow: row;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px 20px;
    }
  }
  @media (max-width: 600px) {
    .roles {
      padding: 40px 10px;
    }
    .roles-content {
      margin-top: 10px;
      grid-template-rows: none;
      grid-template-columns: 1fr;
      grid-gap: 0;
    }
  }
</style>
