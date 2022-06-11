<script lang="ts">
  import { getContext } from "svelte";
  import type { IChannel } from "$lib/discord";
  import { useTranslations } from "$lib/translations";
  
  const channel: IChannel = getContext("channel");

  const { t: aboutT } = useTranslations("about");
  const { t } = useTranslations("benefits");

</script>

<div class="container">
  <div class="left">
    <h3 class="title">{@html aboutT("title")}</h3>
    <p class="description">
      {@html aboutT("description")}
    </p>
  </div>
  <div class="right">
    <ul class="benefits">
      <li class="benefit benefit1">
        <h5 class="benefit-title">{t("title1")}</h5>
        <p class="benefit-description">{t("description1")}</p>
      </li>
      <li class="benefit benefit2">
        <h5 class="benefit-title">{t("title2")}</h5>
        <p class="benefit-description">{t("description2")}</p>
      </li>
      <li class="benefit benefit3">
        <h5 class="benefit-title">{channel.presence_count}</h5>
        <p class="benefit-description">{t("description3")}</p>
      </li>
      <li class="benefit benefit4">
        <h5 class="benefit-title">{t("title4")}</h5>
        <p class="benefit-description">{t("description4")}</p>
      </li>
    </ul>
  </div>
</div>

<style>
  .container { 
    display: flex;
    max-width: 1230px;
    padding: 50px 0px;
  }

  .description {
    font-size: var(--font-size-xl);
    padding-right: 50px;
  }

  .benefits { 
    display: grid;
    list-style-type: none;
    padding-left: 0px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 50px 50px;
    grid-auto-flow: row;
    grid-template-areas:
      "benefit1 benefit2"
      "benefit3 benefit4";
  }

  .benefit {
    width: 190px;
    text-align: center;
    padding: 30px 10px;
    border-radius: var(--border-radius);
    max-height: 130px;
  }

  .benefit-title {
    font-size: 40px;
    line-height: 40px;
    margin: 0 0 10px;
  }

  .benefit-description {
    font-size: var(--font-size-md);
    margin: 0px;
  }

  .benefit1 {
    grid-area: benefit1;
    background-color: rgba(103, 100, 233, 0.3);
  }
  
  .benefit2 {
    grid-area: benefit2;
    background-color: rgba(245, 173, 28, 0.3);
  }
  
  .benefit3 {
    grid-area: benefit3;
    background-color: rgba(245, 173, 28, 0.3);
  }
  
  .benefit4 {
    grid-area: benefit4;
    background-color: rgba(103, 100, 233, 0.3);
  }

  .benefit4 .benefit-title {
    font-size: 60px;
  }

  @media(max-width: 992px) {
    .benefits { 
      gap: 25px 25px;
    }
    .description {
      font-size: var(--font-size-lg);
      margin: 0px;
    }
    .benefit {
      width: 150px;
      padding: 20px 10px;
      max-height: 110px;
    }
    .benefit-title {
      font-size: 36px;
      line-height: 40px;
      margin: 0 0 10px;
    }
    .benefit-description {
      font-size: var(--font-size-md);
      margin: 0px;
    }
  }

  @media(max-width: 768px) {
    .container {
      flex-direction: column;
    }
    h3.title {
      text-align: center;
    }
    .description {
      text-align: center;
      padding: 0px 0px 20px;
    }
    .benefits {
      justify-items: center; 
    }
  }

  @media(max-width: 600px) {
    .container { 
      display: flex;
      padding: 20px 0px;
    }
    .description {
      font-size: var(--font-size-md);
    }
    .benefits { 
      gap: 10px 10px;
    }
    .benefit {
      width: 120px;
      padding: 15px 5px;
      max-height: 90px;
    }
    .benefit-title {
      font-size: var(--font-size-xl);
      line-height: 20px;
      margin: 0 0 10px;
    }
    .benefit-description {
      font-size: var(--font-size-sm);
      margin: 0px;
    }
  }

</style>