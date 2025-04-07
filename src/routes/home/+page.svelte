<script lang="ts">
	import { onMount } from 'svelte';
	import PageContainer from '../../components/templates/PageContainer.svelte';

	let welcomeTrigger = false;

	onMount(() => (welcomeTrigger = true));
</script>

{#if welcomeTrigger}
	<PageContainer Style="padding: var(--lg) var(--sm);">
		<div class="top">
			<h2>Home</h2>
			<h1>Whallet!</h1>
		</div>
	</PageContainer>
{/if}

<style>
	div {
		z-index: 2;
	}

	div.top {
		flex-grow: 1;
	}

	h1 {
		font-size: calc(var(--md) * 3);
		line-height: calc(var(--md) * 2.75);
	}

	h2 {
		font-size: var(--md);
	}
</style>
