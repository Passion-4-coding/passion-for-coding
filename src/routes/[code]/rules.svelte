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
  import Title from "$lib/components/Title.svelte";
  import { Rule, rules } from "$lib/modules/rules";
  import { useTranslations } from "$lib/modules/translations";
  
  export let lang: string;

  const { t } = useTranslations("rules");
  const { t: tl } = useTranslations("layout");
</script>

<svelte:head>
  <title>{tl("title")}</title>
  <meta name="title" content={tl("title")}>
  <meta name="description" content={tl("description")}>
  <meta name="keywords" content={tl("keywords")}>
  <meta property="og:url" content={`https://pfc.dev/${lang}/rules`}>
  <meta property="og:title" content={tl("title")}>
  <meta property="og:description" content={tl("description")}>
  <meta property="twitter:url" content={`https://pfc.dev/${lang}/rules`}>
  <meta property="twitter:title" content={tl("title")}>
  <meta property="twitter:description" content={tl("description")}>	
  <link rel=“canonical” href="https://pfc.dev/{lang}/rules" />
  <link rel="alternate" hreflang="uk" href="https://pfc.dev/ua/rules" />
  <link rel="alternate" hreflang="en" href="https://pfc.dev/en/rules" />
</svelte:head>

<div class="rules container">
  <Title>{t("title")}</Title>
  <div class="rules-content">
    <div class="rules-block">
      {#each rules as rule}
        <Rule
          number={rule.number}
          description={t(rule.descriptionTranslationKey)}
        />
      {/each}
    </div>
    <img class="policeman" alt="policeman" src="/images/policeman.png" />
    <img
      class="small_policeman"
      alt="polsmall_policemaniceman"
      src="/images/small_policeman.png"
    />
  </div>
</div>

<Footer />

<style>
  .rules :global(b) {
    color: var(--color-primary);
  }
  .rules {
    padding: 100px 20px 70px 20px;
  }
  .rules-content {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  .rules-block {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  .small_policeman {
    display: none;
  }
  @media (max-width: 992px) {
    .rules {
      padding: 50px 15px;
    }
    .policeman {
      display: none;
    }
    .small_policeman {
      display: block;
      margin-bottom: 55px;
    }
    .rules-content {
      flex-direction: column;
      height: 100%;
      margin-top: 30px;
    }
  }
  @media (max-width: 600px) {
    .rules {
      padding: 40px 10px;
      padding-bottom: 0;
    }
    .small_policeman {
      margin-bottom: 0;
    }

    .rules-content {
      margin-top: 10px;
    }
  }
</style>
