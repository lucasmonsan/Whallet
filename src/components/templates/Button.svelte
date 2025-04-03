<script lang="ts">
	import { goto } from '$app/navigation';

	export let Type: 'default' | 'success' | 'error' | 'alert' | '' = '';
	export let GoTo: string = '';
</script>

<button class={Type} on:click={() => goto(GoTo)}>
	<strong><slot /></strong>
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
		border-radius: var(--radius-2);
		text-align: center;
		font-size: calc(var(--md) * 0.95);
		outline: none;
		color: var(--color-subtext);
		background-color: transparent;
		box-shadow: var(--shadow-component);
		transition: border;
	}

	.default {
		color: var(--color-text);
		border-color: var(--color-app);
		background-color: var(--color-app);
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
