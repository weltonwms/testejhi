import { ITeacher, NewTeacher } from './teacher.model';

export const sampleWithRequiredData: ITeacher = {
  id: 1504,
};

export const sampleWithPartialData: ITeacher = {
  id: 32098,
};

export const sampleWithFullData: ITeacher = {
  id: 6893,
  descricao: 'spotless plait oh',
  email: 'Iliana84@gmail.com',
};

export const sampleWithNewData: NewTeacher = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
