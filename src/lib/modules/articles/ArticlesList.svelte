<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import { useTranslations } from "../translations";
  import { format } from "date-fns";
  import type { IArticle } from "./dto";

  export let articles: IArticle[];
  const { t } = useTranslations("articles");
</script>

<div class="articles">
  {#each articles as article}
    <div class="article-short">
      <h1 class="title">{article.titleCompact}</h1>
      <p class="description">{article.contentCompact}</p>
      <div class="attributes">
        <Link to={`/articles/${article.slug}`}><span class="text">{t("readMore")}</span></Link>
        <div>[ <span class="text">{format(new Date(article.publishedOn), "dd.MM.yyyy")}</span> ]</div>
      </div>
    </div>
  {/each}  
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
