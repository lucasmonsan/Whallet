<script lang="ts">
	import '../styles/global.css';
	import { grayout } from '$lib/stores';
	import Grayout from '../components/layouts/Grayout.svelte';
</script>

{#if $grayout !== 0}
	<Grayout />
{/if}

<slot />
