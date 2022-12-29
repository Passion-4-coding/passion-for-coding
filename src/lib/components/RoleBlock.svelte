<script lang="ts">
  export let title: string;
  export let description: string;
  export let imgName: string;
</script>

<!-- layout -->

<div class="role-block">
  <img class="role-icon" src={`/images/${imgName}.png`} alt={title + " icon"} />
  <div class="role-info">
    <span class="role-title">{title}</span>
    <span class="role-description">{description}</span>
  </div>
</div>

<!-- styles -->

<style>
  .role-block {
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 5px solid var(--color-secondary);
    text-align: left;
  }
  .role-icon {
    margin: 0 23px 0 18px;
    object-fit: scale-down;
    max-width: 108px;
    max-height: 108px;
  }
  .role-info {
    display: flex;
    flex-direction: column;
    line-height: 25px;
    margin: 20px 10px 20px 0;
  }
  .role-title {
    font-weight: 600;
    font-size: 30px;
    color: var(--color-primary);
  }
  .role-description {
    font-size: 24px;
    margin-top: 10px;
  }
  @media (max-width: 992px) {
    .role-info {
      margin: 15px 10px 15px 0;
      line-height: 19px;
    }
    .role-title {
      font-weight: 600;
      font-size: 23px;
      color: var(--color-primary);
    }
    .role-description {
      font-size: 20px;
      margin-top: 10px;
    }
    .role-icon {
      margin: 8px 13px 8px 7px;
      object-fit: fill;
      max-width: 80px;
      max-height: 80px;
    }
  }

  @media (max-width: 600px) {
    .role-block {
      border: 3px solid var(--color-secondary);
      border-top-width: 1.5px;
      border-bottom-width: 1.5px;
      width: 100%;
      display: flex;
    }
    .role-icon {
      margin: 8px 13px 8px 7px;
      object-fit: scale-down;
      max-width: 40px;
      max-height: 40px;
    }
    .role-info {
      display: flex;
      flex-direction: column;
      margin: 0 7px 10px 0;
    }
    .role-title {
      line-height: 25px;
      font-weight: 600;
      font-size: 20px;
      color: var(--color-primary);
    }
    .role-description {
      margin-top: 0;
      font-size: 16px;
      line-height: 12px;
    }
  }
</style>
