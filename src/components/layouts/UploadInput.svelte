<script lang="ts">
	export let ForId: string;
	export let Placeholder: string = '';
</script>

<label for={ForId}>
	<input type="file" id={ForId} />
	{#if Placeholder !== ''}
		<p>{Placeholder}</p>
	{/if}
</label>

<style>
	label {
		border-style: dashed;
	}

	label input {
		display: none;
	}

	label p {
		position: absolute;
		left: 0;
		width: 100%;
		text-align: center;
		font-size: var(--lg);
		font-weight: 600;
		color: var(--color-subtext);
		transform: scale(0.95);
	}
</style>
