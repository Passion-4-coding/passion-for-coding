<script lang="ts">
  export let number: string;
  export let description: string;
</script>

<div class="rule">
  <span class="number">[<span class="colored">{number}</span>]</span>
  <span class="description">{description}</span>
</div>

<style>
  .rule {
    font-family: Play;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
  }
  .number {
    font-size: 38px;
    line-height: 32px;
  }
  .description {
    margin-left: 10px;
    font-weight: 600;
    font-size: 30px;
    line-height: 32px;
  }
  .colored {
    color: var(--color-primary);
  }
  @media (max-width: 992px) {
    .rule {
      margin-bottom: 20px;
    }
    .number {
      font-size: 24px;
      line-height: 32px;
    }
    .description {
      font-size: 20px;
      line-height: 21px;
    }
  }
  @media (max-width: 600px) {
    .rule {
      margin-bottom: 15px;
    }
    .number {
      font-size: 24px;
      line-height: 32px;
    }
    .description {
      font-size: 20px;
      line-height: 21px;
    }
  }
</style>
