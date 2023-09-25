import { Cat } from 'src/graphql';

export interface IHooman {
  id: number;
  firstname: string;
  lastname: string;
  cats: [Cat];
}
