<script lang="ts">
	import { fade } from 'svelte/transition';
	import LogoIcon from '../icons/LogoIcon.svelte';
	import Loading from './Loading.svelte';
</script>

<div transition:fade>
	<LogoIcon />
	<h2>Whallet!</h2>
	<Loading />
</div>

<style>
	div {
		z-index: var(--z-splash);
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--sm);
		flex-grow: 1;
		width: 100%;
		height: 100%;
		background-color: var(--color-bg);
	}
</style>
