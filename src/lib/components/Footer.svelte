<script lang="ts">
  import { LanguagesSwitcher } from "$lib/modules/translations";
</script>

<footer>
  <div class="container">
    <div class="languages-switcher">
      <LanguagesSwitcher />
    </div>
    <slot />
  </div>
</footer>

<style>
  footer {
    padding: 20px 0px;
  }
  .container {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  @media(max-width: 600px) {
    footer {
      height: 50px;
    }
    .container {
      padding: 0px;
      justify-content: center;
    }
    .languages-switcher {
      display: none;
    }
	}
</style>