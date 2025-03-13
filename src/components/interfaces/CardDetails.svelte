<script lang="ts">
	export let details: Array<{ label: string; value: string }>;
</script>

<div class="card-details">
	{#each details as detail}
		<div class="detail-item">
			<strong>{detail.label}:</strong>
			{detail.value}
		</div>
	{/each}
</div>

<style>
	.card-details {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		margin-top: var(--xxxs);
		padding-top: var(--sm);
		border-top: solid 2px white;
		overflow-y: auto; /* Adiciona scroll vertical */
		padding-right: var(--sm); /* Espaço para a barra de scroll */
	}

	.detail-item {
		width: 90%;
		padding: var(--sm);
		margin-bottom: var(--xxs);
		background-color: var(--color-light);
		border-radius: var(--border-radius-md);
		box-shadow: var(--shadow-sm);
	}

	.detail-item:last-child {
		margin-bottom: 0;
	}
</style>
