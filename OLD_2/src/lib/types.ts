export interface CardDetailType {
  label: string;
  value: string;
  date?: string;
  type?: string;
  amount?: string;
}

export interface CardType {
  id?: number;
  title: string;
  type: 'credit' | 'debit' | 'both';
  color: string;
  creditValue: string;
  debitValue: string;
  details: any[]; // Defina um tipo mais específico se necessário
}