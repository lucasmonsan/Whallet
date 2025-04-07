<script lang="ts">
	import { emailValidation, passwordValidation } from '../../lib/formValidations';

	export let id: string;
	export let placeholder: string = '';
	export let type: 'email' | 'password' | 'text' = 'text';
	export let required: boolean = false;

	// Função que retorna o validador correto com base no tipo
	function getValidator(node: HTMLInputElement) {
		if (type === 'email') {
			return emailValidation(node);
		} else if (type === 'password') {
			return passwordValidation(node);
		}
		// Para text ou outros tipos, não aplicamos validação específica
		return {};
	}
</script>

<label for={id}>
	{#if placeholder}
		<strong>{placeholder}</strong>
	{/if}
	<input {type} {id} {required} use:getValidator />
</label>

<style>
	input.invalid {
		border: 1px solid red;
	}

	/* Você pode adicionar mais estilos para os estados de validação */
</style>
