<script lang="ts">
	import { fade } from 'svelte/transition';

	export let Placeholder: string = '';
	export let Options: string[] = [];
	export let Value: string;
	let trigger: boolean = false;
	let dropdownPosition: 'top' | 'bottom' = 'bottom';
	let buttonRef: HTMLButtonElement;

	$: if (Options.length > 0 && !Value) Value = Options[0];

	function selectOption(option: string) {
		Value = option;
		trigger = false;
	}

	function calculateDropdownPosition() {
		if (!buttonRef) return;

		const rect = buttonRef.getBoundingClientRect(); // Posição do botão na tela
		const screenHeight = window.innerHeight; // Altura da tela
		const dropdownHeight = 250; // Estime ou calcule a altura do dropdown (ajuste conforme necessário)

		if (rect.bottom + dropdownHeight > screenHeight) dropdownPosition = 'top';
		else dropdownPosition = 'bottom';
	}

	$: if (trigger) calculateDropdownPosition();
</script>

<label>
	{#if Placeholder !== ''}
		<strong>{Placeholder}</strong>
	{/if}

	<button class="btn-active" bind:this={buttonRef} on:click={() => (trigger = !trigger)}>{Value}</button>

	{#if trigger}
		<button class="btn-grayout" on:click={() => (trigger = false)} transition:fade={{ duration: 250 }}>Fechar</button>

		<ul transition:fade={{ duration: 250 }} class={dropdownPosition === 'top' ? 'dropdown-top' : 'dropdown-bottom'}>
			{#each Options as option}
				<li>
					<button class:selected={option === Value} on:click={() => selectOption(option)}>
						{option}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</label>

<style>
	label button.btn-active {
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		padding: var(--padding-input);
		text-align: start;
		font-weight: 600;
		color: var(--color-subtext);
		background-color: transparent;
		border: none;
	}

	label button.btn-grayout {
		z-index: var(--z-grayout);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		color: rgba(255, 255, 255, 0);
		background-color: rgba(0, 0, 0, 0.5);
		border: none;
	}

	ul {
		z-index: var(--z-popup);
		position: absolute;
		left: 0;
		display: flex;
		flex-direction: column;
		width: 100%;
		min-height: calc(var(--md) * 2.5);
		max-height: calc(var(--md) * 16);
		padding: 0;
		border-radius: var(--radius);
		border: var(--border);
		border-color: var(--color-subtext);
		outline: none;
		background-color: var(--color-component);
		overflow: scroll;
		box-shadow: var(--shadow);
		transition: border var(--transition);
	}

	.dropdown-bottom {
		top: calc(var(--md) * 2.25);
	}

	.dropdown-top {
		bottom: calc(var(--md) * 2.5);
	}

	ul li button {
		width: 100%;
		background: none;
		border: none;
		padding: var(--md);
		text-align: left;
		color: var(--color-subtext);
		transition: background-color 0.2s;
	}

	ul li button:hover {
		background-color: var(--color-subtext);
		color: var(--color-bg);
	}

	ul li button.selected {
		background-color: var(--color-success);
		color: var(--color-white);
		font-weight: bold;
	}
</style>
