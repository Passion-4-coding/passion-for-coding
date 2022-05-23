<script>
  import Navigation from './Navigation.svelte';
</script>

<header>
  <div class="container">
    <a href="/">
      <div class="logo-container">
        <img width="50px" height="38px" class="logo" src="/images/logo.svg" alt="passion for coding logo">
        <div class="text">
          <p class="passion">Passion for</p>
          <p class="coding">coding</p>
        </div>  
      </div>
    </a>
    <Navigation />
  </div>
</header>

<style>
  .container {
    display: flex;
    align-items: center;
    padding: 15px;
    justify-content: space-between;
  }
  .logo-container {
    display: flex;
    align-items: center;
  }
  .logo {
    max-width: 50px;
  }
  .text {
    margin-left: 10px;
  }
  .passion {
    font-size: var(--font-size-sm);
    color: var(--color-primary);
  }
  .coding {
    font-size: var(--font-size-lg);
    color: var(--color-primary);
    text-transform: uppercase;
    font-weight: bold;
  }
</style>

<!-- markup (zero or more items) goes here -->