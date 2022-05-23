<script lang="ts">
  import { page } from '$app/stores';
</script>

<ul class="navigation" role="navigation">
  <li class="nav-item" title="Join">
    <a href="https://discord.gg/zbMKUhSU7r">Join</a>
  </li>
  <li class="nav-item" class:active={$page.url.pathname === '/contact'} title="Contact">
    <a href="/contact">Contact</a>
  </li>
  <li class="nav-item" class:active={$page.url.pathname === '/members'} title="Members">
    <a href="/members">Members</a>
  </li>
</ul>

<style>
  ul.navigation {
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