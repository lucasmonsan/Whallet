import { getCards, addCard } from '../db/indexedDB';
import type { CardType } from '../lib/types';

export async function fetchCards(): Promise<CardType[]> {
  const dbCards = await getCards();
  return dbCards.map((card) => ({
    ...card,
    id: Number(card.id) // Converte o id para number
  }));
}

export async function createCard(newCard: CardType): Promise<void> {
  await addCard(newCard);
}