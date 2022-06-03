<script lang="ts">
  import { getSelectedLanguage } from "./translations";
  export let to: string;
  export let external: boolean = false;
  export let disabled = false;
  const lang = getSelectedLanguage();
</script>

<a
  href={`${external ? '' : '/' + lang}${to}`}
  title={$$props.title}
  class={$$props.class}
  class:disabled={disabled}
>
  <slot />
</a>

<style>
  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }
</style>