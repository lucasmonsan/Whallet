<script lang="ts">
	import Carousel from '../components/interfaces/Carousel.svelte';
	import teste from '../assets/images/teste.webp';
	import Container from '../components/layout/Container.svelte';

	const cards = [
		{
			id: '1',
			title: 'Card 1',
			description: 'Descrição do Card 1',
			imageUrl: teste,
			details: [
				{ label: 'Informação 1', value: 'Valor 1' },
				{ label: 'Informação 2', value: 'Valor 2' },
				{ label: 'Informação 3', value: 'Valor 3' },
				{ label: 'Informação 1', value: 'Valor 1' },
				{ label: 'Informação 2', value: 'Valor 2' },
				{ label: 'Informação 3', value: 'Valor 3' },
				{ label: 'Informação 1', value: 'Valor 1' },
				{ label: 'Informação 2', value: 'Valor 2' },
				{ label: 'Informação 3', value: 'Valor 3' },
				{ label: 'Informação 1', value: 'Valor 1' },
				{ label: 'Informação 2', value: 'Valor 2' },
				{ label: 'Informação 3', value: 'Valor 3' }
			]
		},
		{
			id: '2',
			title: 'Card 2',
			description: 'Descrição do Card 2',
			imageUrl: teste,
			details: [
				{ label: 'Informação A', value: 'Valor A' },
				{ label: 'Informação B', value: 'Valor B' }
			]
		},
		{
			id: '3',
			title: 'Card 3',
			description: 'Descrição do Card 3',
			imageUrl: teste,
			details: [
				{ label: 'Informação X', value: 'Valor X' },
				{ label: 'Informação Y', value: 'Valor Y' },
				{ label: 'Informação Z', value: 'Valor Z' },
				{ label: 'Informação W', value: 'Valor W' }
			]
		},
		{
			id: '4',
			title: 'Card 4',
			description: 'Descrição do Card 4',
			imageUrl: teste,
			details: [
				{ label: 'Detalhe 1', value: 'Dado 1' },
				{ label: 'Detalhe 2', value: 'Dado 2' },
				{ label: 'Detalhe 3', value: 'Dado 3' },
				{ label: 'Detalhe 4', value: 'Dado 4' },
				{ label: 'Detalhe 5', value: 'Dado 5' }
			]
		},
		{
			id: '5',
			title: 'Card 5',
			description: 'Descrição do Card 5',
			imageUrl: teste,
			details: [
				{ label: 'Item 1', value: 'Info 1' },
				{ label: 'Item 2', value: 'Info 2' }
			]
		},
		{
			id: '6',
			title: 'Card 6',
			description: 'Descrição do Card 6',
			imageUrl: teste,
			details: [
				{ label: 'Dado A', value: 'Valor A' },
				{ label: 'Dado B', value: 'Valor B' },
				{ label: 'Dado C', value: 'Valor C' }
			]
		}
	];
</script>

<Container type="page">
	<Carousel {cards} />
</Container>
