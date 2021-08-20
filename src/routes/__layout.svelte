<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '$styles/global.css';
	import '$styles/fonts.css';
</script>

<Header />

<main>
	<slot />
</main>
