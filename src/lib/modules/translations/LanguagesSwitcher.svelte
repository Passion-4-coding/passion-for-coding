<script lang="ts">
  import { page } from "$app/stores";
  import { getSelectedLanguage } from "./utils";

  const currentLang = getSelectedLanguage();

  const generateLink = (lang: string) => {
    const paths = $page.url.pathname.split('/');
    return '/' + [lang, ...paths.slice(2)].join('/');
  }
</script>

<ul class="languages">
  <li class="language">
    [
    <a href={generateLink('ua')} class:active={currentLang === 'ua'}>
      ua,
    </a>
  </li>
  <li class="language">
    <a href={generateLink('ru')} class:active={currentLang === 'ru'}>
      ru,
    </a>
  </li>
  <li class="language">
    <a href={generateLink('en')} class:active={currentLang === 'en'}>
      en
    </a>
    ]
  </li>
</ul>

<style>
  ul.languages {
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0px;
  }
  .language {
    font-size: 38px;
    line-height: 32px;
    margin: 0 5px;
  }
  .language .active {
    color: 700;
    color: var(--color-primary);
  }

  @media(max-width: 600px) {
    .language {
      font-size: 28px;
      margin: 0 2px;
    }
	}
</style>