import { IAluno, NewAluno } from './aluno.model';

export const sampleWithRequiredData: IAluno = {
  id: 4734,
};

export const sampleWithPartialData: IAluno = {
  id: 8278,
  email: 'Allan70@hotmail.com',
};

export const sampleWithFullData: IAluno = {
  id: 19229,
  descricao: 'entomb huff regarding',
  email: 'Alanis_Hintz@hotmail.com',
};

export const sampleWithNewData: NewAluno = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
