export interface ITeacher {
  id: number;
  descricao?: string | null;
  email?: string | null;
}

export type NewTeacher = Omit<ITeacher, 'id'> & { id: null };
