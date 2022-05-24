<script lang="ts">
  import { page } from '$app/stores';
  import { useTranslations } from './translations';
  
  const { t } = useTranslations();
</script>

<nav class="navigation">
  <a class="nav-item" href="https://discord.gg/zbMKUhSU7r">{t('join')}</a>
  <a
    class="nav-item"
    class:active={$page.url.pathname === '/contact'}
    title="Contact"
    href="/contact">
      {t('contact')}
  </a>
  <a
    class="nav-item"
    class:active={$page.url.pathname === '/members'}
    title="Members"
    href="/members">
      {t('members')}
  </a>
</nav>

<style>
  nav.navigation {
    list-style-type: none;
    padding-left: 0;
    display: flex;
  }

  .nav-item {
    margin-left: 20px;
  }

  .nav-item.active {
    font-weight: bold;
  }

  .nav-item::before {
    display: block;
    content: attr(title);
    font-weight: bold;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

</style>

<!-- markup (zero or more items) goes here -->