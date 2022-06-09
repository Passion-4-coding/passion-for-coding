<script lang="ts">
  import Button from "$lib/Button.svelte";
  import { useTranslations } from "$lib/translations";
  import { DISCORD_LINK } from "$lib/constants";

  const { t } = useTranslations("hero");
</script>

<div class="container">
  <div class="content">
    <h1>
      {@html t('title')}
    </h1>
    <div class="bottom-box">
      <div class="action-container">
        <p class="description">{@html t("description")}</p>
        <div class="button-container">
          <a href={DISCORD_LINK}>
            <Button size="lg">{t("cta")}</Button>
          </a>
        </div>
      </div>
      <div class="image-container">
        <img src="/images/hero.png" alt="community">
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    position: relative;
    background-color: var(--color-secondary);
    padding-bottom: 30px;
  }
  h1 {
    padding: 30px 0px 20px;
    color: var(--color-white);
    font-size: 80px;
    margin: 0px;
  }
  .bottom-box {
    display: flex;
    justify-content: space-between;
  }
  .description {
    padding-bottom: 30px;
    color: var(--color-primary);
    font-size: var(--font-size-xl);
    max-width: 500px;
  }
  .image-container img {
    max-width: 250px;
  }

  @media(max-width: 992px) {
    h1 {
      font-size: 72px;
    }
  }
  @media(max-width: 768px) {
    h1 {
      font-size: 54px;
    }
  }
  @media(max-width: 600px) {
    h1 {
      font-size: 40px;
      text-align: center;
    }
    .bottom-box {
      justify-content: center;
    }
    h1, .description, .button-container {
      text-align: center;
    }
    .image-container img {
      display: none;
    }
  }
</style>

<!-- markup (zero or more items) goes here -->