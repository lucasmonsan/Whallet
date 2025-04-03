<script lang="ts">
	import { onMount } from 'svelte';
	import welcome_bg from '../../assets/images/welcome_bg.webp';
	import Button from '../../components/templates/Button.svelte';
	import PageContainer from '../../components/templates/PageContainer.svelte';
	import LogoIcon from '../../components/icons/LogoIcon.svelte';
	import DefaultInput from '../../components/templates/DefaultInput.svelte';
	import CheckboxInput from '../../components/templates/CheckboxInput.svelte';
	import GoogleIcon from '../../components/icons/GoogleIcon.svelte';

	let welcomeTrigger = false;

	onMount(() => (welcomeTrigger = true));
</script>

{#if welcomeTrigger}
	<PageContainer Style="padding: var(--lg) var(--sm); align-items: center; justify-content: center;">
		<LogoIcon />

		<h2>Entre na sua Conta</h2>

		<form action="">
			<DefaultInput ForId="email_login" Placeholder="Email" />
			<DefaultInput ForId="password_login" Placeholder="Senha" />
			<CheckboxInput ForId="remember-login" Placeholder="Lembrar login e senha" />
			<Button Type="success">Entrar</Button>
		</form>

		<div class="top">ou</div>

		<div class="bottom">
			<Button>
				<GoogleIcon />
			</Button>
			<Button>
				<GoogleIcon />
			</Button>
			<Button>
				<GoogleIcon />
			</Button>
		</div>
	</PageContainer>
{/if}

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--sm);
	}

	div.bottom {
		display: flex;
		gap: var(--sm);
	}
</style>
