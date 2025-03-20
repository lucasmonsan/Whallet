<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchCards } from '../services/cardServices';
	import Carousel from '../components/interfaces/Carousel.svelte';
	import Container from '../components/layout/Container.svelte';
	import AddCardForm from '../components/forms/AddCardForm.svelte';
	import Footer from '../components/layout/Footer.svelte';
	import type { CardType } from '../lib/types';
	import Header from '../components/layout/Header.svelte';

	let cards: CardType[] = [];
	let showForm = false; // Controla a visibilidade do formulário

	onMount(async () => (cards = await fetchCards()));

	async function reloadCards() {
		cards = await fetchCards();
	}

	// Função para abrir o formulário
	function handleOpenForm() {
		showForm = true;
		// Adiciona uma entrada ao histórico do navegador
		history.pushState({ formOpen: true }, '', '/new-card');
	}

	// Função para fechar o formulário
	function handleCloseForm() {
		showForm = false;
		// Remove a entrada do histórico do navegador
		history.back();
	}

	// Manipula o evento de popstate (quando o usuário clica em "voltar")
	onMount(() => {
		const handlePopState = (event: PopStateEvent) => {
			if (event.state?.formOpen) showForm = false; // Fecha o formulário
		};

		window.addEventListener('popstate', handlePopState);

		return () => window.removeEventListener('popstate', handlePopState);
	});
</script>

<Header />

<Container type="page">
	<Carousel {cards} />
	{#if showForm}
		<div class="form-overlay">
			<AddCardForm onCardAdded={reloadCards} onClose={handleCloseForm} />
		</div>
	{/if}
</Container>

<Footer onAddClick={handleOpenForm} />

<style>
	.form-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10;
	}
</style>
