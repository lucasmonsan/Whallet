<script lang="ts">
	export let ForId: string;
	export let Placeholder: string = '';
</script>

<label for={ForId}>
	{#if Placeholder !== ''}
		<strong>{Placeholder}</strong>
	{/if}
	<input type="text" id={ForId} />
</label>

<style>
</style>
