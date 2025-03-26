<script lang="ts">
</script>

<div class="radio-inputs">
	<label class="radio">
		<input type="radio" name="radio" />
		<p class="name">HTML</p>
	</label>
	<label class="radio">
		<input type="radio" name="radio" />
		<p class="name">React</p>
	</label>

	<label class="radio">
		<input type="radio" name="radio" />
		<p class="name">Vue</p>
	</label>
</div>

<style>
	div {
		cursor: pointer;
		position: relative;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		height: calc(var(--md) * 2.5);
	}

	div label {
		overflow: hidden;
		flex: 1 1 auto;
		height: 100%;
		padding: 0;
		text-align: center;
		border-radius: 0;
		border: 2px solid var(--color-subtext); /* Cor de borda padrão */
		transition: border-color 0.25s ease-out; /* Transição suave para a cor da borda */
	}

	div label:first-child {
		border-right: none;
		border-radius: var(--radius) 0 0 var(--radius);
	}

	div label:last-child {
		border-left: none;
		border-radius: 0 var(--radius) var(--radius) 0;
	}

	div label input {
		display: none;
	}

	div label p {
		display: flex;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		border: none;
		color: var(--color-subtext);
		font-weight: 400;
		transition:
			color 0.25s ease-out,
			background-color 0.25s ease-out,
			font-weight 0.25s ease-out;
	}

	/* Quando o input está selecionado, mudamos a cor da borda */
	div label input:checked + p {
		color: var(--color-focus);
		background-color: var(--color-success);
		font-weight: bold;
	}

	/* Mudamos a cor da borda quando qualquer radio button estiver selecionado */
	div label input:checked {
		border-color: var(--color-text);
	}
</style>
