<script lang="ts">
	import { onMount } from 'svelte';
	import welcome_bg from '../../assets/images/welcome_bg.webp';
	import Button from '../../components/templates/Button.svelte';
	import PageContainer from '../../components/templates/PageContainer.svelte';

	let welcomeTrigger = false;

	onMount(() => (welcomeTrigger = true));
</script>

{#if welcomeTrigger}
	<PageContainer Style="padding: var(--lg) var(--sm);">
		<img src={welcome_bg} alt="Imagem de background da tela de boas vindas." />

		<div class="top">
			<h2>Olá! Esse é o</h2>
			<h1>Whallet!</h1>
		</div>

		<div class="center">
			<h4>Um aplicativo criado para organizar suas finanças e organizar suas criações financeiras por aplicações de financeirizações criativas.</h4>
		</div>

		<div class="bottom">
			<Button>Conheça o Whallet!</Button>
			<Button type="default" GoTo="/login">Entrar / Cadastrar</Button>
		</div>
	</PageContainer>
{/if}

<style>
	img {
		z-index: 1;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	div {
		z-index: 2;
	}

	div.top {
		flex-grow: 1;
	}

	div.bottom {
		display: flex;
		justify-content: center;
		gap: var(--xs);
		margin-top: var(--xxs);
	}

	h1 {
		font-size: calc(var(--md) * 3);
		line-height: calc(var(--md) * 2.75);
	}

	h2 {
		font-size: var(--md);
	}

	h4 {
		text-align: center;
	}
</style>
