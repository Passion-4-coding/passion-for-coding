<script lang="ts">
  import { page } from '$app/stores';
  import Link from './Link.svelte';
  import { useTranslations } from './translations';
  const { t } = useTranslations();
</script>

<nav class="navigation">
  <Link external to='https://discord.gg/zbMKUhSU7r' class="nav-item">
    {t('join')}
  </Link>
  <Link
    to='/contact'
    class="nav-item {$page.url.pathname.includes("/contact") && 'active'}"
    title="Contact"
    disabled
  >
    {t('contact')}
  </Link>
  <Link
    to='/members'
    class="nav-item {$page.url.pathname.includes("/members") && 'active'}"
    title="Members"
    disabled
  >
    {t('members')}
  </Link>
</nav>

<style>
  nav.navigation {
    display: flex;
  }

  nav.navigation :global(.nav-item) {
    margin-left: 20px;
  }

  nav.navigation :global(.nav-item.active:not(.disabled)) {
    font-weight: bold;
  }

  nav.navigation :global(.nav-item::before) {
    display: block;
    content: attr(title);
    font-weight: bold;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

</style>

<!-- markup (zero or more items) goes here -->