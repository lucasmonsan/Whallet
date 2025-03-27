<script lang="ts">
	import Button from '../components/layouts/Button.svelte';
	import CheckboxInput from '../components/layouts/CheckboxInput.svelte';
	import DateInput from '../components/layouts/DateInput.svelte';
	import DefaultInput from '../components/layouts/DefaultInput.svelte';
	import RadioInput from '../components/layouts/RadioInput.svelte';
	import SelectInput from '../components/layouts/SelectInput.svelte';
	import UploadInput from '../components/layouts/UploadInput.svelte';

	let radioValue: string;
</script>

<main>
	<section>
		<div>
			<DefaultInput ForId="test" Placeholder="Digita qualquer coisa, lek" />
		</div>

		<div>
			<CheckboxInput ForId="test2" />
		</div>

		<div>
			<DateInput ForId="test3" />
		</div>

		<div>
			<UploadInput ForId="test4" />
		</div>

		<div>
			<RadioInput
				ForId="test5"
				options={['Option1', 'Option2', 'Option3']}
				bind:value={radioValue}
			/>
		</div>

		<div>
			<SelectInput ForId="test6" />
		</div>

		<Button />
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
