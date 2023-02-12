<script context="module" lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import ActivityTabs from "$lib/modules/activities/ActivityTabs.svelte";
  import type { Load } from "@sveltejs/kit";

  export const load: Load = ({ params }) => {
    return {
      props: {

      }
    }
  }
</script>

<div class="activities container">
  <ActivityTabs />
  <Footer>
    <div class="image-container">
      <img width="507" height="230" src="/images/activities.svg" alt="activities">
    </div>
  </Footer>
</div>

<style>
  .activities {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
  }
  @media(max-width: 768px) {
    .image-container {
      display: none;
    }
  }
</style>

<!-- markup (zero or more items) goes here -->