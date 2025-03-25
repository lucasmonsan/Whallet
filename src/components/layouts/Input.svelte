<script lang="ts">
</script>

<label>
	<strong>Text Title</strong>
	<input id="ch1" type="text" />
</label>

<style>
	label {
		position: relative;
		display: flex;
		align-items: center;
		height: calc(var(--base) * 3);
		padding: var(--padding-input);
		border-radius: var(--radius);
		border: var(--border);
		border-color: var(--color-subtext);
		outline: none;
		background-color: transparent;
		transition: border 0.25s ease-in-out;
	}

	label:focus-within {
		border-color: var(--color-focus);
	}

	label:focus-within strong {
		color: var(--color-focus);
	}

	label strong {
		position: absolute;
		top: 0;
		padding: 0 var(--xxs);
		color: var(--color-subtext);
		font-size: var(--sm);
		background-color: var(--color-component);
		transform: translateY(calc(var(--base) * -0.5));
		transition: color 0.25s ease-in-out;
	}

	label input {
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		color: var(--color-text);
		font-size: var(--lg);
	}
</style>
