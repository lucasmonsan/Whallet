<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../../components/templates/Button.svelte';
	import PageContainer from '../../components/templates/PageContainer.svelte';
	import LogoIcon from '../../components/icons/LogoIcon.svelte';
	import TextInput from '../../components/templates/TextInput.svelte';
	import CheckboxInput from '../../components/templates/CheckboxInput.svelte';
	import GoogleIcon from '../../components/icons/GoogleIcon.svelte';
	import FacebookIcon from '../../components/icons/FacebookIcon.svelte';
	import GithubIcon from '../../components/icons/GithubIcon.svelte';

	let welcomeTrigger = false;

	onMount(() => (welcomeTrigger = true));
</script>

{#if welcomeTrigger}
	<PageContainer Style="padding: var(--lg) var(--sm); align-items: center; justify-content: center;">
		<LogoIcon style="max-width: calc(var(--md) * 7); height: calc(var(--md) * 7);" />

		<h2>Criar uma Nova Conta</h2>

		<form action="">
			<TextInput type="text" id="register_name" placeholder="Nome Completo" />
			<TextInput type="email" id="register_email" placeholder="E-mail" />
			<TextInput type="password" id="register_password" placeholder="Digite a Senha" />
			<TextInput type="password" id="register_password2" placeholder="Repetir a Senha" />
			<CheckboxInput id="remember-login" placeholder="Aceito os Termos de Uso" />
			<Button type="default">Criar Conta</Button>
		</form>

		<div class="top">
			<span></span>
			<p>ou</p>
			<span></span>
		</div>

		<div class="center">
			<Button>
				<FacebookIcon />
			</Button>
			<Button>
				<GoogleIcon />
			</Button>
			<Button>
				<GithubIcon />
			</Button>
		</div>

		<Button type="transparent" GoTo="/login">
			<h5 class="normal">Já tem conta?</h5>
			<h5 class="bold">Faça Login!</h5>
		</Button>
	</PageContainer>
{/if}

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--sm);
		width: 85%;
		max-width: calc(var(--md) * 20);
		margin-top: var(--sm);
	}

	div.top {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--xs);
		width: 85%;
	}

	div.top span {
		width: 100%;
		border: solid 1px;
		border-radius: var(--xl);
	}

	div.top p {
		padding-bottom: var(--xxs);
		font-weight: 500;
	}

	div.center {
		display: flex;
		gap: var(--sm);
	}

	h5.normal {
		margin-right: var(--xxs);
		font-weight: 400;
	}

	h5.bold {
		color: var(--color-app);
	}
</style>
