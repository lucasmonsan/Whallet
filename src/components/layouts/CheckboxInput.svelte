<label for="checkbox-input">
	<input type="checkbox" id="checkbox-input" />
	<svg viewBox="0 0 64 64">
		<path
			d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
			pathLength="575.0541381835938"
			class="path"
		></path>
	</svg>
	<p>Text Title Here</p>
</label>

<style>
	label {
		height: auto;
		border: none;
	}

	label input {
		display: none;
	}

	label svg {
		overflow: visible;
		width: var(--lg);
		height: var(--lg);
	}

	.path {
		fill: none;
		stroke: var(--color-subtext);
		stroke-width: 6;
		stroke-linecap: round;
		stroke-linejoin: round;
		transition:
			stroke-dasharray 0.4s ease,
			stroke-dashoffset 0.4s ease,
			stroke 0.4s ease;
		stroke-dasharray: 241 9999999;
		stroke-dashoffset: 0;
	}

	label input:checked ~ svg .path {
		stroke-dasharray: 70.5096664428711 9999999;
		stroke-dashoffset: -262.2723388671875;
		stroke: var(--color-success); /* Altera a cor do stroke quando o checkbox estiver marcado */
	}

	label p {
		padding-left: var(--xs);
		font-weight: 600;
		color: var(--color-subtext);
	}
</style>
