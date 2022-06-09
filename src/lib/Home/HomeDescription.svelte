<script lang="ts">
  import { useTranslations } from "$lib/translations";

  const { t } = useTranslations();
</script>

<div class="container">
  <div class="content">{@html t("about")}</div>
</div>

<style>
  .container {
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 100px 0px;
    font-size: 32px;
    text-align: center;
  }
  
  @media(max-width: 768px) {
    .container {
      font-size: var(--font-size-xl);
      padding: 50px 0px;
    }
  }
  @media(max-width: 600px) {
    .container {
      padding: 30px 0px;
      font-size: var(--font-size-lg);
    }
  }
  @media(max-width: 320px) {
    .container {
      padding: 15px 0px;
      font-size: var(--font-size-md);
    }
  }
</style>