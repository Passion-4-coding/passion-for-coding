<script lang="ts">
  import { page } from '$app/stores';
  import Link from '$lib/components/Link.svelte';
  import { fade } from 'svelte/transition';
  import { activityTabs } from "./utils";

  page.subscribe(route => {
    console.log(route);
  })
</script>

  <div class="navigation-container" transition:fade>
    <h1>/ROOT:</h1>
    <nav>
      {#each activityTabs as item}
        <div class="link-container">
          <span class="line" />
          <Link
            to={`/activities?tab=${item}`}
            class="nav-item {$page.url.pathname.includes(item) && 'active'}"
            title={item}
          >
            &lt;<span class="nav-item-content">{item}</span>&gt;
          </Link>
        </div>
      {/each}
    </nav>
  </div>

<style>
  .navigation-container {
    padding: 5px 25px;
    flex-direction: column;
    align-items: baseline;
  }

  h1 {
    margin: 0;
    font-size: 54px;
    line-height: 36px;
    display: inline;
    border-bottom: 5px solid var(--color-secondary);
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
</style>