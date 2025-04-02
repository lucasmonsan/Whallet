<script lang="ts">
	import welcome_bg from '../../assets/images/welcome_bg.webp';
	import Button from '../../components/templates/Button.svelte';
</script>

<main>
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
		<Button Type="success">Fazer Login</Button>
	</div>
</main>

<style>
	main {
		padding: var(--xl) var(--sm);
	}

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

	h4 {
		text-align: center;
	}
</style>
