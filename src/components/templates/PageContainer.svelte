<script lang="ts">
	import { fade } from 'svelte/transition';

	export let Style = '';
</script>

<main in:fade={{ delay: 250, duration: 250 }} style={Style}>
	<slot />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: var(--sm);
		min-height: 100dvh;
		padding: var(--padding-main);
		border: solid 1px rgba(255, 0, 0, 0.3);
	}
</style>
