<script lang="ts">
	import { goto } from '$app/navigation';

	export let type: 'default' | 'success' | 'error' | 'alert' | 'transparent' | '' = '';
	export let GoTo: string = '';
</script>

<button class={type} on:click={() => goto(GoTo)}>
	<slot />
</button>

<style>
	button {
		cursor: pointer;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: calc(var(--md) * 3);
		padding: var(--xs);
		border: var(--border);
		border-radius: var(--radius-2);
		text-align: center;
		font-size: calc(var(--md) * 0.95);
		font-weight: 600;
		text-shadow: var(--shadow-text);
		outline: none;
		color: var(--color-text);
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

	.transparent {
		width: auto;
		height: auto;
		padding: 0;
		border: none;
	}
</style>
