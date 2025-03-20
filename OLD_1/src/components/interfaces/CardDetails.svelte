<script lang="ts">
	export let details: Array<{
		label: string;
		value: string;
		date?: string; // Data opcional
		type?: string; // Tipo opcional
		amount?: string; // Valor monetário opcional
	}>;
	import teste from '../../assets/images/teste.webp';
</script>

<div class="card-details" role="list">
	{#each details as detail}
		<div class="detail-item" role="listitem">
			<div class="icon-box" aria-hidden="true">
				<img src={teste} alt={detail.label} />
			</div>
			<div class="infos-box">
				<strong class="title">{detail.label}</strong>
				<p class="date">{detail.date}</p>
				<p class="type">{detail.type}</p>
				<strong class="value">{detail.amount}</strong>
			</div>
		</div>
	{/each}
</div>

<style>
	.card-details {
		scroll-behavior: smooth;
		position: relative;
		overflow-y: auto;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		margin-top: var(--xxxs);
		padding: var(--xs) 0;
		border-top: solid 2px var(--color-gray);
	}

	.detail-item {
		display: flex;
		align-items: center;
		gap: var(--xxs);
		width: 90%;
		height: 100%;
		max-height: calc(var(--base) * 3.125);
		margin-bottom: var(--xxs);
		padding: calc(var(--xxxs) * 1.5) var(--xxs);
		border-radius: var(--border-radius-md);
		background-color: var(--color-gray);
	}

	.detail-item:last-child {
		margin-bottom: 0;
	}

	.icon-box {
		height: 98%;
		padding: var(--xxs);
		background-color: var(--color-light);
		border-radius: var(--border-radius-md);
	}

	.infos-box {
		position: relative;
		width: 100%;
		height: 100%;
		padding: var(--xxxs) 0;
	}

	.title {
		position: absolute;
		top: calc(var(--xxxs) * 0.125);
		left: 0;
		width: 100%;
	}

	.date {
		position: absolute;
		top: calc(var(--xxxs) * 0.125);
		right: 0;
		font-size: var(--xs);
		font-weight: 500;
		opacity: 0.5;
	}

	.type {
		position: absolute;
		bottom: calc(var(--xxxs) * 0.125);
		left: 0;
		flex-grow: 1;
		font-size: var(--sm);
		font-weight: 400;
	}

	.value {
		position: absolute;
		bottom: calc(var(--xxxs) * 0.125);
		right: 0;
		font-size: calc(var(--md) * 1.125);
		text-align: end;
	}
</style>
