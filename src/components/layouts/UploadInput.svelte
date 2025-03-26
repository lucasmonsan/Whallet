<script lang="ts">
</script>

<label for="upload-input">
	<input type="file" id="upload-input" />
	<p>Clique p/ adicionar o arquivo</p>
</label>

<style>
	label {
		border-style: dashed;
	}

	label input {
		display: none;
	}

	label p {
		position: absolute;
		left: 0;
		width: 100%;
		text-align: center;
		font-size: var(--lg);
		font-weight: 600;
		color: var(--color-subtext);
		transform: scale(0.95);
	}
</style>
