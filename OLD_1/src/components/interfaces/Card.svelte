<script lang="ts">
	export let title: string;
	export let type: string;
	export let color: string;
	export let creditValue: string = 'R$0,00'; // Valor padrão
	export let debitValue: string = 'R$0,00'; // Valor padrão
	export let isActive: boolean = false;
	export let transform: string;
	export let opacity: number;
	export let zIndex: number;
</script>

<div class="card" class:active={isActive} style={`transform: ${transform}; opacity: ${opacity}; z-index: ${zIndex}; background-color: var(--color-${color})`}>
	<h2 class="card-title">{title}</h2>
	<div class="card-values">
		{#if type === 'credit' || type === 'both'}
			<div class="credit">
				<p class="credit-name">Crédito</p>
				<h3>{creditValue}</h3>
			</div>
		{/if}
		{#if type === 'both'}
			<span></span>
		{/if}
		{#if type === 'debit' || type === 'both'}
			<div class="debit">
				<p class="debit-name">Débito</p>
				<h3>{debitValue}</h3>
			</div>
		{/if}
	</div>
</div>

<style>
	.card {
		width: 90%;
		max-width: 600px;
		height: calc(var(--base) * 5.5);
		padding: var(--xxs) var(--xs);
		border-radius: var(--border-radius-md);
		box-shadow: var(--shadow-md);
		overflow: hidden;
		transition:
			transform 0.5s ease,
			opacity 0.5s ease;
		opacity: 0.5;
		position: absolute;
		color: var(--color-light);
	}

	.card-title {
		margin-bottom: var(--xxs);
		color: var(--color-light);
		border-bottom: solid 2px;
	}

	.card-values {
		display: flex;
		gap: var(--xxs);
		width: 100%;
		height: 100%;
		max-height: calc(var(--base) * 3);
	}

	.credit {
		width: 100%;
	}

	.debit {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		width: 100%;
	}

	p {
		font-size: calc(var(--base) * 0.75);
		font-weight: 600;
	}

	span {
		height: 75%;
		border: solid 2px;
		opacity: 0.5;
	}

	h3 {
		font-size: calc(var(--base) * 1.25);
	}
</style>
