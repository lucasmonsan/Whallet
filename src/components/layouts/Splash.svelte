<script lang="ts">
	import { fade } from 'svelte/transition';
	import LogoIcon from '../icons/LogoIcon.svelte';
	import Loading from './Loading.svelte';
</script>

<div class="bg" out:fade>
	<div class="items" in:fade>
		<LogoIcon />
		<h2>Whallet!</h2>
		<Loading />
	</div>
</div>

<style>
	div.bg {
		z-index: var(--z-splash);
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		background-color: var(--color-bg);
	}

	div.items {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--sm);
		width: 100%;
	}
</style>
