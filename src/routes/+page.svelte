<script>
	import Checkbox from '../components/layouts/Checkbox.svelte';
	import Date from '../components/layouts/Date.svelte';
	import Input from '../components/layouts/Input.svelte';
</script>

<main>
	<h1>h1 - Welcome to SvelteKit</h1>
	<h2>h2 - Welcome to SvelteKit</h2>
	<h3>h3 - Welcome to SvelteKit</h3>
	<h4>h4 - Welcome to SvelteKit</h4>
	<h5>h5 - Welcome to SvelteKit</h5>
	<h6>h6 - Welcome to SvelteKit</h6>

	<strong>strong - Welcome to SvelteKit</strong>

	<p>p - Welcome to SvelteKit</p>

	<section>
		<div>
			<Input />
		</div>

		<div>
			<Checkbox />
		</div>

		<div>
			<Date />
		</div>

		<div>
			<label for="">
				<input type="file" name="" id="" />
			</label>
		</div>

		<div>
			<label for="">
				<input type="radio" name="radio" id="" />
				<input type="radio" name="radio" id="" />
				<input type="radio" name="radio" id="" />
				<input type="radio" name="radio" id="" />
			</label>
		</div>

		<div>
			<select name="" id="">
				<option value="">Option 1</option>
				<option value="">Option 2</option>
				<option value="">Option 3</option>
				<option value="">Option 4</option>
			</select>
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
