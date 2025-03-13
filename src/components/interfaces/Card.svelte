<script lang="ts">
	export let title: string;
	export let description: string;
	export let imageUrl: string;
	export let isActive: boolean = false;
	export let transform: string;
	export let opacity: number;
	export let zIndex: number;
</script>

<div class="card" class:active={isActive} style={`transform: ${transform}; opacity: ${opacity}; z-index: ${zIndex};`}>
	<img src={imageUrl} alt={title} class="card-image" />
	<h2 class="card-title">{title}</h2>
	<p class="card-description">{description}</p>
</div>

<style>
	.card {
		width: 90%;
		max-width: 600px;
		height: 10rem;
		padding: var(--sm);
		border-radius: var(--border-radius-md);
		box-shadow: var(--shadow-md);
		overflow: hidden;
		transition:
			transform 0.5s ease,
			opacity 0.5s ease;
		opacity: 0.5;
		position: absolute;
		background-color: whitesmoke;
	}

	.card.active {
		opacity: 1;
		transform: scale(1);
	}

	.card-image {
		width: 100%;
		height: auto;
		border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
	}

	.card-title {
		font-size: var(--font-size-lg);
		margin: var(--sm) 0;
		padding: 0 var(--sm);
	}

	.card-description {
		font-size: var(--font-size-md);
		color: var(--color-secondary);
		padding: 0 var(--sm) var(--sm);
	}
</style>
