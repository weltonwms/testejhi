import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '0db9878e-90eb-42ed-b4f2-e0f37607e607',
};

export const sampleWithPartialData: IAuthority = {
  name: '28584968-55cf-4e7d-84b8-1ce35ffb1b8e',
};

export const sampleWithFullData: IAuthority = {
  name: 'd317c223-a2c9-4594-96fa-748b721f5cf1',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
