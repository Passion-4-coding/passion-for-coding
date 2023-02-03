<script context="module" lang="ts">
  import ActivityTabs from "$lib/modules/activities/ActivityTabs.svelte";
  import type { Load } from "@sveltejs/kit";

  export const load: Load = ({ params }) => {
    return {
      props: {

      }
    }
  }
</script>

<div class="activities">
  <ActivityTabs />
</div>

<style>
  .activities {
    padding-top: 40px;
  }
</style>

<!-- markup (zero or more items) goes here -->