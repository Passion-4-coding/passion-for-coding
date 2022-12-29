<script>
  import Footer from "$lib/components/Footer.svelte";
  import RoleBlock from "$lib/components/RoleBlock.svelte";
  import Title from "$lib/components/Title.svelte";
  import {useTranslations} from "$lib/modules/translations";

  const { t } = useTranslations("roles");
</script>

<!-- layout -->

<div class="roles container">
  <Title>{t("title")}</Title>
  <div class="roles-content">
    <RoleBlock title="Service" description={t("service")} imgName="role0000" />
    <RoleBlock title="Trainee" description={t("trainee")} imgName="role0001" />
    <RoleBlock title="Junior" description={t("junior")} imgName="role0010" />
    <RoleBlock title="Middle" description={t("middle")} imgName="role0011" />
    <RoleBlock title="Senior" description={t("senior")} imgName="role0100" />
    <RoleBlock title="Principal" description={t("principal")} imgName="role0101" />
    <RoleBlock title="Architect" description={t("architect")} imgName="role0110" />
    <RoleBlock title="Lead" description={t("lead")} imgName="role1110" />
    <RoleBlock title="Owner" description={t("owner")} imgName="role1111" />
  </div>
</div>

<Footer />

<!-- styles -->

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
