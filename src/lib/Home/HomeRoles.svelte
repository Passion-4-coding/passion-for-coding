<script lang="ts">
  import Title from "$lib/Title.svelte";
  import { useTranslations } from "$lib/translations";

  const { t } = useTranslations("roles");

  const roles = [
    { name: t("service"), description: t("serviceDescription"), icon: "/images/service.svg" },
    { name: t("trainee"), description: t("traineeDescription"), icon: "/images/trainee.svg" },
    { name: t("junior"), description: t("juniorDescription"), icon: "/images/junior.svg" },
    { name: t("middle"), description: t("middleDescription"), icon: "/images/middle.svg" },
    { name: t("senior"), description: t("seniorDescription"), icon: "/images/senior.svg" },
    { name: t("principal"), description: t("principalDescription"), icon: "/images/principal.svg" },
    { name: t("architect"), description: t("architectDescription"), icon: "/images/architect.svg" },
    { name: t("lead"), description: t("leadDescription"), icon: "/images/lead.svg" },
    { name: t("owner"), description: t("ownerDescription"), icon: "/images/owner.svg" },
  ];

</script>

<div class="container" id="roles">
  <Title>{t("title")}</Title>
  <p class="description">{@html t("description")}</p>
  <ul class="roles">
    {#each roles as role}
      <li class="role">
        <img src={role.icon} alt={role.name} width="80px" height="80px" />
        <div class="text">
          <h4 class="role-title">{role.name}</h4>
          <p class="role-description">{role.description}</p>
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .container {
    padding: 50px 0px;
  }
  .description {
    margin: 0px;
    max-width: 400px;
  }
  .roles {
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
  }
  .role {
    display: flex;
    align-items: flex-start;
    width: 220px;
    margin: 0px 40px 20px 0px;
  }
  .role img {
    margin-right: 10px;
    min-width: 80px;
    height: 80px;
  }
  .text {
    padding: 5px 0px;
  }
  .role-title {
    margin: 0px 0px 5px;
    font-size: var(--font-size-lg);
  }
  .role-description {
    margin: 0px;
    font-size: var(--font-size-md);
    line-height: 16px;
  }
</style>
