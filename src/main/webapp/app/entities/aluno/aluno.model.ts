export interface IAluno {
  id: number;
  descricao?: string | null;
  email?: string | null;
}

export type NewAluno = Omit<IAluno, 'id'> & { id: null };
