<script lang="ts">
	import { createCard } from '../../services/cardServices';
	import type { CardType } from '$lib/types';

	export let onCardAdded: () => void;
	export let onClose: () => void;

	// Cores pré-definidas
	const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF5', '#F5FF33', '#2124FF'];

	let newCard: CardType = {
		title: '',
		type: 'credit',
		color: colors[0], // Cor padrão
		creditValue: 'R$0,00',
		debitValue: 'R$0,00',
		details: []
	};

	// Função para selecionar uma cor
	function selectColor(color: string) {
		newCard.color = color;
	}

	async function handleSubmit() {
		if (!newCard.title) {
			alert('O título do card é obrigatório.');
			return;
		}

		await createCard(newCard);
		alert('Card adicionado com sucesso!');
		onCardAdded();
		onClose();
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<h2>Nova Carteira</h2>
	<label>
		<strong>Título:</strong>
		<input type="text" bind:value={newCard.title} required />
	</label>
	<label>
		<strong>Tipo:</strong>
		<select bind:value={newCard.type}>
			<option value="credit">Crédito</option>
			<option value="debit">Débito</option>
			<option value="both">Ambos</option>
		</select>
	</label>
	<label>
		<strong>Cor:</strong>
		<div class="color-picker">
			{#each colors as color}
				<button type="button" class="color-option {newCard.color === color ? 'selected' : ''}" style="background-color: {color};" on:click={() => selectColor(color)} aria-label="Selecionar cor {color}"></button>
			{/each}
		</div>
	</label>
	<label>
		<strong>Valor de Crédito:</strong>
		<input type="text" bind:value={newCard.creditValue} />
	</label>
	<label>
		<strong>Valor de Débito:</strong>
		<input type="text" bind:value={newCard.debitValue} />
	</label>
	<div class="buttons">
		<button type="button" on:click={onClose} class="close-button">Fechar</button>
		<button type="submit">Adicionar Card</button>
	</div>
</form>

<style>
	form {
		position: fixed;
		bottom: 0;
		display: flex;
		flex-direction: column;
		gap: var(--sm);
		width: 100%;
		padding: var(--sm) var(--lg);
		background-color: var(--color-gray);
		border-radius: var(--xxs);
		z-index: 1001;
	}

	.color-picker {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: var(--xxs);
		width: 100%;
		height: 100%;
	}

	.color-option {
		width: 100%;
		height: 100%;
		border: 2px solid transparent;
		border-radius: var(--border-radius-md);
		cursor: pointer;
		transition: border-color 0.2s ease;
	}

	.color-option.selected {
		border-color: var(--color-light);
	}

	.buttons {
		display: flex;
		gap: var(--sm);
		justify-content: flex-end;
	}

	.close-button {
		background-color: var(--color-gray);
		border: none;
		padding: var(--xxs) var(--xs);
		border-radius: var(--border-radius-sm);
		cursor: pointer;
	}

	.close-button:hover {
		background-color: var(--color-light);
		color: var(--color-dark);
	}
</style>
