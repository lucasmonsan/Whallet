<script lang="ts">
	import Button from '../components/layouts/Button.svelte';
	import CheckboxInput from '../components/layouts/CheckboxInput.svelte';
	import DateInput from '../components/layouts/DateInput.svelte';
	import DefaultInput from '../components/layouts/DefaultInput.svelte';
	import RadioInput from '../components/layouts/RadioInput.svelte';
	import SelectInput from '../components/layouts/SelectInput.svelte';
	import UploadInput from '../components/layouts/UploadInput.svelte';

	let optionsList = ['Option1', 'Option2 political gg', 'Option3', 'Option4', 'Option5'];
	let radioValue: string;
</script>

<main>
	<section>
		<div>
			<SelectInput Placeholder="Dropdown" Options={optionsList} Value={radioValue} />
		</div>

		<div>
			<CheckboxInput ForId="checkbox1" Placeholder="Clica aqui pra dar um like, lek" />
		</div>

		<div>
			<SelectInput Placeholder="Dropdown" Options={optionsList} Value={radioValue} />
		</div>

		<div>
			<UploadInput ForId="upload1" Placeholder="Clica pra add o arquivo, lek" />
		</div>

		<div>
			<SelectInput Placeholder="Dropdown" Options={optionsList} Value={radioValue} />
		</div>

		<div>
			<RadioInput ForId="radio1" Options={optionsList} value={radioValue} />
		</div>

		<div>
			<SelectInput Placeholder="Dropdown" Options={optionsList} Value={radioValue} />
		</div>

		<div>
			<SelectInput Placeholder="Dropdown" Options={optionsList} Value={radioValue} />
		</div>

		<div>
			<SelectInput Placeholder="Dropdown" Options={optionsList} Value={radioValue} />
		</div>

		<div>
			<SelectInput Placeholder="Dropdown" Options={optionsList} Value={radioValue} />
		</div>

		<div>
			<SelectInput Placeholder="Dropdown" Options={optionsList} Value={radioValue} />
		</div>

		<div>
			<SelectInput Placeholder="Dropdown" Options={optionsList} Value={radioValue} />
		</div>

		<div>
			<SelectInput Placeholder="Dropdown" Options={optionsList} Value={radioValue} />
		</div>

		<div>
			<SelectInput Placeholder="Dropdown" Options={optionsList} Value={radioValue} />
		</div>
	</section>
</main>

<style>
	section {
		gap: var(--md);
	}

	div {
		width: 100%;
	}
</style>
