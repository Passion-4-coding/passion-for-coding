<script lang="ts">
  import Title from "$lib/Title.svelte";
  import { useTranslations } from "$lib/translations";
  
  const { t } = useTranslations("actions");
</script>

<div class="container">
  <Title>{t("title")}</Title>
  <ul class="actions">
    <li class="action secondary">
      <img src="/images/job.svg" alt="job" width="128px" height="128px">
      <h3 class="action-title">{t("action1Title")}</h3>
      <p class="action-description">{t("action1Description")}</p>
    </li>
    <li class="action primary">
      <img src="/images/community.svg" alt="community" width="128px" height="128px">
      <h3 class="action-title">{t("action2Title")}</h3>
      <p class="action-description">{t("action2Description")}</p>
    </li>
    <li class="action secondary">
      <img src="/images/article.svg" alt="article" width="128px" height="128px">
      <h3 class="action-title">{t("action3Title")}</h3>
      <p class="action-description">{t("action3Description")}</p>
    </li>
  </ul>
</div>

<style>
  .container {
    padding-top: 50px;
  }
  ul.actions {
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }
  li.action {
    text-align: center;
    width: 300px;
    padding: 20px;
    border-radius: var(--border-radius);
  }
  li.action.primary {
    background-color: var(--color-primary-30);
  }
  li.action.secondary {
    background-color: var(--color-secondary-30);
  }
  .action-title {
    font-size: var(--font-size-xl);
    font-weight: bold;
    margin: 20px 0px;
  }
  .action-description {
    font-size: var(--font-size-md);
  }
  @media(max-width: 992px) {
    ul.actions {
      gap: 20px;
    }
    li.action {
      padding: 20px 10px;
    }
    
    .action-title {
      margin: 10px 0px;
    }
  }

  @media(max-width: 768px) {
    ul.actions {
      gap: 10px;
    }
    li.action {
      padding: 10px 10px;
    }    
    .action-title {
      font-size: var(--font-size-lg);
      margin: 10px 0px;
    }
    .action-description {
      font-size: var(--font-size-sm);
    }
  }

  @media(max-width: 600px) {
    ul.actions {
      gap: 20px;
      flex-direction: column;
      align-items: center;
    }
    li.action {
      padding: 20px;
      width: 100%;
      max-width: 400px;
    }    
    .action-title {
      font-size: var(--font-size-xl);
    }
    .action-description {
      font-size: var(--font-size-md);
    }
  }
</style>