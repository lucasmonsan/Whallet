<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<input transition:fade={{ duration: 250 }} />

<style>
	input {
		z-index: var(--z-grayout);
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		padding: var(--md);
		background-color: rgba(0, 0, 0, 0.75);
		border: solid 1px blue;
	}
</style>
