import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { PokemonListResponse } from '../interface/pokemon-response.interface';
import { Pokemon } from '../interface/pokemon.interface';
import { PokemonDetail } from '../interface/pokemon-detail.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  private favoritePokemonSubject = new BehaviorSubject<any>(null);
  favoritePokemon$ = this.favoritePokemonSubject.asObservable();

  constructor(private http: HttpClient) {}

  getPokemons(limit: number, offset: number): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(
      `${this.baseUrl}?limit=${limit}&offset=${offset}`
    );
  }

  getPokemonDetail(nameOrId: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(`${this.baseUrl}/${nameOrId}`);
  }

  setFavoritePokemon(pokemon: PokemonDetail): void {
    console.log('Setting favorite pokemon', pokemon);
    this.favoritePokemonSubject.next(pokemon);
  }

  getAllPokemons(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(
      `${this.baseUrl}?limit=1300&offset=0`
    );
  }
}
