<script lang="ts">
	export let type: 'page' | 'component';
</script>

{#if type === 'page'}
	<main>
		<slot />
	</main>
{:else if type === 'component'}
	<section>
		<slot />
	</section>
{/if}

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		height: 100dvh;
		padding: 4rem 0;
		background-color: var(--background-color);
	}

	section {
		border: solid 1px green;
	}
</style>
