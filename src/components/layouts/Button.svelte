<script lang="ts">
	export let Type: 'default' | 'success' | 'error' | 'warning' = 'default';
</script>

<button class={Type}>
	<strong>Button text</strong>
</button>

<style>
	.default {
		cursor: pointer;
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
		height: calc(var(--base) * 3);
		padding: var(--padding-input);
		color: var(--color-component);
		border-radius: var(--radius);
		border: var(--border);
		border-color: var(--color-subtext);
		text-align: center;
		outline: none;
		background-color: var(--color-subtext);
		transition: border 0.25s ease-in-out;
	}

	strong {
		width: 100%;
		padding: 0;
		text-align: center;
	}
</style>
