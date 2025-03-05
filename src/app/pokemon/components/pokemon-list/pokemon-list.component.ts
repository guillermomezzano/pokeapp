// src/app/pokemon/components/pokemon-list/pokemon-list.component.ts
import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit, OnDestroy {
  @Output() pokemonSelected = new EventEmitter<string>();

  pokemons: any[] = [];
  filteredPokemons: any[] = [];

  limit = 20;
  offset = 0;
  totalPokemons = 0;
  searchTerm = '';

  private subscriptions: Subscription[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    const sub = this.pokemonService
      .getPokemons(this.limit, this.offset)
      .subscribe((response) => {
        this.pokemons = response.results;
        this.totalPokemons = response.count;
        this.applyFilter();
      });
    this.subscriptions.push(sub);
  }

  applyFilter(): void {
    if (!this.searchTerm) {
      this.filteredPokemons = this.pokemons;
    } else {
      this.filteredPokemons = this.pokemons.filter((p) =>
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  selectPokemon(name: string): void {
    this.pokemonSelected.emit(name);
  }

  nextPage(): void {
    if (this.offset + this.limit < this.totalPokemons) {
      this.offset += this.limit;
      this.loadPokemons();
    }
  }

  prevPage(): void {
    if (this.offset - this.limit >= 0) {
      this.offset -= this.limit;
      this.loadPokemons();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
