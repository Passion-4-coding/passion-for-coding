<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";
	import { getWidgetData, type IChannel } from "$lib/modules/discord";
	
	export const load: Load = async ({ fetch, params }) => {
		const channel = await getWidgetData(fetch);
		const code = params.code as Languages;
		return {
			props: {
				channel,
				lang: code
			}
		}
	}
</script>

<script lang="ts">
  import { useTranslations, type Languages } from "$lib/modules/translations";
  import Link from "$lib/components/Link.svelte";
  import PageWrapper from "$lib/components/PageWrapper.svelte";
	import DiscordLink from '$lib/components/DiscordLink.svelte';
  import Footer from "$lib/components/Footer.svelte";

	export let channel: IChannel;
	export let lang: Languages;
	
	const { t } = useTranslations("home");
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
	<meta property="og:url" content="https://pfc.dev/{lang}">
  <meta property="twitter:url" content="https://pfc.dev/{lang}">
  <link rel="alternate" hreflang="uk" href="https://pfc.dev/ua" />
  <link rel="alternate" hreflang="en" href="https://pfc.dev/en" />
  <link rel="alternate" hreflang="ru" href="https://pfc.dev/ru" />
</svelte:head>

<PageWrapper>
	<Link to="/about" title="about">
		<div class="home">
			<img width="149" height="142" src="/images/logo-big.svg" alt="Passion for coding">
			<h1 class="title">Passion for coding</h1>
			<p class="tip">{t("tip")}</p>
		</div>
	</Link>
</PageWrapper>

<Footer>
	<div class="online">
		<div class="discord-container">
			<DiscordLink />
		</div>
		&#123;<span class="number">{channel.presence_count}</span>{t("online")}&#125;
	</div>
</Footer>

<style>
	.home {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	img {
		max-width: 180px;
	}
	.title {
		font-weight: 700;
		font-size: 118px;
		line-height: 100px;
		margin: 40px 0px 60px;
		text-align: center;
	}
	.tip {
		font-weight: 700;
		font-size: 38px;
		line-height: 32px;
		margin: 0px;
	}

  .online {
    display: flex;
    align-items: center;
		font-size: 38px;
		line-height: 24px;
  }

	.discord-container {
		margin-right: 10px;
	}

	.online .number {
		color: var(--color-primary);
		margin-right: 10px;
	}

	@media(max-width: 600px) {
    img {
      max-width: 85px;
    }
		.title {
			font-size: 47px;
			line-height: 44px;
			margin: 20px 0px;
		}
		.tip {
			font-size: 20px;
		}
		.online {
			font-size: 28px;
			line-height: 18px;
		}
	}
</style>

