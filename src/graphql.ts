/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Hooman {
  id: number;
  firstname: string;
  lastname: string;
  cats: Cat[];
}

export class Cat {
  id: number;
  name: string;
  age: number;
}

export abstract class IQuery {
  abstract hooman(id: number): Nullable<Hooman> | Promise<Nullable<Hooman>>;
}

export class HoomanResolver {
  cats?: Nullable<Nullable<Cat>[]>;
}

type Nullable<T> = T | null;
