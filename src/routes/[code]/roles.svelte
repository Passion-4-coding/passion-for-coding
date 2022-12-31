<script>
  import Footer from "$lib/components/Footer.svelte";
  import Title from "$lib/components/Title.svelte";
  import { Role, roles } from "$lib/modules/roles";
  import { useTranslations  } from "$lib/modules/translations";

  const { t } = useTranslations("roles");
</script>

<div class="roles container">
  <Title>{t("title")}</Title>
  <div class="roles-content">
    {#each roles as role}
      <Role name={role.name} imgName={role.image} description={t(role.descriptionTranslationKey)}/>
    {/each}
  </div>
</div>

<Footer />

<style>
  .roles {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 100px 20px 70px 20px;
  }
  .roles-content {
    margin-top: 50px;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 20px 40px;
  }
  @media (max-width: 992px) {
    .roles {
      padding: 50px 15px;
    }
    .roles-content {
      grid-auto-flow: row;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px 20px;
    }
  }
  @media (max-width: 600px) {
    .roles {
      padding: 40px 10px;
    }
    .roles-content {
      margin-top: 10px;
      grid-template-rows: none;
      grid-template-columns: 1fr;
      grid-gap: 0;
    }
  }
</style>
