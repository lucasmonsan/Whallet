<label for="select-input">
	<select name="" id="select-input">
		<option value="">Option 1</option>
		<option value="">Option 2</option>
		<option value="">Option 3</option>
		<option value="">Option 4</option>
	</select>
</label>

<style>
	label {
		height: calc(var(--md) * 2.75);
	}

	label select {
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		color: var(--color-subtext);
		background-color: transparent;
	}

	label select:focus {
		color: var(--color-focus);
		border-color: var(--color-focus);
	}
</style>
