<script lang="ts">
	export let ForId: string;
	export let TriggerGrayout: boolean = false;
</script>

<label for={ForId}>
	<input type="checkbox" id={ForId} bind:checked={TriggerGrayout} />
</label>

{#if TriggerGrayout}
	<input class="grayout-select" />
{/if}

<style>
	label {
		height: calc(var(--md) * 2.75);
	}

	input.grayout-select {
		z-index: var(--z-grayout-1);
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		padding: var(--md);
		background-color: rgba(0, 0, 0, 0.75);
		border: solid 1px blue;
	}

	section {
		width: 100%;
		background-color: var(--gray);
	}
</style>
