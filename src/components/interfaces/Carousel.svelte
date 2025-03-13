<script lang="ts">
	import Card from './Card.svelte';
	import CardDetails from './CardDetails.svelte';

	export let cards: Array<{
		id: string;
		title: string;
		description: string;
		imageUrl: string;
		details: Array<{ label: string; value: string }>;
	}>;

	let activeIndex = 0;
	let touchStartX: number | null = null;
	let touchEndX: number | null = null;

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

	function handleTouchStart(event: TouchEvent) {
		touchStartX = event.touches[0].clientX;
	}

	function handleTouchMove(event: TouchEvent) {
		touchEndX = event.touches[0].clientX;
	}

	function handleTouchEnd() {
		if (touchStartX !== null && touchEndX !== null) {
			const deltaX = touchEndX - touchStartX;

			if (deltaX > 50) {
				// Swipe para a direita (anterior)
				prevCard();
			} else if (deltaX < -50) {
				// Swipe para a esquerda (próximo)
				nextCard();
			}
		}

		// Resetar os valores
		touchStartX = null;
		touchEndX = null;
	}
</script>

<div class="carousel" on:touchstart={handleTouchStart} on:touchmove={handleTouchMove} on:touchend={handleTouchEnd}>
	{#each cards as card, index}
		<Card {...card} isActive={index === activeIndex} transform={`translateX(calc(${index - activeIndex} * (100% + var(--gap))))`} opacity={index === activeIndex ? 1 : 0.5} zIndex={index === activeIndex ? 1 : 0} />
	{/each}
</div>

<CardDetails details={cards[activeIndex].details} />

<style>
	:root {
		--gap: 0.5rem; /* Espaço entre os cards */
	}

	.carousel {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		width: 100%;
		height: 100%;
		max-height: 11rem;
		padding: var(--xxs) 0;
		position: relative;
		overflow: hidden;
		touch-action: pan-y; /* Permite apenas gestos verticais */
	}
</style>
