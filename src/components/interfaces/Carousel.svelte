<script lang="ts">
	import Card from './Card.svelte';
	import CardDetails from './CardDetails.svelte';

	export let cards: Array<{
		id: string;
		title: string;
		type: string;
		imageUrl: string;
		color: string;
		details: Array<{ label: string; value: string }>;
	}>;

	let activeIndex = 0;
	let touchStartX: number | null = null;
	let touchEndX: number | null = null;

	function nextCard() {
		activeIndex = Math.min(activeIndex + 1, cards.length - 1);
	}

	function prevCard() {
		activeIndex = Math.max(activeIndex - 1, 0);
	}

	function handleTouchStart(event: TouchEvent) {
		touchStartX = event.touches[0].clientX;
	}

	function handleTouchMove(event: TouchEvent) {
		touchEndX = event.touches[0].clientX;
	}

	let isSwiping = false;

	function handleTouchEnd() {
		if (touchStartX !== null && touchEndX !== null && !isSwiping) {
			const deltaX = touchEndX - touchStartX;

			if (deltaX > 50) prevCard();
			else if (deltaX < -50) nextCard();

			isSwiping = true;
			setTimeout(() => (isSwiping = false), 300); // Evita múltiplos swipes rápidos
		}

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
		max-height: 6.25rem;
		padding: var(--xxs) 0;
		position: relative;
		overflow: hidden;
		touch-action: pan-y; /* Permite apenas gestos verticais */
	}
</style>
