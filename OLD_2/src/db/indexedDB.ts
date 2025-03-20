import Dexie, { type Table } from 'dexie';
import type { CardType } from '../lib/types'; // Importe a interface

class MyDatabase extends Dexie {
  cards!: Table<CardType>;

  constructor() {
    super('MyDatabase');
    this.version(1).stores({
      cards: '++id, title, type, color, creditValue, debitValue, details'
    });
  }
}

const db = new MyDatabase();

export default db;

export async function addCard(card: CardType) {
  try {
    await db.cards.add(card);
  } catch (error) {
    console.error('Erro ao adicionar card:', error);
  }
}

export async function getCards(): Promise<CardType[]> {
  try {
    return await db.cards.toArray();
  } catch (error) {
    console.error('Erro ao buscar cards:', error);
    return [];
  }
}

export async function updateCard(id: number, updates: Partial<CardType>) {
  try {
    await db.cards.update(id, updates);
  } catch (error) {
    console.error('Erro ao atualizar card:', error);
  }
}

export async function deleteCard(id: number) {
  try {
    await db.cards.delete(id);
  } catch (error) {
    console.error('Erro ao remover card:', error);
  }
}