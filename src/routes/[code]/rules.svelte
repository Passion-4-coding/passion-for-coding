<script>
  import Footer from "$lib/components/Footer.svelte";
  import Title from "$lib/components/Title.svelte";
  import { Rule, rules } from "$lib/modules/rules";
  import { useTranslations } from "$lib/modules/translations";

  const { t } = useTranslations("rules");
</script>

<div class="rules container">
  <Title>{t("title")}</Title>
  <div class="rules-content">
    <div class="rules-block">
      {#each rules as rule}
        <Rule
          number={rule.number}
          description={t(rule.descriptionTranslationKey)}
        />
      {/each}
    </div>
    <img class="policeman" alt="policeman" src="/images/policeman.png" />
    <img
      class="small_policeman"
      alt="polsmall_policemaniceman"
      src="/images/small_policeman.png"
    />
  </div>
</div>

<Footer />

<style>
  .rules :global(b) {
    color: var(--color-primary);
  }
  .rules {
    padding: 100px 20px 70px 20px;
  }
  .rules-content {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  .rules-block {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  .small_policeman {
    display: none;
  }
  @media (max-width: 992px) {
    .rules {
      padding: 50px 15px;
    }
    .policeman {
      display: none;
    }
    .small_policeman {
      display: block;
      margin-bottom: 55px;
    }
    .rules-content {
      flex-direction: column;
      height: 100%;
      margin-top: 30px;
    }
  }
  @media (max-width: 600px) {
    .rules {
      padding: 40px 10px;
      padding-bottom: 0;
    }
    .small_policeman {
      margin-bottom: 0;
    }

    .rules-content {
      margin-top: 10px;
    }
  }
</style>
