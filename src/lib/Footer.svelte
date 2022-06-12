<script lang="ts">
    import { page } from "$app/stores";

    import { getSelectedLanguage } from "./translations";

    const currentLang = getSelectedLanguage();
    const generateLink = (lang: string) => {
      const paths = $page.url.pathname.split('/');
      return '/' + [lang, ...paths.slice(2)].join('/');
    }
</script>

<footer>
  <ul class="languages">
    <li>
      <a class="language" class:active={currentLang === 'ua'} href={generateLink('ua')}>
        <img src="images/ua.svg" alt="ua"> Українська
      </a>
    </li>
    <li>
      <a class="language" class:active={currentLang === 'ru'} href={generateLink('ru')}>
        <img src="images/ru.svg" alt="ru"> Русский
      </a>
    </li>
    <li class="language">
      <a class="language" class:active={currentLang === 'en'} href={generateLink('en')}>
        <img src="images/gb.svg" alt="en"> English
      </a>
    </li>
  </ul>
</footer>

<style>
  footer {
    background-color: var(--color-primary);
    height: 80px;
  }
  ul.languages {
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-white);
    height: 100%;
  }
  .language {
    display: flex;
    align-items: center;
    font-size: var(--font-size-xs);
    margin: 0px 10px;
  }
  .language.active {
    font-weight: 700;
  }
  .language img {
    margin-right: 5px;
  }
</style>

<!-- markup (zero or more items) goes here -->