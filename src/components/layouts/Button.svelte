<script lang="ts">
	export let Type: 'default' | 'success' | 'error' | 'alert' = 'default';
</script>

<button class={Type}>
	<strong>Button text</strong>
</button>

<style>
	button {
		cursor: pointer;
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
		height: calc(var(--md) * 3);
		padding: var(--padding-input);
		border: var(--border);
		border-radius: var(--sm);
		text-align: center;
		outline: none;
		opacity: 0.75;
		transition: border;
	}

	.default {
		color: var(--color-text);
		border-color: var(--color-template);
		background-color: var(--color-template);
	}

	.success {
		opacity: 1;
		color: var(--color-text);
		border-color: var(--color-success);
		background-color: var(--color-success);
	}

	.error {
		color: var(--color-text);
		border-color: var(--color-error);
		background-color: var(--color-error);
	}

	.alert {
		color: var(--color-text);
		border-color: var(--color-alert);
		background-color: var(--color-alert);
	}

	strong {
		width: 100%;
		padding: 0;
		text-align: center;
	}
</style>
