<script lang="ts">
  import type { IChannel } from "$lib/discord";
  import { useTranslations } from "$lib/translations";
  import { getContext } from "svelte";

  const channel: IChannel = getContext("channel");
  const { t } = useTranslations("membersOnline");
</script>

<div class="container">
  <h3 class="title">
    {t("title")}
  </h3>
  <ul>
    {#each channel.members as member}
      <li class="member">
        <img src={member.avatar_url} alt={member.username}> {member.username}
      </li>
    {/each}
  </ul>
</div>

<style>
  ul {
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
  }
  .member {
    margin: 0px 20px 10px 0px;
    display: flex;
    align-items: center;
  }
  .member img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    border-radius: 20px;
  }
</style>
