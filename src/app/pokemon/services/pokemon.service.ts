import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  // Aquí podríamos tener un BehaviorSubject para el favorito
  private favoritePokemonSubject = new BehaviorSubject<any>(null);
  favoritePokemon$ = this.favoritePokemonSubject.asObservable();

  constructor(private http: HttpClient) {}

  // 1. Obtener listado con paginación
  // limit y offset definen la paginación
  getPokemons(limit: number, offset: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}?limit=${limit}&offset=${offset}`
    );
  }

  // 2. Obtener detalle de un pokemon por nombre (o por id)
  getPokemonDetail(nameOrId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${nameOrId}`);
  }

  // 3. Setter para el pokemon favorito
  setFavoritePokemon(pokemon: any) {
    this.favoritePokemonSubject.next(pokemon);
  }

  getAllPokemons(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?limit=1300&offset=0`);
  }
}
