<script lang="ts">
  import { page } from "$app/stores";

  import { getSelectedLanguage } from "./translations";

  const currentLang = getSelectedLanguage();
  const paths = $page.url.pathname.split('/');
  const generateLink = (lang: string) => {
    const paths = $page.url.pathname.split('/');
    return '/' + [lang, ...paths.slice(2)].join('/');
  }

</script>

<div class="languages">
  {#if currentLang !== 'ua'}
    <a href={generateLink('ua')}>
      <img src="/images/ua.svg" alt="ua">
    </a>
  {/if}
  {#if currentLang !== 'ru'}
    <a href={generateLink('ru')}>
      <img src="/images/ru.svg" alt="ru">
    </a>
  {/if}
  {#if currentLang !== 'en'}
    <a href={generateLink('en')}>
      <img src="/images/gb.svg" alt="gb">
    </a>
  {/if}
</div>

<style>
  .languages {
    display: flex;
    min-width: 100px;
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
</style>

<!-- markup (zero or more items) goes here -->