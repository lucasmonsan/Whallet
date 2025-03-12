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
		height: 100dvh;
		padding: 4.25rem 0;
		border: solid 1px red;
	}

	section {
		border: solid 1px green;
	}
</style>
