<script lang="ts">
  import { page } from '$app/stores';
  import BurgerMenu from "$lib/components/BurgerMenu.svelte";
  import DiscordLink from '$lib/components/DiscordLink.svelte';
  import Link from "$lib/components/Link.svelte";
  import { fade } from 'svelte/transition';
  import { useTranslations } from '../translations';
  import LanguagesSwitcher from '../translations/LanguagesSwitcher.svelte';
  import { NAVIGATION_ITEMS } from "./utils";

  const { t } = useTranslations("navigation");

  let isOpened = false;

  const handleMenuClick = () => {
    isOpened = !isOpened;
    const appElement = document.getElementById("app") as HTMLDivElement;
    if (isOpened) {
      appElement.classList.add("overflow-hidden");
    } else {
      appElement.classList.remove("overflow-hidden");
    }
  }
</script>

<div class="menu-icon" class:opened={isOpened} on:click={handleMenuClick}>
  <span></span>
  <span></span>
  <span></span>
</div>
<BurgerMenu {isOpened} on:click={handleMenuClick} />

{#if isOpened}
  <div class="navigation-container" transition:fade>
    <h1>/{t("menu")}:</h1>
    <nav>
      {#each NAVIGATION_ITEMS as item}
        <div class="link-container">
          <span class="line" />
          <Link
            to={item.route}
            class="nav-item {$page.url.pathname.includes(item.route) && 'active'}"
            title={t(item.translationKey)}
          >
            &lt;<span class="nav-item-content">{t(item.translationKey)}</span>&gt;
          </Link>
        </div>
      {/each}
    </nav>
    <div class="footer-container">
      <LanguagesSwitcher />
      <DiscordLink />
    </div>
  </div>
{/if}

<style>
  .navigation-container {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: var(--color-bg);
    z-index: 10;
    display: none;
    padding: 5px 25px;
    overflow: hidden;
    flex-direction: column;
    align-items: baseline;
  }

  h1 {
    margin: 0;
    font-size: 40px;
    display: inline;
    border-bottom: 5px solid var(--color-secondary);
  }

  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-left: 5px solid var(--color-secondary);
    margin: 10px 0px 0px 10px;
  }

  nav .link-container {
    display: flex;
    position: relative;
    align-items: end;
    font-size: 28px;
    line-height: 32px;
    height: 50px;
  }

  nav .link-container :global(.nav-item) {
    position: absolute;
    left: 35px;
    top: 30px;
    z-index: 2;
  }

  nav .link-container:first-child {
    height: 35px;
  }

  nav .link-container:first-child :global(.nav-item) {
    top: 15px;
  }

  nav .link-container :global(.nav-item.active .nav-item-content) {
    color: var(--color-primary);
  }

  .line {
    display: block;
    height: 5px;
    background: var(--color-secondary);
    width: 30px;
  }

  .footer-container {
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
  }
  @media(max-width: 600px) {
    .navigation-container {
      display: flex;
    }
	}
</style>