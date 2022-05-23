<script lang="ts">
  import { page } from '$app/stores';
</script>

<nav class="navigation">
  <a class="nav-item" href="https://discord.gg/zbMKUhSU7r">Join</a>
  <a
    class="nav-item"
    class:active={$page.url.pathname === '/contact'}
    title="Contact"
    href="/contact">
      Contact
  </a>
  <a
    class="nav-item"
    class:active={$page.url.pathname === '/members'}
    title="Members"
    href="/members">
      Members
  </a>
</nav>

<style>
  nav.navigation {
    list-style-type: none;
    padding-left: 0;
    display: flex;
  }

  .nav-item {
    margin-left: 20px;
  }

  .nav-item.active {
    font-weight: bold;
  }

  .nav-item::before {
    display: block;
    content: attr(title);
    font-weight: bold;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

</style>

<!-- markup (zero or more items) goes here -->