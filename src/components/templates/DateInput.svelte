<script lang="ts">
	export let ForId: string;
	export let Placeholder: string = '';
</script>

<label for={ForId}>
	{#if Placeholder !== ''}
		<strong>{Placeholder}</strong>
	{/if}
	<input type="date" id={ForId} />
</label>

<style>
	label input {
		color: var(--color-subtext);
	}
</style>
