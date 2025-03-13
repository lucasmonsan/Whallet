<script lang="ts">
	import Card from './Card.svelte';

	export let cards: Array<{ title: string; description: string; imageUrl: string }>;
	let activeIndex = 0;

	function nextCard() {
		if (activeIndex < cards.length - 1) {
			activeIndex += 1;
		}
	}

	function prevCard() {
		if (activeIndex > 0) {
			activeIndex -= 1;
		}
	}
</script>

<div class="carousel">
	{#each cards as card, index}
		<Card
			{...card}
			isActive={index === activeIndex}
			style={`
        transform: translateX(calc(${index - activeIndex} * (100% + var(--gap))));
        opacity: ${index === activeIndex ? 1 : 0.5};
        z-index: ${index === activeIndex ? 1 : 0};
      `}
		/>
	{/each}
</div>

<div class="controls">
	<button on:click={prevCard} disabled={activeIndex === 0}>Anterior</button>
	<button on:click={nextCard} disabled={activeIndex === cards.length - 1}>Próximo</button>
</div>

<style>
	:root {
		--gap: 1rem; /* Espaço entre os cards */
	}

	.carousel {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80%;
		position: relative;
		overflow: hidden;
	}

	.controls {
		display: flex;
		justify-content: center;
		gap: var(--md);
		margin-top: var(--md);
	}

	button {
		padding: var(--sm) var(--md);
		background-color: var(--color-primary);
		color: var(--color-light);
		border: none;
		border-radius: var(--border-radius-md);
		cursor: pointer;
		transition: background-color 0.3s var(--transition-timing);
	}

	button:hover:not(:disabled) {
		background-color: var(--color-secondary);
	}

	button:disabled {
		background-color: var(--color-light);
		color: var(--color-secondary);
		cursor: not-allowed;
	}
</style>
