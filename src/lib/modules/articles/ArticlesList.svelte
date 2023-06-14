<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import { useTranslations } from "../translations";

  const { t } = useTranslations("articles");
</script>

<div class="articles">
  <div class="article-short">
    <h1 class="title">{t("botsUpdateTitle")}</h1>
    <p class="description">{t("botsUpdateShort")}</p>
    <div class="attributes">
      <Link to="/articles/bots-introduction"><span class="text">{t("readMore")}</span> ></Link>
      <div>[ <span class="text">{t("botsUpdateDate")}</span> ]</div>
    </div>
  </div>
  <div class="article-short">
    <h1 class="title">{t("improvementsTitle")}</h1>
    <p class="description">{t("improvementsShort")}</p>
    <div class="attributes">
      <Link to="/articles/improvements"><span class="text">{t("readMore")}</span> ></Link>
      <div>[ <span class="text">{t("improvementsDate")}</span> ]</div>
    </div>
  </div>
  <div class="article-short">
    <h1 class="title">{t("vacanciesTitle")}</h1>
    <p class="description">{t("vacanciesShort")}</p>
    <div class="attributes">
      <Link to="/articles/vacancies"><span class="text">{t("readMore")}</span> ></Link>
      <div>[ <span class="text">{t("vacanciesDate")}</span> ]</div>
    </div>
  </div>
  <div class="article-short">
    <h1 class="title">{t("karmaTitle")}</h1>
    <p class="description">{t("karmaShort")}</p>
    <div class="attributes">
      <Link to="/articles/karma"><span class="text">{t("readMore")}</span> ></Link>
      <div>[ <span class="text">{t("karmaDate")}</span> ]</div>
    </div>
  </div>
</div>


<style>
  .articles {
    padding: 50px 0px 300px;
    flex: 1;
  }
  .title {
    font-size: 40px;
  }
  .description {
    font-size: 24px;
  }
  .text {
    color: var(--color-primary);
  }
  .article-short {
    padding-bottom: 40px;
  }
  .attributes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
  }
</style>

<!-- markup (zero or more items) goes here -->
