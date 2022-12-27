<script lang="ts">
  import { DISCORD_LINK } from '$lib/constants';
</script>

<a href={DISCORD_LINK} class="discord">
  <img width="54" height="41" src="/images/discord.svg" alt="discord">
</a>

<style>
  @media(max-width: 992px) {
    img {
      max-width: 40px;
    }
	}
  @media(max-width: 600px) {
    img {
      max-width: 32px;
      margin-top: 5px;
    }
	}
</style>
