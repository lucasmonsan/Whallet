<script lang="ts">
	import { nextCard, prevCard, handleTouchStart, handleTouchMove, handleTouchEnd } from '../../utils/carouselUtils';
	import Card from './Card.svelte';
	import CardDetails from './CardDetails.svelte';
	import type { CardType } from '$lib/types';

	export let cards: CardType[];

	let activeIndex = 0;
	let touchStartX: number | null = null;
	let touchEndX: number | null = null;
	let isSwiping = false;

	function handleSwipe(deltaX: number) {
		if (deltaX > 50) activeIndex = prevCard(activeIndex);
		else if (deltaX < -50) activeIndex = nextCard(activeIndex, cards.length);
		isSwiping = true;
		setTimeout(() => (isSwiping = false), 300);
	}

	$: hasCards = cards && cards.length > 0;
</script>

{#if hasCards}
	<div class="carousel" on:touchstart={(e) => (touchStartX = handleTouchStart(e))} on:touchmove={(e) => (touchEndX = handleTouchMove(e))} on:touchend={() => handleTouchEnd(touchStartX, touchEndX, isSwiping, handleSwipe)}>
		{#each cards as card, index}
			<Card {...card} isActive={index === activeIndex} transform={`translateX(calc(${index - activeIndex} * (100% + var(--gap)))`} opacity={index === activeIndex ? 1 : 0.5} zIndex={index === activeIndex ? 1 : 0} />
		{/each}
	</div>

	<CardDetails details={cards[activeIndex].details} />
{:else}
	<div class="empty-state">
		<p>Nenhum card encontrado. Adicione um novo card para começar.</p>
	</div>
{/if}

<style>
	:root {
		--gap: 0.5rem;
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
		touch-action: pan-y;
	}

	.empty-state {
		text-align: center;
		padding: var(--xxs);
		color: var(--color-light);
	}
</style>
