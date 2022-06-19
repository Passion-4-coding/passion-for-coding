<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";
	import { getWidgetData, type IChannel } from "$lib/discord";
	
	export const load: Load = async ({ fetch }) => {
		const channel = await getWidgetData(fetch);
		return {
			props: {
				channel
			}
		}
	}
</script>

<script lang="ts">
	import { setContext } from "svelte";
	import HomeHero from "$lib/Home/HomeHero.svelte";
	import HomeAbout from "$lib/Home/HomeAbout.svelte";
	import HomeRoles from "$lib/Home/HomeRoles.svelte";
	import HomeActions from "$lib/Home/HomeActions.svelte";

	export let channel: IChannel;
	setContext("channel", channel);
</script>

<HomeHero />
<HomeAbout />
<HomeActions />
<HomeRoles />


