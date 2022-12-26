<script lang="ts">
  export let isOpened = false;
</script>

<div class="menu-icon" class:opened={isOpened} on:click>
  <span></span>
  <span></span>
  <span></span>
</div>

<style>
  .menu-icon {
    margin: 20px auto;
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: relative;
    z-index: 11;
  }
  .menu-icon span {
    background-color: var(--color-secondary);
    height: 4px;
    position: absolute;
    width: 100%;
    left: 0;
    transition: all 0.3s ease;
  }
  .menu-icon span:first-child {
    top: 0;
  }
  .menu-icon span:nth-child(2) {
    top: 10px;
  }
  .menu-icon span:last-child {
    top: 20px;
  }
  .menu-icon.opened span:nth-child(2) {
    opacity: 0;
  }
  .menu-icon.opened span:first-child,
  .menu-icon.opened span:last-child {
    top: 10px;
  }
  .menu-icon.opened span:first-child {
    transform: rotate(45deg);
  }
  .menu-icon.opened span:last-child {
    transform: rotate(-45deg);
  }
</style>

<!-- markup (zero or more items) goes here -->