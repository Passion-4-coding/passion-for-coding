<script>
  import Button from './Button.svelte';
  import Link from './Link.svelte';
  import { DISCORD_LINK } from '$lib/constants';
  import { useTranslations } from './translations';

  const { t } = useTranslations("header")
</script>

<header>
  <div class="container">
    <Link to="/">
      <div class="logo-container">
        <img width="50px" height="38px" class="logo" src="/images/logo.svg" alt="passion for coding logo">
        <div class="text">
          <p class="passion">Passion for</p>
          <p class="coding">coding</p>
        </div>  
      </div>
    </Link>
    <a href={DISCORD_LINK}>
      <Button variant="outlined" size="sm">
        <span class="desktop">{t("join")}</span>
        <span class="mobile">{t("join-short")}</span>
      </Button>
    </a>
  </div>
</header>

<style>
  .container {
    display: flex;
    align-items: center;
    padding: 15px;
    justify-content: space-between;
  }
  .logo-container {
    display: flex;
    align-items: center;
  }
  .logo {
    max-width: 50px;
  }
  .text {
    margin-left: 10px;
  }
  .passion {
    font-size: var(--font-size-sm);
    color: var(--color-primary);
  }
  .coding {
    font-size: var(--font-size-lg);
    color: var(--color-primary);
    text-transform: uppercase;
    font-weight: bold;
  }
</style>

<!-- markup (zero or more items) goes here -->