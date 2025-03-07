import { Pokemon } from './pokemon.interface';

export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}
