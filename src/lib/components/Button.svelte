<script lang="ts">
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let variant: 'outlined' | 'filled' = 'filled';
</script>

<button type="button" class={`${size} ${variant}`}>
  <slot />
</button>

<style>
  button {
    font-family: var(--font-main);
    border-radius: var(--border-radius);
    cursor: pointer;
    font-weight: bold;
  }
  button.sm {
    padding: 12px 15px;
    font-size: var(--font-size-sm);
    line-height: 12px;
  }
  button.md {
    padding: 15px 20px;
    font-size: var(--font-size-md);
  }
  button.lg {
    padding: 16px 22px;
    font-size: var(--font-size-lg);
  }
  button.filled {
    background-color: var(--color-primary);
    color: var(--color-white);
    border: none;
  }
  button.outlined {
    background-color: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
  }
</style>
