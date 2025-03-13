<script lang="ts">
	import Carousel from '../components/interfaces/Carousel.svelte';
	import teste from '../assets/images/teste.webp';
	import Container from '../components/layout/Container.svelte';

	const cards = [
		{
			title: 'Card 1',
			description: 'Descrição do Card 1',
			imageUrl: teste
		},
		{
			title: 'Card 2',
			description: 'Descrição do Card 2',
			imageUrl: teste
		},
		{
			title: 'Card 3',
			description: 'Descrição do Card 3',
			imageUrl: teste
		},
		{
			title: 'Card 4',
			description: 'Descrição do Card 4',
			imageUrl: teste
		},
		{
			title: 'Card 5',
			description: 'Descrição do Card 5',
			imageUrl: teste
		},
		{
			title: 'Card 6',
			description: 'Descrição do Card 6',
			imageUrl: teste
		}
	];
</script>

<Container type="page">
	<Carousel {cards} />
</Container>
