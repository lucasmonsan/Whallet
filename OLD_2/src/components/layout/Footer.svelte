<script lang="ts">
	import IconAdd from '../../assets/icons/IconAdd.svelte';

	// Define a callback prop para notificar a página
	export let onAddClick: () => void;
</script>

<footer>
	<button class="btn-add" on:click={onAddClick}>
		<IconAdd />
	</button>
</footer>

<style>
	footer {
		z-index: 5;
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 4rem;
		background-color: var(--color-gray);
		border-radius: 1rem 1rem 0 0;
		box-shadow: var(--shadow-sm);
	}

	.btn-add {
		height: 100%;
		padding: var(--xs);
	}
</style>
