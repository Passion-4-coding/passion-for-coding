<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import { page } from "$app/stores";
  import { useTranslations } from "../translations";
  import { NAVIGATION_ITEMS } from "./utils";

  const { t } = useTranslations("navigation");
</script>

<nav>
  {#each NAVIGATION_ITEMS as item}
    <Link
      to={item.route}
      class="nav-item {$page.url.pathname.includes(item.route) && 'active'}"
      title={t(item.translationKey)}
    >
      &lt;<span class="nav-item-content">{t(item.translationKey)}</span>&gt;
    </Link>
  {/each}
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  nav :global(.nav-item) {
    font-weight: 700;
    font-size: 38px;
    line-height: 32px;
  }

  nav :global(.nav-item.active .nav-item-content) {
    color: var(--color-primary);
  }

  @media (max-width: 992px) {
    nav {
      padding: 0 10px;
    }
    nav :global(.nav-item) {
      font-weight: 700;
      font-size: 24px;
      line-height: 18px;
    }
  }
</style>
