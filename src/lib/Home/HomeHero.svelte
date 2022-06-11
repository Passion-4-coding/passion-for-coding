<script lang="ts">
  import Button from "$lib/Button.svelte";
  import { getSelectedLanguage, useTranslations } from "$lib/translations";
  import { DISCORD_LINK } from "$lib/constants";

  const { t } = useTranslations("hero");
  const lang = getSelectedLanguage();
</script>

<div class="container">
  <div class="left">
    <h1>
      {@html t('title')}
      <span class="subtext">{t("in")} <img src="/images/discord.svg" width="100px" height="27px" alt="discord"></span>
    </h1>
    <p class="description {lang}">{@html t("description")}</p>
    <a href={DISCORD_LINK} class="button-container">
      <Button size="lg">{t("cta")}</Button>
      <Button size="md">{t("cta")}</Button>
    </a>
  </div>
  <div class="right">
    <img src="/images/hero.webp" alt="community" width="550px" height="347px">
  </div>
  <div class="bg" />
</div>

<style>
  .container {
    position: relative;
    padding-bottom: 30px;
    display: flex;
    justify-content: space-between;
    padding: 50px;
  }

  .bg {
    background-color: var(--color-primary);
    opacity: 0.1;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    z-index: -1;
  }

  h1 {
    position: relative;
    margin: 0px;
    font-size: 48px;
    white-space: nowrap;
  }

  .subtext {
    position: absolute;
    font-size: var(--font-size-md);
    display: flex;
    align-items: center;
    top: -10px;
    right: -100px;
    font-weight: 400;
  }

  .subtext img {
    max-width: 100px;
    margin-left: 5px;
  }

  .description {
    font-size: var(--font-size-xl);
    margin: 30px 0px 50px;
    max-width: 260px;
  }

  .description.en {
    max-width: 250px;
  }

  .right {
    max-width: 50%;
    padding: 20px 0px 0px 30px;
  }

  .button-container :global(.md) {
    display: none;
  }

  @media(max-width: 992px) {
    h1 {
      font-size: 36px;
    }
    .description {
      font-size: var(--font-size-md);
      margin: 20px 0px 20px;
      max-width: 260px;
    }
  }
  @media(max-width: 768px) {
    h1 {
      font-size: 28px;
    }
    .description {
      font-size: var(--font-size-md);
      margin: 10px 0px 10px;
      max-width: 260px;
    }
    .button-container :global(.lg) {
      display: none;
    }
    .button-container :global(.md) {
      display: initial;
    }
  }
  @media(max-width: 600px) {
    .container {
      padding: 20px;
    }
    .left {
      width: 100%;
      text-align: center;
    }
    h1 {
      text-align: center;
      font-size: var(--font-size-xl);
    }
    .subtext {
      position: relative;
      left: inherit;
      right: inherit;
      display: flex;
      justify-content: center;
      padding-top: 5px;
      width: 100%;
      text-align: center;
    }
    .description {
      text-align: center;
      max-width: 250px;
      margin: 0 auto;
      padding-bottom: 20px;
    }
    .button-container {
      padding-top: 20px;
      text-align: center;
    }
    .right {
      display: none;
    }
  }
</style>

<!-- markup (zero or more items) goes here -->