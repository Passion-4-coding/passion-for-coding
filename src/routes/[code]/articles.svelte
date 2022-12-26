<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = ({ params }) => {
    return {
      props: {

      }
    }
  }
</script>

<div class="content">
  Page is under development
</div>

<style>
  .content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 56px;
    line-height: 34px;
  }
</style>

<!-- markup (zero or more items) goes here -->