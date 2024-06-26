

export interface Hero {
  "id": string,
  "superhero": string,
  "publisher": Publisher,
  "alter_ego": string,
  "first_appearance": string,
  "characters": string,
  "alt_img"?: string
}

export enum Publisher {
  DCComics = 'DC Comics',
  MarvelComics = 'Marvel Comics'
}

export interface User {
  "id": number,
  "user": string,
  "email": string
}

export type HeroFormFields = 'superhero' | 'alter_ego' | 'characters' | 'first_appearance';
