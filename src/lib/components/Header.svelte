<script>
  import Link from './Link.svelte';
  import { Navigation, NavigationMobile } from '../modules/navigation';
  import DiscordLink from '$lib/components/DiscordLink.svelte';

  export let isIndex = false;
</script>

<header>
  <div class="container">
    {#if !isIndex}
      <Link to="/">
        <div class="logo-container">
          <img width="50px" height="38px" class="logo" src="/images/logo-small.svg" alt="passion for coding logo">
        </div>
      </Link>
    {/if}
    <div class="navigation-container">
      <Navigation />
    </div>
    <div class="mobile-navigation-container">
      <NavigationMobile />
    </div>
    {#if !isIndex}
      <div class="discord-container">
        <DiscordLink />
      </div>
    {/if}
  </div>
</header>

<style>
  .container {
    display: flex;
    align-items: center;
    padding: 15px;
    justify-content: space-between;
    padding: 40px 20px 0px;
    position: relative;
  }
  
  .navigation-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    max-width: 1000px;
    padding: 0px 100px;
    margin: 0 auto;
  }

  .mobile-navigation-container {
    display: none;
    position: absolute;
    right: 20px;
    top: 0px;
  }

  @media(max-width: 992px) {
    .navigation-container {
      padding: 0px 10px;
    }
    .logo-container img {
      max-width: 40px;
    }
	}

  @media screen and (max-width: 600px) {
    .container {
      padding: 12px 20px 0px;
    }
    .navigation-container {
      display: none;
    }
    .mobile-navigation-container {
      display: block;
    }
    .discord-container {
      display: none;
    }
	}
</style>