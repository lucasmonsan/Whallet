<script lang="ts">
	export let ForId: string;
	export let Options: string[] = [];
	export let value: string;

	$: if (Options.length > 0 && !value) {
		value = Options[0];
	}
</script>

<div>
	{#each Options as option, index}
		<label for="{ForId}-{index}">
			<input type="radio" name={ForId} id="{ForId}-{index}" value={option} bind:group={value} />
			<p>{option}</p>
		</label>
	{/each}
</div>

<style>
	div {
		cursor: pointer;
		position: relative;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		min-height: calc(var(--md) * 3);
		border: var(--border) var(--color-subtext);
		border-radius: var(--radius);
		overflow: hidden;
	}

	div label {
		overflow: hidden;
		flex: 1 0 calc(var(--md) * 5);
		min-height: 100%;
		padding: 0;
		text-align: center;
		border-radius: 0;
		transition: border-color 0.25s ease-out;
	}

	div label:first-child {
		border-right: none;
	}

	div label:last-child {
		border-left: none;
	}

	div label input {
		display: none;
	}

	div label p {
		display: flex;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		border: none;
		color: var(--color-subtext);
		font-weight: 400;
		transition:
			color var(--transition),
			background-color var(--transition),
			font-weight var(--transition);
	}

	div label input:checked + p {
		color: var(--color-focus);
		background-color: var(--color-success);
		font-weight: bold;
	}

	div label input:checked {
		border-color: var(--color-text);
	}
</style>
