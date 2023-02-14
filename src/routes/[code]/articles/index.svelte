<script context="module" lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import { ArticlesList } from "$lib/modules/articles";
</script>

<div class="container">
  <ArticlesList />
  <Footer>
    <div class="image-container">
      <img width="350" height="350" src="/images/articles.png" alt="articles">
    </div>
  </Footer>
</div>


<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 50px 25px;
  }
  .image-container {
    position: relative;
  }
  .image-container img {
    position: absolute;
    width: 400px;
    height: 400px;
    min-width: 400px;
    right: 0px;
    bottom: -60px;
  }
  @media(max-width: 600px) {
    .image-container {
      width: 100%;
    }
    .image-container img {
      min-width: 200px;
      width: 200px;
      height: 200px;
      margin: 0 auto;
      left: 0;
    }
  }
</style>

<!-- markup (zero or more items) goes here -->