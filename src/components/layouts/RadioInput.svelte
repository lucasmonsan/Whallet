<script lang="ts">
	export let ForId: string;
	export let options: string[] = [];
	export let value: string;

	$: if (options.length > 0 && !value) {
		value = options[0];
	}
</script>

<div>
	{#each options as option, index}
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
		height: calc(var(--md) * 2.75);
	}

	div label {
		overflow: hidden;
		flex: 1 1 auto;
		height: 100%;
		padding: 0;
		text-align: center;
		border-radius: 0;
		border: 2px solid var(--color-subtext);
		transition: border-color 0.25s ease-out;
	}

	div label:first-child {
		border-right: none;
		border-radius: var(--radius) 0 0 var(--radius);
	}

	div label:last-child {
		border-left: none;
		border-radius: 0 var(--radius) var(--radius) 0;
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
			color 0.25s ease-out,
			background-color 0.25s ease-out,
			font-weight 0.25s ease-out;
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
