<script lang="ts">
  import { useTranslations } from "$lib/translations";

  const { t } = useTranslations();
</script>

<div class="container">
  <div class="bg" />
  <h1>
    {t('heroTitle1')}
    {t('heroTitle2')}
    <span class="primary">
      {t('heroTitle3')}
    </span>
  </h1>
</div>

<style>
  .container {
    position: relative;
    padding: 100px 30px 0px;
  }
  .bg {
    position: absolute;
    opacity: 0.7;
    background-color: var(--color-secondary);
    width: 100%;
    height: 290px;
    z-index: 1;
    border-radius: 20px;
    top: 10px;
    margin: 0px -30px;
  }
  h1 {
    font-size: 80px;
    max-width: 200px;
    color: var(--color-text);
    position: relative;
    z-index: 2;
    margin: 0px;
  }

  h1 {
    color: var(--color-bg);
  }

  h1 .primary {
    color: var(--color-primary);
  }

  .icon {
    position: absolute;
    font-weight: bold;
    z-index: 2;
  }

  .icon-1 {
    left: 40px;
    top: 0px;
    font-size: 90px;
    animation: scale1 2s forwards;
  }

  .icon-2 {
    right: 200px;
    top: 50px;
    font-size: 110px;
    transform: rotate(120deg);
  }
  .icon-3 {
    right: 0px;
    bottom: 100px;
    font-size: 70px;
    transform: rotate(60deg);
  }
  .icon-4 {
    right: 500px;
    bottom: 60px;
    font-size: 110px;
  }
  .icon-5 {
    left: 400px;
    top: 60px;
    font-size: 110px;
  }

  @keyframes icon1 {
    0% {
      transform: scale(0,0) rotate(20deg); 
    }
    100% {
      transform: scale(1,1) rotate(-20deg); 
    }
  }
</style>

<!-- markup (zero or more items) goes here -->