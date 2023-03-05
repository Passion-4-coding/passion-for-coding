<script lang="ts">
  import { page } from '$app/stores';
  import Link from '$lib/components/Link.svelte';
  import { fade } from 'svelte/transition';
  import { useTranslations } from '../translations';
  import type { EActivityTabs } from './types';

  export let tab: EActivityTabs;
  import { activityTabs, activityItems } from "./utils";

  let activeItemKey = $page.url.searchParams.get("tab") || "community";
  let activeItem = activityItems.find(item => item.name === tab) || activityItems[0];

  page.subscribe(route => {
    activeItemKey = $page.url.searchParams.get("tab") || "community";
    activeItem = activityItems.find(item => item.name === tab) || activityItems[0];
  })

  const { t } = useTranslations("activities");
</script>

<div class="navigation-container" transition:fade>
  <div class="tabs">
    <h1>/ROOT:</h1>
    <nav>
      {#each activityTabs as item}
        <div class="link-container">
          <span class="line" />
          <Link
            to={`/activities?tab=${item}`}
            class="nav-item {activeItemKey === item ? 'active' : ''}"
            title={item}
          >
            &lt;<span class="nav-item-content">{item}</span>&gt;
          </Link>
        </div>
      {/each}
    </nav>
  </div>
  <div class="content">
    <h1>{t(activeItem.titleTranslationKey)}</h1>
    <p class="description">{@html t(activeItem.descriptionTranslationKey)}</p>
  </div>
</div>

<style>
  .navigation-container {
    padding: 50px 25px;
    display: flex;
    gap: 200px;
    flex: 1;
  }

  h1 {
    margin: 0;
    font-size: 54px;
    line-height: 36px;
    display: inline;
    border-bottom: 5px solid var(--color-secondary);
    text-transform: uppercase;
  }

  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-left: 5px solid var(--color-secondary);
    margin: 40px 0px 0px 10px;
  }

  nav .link-container {
    display: flex;
    position: relative;
    align-items: end;
    font-size: 38px;
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

  .description {
    font-size: 30px;
    line-height: 34px;
    padding-top: 50px;
  }

  .description :global(b) {
    color: var(--color-primary);
  }

  @media(max-width: 768px) {
    h1 {
      margin: 0;
      font-size: 34px;
      border-bottom: 3px solid var(--color-secondary);
    }
    .description {
      font-size: 24px;
      line-height: 26px;
    }
    nav .link-container {
      font-size: 28px;
      line-height: 22px;
      height: 30px;
    }
    nav .link-container :global(.nav-item) {
      top: 14px;
    }
    nav .link-container:first-child :global(.nav-item) {
      top: 20px;
    }
    nav {
      margin: 32px 0px 0px 10px;
    }
  }
  @media(max-width: 600px) {
    .navigation-container {
      padding: 20px 5px;
      flex-direction: column;
      gap: 50px;
    }
    .description {
      padding-top: 20px;
    }
  }
</style>