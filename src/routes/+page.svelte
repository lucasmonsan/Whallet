<script>
	import CheckboxInput from '../components/layouts/CheckboxInput.svelte';
	import DateInput from '../components/layouts/DateInput.svelte';
	import DefaultInput from '../components/layouts/DefaultInput.svelte';
	import RadioInput from '../components/layouts/RadioInput.svelte';
	import SelectInput from '../components/layouts/SelectInput.svelte';
	import UploadInput from '../components/layouts/UploadInput.svelte';
</script>

<main>
	<h1>h1 - Welcome to</h1>
	<h2>h2 - Welcome to SvelteKit</h2>
	<h3>h3 - Welcome to SvelteKit</h3>
	<h4>h4 - Welcome to SvelteKit</h4>
	<h5>h5 - Welcome to SvelteKit</h5>
	<h6>h6 - Welcome to SvelteKit</h6>

	<strong>strong - Welcome to SvelteKit</strong>

	<p>p - Welcome to SvelteKit</p>

	<section>
		<div>
			<DefaultInput />
		</div>

		<div>
			<CheckboxInput />
		</div>

		<div>
			<DateInput />
		</div>

		<div>
			<UploadInput />
		</div>

		<div>
			<RadioInput />
		</div>

		<div>
			<SelectInput />
		</div>

		<button>button</button>
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
