// src/db/indexedDB.ts
export interface Card {
  id?: number; // Opcional, pois o Dexie pode gerar automaticamente
  title: string;
  type: string;
  color: string;
  creditValue: string;
  debitValue: string;
  details: Array<{ label: string; value: string }>;
}

// src/db/indexedDB.ts
import Dexie, { type Table } from 'dexie';

// Extende a classe Dexie para adicionar tipagem
class MyDatabase extends Dexie {
  cards!: Table<Card>; // Define a tabela "cards" com a interface Card

  constructor() {
    super('MyDatabase'); // Nome do banco de dados
    this.version(1).stores({
      cards: '++id, title, type, color', // ++id = auto-incremento
    });
  }
}

// Cria uma instância do banco de dados
const db = new MyDatabase();

// Exporta a instância e as funções CRUD
export default db;

// Função para adicionar um card
export async function addCard(card: Card) {
  await db.cards.add(card);
}

// Função para buscar todos os cards
export async function getCards(): Promise<Card[]> {
  return await db.cards.toArray();
}

// Função para atualizar um card
export async function updateCard(id: number, updates: Partial<Card>) {
  await db.cards.update(id, updates);
}

// Função para remover um card
export async function deleteCard(id: number) {
  await db.cards.delete(id);
}