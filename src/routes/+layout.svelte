<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import Footer from '../components/templates/Footer.svelte';
	import Header from '../components/templates/Header.svelte';
	import Splash from '../components/layouts/Splash.svelte';

	let splashTrigger = false;
	let headerTrigger = false;
	let footerTrigger = false;

	onMount(() => {
		splashTrigger = true;
		setTimeout(() => (splashTrigger = false), 3000);
	});

	onNavigate(() => {
		if (!document.startViewTransition) return; // @ts-ignore
		return new Promise<void>((res) => document.startViewTransition(() => new Promise(res)));
	});

	// onMount(() => {
	// 	if (sessionStorage.getItem('splash') === '1') {
	// 		splashTrigger = false; // Se existir e o valor for 1, não exibir o splash e definir splashTrigger como false
	// 	} else {
	// 		sessionStorage.setItem('splash', '1'); // Caso não exista ou o valor não seja 1, registrar no sessionStorage e exibir o splash
	// 		splashTrigger = true;
	// 		setTimeout(() => (splashTrigger = false), 3000); // Após 3 segundos, esconder o splash
	// 	}
	// });
</script>

{#if headerTrigger}
	<Header />
{/if}

{#if splashTrigger}
	<Splash />
{/if}

<slot />

{#if footerTrigger}
	<Footer />
{/if}

<style>
</style>
